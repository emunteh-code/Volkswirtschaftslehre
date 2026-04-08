# Module-content parity cleanup — pass 1

**Scope:** Align `assets/js/module-content.js` with **current** repo reality for **`mikro1`** and **`mikro2`** only. Cleanup and metadata; **no** portal runtime refactors, **no** `chapters.js` / exam rewrites, **no** invented source claims.

**Date:** 2026-04-08

---

## 1. Audit: `MODULE_CONTENT` vs `assets/js/modules.js`

| Live slug (`MODULES`) | Key in `module-content.js` (before → after) |
|------------------------|-----------------------------------------------|
| `mikro1` | Present → **updated** (manifest + audit pointers) |
| `mikro2` | **Missing** → **added** (quarantine-honest stub) |
| Others | Unchanged this pass | 

**Landing / chapter estimate:** `estimateGeneratedChapterCount` uses `roadmap?.length + practice?.length` (`assets/js/generated-portal/dataFactory.js`). **`mikro2`** keeps **empty** `roadmap` / no `practice` so the count stays **0** — same as when `getModuleContent("mikro2")` returned **`null`**. Real chapter counts for the live Mikro-II portal still come from **`mikro2/js/data/chapters.js`**, not from this narrative file.

---

## 2. Parity fixes applied

### 2.1 `mikro1`

**Intent:** Reflect provenance work already in the repo (`contentManifest.js` + curation/validation audits) without rewriting the existing VL roadmap.

| Field | Change |
|-------|--------|
| `portalGoal` | One appended clause: existence of **`mikro1/js/data/contentManifest.js`** as bridge with file-relative primary refs under the Mikro I tree in `source-materials/` (wording aligned with existing ASCII “Mikrooekonomik” style in this file; manifest header uses Unicode **ö** in the path comment). |
| `qualityNotes` | **+2** bullets: (1) `MIKRO1_CONCEPT_PRIMARY_REFS` / empty `[]` where no defensible VL anchor (example **`psubst`**, per validation pass 2). (2) Pointers to **`docs/audits/mikro1-provenance-curation-pass-1.md`** and **`docs/audits/mikro1-provenance-validation-pass-2.md`**. |

**Explicitly not claimed:** Slide-level anchoring for every object; full concept coverage for **`psubst`**; equivalence between narrative `module-content.js` paths and on-disk Unicode filenames (known optional hygiene in validation pass 2).

### 2.2 `mikro2` (new block)

**Intent:** Make **quarantine / no in-repo corpus** visible wherever landing narrative reads `module-content.js`, **without** implying `direct-source` parity with `mikro1` / `makro2` / `recht`.

| Field | Content principle |
|-------|-------------------|
| `stageLabel` | States portal + **Quarantäne (Quellenlage)**. |
| `sourceMethod` | No **Mikro II** tree under `source-materials/`; live content is **not** file-anchored to repo PDFs; points to **`mikro2-quarantine-roadmap-pass-1.md`**, **`AGENTS.md`**, **`modules.js`** (`sourceCorpusInRepo: false`). |
| `coverageStatus` | **Live** and thematically advanced micro; **not** corpus-backed; **no** `contentManifest.js`. |
| `portalGoal` | Usable path until materials exist; **no** feigned source parity. |
| `audit` | Three rows: missing corpus, no manifest (by design), registry flags. |
| `sourceGroups` / `roadmap` | Empty arrays (honest: no PDF story to list). |
| `qualityNotes` | Links to **identity-resolution** + **quarantine** audits; reminder to label additions **source-distilled** / **platform-added-*** until a corpus exists. |

**Explicitly not done:** No VL roadmap prose, no PDF path lists, no `practice` array (optional chaining covers absence; matches **`mikro1`** shape).

---

## 3. Architecture doc consistency (tiny)

`docs/architecture/content-pipeline.md` still stated **`module-content.js` missing `mikro1` / `mikro2`**. Updated **three** short bullets/tables to reflect **current** state and point here.

---

## 4. Exact files changed

| File | Role |
|------|------|
| `assets/js/module-content.js` | `mikro1` tweaks; new **`mikro2`** key. |
| `docs/architecture/content-pipeline.md` | Stale “missing mikro1/mikro2” rows → current parity note. |
| `docs/audits/module-content-parity-cleanup-pass-1.md` | This audit. |

---

## 5. Remaining high-value parity (deferred)

| Item | Note |
|------|------|
| **`internationale-wirtschaftsbeziehungen`** | **Has** a `MODULE_CONTENT` entry under the **quoted** slug key (was incorrectly listed as missing here); see `docs/audits/iwb-status-parity-audit-pass-1.md`. |
| **`mikro1` path spelling** | Optional Unicode normalization for `Vorlesungsplanung_*` in prose (`mikro1-provenance-validation-pass-2.md`). |
| **Ingest Mikro II corpus** | Unblocks **`mikro2` `contentManifest.js`** and a **non-quarantine** `module-content` story — separate work. |

---

## 6. Non-goals (confirmed)

- No changes to **`mikro2/js/data/*.js`** theory or drills.
- No **`contentManifest.js`** scaffold for **`mikro2`**.
- No assertion that **`mikro2`** is **`direct-source`** against in-repo PDFs.
