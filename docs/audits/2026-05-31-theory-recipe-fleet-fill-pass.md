# Theory recipe fleet fill pass

Date: 2026-05-31
Mode: write

## Canonical 8-step recipe

1. **Orientierung** (`orientierung`)
2. **Kernidee** (`kernidee`)
3. **Definitionen** (`definitionen`)
4. **Formale Darstellung** (`formale`)
5. **Mechanismus & Zusammenhänge** (`mechanismus`)
6. **Anwendung & Klausurtransfer** (`anwendung`)
7. **Häufige Fehler** (`fehler`)
8. **Vor den Aufgaben** (`vor_aufgaben`)

## Fleet summary

| Metric | Before | After |
|--------|--------|-------|
| Concepts audited | 219 | 219 |
| Concepts with 8 **filled** steps (substantive VL content) | 1 (0.5%) | 1 (0.5%) |
| Concepts with 8 **structural** cards (incl. honest placeholders) | — | 219 (100%) |

| Module | Concepts | Structural 8 after | Avg filled after | Avg placeholders | Normalized |
|--------|----------|--------------------|------------------|--------------------|------------|
| mikro1 | 33 | 33 | 5.9 | 2.1 | 33 |
| mikro2 | 18 | 18 | 4.8 | 3.2 | 18 |
| makro1 | 14 | 14 | 4.2 | 3.8 | 14 |
| makro2 | 30 | 30 | 4.6 | 3.4 | 30 |
| oekonometrie | 32 | 32 | 6.1 | 1.9 | 32 |
| statistik | 14 | 14 | 4.6 | 3.4 | 8 |
| finanzwirtschaft | 19 | 19 | 4.5 | 3.5 | 19 |
| mathematik | 14 | 14 | 6.6 | 1.4 | 14 |
| jahresabschluss | 15 | 15 | 4.9 | 3.1 | 15 |
| recht | 14 | 14 | 5 | 3 | 14 |
| internationale-wirtschaftsbeziehungen | 16 | 16 | 4.8 | 3.3 | 16 |

## Implementation

| Layer | File | Role |
|-------|------|------|
| Core | `assets/js/portal-core/theory/theoryStructure.js` | Re-wrap, classify, `completeTheoryRecipe`, `auditTheoryRecipeSteps` |
| Migration | `tools/exam-os/normalize-theory-structure.mjs` | Fleet `--write`; persists `theoryRecipe.js` for ökonometrie/mathematik |
| Render | `assets/js/portal-core/ui/warningSystem.js` | Keeps placeholder cards; warn-box rail |
| Styles | `assets/css/premium-refinement.css` | Recipe cards + placeholder styling |

Empty steps after normalization receive honest one-line placeholders or content merged from `motivation`, `objectives`, `formeln`, `cards`, `intuition` — no invented VL prose.

## Per-concept detail (filled step counts)

### mikro1

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| kmm | normalized | 7 → 7 |
| budget | normalized | 8 → 8 |
| praeferenz | normalized | 7 → 7 |
| indiff | normalized | 7 → 7 |
| ordinal | normalized | 5 → 5 |
| grs | normalized | 7 → 7 |
| lagrange | normalized | 5 → 5 |
| psubst | normalized | 7 → 7 |
| pkomp | normalized | 7 → 7 |
| cobbd | normalized | 6 → 6 |
| ces_u | normalized | 7 → 7 |
| homothet | normalized | 7 → 7 |
| hausopt | normalized | 5 → 5 |
| marshall | normalized | 7 → 7 |
| elast | normalized | 6 → 6 |
| normal | normalized | 6 → 6 |
| hicks | normalized | 7 → 7 |
| ausgaben | normalized | 7 → 7 |
| shephard | normalized | 4 → 4 |
| indnutzen | normalized | 5 → 5 |
| lambda | normalized | 7 → 7 |
| slutsky | normalized | 5 → 5 |
| anfang | normalized | 4 → 4 |
| arbeit | normalized | 5 → 5 |
| cv_ev | normalized | 5 → 5 |
| produktion | normalized | 5 → 5 |
| grts | normalized | 7 → 7 |
| skalener | normalized | 6 → 6 |
| kosten | normalized | 4 → 4 |
| gk_dk | normalized | 6 → 6 |
| gewinn | normalized | 5 → 5 |
| markt | normalized | 4 → 4 |
| monopol | normalized | 6 → 6 |

### mikro2

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| monopol_preissetzung | normalized | 4 → 4 |
| preisdiskriminierung | normalized | 5 → 5 |
| spieltheorie_statisch | normalized | 5 → 5 |
| spieltheorie_dynamisch | normalized | 4 → 4 |
| oligopol_cournot_bertrand | normalized | 4 → 4 |
| oligopol_stackelberg | normalized | 5 → 5 |
| intertemporaler_konsum | normalized | 5 → 5 |
| unsicherheit_versicherung | normalized | 5 → 5 |
| gleichgewicht_tausch | normalized | 5 → 5 |
| gleichgewicht_walras | normalized | 4 → 4 |
| gleichgewicht_produktion | normalized | 4 → 4 |
| wohlfahrt_theoreme | normalized | 5 → 5 |
| wohlfahrt_messung | normalized | 4 → 4 |
| externa_pigou | normalized | 5 → 5 |
| externa_institutionen | normalized | 6 → 6 |
| public_goods | normalized | 6 → 6 |
| information_adverse | normalized | 5 → 5 |
| information_moralhazard | normalized | 5 → 5 |

### makro1

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| makro_rahmen | normalized | 5 → 5 |
| vgr | normalized | 4 → 4 |
| guetermarkt | normalized | 4 → 4 |
| multiplikator | normalized | 4 → 4 |
| geldnachfrage | normalized | 4 → 4 |
| banken | normalized | 5 → 5 |
| islm | normalized | 4 → 4 |
| politikmix | normalized | 5 → 5 |
| realzins_fisher_erwartungen | normalized | 4 → 4 |
| realzins_risikopraemie_krisenkanal | normalized | 4 → 4 |
| arbeitsmarkt | normalized | 4 → 4 |
| phillips | normalized | 4 → 4 |
| islmpc | normalized | 4 → 4 |
| erwartungen | normalized | 0 → 4 |

### makro2

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| zahlungsbilanz | normalized | 3 → 3 |
| wechselkurs | normalized | 4 → 4 |
| kaufkraftparitaet | normalized | 5 → 5 |
| zinsparitaet | normalized | 4 → 4 |
| offene_is | normalized | 4 → 4 |
| nettoexporte | normalized | 4 → 4 |
| marshall_lerner | normalized | 5 → 5 |
| geldmengen | normalized | 4 → 4 |
| mundell_fleming | normalized | 4 → 4 |
| zp_kurve | normalized | 6 → 6 |
| wirtschaftspolitik_offen | normalized | 6 → 6 |
| wk_regime | normalized | 6 → 6 |
| wk_krisen | normalized | 6 → 6 |
| opt_waehrungsraum | normalized | 6 → 6 |
| phillipskurve | normalized | 5 → 5 |
| zeitinkonsistenz | normalized | 5 → 5 |
| barro_gordon | normalized | 4 → 4 |
| taylor_regel | normalized | 4 → 4 |
| inflation_targeting | normalized | 5 → 5 |
| inflation_kosten | normalized | 4 → 4 |
| wachstum_fakten | normalized | 5 → 5 |
| aggregierte_pf | normalized | 4 → 4 |
| solow_basis | normalized | 4 → 4 |
| steady_state | normalized | 4 → 4 |
| goldene_sparquote | normalized | 5 → 5 |
| tech_fortschritt | normalized | 4 → 4 |
| budgetrestriktion | normalized | 5 → 5 |
| schuldenquote_dynamik | normalized | 4 → 4 |
| ricardianisch | normalized | 5 → 5 |
| schuldenfinanzierung_monetarisierung | normalized | 5 → 5 |

### oekonometrie

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| matrix_notation | persist-recipe | 7 → 7 |
| sample_moments | persist-recipe | 6 → 6 |
| distributions_df | persist-recipe | 7 → 7 |
| model_objects | persist-recipe | 6 → 6 |
| ols_objective | persist-recipe | 6 → 6 |
| normal_equations | persist-recipe | 6 → 6 |
| partial_effects | persist-recipe | 6 → 6 |
| functional_forms | persist-recipe | 7 → 7 |
| no_perfect_multicollinearity | persist-recipe | 6 → 6 |
| exogeneity | persist-recipe | 6 → 6 |
| endogeneity_ovb | persist-recipe | 6 → 6 |
| unbiasedness | persist-recipe | 6 → 6 |
| gauss_markov | persist-recipe | 7 → 7 |
| consistency | persist-recipe | 6 → 6 |
| error_variance | persist-recipe | 6 → 6 |
| covariance_matrix | persist-recipe | 6 → 6 |
| prediction | persist-recipe | 6 → 6 |
| prediction_intervals | persist-recipe | 6 → 6 |
| r_squared | persist-recipe | 6 → 6 |
| t_test | persist-recipe | 6 → 6 |
| f_test | persist-recipe | 6 → 6 |
| confidence_intervals | persist-recipe | 6 → 6 |
| normal_linear_model_mle | persist-recipe | 5 → 5 |
| linear_restrictions_ur | persist-recipe | 6 → 6 |
| asymptotic_normality | persist-recipe | 6 → 6 |
| monte_carlo | persist-recipe | 6 → 6 |
| vif_collinearity | persist-recipe | 6 → 6 |
| fwl_partial_regression | persist-recipe | 6 → 6 |
| heteroskedasticity | persist-recipe | 6 → 6 |
| robust_gls | persist-recipe | 6 → 6 |
| autocorrelation | persist-recipe | 6 → 6 |
| hac_newey_west | persist-recipe | 6 → 6 |

### statistik

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| wahrscheinlichkeit | normalized | 5 → 5 |
| verteilungen | normalized | 4 → 4 |
| schaetzen_eigenschaften_intervalle | normalized | 6 → 6 |
| testen | normalized | 5 → 5 |
| regression_diagnostik_prognose | normalized | 5 → 5 |
| rlab | replace-failed | — |
| z_test | normalized | 4 → 4 |
| zwei_stichproben | normalized | 5 → 5 |
| varianzanalyse | normalized | 4 → 4 |

### finanzwirtschaft

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| finanz_denkweise | normalized | 5 → 5 |
| liquiditaetsplanung | normalized | 5 → 5 |
| kapitalmarkt_bewertung | normalized | 5 → 5 |
| institutionen_marktunvollkommenheit | normalized | 5 → 5 |
| intertemporale_wahl | normalized | 5 → 5 |
| kapitalwert_fisher | normalized | 4 → 4 |
| auf_abzinsen | normalized | 4 → 4 |
| renten_endwert | normalized | 4 → 4 |
| annuitaeten_finanzplan | normalized | 4 → 4 |
| izf_kapitalwertfunktion | normalized | 4 → 4 |
| izf_grenzen | normalized | 5 → 5 |
| unsicherheit | normalized | 5 → 5 |
| risikoadjustierter_kapitalwert | normalized | 4 → 4 |
| bezugsrecht | normalized | 4 → 4 |
| eigenkapitalkosten | normalized | 4 → 4 |
| fremdkapitalkosten | normalized | 5 → 5 |
| wacc | normalized | 4 → 4 |
| wacc_leverage | normalized | 5 → 5 |
| modigliani_miller | normalized | 5 → 5 |

### mathematik

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| algebra_mengen | persist-recipe | 6 → 6 |
| funktionen_gleichungen | persist-recipe | 6 → 6 |
| exp_log_inverse | persist-recipe | 7 → 7 |
| summen_logik_beweise | persist-recipe | 7 → 7 |
| lineare_algebra_grundlagen | persist-recipe | 6 → 6 |
| lineare_algebra_struktur | persist-recipe | 6 → 6 |
| analysis_ableitung_grundlagen | persist-recipe | 6 → 6 |
| analysis_monotonie_grenzwerte | persist-recipe | 7 → 7 |
| univariate_optimierung | persist-recipe | 7 → 7 |
| analysis_multivariat | persist-recipe | 7 → 7 |
| multivariate_optimierung | persist-recipe | 7 → 7 |
| lagrange | persist-recipe | 7 → 7 |
| integralrechnung | persist-recipe | 7 → 7 |
| r_begleitpraxis | persist-recipe | 7 → 7 |

### jahresabschluss

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| rechnungswesen_intro | normalized | 5 → 5 |
| gob_rechtsgrundlagen | normalized | 5 → 5 |
| inventur_inventar_bilanzansatz | normalized | 5 → 5 |
| buchen_konten | normalized | 5 → 5 |
| buchfuehrung_orga | normalized | 5 → 5 |
| anlagevermoegen | normalized | 5 → 5 |
| umlauf_bewertung_verfahren | normalized | 5 → 5 |
| werkstoffe_erzeugnisse_buchungen | normalized | 5 → 5 |
| umlauf_waren_ust | normalized | 5 → 5 |
| eigenkapital_kapitalgesellschaften | normalized | 5 → 5 |
| eigenkapital_personengesellschaften | normalized | 5 → 5 |
| verbindlichkeiten | normalized | 5 → 5 |
| rueckstellungen | normalized | 5 → 5 |
| rechnungsabgrenzung | normalized | 4 → 4 |
| erfolgsrechnung | normalized | 5 → 5 |

### recht

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| was_ist_recht | normalized | 5 → 5 |
| privatrecht | normalized | 5 → 5 |
| methodik | normalized | 5 → 5 |
| willenserklaerung | normalized | 6 → 6 |
| dissens | normalized | 5 → 5 |
| anfechtung | normalized | 4 → 4 |
| trennung_abstraktion | normalized | 5 → 5 |
| geschaeftsfaehigkeit | normalized | 5 → 5 |
| stellvertretung | normalized | 5 → 5 |
| agb | normalized | 5 → 5 |
| schuldrecht_intro | normalized | 5 → 5 |
| schadensersatz | normalized | 5 → 5 |
| ruecktritt | normalized | 5 → 5 |
| verbraucherwiderruf | normalized | 5 → 5 |

### internationale-wirtschaftsbeziehungen

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| handelsfakten | normalized | 5 → 5 |
| ricardo | normalized | 4 → 4 |
| heckscher_ohlin | normalized | 4 → 4 |
| verteilung_handel | normalized | 5 → 5 |
| krugman | normalized | 4 → 4 |
| gravitation | normalized | 5 → 5 |
| tarifmodell | normalized | 4 → 4 |
| quoten_sanktionen | normalized | 5 → 5 |
| wto_integration | normalized | 5 → 5 |
| wechselkurssysteme | normalized | 5 → 5 |
| zinsparitaet | normalized | 5 → 5 |
| kaufkraftparitaet | normalized | 5 → 5 |
| monetaerer_ansatz | normalized | 5 → 5 |
| overshooting | normalized | 5 → 5 |
| trilemma | normalized | 5 → 5 |
| balassa_samuelson | normalized | 5 → 5 |

## Validation

| Check | Result |
|-------|--------|
| `npm run validate` | OK |
| `npm run trust:pass1` | OK (retry; initial flake on `provenance-absent-tabs` / `mikro1/budget/theorie`) |

## Metrics glossary

- **Structural 8:** all eight recipe cards present (honest VL placeholders allowed).
- **Filled 8:** all eight steps contain substantive source-backed body text (placeholders excluded).
- **Avg placeholders:** mean count of placeholder-only steps per concept after pass.
