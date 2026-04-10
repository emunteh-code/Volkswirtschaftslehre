# Recht Benchmark Reconstruction Pass 1

## Scope

Reconstruct `recht/` to `mikro1` benchmark standard without inventing extra doctrine beyond the actual `source-materials/Recht/` corpus.

## Benchmark Pages Inspected In `mikro1`

The benchmark extraction in this pass used strong `mikro1` concept-page patterns rather than subject-specific content:

- representative dense theory pages around household theory, optimization, and market logic in `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/js/data/chapters.js`
- representative intuition structure in `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/js/data/intuition.js`

Benchmark pattern taken from `mikro1`:

- concept pages are granular but not artificially split
- theory tabs are chunked into multiple exam-usable sections rather than one compressed summary
- intuition is concept-first and exam-facing
- right rail is dense with formal anchors, links, and mistake cues
- guided tasks teach a solution path, not just recall
- transfer tasks compress the same logic under exam pressure

## Source Materials Inspected

Primary Recht source inspection for this pass:

- `source-materials/Recht/Recht/Vorlesungen/§_1_Was_ist_Recht-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_2_Privatrecht-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_3_Juristische_Methodik-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_4_Willenserklärung,_Vertragsschluss-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_6_Verpflichtungs-_und_Verfügungsgeschäfte-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_7_Rechts-_und_Geschäftsfähigkeit-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_8_Stellvertretung-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_9_AGB-Recht-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_10_Schuldrecht_AT_-_Einführung-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_11_Schuldrecht_AT_-_Schadenersatz-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf`
- `source-materials/Recht/Recht/Übungen/SoSe2025_Einheit_1.pdf`
- `source-materials/Recht/Recht/Übungen/SoSe_5.5.2025_2._Einheit.pdf`
- `source-materials/Recht/Recht/Übungen/SoSe_2025_Einheit_3.pdf`
- `source-materials/Recht/Recht/Übungen/SoSe_2025_Einheit_4.pdf`
- `source-materials/Recht/Recht/Übungen/5._Einheit__SoSe2025__26.5.2025.pdf`
- `source-materials/Recht/Recht/Übungen/Fallskript_SoSe2025_aktualisiert.pdf`
- `source-materials/Recht/Recht/Übungen/Übersicht_Definitionen.pdf`
- `source-materials/Recht/Recht/Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf`

## Current Module Audit Before Changes

### Concept Count Before

- `recht`: `14` concepts

### Strong Existing Pieces

- The top-level map already follows the real lecture structure conservatively.
- Provenance curation is already in good shape.
- The module already uses law-appropriate, non-fake “formula” cards as doctrinal anchors.
- Several pages already have useful case logic and legal traps.

### Exact Remaining Benchmark Gaps

1. `dissens` and `anfechtung` are split in navigation but still share one authored content object in `chapters.js`.
2. `ruecktritt` and `verbraucherwiderruf` are split in navigation but still share one authored content object in `chapters.js`.
3. `dissens` and `ruecktritt` also still inherit shared step-problem banks instead of owning their own drill logic.
4. Several core law pages are still thinner than `mikro1`-benchmark pages in exam sequencing:
   - `methodik`
   - `stellvertretung`
   - `agb`
   - `schuldrecht_intro`
   - `schadensersatz`
5. The right rail is still lighter than the benchmark on some core pages because the doctrinal anchor cards are too few.
6. The module is serious, but some concept pages still read like dense summaries rather than fully staged exam-prep pages.

## Reconstruction Direction For This Pass

The reconstruction in this pass should stay honest to the lecture/exercise structure:

- keep the real `14`-concept course map unless the sources clearly justify new splits
- replace the fake shared-page splits with genuinely separate authored pages for:
  - `dissens`
  - `anfechtung`
  - `ruecktritt`
  - `verbraucherwiderruf`
- strengthen the law-module equivalents of `mikro1` richness:
  - more doctrinal sequencing
  - clearer Abgrenzungsfehler
  - stronger issue-spotting cues
  - more exam-style step chains
  - denser guided mini-cases
  - denser right-rail anchors

## Concept Count After

- `recht`: `14` concepts

The reconstruction kept the real lecture-unit map at `14 -> 14`. The source structure did not justify artificial extra concept inflation; the benchmark gap was density and separation, not missing top-level lecture blocks.

## Exact Files Changed

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/chapters.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/stepProblems.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/intuition.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/masteryData.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/conceptLinks.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht_benchmark_verify_pass1.mjs`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/recht-benchmark-reconstruction-pass-1.md`

## Exact Pedagogical Upgrades Made

### 1. Real split-page reconstruction instead of nav-only splitting

The biggest benchmark-breaking shortcut in the old module was removed:

- `dissens` no longer aliases `anfechtung`
- `anfechtung` no longer shares one combined theory page with `dissens`
- `ruecktritt` no longer aliases `verbraucherwiderruf`
- `verbraucherwiderruf` no longer shares one combined theory page with `ruecktritt`

This matters pedagogically because the source material clearly distinguishes:

- fehlende Einigung vs. nachträgliche Beseitigung eines zunächst wirksamen Geschäfts
- Leistungsstörungsrecht vs. Verbraucherschutzrecht

### 2. Methodik rebuilt to law-module benchmark density

`methodik` now teaches not only Gutachtenstil in the narrow sense, but the full exam-operating sequence:

- Anspruchsfrage
- Gutachtenstil
- `Anspruch entstanden -> untergegangen -> durchsetzbar`
- Gliederungsebenen and Tatbestand-vs-Rechtsfolge discipline

### 3. Stronger doctrinal anchors / right-rail equivalents

The strongest law pages now carry denser doctrinal anchor cards, not just summary prose:

- `methodik`: 4 anchors
- `dissens`: 4 anchors
- `anfechtung`: 4 anchors
- `agb`: 5 anchors
- `schadensersatz`: 4 anchors
- `ruecktritt`: 4 anchors
- `verbraucherwiderruf`: 4 anchors

These anchors are law-appropriate equivalents to the formula density of `mikro1`: schemes, Tatbestandsketten, Abgrenzungsweichen, and doctrinal consequence cards.

### 4. Stronger issue-spotting and Abgrenzungsfehler density

The rebuilt pages now explicitly train the most common source-backed law traps:

- `dissens` vs. `anfechtung`
- `falsa demonstratio` vs. echter Dissens
- Vertreter vs. Bote
- Offenkundigkeit vs. § 179 BGB
- Einbeziehung vs. Inhaltskontrolle in AGB
- Schuldverhältnis vs. konkreter Anspruch
- richtige Schadensersatzschiene
- Rücktritt vs. Widerruf
- Tatbestand vs. Rückgewähr-/Folgenebene

### 5. Guided drill layer reconstructed where the old module was still shared/thin

`stepProblems.js` was rebuilt so the split concepts also own distinct drills:

- new dedicated `dissens` drills
- strengthened `anfechtung` drills
- strengthened `schadensersatz` drills
- new dedicated `ruecktritt` drills
- strengthened `verbraucherwiderruf` drills

This replaced the old shared-alias behavior where:

- `dissens` borrowed `anfechtung`
- `ruecktritt` borrowed `verbraucherwiderruf`

### 6. Intuition and mastery now follow the rebuilt doctrine

The intuition and mastery layer was updated so it matches the new page logic rather than the old merged summaries. This especially improved:

- exam-sequencing cues
- doctrine-vs-folgen separation
- issue-spotting clarity
- cross-concept transfer cues

## Verification Notes

### Static integrity checks

Ran successfully:

- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/chapters.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/stepProblems.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/intuition.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/masteryData.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/conceptLinks.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/js/data/fullExams.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht_benchmark_verify_pass1.mjs`

Coverage check after reconstruction:

- `content`: no missing concepts
- `stepProblems`: no missing concepts
- `intuition`: no missing concepts
- `mastery`: no missing concepts
- `conceptLinks`: no missing concepts

### Browser verification pages

Representative benchmark pages checked in browser:

- `mikro1 / kmm / theorie`
- `mikro1 / hausopt / aufgaben`

Representative rebuilt `recht` pages checked in browser:

- `recht / methodik / theorie`
- `recht / dissens / theorie`
- `recht / anfechtung / theorie`
- `recht / stellvertretung / aufgaben`
- `recht / agb / theorie`
- `recht / schadensersatz / theorie`
- `recht / ruecktritt / theorie`
- `recht / verbraucherwiderruf / theorie`
- `recht / probeklausur_3`

Verification artifacts:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/mikro1-kmm-benchmark.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/mikro1-hausopt-aufgaben.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-methodik-theory.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-dissens-theory.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-anfechtung-theory.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-stellvertretung-aufgaben.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-agb-theory.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-schadensersatz-theory.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-ruecktritt-theory.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-verbraucherwiderruf-theory.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/recht-benchmark-reconstruction-pass-1/recht-exam-overview.png`

### Exact visible improvements confirmed

- `methodik / theorie`: `5` section blocks
- `dissens / theorie`: `4` section blocks
- `anfechtung / theorie`: `4` section blocks
- `agb / theorie`: `5` section blocks
- `schadensersatz / theorie`: `5` section blocks
- `stellvertretung / aufgaben`: `18` problem cards and `4` mastery items
- `dissens / formeln`: `4` anchor cards
- `anfechtung / formeln`: `4` anchor cards
- `agb / formeln`: `5` anchor cards
- `schadensersatz / formeln`: `4` anchor cards
- `ruecktritt / formeln`: `4` anchor cards
- `verbraucherwiderruf / formeln`: `4` anchor cards
- `probeklausur_3`: `16` visible question items, no raw render leak
- `dissens` and `anfechtung` no longer render identical content
- `ruecktritt` and `verbraucherwiderruf` no longer render identical content

## Remaining Gaps And Why They Remain

`recht` is materially closer to `mikro1`, but a small honest gap remains:

1. The exam layer is stronger than before, but it is still organized as `3` block mock exams rather than a more deeply concept-remapped exam bank.
2. Some late-page drill breadth is still source-distilled from lecture and exercise structure rather than lifted from a very large separate fall case bank.
3. The law module now matches `mikro1` in density and seriousness much more closely, but the benchmark translation is necessarily subject-adapted:
   - doctrine cards replace formula math
   - issue-spotting and Abgrenzungslogik replace graph logic

These are no longer “thin compressed summary” problems; they are the smaller residual differences between a strong law flagship and the strongest existing benchmark module.

## Explicit Judgment

`recht` is now close to `mikro1` benchmark level.

It no longer feels like a compressed doctrinal summary module. The biggest previous benchmark blocker — navigation-level splitting without real authored separation — is now closed, and the core law pages now deliver denser doctrine, stronger traps, stronger exam sequencing, and richer guided case logic in a way that is faithful to the actual Recht corpus.
