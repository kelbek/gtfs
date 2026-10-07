import { gs, GlideRecord } from '@servicenow/glide'

/**
 * Enforces the Section 4.1 rule: at most one gtfs_feed may be active at a time.
 *
 * Runs before insert/update, gated by the filter condition status=active. If any other
 * feed is already active, the save is aborted with an error message. The normal
 * activation path (GtfsLifecycle.activate) archives the previous active feed first, so
 * this rule only blocks accidental double-activations.
 */
export function feedSingleActive(
    current: GlideRecord<'x_msag_gtfs_schedu_feed'>,
    _previous: GlideRecord<'x_msag_gtfs_schedu_feed'>,
): void {
    if (current.getValue('status') !== 'active') return

    const other = new GlideRecord('x_msag_gtfs_schedu_feed')
    other.addQuery('status', 'active')
    other.addQuery('sys_id', '!=', current.getUniqueValue())
    other.setLimit(1)
    other.query()
    if (other.next()) {
        gs.addErrorMessage(
            'Another feed is already active ("' +
                other.getValue('name') +
                '"). Archive it before activating this feed.',
        )
        current.setAbortAction(true)
    }
}
