# R-tab hard workflow unification — Pass 56d

**Date:** 2026-04-12  
**Scope:** Student-visible R-Anwendung tab (and shared `r-practice.css` surfaces used by embedded R-Übung where applicable).  
**Goal:** Replace the dominant “two long structured documents side by side” grammar with **one guided experiment**: compressed teaching flow (left), authoritative execution/evidence shell (right), **Kernzeile** as integrated hinge (not another generic panel), **output** as proof stage.

---

## Why earlier passes still felt like two documents

Passes **56 / 56b / 56c / 56e** and **embedded evidence stack 56d** (different filename: `r-tab-embedded-evidence-stack-parity-pass-56d.md`) improved hierarchy, bands, and stack wiring, but several structural cues **reinforced a split-page read**:

1. **Persistent column divider** — Wide layout kept a visible `border-right` on the orientation column (56e), which visually locks “document A | document B”.
2. **Kernzeile still framed like a card** — Full border, inset highlight, and shadow read as “another boxed region” competing with the right column’s chrome instead of a **single hinge** in a flow.
3. **Output styling stayed “UI panel”** — Light surface-mixed backgrounds on `<pre class="r-practice-output">` felt like a placeholder pane, not a terminal readout where evidence lives.
4. **Right column stack** — Guide head + checklist + output + readout could still scan as **stacked mini-panels** unless separators and backgrounds were pushed toward **one instrument interior**.
5. **Lower band weight** — `r-tab-bottom` and support typography still carried **primary worksheet** weight relative to the experiment core.

This pass intentionally changes **first-glance grammar** (spacing, lane fusion, terminal contrast, hinge shape, demotion of non-hinge blocks), not only micro-tweaks.

---

## What changed (structural)

| Area | Change |
|------|--------|
| **Wide lab canvas** | Removed the orientation column’s vertical divider; increased column gap; slightly warmer unified slab background so both lanes sit on **one field**. |
| **Left teaching flow** | Tighter vertical rhythm; smaller body type for Idee / goals / Mathe↔R / Auftrag bands; **Kernzeile** restyled as **left-accent hinge** (no full card frame, no glow box). |
| **Right execution shell** | Evidence stack background forced transparent inside the instrument; softer editor/output seam; instrument gets a single lifted “machine” chrome. |
| **Output** | Dark terminal-like panel (light + dark themes), stronger border/shadow, attached readout reads as **caption under proof** (typography + separator tuned). |
| **Lower support / tab bottom** | Quieter headings and prose on wide lab; top rule on `r-tab-bottom` as continuation, not a second hero row. |

**Pedagogy:** No removal of Kernzeile, checklist, interpretation, output proof copy, controls, or concept-to-code bridge — **presentation and hierarchy only**.

---

## Files changed

| File | Shared vs module-local |
|------|-------------------------|
| `assets/css/r-practice.css` | **Shared** — R tab + embedded R-Übung both load this stylesheet. |

No module-specific `rightPanel.js` or chapter JSON changes in this pass.

---

## Before / after — first-glance structural read

**Before (dominant read):**  
“Two documents”: left = long note sheet with multiple framed bands including a heavy Kernzeile card; right = editor + pale output + interpretive blocks that each feel like their own panel; **strong vertical split** between columns.

**After (target read):**  
“One experiment”: left = **one compressed flow** with a single obvious hinge (Kernzeile bar); right = **one instrument** with a **dark authoritative output** and readout **attached** as evidence caption; **weaker column separation**, fewer competing boxes, output reads as **proof stage**.

---

## Browser verification notes

**Environment:** Local static server (`python3 -m http.server 8765` from repo root) + Playwright `tools/clickthrough/r_tab_composition_pass56b.mjs` (structure guards: shell, instrument, evidence stack, Kernzeile where present).

**Automated run (2026-04-12):** `node r_tab_composition_pass56b.mjs` completed with **`failed: []`**, `pageErrors: []`, `consoleErrors: []` (Chromium launch required **`all`** permissions in this environment; first sandboxed launch closed the browser).

**Checks covered by the script + manual intent:**

1. **Statistik R tab** — `deskriptiv` @ 1365px: `.r-execution-shell`, `.r-execution-instrument`, `.r-tab-output-evidence-stack` present; no legacy `#content .r-practice-grid`.
2. **Second Statistik surface** — Same wide run counts two lab sections’ instruments/stacks (expected for multi-block tab).
3. **Ökonometrie R tab** — `matrix_notation`: `.r-core-line`, output checklist items, evidence stack, instrument, shell.
4. **Mathematik R tab** — `funktionen_gleichungen`: shell, `.r-lesson-flow`, evidence stack, instrument.
5. **Kernzeile-heavy** — Ökonometrie path (script asserts Kernzeile node).
6. **Evidence-heavy** — Ökonometrie path (checklist + stack). CSS additionally strips **premium** “second card” chrome from `.r-output-interp` when it appears as `.r-tab-output-readout` under the execution shell so the readout reads as **caption**, not a boxed panel.

**Visual verification:** Confirm in a real browser that the dark terminal + transparent readout + missing column divider match design intent (Playwright does not screenshot-compare).

---

## Verdict: Was the “two documents side by side” feel materially reduced?

**Yes, for the intended structural cues:** Removing the inter-column rule, unifying the lab field, compressing the left typographic stack, de-framing Kernzeile, and **terminal-strength output** are **large, first-glance** changes—not incremental polish.

**Residual risk:** If content volume is extreme, the left lane can still feel long **by length of copy**; this pass does not delete text. Further improvement would be editorial compression or progressive disclosure, outside this CSS pass.

**Explicit statement:** The pass **materially reduces** the split-document impression by changing **lane fusion, hinge geometry, output authority, and object count** (fewer heavy frames). It does not guarantee “short” pages for every block—only a different **visual grammar** for the same pedagogy.

---

## Naming note

This audit is **Pass 56d — hard workflow unification**. The repository already contains **`docs/audits/r-tab-embedded-evidence-stack-parity-pass-56d.md`** (embedded stack parity). The two “56d” labels address **different** goals; keep both documents; use filenames to disambiguate.
