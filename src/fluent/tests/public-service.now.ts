import '@servicenow/sdk/global'
import { Test } from '@servicenow/sdk/core'

/**
 * GtfsPublicService unit tests (Work Package 5 / Section 9).
 *
 * A single server-side Jasmine suite builds a small synthetic ACTIVE feed in beforeAll,
 * exercises GtfsPublicService, and tears the fixtures down in afterAll so the test is
 * repeatable and leaves no data behind. Fixtures are inserted with setWorkflow(false) so
 * the "single active feed" business rule does not interfere, and the feed's activated_on
 * is set far in the future so GtfsPublicService._feed() deterministically selects it.
 *
 * Covered Section 9 cases: 1 (25:10 after-midnight), 5 (last stop excluded),
 * 6 (pickup_type=1 excluded), 11 (umlaut search equivalence), 12 (<3-char guard),
 * plus the 7.5 injection-safety guarantee for id/query parameters.
 */
Test(
    {
        $id: Now.ID['test_public_service'],
        name: 'GTFS - GtfsPublicService unit tests',
        description:
            'Builds a synthetic active feed and asserts GtfsPublicService behavior: umlaut-equivalent and <3-char stop search, the departure board excluding last stops and pickup_type=1 rows, a 25:10:00 trip surfacing as an early-morning departure the next day, and injection-safe id/query parameters.',
        failOnServerError: true,
    },
    (atf) => {
        atf.server.runServerSideScript({
            $id: Now.ID['test_public_service_script'],
            jasmineVersion: '3.1',
            script: `(function () {
    var SCOPE = 'x_msag_gtfs_schedu_';
    var FEED = SCOPE + 'feed', AGENCY = SCOPE + 'agency', STOP = SCOPE + 'stop',
        ROUTE = SCOPE + 'route', TRIP = SCOPE + 'trip', ST = SCOPE + 'stop_time',
        SVCDAY = SCOPE + 'service_day';
    var FEED_NAME = 'ATF Synthetic Feed (do not keep)';
    var u = new GtfsUtil();

    function ins(table, data) {
        var gr = new GlideRecord(table);
        gr.initialize();
        for (var k in data) { if (data.hasOwnProperty(k)) gr.setValue(k, data[k]); }
        gr.setWorkflow(false);
        return gr.insert();
    }
    function wipe(feedId) {
        var tables = [ST, TRIP, ROUTE, STOP, SVCDAY, AGENCY];
        for (var i = 0; i < tables.length; i++) {
            var d = new GlideRecord(tables[i]);
            d.addQuery('feed', feedId);
            d.setWorkflow(false);
            d.deleteMultiple();
        }
        var f = new GlideRecord(FEED);
        if (f.get(feedId)) { f.setWorkflow(false); f.deleteRecord(); }
    }
    function stopName(name) { return u.normalizeSearchName(name); }

    var feedId;

    describe('GtfsPublicService', function () {
        beforeAll(function () {
            // remove any leftover synthetic feed from a prior run
            var old = new GlideRecord(FEED);
            old.addQuery('name', FEED_NAME);
            old.query();
            while (old.next()) { wipe(old.getUniqueValue()); }

            feedId = ins(FEED, { name: FEED_NAME, status: 'active',
                agency_timezone: 'Europe/Berlin', activated_on: '2099-12-31 00:00:00' });
            ins(AGENCY, { feed: feedId, agency_name: 'Test Verkehr', agency_timezone: 'Europe/Berlin' });

            // service S1 runs on both the query day and the day before (for after-midnight)
            ins(SVCDAY, { feed: feedId, service_id: 'S1', date: '2026-10-10' });
            ins(SVCDAY, { feed: feedId, service_id: 'S1', date: '2026-10-09' });

            var station = ins(STOP, { feed: feedId, stop_id: 'ST', stop_name: 'München Hauptbahnhof',
                stop_name_search: stopName('München Hauptbahnhof'), location_type: '1', is_searchable: true });
            var pa = ins(STOP, { feed: feedId, stop_id: 'PA', stop_name: 'München Hbf Gleis 1',
                stop_name_search: stopName('München Hbf Gleis 1'), location_type: '0', is_searchable: true,
                parent_station: station, platform_code: '1' });
            var pc = ins(STOP, { feed: feedId, stop_id: 'PC', stop_name: 'Endstation',
                stop_name_search: stopName('Endstation'), location_type: '0', is_searchable: true });

            var r1 = ins(ROUTE, { feed: feedId, route_id: 'R1', route_short_name: 'R1',
                display_name: 'R1', mode_group: 'bus', color_bg: 'FFFFFF', color_fg: '000000' });

            function stopTime(tripSys, stopSys, seq, depSec, lastStop, pickup) {
                ins(ST, { feed: feedId, trip: tripSys, stop: stopSys, stop_sequence: seq,
                    departure_sec: depSec, arrival_sec: depSec, is_last_stop: lastStop,
                    pickup_type: pickup, route: r1, route_short_name: 'R1',
                    service_id: 'S1', direction_id: '0' });
            }

            // T1: normal departure 10:00 at PA (INCLUDED)
            var t1 = ins(TRIP, { feed: feedId, trip_id: 'T1', route: r1, service_id: 'S1',
                direction_id: '0', trip_headsign: 'Endstation' });
            stopTime(t1, pa, 1, 36000, false, '0');
            stopTime(t1, pc, 2, 36600, true, '0');

            // T3: departure at PA 10:01 but pickup_type=1 (EXCLUDED)
            var t3 = ins(TRIP, { feed: feedId, trip_id: 'T3', route: r1, service_id: 'S1', direction_id: '0' });
            stopTime(t3, pa, 1, 36060, false, '1');

            // T4: PA is this trip's last stop (EXCLUDED)
            var t4 = ins(TRIP, { feed: feedId, trip_id: 'T4', route: r1, service_id: 'S1', direction_id: '0' });
            stopTime(t4, pc, 1, 36120, false, '0');
            stopTime(t4, pa, 2, 36180, true, '0');

            // T2: after-midnight 25:10 at PA (INCLUDED as 01:10 next-service-day)
            var t2 = ins(TRIP, { feed: feedId, trip_id: 'T2', route: r1, service_id: 'S1',
                direction_id: '0', trip_headsign: 'Nachtlinie' });
            stopTime(t2, pa, 1, 90600, false, '0'); // 25:10:00
            stopTime(t2, pc, 2, 91200, true, '0');
        });

        afterAll(function () { if (feedId) wipe(feedId); });

        function tripIds(board) {
            var ids = [];
            for (var i = 0; i < board.departures.length; i++) ids.push(board.departures[i].trip_id);
            return ids;
        }

        it('finds the active feed', function () {
            expect(new GtfsPublicService().getFeedInfo()).not.toBeNull();
        });

        it('stop search treats "Muenchen" and "München" the same (case 11)', function () {
            var a = new GtfsPublicService().searchStops('Muenchen');
            var b = new GtfsPublicService().searchStops('München');
            expect(a.length).toBeGreaterThan(0);
            expect(b.length).toBe(a.length);
        });

        it('stop search with fewer than 3 characters returns nothing (case 12)', function () {
            expect(new GtfsPublicService().searchStops('Mu').length).toBe(0);
        });

        it('departure board excludes last stops and pickup_type=1 (cases 5, 6)', function () {
            var board = new GtfsPublicService().getDepartures('PA', '2026-10-10', 0, 20, null);
            var ids = tripIds(board);
            expect(ids).toContain('T1');
            expect(ids).not.toContain('T3'); // pickup_type = 1
            expect(ids).not.toContain('T4'); // PA is the last stop of T4
        });

        it('a 25:10:00 trip appears as an early-morning departure the next day (case 1)', function () {
            var board = new GtfsPublicService().getDepartures('PA', '2026-10-10', 0, 20, null);
            var t2 = null;
            for (var i = 0; i < board.departures.length; i++) {
                if (board.departures[i].trip_id === 'T2' && board.departures[i].departure === '01:10') {
                    t2 = board.departures[i];
                }
            }
            expect(t2).not.toBeNull();
        });

        it('id/query parameters are injection-safe (7.5)', function () {
            var svc = new GtfsPublicService();
            expect(svc.getStop("' OR 1=1^EQ")).toBeNull();
            expect(svc.getDepartures('PA^ORfoo=bar', '2026-10-10', 0, 20, null).departures.length).toBe(0);
            // malformed search must not throw and must return an array
            expect(svc.searchStops('ab^=%cd') instanceof Array).toBe(true);
        });
    });

    jasmine.getEnv().execute();
})();`,
        })
    },
)
