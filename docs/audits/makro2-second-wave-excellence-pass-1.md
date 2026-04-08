# Makroökonomik II (makro2) — second-wave excellence pass 1

**Date:** 2026-04-08  
**Driver:** `docs/audits/benchmark-gap-audit-pass-1.md` §2.2 — orphan **`INTUITION`** keys vs **`CHAPTERS`**, and **`mistakeReview`** wiring.

**Scope:** Data-layer coherence and retrieval hygiene only — no renderer/graph infrastructure, no new VL PDF anchors, no **`fullExams.js`** rewrite (audit already marks exam bulk as strong).

---

## 1. Exact files changed

| File | Change |
|------|--------|
| `makro2/js/data/intuition.js` | Rebuilt so **`Object.keys(INTUITION)`** matches **`CHAPTERS.map(c => c.id)`** exactly (20/20). Removed 15 legacy keys. Folded a small amount of former orphan **exam-pattern** wording into the parent chapter entries where it was standard course-level macro (ZP, OWR, Budget/Ricardian/Schuldenregeln, IT/ZLB, Solow/TFP/Institutionen, Disinflation). |
| `makro2/js/data/masteryData.js` | Removed unused **`specific[conceptId]`** blocks for ids **not** in **`CHAPTERS`**. Extended **`mundell_fleming`**, **`wk_regime`**, **`schuldenquote_dynamik`**, **`taylor_regel`**, **`aggregierte_pf`**, **`solow_basis`**, **`tech_fortschritt`**, **`phillipskurve`** with short checklist lines so themes from removed aliases are still reachable on navigable concepts. Header comment corrected (no “34 concepts”). |
| `makro2/js/data/courseworkTasks.js` | Trimmed **`COURSEWORK_TASKS`** to keys that are actually referenced from **`chapters.js`** via **`practice('…')`** only; removed duplicate alias keys that pointed at the same **`PRACTICE_SETS`** clones. Added one-line comment documenting the contract. |
| `docs/audits/makro2-second-wave-excellence-pass-1.md` | This audit. |

**Not modified:** `makro2/js/main.js`, `features/mistakeReview.js`, `state/storage.js`, `features/exam.js`, `features/fullExam.js` — **`mistakeReview`** and learner-backbone hooks were **already** present in the repo; the benchmark-gap markdown was stale on that point.

**Checks:** `node --check` on edited JS; runtime check that **`INTUITION`** keys and **`CHAPTERS`** ids are identical sets; every **`practice('id')`** in **`chapters.js`** has a **`COURSEWORK_TASKS[id]`**.

---

## 2. Exact makro2 weaknesses addressed

| Audit claim | Actual repo state / what we did |
|-------------|----------------------------------|
| **`INTUITION`** 35 keys vs 20 **`CHAPTERS`** | **Fixed:** intuition is now **only** the 20 navigable concept ids; provenance/manifest **`hasIntuition`** and the Intuition tab align with the sidebar graph. |
| Duplicate **`COURSEWORK_TASKS`** ids | **Fixed:** removed unused alias exports so the coursework map matches **`practice()`** usage (same tasks still attached via the surviving keys and shared **`PRACTICE_SETS`**). |
| Dead **`masteryData`** **`specific`** entries | **Fixed:** removed blocks for non-chapter ids; merged concise checklist lines into chapter-level **`specific`** where topics had lived only under aliases. |
| **`mistakeReview`** missing | **No code change:** module already imports and passes **`mistakeReview`** in **`main.js`** with backbone keys and dashboard Fehlerprotokoll (same pattern as **makro1**). |

---

## 3. Exact cleanup: intuition keys removed (15)

These existed in **`INTUITION`** but **not** in **`CHAPTERS`** (never reachable as a primary concept tab):

`zp_kurve`, `wirtschaftspolitik_offen`, `opt_waehrungsraum`, `eurozone`, `schuldenregeln`, `budgetrestriktion`, `ricardianisch`, `inflation_targeting`, `inflation_kosten`, `unkonv_geldpolitik`, `wachstum_fakten`, `steady_state`, `goldene_sparquote`, `solow_residuum`, `institutionen`

**Additive folds (not new sourcing):** extra **`exam`** bullets on **`mundell_fleming`**, **`wk_regime`**, **`schuldenquote_dynamik`**, **`taylor_regel`**, **`phillipskurve`**, **`solow_basis`**, **`tech_fortschritt`** reuse standard syllabus ideas already present elsewhere in the module text/steps.

---

## 4. Exact cleanup: `COURSEWORK_TASKS` keys removed (unused aliases)

Removed keys that **`chapters.js`** never passed to **`practice()`**:  
`zp_kurve`, `wirtschaftspolitik_offen`, `opt_waehrungsraum`, `eurozone`, `zeitinkonsistenz`, `schuldenregeln`, `budgetrestriktion`, `ricardianisch`, `inflation_targeting`, `inflation_kosten`, `unkonv_geldpolitik`, `wachstum_fakten`, `steady_state`, `goldene_sparquote`, `solow_residuum`, `institutionen`.

**Note:** **`zeitinkonsistenz`** chapter tasks remain **inline** in **`chapters.js`** (not via **`practice('zeitinkonsistenz')`**), so dropping **`COURSEWORK_TASKS.zeitinkonsistenz`** does not remove learner-facing tasks.

---

## 5. Remaining gaps (explicit) and why they remain

| Gap | Why it remains |
|-----|----------------|
| **Baseline `createRenderer`** (no **`enhanceRenderedSurface`** stack like **mikro1** / **ökonometrie**) | Requires a dedicated renderer pass and regression QA — out of scope for “data coherence” pass. |
| **Benchmark doc still lists makro2 without `mistakeReview`** | **Repo reality differs**; this audit records that. Updating **`benchmark-gap-audit-pass-1.md`** was not requested as part of this pass. |
| **Shorter mastery bullets vs former long alias lists** | Some alias-only checklist lines were **compressed** into parent concepts; full verbatim lists were not duplicated 1:1 to avoid bloating single-topic pages. |
| **No new `source-materials` anchors** | Pass did not add or change primary PDF paths; **`contentManifest`** / provenance unchanged. |

---

## 6. Source grounding

No new claims tied to specific PDF pages. Intuition and mastery edits stay at **source-distilled / platform recall** level consistent with existing module authoring.
