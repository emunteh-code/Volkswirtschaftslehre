# Mikro I — Budgetmenge formula-family regression fix (pass)

## Symptom

In **Mikroökonomik I → Budgetmenge & Budgetgerade → Aufgaben → Aufgabe 1**, step **(a) Achsenabschnitte**, the display for the two intercept derivations was **mathematically ambiguous**: `x_2^{\max}` could appear **on the same horizontal band as the end of the first chain** (`30`), so readers could not reliably see **two separate repeated-left-hand-side families**.

## Root cause

1. **Authored TeX** (unchanged) is a **single** display line with a `\qquad` separator, e.g.  
   `x_1^{\max} = … = 30 \qquad x_2^{\max} = … = 40` in `mikro1/js/data/chapters.js`.
2. **Render path:** guided-task steps call `renderSemanticBlock` → `formatChainedEqualitiesForDisplay` in  
   `assets/js/portal-core/ui/mathDerivationFormat.js` (via `assets/js/portal-core/ui/semanticContent.js`).
3. **Pass 71** correctly **rejected** this as a *single* Class-A chained-equality `&=` break (to avoid gluing two different heads into one continuation chain), and therefore **left the string as authored**.
4. **Residual failure class:** preserving the string still yields **one display paragraph** with `\qquad` as horizontal space. In student-facing layout, that reads like **one wide line** and allows **visual drift**: the second LHS no longer reads as a **new equation line**.

So the bug was **not** “wrong `&=` splitting” anymore; it was **missing explicit vertical structure** for the **paired parallel `\qquad` pattern**.

## Formula-family classification

- **Not** a pure Class-A chain (`a = b = c = d` with a single LHS family).
- **Is** a **paired repeated-left-hand-side / parallel presentation** pattern:  
  **exactly two** sub-expressions separated by `\qquad`, each internally an equality chain (`LHS = … = …`).
- **New formatter branch (implementation name):** `tryFormatPairedQquadDoubleChain` — runs **before** `classifyEquationLayoutFamily`, and emits:

  `\begin{aligned}`  
  `LHS_1 &= rest_1 \\`  
  `LHS_2 &= rest_2`  
  `\end{aligned}`

  so each intercept line is its **own row** with a **stable head** on the left of `&=`.

## Fix (shared vs local)

- **Shared** formatter change only; **no** Mikro I content edit required.
- **File changed:** `assets/js/portal-core/ui/mathDerivationFormat.js`
  - Early transform: **two-part `\qquad` split** → **two-row `aligned`** as above.
  - **Unchanged** when: `\begin{…}` already present, `\\` already present, **not exactly two** `\qquad`-separated clauses, or either clause has **no** ` = ` (cannot form `&=` row).

## Scope / blast radius

- **Improves** every module that routes display math through `renderSemanticBlock` and uses the same **two-clause `\qquad`** pattern with **valid ` = `** in each clause (e.g. many `x_1^* = … \qquad x_2^* = …` lines in `mikro1/js/data/chapters.js`).
- **Intentionally untouched:** three-or-more `\qquad` clauses (e.g. triple parallel rows) — still **preserve-as-authored** until a dedicated rule exists.
- **Chained-equality** Class-A path is **unchanged** for strings without the paired `\qquad` pattern.

## Verification

### Automated (Node)

From repo root, ESM import of `formatChainedEqualitiesForDisplay`:

- Budget intercept string → output contains `\begin{aligned}`, two rows, second row starts with `x_2^{\max}` after a line break.
- Triple `\qquad` string → **unchanged** (no forced `aligned`).
- Long pure chain without `\qquad` → still receives multi-line `aligned` layout when Class-A rules apply.

### Browser / Playwright (local static server)

Against `mikro1/index.html` over `http://127.0.0.1:8877`:

1. **Budgetmenge → Tab „Aufgaben“ → Aufgabe 1 → „Lösung anzeigen“**  
   - First step math: MathJax CHTML represents `aligned` as `mjx-mtable` with **2 `mjx-mtr` rows**.  
   - Second row **`top` − first row `top` ≈ 42px** in the checked run → **clear vertical separation**, not inline drift beside `30`.

### Manual checks still recommended

- **Another module** with `… \qquad …` two-clause numeric chain (if present in that module’s content).
- **One previously good long equality** (no `\qquad`) to confirm Class-A formatting still holds.
- **Formeln tab / formula cards** if they embed the same `$$…$$` path through `renderSemanticBlock` (shared code path).

## Similar cases elsewhere

- **Likely improved automatically** wherever the **same two-clause `\qquad`** pattern appears in content passed through `renderSemanticBlock`.
- **Still manual / future work:** `\qquad` sequences with **three or more** parallel clauses; mixed lines where a clause **lacks** `=` (heuristic correctly declines to transform).

## Completion criterion

Met when the Budget intercept step reads as **two distinct max-equation derivations** with **correct line structure** — not as one ambiguous horizontal chain. Playwright row count + vertical offset on the revealed solution confirms this for Aufgabe 1.
