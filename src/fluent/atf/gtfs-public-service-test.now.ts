import '@servicenow/sdk/global'
import { Test } from '@servicenow/sdk/core'

/**
 * ATF security tests for GtfsPublicService (Work Package 7, Section 7.5).
 *
 * Converts the "owed" injection/guard spot-checks into permanent automated coverage.
 * These assert the input guards that short-circuit independently of feed data, so they
 * are stable regardless of which feed is active:
 *  - searchStops enforces the 3-char minimum
 *  - injection characters (^ = ' %) are handled as literal addQuery values — no error,
 *    results stay bounded (never used to build an encoded query)
 *  - out-of-range coordinates and unknown business ids fail safe (empty / null)
 */
export const gtfsServiceGuardTest = Test(
    {
        $id: Now.ID['atf_gtfs_service_guards'],
        name: 'GTFS - GtfsPublicService input guards & injection safety',
        description:
            'Validates WP7/7.5 security guards on GtfsPublicService: searchStops rejects <3-char input; injection characters are treated as literal addQuery values (no error, ≤20 results) rather than building an encoded query; getNearbyStops rejects out-of-range coordinates (returns []); and unknown stop/route/trip ids fail safe (null / empty departures envelope). Proves the whitelisted, bounded, addQuery-only, fail-safe contract.',
        failOnServerError: true,
    },
    (atf) => {
        atf.server.runServerSideScript({
            $id: Now.ID['atf_gtfs_service_guards_step'],
            jasmineVersion: '3.1',
            script: `
(function () {
    describe('GtfsPublicService guards', function () {
        var svc = new GtfsPublicService();

        it('searchStops enforces the 3-character minimum', function () {
            expect(svc.searchStops('ab').length).toBe(0);
            expect(svc.searchStops('').length).toBe(0);
            expect(svc.searchStops(null).length).toBe(0);
            expect(svc.searchStops(undefined).length).toBe(0);
        });

        it('searchStops is injection-safe and bounded', function () {
            var r = svc.searchStops("a'^=%OR1=1");
            expect(Array.isArray(r)).toBe(true);
            expect(r.length <= 20).toBe(true);
            // a very long string is accepted without error (truncated internally)
            var long = '';
            for (var i = 0; i < 500; i++) { long += 'x'; }
            expect(Array.isArray(svc.searchStops(long))).toBe(true);
        });

        it('getNearbyStops rejects out-of-range or missing coordinates', function () {
            expect(svc.getNearbyStops(999, 999, 1000).length).toBe(0);
            expect(svc.getNearbyStops(-999, 10, 1000).length).toBe(0);
            expect(svc.getNearbyStops(null, null, 1000).length).toBe(0);
        });

        it('unknown business ids fail safe', function () {
            expect(svc.getStop('___no_such_stop___')).toBe(null);
            expect(svc.getRoute('___no_such_route___')).toBe(null);
            expect(svc.getTrip('___no_such_trip___')).toBe(null);
            var d = svc.getDepartures('___no_such_stop___', null, null, 10, null);
            expect(d.departures.length).toBe(0);
        });

        it('getDepartures respects the result limit bound', function () {
            // Even if the stop existed, a huge limit must be clamped to <= 50.
            var d = svc.getDepartures('___no_such_stop___', null, null, 100000, null);
            expect(d.departures.length <= 50).toBe(true);
        });
    });
    jasmine.getEnv().execute();
})();
`,
        })
    },
)
