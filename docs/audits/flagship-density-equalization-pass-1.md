# Flagship Density Equalization Pass 1

Date: 2026-04-10

## Goal

Close the most visible remaining module-level density gaps where `makro1`, `jahresabschluss`, `finanzwirtschaft`, and `mathematik` still felt lighter than strong `mikro1` concept pages, even after the shared shell and backbone work.

## Benchmark Pages Inspected in `mikro1`

- `mikro1 / kmm`
- `mikro1 / hausopt`

These remain the internal density benchmark because they combine:

- 6 theory section blocks
- clear trap framing
- non-bare formal anchors
- dense but readable Aufgaben surfaces
- concept pages that feel complete rather than skeletal

## Exact Files Changed

- [makro1/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/data/chapters.js)
- [jahresabschluss/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/jahresabschluss/js/data/chapters.js)
- [finanzwirtschaft/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/data/chapters.js)
- [mathematik/js/data/curriculum.js](/Users/enowmunteh/Downloads/Volkswirtschaftsle-main%204/mathematik/js/data/curriculum.js)
- [.qa/flagship_density_equalization_pass1.mjs](/Users/enowmunteh/Downloads/Volkswirtschaftsle-main%204/.qa/flagship_density_equalization_pass1.mjs)
- [docs/audits/flagship-density-equalization-pass-1.md](/Users/enowmunteh/Downloads/Volkswirtschaftsle-main%204/docs/audits/flagship-density-equalization-pass-1.md)

## Modules / Pages Upgraded

### `makro1`

- `islm`
- `islmpc`

### `jahresabschluss`

- `rueckstellungen`
- `rechnungsabgrenzung`
- `erfolgsrechnung`

### `finanzwirtschaft`

- `wacc`
- `wacc_leverage`
- `modigliani_miller`
- targeted reinforcement in `fremdkapitalkosten`

### `mathematik`

- `exp_log_inverse`
- `univariate_optimierung`
- `analysis_multivariat`

## Exact Density Improvements Made

### `makro1`

#### `islm`

- expanded theory from a compact 3-block page to a 5-block page
- added explicit `Verschiebung versus Bewegung` pedagogy
- added explicit policy-comparison / medium-run bridge
- added new trap framing on movement-vs-shift confusion
- added a third formula support card for policy-shock reading
- added two more exam-facing tasks

#### `islmpc`

- expanded theory from 3 to 5 section blocks
- added explicit real-chain pedagogy:
  - Produktionslücke -> Arbeitslosigkeit -> Inflation -> Realzins -> Rückkehr
- added time-axis / short-run vs medium-run reading guidance
- added explicit nominal-vs-real-rate trap framing
- added a third formula card for the adjustment chain
- added two more policy-transfer / exam-path tasks

### `jahresabschluss`

#### `rueckstellungen`

- expanded theory from 3 to 5 section blocks
- added clearer `Rückstellung vs Verbindlichkeit vs RAP` distinction logic
- added consequence-chain framing from Ansatz to Folgejahr and Erfolgswirkung
- added a third formula/checklist anchor
- added two stronger accounting-effect drills

#### `rechnungsabgrenzung`

- expanded theory from 3 to 5 section blocks
- added four-field RAP decision logic
- added clearer payment-timing -> Abschlusswirkung pedagogy
- added an extra warning on false RAP classification
- added a third formula/checklist anchor
- added two stronger exam-style case prompts

#### `erfolgsrechnung`

- expanded theory from 3 to 5 section blocks
- added principle -> booking -> statement-effect framing
- added stronger GKV/UKV exam-comparison logic
- added a third formula/bridge card
- added two stronger statement-effect drills

### `finanzwirtschaft`

#### `wacc`

- expanded theory from 3 to 5 section blocks
- added explicit method-selection pedagogy:
  - when WACC fits
  - when project-specific risk breaks naive WACC use
- added a third formula card
- added two stronger decision-oriented tasks

#### `wacc_leverage`

- expanded theory from 3 to 5 section blocks
- added positive-vs-negative-hedge logic
- added explicit bridge to WACC / capital-structure reading
- added a third formula card for sign-discipline (`Spannendiagnose`)
- added two stronger exam-facing leverage tasks

#### `modigliani_miller`

- thickened a page that was still too benchmark-light
- added explicit value-neutrality vs return-neutrality clarification
- added a third formula support card
- added two stronger benchmark-vs-real-world transfer tasks

#### `fremdkapitalkosten`

- added one extra theory chunk on period base, sign discipline, and comparison rates
- added one extra warning on annualization / unit mistakes
- added one extra task on period-basis reading before interpretation

### `mathematik`

#### `exp_log_inverse`

- expanded theory with domain/monotonicity/invertibility staging
- added stronger recognition cues for equation and graph types
- added extra warning on invalid inverse-function reasoning
- added extra formula support for basis change
- added two stronger solving tasks

#### `univariate_optimierung`

- expanded theory with candidate-list and signal-word pedagogy
- added stronger second-derivative-limit warning
- added explicit sign-test formal anchor
- added two stronger exam-useful drills

#### `analysis_multivariat`

- expanded theory with gradient / level-line reading support
- added clearer “which derivative answers which question?” staging
- added extra gradient-interpretation warning
- added a new gradient formal anchor
- added two stronger reading / interpretation tasks

## Browser Verification Performed

Verification runner:

- [/.qa/flagship_density_equalization_pass1.mjs](/Users/enowmunteh/Downloads/Volkswirtschaftsle-main%204/.qa/flagship_density_equalization_pass1.mjs)

Artifacts:

- [/.qa/flagship-density-equalization-pass-1](/Users/enowmunteh/Downloads/Volkswirtschaftsle-main%204/.qa/flagship-density-equalization-pass-1)

Representative verified benchmark results:

- `mikro1 / kmm / theorie`: 6 section blocks
- `mikro1 / hausopt / theorie`: 6 section blocks
- `mikro1 / hausopt / aufgaben`: 12 problem cards

Representative upgraded-page verification:

- `makro1 / islm / theorie`: 5 sections, 4 warn boxes
- `makro1 / islm / formeln`: 3 formula cards
- `makro1 / islm / aufgaben`: 18 problem cards
- `makro1 / islmpc / theorie`: 5 sections, 3 warn boxes
- `makro1 / islmpc / formeln`: 3 formula cards
- `makro1 / islmpc / aufgaben`: 18 problem cards
- `jahresabschluss / rueckstellungen / theorie`: 5 sections
- `jahresabschluss / rechnungsabgrenzung / theorie`: 5 sections
- `jahresabschluss / erfolgsrechnung / theorie`: 5 sections
- all three sampled `jahresabschluss` pages now show 3 formula cards and 18 problem cards
- `finanzwirtschaft / wacc / theorie`: 5 sections
- `finanzwirtschaft / wacc / formeln`: 3 formula cards
- `finanzwirtschaft / wacc / aufgaben`: 18 problem cards
- `finanzwirtschaft / wacc_leverage / theorie`: 5 sections
- `finanzwirtschaft / wacc_leverage / formeln`: 3 formula cards
- `finanzwirtschaft / wacc_leverage / aufgaben`: 18 problem cards
- `finanzwirtschaft / modigliani_miller / theorie`: 5 sections
- `finanzwirtschaft / modigliani_miller / formeln`: 3 formula cards
- `finanzwirtschaft / modigliani_miller / aufgaben`: 18 problem cards
- `mathematik / exp_log_inverse / theorie`: 7 sections, 4 warn boxes
- `mathematik / exp_log_inverse / formeln`: 5 formula cards
- `mathematik / exp_log_inverse / aufgaben`: 20 problem cards
- `mathematik / univariate_optimierung / theorie`: 7 sections, 4 warn boxes
- `mathematik / univariate_optimierung / formeln`: 4 formula cards
- `mathematik / univariate_optimierung / aufgaben`: 20 problem cards
- `mathematik / analysis_multivariat / theorie`: 7 sections, 4 warn boxes
- `mathematik / analysis_multivariat / formeln`: 5 formula cards
- `mathematik / analysis_multivariat / aufgaben`: 20 problem cards

Final verifier result:

- `failures: []`

## Exact Remaining Weak Pages and Why They Remain

These are no longer release-blocking pages, but they are still the clearest next-tier density candidates after this pass.

### `makro1`

- `politikmix`
  - still sits at 3 theory sections and 2 formula cards in spot-checking
  - still lighter than the now-upgraded `islm` / `islmpc` pair
  - next gap: policy comparison density and exam phrasing
- `erwartungen`
  - still at 3 theory sections and 2 formula cards
  - still more summary-like than flagship-level
  - next gap: credibility / announcement / timing distinctions need one more layer

### `jahresabschluss`

- `inventur_inventar_bilanzansatz`
  - still at 3 theory sections and 2 formula cards
  - next gap: stronger principle -> booking -> statement-effect bridge
- `verbindlichkeiten`
  - still at 3 theory sections and 2 formula cards
  - next gap: stronger distinction traps and follow-through accounting consequences

### `finanzwirtschaft`

- `bezugsrecht`
  - still at 3 theory sections and 2 formula cards
  - next gap: stronger dilution / ex-rights reading and sign discipline
- `eigenkapitalkosten`
  - improved enough not to be weak overall, but still only 4 theory sections and 2 formula cards
  - next gap: stronger method-selection and interpretation density

### `mathematik`

- no single sampled page remained an obvious flagship blocker after this pass
- the remaining `mathematik` gap is now less page thinness and more module-level concept granularity
- some earlier pages like `algebra_mengen` and `lineare_algebra_grundlagen` are acceptable at 5 theory sections and 4 formula cards, but still not as layered as the strongest `lagrange` / `integralrechnung` / newly upgraded pages

## Explicit Judgment

Yes: the four target modules now feel materially closer to flagship level.

What changed in product terms:

- `makro1` no longer drops sharply in density once the student leaves the best early graphs and enters medium-run linkage pages
- `jahresabschluss` now has sampled pages that teach accounting consequence chains rather than stopping at compressed doctrine
- `finanzwirtschaft` no longer thins out as visibly in the WACC / leverage / MM cluster
- `mathematik` continues to close the old “support module” feel and now presents much denser, more exam-useful pages in the previously weak analytical areas

What remains true:

- the modules are materially closer to `mikro1`, but not identical
- the remaining differences are narrower and page-specific, not broad “second-tier module” failures
- the next worthwhile pass, if needed, should hit the exact remaining weak pages listed above rather than reopen these upgraded pages
