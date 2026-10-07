import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    IntegerColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_trip — individual trips of a route (Section 4.5).
 *
 * `service_id` is kept as a string (it points into calendar / calendar_dates by id).
 * first_stop / last_stop and the *_sec / stop_count metrics are computed in
 * post-processing from stop_times. If `trip_headsign` is empty the import fills it
 * with the name of the last stop.
 */
export const x_msag_gtfs_schedu_trip = Table({
    name: 'x_msag_gtfs_schedu_trip',
    label: 'GTFS Trip',
    display: 'trip_id',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        feed: ReferenceColumn({ label: 'Feed', referenceTable: 'x_msag_gtfs_schedu_feed', mandatory: true }),
        trip_id: StringColumn({ label: 'Trip ID', maxLength: 255, mandatory: true }),
        route: ReferenceColumn({ label: 'Route', referenceTable: 'x_msag_gtfs_schedu_route' }),
        service_id: StringColumn({ label: 'Service ID', maxLength: 255 }),
        trip_headsign: StringColumn({ label: 'Trip headsign', maxLength: 255 }),
        trip_short_name: StringColumn({ label: 'Trip short name', maxLength: 255 }),
        direction_id: ChoiceColumn({
            label: 'Direction',
            dropdown: 'dropdown_with_none',
            choices: {
                '0': 'Direction 0',
                '1': 'Direction 1',
            },
        }),
        wheelchair_accessible: ChoiceColumn({
            label: 'Wheelchair accessible',
            default: '0',
            dropdown: 'dropdown_without_none',
            choices: {
                '0': 'No information',
                '1': 'Accessible',
                '2': 'Not accessible',
            },
        }),
        bikes_allowed: ChoiceColumn({
            label: 'Bikes allowed',
            default: '0',
            dropdown: 'dropdown_without_none',
            choices: {
                '0': 'No information',
                '1': 'Allowed',
                '2': 'Not allowed',
            },
        }),
        first_stop: ReferenceColumn({ label: 'First stop', referenceTable: 'x_msag_gtfs_schedu_stop' }),
        last_stop: ReferenceColumn({ label: 'Last stop', referenceTable: 'x_msag_gtfs_schedu_stop' }),
        first_departure_sec: IntegerColumn({ label: 'First departure (sec)' }),
        last_arrival_sec: IntegerColumn({ label: 'Last arrival (sec)' }),
        stop_count: IntegerColumn({ label: 'Stop count' }),
    },
    index: [
        { name: 'idx_feed_trip_id', unique: true, element: ['feed', 'trip_id'] },
        {
            name: 'idx_route_dir_svc_dep',
            unique: false,
            element: ['route', 'direction_id', 'service_id', 'first_departure_sec'],
        },
    ],
})

Form({
    table: 'x_msag_gtfs_schedu_trip',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Trip',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'feed', type: 'table_field' },
                        { field: 'trip_id', type: 'table_field' },
                        { field: 'route', type: 'table_field' },
                        { field: 'service_id', type: 'table_field' },
                        { field: 'trip_headsign', type: 'table_field' },
                        { field: 'trip_short_name', type: 'table_field' },
                        { field: 'direction_id', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'wheelchair_accessible', type: 'table_field' },
                        { field: 'bikes_allowed', type: 'table_field' },
                        { field: 'first_stop', type: 'table_field' },
                        { field: 'last_stop', type: 'table_field' },
                        { field: 'first_departure_sec', type: 'table_field' },
                        { field: 'last_arrival_sec', type: 'table_field' },
                        { field: 'stop_count', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
