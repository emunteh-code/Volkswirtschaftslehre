// ============================================================
// CONCEPT LINKS — Makroökonomik II
// Prerequisite and successor relationships between all 34 concepts
// ============================================================

export const CONCEPT_LINKS = {
  // ── Offene VW I ──
  wechselkurs:       { uses: [],                              usedBy: ['zinsparitaet','zahlungsbilanz','marshall_lerner','offene_is','mundell_fleming','kaufkraftparitaet'] },
  zinsparitaet:      { uses: ['wechselkurs'],                 usedBy: ['mundell_fleming','zp_kurve','wk_krisen'] },
  zahlungsbilanz:    { uses: ['wechselkurs'],                 usedBy: ['offene_is','nettoexporte','zp_kurve'] },
  marshall_lerner:   { uses: ['wechselkurs'],                 usedBy: ['nettoexporte','offene_is','mundell_fleming'] },

  // ── Offene VW II ──
  offene_is:         { uses: ['wechselkurs','zahlungsbilanz','marshall_lerner'], usedBy: ['mundell_fleming','wirtschaftspolitik_offen'] },
  nettoexporte:      { uses: ['wechselkurs','zahlungsbilanz','marshall_lerner'], usedBy: ['offene_is','mundell_fleming'] },

  // ── Mundell-Fleming ──
  mundell_fleming:   { uses: ['offene_is','nettoexporte','zinsparitaet','geldmengen'], usedBy: ['zp_kurve','wirtschaftspolitik_offen','wk_regime'] },
  zp_kurve:          { uses: ['zahlungsbilanz','zinsparitaet','mundell_fleming'], usedBy: ['wirtschaftspolitik_offen','wk_krisen'] },
  wirtschaftspolitik_offen: { uses: ['mundell_fleming','zp_kurve'], usedBy: ['wk_regime'] },

  // ── WK-Regime & Krisen ──
  wk_regime:         { uses: ['mundell_fleming','wirtschaftspolitik_offen'], usedBy: ['wk_krisen','opt_waehrungsraum','eurozone'] },
  wk_krisen:         { uses: ['zinsparitaet','zp_kurve','wk_regime'],        usedBy: ['eurozone'] },
  opt_waehrungsraum: { uses: ['wk_regime'],                  usedBy: ['eurozone'] },
  eurozone:          { uses: ['wk_regime','wk_krisen','opt_waehrungsraum','schuldenregeln'], usedBy: [] },

  // ── Politische Ökonomie ──
  zeitinkonsistenz:  { uses: ['phillipskurve'],               usedBy: ['barro_gordon','inflation_targeting','taylor_regel'] },
  barro_gordon:      { uses: ['zeitinkonsistenz','phillipskurve'], usedBy: ['inflation_targeting','schuldenregeln'] },
  schuldenregeln:    { uses: ['barro_gordon','schuldenquote'], usedBy: ['eurozone'] },

  // ── Staatsverschuldung ──
  budgetrestriktion: { uses: [],                              usedBy: ['schuldenquote','ricardianisch','schuldenregeln'] },
  schuldenquote:     { uses: ['budgetrestriktion'],           usedBy: ['schuldenregeln','ricardianisch'] },
  ricardianisch:     { uses: ['budgetrestriktion','schuldenquote'], usedBy: [] },

  // ── Geldpolitik II ──
  taylor_regel:      { uses: ['phillipskurve','zeitinkonsistenz','geldmengen'], usedBy: ['inflation_targeting','inflation_kosten'] },
  inflation_targeting: { uses: ['taylor_regel','zeitinkonsistenz','barro_gordon'], usedBy: ['unkonv_geldpolitik'] },
  inflation_kosten:  { uses: ['phillipskurve','taylor_regel'], usedBy: ['unkonv_geldpolitik'] },
  unkonv_geldpolitik:{ uses: ['geldmengen','inflation_targeting','inflation_kosten'], usedBy: [] },

  // ── Wachstum I ──
  wachstum_fakten:   { uses: [],                              usedBy: ['aggregierte_pf','solow_basis','solow_residuum'] },
  aggregierte_pf:    { uses: ['wachstum_fakten'],             usedBy: ['solow_basis','solow_residuum','tech_fortschritt'] },

  // ── Solow-Modell ──
  solow_basis:       { uses: ['aggregierte_pf','wachstum_fakten'], usedBy: ['steady_state','goldene_sparquote'] },
  steady_state:      { uses: ['solow_basis'],                 usedBy: ['goldene_sparquote','tech_fortschritt'] },
  goldene_sparquote: { uses: ['steady_state'],                usedBy: ['tech_fortschritt'] },

  // ── Solow mit TF ──
  tech_fortschritt:  { uses: ['steady_state','aggregierte_pf'], usedBy: ['solow_residuum','institutionen'] },
  solow_residuum:    { uses: ['aggregierte_pf','wachstum_fakten','tech_fortschritt'], usedBy: ['institutionen'] },
  institutionen:     { uses: ['solow_residuum','tech_fortschritt'], usedBy: [] },

  // ── Querschnitt ──
  phillipskurve:     { uses: [],                              usedBy: ['zeitinkonsistenz','barro_gordon','taylor_regel','inflation_kosten'] },
  kaufkraftparitaet: { uses: ['wechselkurs'],                 usedBy: ['offene_is','nettoexporte'] },
  geldmengen:        { uses: [],                              usedBy: ['mundell_fleming','taylor_regel','unkonv_geldpolitik'] },
};
