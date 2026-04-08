# Benchmark gap audit — pass 1 (vs **mikro1**)

**Scope:** Compare listed modules to **`mikro1`** as the current **perceived quality / learning-loop** benchmark (`AGENTS.md`). **Audit only** — no code changes, no learner testing, no claim that metrics equal “learning effectiveness.”

**Date:** 2026-04-08

**Evidence:** `main.js` wiring, `renderer.js` patterns, `graphPanel.js` (`GRAPH_CONCEPTS` size), `stepProblems.js` / `intuition.js` key coverage vs `CHAPTERS`, `fullExams.js` size & shape (incl. **`canvas`** in exam items), plus **`mikro2`** quarantine metadata (`assets/js/modules.js`, `mikro2-quarantine-roadmap-pass-1.md`).

---

## 1. What **mikro1** encodes as benchmark (for this audit)

| Dimension | Observable in repo |
|-----------|---------------------|
| **Concept granularity** | **33** `CHAPTERS` |
| **Drill loop** | **33** concepts with **non-empty** `STEP_PROBLEMS`; **33** `INTUITION` entries |
| **Graphs** | **9** interactive concepts (`GRAPH_CONCEPTS`); `formalMath` / rich graph HTML in `graphPanel.js` |
| **Renderer depth** | **Custom** `renderer.js`: semantic markup, **`enhanceRenderedSurface`**, exam-oriented surface hooks |
| **Mistake routing** | **`mistakeReview`** passed into **`createPortalApp`** |
| **Full exams** | Large `fullExams.js` (~**332** lines); **W/F** + **text-block** structures; **embedded `<canvas>`** items for diagram tasks (**unique** among modules checked — only **`mikro1`** `fullExams.js` matches `canvas`) |
| **Boot UX** | **`loadLastId: () => null`** — forces internal overview before resume |
| **Manifest** | **`contentManifest.js`** + **`portalBridge`** |
| **Provenance gap** | **1** concept with empty file primaries: **`psubst`** (`provenance-coverage-audit-pass-1.md`) |

---

## 2. Module-by-module gap notes

### 2.1 **makro1**

| vs benchmark | Note |
|----------------|------|
| **Weaker** | **Baseline `createRenderer`** (no **`enhanceRenderedSurface`** stack like **mikro1** / **ökonometrie**). |
| **Weaker** | **7** graphs vs **9**; fewer “moving parts” per concept on average. |
| **Stronger / aligned** | **Full exams** very large (**~518** lines); **`mistakeReview`** present. |
| **Acceptable difference** | **14** concepts — naturally less total surface area than Mikro I. |

**Verdict:** **Close** on exams + loop; **partial** on renderer/graph depth vs **mikro1**.

---

### 2.2 **makro2**

| vs benchmark | Note |
|----------------|------|
| **Stronger** | **13** graph concepts (more than **mikro1**); **20/20** step coverage; **large** `fullExams.js` (**~466** lines). |
| **Weaker** | **`INTUITION`** contains **35** keys but only **20** `CHAPTERS` — **15** keys are **not** in `CHAPTERS` (legacy / dead entries; maintenance noise). |
| **Weaker** | **`main.js`** does **not** wire **`mistakeReview`** (unlike **mikro1**, **makro1**, **statistik**, …). |
| **Aligned** | **`contentManifest`** + curated primaries (`provenance-coverage-audit-pass-1.md`). |

**Verdict:** **Close** on graphs + drills + exam bulk; **second-wave** cleanup (intuition keys, **`mistakeReview`**) would tighten UX parity.

---

### 2.3 **statistik**

| vs benchmark | Note |
|----------------|------|
| **Weaker** | **`fullExams.js`** ~**36** lines — essentially **one** short exam object with **two** small step-style problems → **low exam pressure / format variety** vs **mikro1**. |
| **Weaker** | **4** `CHAPTERS` ids **without** `INTUITION`: `z_test`, `zwei_stichproben`, `varianzanalyse`, `nichtparametrisch`. |
| **Weaker** | **`nichtparametrisch`** also has **empty** manifest primaries (`provenance-coverage-audit-pass-1.md`). |
| **Aligned** | **9** graphs, **14/14** step concepts, **`mistakeReview`**, **R**-layer via portal patterns (course type). |

**Verdict:** **Farthest** from benchmark on **exam realism** + **intuition completeness**; **second-wave excellence** pass clearly high-value.

---

### 2.4 **oekonometrie**

| vs benchmark | Note |
|----------------|------|
| **Aligned** | **Same class** of **custom `renderer.js`** as **mikro1** (**`enhanceRenderedSurface`**, semantic pipeline). |
| **Aligned** | **32** concepts, **32/32** steps + intuition, **8** graphs, **large** `fullExams.js` (**~581** lines), **`mistakeReview`**, **R** practice hooks in renderer. |

**Verdict:** **Closest overall** second benchmark (**quant + coding** profile). Remaining gaps are **quality depth** (worked-example nuance, graph–exam linkage), not structural absence.

---

### 2.5 **recht**

| vs benchmark | Note |
|----------------|------|
| **Acceptable difference** | **0** graphs — **text/doctrinal** module; not expected to match **mikro1** graph density. |
| **Aligned** | **14/14** steps + intuition; **`mistakeReview`**; **large** `fullExams.js` (**~402** lines). |
| **Weaker** | No semantic renderer layer; transfer relies on **CSV/deck** authoring quality (not counted here). |

**Verdict:** **Strong** for its **modality**; comparison to **mikro1** is **domain apples-oranges** except for **exam length** and **mistake loop** (both good).

---

### 2.6 **jahresabschluss**

| vs benchmark | Note |
|----------------|------|
| **Acceptable difference** | **0** graphs (accounting narrative + numbers). |
| **Aligned** | **15/15** steps + intuition; **`mistakeReview`**; **large** `fullExams.js` (**~391** lines). |

**Verdict:** **Strong** for modality; optional second wave = more **diagram-style** scaffolds only if course materials justify.

---

### 2.7 **finanzwirtschaft**

| vs benchmark | Note |
|----------------|------|
| **Weaker** | **4** graph concepts vs **mikro1**’s **9** — fewer **visual** anchors per euro-topic. |
| **Aligned** | **16/16** steps + intuition; **`mistakeReview`**; **large** `fullExams.js` (**~378** lines); manifest present. |

**Verdict:** **Solid mid-tier**; **second-wave** could deepen **graphs** and **exam–graph** coupling (without **canvas** in exams today).

---

### 2.8 **internationale-wirtschaftsbeziehungen** (IWB)

| vs benchmark | Note |
|----------------|------|
| **Weaker** | **`main.js`** omits **`mistakeReview`** — **closed-loop mistake routing** below **mikro1** standard. |
| **Weaker** | **Baseline `createRenderer`** only (no **`enhanceRenderedSurface`**). |
| **Aligned** | **12/12** steps + intuition; **6** graphs; **large** `fullExams.js` (**~400** lines); manifest + provenance (`iwb-provenance-curation-pass-1.md`). |

**Verdict:** **Close** on content + exams + graphs; **clear UX gap** on **`mistakeReview`**.

---

### 2.9 **mikro2** ( **quarantined source** )

| vs benchmark | Note |
|----------------|------|
| **Blocked** | **No** `contentManifest.js`; **`sourceCorpusInRepo: false`** — cannot honestly expand **file-grounded** provenance or source-faithful substance without corpus (`mikro2-quarantine-roadmap-pass-1.md`). |
| **Weaker** | **`fullExams.js`** ~**78** lines — **much thinner** than **mikro1** / peers → **exam pressure realism** low. |
| **Weaker** | **`main.js`**: **no** **`mistakeReview`**, **no** **`portalBridge`**. |
| **Mixed** | **13** concepts, **13** step groups, **8** graphs; **`public_goods`** has **no** `INTUITION` entry (12/13 concepts covered). |

**Verdict:** **Blocked** for **source-backed excellence**; **weak** on **exam depth** + **learning-loop wiring** regardless of quarantine.

---

## 3. Classification: real weakness vs acceptable difference vs blocked

| Tag | Applies to |
|-----|------------|
| **Real weakness** | **statistik** (exams + intuition holes + provenance hole); **IWB** (no **`mistakeReview`**); **makro2** (dead intuition keys, no **`mistakeReview`**); **mikro2** (thin exams, missing manifest/mistake bridge); **finanzwirtschaft** (graph count). |
| **Acceptable module-specific difference** | **recht** / **jahresabschluss** (no graphs); **ökonometrie** emphasis on **R** over **canvas** exams; **makro1** smaller syllabus. |
| **Blocked by missing corpus** | **mikro2** **only** (Mikro II materials not in `source-materials`). |

---

## 4. Proximity to benchmark (summary)

| Near **mikro1** “full stack” | **oekonometrie** (renderer + density + R), **makro1** / **makro2** (exams + graphs; **makro2** needs loop cleanup), **recht** / **jahresabschluss** / **finanzwirtschaft** (strong loop + exams for their type), **IWB** (minus **`mistakeReview`**). |
| Needs **second-wave excellence** | **statistik** (highest ROI), **IWB** (**`mistakeReview`**), **makro2** (intuition cleanup + **`mistakeReview`**), **finanzwirtschaft** (optional graph depth). |
| **Blocked / quarantined** | **mikro2** (source + thin exams + no manifest). |

---

## 5. Highest-value next passes (recommended order)

1. **statistik — excellence pass:** expand **`fullExams.js`** to multi-part Klausur structure; add **`INTUITION`** for the four missing concepts; resolve **`nichtparametrisch`** provenance or document permanently empty.  
2. **IWB — wiring pass:** add **`mistakeReview`** to **`main.js`** (pattern copy from **makro1**).  
3. **makro2 — hygiene + loop:** prune or migrate **orphan `INTUITION`** keys; add **`mistakeReview`** to **`main.js`**.  
4. **mikro2 — conditional:** **only after** corpus policy allows — **`contentManifest`**, provenance, **full exam** expansion; until then, label as **platform-heavy** / quarantine in UX copy (already partly done in **`module-content.js`**).  
5. **Optional cross-module:** **exam `<canvas>` pattern** from **mikro1** → other quantitative modules (high effort; pick **makro2** / **IWB** only where figures are exam-authentic).

---

## 6. Files changed (this pass)

| File | Change |
|------|--------|
| `docs/audits/benchmark-gap-audit-pass-1.md` | **New** (this document). |

**No application code modified.**
