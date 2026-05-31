# Task family uniformity — pass 2 (fleet-wide)

**Date:** 2026-05-29  
**Command:** `node tools/exam-os/generate-vl-layers.mjs --all --write`

## Mechanism

Dual VL families (`-vl-pattern` + `-vl-apply`) per anchored concept, plus **platform-added-drill** families for mikro2 supplementals without VL anchors (`externa_pigou`, `externa_institutionen`, `public_goods`).

## Fleet table (after pass 2)

| Module | Concepts | Total families | Grounded (`direct-source`) | Grounded/concept | Platform drill |
|--------|----------|----------------|----------------------------|------------------|----------------|
| mikro1 | 33 | 85 | 84 | 2.55 | 0 |
| mikro2 | 18 | 34 | 30 | 2.00* | 3 |
| makro1 | 14 | 58 | 57 | 4.07 | 0 |
| makro2 | 30 | 83 | 82 | 2.73 | 0 |
| oekonometrie | 32 | 98 | 97 | 3.03 | 0 |
| statistik | 14 | 133 | 132 | 9.43 | 0 |
| mathematik | 14 | 69 | 68 | 4.86 | 0 |
| finanzwirtschaft | 19 | 39 | 38 | 2.00 | 0 |
| jahresabschluss | 15 | 44 | 43 | 2.87 | 0 |
| recht | 14 | 46 | 45 | 3.21 | 0 |
| internationale-wirtschaftsbeziehungen | 16 | 33 | 32 | 2.00 | 0 |

\*15 VL-anchored concepts at 2.0 grounded; 3 supplementals at 1 platform drill each.

## vs pass 1 target (≥1.5 grounded/anchored concept)

All modules with VL anchors meet or exceed **1.5** grounded families per anchored concept. Registry-heavy modules (statistik, makro1) exceed target via doc families + VL pairs.

## Validation

- `ci-validate.mjs` — OK
- `check-readiness.mjs` — `blockers: []`
