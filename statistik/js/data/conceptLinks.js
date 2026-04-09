// ============================================================
// CONCEPT LINKS — Statistik
// ============================================================

export const CONCEPT_LINKS = {
  deskriptiv:         ['bivariat', 'regression_schaetzung_inferenz'],
  bivariat:           ['deskriptiv', 'regression_schaetzung_inferenz'],
  wahrscheinlichkeit: ['verteilungen', 'testen'],
  verteilungen:       ['wahrscheinlichkeit', 'schaetzen_verfahren', 'schaetzen_eigenschaften_intervalle'],
  schaetzen_verfahren: ['verteilungen', 'schaetzen_eigenschaften_intervalle', 'testen'],
  schaetzen_eigenschaften_intervalle: ['schaetzen_verfahren', 'testen'],
  testen:             ['schaetzen_verfahren', 'schaetzen_eigenschaften_intervalle', 'regression_schaetzung_inferenz'],
  regression_schaetzung_inferenz: ['bivariat', 'testen', 'regression_diagnostik_prognose'],
  regression_diagnostik_prognose: ['regression_schaetzung_inferenz'],
  rlab:               ['deskriptiv', 'bivariat', 'schaetzen_eigenschaften_intervalle', 'testen', 'regression_schaetzung_inferenz', 'varianzanalyse']
};
