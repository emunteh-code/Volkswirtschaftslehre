# Public-core concept-level source-diff hardening — Pass 3 (Statistik)

## Scope and method

- **Module only:** `statistik/`
- **Source of truth on disk:** `source-materials/Statistik/Statistik/` (VL PDFs as cited below), plus existing curation in `docs/audits/statistik-provenance-curation-pass-1.md` and `statistik/js/data/contentManifest.js`.
- **Portal content inspected:** `statistik/js/data/chapters.js` (primary narrative, formulas, guided tasks), `statistik/js/data/intuition.js` (exam cues), `statistik/js/data/stepProblems.js` / `fullExams.js` (spot-check for inference phrasing consistency with this pass’s focus).
- **Evidence tool:** `pdftotext` on VL PDFs + line-oriented `grep` (no reliance on generic statistics memory where VL wording was available).

## Issues found vs issues fixed (summary)

| Issue | Location | Fix applied this pass? |
|------|----------|-------------------------|
| p-Wert definition in **Theorie** compressed relative to VL (missing “in Richtung der Alternativhypothese noch extremer”) | `testen` · `CONTENT.testen.theorie` | **Yes** — aligned to VL IS 3 wording. |
| Typo **„Ablehnbereich“** | `testen` theorie + Aufgaben-Schritt | **Yes** → **„Ablehnungsbereich“**. |
| English **„and“** in German task prompts | `testen` Aufgabe (t-Wert), `bivariat` Aufgabe (Varianzen) | **Yes** → **„und“**. |
| Inconsistent null notation **„H0“** vs `$H_0$` in revealed result | `testen` Aufgabe Ergebniszeile | **Yes** → `$H_0$`. |
| **Stichprobenvarianz:** VL introduces **n**-normierte und **(n−1)**-korrigierte Formen; portal used **(n−1)** without tying to VL’s dual presentation / R `sd()` note | `deskriptiv` · `CONTENT.deskriptiv.theorie` | **Yes** — short paragraph referencing VL 3 (“Maßzahlen für die Streuung”), **n** vs **(n−1)**, and portal convention. |
| **α** described only as “Toleranz” | `testen` theorie | **Yes** — clarified as pre-specified upper bound on type-I error / threshold vs p-value. |
| **Formeln** tab variable gloss: **„unter H0“** (ASCII, not aligned with math tab) | `testen` · `formeln` entry `t`-Statistik `variables` | **Yes** → **„unter $H_0$ postulierter Mittelwert“**. |
| p-Wert **Aufgabe** result sentence still looser than VL on zweiseitige Extremität | `testen` Aufgabe „p-Wert Interpretation“ | **Yes** — expanded with zweiseitige Lesart + VL reference; removed stray soft hyphen in „Wahrscheinlichkeit“. |
| **Konfidenzintervall** misinterpretation as P(parameter ∈ interval) | `schaetzen_eigenschaften_intervalle` | **No mismatch found** — existing `CONTENT` already states repeated-sampling / method property (honest under hostile scrutiny). |
| **Welch vs pooled**, Paarstruktur, F-Test role | `zwei_stichproben`, `regression_*` snippets in `chapters.js` | **No change** — wording already matches standard course logic; not contradicted by quick VL outline checks this pass. |
| **`nichtparametrisch`** empty primary refs | `contentManifest.js` / provenance | **Documented only** (per prior curation; no fake PDF anchor). |

**Files changed:** `statistik/js/data/chapters.js` only.

## Concepts audited (required structure)

Each row answers: strengths / weaknesses / judgment / what was misleading or missing / recommended fix / fix applied.

### 1) `deskriptiv`

1. **Concept:** Deskriptive Statistik — Streuung / Varianznotation.  
2. **Source basis:** `Vorlesungen/VL_03_-_Deskriptive_Stat_1.3-1.6.pdf` (Maßzahlen für die Streuung; Aufgabenbeispiel mit empirischer Varianz **n** und R-Hinweis **1/(n−1)** / Freiheitsgrad-Korrektur); manifest also lists `VL_02`.  
3. **Portal strengths:** Correct **(n−1)** in formulas and Aufgaben; Bessel label in Formeln tab; IQR and interpretation discipline.  
4. **Portal weaknesses (before pass):** Students only reading the portal could miss that **VL explicitly juxtaposes** an **n**-denominator “empirical” form with **R’s sd()** correction — a known exam trap in the VL slide family.  
5. **Fidelity judgment:** **mixed** → **strong** after fix.  
6. **Misleading / missing:** Under-specified bridge from “portal always uses (n−1)” to “why that matches R / inductive use” in VL terms.  
7. **Recommended fix:** One short, VL-cited paragraph after the **s²** formula stating both denominators appear in VL 3 and that the portal standardises on the corrected form.  
8. **Fix applied:** **Yes.**

---

### 2) `testen`

1. **Concept:** Hypothesentests — p-Wert, α, Entscheidungsregion.  
2. **Source basis:** `Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf` (p-Wert bullet list: under **H₀** assumption, probability of observed or **more extreme toward H₁**; threshold comparison).  
3. **Portal strengths:** Clear H₀-first workflow; explicit warning track on p ≠ P(H₀) in Aufgaben; Fehler 1./2. Art tradeoff text is sound.  
4. **Portal weaknesses (before pass):** p-Wert bullet was **shorter than VL** (direction-of-extremity nuance); typo **Ablehnbereich**; loose α gloss; one Aufgaben result still short on zweiseitige Extremität; minor notation slippage (H0, “and”).  
5. **Fidelity judgment:** **mixed** → **strong** on audited bullets (not a full re-proof of every Aufgabe).  
6. **Misleading / missing:** Omitting “toward **H₁**” is a classic exam-weakness pattern (students memorize “more extreme” without side).  
7. **Recommended fix:** Expand p-Wert bullet to VL-aligned wording; fix German typo; tighten α; align notation and DE prompts; extend p-Wert Aufgaben result.  
8. **Fix applied:** **Yes.**

---

### 3) `bivariat`

1. **Concept:** Kovarianz / Korrelation — guided numeric drill.  
2. **Source basis:** `Vorlesungen/VL_04_-_Deskriptive_Stat_2.pdf` (manifest anchor); concept-level check focused on **task language** and **(n−1)** consistency in covariance step (already present).  
3. **Portal strengths:** Pearson/Spearman distinction in R blocks and theory; covariance uses **n−1** consistently in worked steps.  
4. **Portal weaknesses (before pass):** English **“and”** in a German exam-style prompt (cosmetic but erodes “public-core polish” and bilingual noise).  
5. **Fidelity judgment:** **strong** (substantive stats content); **mixed** on editorial consistency before fix.  
6. **Misleading / missing:** None substantive on the audited task line.  
7. **Recommended fix:** Replace **“and”** with **“und”**.  
8. **Fix applied:** **Yes.**

---

### 4) `schaetzen_eigenschaften_intervalle`

1. **Concept:** Konfidenzintervalle — interpretation vs. P(parameter ∈ interval).  
2. **Source basis:** `Vorlesungen/VL_10_-_Induktive_Statistik_2.pdf` (Kapitel outline includes Konfidenzintervalle); `VL_09_-_Induktive_Statistik_1.pdf` (paired in manifest); portal `CONTENT` blocks at ~713–733 and ~1364+ in `chapters.js`.  
3. **Portal strengths:** Explicit rejection of the “95% probability the parameter is in this interval” fallacy; dualität KI/Test stated carefully.  
4. **Portal weaknesses:** None identified on **interpretation wording** in this pass (already defensible).  
5. **Fidelity judgment:** **strong** on audited CI interpretation surfaces.  
6. **Misleading / missing:** n/a for this slice.  
7. **Recommended fix:** None required.  
8. **Fix applied:** **No** (no issue).

---

### 5) `z_test` (spot audit)

1. **Concept:** z-Test / Normalapproximation / KI–Test dualität.  
2. **Source basis:** Same VL family as `testen` per manifest (`VL_10`, `VL_11`).  
3. **Portal strengths:** Correct emphasis “σ known → z; else t”; KI–Test equivalence explained without claiming P(H₀).  
4. **Portal weaknesses:** **Notation:** Anteilstest uses **p** for population proportion in **H₀: p = p₀** while “p” also denotes p-values elsewhere — common in texts but a **symbol overload** risk under exam pressure.  
5. **Fidelity judgment:** **mixed** (pedagogic notation clarity only; not a factual error).  
6. **Misleading / missing:** Possible student confusion between **p**-value and **p** proportion without a one-line disambiguation.  
7. **Recommended fix:** Optional future pass: use **π** / **p₀** consistently in hypotheses vs Latin **p** for p-value, **if** VL notation confirms.  
8. **Fix applied:** **No** (not confirmed from VL text in this pass).

---

### 6) `zwei_stichproben` (spot audit)

1. **Concept:** Pooled vs Welch, verbundener t, F-Test as pre-test.  
2. **Source basis:** `Vorlesungen/VL_11_-_Zwei-SP_t-Test.pdf`, `Tutorien/Tutorium_11/Tutorium11.pdf` (per manifest).  
3. **Portal strengths:** Design-first narrative; Welch SE formula; pooled formula; explicit trap on ignoring pairing; R-block explains `var.equal` semantics responsibly.  
4. **Portal weaknesses:** None found at concept level in this pass beyond “always verify numeric toy critical values in exams come from the distributed table”.  
5. **Fidelity judgment:** **strong** on audited passages.  
6. **Misleading / missing:** n/a.  
7. **Recommended fix:** None this pass.  
8. **Fix applied:** **No.**

---

## Mistakes / warnings (`Häufige Fehler` family)

- **R-block pitfalls** under `testen` / `schaetzen_eigenschaften_intervalle` already target **p-Wert vs. P(H₀)** and **KI misread** — aligned with VL-style exam traps.  
- No change this pass; **intuition.js** exam cues for `testen` remain consistent with the hardened theory tab.

## Provenance honesty

- **No manifest edits** this pass.  
- **`nichtparametrisch`** remains with **empty** primary refs (documented gap from pass 1) — still the largest **honesty / completeness** risk for that chapter, separate from this pass’s text fixes.

## Automated browser verification

Command: `cd tools/clickthrough && node trust-regression-pass-1.mjs`  
**Result:** `trust-regression-pass-1: all checks passed.` (~61s)

**Statistik-relevant checks inside that harness include (non-exhaustive):**

- Math-leak scan: `/statistik/index.html` · `deskriptiv` · **theorie** and **formeln** tabs.  
- Provenance footer: `/statistik/index.html` · `deskriptiv` · **theorie** (exactly one footer, mark present, summary line non-empty).  
- Graph integrity: `/statistik/index.html` · `bivariat` · **graph** (canvas size, title, no visible render error).  
- Solution reveal: `/statistik/index.html` · `deskriptiv` · **aufgaben** (reveal button → `.solution-block.show`).  
- Right-panel / focus-mode parity probes on **statistik/deskriptiv/theorie**.

**Prüfungstransfer:** the regression suite’s dedicated **examDrill** toggle is exercised on **mikro1/budget**, not Statistik; Statistik transfer is covered indirectly via **Aufgaben reveal** + **intuition** content review in this pass, not via that specific UI toggle.

## Coverage statement (explicit)

**Deep VL-text-aligned edits:** `deskriptiv` (variance convention paragraph), `testen` (p-Wert / α / typo / tasks), `bivariat` (prompt language).  
**Deep read, no text change needed:** `schaetzen_eigenschaften_intervalle` (CI interpretation).  
**Spot audit only (no edits):** `z_test`, `zwei_stichproben`.  

**Not individually re-audited in this pass:** `wahrscheinlichkeit`, `verteilungen`, `schaetzen_verfahren`, `regression_schaetzung_inferenz`, `regression_diagnostik_prognose`, `varianzanalyse`, `rlab`, `nichtparametrisch` (beyond provenance gap note), `fullExams.js` item-by-item.

## Updated trust judgment (Statistik, after pass 3)

**Verdict:** **Improved and more source-defensible on the highest-risk surfaces audited (p-Wert language, rejection-region wording, variance n vs n−1 honesty, bilingual prompt noise).**  
**Residual trust risks:** (1) **`nichtparametrisch`** still lacks file-level VL anchors**; (2) **symbol overload** **p**-value vs **p** proportion in `z_test` deserves a notation pass once VL confirms symbols; (3) **many chapters** were not re-traversed line-by-line against PDFs in this single pass — the matrix above states exactly what was covered.

## Source files used (this pass)

| File / artefact | Role |
|-----------------|------|
| `source-materials/Statistik/Statistik/Vorlesungen/VL_03_-_Deskriptive_Stat_1.3-1.6.pdf` | Varianz **n** vs **n−1** / R `sd()` note |
| `source-materials/Statistik/Statistik/Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf` | p-Wert definition (H₁-Richtung „extremer“) |
| `docs/audits/statistik-provenance-curation-pass-1.md` | Path discipline + known gaps |
| `statistik/js/data/contentManifest.js` | Concept ↔ VL file mapping |
| `statistik/js/data/chapters.js` | Implemented fixes |

---

**Outcome:** Pass 3 is **complete** for the scoped, concept-level **source-diff hardening** described above: mismatches found against on-disk VL text in the audited slices were **fixed in `chapters.js`**, documented here, and **automated browser regression** for the included Statistik surfaces **passed**.
