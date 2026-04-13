# Multi-line math alignment regression fix — Pass 71

**Date:** 2026-04-12  
**Priority:** Critical — student-visible mathematical integrity.

---

## Regression cause (exact)

**File:** `assets/js/portal-core/ui/mathDerivationFormat.js`  
**Consumer:** `assets/js/portal-core/ui/semanticContent.js` → `renderSemanticBlock` for all `mode: "math"` blocks (project-wide formula cards, theory, Aufgaben steps, intuition, etc.).

**Mechanism:** `formatChainedEqualitiesForDisplay` split display LaTeX on **every** spaced ` = ` (`/\s+=\s+/`) and, when segment count and length thresholds passed, rewrote the expression as:

```text
\begin{aligned}
seg_0 &= seg_1 \\
&= seg_2 \\
…
\end{aligned}
```

That layout is correct **only for Class A** (one left-hand side, pure chained equalities).

**Failure example (Mikro I `hausopt` Aufgaben, budget intercepts):**

```latex
x_1^{\max} = \frac{m}{p_1} = \frac{120}{4} = 30 \qquad x_2^{\max} = \frac{m}{p_2} = \frac{120}{3} = 40
```

Splitting produced a segment `30 \qquad x_2^{\max}`. Feeding it into `&=` continuations made **`x_2^{\max}` appear as part of the continuation of the first chain** (visually tied to `30` / wrong row), instead of starting a **second** intercept line. Same risk for lines using `\quad` between parallel facts without `\qquad`.

---

## Formula families (classification)

| Class | Pattern | Safe for naive `&=` chain? |
|-------|---------|----------------------------|
| **A** | Single head, `a = b = c = …` | Yes |
| **B** | Repeated heads (`x_1^{\max}=…`, later `x_2^{\max}=…`) | **No** |
| **C** | Author used `\\` / environments | **No** (leave as authored) |
| **D** | Parallel presentation (`\qquad` / `\quad` between clauses) | **No** |

---

## Fix (shared, not module-local)

**Approach:** Before applying `aligned`, run **`classifyEquationLayoutFamily(innerLatex)`**. If the result is not **Class A**, return the string unchanged.

**Early exits (preserve as authored):**

1. Already has `\begin{…}`  
2. Contains `\\` (author line breaks)  
3. Contains `\qquad` (strong signal for Class D parallel rows in this codebase)  
4. Any segment after the first split contains `\quad` or `\qquad` (blocks `x_1^{\max}=50 \quad x_2^{\max}=20` style if spaces around `=` are normalized later)  
5. Any segment with index **≥ 2** looks like a **new quantity head** (`x_`, `y_`, …, `\text{…}`, or `^{\max}` / similar) — blocks ambiguous “second head” chains without needing `\qquad`

**Class A** still uses the previous thresholds (`MIN_SEGMENTS_FOR_CHAIN`, `MIN_CHARS_FOR_THREE_PART_CHAIN`, `shouldBreak`).

**Exports:** `classifyEquationLayoutFamily`, `LAYOUT_CHAINED_EQUALITY`, `LAYOUT_PRESERVE_AS_AUTHORED` for tests and audits.

---

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/mathDerivationFormat.js` | Family classification + guards; refactored `formatChainedEqualitiesForDisplay` to gate on class. |
| `docs/audits/multi-line-math-alignment-regression-fix-pass-71.md` | This document. |

**Unchanged:** `semanticContent.js` import path (still calls `formatChainedEqualitiesForDisplay` only); all modules using `renderSemanticBlock` inherit the fix.

---

## Browser verification notes

**Automated (Node):** Assertions on representative strings:

- Hausopt-style string with `\qquad` → **unchanged** output, class `preserve-as-authored`.  
- Pure `a = b = c = d` → still wrapped in `aligned` with `&=`.  
- `x_1^{\max} = 1 = 2 = x_2^{\max} = 3` → **unchanged** (repeated-head guard).

**Manual (recommended):** In a browser with MathJax loaded:

1. **Mikro I → Haushaltsoptimum → Aufgaben** — step “(a) Achsenabschnitte” with `x_1^{\max}` and `x_2^{\max}` on one line: confirm `x_2^{\max}` is **not** aligned as a continuation under `30`.  
2. **Another repeated-head** example if present in content.  
3. **Long pure chain** (e.g. Statistik / Ökonometrie) that should still break into `aligned`.  
4. **Revealed solution / Prüfungstransfer** with multi-step equals.  
5. **Formeln tab** — one extended card.

**Playwright:** Not added in this pass; trust regression does not yet snapshot MathJax layout. Visual check remains the authority for pixel-perfect overlap.

---

## Remaining edge cases (honest)

- **`\quad` false positives:** A legitimate RHS that contains `\quad` for spacing inside a true chain will skip auto-`aligned` (slightly longer one-line math — acceptable vs wrong algebra).  
- **Rare chains** with a second head but **no** `\qquad`/`\quad` and **no** `x_`-style head at segment start may still be misclassified as Class A — content authors can use an explicit `aligned` / `gathered` block or insert `\\` to opt out.  
- **Nested `=` inside `\text{…}`:** Extreme cases could still confuse the splitter; rare in current corpus.

---

## Completion assessment

The **specific** failure mode (parallel `x_1^{\max}` / `x_2^{\max}` with `\qquad`) is addressed **at the shared formatter** so all modules using `renderSemanticBlock` benefit. Pure long chains keep intentional multi-line `aligned` formatting.

**Success criterion for this pass:** Misplaced second LHS / `\qquad` parallel lines — **fixed** by not applying naive `&=` layout to those families.
