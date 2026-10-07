import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { feedSingleActive } from '../../server/business-rules/feed-single-active'

/**
 * "At most one active feed" (Section 4.1). Before insert/update on gtfs_feed, gated by
 * status=active, aborts the save if another feed is already active.
 */
BusinessRule({
    $id: Now.ID['br_feed_single_active'],
    name: 'GTFS - At most one active feed',
    table: 'x_msag_gtfs_schedu_feed',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    filterCondition: 'status=active',
    script: feedSingleActive,
})
