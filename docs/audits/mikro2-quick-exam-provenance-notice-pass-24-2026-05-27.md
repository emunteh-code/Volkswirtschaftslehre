# Mikro2 Quick Exam Provenance Notice Pass 24

Date: 2026-05-27

## Audit Finding

The Mikro2 Schnelltest draws from `STEP_PROBLEMS`, which are portal-authored drills. The content manifest already marks the `stepProblems` layer as `platform-added-drill`, with official source references or page anchors where the underlying topic is source-backed.

Before this pass, the timed Schnelltest surface showed the question, timer, progress, and answer controls, but did not expose the source status of the active item. That left a student-facing provenance gap: source-grounded topics and supplemental platform-added drills looked identical during timed practice.

## Plan

- Keep the shared Schnelltest engine reusable across modules.
- Add an optional provenance hook that only renders source notices when a module provides a concept-level provenance lookup.
- Wire Mikro2 into that hook using its official source manifest.
- Preserve the existing timed-question flow, scoring, SRS updates, and mistake logging.

## Implementation

- `assets/js/portal-core/features/exam.js`
  - adds optional `getConceptProvenance`
  - renders a compact per-question Schnelltest source notice
  - prefers `stepProblems` provenance and falls back to `tasks`
  - displays source status plus page-anchor or source-reference counts

- `mikro2/js/features/exam.js`
  - passes `getConceptProvenance` from the Mikro2 content manifest into the shared Schnelltest engine

- `assets/css/premium-refinement.css`
  - adds responsive visual treatment for `.quick-exam-source-notice`
  - highlights `platform-added-drill` items consistently with practice and full-exam provenance notices

## Source-Fidelity Decision

No academic claims, answers, formulas, or grading behavior changed. The pass only makes existing provenance metadata visible at the exact moment a student answers a timed drill.

## Remaining Gaps

- Mikro2 Schnelltest items are still portal-authored drills, not a reconstructed official exercise archive.
- Official Mikro2 Übungsblätter, Tutorien, Klausuren, Probeklausuren, and solution keys are still needed before the timed drill system can become source-exhaustive.
- Supplemental concepts without official Mikro2 anchors remain visible as platform-added support.
