import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

/**
 * GtfsPublicService — the single encapsulated query API for anonymous portal access
 * (Work Package 5, Sections 6 and 7.5).
 *
 * SECURITY: deliberately NOT client-callable (no GlideAjax) and package_private, so only
 * same-scope widget server scripts can reach it. All ACL-bypassing GlideRecord access is
 * guarded in code: whitelisted methods, type-checked and bounded inputs, addQuery-only
 * filtering, active-feed scoping, and minimal field return. Reviewing this Script Include
 * is a mandatory go-live checkpoint.
 */
export const GtfsPublicService = ScriptInclude({
    $id: Now.ID['GtfsPublicService'],
    name: 'GtfsPublicService',
    script: Now.include('../../server/script-includes/gtfs-public-service.js'),
    description: 'Encapsulated, whitelisted read API for the anonymous GTFS portal (stop search, departures, routes, trips).',
    clientCallable: false,
    accessibleFrom: 'package_private',
})
