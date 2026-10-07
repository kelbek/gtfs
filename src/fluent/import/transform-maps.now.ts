import '@servicenow/sdk/global'
import { ImportSet } from '@servicenow/sdk/core'

/**
 * GTFS Transform Maps (Work Package 2, Section 5.3).
 *
 * One transform map per staging table. Principles from the concept:
 *  - Insert-only, NO coalesce (each import builds a brand-new feed) — avoids the
 *    expensive per-row matching query.
 *  - Business rules off, mandatory-field enforcement off (speed on 2M rows).
 *  - No per-row GlideRecord reference lookups: the big transforms build in-memory
 *    maps once in onStart (GtfsImportCache) and read them per row in onBefore.
 *  - Derived values (feed scoping, search name, mode_group, colors, time→seconds,
 *    denormalized trip/route fields) are computed in the onBefore handlers.
 *
 * `order` encodes the mandatory chain order (Section 5.2): later files resolve
 * references to earlier ones (routes→trips→stop_times, stops→stop_times).
 *
 * Deliberately NOT handled here (Work Package 3): parent_station resolution, service
 * days, is_last_stop, trip metrics (first/last stop, counts), validation and activation.
 */

const CACHE = 'x_msag_gtfs_schedu.GtfsImportCache'

// 1. agency.txt → gtfs_agency
ImportSet({
    $id: Now.ID['tm_agency'],
    name: 'GTFS Transform - Agency',
    sourceTable: 'x_msag_gtfs_schedu_imp_agency',
    targetTable: 'x_msag_gtfs_schedu_agency',
    active: true,
    order: 100,
    runBusinessRules: false,
    runScript: false,
    copyEmptyFields: false,
    enforceMandatoryFields: 'no',
    fields: {
        agency_id: 'u_agency_id',
        agency_name: 'u_agency_name',
        agency_url: 'u_agency_url',
        agency_timezone: 'u_agency_timezone',
        agency_lang: 'u_agency_lang',
        agency_phone: 'u_agency_phone',
        agency_fare_url: 'u_agency_fare_url',
        agency_email: 'u_agency_email',
    },
    scripts: [
        {
            $id: Now.ID['tm_agency_before'],
            when: 'onBefore',
            active: true,
            script: `(function (source, map, log, target) {
    if (new ${CACHE}().onAgency(source, target) === false) { ignore = true; }
})(source, map, log, target);`,
        },
    ],
})

// 2. feed_info.txt → gtfs_feed (updates the existing feed record; inserts nothing)
ImportSet({
    $id: Now.ID['tm_feed_info'],
    name: 'GTFS Transform - Feed Info',
    sourceTable: 'x_msag_gtfs_schedu_imp_feed',
    targetTable: 'x_msag_gtfs_schedu_feed',
    active: true,
    order: 110,
    runBusinessRules: false,
    runScript: false,
    copyEmptyFields: false,
    enforceMandatoryFields: 'no',
    scripts: [
        {
            $id: Now.ID['tm_feed_info_before'],
            when: 'onBefore',
            active: true,
            script: `(function (source, map, log, target) {
    // onFeedInfo updates the current feed in place and always returns false.
    new ${CACHE}().onFeedInfo(source, target);
    ignore = true;
})(source, map, log, target);`,
        },
    ],
})

// 3. stops.txt → gtfs_stop
ImportSet({
    $id: Now.ID['tm_stops'],
    name: 'GTFS Transform - Stops',
    sourceTable: 'x_msag_gtfs_schedu_imp_stops',
    targetTable: 'x_msag_gtfs_schedu_stop',
    active: true,
    order: 200,
    runBusinessRules: false,
    runScript: false,
    copyEmptyFields: false,
    enforceMandatoryFields: 'no',
    fields: {
        stop_id: 'u_stop_id',
        stop_code: 'u_stop_code',
        stop_name: 'u_stop_name',
        stop_desc: 'u_stop_desc',
        stop_lat: 'u_stop_lat',
        stop_lon: 'u_stop_lon',
        zone_id: 'u_zone_id',
        stop_url: 'u_stop_url',
        platform_code: 'u_platform_code',
        stop_timezone: 'u_stop_timezone',
    },
    scripts: [
        {
            $id: Now.ID['tm_stops_before'],
            when: 'onBefore',
            active: true,
            script: `(function (source, map, log, target) {
    if (new ${CACHE}().onStop(source, target) === false) { ignore = true; }
})(source, map, log, target);`,
        },
    ],
})

// 4. routes.txt → gtfs_route
ImportSet({
    $id: Now.ID['tm_routes'],
    name: 'GTFS Transform - Routes',
    sourceTable: 'x_msag_gtfs_schedu_imp_routes',
    targetTable: 'x_msag_gtfs_schedu_route',
    active: true,
    order: 300,
    runBusinessRules: false,
    runScript: false,
    copyEmptyFields: false,
    enforceMandatoryFields: 'no',
    fields: {
        route_id: 'u_route_id',
        agency_id: 'u_agency_id',
        route_short_name: 'u_route_short_name',
        route_long_name: 'u_route_long_name',
        route_desc: 'u_route_desc',
        route_type: 'u_route_type',
        route_url: 'u_route_url',
        route_sort_order: 'u_route_sort_order',
    },
    scripts: [
        {
            $id: Now.ID['tm_routes_before'],
            when: 'onBefore',
            active: true,
            script: `(function (source, map, log, target) {
    if (new ${CACHE}().onRoute(source, target) === false) { ignore = true; }
})(source, map, log, target);`,
        },
    ],
})

// 5. calendar.txt → gtfs_calendar
ImportSet({
    $id: Now.ID['tm_calendar'],
    name: 'GTFS Transform - Calendar',
    sourceTable: 'x_msag_gtfs_schedu_imp_cal',
    targetTable: 'x_msag_gtfs_schedu_calendar',
    active: true,
    order: 400,
    runBusinessRules: false,
    runScript: false,
    copyEmptyFields: false,
    enforceMandatoryFields: 'no',
    fields: {
        service_id: 'u_service_id',
    },
    scripts: [
        {
            $id: Now.ID['tm_calendar_before'],
            when: 'onBefore',
            active: true,
            script: `(function (source, map, log, target) {
    if (new ${CACHE}().onCalendar(source, target) === false) { ignore = true; }
})(source, map, log, target);`,
        },
    ],
})

// 6. calendar_dates.txt → gtfs_cal_date
ImportSet({
    $id: Now.ID['tm_calendar_dates'],
    name: 'GTFS Transform - Calendar Dates',
    sourceTable: 'x_msag_gtfs_schedu_imp_caldt',
    targetTable: 'x_msag_gtfs_schedu_cal_date',
    active: true,
    order: 410,
    runBusinessRules: false,
    runScript: false,
    copyEmptyFields: false,
    enforceMandatoryFields: 'no',
    fields: {
        service_id: 'u_service_id',
        exception_type: 'u_exception_type',
    },
    scripts: [
        {
            $id: Now.ID['tm_calendar_dates_before'],
            when: 'onBefore',
            active: true,
            script: `(function (source, map, log, target) {
    if (new ${CACHE}().onCalendarDate(source, target) === false) { ignore = true; }
})(source, map, log, target);`,
        },
    ],
})

// 7. trips.txt → gtfs_trip (needs the route map; builds it in onStart)
ImportSet({
    $id: Now.ID['tm_trips'],
    name: 'GTFS Transform - Trips',
    sourceTable: 'x_msag_gtfs_schedu_imp_trips',
    targetTable: 'x_msag_gtfs_schedu_trip',
    active: true,
    order: 500,
    runBusinessRules: false,
    runScript: false,
    copyEmptyFields: false,
    enforceMandatoryFields: 'no',
    fields: {
        trip_id: 'u_trip_id',
        service_id: 'u_service_id',
        trip_headsign: 'u_trip_headsign',
        trip_short_name: 'u_trip_short_name',
        direction_id: 'u_direction_id',
        wheelchair_accessible: 'u_wheelchair_accessible',
        bikes_allowed: 'u_bikes_allowed',
    },
    scripts: [
        {
            $id: Now.ID['tm_trips_start'],
            when: 'onStart',
            active: true,
            script: `(function (source, map, log, target) {
    var c = new ${CACHE}();
    c.initRun();
    c.loadRoutes();
})(source, map, log, target);`,
        },
        {
            $id: Now.ID['tm_trips_before'],
            when: 'onBefore',
            active: true,
            script: `(function (source, map, log, target) {
    if (new ${CACHE}().onTrip(source, target) === false) { ignore = true; }
})(source, map, log, target);`,
        },
        {
            $id: Now.ID['tm_trips_complete'],
            when: 'onComplete',
            active: true,
            script: `(function (source, map, log, target) {
    new ${CACHE}().flushCounts('trips');
})(source, map, log, target);`,
        },
    ],
})

// 8. stop_times.txt → gtfs_stop_time (the hot path; builds trip + stop maps in onStart)
ImportSet({
    $id: Now.ID['tm_stop_times'],
    name: 'GTFS Transform - Stop Times',
    sourceTable: 'x_msag_gtfs_schedu_imp_stimes',
    targetTable: 'x_msag_gtfs_schedu_stop_time',
    active: true,
    order: 600,
    runBusinessRules: false,
    runScript: false,
    copyEmptyFields: false,
    enforceMandatoryFields: 'no',
    fields: {
        stop_sequence: 'u_stop_sequence',
        arrival_time: 'u_arrival_time',
        departure_time: 'u_departure_time',
        stop_headsign: 'u_stop_headsign',
    },
    scripts: [
        {
            $id: Now.ID['tm_stop_times_start'],
            when: 'onStart',
            active: true,
            script: `(function (source, map, log, target) {
    var c = new ${CACHE}();
    c.initRun();
    c.loadTrips(); // also loads routes (for route_short_name denormalization)
    c.loadStops();
})(source, map, log, target);`,
        },
        {
            $id: Now.ID['tm_stop_times_before'],
            when: 'onBefore',
            active: true,
            script: `(function (source, map, log, target) {
    if (new ${CACHE}().onStopTime(source, target) === false) { ignore = true; }
})(source, map, log, target);`,
        },
        {
            $id: Now.ID['tm_stop_times_complete'],
            when: 'onComplete',
            active: true,
            script: `(function (source, map, log, target) {
    new ${CACHE}().flushCounts('stop_times');
})(source, map, log, target);`,
        },
    ],
})
