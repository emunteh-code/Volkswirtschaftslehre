# Recht Concept Granularity Audit Pass 1

## Scope
- Module: `recht` only.
- Focus: concept-map granularity only (no broad content rewrite).
- Benchmark lens: `mikro1` visible granularity standard.
- Method: compare current `recht` concept map to source-grounded lecture/tutorial structure and exam-relevant doctrinal work units.

## Exact files inspected

### Portal/module files
- `recht/js/data/chapters.js`
- `recht/js/data/stepProblems.js`
- `recht/js/data/conceptLinks.js`
- `recht/js/data/intuition.js`
- `recht/js/data/masteryData.js`
- `recht/js/data/fullExams.js`

### Source-grounding files opened
- `source-materials/Recht/Recht/Vorlesungen/§_3_Juristische_Methodik-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_8_Stellvertretung-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf`
- `source-materials/Recht/Recht/Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf`

### Supporting audit context
- `docs/audits/recht-content-enrichment-pass-1.md`
- `docs/audits/recht-content-enrichment-pass-2.md`
- `mikro1/js/data/chapters.js` (benchmark granularity reference)

## Current concept count
- `recht`: **12** concepts (`CHAPTERS` entries).
- `mikro1` benchmark: **33** concepts.

Interpretation: `recht` is materially coarser than `mikro1`, but law modules should not be split by count pressure alone. Splits should follow doctrinally independent exam work units.

## Broad concepts identified (granularity-relevant)

1. `dissens_anfechtung` (too broad, high confidence)
- Currently bundles two distinct exam pipelines:
  - Dissens (Konsensfrage, §§ 154/155, Vertragsschlussfrage),
  - Anfechtung (Anfechtungsgrund, Erklärung, Frist, ex-tunc + § 122).
- Source grounding:
  - `§_5_Dissens_und_Anfechtung-K.pdf` clearly separates Dissens and Anfechtung blocks and their distinct logic chains.
- Diagnosis:
  - **Granularity problem**, not only depth.

2. `ruecktritt_widerruf` (too broad, high confidence)
- Currently bundles:
  - Rücktritt als Leistungsstörungsrecht (§§ 323/326/346, Frist- und Störungslogik),
  - Verbraucherwiderruf als Verbraucherschutzrecht (§ 355 + Vertragstyp-/Personenvoraussetzungen, Fristregime).
- Source grounding:
  - `§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf` presents these as separate schema tracks with different triggers.
- Diagnosis:
  - **Granularity problem**, not only depth.

3. `willenserklaerung` (borderline broad candidate)
- Currently combines:
  - Grundlagen der Willenserklärung,
  - Vertragsschluss (Angebot/Annahme/Zugang).
- Source/teaching reality:
  - These are closely coupled and often taught as one continuous early-contracts unit.
- Diagnosis:
  - Mostly **depth/distribution** issue at current map size; split is optional, not mandatory in pass 1.

## Thinness check: depth vs granularity
- No concept appears fake-thin or cosmetically split.
- `was_ist_recht`, `privatrecht`, `geschaeftsfaehigkeit`, `stellvertretung`, `agb`, `schuldrecht_intro`, `schadensersatz` are substantial enough to remain standalone.
- Main residual thinness issue is **drill density and chain depth** inside concepts, not concept-ID architecture.

## Recommended conservative splits (academically real, pedagogically useful)

### Mandatory for pass 1 implementation (if requested)
1. `dissens_anfechtung` ->
   - `dissens`
   - `anfechtung`

2. `ruecktritt_widerruf` ->
   - `ruecktritt`
   - `verbraucherwiderruf`

Why mandatory:
- each side of both pairs has distinct legal trigger logic, distinct norm anchors, and distinct exam trap profiles.

### Optional (defer unless later evidence shows navigation friction)
3. `willenserklaerung` ->
   - `willenserklaerung_grundlagen`
   - `vertragsschluss`

Why optional only:
- doctrinally real, but currently still pedagogically coherent as one entry-level block; forcing it now risks over-fragmentation.

## Proposed concept count after conservative mandatory splits
- Current: **12**
- Recommended mandatory net additions: **+2** (two 1->2 splits)
- Proposed after pass: **14**

## Concepts that should remain unsplit (and why)
- `methodik`: broad but coherent method spine (Anspruchsfrage, Gutachtenstil, Subsumtion) tightly integrated in exam writing workflow.
- `privatrecht`: orientation concept; splitting now would be mostly cosmetic taxonomy.
- `trennung_abstraktion`: single doctrinal core where separation itself is the unit.
- `geschaeftsfaehigkeit`: coherent Minderjährigen-/Fähigkeitslogik block.
- `stellvertretung`: already a stable doctrinal unit with internal sequencing (eigene WE, fremder Name, Vertretungsmacht, § 179 branch).
- `agb`: coherent inclusion/control workflow in one practical chain.
- `schuldrecht_intro`: intentional bridge concept into Leistungsstörungsrechte.
- `schadensersatz`: currently coherent as one schema family; further split would be premature in pass 1.

## Recommendation
- If implementation is requested, execute only the two high-confidence splits:
  - `dissens_anfechtung` -> `dissens` + `anfechtung`
  - `ruecktritt_widerruf` -> `ruecktritt` + `verbraucherwiderruf`
- Do not split further in this pass.
- After implementation, run a check pass on:
  - thinness of newly split nodes,
  - drill uniqueness and trap coverage separation between the new pairs.
