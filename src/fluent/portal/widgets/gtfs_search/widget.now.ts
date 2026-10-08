import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const gtfsSearchWidget = SPWidget({
    $id: Now.ID['x_msag_gtfs_schedu_gtfs_search'],
    id: 'x_msag_gtfs_schedu_gtfs_search',
    public: true,
    name: 'GTFS Stop Search',
    htmlTemplate: Now.include('./template.html'),
    serverScript: Now.include('./server_script.js'),
    clientScript: Now.include('./client_script.js'),
})
