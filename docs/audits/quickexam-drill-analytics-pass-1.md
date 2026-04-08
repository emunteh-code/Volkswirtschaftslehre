# Quick-Exam and Drill Analytics Normalization Pass 1

## Scope
- Focus: analytics normalization for quick exams, concept-Schnelltest, and drill/practice flows.
- Modules audited (migrated high-value set): `mikro1`, `makro1`, `makro2`, `statistik`, `oekonometrie`, `recht`, `jahresabschluss`.
- Rules applied: no content rewrite, no dashboard redesign, no fake concept mapping.

## Audit findings

### 1) Quick-exam logging (step-based Schnelltest)
- Comparable and already wired across audited migrated modules:
  - `mikro1`, `makro1`, `makro2`, `statistik`, `oekonometrie`, `recht`, `jahresabschluss`
- Shared behavior from `createQuickExamModule`:
  - attempt rows with `context: quick_exam`
  - mistake rows with `source: quick_exam`
  - concept attribution from step problem concept id.
- Inconsistency found before this pass:
  - attempt `meta` shape was not aligned with concept-Schnelltest (`question_count` / `item_order` absent).

### 2) Concept-Schnelltest logging
- Currently supported in audited set only where flow exists:
  - `makro1` (via `createConceptSchnelltestModule`)
- Comparable parts already present:
  - attempt rows with `context: concept_schnelltest`
  - mistake rows with `source: schnelltest_concept`
  - strict item-level `concept_id` in authoring contract.
- Inconsistency found before this pass:
  - response payload lacked explicit `concept_id` per item response.
  - mistake `ref_id` was just item id (no session namespace).

### 3) Drill/practice analytics
- Backbone enums already define drill/practice sources (`practice`, `graph_drill`, `formula_drill`, `mixed_review`), but audited migrated modules currently do not emit these rows.
- Result:
  - cross-flow drill/practice analytics were structurally possible but effectively empty.
  - dashboard/review needed explicit normalized visibility of this blind spot.

## Normalization changes implemented

### A) Attempt payload consistency
- File: `assets/js/portal-core/features/exam.js`
- Change:
  - quick-exam attempt `meta` now includes:
    - `question_count`
    - `item_order` (`idx_n:conceptId`)
- Why:
  - aligns payload shape closer to concept-Schnelltest metadata while preserving behavior.

### B) Concept-Schnelltest payload normalization
- File: `assets/js/portal-core/features/conceptSchnelltest.js`
- Changes:
  - item response now includes `concept_id` in `responses[q.id]`.
  - mistake `ref_id` normalized to session-scoped format:
    - `concept_schnelltest:${attemptId}:${itemId}`
- Why:
  - improves concept-level comparability across quick-exam/concept-check flows.
  - reduces cross-session `ref_id` ambiguity without changing UX.

### C) Dashboard/review compatibility for normalized flow analytics
- File: `assets/js/portal-core/data/dashboardDerivedMetrics.js`
- Changes:
  - added normalized mistake-flow summary for:
    - `quick_exam`
    - `schnelltest_concept`
    - `practice`
    - `step`
    - `graph_drill`
    - `formula_drill`
    - `mixed_review`
  - added `mistakes.normalized_flows` to snapshot.
  - added metric support rows:
    - `quick_exam_mistakes_by_concept`
    - `concept_check_mistakes_by_concept`
    - `drill_practice_mistakes_by_concept`
  - added additive dashboard block:
    - **Schnelltest/Drill-Analytik (normalisiert)**
    - shows total vs concept-tagged rows and explicit drill/practice zero-signal notice.
  - updated stale metric notes to neutral wiring-dependent wording (no module-specific outdated claims).

## Exact files changed
- `assets/js/portal-core/features/exam.js`
- `assets/js/portal-core/features/conceptSchnelltest.js`
- `assets/js/portal-core/data/dashboardDerivedMetrics.js`
- `docs/audits/quickexam-drill-analytics-pass-1.md`

## Exact flows improved
- Quick exam (step-based Schnelltest): normalized attempt metadata.
- Concept-Schnelltest: normalized response concept attribution + session-scoped mistake references.
- Dashboard analytics compatibility: normalized cross-flow source reporting for quick/concept/drill families with explicit blind-spot reporting.

## Normalization strategy used
- Only additive shape normalization on already logged data.
- Reused existing backbone enums and shared modules (no per-module ad-hoc schema).
- No inferred concept mapping; only existing concept ids were surfaced.
- Exposed unavailable drill/practice signals explicitly instead of faking coverage.

## Remaining blockers
- `concept_schnelltest` flow is currently present only in `makro1` among audited modules; other modules cannot emit that context/source yet.
- Drill/practice sources (`practice`, `graph_drill`, `formula_drill`, `mixed_review`) are defined but not emitted by current migrated module flows, so normalized drill analytics remain mostly empty.
- `step` mistake-source remains available in schema but is not currently emitted by the audited migrated quick-exam/concept-check flows.
