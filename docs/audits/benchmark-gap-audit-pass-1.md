# Benchmark gap audit — pass 1 (vs **mikro1**)

**Scope:** Compare listed modules to **`mikro1`** as the current **perceived quality / learning-loop** benchmark (`AGENTS.md`). **Audit only** — no code changes, no learner testing, no claim that metrics equal “learning effectiveness.”

**Date:** 2026-04-08

**Evidence:** `main.js` wiring, `renderer.js` patterns, `graphPanel.js` (`GRAPH_CONCEPTS` size), `stepProblems.js` / `intuition.js` key coverage vs `CHAPTERS`, `fullExams.js` size & shape (incl. **`canvas`** in exam items), plus **`mikro2`** quarantine metadata (`assets/js/modules.js`, `mikro2-quarantine-roadmap-pass-1.md`).

**Docs sync (pass 1, 2026-04-08):** §2.2 **makro2**, §2.3 **statistik**, §2.8 **IWB**, §3–§5 were **updated** to match the repo **after** second-wave work (**`statistik-second-wave-excellence-pass-1.md`**, **`iwb-second-wave-excellence-pass-1.md`**, **`makro2-second-wave-excellence-pass-1.md`**) and **`mikro2-status-guard-pass-2.md`**. §2.9 **mikro2** structural gaps were **re-checked** (still accurate). Full change log: **`docs/audits/docs-sync-pass-1.md`**.

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
| **Aligned (post second-wave)** | **`INTUITION`** keys match **`CHAPTERS`** (**20/20**); orphan keys and duplicate **`COURSEWORK_TASKS`** ids removed (**`makro2-second-wave-excellence-pass-1.md`**). |
| **Aligned** | **`mistakeReview`** + learner backbone wired in **`main.js`** / storage (same pattern as **makro1**). |
| **Weaker** | **Baseline `createRenderer`** (no **`enhanceRenderedSurface`** stack like **mikro1** / **ökonometrie**). |
| **Aligned** | **`contentManifest`** + curated primaries (`provenance-coverage-audit-pass-1.md`). |

**Verdict:** **Close** on graphs + drills + exams + mistake loop + intuition coherence; **partial** only on renderer depth vs **mikro1**.

---

### 2.3 **statistik**

| vs benchmark | Note |
|----------------|------|
| **Aligned (post second-wave)** | **`fullExams.js`**: two exams — expanded multi-step **`klausur_2024`** + **`klausur_transfer_wf`** (**W/F** **`wf-block`**); **`FULL_EXAM_PROVENANCE`** covers **all** exam ids (**`statistik-second-wave-excellence-pass-1.md`**). |
| **Aligned (post second-wave)** | **`INTUITION`** filled for **`z_test`**, **`zwei_stichproben`**, **`varianzanalyse`**, **`nichtparametrisch`**. |
| **Weaker** | **`nichtparametrisch`** manifest **primary refs** still **`[]`** until curated or permanently documented empty (`provenance-coverage-audit-pass-1.md`). |
| **Weaker** | No **embedded `<canvas>`** in full exams (unlike **mikro1**). |
| **Aligned** | **9** graphs, **14/14** step concepts, **`mistakeReview`**, **R**-layer via portal patterns (course type). |

**Verdict:** **Much closer** to benchmark on **exam pressure** + **intuition completeness**; **residual** gaps are **provenance** on **`nichtparametrisch`** and **exam canvas** / renderer richness vs **mikro1**.

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
| **Aligned (post second-wave)** | **`mistakeReview`** + learner backbone keys + quick/full exam mistake logging (**`iwb-second-wave-excellence-pass-1.md`**). |
| **Weaker** | **Baseline `createRenderer`** only (no **`enhanceRenderedSurface`**). |
| **Aligned** | **12/12** steps + intuition; **6** graphs; **large** `fullExams.js` (**~400** lines); manifest + provenance (`iwb-provenance-curation-pass-1.md`). |

**Verdict:** **Close** on content + exams + graphs + mistake loop; **partial** only on renderer depth vs **mikro1**.

---

### 2.9 **mikro2** ( **quarantined source** )

| vs benchmark | Note |
|----------------|------|
| **Blocked** | **No** `contentManifest.js`; **`sourceCorpusInRepo: false`** — cannot honestly expand **file-grounded** provenance or source-faithful substance without corpus (`mikro2-quarantine-roadmap-pass-1.md`). |
| **Weaker** | **`fullExams.js`** ~**78** lines — **much thinner** than **mikro1** / peers → **exam pressure realism** low. |
| **Weaker** | **`main.js`**: **no** **`mistakeReview`**, **no** **`portalBridge`**. |
| **Mixed** | **13** concepts, **13** step groups, **8** graphs; **`public_goods`** has **no** `INTUITION` entry (12/13 concepts covered). |

**Verdict:** **Blocked** for **source-backed excellence**; **weak** on **exam depth** + **learning-loop wiring** regardless of quarantine.

**Guard pass 2:** repo-wide reference inventory and contributor-facing guardrails — `docs/audits/mikro2-status-guard-pass-2.md`.

---

## 3. Classification: real weakness vs acceptable difference vs blocked

| Tag | Applies to (updated after second-wave + guard work) |
|-----|------------|
| **Real weakness** | **statistik** — **`nichtparametrisch`** empty primaries + no exam **`<canvas>`** vs **mikro1**; **mikro2** (quarantined: thin exams, no manifest/mistake bridge); **finanzwirtschaft** (graph count vs **mikro1**). |
| **Acceptable module-specific difference** | **recht** / **jahresabschluss** (no graphs); **ökonometrie** emphasis on **R** over **canvas** exams; **makro1** smaller syllabus; **IWB** / **makro2** baseline renderer without **mikro1** semantic overlay. |
| **Blocked by missing corpus** | **mikro2** **only** (Mikro II materials not in `source-materials`). |

*Historical note:* Items **statistik** (thin exams, missing intuition), **IWB** (no **`mistakeReview`**), **makro2** (orphan intuition, no **`mistakeReview`**) were **correct at original pass-1**; they are **superseded** as listed weaknesses — see **`docs/audits/docs-sync-pass-1.md`**.

---

## 4. Proximity to benchmark (summary)

| Near **mikro1** “full stack” | **oekonometrie** (renderer + density + R), **makro1** / **makro2** (exams + graphs + mistake loop + coherent intuition keys), **statistik** (exams + intuition much improved; residual provenance/canvas), **recht** / **jahresabschluss** / **finanzwirtschaft** (strong loop + exams for their type), **IWB** (loop + exams + graphs; baseline renderer). |
| Optional **depth** passes | **finanzwirtschaft** (graphs); **statistik** (**`nichtparametrisch`** curation / documented empty); **exam `<canvas>`** in chosen modules if source-justified. |
| **Blocked / quarantined** | **mikro2** (source + thin exams + no manifest until corpus). |

---

## 5. Next passes

### 5.1 Original pass-1 list (historical — largely superseded)

The numbered list in the **first** edition of this file targeted **statistik** exams/intuition, **IWB** **`mistakeReview`**, and **makro2** intuition / **`mistakeReview`**. Those items are **done** (see second-wave audits). **Do not** re-schedule them as open gaps.

### 5.2 Current high-value follow-ups (2026-04-08)

1. **`mikro2` — conditional:** **only after** corpus policy allows — **`contentManifest`**, provenance, **full exam** expansion, optional **`mistakeReview`** / **`portalBridge`**; until then quarantine copy remains (**`mikro2-status-guard-pass-2.md`**).  
2. **`statistik` · `nichtparametrisch`:** curate primaries **or** explicit permanent-empty documentation.  
3. **Optional cross-module:** **exam `<canvas>`** from **mikro1** → **statistik** / **makro2** / **IWB** only where exam-authentic.  
4. **Release planning:** consolidated priorities — **`docs/audits/release-priority-audit-pass-1.md`**.

---

## 6. Files changed (original pass + docs sync)

| File | Change |
|------|--------|
| `docs/audits/benchmark-gap-audit-pass-1.md` | **New** (original pass); **updated** **`docs-sync-pass-1`** (§2.2, §2.3, §2.8, §3–§5, §6). |

**No application code modified.**
