import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

/**
 * GTFS Admin navigation (Work Package 4). An admin-only application menu with the feed
 * list and the create-feed shortcut as the primary entries, browse lists for the
 * imported data, and a filtered link to the GTFS Data Sources used for upload.
 */

const ADMIN = 'x_msag_gtfs_schedu.admin'

const menu = ApplicationMenu({
    $id: Now.ID['gtfs_app_menu'],
    title: 'GTFS Schedule',
    hint: 'Import, validate and activate GTFS feeds; browse the imported timetable data.',
    description: 'Administration for the GTFS Schedule application.',
    roles: [ADMIN],
    active: true,
})

// --- Feed administration ---
Record({
    $id: Now.ID['gtfs_mod_feeds'],
    table: 'sys_app_module',
    data: {
        title: 'Feeds',
        application: menu,
        link_type: 'LIST',
        name: 'x_msag_gtfs_schedu_feed',
        hint: 'All GTFS feed versions and their status.',
        roles: [ADMIN],
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['gtfs_mod_new_feed'],
    table: 'sys_app_module',
    data: {
        title: 'Create New Feed',
        application: menu,
        link_type: 'NEW',
        name: 'x_msag_gtfs_schedu_feed',
        hint: 'Create a new feed (status "importing") to start an import.',
        roles: [ADMIN],
        active: true,
        order: 200,
    },
})

// --- Import ---
Record({
    $id: Now.ID['gtfs_mod_sep_import'],
    table: 'sys_app_module',
    data: {
        title: 'Import',
        application: menu,
        link_type: 'SEPARATOR',
        roles: [ADMIN],
        active: true,
        order: 300,
    },
})

Record({
    $id: Now.ID['gtfs_mod_data_sources'],
    table: 'sys_app_module',
    data: {
        title: 'GTFS Data Sources',
        application: menu,
        link_type: 'LIST',
        name: 'sys_data_source',
        filter: 'nameSTARTSWITHGTFS',
        hint: 'Upload the GTFS CSV files to their Data Sources.',
        roles: [ADMIN],
        active: true,
        order: 310,
    },
})

// --- Browse imported data ---
Record({
    $id: Now.ID['gtfs_mod_sep_browse'],
    table: 'sys_app_module',
    data: {
        title: 'Browse Data',
        application: menu,
        link_type: 'SEPARATOR',
        roles: [ADMIN],
        active: true,
        order: 400,
    },
})

Record({
    $id: Now.ID['gtfs_mod_agencies'],
    table: 'sys_app_module',
    data: {
        title: 'Agencies',
        application: menu,
        link_type: 'LIST',
        name: 'x_msag_gtfs_schedu_agency',
        roles: [ADMIN],
        active: true,
        order: 410,
    },
})

Record({
    $id: Now.ID['gtfs_mod_stops'],
    table: 'sys_app_module',
    data: {
        title: 'Stops',
        application: menu,
        link_type: 'LIST',
        name: 'x_msag_gtfs_schedu_stop',
        roles: [ADMIN],
        active: true,
        order: 420,
    },
})

Record({
    $id: Now.ID['gtfs_mod_routes'],
    table: 'sys_app_module',
    data: {
        title: 'Routes',
        application: menu,
        link_type: 'LIST',
        name: 'x_msag_gtfs_schedu_route',
        roles: [ADMIN],
        active: true,
        order: 430,
    },
})

Record({
    $id: Now.ID['gtfs_mod_trips'],
    table: 'sys_app_module',
    data: {
        title: 'Trips',
        application: menu,
        link_type: 'LIST',
        name: 'x_msag_gtfs_schedu_trip',
        roles: [ADMIN],
        active: true,
        order: 440,
    },
})

Record({
    $id: Now.ID['gtfs_mod_service_days'],
    table: 'sys_app_module',
    data: {
        title: 'Service Days',
        application: menu,
        link_type: 'LIST',
        name: 'x_msag_gtfs_schedu_service_day',
        roles: [ADMIN],
        active: true,
        order: 450,
    },
})
