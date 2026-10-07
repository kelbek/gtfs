import '@servicenow/sdk/global'
import { ServicePortal } from '@servicenow/sdk/core'
import { gtfsTheme } from './theme/theme.now'
import { gtfsHomePage } from './pages/home.now'

/**
 * GTFS public Service Portal (Work Package 6). Login-free, anonymous timetable
 * portal: custom header/footer theme, home/stop/routes/route/trip/info pages, all
 * data read via GtfsPublicService in widget server scripts.
 */
export const gtfsPortal = ServicePortal({
    $id: Now.ID['x_msag_gtfs_schedu_portal'],
    title: 'GTFS Timetable',
    urlSuffix: 'gtfs',
    homePage: gtfsHomePage,
    theme: gtfsTheme,
    hidePortalName: true,
    defaultPortal: false,
    inactive: false,
})
