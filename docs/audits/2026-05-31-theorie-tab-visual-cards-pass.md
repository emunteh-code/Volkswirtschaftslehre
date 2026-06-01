# Theorie tab visual cards pass

Date: 2026-05-31  
Scope: fleet-wide Theorie tab — restore card surfaces for the 8-step recipe structure (commit `b87e521` order preserved).

## Problem

Recipe normalization (`theory-recipe-section`) kept pedagogical order but flattened presentation: outer sections had `border: none` / transparent background, so the tab read as plain stacked text instead of teaching cards.

## Solution

| Layer | Change |
|-------|--------|
| `assets/css/premium-refinement.css` | `.theory-recipe-section` / `.theory-recipe-card` use formula-card family: 18px radius, hairline border, `--card` fill, step header row with bottom rule; nested `.section-block` flattened (no card-in-card); inset `.warn-box--theory-inset` inside cards |
| `assets/js/portal-core/theory/theoryStructure.js` | Runtime-wrapped sections emit `theory-recipe-card` alongside `theory-recipe-section` |
| `assets/js/portal-core/ui/warningSystem.js` | `.warn-box` kept in situ as inset callouts (`warn-box--theory-inset`) while still collected for right-rail / narrow fallback |
| Content rail | `.panel.active > .theory-recipe-section` aligned to `--content-rail-max` (Formeln / concept header parity) |

## Preserved

- 8-step `THEORY_SECTION_ORDER` (Orientierung → Vor den Aufgaben)
- Intuition fusion into Kernidee (`fuseIntuitionIntoTheoryHtml`)
- Subsection h4 (`.theory-subsection-title`) inside recipe bodies
- Rail + main-flow mistake mirror (Pass 70)

## Validation

- `npm run trust:pass1` — clickthrough regression (theory math integrity, formeln visibility, etc.)
- `npm run validate` — data / structure gates

## Remaining risks

- Baked `chapters.js` HTML without `theory-recipe-card` still styles via `.theory-recipe-section` selector.
- Duplicate mistake text when right rail is open **and** inset warn-box remains in a card — intentional (context in flow + collection in rail).

## Files touched

- `assets/css/premium-refinement.css`
- `assets/js/portal-core/theory/theoryStructure.js`
- `assets/js/portal-core/ui/warningSystem.js`
- `docs/audits/2026-05-31-theorie-tab-visual-cards-pass.md`
