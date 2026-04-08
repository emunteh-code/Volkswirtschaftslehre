# Full-Exam Concept Tagging Pass 1

## Scope
- Modules: `mikro1`, `makro1`, `makro2`
- Focus: add explicit full-exam concept tags only where mapping is structurally safe from existing exam organization.
- Out of scope: UI changes, broad content rewrites, wording-based guess tagging.

## Audit findings (current item structures)
- Full-exam items are composed from `wf-block` groups and `text-block` question lists.
- Safe structural anchors exist at:
  - `wf-block` group context level (single-topic groups),
  - `text-block` level (single-topic task titles/preambles),
  - and, if needed later, per-question overrides.
- Existing extraction logic consumed per-question concept tags only. This pass adds safe inheritance so coarse block/group tagging can flow to runtime questions without rewriting every question object.

## What changed

### 1) Backbone tagging inheritance (additive, behavior-preserving)
- File: `assets/js/portal-core/features/fullExam.js`
- Change:
  - For `wf-block` questions, runtime `concept_id` now resolves in this order:
    1. `question.concept_id`
    2. `question.conceptId`
    3. `group.concept_id`
    4. `group.conceptId`
    5. `aufgabe.concept_id`
    6. `aufgabe.conceptId`
  - For `text-block` questions, runtime `concept_id` resolves from:
    1. `question.concept_id`
    2. `question.conceptId`
    3. `aufgabe.concept_id`
    4. `aufgabe.conceptId`
- Why: enables coarse, safe tagging at group/block level while preserving current exam behavior and item rendering.

### 2) `mikro1` tags added
- File: `mikro1/js/data/fullExams.js`
- Added explicit `conceptId` tags:
  - `probeklausur_1`:
    - Aufgabe 1, group 1 (`1_1`-`1_3`) -> `budget`
    - Aufgabe 1, group 2 (`1_4`-`1_6`) -> `praeferenz`
    - Aufgabe 1, group 3 (`1_7`-`1_8`) -> `psubst`
    - Aufgabe 2 (`2a`-`2c`) -> `hicks`
    - Aufgabe 3 (`3a`-`3c`) -> `kosten`
    - Aufgabe 4 (`4a`-`4e`) -> `markt`
    - Aufgabe 5 (`5a`-`5c`) -> `cobbd`
    - Aufgabe 6 (`6a`-`6e`) -> `produktion`
  - `transferklausur_kompakt`:
    - Block A (`ta_1`-`ta_3`) -> `slutsky`
    - Block B (`tb_1`-`tb_2`) -> `hausopt`

### 3) `makro1` tags added
- File: `makro1/js/data/fullExams.js`
- Added optional `conceptId` support to local `textBlock(...)` builder (additive).
- Added explicit block tags:
  - `probeklausur_1`:
    - Aufgabe 2 (`m1_pk1_2a`-`m1_pk1_2c`) -> `multiplikator`
    - Aufgabe 3 (`m1_pk1_3a`-`m1_pk1_3c`) -> `geldnachfrage`
  - `probeklausur_2`:
    - Aufgabe 2 (`m1_pk2_2a`-`m1_pk2_2c`) -> `islm`
    - Aufgabe 3 (`m1_pk2_3a`-`m1_pk2_3c`) -> `realzins`
  - `probeklausur_3`:
    - Aufgabe 2 (`m1_pk3_2a`-`m1_pk3_2c`) -> `arbeitsmarkt`
    - Aufgabe 3 (`m1_pk3_3a`-`m1_pk3_3c`) -> `phillips`

### 4) `makro2` tags added
- File: `makro2/js/data/fullExams.js`
- Added optional `conceptId` support to local `textBlock(...)` builder (additive).
- Added explicit block tags:
  - `probeklausur_1`:
    - Aufgabe 2 (`pk1_2a`-`pk1_2c`) -> `wechselkurs`
    - Aufgabe 3 (`pk1_3a`-`pk1_3c`) -> `mundell_fleming`
  - `probeklausur_2`:
    - Aufgabe 2 (`pk2_2a`-`pk2_2c`) -> `barro_gordon`
    - Aufgabe 3 (`pk2_3a`-`pk2_3c`) -> `taylor_regel`
  - `probeklausur_3`:
    - Aufgabe 2 (`pk3_2a`-`pk3_2c`) -> `solow_basis`
    - Aufgabe 3 (`pk3_3a`-`pk3_3c`) -> `schuldenquote`

## Concept-tagging strategy used
- Prefer structural anchors over wording:
  - group/topic labels and task titles with single clear curriculum focus.
- Prefer coarser safe concept assignment:
  - one concept per clearly scoped block/group rather than speculative fine-grained per-question mapping.
- Do not force tags where a block intentionally mixes multiple concept families.

## Unresolved ambiguities (left intentionally untagged)
- `mikro1`:
  - `probeklausur_1` Aufgabe 1, group 4 (`1_9`-`1_20`) remains untagged.
  - Reason: mixed basket of unrelated household/duality/firm/market/monopoly statements in one group; no single safe concept anchor.
- `makro1`:
  - All `wf-block` truth/false groups remain untagged.
  - Reason: each group mixes multiple chapter concepts (e.g., VGR + goods market + money market; IS-LM + policy mix + risk premium; labor market + expectations + medium-run dynamics).
- `makro2`:
  - All `wf-block` truth/false groups remain untagged.
  - Reason: each group blends multiple open-economy or policy concepts (PPP/UIP/ZB mix; trilemma/regime/ML mix; PK/time inconsistency/Taylor mix; Solow/debt mix).

## Exact files changed
- `assets/js/portal-core/features/fullExam.js`
- `mikro1/js/data/fullExams.js`
- `makro1/js/data/fullExams.js`
- `makro2/js/data/fullExams.js`
- `docs/audits/full-exam-concept-tagging-pass-1.md`

## Risks and remaining gaps
- Coarse block-level tags are intentionally conservative; they improve extraction coverage but do not yet provide maximal per-question granularity.
- Mixed `wf-block` groups still require future structural decomposition or explicit per-question concept fields to raise coverage without guesswork.
