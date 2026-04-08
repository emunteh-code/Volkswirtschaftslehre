# Internationale Wirtschaftsbeziehungen (IWB) — provenance strategy — pass 1

**Scope:** Audit-only strategy. **No** new anchors in code, **no** `contentManifest.js`, **no** `chapters.js` / exam rewrites. Goal: state what is needed for **defensible concept-level** provenance aligned with **`source-materials/`** and existing **portal-core** conventions.

**Date:** 2026-04-08

**Follow-up:** **`docs/audits/iwb-provenance-curation-pass-1.md`** implements **`contentManifest.js`**, primary refs, and **`portalBridge`**; this strategy doc remains the **pre-implementation** analysis.

---

## 1. Exact files inspected

| Path | Purpose |
|------|---------|
| `internationale-wirtschaftsbeziehungen/js/data/chapters.js` | **`CHAPTERS`** (12 concept ids), **`CONTENT`** shape |
| `internationale-wirtschaftsbeziehungen/js/data/courseConfig.js` | Slug, labels, storage keys |
| `internationale-wirtschaftsbeziehungen/js/main.js` | **`createPortalApp`** + **`portalBridge`** (post-**`iwb-provenance-curation-pass-1`**) |
| `internationale-wirtschaftsbeziehungen/js/data/fullExams.js` | **`FULL_EXAMS`** (probe-style sets; no embedded provenance) |
| `internationale-wirtschaftsbeziehungen/js/data/stepProblems.js` | Drill payloads (no source refs) |
| `internationale-wirtschaftsbeziehungen/js/data/intuition.js` | Intuition layer (no source refs) |
| `internationale-wirtschaftsbeziehungen/js/data/conceptLinks.js` | Cross-links only |
| `internationale-wirtschaftsbeziehungen/js/ui/graphPanel.js` | **`GRAPH_CONCEPTS`** (6 ids) |
| `assets/js/module-content.js` | **`"internationale-wirtschaftsbeziehungen"`** narrative: `roadmap` ↔ `Vorlesungsfolien/IntWB1.pdf` … `IntWB12.pdf` |
| `mikro1/js/data/contentManifest.js` | Reference **target pattern**: `*_PRIMARY_REFS_CURATED`, `buildProvenanceByConceptFromPrimaryRefs`, bridge payload |
| `assets/js/portal-core/data/learningObjectNormalize.js` | **`DEFAULT_LAYER_SOURCE_STATUS`**, `buildProvenanceByConceptFromPrimaryRefs` behaviour |
| `assets/js/portal-core/data/provenance.js` | **`createSourceReference`**, **`createProvenance`** |
| `docs/audits/iwb-status-parity-audit-pass-1.md` | Module vs manifest tier; **`source-materials`** root |
| `docs/audits/mikro1-provenance-strategy-pass-1.md` | Template for “blockers / safe vs not” structure |
| `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/` | Directory listing + `find … *.pdf` |

**Grep:** `source_status`, `provenance`, `direct-source` under `internationale-wirtschaftsbeziehungen/` → **no matches** (runtime provenance **not** wired in module JS today).

---

## 2. Current platform provenance conventions (relevant slice)

1. **Manifest modules** export a **per-concept** map of **primary paths** (strings relative to a documented course root), e.g. `Vorlesungsfolien/IntWB3.pdf`.
2. **`buildProvenanceByConceptFromPrimaryRefs`** attaches those paths as **`source_refs`** on layers (**motivation**, **theory**, **formulas**, **tasks**, and optionally **intuition** / **graph** / **stepProblems** when flags say those layers exist). Default **`source_status`** values are **`source-distilled`** for theory-like layers and **`platform-added-*`** for drills/graph/intuition — **having refs does not automatically mean `direct-source`** unless a future policy changes **`statusByLayer`** per module.
3. **`createSourceReference`** normalizes **`ref_id`** from the path string; **Unicode** in paths must match what authors type in the map.
4. **Full exams** elsewhere are often labeled **`platform-added-drill`** with empty refs unless matched to a real archived exam file.

---

## 3. Source corpus inventory (in-repo)

**Canonical inner root** (same as `iwb-status-parity-audit-pass-1.md`):

`source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/`

**Vorlesungsfolien (12 files, complete set):**  
`IntWB1.pdf` … `IntWB12.pdf`

**Zusätzliche_Literatur (observed):**  
`Brülhart_WE2009.pdf`, `GlobalTradeOutlook_Okt2024.pdf`, `GlobalTradeOutlook_Okt2025.pdf`, `Literaturhinweise_VL6.pdf`, `Literaturhinweise_VL7.pdf`, `State_of_U.S._Tariffs_…_Yale.pdf`, `US-China_Trade_War_Tariffs_…_PIIE.pdf`, `World_Trade_Statistical_Review_2023.pdf`

**Exam / Probeklausur PDFs:** **None** found under this tree via filename search (`*klausur*`, `*prob*`). Therefore **`fullExams.js`** content **cannot** be honestly anchored to an in-repo **archived exam PDF** without adding materials or changing claims.

---

## 4. Concept ↔ lecture PDF alignment (hypothesis, not yet text-verified)

The landing narrative in **`module-content.js`** already asserts a **1:1** mapping between the **12** roadmap blocks and **IntWB1–IntWB12**. **`chapters.js`** has **12** concept ids in the **same didactic order** (Handel → Politik → offene Makro). The **working hypothesis** for a future curation pass:

| Concept id (`chapters.js`) | Primary VL PDF (under `Vorlesungsfolien/`) |
|----------------------------|---------------------------------------------|
| `handelsfakten` | `IntWB1.pdf` |
| `ricardo` | `IntWB2.pdf` |
| `heckscher_ohlin` | `IntWB3.pdf` |
| `krugman` | `IntWB4.pdf` |
| `tarifmodell` | `IntWB5.pdf` |
| `quoten_sanktionen` | `IntWB6.pdf` |
| `wto_integration` | `IntWB7.pdf` |
| `wechselkurssysteme` | `IntWB8.pdf` |
| `paritaeten` | `IntWB9.pdf` |
| `monetaerer_ansatz` | `IntWB10.pdf` |
| `overshooting` | `IntWB11.pdf` |
| `trilemma` | `IntWB12.pdf` |

**This table is not “verified” in this pass** (no `pdftotext` / title-page extraction). It is **strongly suggested** by repo alignment but remains **curator work** — same epistemic standard as **`mikro1-provenance-curation-pass-1.md`**.

**Secondary refs (optional, chapter-specific):** e.g. **`krugman`** may warrant **`Zusätzliche_Literatur/Brülhart_WE2009.pdf`** **only after** confirming the VL or portal section treats it as a primary reading ( **`module-content.js`** already lists it for that roadmap item). Policy PDFs in **Zusätzliche_Literatur** should **not** be blanket primaries for whole chapters without line-by-line justification.

---

## 5. What can already be anchored **safely** (after minimal verification)

| Layer / artifact | Safe anchor? | Condition |
|------------------|--------------|-----------|
| **Theory / motivation / formulas** (per concept) | **Yes**, at **file level** (one VL PDF per concept) | Run a **short verification pass** on each **IntWBn.pdf** (title slide / outline vs portal section titles). Fix any mismatch before locking the map. |
| **Tasks** inside `CONTENT` | **Partially** | Same primary PDF as the chapter **if** tasks are clearly VL-derived; if authored de novo, keep **`platform-added-drill`** even if refs are copied from the chapter ref (refs = “topic context”, not “verbatim source”). |
| **Intuition** (`intuition.js`) | **Usually not** as `direct-source` | Treat as **`platform-added-explanation`** unless each card is traced to a specific slide/paragraph. |
| **Step problems** | **Usually `platform-added-drill`** | Same as **mikro1**: drills can track the **topic** via shared refs without claiming the PDF contains the exact question. |
| **Graphs** (`graphPanel.js`, 6 concepts) | **Illustrative** | Default **`platform-added-explanation`**; diagrams may follow VL logic without being reproductions of a specific figure. |
| **Full exams** | **Not** to a course PDF in-repo today | No matching Klausur PDF found; use **`platform-added-drill`** + honest notes (mirror **`FULL_EXAM_PROVENANCE`** pattern in **`mikro1`**). |

---

## 6. What **cannot** yet be anchored (without more work)

1. **Per-question exam provenance** — no archived exam files identified in **GIWB** tree.  
2. **Slide-level or equation-level refs** — not supported by current helper (paths are file-level only); would need notes or a later schema extension.  
3. **Automatic mapping from HTML copy** — inferring PDFs from wording in **`chapters.js`** alone is **not** defensible (same rule as **mikro1** strategy).  
4. **Some Zusatz-PDFs → specific paragraphs** — requires reading PDFs and portal side-by-side; do not assign as primary “covering” refs without that.  
5. **Unicode path consistency** — on-disk folder **`Zusätzliche_Literatur`** vs ASCII **`Zusaetzliche_Literatur`** in **`module-content.js`**: the manifest must use the **actual** relative segments the repo stores.

---

## 7. Structural / module changes **before** a full runtime provenance pass

To match **mikro1**-style **runtime** provenance (not just a spreadsheet or audit doc):

1. Add **`internationale-wirtschaftsbeziehungen/js/data/contentManifest.js`** exporting at least:  
   curated **`IWB_CONCEPT_PRIMARY_REFS`** (or equivalent name), **`PROVENANCE_BY_CONCEPT`**, **`buildIwbModeIndex`** / **`getIwbContentManifestBridgePayload`** following **`mikro1`**’s imports from **`portal-core`**.  
2. Extend **`courseConfig.js`** with a **`contentManifestVersion`** (or equivalent) if the module adopts the same versioning pattern as other manifest modules.  
3. Wire **`main.js`** (and optionally **`index.html`** script order) so the **content manifest bridge** is registered the same way as **mikro1** / **makro2** (compare those **`main.js`** files).  
4. Decide **`statusByLayer`** for IWB: whether **theory** becomes **`direct-source`** when non-empty refs exist, or stays **`source-distilled`** with refs for traceability only (team policy; **AGENTS.md** discourages notation/substance drift, not necessarily “always direct-source”).  
5. **`portalHub.js` / devtools bridge:** ensure **`getModuleContent`** + future manifest do not contradict each other (narrative vs machine payload).

Until steps **1–3** exist, **no** amount of PDF reading updates **runtime** badges or **`window.__…ContentManifest`**.

---

## 8. Exact provenance blockers (summary)

| Blocker | Detail |
|---------|--------|
| **No manifest file** | Cannot emit **`PROVENANCE_BY_CONCEPT`** in the standard pipeline. |
| **No PDF text verification yet** | The 12× IntWB mapping is **hypothesis**, not audited against slide titles. |
| **No exam PDFs in tree** | **`FULL_EXAMS`** cannot claim archive-backed **`direct-source`**. |
| **Layer heterogeneity** | Intuition, graphs, step drills need **explicit** status discipline separate from VL primaries. |
| **Path encoding** | **`Zusätzliche_Literatur`** spelling must match filesystem for **`createSourceReference`**. |

---

## 9. Recommended **next** provenance step (single clearest action)

**Step A (low risk, can start immediately):** Author **`docs/audits/iwb-provenance-curation-pass-1.md`** (or similarly named) that:  

- extracts **title / outline** cues from each **`IntWB1.pdf`–`IntWB12.pdf`** (e.g. `pdftotext` + manual check),  
- confirms or corrects the **concept ↔ IntWBn** table in §4 above,  
- records **empty** primary refs for any concept if a future split/merge breaks 1:1,  
- lists **optional secondaries** per concept (e.g. **Brülhart** for **`krugman`**) only with evidence.

**Step B (after A):** Implement **`contentManifest.js`** + **main.js** bridge using the **approved** table; set **`FULL_EXAM_PROVENANCE`** honestly to **`platform-added-drill`**.

---

## 10. Is an **immediate** safe curation pass possible?

| Kind of pass | Possible now? |
|--------------|----------------|
| **Documentation-only** curation (audit markdown + PDF checks) | **Yes** — does not require code. |
| **Runtime manifest + non-empty `source_refs`** | **No** — requires **§7** structural work first. |
| **Claiming full “concept-level direct-source” for every HTML block** | **No** — file-level is the defensible ceiling initially; inner HTML is still **distilled** unless proven otherwise. |

---

## 11. Relation to other audits

| Document | Role |
|----------|------|
| `iwb-status-parity-audit-pass-1.md` | Module tier, quoted **`module-content.js`** key, no manifest today |
| `mikro1-provenance-curation-pass-1.md` / `mikro1-provenance-validation-pass-2.md` | **Worked example** of VL-based curation + validation depth |
| This file | **Strategy** for IWB before coding |

---

## 12. Code changes in this pass

**None** (audit/strategy only).
