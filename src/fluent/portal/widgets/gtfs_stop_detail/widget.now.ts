import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'
import { gtfsRouteBadgeProvider } from '../../providers/route-badge.now'

export const gtfsStopDetailWidget = SPWidget({
    $id: Now.ID['x_msag_gtfs_schedu_gtfs_stop_detail'],
    id: 'x_msag_gtfs_schedu_gtfs_stop_detail',
    name: 'GTFS Stop Detail',
    htmlTemplate: Now.include('./template.html'),
    serverScript: Now.include('./server_script.js'),
    angularProviders: [gtfsRouteBadgeProvider],
})
