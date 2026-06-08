# Mikro2 status hygiene pass — 2026-06-08

## Scope

Correct current operational comments and architecture notes that still described
`mikro2` as having no Mikro II source corpus. Historical audits are not rewritten
unless they already carry a superseded note; this pass only updates files that
could steer current implementation, landing trust, or future agent behavior.

## Source checks

Official source checked:

- `source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro_2_2.pdf`

Native text extraction:

- `pdfinfo` reports title `Mikroökonomik II`, author line `Prof. Dr. Udo
  Kreickemeier Universität Göttingen Wintersemester 2025/26`, and 16 pages.
- `pdftotext -layout -f 1 -l 2` shows the lecture-2 program:
  `Preissetzung im Monopol und Preiselastizität der Nachfrage`,
  `Wohlfahrtseffekte des Monopols`, `Übungsaufgabe: Zahlenbeispiel zum
  Monopol`, and `Monopolistische Preisdiskriminierung I`.
- Page 2 contains the markup derivation around
  `p(y) = (1 - 1 / |εxp|)^(-1) C'(y)`.

Visual page check:

- Rendered page 1 with `pdftoppm -f 1 -singlefile -png -r 120`; the rendered
  slide visibly matches the lecture-2 program bullets above.

## Changes

| File | Change | Why |
|---|---|---|
| `mikro2/index.html` | Replaced stale maintainer comment saying no Mikro II corpus exists. | Prevents future maintainers from following superseded quarantine guidance. |
| `assets/js/modules.js` | Reworded `mikro2.sourceStatusNote` to point at the local source corpus and the missing official task archive. | Student-facing/landing metadata should distinguish source-backed lectures from incomplete exam-bank parity. |
| `docs/architecture/learning-data-model.md` | Updated `landing_content_ref` and `mikro2` guard. | Current schema docs must reflect `module-content.js` parity and the existing `contentManifest.js`. |
| `docs/architecture/content-pipeline.md` | Updated phase-1 Mikro2 note from non-corpus to local-corpus-backed but partial. | Keeps migration instructions aligned with the actual source state. |

## Non-claims

- This pass does **not** promote Mikro2 to Mikro1-level parity.
- This pass does **not** create official exercise, tutorial, solution-key,
  Probeklausur, or old-exam mappings.
- `externa_pigou`, `externa_institutionen`, and `public_goods` remain
  `platform-added-*` because no direct primary anchor has been found in the
  supplied Mikro II corpus.

## Remaining risks

1. Older historical audits still contain no-corpus language in their original
   body text. They should remain readable as history, but future operational docs
   should cite the superseding source-ingest and metadata-readiness passes.
2. Mikro2 official-task coverage remains incomplete because the supplied corpus
   has lecture and literature materials but no full official task/exam archive.
