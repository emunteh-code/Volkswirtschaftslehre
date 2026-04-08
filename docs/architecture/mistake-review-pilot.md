# Mistake review pilot

Minimal reusable **Fehlerprotokoll** over the learner backbone mistake log: filter by source and concept, link to concepts when `concept_id` is set, local „erledigt“ grouping.

## Files

| Path | Role |
|------|------|
| `assets/js/portal-core/state/mistakeReviewState.js` | Pure: partition open/done, filter, distinct keys, load/save reviewed map |
| `assets/js/portal-core/features/mistakeReview.js` | `createMistakeReviewModule` — one-page list UI |
| `assets/js/portal-core/app.js` | Optional `mistakeReview`; `window.__showMistakeReview`, `window.__mistakeReviewRefresh` |
| `makro1/js/features/mistakeReview.js` | Pilot wiring |
| `makro1/js/data/srsConfig.js` | `MISTAKE_REVIEW_KEY` |
| `makro1/js/state/storage.js` | `extraKeys: [MISTAKE_REVIEW_KEY]` so reset clears review marks |
| `makro1/js/main.js` | Passes `mistakeReview` into `createPortalApp` |
| `makro1/js/features/dashboard.js` | Entry button |

## State integration

### Mistake entries (existing)

Written by `appendMistakeLogEntry` → `{mistakesKey}` JSON array. Shape per `learnerBackbone.js`: `entry_id`, `module_slug`, `concept_id`, `source`, `ref_id`, `wrong_answer`, `timestamp`, `meta`.

Listed with `listMistakeLogEntries({ module_slug, limit, source?, concept_id? })` — the UI loads `module_slug` for the current course.

### Review marks (pilot)

Separate key, **not** part of the backbone array:

- **Key (makro1):** `makro1_mistake_review_v1`
- **Shape:** `{ "reviewed": { "[entry_id]": <timestamp_ms> } }`

„Erledigt“ is a **local checkbox** only; it does not delete mistakes or affect SRS.

## Integration points

1. **Module storage** must expose `listMistakeLogEntries` and use `MISTAKES_KEY` (already true for makro1).
2. **Define** `MISTAKE_REVIEW_KEY` and add it to `extraKeys` in `createStorageModule({ keys: { …, extraKeys: [MISTAKE_REVIEW_KEY] } })` so `clearAllData` wipes review state.
3. **Instantiate** `createMistakeReviewModule({ moduleSlug, courseLabel, listMistakeLogEntries, reviewStateKey, chapters })`.
4. **Register** in `createPortalApp({ mistakeReview })`.
5. **Entry point** — dashboard button, home card, or nav (module choice).

## Future work

- **Unmark** / undo erledigt
- **Cross-module** aggregation (multiple `MISTAKES_KEY` blobs) for a portal shell
- **Richer ref resolution** (open specific task/exam question from `ref_id` + `source`)
- **Sync** review state with spaced repetition or teacher dashboards (out of scope)

## Module-specific (unchanged)

- What gets logged (`appendMistakeLogEntry` call sites)
- Whether questions include `concept_id` / `ref_id`
- Dashboard layout beyond the single pilot button
