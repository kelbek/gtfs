import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    IntegerColumn,
    BooleanColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_stop_time — the stop events of every trip (Section 4.6). ~2 million rows.
 *
 * The denormalized fields (route, route_short_name, service_id, direction_id) are
 * copied from the parent trip/route during import so the departure board can query
 * without joins. `arrival_sec`/`departure_sec` are seconds since the start of the
 * service day and may exceed 86400 (times past midnight such as 25:10:00).
 * `stop` is nullable because Flex rows may omit stop_id (those rows are skipped
 * in the MVP). No stop-name field here — the name is dot-walked via `stop`.
 */
export const x_msag_gtfs_schedu_stop_time = Table({
    name: 'x_msag_gtfs_schedu_stop_time',
    label: 'GTFS Stop Time',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        feed: ReferenceColumn({ label: 'Feed', referenceTable: 'x_msag_gtfs_schedu_feed', mandatory: true }),
        trip: ReferenceColumn({ label: 'Trip', referenceTable: 'x_msag_gtfs_schedu_trip' }),
        stop: ReferenceColumn({ label: 'Stop', referenceTable: 'x_msag_gtfs_schedu_stop' }),
        stop_sequence: IntegerColumn({ label: 'Stop sequence' }),
        arrival_time: StringColumn({ label: 'Arrival time', maxLength: 9 }),
        departure_time: StringColumn({ label: 'Departure time', maxLength: 9 }),
        arrival_sec: IntegerColumn({ label: 'Arrival (sec)' }),
        departure_sec: IntegerColumn({ label: 'Departure (sec)' }),
        stop_headsign: StringColumn({ label: 'Stop headsign', maxLength: 255 }),
        pickup_type: ChoiceColumn({
            label: 'Pickup type',
            default: '0',
            dropdown: 'dropdown_without_none',
            choices: {
                '0': 'Regular',
                '1': 'None',
                '2': 'Phone agency',
                '3': 'Coordinate with driver',
            },
        }),
        drop_off_type: ChoiceColumn({
            label: 'Drop-off type',
            default: '0',
            dropdown: 'dropdown_without_none',
            choices: {
                '0': 'Regular',
                '1': 'None',
                '2': 'Phone agency',
                '3': 'Coordinate with driver',
            },
        }),
        timepoint: ChoiceColumn({
            label: 'Timepoint',
            default: '1',
            dropdown: 'dropdown_without_none',
            choices: {
                '0': 'Approximate',
                '1': 'Exact',
            },
        }),
        // Denormalized from the parent trip / route for join-free departure queries.
        route: ReferenceColumn({ label: 'Route', referenceTable: 'x_msag_gtfs_schedu_route' }),
        route_short_name: StringColumn({ label: 'Route short name', maxLength: 255 }),
        service_id: StringColumn({ label: 'Service ID', maxLength: 255 }),
        direction_id: ChoiceColumn({
            label: 'Direction',
            dropdown: 'dropdown_with_none',
            choices: {
                '0': 'Direction 0',
                '1': 'Direction 1',
            },
        }),
        is_last_stop: BooleanColumn({ label: 'Is last stop', default: false }),
    },
    index: [
        { name: 'idx_stop_departure', unique: false, element: ['stop', 'departure_sec'] },
        { name: 'idx_trip_sequence', unique: false, element: ['trip', 'stop_sequence'] },
        { name: 'idx_feed', unique: false, element: 'feed' },
    ],
})

Form({
    table: 'x_msag_gtfs_schedu_stop_time',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Stop Time',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'feed', type: 'table_field' },
                        { field: 'trip', type: 'table_field' },
                        { field: 'stop', type: 'table_field' },
                        { field: 'stop_sequence', type: 'table_field' },
                        { field: 'arrival_time', type: 'table_field' },
                        { field: 'departure_time', type: 'table_field' },
                        { field: 'arrival_sec', type: 'table_field' },
                        { field: 'departure_sec', type: 'table_field' },
                        { field: 'stop_headsign', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'pickup_type', type: 'table_field' },
                        { field: 'drop_off_type', type: 'table_field' },
                        { field: 'timepoint', type: 'table_field' },
                        { field: 'route', type: 'table_field' },
                        { field: 'route_short_name', type: 'table_field' },
                        { field: 'service_id', type: 'table_field' },
                        { field: 'direction_id', type: 'table_field' },
                        { field: 'is_last_stop', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
