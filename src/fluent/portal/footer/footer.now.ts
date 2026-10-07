import '@servicenow/sdk/global'
import { SPHeaderFooter } from '@servicenow/sdk/core'

/**
 * Login-free portal footer (Section 7.1): open-data notice + link to Info/imprint.
 * Wired into the GTFS theme alongside gtfsHeader.
 */
export const gtfsFooter = SPHeaderFooter({
    $id: Now.ID['x_msag_gtfs_schedu_footer'],
    name: 'GTFS Portal Footer',
    id: 'x_msag_gtfs_schedu_footer',
    static: false,
    htmlTemplate: Now.include('./template.html'),
    category: 'custom',
    description: 'GTFS public portal footer: open-data notice + Info/imprint link.',
})
