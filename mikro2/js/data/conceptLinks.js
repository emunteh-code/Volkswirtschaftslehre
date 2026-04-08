// ============================================================
// CONCEPT LINKS — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  spieltheorie_statisch:   { uses: [], usedBy: ['spieltheorie_dynamisch', 'oligopol_cournot_bertrand'] },
  spieltheorie_dynamisch:  { uses: ['spieltheorie_statisch'], usedBy: [] },
  oligopol_cournot_bertrand: { uses: ['spieltheorie_statisch'], usedBy: ['oligopol_stackelberg'] },
  oligopol_stackelberg:    { uses: ['oligopol_cournot_bertrand'], usedBy: [] },
  gleichgewicht_tausch:  { uses: [], usedBy: ['gleichgewicht_walras', 'wohlfahrt_theoreme'] },
  gleichgewicht_walras:  { uses: ['gleichgewicht_tausch'], usedBy: ['wohlfahrt_theoreme'] },
  wohlfahrt_theoreme:    { uses: ['gleichgewicht_tausch', 'gleichgewicht_walras'], usedBy: ['wohlfahrt_messung'] },
  wohlfahrt_messung:     { uses: ['wohlfahrt_theoreme'], usedBy: [] },
  externa_pigou:         { uses: [], usedBy: ['externa_institutionen'] },
  externa_institutionen: { uses: ['externa_pigou'], usedBy: [] },
  public_goods:   { uses: [], usedBy: [] },
  information_adverse: { uses: [], usedBy: ['information_moralhazard'] },
  information_moralhazard: { uses: ['information_adverse'], usedBy: [] }
};
