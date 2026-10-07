import {
    Table,
    StringColumn,
    ReferenceColumn,
    BooleanColumn,
    DateColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_calendar — regular weekly service patterns (Section 4.7).
 *
 * One row per service_id defining which weekdays it runs between start_date and
 * end_date. Exceptions to this pattern live in gtfs_cal_date.
 */
export const x_msag_gtfs_schedu_calendar = Table({
    name: 'x_msag_gtfs_schedu_calendar',
    label: 'GTFS Calendar',
    display: 'service_id',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        feed: ReferenceColumn({ label: 'Feed', referenceTable: 'x_msag_gtfs_schedu_feed', mandatory: true }),
        service_id: StringColumn({ label: 'Service ID', maxLength: 255, mandatory: true }),
        monday: BooleanColumn({ label: 'Monday', default: false }),
        tuesday: BooleanColumn({ label: 'Tuesday', default: false }),
        wednesday: BooleanColumn({ label: 'Wednesday', default: false }),
        thursday: BooleanColumn({ label: 'Thursday', default: false }),
        friday: BooleanColumn({ label: 'Friday', default: false }),
        saturday: BooleanColumn({ label: 'Saturday', default: false }),
        sunday: BooleanColumn({ label: 'Sunday', default: false }),
        start_date: DateColumn({ label: 'Start date' }),
        end_date: DateColumn({ label: 'End date' }),
    },
    index: [{ name: 'idx_feed_service', unique: false, element: ['feed', 'service_id'] }],
})

Form({
    table: 'x_msag_gtfs_schedu_calendar',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Calendar',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'feed', type: 'table_field' },
                        { field: 'service_id', type: 'table_field' },
                        { field: 'start_date', type: 'table_field' },
                        { field: 'end_date', type: 'table_field' },
                        { field: 'monday', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'tuesday', type: 'table_field' },
                        { field: 'wednesday', type: 'table_field' },
                        { field: 'thursday', type: 'table_field' },
                        { field: 'friday', type: 'table_field' },
                        { field: 'saturday', type: 'table_field' },
                        { field: 'sunday', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
