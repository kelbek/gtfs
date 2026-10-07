import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * GtfsLifecycle — activation (staging→active with old-feed archiving), feed reset,
 * and batched deletion/cleanup of archived feeds (Section 5.2 steps 10–11, 5.6).
 */
export const GtfsLifecycle = ScriptInclude({
    $id: Now.ID['GtfsLifecycle'],
    name: 'GtfsLifecycle',
    script: Now.include('../../server/script-includes/gtfs-lifecycle.js'),
    description: 'Feed activation, reset, and batched cleanup of archived feeds.',
    accessibleFrom: 'package_private',
})
