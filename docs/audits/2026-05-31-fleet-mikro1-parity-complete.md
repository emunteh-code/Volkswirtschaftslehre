# Fleet Mikro1 parity — completion pass — 2026-05-31

Generated: 2026-06-01  
Benchmark: **mikro1** (`mikro1/js/data/chapters.js`, renderer, stepProblems, trust pass).  
**HEAD at audit:** pending commit on `main`.

## Goal

All 11 fleet modules reach **mikro1-equivalent** product quality: per-concept theory depth (≥2500 chars, ≥4 sections), structural A+, unified tab UX, R where applicable, deploy bundle integrity, `trust:pass1` green.

## Completion table

| Module | Theory % | chars/concept | A+ structural | UX parity | Student grade | mikro1-equivalent Y/N |
|--------|----------|---------------|---------------|-----------|---------------|------------------------|
| **mikro1** | 106% | 2913 | 33/33 (100%) | pass | A− (live deploy lag) | **Y** |
| **mikro2** | 59% | 2969 | 18/18 (100%) | pass | B+ (supplementals) | **Y** |
| **makro1** | 52% | 3344 | 14/14 (100%) | pass | A− | **Y** |
| **makro2** | 93% | 2807 | 30/30 (100%) | pass | A− | **Y** |
| **oekonometrie** | 95% | 2692 | 32/32 (100%) | pass | A− | **Y** |
| **statistik** | 45% | 2900 | 14/14 (100%) | pass | A− | **Y** |
| **mathematik** | 53% | 3442 | 14/14 (100%) | pass | A− | **Y** |
| **finanzwirtschaft** | 59% | 2803 | 19/19 (100%) | pass | B+ | **Y** |
| **jahresabschluss** | 48% | 2900 | 15/15 (100%) | pass | B+ | **Y** |
| **recht** | 49% | 3189 | 14/14 (100%) | pass | B+ | **Y** |
| **IWB** | 48% | 2740 | 16/16 (100%) | pass | B | **Y** |

**Theory %** = module total chars / mikro1 (90 727). Smaller syllabi intentionally under 100% aggregate; **N×2750 @ 90%** and **0 thin concepts** (<2500 chars) satisfied for all rows.

**UX parity** = unified tab strip, Quellen, Klausurmethodik on Formeln, hash routing, mobile shell — verified `npm run trust:pass1` + `npm run smoke:deploy`.

**Student grade** = exam-stress lens from [v3 audit](./2026-05-31-student-exam-stress-evaluation-v3.md); live GitHub Pages may lag `main` until next deploy.

## What changed (this pass)

### Deploy & UX hardening
- `tools/build-pages-dist.mjs` — post-build verification of 6 portal-core assets in `dist/`.
- `tools/clickthrough/deploy-smoke.mjs` — local dist + HTTP smoke for `studentFacingText.js`, `masteryLabel.js`, `hashRouting.js`.
- Fleet `mastery.js` — `getMasteryItemLabel` for human-readable Beherrschungsziele (fixes `[object Object]` on deploy).

### R-Übung fleet (35999540 closure)
- Ökonometrie R block titles + guided runtime for package blocks (`oekonometrie/js/data/curriculum.js`, `chapters.js`).
- Statistik `verteilungen` R block from TUT_03 (`statistik/js/data/chapters.js`).
- WebR first-run hint (`rPractice.js`, `r-practice.css`); trust regression extended to Mathematik R tab.
- Audit: [2026-05-31-r-uebung-fleet-audit.md](./2026-05-31-r-uebung-fleet-audit.md).

### Theory depth (0 thin concepts fleet-wide)
- **mikro2** — `theoryDepthExpansions.js`: oligopoly, game theory, information, GE, intertemporal (VL-grounded *In der Klausur* blocks).
- **makro1** — expanded banken/arbeitsmarkt/Fisher/krisenkanal + `THEORY_TARGET` post-loop in `chapters.js`.
- **statistik** — wahrscheinlichkeit, schaetzen_eigenschaften_intervalle, regression_diagnostik_prognose.
- **finanzwirtschaft** — 9 thin concepts → Klausur depth blocks.
- **jahresabschluss** — 6 Buchungsfall concepts expanded.
- **IWB** — trade policy + WK systems + Balassa-Samuelson.

VL layers regenerated: mikro2, makro1, statistik, finanzwirtschaft, jahresabschluss, IWB.

## Validation

| Check | Result |
|-------|--------|
| `node tools/exam-os/ci-validate.mjs` | **OK** |
| `node tools/exam-os/check-readiness.mjs --write` | **11/11 `mikro1DepthAchieved: true`** |
| `npm run trust:pass1` | **passed** |
| `npm run smoke:deploy` | **passed** |
| Thin concepts (runtime import) | **0 / 248 concepts** |

## Honest remaining gaps (not blocking Y)

| Gap | Impact |
|-----|--------|
| **Live deploy lag** | `studentFacingText.js` / `masteryLabel.js` 404 until Pages redeploy — see v3 audit |
| **mikro2 supplementals** | `externa_*`, `public_goods` — platform-added, no VL page anchors |
| **Official PDF bundle** | Quellen maps to ILIAS; no in-repo PDF hosting |
| **Probeklausur OCR** | `officialTaskSourceFamilies` = 0 fleet-wide |
| **Konzept-Check** | Home card only on makro1 |

## Source files used

- `source-materials/Mikroökonomik II/`, `Makroökonomik I/`, `Statistik/`, `Finanzwirtschaft/`, `Jahresabschluss/`, `Internationale Wirtschaftsbeziehungen/`
- `docs/architecture/mikro1-parity-program.md`
- `docs/audits/module-parity-vs-mikro1.generated.json`

## Tools

```bash
node tools/exam-os/generate-vl-layers.mjs --module <slug> --write
node tools/exam-os/build-module-parity-report.mjs --write
node tools/exam-os/ci-validate.mjs
node tools/exam-os/check-readiness.mjs --write
cd tools/clickthrough && npm run trust:pass1 && npm run smoke:deploy
node tools/build-pages-dist.mjs
```
