# Right-rail „Häufige Fehler“ uniformity — Pass 23

## Inconsistency classes found

1. **Legacy `.rp-mistake` skin on modern markup**  
   Several modules still shipped pre–warning-system rules for `.rp-mistake` (small red-tinted boxes, `font-size: 12px`, tight padding, `.err` / `.fix` micro-typography).  
   Live rail content is **`<article class="rp-mistake warning-card warning-card--rail">`** from `renderRightRailWarnings()` (`assets/js/portal-core/ui/warningSystem.js`). Those legacy selectors still matched the same element and **competed** with the premium `.warning-card` rules (lower specificity than `#rightPanel .rp-mistake.warning-card` in places, but **`font-size` on the article** and other inherited cues still drifted).

2. **Module variance vs modules without `.rp-mistake` CSS**  
   **makro1**, **makro2**, **finanzwirtschaft**, **mathematik** (among others) never defined `.rp-mistake` in local `styles.css`, so rail cards followed **`premium-refinement.css` only** and looked “more designed”. Modules with legacy blocks looked flatter / smaller.

3. **Section label tint**  
   `#rightPanel .rp-section--mistakes h4` used a **warning-tinted** label colour, unlike other right-rail section headers (muted neutral). That read as a third visual system for the same chrome.

4. **Stack spacing**  
   `#rpMistakes` used module defaults (`gap: 8px` in some bundles) vs premium’s `gap: 12px` depending on cascade order. Pass 23 locks **`#rightPanel #rpMistakes`** to **flex column + 12px** gap.

## Root cause

- **Shared data path** was already unified: `createRightPanelRenderer` → `getWarningSystemData` / `renderRightRailWarnings` (portal-core).
- **Visual drift** came from **module-local `.rp-mistake` CSS** (and one **orphan typo rule** targeting `.rp-mistake .fix`, which no longer exists on rail cards) plus **incomplete rail-only overrides** in `premium-refinement.css`.

## Fix strategy

1. **Canonical rail presentation** in `assets/css/premium-refinement.css` under `#rightPanel #rpMistakes > .rp-mistake.warning-card`:  
   - Card: **14px** radius, **1px** `var(--warning-border)`, **14px 16px** padding, **12px** internal gap, **12px** stack gap in `#rpMistakes`, **no** accent stripe (uniform border).  
   - Surface: **`var(--warning-surface)`** (same semantic tokens as the rest of the warning system; light/dark already defined on `body`).  
   - Title: **14px**, **600**, **line-height 1.4**, `var(--warning-title)`.  
   - Body: **14px**, **line-height 1.65**, `var(--warning-body)`.  
   - Icon: **15×15** circle, **14×14** SVG (same asset as `warningSystem.js`, subdued).

2. **Scope legacy mistake UI** to **non–warning-card** only: `.rp-mistake:not(.warning-card)` in every module that still carried `.err` / `.fix` styling (for hypothetical legacy HTML).

3. **MathJax / semantic decoration** selectors updated from `.rp-mistake .fix` to **`.rp-mistake.warning-card .warning-card-body`** (+ `:not(.warning-card) .fix` where mjx lists needed to keep legacy coverage).

4. **Mistakes section header** aligned with other `.rp-section` labels: neutral muted colour, same rhythm as siblings.

## Files changed

| File | Role |
|------|------|
| `assets/css/premium-refinement.css` | Rail-only canonical card + section rhythm; removed stale `.rp-mistake .fix` typo rule |
| `mikro1/css/styles.css` | Legacy `.rp-mistake` → `:not(.warning-card)`; mjx selectors |
| `statistik/css/styles.css` | Same |
| `mikro2/css/styles.css` | Same |
| `oekonometrie/css/styles.css` | Same + mjx |
| `recht/css/styles.css` | Same + mjx |
| `jahresabschluss/css/styles.css` | Same + mjx |
| `internationale-wirtschaftsbeziehungen/css/styles.css` | Same + mjx |
| `mikro1/js/ui/renderer.js` | Semantic math targets: `.warning-card-body` |
| `oekonometrie/js/ui/renderer.js` | Same |

**Not changed:** `warningSystem.js` placement logic, `rightPanel.js` mount flow, theory extraction, or mistake copy in chapter HTML.

## Shared vs module-local

- **Shared (authoritative):** `premium-refinement.css` — all modules that load it get the same rail card system (**makro1**, **finanzwirtschaft**, **mathematik**, etc. included).
- **Module-local (compatibility only):** `:not(.warning-card)` scoping + mjx selector splits so old **err/fix** markup cannot regress if it reappears.

## Browser verification notes

Not run in a headed browser in this pass. Recommended manual checks:

1. **Two screenshot-style cases:** any concept with **multiple** `.warn-box` entries moved to the rail (e.g. **mikro1** / **statistik**) — confirm identical card chrome, icon on every card, 12px vertical rhythm.  
2. **Single-card module:** one concept with **one** rail warning.  
3. **Multi-card module:** three+ stacked cards.  
4. **Dark mode:** toggle **light-mode** off on body; confirm warm surface, controlled border, readable body (`--warning-body`), no neon orange.

Also confirm **Häufige Fehler** section `<h4>` matches other right-rail section headers (uppercase label already from existing `.rp-section h4` rules in module CSS).

## Completion

Right-rail **Häufige Fehler** cards now share one **product-level** chrome: same shape, padding, gap, icon, title/body scale, and semantic colours wherever `premium-refinement.css` loads and content is rendered via **`warning-card`** into **`#rpMistakes`**.
