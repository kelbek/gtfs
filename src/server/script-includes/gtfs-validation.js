/**
 * GtfsValidation — Section 5.5 validation, run after post-processing and before
 * activation. validate(feedId) evaluates every rule, appends a report to
 * gtfs_feed.validation_log, and returns { hasErrors, errors[], warnings[] }.
 * Only a feed with no errors may be activated (enforced by GtfsLifecycle).
 */
var GtfsValidation = Class.create()

GtfsValidation.T = {
    feed: 'x_msag_gtfs_schedu_feed',
    stop: 'x_msag_gtfs_schedu_stop',
    route: 'x_msag_gtfs_schedu_route',
    trip: 'x_msag_gtfs_schedu_trip',
    stopTime: 'x_msag_gtfs_schedu_stop_time',
    serviceDay: 'x_msag_gtfs_schedu_service_day',
    impStimes: 'x_msag_gtfs_schedu_imp_stimes',
}

GtfsValidation.DISCARD_THRESHOLD = 0.001 // 0.1 %
GtfsValidation.DEVIATION_THRESHOLD = 0.3 // 30 %

GtfsValidation.prototype = {
    initialize: function () {},

    validate: function (feedId) {
        var errors = []
        var warnings = []
        if (!feedId) return { hasErrors: true, errors: ['no feed'], warnings: [] }

        var cStops = this._count(GtfsValidation.T.stop, feedId)
        var cRoutes = this._count(GtfsValidation.T.route, feedId)
        var cTrips = this._count(GtfsValidation.T.trip, feedId)
        var cStopTimes = this._count(GtfsValidation.T.stopTime, feedId)

        // 1. each core table must have > 0 rows (error → abort)
        if (cStops === 0) errors.push('gtfs_stop has no rows')
        if (cRoutes === 0) errors.push('gtfs_route has no rows')
        if (cTrips === 0) errors.push('gtfs_trip has no rows')
        if (cStopTimes === 0) errors.push('gtfs_stop_time has no rows')

        // 2. discarded stop_times share ≤ 0.1 % (error if exceeded)
        var staging = this._latestImportSetRowCount(GtfsValidation.T.impStimes)
        if (staging > 0) {
            var discarded = staging - cStopTimes
            if (discarded < 0) discarded = 0
            var share = discarded / staging
            if (share > GtfsValidation.DISCARD_THRESHOLD) {
                errors.push(
                    'Discarded stop_times share ' +
                        (share * 100).toFixed(2) +
                        '% exceeds 0.1% (' +
                        discarded +
                        ' of ' +
                        staging +
                        ')',
                )
            }
        }

        // 3. every trip has ≥ 2 stops (warning)
        var fewStops = this._countTripsWithFewStops(feedId)
        if (fewStops > 0) warnings.push(fewStops + ' trip(s) have fewer than 2 stops')

        // 4. every service_id used by trips has at least one service day (warning)
        var missingServices = this._servicesWithoutDays(feedId)
        if (missingServices.length > 0) {
            warnings.push(
                missingServices.length +
                    ' service_id(s) from trips have no service day: ' +
                    missingServices.slice(0, 10).join(', ') +
                    (missingServices.length > 10 ? ' …' : ''),
            )
        }

        // 5. valid_until later than today + 7 days (warning)
        var validUntil = this._feedValue(feedId, 'valid_until')
        if (validUntil) {
            var sevenDays = new GlideDateTime()
            sevenDays.addDaysUTC(7)
            if (validUntil < sevenDays.getDate().getValue()) {
                warnings.push('valid_until (' + validUntil + ') is within the next 7 days')
            }
        } else {
            warnings.push('valid_until is not set')
        }

        // 6. row counts deviate > 30 % from the currently active feed (warning)
        var deviation = this._deviationFromActive(feedId, cStopTimes, cTrips)
        if (deviation) warnings.push(deviation)

        // 7. stops without coordinates for location_type 0–2 (warning)
        var noCoords = this._stopsMissingCoords(feedId)
        if (noCoords > 0) warnings.push(noCoords + ' stop(s) of location_type 0–2 are missing coordinates')

        this._writeLog(feedId, errors, warnings)
        return { hasErrors: errors.length > 0, errors: errors, warnings: warnings }
    },

    // ------------------------------------------------------------------- helpers
    _count: function (table, feedId) {
        var ga = new GlideAggregate(table)
        ga.addQuery('feed', feedId)
        ga.addAggregate('COUNT')
        ga.query()
        return ga.next() ? parseInt(ga.getAggregate('COUNT'), 10) || 0 : 0
    },

    _latestImportSetRowCount: function (stagingTable) {
        var is = new GlideRecord('sys_import_set')
        is.addQuery('table_name', stagingTable)
        is.orderByDesc('sys_created_on')
        is.setLimit(1)
        is.query()
        if (!is.next()) return 0
        var ga = new GlideAggregate(stagingTable)
        ga.addQuery('sys_import_set', is.getUniqueValue())
        ga.addAggregate('COUNT')
        ga.query()
        return ga.next() ? parseInt(ga.getAggregate('COUNT'), 10) || 0 : 0
    },

    _countTripsWithFewStops: function (feedId) {
        // stop_count is populated by GtfsPostProcess; count trips with < 2
        var ga = new GlideAggregate(GtfsValidation.T.trip)
        ga.addQuery('feed', feedId)
        ga.addQuery('stop_count', '<', 2)
        ga.addAggregate('COUNT')
        ga.query()
        return ga.next() ? parseInt(ga.getAggregate('COUNT'), 10) || 0 : 0
    },

    _servicesWithoutDays: function (feedId) {
        // distinct service_ids present as service days
        var withDays = {}
        var sd = new GlideAggregate(GtfsValidation.T.serviceDay)
        sd.addQuery('feed', feedId)
        sd.groupBy('service_id')
        sd.query()
        while (sd.next()) withDays[sd.getValue('service_id')] = true

        // distinct service_ids used by trips, minus those with days
        var missing = []
        var tg = new GlideAggregate(GtfsValidation.T.trip)
        tg.addQuery('feed', feedId)
        tg.groupBy('service_id')
        tg.query()
        while (tg.next()) {
            var sid = tg.getValue('service_id')
            if (sid && !withDays[sid]) missing.push(sid)
        }
        return missing
    },

    _deviationFromActive: function (feedId, cStopTimes, cTrips) {
        var active = new GlideRecord(GtfsValidation.T.feed)
        active.addQuery('status', 'active')
        active.addQuery('sys_id', '!=', feedId)
        active.setLimit(1)
        active.query()
        if (!active.next()) return '' // no active feed to compare against
        var prevStopTimes = parseInt(active.getValue('cnt_stop_times'), 10) || 0
        if (prevStopTimes > 0) {
            var dev = Math.abs(cStopTimes - prevStopTimes) / prevStopTimes
            if (dev > GtfsValidation.DEVIATION_THRESHOLD) {
                return (
                    'stop_time count deviates ' +
                    (dev * 100).toFixed(0) +
                    '% from the active feed (' +
                    cStopTimes +
                    ' vs ' +
                    prevStopTimes +
                    ')'
                )
            }
        }
        return ''
    },

    _stopsMissingCoords: function (feedId) {
        var gr = new GlideRecord(GtfsValidation.T.stop)
        gr.addQuery('feed', feedId)
        gr.addQuery('location_type', 'IN', '0,1,2')
        var orCoord = gr.addQuery('stop_lat', '')
        orCoord.addOrCondition('stop_lon', '')
        return gr.getRowCount()
    },

    _feedValue: function (feedId, field) {
        var fg = new GlideRecord(GtfsValidation.T.feed)
        return fg.get(feedId) ? fg.getValue(field) : ''
    },

    _writeLog: function (feedId, errors, warnings) {
        var lines = []
        lines.push('=== Validation ' + new GlideDateTime().getValue() + ' ===')
        lines.push('Result: ' + (errors.length ? 'ERRORS (' + errors.length + ')' : 'PASS'))
        for (var i = 0; i < errors.length; i++) lines.push('ERROR: ' + errors[i])
        for (var j = 0; j < warnings.length; j++) lines.push('WARN:  ' + warnings[j])

        var fg = new GlideRecord(GtfsValidation.T.feed)
        if (fg.get(feedId)) {
            var existing = fg.getValue('validation_log') || ''
            var block = lines.join('\n')
            fg.setValue('validation_log', existing ? existing + '\n' + block : block)
            fg.setWorkflow(false)
            fg.update()
        }
    },

    type: 'GtfsValidation',
}
