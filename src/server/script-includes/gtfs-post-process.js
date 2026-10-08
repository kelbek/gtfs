/**
 * GtfsPostProcess — Section 5.4 + step 3 post-processing, run after the import
 * transforms have populated the staging feed and before validation/activation.
 *
 * run(feedId) performs, in order:
 *   1. resolveStopHierarchy  — parent_station (from the latest stops import set) + child_count
 *   2. buildServiceDays      — expand gtfs_calendar across its date range and apply
 *                              gtfs_cal_date exceptions into gtfs_service_day
 *   3. computeTripMetrics    — per-trip pass: stop_count, first/last stop, first_departure_sec,
 *                              last_arrival_sec, is_last_stop flag, trip_headsign fallback
 *   4. computeStatistics     — cnt_* counters and valid_from/until fallback from service days
 *
 * Performance notes (concept 5.4): the trip pass never iterates all ~2M stop_times. It
 * loops trips (~130k) and reads each trip's rows through the (trip, stop_sequence) index.
 * All writes use setWorkflow(false) — these tables carry no business rules.
 */
var GtfsPostProcess = Class.create()

GtfsPostProcess.T = {
    feed: 'x_msag_gtfs_schedu_feed',
    stop: 'x_msag_gtfs_schedu_stop',
    route: 'x_msag_gtfs_schedu_route',
    trip: 'x_msag_gtfs_schedu_trip',
    stopTime: 'x_msag_gtfs_schedu_stop_time',
    calendar: 'x_msag_gtfs_schedu_calendar',
    calDate: 'x_msag_gtfs_schedu_cal_date',
    serviceDay: 'x_msag_gtfs_schedu_service_day',
    impStops: 'x_msag_gtfs_schedu_imp_stops',
    impFeed: 'x_msag_gtfs_schedu_imp_feed',
}

GtfsPostProcess.prototype = {
    initialize: function () {},

    run: function (feedId) {
        if (!feedId) return 'no feed'
        this.resolveStopHierarchy(feedId)
        this.buildServiceDays(feedId)
        this.computeTripMetrics(feedId)
        this.computeStatistics(feedId)
        return 'post-processing complete for ' + feedId
    },

    // -------------------------------------------- 1. stop hierarchy (concept step 3)
    resolveStopHierarchy: function (feedId) {
        // stop_id → sys_id for this feed
        var idToSys = {}
        var sg = new GlideRecord(GtfsPostProcess.T.stop)
        sg.addQuery('feed', feedId)
        sg.query()
        while (sg.next()) idToSys[sg.getValue('stop_id')] = sg.getUniqueValue()

        // child stop_id → parent stop_id from the most recent stops import set
        var importSetId = this._latestImportSet(GtfsPostProcess.T.impStops)
        if (importSetId) {
            var ig = new GlideRecord(GtfsPostProcess.T.impStops)
            ig.addQuery('sys_import_set', importSetId)
            ig.addNotNullQuery('u_parent_station')
            ig.query()
            while (ig.next()) {
                var childSys = idToSys[ig.getValue('u_stop_id')]
                var parentSys = idToSys[ig.getValue('u_parent_station')]
                if (childSys && parentSys) {
                    var ug = new GlideRecord(GtfsPostProcess.T.stop)
                    if (ug.get(childSys)) {
                        ug.setValue('parent_station', parentSys)
                        ug.setWorkflow(false)
                        ug.update()
                    }
                }
            }
        }

        // child_count on each parent station
        var agg = new GlideAggregate(GtfsPostProcess.T.stop)
        agg.addQuery('feed', feedId)
        agg.addNotNullQuery('parent_station')
        agg.addAggregate('COUNT')
        agg.groupBy('parent_station')
        agg.query()
        while (agg.next()) {
            var pg = new GlideRecord(GtfsPostProcess.T.stop)
            if (pg.get(agg.getValue('parent_station'))) {
                pg.setValue('child_count', parseInt(agg.getAggregate('COUNT'), 10) || 0)
                pg.setWorkflow(false)
                pg.update()
            }
        }
    },

    // ----------------------------------------------------- 2. service days (5.4a)
    buildServiceDays: function (feedId) {
        // idempotent: clear any previously computed days for this feed
        var del = new GlideRecord(GtfsPostProcess.T.serviceDay)
        del.addQuery('feed', feedId)
        del.setWorkflow(false)
        del.deleteMultiple()

        var set = {} // 'service_id|yyyy-mm-dd' → true

        var cal = new GlideRecord(GtfsPostProcess.T.calendar)
        cal.addQuery('feed', feedId)
        cal.query()
        while (cal.next()) {
            var sid = cal.getValue('service_id')
            var start = cal.getValue('start_date')
            var end = cal.getValue('end_date')
            if (!sid || !start || !end) continue

            var flagByDow = {
                1: this._truthy(cal.getValue('monday')),
                2: this._truthy(cal.getValue('tuesday')),
                3: this._truthy(cal.getValue('wednesday')),
                4: this._truthy(cal.getValue('thursday')),
                5: this._truthy(cal.getValue('friday')),
                6: this._truthy(cal.getValue('saturday')),
                7: this._truthy(cal.getValue('sunday')),
            }

            var gdt = new GlideDateTime()
            gdt.setValue(start + ' 00:00:00')
            var guard = 0
            while (guard++ < 1000) {
                var dateStr = gdt.getDate().getValue()
                if (dateStr > end) break
                // getDayOfWeekUTC: 1 = Monday … 7 = Sunday
                if (flagByDow[gdt.getDayOfWeekUTC()]) set[sid + '|' + dateStr] = true
                gdt.addDaysUTC(1)
            }
        }

        // apply calendar_dates exceptions (1 = add, 2 = remove)
        var cd = new GlideRecord(GtfsPostProcess.T.calDate)
        cd.addQuery('feed', feedId)
        cd.query()
        while (cd.next()) {
            var key = cd.getValue('service_id') + '|' + cd.getValue('date')
            var ex = cd.getValue('exception_type')
            if (ex === '1') set[key] = true
            else if (ex === '2') delete set[key]
        }

        // write out
        for (var k in set) {
            if (!set.hasOwnProperty(k)) continue
            var parts = k.split('|')
            var sd = new GlideRecord(GtfsPostProcess.T.serviceDay)
            sd.initialize()
            sd.setValue('feed', feedId)
            sd.setValue('service_id', parts[0])
            sd.setValue('date', parts[1])
            sd.setWorkflow(false)
            sd.insert()
        }
    },

    // --------------------------------- 3. trip metrics + is_last_stop (5.4b + 5.4c)
    computeTripMetrics: function (feedId) {
        var tg = new GlideRecord(GtfsPostProcess.T.trip)
        tg.addQuery('feed', feedId)
        tg.query()
        while (tg.next()) {
            var st = new GlideRecord(GtfsPostProcess.T.stopTime)
            st.addQuery('trip', tg.getUniqueValue())
            st.orderBy('stop_sequence')
            st.query()

            var count = 0
            var firstStop = null
            var lastStop = null
            var firstDep = null
            var lastArr = null
            var lastRowSys = null
            while (st.next()) {
                count++
                if (count === 1) {
                    firstStop = st.getValue('stop')
                    firstDep = this._intOrNull(st.getValue('departure_sec'))
                }
                lastStop = st.getValue('stop')
                lastArr = this._intOrNull(st.getValue('arrival_sec'))
                lastRowSys = st.getUniqueValue()
            }
            if (count === 0) continue

            // flag the last stop (one targeted update per trip)
            if (lastRowSys) {
                var lg = new GlideRecord(GtfsPostProcess.T.stopTime)
                if (lg.get(lastRowSys)) {
                    lg.setValue('is_last_stop', true)
                    lg.setWorkflow(false)
                    lg.update()
                }
            }

            tg.setValue('stop_count', count)
            if (firstStop) tg.setValue('first_stop', firstStop)
            if (lastStop) tg.setValue('last_stop', lastStop)
            if (firstDep !== null) tg.setValue('first_departure_sec', firstDep)
            if (lastArr !== null) tg.setValue('last_arrival_sec', lastArr)
            if (!tg.getValue('trip_headsign') && lastStop) {
                var ns = new GlideRecord(GtfsPostProcess.T.stop)
                if (ns.get(lastStop)) tg.setValue('trip_headsign', ns.getValue('stop_name'))
            }
            tg.setWorkflow(false)
            tg.update()
        }
    },

    // ----------------------------------------------- 4. statistics + validity (5.4d)
    computeStatistics: function (feedId) {
        var fg = new GlideRecord(GtfsPostProcess.T.feed)
        if (!fg.get(feedId)) return

        fg.setValue('cnt_stops', this._count(GtfsPostProcess.T.stop, feedId))
        fg.setValue('cnt_routes', this._count(GtfsPostProcess.T.route, feedId))
        fg.setValue('cnt_trips', this._count(GtfsPostProcess.T.trip, feedId))
        fg.setValue('cnt_stop_times', this._count(GtfsPostProcess.T.stopTime, feedId))

        // Validity window. Recomputed every run (idempotent/self-healing). The publisher's
        // declared window in feed_info.txt wins when provided; otherwise we use the actual
        // service-day span, which is the true operating period the portal serves. This
        // avoids a misleading "valid_from == valid_until" when feed_info has no dates.
        var fi = this._feedInfoDates(feedId)
        var range = this._serviceDayRange(feedId)
        var validFrom = fi.from || range.min
        var validUntil = fi.until || range.max
        if (validFrom) fg.setValue('valid_from', validFrom)
        if (validUntil) fg.setValue('valid_until', validUntil)

        if (!fg.getValue('imported_on')) fg.setValue('imported_on', new GlideDateTime().getValue())
        fg.setWorkflow(false)
        fg.update()
    },

    // ------------------------------------------------------------------- helpers
    _latestImportSet: function (stagingTable) {
        var is = new GlideRecord('sys_import_set')
        is.addQuery('table_name', stagingTable)
        is.orderByDesc('sys_created_on')
        is.setLimit(1)
        is.query()
        return is.next() ? is.getUniqueValue() : ''
    },

    _count: function (table, feedId) {
        var ga = new GlideAggregate(table)
        ga.addQuery('feed', feedId)
        ga.addAggregate('COUNT')
        ga.query()
        return ga.next() ? parseInt(ga.getAggregate('COUNT'), 10) || 0 : 0
    },

    _serviceDayRange: function (feedId) {
        // NOTE: requesting MIN and MAX on the SAME field in one GlideAggregate returns the
        // same value for both (a known quirk), which previously made valid_until == valid_from.
        // Use two separate ordered single-row reads instead — reliable and index-friendly.
        var min = ''
        var max = ''
        var lo = new GlideRecord(GtfsPostProcess.T.serviceDay)
        lo.addQuery('feed', feedId)
        lo.orderBy('date')
        lo.setLimit(1)
        lo.query()
        if (lo.next()) min = lo.getValue('date')

        var hi = new GlideRecord(GtfsPostProcess.T.serviceDay)
        hi.addQuery('feed', feedId)
        hi.orderByDesc('date')
        hi.setLimit(1)
        hi.query()
        if (hi.next()) max = hi.getValue('date')

        return { min: min, max: max }
    },

    /**
     * Publisher-declared validity window from the latest feed_info.txt import set, if any.
     * feed_info is optional and often absent; returns empty strings when not provided, so
     * the caller falls back to the service-day span.
     */
    _feedInfoDates: function (feedId) {
        var out = { from: '', until: '' }
        var importSetId = this._latestImportSet(GtfsPostProcess.T.impFeed)
        if (!importSetId) return out
        var ig = new GlideRecord(GtfsPostProcess.T.impFeed)
        ig.addQuery('sys_import_set', importSetId)
        ig.setLimit(1)
        ig.query()
        if (ig.next()) {
            var u = new GtfsUtil()
            out.from = u.parseGtfsDate(ig.getValue('u_feed_start_date'))
            out.until = u.parseGtfsDate(ig.getValue('u_feed_end_date'))
        }
        return out
    },

    _truthy: function (v) {
        return v === '1' || v === 'true' || v === true
    },

    _intOrNull: function (v) {
        if (v === '' || v == null) return null
        var n = parseInt(v, 10)
        return isNaN(n) ? null : n
    },

    type: 'GtfsPostProcess',
}
