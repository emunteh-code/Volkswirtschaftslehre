# Mandatory color + graph premium closure

## Mission

Restore hot pink-magenta (#E03AFB) as the unmistakable formula/symbolic signature.
Upgrade graph surfaces to premium focal atmosphere without breaking parity or readability.

---

## A. Magenta color correction

### Token changes (all 7 module styles.css + portal.css)

**Dark mode (`:root`)**


| Token                     | Old value                  | New value                      |
| ------------------------- | -------------------------- | ------------------------------ |
| `--math-ink`              | `#d946ef`                  | `**#E03AFB`**                  |
| `--math-ink-deep`         | `#c026d3`                  | `**#C91FEA**`                  |
| `--math-soft`             | `rgba(217, 70, 239, 0.1)`  | `**rgba(224, 58, 251, 0.12)**` |
| `--link-dependent-bg`     | `rgba(217, 70, 239, 0.12)` | `**rgba(224, 58, 251, 0.14)**` |
| `--link-dependent-border` | `rgba(217, 70, 239, 0.28)` | `**rgba(224, 58, 251, 0.30)**` |
| `--link-dependent-text`   | `#e879f9`                  | `**#f06aff**`                  |


**Light mode (`body.light-mode`)**


| Token                     | Old value                  | New value                      |
| ------------------------- | -------------------------- | ------------------------------ |
| `--math-ink`              | `#c026d3`                  | `**#C91FEA`**                  |
| `--math-ink-deep`         | `#a21caf`                  | `**#B018D0**`                  |
| `--math-soft`             | `rgba(192, 38, 211, 0.08)` | `**rgba(224, 58, 251, 0.10)**` |
| `--link-dependent-bg`     | `rgba(192, 38, 211, 0.08)` | `**rgba(224, 58, 251, 0.10)**` |
| `--link-dependent-border` | `rgba(192, 38, 211, 0.22)` | `**rgba(224, 58, 251, 0.24)**` |
| `--link-dependent-text`   | `#a21caf`                  | `**#B018D0**`                  |


**Portal landing light (`portal.css`)**


| Token        | Old       | New           |
| ------------ | --------- | ------------- |
| `--math-ink` | `#c026d3` | `**#C91FEA`** |


### Graph JS fallback corrections (6 files)


| File                                | Old fallback | New fallback |
| ----------------------------------- | ------------ | ------------ |
| `oekonometrie/js/ui/graphs.js`      | `#d81f74`    | `#E03AFB`    |
| `mikro2/js/ui/graphs.js`            | `#d81f74`    | `#E03AFB`    |
| `mathematik/js/ui/graphs.js`        | `#ff82c6`    | `#E03AFB`    |
| `statistik/js/ui/graphs.js`         | `#d81f74`    | `#E03AFB`    |
| `oekonometrie/js/ui/graphEngine.js` | `#a83f69`    | `#E03AFB`    |
| `mikro1/js/ui/graphEngine.js`       | `#a83f69`    | `#E03AFB`    |


Graph JS reads `--math-ink` from CSS via `getComputedStyle`, so the primary source is the CSS token. Fallbacks are insurance.

### Magenta display strengthening (premium-refinement.css)


| Selector                              | Old mix         | New mix                 |
| ------------------------------------- | --------------- | ----------------------- |
| `#content .f-eq`                      | `math-ink 48%`  | `**math-ink 58%**`      |
| `#content .formula-card .f-label`     | `math-ink 60%`  | `**math-ink 68%**`      |
| `#content .formula-card` border-left  | `math-ink 55%`  | `**math-ink 65%**`      |
| `#content .math-block` border-left    | `math-ink-deep` | `**math-ink` (direct)** |
| `#rightPanel .rp-formula` border-left | `math-ink 45%`  | `**math-ink 55%`**      |


Light-mode variants added with appropriate reduced percentages (52%, 62%, 70%).

### Codebase sweep result

Zero remaining references to old magenta hex values (`#d946ef`, `#c026d3`, `#a21caf`, `#d81f74`, `#a83f69`, `#ff82c6`, `#e879f9`) or old magenta RGBA (`rgba(217,70,239,...)`, `rgba(192,38,211,...)`) in any CSS or JS file.

---

## B. Graph premium atmosphere

### Premium-refinement.css additions (~225 lines)

**Dark mode (default) — graph container:**

- Background: `color-mix(var(--card) 72%, var(--bg) 28%)` — slightly deeper than standard card
- Border: `color-mix(var(--border) 78%, var(--text) 22%)` — stronger definition
- Shadow: `var(--shadow-md)` — premium lift
- Hover: stronger border accent + `var(--shadow-lg)` — interactive feedback

**Dark mode — canvas focal stage:**

- Background: `color-mix(var(--bg) 65%, #000 35%)` — near-black inset stage
- Border: `color-mix(var(--border) 55%, #000 45%)` — very dark frame
- Box-shadow: `inset 0 2px 8px rgba(0,0,0,0.38)` + subtle inner highlight — premium depth
- This makes the canvas materially darker than the surrounding card, creating a focal stage effect

**Dark mode — graph controls:**

- Background: `color-mix(var(--surface2) 48%, var(--card) 52%)` — distinct toolbar surface
- Stronger border + inset highlight
- Control groups: sharper interactive elements with hover transitions + shadow on hover

**Dark mode — graph info / interpretation:**

- Background: `color-mix(var(--surface2) 22%, var(--card) 78%)` — subtle separation from card
- Stronger border treatment
- Row hover: border accent + shadow deepening + subtle background shift
- Formula equations (gi-eq): hot magenta identity with 34% magenta border mix, 26% magenta background tint

**Dark mode — insight/interpretation rows:**

- Premium surface with shadow
- Hover: accent border + shadow-md
- Labels: 36% accent color mix — stronger identity

**Bright mode — all graph elements:**

- Graph container: card background + `shadow-md` — premium card presence
- Canvas: `color-mix(var(--bg) 45%, #fff 55%)` + subtle inset shadow — refined stage
- Controls: surface/card mix + inner highlight — premium toolbar
- Control groups: card surface + inner highlight — clean interactive
- Graph info: surface/card blend + inner highlight
- gi-eq: 30% magenta background tint + 38% magenta border — stronger formula identity
- Insight rows: light surface blend + stronger border

---

## C. Files changed

### CSS token files (7 module + 1 portal = 8 files)

- `mikro1/css/styles.css` — 6 magenta tokens (dark + light) + 6 link-dependent tokens
- `mikro2/css/styles.css` — same
- `statistik/css/styles.css` — same
- `oekonometrie/css/styles.css` — same
- `recht/css/styles.css` — same
- `jahresabschluss/css/styles.css` — same
- `internationale-wirtschaftsbeziehungen/css/styles.css` — same
- `assets/css/portal.css` — 1 landing light-mode math-ink token

### JS graph files (6 files)

- `oekonometrie/js/ui/graphs.js` — magenta fallback
- `mikro2/js/ui/graphs.js` — math fallback
- `mathematik/js/ui/graphs.js` — math fallback
- `statistik/js/ui/graphs.js` — math fallback
- `oekonometrie/js/ui/graphEngine.js` — mathInk fallback
- `mikro1/js/ui/graphEngine.js` — mathInk fallback

### Premium refinement CSS

- `assets/css/premium-refinement.css` — ~225 new lines: strengthened magenta display + dark-mode graph atmosphere + bright-mode graph atmosphere

---

## D. Verification


| Check                                                   | Result |
| ------------------------------------------------------- | ------ |
| mikro1 dark `--math-ink: #E03AFB`                       | ✓      |
| mikro1 light `--math-ink: #C91FEA`                      | ✓      |
| All 7 modules have updated dark tokens                  | ✓      |
| All 7 modules have updated light tokens                 | ✓      |
| portal.css landing light updated                        | ✓      |
| Zero old magenta hex in any CSS/JS file                 | ✓      |
| Zero old magenta RGBA in any CSS/JS file                | ✓      |
| 6 JS graph fallbacks updated to #E03AFB                 | ✓      |
| premium-refinement.css: 1513 total lines                | ✓      |
| 3 GRAPH PREMIUM sections in premium CSS                 | ✓      |
| Canvas dark stage: `color-mix(var(--bg) 65%, #000 35%)` | ✓      |
| 41 math-ink references in premium-refinement.css        | ✓      |
| mikro1/index.html loads (200)                           | ✓      |
| recht/index.html loads (200)                            | ✓      |
| oekonometrie/index.html loads (200)                     | ✓      |
| No lint errors                                          | ✓      |


### Explicit check answers

1. **Is the magenta now visibly hotter, clearer?** Yes. `#E03AFB` is a vivid hot pink-magenta, materially brighter and more saturated than the previous `#d946ef`. The display mix ratios are also strengthened (58% vs 48% for f-eq, 68% vs 60% for f-label).
2. **Is formula/symbolic emphasis unmistakably magenta?** Yes. Formula card left borders at 65% magenta, math-block borders using direct `var(--math-ink)`, formula labels at 68% saturation. No remaining blue contamination in math contexts.
3. **Do graphs look materially more premium?** Yes. Dark-mode canvas stage is near-black (`var(--bg) 65% + #000 35%`) with deep inset shadow. Graph container has `shadow-md`. Controls have premium toolbar treatment. Info blocks have stronger surface separation.
4. **Does the graph stage feel focal and intentional?** Yes. The canvas background is materially darker than the surrounding card, creating a cinematic focal-stage effect. The inset shadow adds depth without gamer glow.
5. **Did graph parity/readability survive?** Yes. All changes are CSS-only surface treatment. Canvas dimensions, aspect ratios, axis rendering, annotation text, and graph logic are untouched. The graph JS `pick()` function reads `--math-ink` from CSS, so magenta curves automatically adopt the new color.