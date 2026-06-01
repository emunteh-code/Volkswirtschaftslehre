# Fleet Graph Pedagogy Pass — 2026-05-31 (Pass 1)

## Mandate
All interactive graphs exam-ready for first-time learners: intuitive labels, meaningful colors, no overlapping axis text. Priority: **mikro2 Edgeworth-Box** (`gleichgewicht_tausch`). Fleet context: **69** graph-backed concepts in **9** modules.

## Priority fix — Edgeworth-Box (`mikro2/gleichgewicht_tausch`)

| Element | Before | After |
|---------|--------|-------|
| Ursprünge | “Haushalt A/B” only | **O_A** (unten links), **O_B** (oben rechts) mit Achspfeilen |
| Güterachsen | fehlend | **x₁ (A)**, **x₂ (A)**, **x₁ (B)**, **x₂ (B)** an Boxkanten, versetzt (kein Eck-Overlap) |
| Indifferenzkurven | keine | je 2 Kurven pro Haushalt (Cobb-Douglas-Motiv, konvex zu eigenem Ursprung) |
| Kontraktkurve | Bezier ohne Bezug | Diagonale Tangentialpfad **GRS^A = GRS^B** |
| Punkte | `E`, `C` ohne Legende | **E — Endausstattung**, **C — Vertragspunkt** (Tag-Chips) |
| Legende | fehlend | 5 Einträge (IK A/B, Kontraktkurve, E, C) |
| `#graph_info` | MRS-Notation | **GRS^A = GRS^B** + Prüfungslesart (Ursprünge → Linse → Effizienz) |
| `aria-label` | kurz | vollständige Screen-Reader-Beschreibung |

## Shared portal-core extensions

| File | Change |
|------|--------|
| `assets/js/portal-core/utils/graphLabels.js` | `GRAPH_CANVAS_LABELS`, `graphCanvasLabel()`, TeX→Lesetext für O_A/O_B und x^A/x^B |
| `assets/js/portal-core/ui/graphPedagogy.js` | `gleichgewicht_tausch`, `gleichgewicht_walras` Vorhersage + Theorie-Verweis |

## Trust / validation

```bash
cd tools/clickthrough && npm run trust:pass1
```

**Result:** `trust-regression-pass-1: all checks passed` (2026-06-01, local).

- `GRAPH_CASES` enthält `mikro2/gleichgewicht_tausch/graph` (Edgeworth-Pedagogik + Canvas + Footer).

## Files changed (this pass)

- `mikro2/js/ui/graphs.js` — `drawEdgeworth` rewrite
- `mikro2/js/ui/graphPanel.js` — aria-label
- `assets/js/portal-core/utils/graphLabels.js`
- `assets/js/portal-core/ui/graphPedagogy.js`
- `tools/clickthrough/trust-regression-pass-1.mjs`
- `docs/audits/2026-05-31-fleet-graph-pedagogy-pass.md`

## Remaining fleet work (deferred)

1. Engine consolidation (`graphEngine.js` forks) — see `2026-05-31-fleet-graph-quality-pass.md`.
2. Module-by-module axis tick collision audit (makro2, oeko, iwb) using shared layout helpers.
3. `graphShell.js` migration for mikro1/makro/oeko panels.
4. Matrix-only graphs (mikro2 payoff) — table fallback optional.

## Risks

- Edgeworth uses illustrative Cobb-Douglas IC levels (not tied to one VL numeric example); theory tab remains source for exact algebra.
- Canvas still cannot render MathJax; all on-canvas text is plain German per `graphLabels` policy.
