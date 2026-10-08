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
        // The Script Action passes event.parm1/parm2, which are GlideElement objects, not
        // primitive strings. `switch` uses strict equality, so coerce to String first —
        // otherwise every case misses and we fall through to "unknown operation".
        op = op === null || op === undefined ? '' : String(op)
        feedId = feedId === null || feedId === undefined ? '' : String(feedId)
        if (!op || !feedId) return
        this._log(feedId, '[' + op + '] started ' + new GlideDateTime().getValue())
        try {
            switch (op) {
                case 'import':
                    new GtfsImportRunner().transform(feedId)
                    this._log(feedId, '[import] transform chain complete')
                    break
                case 'process':
                    new GtfsPostProcess().run(feedId)
                    var v = new GtfsValidation().validate(feedId)
                    // A clean (error-free) feed becomes ready to activate.
                    if (!v.hasErrors) this._setStatusIf(feedId, 'importing', 'staging')
                    this._log(
                        feedId,
                        '[process] ' +
                            (v.hasErrors
                                ? 'completed WITH validation errors (feed stays in its current status)'
                                : 'completed; feed ready to activate'),
                    )
                    break
                case 'reset':
                    // resetFeed clears validation_log, so log the outcome AFTER it runs.
                    new GtfsLifecycle().resetFeed(feedId)
                    this._log(feedId, '[reset] feed data cleared; status returned to importing')
                    break
                case 'cleanup':
                    new GtfsLifecycle().cleanupArchivedFeeds()
                    this._log(feedId, '[cleanup] archived-feed cleanup pass complete')
                    break
                default:
                    gs.warn('[GtfsAdmin] unknown operation: ' + op)
                    this._log(feedId, '[' + op + '] unknown operation — ignored')
            }
        } catch (e) {
            // Make background failures visible instead of silently swallowing them.
            gs.error('[GtfsAdmin] dispatch "' + op + '" failed for feed ' + feedId + ': ' + e)
            this._log(feedId, '[' + op + '] ERROR: ' + e)
        }
    },

    /** Append a line to the feed's validation_log so background progress/errors are visible. */
    _log: function (feedId, msg) {
        try {
            var fg = new GlideRecord(GtfsAdmin.FEED_TABLE)
            if (fg.get(feedId)) {
                var existing = fg.getValue('validation_log') || ''
                fg.setValue('validation_log', existing ? existing + '\n' + msg : msg)
                fg.update()
            }
        } catch (e) {
            gs.error('[GtfsAdmin] could not write to validation_log: ' + e)
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
