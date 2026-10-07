import {
    Table,
    StringColumn,
    MultiLineTextColumn,
    ReferenceColumn,
    ChoiceColumn,
    IntegerColumn,
    UrlColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_route — routes (Section 4.4).
 *
 * `route_type` is stored as an Integer (not a Choice) because feeds often use the
 * extended route types (100–1700). The import maps the raw type to `mode_group`.
 * `display_name` is the short name if present, otherwise the long name.
 */
export const x_msag_gtfs_schedu_route = Table({
    name: 'x_msag_gtfs_schedu_route',
    label: 'GTFS Route',
    display: 'display_name',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        feed: ReferenceColumn({ label: 'Feed', referenceTable: 'x_msag_gtfs_schedu_feed', mandatory: true }),
        route_id: StringColumn({ label: 'Route ID', maxLength: 255, mandatory: true }),
        agency_id: StringColumn({ label: 'Agency ID', maxLength: 255 }),
        route_short_name: StringColumn({ label: 'Route short name', maxLength: 255 }),
        route_long_name: StringColumn({ label: 'Route long name', maxLength: 255 }),
        display_name: StringColumn({ label: 'Display name', maxLength: 255 }),
        route_desc: MultiLineTextColumn({ label: 'Route description', maxLength: 1000 }),
        route_type: IntegerColumn({ label: 'Route type' }),
        mode_group: ChoiceColumn({
            label: 'Mode group',
            dropdown: 'dropdown_without_none',
            choices: {
                rail: 'Rail',
                subway: 'Subway / metro',
                tram: 'Tram / light rail',
                bus: 'Bus',
                ferry: 'Ferry',
                cable_car: 'Cable car / aerial',
                other: 'Other',
            },
        }),
        route_url: UrlColumn({ label: 'Route URL' }),
        color_bg: StringColumn({ label: 'Route color (bg)', maxLength: 6, default: 'FFFFFF' }),
        color_fg: StringColumn({ label: 'Route text color (fg)', maxLength: 6, default: '000000' }),
        route_sort_order: IntegerColumn({ label: 'Route sort order' }),
    },
    index: [{ name: 'idx_feed_route_id', unique: true, element: ['feed', 'route_id'] }],
})

Form({
    table: 'x_msag_gtfs_schedu_route',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Route',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'feed', type: 'table_field' },
                        { field: 'route_id', type: 'table_field' },
                        { field: 'agency_id', type: 'table_field' },
                        { field: 'route_short_name', type: 'table_field' },
                        { field: 'route_long_name', type: 'table_field' },
                        { field: 'display_name', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'route_type', type: 'table_field' },
                        { field: 'mode_group', type: 'table_field' },
                        { field: 'route_url', type: 'table_field' },
                        { field: 'color_bg', type: 'table_field' },
                        { field: 'color_fg', type: 'table_field' },
                        { field: 'route_sort_order', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'route_desc', type: 'table_field' }],
                },
            ],
        },
    ],
})
