# Fleet granularity completion pass — 2026-05-29

**Scope:** Task-family fleet uniformity (pass 2) + targeted content expansion + validation.

## Theory volume (% of mikro1 = 90 727 chars)

| Module | Before (pass start) | After | Δ | Honest gap |
|--------|---------------------|-------|---|------------|
| mikro1 | 100% (90 727) | 100% | — | benchmark |
| mikro2 | 35% (32 182) | **37%** (33 991) | +1 809 | Walras homogenität; wohlfahrt_messung KR/DWL |
| makro1 | 42% (37 694) | **43%** (39 291) | +1 597 | guetermarkt + multiplikator (balanced budget) |
| makro2 | 46% (41 373) | 46% | — | not in this content slice |
| oekonometrie | 59% (53 699) | 59% | — | next: thin 3-section concepts |
| statistik | 32% (29 201) | **33%** (29 554) | +353 | varianzanalyse + η² block |
| finanzwirtschaft | 42% (38 013) | **44%** (39 842) | +1 829 | liquiditaetsplanung + izf_kapitalwertfunktion |
| mathematik | 53% (47 737) | 53% | — | deferred deep pass |
| jahresabschluss | 30% (26 889) | **32%** (28 825) | +1 936 | umlauf_bewertung, eigenkapital_kg |
| recht | 42% (38 320) | 42% | — | already multi-section on core |
| internationale-wirtschaftsbeziehungen | 34% (30 642) | 34% | — | pass 1 expansion retained |

**Interpretation:** Per-concept depth improved where edited; aggregate % stays below 45–50% on smaller courses because concept count ≠ mikro1 and total volume scales with syllabus scope, not filler concepts.

## Task families (grounded per anchored concept)

| Module | Before grounded | After grounded | Target ≥1.5 |
|--------|-----------------|----------------|-------------|
| mikro1 | 51 | **84** | yes |
| mikro2 | 30 | **30** + 3 platform-drill | yes (anchored) |
| makro1 | 57 | **57** | yes |
| makro2 | 52 | **82** | yes |
| oekonometrie | 65 | **97** | yes |
| statistik | 118 | **132** | yes |
| mathematik | 54 | **68** | yes |
| finanzwirtschaft | 38 | **38** | yes |
| jahresabschluss | 43 | **43** | yes |
| recht | 45 | **45** | yes |
| internationale-wirtschaftsbeziehungen | 32 | **32** | yes |

See `docs/audits/2026-05-29-task-family-uniformity-pass-2.md`.

## Content expansion (this pass)

| Module | Concepts touched | Source basis |
|--------|------------------|--------------|
| makro1 | `guetermarkt` | VL Gütermarkt / Keynes-Kreuz |
| jahresabschluss | `buchfuehrung_orga` | Companion Kap. 3 Organisation |
| finanzwirtschaft | `liquiditaetsplanung` | VL Kapitalbedarf / goldene Bilanzregel |
| mikro2 | `monopol_preissetzung`, `gleichgewicht_walras`, `wohlfahrt_messung` | VL GG / Wohlfahrt |
| statistik | `varianzanalyse` | TUT_11 / ANOVA syllabus |
| jahresabschluss | `umlauf_bewertung_verfahren`, `eigenkapital_kapitalgesellschaften` | Companion UV/EK |
| finanzwirtschaft | `izf_kapitalwertfunktion` | VL Investitionsrechnung |

Prior pass (2026-05-29): jahresabschluss, IWB, finanz (partial), task-family pass 1.

## Structural / readiness

- All 11 modules: exam-OS layers present
- `ci-validate.mjs` — OK
- `check-readiness.mjs` — **blockers: []**
- `trust:pass1` — **passed** (after `npx playwright install chromium` locally)

## Remaining gaps (cannot close without new inputs)

1. **Theory % vs mikro1** on 14–18 concept courses — need continued per-concept expansion, not concept inflation
2. **mikro2** `externa_*`, `public_goods` — platform-added; no VL page anchors
3. **official-task-source** — OCR/item mapping backlog (Probeklausuren)
4. **statistik/oekonometrie** — pass 3: enrich registry family `method` strings (quality, not count)
5. **makro2** — 29 concepts still 3-section / 0 portal tasks in open-economy block

## Files changed (representative)

- `tools/exam-os/generate-vl-layers.mjs` — dual families + mikro2 platform drills
- `tools/exam-os/list-thin-concepts.mjs` — audit helper
- `*/js/data/chapters.js` — 5 modules content
- `*/js/data/taskFamilies.js`, `formulaCards.js`, `masteryData.js` — all 11 regenerated
- `docs/audits/*.generated.*` — parity, state, readiness

## Recommended next iteration

1. Content pass 3: makro2 open-economy concepts (add aufgaben), recht thin 3-section, mathematik/oekonometrie 3-section blocks
2. Quality pass: statistik/oekonometrie registry family rubrics
3. Run `trust:pass1` after `npx playwright install` on deploy machine
