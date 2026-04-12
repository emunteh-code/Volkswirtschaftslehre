# Inline warning visual severity correction — Pass 69

**Date:** 2026-04-12  
**Scope:** Student-visible **Häufige Fehler** main-column fallback (when `#rightPanel` is hidden or focus mode), plus **Verbindungen** fallback scope confirmation.

## Previous visual issue

`.warning-card.warning-card--theorie-fallback` overrode the shared premium warning stack with **accent-tinted neutral card** styling:

- `border: color-mix(…, var(--border), var(--accent))`
- `background: color-mix(…, var(--card), var(--accent))`
- flat `box-shadow`

That read as a **cool / informational** surface (portal accent reads as “general UI”), not as **caution / common mistake**. Inline theory `.warning-card` blocks already used **`--warning-surface` / `--warning-border` / `--warning-title`** (warm coral / amber family); the **theorie-fallback** mirror was the outlier.

## New warning treatment

**Shared, single location:** `assets/css/premium-refinement.css`

The fallback cards now **reuse the same semantic tokens** as the rest of `#content .warning-card`:

- `background: var(--warning-surface)`
- `border: 1px solid var(--warning-border)`
- `box-shadow: var(--warning-shadow)`
- **Restrained left emphasis:** `border-left: 3px solid color-mix(in srgb, var(--warning-title) 62%, var(--warning-border) 38%)` (overrides the generic `border-left: none` on `.warning-card` for this modifier only)
- `border-radius: 18px` (aligned with other premium warning cards in the same file)

**Unchanged:** DOM structure, `warning-card-head` / icon / title / body hierarchy (`assets/js/portal-core/ui/warningSystem.js`), spacing from the base `#content .warning-card` rule.

**Not done:** No alarm red, no full redesign, no change to rail `.rp-mistake--rail` compact tiles.

## Verbindungen scope (explicit)

**Product decision enforced in code:** main-column **Verbindungen** mirror (`.content-fallback--connections.content-fallback--rp-mirror`) is injected **only when `activeTab === "theorie"`**.

**File:** `assets/js/portal-core/ui/renderer.js` — the `insertAdjacentHTML` block for connections is gated on `activeTab === "theorie"`.

**Before Pass 69:** the same section was appended for **every** concept tab after rendering the tab panel, which duplicated navigation context on Grafik / Aufgaben / Formeln / Intuition / R-Anwendung.

**Duplication:** Rail vs mirror duplication checks remain: on wide desktop the mirror stays `display: none`; on narrow, **Theorie** shows the mirror once; other tabs do not add a second visible Verbindungen block in the main column.

## Files changed

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Replace accent-tinted `.warning-card--theorie-fallback` with **warning-token** surface, shadow, and **3px warm left border**. |
| `assets/js/portal-core/ui/renderer.js` | **Verbindungen** main mirror **Theorie tab only**. |
| `tools/clickthrough/verify-right-panel-fallback.mjs` | Assertions: at narrow widths, **non-Theorie** tabs must **not** show a visible connections mirror; **R-Anwendung** spot-check; **dupConn** still fails the run. |
| `docs/audits/right-panel-mobile-tablet-content-fallback-pass.md` | Table + implementation notes updated to **Theorie-only** Verbindungen mirror. |
| `docs/audits/right-panel-fallback-browser-closure-check.md` | Tab parity section updated (superseded by Pass 69). |

**Fix class coupling:** Only **`.warning-card--theorie-fallback`** was restyled. **`.warning-card--task`** and **`.warn-box.warning-card`** are unchanged. **Rail** mistakes use `.rp-mistake--rail`, not this modifier.

## Browser verification notes

1. **`node tools/clickthrough/verify-right-panel-fallback.mjs`** (Chromium, local `python3 -m http.server 8898`) — **exit code 0** after this pass. Confirms: no `dupConn`; **non-Theorie** / **R-tab** have **no** visible `#content .content-fallback--connections` at ≤1200px; focus snapshot still shows mirrors on Theorie at 1400px.
2. **Manual spot-check (recommended once):** Statistik **Theorie** at **1199px** — fallback **Häufige Fehler** cards should read **warm / cautionary** (not blue info). Same page at **1400px** — warnings in **#rightPanel** compact rail unchanged.
3. **Regression check:** Open **Formeln** or **Grafik** at **768px** — **no** „Verbindungen“ block at bottom of main column; switch to **Theorie** — block appears when links exist.

## Completion

- **Inline fallback warnings** no longer use accent-tinted “info card” styling; they align with the **premium learning-warning** palette (`--warning-*`).
- **Verbindungen** main fallback is **Theorie-only** by construction; verification script encodes that expectation.
