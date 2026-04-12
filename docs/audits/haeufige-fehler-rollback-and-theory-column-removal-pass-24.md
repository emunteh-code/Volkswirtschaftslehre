# „Häufige Fehler“ rollback + theory-column removal — Pass 24

## Goals

1. **Right panel:** Restore a **compact, editorial** right-rail mistake look (closer to the older narrow notes), not the Pass-23 large banner / icon-led `.warning-card` treatment.
2. **Theory column:** **No duplicate** generic `.warn-box` mistake cards in the main theory HTML — canonical place is **`#rpMistakes`** only, except explicit opt-in.

## Issue 1 — Right-panel rollback (shared)

### What was rolled back

- Removed **`warning-card` / `warning-card--rail` / icon / warning-card-head** markup from **rail-only** output.
- Replaced Pass-23 **large** rail rules in `premium-refinement.css` with **`.rp-mistake--rail`** compact styling:
  - padding **12px 14px**, gap between title and body **6px**, stack gap **10px**, radius **12px**
  - typography **~13.5px**, line-height **~1.55**, title uses **`var(--warning-title)`** (semantic red/orange family)
  - **tinted rgba surface** + restrained border (not full `--warning-surface` banner)
  - **no icon**

### Files (styling)

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Replaced Pass-23 `#rightPanel #rpMistakes .rp-mistake.warning-card` block with **Pass-24 `.rp-mistake--rail`** rules + light/dark tweaks |
| `mikro1/css/styles.css` | `#rpMistakes` gap **10px**; legacy `.rp-mistake` scoped with **`:not(.rp-mistake--rail)`**; mjx targets **`.rp-mistake--rail .rp-mistake-body`** |
| `statistik/css/styles.css` | same pattern |
| `mikro2/css/styles.css` | legacy selector `:not(.rp-mistake--rail)` |
| `oekonometrie/css/styles.css` | gap + legacy + mjx |
| `recht/css/styles.css` | gap + legacy + mjx |
| `jahresabschluss/css/styles.css` | gap + legacy + mjx |
| `internationale-wirtschaftsbeziehungen/css/styles.css` | gap + legacy + mjx |

**Scope:** **Shared** behaviour via `warningSystem.js` + `premium-refinement.css`; module sheets only exclude `.rp-mistake--rail` from **legacy err/fix** rules and wire **mjx** colour to the new body class.

## Issue 2 — Theory-column removal (shared logic)

### Root cause

`shouldMoveWarningToRail()` previously sent warnings to the rail **only** when `data-warning-placement="rail"` or the block lived in a dedicated **H3** section matching a small heading regex. All other `.warn-box` entries stayed in theory and were upgraded to **inline `.warning-card`**, which duplicated rail content and felt like a second warning system.

### Fix

In **`assets/js/portal-core/ui/warningSystem.js`**:

- **Default:** every `.warn-box` is **moved to the right rail** (stripped from parsed theory, appended to `railWarnings`).
- **Opt-out:** `data-warning-placement="inline"` keeps the box in theory and applies the existing **`warning-card` / `buildWarningCardInner`** treatment (mechanism-critical / intentional inline only).

Removed unused **dedicated-section** rail detection (`RAIL_WARNING_SECTION_PATTERN`, `isDedicatedRailSection`) — behaviour is now placement-driven.

### Rail HTML (new)

`renderRightRailWarnings()` emits:

```html
<article class="rp-mistake rp-mistake--rail" data-warning-placement="rail">
  <div class="rp-mistake-title">…escaped…</div>
  <div class="rp-mistake-body">…html…</div>
</article>
```

Titles are passed through **`escapeHtmlText`** (new helper).

### Module data already using placements

- **`makro1/js/data/chapters.js`:** `warn()` uses **`data-warning-placement="inline"`** — Makro I keeps mistake callouts **in theory** by design.
- Several modules already used **`rail`** on `warn()` helpers; redundant with the new default but harmless.

### Renderer / MathJax

| File | Change |
|------|--------|
| `mikro1/js/ui/renderer.js` | Semantic target `#rightPanel .rp-mistake--rail .rp-mistake-body` |
| `oekonometrie/js/ui/renderer.js` | same |

## Files changed (summary)

- `assets/js/portal-core/ui/warningSystem.js` — rail default, compact markup, title escape, remove old section heuristic  
- `assets/css/premium-refinement.css` — Pass-24 rail visuals  
- `mikro1/js/ui/renderer.js`, `oekonometrie/js/ui/renderer.js` — selector update  
- `mikro1`, `statistik`, `mikro2`, `oekonometrie`, `recht`, `jahresabschluss`, `internationale-wirtschaftsbeziehungen` `css/styles.css` — legacy + mjx + `#rpMistakes` gap  

**Not edited per file:** `makro1`, `finanzwirtschaft`, `mathematik`, `oekonometrie` chapter **strings** already compatible (rail or no placement → rail); **makro1** remains the explicit **inline** exception.

## Browser verification notes

Not executed in this pass. Suggested checks:

1. **mikro1** — theory still shows **inline** `warn-box` (red card) where `inline` is set; right rail lists mistakes compactly.  
2. **statistik** or **mikro2** — theory **no longer** shows duplicate `.warn-box` cards; same items appear only under **Häufige Fehler** in the right rail, compact layout.  
3. **Dark mode** — `.rp-mistake--rail` border/surface remain readable.  
4. Hard refresh / disable cache (ES modules) after deploy.

## Completion

- Right-rail mistakes use **`.rp-mistake--rail`** (compact, no icon), not the Pass-23 oversized **`.warning-card`** rail shell.  
- Generic `.warn-box` content **defaults to rail**; theory duplicates are gone except **`data-warning-placement="inline"`**.  
- Right panel **still** receives all non-inline warnings via `renderRightRailWarnings`.
