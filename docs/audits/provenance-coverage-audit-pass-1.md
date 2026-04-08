# Provenance coverage audit — pass 1

**Scope:** Snapshot of **runtime manifest / concept-level primary refs / full-exam honesty** for the listed live modules. **Audit only** — no manifest edits, no completion claims beyond what the repo encodes.

**Method:** Read each `js/data/contentManifest.js`; `node` import check of `*_CONCEPT_PRIMARY_REFS` vs `CHAPTERS[].id`; grep **`FULL_EXAM_PROVENANCE`** / **`source_status`**. **`mikro2`:** confirm absence of manifest + `assets/js/modules.js` quarantine metadata.

**Date:** 2026-04-08

---

## 1. Exact files inspected

| Module | Primary manifest / evidence |
|--------|-----------------------------|
| mikro1 | `mikro1/js/data/contentManifest.js`, `mikro1/js/data/chapters.js` |
| makro1 | `makro1/js/data/contentManifest.js`, `makro1/js/data/chapters.js` |
| makro2 | `makro2/js/data/contentManifest.js`, `makro2/js/data/chapters.js` |
| statistik | `statistik/js/data/contentManifest.js`, `statistik/js/data/chapters.js` |
| oekonometrie | `oekonometrie/js/data/contentManifest.js`, `oekonometrie/js/data/chapters.js` |
| recht | `recht/js/data/contentManifest.js`, `recht/js/data/chapters.js` |
| jahresabschluss | `jahresabschluss/js/data/contentManifest.js`, `jahresabschluss/js/data/chapters.js` |
| finanzwirtschaft | `finanzwirtschaft/js/data/contentManifest.js`, `finanzwirtschaft/js/data/chapters.js` |
| internationale-wirtschaftsbeziehungen | `internationale-wirtschaftsbeziehungen/js/data/contentManifest.js`, `internationale-wirtschaftsbeziehungen/js/data/chapters.js` |
| mikro2 | `mikro2/js/main.js` (no manifest import), **`mikro2/js/data/contentManifest.js` absent**, `assets/js/modules.js` (`sourceCorpusInRepo`, `sourceStatusNote`), `docs/audits/mikro2-quarantine-roadmap-pass-1.md` |

**Shared behaviour:** `buildProvenanceByConceptFromPrimaryRefs` (`assets/js/portal-core/data/learningObjectNormalize.js`) attaches **`source_refs`** from primary paths; default layer **`source_status`** values remain **`source-distilled`** / **`platform-added-*`** as configured — **non-empty refs do not by themselves mean “verbatim direct-source HTML”.**

---

## 2. Concept-level primary refs vs `CHAPTERS` (counts)

| Module | `CHAPTERS` count | Concepts with **empty** `source_refs` at file-primary level |
|--------|------------------|---------------------------------------------------------------|
| mikro1 | 33 | **1** — `psubst` (documented empty; `mikro1-provenance-validation-pass-2.md`) |
| makro1 | 14 | **0** |
| makro2 | 20 | **0** |
| statistik | 14 | **1** — `nichtparametrisch` (`STATISTIK_PRIMARY_REFS_CURATED` lists `[]`) |
| oekonometrie | 32 | **0** |
| recht | 14 | **0** |
| jahresabschluss | 15 | **0** |
| finanzwirtschaft | 16 | **0** |
| internationale-wirtschaftsbeziehungen | 12 | **0** |
| mikro2 | 13 | **N/A** — **no** `contentManifest.js`; **no** `PROVENANCE_BY_CONCEPT` in code |

---

## 3. Full-exam provenance (honesty)

| Module | Pattern |
|--------|---------|
| mikro1 | `platform-added-drill`, **`source_refs: []`**, note: benchmark-style, not verbatim archive |
| makro1 | `platform-added-drill`, **`source_refs`** point at **Klausur_2018 / Klausur_2022** PDFs as **style/context**, notes still say **not** a pasted paper |
| makro2 | `platform-added-drill`, **`source_refs: []`**, portal-authored sets |
| statistik | `platform-added-drill`, **`source_refs: []`**, note invites future archive attach |
| oekonometrie | `platform-added-drill`, **`source_refs: []`** |
| recht | `platform-added-drill`, **`source_refs: []`** (per exam id) |
| jahresabschluss | `platform-added-drill`, **`source_refs: []`** |
| finanzwirtschaft | `platform-added-drill`, **`source_refs: []`** |
| internationale-wirtschaftsbeziehungen | `platform-added-drill`, **`source_refs: []`**, no GIWB exam PDF in repo (`iwb-provenance-curation-pass-1.md`) |
| mikro2 | **No** manifest — full exams not covered by **`FULL_EXAM_PROVENANCE`** object in-repo |

**None** of the modules claim **`direct-source`** for full-exam documents in the manifests checked.

---

## 4. Completeness vs a **reasonable** standard (operational definition)

**“Manifest-complete”** here means: **`contentManifest.js`** exists, exports **`PROVENANCE_BY_CONCEPT`** driven by per-concept primary paths, **`portalBridge`** (or equivalent) exposes payload where the module uses it, and **full exams** carry an explicit **`platform-added-drill`** (or equivalent honest) stance.

**“Concept-coverage gap”** means: at least one **`CHAPTERS`** id has **empty** primary path list **without** a separate audit doc justifying it (mikro1 **`psubst`** and statistik **`nichtparametrisch`** *do* have explicit in-code `[]` — still a **coverage gap** for strict 100% file anchoring).

---

## 5. Matrix: strong / partial / blocked

| Rating | Modules | Meaning |
|--------|---------|---------|
| **Strong** | **makro1**, **makro2**, **recht**, **jahresabschluss**, **finanzwirtschaft**, **oekonometrie**, **internationale-wirtschaftsbeziehungen** | Manifest + **all** chapter ids have non-empty primary refs + honest full-exam stance in manifest. |
| **Partial** | **mikro1**, **statistik** | Manifest + **one** concept id with **intentionally empty** primaries (`psubst` / `nichtparametrisch`); otherwise aligned. |
| **Blocked / quarantined** | **mikro2** | **No** `contentManifest.js`; **`sourceCorpusInRepo: false`**; concept-level **file** provenance **not implemented** in runtime data — policy: `mikro2-quarantine-roadmap-pass-1.md`. Reference inventory: `mikro2-status-guard-pass-2.md`. |

---

## 6. Remaining provenance gaps by module (explicit)

| Module | Gap |
|--------|-----|
| **mikro1** | **`psubst`:** no VL anchor (`mikro1-provenance-validation-pass-2.md`). Slide-level refs still absent everywhere. |
| **makro1** | Full exams: contextual Klausur refs but still **drill**, not archival **`direct-source`**. |
| **makro2** | Same as makro1 for exams (`source_refs: []`). |
| **statistik** | **`nichtparametrisch`:** explicit `[]` in curated map — needs curation pass if materials support a file anchor. |
| **oekonometrie** | Large concept set: ongoing risk of **drift** without periodic re-audit vs `source-materials`; not measured in this pass. |
| **recht** | Text/CSV course: file-level refs exist; **per-paragraph** grounding not in schema. |
| **jahresabschluss** | Same file-level ceiling. |
| **finanzwirtschaft** | Same. |
| **internationale-wirtschaftsbeziehungen** | Zusatz-PDFs mostly **unmapped**; exams **no** course PDF (`iwb-provenance-curation-pass-1.md` §4). |
| **mikro2** | **Entire** manifest layer missing; quarantine until Mikro II corpus in `source-materials` (`mikro2-status-guard-pass-2.md`). |

---

## 7. Documentation cleanup (this pass)

| File | Change |
|------|--------|
| `docs/audits/provenance-coverage-audit-pass-1.md` | **New** (this document). |

**No other files changed.**

---

## 8. Suggested next audits (not executed here)

1. **statistik:** `nichtparametrisch` — confirm whether any VL/Übung PDF is a defensible primary.  
2. **mikro2:** ingest corpus → **`mikro2/js/data/contentManifest.js`** + curation pass (after quarantine lifted).  
3. **Cross-module:** optional script to fail CI when **`CHAPTERS`** id missing from `*_CONCEPT_PRIMARY_REFS` (would flag intentional empties explicitly).
