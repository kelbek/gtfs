import '@servicenow/sdk/global'
import { Test } from '@servicenow/sdk/core'

/**
 * ATF unit tests for GtfsUtil (Work Package 5 / 7, Section 9 behaviors).
 *
 * Pure, stateless helpers — no feed data required, so these are stable regression tests.
 * Covers the after-midnight time handling (25:10:00), the umlaut search-normalization
 * equivalence, route_type → mode_group mapping, GTFS date parsing, and WCAG contrast
 * correction. Runs as a Jasmine suite inside a server-side ATF step.
 */
export const gtfsUtilTest = Test(
    {
        $id: Now.ID['atf_gtfs_util'],
        name: 'GTFS - GtfsUtil pure functions',
        description:
            'Validates GtfsUtil helpers with no feed dependency: toSeconds/formatHhmm wrap 25:10:00 to 01:10 next-day (Section 6.3), normalizeSearchName makes "Köln" and "Koeln" equivalent (Section 6.1), modeGroup maps route_type (3→bus, 1→subway), parseGtfsDate converts YYYYMMDD, and contrastColor corrects low-contrast pairs to meet WCAG (Section 7.4).',
        failOnServerError: true,
    },
    (atf) => {
        atf.server.runServerSideScript({
            $id: Now.ID['atf_gtfs_util_step'],
            jasmineVersion: '3.1',
            script: `
(function () {
    describe('GtfsUtil', function () {
        var u = new GtfsUtil();

        it('toSeconds handles after-midnight and empty input', function () {
            expect(u.toSeconds('25:10:00')).toBe(90600);
            expect(u.toSeconds('08:00:00')).toBe(28800);
            expect(u.toSeconds('')).toBe(null);
            expect(u.toSeconds('bad')).toBe(null);
        });

        it('formatHhmm wraps times >= 24h to the next day', function () {
            var f = u.formatHhmm(90600);
            expect(f.text).toBe('01:10');
            expect(f.nextDay).toBe(true);
            var g = u.formatHhmm(28800);
            expect(g.text).toBe('08:00');
            expect(g.nextDay).toBe(false);
        });

        it('normalizeSearchName treats umlaut and ae/oe/ue spellings as equal', function () {
            expect(u.normalizeSearchName('Köln')).toBe(u.normalizeSearchName('Koeln'));
            expect(u.normalizeSearchName('Hauptbahnhof Süd')).toBe('hauptbahnhof sued');
            expect(u.normalizeSearchName('St. Pölten-Hbf')).toBe('st poelten hbf');
        });

        it('modeGroup maps GTFS route_type values', function () {
            expect(u.modeGroup('0')).toBe('tram');
            expect(u.modeGroup('1')).toBe('subway');
            expect(u.modeGroup('2')).toBe('rail');
            expect(u.modeGroup('3')).toBe('bus');
            expect(u.modeGroup('4')).toBe('ferry');
            expect(u.modeGroup('700')).toBe('bus');
            expect(u.modeGroup('')).toBe('other');
            expect(u.modeGroup('99999')).toBe('other');
        });

        it('parseGtfsDate converts YYYYMMDD and rejects bad input', function () {
            expect(u.parseGtfsDate('20070101')).toBe('2007-01-01');
            expect(u.parseGtfsDate('bad')).toBe('');
            expect(u.parseGtfsDate('')).toBe('');
        });

        it('contrastColor corrects low-contrast pairs to meet WCAG 4.5:1', function () {
            expect(u.contrastColor('FFFFFF', 'FFFFFF')).toBe('000000');
            expect(u.contrastColor('000000', '000000')).toBe('FFFFFF');
            // already-sufficient contrast is left unchanged
            expect(u.contrastColor('0B5394', 'FFFFFF')).toBe('FFFFFF');
        });

        it('color defaults fall back to white bg / black fg', function () {
            expect(u.colorBg('')).toBe('FFFFFF');
            expect(u.colorFg('')).toBe('000000');
            expect(u.colorBg('#1a2b3c')).toBe('1A2B3C');
        });
    });
    jasmine.getEnv().execute();
})();
`,
        })
    },
)
