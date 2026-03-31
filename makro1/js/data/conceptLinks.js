// ============================================================
// CONCEPT LINKS — Makroökonomik I
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  vgr:          { uses: [], usedBy: ['guetermarkt', 'finanzmarkt'] },
  guetermarkt:  { uses: ['vgr'], usedBy: ['islm'] },
  finanzmarkt:  { uses: ['vgr'], usedBy: ['islm'] },
  islm:         { uses: ['guetermarkt', 'finanzmarkt'], usedBy: ['islmpc'] },
  arbeitsmarkt: { uses: [], usedBy: ['phillips', 'islmpc'] },
  phillips:     { uses: ['arbeitsmarkt'], usedBy: ['islmpc'] },
  islmpc:       { uses: ['islm', 'phillips'], usedBy: [] },
  erwartungen:  { uses: ['islmpc'], usedBy: [] }
};
