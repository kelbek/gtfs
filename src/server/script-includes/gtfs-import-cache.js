/**
 * GtfsImportCache — per-import-run state shared across transform rows (Section 5.3).
 *
 * Two responsibilities:
 *  1. In-memory lookup maps so the big transforms never do a per-row GlideRecord
 *     reference lookup (far too slow at 2M stop_times rows):
 *       route_id → { sys_id, short_name }
 *       trip_id  → { sys_id, route_sys_id, route_short_name, service_id, direction_id }
 *       stop_id  → sys_id
 *  2. The per-file row transform handlers (onStop, onRoute, onTrip, onStopTime, …)
 *     that set the `feed` reference, compute derived values and skip Flex rows.
 *
 * The maps and skip counters live on the constructor function (class-level), so they
 * survive across the many `new GtfsImportCache()` calls within a single transform
 * transaction, yet reset naturally between transform maps (each rebuilds what it needs
 * in its onStart). This is the "cache valid for the duration of the run" from 5.3.
 *
 * The "current feed" is read from a runtime system property set by GtfsImportRunner,
 * with a fallback that finds the in-progress (importing/staging) feed.
 *
 * NOT in scope here (Work Package 3): parent_station resolution, service days,
 * is_last_stop, trip metrics, validation rules, activation.
 */
var GtfsImportCache = Class.create()

GtfsImportCache.FEED_PROPERTY = 'x_msag_gtfs_schedu.import.current_feed'
GtfsImportCache.T = {
    feed: 'x_msag_gtfs_schedu_feed',
    stop: 'x_msag_gtfs_schedu_stop',
    route: 'x_msag_gtfs_schedu_route',
    trip: 'x_msag_gtfs_schedu_trip',
}

GtfsImportCache.prototype = {
    initialize: function () {
        this._u = new GtfsUtil()
    },

    // ---------------------------------------------------------------- current feed
    feedId: function () {
        if (!GtfsImportCache._feedId) {
            var fromProp = ''
            try {
                fromProp = gs.getProperty(GtfsImportCache.FEED_PROPERTY, '') || ''
            } catch (e) {
                fromProp = '' // properties API blocked in this context — use the in-progress feed instead
            }
            GtfsImportCache._feedId = fromProp ? String(fromProp) : this._findInProgressFeed()
        }
        return GtfsImportCache._feedId
    },

    /** Begin a fresh run: pin the feed and drop any cached maps/counters. */
    initRun: function (feedSysId) {
        GtfsImportCache._feedId = feedSysId ? String(feedSysId) : ''
        GtfsImportCache._routes = null
        GtfsImportCache._routesBySysId = null
        GtfsImportCache._trips = null
        GtfsImportCache._stops = null
        GtfsImportCache._counts = {}
        return this.feedId()
    },

    _findInProgressFeed: function () {
        var gr = new GlideRecord(GtfsImportCache.T.feed)
        gr.addQuery('status', 'IN', 'importing,staging')
        gr.orderByDesc('sys_created_on')
        gr.setLimit(1)
        gr.query()
        return gr.next() ? gr.getUniqueValue() : ''
    },

    // ------------------------------------------------------------------- counters
    count: function (key, by) {
        if (!GtfsImportCache._counts) GtfsImportCache._counts = {}
        GtfsImportCache._counts[key] = (GtfsImportCache._counts[key] || 0) + (by == null ? 1 : by)
        return GtfsImportCache._counts[key]
    },

    counts: function () {
        return GtfsImportCache._counts || {}
    },

    /** Append the current counters to the feed's validation_log, then reset them. */
    flushCounts: function (label) {
        var c = this.counts()
        var parts = []
        for (var k in c) {
            if (c.hasOwnProperty(k)) parts.push(k + '=' + c[k])
        }
        if (!parts.length) return
        var line = '[' + label + '] ' + parts.join(', ')
        var fg = new GlideRecord(GtfsImportCache.T.feed)
        if (fg.get(this.feedId())) {
            var existing = fg.getValue('validation_log') || ''
            fg.setValue('validation_log', existing ? existing + '\n' + line : line)
            fg.update()
        }
        GtfsImportCache._counts = {}
    },

    // ----------------------------------------------------------------- lookup maps
    loadRoutes: function () {
        var byId = {}
        var bySysId = {}
        var gr = new GlideRecord(GtfsImportCache.T.route)
        gr.addQuery('feed', this.feedId())
        gr.query()
        while (gr.next()) {
            var sysId = gr.getUniqueValue()
            var shortName = gr.getValue('route_short_name') || ''
            byId[gr.getValue('route_id')] = { sys_id: sysId, short_name: shortName }
            bySysId[sysId] = shortName
        }
        GtfsImportCache._routes = byId
        GtfsImportCache._routesBySysId = bySysId
        return byId
    },

    route: function (routeId) {
        if (!GtfsImportCache._routes) this.loadRoutes()
        return GtfsImportCache._routes[routeId] || null
    },

    loadStops: function () {
        var m = {}
        var gr = new GlideRecord(GtfsImportCache.T.stop)
        gr.addQuery('feed', this.feedId())
        gr.query()
        while (gr.next()) {
            m[gr.getValue('stop_id')] = gr.getUniqueValue()
        }
        GtfsImportCache._stops = m
        return m
    },

    stop: function (stopId) {
        if (!GtfsImportCache._stops) this.loadStops()
        return GtfsImportCache._stops[stopId] || null
    },

    loadTrips: function () {
        if (!GtfsImportCache._routesBySysId) this.loadRoutes()
        var bySysId = GtfsImportCache._routesBySysId
        var m = {}
        var gr = new GlideRecord(GtfsImportCache.T.trip)
        gr.addQuery('feed', this.feedId())
        gr.query()
        while (gr.next()) {
            var routeSysId = gr.getValue('route') || ''
            m[gr.getValue('trip_id')] = {
                sys_id: gr.getUniqueValue(),
                route_sys_id: routeSysId,
                route_short_name: bySysId[routeSysId] || '',
                service_id: gr.getValue('service_id') || '',
                direction_id: gr.getValue('direction_id') || '',
            }
        }
        GtfsImportCache._trips = m
        return m
    },

    trip: function (tripId) {
        if (!GtfsImportCache._trips) this.loadTrips()
        return GtfsImportCache._trips[tripId] || null
    },

    // -------------------------------------------------------- per-file row handlers
    // Each returns true to keep the row, false to skip it (caller sets `ignore=true`).

    /** agency.txt → gtfs_agency (direct field maps + feed scoping). */
    onAgency: function (source, target) {
        target.setValue('feed', this.feedId())
        return true
    },

    /**
     * feed_info.txt → gtfs_feed. The feed record already exists (created by the admin),
     * so instead of inserting we update it in place and skip the transform row.
     */
    onFeedInfo: function (source, target) {
        var fg = new GlideRecord(GtfsImportCache.T.feed)
        if (fg.get(this.feedId())) {
            fg.setValue('publisher_name', source.getValue('u_feed_publisher_name'))
            fg.setValue('publisher_url', source.getValue('u_feed_publisher_url'))
            fg.setValue('feed_lang', source.getValue('u_feed_lang'))
            fg.setValue('feed_version', source.getValue('u_feed_version'))
            fg.setValue('contact_email', source.getValue('u_feed_contact_email'))
            fg.setValue('contact_url', source.getValue('u_feed_contact_url'))
            var vf = this._u.parseGtfsDate(source.getValue('u_feed_start_date'))
            var vu = this._u.parseGtfsDate(source.getValue('u_feed_end_date'))
            if (vf) fg.setValue('valid_from', vf)
            if (vu) fg.setValue('valid_until', vu)
            fg.update()
        }
        return false // never insert a row into gtfs_feed
    },

    /** stops.txt → gtfs_stop (parent_station resolved later in WP3). */
    onStop: function (source, target) {
        target.setValue('feed', this.feedId())
        var lt = source.getValue('u_location_type')
        lt = lt === '' || lt == null ? '0' : lt
        target.setValue('location_type', lt)
        var wb = source.getValue('u_wheelchair_boarding')
        wb = wb === '' || wb == null ? '0' : wb
        target.setValue('wheelchair_boarding', wb)
        target.setValue('stop_name_search', this._u.normalizeSearchName(source.getValue('u_stop_name')))
        target.setValue('is_searchable', lt === '0' || lt === '1')
        return true
    },

    /** routes.txt → gtfs_route (display_name, mode_group, color defaults). */
    onRoute: function (source, target) {
        target.setValue('feed', this.feedId())
        var sh = source.getValue('u_route_short_name')
        var lo = source.getValue('u_route_long_name')
        target.setValue('display_name', sh ? sh : lo)
        target.setValue('mode_group', this._u.modeGroup(source.getValue('u_route_type')))
        target.setValue('color_bg', this._u.colorBg(source.getValue('u_route_color')))
        target.setValue('color_fg', this._u.colorFg(source.getValue('u_route_text_color')))
        return true
    },

    /** calendar.txt → gtfs_calendar (weekday booleans, date parsing). */
    onCalendar: function (source, target) {
        target.setValue('feed', this.feedId())
        var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        for (var i = 0; i < days.length; i++) {
            target.setValue(days[i], this._u.gtfsBool(source.getValue('u_' + days[i])))
        }
        target.setValue('start_date', this._u.parseGtfsDate(source.getValue('u_start_date')))
        target.setValue('end_date', this._u.parseGtfsDate(source.getValue('u_end_date')))
        return true
    },

    /** calendar_dates.txt → gtfs_cal_date (date parsing; exception_type via field map). */
    onCalendarDate: function (source, target) {
        target.setValue('feed', this.feedId())
        target.setValue('date', this._u.parseGtfsDate(source.getValue('u_date')))
        return true
    },

    /** trips.txt → gtfs_trip (resolve route via the cache; metrics are WP3). */
    onTrip: function (source, target) {
        var r = this.route(source.getValue('u_route_id'))
        if (!r) {
            this.count('missing_route')
            return false
        }
        target.setValue('feed', this.feedId())
        target.setValue('route', r.sys_id)
        return true
    },

    /** stop_times.txt → gtfs_stop_time (the hot path — Section 5.3 pseudocode). */
    onStopTime: function (source, target) {
        var t = this.trip(source.getValue('u_trip_id'))
        if (!t) {
            this.count('missing_trip')
            return false
        }
        // Skip Flex rows (not supported in the MVP).
        if (source.getValue('u_location_id') || source.getValue('u_location_group_id')) {
            this.count('flex_skipped')
            return false
        }
        var stopSysId = this.stop(source.getValue('u_stop_id'))
        if (!stopSysId) {
            this.count('missing_stop')
            return false
        }

        target.setValue('feed', this.feedId())
        target.setValue('trip', t.sys_id)
        target.setValue('stop', stopSysId)
        target.setValue('route', t.route_sys_id)
        target.setValue('route_short_name', t.route_short_name)
        target.setValue('service_id', t.service_id)
        target.setValue('direction_id', t.direction_id)

        var asec = this._u.toSeconds(source.getValue('u_arrival_time'))
        if (asec !== null) target.setValue('arrival_sec', asec)
        var dsec = this._u.toSeconds(source.getValue('u_departure_time'))
        if (dsec !== null) target.setValue('departure_sec', dsec)

        var pt = source.getValue('u_pickup_type')
        target.setValue('pickup_type', pt === '' || pt == null ? '0' : pt)
        var dt = source.getValue('u_drop_off_type')
        target.setValue('drop_off_type', dt === '' || dt == null ? '0' : dt)
        var tp = source.getValue('u_timepoint')
        target.setValue('timepoint', tp === '' || tp == null ? '1' : tp)

        target.setValue('is_last_stop', false) // WP3 flags the real last stop per trip
        this.count('inserted')
        return true
    },

    type: 'GtfsImportCache',
}
