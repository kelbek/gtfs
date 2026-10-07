import {
    Table,
    StringColumn,
    MultiLineTextColumn,
    ChoiceColumn,
    UrlColumn,
    EmailColumn,
    DateColumn,
    DateTimeColumn,
    IntegerColumn,
    Form,
    default_view,
} from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * gtfs_feed — one record per imported GTFS feed version (Section 4.1).
 *
 * Every other gtfs table carries a `feed` reference back to this table. New data is
 * built up next to the active feed (status staging) and switched live by changing
 * status to `active`. Rule (enforced later by a business rule): at most one feed
 * may be `active` at a time.
 */
export const x_msag_gtfs_schedu_feed = Table({
    name: 'x_msag_gtfs_schedu_feed',
    label: 'GTFS Feed',
    display: 'name',
    audit: false,
    allowWebServiceAccess: false,
    createAccessControls: true,
    userRole: gtfsAdmin,
    schema: {
        name: StringColumn({ label: 'Name', mandatory: true, maxLength: 100 }),
        status: ChoiceColumn({
            label: 'Status',
            default: 'importing',
            dropdown: 'dropdown_without_none',
            choices: {
                importing: 'Importing',
                staging: 'Staging',
                active: 'Active',
                archived: 'Archived',
                failed: 'Failed',
            },
        }),
        feed_version: StringColumn({ label: 'Feed version', maxLength: 255 }),
        publisher_name: StringColumn({ label: 'Publisher name', maxLength: 255 }),
        publisher_url: UrlColumn({ label: 'Publisher URL' }),
        feed_lang: StringColumn({ label: 'Feed language', maxLength: 20 }),
        contact_email: EmailColumn({ label: 'Contact email' }),
        contact_url: UrlColumn({ label: 'Contact URL' }),
        valid_from: DateColumn({ label: 'Valid from' }),
        valid_until: DateColumn({ label: 'Valid until' }),
        agency_timezone: StringColumn({ label: 'Agency timezone', maxLength: 60 }),
        source_url: UrlColumn({ label: 'Source URL' }),
        license_text: MultiLineTextColumn({ label: 'License text', maxLength: 4000 }),
        imported_on: DateTimeColumn({ label: 'Imported on' }),
        activated_on: DateTimeColumn({ label: 'Activated on' }),
        cnt_stops: IntegerColumn({ label: 'Stop count' }),
        cnt_routes: IntegerColumn({ label: 'Route count' }),
        cnt_trips: IntegerColumn({ label: 'Trip count' }),
        cnt_stop_times: IntegerColumn({ label: 'Stop time count' }),
        validation_log: MultiLineTextColumn({ label: 'Validation log', maxLength: 32000 }),
    },
})

Form({
    table: 'x_msag_gtfs_schedu_feed',
    view: default_view,
    sections: [
        {
            caption: 'GTFS Feed',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'name', type: 'table_field' },
                        { field: 'status', type: 'table_field' },
                        { field: 'feed_version', type: 'table_field' },
                        { field: 'feed_lang', type: 'table_field' },
                        { field: 'agency_timezone', type: 'table_field' },
                        { field: 'valid_from', type: 'table_field' },
                        { field: 'valid_until', type: 'table_field' },
                        { field: 'imported_on', type: 'table_field' },
                        { field: 'activated_on', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'publisher_name', type: 'table_field' },
                        { field: 'publisher_url', type: 'table_field' },
                        { field: 'contact_email', type: 'table_field' },
                        { field: 'contact_url', type: 'table_field' },
                        { field: 'source_url', type: 'table_field' },
                        { field: 'cnt_stops', type: 'table_field' },
                        { field: 'cnt_routes', type: 'table_field' },
                        { field: 'cnt_trips', type: 'table_field' },
                        { field: 'cnt_stop_times', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'license_text', type: 'table_field' },
                        { field: 'validation_log', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
