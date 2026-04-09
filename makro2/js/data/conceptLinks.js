// ============================================================
// CONCEPT LINKS — Makroökonomik II
// Visible prerequisite / successor logic for the benchmark module
// ============================================================

export const CONCEPT_LINKS = {
  zahlungsbilanz:   { uses: [],                                        usedBy: ['wechselkurs', 'offene_is', 'nettoexporte'] },
  wechselkurs:      { uses: ['zahlungsbilanz'],                        usedBy: ['kaufkraftparitaet', 'zinsparitaet', 'nettoexporte', 'marshall_lerner'] },
  kaufkraftparitaet:{ uses: ['wechselkurs'],                           usedBy: ['marshall_lerner', 'mundell_fleming'] },
  zinsparitaet:     { uses: ['wechselkurs'],                           usedBy: ['mundell_fleming', 'wk_regime'] },

  offene_is:        { uses: ['zahlungsbilanz', 'nettoexporte'],        usedBy: ['marshall_lerner', 'mundell_fleming', 'wirtschaftspolitik_offen'] },
  nettoexporte:     { uses: ['wechselkurs', 'zahlungsbilanz'],         usedBy: ['offene_is', 'marshall_lerner', 'mundell_fleming', 'zp_kurve'] },
  marshall_lerner:  { uses: ['kaufkraftparitaet', 'nettoexporte'],     usedBy: ['mundell_fleming', 'wirtschaftspolitik_offen', 'wk_regime'] },
  geldmengen:       { uses: [],                                        usedBy: ['mundell_fleming', 'taylor_regel'] },
  mundell_fleming:  { uses: ['offene_is', 'zinsparitaet', 'geldmengen', 'marshall_lerner'], usedBy: ['zp_kurve', 'wirtschaftspolitik_offen', 'wk_regime', 'wk_krisen'] },
  zp_kurve:         { uses: ['mundell_fleming', 'zahlungsbilanz', 'zinsparitaet', 'nettoexporte'], usedBy: ['wirtschaftspolitik_offen', 'wk_regime'] },
  wirtschaftspolitik_offen: { uses: ['mundell_fleming', 'zp_kurve', 'wk_regime'], usedBy: ['wk_regime', 'wk_krisen', 'opt_waehrungsraum'] },
  wk_regime:        { uses: ['mundell_fleming', 'zp_kurve', 'zinsparitaet'],       usedBy: ['wk_krisen', 'opt_waehrungsraum', 'schuldenquote_dynamik', 'schuldenfinanzierung_monetarisierung'] },
  wk_krisen:        { uses: ['wk_regime', 'zinsparitaet', 'wirtschaftspolitik_offen'],             usedBy: ['schuldenquote_dynamik', 'schuldenfinanzierung_monetarisierung'] },
  opt_waehrungsraum:{ uses: ['wk_regime', 'wirtschaftspolitik_offen'],              usedBy: ['schuldenquote_dynamik'] },

  phillipskurve:    { uses: [],                                        usedBy: ['zeitinkonsistenz', 'barro_gordon', 'taylor_regel', 'inflation_kosten'] },
  zeitinkonsistenz: { uses: ['phillipskurve'],                         usedBy: ['barro_gordon', 'taylor_regel', 'inflation_targeting'] },
  barro_gordon:     { uses: ['zeitinkonsistenz', 'phillipskurve'],     usedBy: ['taylor_regel', 'inflation_targeting'] },
  taylor_regel:     { uses: ['phillipskurve', 'zeitinkonsistenz', 'barro_gordon', 'geldmengen'], usedBy: ['inflation_targeting', 'inflation_kosten', 'schuldenquote_dynamik', 'schuldenfinanzierung_monetarisierung'] },
  inflation_targeting: { uses: ['taylor_regel', 'geldmengen', 'zeitinkonsistenz', 'barro_gordon'], usedBy: ['inflation_kosten', 'schuldenfinanzierung_monetarisierung'] },
  inflation_kosten: { uses: ['phillipskurve', 'inflation_targeting', 'taylor_regel'], usedBy: ['schuldenfinanzierung_monetarisierung'] },

  wachstum_fakten:  { uses: [],                                        usedBy: ['aggregierte_pf', 'solow_basis', 'tech_fortschritt'] },
  aggregierte_pf:   { uses: ['wachstum_fakten'],                       usedBy: ['solow_basis', 'steady_state', 'goldene_sparquote', 'tech_fortschritt'] },
  solow_basis:      { uses: ['aggregierte_pf', 'wachstum_fakten'],     usedBy: ['steady_state', 'goldene_sparquote', 'tech_fortschritt'] },
  steady_state:     { uses: ['solow_basis', 'aggregierte_pf'],         usedBy: ['goldene_sparquote', 'tech_fortschritt', 'schuldenquote_dynamik'] },
  goldene_sparquote:{ uses: ['steady_state', 'solow_basis'],           usedBy: ['tech_fortschritt'] },
  tech_fortschritt: { uses: ['solow_basis', 'steady_state', 'aggregierte_pf', 'wachstum_fakten'], usedBy: ['schuldenquote_dynamik'] },
  budgetrestriktion:{ uses: [],                                        usedBy: ['schuldenquote_dynamik', 'ricardianisch', 'schuldenfinanzierung_monetarisierung'] },
  schuldenquote_dynamik: { uses: ['budgetrestriktion', 'tech_fortschritt', 'taylor_regel', 'wk_regime', 'wk_krisen', 'opt_waehrungsraum'], usedBy: ['ricardianisch', 'schuldenfinanzierung_monetarisierung'] },
  ricardianisch:    { uses: ['budgetrestriktion', 'schuldenquote_dynamik'], usedBy: ['schuldenfinanzierung_monetarisierung'] },
  schuldenfinanzierung_monetarisierung: { uses: ['budgetrestriktion', 'schuldenquote_dynamik', 'inflation_targeting', 'inflation_kosten', 'ricardianisch'], usedBy: [] }
};
