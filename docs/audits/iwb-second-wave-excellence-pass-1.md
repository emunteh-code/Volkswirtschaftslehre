# Internationale Wirtschaftsbeziehungen (IWB) — second-wave excellence pass 1

**Date:** 2026-04-08  
**Driver:** `docs/audits/benchmark-gap-audit-pass-1.md` §2.8 — IWB aligned on content, graphs, and full exams, but **`main.js`** omitted **`mistakeReview`** (closed-loop mistake routing below **mikro1**). Secondary note: baseline **`createRenderer`** only (no **`enhanceRenderedSurface`**).

**Scope:** Additive wiring and styling only — no new VL claims, no **`fullExams.js`** rewrite (audit already marks exams as strong), no renderer pipeline refactor.

---

## 1. Exact files changed

| File | Change |
|------|--------|
| `internationale-wirtschaftsbeziehungen/js/data/srsConfig.js` | Added **`ATTEMPTS_KEY`**, **`MISTAKES_KEY`**, **`MISTAKE_REVIEW_KEY`** for learner backbone + review UI state. |
| `internationale-wirtschaftsbeziehungen/js/state/storage.js` | Passed new keys into **`createStorageModule`**; exported **`appendLearnerAttempt`**, **`listLearnerAttempts`**, **`appendMistakeLogEntry`**, **`listMistakeLogEntries`**, clear helpers; **`extraKeys: [MISTAKE_REVIEW_KEY]`** so reset clears review marks. |
| `internationale-wirtschaftsbeziehungen/js/features/mistakeReview.js` | **New** — **`createMistakeReviewModule`** bound to **`COURSE_CONFIG.slug`**, **`CHAPTERS`**, **`listMistakeLogEntries`**. |
| `internationale-wirtschaftsbeziehungen/js/main.js` | Import **`mistakeReview`**; pass into **`createPortalApp`** (enables **`window.__showMistakeReview`** / refresh hook). |
| `internationale-wirtschaftsbeziehungen/js/features/exam.js` | Pass **`moduleSlug`**, **`appendLearnerAttempt`**, **`appendMistakeLogEntry`** into **`createQuickExamModule`** (Schnelltest session + per-wrong-row logging). |
| `internationale-wirtschaftsbeziehungen/js/features/fullExam.js` | Pass **`moduleSlug`**, **`appendMistakeLogEntry`**, **`onExamSubmitted`** with **`appendLearnerAttempt(toLearnerAttemptPayloadFromExamSummary(...))`** (Probeklausur backbone parity with e.g. **makro1**). |
| `internationale-wirtschaftsbeziehungen/js/features/dashboard.js` | Dashboard header comment corrected; added **„Fehlerprotokoll anzeigen“** block with short hint (optional chaining on **`__showMistakeReview`**). |
| `internationale-wirtschaftsbeziehungen/css/styles.css` | Added **`.mistake-review`** / **`.mr-*`** rules (module had no styles; page would render unstyled without this). |
| `docs/audits/iwb-second-wave-excellence-pass-1.md` | This document. |

**Verification:** `node --check` on all modified `.js` files above (exit 0).

---

## 2. Exact IWB weaknesses addressed

| Benchmark-gap item | Addressed how |
|--------------------|----------------|
| No **`mistakeReview`** in **`main.js`** | Module now supplies **`mistakeReview`** to **`createPortalApp`**; core registers **`window.__showMistakeReview`** and refresh when present. |
| Mistake data had nowhere to persist | **`ATTEMPTS_KEY`** + **`MISTAKES_KEY`** activate **`createLearnerBackboneStore`** in shared **`createStorageModule`**. |
| No learner-visible entry point | Dashboard button opens Fehlerprotokoll (same pattern as **makro1**, **statistik**, etc.). |
| Full exam / Schnelltest did not write mistakes or session attempts | **`exam.js`** and **`fullExam.js`** now pass the same optional sinks used by other portal modules so **portal-core** can append rows on wrong answers and on exam submit. |

**Not addressed (by design this pass):** **`enhanceRenderedSurface`** / custom semantic renderer stack — would be broad infrastructure, not a small wiring fix.

---

## 3. Exact new integrations / content added

- **Fehlerprotokoll UI:** Shared **`assets/js/portal-core/features/mistakeReview.js`** (filters, open/done partition, optional Probeklausur concept signals when entries carry **`concept_id`**).
- **Schnelltest:** Wrong committed answers → **`appendMistakeLogEntry`** when **`conceptId`** is present on the drawn step (same rules as **makro1**). Session summary → **`appendLearnerAttempt`** on finish.
- **Probeklausur:** On final submit, **`mistakePartialsFromExamSummary`** + **`appendMistakeLogEntry`** (when items expose concept tags per core logic); **`onExamSubmitted`** logs one attempt row via **`toLearnerAttemptPayloadFromExamSummary`**.
- **Styling:** IWB-specific copy of **makro1**-aligned **`.mr-*`** rules so the review page matches the rest of the module shell.

No new **`fullExams.js`** items, no new **`stepProblems`**, no changes to **`source-materials`** or primary PDF lists.

---

## 4. Remaining gaps (explicit) and why they remain

| Gap | Why it remains |
|-----|----------------|
| **Baseline `createRenderer`** only | Closing the gap to **mikro1**/**ökonometrie** semantic surface would require a dedicated renderer pass (hooks, HTML contracts, regression risk) — out of scope for “structurally safe” loop wiring. |
| **Honest dashboard pilot metrics** (e.g. **makro1** **`buildDashboardDerivedMetricsSnapshot`**) | Not added: would pull in extra imports and UI surface; mistake counts are visible inside Fehlerprotokoll once entries exist. |
| **Probeklausur mistakes without `conceptId`** | Portal-core only tags mistakes when exam items carry **`conceptId`** / **`concept_id`**; untagged rows still appear but without “Zum Konzept” — unchanged global behavior. |
| **Exam “realism” vs archived papers** | **`FULL_EXAM_PROVENANCE`** already states drills are authored; this pass does not claim a new exam source. |

---

## 5. Source grounding

No new academic text and no new **`source_refs`**. Keys and behavior match existing **portal-core** contracts used by other modules.
