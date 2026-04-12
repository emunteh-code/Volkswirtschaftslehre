# R-tab flagship composition — Pass 56

**Scope:** Shared R-Übung / R-Anwendung UI (Statistik, Ökonometrie, Mathematik; generated portal uses the same stack).  
**Goal:** One guided experiment: clear **concept lane** (left) + **execution lane** (right), **Kernzeile** as hinge, **editor + output** as one instrument, evidence readouts attached to output, fewer equal-weight boxed sections, deliberate action strip.  
**Non-goals:** No removal of instructional spine, no execution regressions, no content thinning.

---

## Phase 1 — Structural audit (pre-pass)

### Where R tabs live

| Surface | Mechanism | Modules |
| --- | --- | --- |
| Dedicated **R-Anwendung** tab | `renderRLabSection` → `renderHighlightEditor` + `renderTabOutputCard` + `renderTabBottomRow` | `statistik`, `oekonometrie`, `mathematik` (and generated portal modules that ship `rPracticeBlocks`) |
| Embedded **R-Übung** in Theorie-style flow | `renderRPracticeMarkup` | Portal / curriculum paths that still inject `r-application-block` blocks (same `rPractice.js`) |

Shared styling: `assets/css/r-practice.css` (imported from module `styles.css` and `assets/css/generated-portal.css`).

### Weaknesses observed (before Pass 56)

1. **Panel stack, not workflow:** `.r-practice-workspace` used a two-column grid of **two independent cards** (editor + output), each with full card chrome (border, radius, shadow). Visually: “two widgets,” not one execution instrument.
2. **Equal visual weight:** Orientation lesson blocks (Idee, Mathe↔R, Auftrag, map rows) often used the same bordered “mini-card” language, so hierarchy had to be read from text, not layout.
3. **Kernzeile under-signposted:** `.r-core-line` did not clearly read as the **handoff** from concept to execution relative to surrounding blocks.
4. **Output interpretation:** Focus / interpretation / proof sat inside `.r-tab-output-card` but still felt like **nested admin panels** next to the terminal, not a single **evidence stage**.
5. **Actions:** Buttons sat in the editor card with default spacing; primary run was not strongly grouped as a **tool strip** continuation of the shell.
6. **Bottom row (task + pitfalls):** On narrow layouts, `.r-tab-bottom` twin full-cards increased **card fatigue**; on wide desktop the tab hides bottom row in favour of orient content — but where visible, symmetry competed with the shell.

---

## Adopted R-tab grammar (post-pass)

| Layer | Role | Implementation |
| --- | --- | --- |
| **L1 — Exercise surface** | One coherent environment per lab | `.r-lab-section` grid (wide): orient spans rows 1–2 col 1; workspace col 2. Embedded: head + workspace + downstream cards unchanged structurally. |
| **L2 — Concept lane** | Pedagogical spine, internal rhythm | `.r-orient-card` calmer chrome; `.r-lesson-flow` children flattened to **bands + dividers**; `.r-core-line` strengthened as **hinge**. |
| **L3 — Execution lane** | Single instrument | **`.r-execution-shell`** wraps editor + output: shared outer border, no double card frames on children; editor/output divider only. |
| **L4 — Evidence + transfer** | Output as consequence | Terminal `.r-practice-output` keeps strong frame inside shell; `.r-output-focus` / `.r-output-interp` / `.r-output-proof` **de-boxed** with borders replaced by **section dividers**; Prüfungsregel remains in task flow / bottom row content. |

**Reading order the layout should suggest:** orient (concept) → **Kernzeile** → execution shell (code → **actions** → output) → interpretation attached to output → (task / pitfalls / solution as downstream, flatter where styled).

---

## Phase 2–10 — What changed

### Shared markup (`assets/js/portal-core/features/rPractice.js`)

- **`renderRPracticeMarkup`:** Wrapped `.r-practice-editor-card` + `.r-practice-output-card` in `<div class="r-execution-shell">`.
- **`renderRLabSection`:** Wrapped `renderHighlightEditor(config)` + `renderTabOutputCard(config)` in the same shell.

No behavioural / data-attribute changes to run, reset, insert-solution, or mounting.

### Shared CSS (`assets/css/r-practice.css`)

- **`.r-practice-workspace`:** `display: block` — layout owned by `.r-execution-shell`.
- **`.r-execution-shell`:** Single framed surface; children editor/output cards **transparent, borderless, shadowless**; internal vertical/horizontal split by breakpoint.
- **Responsive:** `@media (min-width: 1100px)` for `.r-lab-section` forces shell to **single column** (editor above output) in the right lane; `@media (max-width: 980px)` stacks shell for embedded/narrow.
- **Action strip:** `.r-execution-shell .r-practice-actions` top border + tighter gap; first non-`.secondary` button **bolder + min-width**.
- **Pass 56 block (end of file):** orient + lesson-flow flattening; `.r-core-line` hinge; output readouts; shell output terminal emphasis; `.r-tab-bottom` task + pitfalls **less twin-card**.

### Module-local changes

**None required** for Pass 56: Statistik / Ökonometrie / Mathematik already import `r-practice.css`; behaviour is centralised in `rPractice.js`.

### `premium-refinement.css`

Reviewed for `.r-output-interp` overlap. **Resolution:** `.r-tab-output-card .r-output-interp` in `r-practice.css` uses **higher specificity** (two classes) than premium’s single-class `.r-output-interp`, so tab readouts stay flat when both sheets load (typical order: module `styles.css` then `premium-refinement.css` in HTML). **No premium edit** was kept in-tree for this pass.

---

## Before / after (summary)

| Aspect | Before | After |
| --- | --- | --- |
| Editor + output | Two competing cards | One **execution shell**, shared frame |
| Kernzeile | One of several boxed blocks | **Hinge**: stronger left accent, clearer handoff |
| Lesson subsections | Many mini-cards | **Bands** with light dividers |
| Output guidance | Nested boxed panels | **Attached readout** under terminal hierarchy |
| Actions | Generic row in card | **Strip** with primary emphasis |
| Task / pitfalls (bottom) | Heavy paired cards | Flatter continuation surfaces |

---

## Browser verification notes

**Not run in this agent session** (no automated visual regression harness in repo). Recommended manual checks:

1. **Statistik** — open R-Anwendung on a concept with an R block; confirm shell, stacked editor→output on wide right column.
2. **Ökonometrie** — same; confirm highlight editor + output still mount and run.
3. **Mathematik** — same if R blocks present for the chapter.
4. **Kernzeile** — pick a block with visible `.r-core-line`; confirm it reads as the pivot before the shell.
5. **Evidence-heavy tab** — confirm `.r-output-interp` is not double-framed vs premium.
6. **Support-heavy tab** — scroll orient card; confirm Idee / Mathe↔R / Auftrag still present but less “card stack.”

**Automated sanity:** Template literals in `rPractice.js` close `div`s correctly for both shell sites; `grep` confirms `r-execution-shell` only where intended.

---

## Honest outliers / remaining work

1. ~~**Embedded lower grid**~~ — **Closed in Pass 56b** (`r-practice-support-surface`); see `docs/audits/r-tab-flagship-composition-pass-56b.md`.
2. **Wide desktop R-Anwendung:** `.r-tab-bottom` is **hidden** (`display: none`) when `.r-lab-section` is two-column — task/pitfalls live in the orient column via existing markup. Narrow view still shows bottom row; verify task + Prüfungsregel discoverability on small screens.
3. **Module-specific CSS:** If any module redefines `.r-practice-editor-card` / `.r-lab-section` locally, it could fight the shell — quick grep recommended after large module CSS edits.

---

## Files touched (Pass 56)

| File | Role |
| --- | --- |
| `assets/js/portal-core/features/rPractice.js` | `r-execution-shell` wrapper (embedded + tab) |
| `assets/css/r-practice.css` | Shell layout, responsive rules, action strip, Pass 56 composition block |

---

## Completion criterion (self-assessment)

- **Met (shared path):** Editor and output share one compositional family; Kernzeile and lesson flow hierarchy improved; actions grouped; evidence readouts flatter and attached to the output column semantics.
- **Embedded lower support:** Pass **56b** replaces twin cards with one **`.r-practice-support-surface`** (see `docs/audits/r-tab-flagship-composition-pass-56b.md` for browser verification).
- **Verify in browser** before calling production sign-off complete.
