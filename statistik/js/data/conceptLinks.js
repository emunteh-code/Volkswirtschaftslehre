// ============================================================
// CONCEPT LINKS — Statistik
// Source-distilled prerequisite and transfer graph
// ============================================================

export const CONCEPT_LINKS = {
  deskriptiv: {
    uses: [],
    usedBy: ['bivariat', 'wahrscheinlichkeit', 'nichtparametrisch', 'rlab']
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
    usedBy: ['schaetzen_verfahren', 'nichtparametrisch', 'schaetzen_eigenschaften_intervalle', 'z_test']
  },
  schaetzen_verfahren: {
    uses: ['verteilungen', 'deskriptiv'],
    usedBy: ['nichtparametrisch', 'schaetzen_eigenschaften_intervalle', 'testen', 'regression_schaetzung_inferenz']
  },
  schaetzen_eigenschaften_intervalle: {
    uses: ['schaetzen_verfahren', 'verteilungen'],
    usedBy: ['testen', 'z_test', 'zwei_stichproben', 'regression_schaetzung_inferenz']
  },
  testen: {
    uses: ['schaetzen_eigenschaften_intervalle', 'wahrscheinlichkeit'],
    usedBy: ['z_test', 'zwei_stichproben', 'varianzanalyse', 'regression_schaetzung_inferenz']
  },
  z_test: {
    uses: ['verteilungen', 'schaetzen_eigenschaften_intervalle', 'testen'],
    usedBy: []
  },
  zwei_stichproben: {
    uses: ['testen', 'schaetzen_eigenschaften_intervalle'],
    usedBy: ['varianzanalyse']
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
    uses: ['deskriptiv', 'verteilungen', 'schaetzen_verfahren'],
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
