# Statistik · `nichtparametrisch` — provenance decision (pass 1)

**Scope:** Decide whether **`nichtparametrisch`** (`statistik/js/data/chapters.js` concept id) can receive **defensible, file-level primary refs** in **`statistik/js/data/contentManifest.js`** using **only** the **Statistik** tree under `source-materials/Statistik/Statistik/`.  
**Date:** 2026-04-08  
**Rules:** No invented anchors; no page/slide indices; bounded pass.

---

## 1. Decision (one of two outcomes)

**Outcome:** **`nichtparametrisch` should remain explicitly empty by design** (`STATISTIK_PRIMARY_REFS_CURATED.nichtparametrisch` stays `[]`).

**Reason:** After **re-checking** the **on-disk Statistik PDFs** with **text extraction**, there is **no** course PDF that **clearly and substantively** corresponds to the portal chapter **“Nichtparametrische Tests”** (Wilcoxon, Mann–Whitney, Kruskal–Wallis, Vorzeichentests, etc.). Assigning any **`Vorlesungen/VL_*.pdf`** would **overstate** lecture coverage and would be **guessed mapping**, contrary to the curation standard in **`docs/audits/statistik-provenance-curation-pass-1.md`**.

This is **not** a claim that the **SoSe 25 course never** treated the topic elsewhere (e.g. oral emphasis, unpublished slides, or text buried in non-extractable PDF layers); it **is** a claim that **this repository’s Statistik PDF corpus**, as searchable via **`pdftotext`**, does **not** yield a **safe concept-level anchor**.

---

## 2. Portal / manifest files inspected (exact)

| File | Role |
|------|------|
| `statistik/js/data/contentManifest.js` | `STATISTIK_PRIMARY_REFS_CURATED`, `nichtparametrisch: []` |
| `statistik/js/data/chapters.js` | Concept id **`nichtparametrisch`**, title **Nichtparametrische Tests** |
| `docs/audits/statistik-provenance-curation-pass-1.md` | Prior rationale for leaving **`nichtparametrisch`** empty |
| `assets/js/module-content.js` (`statistik.roadmap`) | **No** roadmap step titles this chapter to a specific **`Vorlesungen/...pdf`** (hypothesis-testing rows point at VL_10/VL_11, not a dedicated nichtparametrische-Tests deck) |

---

## 3. Source PDFs inspected (exact methodology)

**Tooling:** `pdftotext` (poppler) to stdout, then **`grep -Ei`** with **tight** patterns (see below).  
**Root:** `source-materials/Statistik/Statistik/`

### 3.1 Full-tree scan (all `*.pdf` under the Statistik folder)

Every PDF under `source-materials/Statistik/Statistik/` was scanned for **any** of:

`Wilcoxon`, `Mann-Whitney`, `Mann Whitney`, `Kruskal-Wallis`, `Kruskal Wallis`, `nichtparametrische` + `Test`, `nicht-parametrische`, `Vorzeichentest`, `Vorzeichen-Test`, `Rangsummentest`

**Result:** **No matches** in **any** file.

### 3.2 Targeted checks (high-prior candidates)

| Path (relative to `source-materials/Statistik/Statistik/`) | Result |
|------------------------------------------------------------|--------|
| `Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf` | **One** incidental phrase: *„nichtparametrisch zu schätzen“* in a **density-estimation** context — **not** nichtparametrische **Hypothesentests**; **not** used as anchor. |
| `Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf` | No matches for nonparametric **test** vocabulary (broader `Mann` grep hits **Neymann** only). |
| `Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf` | **ANOVA** content present in text; **no** `Kruskal` / `nichtparametr` / Wilcoxon / Mann–Whitney strings in extracted text. |
| `Vorlesungen/VL_14_-_Stat_Modellierung_2.pdf` | No matches. |
| `Tutorien/Tutorium_12/*.pdf` | No matches. |
| `Tutorien/Tutorium_13/*.pdf` | No matches. |
| `Zusammenfassungen/Induktive_Statistik_III___Hypothesentests.pdf` | No matches for the tight nonparametric-test patterns. |

### 3.3 Additional check

**Separate** full-tree scan for substring **`Kruskal`** (any): **no** hits in any Statistik PDF text extraction. *(Relevant because portal **`varianzanalyse`** theory mentions Kruskal–Wallis as an alternative; that mention is **not** reflected as extractable text in the inspected VL PDFs.)*

---

## 4. Exact code / docs changes

| File | Change |
|------|--------|
| `statistik/js/data/contentManifest.js` | **Only** an **inline comment** above **`nichtparametrisch: []`** pointing to this decision doc. **No** new paths added. |
| `docs/audits/statistik-nichtparametrisch-provenance-decision-pass-1.md` | **Created** (this file). |

**Not changed:** `STATISTIK_CONTENT_MANIFEST_VERSION`, `PROVENANCE_BY_CONCEPT` shape, `FULL_EXAM_PROVENANCE`, portal **`CONTENT`** for **`nichtparametrisch`**.

---

## 5. Follow-up (outside this pass)

- If a **dedicated** VL/Tutorium PDF is **added** to `source-materials` **or** an existing PDF is **shown** to contain a **substantive** nichtparametrische-Tests section (e.g. manual slide review with **page anchors** in a future pass), **then** add **one or more** paths under **`Vorlesungen/`** or **`Tutorien/...`** using the **same relative path convention** as other concepts.
- Optional: **`platform-added-explanation`** / narrative note in manifest notes layer — **not** done here to keep the pass minimal.

---

*End of pass 1.*
