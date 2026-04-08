// ============================================================
// CONCEPT LINKS — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  spieltheorie_statisch:   { uses: [], usedBy: ['spieltheorie_dynamisch', 'oligopol_cournot_bertrand'] },
  spieltheorie_dynamisch:  { uses: ['spieltheorie_statisch'], usedBy: [] },
  oligopol_cournot_bertrand: { uses: ['spieltheorie_statisch'], usedBy: ['oligopol_stackelberg'] },
  oligopol_stackelberg:    { uses: ['oligopol_cournot_bertrand'], usedBy: [] },
  gleichgewicht:  { uses: [], usedBy: ['wohlfahrt'] },
  wohlfahrt:      { uses: ['gleichgewicht'], usedBy: [] },
  externa:        { uses: [], usedBy: [] },
  public_goods:   { uses: [], usedBy: [] },
  information_adverse: { uses: [], usedBy: ['information_moralhazard'] },
  information_moralhazard: { uses: ['information_adverse'], usedBy: [] }
};
