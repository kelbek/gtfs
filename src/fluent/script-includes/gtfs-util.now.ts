import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * GtfsUtil — stateless GTFS helper functions (time parsing, date parsing,
 * search-name normalization, route_type → mode_group mapping, color defaults).
 * Shared by the import transforms (WP2) and later by GtfsPublicService (WP5).
 */
export const GtfsUtil = ScriptInclude({
    $id: Now.ID['GtfsUtil'],
    name: 'GtfsUtil',
    script: Now.include('../../server/script-includes/gtfs-util.js'),
    description: 'Stateless GTFS helpers: toSeconds, parseGtfsDate, normalizeSearchName, modeGroup, color defaults.',
    accessibleFrom: 'package_private',
})
