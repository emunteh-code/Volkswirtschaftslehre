# Makro I Graph Readability and Phillips Shape Correction Pass 5

Date: 2026-04-12

## Audit Findings Before Implementation

### Previous readability problems

- The Makro I graph shell still constrained graph canvases with a `920px` width in the panel markup and a shared `aspect-ratio: 23 / 14` plus `max-height: clamp(300px, 47vh, 500px)` in the inherited graph card styling.
- The `islmpc` graph canvas used `920x640`, which left the two-panel `(Y,i)` / `(u,π)` teaching figure visually compressed relative to the available content width.
- The subplot geometry inside [makro1/js/ui/graphs.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphs.js) used tight panel gutters (`padL: 58`, `padR: 14`, shallow panel heights, and a narrow bridge band), which limited axis-label breathing room and compressed both panels.
- The shared legend is always drawn in the top-right region and could compete with plotted content when the available vertical room became tight.

### Previous Phillips-curve shape problem

- Both Makro I graph surfaces still rendered the Phillips curve as a straight line:
  - [makro1/js/ui/graphs.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphs.js) `drawPhillips()`
  - [makro1/js/ui/graphs.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphs.js) `drawISLMPC()`
- The current implementation used the linear plotting functions:
  - `π = πᵉ + s - α (u - uₙ)` in `phillips`
  - the same linear unemployment-to-inflation mapping in the lower panel of `islmpc`
- That kept the qualitative sign right, but it did not match the source-facing expectation for a visibly curved relationship.

### Source-fidelity note used for this pass

- The Makro I source text in `Makro Buch 2` explicitly emphasizes that Phillips relationships change form over regimes and can flatten near low inflation / deflation. This pass therefore targets a restrained nonlinear short-run Phillips rendering instead of a decorative or exaggerated bend.

## Exact Graph-Size / Layout Changes

### Shared Makro graph shell

- In [makro1/js/ui/graphPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphPanel.js), both target surfaces now use dedicated macro graph wrappers:
  - `graph-container--macro-focus`
  - `graph-controls--macro-focus`
  - `graph-plot-shell--macro`
- The standalone `phillips` canvas increased from `920x560` to `1160x620`.
- The `islmpc` canvas increased from `920x640` to `1240x780`.

### CSS sizing and spacing

- In [makro1/css/styles.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/css/styles.css):
  - graph card padding is now `24px`
  - graph card row gap is now `20px`
  - the focused macro control grid uses `3` wider columns on desktop
  - the single-panel Phillips plot shell uses `height: clamp(600px, 64vh, 660px)`
  - the two-panel `islmpc` plot shell uses `height: clamp(700px, 78vh, 780px)`
  - responsive overrides reduce height only on narrower screens instead of falling back to the old compressed canvas behavior

### Two-panel subplot geometry

- In [makro1/js/ui/graphs.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphs.js), the `islmpc` drawing geometry was rebuilt:
  - larger left axis gutter: `~92px` instead of `58px`
  - reserved right legend strip: `~20%` of canvas width instead of `14px` right padding
  - bridge band: `40px`
  - explicit upper and lower panel heights with a much taller total plot area
  - legend anchored in the reserved right strip instead of floating over the core intersections

## Exact Curve-Shape Change

- Added a dedicated Phillips helper in [makro1/js/ui/graphs.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphs.js):
  - `phillipsGapEffect(gap, alpha)`
  - `phillipsInflation(u, piExpected, uNatural, alpha, supply = 0)`
- The displayed curve is no longer generated from the straight-line plot `π = πᵉ + s - α(u-u_n)`.
- It now uses a restrained nonlinear mapping around the unemployment gap:
  - `gapEffect = α * gap * (1 - 0.075 * gap)`
  - `π = πᵉ + s - gapEffect`
- This preserves the required qualitative logic:
  - downward sloping in the displayed domain
  - anchored at `u_n`
  - shifted vertically by `πᵉ` and `s`
  - equilibrium points are computed from and plotted on the same displayed curve

## Whether The Same Correction Was Applied To `phillips`

- Yes.
- The same readability principle and the same nonlinear Phillips plotting helper now apply to:
  - standalone `phillips`
  - lower `(u, π)` panel inside `islmpc`

## Exact Files Changed

- [makro1/css/styles.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/css/styles.css)
- [makro1/js/ui/graphEngine.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphEngine.js)
- [makro1/js/ui/graphPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphPanel.js)
- [makro1/js/ui/graphs.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphs.js)
- [docs/audits/makro1-graph-readability-and-phillips-shape-correction-pass-5.md](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/docs/audits/makro1-graph-readability-and-phillips-shape-correction-pass-5.md)

## Browser Verification Notes

- Verified in-browser on `http://127.0.0.1:8766/makro1/index.html` with the Makro I graph tab active for:
  - `islmpc`
  - `phillips`
- Measured live layout on the rendered graph cards:
  - `islmpc` canvas: `840x778`
  - `phillips` canvas: `840x658`
  - graph card padding: `24px` on all sides
  - controls-to-plot gap: `20px`
  - plot-to-interpretation gap: `20px`
- `islmpc` verification:
  - both panels are visibly larger and easier to read
  - bridge label remains short and clear: `Kette: Okun → Phillips → Zinsregel`
  - the lower Phillips curve is visibly curved
  - after raising `s` to `1.4`, the lower reference curve and shifted curve stayed coherent and the equilibrium coordinates updated from about `(u ≈ 4.72, π ≈ 2.26)` to `(u ≈ 4.73, π ≈ 3.65)`
- `phillips` verification:
  - the graph area is visibly larger
  - the active short-run Phillips curve is visibly curved rather than straight
  - the natural-unemployment benchmark remains readable
  - after raising `s` to `1.2`, the shifted curve remained distinct from the baseline/reference presentation
  - after raising `πᵉ` to `3.5` with `s = 0`, the dashed comparison curve shifted upward cleanly
- Console/runtime:
  - no page errors
  - no new console errors introduced by this pass
  - remaining warnings were limited to the pre-existing MathJax `[tex]/ams` version warning

## Honest Note On Remaining Stylization Relative To The Source

- The plotted Phillips curve is still a portal teaching approximation, not a literal reproduction of a textbook figure from the PDF.
- The course’s benchmark formulas remain linear in the text layer; the graph now uses a restrained nonlinear rendering so the live visual better matches the source-facing curved teaching figure and avoids the previous straight-line misrecognition.
- The figure styling remains portal-native (colors, card chrome, legend box), but the panel spacing and curve shape now serve interpretability and source recognition rather than decoration.
