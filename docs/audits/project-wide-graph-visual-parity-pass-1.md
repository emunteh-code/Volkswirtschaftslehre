# Project-Wide Graph Visual Parity Pass 1

## Goal
Close the remaining graph-design inconsistency so graph-bearing modules feel like one unified flagship graph system anchored to the `mikro1` benchmark.

## What changed

### Exact files changed
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/ui/graphPanel.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro2/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro2/js/ui/graphPanel.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/finanzwirtschaft/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/finanzwirtschaft/js/ui/graphPanel.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project_wide_graph_visual_parity_pass1.mjs`

## Benchmark extracted from `mikro1`

### Exact benchmark graph pages inspected
- Live browser benchmark:
  - `mikro1` → `Marktgleichgewicht & Wohlfahrt` (`markt / graph`)
- Code benchmark extraction:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/js/ui/graphs.js`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/js/ui/graphPanel.js`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/css/styles.css`

### Visual rules that make `mikro1` graphs feel unified
1. A centered graph surface with a consistent container, controls, canvas, and interpretation block.
2. A polished top-right legend card inside the canvas instead of relying only on raw inline line labels.
3. Rounded annotation tags for important curve names, points, and current states.
4. Clear hierarchy between:
   - control cards
   - canvas evidence
   - interpretation strip
5. Strong marker emphasis:
   - colored points
   - lifted labels
   - readable callouts against the plot background
6. Large enough canvas geometry to avoid cramped labels and to let legends/callouts breathe.

## Audit before the fix

### Exact modules/pages checked
- `mikro1` → `markt / graph`
- `makro1` → `islm / graph`
- `makro2` → `mundell_fleming / graph`
- `mikro2` → `spieltheorie_statisch / graph`
- `finanzwirtschaft` → `wacc_leverage / graph`
- `internationale-wirtschaftsbeziehungen` → `zinsparitaet / graph`
- `oekonometrie` → `prediction_intervals / graph`
- `mathematik` → `lagrange / graph`

### Exact drift confirmed before patching
1. `makro1`, `makro2`, and `finanzwirtschaft` were visually closest in shell chrome, but still looked like a different canvas system.
2. Their graph helpers relied heavily on raw inline text labels placed directly on the canvas.
3. They did not consistently render `mikro1`-style top-right legend cards.
4. Their canvas size was still `800x500`, which made labels feel tighter and less flagship-like than the `920x560` benchmark family used elsewhere.
5. The remaining graph drift was **not mainly the shared graph panel shell** anymore; it lived inside the module-local canvas helper layer.

## Exact parity fixes made

### 1. Added `mikro1`-style annotation tags to the remaining outlier graph systems
Applied in:
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro2/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/finanzwirtschaft/js/ui/graphs.js`

What changed:
- introduced rounded boxed callout tags for curve names, horizontal/vertical reference lines, and marked points
- replaced the previous bare `fillText(...)` labels used by the shared local helpers

Why:
- this is one of the most visible `mikro1` graph cues
- it improves legibility and immediately makes graphs feel like the same visual product family

### 2. Added consistent legend-card rendering to the remaining outlier modules
Applied in:
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro2/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/finanzwirtschaft/js/ui/graphs.js`

What changed:
- added automatic legend-entry registration for labeled curves, lines, and points
- rendered the legend through the existing `GraphEngine.drawLegend(...)` path so it matches the benchmark card family

Why:
- the biggest remaining product-level inconsistency was that some modules still looked “label-on-canvas only” while `mikro1` looked like a chart system with a real legend language

### 3. Standardized canvas geometry toward the benchmark family
Applied in:
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/ui/graphPanel.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro2/js/ui/graphPanel.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/finanzwirtschaft/js/ui/graphPanel.js`

What changed:
- upgraded graph canvases from `800x500` to `920x560`

Why:
- the smaller canvas size made these modules feel visibly more compact and pilot-like
- the larger benchmark geometry creates better spacing for callouts, legends, and point labels

## Browser verification

### Exact verification tooling
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project_wide_graph_visual_parity_pass1.mjs`

### Exact verification performed
- Local server on `http://127.0.0.1:4182`
- Playwright browser sweep across:
  - `mikro1 / markt / graph`
  - `makro1 / islm / graph`
  - `makro2 / mundell_fleming / graph`
  - `mikro2 / spieltheorie_statisch / graph`
  - `finanzwirtschaft / wacc_leverage / graph`
  - `internationale-wirtschaftsbeziehungen / zinsparitaet / graph`
  - `oekonometrie / prediction_intervals / graph`
  - `mathematik / lagrange / graph`

### Verification artifacts
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project-wide-graph-visual-parity-pass-1/mikro1-markt.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project-wide-graph-visual-parity-pass-1/makro1-islm.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project-wide-graph-visual-parity-pass-1/makro2-mundell-fleming.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project-wide-graph-visual-parity-pass-1/mikro2-spieltheorie-statisch.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project-wide-graph-visual-parity-pass-1/finanzwirtschaft-wacc-leverage.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project-wide-graph-visual-parity-pass-1/iwb-zinsparitaet.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project-wide-graph-visual-parity-pass-1/oekonometrie-conf-pred.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project-wide-graph-visual-parity-pass-1/mathematik-lagrange.png`

### Exact visible improvements achieved
1. Legends now feel much more uniform.
   - `makro1`, `makro2`, and `finanzwirtschaft` now show the same benchmark-style legend-card language instead of relying on naked line labels.
2. Labels now feel much more uniform.
   - the outlier modules now use boxed annotation tags rather than plain inline text floating on the graph.
3. Marker emphasis is more benchmark-like.
   - important points and state labels now read as intentional callouts rather than raw plotting text.
4. Control + canvas framing is materially closer.
   - larger canvas geometry removes the “smaller local chart system” feeling in the former outliers.
5. The project now reads much more like:
   - one graph system with subject-specific content
   - not several separate module-local chart systems

## Remaining graph inconsistencies

### Still remaining, but acceptable in this pass
1. `mikro2` still has structurally different graph pages for matrix/normal-form and other discrete visuals.
   - this is content-driven, not a product-family break
2. `mathematik` still uses its own mathematical drawing helpers and shorter `Interpretation` label wording.
   - visually it remains within the shared family; the remaining difference is now subject-specific tone rather than chart-system fragmentation
3. Some dense macro charts can still crowd labels near the legend in high-information states.
   - this is now a local tuning issue, not a system-wide parity break

## Risks / gaps
1. The parity fix was intentionally shared-first only where safe.
   - it did not rewrite graph economics or model geometry
2. The automatic legend registration in the patched modules depends on labeled helper calls.
   - unlabeled custom text drawn directly inside individual graph functions still remains module-local by design

## Judgment
Yes: graph surfaces now feel **materially closer to one unified system**.

Before this pass, `makro1`, `makro2`, and `finanzwirtschaft` were still visibly using a different canvas presentation language from `mikro1`. After this pass, the remaining differences are mostly legitimate content differences rather than product-family drift. The portal is no longer in the “graphs work but feel like different chart systems” state.
