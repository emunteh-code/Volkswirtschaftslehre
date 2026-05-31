# Official exam policy (fleet-wide)

**Effective:** 2026-05-31  
**Status:** Active — no exceptions without OCR evidence + human review log.

## Summary

| Metric | Fleet value | Student-facing label |
|--------|-------------|----------------------|
| `officialTaskSourceFamilies` | **0** | — |
| Full exams (`fullExams.js`) | Portal-authored simulations | **Plattform-Simulation** |
| Schnelltest / Konzept-Check | Platform drills | **Plattform-Übung** |
| Document registry families | PDF metadata only | **Dokument-Register** |

## Rules

1. **No `official-task-source` without evidence** — item text extracted (OCR or native PDF), mapped to a task family, and signed off in a review log (`quoteFingerprint` + reviewer + date).
2. **All exam UI** must show **Plattform-Übung** / **Simulation** unless `officialTaskCoverage === 'official-task-source'`.
3. **Probeklausur** in navigation is allowed as *format* name; copy must clarify it is not an official university paper.
4. **PDFs** under `source-materials/` are not shipped on GitHub Pages — students use local copies; portal links are gated via `deployEnvironment.js`.

## Promotion criteria (future)

To promote a family or exam item to `official-task-source`:

1. Weak-page OCR complete for source PDF page(s).
2. Human reviewer confirms wording, points, and rubric match source.
3. `sourceStatus: direct-source` on the item with anchor IDs.
4. `audit-current-state.mjs` shows increment in `officialTaskSourceFamilies`.

## OCR backlog

See `docs/audits/ocr-weak-pages-backlog.generated.md`.

**Priority modules (weak-page %):** oekonometrie (14%), statistik (6%), mikro2 (4%).

**Automation today:** `ocr-weak-pages.mjs` — index report only; Tesseract batch not wired in CI.

**Blocked:** Mikro1 Probeklausur JPGs (`MIKRO1_PROBEKLAUSUR_REVIEW_STATUS`).

## Code touchpoints

| File | Role |
|------|------|
| `assets/js/portal-core/data/examDisclosure.js` | Default labels + merge helper |
| `assets/js/portal-core/features/fullExam.js` | Simulation notice on select + run |
| `assets/js/portal-core/ui/renderer.js` | Home card + task-family badges |
| `assets/js/portal-core/data/officialTaskIngestion.js` | Document registry vs item source |

## Governance

- Fleet `check-readiness.mjs` reports `officialTaskSourceFamilies: 0` until promotion pipeline exists.
- Do not mark exams “official” for marketing; use **Prüfungsbereit** tier for module readiness instead.
