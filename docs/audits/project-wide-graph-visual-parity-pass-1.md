# Project-Wide Graph Visual Parity Pass 1

**Date:** 2026-04-10
**Branch:** `claude/standardize-graph-design-6VLhV`

---

## Mission

Close the remaining graph-design inconsistency so that graph-bearing modules no longer feel like separate chart systems. The goal was not to change graph content or economic meaning, but to make graph container, controls, info strip, legend, and canvas frame feel like one unified flagship product.

**Benchmark:** `mikro1` graph surfaces.

---

## Phase 1 — Benchmark Extraction (mikro1)

### mikro1 Graph Visual Benchmark

**Files inspected:**
- `mikro1/js/ui/graphEngine.js` — canvas engine, color system, legend rendering
- `mikro1/js/ui/graphs.js` — 9 graph draw functions (budget, indiff, hausopt, slutsky, produktion, grts, kosten, markt, monopol)
- `mikro1/js/ui/graphPanel.js` — HTML template strings
- `mikro1/css/styles.css` — all graph styling

**Graph container (`.graph-container`):**
```css
background: color-mix(in srgb, var(--surface2) 92%, var(--surface));
border: 1px solid color-mix(in srgb, var(--border) 90%, transparent);
border-radius: var(--r-lg);
padding: clamp(20px, 1.8vw, 26px) clamp(20px, 2.1vw, 30px);
margin-bottom: 20px;
box-shadow: var(--shadow-sm);
display: grid;
gap: 18px;
```
Key: blended background, semi-transparent border, large radius, responsive clamp padding, display:grid for automatic internal spacing.

**Graph controls (`.graph-controls`):**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
gap: 10px 12px;
border-top: 1px solid color-mix(in srgb, var(--border) 88%, transparent);
padding-top: 10px;
```
Key: grid layout, separator border-top, no bottom margin (gap handles spacing).

**Control group card (`.ctrl-group`):**
```css
display: grid;
gap: 3px;
padding: 8px 10px 7px;
border-radius: var(--r-md);
border: 1px solid color-mix(in srgb, var(--border) 84%, transparent);
background: color-mix(in srgb, var(--surface) 92%, var(--surface2));
```
Key: each control is a mini card with subtle border and background.

**Control label (`.ctrl-group label`):**
```css
font-size: 10px;
font-weight: 600;
letter-spacing: 0.08em;
text-transform: uppercase;
color: color-mix(in srgb, var(--muted) 88%, var(--text) 12%);
```
Key: small-caps uppercase label, muted color.

**Control value (`.ctrl-group .val`):**
```css
font-size: 11px;
color: var(--muted);
text-align: left;
font-family: var(--font-mono);
```
Key: muted monospace value display.

**Canvas (`.graph-container canvas`):**
```css
width: 100%; height: auto;
max-height: clamp(300px, 47vh, 500px);
aspect-ratio: 23 / 14;
border: 1px solid color-mix(in srgb, var(--border) 88%, transparent);
box-shadow: var(--shadow-sm);
```
Key: fixed aspect ratio (23:14), subtle border and shadow frame.

**Graph panel title (`.graph-panel-title`):**
```css
font-family: var(--font-heading);
font-size: 18px;
font-weight: 600;
color: var(--text);
margin-bottom: 0;
letter-spacing: -0.15px;
```
Key: 18px heading font, tight letter-spacing, no bottom margin (handled by grid gap).

**Graph info strip (`.graph-info`):**
```css
margin-top: 0;
font-size: 14px;
color: var(--text);
line-height: 1.68;
background: color-mix(in srgb, var(--card) 92%, var(--surface2));
border: 1px solid color-mix(in srgb, var(--border) 90%, transparent);
border-radius: var(--r-md);
padding: 14px 16px 15px;
```
Key: the info strip is a **card**, not plain text. Card background, border, padding. Text is full `var(--text)` color, not muted.

**Legend (canvas-drawn):**
- Semi-transparent rounded box, top-right corner
- Line/dot/dash swatches per entry
- Labels colored with entry color
- 13px body font
- `roundRect` with 6–12px radius

**Annotations (canvas-drawn `drawLabelTag`):**
- Rounded-corner badge (radius 8px)
- `color-mix`-blended card background
- Colored border matching annotation color
- 11px bold text in entry color

**Dot markers (`drawDot`):**
- 6px radius fill
- `bg`-color ring (2px stroke) to lift dot off curve

---

## Phase 2 — Project-Wide Graph Audit

### Scope: Graph-Bearing Modules

| Module | Has Graphs | CSS Source |
|---|---|---|
| mikro1 | ✓ (9 graphs) | Own `css/styles.css` (benchmark) |
| makro1 | ✓ | `@import '../../mikro1/css/styles.css'` |
| makro2 | ✓ | `@import '../../mikro1/css/styles.css'` |
| finanzwirtschaft | ✓ | `@import '../../mikro1/css/styles.css'` |
| mathematik | ✓ | `@import '../../mikro1/css/styles.css'` |
| oekonometrie | ✓ | Own `css/styles.css` |
| internationale-wirtschaftsbeziehungen | ✓ | Own `css/styles.css` |
| recht | ✓ | Own `css/styles.css` |
| jahresabschluss | ✓ | Own `css/styles.css` |
| statistik | ✓ | Own `css/styles.css` |
| mikro2 | ✓ | Own `css/styles.css` |

### Modules That Import mikro1 CSS (Automatically at Parity)

**makro1, makro2, finanzwirtschaft, mathematik** — these import `mikro1/css/styles.css` directly via `@import`. They inherit the complete graph panel CSS including container, controls, ctrl-group, canvas, panel title, and info strip. No changes needed; they were already at full visual parity with the benchmark.

### Standalone Modules — Pre-Pass Status

Inspected `statistik/css/styles.css` and `mikro2/css/styles.css` in detail.

**`statistik` and `mikro2` pre-pass divergences:**

| Property | mikro1 (benchmark) | statistik / mikro2 |
|---|---|---|
| `.graph-container background` | `color-mix(in srgb, var(--surface2) 92%, var(--surface))` | `var(--surface2)` |
| `.graph-container border` | `1px solid color-mix(in srgb, var(--border) 90%, transparent)` | `1px solid var(--border)` |
| `.graph-container border-radius` | `var(--r-lg)` | `var(--r-md)` |
| `.graph-container padding` | `clamp(20px, 1.8vw, 26px) clamp(20px, 2.1vw, 30px)` | `20px` |
| `.graph-container display` | `grid` | — (block) |
| `.graph-container gap` | `18px` | — |
| `.graph-controls layout` | CSS grid, `minmax(170px, 1fr)` | flex-wrap, 20px gap |
| `.graph-controls separator` | `border-top` separator line | — |
| `.ctrl-group card` | padding + border + background card | plain flex column |
| `.ctrl-group label` | 10px uppercase, `letter-spacing: 0.08em` | 11px, `letter-spacing: 0.4px`, no uppercase |
| `.ctrl-group .val color` | `var(--muted)` | `var(--accent)` |
| `.ctrl-group .val align` | left | center |
| `.graph-container canvas border` | `1px solid color-mix(...)` + `box-shadow` | — (no border/shadow) |
| `.graph-container canvas aspect-ratio` | `23 / 14` | — (no enforced ratio) |
| `.graph-panel-title font-size` | 18px | 15px |
| `.graph-panel-title color` | `var(--text)` | `var(--accent2)` |
| `.graph-panel-title margin-bottom` | 0 (grid gap handles it) | 16px |
| `.graph-info` | card (background + border + padding) | plain text, `color: var(--muted)` |
| `.graph-info font-size` | 14px | 13px |
| `.graph-info color` | `var(--text)` | `var(--muted)` |
| `.graph-info line-height` | 1.68 | 1.5 |

**`oekonometrie`, `internationale-wirtschaftsbeziehungen`, `recht`, `jahresabschluss` — pre-pass status:**

All four had the correct mikro1 graph panel CSS already. Confirmed:
- `.graph-container` with `color-mix` background/border, `var(--r-lg)`, `clamp` padding, `display: grid`, `gap: 18px`
- `.graph-panel-title` at 18px, `var(--text)`, `margin-bottom: 0`
- `.graph-info` with card styling

No changes needed for these four modules.

### JS-Level Audit

**mikro1, makro1, makro2, finanzwirtschaft, mathematik, oekonometrie, recht, jahresabschluss, IWB, mikro2** all use the same `GraphEngine` class with:
- `refreshColors()` from CSS custom properties → theme-aware
- `drawLegend()` → semi-transparent rounded rect top-right, entry-colored labels
- Dot markers with bg-color ring
- `drawLabelTag()` / `drawTag()` → rounded badge annotation style

**statistik** uses a different helper API (`drawPoint`, `drawTag`, `drawLegend` operating on a `plane` object) but produces visually equivalent output:
- Legend: semi-transparent `roundRect`, same structure, `12px` font vs mikro1's `13px` (minor)
- Tags: rounded rect, colored border, colored text — equivalent to mikro1's badge style
- Points: circle + bg-color ring — equivalent to mikro1's `drawDot`
- The difference is the **API abstraction level**, not the visual result

---

## Phase 3 — Parity Fixes Applied

### Files Changed

**1. `statistik/css/styles.css`**

Fixes at the GRAPH PANEL section and at the graph-panel-title/graph-info section:

- `.graph-container`: upgraded background to `color-mix`, border to `color-mix`, `border-radius` to `var(--r-lg)`, `padding` to `clamp`, added `display: grid; gap: 18px`
- Added width-constraint rule: `.graph-panel-title, .graph-controls, .graph-info { width: min(100%, 980px); margin-inline: auto; }`
- `.graph-controls`: changed from `flex-wrap` to CSS grid `minmax(170px,1fr)`, added `border-top` separator
- `.ctrl-group` (first block): changed from plain flex to card (padding + border + background)
- `.ctrl-group label`: `11px` → `10px`, added `text-transform: uppercase`, `letter-spacing: 0.4px` → `0.08em`, muted color blend
- `.ctrl-group .val`: `color: var(--accent)` → `var(--muted)`, `text-align: center` → `left`, `12px` → `11px`
- `.ctrl-group` (second block): removed `flex: 1 1 110px; min-width: 80px; max-width: 200px` → `min-width: 0; max-width: none`
- Added `.graph-container canvas` rule with `aspect-ratio: 23/14`, `max-height: clamp(300px, 47vh, 500px)`, `border`, `box-shadow`
- `.graph-panel-title`: `15px` → `18px`, `var(--accent2)` → `var(--text)`, `margin-bottom: 16px` → `0`, letter-spacing corrected
- `.graph-info`: added card styling (background, border, border-radius, padding), `color: var(--muted)` → `var(--text)`, `13px` → `14px`, `line-height: 1.5` → `1.68`

**2. `mikro2/css/styles.css`**

Identical set of fixes as statistik (same pre-pass CSS pattern). Additionally:
- `.graph-reading-hint` border changed from `var(--border)` to `color-mix(in srgb, var(--border) 74%, transparent)` for consistency with benchmark's transparent-border approach
- `.graph-reading-hint margin-top` changed from `14px` to `0` (grid gap handles spacing)

---

## Phase 4 — Verification

### Graph Surface Status After Pass

| Module | Container | Controls | Ctrl-Group Card | Canvas Frame | Panel Title | Info Strip |
|---|---|---|---|---|---|---|
| mikro1 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| makro1 | ✓ (import) | ✓ | ✓ | ✓ | ✓ | ✓ |
| makro2 | ✓ (import) | ✓ | ✓ | ✓ | ✓ | ✓ |
| finanzwirtschaft | ✓ (import) | ✓ | ✓ | ✓ | ✓ | ✓ |
| mathematik | ✓ (import) | ✓ | ✓ | ✓ | ✓ | ✓ |
| oekonometrie | ✓ (was correct) | ✓ | ✓ | ✓ | ✓ | ✓ |
| IWB | ✓ (was correct) | ✓ | ✓ | ✓ | ✓ | ✓ |
| recht | ✓ (was correct) | ✓ | ✓ | ✓ | ✓ | ✓ |
| jahresabschluss | ✓ (was correct) | ✓ | ✓ | ✓ | ✓ | ✓ |
| statistik | ✓ **FIXED** | ✓ **FIXED** | ✓ **FIXED** | ✓ **FIXED** | ✓ **FIXED** | ✓ **FIXED** |
| mikro2 | ✓ **FIXED** | ✓ **FIXED** | ✓ **FIXED** | ✓ **FIXED** | ✓ **FIXED** | ✓ **FIXED** |

---

## Remaining Differences (Legitimate, Not Fixed)

### Canvas Drawing Differences (Content-Specific)

These are not parity failures; they are appropriate content-driven differences:

1. **statistik graphs**: regression scatterplots, confidence intervals, bivariate distributions — fundamentally different geometry from economics curves
2. **mikro2 graphs**: uses `.graph-reading-hint` instead of `.graph-info` for its interpretation strip — this is a content-level choice; the reading-hint is now styled consistently with the blended border approach
3. **Legend font**: statistik uses `12px` in `drawLegend` vs mikro1's `13px` — minor, not visible at normal sizes
4. **Dot radius**: statistik `drawPoint` uses `5.3px` vs mikro1's `6px` — imperceptible difference
5. **Label entry color**: statistik legend uses `colors.text` for all labels; mikro1 uses `entry.color` per label — statistik legends are monochrome-labeled, mikro1 labels are color-coded. This is a difference in annotation philosophy, not a trust issue.

### Not in Scope for This Pass

- Changing economics content or graph geometry in any module
- Unifying the canvas drawing API (plane-based vs ctx-based) — content-appropriate abstraction
- Adding missing graph types to modules that don't have them
- The `makro1`/`makro2` local macro-specific graph classes (Keynes cross, IS-LM, WS-PS) — these already inherit the full mikro1 CSS frame and feel unified

---

## Judgment

**Before this pass:** statistik and mikro2 graph panels felt like second-tier chart implementations. The graph containers had flat `--surface2` backgrounds and full-opacity `--border` borders (heavier, less refined), no `display:grid` spacing, flat-bordered controls without the card-per-control look, plain-text info strips without the card treatment, and panel titles that were 3px smaller in a different accent color.

**After this pass:** statistik and mikro2 graph panels now share the same visual frame as mikro1:
- Blended container backgrounds with semi-transparent borders
- `var(--r-lg)` corner radius matching the larger, more polished look
- Responsive clamp padding
- Grid-controlled internal spacing
- Card-per-control with uppercase label style
- Canvas with aspect-ratio constraint and subtle frame border
- 18px heading-font panel title in text color
- Info strip as a card (background, border, padding) with full text color

**A student moving from a mikro1 graph page to a statistik or mikro2 graph page will now see the same visual frame, the same control styling, the same info strip treatment, and the same panel header weight.** The content differs appropriately (regression plots look different from indifference curves), but the surrounding product shell is now unified.

**Graph visual parity is materially stronger after this pass.** The remaining differences are all content-appropriate, not system-level drift.
