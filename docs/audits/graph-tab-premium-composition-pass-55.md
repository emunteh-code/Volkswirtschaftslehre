# Graph-Tab Premium Composition — Pass 55

## Mission

Improve **composition and hierarchy** of graph tabs project-wide so they read as **one teaching instrument** (control strip → dominant graph stage → interpretation readout), without changing graph **logic**, **sliders**, **equations**, or **source-faithful** curve definitions.

## Phase 1 — Structural audit (findings)

### Shared markup grammar

Modules return HTML from local `graphPanel.js` (or generated portal `dataFactory.js`) into `#content` via `createRenderer` (`assets/js/portal-core/ui/renderer.js`): `headerHTML + renderGraphPanel(conceptId)`. Typical stack:

1. `.concept-header`
2. `.panel.active` > `.graph-container` > `.graph-panel-title` + `.graph-controls` (`.ctrl-group` × n) + `canvas` / `.graph-plot-shell` + `#graph_info.graph-info`

### Weaknesses observed

| Issue | Where it came from |
|-------|-------------------|
| **Card-in-card** | `.panel.active` chrome plus `.graph-container` chrome (module `styles.css` + earlier premium “Phase 3”). |
| **Controls compete with graph** | `.ctrl-group` each bordered/filled like mini-cards; `.graph-controls` boxed. |
| **Graph not dominant enough** | Module canvas `max-height: clamp(300px, 47vh, 500px)` kept plots visually modest. |
| **Interpretation = widget stack** | `.graph-info` in modules used full bordered panel; `.gi-row` boxed with hover lift; `.gi-eq` full card. |
| **Macro / finanz rows** | `.graph-insight-row` / `.graph-interpretation-row` used full border + shadow cards. |
| **Macro plot shell** | Risk of **canvas** + **shell** both reading as separate frames. |
| **Generated portal** | `.generated-graph-panel` used `display: grid; gap: 18px` around a single `.graph-container` → extra vertical “layer”. |

### Not changed in this pass (honest scope)

- **On-canvas text labels** drawn in Canvas/SVG (Phase 6 rationalization): requires **per-engine** audits (`graphs.js`, `graphEngine.js`, etc.) to avoid pedagogy loss — **follow-up** per module.
- **Line width / stroke hierarchy** (Phase 7): same — **per-graph** tuning in JS; not globally safe from CSS alone.
- **Makro `graph-container--macro-focus`** height contracts for Phillips / two-panel: **preserved**; Pass 55 explicitly **excludes** those canvases from default `max-height` / `min-height` rules and keeps plot-shell height behavior from module CSS.

## Graph-tab grammar adopted (Pass 55)

1. **Outer teaching surface:** single strong frame = **`.graph-container`** only; **`.panel.active:has(> .graph-container)`** loses extra padding/background/border so the panel is not a second card.
2. **Title strip:** `.graph-panel-title` with a **hairline bottom** separator (not a separate card).
3. **Control strip:** one **low-contrast** toolbar (`.graph-controls`); **`.ctrl-group`** lighter border/fill, aligned stretch grid, smaller labels/values.
4. **Graph stage:** default graphs get **taller** canvas band (`max-height` / `min-height` clamp); macro special layouts unchanged.
5. **Interpretation readout:** `.graph-info` = **transparent** + **top border** only; `.gi-eq` = **left-accent** strip; `.gi-row` = **flat rows** with bottom dividers, **no** hover card lift; macro insight rows = **left-accent** readout instead of full bordered cards.
6. **Generated portal:** `.panel.active.generated-graph-panel:has(> .graph-container)` collapses extra **grid gap** so the graph module is one column.

## Files changed

| File | Role |
|------|------|
| `assets/css/premium-refinement.css` | Pass 55 block: panel flattening, graph-container flex column, toolbar + stage + readout overrides, macro plot-shell de-duplication, `:has` + `.generated-graph-panel` rules. |

**Shared vs local:** **Shared only** (premium layer loaded after module `styles.css` in standard portals). No `graphPanel.js` / engine logic edits.

## Before / after (intent)

- **Before:** stacked bordered regions (panel + graph shell + control mini-cards + boxed interpretation rows).  
- **After:** one framed **graph teaching surface**, lighter toolbar, **larger** default plot band, interpretation reads as **attached readout** (dividers + accent bars, not a second card system).

## Browser verification (manual)

1. **Mikro I** — any graph concept (e.g. Budget, Markt): Grafik tab — controls feel subordinate; canvas larger; `graph_info` readout flatter.  
2. **Makro I** — Phillips or IS-LM-PC: macro heights intact; plot shell not double-framed.  
3. **Statistik / Ökonometrie / Finanz / IWB / Mathematik** — one graph each: same grammar via shared CSS.  
4. **Multi-curve + multi-slider** graphs: alignment and spacing still usable.  
5. **Heavy interpretation** (many `.gi-row`): list reads as scan lines, not card stack.

## Follow-up (still useful later)

- **Phase 6:** Move redundant on-canvas labels to legend / interpretation where engines duplicate prose.  
- **Phase 7:** Standardize `lineWidth` tiers (primary / secondary / guide) per `graphs.js` / `graphEngine.js` family.  
- **`generated-portal.css`:** If any entry point loads **without** `premium-refinement.css`, mirror Pass 55 there; current repo modules link premium after local CSS.

## Completion

Pass 55 is **complete** for **composition architecture** via shared premium CSS: graph tabs should feel **more unified**, **less dashboardy**, with the **graph stage as hero** and interpretation as **readout**, without touching academic graph behavior.
