// ============================================================
// CONCEPT LINKS — Mathematik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  funktionen_grundlagen: { uses: [], usedBy: ['logarithmus_umkehr', 'ableitung', 'linalg_matrizen'] },
  logarithmus_umkehr: { uses: ['funktionen_grundlagen'], usedBy: ['ableitung'] },
  ableitung: { uses: ['funktionen_grundlagen', 'logarithmus_umkehr'], usedBy: ['optimierung', 'lagrange', 'integral'] },
  optimierung: { uses: ['ableitung'], usedBy: ['lagrange'] },
  lagrange: { uses: ['optimierung'], usedBy: [] },
  linalg_matrizen: { uses: ['funktionen_grundlagen'], usedBy: ['linalg_det_inverse_lgs'] },
  linalg_det_inverse_lgs: { uses: ['linalg_matrizen'], usedBy: [] },
  integral: { uses: ['ableitung'], usedBy: [] },
};
