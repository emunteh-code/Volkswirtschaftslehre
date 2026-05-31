# Task family uniformity — pass 1

**Date:** 2026-05-29  
**Goal:** Raise VL-grounded task family density toward mikro1 benchmark (~1.5 `direct-source` families per anchored concept) across weak modules, without inventing exam tasks.

## Mechanism

Extended `tools/exam-os/generate-vl-layers.mjs` so each concept with ≥2 VL anchors gets **two** grounded families:

| Suffix | Role | Typical difficulty |
|--------|------|-------------------|
| `-vl-pattern` | VL method + chapter task alignment (anchors 0–1) | mittel |
| `-vl-apply` | Klausurtyp / application drill (anchors 1–2 or 0–last) | schwer |

Both use real `sourceAnchorIds`; `ci-validate.mjs` anchor cross-check passes.

Regenerated for priority modules: `mikro2`, `internationale-wirtschaftsbeziehungen`, `finanzwirtschaft`, `jahresabschluss`, `recht`, `makro1` (+ `masteryData.js` scaffold).

## Baseline (pre-pass) — all 11 modules

| Module | Concepts | Total families | Grounded (`direct-source`) | Grounded / concept | Concepts with 0 grounded | Concepts with &lt;2 grounded |
|--------|----------|----------------|----------------------------|-------------------|--------------------------|------------------------------|
| mikro1 | 33 | 52 | 51 | 1.55 | 0 | 32* |
| mikro2 | 18 | 16 | 15 | 0.83 | 3 | 14 |
| makro1 | 14 | 44 | 43 | 3.07 | 0 | 9 |
| makro2 | 30 | 53 | 52 | 1.73 | 0 | 19 |
| oekonometrie | 32 | 66 | 65 | 2.03 | 0 | 31 |
| statistik | 14 | 119 | 118 | 8.43 | 0 | 12 |
| mathematik | 14 | 55 | 54 | 3.86 | 0 | 3 |
| finanzwirtschaft | 19 | 20 | 19 | 1.00 | 0 | 18 |
| jahresabschluss | 15 | 29 | 28 | 1.87 | 0 | 13 |
| recht | 14 | 32 | 31 | 2.21 | 0 | 10 |
| internationale-wirtschaftsbeziehungen | 16 | 17 | 16 | 1.00 | 0 | 15 |

\*mikro1 “&lt;2 grounded” reflects many concepts with one VL family plus separate `official-document-registry` families (not counted as `direct-source`).

**Uniformity target:** ≥1.5 grounded families per **VL-anchored** concept (mikro1 ≈ 52/33).

## After pass 1

| Module | Total | Grounded | Grounded / concept | Δ grounded | Meets ≥1.5? |
|--------|-------|----------|-------------------|--------------|-------------|
| mikro1 | 52 | 51 | 1.55 | — | yes (unchanged) |
| **mikro2** | **31** | **30** | **1.67** | **+15** | **yes** |
| **makro1** | **58** | **57** | **4.07** | **+14** | yes |
| makro2 | 53 | 52 | 1.73 | — | yes |
| oekonometrie | 66 | 65 | 2.03 | — | yes |
| statistik | 119 | 118 | 8.43 | — | yes |
| mathematik | 55 | 54 | 3.86 | — | yes |
| **finanzwirtschaft** | **39** | **38** | **2.00** | **+19** | **yes** |
| **jahresabschluss** | **44** | **43** | **2.87** | **+15** | yes |
| **recht** | **46** | **45** | **3.21** | **+14** | yes |
| **internationale-wirtschaftsbeziehungen** | **33** | **32** | **2.00** | **+16** | **yes** |

All touched modules now have **0** VL-anchored concepts with fewer than 2 grounded families.

## Remaining gaps

| Gap | Notes |
|-----|--------|
| `mikro2`: `externa_pigou`, `externa_institutionen`, `public_goods` | No VL anchors in corpus (platform-added); 1 placeholder family each — **not padded** per AGENTS.md |
| Fleet modules not regenerated this pass | `oekonometrie`, `statistik`, `mathematik`, `makro2` still on single `-vl-pattern` until `generate-vl-layers.mjs --all --write` |
| mikro1 VL density | Still ~1 VL-pattern + doc registry per concept; optional pass 2: regenerate mikro1 for 66 VL families |
| **Quality** vs **count** | statistik/oekonometrie high counts are registry-heavy; pass 2 = enrich `method` / rubrics on doc families, not more VL duplicates |

## Validation

```bash
node tools/exam-os/ci-validate.mjs                    # OK
node tools/exam-os/audit-current-state.mjs --write
node tools/exam-os/build-module-parity-report.mjs --write
node tools/exam-os/check-readiness.mjs --write        # blockers: []
```

## Files changed

- `tools/exam-os/generate-vl-layers.mjs` — dual VL family emission
- `mikro2/js/data/taskFamilies.js` (+ formulaCards, masteryData)
- `internationale-wirtschaftsbeziehungen/js/data/taskFamilies.js` (+ formulaCards, masteryData)
- `finanzwirtschaft/js/data/taskFamilies.js` (+ formulaCards, masteryData)
- `jahresabschluss/js/data/taskFamilies.js` (+ formulaCards, masteryData)
- `recht/js/data/taskFamilies.js` (+ formulaCards, masteryData)
- `makro1/js/data/taskFamilies.js` (+ formulaCards, masteryData)
- Regenerated audit artifacts under `docs/audits/*.generated.*`

## Pass 2 recommendation

1. `node tools/exam-os/generate-vl-layers.mjs --all --write` for fleet-wide `-vl-apply` parity  
2. Quality pass on high-count modules (statistik, oekonometrie): syllabus-specific `method` strings per doc family  
3. mikro2 supplemental concepts: only after VL anchor curation or explicit `platform-added-drill` labeling in manifest
