# Semantic Answer Nested-Shell Removal — Pass 54

## Problem

In **revealed** guided-task solutions (Aufgaben) and **Prüfungstransfer** drill answers, semantic step answers (e.g. `Ansatz = …; Bewertung = …`, Inventur vs. Bilanz) still read as **two framed layers**:

1. The overall revealed answer region (already largely flattened by Pass 44 / Pass 50 on `.solution-block` / `.exam-drill-answer` and direct `.math-block` / root `.semantic-display`).
2. **Inner** Pass 4.1 **chip** styling on `.semantic-schema__item` and `.semantic-reference__term` / `__entry` (padding, border, tinted background, `white-space: nowrap`), so each term looks like a **smaller card inside** the step row.

That is a **CSS composition** issue, not duplicate markup: `renderSemanticBlock` emits a **single** root `div.semantic-display…semantic-schema…` (see `assets/js/portal-core/ui/semanticContent.js` — `renderSchemaContent` / `renderReferenceContent`). The “nested shell” is **global semantic chip rules** still applying inside answer contexts.

## Root cause (exact)

| Source | Role |
|--------|------|
| `assets/css/premium-refinement.css` **Pass 4.1** (`.semantic-schema`, `.semantic-schema__item`, `.semantic-reference__*`) | Default **slab + chip** look for semantic content platform-wide. |
| **Pass 50** | Removes outer chrome for **direct** `.step-body > .semantic-display` and `.step-body > .math-block` in `#content .solution-block` and selected `.exam-drill-answer` children — **does not** remove **descendant** chip rules on `__item` / `__term`. |
| **Pass 52** | Flattens **theory** variant roots (`.semantic-display--theory`); **task** variant used in `renderTaskMathBlock` (`variant: "task"`) was **not** given the same row layout, and chips remained. |

Shared **markup** path: `assets/js/portal-core/ui/renderer.js` — `renderGuidedTasks` → `renderTaskMathBlock(step.eq)` → `renderSemanticBlock(value, { variant: "task" })`; exam drills use the same helper inside `buildExamDrills` / `renderQuestionCard`. **No second wrapper div** was added in JS for this defect.

## Fix

**Shared CSS only** (project-wide for any module loading `premium-refinement.css`):

- **Pass 54** block at end of `assets/css/premium-refinement.css`.
- **Scope:** `#content .solution-block .step-body` and `#content .exam-drill-answer` (entire subtree for chip stripping on semantic tokens, so `exam-drill-copy` / nested drill markup is covered).
- **Actions:**
  - Schema roots in these contexts: **flex** row, wrap, baseline gap (aligned with Pass 52 theory readability).
  - Reference roots: **grid** for `--stack`, **flex** for `--pill`.
  - **Remove chip chrome** from `.semantic-schema__item`, `.semantic-reference__entry`, `.semantic-reference__term`, and soften `.semantic-reference__note` (no box, inherited sizing).
  - **Light mode:** repeat transparent background / no border on those tokens so Pass 4.1 light rules do not re-tint chips.

**Not changed:** reveal logic, step numbering, `result-badge` / Prüfungsresultat blocks, Theorie tab semantic blocks, Formeln cards, right-rail formulas (selectors do not match those trees).

## Files changed

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Pass 54 block appended after Pass 52 / Jahresabschluss legal-schema rules. |
| `docs/audits/semantic-answer-nested-shell-removal-pass-54.md` | This audit. |

## Shared vs module-local

- **100% shared** (`premium-refinement.css`). No per-module `renderer.js` forks required for this visual defect.

## Browser verification (manual)

1. **Jahresabschluss** (or any module using portal `renderGuidedTasks`): Aufgaben → reveal solution → step whose `eq` is a **semantic schema** (e.g. Ansatz/Bewertung split). Expect **one** calm answer line: connectors + terms, **no** inner bordered pills.
2. Same module: step with **Inventur / Bilanz**-style semantic chain — same check.
3. **Prüfungstransfer** card with `exam-drill-steps` containing `renderTaskMathBlock` output — one surface, no chip-in-shell.
4. **Non-semantic** step (plain `$$…$$` math only): still one `.math-block` row; Pass 50 flattening unchanged.
5. **Formeln** tab: a `formula-card--schema` card should **still** show intended formula-card semantic styling (selectors are **not** under `.solution-block` / `.exam-drill-answer`).

## Completion

Pass 54 is complete when revealed semantic answer rows no longer show **tinted bordered chips** on each term inside the step row; hierarchy is **step number + prompt + one semantic answer line** with typography-only emphasis.
