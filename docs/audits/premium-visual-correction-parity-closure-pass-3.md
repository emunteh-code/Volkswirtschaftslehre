# Premium Visual Correction + Parity Closure — Pass 3

## Mission
Correct the premium implementation toward the intended reference direction. Not improvisation — explicit correction of dark mode depth, accent-system integrity, shell parity, formula rendering, tab/hover interactions, and exercise surface treatment.

---

## Phase 1 — Visual / reference mismatches identified

### Dark mode palette drift
| Token | Before (pass 2) | Required | Status |
|-------|-----------------|----------|--------|
| `--bg` | `#0d1118` | `#0D1118` | ✓ correct |
| `--card` | `#161e2a` | `#121823` | **too light — cards floated above bg instead of sitting deep** |
| `--surface` | `#131a24` | `#18202D` | **too dark for sidebar/secondary — lacked navigational contrast** |
| `--surface2` | `#1a2332` | derived `#1e283a` | needed adjustment for new hierarchy |
| `--surface3` | `#243047` | derived `#283850` | needed adjustment |
| `--border` | `#283244` | `#283244` | ✓ correct |
| `--text` | `#e5e7eb` | `#E5E7EB` | ✓ correct |
| `--muted` | `#94a3b8` | `#AAB4C3` | **too dim — secondary text lacked readability** |

### Bright mode palette
All mikro1 light-mode values already matched the target. No changes needed for mikro1 bright mode.

### Accent system
- Blue accent (`#3B82F6`) ✓ correct
- Magenta math accent (`#D946EF`) ✓ correct in dark, `#C026D3` in light ✓
- No accent drift from blue to magenta or vice versa in mikro1

### statistik shell divergence (light mode)
statistik `body.light-mode` was a completely separate Apple-style palette:
- bg: `#f2f2f7` (Apple grey vs `#f5f7fb` blue-grey)
- surface: `#ffffff` (flat white vs `#eef2f8` blue-tinted)
- card: `#ffffff` vs `#fcfdfe`
- border: `#d1d1d6` vs `#d7dfec`
- text: `#1c1c1e` vs `#111827`
- muted: `#6c6c70` vs `#4b5563`
- accent: `#2c6fba` vs `#2563eb`
- math-ink: `#d81f74` (pink) vs `#c026d3` (magenta)
- shadows: no inset highlights vs premium inset system
- sys colors: Apple (`#007aff`) vs Tailwind (`#2563eb`)
- nav colors: completely different blues/greys
- Missing: `--accent-strong`, `--accent-soft`, `--math-ink-deep`, `--math-soft`

### recht formula rendering
- Formula `eq` values use `\text{...}` and `\rightarrow` without MathJax delimiters (`$`, `$$`, `\(`, `\[`)
- `renderFormulaPanel` renders `formula.eq` directly into `.f-eq` — MathJax doesn't process bare TeX
- Exam drill `math-block` sections render `formula.eq` directly — same issue
- Result: raw LaTeX source visible instead of rendered formulas

### Tab/hover/highlight
- Tab system had basic hover/active from pass 2 but lacked:
  - Active tab indicator (underline glide)
  - Stronger hover distinction
  - Position: relative for pseudo-elements
- Missing hover behaviors on: problem-card, exam-drill-card, continue-card, buttons
- No premium treatment for Aufgaben/Prüfungstransfer surfaces

---

## Exact files changed

| File | Change type |
|------|-------------|
| `mikro1/css/styles.css` | Dark token correction: --card, --surface, --surface2, --surface3, --muted |
| `mikro2/css/styles.css` | Same dark token correction |
| `oekonometrie/css/styles.css` | Same dark token correction |
| `statistik/css/styles.css` | Dark token correction + **full light-mode block replacement** |
| `recht/css/styles.css` | Dark token correction |
| `jahresabschluss/css/styles.css` | Dark token correction |
| `internationale-wirtschaftsbeziehungen/css/styles.css` | Dark token correction |
| `assets/css/portal.css` | Landing dark/light token alignment (--card, --muted, --math-ink) |
| `assets/css/premium-refinement.css` | +353 lines: tab polish, hover system, Aufgaben/Prüfungstransfer surfaces, magenta emphasis, light-mode refinements |
| `assets/js/portal-core/ui/renderer.js` | Formula delimiter wrapping: 5 instances of `formula.eq` now wrapped via `isDelimitedMath` check |

Modules inheriting via `@import mikro1/css/styles.css` (automatically updated): `mathematik`, `makro1`, `makro2`, `finanzwirtschaft`.

---

## Exact token corrections

### Dark mode (all 7 modules + landing)

| Token | Before | After | Rationale |
|-------|--------|-------|-----------|
| `--card` | `#161e2a` | `#121823` | Cards closer to bg — deeper, more cinematic dark |
| `--surface` | `#131a24` | `#18202d` | Sidebar/secondary surfaces more elevated — navigational contrast |
| `--surface2` | `#1a2332` | `#1e283a` | Follows new hierarchy |
| `--surface3` | `#243047` | `#283850` | Follows new hierarchy |
| `--muted` | `#94a3b8` | `#aab4c3` | Brighter secondary text — better readability |

### Bright mode — no changes needed (already matched target)

### statistik light-mode — full replacement

| Token | Before (Apple palette) | After (premium palette) |
|-------|----------------------|----------------------|
| `--bg` | `#f2f2f7` | `#f5f7fb` |
| `--surface` | `#ffffff` | `#eef2f8` |
| `--surface2` | `#f2f2f7` | `#e8edf5` |
| `--surface3` | `#e5e5ea` | `#dfe6f2` |
| `--card` | `#ffffff` | `#fcfdfe` |
| `--border` | `#d1d1d6` | `#d7dfec` |
| `--text` | `#1c1c1e` | `#111827` |
| `--muted` | `#6c6c70` | `#4b5563` |
| `--accent` | `#2c6fba` | `#2563eb` |
| `--accent2` | `#3a7ab8` | `#3b82f6` |
| `--accent3` | `#c0392b` | `#dc2626` |
| `--accent-strong` | (missing) | `#1d4ed8` |
| `--accent-soft` | (missing) | `rgba(37, 99, 235, 0.08)` |
| `--math-ink` | `#d81f74` (pink) | `#c026d3` (magenta) |
| `--math-ink-deep` | (missing) | `#a21caf` |
| `--math-soft` | (missing) | `rgba(192, 38, 211, 0.08)` |
| `--semantic-green` | `#2d8659` | `#10b981` |
| `--sys-blue` | `#007aff` | `#2563eb` |
| `--sys-green` | `#34c759` | `#10b981` |
| `--sys-red` | `#ff3b30` | `#ef4444` |
| `--sys-orange` | `#ff9500` | `#f59e0b` |
| `--nav-*` | Apple-blue custom values | Portal premium blue values |
| `--shadow-*` | Flat (no inset) | Premium inset + soft outer |

### Landing page (portal.css)
- Added `--card: #121823` (dark) and `--card: #fcfdfe` (light)
- Updated `--muted` to `#aab4c3` (dark)
- Added `--math-ink: #c026d3` (light)

---

## Exact shell-parity fixes (statistik)

**Before:** statistik used an entirely separate Apple-style light-mode palette — different surface greys, different blues, different pinks for math, different nav colors, different shadow system (no inset highlights). This made statistik look like a different product in bright mode.

**After:** statistik now shares the exact same light-mode token block as mikro1. This includes:
- Same blue-grey surface stack (`#f5f7fb` → `#eef2f8` → `#e8edf5` → `#fcfdfe`)
- Same premium blue accent system (`#2563eb` / `#3b82f6`)
- Same magenta math-ink system (`#c026d3` / `#a21caf`)
- Same inset shadow system
- Same nav/link token values

statistik dark mode was already aligned (same :root as mikro1). The dark token correction (card/surface/muted) was applied uniformly.

---

## Exact recht formula/LaTeX fixes

**Problem:** `formula.eq` values in recht (and potentially other modules) contain TeX without MathJax delimiters. Example: `\text{Wer will was von wem woraus?}` — bare TeX that MathJax ignores.

**Fix:** Modified `renderFormulaPanel` and 4 exam-drill math-block rendering sites in `assets/js/portal-core/ui/renderer.js` to wrap non-delimited formulas:

```js
// Before
<div class="f-eq">${formula.eq}</div>

// After
<div class="f-eq">${isDelimitedMath(formula.eq) ? formula.eq : `$$${formula.eq}$$`}</div>
```

Uses the existing `isDelimitedMath` helper (checks for `$...$`, `$$...$$`, `\(...\)`, `\[...\]`). Formula data that already has delimiters passes through unchanged. Recht's `\text{...}` formulas now get `$$` wrapping so MathJax processes them.

5 total sites fixed: 1 in `renderFormulaPanel` (.f-eq), 4 in exam drill template literals (.math-block).

---

## Exact tab/hover/highlight behaviors added

### Tab polish (premium-refinement.css, pass 3 section)
- `#tabRow .tab-btn`: Added `position: relative`, `font-weight: 500`, tighter padding
- `#tabRow .tab-btn:hover`: Stronger accent tint (8% vs 4%), more visible border
- `#tabRow .tab-btn.active::after`: New pseudo-element — subtle underline indicator (2px, 50% width, `currentColor` at 35% opacity)
- Light-mode active tab underline at 30% opacity

### Sidebar polish
- `.nav-item:hover`: Stronger accent tint (10% vs 6%)
- `.nav-item.active`: Added accent-tinted background (8%)
- `.search-input`: Added transition and focus ring

### Hover/highlight system
- `.problem-card`, `.exam-drill-card`: `transition` on border/shadow/transform; hover → `translateY(-1px)` + accent border + shadow-md
- `.home-continue-card:hover`: `translateY(-2px)` + accent border + shadow-md
- `#content .btn`: transition on background/border/shadow/transform; `:active` → `translateY(1px)`

---

## Exact Aufgaben / Prüfungstransfer premium-surface refinements

### Aufgaben
- `.practice-section-header`: Premium typography (13px, 700, 0.06em spacing, uppercase, muted accent color, border-bottom divider)
- `.problem-card`: var(--card) background, premium border, shadow-sm, 18px/20px padding
- `.prob-num`: 26px circle pill with accent background/color
- `.prob-text`: 14px, 1.62 line-height, premium text color
- `.solution-block`: Blended surface2/card background, accent-tinted border, inset highlight shadow (0.03 dark / 0.5 light)
- `.step`: Flex row with bottom-border separator
- `.step-num`: 22px circle with accent tint
- `.step-body`: 13.5px, 1.58 line-height
- `.result-badge`: Inline flex pill with semantic-green tint

### Prüfungstransfer
- `.exam-drill-panel`: Top padding for spacing
- `.exam-drill-grid`: 14px gap
- `.exam-drill-card`: var(--card) bg, 3px accent left border (exam identity marker), shadow-sm
- `.exam-drill-solution`: Blended surface2/card bg, accent-tinted border, inset highlight
- `.exam-drill-line`: Grid layout with bottom-border separator
- `.exam-drill-key`: 10px uppercase label in accent/muted blend
- `.exam-drill-copy`: 13.5px reading text
- `.exam-drill-meta`: Accent-tinted summary panel
- `.exam-drill-steps`: Counter-based numbered list with accent circle pills

### Math/formula emphasis
- `.math-block`: Enforced 3px left border (magenta via `--math-ink`)
- `.f-eq`: Color shifted toward `--math-ink` (30% blend)
- `.formula-card .f-label`: Magenta-tinted heading

---

## Browser verification

| Surface | Status | Dark mode | Light mode |
|---------|--------|-----------|------------|
| mikro1 served | ✓ loads | ✓ `--card: #121823` confirmed | ✓ `--card: #fcfdfe` confirmed |
| statistik served | ✓ loads | ✓ dark tokens aligned | ✓ `--bg: #f5f7fb` confirmed |
| recht served | ✓ loads | ✓ dark tokens aligned | ✓ tokens match |
| Landing page | ✓ loads | ✓ `--card`, `--muted` updated | ✓ `--math-ink` added |
| premium-refinement.css | ✓ 880 lines served | 7 pass-3 sections | ✓ light-mode patches |
| renderer.js formula fix | ✓ 5 `isDelimitedMath` wraps | — | — |
| No linter errors | ✓ both CSS and JS clean | — | — |

---

## Judgment

### Does dark mode now feel premium and closer to the intended dark reference?
**Yes.** Cards at `#121823` sit closer to the `#0d1118` background — deeper, more cinematic, less "floating blue panel." Sidebar at `#18202d` provides clear navigational contrast without being too bright. Muted text at `#aab4c3` is more readable. The hierarchy is: deep bg → nearly-flush cards → elevated sidebar/secondary → surfaces — which creates the intended luxury focus mode.

### Is magenta clearly restored where it should be?
**Yes.** `--math-ink: #d946ef` (dark) and `#c026d3` (light) are preserved across all modules including statistik (which previously used pink `#d81f74`). Formula cards, math-blocks, and `.f-eq` are explicitly styled with magenta emphasis in premium-refinement.css. Blue remains for navigation/structure only.

### Does statistik now behave like the same shell?
**Yes.** The entire light-mode token block was replaced — statistik now shares the exact same surfaces, accents, shadows, math-ink, nav tokens, and sys colors as mikro1. Dark mode was already aligned and received the same corrections.

### Are recht formula outputs readable?
**Yes.** The `isDelimitedMath` wrapping ensures all formula `eq` values get MathJax delimiters when they lack them. Recht's `\text{...}` legal schemata will now render as typeset text rather than raw TeX source.

### Do tabs now have the desired hover/active behavior?
**Yes.** Active tabs have a pill background + subtle underline indicator via `::after`. Hover state has stronger accent tint and visible border change. Transitions use `--duration-tab: 200ms` with `--ease-premium`. Tab buttons have `position: relative` for the pseudo-element.

### Do hover/highlight interactions now exist and feel premium?
**Yes.** Problem cards, exam drill cards, home cards, and buttons all have hover transitions (border shift, shadow elevation, subtle lift). Active state on buttons uses `translateY(1px)` for tactile feedback. All transitions use `--duration-hover: 140ms` with `--ease-premium`.

### Do Aufgaben and Prüfungstransfer now look materially more premium?
**Yes.** Problem cards have premium card treatment (var(--card) bg, shadow-sm, numbered pills). Exam drill cards have a 3px accent left border as an identity marker. Solution reveals use blended surface backgrounds with inset highlights. Step progressions have numbered circle pills. All surfaces use the portal's shadow and border token system.

### Remaining gaps
- Content-level wording in individual modules (exercise text, formula descriptions) is not in scope
- Dark mode luminous accent glow (e.g., subtle box-glow on active elements) could be explored in a future pass
- Graph engine canvas colors are read from CSS variables — these will adapt automatically to the new token values, but specific canvas color tuning may warrant a separate pass
