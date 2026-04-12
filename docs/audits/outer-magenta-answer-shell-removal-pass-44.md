# Outer magenta answer shell removal — pass 44

## Problem

On **Geführte Aufgaben** and **Prüfungstransfer**, revealed answers use a shared wrapper (`renderQuestionCard` in `assets/js/portal-core/ui/renderer.js`, mirrored in modules such as **mikro1**):

```html
<div class="solution-block exam-drill-answer" id="…">
  … inner steps, lines, or `.result-badge` / `.math-block` …
</div>
```

`premium-refinement.css` layered **border**, **inset/box shadow**, and **accent- or math-tinted backgrounds** on `#content .solution-block` and `#content .exam-drill-answer` (Pass 3 / Pass 8 / earlier blocks). Some decks also wrap `drill.answer` in **`.exam-drill-solution`**, which had its **own** bordered panel — **double framing** around the real answer line/chip.

## Root cause (exact)

| Layer | Rules (concept) | Effect |
|-------|-------------------|--------|
| Outer | `#content .solution-block`, `#content .solution-block` + `#content .exam-drill-answer` (e.g. ~L926–932, ~L1968–1974) | Accent-tinted **border** / **background** on the reveal container |
| Heading | `#content .solution-block h4`, `#content .exam-drill-answer-head` (~L1990–1998) | **Accent-heavy** label color |
| Inner (some modules) | `#content .exam-drill-solution` (~L999–1005, ~L1394–1398) | Second **boxed** surface inside the outer answer |

Inner **`.result-badge`** (math-tinted chip) and **step rows** are intentional focal styling and were **not** removed.

## Fix (shared)

**File:** `assets/css/premium-refinement.css`  
**Placement:** **PASS 44** block at **end of file** (after Pass 42), using `!important` so it wins earlier Pass 3 / Pass 8 / Pass 4.1 answer surfaces.

### What changed

| Selector | Change |
|----------|--------|
| `#content .solution-block`, `#content .exam-drill-answer` | `border: none`, `box-shadow: none`, `background: transparent`, tighter vertical `padding` |
| `body.light-mode` same | Same, so light mode does not re-tint |
| `#content .solution-block h4`, `#content .exam-drill-answer-head` | **Muted** label color (no accent-forward heading) |
| `#content … .exam-drill-solution` (nested under solution/answer) | Transparent shell; keep **`display: grid`** + **`gap`** for layout |
| `#content … .exam-drill-meta` | Remove accent-tint **panel** (transparent, no radius box) |

**Unchanged:** Reveal **JS** (`toggleSolution` / `toggleExamDrill`), **`.result-badge`**, **`.step` / `.step-num`**, **`.exam-drill-line`**, **MathJax**, problem card chrome.

## Scope

- **Shared** for all portals that load `premium-refinement.css` after module CSS.
- **Not** module-local: no per-module `styles.css` edits required for the outer shell (inner `.result-badge` still comes from module + premium where applicable).

## Browser verification notes

1. **Aufgaben:** reveal a solution with **Ergebnis** `.result-badge` — outer **solution-block** should show **no** large tinted frame; inner badge still visible.
2. **Prüfungstransfer:** reveal **Musterlösung** — no **double** box around `exam-drill-line` / inner content; if `.exam-drill-solution` wraps lines, it should not add a second card.
3. **mikro1** (and any module using the same pattern): same checks.
4. **Light + dark:** confirm revealed block does not “flash” wrong background.
