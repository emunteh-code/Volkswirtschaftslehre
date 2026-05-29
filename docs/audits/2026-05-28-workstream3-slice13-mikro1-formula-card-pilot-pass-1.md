# 2026-05-28 — Workstream 3 Slice 13: Mikro1 formula-card pilot (pass 1)

## Scope
- Add VL-anchor-grounded formula derivation cards for Mikro I and wire them into the shared Formeln tab.

## Audit-first
- Grounding: existing `mikro1/js/data/chapters.js` `formeln` blocks + reviewed anchors in `mikro1/js/data/sourceAnchors.js` (pass 4).
- Pattern reference: `mikro2/js/data/formulaCards.js`, `docs/audits/mikro2-formula-card-pass-5-2026-05-27.md`.
- Probeklausur: **not** used for formula content (18 JPGs + template PDF with Lorem ipsum; no OCR-reviewed exam text).

## Implementation
- `mikro1/js/data/formulaCards.js` — **8** `direct-source` cards on concepts: `budget`, `lagrange`, `cobbd`, `slutsky`, `produktion`, `kosten`, `gewinn`, `monopol`.
- Each card: `derivationSteps`, `examShortcut`, `commonMistakes`, `anchorIds` (2 per card), `relatedTaskFamilies` aligned with pass-1 task families.
- `mikro1/js/ui/renderer.js` — `formulaCardsByConcept: FORMULA_CARDS_BY_CONCEPT`.

## Integrity
- No new notation beyond chapters + VL anchors; cards distill existing chapter `formeln` / theory, not invented curriculum.
- Cards without matching task family still OK (`hausopt` covered via `lagrange` card anchors).

## Remaining gap
- Formula cards for remaining anchored concepts (KMM, indiff, elast, angebotselast, …).
- Probeklausur → `official-task-source` families after human/OCR review.
- `psubst` page anchors still manifest-only.

## Source files used
- `source-materials/Mikroökonomik I/` (via anchor `sourcePath` metadata in `sourceAnchors.js`)
- `mikro1/js/data/chapters.js` (formeln blocks for budget, lagrange, cobbd, slutsky, produktion, kosten, gewinn, monopol)
