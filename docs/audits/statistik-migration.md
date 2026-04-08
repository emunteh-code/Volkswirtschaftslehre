# Statistik — platform backbone migration (audit + notes)

## 1. Audit: before state

| Area | Backbone expectation (`learning-data-model.md`, `module-quality-standard.md`) | Statistik (before) | Mikro1 benchmark | Makro1 reference |
|------|--------------------------------------------------------------------------------|--------------------|------------------|------------------|
| Module identity | Stable `module_slug` in config + storage | No `slug` / `examCollectionTitle` in `courseConfig.js` | `slug`, `examCollectionTitle` | + `contentManifestVersion` |
| Learner backbone | `ATTEMPTS_KEY`, `MISTAKES_KEY`, storage re-exports | Only core progress/SRS keys | Same gap as Mikro1 | Wired |
| Full exam | `moduleSlug` + `onExamSubmitted` → `appendLearnerAttempt` | Plain `createFullExamModule` | Same gap | Wired |
| Schnelltest (quick exam) | Optional attempt + mistake logging | No backbone logging | Same gap | N/A (uses separate Konzept-Check in Makro) |
| Mistake review | `mistakeReview` + `MISTAKE_REVIEW_KEY` | Not mounted | Not mounted | Wired |
| Dashboard | Derived metrics + honest pilot HTML + Fehlerprotokoll CTA | Legacy Mikro-style dashboard only | Legacy | Wired |
| Content manifest | `contentManifest.js` + devtools `portalBridge` | Absent | Absent | Present |

**Conclusion:** Statistik already used `createPortalApp`, `createRenderer`, shared `exam` / `fullExam` / `storage` factory, R-practice blocks, and rich local content (theory, steps, R lab). The gap was **learner-state and manifest wiring**, not the shell.

## 2. What changed (additive)

### 2.1 Statistik module

- **`statistik/js/data/courseConfig.js`** — `slug: 'statistik'`, `examCollectionTitle`, `contentManifestVersion`.
- **`statistik/js/data/srsConfig.js`** — `ATTEMPTS_KEY`, `MISTAKES_KEY`, `MISTAKE_REVIEW_KEY`.
- **`statistik/js/state/storage.js`** — Opt-in learner backbone (same pattern as Makro1/Makro2).
- **`statistik/js/features/fullExam.js`** — `moduleSlug` + `onExamSubmitted` → `appendLearnerAttempt(toLearnerAttemptPayloadFromExamSummary(...))`.
- **`statistik/js/features/exam.js`** — Passes `moduleSlug`, `appendLearnerAttempt`, `appendMistakeLogEntry` into shared quick-exam module (requires portal-core support; see below).
- **`statistik/js/features/dashboard.js`** — Fehlerprotokoll button, `buildDashboardDerivedMetricsSnapshot` + `buildHonestDashboardPilotHtml`, unchanged legacy stats/sections below.
- **`statistik/js/features/mistakeReview.js`** — New thin adapter around `createMistakeReviewModule`.
- **`statistik/js/data/contentManifest.js`** — New: `PROVENANCE_BY_CONCEPT` (empty primary PDF map + honest layer notes), `FULL_EXAM_PROVENANCE` for `klausur_2024`, `STATISTIK_MODE_INDEX`, `getStatistikContentManifestBridgePayload()`.
- **`statistik/js/main.js`** — Registers `mistakeReview`, `portalBridge` → `window.__statistikContentManifest`.
- **`statistik/js/ui/renderer.js`** — `homeLernDashboardPilotNote` for the Lern-Dashboard card (text-only disclosure).
- **`statistik/css/styles.css`** — Styles for `.dash-honest-pilot`, `.dhp-*`, `.hac-pilot-note` (aligned with Makro1 pilot panel).

### 2.2 Shared portal-core (optional hook)

- **`assets/js/portal-core/features/exam.js`** — Optional `moduleSlug`, `appendLearnerAttempt`, `appendMistakeLogEntry`. When provided: one attempt per finished Schnelltest (`ATTEMPT_CONTEXT.QUICK_EXAM`), per-wrong-answer mistake rows (`MISTAKE_SOURCE.QUICK_EXAM`), skip rows in `responses`. **Modules that omit these parameters behave exactly as before.**

### 2.3 Unrelated deploy fix (same edit pass)

- **`makro1/css/styles.css`** — Removed stray merge conflict markers around the dashboard pilot comment (broken CSS).

## 3. Provenance / manifest semantics

- **`STATISTIK_CONCEPT_PRIMARY_REFS`** is intentionally empty (Makro2-style): no invented PDF paths. Layer notes state that theory is source-distilled / platform drill as per `buildProvenanceByConceptFromPrimaryRefs` defaults.
- **`FULL_EXAM_PROVENANCE.klausur_2024`** — `platform-added-drill` with explicit note that the probeklausur is portal-authored practice, not an archive scan.
- Devtools payload: `window.__statistikContentManifest` after boot (`schema: 'statistik.contentManifest'`).

## 4. Preserved behavior and module strengths

- No removal of R-practice blocks, step problems, graphs copy, right panel, or dashboard layout beyond **inserting** the mistake CTA + honest metrics block **above** existing `dash-stats`.
- No Konzept-Check / `conceptSchnelltest` added (would require authored MCQ items; avoids dead buttons).
- `graphPanel.js` still carries legacy Mikro graph IDs; manifest notes this honestly. `hasGraph` is false for real Statistik concept ids until graph panel is realigned.

## 5. Remaining gaps and risks

| Gap / risk | Severity | Note |
|------------|----------|------|
| No per-concept primary `source_refs` (PDF paths) | Medium | Add when course map is stable; bump `contentManifestVersion`. |
| `graphPanel.js` vs Statistik `CHAPTERS` ids | Low | Misleading file comment; graphs not bound to Statistik concepts. Future cleanup is content/UI, not backbone. |
| Mikro1 (benchmark) still without learner manifest | N/A | Documented for parity planning; out of this migration scope. |
| Quick-exam logging is new in portal-core | Low | Only active when module passes hooks; Statistik is the first adopter. |
| Full-exam mistakes not auto-appended to mistake log | Low | Same as Makro1 unless `mistakePartialsFromExamSummary` is wired later. |

## 6. Files touched (checklist)

- `assets/js/portal-core/features/exam.js`
- `makro1/css/styles.css` (conflict marker removal only)
- `statistik/css/styles.css`
- `statistik/js/data/contentManifest.js` (new)
- `statistik/js/data/courseConfig.js`
- `statistik/js/data/srsConfig.js`
- `statistik/js/features/dashboard.js`
- `statistik/js/features/exam.js`
- `statistik/js/features/fullExam.js`
- `statistik/js/features/mistakeReview.js` (new)
- `statistik/js/main.js`
- `statistik/js/state/storage.js`
- `statistik/js/ui/renderer.js`
- `docs/audits/statistik-migration.md` (this file)
