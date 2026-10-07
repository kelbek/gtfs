import '@servicenow/sdk/global'
import { ScriptInclude, ScriptAction, Record } from '@servicenow/sdk/core'

/**
 * WP4 async dispatch layer.
 *
 * - GtfsAdmin: dispatcher Script Include (queue + background router).
 * - x_msag_gtfs_schedu.feed_op: registered event the UI Actions fire.
 * - Script Action: runs GtfsAdmin.dispatch(op, feedId) in the background scheduler.
 */

export const GtfsAdmin = ScriptInclude({
    $id: Now.ID['GtfsAdmin'],
    name: 'GtfsAdmin',
    script: Now.include('../../server/script-includes/gtfs-admin.js'),
    description: 'Admin dispatcher: queues feed operations and routes background execution to the GTFS Script Includes.',
    accessibleFrom: 'package_private',
})

export const feedOpEvent = Record({
    $id: Now.ID['evt_feed_op'],
    table: 'sysevent_register',
    data: {
        suffix: 'feed_op',
        event_name: 'x_msag_gtfs_schedu.feed_op',
        description: 'Fired by the GTFS admin UI Actions to run a feed operation (import/process/reset/cleanup) in the background.',
        table: 'x_msag_gtfs_schedu_feed',
        fired_by: 'UI Actions on gtfs_feed via GtfsAdmin.queue()',
        priority: 100,
    },
})

ScriptAction({
    $id: Now.ID['sa_feed_op'],
    name: 'GTFS Feed Operation Dispatcher',
    eventName: 'x_msag_gtfs_schedu.feed_op',
    active: true,
    order: 100,
    description: 'Background handler for GTFS feed operations; routes to GtfsAdmin.dispatch(op, feedId).',
    script: `(function runScriptAction(/* event, current */) {
    new GtfsAdmin().dispatch(event.parm1, event.parm2);
})();`,
})
