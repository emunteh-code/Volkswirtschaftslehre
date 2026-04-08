# Makro2 platform backbone migration (audit)

**Date:** 2026-04-08  
**Benchmark:** `mikro1` shell + `makro1` pilot (manifest, learner keys, exam backbone, mistake review, honest dashboard metrics).

## Summary

Makro II is aligned with the shared **content manifest**, **learner-state keys**, **full-exam attempt logging**, **mistake review**, and **dashboard-derived metrics** patterns. Visible learning flows (graphs, step Schnelltest, mastery, coursework tasks) are unchanged; additions are mostly data-layer and optional UI blocks.

## Exact files changed

| File | Change |
|------|--------|
| `makro2/js/data/contentManifest.js` | **New** — `PROVENANCE_BY_CONCEPT`, `FULL_EXAM_PROVENANCE`, `MAKRO2_MODE_INDEX`, `getMakro2PilotBridgePayload`, getters |
| `makro2/js/data/courseConfig.js` | `contentManifestVersion: '2026.1-pilot'` |
| `makro2/js/data/srsConfig.js` | `ATTEMPTS_KEY`, `MISTAKES_KEY`, `MISTAKE_REVIEW_KEY` |
| `makro2/js/state/storage.js` | Backbone keys + `extraKeys` for review; exports `append/list` attempts & mistakes |
| `makro2/js/features/fullExam.js` | `moduleSlug` + `onExamSubmitted` → `appendLearnerAttempt` |
| `makro2/js/features/mistakeReview.js` | **New** — `createMistakeReviewModule` wiring |
| `makro2/js/features/dashboard.js` | Fehlerprotokoll button, `buildHonestDashboardPilotHtml`, same SRS/weak blocks as before |
| `makro2/js/ui/renderer.js` | `homeLernDashboardPilotNote` (home card hint) |
| `makro2/js/main.js` | `mistakeReview`, `portalBridge` → `window.__makro2PilotManifest` |
| `makro2/css/styles.css` | Styles for honest pilot panel, mistake review, home pilot note |

## Comparison to mikro1 / mikro1 shell

| Capability | makro1 (pilot) | makro2 (after) |
|------------|----------------|----------------|
| `contentManifest` + bridge | `makro1.contentManifest`, `__makro1PilotManifest` | `makro2.contentManifest`, `__makro2PilotManifest` |
| Primary PDF refs per concept | VL/Zusammenfassung paths | **Empty arrays** + honest notes (gap below) |
| `ATTEMPTS_KEY` / `MISTAKES_KEY` | Yes | Yes |
| Full exam → attempts | Yes | Yes |
| Konzept-Check + items | Yes | **No** (not added; no invented drill set) |
| Mistake review UI | Yes | Yes |
| Honest dashboard metrics block | Yes | Yes |
| Coursework / Makro2-specific graphs | N/A | **Preserved** |

## Provenance / manifest notes

- **Per-concept `source_refs`:** Empty until stable course file paths are curated (same pattern allowed by `buildProvenanceByConceptFromPrimaryRefs` — refs default to `[]`).
- **Full exams:** `FULL_EXAM_PROVENANCE` marks all three probeklausuren as `platform-added-drill` with narrative notes only (no fake PDF paths).
- **`contentManifestVersion`:** Matches makro1 pilot string for tooling simplicity; bump when schema or semantics change.

## Integration points

1. **Learner backbone:** `makro2_attempts_v1`, `makro2_mistakes_v1`, `makro2_mistake_review_v1` (review map cleared with `clearAllData` via `extraKeys`).
2. **Exam backbone:** Full exam submit → `toLearnerAttemptPayloadFromExamSummary` → `appendLearnerAttempt`.
3. **Dashboard metrics:** `buildDashboardDerivedMetricsSnapshot` + `buildHonestDashboardPilotHtml` (Konzept-Check section will stay empty until a concept-check or `QUICK_EXAM` logging is added).
4. **App shell:** `createPortalApp({ mistakeReview, portalBridge })`.

## Remaining gaps vs platform standard

1. **Primary source paths:** Populate `MAKRO2_CONCEPT_PRIMARY_REFS` (or equivalent) with real VL/Übung PDF paths when the course map is fixed — required for parity with makro1’s `direct-source` / file-level traceability.
2. **Konzept-Check pilot:** Optional; would need authored `conceptSchnelltestItems` + `conceptSchnelltest` in `main.js` (like makro1).
3. **Step-Schnelltest attempt logging:** `QUICK_EXAM` context still not appended from `createQuickExamModule` globally; makro2 inherits that gap (dashboard footnote already states this).
4. **`appendMistakeLogEntry` call sites:** Mistake log fills only where features call it (e.g. future wiring from exams/drills); empty log is honest.
5. **Renderer / mode index in ingest pipelines:** If a generator expects `makro1` only, extend it for `makro2.contentManifest` (outside this repo change set).

## Risks

- **New localStorage keys:** Existing users keep old progress; attempts/mistakes start empty until used.
- **Payload size:** `__makro2PilotManifest` embeds mode index + provenance keys — acceptable for devtools; not loaded on critical path for learners beyond one assignment on boot.
- **Empty `source_refs`:** Downstream tools must treat “distilled + no path” as **not** direct-source until paths are added.

## Deployability

Static site unchanged: same `index.html` → `main.js` ES modules. No server requirement.
