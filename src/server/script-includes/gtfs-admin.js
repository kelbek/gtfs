/**
 * GtfsAdmin — the admin-module dispatcher (Work Package 4).
 *
 * The admin UI Actions call `queue(op, feed)`, which fires the
 * x_msag_gtfs_schedu.feed_op event. A Script Action then calls `dispatch(op, feedId)`
 * in the background, so the heavy operations (import of ~2M rows, post-processing)
 * never run inside the interactive UI transaction. Activation is the one exception —
 * it is fast (aggregate queries only) and is called synchronously from its UI Action
 * so the admin gets immediate pass/fail feedback.
 *
 * dispatch() simply routes to the WP2/WP3 Script Includes; all real logic lives there.
 */
var GtfsAdmin = Class.create()

GtfsAdmin.EVENT = 'x_msag_gtfs_schedu.feed_op'
GtfsAdmin.FEED_TABLE = 'x_msag_gtfs_schedu_feed'

GtfsAdmin.prototype = {
    initialize: function () {},

    /** Fire the background event for a feed operation. parm1 = op, parm2 = feed sys_id. */
    queue: function (op, feed) {
        if (!feed) return false
        gs.eventQueue(GtfsAdmin.EVENT, feed, op, feed.getUniqueValue())
        return true
    },

    /** Background router invoked by the Script Action. */
    dispatch: function (op, feedId) {
        if (!op || !feedId) return
        switch (op) {
            case 'import':
                new GtfsImportRunner().transform(feedId)
                break
            case 'process':
                new GtfsPostProcess().run(feedId)
                var v = new GtfsValidation().validate(feedId)
                // A clean (error-free) feed becomes ready to activate.
                if (!v.hasErrors) this._setStatusIf(feedId, 'importing', 'staging')
                break
            case 'reset':
                new GtfsLifecycle().resetFeed(feedId)
                break
            case 'cleanup':
                new GtfsLifecycle().cleanupArchivedFeeds()
                break
            default:
                gs.warn('[GtfsAdmin] unknown operation: ' + op)
        }
    },

    _setStatusIf: function (feedId, fromStatus, toStatus) {
        var fg = new GlideRecord(GtfsAdmin.FEED_TABLE)
        if (fg.get(feedId) && fg.getValue('status') === fromStatus) {
            fg.setValue('status', toStatus)
            fg.update()
        }
    },

    type: 'GtfsAdmin',
}
