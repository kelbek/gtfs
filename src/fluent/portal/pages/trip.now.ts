import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { gtfsTripDetailWidget } from '../widgets/gtfs_trip_detail/widget.now'

export const gtfsTripPage = SPPage({
    pageId: 'x_msag_gtfs_schedu_trip',
    title: 'Trip',
    public: true,
    draft: false,
    dynamicTitleStructure: 'GTFS – Trip - ${portal.title}',
    containers: [
        {
            $id: Now.ID['x_msag_gtfs_schedu_trip_container'],
            name: 'Trip',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_msag_gtfs_schedu_trip_row'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_msag_gtfs_schedu_trip_col'],
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_msag_gtfs_schedu_trip_inst'],
                                    widget: gtfsTripDetailWidget,
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
