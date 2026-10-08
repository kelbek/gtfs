import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { gtfsAdmin } from '../roles.now'

/**
 * Admin-only ACLs on the GTFS data tables (Work Package 7, Section 7.5).
 *
 * WP1 relied on `createAccessControls`/`userRole`, but no ACL records were ever produced,
 * leaving these tables open at the ACL layer (only `allowWebServiceAccess: false` blocked
 * direct REST). These explicit allow-if-admin record ACLs close that gap: every CRUD
 * operation requires the x_msag_gtfs_schedu.admin role, with adminOverrides so the system
 * admin retains access.
 *
 * The public portal is unaffected: GtfsPublicService reads via plain server-side
 * GlideRecord, which does not enforce ACLs — the intended single gateway for anonymous
 * users. The import/post-process/activation pipeline also writes via plain GlideRecord /
 * transform maps, so it is not blocked by these rules.
 *
 * Each rule is written out in full (no spread, no shared const array) because Fluent files
 * allow only literal property assignments and reject readonly arrays.
 */

// feed
Acl({ $id: Now.ID['acl_feed_read'], type: 'record', table: 'x_msag_gtfs_schedu_feed', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_feed_create'], type: 'record', table: 'x_msag_gtfs_schedu_feed', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_feed_write'], type: 'record', table: 'x_msag_gtfs_schedu_feed', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_feed_delete'], type: 'record', table: 'x_msag_gtfs_schedu_feed', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })

// agency
Acl({ $id: Now.ID['acl_agency_read'], type: 'record', table: 'x_msag_gtfs_schedu_agency', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_agency_create'], type: 'record', table: 'x_msag_gtfs_schedu_agency', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_agency_write'], type: 'record', table: 'x_msag_gtfs_schedu_agency', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_agency_delete'], type: 'record', table: 'x_msag_gtfs_schedu_agency', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })

// stop
Acl({ $id: Now.ID['acl_stop_read'], type: 'record', table: 'x_msag_gtfs_schedu_stop', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_stop_create'], type: 'record', table: 'x_msag_gtfs_schedu_stop', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_stop_write'], type: 'record', table: 'x_msag_gtfs_schedu_stop', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_stop_delete'], type: 'record', table: 'x_msag_gtfs_schedu_stop', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })

// route
Acl({ $id: Now.ID['acl_route_read'], type: 'record', table: 'x_msag_gtfs_schedu_route', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_route_create'], type: 'record', table: 'x_msag_gtfs_schedu_route', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_route_write'], type: 'record', table: 'x_msag_gtfs_schedu_route', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_route_delete'], type: 'record', table: 'x_msag_gtfs_schedu_route', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })

// trip
Acl({ $id: Now.ID['acl_trip_read'], type: 'record', table: 'x_msag_gtfs_schedu_trip', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_trip_create'], type: 'record', table: 'x_msag_gtfs_schedu_trip', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_trip_write'], type: 'record', table: 'x_msag_gtfs_schedu_trip', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_trip_delete'], type: 'record', table: 'x_msag_gtfs_schedu_trip', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })

// stop_time
Acl({ $id: Now.ID['acl_stop_time_read'], type: 'record', table: 'x_msag_gtfs_schedu_stop_time', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_stop_time_create'], type: 'record', table: 'x_msag_gtfs_schedu_stop_time', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_stop_time_write'], type: 'record', table: 'x_msag_gtfs_schedu_stop_time', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_stop_time_delete'], type: 'record', table: 'x_msag_gtfs_schedu_stop_time', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })

// calendar
Acl({ $id: Now.ID['acl_calendar_read'], type: 'record', table: 'x_msag_gtfs_schedu_calendar', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_calendar_create'], type: 'record', table: 'x_msag_gtfs_schedu_calendar', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_calendar_write'], type: 'record', table: 'x_msag_gtfs_schedu_calendar', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_calendar_delete'], type: 'record', table: 'x_msag_gtfs_schedu_calendar', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })

// cal_date
Acl({ $id: Now.ID['acl_cal_date_read'], type: 'record', table: 'x_msag_gtfs_schedu_cal_date', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_cal_date_create'], type: 'record', table: 'x_msag_gtfs_schedu_cal_date', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_cal_date_write'], type: 'record', table: 'x_msag_gtfs_schedu_cal_date', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_cal_date_delete'], type: 'record', table: 'x_msag_gtfs_schedu_cal_date', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })

// service_day
Acl({ $id: Now.ID['acl_service_day_read'], type: 'record', table: 'x_msag_gtfs_schedu_service_day', operation: 'read', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_service_day_create'], type: 'record', table: 'x_msag_gtfs_schedu_service_day', operation: 'create', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_service_day_write'], type: 'record', table: 'x_msag_gtfs_schedu_service_day', operation: 'write', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
Acl({ $id: Now.ID['acl_service_day_delete'], type: 'record', table: 'x_msag_gtfs_schedu_service_day', operation: 'delete', decisionType: 'allow', roles: [gtfsAdmin], adminOverrides: true, active: true })
