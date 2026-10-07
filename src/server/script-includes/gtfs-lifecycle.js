/**
 * GtfsLifecycle — Section 5.2 (steps 10–11) and 5.6: activation, reset and the
 * batched cleanup of old feeds. These are the operations the WP4 admin UI Actions
 * will call; here they live as reusable, scriptable methods.
 *
 * Retention (5.6): keep the current (active) feed and the most recent archived one.
 * Older archived feeds are deleted in batches by the scheduled cleanup job.
 */
var GtfsLifecycle = Class.create()

GtfsLifecycle.T = {
    feed: 'x_msag_gtfs_schedu_feed',
    stop: 'x_msag_gtfs_schedu_stop',
    route: 'x_msag_gtfs_schedu_route',
    trip: 'x_msag_gtfs_schedu_trip',
    stopTime: 'x_msag_gtfs_schedu_stop_time',
    calendar: 'x_msag_gtfs_schedu_calendar',
    calDate: 'x_msag_gtfs_schedu_cal_date',
    serviceDay: 'x_msag_gtfs_schedu_service_day',
    agency: 'x_msag_gtfs_schedu_agency',
}

// Child tables cleared on reset / deleted on cleanup — biggest first.
GtfsLifecycle.CHILD_TABLES = [
    'x_msag_gtfs_schedu_stop_time',
    'x_msag_gtfs_schedu_service_day',
    'x_msag_gtfs_schedu_cal_date',
    'x_msag_gtfs_schedu_calendar',
    'x_msag_gtfs_schedu_trip',
    'x_msag_gtfs_schedu_route',
    'x_msag_gtfs_schedu_stop',
    'x_msag_gtfs_schedu_agency',
]

GtfsLifecycle.DEFAULT_BATCH = 100000

GtfsLifecycle.prototype = {
    initialize: function () {},

    /**
     * Full finalize flow for a freshly imported feed: post-process → validate →
     * activate (only if validation found no blocking errors).
     */
    finalize: function (feedId) {
        new GtfsPostProcess().run(feedId)
        return this.activate(feedId)
    },

    /**
     * Activate a staging feed. Runs validation first; aborts on errors. Archives any
     * currently active feed before flipping this one to active (so the "single active
     * feed" business rule is satisfied at every instant).
     */
    activate: function (feedId) {
        if (!feedId) return { activated: false, errors: ['no feed'] }

        var v = new GtfsValidation().validate(feedId)
        if (v.hasErrors) return { activated: false, errors: v.errors, warnings: v.warnings }

        // archive the current active feed(s)
        var archivedIds = []
        var cur = new GlideRecord(GtfsLifecycle.T.feed)
        cur.addQuery('status', 'active')
        cur.addQuery('sys_id', '!=', feedId)
        cur.query()
        while (cur.next()) {
            cur.setValue('status', 'archived')
            cur.update()
            archivedIds.push(cur.getUniqueValue())
        }

        // flip the new feed to active
        var fg = new GlideRecord(GtfsLifecycle.T.feed)
        if (!fg.get(feedId)) return { activated: false, errors: ['feed not found'] }
        fg.setValue('status', 'active')
        fg.setValue('activated_on', new GlideDateTime().getValue())
        fg.update()

        return { activated: true, archived: archivedIds, warnings: v.warnings }
    },

    /**
     * Reset a feed so a failed import can restart cleanly (5.6): delete all of its
     * child data, clear counters/log, and set status back to importing.
     */
    resetFeed: function (feedId) {
        if (!feedId) return { reset: false }
        var totalDeleted = 0
        for (var i = 0; i < GtfsLifecycle.CHILD_TABLES.length; i++) {
            totalDeleted += this._deleteAll(GtfsLifecycle.CHILD_TABLES[i], feedId)
        }
        var fg = new GlideRecord(GtfsLifecycle.T.feed)
        if (fg.get(feedId)) {
            fg.setValue('status', 'importing')
            fg.setValue('validation_log', '')
            fg.setValue('cnt_stops', 0)
            fg.setValue('cnt_routes', 0)
            fg.setValue('cnt_trips', 0)
            fg.setValue('cnt_stop_times', 0)
            fg.setValue('activated_on', '')
            fg.update()
        }
        return { reset: true, deleted: totalDeleted }
    },

    /**
     * Delete up to `batch` child rows for a feed, biggest table first. deleteMultiple
     * on a bounded set of sys_ids keeps each run responsive (5.6). Returns how many
     * were deleted this run and how many remain.
     */
    deleteFeedData: function (feedId, batch) {
        batch = batch || GtfsLifecycle.DEFAULT_BATCH
        var deleted = 0
        for (var i = 0; i < GtfsLifecycle.CHILD_TABLES.length && deleted < batch; i++) {
            deleted += this._deleteBatch(GtfsLifecycle.CHILD_TABLES[i], feedId, batch - deleted)
        }
        var remaining = this._remaining(feedId)
        return { deleted: deleted, remaining: remaining }
    },

    /**
     * Scheduled cleanup entry point: delete one batch of data from archived feeds that
     * are beyond retention (every archived feed except the most recent one). When a feed
     * has no data left, its feed record is removed.
     */
    cleanupArchivedFeeds: function (batch) {
        batch = batch || GtfsLifecycle.DEFAULT_BATCH
        var archived = []
        var ag = new GlideRecord(GtfsLifecycle.T.feed)
        ag.addQuery('status', 'archived')
        ag.orderByDesc('activated_on')
        ag.orderByDesc('sys_created_on')
        ag.query()
        while (ag.next()) archived.push(ag.getUniqueValue())

        if (archived.length <= 1) return { deleted: 0, note: 'within retention (keep most recent archived)' }

        var candidates = archived.slice(1) // keep the most recent archived
        for (var i = 0; i < candidates.length; i++) {
            var fid = candidates[i]
            var r = this.deleteFeedData(fid, batch)
            if (r.deleted > 0) return { feed: fid, deleted: r.deleted, remaining: r.remaining }
            // no data left → remove the feed record itself
            var fg = new GlideRecord(GtfsLifecycle.T.feed)
            if (fg.get(fid)) {
                fg.setWorkflow(false)
                fg.deleteRecord()
            }
        }
        return { deleted: 0, note: 'nothing to delete' }
    },

    // ------------------------------------------------------------------- helpers
    _deleteAll: function (table, feedId) {
        var gr = new GlideRecord(table)
        gr.addQuery('feed', feedId)
        gr.query()
        var n = gr.getRowCount()
        gr.setWorkflow(false)
        gr.deleteMultiple()
        return n
    },

    _deleteBatch: function (table, feedId, limit) {
        if (limit <= 0) return 0
        var ids = []
        var q = new GlideRecord(table)
        q.addQuery('feed', feedId)
        q.setLimit(limit)
        q.query()
        while (q.next()) ids.push(q.getUniqueValue())
        if (!ids.length) return 0
        var d = new GlideRecord(table)
        d.addQuery('sys_id', 'IN', ids.join(','))
        d.setWorkflow(false)
        d.deleteMultiple()
        return ids.length
    },

    _remaining: function (feedId) {
        var total = 0
        for (var i = 0; i < GtfsLifecycle.CHILD_TABLES.length; i++) {
            var ga = new GlideAggregate(GtfsLifecycle.CHILD_TABLES[i])
            ga.addQuery('feed', feedId)
            ga.addAggregate('COUNT')
            ga.query()
            if (ga.next()) total += parseInt(ga.getAggregate('COUNT'), 10) || 0
        }
        return total
    },

    type: 'GtfsLifecycle',
}
