# Einsatzgrenzen / Herleitung title humanization — 2026-05-31

## Problem

On the **Formeln** tab, **Herleitungen** and **Einsatzgrenzen** blocks used `card.officialNotation || card.id` as the H4 title. That surfaced:

- Internal exam-OS ids (`makro1.geldnachfrage.geldmarktgleichgewicht`) when `officialNotation` was empty
- Raw notation tokens (`P_B`) without German context
- Concept slugs (`geldnachfrage`) copied from the VL generator when a formula had no variable map

Students could not tell which formula or concept a limits panel referred to.

## Fix

### Portal-core resolver

New module: `assets/js/portal-core/ui/resolveEinsatzgrenzenDisplayTitle.js`

Resolution order:

1. `card.label` or linked chapter `formeln[].label` (match by normalized `displayFormula`, derivation label, or id slug)
2. Notation-only keys (`P_B`, `x_1`) → `Bezug: {variable definition or step label} ($P_B$)` via `formatMathInTitle`
3. Empty notation + dotted id → primary derivation step label or humanized slug segment
4. Concept slug as notation → derivation / applies-when label or chapter title from `CHAPTERS`
5. Fallback: derivation label, applies-when phrase, formatted notation, humanized id slug

`renderer.js` uses the same resolver for **Herleitungen** and **Einsatzgrenzen**. Einsatzgrenzen may show a one-line subtitle (from `formeln[].desc` or `card.intuition`) when it adds context beyond the title.

### Generator (future regen)

`tools/exam-os/generate-vl-layers.mjs` now emits `label: primary.label` and leaves `officialNotation` empty when there is no variable map (instead of copying `conceptId`).

Existing `formulaCards.js` files are unchanged; display is fixed at render time.

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/resolveEinsatzgrenzenDisplayTitle.js` | New title resolver |
| `assets/js/portal-core/ui/renderer.js` | Shared head renderer for Herleitung + Einsatzgrenzen |
| `assets/css/premium-refinement.css` | Subtitle + head layout for limits blocks |
| `tools/exam-os/generate-vl-layers.mjs` | `label` field; empty notation instead of concept slug |

## Before / after (makro1 `geldnachfrage`)

| Before | After |
|--------|-------|
| `makro1.geldnachfrage.geldmarktgleichgewicht` | **Geldmarktgleichgewicht** |
| `P_B` | **Bezug: Anleihenpreis ($P_B$)** |
| `geldnachfrage` | **Geldnachfrage** |

## Validation

- `npm run trust:pass1` from repo root (serves static site, Playwright regression)
- Spot-check: makro1 → Geld, Anleihen und Geldnachfrage → Formeln → Einsatzgrenzen / Herleitungen

## Risks / gaps

- Multi-symbol `officialNotation` strings (`i, Y`) still prefer the derivation step label; if that is missing, the raw notation list is shown formatted.
- Regenerating formula cards fleet-wide is optional; resolver covers legacy data.
