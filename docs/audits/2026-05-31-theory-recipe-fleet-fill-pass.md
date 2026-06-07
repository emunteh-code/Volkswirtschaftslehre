# Theory recipe fleet fill pass

Date: 2026-05-31
Mode: report

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
| Concepts with 8 **filled** steps (substantive VL content) | 213 (97.3%) | 214 (97.7%) |
| Concepts with 8 **structural** cards (incl. honest placeholders) | — | 214 (97.7%) |

| Module | Concepts | Structural 8 after | Avg filled after | Avg placeholders | Normalized |
|--------|----------|--------------------|------------------|--------------------|------------|
| mikro1 | 33 | 32 | 8 | 0 | 0 |
| mikro2 | 18 | 18 | 8 | 0 | 0 |
| makro1 | 14 | 14 | 8 | 0 | 0 |
| makro2 | 30 | 30 | 8 | 0 | 0 |
| oekonometrie | 32 | 32 | 8 | 0 | 0 |
| statistik | 14 | 10 | 7.7 | 0 | 0 |
| finanzwirtschaft | 19 | 19 | 8 | 0 | 0 |
| mathematik | 14 | 14 | 8 | 0 | 0 |
| jahresabschluss | 15 | 15 | 8 | 0 | 0 |
| recht | 14 | 14 | 8 | 0 | 0 |
| internationale-wirtschaftsbeziehungen | 16 | 16 | 8 | 0 | 0 |

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
| kmm | would-normalize | 8 → 8 |
| budget | would-normalize | 7 → 7 |
| praeferenz | would-normalize | 8 → 8 |
| indiff | would-normalize | 8 → 8 |
| ordinal | would-normalize | 8 → 8 |
| grs | would-normalize | 8 → 8 |
| lagrange | would-normalize | 8 → 8 |
| psubst | would-normalize | 8 → 8 |
| pkomp | would-normalize | 8 → 8 |
| cobbd | would-normalize | 8 → 8 |
| ces_u | would-normalize | 8 → 8 |
| homothet | would-normalize | 8 → 8 |
| hausopt | would-normalize | 8 → 8 |
| marshall | would-normalize | 8 → 8 |
| elast | would-normalize | 8 → 8 |
| normal | would-normalize | 8 → 8 |
| hicks | would-normalize | 8 → 8 |
| ausgaben | would-normalize | 8 → 8 |
| shephard | would-normalize | 8 → 8 |
| indnutzen | would-normalize | 8 → 8 |
| lambda | would-normalize | 8 → 8 |
| slutsky | would-normalize | 8 → 8 |
| anfang | would-normalize | 8 → 8 |
| arbeit | would-normalize | 8 → 8 |
| cv_ev | would-normalize | 8 → 8 |
| produktion | would-normalize | 8 → 8 |
| grts | would-normalize | 8 → 8 |
| skalener | would-normalize | 8 → 8 |
| kosten | would-normalize | 8 → 8 |
| gk_dk | would-normalize | 8 → 8 |
| gewinn | would-normalize | 8 → 8 |
| markt | would-normalize | 8 → 8 |
| monopol | would-normalize | 8 → 8 |

### mikro2

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| monopol_preissetzung | would-normalize | 8 → 8 |
| preisdiskriminierung | would-normalize | 8 → 8 |
| spieltheorie_statisch | would-normalize | 8 → 8 |
| spieltheorie_dynamisch | would-normalize | 8 → 8 |
| oligopol_cournot_bertrand | would-normalize | 8 → 8 |
| oligopol_stackelberg | would-normalize | 8 → 8 |
| intertemporaler_konsum | would-normalize | 8 → 8 |
| unsicherheit_versicherung | would-normalize | 8 → 8 |
| gleichgewicht_tausch | would-normalize | 8 → 8 |
| gleichgewicht_walras | would-normalize | 8 → 8 |
| gleichgewicht_produktion | would-normalize | 8 → 8 |
| wohlfahrt_theoreme | would-normalize | 8 → 8 |
| wohlfahrt_messung | would-normalize | 8 → 8 |
| externa_pigou | would-normalize | 8 → 8 |
| externa_institutionen | would-normalize | 8 → 8 |
| public_goods | would-normalize | 8 → 8 |
| information_adverse | would-normalize | 8 → 8 |
| information_moralhazard | would-normalize | 8 → 8 |

### makro1

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| makro_rahmen | would-normalize | 8 → 8 |
| vgr | would-normalize | 8 → 8 |
| guetermarkt | would-normalize | 8 → 8 |
| multiplikator | would-normalize | 8 → 8 |
| geldnachfrage | would-normalize | 8 → 8 |
| banken | would-normalize | 8 → 8 |
| islm | would-normalize | 8 → 8 |
| politikmix | would-normalize | 8 → 8 |
| realzins_fisher_erwartungen | would-normalize | 8 → 8 |
| realzins_risikopraemie_krisenkanal | would-normalize | 8 → 8 |
| arbeitsmarkt | would-normalize | 8 → 8 |
| phillips | would-normalize | 8 → 8 |
| islmpc | would-normalize | 8 → 8 |
| erwartungen | would-normalize | 0 → 8 |

### makro2

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| zahlungsbilanz | would-normalize | 8 → 8 |
| wechselkurs | would-normalize | 8 → 8 |
| kaufkraftparitaet | would-normalize | 8 → 8 |
| zinsparitaet | would-normalize | 8 → 8 |
| offene_is | would-normalize | 8 → 8 |
| nettoexporte | would-normalize | 8 → 8 |
| marshall_lerner | would-normalize | 8 → 8 |
| geldmengen | would-normalize | 8 → 8 |
| mundell_fleming | would-normalize | 8 → 8 |
| zp_kurve | would-normalize | 8 → 8 |
| wirtschaftspolitik_offen | would-normalize | 8 → 8 |
| wk_regime | would-normalize | 8 → 8 |
| wk_krisen | would-normalize | 8 → 8 |
| opt_waehrungsraum | would-normalize | 8 → 8 |
| phillipskurve | would-normalize | 8 → 8 |
| zeitinkonsistenz | would-normalize | 8 → 8 |
| barro_gordon | would-normalize | 8 → 8 |
| taylor_regel | would-normalize | 8 → 8 |
| inflation_targeting | would-normalize | 8 → 8 |
| inflation_kosten | would-normalize | 8 → 8 |
| wachstum_fakten | would-normalize | 8 → 8 |
| aggregierte_pf | would-normalize | 8 → 8 |
| solow_basis | would-normalize | 8 → 8 |
| steady_state | would-normalize | 8 → 8 |
| goldene_sparquote | would-normalize | 8 → 8 |
| tech_fortschritt | would-normalize | 8 → 8 |
| budgetrestriktion | would-normalize | 8 → 8 |
| schuldenquote_dynamik | would-normalize | 8 → 8 |
| ricardianisch | would-normalize | 8 → 8 |
| schuldenfinanzierung_monetarisierung | would-normalize | 8 → 8 |

### oekonometrie

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| matrix_notation | already-wrapped | 8 → 8 |
| sample_moments | would-normalize | 8 → 8 |
| distributions_df | already-wrapped | 8 → 8 |
| model_objects | already-wrapped | 8 → 8 |
| ols_objective | would-normalize | 8 → 8 |
| normal_equations | would-normalize | 8 → 8 |
| partial_effects | would-normalize | 8 → 8 |
| functional_forms | already-wrapped | 8 → 8 |
| no_perfect_multicollinearity | would-normalize | 8 → 8 |
| exogeneity | would-normalize | 8 → 8 |
| endogeneity_ovb | would-normalize | 8 → 8 |
| unbiasedness | would-normalize | 8 → 8 |
| gauss_markov | would-normalize | 8 → 8 |
| consistency | would-normalize | 8 → 8 |
| error_variance | already-wrapped | 8 → 8 |
| covariance_matrix | would-normalize | 8 → 8 |
| prediction | would-normalize | 8 → 8 |
| prediction_intervals | would-normalize | 8 → 8 |
| r_squared | would-normalize | 8 → 8 |
| t_test | would-normalize | 8 → 8 |
| f_test | would-normalize | 8 → 8 |
| confidence_intervals | would-normalize | 8 → 8 |
| normal_linear_model_mle | would-normalize | 8 → 8 |
| linear_restrictions_ur | would-normalize | 8 → 8 |
| asymptotic_normality | would-normalize | 8 → 8 |
| monte_carlo | would-normalize | 8 → 8 |
| vif_collinearity | would-normalize | 8 → 8 |
| fwl_partial_regression | would-normalize | 8 → 8 |
| heteroskedasticity | would-normalize | 8 → 8 |
| robust_gls | would-normalize | 8 → 8 |
| autocorrelation | would-normalize | 8 → 8 |
| hac_newey_west | would-normalize | 8 → 8 |

### statistik

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| deskriptiv | already-wrapped | 8 → 8 |
| bivariat | already-wrapped | 8 → 8 |
| wahrscheinlichkeit | would-normalize | 8 → 8 |
| verteilungen | would-normalize | 7 → 7 |
| schaetzen_verfahren | already-wrapped | 8 → 8 |
| nichtparametrisch | already-wrapped | 8 → 8 |
| schaetzen_eigenschaften_intervalle | would-normalize | 8 → 8 |
| testen | would-normalize | 8 → 8 |
| regression_schaetzung_inferenz | already-wrapped | 8 → 8 |
| regression_diagnostik_prognose | would-normalize | 8 → 8 |
| rlab | would-normalize | 3 → 7 |
| z_test | would-normalize | 7 → 7 |
| zwei_stichproben | would-normalize | 8 → 8 |
| varianzanalyse | would-normalize | 7 → 7 |

### finanzwirtschaft

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| finanz_denkweise | would-normalize | 8 → 8 |
| liquiditaetsplanung | would-normalize | 8 → 8 |
| kapitalmarkt_bewertung | would-normalize | 8 → 8 |
| institutionen_marktunvollkommenheit | would-normalize | 8 → 8 |
| intertemporale_wahl | would-normalize | 8 → 8 |
| kapitalwert_fisher | would-normalize | 8 → 8 |
| auf_abzinsen | would-normalize | 8 → 8 |
| renten_endwert | would-normalize | 8 → 8 |
| annuitaeten_finanzplan | would-normalize | 8 → 8 |
| izf_kapitalwertfunktion | would-normalize | 8 → 8 |
| izf_grenzen | would-normalize | 8 → 8 |
| unsicherheit | would-normalize | 8 → 8 |
| risikoadjustierter_kapitalwert | would-normalize | 8 → 8 |
| bezugsrecht | would-normalize | 8 → 8 |
| eigenkapitalkosten | would-normalize | 8 → 8 |
| fremdkapitalkosten | would-normalize | 8 → 8 |
| wacc | would-normalize | 8 → 8 |
| wacc_leverage | would-normalize | 8 → 8 |
| modigliani_miller | would-normalize | 8 → 8 |

### mathematik

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| algebra_mengen | already-wrapped | 8 → 8 |
| funktionen_gleichungen | already-wrapped | 8 → 8 |
| exp_log_inverse | already-wrapped | 8 → 8 |
| summen_logik_beweise | already-wrapped | 8 → 8 |
| lineare_algebra_grundlagen | already-wrapped | 8 → 8 |
| lineare_algebra_struktur | already-wrapped | 8 → 8 |
| analysis_ableitung_grundlagen | already-wrapped | 8 → 8 |
| analysis_monotonie_grenzwerte | already-wrapped | 8 → 8 |
| univariate_optimierung | already-wrapped | 8 → 8 |
| analysis_multivariat | already-wrapped | 8 → 8 |
| multivariate_optimierung | already-wrapped | 8 → 8 |
| lagrange | already-wrapped | 8 → 8 |
| integralrechnung | already-wrapped | 8 → 8 |
| r_begleitpraxis | already-wrapped | 8 → 8 |

### jahresabschluss

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| rechnungswesen_intro | would-normalize | 8 → 8 |
| gob_rechtsgrundlagen | would-normalize | 8 → 8 |
| inventur_inventar_bilanzansatz | would-normalize | 8 → 8 |
| buchen_konten | would-normalize | 8 → 8 |
| buchfuehrung_orga | would-normalize | 8 → 8 |
| anlagevermoegen | would-normalize | 8 → 8 |
| umlauf_bewertung_verfahren | would-normalize | 8 → 8 |
| werkstoffe_erzeugnisse_buchungen | would-normalize | 8 → 8 |
| umlauf_waren_ust | would-normalize | 8 → 8 |
| eigenkapital_kapitalgesellschaften | would-normalize | 8 → 8 |
| eigenkapital_personengesellschaften | would-normalize | 8 → 8 |
| verbindlichkeiten | would-normalize | 8 → 8 |
| rueckstellungen | would-normalize | 8 → 8 |
| rechnungsabgrenzung | would-normalize | 8 → 8 |
| erfolgsrechnung | would-normalize | 8 → 8 |

### recht

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| was_ist_recht | would-normalize | 8 → 8 |
| privatrecht | would-normalize | 8 → 8 |
| methodik | would-normalize | 8 → 8 |
| willenserklaerung | would-normalize | 8 → 8 |
| dissens | would-normalize | 8 → 8 |
| anfechtung | would-normalize | 8 → 8 |
| trennung_abstraktion | would-normalize | 8 → 8 |
| geschaeftsfaehigkeit | would-normalize | 8 → 8 |
| stellvertretung | would-normalize | 8 → 8 |
| agb | would-normalize | 8 → 8 |
| schuldrecht_intro | would-normalize | 8 → 8 |
| schadensersatz | would-normalize | 8 → 8 |
| ruecktritt | would-normalize | 8 → 8 |
| verbraucherwiderruf | would-normalize | 8 → 8 |

### internationale-wirtschaftsbeziehungen

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| handelsfakten | would-normalize | 8 → 8 |
| ricardo | would-normalize | 8 → 8 |
| heckscher_ohlin | would-normalize | 8 → 8 |
| verteilung_handel | would-normalize | 8 → 8 |
| krugman | would-normalize | 8 → 8 |
| gravitation | would-normalize | 8 → 8 |
| tarifmodell | would-normalize | 8 → 8 |
| quoten_sanktionen | would-normalize | 8 → 8 |
| wto_integration | would-normalize | 8 → 8 |
| wechselkurssysteme | would-normalize | 8 → 8 |
| zinsparitaet | would-normalize | 8 → 8 |
| kaufkraftparitaet | would-normalize | 8 → 8 |
| monetaerer_ansatz | would-normalize | 8 → 8 |
| overshooting | would-normalize | 8 → 8 |
| trilemma | would-normalize | 8 → 8 |
| balassa_samuelson | would-normalize | 8 → 8 |

## Validation

| Check | Result |
|-------|--------|
| `npm run validate` | see CI |
| `npm run trust:pass1` | see CI |
