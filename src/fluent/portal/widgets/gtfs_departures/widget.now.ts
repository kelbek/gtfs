import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'
import { gtfsRouteBadgeProvider } from '../../providers/route-badge.now'

export const gtfsDeparturesWidget = SPWidget({
    $id: Now.ID['x_msag_gtfs_schedu_gtfs_departures'],
    id: 'x_msag_gtfs_schedu_gtfs_departures',
    name: 'GTFS Departures',
    htmlTemplate: Now.include('./template.html'),
    serverScript: Now.include('./server_script.js'),
    clientScript: Now.include('./client_script.js'),
    angularProviders: [gtfsRouteBadgeProvider],
})
