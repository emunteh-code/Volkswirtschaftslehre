# Mikro2 Full Exam Provenance Notice Pass 22

Date: 2026-05-27

## Audit Finding

Mikro2 practice surfaces now expose task provenance, but the timed `Probeklausuren` surface still presented the mock exam like a regular complete exam set. Because the current Mikro2 corpus has no official Übungsblätter, Lösungsschlüssel, Tutorien, Probeklausuren, or Altklausuren, the timed exam must not look like an official reconstructed exam.

## Plan

- Add optional source metadata to the Mikro2 full-exam record.
- Render the metadata in both:
  - the Probeklausur selection card
  - the live timed exam view
- Keep the shared full-exam renderer backwards-compatible for modules without exam provenance metadata.

## Implementation

- `mikro2/js/data/fullExams.js`
  - marks the current Mikro2 simulation as `platform-added-drill`
  - marks official task coverage as missing
  - adds a concise source note and evidence statement

- `assets/js/portal-core/features/fullExam.js`
  - adds optional `renderExamSourceNotice(exam)`
  - inserts the notice in the selection card and live exam view

- `assets/css/premium-refinement.css`
  - styles compact full-exam provenance notices
  - uses warning treatment for platform-added simulations without official task evidence

## Source-Fidelity Decision

No exam questions, model answers, point values, formulas, or timings were changed. This pass only makes the mock-exam provenance explicit before and during timed use.

## Remaining Gaps

- Mikro2 still needs official exercise/exam sources before any timed mode can be called a reconstructed official exam bank.
- The current simulation remains useful for timed transfer practice, but it is not official exam evidence.
