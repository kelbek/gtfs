import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const gtfsNearbyWidget = SPWidget({
    $id: Now.ID['x_msag_gtfs_schedu_gtfs_nearby'],
    id: 'x_msag_gtfs_schedu_gtfs_nearby',
    public: true,
    name: 'GTFS Nearby Stops',
    htmlTemplate: Now.include('./template.html'),
    serverScript: Now.include('./server_script.js'),
    clientScript: Now.include('./client_script.js'),
})
