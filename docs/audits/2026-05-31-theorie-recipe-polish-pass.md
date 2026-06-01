# Theorie recipe polish pass — 2026-05-31

Follow-up to fleet fill (`4947999`). Focus: remove visual noise, stop content duplication, show only substantive recipe cards.

## Dedup strategy

| Source | Where it lives now | Recipe behavior |
|--------|-------------------|-----------------|
| `entry.motivation` | Concept header (`concept-motivation`) | **Not** copied into Orientierung card |
| `entry.objectives` | `concept-objectives` block above theory panel | **Not** copied into Vor den Aufgaben card |
| `entry.formeln` | Formeln tab | **Not** inlined into Formale Darstellung |
| `entry.intuition` | Runtime `fuseIntuitionIntoTheoryHtml` only | **Not** baked in `collectEntryTheoryFragments` |
| Placeholder paragraphs | — | **Omitted** (no “Kein separater VL-Abschnitt …”) |
| Kernidee ← Definitionen copy | — | **Removed** (was duplicating first paragraph) |
| Cross-step body text | — | `isDuplicateTheoryText()` skips near-duplicate cards |
| Intuition inject | Render time | Skips inject when section body already matches fragment |

## Structural changes

- **Step numbers:** Removed from `buildRecipeSectionHtml`; legacy `<span class="theory-recipe-step">` stripped on normalize; CSS hides any survivors.
- **Cards shown:** Only steps with `theoryBodyHasContent()` after placeholder strip — typically **3–6 cards**, fleet average **4.17** (219 concepts).
- **Math:** `renderMath(content)` + scoped `renderMath(.theory-tab-panel)` after Theorie render; recipe bodies keep `math-block` / `$…$` unescaped (no `escapeHtml` on equations).

## Fleet metrics (after polish)

| Metric | Fill pass (`4947999`) | Polish pass |
|--------|----------------------|-------------|
| Avg cards / concept | 8.0 (forced) | **4.17** |
| Placeholder steps / concept | ~2.77 | **0** |
| Step badges in baked HTML | yes | **no** |
| Motivation duplicated in Orientierung | common | **no** |

## Files

| Layer | File |
|-------|------|
| Core | `assets/js/portal-core/theory/theoryStructure.js` |
| Render | `assets/js/portal-core/ui/renderer.js`, `warningSystem.js` |
| Styles | `assets/css/premium-refinement.css` |
| Migration | `tools/exam-os/normalize-theory-structure.mjs` |
| Data | Fleet `chapters.js`, `oekonometrie/mathematik` `theoryRecipe.js` |

## Validation

| Check | Result |
|-------|--------|
| `npm run validate` | OK |
| `npm run trust:pass1` | OK |
