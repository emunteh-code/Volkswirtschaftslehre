# Full-Exam Mistake Review Pass 1

## Scope
- Focused on surfacing existing full-exam concept-tagged mistake signals.
- Prioritized modules improved by concept-tagging pass 1:
  - `mikro1`
  - `makro1`
  - `makro2`
- No dashboard redesign, no broad UI rewrite, no fake attribution.

## Audit baseline
- Full-exam mistake entries already flow into learner backbone (`source: full_exam`) when concept tags exist at runtime question level.
- Existing mistake-review UI listed entries and filters but did not summarize full-exam concept signals.
- Existing dashboard pilot showed mistake counts by source but not full-exam concept grouping/repeat misses/untagged visibility.

## What changed

### 1) Mistake-review UI: added full-exam concept signal section
- File: `assets/js/portal-core/features/mistakeReview.js`
- Added additive summary block `Probeklausur-Konzeptsignale` (only shown when full-exam mistakes exist), with:
  - full-exam mistakes grouped by concept (top list),
  - repeated concept misses (`>=2`),
  - explicit untagged full-exam mistake count.
- Signal policy:
  - Uses only logged `source: full_exam` entries and existing `concept_id`.
  - Untagged entries are shown as blind spot, not force-mapped.

### 2) Dashboard pilot: added full-exam concept metrics and rendering
- File: `assets/js/portal-core/data/dashboardDerivedMetrics.js`
- Added `summarizeFullExamMistakesByConcept(mistakes)` and included result in snapshot:
  - `mistakes.full_exam_concepts.total`
  - `mistakes.full_exam_concepts.tagged`
  - `mistakes.full_exam_concepts.untagged`
  - `mistakes.full_exam_concepts.by_concept`
  - `mistakes.full_exam_concepts.ranked_concepts`
  - `mistakes.full_exam_concepts.repeated_miss_concepts`
- Extended `buildHonestDashboardPilotHtml(...)` with section `Probeklausur-Fehler nach Konzept`:
  - top concepts,
  - repeated misses (`>=2`),
  - explicit partial-state note when untagged full-exam mistakes remain.

## Modules improved
- `mikro1`, `makro1`, `makro2` now surface these signals in existing flows (because they use the shared backbone/dashboard/mistake-review modules and received concept tagging in pass 1).

## Exact new review/dashboard signals exposed
- Mistake Review:
  - grouped full-exam mistakes by concept,
  - repeated full-exam concept misses (`>=2`),
  - count of full-exam mistakes without concept tags.
- Dashboard pilot:
  - full-exam mistakes by concept (ranked),
  - repeated miss concepts (`>=2`),
  - explicit partial status when untagged full-exam mistakes exist.

## Exact files changed
- `assets/js/portal-core/features/mistakeReview.js`
- `assets/js/portal-core/data/dashboardDerivedMetrics.js`
- `docs/audits/full-exam-mistake-review-pass-1.md`

## Remaining limitations / blind spots
- Signals are local-browser only (learner backbone storage model).
- Quality depends on runtime full-exam concept tagging coverage:
  - untagged items remain visible as ungrouped counts only.
- Mixed-topic full-exam groups that remain untagged in pass 1 cannot be safely attributed in this pass.
- Threshold for “repeated miss” is intentionally simple (`>=2` logged mistakes per concept); no temporal weighting or mastery inference added.
