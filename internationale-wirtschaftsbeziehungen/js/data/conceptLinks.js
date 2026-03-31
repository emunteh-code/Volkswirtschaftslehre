// ============================================================
// CONCEPT LINKS — Int. Wirtschaftsbeziehungen
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  ricardo:          { uses: [], usedBy: ['heckscher_ohlin', 'handelspolitik'] },
  heckscher_ohlin:  { uses: ['ricardo'], usedBy: ['skalenertraege'] },
  skalenertraege:   { uses: ['heckscher_ohlin'], usedBy: [] },
  handelspolitik:   { uses: ['ricardo'], usedBy: ['zoelle'] },
  zoelle:           { uses: ['handelspolitik'], usedBy: [] },
  regionalismus:    { uses: [], usedBy: [] }
};
