import '@servicenow/sdk/global'
import { SPHeaderFooter } from '@servicenow/sdk/core'

/**
 * Login-free portal header (Section 7.1): brand + static nav links only — no login,
 * profile, or global-search chrome. Static nav avoids the dynamic SPMenu wiring and
 * keeps the guest header minimal and accessible.
 */
export const gtfsHeader = SPHeaderFooter({
    $id: Now.ID['x_msag_gtfs_schedu_header'],
    name: 'GTFS Portal Header',
    id: 'x_msag_gtfs_schedu_header',
    static: false,
    htmlTemplate: Now.include('./template.html'),
    category: 'custom',
    description: 'GTFS public portal header: brand + Home/Routes/Info, no login.',
})
