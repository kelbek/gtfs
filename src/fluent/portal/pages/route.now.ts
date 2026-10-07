import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { gtfsRouteDetailWidget } from '../widgets/gtfs_route_detail/widget.now'

export const gtfsRoutePage = SPPage({
    pageId: 'x_msag_gtfs_schedu_route',
    title: 'Route',
    public: true,
    draft: false,
    dynamicTitleStructure: 'GTFS – Route - ${portal.title}',
    containers: [
        {
            $id: Now.ID['x_msag_gtfs_schedu_route_container'],
            name: 'Route',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_msag_gtfs_schedu_route_row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_route_col'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_route_inst'],
                                    widget: gtfsRouteDetailWidget,
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
