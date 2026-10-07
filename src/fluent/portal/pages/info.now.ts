import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { gtfsFeedInfoWidget } from '../widgets/gtfs_feed_info/widget.now'

export const gtfsInfoPage = SPPage({
    pageId: 'x_msag_gtfs_schedu_info',
    title: 'Info',
    public: true,
    draft: false,
    dynamicTitleStructure: 'GTFS – Info - ${portal.title}',
    containers: [
        {
            $id: Now.ID['x_msag_gtfs_schedu_info_container'],
            name: 'Info',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_msag_gtfs_schedu_info_row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_info_col'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_info_inst'],
                                    widget: gtfsFeedInfoWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
