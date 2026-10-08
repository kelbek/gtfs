import '@servicenow/sdk/global'
import { TestSuite } from '@servicenow/sdk/core'
import { gtfsUtilTest } from './gtfs-util-test.now'
import { gtfsServiceGuardTest } from './gtfs-public-service-test.now'

/**
 * Groups the GTFS unit/security tests into one runnable suite (Work Package 7).
 * Both are data-independent (pure helpers + input guards), so the suite is a stable
 * regression gate: Section 9 time/search behaviors plus the 7.5 injection/guard contract.
 */
export const gtfsTestSuite = TestSuite({
    $id: Now.ID['atf_gtfs_suite'],
    name: 'GTFS Schedule - Unit & Security',
    tests: [gtfsUtilTest, gtfsServiceGuardTest],
})
