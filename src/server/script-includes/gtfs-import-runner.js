/**
 * GtfsImportRunner — orchestrates the ordered GTFS import chain (Section 5.2, step 1–7).
 *
 * Responsibilities (Work Package 2):
 *  - Pin the "current feed" via a system property so every transform row handler in
 *    GtfsImportCache can scope its inserts to the feed being imported.
 *  - Run the transform maps in the mandatory order (agency, feed_info, stops, routes,
 *    calendar, calendar_dates, trips, stop_times) because later files resolve
 *    references to earlier ones.
 *
 * Two entry points:
 *  - transform(feedSysId): the Variant-A manual flow — the admin has already uploaded
 *    each CSV to its Data Source and loaded it into staging; this runs the transforms
 *    in order over the most recent import set of each staging table.
 *  - loadAndTransformAll(feedSysId): full automation that also loads each Data Source
 *    attachment into staging first.
 *
 * NOTE (concept Risks #1/#2): the exact scoped availability of GlideImportSetLoader /
 * GlideImportSetTransformer is release-dependent and must be confirmed in the PoC. All
 * platform calls are guarded and log actionable messages instead of throwing, so the
 * chain degrades gracefully. Post-processing, validation, activation and cleanup are
 * Work Package 3 and are intentionally NOT performed here.
 */
var GtfsImportRunner = Class.create()

GtfsImportRunner.FEED_PROPERTY = 'x_msag_gtfs_schedu.import.current_feed'

// The chain, in mandatory execution order (Section 5.2).
GtfsImportRunner.CHAIN = [
    { file: 'agency.txt', dataSource: 'GTFS - agency.txt', staging: 'x_msag_gtfs_schedu_imp_agency' },
    { file: 'feed_info.txt', dataSource: 'GTFS - feed_info.txt', staging: 'x_msag_gtfs_schedu_imp_feed' },
    { file: 'stops.txt', dataSource: 'GTFS - stops.txt', staging: 'x_msag_gtfs_schedu_imp_stops' },
    { file: 'routes.txt', dataSource: 'GTFS - routes.txt', staging: 'x_msag_gtfs_schedu_imp_routes' },
    { file: 'calendar.txt', dataSource: 'GTFS - calendar.txt', staging: 'x_msag_gtfs_schedu_imp_cal' },
    { file: 'calendar_dates.txt', dataSource: 'GTFS - calendar_dates.txt', staging: 'x_msag_gtfs_schedu_imp_caldt' },
    { file: 'trips.txt', dataSource: 'GTFS - trips.txt', staging: 'x_msag_gtfs_schedu_imp_trips' },
    { file: 'stop_times.txt', dataSource: 'GTFS - stop_times.txt', staging: 'x_msag_gtfs_schedu_imp_stimes' },
]

GtfsImportRunner.prototype = {
    initialize: function () {},

    // --------------------------------------------------------------- current feed
    // Best-effort: the Glide properties API can be blocked for a scoped app in a
    // background context without a cross-scope privilege. If so, we swallow the error —
    // GtfsImportCache.feedId() falls back to the in-progress (importing/staging) feed,
    // so feed scoping still works without the property.
    setCurrentFeed: function (feedSysId) {
        try {
            gs.setProperty(GtfsImportRunner.FEED_PROPERTY, feedSysId ? String(feedSysId) : '')
        } catch (e) {
            gs.warn('[GTFS import] Could not set current-feed property (falling back to in-progress feed): ' + e)
        }
        return feedSysId
    },

    getCurrentFeed: function () {
        try {
            return gs.getProperty(GtfsImportRunner.FEED_PROPERTY, '')
        } catch (e) {
            return ''
        }
    },

    clearCurrentFeed: function () {
        try {
            gs.setProperty(GtfsImportRunner.FEED_PROPERTY, '')
        } catch (e) {
            /* ignore */
        }
    },

    // ------------------------------------------------------------ transform (A)
    /**
     * Run the transform maps in order over the staging data that has already been
     * loaded by the admin. Returns a per-file summary.
     */
    transform: function (feedSysId) {
        if (feedSysId) this.setCurrentFeed(feedSysId)
        var results = []
        for (var i = 0; i < GtfsImportRunner.CHAIN.length; i++) {
            var step = GtfsImportRunner.CHAIN[i]
            results.push(this._transformStaging(step))
        }
        return results
    },

    // ------------------------------------------------------ load + transform (B)
    /**
     * Full automation: for each file, load the Data Source attachment into staging and
     * then transform it, in order.
     */
    loadAndTransformAll: function (feedSysId) {
        if (feedSysId) this.setCurrentFeed(feedSysId)
        var results = []
        for (var i = 0; i < GtfsImportRunner.CHAIN.length; i++) {
            var step = GtfsImportRunner.CHAIN[i]
            var loaded = this._loadDataSource(step)
            if (loaded) results.push(this._transformStaging(step))
            else results.push({ file: step.file, status: 'load_skipped' })
        }
        return results
    },

    // -------------------------------------------------------------------- helpers
    _loadDataSource: function (step) {
        var ds = new GlideRecord('sys_data_source')
        if (!ds.get('name', step.dataSource)) {
            gs.warn('[GTFS import] Data Source not found: ' + step.dataSource)
            return false
        }
        try {
            var loader = new GlideImportSetLoader()
            var importSetGR = loader.getImportSetGr(ds)
            var ran = loader.loadImportSetTable(importSetGR, ds)
            importSetGR.state = 'loaded'
            importSetGR.update()
            return ran !== false
        } catch (e) {
            gs.error(
                '[GTFS import] Could not load Data Source "' +
                    step.dataSource +
                    '" from script (verify GlideImportSetLoader scoped access in this release — concept Risk #2): ' +
                    e,
            )
            return false
        }
    },

    _transformStaging: function (step) {
        // Transform EVERY not-yet-processed import set for this staging table (oldest
        // first), not just the newest. A single "Load All Records" produces one set; but
        // repeated loads and "Test Load 20 Records" previews leave several sets, and the
        // newest is often empty / already-consumed. Processing them all means no loaded
        // rows are missed. (Test-Load sets contribute 0 rows since their rows are already
        // marked processed.) NOTE: because the transforms are insert-only (no coalesce),
        // loading the same file twice with "Load All Records" produces duplicate target
        // rows — load each file exactly once per feed.
        var importSet = new GlideRecord('sys_import_set')
        importSet.addQuery('table_name', step.staging)
        importSet.addQuery('state', '!=', 'processed')
        importSet.orderBy('sys_created_on')
        importSet.query()

        var processed = []
        var errors = []
        while (importSet.next()) {
            try {
                var transformer = new GlideImportSetTransformer()
                transformer.transformAllMaps(importSet)
                importSet.setValue('state', 'processed')
                importSet.setWorkflow(false)
                importSet.update()
                processed.push(importSet.getValue('number'))
            } catch (e) {
                gs.error(
                    '[GTFS import] Transform failed for ' +
                        step.file +
                        ' import set ' +
                        importSet.getValue('number') +
                        ' (verify the ImportSetTransformer cross-scope privilege): ' +
                        e,
                )
                errors.push(importSet.getValue('number') + ': ' + e)
            }
        }

        if (!processed.length && !errors.length) {
            return { file: step.file, status: 'no_import_set', detail: 'Load ' + step.file + ' into staging first.' }
        }
        return {
            file: step.file,
            status: errors.length ? 'error' : 'transformed',
            importSets: processed,
            errors: errors.length ? errors : undefined,
        }
    },

    type: 'GtfsImportRunner',
}
