import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
    DateColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_cal_date — calendar exceptions (Section 4.8, GTFS calendar_dates.txt).
 *
 * Table name is shortened to `cal_date` to stay within the 30-character table-name
 * limit under the x_msag_gtfs_schedu_ prefix. exception_type 1 adds service on the
 * date, 2 removes it.
 */
export const x_msag_gtfs_schedu_cal_date = Table({
    name: 'x_msag_gtfs_schedu_cal_date',
    label: 'GTFS Calendar Date',
    display: 'service_id',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        feed: ReferenceColumn({ label: 'Feed', referenceTable: 'x_msag_gtfs_schedu_feed', mandatory: true }),
        service_id: StringColumn({ label: 'Service ID', maxLength: 255, mandatory: true }),
        date: DateColumn({ label: 'Date' }),
        exception_type: ChoiceColumn({
            label: 'Exception type',
            dropdown: 'dropdown_without_none',
            choices: {
                '1': 'Service added',
                '2': 'Service removed',
            },
        }),
    },
    index: [{ name: 'idx_feed_service', unique: false, element: ['feed', 'service_id'] }],
})

Form({
    table: 'x_msag_gtfs_schedu_cal_date',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Calendar Date',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'feed', type: 'table_field' },
                        { field: 'service_id', type: 'table_field' },
                        { field: 'date', type: 'table_field' },
                        { field: 'exception_type', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
