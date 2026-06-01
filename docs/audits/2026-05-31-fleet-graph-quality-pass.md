# Fleet Graph Quality Pass — 2026-05-31

## Mandate
Fleet-wide visual language, pedagogy chrome, and integrity checks for all modules with a **Grafik** tab. Benchmark: `mikro1` interactive graphs + `premium-refinement.css` graph shell (Pass 73).

## Inventory (interactive graph concepts)

| Module | Graph count | `GRAPH_CONCEPTS` source | Engine / panel pattern |
|--------|------------:|-------------------------|-------------------------|
| mikro1 | 9 | `mikro1/js/ui/graphPanel.js` | Benchmark: `graphEngine.js` (581L, theme tokens + `sanitizeGraphCanvasLabel`), inline panel HTML |
| mikro2 | 8 | `mikro2/js/ui/graphPanel.js` | Custom `graphs.js` + forked `graphEngine.js` (537L); panel → **portal `graphShell`** |
| makro1 | 8 | `makro1/js/ui/graphPanel.js` | Extended `graphEngine.js` (540L), macro-focus CSS, `graph-insights` rows |
| makro2 | 16 | `makro2/js/ui/graphPanel.js` | Forked engine + macro layouts |
| statistik | 4 | `statistik/js/ui/graphPanel.js` | Forked engine; panel → **portal `graphShell`** |
| oekonometrie | 8 | `oekonometrie/js/ui/graphPanel.js` | mikro1-class engine (581L), full controls + aria |
| mathematik | 6 | `mathematik/js/ui/graphPanel.js` | Custom `graphs.js`; panel → **portal `graphShell`** |
| finanzwirtschaft | 4 | `finanzwirtschaft/js/ui/graphPanel.js` | Forked engine + `graph-interpretation` rows |
| internationale-wirtschaftsbeziehungen | 6 | `iwb/js/ui/graphPanel.js` | Forked engine + custom `graphs.js` |
| recht | 0 | empty set | Empty-state only (by design) |
| jahresabschluss | 0 | empty set | Empty-state only (by design) |

**Fleet total (interactive): 69** graph-backed concepts across 9 modules.

## Unified pattern?

| Layer | Unified? | Notes |
|-------|----------|-------|
| Tab visibility (`graphConcepts` + hidden Grafik tab) | **Y** | All modules via `createRenderer` + `contentManifest` |
| Visual shell CSS (`#content .graph-container` …) | **Y** | `assets/css/premium-refinement.css` Pass 73 + Phase 3 |
| Canvas label sanitization | **Partial** | `assets/js/portal-core/utils/graphLabels.js` — adopted in engines that import it; legacy forks still exist |
| Panel HTML builder | **Partial → improving** | New `graphShell.js`; mikro2/statistik/mathematik migrated; mikro1/makro/oeko still inline |
| Pedagogy footer (Vorhersage + Theorie) | **Y** (after pass) | `graphPedagogy.js` + renderer `ensureGraphPedagogyChrome` |
| `graphEngine` implementation | **N** | 3 MD5 families (581 mikro/oeko, 540 makro1, 537 generic fork) |

## Audit dimensions (summary)

### Visual language
- **Strengths:** CSS variables from `body` in mikro1/oeko/makro engines; responsive canvas via `premium-refinement` (`aspect-ratio`, `clamp` heights).
- **Gaps:** Forked 537-line engines use older default hex fallbacks; makro module `styles.css` still duplicates `.graph-equation` / `.graph-insights` (harmless but redundant).

### Alignment
- Pass 73 removes double-card nesting; graph tab panels with only `.graph-container` flatten outer padding.
- Macro `graph-container--macro-focus` retains taller plot shells (intentional).

### Pedagogy
- **Before:** Live `#graph_info` only; no fleet prediction prompt.
- **After:** `renderGraphPedagogyFooter(conceptId)` + control hint; concept-specific prompts for high-traffic IDs, defaults elsewhere.

### Behavior
- Sliders wired via `window.initGraph` / `__draw*`; tab shown only when `graphConcepts.has(id)`.
- mikro2 graphs render without sliders (static interaction) — acceptable; pedagogy still guides reading.

### Accessibility
- Canvas `role="img"` + German `aria-label` on all inventoried panels.
- `aria-live="polite"` on `#graph_info` and slider value labels (statistik/mathematik pass).
- Trust pass now asserts aria-label length and pedagogy footer.

### Consistency gaps (remaining)
1. Consolidate `graphEngine.js` into one portal-core export (deferred — large diff).
2. Migrate mikro1/makro/oeko/finanz/iwb panels to `graphShell.js` (optional follow-up).
3. Table fallback for purely matrix graphs (mikro2 game matrix) — canvas-only today.

## Fixes applied (this pass)

| # | Issue | Fix |
|---|--------|-----|
| 1 | No fleet-wide prediction / Theorie link under graphs | `assets/js/portal-core/ui/graphPedagogy.js` + `ensureGraphPedagogyChrome` in `renderer.js` |
| 2 | Duplicated panel helpers (mikro2/stat/mathe) missing control hints / pedagogy | `assets/js/portal-core/ui/graphShell.js`; migrated three `graphPanel.js` files |
| 3 | Control labels illegibly small (0.62rem) in Pass 73 block | `premium-refinement.css`: 0.72rem labels, 11.5px values |
| 4 | mikro2 panel lacked `graph-controls` role grouping pattern | graphShell + aria-live on stat/mathe sliders |
| 5 | Trust graph checks omitted mikro2 + pedagogy | `trust-regression-pass-1.mjs`: mikro2 case + footer/info/aria assertions |

## Files changed

- `assets/js/portal-core/ui/graphPedagogy.js` (new)
- `assets/js/portal-core/ui/graphShell.js` (new)
- `assets/js/portal-core/ui/renderer.js`
- `assets/css/premium-refinement.css`
- `mikro2/js/ui/graphPanel.js`
- `statistik/js/ui/graphPanel.js`
- `mathematik/js/ui/graphPanel.js`
- `tools/clickthrough/trust-regression-pass-1.mjs`
- `docs/audits/2026-05-31-fleet-graph-quality-pass.md`

## Validation

```bash
npm run trust:pass1
```

Extended `graph-integrity` system: canvas size, title, pedagogy footer, `#graph_info` mount, canvas `aria-label`.

## Remaining risks

- Forked graph engines may drift on theme tokens until consolidated.
- Concepts without custom `PEDAGOGY_BY_CONCEPT` entry use generic Vorhersage copy (still better than none).
- Full-exam graph items not in scope for this renderer pass.
