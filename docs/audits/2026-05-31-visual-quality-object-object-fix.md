# Visual quality — `[object Object]` in theory cards (2026-05-31)

## Root cause

**Formeln `eq` values are semantic objects** (`schemaSequence`, `schemaPhrase`, `referenceList`, `mathContent`) — not strings. Theory recipe HTML in **recht** and **finanzwirtschaft** was baked with template literals like:

```html
<div class="math-block">${formel.eq}</div>
```

Coercing those objects with `${…}` in a string produces **`[object Object]`** in the DOM. The parallel **`formeln` tab** already used `renderSemanticBlock()` correctly; only inline **Formale Darstellung** blocks in `entry.theorie` were wrong.

§-style references written as plain strings (e.g. `§ 130 BGB`) were unaffected.

## Fix

| Layer | File | Change |
|-------|------|--------|
| Display helper | `assets/js/portal-core/utils/formelDisplay.js` | `formatFormelForDisplay`, `formatFormelEqForDisplay`, `repairTheoryObjectPlaceholders`, `polishTheoryTypography` |
| Render pipeline | `assets/js/portal-core/utils/studentFacingText.js` | `studentizeTheoryHtml(html, entry)` repairs objects + typography before label stripping |
| Theory shell | `assets/js/portal-core/ui/warningSystem.js` | Passes `entry` into `studentizeTheoryHtml` |
| Source data | `recht/js/data/chapters.js`, `finanzwirtschaft/js/data/chapters.js` | Patched via `tools/exam-os/repair-theory-object-placeholders.mjs --write` (20 concepts) |
| CSS | `assets/css/premium-refinement.css` | Full-width intuition embeds; left-aligned Formale Darstellung; sentence-case Kernidee headings |
| Regression | `tools/clickthrough/trust-regression-pass-1.mjs` | `runTheoryFormelDisplay` — recht `willenserklaerung`, mathematik `algebra_mengen` |

## Remaining risks

- Other modules must keep using `renderSemanticBlock` / `formatFormelEqForDisplay` when embedding `formeln` in HTML generators.
- Re-run `node tools/exam-os/repair-theory-object-placeholders.mjs` after bulk theory imports that stringify `eq` objects.

## Verification

```bash
node tools/exam-os/repair-theory-object-placeholders.mjs   # dry-run, expect 0 hits after fix
cd tools/clickthrough && node trust-regression-pass-1.mjs   # includes theory-formel-display
```

Manual: **Recht → Willenserklärung → Theorie → Formale Darstellung** — Angebot/Vertragsschluss show schema chains, not `[object Object]`.
