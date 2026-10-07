import {
    Table,
    StringColumn,
    ReferenceColumn,
    DateColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_service_day — derived, not part of GTFS (Section 4.9).
 *
 * One row per (service_id, date) on which the service actually operates. Computed in
 * post-processing by expanding gtfs_calendar across its date range and applying the
 * gtfs_cal_date exceptions. Fewer than ~50,000 rows. Drives the departure board's
 * service-day lookup.
 */
export const x_msag_gtfs_schedu_service_day = Table({
    name: 'x_msag_gtfs_schedu_service_day',
    label: 'GTFS Service Day',
    display: 'service_id',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        feed: ReferenceColumn({ label: 'Feed', referenceTable: 'x_msag_gtfs_schedu_feed', mandatory: true }),
        service_id: StringColumn({ label: 'Service ID', maxLength: 255, mandatory: true }),
        date: DateColumn({ label: 'Service day' }),
    },
    index: [{ name: 'idx_feed_date', unique: false, element: ['feed', 'date'] }],
})

Form({
    table: 'x_msag_gtfs_schedu_service_day',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Service Day',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'feed', type: 'table_field' },
                        { field: 'service_id', type: 'table_field' },
                        { field: 'date', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
