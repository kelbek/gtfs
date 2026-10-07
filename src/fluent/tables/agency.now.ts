import {
    Table,
    StringColumn,
    ReferenceColumn,
    UrlColumn,
    EmailColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_agency — one record per transit agency (Section 4.2).
 *
 * The MVP feed comes from a single agency, but the table still exists so that
 * name, URL, timezone and contact data can be shown in the portal.
 */
export const x_msag_gtfs_schedu_agency = Table({
    name: 'x_msag_gtfs_schedu_agency',
    label: 'GTFS Agency',
    display: 'agency_name',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        feed: ReferenceColumn({ label: 'Feed', referenceTable: 'x_msag_gtfs_schedu_feed', mandatory: true }),
        agency_id: StringColumn({ label: 'Agency ID', maxLength: 255 }),
        agency_name: StringColumn({ label: 'Agency name', maxLength: 255 }),
        agency_url: UrlColumn({ label: 'Agency URL' }),
        agency_timezone: StringColumn({ label: 'Agency timezone', maxLength: 60 }),
        agency_lang: StringColumn({ label: 'Agency language', maxLength: 20 }),
        agency_phone: StringColumn({ label: 'Agency phone', maxLength: 60 }),
        agency_fare_url: UrlColumn({ label: 'Agency fare URL' }),
        agency_email: EmailColumn({ label: 'Agency email' }),
    },
})

Form({
    table: 'x_msag_gtfs_schedu_agency',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Agency',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'feed', type: 'table_field' },
                        { field: 'agency_id', type: 'table_field' },
                        { field: 'agency_name', type: 'table_field' },
                        { field: 'agency_url', type: 'table_field' },
                        { field: 'agency_timezone', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'agency_lang', type: 'table_field' },
                        { field: 'agency_phone', type: 'table_field' },
                        { field: 'agency_fare_url', type: 'table_field' },
                        { field: 'agency_email', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
