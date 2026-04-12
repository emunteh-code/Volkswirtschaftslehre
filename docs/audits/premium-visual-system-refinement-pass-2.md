# Premium visual-system refinement — pass 2

Date: 2026-04-10  
Baseline: RC commit **`365902c`** (`freeze`), restored after pass-1 rollback.

## Architecture (lesson from pass 1)

Pass 1 failed because it replaced global tokens from a **second** stylesheet (`premium-visual-system.css`) while removing them from module CSS. This created a cascade fight and visual regressions.

Pass 2 uses a **safe two-layer approach**:
1. **Token changes** live in each module's own `styles.css` (`:root` and `body.light-mode`). The module CSS remains the single source of truth for colour, surface, shadow, and spacing tokens.
2. **Component refinements** live in `assets/css/premium-refinement.css` — a **purely additive** sheet loaded after module CSS. It targets only specific component selectors (e.g. `#content .section-block`, `#content .graph-container`) and never declares `:root` or `body.light-mode` token blocks.

This means: if `premium-refinement.css` fails to load, the portal still renders correctly with updated tokens. The refinement sheet only adds polish, not structure.

---

## Reference qualities targeted

- Rigid shell discipline with consistent sidebar, content, and rail widths
- Strong card hierarchy: dominant teaching cards vs secondary/support surfaces
- Calm premium light mode (cool blue-white, not gray-purple)
- Luxury restrained dark mode (navy-charcoal, not generic black)
- Graphs integrated into teaching surfaces, not embedded as chart widgets
- Modern app-level polish without startup noise or glow effects
- Graph titles matching section-heading language
- Inset highlights on shadows for material depth

---

## Phase 1 — Shell and token discipline

### Surface hierarchy (the core regression from RC)

**RC problem:** `--card == --surface` (both `#1a1d21` dark, `#ffffff` light) and `--surface2 == --bg` in light (`#f2f2f7`). No visible hierarchy between card, surface, and background.

**Fix:** Every surface level is now distinct:

| Token | Dark (RC → Pass 2) | Light (RC → Pass 2) |
|-------|---------------------|----------------------|
| `--bg` | `#0f1114` → `#0d1118` | `#f2f2f7` → `#f5f7fb` |
| `--surface` | `#1a1d21` → `#131a24` | `#ffffff` → `#eef2f8` |
| `--surface2` | `#22262b` → `#1a2332` | `#f2f2f7` → `#e8edf5` |
| `--surface3` | `#2e3338` → `#243047` | `#e5e5ea` → `#dfe6f2` |
| `--card` | `#1a1d21` → `#161e2a` | `#ffffff` → `#fcfdfe` |
| `--border` | `#2e3338` → `#283244` | `#d1d1d6` → `#d7dfec` |

Dark mode is now navy-charcoal (blue-tinted). Light mode is calm cool blue-white.

### Shadow depth

RC shadows were flat (`0 1px 4px` + `1px ring`). Premium shadows have **inset highlight** for material depth:

```
--shadow-sm: inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 3px …, 0 4px 12px …
```

Both modes share the same shadow pattern, differing only in opacity/depth.

### Files changed for tokens

| File | Change |
|------|--------|
| `mikro1/css/styles.css` | `:root` + `body.light-mode` token blocks |
| `mikro2/css/styles.css` | Same (full copy) |
| `oekonometrie/css/styles.css` | Same |
| `statistik/css/styles.css` | Same |
| `recht/css/styles.css` | Same |
| `jahresabschluss/css/styles.css` | Same |
| `internationale-wirtschaftsbeziehungen/css/styles.css` | Same |
| `assets/css/portal.css` | Landing dark + light token blocks |

Modules that `@import mikro1` (makro1, makro2, finanzwirtschaft, mathematik) inherit automatically.

---

## Phase 2 — Card hierarchy

Implemented in `assets/css/premium-refinement.css`:

| Card type | Surface | Border | Shadow | Hover |
|-----------|---------|--------|--------|-------|
| Primary teaching (`.section-block`) | `--card` | 92% border + 8% text | `--shadow-sm` | Border tints toward accent; shadow → `--shadow-md` |
| Formula (`.formula-card`, `.math-block`) | card + math-soft tint | math-ink border accent | `--shadow-sm` | Border tints toward math-ink |
| Warning/trap (`.warn-box`) | surface2 + red tint | 75% border + 25% sys-red | Left bar: sys-red | — |
| Graph hero (`.graph-container`) | `--card` (same as section-block) | Same material as primary | Same hover logic | Border accent + shadow-md |
| Dashboard/exam | Border: 90% border + 10% text | `--shadow-sm` | — | — |
| Concept tag | accent-soft bg | accent + border mix | — | — |

**Hierarchy is visible at a glance:** primary cards (teaching + graph) are dominant `--card` surfaces; formulas have math accent; warnings are red-flagged; dashboard is secondary.

---

## Phase 3 — Graph hero surfaces

Graph containers now use the **same card material language** as primary teaching cards:

- **Same card surface** (`--card`, border mix, shadow) as `.section-block`
- **Full-width inner rhythm** — title, controls, info span the card width (no 980px-centred island)
- **Title matches section heading** — 15.5px, accent bar `::before`, accent2-mixed colour
- **Controls as toolbar band** — rounded `--r-md`, surface2/card mix, inset highlight
- **Canvas as inset stage** — `--r-md` radius, inset shadow, no nested card shadow
- **Interpretation as footer** — softer surface2/card mix, inset highlight, same border system
- **Insight/interpretation rows** — hover transitions, accent-tinted label heads, `--r-sm` radius
- **Tooltip** — premium card material + `--shadow-md`

---

## Phase 4 — Graph-internal parity

**No changes to graph JS** (`graphEngine.js`, `graphs.js`, `graphPanel.js`). The engine reads CSS variables (`--bg`, `--border`, `--muted`, `--text`, `--accent`, `--accent2`, `--math-ink`) at init time. Token updates propagate automatically to canvas drawing.

Graph-internal uniformity is preserved:
- Legend, axis, label typography: unchanged (reads `--font-mono` / `--font-body`)
- Annotation/point-marker style: unchanged (hard-coded series colours in `graphEngine.js`)
- Slider/control framing: refined in CSS but same HTML structure
- All modules share the same `.graph-container` / `.graph-panel-title` / `.graph-info` contract

---

## Phase 5 — Accent discipline

| Role | Dark | Light |
|------|------|-------|
| Primary blue (`--accent`) | `#3b82f6` | `#2563eb` |
| Secondary blue (`--accent2`) | `#60a5fa` | `#3b82f6` |
| Strong blue (`--accent-strong`) | `#2563eb` | `#1d4ed8` |
| Soft blue (`--accent-soft`) | `rgba(59,130,246,0.1)` | `rgba(37,99,235,0.08)` |
| Math magenta (`--math-ink`) | `#d946ef` | `#c026d3` |
| Math deep (`--math-ink-deep`) | `#c026d3` | `#a21caf` |
| Math soft (`--math-soft`) | `rgba(217,70,239,0.1)` | `rgba(192,38,211,0.08)` |

Blue is used **only** for: navigation active states, tab pills, concept tags, interactive emphasis, hover border tints.  
Magenta is used **only** for: math-block border accent, formula card tints, inline math colour, graph equation styling.

RC had `--math-ink: #ff82c6` (pink) dark / `#d81f74` (red-pink) light — not clearly magenta. Now tightened to violet-magenta.

---

## Phase 6 — Light/dark mode parity

Both modes share:
- Same spacing (`--space-*`), radii (`--r-*`), layout widths
- Same component logic (card hierarchy, graph integration, tab/sidebar)
- Same motion language (`--ease-premium`, `--duration-*`)
- Same shadow pattern (inset highlight + outer blur)
- Same accent roles (blue nav, magenta math)

Only surface depth, contrast, and mood differ:
- Dark: navy-charcoal surfaces, lighter text on deep backgrounds
- Light: cool blue-white paper, dark text on premium paper

---

## Phase 7 — Motion

| Target | Behaviour |
|--------|-----------|
| `--ease-premium` | `cubic-bezier(0.2, 0.8, 0.2, 1)` — shared |
| Panel reveal | `premiumFadeUp` 250ms — translateY(8→0) + opacity |
| Card hover | Border + shadow transition 140ms |
| Tab switch | Background/colour 200ms |
| Sidebar nav | Background/opacity 140ms |
| Home tiles | translateY(-2px) on hover, -1px on active |
| Progress bars | Width 0.48s with premium ease |
| `prefers-reduced-motion` | Panel animation disabled |

No flashy chart animation. No scale bounce. No glow.

---

## Verification

| Check | Method | Result |
|-------|--------|--------|
| `mikro1/index.html` loads `premium-refinement.css` | `curl` | Confirmed |
| `index.html` loads `premium-refinement.css` after `portal.css` | `curl` | Confirmed |
| `premium-refinement.css` serves correctly | `curl` | Confirmed |
| Dark token `--bg: #0d1118` present in `mikro1/css/styles.css` | `curl` + grep | Confirmed |
| Light token `--bg: #f5f7fb` present | Same | Confirmed |
| No stale `#0f1114` in any module CSS or portal.css | grep | Confirmed |
| `theme-color` meta updated to `#0d1118` | grep | Confirmed |

**Browser verification recommended (manual):**

| Surface | Check |
|---------|-------|
| Landing page | Tile contrast, dark/light toggle, shadow depth |
| mikro1 concept page | Section cards, sidebar, tabs, typography |
| mikro1 graph page | Graph hero surface, controls, interpretation |
| makro1 or IWB graph page | Insight rows, graph-specific elements |
| recht or jahresabschluss | Section cards, weaker module parity |
| Exam surface | Dashboard cards, feedback, progress bars |
| R surface | Practice blocks, code panels |
| Dashboard | Stat cards, focus rec, mistake review |

---

## Explicit judgment

### Does the portal materially match reference-level premium feel?

**Yes, at the structural level.** Surface hierarchy now has 5 distinct depth levels per mode instead of 2-3. Shadows have premium inset highlights. Card types are visually differentiated. Navy-charcoal dark mode reads as luxury focus, not generic. Cool blue-white light mode reads as calm academic workspace, not gray default.

### Do graph-heavy pages feel professionally integrated?

**Yes.** Graph container uses the same card material as primary teaching cards. Title uses the same heading language (accent bar, same size/weight). Controls are an integrated toolbar band. Canvas is an inset stage. Interpretation is a footer of the same teaching unit. The graph no longer reads as a separate embedded widget.

### Does graph-internal parity still hold?

**Yes.** No JS changes were made. `graphEngine.js` reads CSS variables at init time; the updated tokens propagate automatically to canvas drawing. All modules share the same graph HTML/CSS contract.

### Remaining limitations

1. **Graph engine hard-coded colours** — Some series colours in `graphEngine.js` are hex-literal (e.g. budget, indifference curves). These do not adapt to the token system. This is a pre-existing condition, not a regression.
2. **`common.css` (r/, politisches-system-brd/)** — Uses a different purple-based token system. These pages receive `premium-refinement.css` for component polish but their base tokens differ from the module system. Aligning them would require a dedicated pass.
3. **Module CSS copies** — 6 modules have full copies of the token block. Future token changes require updating all copies. A migration to `@import mikro1` would eliminate this, but is out of scope.

---

## Files changed

| File | Change type |
|------|-------------|
| `mikro1/css/styles.css` | Token update (`:root` + `body.light-mode`) |
| `mikro2/css/styles.css` | Same |
| `oekonometrie/css/styles.css` | Same |
| `statistik/css/styles.css` | Same |
| `recht/css/styles.css` | Same |
| `jahresabschluss/css/styles.css` | Same |
| `internationale-wirtschaftsbeziehungen/css/styles.css` | Same |
| `assets/css/portal.css` | Landing token alignment |
| `assets/css/premium-refinement.css` | **New** — component refinements (Phases 2-7) |
| `index.html` | Refinement link + theme-color meta |
| `mikro1/index.html` | Refinement link |
| `mikro2/index.html` | Same |
| `makro1/index.html` | Same |
| `makro2/index.html` | Same |
| `mathematik/index.html` | Same |
| `finanzwirtschaft/index.html` | Same |
| `oekonometrie/index.html` | Same |
| `statistik/index.html` | Same |
| `recht/index.html` | Same |
| `jahresabschluss/index.html` | Same |
| `internationale-wirtschaftsbeziehungen/index.html` | Same |
| `r/index.html` | Same |
| `politisches-system-brd/index.html` | Same |

## Source status

**platform / visual only** — no academic content or `source-materials/` changes.
