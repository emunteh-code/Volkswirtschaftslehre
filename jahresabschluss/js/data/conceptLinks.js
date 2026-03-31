// ============================================================
// CONCEPT LINKS — Jahresabschluss
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  grundlagen:       { uses: [], usedBy: ['bilanz', 'guv'] },
  bilanz:           { uses: ['grundlagen'], usedBy: ['anlagevermoegen', 'umlaufvermoegen', 'passiva'] },
  guv:              { uses: ['grundlagen'], usedBy: [] },
  bewertung:        { uses: [], usedBy: ['anlagevermoegen', 'umlaufvermoegen'] },
  anlagevermoegen:  { uses: ['bilanz', 'bewertung'], usedBy: [] },
  umlaufvermoegen:  { uses: ['bilanz', 'bewertung'], usedBy: [] },
  passiva:          { uses: ['bilanz'], usedBy: [] }
};
