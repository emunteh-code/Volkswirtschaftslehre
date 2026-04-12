# Mikro1 separator-symbol correction — pass 21

## Problem

In intuition **bridge** lines, the **middle dot** (`·`, U+00B7) with spaces (` · `) was used as a clause separator. In a math/economics UI it reads too much like **multiplication** (e.g. like `\cdot`), especially on the budget line:

`Budgetgerade = Marktbeschränkung · GRS = Präferenzbeschränkung · Optimum = …`

## Chosen replacement

**Spaced em dash** (` — `, U+2014 with spaces): calm, standard German typography for short parallel phrases, and **not** a multiplication symbol.

## File changed

- `mikro1/js/data/intuition.js` only.

## What was replaced

| Original | Replacement |
|----------|-------------|
| ` · ` (space + middle dot + space) | ` — ` (space + em dash + space) |

Applied to **all** occurrences of ` · ` in that file (18 replacements). These are **bridge** (and any other) strings that used the same spaced-dot list pattern.

## What was not changed

- **Mathematical middots without spaces**, e.g. `αᵢ·m` in exam text, `½·t·` in the DWL shorthand, and `\cdot` inside `String.raw` / LaTeX in exams — untouched.
- **`graphs.js` / `graphPanel.js`** labels such as `u = x₁ · x₂` — multiplication meaning, left as-is.
- **`chapters.js`** formula-card descriptions (e.g. `x₁·x₂` for Cobb–Douglas) — multiplication, left as-is.
- **`navigation.js`** mastery badge `·` — different UI role, not intuition prose.
- **`renderer.js`** / **`formalMath.js`** tooling involving `·` — untouched.

## Similar occurrences

All spaced middle-dot clause separators in `intuition.js` were normalized in one pass so **bridge** lines stay consistent (e.g. `kmm`, `budget`, `grs`, `cobbd`, `marshall`, `elast`, `hicks`, `ausgaben`, `slutsky`, `cv_ev`, `gk_dk`, `indiff`, etc.).

## Browser verification (manual)

Open Mikro I → concept with intuition rail (e.g. **Budget** / **GRS**): confirm the bridge line shows **em dashes**, not middle dots, and that the sentence does not read like a product. Spot-check one **exam** line that still uses `\cdot` or tight `·` for real math.

## Completion

The flagged budget bridge line no longer uses a separator plausibly mistaken for multiplication; genuine multiplication notation elsewhere in mikro1 was preserved.
