# Fleet Graph Clarity Pass — 2026-05-31

Follow-up to [2026-05-31-fleet-graph-quality-pass.md](./2026-05-31-fleet-graph-quality-pass.md) (`be4459c`).

## Mandate
Exam-pressure clarity: intuitive diagrams, German axis notation, semantic colors, no label overlap, pedagogy footer with “what you see” and slider effects.

## Color legend (fleet semantic roles)

Documented in `assets/js/portal-core/ui/graphTheme.js` (`COLOR_ROLE_LABELS` + table in file header).

| Role | Economic meaning | Canvas / CSS |
|------|------------------|--------------|
| `demand` | Nachfrage, AD, Konsum | `--accent` / blue |
| `supply` | Angebot, AS, Produktion | `--semantic-green` |
| `budget` | Budget-, Isokosten-, LM-Gerade | `--accent` |
| `indifference` | IK / Isoquante | `--math-ink` |
| `mc` | Grenzkosten | orange `#d98223` |
| `mr` | Grenzerlös | wine `#8f2436` |
| `isCurve` | IS-Kurve | same as demand |
| `lmCurve` | LM-Kurve | same as supply |
| `optimum` | Gleichgewicht | high-contrast neutral |
| `data` | Stichprobe | muted accent |
| `fit` | OLS / Schätzgerade | accent |
| `residual` | Residuen | `--accent3` |
| `reference` | 45°-Linie, Vergleich | neutral |

## What changed

### Portal-core (fleet)
- **`graphTheme.js`** — `getSemanticGraphColors()`, `colorForRole()`, `COLOR_ROLE_LABELS`
- **`graphLayout.js`** — `SCENE_PAD` (72/48/48/64), `sceneFontSizes`, `legendPlacement` (bottom-left when crowded)
- **`graphClarity.js`** — per-concept `see`, `sliderEffect`, HTML legend; module fallbacks
- **`graphShell.js`** — “Was du siehst”, economic legend, Regler hint with slider copy
- **`graphPedagogy.js`** — Regler line in footer; injects see/legend on legacy panels via `ensureGraphPedagogyChrome`
- **`premium-refinement.css`** — `.graph-see-line`, `.graph-legend-econ`, role swatches, `.graph-pedagogy-slider`

### Engines & drawers
- **Unified `graphEngine.js`** from mikro1 benchmark → 10 modules (makro1/2, statistik, mathematik, mikro2, finanz, iwb, jahresabschluss, recht, oekonometrie)
- **`drawScene`** margins + axis label offsets (no tick/axis overlap)
- **`drawLegend`** — bottom-left when ≥5 series or narrow canvas
- **Custom `graphs.js`** (statistik, mathematik, mikro2) — `readColors()` → `getSemanticGraphColors()`
- **makro1 `graphs.js`** — `SCENE_PAD` for `setupPlot`

### Trust
- `trust-regression-pass-1.mjs` — asserts `.graph-see-line`, `.graph-legend-econ`, pedagogy footer, canvas aria

## Graphs with explicit clarity copy

| Module | Explicit `GRAPH_CLARITY` entries | Total graphs |
|--------|----------------------------------|-------------:|
| mikro1 | 9 | 9 |
| mikro2 | 8 | 8 |
| makro1 | 8 | 8 |
| makro2 | 4 (+ module fallback) | 16 |
| statistik | 4 | 4 |
| oekonometrie | 6 (+ fallback) | 8 |
| mathematik | 5 (+ fallback) | 6 |
| finanzwirtschaft | 2 (+ fallback) | 4 |
| iwb | 1 (+ fallback) | 6 |
| **Explicit / fleet** | **~47 named** | **69** |

Remaining concepts use **module fallback** copy (still get see-line + legend + Regler footer).

## Graphs fixed (engine + chrome)

**69 / 69** receive:
- Semantic color palette via `getSemanticGraphColors`
- Wider scene padding + legend placement rules (engine)
- HTML “Was du siehst” + economic legend (shell or injected)
- Extended pedagogy footer with Regler effect text

Canvas curve labels still drawn per graph; overlap reduced via padding/legend move (not per-curve collision solver).

## Modules still weaker (honest gaps)

1. **makro2** — 12 concepts on module fallback only; dense macro panels may still need per-graph axis strings in `graphs.js`
2. **mikro1 / makro1 / oekonometrie / finanz / iwb** — inline `graphPanel` HTML (chrome injected at runtime; no `graphShell` yet)
3. **mikro2** — matrix games: no axis diagram; clarity is HTML-only
4. **Curve labels on canvas** — can still collide in dense monopoly/Slutsky scenes; no automatic label repulsion
5. **Engine file duplication** — one copied `graphEngine.js`; future edits must stay in sync until true portal-core export

## Validation

```bash
npm run trust:pass1
```

## Files touched (summary)

- `assets/js/portal-core/ui/graphTheme.js` (new)
- `assets/js/portal-core/ui/graphLayout.js` (new)
- `assets/js/portal-core/ui/graphClarity.js` (new)
- `assets/js/portal-core/ui/graphShell.js`, `graphPedagogy.js`
- `assets/css/premium-refinement.css`
- `mikro1/js/ui/graphEngine.js` + 9 module copies
- `statistik|mathematik|mikro2/js/ui/graphs.js`, `makro1/js/ui/graphs.js`
- `statistik|mathematik|mikro2/js/ui/graphPanel.js`
- `tools/clickthrough/trust-regression-pass-1.mjs`
