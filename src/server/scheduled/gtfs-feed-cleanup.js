/**
 * GTFS Feed Cleanup — deletes one batch of data from archived feeds that are beyond
 * retention (every archived feed except the most recent one), spreading the deletion of
 * large feeds across many runs so the instance stays responsive (Section 5.6).
 *
 * The job is a no-op until a second activation produces a beyond-retention archived
 * feed, so it is safe to leave running on a quiet instance.
 */
;(function () {
    try {
        var result = new x_msag_gtfs_schedu.GtfsLifecycle().cleanupArchivedFeeds(100000)
        if (result.deleted > 0) {
            gs.info(
                '[GTFS cleanup] Deleted ' +
                    result.deleted +
                    ' rows from feed ' +
                    result.feed +
                    ' (' +
                    result.remaining +
                    ' remaining).',
            )
        } else {
            gs.debug('[GTFS cleanup] ' + (result.note || 'nothing to do'))
        }
    } catch (e) {
        gs.error('[GTFS cleanup] failed: ' + e)
    }
})()
