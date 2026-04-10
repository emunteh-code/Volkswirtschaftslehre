// ============================================================
// CONCEPT LINKS — Statistik
// Source-distilled prerequisite and transfer graph
// ============================================================

export const CONCEPT_LINKS = {
  deskriptiv: {
    uses: [],
    usedBy: ['bivariat', 'wahrscheinlichkeit', 'rlab']
  },
  bivariat: {
    uses: ['deskriptiv'],
    usedBy: ['regression_schaetzung_inferenz', 'rlab']
  },
  wahrscheinlichkeit: {
    uses: ['deskriptiv'],
    usedBy: ['verteilungen', 'testen']
  },
  verteilungen: {
    uses: ['wahrscheinlichkeit'],
    usedBy: ['schaetzen_verfahren', 'schaetzen_eigenschaften_intervalle', 'z_test']
  },
  schaetzen_verfahren: {
    uses: ['verteilungen', 'deskriptiv'],
    usedBy: ['schaetzen_eigenschaften_intervalle', 'testen', 'regression_schaetzung_inferenz']
  },
  schaetzen_eigenschaften_intervalle: {
    uses: ['schaetzen_verfahren', 'verteilungen'],
    usedBy: ['testen', 'z_test', 'zwei_stichproben', 'regression_schaetzung_inferenz']
  },
  testen: {
    uses: ['schaetzen_eigenschaften_intervalle', 'wahrscheinlichkeit'],
    usedBy: ['z_test', 'zwei_stichproben', 'varianzanalyse', 'nichtparametrisch', 'regression_schaetzung_inferenz']
  },
  z_test: {
    uses: ['verteilungen', 'schaetzen_eigenschaften_intervalle', 'testen'],
    usedBy: []
  },
  zwei_stichproben: {
    uses: ['testen', 'schaetzen_eigenschaften_intervalle'],
    usedBy: ['varianzanalyse', 'nichtparametrisch']
  },
  varianzanalyse: {
    uses: ['testen', 'zwei_stichproben'],
    usedBy: ['rlab']
  },
  regression_schaetzung_inferenz: {
    uses: ['bivariat', 'schaetzen_verfahren', 'testen'],
    usedBy: ['regression_diagnostik_prognose', 'rlab']
  },
  regression_diagnostik_prognose: {
    uses: ['regression_schaetzung_inferenz'],
    usedBy: ['rlab']
  },
  nichtparametrisch: {
    uses: ['zwei_stichproben', 'varianzanalyse'],
    usedBy: []
  },
  rlab: {
    uses: [
      'deskriptiv',
      'bivariat',
      'schaetzen_eigenschaften_intervalle',
      'testen',
      'regression_schaetzung_inferenz',
      'varianzanalyse'
    ],
    usedBy: []
  }
};
