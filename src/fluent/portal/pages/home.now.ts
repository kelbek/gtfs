import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { gtfsFeedInfoWidget } from '../widgets/gtfs_feed_info/widget.now'
import { gtfsSearchWidget } from '../widgets/gtfs_search/widget.now'
import { gtfsNearbyWidget } from '../widgets/gtfs_nearby/widget.now'

export const gtfsHomePage = SPPage({
    pageId: 'x_msag_gtfs_schedu_home',
    title: 'Home',
    public: true,
    draft: false,
    dynamicTitleStructure: 'GTFS - Home',
    containers: [
        {
            $id: Now.ID['x_msag_gtfs_schedu_home_container'],
            name: 'Home',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_msag_gtfs_schedu_home_row_feed'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_home_col_feed'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_home_inst_feed'],
                                    widget: gtfsFeedInfoWidget,
                                    order: 100,
                                    active: true,
                                    widgetParameters: '{"compact":"true"}',
                                },
                            ],
                        },
                    ],
                },
                {
                    $id: Now.ID['x_msag_gtfs_schedu_home_row_search'],
                    order: 200,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_home_col_search'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_home_inst_search'],
                                    widget: gtfsSearchWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    $id: Now.ID['x_msag_gtfs_schedu_home_row_nearby'],
                    order: 300,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_home_col_nearby'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_home_inst_nearby'],
                                    widget: gtfsNearbyWidget,
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
