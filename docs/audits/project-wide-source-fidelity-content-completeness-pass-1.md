# Project-Wide Source-Fidelity & Content-Completeness Pass 1

## Scope

- Mission: audit the live portal against the actual in-repo course sources wherever those sources exist, correct trust-critical source mismatches, and explicitly classify non-auditable modules.
- This pass is **not** a styling or wording pass.
- Method in this pass:
  - completed a fresh `source-materials/` inventory in the fixed order requested
  - inspected live module manifests / chapter data / graph files
  - used existing module-level source audits as backlog evidence
  - re-opened actual Makro I source PDFs in the highest-risk distortion zone and corrected the live portal there
- Important honesty note: this pass does **not** claim that every PDF in every source folder was re-read end-to-end inside one turn. Trust labels below are therefore conservative.

## Audit corpus consulted

- `docs/audits/mikro1-provenance-validation-pass-2.md`
- `docs/audits/makro1-source-grounded-audit-pass-1.md`
- `docs/audits/makro2-source-grounded-audit-pass-1.md`
- `docs/audits/makro2-provenance-curation-pass-1.md`
- `docs/audits/statistik-source-grounded-audit-pass-1.md`
- `docs/audits/statistik-provenance-curation-pass-1.md`
- `docs/audits/oekonometrie-source-grounded-audit-pass-1.md`
- `docs/audits/finanzwirtschaft-source-grounded-audit-pass-1.md`
- `docs/audits/jahresabschluss-source-grounded-audit-pass-1.md`
- `docs/audits/recht-provenance-curation-pass-1.md`
- `docs/audits/iwb-provenance-curation-pass-1.md`
- `docs/audits/mathematik-benchmark-reconstruction-pass-1.md`
- `docs/audits/mathematik-concept-granularity-pass-1.md`
- `docs/audits/mathematik-concept-page-benchmark-closure-pass-1.md`
- `docs/audits/mathematik-aufgaben-solving-closure-pass-1.md`
- `docs/audits/mathematik-aufgaben-density-pass-2.md`

## Exact files changed

- [makro1/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/data/chapters.js)
- [makro1/js/data/stepProblems.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/data/stepProblems.js)
- [makro1/js/ui/graphs.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/graphs.js)
- [.qa/project_wide_source_fidelity_content_completeness_pass1.mjs](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/project_wide_source_fidelity_content_completeness_pass1.mjs)
- [docs/audits/project-wide-source-fidelity-content-completeness-pass-1.md](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/docs/audits/project-wide-source-fidelity-content-completeness-pass-1.md)

## A. Source basis by module

| Module | Live status | Exact source path or repo source used | Source status | Auditability |
| --- | --- | --- | --- | --- |
| `mikro1` | live | `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/`, `mikro1/js/data/contentManifest.js`, `docs/audits/mikro1-provenance-validation-pass-2.md` | full | full |
| `makro1` | live | `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_1.pdf`, `VL_3.pdf`, `VL_5.pdf`, `Kap6.pdf`, `VL_7.pdf`, `VL_8.pdf`, `Zusammenfassungen/Makro I VL5.pdf`, `Makro I VL6.pdf`, `Makro I VL8.pdf`, `Übungen/Übung5.pdf`, `Tutorium/Tutorienblatt_6_Makro_1.pdf` | full | full |
| `makro2` | live | `source-materials/Makroökonomik II/Makroökonomik II/Folien/`, `Handout/`, `Übungen/`, `Tutorien/`, `makro2/js/data/contentManifest.js`, `docs/audits/makro2-source-grounded-audit-pass-1.md` | full | full |
| `statistik` | live | `source-materials/Statistik/Statistik/Vorlesungen/`, `Tutorien/`, `Zusammenfassungen/`, `R-Vorkurs.pdf`, `statistik/js/data/contentManifest.js`, `docs/audits/statistik-source-grounded-audit-pass-1.md` | full | full |
| `oekonometrie` | live | `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/Lecture_Einführung_in_die_Ökonometrie/`, `Exercises_Einführung_in_die_Ökonometrie_Übung/`, `Tutorial_Einführung_in_die_Ökonometrie_Tutorium/`, `oekonometrie/js/data/contentManifest.js`, `docs/audits/oekonometrie-source-grounded-audit-pass-1.md` | full | full |
| `finanzwirtschaft` | live | `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V1_StudIP.pdf` ... `V12_StudIP.pdf`, `finanzwirtschaft/js/data/contentManifest.js`, `docs/audits/finanzwirtschaft-source-grounded-audit-pass-1.md` | full | full |
| `jahresabschluss` | live | `source-materials/Jahresabschluss/Jahresabschluss/Orga+Kapitel1.pdf`, `Kapitel2.pdf` ... `Kapitel10.pdf`, `Tutorium/`, `Probeklausur/`, `jahresabschluss/js/data/contentManifest.js`, `docs/audits/jahresabschluss-source-grounded-audit-pass-1.md` | full | full |
| `recht` | live | `source-materials/Recht/Recht/Vorlesungen/`, `Übungen/`, `recht/js/data/contentManifest.js`, `docs/audits/recht-provenance-curation-pass-1.md` | full | full |
| `internationale-wirtschaftsbeziehungen` | live | `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB1.pdf` ... `IntWB12.pdf`, `Zusätzliche_Literatur/`, `internationale-wirtschaftsbeziehungen/js/data/contentManifest.js`, `docs/audits/iwb-provenance-curation-pass-1.md` | full | full |
| `mathematik` | live | `source-materials/Mathematik/Mathematik/Vorlesung_Folien_+_R-Skripte_Lehrvideos/*.pdf`, `source-materials/Mathematik/Mathematik/Kleinübung/*`, `mathematik/js/data/curriculum.js`, `mathematik/js/data/practiceConfig.js`, math audit docs listed above | full | partial |
| `mikro2` | live special case | no dedicated `source-materials/Mikroökonomik II/` tree; repo policy docs: `docs/audits/mikro2-quarantine-roadmap-pass-1.md`, `docs/audits/mikro2-source-identity-resolution-pass-1.md`, `docs/audits/mikro2-status-guard-pass-2.md` | none | not possible |
| `politisches-system-brd` | non-public repo module | no mapped source folder found under `source-materials/` in this pass | none | not possible |
| `r` | non-public repo module | module metadata references course-like R scripts and datasets, but this pass did not find a normalized module source tree or concept-level manifest under `source-materials/`; audit based only on `assets/js/module-content.js` metadata | partial | partial |
| landing | public shell surface | no academic source basis; trust judged only for status honesty and registry clarity | none | not possible |

## B. Source ledger table

| Module | Source status | Auditability | Main risks found before / during this pass | Final trust label |
| --- | --- | --- | --- | --- |
| `mikro1` | full | full | one concept still lacks a non-inferential primary anchor: `psubst` | source-verified but still partial |
| `makro1` | full | full | source-central Kap6 split and Phillips shock / indexation / deflation logic were still underrepresented | source-verified and strong |
| `makro2` | full | full | source-faithful overall, but some policy/debt clusters remain more source-distilled than file-by-file mirrored | source-verified but still partial |
| `statistik` | full | full | `nichtparametrisch` remains intentionally unanchored; some blocks are still source-distilled rather than one-to-one sheet mirrors | source-verified but still partial |
| `oekonometrie` | full | full | none reproduced as a material source distortion in current state; remaining issues are depth, not source mismatch | source-verified and strong |
| `finanzwirtschaft` | full | full | method-selection and late capital-structure teaching is now stronger, but drills remain more source-distilled than archival-sheet mirrored | source-verified but still partial |
| `jahresabschluss` | full | full | chapter structure now maps well, but some tutorium/probeklausur consequence chains remain summarized rather than reproduced verbatim | source-verified but still partial |
| `recht` | full | full | doctrinal order is now aligned, but some case families remain portal-authored rather than directly mirrored from all Übungsfälle | source-verified but still partial |
| `internationale-wirtschaftsbeziehungen` | full | full | theory line is source-anchored; missing archived exam PDFs and some literature-only footnote anchors limit full parity claims | source-verified but still partial |
| `mathematik` | full | partial | source exists, but there is still no module-level concept manifest with per-concept primary refs; many drills are source-distilled, not verbatim Kleinübungen | source-verified but still partial |
| `mikro2` | none | not possible | no Mikro II source corpus in repo; cannot claim direct-source parity | source-missing / cannot verify fully |
| `politisches-system-brd` | none | not possible | no mapped source corpus found in this pass | source-missing / cannot verify fully |
| `r` | partial | partial | metadata names a source-like script set, but this pass could not fully verify a normalized source tree / concept manifest | pedagogically strong but source not fully auditable |
| landing | none | not possible | not an academic module; only registry honesty is auditable | source-missing / cannot verify fully |

## C. Topic coverage matrices by module

### `mikro1`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| VL1: Konsummöglichkeitenmenge, Budget | `kmm`, `budget` | matched | none reproduced | none in this pass | existing source-distilled |
| VL2-VL4: Präferenzen, GRS, Lagrange, Haushaltsoptimum | `praeferenz`, `indiff`, `ordinal`, `grs`, `lagrange`, `lambda`, `hausopt`, `cobbd`, `ces_u`, `homothet` | matched | none reproduced | none in this pass | existing source-distilled |
| VL5-VL8: Nachfrage, Slutsky, Anfangsausstattung | `marshall`, `elast`, `normal`, `hicks`, `ausgaben`, `shephard`, `indnutzen`, `slutsky`, `anfang` | matched | none reproduced | none in this pass | existing source-distilled |
| VL8 perfect substitutes cluster | `psubst` | partial | primary source anchor still unresolved | no content edit; keep open and explicit | existing source-distilled |
| VL9-VL18: Arbeit, Produktion, Kosten, Markt, Monopol | `arbeit`, `cv_ev`, `produktion`, `grts`, `skalener`, `kosten`, `gk_dk`, `gewinn`, `markt`, `monopol` | matched | none reproduced | none in this pass | existing source-distilled |

### `makro1`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| VL1-VL3: Rahmen, VGR, Gütermarkt, Multiplikator | `makro_rahmen`, `vgr`, `guetermarkt`, `multiplikator` | matched | none reproduced | none in this pass | existing source-distilled |
| VL4-VL5: Geldmarkt, Banken, IS-LM, Politikmix | `geldnachfrage`, `banken`, `islm`, `politikmix` | matched | no new structural mismatch reproduced in this pass | none in this pass | existing source-distilled |
| Kap6: Fisher channel and crisis/spread channel | `realzins_fisher_erwartungen`, `realzins_risikopraemie_krisenkanal` | misleading | previous portal collapsed two distinct source-tested units into one combined page | split live theory and drills into two separate source-shaped concepts | source-distilled + platform-added-drill |
| VL7: Arbeitsmarkt, WS-PS | `arbeitsmarkt` | matched | none reproduced | none in this pass | existing source-distilled |
| VL8 + Tutorium 6: Phillips, NAIRU, expectations | `phillips` | partial | source-central supply shocks, indexation and deflation caveat were underexposed | enriched theory, formula support, drills, graph info | source-distilled + platform-added-drill |
| VL8 transition logic | `islmpc`, `erwartungen` | matched | still source-distilled rather than full lecture mirror, but no current distortion reproduced | none in this pass | existing source-distilled |

### `makro2`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| Slides 01-02: Zahlungsbilanz, Wechselkurs, PPP/UIP, offene Gütermärkte | `zahlungsbilanz`, `wechselkurs`, `kaufkraftparitaet`, `zinsparitaet`, `offene_is`, `nettoexporte`, `marshall_lerner` | matched | none reproduced | none in this pass | existing source-distilled |
| Slides 03-04: Mundell-Fleming, ZP, Regime, Krisen | `geldmengen`, `mundell_fleming`, `zp_kurve`, `wirtschaftspolitik_offen`, `wk_regime`, `wk_krisen`, `opt_waehrungsraum` | matched | no live graph/mechanism contradiction reproduced | none in this pass | existing source-distilled |
| Slides 05-07: Phillips, Zeitinkonsistenz, Barro-Gordon, Taylor | `phillipskurve`, `zeitinkonsistenz`, `barro_gordon`, `taylor_regel`, `inflation_targeting`, `inflation_kosten` | partial | some policy-design units remain more portal-authored than archival-sheet mirrored | none in this pass | existing source-distilled |
| Handout + Übungsblätter 8-10: growth / Solow | `wachstum_fakten`, `aggregierte_pf`, `solow_basis`, `steady_state`, `goldene_sparquote`, `tech_fortschritt` | matched | none reproduced | none in this pass | existing source-distilled |
| Slides 06 + Tutorium 4: debt and fiscal sustainability | `budgetrestriktion`, `schuldenquote_dynamik`, `ricardianisch`, `schuldenfinanzierung_monetarisierung` | partial | still more summary-shaped than full exercise-family mirror | none in this pass | existing source-distilled |

### `statistik`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| VL02-VL04: descriptive and bivariate statistics | `deskriptiv`, `bivariat` | matched | none reproduced | none in this pass | existing source-distilled |
| VL05-VL08: probability and distributions | `wahrscheinlichkeit`, `verteilungen` | matched | none reproduced | none in this pass | existing source-distilled |
| VL09-VL10: estimation methods, estimator properties, intervals | `schaetzen_verfahren`, `schaetzen_eigenschaften_intervalle` | matched | previous bundling had already been corrected before this pass | none in this pass | existing source-distilled |
| VL10-VL11 + Tutorium 11: tests, z-test, two-sample, ANOVA | `testen`, `z_test`, `zwei_stichproben`, `varianzanalyse` | matched | still source-distilled; not every decision tree is a verbatim tutorial mirror | none in this pass | existing source-distilled |
| VL12-VL14 + Tutorium 12/13: regression and diagnostics | `regression_schaetzung_inferenz`, `regression_diagnostik_prognose` | matched | none reproduced | none in this pass | existing source-distilled |
| source support unclear in current corpus | `nichtparametrisch` | partial | concept intentionally has no current primary PDF anchor | no content edit; keep explicit as thin / unanchored | existing source-distilled |
| R-Vorkurs | `rlab` | matched | source-faithful as companion, but still portal-authored in teaching surface | none in this pass | existing source-distilled |

### `oekonometrie`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| lecture intro + R sheets 01 | `matrix_notation`, `sample_moments`, `model_objects`, `ols_objective`, `normal_equations`, `partial_effects`, `functional_forms` | matched | none reproduced | none in this pass | existing source-distilled |
| lecture assumptions + R sheets 02-03 | `no_perfect_multicollinearity`, `exogeneity`, `endogeneity_ovb`, `unbiasedness`, `gauss_markov`, `consistency` | matched | none reproduced | none in this pass | existing source-distilled |
| formelsammlung + sheets 04-10 | `error_variance`, `covariance_matrix`, `prediction`, `prediction_intervals`, `r_squared`, `t_test`, `f_test`, `confidence_intervals`, `normal_linear_model_mle`, `linear_restrictions_ur`, `asymptotic_normality`, `monte_carlo` | matched | earlier missing blocks are already present in current state | none in this pass | existing source-distilled |
| sheets 07, 11, 12 + tutorium scripts | `vif_collinearity`, `fwl_partial_regression`, `heteroskedasticity`, `robust_gls`, `autocorrelation`, `hac_newey_west` | matched | no graph/theory contradiction reproduced | none in this pass | existing source-distilled |

### `finanzwirtschaft`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| V1-V3: financial logic, liquidity, capital markets | `finanz_denkweise`, `liquiditaetsplanung`, `kapitalmarkt_bewertung`, `institutionen_marktunvollkommenheit` | matched | none reproduced | none in this pass | existing source-distilled |
| V3-V7: intertemporal choice, NPV, discounting, annuities | `intertemporale_wahl`, `kapitalwert_fisher`, `auf_abzinsen`, `renten_endwert`, `annuitaeten_finanzplan` | matched | none reproduced | none in this pass | existing source-distilled |
| V8-V9: IRR, NPV function, uncertainty | `izf_kapitalwertfunktion`, `izf_grenzen`, `unsicherheit`, `risikoadjustierter_kapitalwert` | matched | no current distortion reproduced | none in this pass | existing source-distilled |
| V10-V12: Bezugsrecht, EK/FK costs, WACC, leverage, MM | `bezugsrecht`, `eigenkapitalkosten`, `fremdkapitalkosten`, `wacc`, `wacc_leverage`, `modigliani_miller` | partial | theory is now strong, but exercise families remain more portal-authored than direct lecture-sheet mirrors | none in this pass | existing source-distilled |

### `jahresabschluss`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| Kapitel 1-2: intro, GoB, Inventur/Bilanzansatz | `rechnungswesen_intro`, `gob_rechtsgrundlagen`, `inventur_inventar_bilanzansatz` | matched | earlier Maßgeblichkeit / latente Steuern gap is already closed in current state | none in this pass | existing source-distilled |
| Kapitel 3-4: booking system and organisation | `buchen_konten`, `buchfuehrung_orga` | matched | none reproduced | none in this pass | existing source-distilled |
| Kapitel 5-6: fixed/current assets, procedures, USt | `anlagevermoegen`, `umlauf_bewertung_verfahren`, `werkstoffe_erzeugnisse_buchungen`, `umlauf_waren_ust` | matched | none reproduced | none in this pass | existing source-distilled |
| Kapitel 7-10: equity, liabilities, provisions, accruals, GKV/UKV | `eigenkapital_kapitalgesellschaften`, `eigenkapital_personengesellschaften`, `verbindlichkeiten`, `rueckstellungen`, `rechnungsabgrenzung`, `erfolgsrechnung` | matched | still compressed relative to full tutorium consequence chains, but no material distortion reproduced | none in this pass | existing source-distilled |

### `recht`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| §1-§3: orientation and method | `was_ist_recht`, `privatrecht`, `methodik` | matched | none reproduced | none in this pass | existing source-distilled |
| §4-§7: declaration, dissens/anfechtung, abstraction, capacity | `willenserklaerung`, `dissens`, `anfechtung`, `trennung_abstraktion`, `geschaeftsfaehigkeit` | matched | previous split-risk already closed in current state | none in this pass | existing source-distilled |
| §8-§12: agency, AGB, Schuldrecht AT, damages, withdrawal, withdrawal rights | `stellvertretung`, `agb`, `schuldrecht_intro`, `schadensersatz`, `ruecktritt`, `verbraucherwiderruf` | matched | doctrine is source-faithful, though some case ladders remain portal-authored drill structure | none in this pass | existing source-distilled |

### `internationale-wirtschaftsbeziehungen`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| IntWB1-4: trade facts and theory | `handelsfakten`, `ricardo`, `heckscher_ohlin`, `verteilung_handel`, `krugman`, `gravitation` | matched | none reproduced | none in this pass | existing source-distilled |
| IntWB5-7: tariffs, quotas, WTO, integration | `tarifmodell`, `quoten_sanktionen`, `wto_integration` | matched | no current model/policy contradiction reproduced | none in this pass | existing source-distilled |
| IntWB8-12: exchange rates, parity, monetary model, overshooting, trilemma | `wechselkurssysteme`, `zinsparitaet`, `kaufkraftparitaet`, `monetaerer_ansatz`, `overshooting`, `trilemma`, `balassa_samuelson` | matched | literature-footnote provenance remains partial, but lecture-line mapping is strong | none in this pass | existing source-distilled |

### `mathematik`

| Source chapter / section | Portal concept/page | Status | Main issue | Action taken | Provenance label |
| --- | --- | --- | --- | --- | --- |
| E1-E3 + Kleinübungen | `algebra_mengen`, `funktionen_gleichungen`, `exp_log_inverse`, `summen_logik_beweise` | matched | drills are source-shaped but often not verbatim imports | none in this pass | existing source-distilled |
| LA1-LA2 + Kleinübungen | `lineare_algebra_grundlagen`, `lineare_algebra_struktur` | matched | no material sequencing distortion reproduced | none in this pass | existing source-distilled |
| AN1 + OP1 | `analysis_ableitung_grundlagen`, `analysis_monotonie_grenzwerte`, `univariate_optimierung` | matched | no current source contradiction reproduced | none in this pass | existing source-distilled |
| AN2 + OP2 | `analysis_multivariat`, `multivariate_optimierung`, `lagrange` | matched | source support exists, but no per-concept manifest normalizes primary refs yet | none in this pass | existing source-distilled |
| AN3 + coding companion | `integralrechnung`, `r_begleitpraxis` | partial | material is source-backed overall, but provenance remains module-level rather than concept-level | none in this pass | existing source-distilled |

## D. Trust-risk findings by module

### `mikro1`

- Source used: current `contentManifest` primary refs plus the re-validation in `mikro1-provenance-validation-pass-2.md`.
- Top trust-risk mismatch: `psubst` still lacks a non-inferential primary source anchor.
- Exact corrections made in this pass: none.
- What could not be verified: an explicit in-repo primary PDF anchor for perfect substitutes.
- Final trust label: **source-verified but still partial**.

### `makro1`

- Source used: direct reopening of VL/Kap6/VL8/Übung5/Tutorium6 files plus current manifest.
- Top trust-risk mismatches before correction:
  - Kap6 Fisher logic and crisis/spread logic were still effectively collapsed.
  - Phillips page underrepresented source-central supply shocks, indexation, and deflation limits.
- Exact corrections made in this pass: split live real-interest content and drills; enriched Phillips theory, formula support, drills, and graph reading strip.
- What could not be verified: nothing blocker-level remained after the targeted correction.
- Final trust label: **source-verified and strong**.

### `makro2`

- Source used: current content manifest and prior source-grounded / provenance audits against Folien, Handout, Übungen, Tutorien.
- Top trust-risk mismatches: current state is source-faithful overall; remaining risk is that some policy/debt sections are still more compressed than the full source exercise families.
- Exact corrections made in this pass: none.
- What could not be verified: full one-to-one archival parity for every late policy drill.
- Final trust label: **source-verified but still partial**.

### `statistik`

- Source used: current content manifest and prior source-grounded audit against VL02-VL14, Tutorien, summaries, and `R-Vorkurs.pdf`.
- Top trust-risk mismatches: only one concept remains intentionally unanchored, `nichtparametrisch`.
- Exact corrections made in this pass: none.
- What could not be verified: a high-confidence primary anchor for `nichtparametrisch`.
- Final trust label: **source-verified but still partial**.

### `oekonometrie`

- Source used: current content manifest and prior source-grounded audit against lecture PDF, formelsammlung, tables, exercises, and tutorial R scripts.
- Top trust-risk mismatches: no live material distortion reproduced in current state.
- Exact corrections made in this pass: none.
- What could not be verified: nothing major; remaining issues are depth/pacing, not source truth.
- Final trust label: **source-verified and strong**.

### `finanzwirtschaft`

- Source used: current content manifest and prior audit against `V1_StudIP.pdf` to `V12_StudIP.pdf`.
- Top trust-risk mismatches: no major missing high-level concept remained; residual risk is that some late capital-structure drills are still source-distilled rather than direct worksheet mirrors.
- Exact corrections made in this pass: none.
- What could not be verified: archived source-exam parity for every computation style.
- Final trust label: **source-verified but still partial**.

### `jahresabschluss`

- Source used: current content manifest and prior audit against chapter PDFs, tutorium, and probeklausur.
- Top trust-risk mismatches before earlier passes: Maßgeblichkeitsprinzip and latente Steuern were underdeveloped relative to tutorium / exam material; current state reflects those now.
- Exact corrections made in this pass: none.
- What could not be verified: exhaustive parity against all tutorium variants.
- Final trust label: **source-verified but still partial**.

### `recht`

- Source used: current content manifest and prior provenance curation against the 12 lecture units and mapped exercise files.
- Top trust-risk mismatches before earlier passes: split doctrine pairs (`dissens` / `anfechtung`, `ruecktritt` / `verbraucherwiderruf`) previously risked feeling bundled; current state keeps them distinct.
- Exact corrections made in this pass: none.
- What could not be verified: full exercise-family mirror for every case sheet beyond the curated primary set.
- Final trust label: **source-verified but still partial**.

### `internationale-wirtschaftsbeziehungen`

- Source used: current content manifest and prior provenance curation against `IntWB1.pdf` to `IntWB12.pdf`.
- Top trust-risk mismatches before earlier passes: provenance clarity and concept splitting; current theory map is now lecture-faithful.
- Exact corrections made in this pass: none.
- What could not be verified: archived exam PDFs and missing literature-footnote files not present in repo.
- Final trust label: **source-verified but still partial**.

### `mathematik`

- Source used: lecture PDFs and Kleinübung folders named in the math audit chain, plus current `curriculum.js` and `practiceConfig.js`.
- Top trust-risk mismatches: source exists, but the module still lacks a normalized per-concept primary-ref manifest and many drills remain source-distilled rather than verbatim.
- Exact corrections made in this pass: none.
- What could not be verified: line-by-line provenance at the concept/card level across the whole module.
- Final trust label: **source-verified but still partial**.

### `mikro2`

- Source used: repo policy and status docs only.
- Top trust-risk mismatch: there is still no dedicated Mikro II source corpus in `source-materials/`.
- Exact corrections made in this pass: none.
- What could not be verified: any direct-source parity claim.
- Final trust label: **source-missing / cannot verify fully**.

### `politisches-system-brd`

- Source used: none found in mapped source tree.
- Top trust-risk mismatch: no source corpus identified in this pass.
- Exact corrections made in this pass: none.
- What could not be verified: entire academic layer.
- Final trust label: **source-missing / cannot verify fully**.

### `r`

- Source used: `assets/js/module-content.js` only; the current pass did not confirm a normalized source tree or concept-level source manifest.
- Top trust-risk mismatch: source basis is described in metadata but not normalized enough for full source-fidelity verification.
- Exact corrections made in this pass: none.
- What could not be verified: file-level course-parity across the whole standalone module.
- Final trust label: **pedagogically strong but source not fully auditable**.

### landing

- Source used: none; this is a registry surface, not an academic module.
- Top trust-risk mismatch: none academic; only registry honesty matters.
- Exact corrections made in this pass: none.
- What could not be verified: academic fidelity is not applicable.
- Final trust label: **source-missing / cannot verify fully**.

## E. Deep sections for high-risk modules

### Makro 1

The highest real trust gap was structural, not cosmetic. `Kap6.pdf` and the matching summary / exercise material clearly separate:

- Fisher logic: nominal rate, expected inflation, ex ante / ex post real rate
- crisis / spread logic: credit rate, risk premium, TED-spread, effective-lower-bound policy feasibility

The portal still had that material effectively collapsed into one combined surface. That was meaning-reducing because a student could come away with the false impression that “real interest rate” is one undifferentiated topic instead of two exam-distinct diagnostic channels. This pass corrects that.

The second Makro-I trust risk was in the Phillips block. `VL_8.pdf` does not stop at a clean expectations-augmented Phillips line. It explicitly treats supply shocks, wage indexation, and the low-inflation / deflation boundary where nominal rigidities matter. The portal previously taught the base mechanism but not those source-central extensions strongly enough. This pass makes those extensions visible in both theory and graph interpretation.

### Statistik

Current `statistik` is no longer globally misleading. The important trust picture is now narrower:

- the split between estimation methods and estimator properties / confidence intervals is present
- the split between regression estimation/inference and diagnostics/prognosis is present
- per-concept primary refs are now curated

The remaining source-fidelity issue is specific: `nichtparametrisch` is still intentionally unanchored because the current inspected corpus did not justify a confident one-to-one primary ref. That is now an honesty issue, not a silent distortion issue.

### Ökonometrie

`oekonometrie` currently clears the core trust test best among the quantitatively formal modules:

- the formal objects are separated rather than conflated
- the lecture PDF, formelsammlung, exercise sheets, and R tutorium files all have curated concept anchors
- previously missing or underrepresented objects such as the normal linear model / MLE and restricted-vs-unrestricted logic are already present in the live module

The remaining issues are about depth and pacing, not whether the module misstates the course.

### Finanzwirtschaft

`finanzwirtschaft` is now structurally faithful to the lecture spine from `V1_StudIP.pdf` to `V12_StudIP.pdf`. The remaining source-fidelity caution is not a missing theory family but the exact degree of worksheet-style drill mirroring in the late WACC / leverage / MM area. The portal now explains those mechanisms well; it is simply still more source-distilled than archival exercise reproduction.

### Jahresabschluss

The earlier trust-critical hole was that tutorium / exam-relevant items such as Maßgeblichkeitsprinzip and latente Steuern were too implicit relative to the course signals in Kapitel 2, tutorium, and probeklausur. The current portal state no longer suffers from that omission. Remaining risk is narrower: some sequential booking-consequence chains are still compressed for readability, even where the chapter+tutorium workflow is longer.

### Recht

The main source-fidelity danger in `recht` was doctrinal flattening:

- merging issue and rule
- compressing distinct doctrine tracks into one page
- losing exam-relevant order in the name of cleanliness

Current state is much safer. The live concept map now mirrors the actual lecture line much more faithfully. Remaining risk is that not every Übungsfall family is represented as a direct-source mini-case; some are still portal-authored but source-shaped.

## F. Before/after correction ledger

| Topic | Source says | Portal had | Corrected to | Provenance label | Remaining uncertainty |
| --- | --- | --- | --- | --- | --- |
| `makro1` `realzins_fisher_erwartungen` | `Kap6.pdf` + `Makro I VL6.pdf` separate nominal/real/Fisher logic, ex ante vs ex post, inflation expectations, ELB relevance | one combined real-rate page still mixed Fisher logic with crisis/spread logic | live content now isolates Fisher / expectation / ex-ante logic and the ELB implication | source-distilled | no slide-level page anchors |
| `makro1` `realzins_risikopraemie_krisenkanal` | `Kap6.pdf` + `Übung5.pdf` treat credit rate, risk premium, spread logic, crisis diagnosis, and policy constraints as a distinct tested block | same combined real-rate page implicitly covered this but did not preserve the distinction | live content now isolates risk-premium / spread / TED / crisis channel and separates the drills | source-distilled + platform-added-drill | exercises are portal-authored summaries, not verbatim worksheet imports |
| `makro1` step drills for real-interest cluster | `Übung5.pdf` distinguishes inflation-expectation cases from crisis/spread cases | the live step-problem layer aliased the same deck to both split ids | separate step-problem families now map to Fisher/ELB vs spread/crisis logic | platform-added-drill | drills remain source-shaped, not literal exercise copies |
| `makro1` `phillips` theory | `VL_8.pdf` and `Tutorienblatt_6_Makro_1.pdf` include expectation regimes, supply shocks, indexation, NAIRU interpretation, and deflation caveats | base Phillips/NAIRU logic was present, but shock/indexation/deflation cases were too weak | added theory sections on supply shocks + indexation and on deflation / downward nominal rigidity, plus an explicit `λ` formula card | source-distilled | still a pedagogically compressed portal rendering, not a full lecture transcript |
| `makro1` `phillips` guided tasks | tutorial material uses regime/trap reasoning beyond the base curve | task layer underweighted these cases | added tasks on stagflation shock logic and why high unemployment does not mechanically imply observed deflation | platform-added-drill | task wording remains portal-authored |
| `makro1` `phillips` graph info strip | source treats shocks and low-inflation limits as part of interpretation, not optional footnotes | graph panel lacked that cue | graph info now explicitly names `Schocks und Grenzen`, supply shocks, indexation, and the deflation caveat | source-distilled | graph still remains a portal single-surface teaching graph, not a full multi-panel lecture slide |

## G. Verification

### Syntax / deployability checks

- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/data/chapters.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/data/stepProblems.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/ui/graphs.js`
- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/project_wide_source_fidelity_content_completeness_pass1.mjs`

### Browser verification performed

Verifier:
- [project_wide_source_fidelity_content_completeness_pass1.mjs](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/project_wide_source_fidelity_content_completeness_pass1.mjs)

Verified topics:
- `makro1` → `realzins_fisher_erwartungen`
- `makro1` → `realzins_risikopraemie_krisenkanal`
- `makro1` → `phillips` theory
- `makro1` → `phillips` graph

Verified conditions:
- theory visible
- graph visible where relevant
- labels correct
- graph and theory aligned
- shock / extension logic visible

Artifacts:
- [makro1-realzins-fisher.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/project-wide-source-fidelity-content-completeness-pass-1/makro1-realzins-fisher.png)
- [makro1-realzins-risikopraemie.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/project-wide-source-fidelity-content-completeness-pass-1/makro1-realzins-risikopraemie.png)
- [makro1-phillips-theory.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/project-wide-source-fidelity-content-completeness-pass-1/makro1-phillips-theory.png)
- [makro1-phillips-graph.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/project-wide-source-fidelity-content-completeness-pass-1/makro1-phillips-graph.png)

Result:
- verifier findings: `[]`

## H. Final trust classification table

| Module | Final trust classification |
| --- | --- |
| `mikro1` | source-verified but still partial |
| `makro1` | source-verified and strong |
| `makro2` | source-verified but still partial |
| `statistik` | source-verified but still partial |
| `oekonometrie` | source-verified and strong |
| `finanzwirtschaft` | source-verified but still partial |
| `jahresabschluss` | source-verified but still partial |
| `recht` | source-verified but still partial |
| `internationale-wirtschaftsbeziehungen` | source-verified but still partial |
| `mathematik` | source-verified but still partial |
| `mikro2` | source-missing / cannot verify fully |
| `politisches-system-brd` | source-missing / cannot verify fully |
| `r` | pedagogically strong but source not fully auditable |
| landing | source-missing / cannot verify fully |

## I. Unresolved trust risks

- `mikro1`
  - `psubst` still has no non-inferential primary anchor in the in-repo PDFs.
- `makro2`
  - source anchors are strong, but some policy/debt drill families remain more source-distilled than file-by-file mirrored.
- `statistik`
  - `nichtparametrisch` remains intentionally unanchored.
- `finanzwirtschaft`
  - late capital-structure computation drills are still more portal-authored than directly mirrored from worksheet families.
- `jahresabschluss`
  - some tutorium-grade booking consequence chains remain compressed into portal summaries.
- `recht`
  - not every exercise-family case is represented as a direct-source mini-case.
- `internationale-wirtschaftsbeziehungen`
  - no archived exam PDFs in repo; some literature-footnote references in slides cannot be file-anchored.
- `mathematik`
  - module still lacks a concept-level primary-ref manifest; many tasks are source-distilled instead of verbatim Kleinübung statements.
- `mikro2`
  - still blocked by missing course corpus.
- `r`
  - standalone source basis remains metadata-declared rather than fully normalized into a concept-level manifest.
- `politisches-system-brd`
  - no source basis identified in this pass.

## J. Residual risk ranking

| Risk | Level | Why it remains |
| --- | --- | --- |
| `mikro2` has no direct source corpus | high | cannot be fixed without new source materials |
| `mathematik` lacks concept-level primary-ref normalization | medium | source exists, but provenance is still module-level and drill-heavy |
| `mikro1` `psubst` primary anchor unresolved | medium | narrow but real provenance gap in an otherwise strong module |
| `statistik` `nichtparametrisch` unanchored | medium | thin source support in current inspected corpus |
| `r` standalone module not fully source-normalized | medium | metadata names sources, but current pass did not verify a normalized source tree |
| `makro2`, `finanzwirtschaft`, `jahresabschluss`, `recht`, `iwb` still partly source-distilled in drills/exam layers | low | no material source distortion reproduced; remaining gap is archival fidelity depth |

## K. Final verdict

- The portal is **not** academically uniform in source verifiability.
- It **is** now much clearer which modules earn stronger source trust and which do not.
- The only live, source-available module that reproduced a fresh, meaning-relevant mismatch in this pass was `makro1`, and that mismatch has been corrected and browser-verified.
- Final trust picture:
  - strongest source-faithful modules in current state: `makro1`, `oekonometrie`
  - strong but still partially source-distilled: `mikro1`, `makro2`, `statistik`, `finanzwirtschaft`, `jahresabschluss`, `recht`, `internationale-wirtschaftsbeziehungen`, `mathematik`
  - explicitly non-fully-verifiable: `mikro2`, `r`, `politisches-system-brd`, landing

This pass should therefore be read as a **trust classification and correction pass**, not as a claim that every source-bearing module is already line-by-line archival parity. The important improvement is that the current portal state is now more honest about where source trust is strong, where it is partial, and where it cannot yet be fully claimed.
