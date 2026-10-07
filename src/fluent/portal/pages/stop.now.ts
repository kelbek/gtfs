import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { gtfsStopDetailWidget } from '../widgets/gtfs_stop_detail/widget.now'
import { gtfsDeparturesWidget } from '../widgets/gtfs_departures/widget.now'

export const gtfsStopPage = SPPage({
    pageId: 'x_msag_gtfs_schedu_stop',
    title: 'Stop',
    public: true,
    draft: false,
    dynamicTitleStructure: 'GTFS – Stop - ${portal.title}',
    containers: [
        {
            $id: Now.ID['x_msag_gtfs_schedu_stop_container'],
            name: 'Stop',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_msag_gtfs_schedu_stop_row_detail'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_stop_col_detail'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_stop_inst_detail'],
                                    widget: gtfsStopDetailWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
                {
                    $id: Now.ID['x_msag_gtfs_schedu_stop_row_dep'],
                    order: 200,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_stop_col_dep'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_stop_inst_dep'],
                                    widget: gtfsDeparturesWidget,
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
