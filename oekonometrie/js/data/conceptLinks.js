// ============================================================
// CONCEPT LINKS — Ökonometrie
// Final Benchmark Standard v14.0
// ============================================================

export const CONCEPT_LINKS = {
  ols_intro:        { uses: [], usedBy: ['gauss_markov', 'fit', 'inference'] },
  gauss_markov:     { uses: ['ols_intro'], usedBy: ['properties', 'heteroskedasticity'] },
  properties:       { uses: ['gauss_markov'], usedBy: [] },
  fit:              { uses: ['ols_intro'], usedBy: [] },
  inference:        { uses: ['ols_intro'], usedBy: ['heteroskedasticity'] },
  multicollinearity: { uses: ['ols_intro'], usedBy: [] },
  heteroskedasticity: { uses: ['gauss_markov', 'inference'], usedBy: [] },
  autocorrelation:  { uses: ['gauss_markov'], usedBy: [] },
  specification:    { uses: ['gauss_markov'], usedBy: [] }
};
