import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * GtfsImportRunner — orchestrates the ordered GTFS import chain (Section 5.2) and
 * manages the "current feed" system property that scopes every transform insert.
 */
export const GtfsImportRunner = ScriptInclude({
    $id: Now.ID['GtfsImportRunner'],
    name: 'GtfsImportRunner',
    script: Now.include('../../server/script-includes/gtfs-import-runner.js'),
    description: 'Runs the GTFS transform maps in order and pins the current feed for the import run.',
    accessibleFrom: 'package_private',
})
