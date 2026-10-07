import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'
import { gtfsRouteBadgeProvider } from '../../providers/route-badge.now'

export const gtfsRouteListWidget = SPWidget({
    $id: Now.ID['x_msag_gtfs_schedu_gtfs_route_list'],
    id: 'x_msag_gtfs_schedu_gtfs_route_list',
    name: 'GTFS Route List',
    htmlTemplate: Now.include('./template.html'),
    serverScript: Now.include('./server_script.js'),
    clientScript: Now.include('./client_script.js'),
    angularProviders: [gtfsRouteBadgeProvider],
})
