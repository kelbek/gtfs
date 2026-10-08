import { Table, StringColumn } from '@servicenow/sdk/core'

/**
 * GTFS import staging tables (Work Package 2, Section 5.1).
 *
 * One staging table per GTFS file, each extending `sys_import_set_row`. All columns
 * are plain strings (CSV import is untyped) and carry the conventional `u_` prefix so
 * the transform scripts can read `source.u_<header>` exactly as the concept pseudocode
 * does. Table names use short `imp_*` suffixes to stay within the 30-character limit
 * under the `x_msag_gtfs_schedu_` prefix (e.g. stop_times → imp_stimes).
 *
 * Only MVP-relevant columns are declared. Extra columns present in a feed (e.g.
 * block_id, shape_id, shape_dist_traveled) are intentionally NOT declared — the import
 * ignores them. NOTE: source CSVs MUST be UTF-8 WITHOUT a byte-order mark (BOM); a BOM
 * mangles the first column's header (e.g. `trip_id` → `\ufefftrip_id`) so it never maps
 * to its `u_` column.
 */

// agency.txt → gtfs_agency
export const x_msag_gtfs_schedu_imp_agency = Table({
    name: 'x_msag_gtfs_schedu_imp_agency',
    label: 'GTFS Import - Agency',
    extends: 'sys_import_set_row',
    schema: {
        u_agency_id: StringColumn({ label: 'agency_id', maxLength: 255 }),
        u_agency_name: StringColumn({ label: 'agency_name', maxLength: 255 }),
        u_agency_url: StringColumn({ label: 'agency_url', maxLength: 1024 }),
        u_agency_timezone: StringColumn({ label: 'agency_timezone', maxLength: 60 }),
        u_agency_lang: StringColumn({ label: 'agency_lang', maxLength: 20 }),
        u_agency_phone: StringColumn({ label: 'agency_phone', maxLength: 60 }),
        u_agency_fare_url: StringColumn({ label: 'agency_fare_url', maxLength: 1024 }),
        u_agency_email: StringColumn({ label: 'agency_email', maxLength: 255 }),
    },
})

// feed_info.txt → gtfs_feed (updates the current feed record)
export const x_msag_gtfs_schedu_imp_feed = Table({
    name: 'x_msag_gtfs_schedu_imp_feed',
    label: 'GTFS Import - Feed Info',
    extends: 'sys_import_set_row',
    schema: {
        u_feed_publisher_name: StringColumn({ label: 'feed_publisher_name', maxLength: 255 }),
        u_feed_publisher_url: StringColumn({ label: 'feed_publisher_url', maxLength: 1024 }),
        u_feed_lang: StringColumn({ label: 'feed_lang', maxLength: 20 }),
        u_feed_version: StringColumn({ label: 'feed_version', maxLength: 255 }),
        u_feed_start_date: StringColumn({ label: 'feed_start_date', maxLength: 8 }),
        u_feed_end_date: StringColumn({ label: 'feed_end_date', maxLength: 8 }),
        u_feed_contact_email: StringColumn({ label: 'feed_contact_email', maxLength: 255 }),
        u_feed_contact_url: StringColumn({ label: 'feed_contact_url', maxLength: 1024 }),
    },
})

// stops.txt → gtfs_stop
export const x_msag_gtfs_schedu_imp_stops = Table({
    name: 'x_msag_gtfs_schedu_imp_stops',
    label: 'GTFS Import - Stops',
    extends: 'sys_import_set_row',
    schema: {
        u_stop_id: StringColumn({ label: 'stop_id', maxLength: 255 }),
        u_stop_code: StringColumn({ label: 'stop_code', maxLength: 255 }),
        u_stop_name: StringColumn({ label: 'stop_name', maxLength: 255 }),
        u_stop_desc: StringColumn({ label: 'stop_desc', maxLength: 1000 }),
        u_stop_lat: StringColumn({ label: 'stop_lat', maxLength: 40 }),
        u_stop_lon: StringColumn({ label: 'stop_lon', maxLength: 40 }),
        u_zone_id: StringColumn({ label: 'zone_id', maxLength: 255 }),
        u_stop_url: StringColumn({ label: 'stop_url', maxLength: 1024 }),
        u_location_type: StringColumn({ label: 'location_type', maxLength: 10 }),
        u_parent_station: StringColumn({ label: 'parent_station', maxLength: 255 }),
        u_platform_code: StringColumn({ label: 'platform_code', maxLength: 255 }),
        u_wheelchair_boarding: StringColumn({ label: 'wheelchair_boarding', maxLength: 10 }),
        u_stop_timezone: StringColumn({ label: 'stop_timezone', maxLength: 60 }),
    },
})

// routes.txt → gtfs_route
export const x_msag_gtfs_schedu_imp_routes = Table({
    name: 'x_msag_gtfs_schedu_imp_routes',
    label: 'GTFS Import - Routes',
    extends: 'sys_import_set_row',
    schema: {
        u_route_id: StringColumn({ label: 'route_id', maxLength: 255 }),
        u_agency_id: StringColumn({ label: 'agency_id', maxLength: 255 }),
        u_route_short_name: StringColumn({ label: 'route_short_name', maxLength: 255 }),
        u_route_long_name: StringColumn({ label: 'route_long_name', maxLength: 255 }),
        u_route_desc: StringColumn({ label: 'route_desc', maxLength: 1000 }),
        u_route_type: StringColumn({ label: 'route_type', maxLength: 10 }),
        u_route_url: StringColumn({ label: 'route_url', maxLength: 1024 }),
        u_route_color: StringColumn({ label: 'route_color', maxLength: 10 }),
        u_route_text_color: StringColumn({ label: 'route_text_color', maxLength: 10 }),
        u_route_sort_order: StringColumn({ label: 'route_sort_order', maxLength: 20 }),
    },
})

// trips.txt → gtfs_trip
export const x_msag_gtfs_schedu_imp_trips = Table({
    name: 'x_msag_gtfs_schedu_imp_trips',
    label: 'GTFS Import - Trips',
    extends: 'sys_import_set_row',
    schema: {
        u_route_id: StringColumn({ label: 'route_id', maxLength: 255 }),
        u_service_id: StringColumn({ label: 'service_id', maxLength: 255 }),
        u_trip_id: StringColumn({ label: 'trip_id', maxLength: 255 }),
        u_trip_headsign: StringColumn({ label: 'trip_headsign', maxLength: 255 }),
        u_trip_short_name: StringColumn({ label: 'trip_short_name', maxLength: 255 }),
        u_direction_id: StringColumn({ label: 'direction_id', maxLength: 10 }),
        u_wheelchair_accessible: StringColumn({ label: 'wheelchair_accessible', maxLength: 10 }),
        u_bikes_allowed: StringColumn({ label: 'bikes_allowed', maxLength: 10 }),
    },
})

// stop_times.txt → gtfs_stop_time (≈ 2M rows)
export const x_msag_gtfs_schedu_imp_stimes = Table({
    name: 'x_msag_gtfs_schedu_imp_stimes',
    label: 'GTFS Import - Stop Times',
    extends: 'sys_import_set_row',
    schema: {
        u_trip_id: StringColumn({ label: 'trip_id', maxLength: 255 }),
        u_arrival_time: StringColumn({ label: 'arrival_time', maxLength: 9 }),
        u_departure_time: StringColumn({ label: 'departure_time', maxLength: 9 }),
        u_stop_id: StringColumn({ label: 'stop_id', maxLength: 255 }),
        u_stop_sequence: StringColumn({ label: 'stop_sequence', maxLength: 20 }),
        u_stop_headsign: StringColumn({ label: 'stop_headsign', maxLength: 255 }),
        u_pickup_type: StringColumn({ label: 'pickup_type', maxLength: 10 }),
        u_drop_off_type: StringColumn({ label: 'drop_off_type', maxLength: 10 }),
        u_timepoint: StringColumn({ label: 'timepoint', maxLength: 10 }),
        // Flex columns — only read to detect and skip Flex rows in the MVP.
        u_location_id: StringColumn({ label: 'location_id', maxLength: 255 }),
        u_location_group_id: StringColumn({ label: 'location_group_id', maxLength: 255 }),
    },
})

// calendar.txt → gtfs_calendar
export const x_msag_gtfs_schedu_imp_cal = Table({
    name: 'x_msag_gtfs_schedu_imp_cal',
    label: 'GTFS Import - Calendar',
    extends: 'sys_import_set_row',
    schema: {
        u_service_id: StringColumn({ label: 'service_id', maxLength: 255 }),
        u_monday: StringColumn({ label: 'monday', maxLength: 1 }),
        u_tuesday: StringColumn({ label: 'tuesday', maxLength: 1 }),
        u_wednesday: StringColumn({ label: 'wednesday', maxLength: 1 }),
        u_thursday: StringColumn({ label: 'thursday', maxLength: 1 }),
        u_friday: StringColumn({ label: 'friday', maxLength: 1 }),
        u_saturday: StringColumn({ label: 'saturday', maxLength: 1 }),
        u_sunday: StringColumn({ label: 'sunday', maxLength: 1 }),
        u_start_date: StringColumn({ label: 'start_date', maxLength: 8 }),
        u_end_date: StringColumn({ label: 'end_date', maxLength: 8 }),
    },
})

// calendar_dates.txt → gtfs_cal_date
export const x_msag_gtfs_schedu_imp_caldt = Table({
    name: 'x_msag_gtfs_schedu_imp_caldt',
    label: 'GTFS Import - Calendar Dates',
    extends: 'sys_import_set_row',
    schema: {
        u_service_id: StringColumn({ label: 'service_id', maxLength: 255 }),
        u_date: StringColumn({ label: 'date', maxLength: 8 }),
        u_exception_type: StringColumn({ label: 'exception_type', maxLength: 10 }),
    },
})
