# GTFS Schedule — Admin Operations Runbook

How to import, validate, activate, and maintain a GTFS feed. All admin actions require the
**`x_msag_gtfs_schedu.admin`** role (the system `admin` also has access).

---

## 1. Prepare the source files

A GTFS feed is a ZIP of `.txt` (CSV) files. Unzip it locally. The MVP uses:
`agency.txt`, `feed_info.txt` (optional), `stops.txt`, `routes.txt`, `trips.txt`,
`stop_times.txt`, `calendar.txt`, `calendar_dates.txt`.

> ⚠️ **Save each file as UTF-8 _without_ a BOM.** A byte-order mark corrupts the first
> column header (e.g. `trip_id` becomes `\ufefftrip_id`), so that column never maps and
> the import silently drops the data. In VS Code use *Save with Encoding → UTF-8* (not
> "UTF-8 with BOM"); in Excel avoid the "CSV UTF-8" export.

---

## 2. Create a feed

**GTFS Schedule → Create New Feed.** Give it a name; `Status` defaults to **Importing**.
Keep only **one** feed in `importing`/`staging` at a time while you work.

---

## 3. Load the CSVs into staging

**GTFS Schedule → GTFS Data Sources** lists the 8 sources. For each file you have:

1. Open the matching source (e.g. **GTFS - stops.txt**) and attach the CSV (paperclip).
2. Optionally **Test Load 20 Records** to sanity-check the column mapping.
3. Use **Load All Records** to load it into staging.

> ⚠️ **Load each file exactly once with "Load All Records".** The transforms are
> **insert-only (no coalesce)**, so loading the same file twice produces duplicate rows.
> If you used "Test Load 20 Records", still finish with one "Load All Records" — the runner
> processes every un-processed import set, and test-load rows are already consumed.

Staging column names are `u_<gtfs_header>` (e.g. `u_stop_id`). Standard GTFS headers map
automatically.

---

## 4. Run the pipeline (feed form buttons)

Open the feed record. The buttons run **in the background** (they return immediately);
watch progress in the **Validation log** field and the `cnt_*` counters.

| Button | What it does | When visible |
|---|---|---|
| **Start Import** | Runs all 8 transform maps in dependency order (agency → feed_info → stops → routes → calendar → calendar_dates → trips → stop_times) into the data tables. | importing / staging |
| **Post-process & Validate** | Builds service days, stop hierarchy, trip metrics & `is_last_stop`, statistics; runs the validation rules; a clean feed moves to **staging**. | importing / staging |
| **Activate** | Re-validates, archives the current active feed, makes this feed **active** (synchronous — immediate pass/fail). | staging |
| **Reset Feed** | Deletes all data for the feed and returns it to **importing** so you can re-import. | not active |
| **Clean Up Archived Feeds** | Deletes one batch from archived-beyond-retention feeds (also runs hourly). | always |

**Typical flow:** Create feed → load CSVs once → **Start Import** → **Post-process &
Validate** → review the log → **Activate** → check `/gtfs`.

### Reading the Validation log

The log is the single observability surface. After a run you should see lines like:

```
[stop_times] inserted=15
[process] started 2026-10-08 05:57:43
=== Validation 2026-10-08 05:57:43 ===
Result: PASS
WARN:  1 trip(s) have fewer than 2 stops
[process] completed; feed ready to activate
```

- `[<file>] inserted=N` / skip counters (`missing_trip`, `missing_stop`, `flex_skipped`) — from import.
- `=== Validation … ===` block with `Result: PASS` or `ERROR:`/`WARN:` lines — from validation.
- `[<op>] started … / completed …` or `[<op>] ERROR: …` — from the background dispatcher.

A feed with any `ERROR:` cannot be activated; fix the source and re-import.

---

## 5. Verify on the portal

Open **`/gtfs`** (anonymous). Search a stop, open its departures, browse routes, open a trip.

> The departures board defaults to **today**. If the sample feed is only valid for past
> dates (e.g. the Google demo feed covers 2007), pick a date inside the feed's validity in
> the departures date picker — otherwise the board is correctly empty.

---

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| **Button "does nothing", counters stay 0** | `cnt_*` are set by **Post-process & Validate**, not Start Import — this is normal after import. Check the Validation log for `[op]` markers / errors. If a `[op] ERROR:` line appears, read it. |
| **Import ran but a table is empty** | A header didn't map — most often a **BOM** on the file (see §1), or the file wasn't loaded into staging. Re-save UTF-8 no-BOM and re-load. |
| **Duplicate rows after import** | A file was loaded more than once with "Load All Records" (insert-only, no coalesce). **Reset Feed** and load each file once. |
| **`unknown operation` in the system log** | Pre-fix behavior (resolved): the dispatcher now coerces the event args. Ensure the latest app version is installed. |
| **Activation blocked** | Validation found blocking errors — see the `ERROR:` lines in the Validation log. Fix the source and re-import. |
| **Install from the SDK times out (~240s)** | Large installs can exceed the tool's cap. Install from the Now SDK CLI / IDE instead (no cap). Ensure the project metadata is in sync first. |
| **"metadata changed / resync required"** | The instance drifted from the project (often because loading a feed auto-created extra staging columns — see Known Limitations). Resync, reconcile the two staging tables to `extends: 'sys_import_set_row'`, rebuild, reinstall. |

---

## Known limitations & operational notes

- **Agency timezone / DST (Section 6.3).** Scoped code cannot convert to an arbitrary
  `agency_timezone` (`GlideDateTime.setTimeZone` is blocked in scope). Default "now/today"
  for the departure board uses the **instance** timezone. Run the instance in the agency's
  timezone, or have users pass an explicit date/time. The service-day boundary around a DST
  change is a documented approximation.
- **Staging-column drift.** When a feed contains optional GTFS columns the staging table
  doesn't declare (e.g. `block_id`, `shape_id`, `shape_dist_traveled`), the Data Source
  loader auto-creates `u_*` columns. These are harmless (the import ignores them) but a
  subsequent SDK **sync** represents them as an illegal self-`augments` on the staging
  table and breaks the build. Fix: keep the two tables as `extends: 'sys_import_set_row'`
  in source (the common extras are already declared). A feed with *different* extra columns
  can reintroduce this — reconcile the same way.
- **Performance (not yet measured at scale).** Import and post-processing run in the
  background for this reason. The trip-metrics pass loops **trips** (~130k) via the
  `(trip, stop_sequence)` index rather than scanning all ~2M `stop_time` rows. A
  production-scale feed should be measured before go-live (concept WP7 performance item).
- **Retention / cleanup.** The `GTFS Feed Cleanup` scheduled job runs hourly and deletes
  one batch of data from archived feeds beyond retention (keeps the active feed + the most
  recent archived one). You can also trigger a batch via **Clean Up Archived Feeds**.
- **Cross-scope privileges.** `Start Import` runs a background Script Action that needs
  cross-scope access to `sys_import_set` (read/write) and
  `ImportSetTransformer.transformAllMaps` (execute). These are declared in source
  (`src/fluent/import/cross-scope-privileges.now.ts`) so a fresh install has them; without
  them the import silently no-ops.
