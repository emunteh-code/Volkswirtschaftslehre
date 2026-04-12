# Left-lane text hierarchy strengthening — Pass 59

## Goal

Improve scan path and typographic levels in the **R-tab left teaching lane** (Idee → Mathe ↔ R → Kernzeile → Auftrag → Erster Schritt) using **spacing and typography only**: no new boxes, no removed pedagogy, no academic meaning changes.

## Hierarchy weaknesses found (before)

1. **Flattened prose** — A shared rule set had pushed multiple roles (Idee body, Mathe↔R “meaning” copy, Auftrag prompt) toward the same apparent size and color, so the lane read like one continuous note sheet.
2. **Weak section anchors** — `r-orient-panel-kicker` labels (Idee, Mathe ↔ R, Auftrag) did not separate subsections strongly enough; vertical rhythm between blocks was modest.
3. **Mathe ↔ R repetition** — Rows of `Matheobjekt` / `Code-Stelle` / meaning stacked without enough gap, row separation, or contrast between **concept** (math), **artifact** (code), and **support** (meaning).
4. **Kernzeile interior** — The hinge block existed structurally, but the **Änderung →** / **Invariant** lines sat close to the same weight as general body copy; the fragment line did not read clearly above support text.
5. **Auftrag density** — Task prompt, numbered steps, and “Nicht ändern” blended into a similar tonal band.
6. **Erster Schritt** — Read as another paragraph rather than a **downstream, smaller closing cue** after Auftrag.
7. **Duplicate CSS** — Two competing `[data-r-practice-root] .r-lesson-flow .r-core-line` definitions (card vs rail) made the cascade harder to reason about; the later “hinge rail” intent is the single source of truth now.

## Changes made

### Shared (all R blocks using `data-r-practice-root`)

**`assets/css/r-practice.css`**

- **Pass 59 block** (under `[data-r-practice-root]`, after Pass 56d section):
  - **Level 1 / title lane:** Stronger `.r-practice-head h3`, `.r-application-kicker`, `.r-practice-bridge` (bridge slightly quieter than title).
  - **Level 2 / section labels:** `.r-lesson-flow .r-orient-panel-kicker` — uppercase micro-label, heavier weight, tracking, bottom border for scan.
  - **Level 3 / key lines:** `.r-lesson-lead` + fallback first paragraph in Idee; `.r-goal-success` (“Ziel: …”) emphasized; `.r-core-line-fragment` for the core cue; `.r-core-line-effects` first paragraph (Änderung) vs last (Invariant) differentiated.
  - **Level 4 / body:** `.r-goal-list li`, `.r-map-meaning`, task steps — smaller and more muted.
  - **Mathe ↔ R:** Larger grid gap, dashed row separators, muted `.r-map-cell-label`, stronger `.r-map-math`, code line distinct from meaning.
  - **Auftrag:** `.r-task-prompt` stronger; steps and `.r-task-guard` stepped down.
  - **Kernzeile:** Rail treatment only (no duplicate “card” rule); `.r-core-line-kicker` stronger; internal effects hierarchy.
  - **Erster Schritt:** `.r-orient-first-action` — top rule, smaller type, muted color; `.r-orient-action-label` as small caps label.
- **Removed** obsolete duplicate `.r-lesson-flow` gap and duplicate `.r-core-line` / `.r-core-line-code` rules that were fully superseded by the Pass 59 hinge block (single cascade path).

**`assets/js/portal-core/features/rPractice.js`**

- Idee opening paragraph: explicit `class="r-lesson-lead"` when `ideeLeadParagraph` is rendered so the **primary teaching line** always picks up level-3 styling (not only the `:first-of-type` fallback).

### Module-local

- **None** — Markup for the teaching lane is centralized in `renderTaskBriefs` / `renderRPracticeMarkup`; modules consume the shared portal feature.

## Before / after structure (summary)

| Level | Role | Before | After |
|-------|------|--------|--------|
| 1 | Exercise title / R kicker | Present but closer to body | Darker, heavier title; accent kicker |
| 2 | Idee / Mathe↔R / Auftrag | Small caps, modest separation | Stronger label + border segment + spacing |
| 3 | Lead, Ziel, Kernzeile fragment, Änderung | Often same as body | Larger/bolder lead; Ziel accent; fragment + Änderung above invariant |
| 4 | Lists, map meaning, steps | Similar to lead | Smaller, more muted |
| 5 | Erster Schritt | Paragraph-like | Smaller band, label + muted body |

## Browser verification notes

**Environment:** Automated browser UI was not run in this pass; verification is by **DOM/CSS review** against `renderTaskBriefs` and `[data-r-practice-root]` selectors.

**Recommended manual checks (R tab, wide + narrow):**

1. **Primary case** — Any standard R exercise with full Idee + map + Kernzeile + Auftrag: confirm section labels scan first, then lead, then body.
2. **Second similar lane** — Another block with the same five sections; confirm no regression where `data-r-practice-root` is absent (embedded markup sets it on the section root).
3. **Kernzeile-heavy** — Long `coreCue` / long effect text: kicker + fragment stay dominant; Invariant stays support.
4. **Mathe ↔ R–heavy** — Many `mathCodeMap` rows: dashed separators and vertical gap make rows scannable; labels stay muted.

**Explicit checklist:**

- [ ] Section headers (Idee, Mathe ↔ R, Auftrag) easier to scan than body.
- [ ] Opening Idee line and “Ziel:” stand out from bullets/support.
- [ ] Map rows: math vs code vs meaning are distinguishable without new chrome.
- [ ] Auftrag: prompt reads as instruction; steps quieter; “Nicht ändern” subordinate.
- [ ] Erster Schritt reads as a **final, smaller** cue below Auftrag.

## Files touched

| File | Role |
|------|------|
| `assets/css/r-practice.css` | Pass 59 hierarchy, Kernzeile/effects, Erster Schritt; removed duplicate core-line + duplicate lesson-flow gap |
| `assets/js/portal-core/features/rPractice.js` | `r-lesson-lead` class on Idee paragraph |

## Risks / follow-ups

- **Specificity:** Rules use `[data-r-practice-root]` so non-embedded clones of the same classes (if any) would not get Pass 59 tuning; current `renderRPracticeMarkup` paths set the attribute on the block root.
- **Light/dark:** Tuning uses `color-mix` with theme tokens; spot-check both themes when verifying in browser.
