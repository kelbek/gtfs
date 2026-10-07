import '@servicenow/sdk/global'
import { CrossScopePrivilege } from '@servicenow/sdk/core'

/**
 * Cross-scope privileges required by the import chain (WP7 hardening).
 *
 * GtfsImportRunner runs in a background (Script Action) context when the admin clicks
 * "Start Import". From the scoped app it must read/update the global sys_import_set table
 * and execute GlideImportSetTransformer.transformAllMaps. Without these declarations the
 * platform blocks those calls and the import silently does nothing on a fresh install
 * (they were only auto-granted on the dev instance by interactive diagnostics).
 *
 * The Glide properties API is deliberately NOT declared here — the runner/cache now treat
 * the current-feed property as best-effort and fall back to the in-progress feed.
 */

CrossScopePrivilege({
    $id: Now.ID['xsp_import_set_read'],
    status: 'allowed',
    operation: 'read',
    targetName: 'sys_import_set',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

CrossScopePrivilege({
    $id: Now.ID['xsp_import_set_write'],
    status: 'allowed',
    operation: 'write',
    targetName: 'sys_import_set',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

CrossScopePrivilege({
    $id: Now.ID['xsp_transform_all_maps'],
    status: 'allowed',
    operation: 'execute',
    targetName: 'ImportSetTransformer.transformAllMaps',
    targetScope: 'global',
    targetType: 'scriptable',
})
