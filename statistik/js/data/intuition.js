// ============================================================
// INTUITION DATA — Statistik
// ============================================================

export const INTUITION = {
  deskriptiv: 'Deskriptive Statistik fasst Daten zusammen, ohne über die Stichprobe hinaus zu verallgemeinern. Mittelwert, Median und Standardabweichung sind die zentralen Werkzeuge.',
  bivariat: 'Bivariate Analyse untersucht den Zusammenhang zweier Variablen — Kovarianz und Korrelation messen Stärke und Richtung.',
  wahrscheinlichkeit: 'Wahrscheinlichkeitsrechnung formalisiert Unsicherheit. Bayes-Theorem und bedingte Wahrscheinlichkeit sind die Grundpfeiler der Inferenz.',
  verteilungen: 'Zufallsvariablen übersetzen Zufallsexperimente in Zahlen. Erwartungswert und Varianz charakterisieren deren Verteilung.',
  schaetzen_verfahren: 'Schätzverfahren beantworten, wie ein Parameter aus Stichprobendaten konstruiert wird (z.B. MoM, ML, KQ-Perspektive).',
  schaetzen_eigenschaften_intervalle: 'Schätzereigenschaften und Konfidenzintervalle beantworten, wie verlässlich und präzise ein Schätzer ist.',
  testen: 'Ein Hypothesentest prüft, ob die Daten mit einer Nullhypothese vereinbar sind. Der p-Wert misst die Evidenz gegen H₀.',
  regression_schaetzung_inferenz: 'Regression-Schätzung und Inferenz klären Parameter, Signifikanz und Interpretation des linearen Zusammenhangs.',
  regression_diagnostik_prognose: 'Regression-Diagnostik und Prognose prüfen Modellannahmen und trennen Erwartungswert- von Einzelprognoseaussagen.',
  rlab: 'R ermöglicht die praktische Umsetzung statistischer Methoden — von deskriptiver Analyse bis zur Regressionsdiagnostik.',
  z_test:
    'Der z-Test ist der Referenzfall mit bekannter Populationsstreuung σ (oder großem n mit Normalapproximation). Sobald σ unbekannt ist, führt der t-Test die Inferenz; z und t konvergieren für große Freiheitsgrade.',
  zwei_stichproben:
    'Zwei-Stichproben-Tests vergleichen Erwartungswerte oder Verteilungen zwischen Gruppen. Welch-t ist oft robuster als der gepoolte t-Test, wenn Varianzen nicht ähnlich sind; Paardaten brauchen andere Struktur als zwei unabhängige Stichproben.',
  varianzanalyse:
    'ANOVA bündelt mehrere Gruppenmittel in einem globalen F-Test und behält das Niveau besser als eine Serie ungekorrigierter paarweiser t-Tests. Signifikanz bedeutet „nicht alle Mittel gleich“, nicht automatisch jedes Paar unterschiedlich.',
  nichtparametrisch:
    'Nichtparametrische Tests arbeiten mit Rängen oder Vorzeichen und verzichten auf starke Verteilungsannahmen. Sie sind bei Ordinaldaten, Ausreißern oder kleinen n oft die sicherere Wahl; bei ideal erfüllter Normalität sind parametrische Tests tendenziell effizienter.'
};
