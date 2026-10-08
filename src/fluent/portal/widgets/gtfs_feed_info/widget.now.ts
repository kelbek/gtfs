import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const gtfsFeedInfoWidget = SPWidget({
    $id: Now.ID['x_msag_gtfs_schedu_gtfs_feed_info'],
    id: 'x_msag_gtfs_schedu_gtfs_feed_info',
    public: true,
    name: 'GTFS Feed Info',
    htmlTemplate: Now.include('./template.html'),
    serverScript: Now.include('./server_script.js'),
    optionSchema: [
        {
            name: 'compact',
            label: 'Compact validity banner',
            type: 'boolean',
            section: 'Presentation',
            defaultValue: 'false',
        },
    ],
})
