import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

/**
 * GTFS Data Sources (Work Package 2, Section 5.1 — "Variant A: manual import").
 *
 * One File/CSV Data Source per GTFS file. The admin unzips the GTFS ZIP locally and
 * uploads each CSV as an attachment to the matching Data Source, then loads it into
 * the staging table. Settings per the concept:
 *   - Format CSV, comma delimiter, quote character "
 *   - Header in row 1 (GTFS field names are case-sensitive)
 *   - File retrieval = Attachment, Encoding UTF-8 (watch for a BOM on the first column)
 *
 * batch_size is larger for stop_times (≈2M rows). If stop_times.txt exceeds the
 * instance attachment limit (com.glide.attachment.max_size) it is split into parts of
 * ~500k rows (header in each part) and loaded sequentially — see Section 5.1.
 */

export const dsAgency = Record({
    $id: Now.ID['ds_agency'],
    table: 'sys_data_source',
    data: {
        name: 'GTFS - agency.txt',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_msag_gtfs_schedu_imp_agency',
        import_set_table_label: 'GTFS Import - Agency',
        batch_size: 200,
    },
})

export const dsFeedInfo = Record({
    $id: Now.ID['ds_feed_info'],
    table: 'sys_data_source',
    data: {
        name: 'GTFS - feed_info.txt',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_msag_gtfs_schedu_imp_feed',
        import_set_table_label: 'GTFS Import - Feed Info',
        batch_size: 200,
    },
})

export const dsStops = Record({
    $id: Now.ID['ds_stops'],
    table: 'sys_data_source',
    data: {
        name: 'GTFS - stops.txt',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_msag_gtfs_schedu_imp_stops',
        import_set_table_label: 'GTFS Import - Stops',
        batch_size: 1000,
    },
})

export const dsRoutes = Record({
    $id: Now.ID['ds_routes'],
    table: 'sys_data_source',
    data: {
        name: 'GTFS - routes.txt',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_msag_gtfs_schedu_imp_routes',
        import_set_table_label: 'GTFS Import - Routes',
        batch_size: 500,
    },
})

export const dsTrips = Record({
    $id: Now.ID['ds_trips'],
    table: 'sys_data_source',
    data: {
        name: 'GTFS - trips.txt',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_msag_gtfs_schedu_imp_trips',
        import_set_table_label: 'GTFS Import - Trips',
        batch_size: 2000,
    },
})

export const dsStopTimes = Record({
    $id: Now.ID['ds_stop_times'],
    table: 'sys_data_source',
    data: {
        name: 'GTFS - stop_times.txt',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_msag_gtfs_schedu_imp_stimes',
        import_set_table_label: 'GTFS Import - Stop Times',
        batch_size: 5000,
    },
})

export const dsCalendar = Record({
    $id: Now.ID['ds_calendar'],
    table: 'sys_data_source',
    data: {
        name: 'GTFS - calendar.txt',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_msag_gtfs_schedu_imp_cal',
        import_set_table_label: 'GTFS Import - Calendar',
        batch_size: 500,
    },
})

export const dsCalendarDates = Record({
    $id: Now.ID['ds_calendar_dates'],
    table: 'sys_data_source',
    data: {
        name: 'GTFS - calendar_dates.txt',
        type: 'File',
        format: 'CSV',
        file_retrieval_method: 'Attachment',
        csv_delimiter: ',',
        header_row: 1,
        import_set_table_name: 'x_msag_gtfs_schedu_imp_caldt',
        import_set_table_label: 'GTFS Import - Calendar Dates',
        batch_size: 1000,
    },
})
