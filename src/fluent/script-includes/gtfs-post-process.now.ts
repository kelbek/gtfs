import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * GtfsPostProcess — Section 5.4 post-processing: stop hierarchy, service-day
 * expansion, trip metrics + is_last_stop, and feed statistics/validity.
 */
export const GtfsPostProcess = ScriptInclude({
    $id: Now.ID['GtfsPostProcess'],
    name: 'GtfsPostProcess',
    script: Now.include('../../server/script-includes/gtfs-post-process.js'),
    description: 'Post-import processing: service days, stop hierarchy, trip metrics, is_last_stop, statistics.',
    accessibleFrom: 'package_private',
})
