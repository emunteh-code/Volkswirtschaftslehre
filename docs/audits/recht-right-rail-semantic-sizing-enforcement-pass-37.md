# Recht right-rail semantic sizing — enforcement pass 37

## Goal

Restore a **visibly smaller, compact** right-rail scale for **Recht-only** semantic formula cards (e.g. Anspruchsfrage, Gutachtenstil, Anspruchskette, Tatbestand vor Rechtsfolge) without changing semantic structure, wording, or other modules.

## Why the previous rollback did not visibly apply

1. **Grid `gap` on the outer row was never overridden for Recht.**  
   Shared rule `#rightPanel .rp-formula { display: grid; gap: 10px; … }` applies to **all** right-rail formulas. Pass 31+32 tightens `.rp-formula--schema` / `--reference` **padding** and inner `.rp-f-eq`, but **does not set `gap`**, so the name row and equation panel still sat **10px** apart — a large share of the “bloated” vertical rhythm.

2. **Pass 31+32 uses 16px semantic root / terms and 12×14px inner padding** on `#rightPanel .rp-formula.rp-formula--schema|reference .rp-f-eq …` with selector specificity `(1, 4, 0)`. A mid-file Recht-only block without `!important` could still **lose on tie-breaks** or feel unchanged next to unchanged **10px** gaps and **13.5px** reference notes.

3. **Order in the stylesheet matters.** Any Recht block placed **above** later Pass 31+32 edits would be overwritten for overlapping properties. Pass 37 is appended **at the end of `premium-refinement.css`** so it is always evaluated after Pass 31+32 for the same properties.

## Module scope hook (verified)

- **`recht/index.html`**: `<body data-portal-module="recht">` (line 35).  
  All Recht pages load this body; scoped CSS uses `body[data-portal-module="recht"]`.

## DOM / selectors (verified)

Right-rail formulas are built in `assets/js/portal-core/ui/rightPanel.js`:

- Outer: `#rightPanel .rp-formula.rp-formula--{schema|reference|math}`
- Label: `.rp-f-name`
- Inner panel: `.rp-f-eq` → `.semantic-schema` or `.semantic-reference` (+ optional `semantic-display--pres-contrast`, `semantic-reference__entry`, etc.)

Recht uses the shared renderer via `recht/js/ui/rightPanel.js` (`createRightPanelRenderer`).

## Pass 37 implementation (effective cascade)

**File:** `assets/css/premium-refinement.css` (final block, “PASS 37”).

**Strategy:**

- Prefix every rule with `body[data-portal-module="recht"] #rightPanel` so **only Recht** is affected.
- Specificity **strictly exceeds** `#rightPanel .rp-formula…` (adds `body` + attribute selector).
- Use `!important` on **size-critical** properties (font sizes, padding, gap, radii, line-height) so they **always beat** Pass 31+32 and the generic `#rightPanel .rp-formula` grid gap, even if the sheet is reordered in future edits.

### Selectors used (summary)

| Area | Selector (all prefixed with `body[data-portal-module="recht"]`) |
|------|---------------------------------------------------------------------|
| Outer row | `#rightPanel .rp-formula.rp-formula--schema`, `…--reference` |
| Label | `… .rp-f-name` |
| Inner box | `… .rp-f-eq` |
| Semantic roots | `… .semantic-schema`, `… .semantic-reference` |
| Terms | `… .semantic-schema__item`, `… .semantic-reference__term` |
| Notes | `… .semantic-reference__note`, `… .semantic-display--pres-contrast .semantic-reference__note` |
| Contrast rows | `… .semantic-display--pres-contrast .semantic-reference__entry` |
| Schema connector | `… .semantic-schema__connector` |
| Schema connector note | `… .semantic-schema__connector-note` |
| Light mode inner padding | `body.light-mode[data-portal-module="recht"] … .rp-f-eq` |

### Values reduced (Recht right rail only)

| Property | Pass 31+32 (shared) | Pass 37 (Recht) |
|----------|---------------------|-----------------|
| Outer row `padding` | `6px 0 14px` | `2px 0 6px` |
| Outer row `gap` (from generic `.rp-formula`) | `10px` | `4px` |
| `.rp-f-name` `margin-bottom` | `6px` | `3px` |
| `.rp-f-name` `font-size` | `11px` | `10px` |
| `.rp-f-eq` `padding` | `12px 14px` | `8px 10px` |
| `.rp-f-eq` `border-radius` | `10px` | `8px` |
| `.semantic-schema` / `.semantic-reference` root `font-size` | `16px` | `14px` |
| Root `line-height` | `1.45` | `1.42` |
| Root `gap` (flex) | `0.3em 0.45em` / column `10px` for reference | `0.25em 0.4em` / `6px` for `.semantic-reference` |
| `.semantic-schema__item` / `.semantic-reference__term` `font-size` | `16px` | `14px` |
| Term `font-weight` | `600` | `500` |
| `.semantic-reference__note` (incl. contrast) | `13.5px` | `12.5px` |
| Contrast `.semantic-reference__entry` `padding` | `10px 0` | `5px 0` |
| `.semantic-schema__connector` `font-size` | `1rem` | `0.8rem` |
| `.semantic-schema__connector-note` `font-size` | `10px` | `12.5px` (support line; weight 500) |

## Cascade proof (why this wins)

Example: root semantic font size.

- Pass 31+32: `#rightPanel .rp-formula.rp-formula--schema .rp-f-eq .semantic-schema` → specificity **(1, 4, 0)**.
- Pass 37: `body[data-portal-module="recht"] #rightPanel .rp-formula.rp-formula--schema .rp-f-eq .semantic-schema` → **(1, 5, 1)** — **strictly higher**.
- `font-size: 14px !important` ensures a win even against other `!important` rules elsewhere, as long as none duplicate this exact module hook with equal or higher specificity.

Example: outer **grid gap**.

- `#rightPanel .rp-formula { gap: 10px }` is **(1, 1, 0)** and applies to schema rows too.
- Pass 37 sets `gap: 4px !important` on `body[data-portal-module="recht"] #rightPanel .rp-formula.rp-formula--schema` — higher specificity **and** `!important`.

**Light mode:** `body.light-mode[data-portal-module="recht"]` beats `body.light-mode #rightPanel` for the same element (`body` carries both class and attribute).

## Files changed

- `assets/css/premium-refinement.css` — Pass 37 block (end of file).
- `docs/audits/recht-right-rail-semantic-sizing-enforcement-pass-37.md` — this document.

`recht/index.html` was already correct; **no change** required for the body hook.

## Browser verification notes

Automated computed-style checks were **not** run in this environment (no bundled headless browser / Puppeteer). **Manual check** on a Recht chapter with semantic right-rail cards:

1. Open `recht/index.html` via local static server (or deployed site).
2. Pick a section where **Formeln** shows semantic cards (Anspruchsfrage, Gutachtenstil, Anspruchskette, Tatbestand vor Rechtsfolge).
3. In DevTools, select `.rp-formula.rp-formula--schema` or `--reference` inside `#rightPanel` and confirm computed:
   - `gap` ≈ **4px**
   - `.rp-f-eq` `padding` ≈ **8px 10px**
   - `.semantic-schema` or `.semantic-reference` `font-size` ≈ **14px**
   - `.semantic-reference__note` ≈ **12.5px**
4. Open another module (e.g. `mikro1`) and confirm **no** `body[data-portal-module="recht"]` match — sizes should stay at shared Pass 31+32 values.

## Success criteria

- Recht right-rail semantic cards are **visibly smaller** (tighter gap, smaller type, less inner padding) than before Pass 37.
- **Verbindungen** / **Häufige Fehler** sections no longer feel visually dominated by the formula rail.
- No semantic HTML/JS changes; **only** Recht-scoped CSS in the shared stylesheet.
