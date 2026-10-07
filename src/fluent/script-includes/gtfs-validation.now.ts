import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * GtfsValidation — Section 5.5 pre-activation validation. Writes a report to
 * gtfs_feed.validation_log and returns whether the feed has blocking errors.
 */
export const GtfsValidation = ScriptInclude({
    $id: Now.ID['GtfsValidation'],
    name: 'GtfsValidation',
    script: Now.include('../../server/script-includes/gtfs-validation.js'),
    description: 'Pre-activation validation rules; writes validation_log and reports blocking errors.',
    accessibleFrom: 'package_private',
})
