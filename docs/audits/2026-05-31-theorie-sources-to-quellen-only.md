# Theorie tab: sources UI → Quellen only — 2026-05-31

## Summary

All per-concept **source / provenance chrome** was removed from the **Theorie** learning surface (and from other non-Quellen tabs). Students see uninterrupted theory content; **Quellen** remains the single place for VL mapping, page anchors, PDF status, and the Modul-Quellenbrowser.

Manifest `source_status` and `provenanceByConcept` data are **unchanged** — only display was moved.

## Removed from Theorie UI

| Element | Where it lived | Replacement |
|--------|----------------|-------------|
| Footer `source-provenance` strip (ⓘ, „Basis: …“, expandable inspector) | Bottom of Theorie / Formeln / Grafik / … | **Quellen** tab panel |
| Concept header **Quelle** pills (`platform-chrome-badge--source`) | Header row under title on Theorie | **Quellen** tab badge + layer breakdown |
| Inline `source_status` / `platform-added-*` `<em>` labels in theory HTML | Module `theorie` strings | Stripped at render via `studentizeTheoryHtml()` |
| `source-boundary-notice` / `platform-added-banner` blocks | e.g. mikro2 supplementals | Hidden in Theorie; visible mapping in **Quellen** |
| Empty-state provenance footer | Concepts without `entry` | Open **Quellen** tab when available |

**Not removed:** Klausurmethodik **„Zur Vorlesung“** on the **Formeln** tab (still opens Quellen). Theory recipe cards no longer inject source footnotes through the studentized HTML path.

## Kept on Quellen tab

- Summary line + per-layer breakdown (incl. platform-added / manifest-only hints via `studentHintForSourceStatus`)
- Seitenanker & Quellenreferenzen (inspector, Öffnen / Browser)
- PDF availability notice + ILIAS link
- Modul-Quellenbrowser button

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/renderer.js` | No footer strip; hide header pills on Theorie; `theory-tab-panel` wrapper |
| `assets/js/portal-core/utils/studentFacingText.js` | Broader `studentizeTheoryHtml()` stripping |
| `assets/js/portal-core/ui/warningSystem.js` | DOM removal of boundary banners before theory render |
| `assets/css/premium-refinement.css` | Full-width Theorie header + panel (`content-body-max`) |
| `tools/clickthrough/trust-regression-pass-1.mjs` | Provenance checks on Quellen; absence checks on Theorie/Formeln |

## Validation

```bash
npm run trust:pass1
```

## Remaining gaps

- Home cards and module landing tiles may still show high-level source badges (out of scope for this pass).
- Legacy `verify-pass-67b.mjs` still expects footer on Theorie unless updated separately.
