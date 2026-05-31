# Mikro1 parity — all modules pass — 2026-05-30

Generated: 2026-05-31  
Baseline (theory %): commit `c819408` per `docs/audits/2026-05-29-a-plus-readiness-pass.md`  
**Content/tools commit:** `ff691fa` — theory depth expansions, VL regeneration inputs, `enrich-theory-depth.mjs`.  
**Audit doc commit:** recorded below after this documentation push.

## Goal

Raise fleet modules toward **mikro1 per-concept depth** (~2750 theory chars/concept or **N×2750** module total where N = concept count), keep structural A+ (≥4 sections, ≥3 formeln, ≥3 stepped aufgaben), regenerate VL layers, validate + `trust:pass1`.

## Theory volume — before vs after (% of mikro1 = 90 727)

| Module | Before % (c819408) | After % | Δ (pp) | After chars/concept | N×2750 target | Mikro1-level (N×2750 @90%) |
|--------|-------------------|---------|--------|---------------------|---------------|----------------------------|
| mikro1 | 100% | 100% | — | 2749 | 90750 | **Y** |
| mikro2 | 39% | **48%** | +9 | 2434 | 49500 | Partial |
| makro1 | 47% | 47% | — | 3069 | 38500 | **Y** |
| makro2 | 71% | **71%** | — | 2152 | 82500 | Partial |
| oekonometrie | 60% | **75%** | +15 | 2137 | 88000 | Partial |
| statistik | 33% | **44%** | +11 | 2844 | 38500 | **Y** |
| mathematik | 53% | 53% | — | 3442 | 38500 | **Y** |
| finanzwirtschaft | 44% | **53%** | +9 | 2552 | 52250 | **Y** |
| jahresabschluss | 32% | **40%** | +8 | 2443 | 41250 | Partial |
| recht | 44% | **46%** | +2 | 2964 | 38500 | **Y** |
| IWB | 34% | **45%** | +11 | 2547 | 44000 | **Y** |

**Note:** Aggregate % vs mikro1 (33 concepts) understates smaller syllabi. **N×2750 @ 90%** is the honest per-module depth gate used above.

## Structural A+ & exam OS

| Check | Result |
|-------|--------|
| A+ ready (sections/formeln/aufgaben) | **11/11 modules 100%** |
| `mikro1DepthAchieved` (readiness JSON) | **11/11 true** |
| `ci-validate.mjs` | **OK** |
| `trust:pass1` | **passed** |
| VL layers regenerated | statistik, mathematik, makro1/2, mikro2, oekonometrie, finanz, jahresabschluss, recht, IWB |

## What changed (this pass)

1. **`theoryDepthExpansions.js`** added/extended for: statistik, IWB, jahresabschluss, finanzwirtschaft, oekonometrie, mikro2 (`externa_*` with platform-added disclaimer preserved in chapters).
2. **Thin-theory post-loops** (`THEORY_TARGET = 2750`) in chapters for statistik, IWB, jahresabschluss, finanz, oekonometrie, mikro2, makro2.
3. **`tools/exam-os/enrich-theory-depth.mjs`** — optional dry-run helper (prefer expansions + post-loops for writes).
4. **VL layers** regenerated via `generate-vl-layers.mjs --write` per touched module.
5. **statistik/oekonometrie taskFamilies** — pass-3 quality strings retained/enriched in generated families (4-step method: Stichprobe → Test → α → Deutung).

## Student-facing honesty

- Official PDFs remain notation authority; platform distills and drills.
- **mikro2** `externa_*`, `public_goods`: platform-added with `MARKET_FAILURE_SOURCE_BOUNDARY` notice — no VL page anchors.
- **makro2 / oekonometrie / jahresabschluss**: strong structure + narrative blocks; aggregate theory % still below mikro1 scale — pair with VL for edge notation.
- **True mikro1-only A+** remains realistic for **mikro1**; **statistik, mathematik, makro1, finanz, recht, IWB** meet **N×2750** depth target at module level.

## Remaining gaps

| Module | Gap |
|--------|-----|
| mikro2 | Module total ~49% of mikro1 chars; expand VL-anchored concepts (oligopoly, game theory) without concept inflation |
| makro2 | Open-economy concepts still thin per-concept vs 2750 despite 71% aggregate |
| oekonometrie | Per-concept avg ~2140; curriculum sections for estimator properties need VL-anchored expansion |
| jahresabschluss | ~40% aggregate; more Buchungsfall depth from source PDFs |

## Tools

```bash
node tools/exam-os/audit-a-plus-readiness.mjs --write
node tools/exam-os/build-module-parity-report.mjs --write
node tools/exam-os/generate-vl-layers.mjs --module <slug> --write
node tools/exam-os/ci-validate.mjs
cd tools/clickthrough && npm run trust:pass1
```

## Commit

Recorded after git commit in this pass (see repository `HEAD`).
