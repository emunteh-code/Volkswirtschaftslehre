// ============================================================
// INTUITION DATA — Statistik
// Benchmark-grade intuition, transfer path, and exam cues
// ============================================================

export const INTUITION = {
  deskriptiv: {
    core: 'Deskriptive Statistik beantwortet zuerst: <strong>Wo liegt das Zentrum, wie breit streut es, und wo kippt die Verteilung aus dem Normalfall?</strong> Kennzahlen ohne Formdeutung sind nur halbe Statistik.',
    analogy: 'Wie beim ersten Blick auf eine Landkarte: Mittelwert und Median sagen, wo das Zentrum liegt; IQR, Standardabweichung und Boxplot zeigen, ob der Weg breit, schief oder voller Ausreißer ist.',
    bridge: 'Zuerst Verteilungsform lesen, dann Kennzahl wählen: symmetrisch → Mittelwert/Standardabweichung; schief oder ausreißerlastig → Median/IQR ergänzen oder priorisieren.',
    exam: [
      { if: 'Ausreißer oder starke Schiefe sichtbar', then: 'Median und IQR sofort mitberichten; Mittelwert allein ist angreifbar.' },
      { if: 'Gruppierte Daten oder Histogramm gegeben', then: 'Erst Klassen-/Formlogik beschreiben, dann Lage- und Streuungsmaße einordnen.' }
    ]
  },
  bivariat: {
    core: 'Bivariate Statistik fragt nicht nur, <strong>ob</strong> zwei Merkmale zusammenlaufen, sondern <strong>wie</strong>: Richtung, Stärke, Linearität, Ranglogik und Ausreißerempfindlichkeit gehören zusammen.',
    analogy: 'Ein Streudiagramm ist wie ein Geländebild: Kovarianz zeigt die grobe Hangrichtung, Pearson die lineare Steigung, Spearman die monotone Rangordnung.',
    bridge: 'Immer erst das Datenbild denken, dann das Maß wählen: linear und metrisch → Pearson; monotone Ranglogik oder Ausreißerproblem → Spearman; reine gemeinsame Streuung → Kovarianz.',
    exam: [
      { if: 'Pearson hoch, aber fachlich fragwürdige Kausalrichtung', then: 'Korrelation berichten, aber Drittvariablen- oder Confounding-Falle ausdrücklich nennen.' },
      { if: 'Rang-/Ordinaldaten oder Ausreißer', then: 'Nicht reflexhaft Pearson schreiben, sondern Spearman begründen.' }
    ]
  },
  wahrscheinlichkeit: {
    core: 'Wahrscheinlichkeit ist die <strong>Rechenlogik hinter Unsicherheit</strong>: Ereignisse sauber zerlegen, bedingen und aktualisieren, statt Intuition mit “klingt plausibel” zu ersetzen.',
    analogy: 'Wie ein Entscheidungspfad mit Türen: Ohne Bedingung sind alle Türen offen; mit Bedingung wird auf einen Teilraum eingezoomt.',
    bridge: 'Zuerst Ereignisse und Struktur skizzieren, dann die passende Regel wählen: Additionsformel, Gegenwahrscheinlichkeit, Bayes oder totale Wahrscheinlichkeit.',
    exam: [
      { if: 'Seltene Krankheit, guter Test, positives Ergebnis', then: 'Sofort an Basisratenfalle und Bayes denken.' },
      { if: '“Unabhängig” und “disjunkt” tauchen zusammen auf', then: 'Begriffe trennen: disjunkt heißt gegenseitiger Ausschluss, nicht Unabhängigkeit.' }
    ]
  },
  verteilungen: {
    core: 'Verteilungen machen Zufall <strong>rechenbar und interpretierbar</strong>: Welche Werte sind typisch, wie breit streut es, und welche Modellfamilie passt zur Aufgabe?',
    analogy: 'Eine Verteilung ist wie das Profil einer Wolke: Erwartungswert zeigt die Mitte, Varianz die Breite, die Verteilungsfamilie die Form.',
    bridge: 'Aufgaben zuerst nach Objekt sortieren: diskreter Zähler → Binomial/Poisson-Logik; stetige Messgröße → Dichte-/Normal-Logik; Mittelwert großer Stichproben → ZGS.',
    exam: [
      { if: 'Normalverteilung und Schwellenwert', then: 'Standardisieren und Ergebnis wieder in Originaleinheiten zurückübersetzen.' },
      { if: 'Mittelwert einer großen Stichprobe', then: 'Nicht die Grundverteilung, sondern die Verteilung von \\bar X via ZGS fokussieren.' }
    ]
  },
  schaetzen_verfahren: {
    core: 'Schätzverfahren beantworten die Frage: <strong>Wie konstruiere ich aus Daten einen plausiblen Parameterwert?</strong> MoM, ML und KQ sind verschiedene Zugänge, nicht bloß verschiedene Formeln.',
    analogy: 'Wie drei Wege zum selben Ziel: Momente gleichen, Likelihood maximieren, Fehlerquadrate minimieren.',
    bridge: 'Vor dem Rechnen klären: Welcher Parameter wird gesucht, welche Datenstruktur liegt vor, und welche Schätzerlogik passt zur Modellfamilie?',
    exam: [
      { if: 'Bernoulli/Binomial mit Anteil gesucht', then: 'Stichprobenanteil als natürlicher MoM- und oft auch ML-Schätzer.' },
      { if: 'Bias und Varianz gemeinsam erwähnt', then: 'Nicht bei Varianz stehen bleiben, sondern MSE-Logik aktivieren.' }
    ]
  },
  schaetzen_eigenschaften_intervalle: {
    core: 'Schätzereigenschaften und Intervalle beantworten nicht “Welcher Wert kommt raus?”, sondern <strong>wie verlässlich, präzise und plausibel</strong> dieser Wert ist.',
    analogy: 'Der Punktschätzer ist die Stecknadel, das Intervall die Unsicherheitszone um sie herum.',
    bridge: 'Erst Schätzerqualität (Bias, Varianz, Konsistenz) klären, dann Präzision über Standardfehler und Intervallbreite lesen.',
    exam: [
      { if: '95%-KI wird sprachlich gedeutet', then: 'Nicht “Parameter liegt mit 95% im Intervall”, sondern Methodenlogik über Wiederholungsstichproben formulieren.' },
      { if: 'Konfidenzniveau steigt', then: 'Breiteres Intervall als Preis für höhere Sicherheit benennen.' }
    ]
  },
  testen: {
    core: 'Ein Test ist eine <strong>Entscheidungsmaschine unter Unsicherheit</strong>: Hypothese, Teststatistik, p-Wert, Fehlerarten und Teststärke müssen als Prozess zusammenpassen.',
    analogy: 'Wie ein Filtersystem: alpha regelt, wie streng du aussortierst; beta beschreibt, wie viele echte Signale durchrutschen.',
    bridge: 'Vor jeder Formel zuerst fünf Dinge klären: Parameter, H0/H1, ein- oder zweiseitig, Testfamilie, Entscheidungsregel.',
    exam: [
      { if: 'Fragestellung ist gerichtet (“größer”, “besser”, “höher”)', then: 'Einseitigkeit aus der Fragestellung ableiten, nicht nach Sichtung der Daten.' },
      { if: 'p-Wert wird genannt', then: 'Nur Evidenz gegen H0 formulieren, nie Wahrscheinlichkeit von H0 selbst.' }
    ]
  },
  z_test: {
    core: 'Der z-Test ist der <strong>saubere Referenzfall mit bekannter Streuung oder großer Approximation</strong>; er lebt von der Standardnormalisierung, nicht von Gewohnheit.',
    analogy: 'Wie ein geeichtes Messlineal: Wenn sigma bekannt ist, liest du direkt in z-Einheiten ab.',
    bridge: 'Erst prüfen, ob sigma wirklich bekannt ist; nur dann z als Standard nehmen, sonst t.',
    exam: [
      { if: 'sigma unbekannt und n klein/mittel', then: 'Nicht z, sondern t als Standardwahl begründen.' },
      { if: '95%-KI und zweiseitiger Test nebeneinander stehen', then: 'Dualität zwischen KI und Testentscheidung aktiv nutzen.' }
    ]
  },
  zwei_stichproben: {
    core: 'Bei Zwei-Stichproben-Verfahren ist die <strong>Strukturfrage</strong> wichtiger als die Formel: gepaart oder ungepaart, gleiche oder ungleiche Varianz, Mittelwert- oder Rangvergleich.',
    analogy: 'Vorher/Nachher bei denselben Personen ist wie ein Spiegelvergleich; zwei unabhängige Gruppen sind zwei getrennte Stichprobenwelten.',
    bridge: 'Immer in dieser Reihenfolge denken: Datendesign → Paarstruktur → Varianzfrage → Testwahl → Entscheidung.',
    exam: [
      { if: 'Vorher/Nachher dieselber Personen', then: 'Differenzen bilden und verbundenen t-Test verwenden.' },
      { if: 'Varianzgleichheit unsicher', then: 'Welch als robuste Default-Option nennen statt blind zu poolen.' }
    ]
  },
  varianzanalyse: {
    core: 'ANOVA ist kein “Test für viele Mittelwerte” im leeren Raum, sondern die Frage: <strong>Ist die Zwischen-Gruppen-Streuung groß genug relativ zur Innergruppen-Streuung?</strong>',
    analogy: 'Wenn Gruppenmittel weit auseinanderliegen, aber jede Gruppe intern sehr eng ist, springt der F-Wert an.',
    bridge: 'Zuerst global denken: F-Test beantwortet nur, ob nicht alle Mittel gleich sind. Paarfragen kommen erst danach mit Post-hoc-Logik.',
    exam: [
      { if: 'Mehr als zwei Gruppen und Gesamtfrage nach Mittelwertunterschieden', then: 'ANOVA statt Sammlung unkontrollierter t-Tests.' },
      { if: 'Signifikanter F-Test vorliegt', then: 'Nicht automatisch jedes Paar als verschieden behaupten; Post-hoc erwähnen.' }
    ]
  },
  regression_schaetzung_inferenz: {
    core: 'Regression ist erst dann verstanden, wenn <strong>Modell, Schätzer, Signifikanz und Interpretation</strong> zusammen gelesen werden — nicht nur die Gleichung.',
    analogy: 'Die Regressionsgerade ist wie eine Verdichtung des Streudiagramms: Richtung, Größe und Unsicherheit werden in wenigen Zahlen zusammengezogen.',
    bridge: 'Immer erst “Was bedeutet ein Plus von 1 in x für y?” formulieren, dann Signifikanz und Intervall ergänzen.',
    exam: [
      { if: 'Koeffizient signifikant, aber klein', then: 'Signifikanz und praktische Relevanz ausdrücklich trennen.' },
      { if: 'R² oder hoher Fit genannt wird', then: 'Nicht automatisch Kausalität oder gutes Design unterstellen.' }
    ]
  },
  regression_diagnostik_prognose: {
    core: 'Diagnostik und Prognose klären, <strong>ob das Modell tragfähig ist und was seine Aussagen leisten</strong>: Residuen, Ausreißer, Intervalltyp und Prognosegrenze.',
    analogy: 'Die Schätzgleichung ist das Gerüst; Residuenplots und Intervalle zeigen, ob das Gebäude auch steht.',
    bridge: 'Erst Modellwarnungen lesen, dann Prognoseaussagen machen: Diagnose kommt vor Vertrauen.',
    exam: [
      { if: 'Trichter im Residuenplot', then: 'Heteroskedastizität nennen und robuste Inferenz mitdenken.' },
      { if: 'confidence vs prediction auftaucht', then: 'Mittelwertintervall und Einzelprognose strikt trennen; prediction ist breiter.' }
    ]
  },
  nichtparametrisch: {
    core: 'Nichtparametrisch bedeutet hier: <strong>die Verteilungsform direkt aus den Daten schätzen</strong>, ohne zuerst eine feste Modellfamilie wie Normal- oder Exponentialverteilung zu unterstellen.',
    analogy: 'Wie beim Zeichnen einer Küstenlinie: Das Histogramm gibt grobe Kästchen vor, die Kerndichteschätzung legt eine glattere Linie darüber.',
    bridge: 'Zuerst die Schätzaufgabe erkennen, dann den Glättungshebel lesen: Histogramm und Kernfunktion sind Werkzeuge; die Bandbreite entscheidet über Rauigkeit und Strukturverlust.',
    exam: [
      { if: 'Keine plausible parametrische Familie ist vorgegeben', then: 'Nichtparametrische Dichteschätzung als Formzugriff benennen statt vorschnell eine Normalverteilung zu unterstellen.' },
      { if: 'Die Bandbreite wird verändert', then: 'Immer die Richtung der Glättungswirkung nennen: kleines b = zackiger, großes b = glatter.' }
    ]
  },
  rlab: {
    core: 'R-Praxis ist in Statistik nur dann nützlich, wenn sie <strong>Methodenlogik sichtbar macht</strong>: Was ist der passende Befehl, was bleibt invariant, und welches Output-Stück liefert die Entscheidung?',
    analogy: 'R ist hier kein Taschenrechner, sondern ein Lesegerät für statistische Entscheidungen.',
    bridge: 'Immer zuerst Statistik, dann Syntax: Fragestellung → Methode → Kernzeile → Output-Evidenz → Deutung.',
    exam: [
      { if: 'Nur der Code genannt wird, aber keine Deutung', then: 'Antwort unvollständig: Output und inhaltliche Entscheidung fehlen.' },
      { if: 'Im Output viele Zahlen auftauchen', then: 'Gezielt die Zeile identifizieren, die Hypothese, Intervall oder Effektfrage beantwortet.' }
    ]
  }
};
