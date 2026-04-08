# Full-Exam Concept Tagging Pass 2

## Scope
- Modules: `statistik`, `oekonometrie`, `recht`, `jahresabschluss`
- Focus: add explicit full-exam `conceptId`/`concept_id` only where mapping is structurally safe.
- Out of scope: exam UI redesign, schema refactors, inferred fine-grained tagging from wording.

## Audit findings
- `recht`, `jahresabschluss`, `oekonometrie` use `aufgaben` + `text-block` / `wf-block` structures compatible with coarse block-level tagging.
- `statistik` full-exam items already carry `conceptId` at `problems[]` item level (`deskriptiv`, `testen`), but the exam data shape remains `problems`-based (not `aufgaben`), so no additional safe tagging point was needed in this pass.
- Many `wf-block` sections in all audited modules are intentionally mixed-topic; forcing one concept tag would be fake attribution.

## Changes made

### 1) `recht` tags added
- File: `recht/js/data/fullExams.js`
- Added optional `conceptId` support to local `textBlock(...)` builder.
- Added safe block-level tags:
  - `probeklausur_1`:
    - Aufgabe 2 (`re_pk1_2a`-`re_pk1_2c`) -> `willenserklaerung`
    - Aufgabe 3 (`re_pk1_3a`-`re_pk1_3c`) -> `dissens_anfechtung`
  - `probeklausur_2`:
    - Aufgabe 3 (`re_pk2_3a`-`re_pk2_3c`) -> `agb`
  - `probeklausur_3`:
    - Aufgabe 2 (`re_pk3_2a`-`re_pk3_2c`) -> `schadensersatz`
    - Aufgabe 3 (`re_pk3_3a`-`re_pk3_3c`) -> `ruecktritt_widerruf`

### 2) `jahresabschluss` tags added
- File: `jahresabschluss/js/data/fullExams.js`
- Added optional `conceptId` support to local `textBlock(...)` builder.
- Added safe block-level tags:
  - `probeklausur_1`:
    - Aufgabe 3 (`ja_pk1_3a`-`ja_pk1_3c`) -> `buchfuehrung_orga`
  - `probeklausur_2`:
    - Aufgabe 2 (`ja_pk2_2a`-`ja_pk2_2c`) -> `anlagevermoegen`
    - Aufgabe 3 (`ja_pk2_3a`-`ja_pk2_3c`) -> `umlauf_waren_ust`

### 3) `oekonometrie` tags added
- File: `oekonometrie/js/data/fullExams.js`
- Added optional `conceptId` support to local `textBlock(...)` builder.
- Added safe block-level tags where the thematic center is clear:
  - `probeklausur_1`:
    - Aufgabe 3 (`pk1_3a`-`pk1_3c`) -> `autocorrelation`
  - `probeklausur_2`:
    - Aufgabe 3 (`pk2_3a`-`pk2_3c`) -> `heteroskedasticity`

### 4) `statistik` audit result
- File inspected: `statistik/js/data/fullExams.js`
- Existing concept tags already present:
  - `fe_desk_1` -> `deskriptiv`
  - `fe_test_1` -> `testen`
- No additional concept tags were added in this pass.

## Concept-tagging strategy used
- Structural-first strategy:
  - tag only when a block title/preamble maps cleanly to one existing chapter/curriculum concept id.
- Coarsest-safe preference:
  - one concept per clearly single-focus block, no forced per-question micro-tagging.
- Explicitly no guesswork:
  - mixed-topic blocks remain untagged.

## Unresolved ambiguities (left untagged intentionally)
- `recht`:
  - `probeklausur_2` Aufgabe 2 remains untagged (mixes `geschaeftsfaehigkeit` + `stellvertretung` in one block).
  - all `wf-block` sections remain untagged (mixed methodic/topic bundles).
- `jahresabschluss`:
  - `probeklausur_1` Aufgabe 2 remains untagged (crosses `gob_inventur` and `buchen_konten`).
  - `probeklausur_3` Aufgabe 2 remains untagged (mixes `fremdkapital` + `rechnungsabgrenzung`).
  - `probeklausur_3` Aufgabe 3 remains untagged (mixes `eigenkapital` + `erfolgsrechnung`).
  - all `wf-block` sections remain untagged (mixed-topic statement sets).
- `oekonometrie`:
  - most Aufgaben remain untagged because they deliberately combine multiple curriculum concepts (e.g., matrix notation + inference, model comparison + exogeneity, prediction + covariance topics).
- `statistik`:
  - item-level tags exist, but data shape is still `problems`-based and not aligned with `aufgaben` flattening in shared full-exam module; this pass did not broaden into schema adaptation.

## Exact files changed
- `recht/js/data/fullExams.js`
- `jahresabschluss/js/data/fullExams.js`
- `oekonometrie/js/data/fullExams.js`
- `docs/audits/full-exam-concept-tagging-pass-2.md`
