import '@servicenow/sdk/global'
import { SPTheme } from '@servicenow/sdk/core'
import { gtfsHeader } from '../header/header.now'
import { gtfsFooter } from '../footer/footer.now'

/**
 * GTFS portal theme (Section 7.1). Login-free custom header + footer, transit-blue
 * palette via sp-rgb() UXF tokens, and accessibility helpers (visible focus, badge /
 * departure styles). SCSS is inlined so the build compiles it with the portal.
 */
export const gtfsTheme = SPTheme({
    $id: Now.ID['x_msag_gtfs_schedu_theme'],
    name: 'GTFS Timetable Theme',
    header: gtfsHeader,
    footer: gtfsFooter,
    fixedHeader: true,
    turnOffScssCompilation: false,
    customCss: `
$brand-primary: sp-rgb(--now-color--primary-2, #0b5394) !default;
$link-color:    sp-rgb(--now-color--interactive-1, #0b5394) !default;
$body-bg:       sp-rgb(--now-color--background-secondary, #f4f6f8) !default;
$text-color:    sp-rgb(--now-color--label-primary, #1b1b1b) !default;

/* Accessibility: always-visible keyboard focus (WCAG 2.4.7 / BITV) */
a:focus, button:focus, input:focus, select:focus, [tabindex]:focus {
  outline: 3px solid #ffbf47;
  outline-offset: 2px;
}

.gtfs-header { background: #0b5394; }
.gtfs-nav { display: flex; align-items: center; flex-wrap: wrap; gap: 16px;
  max-width: 1140px; margin: 0 auto; padding: 12px 16px; }
.gtfs-brand { color: #ffffff; font-weight: 700; font-size: 20px; text-decoration: none; margin-right: auto; }
.gtfs-nav-links { list-style: none; display: flex; gap: 20px; margin: 0; padding: 0; }
.gtfs-nav-links a { color: #ffffff; text-decoration: none; font-size: 16px; }
.gtfs-nav-links a:hover, .gtfs-nav-links a:focus { text-decoration: underline; }

.gtfs-footer { padding: 24px 16px; color: #4a4a4a; border-top: 1px solid #d9dee3; margin-top: 40px; }
.gtfs-footer .gtfs-footer-inner { max-width: 1140px; margin: 0 auto; display: flex;
  justify-content: space-between; flex-wrap: wrap; gap: 12px; font-size: 14px; }

.gtfs-badge { display: inline-block; padding: 2px 8px; border-radius: 4px;
  font-weight: 700; font-size: 14px; line-height: 1.6; white-space: nowrap; }
.gtfs-badge .fa { margin-right: 4px; }

.gtfs-departure-time { font-weight: 700; font-size: 18px; }
.gtfs-nextday { display: inline-block; font-size: 12px; color: #8a1f11; margin-left: 4px; }
.gtfs-muted { color: #666666; }
.gtfs-result-list { list-style: none; padding: 0; margin: 0; }
.gtfs-result-list > li { padding: 10px 4px; border-bottom: 1px solid #eceff1; }
.gtfs-stat { font-size: 14px; }
.gtfs-card { background: #ffffff; border: 1px solid #e3e8ec; border-radius: 6px; padding: 16px; margin-bottom: 16px; }
.gtfs-hero { background: #0b5394; color: #ffffff; padding: 32px 16px; border-radius: 6px; margin-bottom: 24px; }
.gtfs-hero h1 { color: #ffffff; margin-top: 0; }
`,
})
