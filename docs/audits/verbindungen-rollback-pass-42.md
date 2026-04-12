# Verbindungen rollback — pass 42

## Problem (Pass 39)

Pass 39 (`verbindungen-visual-refinement-pass-39.md`) changed the shared right-rail **Verbindungen** block via `#rightPanel .rp-section:has(#rpConnections)`:

- **Per-item “chip” styling** on `.rp-conn`: always-on **border**, **border-radius**, **background**, and a heavier **hover** state.
- **Two-column grid** on `.rp-link-group` (label column + chip column) and **row dividers** between groups.

That read as **stacked UI controls** instead of the earlier **lightweight list rows** (arrow + text, spacing from gaps only).

## Rollback (what was removed)

The **entire Pass 39 CSS block** was **deleted** from `assets/css/premium-refinement.css`. No replacement rules: Verbindungen again follows:

1. **Shared** `#rightPanel .rp-section` (Phase 5 ~L533–537 and later ~L2299–2300) — section shell (background / border / shadow) applies to the Verbindungen section like other rail sections.
2. **Module** `styles.css` (e.g. `recht/css/styles.css`, `jahresabschluss/css/styles.css`, `statistik/css/styles.css`, …) — `.rp-link-group`, `.rp-group-label`, `.rp-conn` defaults: simple vertical rhythm, **transparent** default border on rows, **hover-only** surface — not a persistent mini-card per line.

## Unchanged

- **Markup / content:** `assets/js/portal-core/ui/rightPanel.js` (unchanged).
- **Pass 33:** directional **arrow** colors on `.arrow--dir-back` / `.arrow--dir-forward` remain in `premium-refinement.css`.

## Files changed

- `assets/css/premium-refinement.css` — removed Pass 39 block; added **PASS 42** comment only.
- `docs/audits/verbindungen-rollback-pass-42.md` — this audit.

**Scope:** Shared stylesheet only (project-wide for portals that load `premium-refinement.css`).

## Browser verification notes

1. Open **Verbindungen** with grouped links (`groupConnections: true`, e.g. Mikro I): labels **stack above** their rows again; **no** always-on bordered pill around each `.rp-conn`.
2. Open a module with **flat** connections (default `groupConnections: false`): simple list of rows.
3. Compare **Jahresabschluss** / **Recht** / **Statistik**: behavior should match the same shared renderer + module row styles.

If any module still shows a heavy row chrome, it would come from **that module’s** `styles.css`, not from Pass 39 (removed).
