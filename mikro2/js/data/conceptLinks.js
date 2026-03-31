// ============================================================
// CONCEPT LINKS — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  spieltheorie:   { uses: [], usedBy: ['oligopol'] },
  oligopol:       { uses: ['spieltheorie'], usedBy: [] },
  gleichgewicht:  { uses: [], usedBy: ['wohlfahrt'] },
  wohlfahrt:      { uses: ['gleichgewicht'], usedBy: [] },
  externa:        { uses: [], usedBy: [] },
  public_goods:   { uses: [], usedBy: [] },
  information:    { uses: [], usedBy: [] }
};
