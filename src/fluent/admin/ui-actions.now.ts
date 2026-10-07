import '@servicenow/sdk/global'
import { UiAction } from '@servicenow/sdk/core'

/**
 * Admin UI Actions on gtfs_feed (Work Package 4, Section 5.2 steps 0–11 + 5.6).
 *
 * All are server-side, admin-only form buttons. The heavy operations (import,
 * post-process, reset, cleanup) are queued to the background via GtfsAdmin.queue()
 * and return immediately; Activate runs synchronously because it is fast and the admin
 * needs the immediate pass/fail result. Progress and results are visible in the feed's
 * counters and validation_log.
 */

const ADMIN = 'x_msag_gtfs_schedu.admin'
const FEED = 'x_msag_gtfs_schedu_feed'

// Step 1–7: load the staging data (done by the admin) then run the transform chain.
UiAction({
    $id: Now.ID['ua_start_import'],
    table: FEED,
    name: 'Start Import',
    actionName: 'gtfs_start_import',
    showUpdate: true,
    order: 100,
    roles: [ADMIN],
    form: { showButton: true, style: 'primary' },
    condition: "current.status == 'importing' || current.status == 'staging'",
    hint: 'Run the transform maps over the loaded staging data, in order, for this feed.',
    script: `new GtfsAdmin().queue('import', current);
gs.addInfoMessage('GTFS import queued in the background. Watch the feed counters and validation log; run "Post-process & Validate" once the import has finished.');
action.setRedirectURL(current);`,
})

// Step 8–9: post-processing + validation. On a clean result the feed moves to staging.
UiAction({
    $id: Now.ID['ua_process'],
    table: FEED,
    name: 'Post-process & Validate',
    actionName: 'gtfs_process',
    showUpdate: true,
    order: 200,
    roles: [ADMIN],
    form: { showButton: true, style: 'primary' },
    condition: "current.status == 'importing' || current.status == 'staging'",
    hint: 'Build service days, trip metrics and statistics, then run the validation rules.',
    script: `new GtfsAdmin().queue('process', current);
gs.addInfoMessage('Post-processing and validation queued in the background. The validation report will appear in the validation log; a clean feed moves to "staging" and can then be activated.');
action.setRedirectURL(current);`,
})

// Step 10: activation (synchronous — re-validates, archives the old active feed).
UiAction({
    $id: Now.ID['ua_activate'],
    table: FEED,
    name: 'Activate',
    actionName: 'gtfs_activate',
    showUpdate: true,
    order: 300,
    roles: [ADMIN],
    form: { showButton: true, style: 'primary' },
    condition: "current.status == 'staging'",
    hint: 'Validate and make this feed the active feed, archiving the previous one.',
    script: `var result = new GtfsLifecycle().activate(current.getUniqueValue());
if (result.activated) {
    var msg = 'Feed activated.';
    if (result.archived && result.archived.length) { msg += ' Previous active feed archived.'; }
    gs.addInfoMessage(msg);
    if (result.warnings && result.warnings.length) {
        gs.addInfoMessage(result.warnings.length + ' validation warning(s) — see the validation log.');
    }
} else {
    gs.addErrorMessage('Activation blocked: ' + ((result.errors || []).join('; ') || 'validation failed') + ' (see the validation log).');
}
action.setRedirectURL(current);`,
})

// 5.6: reset a feed so a failed import can restart cleanly (destructive).
UiAction({
    $id: Now.ID['ua_reset'],
    table: FEED,
    name: 'Reset Feed',
    actionName: 'gtfs_reset',
    showUpdate: true,
    order: 400,
    roles: [ADMIN],
    form: { showButton: true, style: 'destructive' },
    condition: "current.status != 'active'",
    hint: 'Delete all data for this feed and return it to "importing" so the import can be re-run.',
    script: `new GtfsAdmin().queue('reset', current);
gs.addInfoMessage('Feed reset queued in the background. All data for this feed will be deleted and the status returned to "importing".');
action.setRedirectURL(current);`,
})

// 5.6: trigger a batch of archived-feed cleanup on demand (also runs on a schedule).
UiAction({
    $id: Now.ID['ua_cleanup'],
    table: FEED,
    name: 'Clean Up Archived Feeds',
    actionName: 'gtfs_cleanup',
    showUpdate: true,
    order: 500,
    roles: [ADMIN],
    form: { showButton: true, style: 'unstyled' },
    list: { showBannerButton: true, style: 'unstyled' },
    hint: 'Delete one batch of data from archived feeds beyond retention (also runs hourly on a schedule).',
    script: `new GtfsAdmin().queue('cleanup', current);
gs.addInfoMessage('Archived-feed cleanup queued in the background.');
action.setRedirectURL(current);`,
})
