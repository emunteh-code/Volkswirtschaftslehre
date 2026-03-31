// ============================================================
// CONCEPT LINKS — Mathematik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  funktionen:   { uses: [], usedBy: ['ableitung', 'linalg'] },
  ableitung:    { uses: ['funktionen'], usedBy: ['optimierung', 'lagrange', 'integral'] },
  optimierung:  { uses: ['ableitung'], usedBy: ['lagrange'] },
  lagrange:     { uses: ['optimierung'], usedBy: [] },
  linalg:       { uses: ['funktionen'], usedBy: [] },
  integral:     { uses: ['ableitung'], usedBy: [] }
};
