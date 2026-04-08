# Dashboard derived metrics (pilot)

Shared **selector/derivation** layer over learner backbone attempts, mistake log, SRS cards, and optional mistake-review state. No charts, no mastery inference beyond what the stored numerators imply.

## Files

| Path | Role |
|------|------|
| `assets/js/portal-core/data/dashboardDerivedMetrics.js` | Pure selectors + `buildDashboardDerivedMetricsSnapshot`, `buildHonestDashboardPilotHtml`, `formatDashboardDerivedMetricsLines` (legacy list) |
| `makro1/js/features/dashboard.js` | Inserts `buildHonestDashboardPilotHtml` (structured pilot panel) |
| `makro1/css/styles.css` | `.dash-honest-pilot` / `.dhp-*`, `.hac-pilot-note` |
| `assets/js/portal-core/ui/renderer.js` | Optional `homeLernDashboardPilotNote` under Lern-Dashboard card |
| `makro1/js/ui/renderer.js` | Sets `homeLernDashboardPilotNote` (makro1-only home hint) |

## Derived metrics (exact)

| Metric | Status | Data dependencies |
|--------|--------|-------------------|
| `attempts.total` | **supported** when module logs attempts | `listLearnerAttempts({ module_slug, limit })` → `{module}_attempts_v1` |
| `attempts.by_context` | **supported** | Same; uses `context` on each attempt |
| `attempts.recent_concept_schnelltest` | **supported** if any such attempts exist | `CONCEPT_SCHNELLTEST` + `score`, `meta.finish_reason` |
| `attempts.recent_quick_exam` | **not_available** until wired | `QUICK_EXAM` — makro1 does not append step-Schnelltest attempts yet |
| `attempts.recent_full_exam` | **supported** after full-exam submit (makro1 pilot) | `FULL_EXAM` + `score`, `meta` |
| `attempts.first_recorded_per_item_concept_schnelltest` | **partial** | Earliest logged response per `item_id` across sessions; ignores later retakes; not the same as “first human try before any log” |
| `mistakes.total` | **supported** when mistakes logged | `listMistakeLogEntries` → `{module}_mistakes_v1` |
| `mistakes.by_source` | **supported** | `source` field on entries |
| `mistakes.reviewable_open` / `reviewable_done` | **supported** when `mistakeReviewKey` + `storage` passed | Mistake list + `loadReviewedMap` (pilot review key) |
| `srs.due_count` / `srs.due_next` | **supported** | `loadSRS()` + `listDueReviewItems` (cards need `due`, `ease`, `interval`) |

The snapshot includes `metric_support[]` describing tier per logical metric (`supported` | `partial` | `not_available`).

## Explicit non-claims

- **No** course-wide mastery % from this module (existing dashboard “Ø Genauigkeit” remains separate, from progress aggregates).
- **No** progress bars added for these metrics.
- **No** imputation when logs are empty (lines say “—” or explain missing binding).

## Integration (other modules)

```javascript
import {
  buildDashboardDerivedMetricsSnapshot,
  formatDashboardDerivedMetricsLines
} from '…/portal-core/data/dashboardDerivedMetrics.js';

const snap = buildDashboardDerivedMetricsSnapshot({
  moduleSlug: COURSE_CONFIG.slug,
  listLearnerAttempts,
  listMistakeLogEntries,
  loadSRS,
  storage: localStorage,
  mistakeReviewKey: MISTAKE_REVIEW_KEY // optional
});
```

## Missing before a “serious” dashboard

1. **Attempt logging** for step-based Schnelltest (`QUICK_EXAM`) and other contexts where pedagogy already exists.
2. **Stable item/concept refs** on all logged mistakes for drill-down.
3. **Time bounds** / session windows (e.g. “last 7 days”) as first-class filters.
4. **Cross-cutting goals** (learning objectives) — not in storage today.
5. **Validated first-try** semantics (would need ordered item-level history or explicit attempt counters per item).
