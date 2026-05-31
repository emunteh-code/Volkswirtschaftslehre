# Quellen tab rollout — 2026-05-31

## Summary

Fleet-wide **Quellen** tab added immediately after **Intuition** in the concept tab strip. Per-concept source mapping now lives in a dedicated panel (`portal-core`) instead of relying only on the expandable footer strip or the module-level Quellenbrowser.

## Tab order (all 11 live modules)

| Module | Tab order (concept view) |
|--------|--------------------------|
| mikro1 | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** |
| mikro2 | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** |
| makro1 | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** |
| makro2 | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** |
| statistik | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** · R-Übung* |
| mathematik | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** · R-Übung* |
| oekonometrie | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** · R-Übung* |
| recht | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** |
| finanzwirtschaft | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** |
| jahresabschluss | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** |
| internationale-wirtschaftsbeziehungen | Theorie · Grafik* · Aufgaben · Formeln · Intuition · **Quellen** |

\*Hidden when the concept has no content for that tab (existing opt-in behaviour).

## Quellen tab visibility

- Shown per concept when `getConceptProvenance(conceptId)` yields a visible summary (page anchors, file refs, or manifest-only layer status).
- Hidden when no provenance content exists (**no dead tabs**).

## Panel contents

- Heading **Quellen & Vorlesungsmaterial**
- PDF availability notice (`deployEnvironment` — no broken PDF links on GitHub Pages)
- Provenance summary + per-layer breakdown
- Page anchors / refs grouped by VL block (Vorlesung, Kapitel, …)
- Link to full **Modul-Quellenbrowser** (existing `sourceCompanionModule`)

## Sidebar

- **Quellen** sidebar button now calls `window.__openQuellen()`.
- On an open concept with Quellen content → switches to the Quellen tab.
- From home / concepts without Quellen tab → falls back to module Quellenbrowser (`__showSourceCompanion`).

The provenance footer strip remains on Theorie, Aufgaben, Formeln, Intuition (trust regression unchanged). It is omitted on the Quellen tab to avoid duplication.

## Files changed

### portal-core

- `assets/js/portal-core/ui/quellenPanel.js` — new panel renderer + interactions
- `assets/js/portal-core/ui/sourceProvenanceUi.js` — exported provenance helpers
- `assets/js/portal-core/ui/renderer.js` — tab availability, render branch, footer skip on Quellen
- `assets/js/portal-core/app.js` — `__openQuellen` sidebar shortcut
- `assets/css/premium-refinement.css` — `.quellen-panel` styles

### Module shells (tab button + sidebar)

- `mikro1/index.html`, `mikro2/index.html`, `makro1/index.html`, `makro2/index.html`
- `statistik/index.html`, `mathematik/index.html`, `oekonometrie/index.html`
- `recht/index.html`, `finanzwirtschaft/index.html`, `jahresabschluss/index.html`, `internationale-wirtschaftsbeziehungen/index.html`

## Validation

```bash
cd tools/clickthrough && npm run trust:pass1
```

## Remaining gaps

- Concepts without manifest provenance still have no Quellen tab (by design).
- `makro2` renderer omits `sourceMaterialBaseUrl`; PDF open URLs may be incomplete until that path is wired.
