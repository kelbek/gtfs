import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { gtfsRouteListWidget } from '../widgets/gtfs_route_list/widget.now'

export const gtfsRoutesPage = SPPage({
    pageId: 'x_msag_gtfs_schedu_routes',
    title: 'Routes',
    public: true,
    draft: false,
    dynamicTitleStructure: 'GTFS – Routes - ${portal.title}',
    containers: [
        {
            $id: Now.ID['x_msag_gtfs_schedu_routes_container'],
            name: 'Routes',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_msag_gtfs_schedu_routes_row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_routes_col'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_routes_inst'],
                                    widget: gtfsRouteListWidget,
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
