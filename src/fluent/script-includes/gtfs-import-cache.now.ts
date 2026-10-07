import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * GtfsImportCache — per-run lookup cache (route/trip/stop maps), skip counters,
 * current-feed resolution, and the per-file transform row handlers used by the
 * GTFS transform maps (Section 5.3).
 */
export const GtfsImportCache = ScriptInclude({
    $id: Now.ID['GtfsImportCache'],
    name: 'GtfsImportCache',
    script: Now.include('../../server/script-includes/gtfs-import-cache.js'),
    description: 'Per-import-run cache, counters and transform row handlers for the GTFS import chain.',
    accessibleFrom: 'package_private',
})
