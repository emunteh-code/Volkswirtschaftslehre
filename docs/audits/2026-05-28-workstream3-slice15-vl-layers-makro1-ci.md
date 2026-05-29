# Workstream 3 — Slice 15: VL layers (Statistik, Mathematik, Makro1) + CI

**Date:** 2026-05-28  
**Scope:** Layer 2 exam-OS depth + Layer 1 repeatable CI validation

## What changed

| Area | Change |
|------|--------|
| **Statistik** | 14 `direct-source` formula cards + 14 VL-grounded task families (+1 ingestion placeholder) |
| **Mathematik** | Same pattern: 14 cards + 14 VL families |
| **Makro1** | 28 syllabus-derived page anchors (2/concept × 14); 14 formula cards + 14 VL task families |
| **Automation** | `generate-vl-layers.mjs`, `populate-makro1-anchors-from-syllabus.mjs`, `ci-validate.mjs` |
| **CI** | `.github/workflows/exam-os.yml` — syntax + anchor cross-check + audit (no corpus checkout) |

## Source files used

- Existing reviewed anchors: `statistik/js/data/sourceAnchors.js`, `mathematik/js/data/sourceAnchors.js`
- Chapter `formeln`: `statistik/js/data/chapters.js`, `mathematik/js/data/chapters.js` (via `CONTENT`), `makro1/js/data/chapters.js`
- Syllabus (heading candidates only): `docs/audits/source-syllabus/makro1.generated.json`
- Primary VL map: `makro1/js/data/contentManifest.js` (`MAKRO1_CONCEPT_PRIMARY_REFS`)

## Validation

- `node tools/exam-os/ci-validate.mjs` — OK
- `node tools/exam-os/audit-current-state.mjs --write`
- `node tools/exam-os/check-readiness.mjs --write`

### Readiness snapshot (post-slice)

| Module | anchorComplete | provenanceComplete | officialFormulaCards | sourceGroundedTaskFamilies |
|--------|----------------|-------------------|----------------------|---------------------------|
| statistik | yes | yes | 14 | 14 |
| mathematik | yes | yes | 14 | 14 |
| makro1 | yes | yes | 14 | 14 |

`examBankComplete`, `adaptiveReady`, `mikro1DepthAchieved` remain **false** fleet-wide.

## Risks / gaps

- Makro1 anchor **section labels** come from PDF heading candidates (confidence ~0.84–0.88); human spot-check on VL slides recommended.
- Formula card intuition strings are **platform synthesis** tied to existing portal `formeln` + anchor sections (`direct-source` on cards; not verbatim VL paste).
- No `official-task-source` families added (policy unchanged).
- **Next slice:** mikro2 (3 unanchored concepts), makro2/ökonometrie syllabus anchor pass, OCR pipeline stub.

## Files touched

- `statistik/js/data/{formulaCards,taskFamilies}.js`
- `mathematik/js/data/{formulaCards,taskFamilies}.js`
- `makro1/js/data/{sourceAnchors,formulaCards,taskFamilies}.js`
- `tools/exam-os/{generate-vl-layers,populate-makro1-anchors-from-syllabus,ci-validate}.mjs`
- `.github/workflows/exam-os.yml`
- `docs/audits/{exam-os-current-state,exam-os-readiness,module-parity-vs-mikro1}.generated.*`
- `README.md`, this audit doc
