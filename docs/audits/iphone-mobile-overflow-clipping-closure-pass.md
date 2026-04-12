# iPhone / mobile overflow and clipping — closure pass

**Date:** 2026-04-12  
**Priority:** Release-blocking, project-wide, student-visible.

---

## Root causes found

### 1. `clamp()` minima wider than the viewport (critical)

Module `:root` tokens used:

- `--content-shell-max: clamp(1120px, 88vw, 1540px)`

For viewports **between ~901px and 1119px**, `88vw` is below `1120px`, so `clamp` **returns 1120px**. `#content { max-width: var(--content-shell-max) }` then becomes **wider than the viewport**, producing **horizontal page overflow**.

The same pattern affected `--content-body-max` and `--graph-shell-max` where the minimum of the clamp exceeded small viewports.

**Fix:** Wrap with `min(100%, …)` so the used value never exceeds the containing block:

- `--content-shell-max: min(100%, clamp(1120px, 88vw, 1540px));`
- `--content-body-max: min(100%, clamp(980px, 82vw, 1240px));`
- `--graph-shell-max: min(100%, clamp(1080px, 88vw, 1400px));`

Applied in each module’s own `css/styles.css` that defines these variables (not in re-exports that `@import` mikro1).

### 2. Missing global shrink / clip discipline

Flex/grid children without `min-width: 0` can refuse to shrink below intrinsic content width (long formulae, code, chips), forcing horizontal overflow.

**Fix:** Shared rules in `premium-refinement.css` (loaded after every module shell): `html`/`body`/`#app`/`#main` use `overflow-x: clip` and `max-width: 100%`; key surfaces (`#content`, panels, graph shell, R execution, direct `#content` children) get `min-width: 0` and `max-width: 100%` where appropriate.

### 3. Graph card max-width

`.graph-container` used `max-width: min(100%, var(--graph-shell-max))`. When the token still resolved to a large clamp floor, the graph shell could participate in overflow.

**Fix:** `max-width: 100%` on `#content .graph-container` in premium so it always respects the already-capped `#content` width.

### 4. R execution two-column grid

`.r-execution-instrument` uses a two-column grid with a **minimum** on the output track (`minmax(288px, 1fr)`). Narrow tablets in landscape could still be tight.

**Fix:** Stack editor/output in a **single column from 1024px down** (earlier than the existing 980px block that only adjusted min-heights and orientation). Editor/output cards get `min-width: 0; max-width: 100%`.

### 5. Math / code / media

Wide `pre`, terminal output, and display MathJax need **local** horizontal scrolling, not page-wide growth.

**Fix:** Premium rules: `overflow-x: auto` + `-webkit-overflow-scrolling: touch` on `#content pre`, `.r-practice-output`, `.rp-formula .rp-f-eq`, `.math-block` / `.formula-card .f-eq` / display `mjx-container`; `img, canvas, svg, video { max-width: 100%; height: auto; }`.

### 6. Light shell pages (`r/`, etc.)

`common.css` had no horizontal containment on `html`/`body`.

**Fix:** `overflow-x: clip` + `max-width: 100%` on `html` and merged into the main `body` rule.

---

## Files changed

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Global mobile pass: clip, `#content`/`graph` max-width caps, flex children `min-width: 0`, math/code scroll, topbar/tab row bounds, safe-area padding ≤480px, Aufgaben/exam surfaces, graph `max-width: 100%`. |
| `assets/css/r-practice.css` | R editor/output cards `min-width: 0`; stack instrument ≤1024px; deduplicated 980px grid rules. |
| `assets/css/common.css` | `html`/`body` overflow-x clip + max-width; `video` in responsive media rule. |
| `mikro1/css/styles.css` | Token wraps `min(100%, clamp(...))` for shell/body/graph max vars. |
| `mikro2/css/styles.css` | Same for shell + body tokens. |
| `statistik/css/styles.css` | Same (all three tokens). |
| `jahresabschluss/css/styles.css` | Same. |
| `oekonometrie/css/styles.css` | Same. |
| `recht/css/styles.css` | Same. |
| `internationale-wirtschaftsbeziehungen/css/styles.css` | Same. |

**Unchanged by sed (inherit mikro1 via `@import`):** `makro1`, `mathematik`, `finanzwirtschaft` — they pick up fixed tokens from `mikro1/css/styles.css`.

---

## Breakpoints explicitly targeted

- **320px** — SE-class width; formula grid already 1fr at ≤600px in mikro1; R stack ≤1024px; content tokens capped.
- **375 / 390 / 428px** — Standard/large iPhone; same rules + tab row scroll + safe-area padding.

---

## Surfaces verified (manual checklist)

Automated Playwright overflow assertions were **not** added in this pass; verification is **manual** in DevTools responsive mode:

1. **Landing** (`index.html`) — no horizontal scroll; hero / grids fit.
2. **Theorie** — `#content` width ≤ viewport; sections readable.
3. **Formeln** — cards stack ≤600px; no clipped grid.
4. **Graph** — controls: 2-col ≤768px, 1-col ≤480px (mikro1); Makro macro-focus 1-col ≤560px.
5. **R tab** — single column ≤1024px; buttons full-width ≤640px (existing).
6. **Aufgaben** — problem cards / exam panels `max-width: 100%`.
7. **Prüfungstransfer / reveals** — inherits section + pre/math overflow rules.
8. **Right panel** — hidden &lt;1200px (existing); when visible, `min-width: 0` in premium helps desktop edge cases.

**Explicit checks:** no horizontal page scroll; no clipped primary copy; graph controls usable; R editor/output scroll inside panel, not page.

---

## Remaining edge cases

- **Very long unbreakable strings** (URLs, tokens) may still need local `overflow-wrap: anywhere` on specific components; global rules favour formulae/code/MathJax.
- **`overflow-x: clip` on `html`/`body`** contains residual overflow after layout fixes; it is **not** a substitute for the token and flex fixes above. If a regression introduces overflow, the clip prevents sideways scroll but the offending node should still be fixed.
- **Canvas intrinsic sizing:** some graphs rely on JS resize; if a module sets canvas width in pixels larger than the container, the container must stay `max-width: 100%` and JS should read `clientWidth` (module-specific; not changed here).

---

## Completion assessment

- [x] Primary systemic cause (`clamp` floor &gt; viewport) corrected in all standalone module stylesheets.
- [x] Shared premium + R-practice + common layers add shrink, local scroll, and early R stack.
- [x] No blind global font shrink; no removal of learning content.
- [x] `overflow-x: clip` used together with structural fixes, not alone.
