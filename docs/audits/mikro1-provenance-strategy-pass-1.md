# Mikro1 Provenance Strategy — Pass 1

## Scope

- Audit and strategy only: no code changes, no new source anchors, no content rewrites.
- Goal: describe the **current** `mikro1` provenance posture after prior work, what blocks **defensible concept-level** anchoring, and the **minimal** path to fix that later.

## Exact files inspected

- `docs/audits/source-curation-pass-2-mikro1.md`
- `mikro1/js/data/contentManifest.js`
- `assets/js/module-content.js` (searched for `mikro1` / course entry; compared pattern to `makro1`)
- `assets/js/portal-core/data/learningObjectNormalize.js` (how `primaryPathsByConceptId` becomes `source_refs`)
- `assets/js/portal-core/data/provenance.js` (`createSourceReference` path handling)
- `makro1/js/data/contentManifest.js` (reference pattern for a module with filled `*_CONCEPT_PRIMARY_REFS`)
- `source-materials/` layout and Mikro I tree (directory listing; sample file names under lecture folder)

## Current provenance state (after prior work)

### `MIKRO1_CONCEPT_PRIMARY_REFS`

- In `mikro1/js/data/contentManifest.js`, **every** concept id maps to **`[]`** (empty array), by design and documented in-file.
- Pass 2 source curation (`docs/audits/source-curation-pass-2-mikro1.md`) correctly recorded: **no anchors added** because no defensible concept→path map existed in-repo.

### `PROVENANCE_BY_CONCEPT` (runtime)

- Built via `buildProvenanceByConceptFromPrimaryRefs` with `primaryPathsByConceptId: MIKRO1_CONCEPT_PRIMARY_REFS`.
- With empty paths, **all layers that use primary refs attach `source_refs: []`** while still carrying **layer `source_status`** defaults from `DEFAULT_LAYER_SOURCE_STATUS` (e.g. theory as `source-distilled`, intuition as `platform-added-explanation`, step problems as `platform-added-drill`).
- **Important distinction:** those statuses describe **platform layering**, not **file-level course grounding**. Without non-empty `source_refs`, concept-level provenance is **not** anchored to `source-materials` files.

### Full exams

- `FULL_EXAM_PROVENANCE` already uses an honest, explicit note: benchmark-style drills, **not** verbatim archived exams; `source_refs` remain empty. This is consistent with “no fake completion.”

### `assets/js/module-content.js`

- There is **no** `mikro1` (or Mikro I) entry comparable to `makro1`’s `roadmap` / `sourceGroups` with concrete relative paths.
- Unlike `makro1`, `mikro1` therefore lacks a **second** in-repo signal (besides `chapters.js`) that could drive or cross-check concept→source mapping.

## Source-materials structure relevant to Mikro I

- Course tree exists under:
  - `source-materials/Mikroökonomik I/Mikroökonomik I/`
- Observed top-level buckets (non-exhaustive): `Vorlesungsfolien/`, `Probeklausur/`, `Weitere_Unterlagen/`, `cdf-Dateien/`, `Claude Version/`, plus macOS artifact folders `__MACOSX/` (should be ignored for provenance).
- Lecture PDFs follow a **numbered** naming scheme, e.g. `Vorlesungsfolien/Mikro_1_VL_1.pdf` … `Mikro_1_VL_18.pdf` (plus at least one extra file such as `Mikro_1_VL_5_EmpirischeElastizitaeten.pdf`).
- `Weitere_Unterlagen/` includes materials that may support **topic ordering or deep dives** (e.g. `Vorlesungsplanung_Mikroökonomik_I.pdf`, topic-specific PDFs such as Slutsky/Cobb–Douglas). Whether any single file is sufficient as a **concept-level** anchor requires **opening the PDFs** and matching headings to portal concept ids — not done in this strategy pass (audit-only).

## Blocker analysis — why concept-level provenance is not yet defensible

1. **No curated concept→primary-ref table in code**  
   `MIKRO1_CONCEPT_PRIMARY_REFS` is intentionally empty; filling it requires **human** alignment between each of the **33** concept ids and one or more **specific** source files (and ideally slide/section granularity inside PDFs if the product later needs it).

2. **No `module-content.js` roadmap for `mikro1`**  
   `makro1` can lean on a structured `roadmap` with relative paths; `mikro1` has **no** parallel artifact, so there is no authoritative, repo-checked map to copy or validate against.

3. **Portal content is not self-describing as course paths**  
   `chapters.js`, `intuition.js`, `stepProblems.js`, and `fullExams.js` are **authored pedagogy**; they do not embed stable `source-materials/...` paths. Inferring anchors from wording would be **topic-name inference** (explicitly ruled out in pass 2).

4. **Path convention differs from `makro1`**  
   `makro1` primary refs use roots like `Vorlesungen/VL_1.pdf` under the Makro I course folder. Mikro I uses `Vorlesungsfolien/Mikro_1_VL_n.pdf`. Any future map must pick a **single canonical relative root** (consistent with how the app or tooling resolves `module_slug` + `path`) and document it once to avoid silent breakage.

5. **Unicode / folder naming**  
   The course folder name contains **“Mikroökonomik I”** (Unicode). Tooling and hand-authored path strings must stay consistent (NFC/NFD, spelling) or refs will not resolve in downstream consumers.

6. **Noise folders**  
   `__MACOSX/`, duplicate “Claude Version” trees, and similar should be **excluded** from any canonical map so provenance does not point at non-authoritative copies.

## What would be required for defensible concept-level provenance

Minimal, honest pipeline:

1. **Declare a canonical source root** for Mikro I inside `source-materials` (the inner `Mikroökonomik I/Mikroökonomik I/` folder is the natural candidate).

2. **Build an explicit concept→path table** (same structural role as `MAKRO1_CONCEPT_PRIMARY_REFS`):
   - For each `chapters.js` concept id, list **1–3** primary PDFs (or other agreed primary artifacts) that **actually contain** the definitions and standard exam moves taught under that node.
   - Prefer **Vorlesungsfolien** as default primaries; add `Weitere_Unterlagen/` only where it is clearly the authoritative treatment for that concept (e.g. a dedicated handout that matches the portal section).

3. **Add a cross-check artifact in-repo** (choose one, not all):
   - **`mikro1` section in `assets/js/module-content.js`** mirroring `makro1`’s `sourceGroups` + optional `roadmap`, **or**
   - A dedicated `mikro1` source-map module (e.g. data file imported by `contentManifest.js`) **if** the team wants to keep `module-content.js` smaller.

4. **Wire `MIKRO1_CONCEPT_PRIMARY_REFS`** to that table so `buildProvenanceByConceptFromPrimaryRefs` populates non-empty `source_refs` for theory/formulas (and inherits into other layers as today).

5. **Optional refinement (later):** differentiate layer statuses where appropriate (e.g. keep `stepProblems` / `fullExams` as `platform-added-drill` even when theory refs exist) — without claiming drills are “direct-source.”

## What can already be anchored safely (without guessing)

- **Nothing at concept level** from this pass alone: assigning VL numbers to concepts requires opening materials and curating; that is **not** automatic.
- **Module-level factual inventory** (not concept anchors): the existence and naming pattern of `Vorlesungsfolien/Mikro_1_VL_*.pdf` and key supplement folders can be documented in a future `module-content.js` `mikro1` entry **as inventory only** — still **not** equivalent to per-concept `MIKRO1_CONCEPT_PRIMARY_REFS`.

## What cannot yet be anchored

- **All 33 concept ids** in `MIKRO1_CONCEPT_PRIMARY_REFS` until a curated table exists.
- **Individual full-exam items** to specific archived exam PDFs unless each item is explicitly matched to a source file (the current honest stance is “benchmark drill / style-aligned”).

## Source-map or folder-structure changes that would help future anchoring

1. **`module-content.js`: add `mikro1`** with:
   - `sourceGroups` listing real subtrees and representative files (factual),
   - optional `roadmap` entries once each block is mapped to VL PDFs by a human reader.

2. **Repository hygiene (optional but helpful):**
   - Exclude or relocate `__MACOSX/` and non-course “Claude Version” duplicates from the canonical tree **or** document them as non-authoritative so curators do not attach refs to them by mistake.

3. **Optional normalization:**
   - If the team wants paths parallel to `makro1`, add **symlinks or a thin index** (e.g. `Vorlesungen/` → `Vorlesungsfolien/`) — only if the team accepts symlink/portability tradeoffs; otherwise keep `Vorlesungsfolien/...` as the canonical relative prefix.

## Recommended next provenance step (single minimal action)

**Run a dedicated “mikro1 source curation pass 3” (or similarly named) that is only:**

1. Human reads `Vorlesungsplanung_Mikroökonomik_I.pdf` (and/or VL PDFs) to build a **topic order ↔ VL file** table.
2. Map each portal concept id to **specific** `Vorlesungsfolien/Mikro_1_VL_*.pdf` paths (plus supplements only when clearly justified).
3. Implement the map in `MIKRO1_CONCEPT_PRIMARY_REFS` and add a matching **`mikro1` block in `module-content.js`** for long-term maintainability and cross-module consistency.

Until step (1)–(2) are done, **do not** populate concept primary refs.

## Immediate safe anchor additions — possible or not?

- **Per-concept `MIKRO1_CONCEPT_PRIMARY_REFS` entries:** **Not** without the curation pass above (would require inference or blanket VL lists — both fail the “defensible / no fake” bar).
- **Broadening `FULL_EXAM_PROVENANCE` with real Klausur PDF paths:** **Only** if each exam document is explicitly matched to a specific file in `source-materials` and labeled accurately (e.g. `direct-source` vs `platform-added-drill`); not assumed in this pass.

**Explicit statement:** No immediate, safe, concept-level provenance anchor additions are justified from repository metadata alone; the next step is **human-curated mapping** from existing Mikro I files to the 33 concept ids, then implementation.
