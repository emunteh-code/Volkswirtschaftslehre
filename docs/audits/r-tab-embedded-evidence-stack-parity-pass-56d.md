# R-tab embedded evidence stack parity — Pass 56d

**Goal:** Dedicated R tab and **embedded** `renderRPracticeMarkup` share the same **output column composition** (Pass 56c evidence stack).

## Change

**File:** `assets/js/portal-core/features/rPractice.js` — `renderRPracticeMarkup`

- Output column in the execution shell: **`r-practice-output-card r-tab-output-card`**
- Inner wrapper: **`r-tab-output-evidence-stack`**
- Guide row: **`r-tab-output-guide-head`**
- When **`config.outputChecklist`** is non-empty: same **Darauf achten** / **`r-output-focus`** block as `renderTabOutputCard`
- Terminal **`pre.r-practice-output`** remains inside the stack (interpretation text stays in **`.r-practice-support-surface`** below — no duplicate readout in the shell)

**CSS:** No new rules; existing Pass **56c** selectors target `.r-tab-output-card` / `.r-tab-output-evidence-stack` inside **`.r-execution-shell`**.

## Pedagogy

- No removal of blocks; optional checklist only appears when data provides `outputChecklist` (same inference as tab path).

## Verification

Same **`tools/clickthrough/r_tab_composition_pass56b.mjs`** guards continue to apply where embedded blocks mount in the wild; dedicated-tab checks unchanged.
