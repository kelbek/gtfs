import '@servicenow/sdk/global'
import { SPAngularProvider } from '@servicenow/sdk/core'

/**
 * gtfsRouteBadge — shared AngularJS element directive that renders a GTFS route
 * badge (<gtfs-route-badge route="...">) with the mode icon, short name and a
 * visually-hidden mode label. Linked into every widget that displays route badges.
 */
export const gtfsRouteBadgeProvider = SPAngularProvider({
    $id: Now.ID['x_msag_gtfs_schedu_route_badge'],
    name: 'gtfsRouteBadge',
    type: 'directive',
    script: Now.include('./route-badge.js'),
})
