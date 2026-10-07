/**
 * GtfsPublicService — the ONLY path anonymous portal widgets use to reach GTFS data
 * (Work Package 5, Sections 6 and 7.5).
 *
 * Security model (7.5), enforced in code because GlideRecord bypasses ACLs:
 *  - Not client-callable and package_private — only same-scope widget server scripts call it.
 *  - Every method is a fixed whitelist entry; inputs are type-checked and hard-bounded.
 *  - Filtering is ONLY ever addQuery(field, operator, value) — user input is never used to
 *    build an encoded query, so GTFS ids containing ^ = ' % cannot alter a query.
 *  - Every read is scoped to the single active feed.
 *  - Returns only portal-displayed fields plus GTFS business ids (stop_id/route_id/trip_id);
 *    never sys_ids or internal fields.
 *
 * Review of this file is a mandatory go-live checkpoint (7.5).
 */
var GtfsPublicService = Class.create()

GtfsPublicService.T = {
    feed: 'x_msag_gtfs_schedu_feed',
    agency: 'x_msag_gtfs_schedu_agency',
    stop: 'x_msag_gtfs_schedu_stop',
    route: 'x_msag_gtfs_schedu_route',
    trip: 'x_msag_gtfs_schedu_trip',
    stopTime: 'x_msag_gtfs_schedu_stop_time',
    serviceDay: 'x_msag_gtfs_schedu_service_day',
}

GtfsPublicService.LIMITS = {
    SEARCH_MIN: 3,
    SEARCH_MAX: 40,
    SEARCH_RESULTS: 20,
    NEARBY_RESULTS: 20,
    NEARBY_RADIUS_MAX: 2000, // metres
    DEPARTURES_DEFAULT: 20,
    DEPARTURES_MAX: 50,
    ROUTES_MAX: 500,
    ROUTE_TRIPS_MAX: 300,
    TRIP_STOPS_MAX: 150,
}

GtfsPublicService.prototype = {
    initialize: function () {
        this._u = new GtfsUtil()
        this._feedId = null
        this._feedGr = null
        // per-call de-dupe caches (never leak sys_ids outward)
        this._routeCache = {}
        this._tripCache = {}
        this._stopCache = {}
    },

    // ================================================================= feed info
    getFeedInfo: function () {
        var feed = this._feed()
        if (!feed) return null
        var info = {
            name: feed.getValue('name'),
            feed_version: feed.getValue('feed_version'),
            publisher_name: feed.getValue('publisher_name'),
            publisher_url: feed.getValue('publisher_url'),
            feed_lang: feed.getValue('feed_lang'),
            contact_email: feed.getValue('contact_email'),
            contact_url: feed.getValue('contact_url'),
            valid_from: feed.getValue('valid_from'),
            valid_until: feed.getValue('valid_until'),
            agency_timezone: feed.getValue('agency_timezone'),
            license_text: feed.getValue('license_text'),
            agency: null,
        }
        var ag = new GlideRecord(GtfsPublicService.T.agency)
        ag.addQuery('feed', this._feedId)
        ag.setLimit(1)
        ag.query()
        if (ag.next()) {
            info.agency = {
                agency_name: ag.getValue('agency_name'),
                agency_url: ag.getValue('agency_url'),
                agency_timezone: ag.getValue('agency_timezone'),
                agency_lang: ag.getValue('agency_lang'),
                agency_phone: ag.getValue('agency_phone'),
                agency_email: ag.getValue('agency_email'),
                agency_fare_url: ag.getValue('agency_fare_url'),
            }
        }
        return info
    },

    // ================================================================= stop search
    searchStops: function (q) {
        var raw = this._str(q, GtfsPublicService.LIMITS.SEARCH_MAX)
        if (raw.length < GtfsPublicService.LIMITS.SEARCH_MIN) return []
        if (!this._feedId && !this._feed()) return []

        var norm = this._u.normalizeSearchName(raw)
        if (norm.length < GtfsPublicService.LIMITS.SEARCH_MIN) return []

        var max = GtfsPublicService.LIMITS.SEARCH_RESULTS
        var found = {} // stop_id -> result (de-dupe)
        var order = [] // preserve insertion with rank

        var self = this
        function collect(operator, rank) {
            if (order.length >= max) return
            var gr = new GlideRecord(GtfsPublicService.T.stop)
            gr.addQuery('feed', self._feedId)
            gr.addQuery('is_searchable', true)
            gr.addQuery('stop_name_search', operator, norm)
            gr.orderBy('stop_name')
            gr.setLimit(max * 2)
            gr.query()
            while (gr.next() && order.length < max) {
                var sid = gr.getValue('stop_id')
                if (found[sid]) continue
                var row = self._stopSearchRow(gr, rank)
                found[sid] = row
                order.push(row)
            }
        }

        collect('STARTSWITH', 0)
        if (order.length < max) collect('CONTAINS', 1)

        // exact stop_code match (treated as a strong/prefix-rank hit)
        if (order.length < max) {
            var cg = new GlideRecord(GtfsPublicService.T.stop)
            cg.addQuery('feed', this._feedId)
            cg.addQuery('is_searchable', true)
            cg.addQuery('stop_code', raw)
            cg.setLimit(max)
            cg.query()
            while (cg.next() && order.length < max) {
                var cid = cg.getValue('stop_id')
                if (found[cid]) continue
                var crow = this._stopSearchRow(cg, 0)
                found[cid] = crow
                order.push(crow)
            }
        }

        // relevance: prefix first, stations before platforms, then alphabetical
        order.sort(function (a, b) {
            if (a._rank !== b._rank) return a._rank - b._rank
            if (a._station !== b._station) return a._station ? -1 : 1
            return a.stop_name < b.stop_name ? -1 : a.stop_name > b.stop_name ? 1 : 0
        })

        var out = []
        for (var i = 0; i < order.length && i < max; i++) {
            out.push({
                stop_id: order[i].stop_id,
                stop_name: order[i].stop_name,
                stop_code: order[i].stop_code,
                location_type: order[i].location_type,
                is_station: order[i]._station,
            })
        }
        return out
    },

    _stopSearchRow: function (gr, rank) {
        var lt = gr.getValue('location_type') || '0'
        return {
            stop_id: gr.getValue('stop_id'),
            stop_name: gr.getValue('stop_name'),
            stop_code: gr.getValue('stop_code'),
            location_type: lt,
            _station: lt === '1',
            _rank: rank,
        }
    },

    // ================================================================= nearby search
    getNearbyStops: function (lat, lon, radius) {
        if (!this._feed()) return []
        var latNum = this._float(lat, null)
        var lonNum = this._float(lon, null)
        if (latNum === null || lonNum === null) return []
        if (latNum < -90 || latNum > 90 || lonNum < -180 || lonNum > 180) return []
        var r = this._int(radius, 1000, 1, GtfsPublicService.LIMITS.NEARBY_RADIUS_MAX)

        var latDelta = r / 111320
        var cosLat = Math.cos((latNum * Math.PI) / 180)
        var lonDelta = r / (111320 * (Math.abs(cosLat) < 0.000001 ? 0.000001 : Math.abs(cosLat)))

        var gr = new GlideRecord(GtfsPublicService.T.stop)
        gr.addQuery('feed', this._feedId)
        gr.addQuery('is_searchable', true)
        gr.addQuery('stop_lat', '>=', latNum - latDelta)
        gr.addQuery('stop_lat', '<=', latNum + latDelta)
        gr.addQuery('stop_lon', '>=', lonNum - lonDelta)
        gr.addQuery('stop_lon', '<=', lonNum + lonDelta)
        gr.setLimit(200)
        gr.query()

        var hits = []
        while (gr.next()) {
            var sLat = parseFloat(gr.getValue('stop_lat'))
            var sLon = parseFloat(gr.getValue('stop_lon'))
            if (isNaN(sLat) || isNaN(sLon)) continue
            var dist = this._haversine(latNum, lonNum, sLat, sLon)
            if (dist > r) continue
            hits.push({
                stop_id: gr.getValue('stop_id'),
                stop_name: gr.getValue('stop_name'),
                location_type: gr.getValue('location_type') || '0',
                stop_lat: sLat,
                stop_lon: sLon,
                distance_m: Math.round(dist),
            })
        }
        hits.sort(function (a, b) {
            return a.distance_m - b.distance_m
        })
        return hits.slice(0, GtfsPublicService.LIMITS.NEARBY_RESULTS)
    },

    _haversine: function (lat1, lon1, lat2, lon2) {
        var R = 6371000
        var toRad = Math.PI / 180
        var dLat = (lat2 - lat1) * toRad
        var dLon = (lon2 - lon1) * toRad
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * toRad) * Math.cos(lat2 * toRad) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    },

    // ================================================================= stop detail
    getStop: function (stopId) {
        var stop = this._stopByBusinessId(stopId)
        if (!stop) return null

        var isStation = stop.getValue('location_type') === '1'
        var result = {
            stop_id: stop.getValue('stop_id'),
            stop_name: stop.getValue('stop_name'),
            stop_code: stop.getValue('stop_code'),
            stop_desc: stop.getValue('stop_desc'),
            location_type: stop.getValue('location_type') || '0',
            platform_code: stop.getValue('platform_code'),
            wheelchair_boarding: stop.getValue('wheelchair_boarding') || '0',
            zone_id: stop.getValue('zone_id'),
            stop_lat: stop.getValue('stop_lat'),
            stop_lon: stop.getValue('stop_lon'),
            is_station: isStation,
            parent_station: '',
            children: [],
            routes: [],
        }

        var parentSys = stop.getValue('parent_station')
        if (parentSys) {
            var pg = new GlideRecord(GtfsPublicService.T.stop)
            if (pg.get(parentSys)) result.parent_station = pg.getValue('stop_id')
        }

        if (isStation) {
            var cg = new GlideRecord(GtfsPublicService.T.stop)
            cg.addQuery('feed', this._feedId)
            cg.addQuery('parent_station', stop.getUniqueValue())
            cg.orderBy('platform_code')
            cg.setLimit(200)
            cg.query()
            while (cg.next()) {
                result.children.push({
                    stop_id: cg.getValue('stop_id'),
                    stop_name: cg.getValue('stop_name'),
                    platform_code: cg.getValue('platform_code'),
                })
            }
        }

        result.routes = this._routesServingStop(this._resolveStopScope(stop))
        return result
    },

    _routesServingStop: function (stopSysIds) {
        var out = []
        if (!stopSysIds.length) return out
        var seen = {}
        var ga = new GlideAggregate(GtfsPublicService.T.stopTime)
        ga.addQuery('feed', this._feedId)
        ga.addQuery('stop', 'IN', stopSysIds.join(','))
        ga.groupBy('route')
        ga.query()
        var routeSysIds = []
        while (ga.next()) {
            var rs = ga.getValue('route')
            if (rs && !seen[rs]) {
                seen[rs] = true
                routeSysIds.push(rs)
            }
            if (routeSysIds.length >= 100) break
        }
        for (var i = 0; i < routeSysIds.length; i++) {
            var r = this._route(routeSysIds[i])
            if (r) out.push(this._routeBadge(r))
        }
        out.sort(function (a, b) {
            return a.display_name < b.display_name ? -1 : a.display_name > b.display_name ? 1 : 0
        })
        return out
    },

    // ================================================================= routes
    getRoutes: function () {
        if (!this._feed()) return []
        var out = []
        var gr = new GlideRecord(GtfsPublicService.T.route)
        gr.addQuery('feed', this._feedId)
        gr.orderBy('route_sort_order')
        gr.orderBy('display_name')
        gr.setLimit(GtfsPublicService.LIMITS.ROUTES_MAX)
        gr.query()
        while (gr.next()) {
            out.push(
                this._routeBadge({
                    route_id: gr.getValue('route_id'),
                    route_short_name: gr.getValue('route_short_name'),
                    route_long_name: gr.getValue('route_long_name'),
                    display_name: gr.getValue('display_name'),
                    mode_group: gr.getValue('mode_group'),
                    color_bg: gr.getValue('color_bg'),
                    color_fg: gr.getValue('color_fg'),
                }),
            )
        }
        return out
    },

    getRoute: function (routeId) {
        var route = this._routeByBusinessId(routeId)
        if (!route) return null
        var routeSys = route.getUniqueValue()
        var badge = this._routeBadge({
            route_id: route.getValue('route_id'),
            route_short_name: route.getValue('route_short_name'),
            route_long_name: route.getValue('route_long_name'),
            display_name: route.getValue('display_name'),
            mode_group: route.getValue('mode_group'),
            color_bg: route.getValue('color_bg'),
            color_fg: route.getValue('color_fg'),
        })

        // distinct directions used on this route
        var directions = []
        var dirSeen = {}
        var dg = new GlideAggregate(GtfsPublicService.T.trip)
        dg.addQuery('feed', this._feedId)
        dg.addQuery('route', routeSys)
        dg.groupBy('direction_id')
        dg.query()
        while (dg.next()) {
            var d = dg.getValue('direction_id') || ''
            if (!dirSeen[d]) {
                dirSeen[d] = true
                directions.push(d)
            }
        }
        if (!directions.length) directions = ['']

        var result = { route: badge, directions: [] }
        for (var i = 0; i < directions.length; i++) {
            result.directions.push(this._representativeDirection(routeSys, directions[i]))
        }
        return result
    },

    _representativeDirection: function (routeSys, directionId) {
        // representative trip = the one with the most stops in this direction
        var tg = new GlideRecord(GtfsPublicService.T.trip)
        tg.addQuery('feed', this._feedId)
        tg.addQuery('route', routeSys)
        if (directionId === '') tg.addNullQuery('direction_id')
        else tg.addQuery('direction_id', directionId)
        tg.orderByDesc('stop_count')
        tg.setLimit(1)
        tg.query()
        var dir = { direction_id: directionId, headsign: '', stops: [] }
        if (!tg.next()) return dir
        dir.headsign = tg.getValue('trip_headsign')
        dir.stops = this._tripStopSequence(tg.getUniqueValue())
        return dir
    },

    getRouteTrips: function (routeId, directionId, date) {
        var route = this._routeByBusinessId(routeId)
        if (!route) return []
        var day = this._u.isIsoDate(date) ? date : this._u.localNow().date
        var services = this._serviceIds(day)
        if (!services.length) return []
        var dir = this._direction(directionId)

        var out = []
        var gr = new GlideRecord(GtfsPublicService.T.trip)
        gr.addQuery('feed', this._feedId)
        gr.addQuery('route', route.getUniqueValue())
        if (dir !== null) gr.addQuery('direction_id', dir)
        gr.addQuery('service_id', 'IN', services.join(','))
        gr.orderBy('first_departure_sec')
        gr.setLimit(GtfsPublicService.LIMITS.ROUTE_TRIPS_MAX)
        gr.query()
        while (gr.next()) {
            var dep = this._u.formatHhmm(gr.getValue('first_departure_sec'))
            out.push({
                trip_id: gr.getValue('trip_id'),
                direction_id: gr.getValue('direction_id') || '',
                headsign: gr.getValue('trip_headsign'),
                start_stop: this._stopName(gr.getValue('first_stop')),
                departure: dep.text,
                departure_next_day: dep.nextDay,
            })
        }
        return out
    },

    // ================================================================= trip detail
    getTrip: function (tripId) {
        var trip = this._tripByBusinessId(tripId)
        if (!trip) return null
        var routeBadge = null
        var routeSys = trip.getValue('route')
        if (routeSys) {
            var r = this._route(routeSys)
            if (r) routeBadge = this._routeBadge(r)
        }
        return {
            trip_id: trip.getValue('trip_id'),
            trip_headsign: trip.getValue('trip_headsign'),
            trip_short_name: trip.getValue('trip_short_name'),
            direction_id: trip.getValue('direction_id') || '',
            wheelchair_accessible: trip.getValue('wheelchair_accessible') || '0',
            bikes_allowed: trip.getValue('bikes_allowed') || '0',
            route: routeBadge,
            stops: this._tripStopSequence(trip.getUniqueValue()),
        }
    },

    _tripStopSequence: function (tripSys) {
        var stops = []
        var gr = new GlideRecord(GtfsPublicService.T.stopTime)
        gr.addQuery('feed', this._feedId)
        gr.addQuery('trip', tripSys)
        gr.orderBy('stop_sequence')
        gr.setLimit(GtfsPublicService.LIMITS.TRIP_STOPS_MAX)
        gr.query()
        while (gr.next()) {
            var mini = this._stopMini(gr.getValue('stop'))
            var arr = this._u.formatHhmm(gr.getValue('arrival_sec'))
            var dep = this._u.formatHhmm(gr.getValue('departure_sec'))
            stops.push({
                stop_id: mini ? mini.stop_id : '',
                stop_name: mini ? mini.stop_name : '',
                platform_code: mini ? mini.platform_code : '',
                stop_sequence: parseInt(gr.getValue('stop_sequence'), 10) || 0,
                arrival: arr.text || '–',
                arrival_next_day: arr.nextDay,
                departure: dep.text || '–',
                departure_next_day: dep.nextDay,
                timepoint: gr.getValue('timepoint') || '1',
                is_last_stop: gr.getValue('is_last_stop') === 'true' || gr.getValue('is_last_stop') === true,
            })
        }
        return stops
    },

    // ================================================================= departures
    getDepartures: function (stopId, date, timeSec, limit, routeId) {
        var feed = this._feed()
        if (!feed) return { stop: null, departures: [] }
        var stop = this._stopByBusinessId(stopId)
        if (!stop) return { stop: null, departures: [] }

        var lim = this._int(limit, GtfsPublicService.LIMITS.DEPARTURES_DEFAULT, 1, GtfsPublicService.LIMITS.DEPARTURES_MAX)
        var now = this._u.localNow()
        var day = this._u.isIsoDate(date) ? date : now.date
        var fromSec = this._int(timeSec, now.sec, 0, 129599) // allow a wide window; service times can exceed 24h

        var scope = this._resolveStopScope(stop)
        var routeRec = routeId ? this._routeByBusinessId(routeId) : null
        if (routeId && !routeRec) return { stop: this._stopHeader(stop), departures: [] }

        var passes = [
            { dayOffset: 0, secOffset: 0 }, // today's services from `fromSec`
            { dayOffset: -1, secOffset: 86400 }, // yesterday's after-midnight trips (> 24:00:00)
        ]

        var collected = []
        for (var p = 0; p < passes.length; p++) {
            var pass = passes[p]
            var serviceDay = this._u.addDays(day, pass.dayOffset)
            var services = this._serviceIds(serviceDay)
            if (!services.length) continue

            var gr = new GlideRecord(GtfsPublicService.T.stopTime)
            gr.addQuery('feed', this._feedId)
            gr.addQuery('stop', 'IN', scope.join(','))
            gr.addQuery('service_id', 'IN', services.join(','))
            gr.addQuery('departure_sec', '>=', fromSec + pass.secOffset)
            gr.addQuery('is_last_stop', false)
            gr.addQuery('pickup_type', '!=', '1')
            if (routeRec) gr.addQuery('route', routeRec.getUniqueValue())
            gr.orderBy('departure_sec')
            gr.setLimit(lim)
            gr.query()
            while (gr.next()) {
                collected.push(this._departureRow(gr, pass.secOffset))
            }
        }

        collected.sort(function (a, b) {
            return a._effective - b._effective
        })
        var departures = []
        for (var i = 0; i < collected.length && i < lim; i++) {
            delete collected[i]._effective
            departures.push(collected[i])
        }
        return { stop: this._stopHeader(stop), departures: departures }
    },

    _departureRow: function (gr, secOffset) {
        var effective = (parseInt(gr.getValue('departure_sec'), 10) || 0) - secOffset
        var fmt = this._u.formatHhmm(effective)
        var trip = this._trip(gr.getValue('trip'))
        var route = this._route(gr.getValue('route'))
        var mini = this._stopMini(gr.getValue('stop'))
        var destination = gr.getValue('stop_headsign')
        if (!destination && trip) destination = trip.trip_headsign
        return {
            trip_id: trip ? trip.trip_id : '',
            route_id: route ? route.route_id : '',
            route_short_name: gr.getValue('route_short_name') || (route ? route.route_short_name : ''),
            color_bg: route ? route.color_bg : 'FFFFFF',
            color_fg: route ? route.color_fg_safe : '000000',
            mode_group: route ? route.mode_group : '',
            destination: destination,
            departure: fmt.text,
            departure_next_day: fmt.nextDay,
            platform_code: mini ? mini.platform_code : '',
            wheelchair_accessible: trip ? trip.wheelchair_accessible : '0',
            _effective: effective,
        }
    },

    _stopHeader: function (stop) {
        return {
            stop_id: stop.getValue('stop_id'),
            stop_name: stop.getValue('stop_name'),
            location_type: stop.getValue('location_type') || '0',
            platform_code: stop.getValue('platform_code'),
        }
    },

    // ================================================================= internals
    _feed: function () {
        if (this._feedGr) return this._feedGr
        var gr = new GlideRecord(GtfsPublicService.T.feed)
        gr.addQuery('status', 'active')
        gr.orderByDesc('activated_on')
        gr.setLimit(1)
        gr.query()
        if (gr.next()) {
            this._feedGr = gr
            this._feedId = gr.getUniqueValue()
            return gr
        }
        return null
    },

    _resolveStopScope: function (stop) {
        // station → all child platforms (+ the station itself); otherwise just the stop
        var ids = [stop.getUniqueValue()]
        if (stop.getValue('location_type') === '1') {
            var cg = new GlideRecord(GtfsPublicService.T.stop)
            cg.addQuery('feed', this._feedId)
            cg.addQuery('parent_station', stop.getUniqueValue())
            cg.setLimit(500)
            cg.query()
            while (cg.next()) ids.push(cg.getUniqueValue())
        }
        return ids
    },

    _serviceIds: function (isoDate) {
        var ids = []
        if (!this._u.isIsoDate(isoDate)) return ids
        var seen = {}
        var gr = new GlideRecord(GtfsPublicService.T.serviceDay)
        gr.addQuery('feed', this._feedId)
        gr.addQuery('date', isoDate)
        gr.setLimit(1000)
        gr.query()
        while (gr.next()) {
            var sid = gr.getValue('service_id')
            if (sid && !seen[sid]) {
                seen[sid] = true
                ids.push(sid)
            }
        }
        return ids
    },

    _stopByBusinessId: function (stopId) {
        var id = this._str(stopId, 255)
        if (!id || !this._feed()) return null
        var gr = new GlideRecord(GtfsPublicService.T.stop)
        gr.addQuery('feed', this._feedId)
        gr.addQuery('stop_id', id)
        gr.setLimit(1)
        gr.query()
        return gr.next() ? gr : null
    },

    _routeByBusinessId: function (routeId) {
        var id = this._str(routeId, 255)
        if (!id || !this._feed()) return null
        var gr = new GlideRecord(GtfsPublicService.T.route)
        gr.addQuery('feed', this._feedId)
        gr.addQuery('route_id', id)
        gr.setLimit(1)
        gr.query()
        return gr.next() ? gr : null
    },

    _tripByBusinessId: function (tripId) {
        var id = this._str(tripId, 255)
        if (!id || !this._feed()) return null
        var gr = new GlideRecord(GtfsPublicService.T.trip)
        gr.addQuery('feed', this._feedId)
        gr.addQuery('trip_id', id)
        gr.setLimit(1)
        gr.query()
        return gr.next() ? gr : null
    },

    _route: function (routeSys) {
        if (!routeSys) return null
        if (this._routeCache[routeSys]) return this._routeCache[routeSys]
        var gr = new GlideRecord(GtfsPublicService.T.route)
        if (!gr.get(routeSys)) return null
        var r = {
            route_id: gr.getValue('route_id'),
            route_short_name: gr.getValue('route_short_name'),
            route_long_name: gr.getValue('route_long_name'),
            display_name: gr.getValue('display_name'),
            mode_group: gr.getValue('mode_group'),
            color_bg: gr.getValue('color_bg'),
            color_fg: gr.getValue('color_fg'),
        }
        this._routeCache[routeSys] = r
        return r
    },

    _trip: function (tripSys) {
        if (!tripSys) return null
        if (this._tripCache[tripSys]) return this._tripCache[tripSys]
        var gr = new GlideRecord(GtfsPublicService.T.trip)
        if (!gr.get(tripSys)) return null
        var t = {
            trip_id: gr.getValue('trip_id'),
            trip_headsign: gr.getValue('trip_headsign'),
            wheelchair_accessible: gr.getValue('wheelchair_accessible') || '0',
            direction_id: gr.getValue('direction_id') || '',
        }
        this._tripCache[tripSys] = t
        return t
    },

    _stopMini: function (stopSys) {
        if (!stopSys) return null
        if (this._stopCache[stopSys]) return this._stopCache[stopSys]
        var gr = new GlideRecord(GtfsPublicService.T.stop)
        if (!gr.get(stopSys)) return null
        var s = {
            stop_id: gr.getValue('stop_id'),
            stop_name: gr.getValue('stop_name'),
            platform_code: gr.getValue('platform_code'),
            location_type: gr.getValue('location_type') || '0',
        }
        this._stopCache[stopSys] = s
        return s
    },

    _stopName: function (stopSys) {
        var mini = this._stopMini(stopSys)
        return mini ? mini.stop_name : ''
    },

    _routeBadge: function (r) {
        var bg = this._u.colorBg(r.color_bg)
        var fg = this._u.colorFg(r.color_fg)
        return {
            route_id: r.route_id,
            route_short_name: r.route_short_name,
            route_long_name: r.route_long_name,
            display_name: r.display_name,
            mode_group: r.mode_group,
            color_bg: bg,
            color_fg: fg,
            color_fg_safe: this._u.contrastColor(bg, fg),
        }
    },

    // --- input guards (7.5) ---
    _str: function (v, maxLen) {
        if (v === null || v === undefined) return ''
        var s = String(v).trim()
        if (maxLen && s.length > maxLen) s = s.substring(0, maxLen)
        return s
    },

    _int: function (v, def, min, max) {
        var n = parseInt(v, 10)
        if (isNaN(n)) return def
        if (min !== undefined && n < min) n = min
        if (max !== undefined && n > max) n = max
        return n
    },

    _float: function (v, def) {
        if (v === null || v === undefined || v === '') return def
        var n = parseFloat(v)
        return isNaN(n) ? def : n
    },

    /** direction: 0 or 1 → that value; anything else → null (no filter). */
    _direction: function (v) {
        var s = this._str(v, 1)
        return s === '0' || s === '1' ? s : null
    },

    type: 'GtfsPublicService',
}
