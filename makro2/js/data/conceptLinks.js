// ============================================================
// CONCEPT LINKS — Makroökonomik II
// Visible prerequisite / successor logic for the benchmark module
// ============================================================

export const CONCEPT_LINKS = {
  zahlungsbilanz:   { uses: [],                                        usedBy: ['wechselkurs', 'offene_is', 'nettoexporte'] },
  wechselkurs:      { uses: ['zahlungsbilanz'],                        usedBy: ['kaufkraftparitaet', 'zinsparitaet', 'nettoexporte', 'marshall_lerner'] },
  kaufkraftparitaet:{ uses: ['wechselkurs'],                           usedBy: ['marshall_lerner', 'mundell_fleming'] },
  zinsparitaet:     { uses: ['wechselkurs'],                           usedBy: ['mundell_fleming', 'wk_regime'] },

  offene_is:        { uses: ['zahlungsbilanz', 'nettoexporte'],        usedBy: ['marshall_lerner', 'mundell_fleming'] },
  nettoexporte:     { uses: ['wechselkurs', 'zahlungsbilanz'],         usedBy: ['offene_is', 'marshall_lerner', 'mundell_fleming'] },
  marshall_lerner:  { uses: ['kaufkraftparitaet', 'nettoexporte'],     usedBy: ['mundell_fleming', 'wk_regime'] },
  geldmengen:       { uses: [],                                        usedBy: ['mundell_fleming', 'taylor_regel'] },
  mundell_fleming:  { uses: ['offene_is', 'zinsparitaet', 'geldmengen', 'marshall_lerner'], usedBy: ['wk_regime', 'wk_krisen'] },
  wk_regime:        { uses: ['mundell_fleming', 'zinsparitaet'],       usedBy: ['wk_krisen', 'schuldenquote'] },
  wk_krisen:        { uses: ['wk_regime', 'zinsparitaet'],             usedBy: ['schuldenquote'] },

  phillipskurve:    { uses: [],                                        usedBy: ['zeitinkonsistenz', 'barro_gordon', 'taylor_regel'] },
  zeitinkonsistenz: { uses: ['phillipskurve'],                         usedBy: ['barro_gordon', 'taylor_regel'] },
  barro_gordon:     { uses: ['zeitinkonsistenz', 'phillipskurve'],     usedBy: ['taylor_regel'] },
  taylor_regel:     { uses: ['phillipskurve', 'zeitinkonsistenz', 'barro_gordon', 'geldmengen'], usedBy: ['schuldenquote'] },

  aggregierte_pf:   { uses: [],                                        usedBy: ['solow_basis', 'tech_fortschritt'] },
  solow_basis:      { uses: ['aggregierte_pf'],                        usedBy: ['tech_fortschritt', 'schuldenquote'] },
  tech_fortschritt: { uses: ['solow_basis', 'aggregierte_pf'],         usedBy: ['schuldenquote'] },
  schuldenquote:    { uses: ['tech_fortschritt', 'taylor_regel', 'wk_regime'], usedBy: [] }
};
