export function getGeneratedRPracticeBlocks(slug) {
  if (slug === "statistik") {
    return [
      {
        title: "Daten zuerst lesen, dann rechnen",
        purpose: "Der erste R-Schritt in Statistik ist nie der Testbefehl, sondern die saubere Orientierung im Datensatz: Variablentypen, Größenordnungen und erste Auffälligkeiten müssen vor jeder Inferenz sichtbar werden.",
        script: "R-Workflow: Datenstruktur, summary() und erste Gruppensichtung",
        code: String.raw`str(df)
summary(df)
table(df$group)`,
        output: "str(df) trennt numerische von kategorialen Variablen. summary(df) zeigt Lage, Streuung und Extremwerte; table(df$group) prüft sofort, ob Gruppenvergleiche sauber besetzt sind.",
        miniTask: "Erweitere die Exploration um mean(df$x) und mean(df$y). Formuliere danach in einem Satz, welche Variable im Datensatz im Mittel höher liegt.",
        solution: "Mit mean(df$x) und mean(df$y) siehst du direkt die Lage der beiden Variablen. Die richtige Kurzantwort nennt nicht nur die größere Zahl, sondern ordnet sie als durchschnittliches Niveau der jeweiligen Messgröße ein.",
        solutionChanges: [
          "Ergänze unter den bisherigen Explorationsbefehlen zwei neue Zeilen: `mean(df$x)` und `mean(df$y)`.",
          "Lass `str(df)`, `summary(df)` und `table(df$group)` stehen, damit die Orientierung im Datensatz vollständig bleibt."
        ],
        solutionCode: String.raw`str(df)
summary(df)
table(df$group)
mean(df$x)
mean(df$y)`,
        pitfalls: [
          "Mit dem Test starten, obwohl noch unklar ist, wie die Variablen im Datensatz codiert sind.",
          "summary() abzulesen, ohne Extremwerte oder Gruppengrößen sprachlich zu deuten."
        ]
      },
      {
        title: "Lage, Streuung und Visualisierung verbinden",
        purpose: "Deskriptive Statistik wird erst dann nützlich, wenn Kennzahlen und Visualisierung dieselbe Geschichte erzählen. Genau das trainiert dieser Block.",
        script: "R-Workflow: Mittelwert, Standardabweichung, Histogramm",
        code: String.raw`mean(df$x)
sd(df$x)
hist(df$x, breaks = 4, main = "Verteilung von x", col = "lightblue")`,
        output: "Mittelwert und Standardabweichung quantifizieren Lage und Streuung; das Histogramm zeigt, ob diese Kennzahlen zu einer eher symmetrischen, schiefen oder klumpigen Verteilung passen.",
        miniTask: "Ersetze x durch z und vergleiche anschließend verbal, welche Variable stärker streut und warum das Histogramm diese Aussage stützt oder relativiert.",
        solution: "Die saubere Lösung kombiniert Zahl und Bild: erst Streuung über sd(...) nennen, dann anhand des Histogramms prüfen, ob Ausreißer oder Schiefe die Kennzahl treiben.",
        solutionChanges: [
          "Ersetze in allen drei Befehlen `x` durch `z`, damit Kennzahlen und Histogramm dieselbe Variable beschreiben.",
          "Lass die Plotstruktur mit `hist(...)` stehen und ändere nur die referenzierte Variable."
        ],
        solutionCode: String.raw`mean(df$z)
sd(df$z)
hist(df$z, breaks = 4, main = "Verteilung von z", col = "lightblue")`,
        pitfalls: [
          "Nur das Diagramm zu beschreiben, ohne die Kennzahlen zu nennen.",
          "Standardabweichung und Varianz sprachlich zu vermischen."
        ]
      },
      {
        title: "t-Test als Entscheidungslogik lesen",
        purpose: "Ein Test ist im Portal nur dann verstanden, wenn die Ausgabe in Hypothese, Teststatistik, p-Wert und Entscheidung übersetzt werden kann.",
        script: "R-Workflow: Einstichproben-t-Test",
        code: String.raw`t.test(df$z, mu = 115)`,
        output: "Der Output liefert Teststatistik, Freiheitsgrade, p-Wert und Konfidenzintervall. Die fachliche Kernfrage bleibt: Sprechen die Daten stark genug gegen H0: μ = 115?",
        miniTask: "Formuliere nach dem Run in zwei Sätzen die vollständige Testentscheidung: Nullhypothese, p-Wert-Vergleich und inhaltliche Deutung.",
        solution: "Die Musterlösung nennt immer zuerst H0, vergleicht dann den p-Wert mit dem Signifikanzniveau und formuliert erst danach die statistische Aussage. Signifikant ersetzt nie die inhaltliche Interpretation.",
        taskMode: "interpret",
        solutionChanges: [
          "Keine Codeänderung nötig: Diese Übung trainiert das Lesen des vorhandenen t-Test-Outputs.",
          "Nutze die bestehende Ausgabe als Beleg für Nullhypothese, p-Wert-Vergleich und inhaltliche Deutung."
        ],
        pitfalls: [
          "Den p-Wert als Wahrscheinlichkeit der Nullhypothese zu lesen.",
          "Die Testentscheidung zu nennen, ohne den Richtungsbezug der Fragestellung zu erklären."
        ]
      },
      {
        title: "Regression: Output in Sprache übersetzen",
        purpose: "Die Regressionsroutine ist nur der technische Teil. Studienrelevant wird sie erst, wenn Koeffizient, Signifikanz und Modellbild gemeinsam gedeutet werden.",
        script: "R-Workflow: lm(), summary() und Streudiagramm mit Regressionsgerade",
        code: String.raw`model <- lm(y ~ x, data = df)
summary(model)$coefficients
plot(df$x, df$y, main = "y auf x", pch = 19, col = "steelblue")
abline(model, col = "red", lwd = 2)`,
        output: "summary(model)$coefficients zeigt Interzept, Steigung, Standardfehler, t-Wert und p-Wert. Der Plot macht sichtbar, ob die geschätzte Gerade zur Datenwolke passt.",
        miniTask: "Ergänze den Workflow um confint(model) und formuliere dann die Steigung als inhaltliche Veränderung von y bei einer Einheit mehr x.",
        solution: "Die belastbare Antwort nennt die Steigung, erklärt sie ceteris paribus und ergänzt, ob das Konfidenzintervall die Null ausschließt. Plot und Output müssen dieselbe Geschichte erzählen.",
        solutionChanges: [
          "Füge nach `summary(model)$coefficients` eine zusätzliche Zeile `confint(model)` ein.",
          "Lass Plot und Regressionsgerade stehen, damit du numerischen Output und grafische Plausibilität gemeinsam lesen kannst."
        ],
        solutionCode: String.raw`model <- lm(y ~ x, data = df)
summary(model)$coefficients
confint(model)
plot(df$x, df$y, main = "y auf x", pch = 19, col = "steelblue")
abline(model, col = "red", lwd = 2)`,
        pitfalls: [
          "Nur auf Sterne zu schauen und die Größe des Effekts zu ignorieren.",
          "Die Regressionsgerade als Kausalbeweis statt als linearen Zusammenhang zu lesen."
        ]
      }
    ];
  }

  return [];
}
