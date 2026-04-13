# Statistik Prüfungstransfer — solution style parity pass

**Date:** 2026-04-12  
**Type:** Presentation-only (no content or step-order changes).

## Symptom

In **Statistik → Aufgaben → Prüfungstransfer**, revealed **Musterlösung** steps for drills that embed guided-task steps (e.g. “Prüfungsfrage …” with an `<ol class="exam-drill-steps">`) showed **wide pale-blue horizontal bands** with the step number visually centered, disconnected from the step text and formulas.

## Root cause (exact)

1. **Markup** (shared): `assets/js/portal-core/ui/renderer.js` → `buildExamDrills` emits task steps as  
   `<ol class="exam-drill-steps">` → `<li class="exam-drill-step">` with inner `.exam-drill-step-text` / `.exam-drill-step-math`.

2. **Step numbers** (shared): `assets/css/premium-refinement.css` (Pass 3) styles  
   `#content .exam-drill-steps > li::before` as a **small circular** counter (`display: inline-flex`, `min-width: 20px`, tinted background).

3. **Conflict** (bug): **Pass 62** added  
   `#content .exam-drill-answer .exam-drill-steps > li.exam-drill-step { display: flex; flex-direction: column; align-items: stretch; … }`.  
   For a **column** flex container, **`align-items: stretch`** applies on the **horizontal** cross axis. The first flex item is the **`::before` pseudo-element**. Stretching gives it the **full width of the row**, while keeping the short fixed **height** → the circle styling reads as a **full-width pale horizontal bar** with the digit centered — exactly the reported failure.

Statistik was **not** using a separate renderer: it uses the same `createRenderer` / `buildExamDrills` path and loads `premium-refinement.css` (see `statistik/index.html`), so the defect showed up strongly there; any module with the same combo would behave the same.

## Fix (exact)

**File:** `assets/css/premium-refinement.css`

- Set `#content .exam-drill-answer .exam-drill-steps > li.exam-drill-step` to **`align-items: flex-start`** instead of `stretch`, so flex children do not force the counter pseudo to span the full width.
- Added **`#content .exam-drill-answer .exam-drill-steps > li.exam-drill-step::before { align-self: flex-start; }`** as a belt-and-suspenders guard.
- **`.exam-drill-step-text`** / **`.exam-drill-step-math`** already use **`width: 100%`** (Pass 62), so step copy and math keep **full width**; only the numbered marker stays **compact**.

## Statistik-local vs shared

| Aspect | Verdict |
|--------|---------|
| **Fix location** | **Shared** — `assets/css/premium-refinement.css` (loaded by Statistik, Mikro I, and other modules that link this sheet). |
| **Trigger** | **Statistik-specific visibility** in the sense that Statistik + Prüfungstransfer + drill answers that include `exam-drill-steps` made the bug obvious; the underlying CSS interaction is **global** for that markup. |

No change to `statistik/css/styles.css` was required: module-local `.exam-drill-*` rules do not define the conflicting column block; the regression lived in the shared refinement layer.

## Pedagogy preserved

- Step **order**, **numbering**, **text**, and **formulas** are unchanged (renderer untouched).
- Only the **layout** of the existing `::before` counter relative to the column stack was corrected.

## Browser verification (recommended manual checks)

After deploy / local `http.server`:

1. **Statistik:** open a concept with Aufgaben + Prüfungstransfer (e.g. **Deskriptiv**), reveal a **Prüfungsfrage** solution that contains **numbered steps** — confirm **no full-width blue number bar**; number reads as a **small badge** above or beside the natural text flow.
2. **Statistik:** second Prüfungstransfer card with steps — same.
3. **Statistik:** **Geführte Aufgaben** → reveal **Musterlösung** — still uses `.step` / `.step-num` (unchanged); confirm no regression.
4. **Non-Statistik:** e.g. **Mikro I** Aufgaben → Prüfungstransfer with step list — confirm numbering **compact** and **no new layout breakage** (shared CSS).

Automated screenshot diff was not added in this pass; verification is by the checks above.

## Confirmation

- **Cause:** Column flex + `align-items: stretch` on `li.exam-drill-step` stretched `li::before` to full width.  
- **Result:** Prüfungstransfer step solutions align with the **intended** compact counter + step body rhythm (same component family as elsewhere), without the **decorative full-width numbering bar**.
