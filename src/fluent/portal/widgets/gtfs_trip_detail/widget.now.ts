import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'
import { gtfsRouteBadgeProvider } from '../../providers/route-badge.now'

export const gtfsTripDetailWidget = SPWidget({
    $id: Now.ID['x_msag_gtfs_schedu_gtfs_trip_detail'],
    id: 'x_msag_gtfs_schedu_gtfs_trip_detail',
    name: 'GTFS Trip Detail',
    htmlTemplate: Now.include('./template.html'),
    serverScript: Now.include('./server_script.js'),
    angularProviders: [gtfsRouteBadgeProvider],
})
