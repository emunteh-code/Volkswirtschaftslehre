# Right-panel mobile/tablet content fallback — audit

## Problem

Module CSS hides `#rightPanel` at **`max-width: 1200px`** (and **`body.focus-mode`** on all widths). „Häufige Fehler“ and „Verbindungen“ lived only in that rail, so **narrow viewports and Fokus-Modus** lost pedagogically essential content while desktop kept it.

## Essential blocks (parity)

| Block | Source | Fallback behavior |
|--------|--------|-------------------|
| **Häufige Fehler** | `.warn-box` stripped into `getWarningSystemData().railWarnings`, rendered in `#rpMistakes` | Main column: **`renderMainFlowMistakesSection`** — `.warning-card.warning-card--theorie-fallback` stack under **Theorie** (end of `.panel.active`, after theory HTML). |
| **Verbindungen** | `buildConceptConnectionsHtml` / `#rpConnections` | Main column: same data, **`variant: "main"`** (`.cf-*` list), inserted **before** the provenance footer on **Theorie tab only** (Pass 69 — avoids repeating Verbindungen on Grafik / Aufgaben / Formeln / Intuition / R-Anwendung). |

**Formeln** in the rail still only shows when not on the Formeln tab (unchanged).

## Visibility / no double-visible UI

Mirrors use class **`content-fallback--rp-mirror`**, toggled in **`assets/css/premium-refinement.css`** (loads after module sheets):

- **Hidden** when `min-width: 1201px` **and** `body:not(.focus-mode)` — desktop + rail visible.
- **Shown** when `max-width: 1200px` **or** `body.focus-mode` — matches module rules that hide the rail.

The rail is still populated by **`renderRightPanel`**; mirrors stay in the DOM on desktop but **`display: none`**, so **no second visible copy** on wide non-focus layouts. Resize and focus toggles need no extra JS.

**Breakpoint:** **1200px** — aligned with existing module rules (e.g. `mikro1/css/styles.css`, `statistik/css/styles.css`, `recht/css/styles.css`, …).

## Implementation

### Shared (portal-core)

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/rightPanel.js` | **`buildConceptConnectionsHtml({ chapters, conceptId, conceptLinks, groupConnections, variant })`** — `variant: "rail"` → `.rp-*` (existing rail); `variant: "main"` → `.cf-*` for `#content`. `renderRightPanel` refactored to use the shared builder. |
| `assets/js/portal-core/ui/warningSystem.js` | **`renderMainFlowMistakesSection(railWarnings)`** — section + `.warning-card--theorie-fallback` using existing card head/body pattern. |
| `assets/js/portal-core/ui/renderer.js` | **Theorie:** append mistakes mirror inside `.panel.active` after stripped theory HTML. **Theorie tab only (with `entry`):** `insertAdjacentHTML` Verbindungen section **before** provenance strip. |
| `assets/css/premium-refinement.css` | **`.content-fallback--rp-mirror`** visibility rules; **`.cf-conn`**, **`.cf-link-group`**, **`.cf-group-label`**; **`.warning-card--theorie-fallback`**; arrow tints for `.cf-conn` (same semantics as rail). |

### Module-local

**None** — any module using `createRenderer` + shared `createRightPanelRenderer` inherits the behavior. Modules that `@import` mikro1 styles or define their own `max-width: 1200px` `#rightPanel { display: none }` stay aligned with the same breakpoint.

## Browser verification (manual)

1. **Desktop (≥1201px, no focus):** Open a concept with Fehler + Verbindungen — rail shows content; **no** visible duplicate in `#content` (mirrors `display: none`).
2. **Tablet (≤1200px) or Fokus-Modus:** Same page on **Theorie** — **Häufige Fehler** under Theorie body; **Verbindungen** above provenance; rail hidden by CSS. Other tabs: rail Verbindungen when applicable; no main-column Verbindungen mirror.
3. **Formeln / Grafik tab** at ≤1200px — Verbindungen mirror still at bottom of `#content`.
4. Spot-check: **Statistik**, **Recht** or **Jahresabschluss**, **Mikro** or **Makro**.

## Risks / follow-ups

- **Duplicate `getWarningSystemData`** on Theorie (via `extractTheorySignals` + direct call) — small cost; could pass cached `warningData` later.
- **Placeholder concept** (`!contentById[id]`) — no mirrors (no structured theory/links); unchanged.
- If a module ever uses a **different** rail hide breakpoint, CSS for `.content-fallback--rp-mirror` must be updated to match.

## Browser closure check

Instrumented verification (Playwright, multiple viewports/modules/tabs, focus mode): **`docs/audits/right-panel-fallback-browser-closure-check.md`**. Script: `tools/clickthrough/verify-right-panel-fallback.mjs`.
