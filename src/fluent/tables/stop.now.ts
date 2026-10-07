import {
    Table,
    StringColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    ChoiceColumn,
    DecimalColumn,
    UrlColumn,
    BooleanColumn,
    IntegerColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_stop — stops, stations, entrances and nodes (Section 4.3).
 *
 * `parent_station` is a self-reference that is resolved in a second pass after the
 * stop import (a parent can appear later in the file). `stop_name_search` holds the
 * normalized search name computed at import time for the typeahead index.
 */
export const x_msag_gtfs_schedu_stop = Table({
    name: 'x_msag_gtfs_schedu_stop',
    label: 'GTFS Stop',
    display: 'stop_name',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        feed: ReferenceColumn({ label: 'Feed', referenceTable: 'x_msag_gtfs_schedu_feed', mandatory: true }),
        stop_id: StringColumn({ label: 'Stop ID', maxLength: 255, mandatory: true }),
        stop_code: StringColumn({ label: 'Stop code', maxLength: 255 }),
        stop_name: StringColumn({ label: 'Stop name', maxLength: 255 }),
        stop_name_search: StringColumn({ label: 'Stop name (search)', maxLength: 255 }),
        stop_desc: MultiLineTextColumn({ label: 'Stop description', maxLength: 1000 }),
        stop_lat: DecimalColumn({ label: 'Latitude', scale: 8 }),
        stop_lon: DecimalColumn({ label: 'Longitude', scale: 8 }),
        zone_id: StringColumn({ label: 'Zone ID', maxLength: 255 }),
        stop_url: UrlColumn({ label: 'Stop URL' }),
        location_type: ChoiceColumn({
            label: 'Location type',
            default: '0',
            dropdown: 'dropdown_without_none',
            choices: {
                '0': 'Stop / platform',
                '1': 'Station',
                '2': 'Entrance / exit',
                '3': 'Generic node',
                '4': 'Boarding area',
            },
        }),
        parent_station: ReferenceColumn({ label: 'Parent station', referenceTable: 'x_msag_gtfs_schedu_stop' }),
        platform_code: StringColumn({ label: 'Platform code', maxLength: 255 }),
        wheelchair_boarding: ChoiceColumn({
            label: 'Wheelchair boarding',
            default: '0',
            dropdown: 'dropdown_without_none',
            choices: {
                '0': 'No information',
                '1': 'Possible',
                '2': 'Not possible',
            },
        }),
        stop_timezone: StringColumn({ label: 'Stop timezone', maxLength: 60 }),
        is_searchable: BooleanColumn({ label: 'Searchable', default: false }),
        child_count: IntegerColumn({ label: 'Child count' }),
    },
    index: [
        { name: 'idx_feed_stop_id', unique: true, element: ['feed', 'stop_id'] },
        { name: 'idx_feed_name_search', unique: false, element: ['feed', 'stop_name_search'] },
        { name: 'idx_feed_lat_lon', unique: false, element: ['feed', 'stop_lat', 'stop_lon'] },
        { name: 'idx_parent_station', unique: false, element: 'parent_station' },
    ],
})

Form({
    table: 'x_msag_gtfs_schedu_stop',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Stop',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'feed', type: 'table_field' },
                        { field: 'stop_id', type: 'table_field' },
                        { field: 'stop_code', type: 'table_field' },
                        { field: 'stop_name', type: 'table_field' },
                        { field: 'stop_name_search', type: 'table_field' },
                        { field: 'location_type', type: 'table_field' },
                        { field: 'parent_station', type: 'table_field' },
                        { field: 'platform_code', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'stop_lat', type: 'table_field' },
                        { field: 'stop_lon', type: 'table_field' },
                        { field: 'zone_id', type: 'table_field' },
                        { field: 'stop_url', type: 'table_field' },
                        { field: 'wheelchair_boarding', type: 'table_field' },
                        { field: 'stop_timezone', type: 'table_field' },
                        { field: 'is_searchable', type: 'table_field' },
                        { field: 'child_count', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'stop_desc', type: 'table_field' }],
                },
            ],
        },
    ],
})
