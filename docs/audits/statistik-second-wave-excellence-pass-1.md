# Statistik — second-wave excellence pass 1

**Date:** 2026-04-08  
**Driver:** `docs/audits/benchmark-gap-audit-pass-1.md` §2.3 (Statistik vs **mikro1** benchmark: thin full exams, four chapter concepts without intuition, **`nichtparametrisch`** manifest primaries empty).

**Scope:** Additive, deployable content and manifest alignment only — no renderer/graph infrastructure, no new academic claims beyond standard course-level statistics phrasing already implied by the module’s existing theory/steps.

---

## 1. Exact files changed

| File | Change |
|------|--------|
| `statistik/js/data/fullExams.js` | Replaced the previous minimal exam (~36 lines, two small problems) with two exams: expanded multi-step **`klausur_2024`** and native **`aufgaben`** + **`wf-block`** **`klausur_transfer_wf`**. |
| `statistik/js/data/intuition.js` | Added one plain-string intuition line each for **`z_test`**, **`zwei_stichproben`**, **`varianzanalyse`**, **`nichtparametrisch`**. |
| `statistik/js/data/contentManifest.js` | Import **`FULL_EXAMS`**; build **`FULL_EXAM_PROVENANCE`** with **`Object.fromEntries(Object.keys(FULL_EXAMS).map(...))`** so every exam id (including **`klausur_transfer_wf`**) has explicit **`platform-added-drill`** provenance; updated notes to point here. |
| `docs/audits/statistik-second-wave-excellence-pass-1.md` | This audit (requested deliverable). |

**Verification:** `node --check` on `intuition.js`, `contentManifest.js`, and `fullExams.js` (exit 0).

---

## 2. Exact Statistik weaknesses addressed (from benchmark-gap audit)

| Weakness (audit) | What we did |
|------------------|-------------|
| **`fullExams.js`** very small → low exam pressure / format variety vs **mikro1** | **`klausur_2024`**: 90 min, **9** `problems` with multi-step **`step`** items spanning deskriptiv, t, z, zwei Stichproben, ANOVA, nichtparametrisch, regression, KI vs Test, bivariat + transfer. **`klausur_transfer_wf`**: 45 min, **10** W/F items in **`wf-block`** (p-value, KI–Test-Logik, Signifikanz vs Effektgröße, Varianz n−1, t-Annahmen, nichtparametrisch, ANOVA-Interpretation, Korrelation vs Kausalität, z vs t). |
| **4** chapter ids without **`INTUITION`** | Filled **`z_test`**, **`zwei_stichproben`**, **`varianzanalyse`**, **`nichtparametrisch`** with short recall strings consistent with existing **`INTUITION`** style. |
| Provenance / mode index only knew one exam id | **`FULL_EXAM_PROVENANCE`** now tracks **all** keys in **`FULL_EXAMS`**, so **`fullExamDocumentIds`** in the mode index includes **`klausur_transfer_wf`**. |

We did **not** claim to fix **`nichtparametrisch`** primary PDF list emptiness (see §4).

---

## 3. Exact new intuition content added

Keys and role (all **`source-distilled`** / platform recall layer in spirit of existing `intuition.js`; not verbatim from a single PDF):

- **`z_test`** — z when σ known (or large-n normal reference); t when σ unknown; convergence for large df.  
- **`zwei_stichproben`** — comparing means/distributions; Welch vs gepoolt; paired vs independent structure.  
- **`varianzanalyse`** — global F vs many pairwise t-tests; “not all equal” ≠ every pair different.  
- **`nichtparametrisch`** — ranks/signs, weaker assumptions, ordinal/outliers/small n; parametric often more efficient when assumptions hold.

---

## 4. Exact new full-exam content added

### `klausur_2024` (problems + `step`)

| Problem id | `conceptId` (if set) | Topic focus |
|------------|----------------------|-------------|
| `fe_desk_1` | `deskriptiv` | x̄, Median, s² with (n−1) |
| `fe_test_t_1` | `testen` | Einstichproben-t, df, zweiseitige Entscheidung |
| `fe_z_1` | `z_test` | z-Statistik vs t when σ known/unknown |
| `fe_zwei_1` | `zwei_stichproben` | Zwei Mittel, Welch vs gepoolt (conceptual + choice) |
| `fe_anova_1` | `varianzanalyse` | F-Test Bedeutung, paarweise Folgetests |
| `fe_np_1` | `nichtparametrisch` | Wann Rangtests vs t-Test |
| `fe_reg_1` | `regression_schaetzung_inferenz` | β̂-Interpretation, Residuen / R² Lesen |
| `fe_ki_1` | `schaetzen_eigenschaften_intervalle` | KI vs Hypothesentest |
| `fe_biv_1` | `bivariat` | Korrelation, Kausalität, Confounding |

### `klausur_transfer_wf` (native `aufgaben` + `wf-block`)

- **10** statements (`st_wf_p1` … `st_wf_p10`) in two groups: p-Werte / KI / Signifikanz / Varianz; dann Tests, nichtparametrisch, ANOVA, Korrelation, z vs t.

**Not added (vs **mikro1** audit highlight):** No **`<canvas>`** diagram tasks inside Statistik full exams — left unchanged to avoid scope creep and new UI assumptions; `embeddedExamCanvases` remains **`false`** in `buildStatistikModeIndex`.

---

## 5. Remaining gaps (explicit) and why they remain

| Gap | Why it remains |
|-----|----------------|
| **`STATISTIK_PRIMARY_REFS_CURATED.nichtparametrisch`** is still **`[]`** | No stable, source-attributed VL path was added in this pass; filling it requires curated `source-materials/Statistik/...` anchors, not guesswork. |
| **Exam realism vs a real Klausur** | Content is **`platform-added-drill`** with empty **`source_refs`** by design; we do not assert identity with any historical exam paper. |
| **No canvas / diagram exam items** | Benchmark notes **mikro1** embeds canvas in exams; Statistik did not gain that in pass 1 — would need authored tasks + rendering QA. |
| **W/F and step answers are substring/option-matched** | Same limitation as rest of portal full-exam UX; not “autograded proof work” for long free-text. |
| **Depth vs ökonometrie/mikro1 exam bulk** | Statistik now has two structured exams and broader topic coverage, but total authored bulk is still below the largest modules; further passes can add more `problems` or second transfer sheet without infrastructure. |

---

## 6. Source grounding stance

- **Intuition** and **exam** items are standard introductory-statistics pedagogy aligned with the module’s existing chapter titles and step problems; they are **not** labeled as direct quotes from PDFs.  
- **Provenance** for full exams remains **`platform-added-drill`** with **`source_refs: []`**, documented in manifest notes and this file.
