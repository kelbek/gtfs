import '@servicenow/sdk/global'
import { ScheduledScript } from '@servicenow/sdk/core'

/**
 * GTFS Feed Cleanup — periodic batched deletion of archived-beyond-retention feeds
 * (Section 5.6). Runs hourly; each run deletes at most one 100k-row batch and is a
 * no-op while only the current + most recent archived feed exist (within retention).
 */
ScheduledScript({
    $id: Now.ID['gtfs_feed_cleanup'],
    name: 'GTFS Feed Cleanup',
    script: Now.include('../../server/scheduled/gtfs-feed-cleanup.js'),
    frequency: 'periodically',
    executionInterval: { hours: 1 },
    advanced: true,
})
