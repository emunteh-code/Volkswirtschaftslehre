// ============================================================
// MASTERY DATA — Statistik
// Source-distilled benchmark checklist layer
// ============================================================

export const MASTERY = {
  deskriptiv: [
    'Mittelwert, Median, IQR und Standardabweichung passend zur Verteilungsform auswählen',
    'Ausreißer, Schiefe und gruppierte Daten nicht nur rechnen, sondern sprachlich deuten',
    'Boxplot-, Histogramm- und Kennzahlenlogik in einer gemeinsamen Aussage verbinden',
    'Bei Ausreißern begründen, warum Mittelwert und Median auseinanderlaufen'
  ],
  bivariat: [
    'Kovarianz, Pearson und Spearman begrifflich sauber trennen',
    'Einen Streudiagramm-Befund als Richtung, Stärke und Robustheitsfrage formulieren',
    'Korrelation und Kausalität strikt auseinanderhalten',
    'Bivariate Kennzahlen als Vorstufe zur Regressionslogik lesen'
  ],
  wahrscheinlichkeit: [
    'Ergebnisraum, Ereignis und bedingte Wahrscheinlichkeit formal korrekt aufschreiben',
    'Unabhängigkeit, Disjunktheit und Gegenwahrscheinlichkeit nicht verwechseln',
    'Bayes-Aufgaben mit Basisrate, Trefferquote und Falsch-Positiv-Rate sauber aufbauen',
    'Die totale Wahrscheinlichkeit als Nennerlogik sicher einsetzen'
  ],
  verteilungen: [
    'Diskrete und stetige Zufallsvariablen samt Erwartungswert und Varianz korrekt unterscheiden',
    'Binomial-, Normal- und ZGS-Logik passend zur Aufgabenstruktur auswählen',
    'Standardisierung fehlerfrei durchführen und wieder zurückübersetzen',
    'Verteilungsparameter immer mit ihrer inhaltlichen Bedeutung verbinden'
  ],
  schaetzen_verfahren: [
    'MoM, ML und KQ als unterschiedliche Konstruktionslogiken für Schätzer erklären',
    'Bias, Varianz und MSE als Qualitätskriterien sauber trennen',
    'Begründen, warum ein Schätzer trotz Erwartungstreue schlecht sein kann',
    'Bei Standardfällen erkennen, wann verschiedene Schätzverfahren denselben Schätzwert liefern'
  ],
  schaetzen_eigenschaften_intervalle: [
    'Erwartungstreue, Effizienz und Konsistenz als verschiedene Gütekriterien erklären',
    'Konfidenzintervalle mit Standardfehler, Niveau und Stichprobenumfang verknüpfen',
    'Die Intervallbedeutung korrekt formulieren, ohne Parameterwahrscheinlichkeiten zu behaupten',
    'Die Dualität von Konfidenzintervall und zweiseitigem Test sicher nutzen'
  ],
  testen: [
    'H0, H1, alpha, beta und Power als Entscheidungslogik statt als bloße Vokabeln beherrschen',
    'Einseitige und zweiseitige Tests aus der Fragestellung ableiten',
    'p-Werte korrekt deuten und typische Fehlinterpretationen abwehren',
    'Vor jeder Rechnung die passende Testfamilie aus Datentyp und Struktur auswählen'
  ],
  z_test: [
    'Sauber begründen, wann der z-Test statt des t-Tests der richtige Referenzrahmen ist',
    'Mittelwert- und Anteils-z-Test rechnerisch sicher aufbauen',
    'Kritischen Bereich, p-Wert und KI-Logik miteinander verbinden',
    'Die Groß-n-Approximation nicht mit “sigma bekannt” verwechseln'
  ],
  zwei_stichproben: [
    'Paarstruktur, Unabhängigkeit und Varianzfrage vor der Testwahl systematisch prüfen',
    'Welch, pooled und verbundenen t-Test didaktisch und rechnerisch trennen',
    'Einen Mittelwertvergleich als Strukturfrage statt als Formelreflex beginnen',
    'Typische Prüfungsfallen wie “gepaarte Daten, aber unverbunden getestet” aktiv vermeiden'
  ],
  varianzanalyse: [
    'Zwischen- und Innergruppenstreuung in der ANOVA-Tabelle korrekt lesen',
    'Verstehen, dass ein signifikanter F-Test nur “nicht alle Mittel gleich” bedeutet',
    'Post-hoc-Logik und multiples Testen sauber begründen',
    'ANOVA mit ihren Voraussetzungen, Grenzen und der nötigen Post-hoc-Logik verbinden'
  ],
  regression_schaetzung_inferenz: [
    'Achsenabschnitt, Steigung, Standardfehler und Konfidenzintervall sprachlich korrekt deuten',
    'Signifikanz, Effektgröße und Kausalität sauber auseinanderhalten',
    'R² als Erklärungsmaß lesen, ohne es zu überschätzen',
    'Die Regressionsgleichung als Modell- und nicht nur als Rechenobjekt verstehen'
  ],
  regression_diagnostik_prognose: [
    'Residuenplots, QQ-Plot und Heteroskedastizität als Inferenzwarnungen lesen',
    'Konfidenz- und Prognoseintervall für denselben x-Wert sicher unterscheiden',
    'Ausreißer, Hebelpunkte und Spezifikationsprobleme als verschiedene Diagnostikprobleme erkennen',
    'Prognosen nicht mit kausalen Aussagen verwechseln'
  ],
  nichtparametrisch: [
    'Histogramme als Dichteschätzer und nicht nur als Visualisierung lesen',
    'Fließendes Histogramm und Kerndichteschätzung als lokale Schätzlogik erklären',
    'Bandbreite als zentralen Glättungsparameter sicher deuten',
    'Struktur, Rauschen und Überglättung in nichtparametrischen Dichteschätzungen unterscheiden'
  ],
  rlab: [
    'R-Output immer zuerst fachlich einordnen, bevor eine Entscheidung formuliert wird',
    'Zwischen Codeänderung, unverändertem Datenaufbau und ausgabegetriebener Evidenz unterscheiden',
    'Die wichtigste mathematisch-statistische Idee hinter der Kernzeile benennen',
    'Transferregeln aus R-Aufgaben in klausurtaugliche Methodensätze übersetzen'
  ]
};
