// ============================================================
// FULL EXAMS DATA — Statistik
// Platform-authored drills (not verbatim archive papers); see contentManifest.
// Shapes: `problems`+`step` (normalized to text-block) or native `aufgaben` (W/F, text-block).
// ============================================================

export const FULL_EXAMS = {
  klausur_2024: {
    id: 'klausur_2024',
    title: 'Probeklausur Statistik — Rechnen und Interpretieren',
    subtitle: '90 Min. · Deskriptiv, Inferenz, Regression, mehre Konzepte',
    duration: 90,
    problems: [
      {
        id: 'fe_desk_1',
        title: 'Deskriptive Kennzahlen',
        conceptId: 'deskriptiv',
        text: 'Gegeben sind die Werte: 3, 5, 7, 7, 8, 10, 12. Berechnen Sie Mittelwert, Median und empirische Varianz (Teiler n−1).',
        type: 'step',
        steps: [
          {
            q: '[Berechnung] Wie groß ist der Mittelwert x̄ (als Bruch oder auf zwei Dezimalstellen)?',
            answer: ['52/7', '7.43', '7,43'],
            hint: 'Summe aller Werte geteilt durch n = 7.'
          },
          {
            q: '[Berechnung] Wie lautet der Median der sortierten Reihe?',
            answer: ['7'],
            hint: 'Bei ungeradem n ist der Median der mittlere Wert.'
          },
          {
            q: '[Berechnung] Wie groß ist s² mit Teiler (n−1)?',
            answer: ['58/7', '8.29', '8,29'],
            hint: 's² = (1/(n−1)) Σ (xᵢ − x̄)².'
          }
        ]
      },
      {
        id: 'fe_test_t_1',
        title: 'Einstichproben-t-Test',
        conceptId: 'testen',
        text: 'Ein Unternehmen behauptet μ₀ = 500 ml Füllmenge. Stichprobe: n = 25, x̄ = 495 ml, s = 15 ml. Zweiseitiger Test zum Niveau α = 5 %.',
        type: 'step',
        steps: [
          {
            q: '[Modell] Formulieren Sie H₀ und H₁ (zweiseitig) in einem Satz.',
            answer: ['h0', 'h₁', '500', 'mu', 'μ'],
            hint: 'H₀: μ = 500; H₁: μ ≠ 500.'
          },
          {
            q: '[Berechnung] Berechnen Sie die t-Statistik (zwei Dezimalstellen reichen).',
            answer: ['-1.67', '-1,67', '-5/3'],
            hint: 't = (x̄ − μ₀) / (s/√n).'
          },
          {
            q: '[Entscheidung] Wird H₀ bei |t| < t₀.₀₂₅,₂₄ abgelehnt?',
            answer: ['nein', 'Nein', 'nicht abgelehnt', 'beibehalten'],
            hint: '|t| ≈ 1,67 < 2,064 → keine Ablehnung.'
          }
        ]
      },
      {
        id: 'fe_z_1',
        title: 'z-Test bei bekannter Streuung',
        conceptId: 'z_test',
        text: 'Die Füllmenge sei normalverteilt mit bekannter Standardabweichung σ = 12 ml. Stichprobe n = 64, x̄ = 498 ml. Testen Sie H₀: μ = 500 ml zweiseitig auf α = 5 % (kritischer Wert z₀.₀₂₅ ≈ 1,96).',
        type: 'step',
        steps: [
          {
            q: '[Begründung] Warum ist hier der z-Test (und nicht der t-Test) der passende Rahmen?',
            answer: ['sigma', 'σ', 'bekannt', 'bekannte'],
            hint: 'σ ist gegeben; t-Test ist Standard bei unbekannter σ und kleiner/mittlerer n.'
          },
          {
            q: '[Berechnung] Berechnen Sie z = (x̄ − μ₀) / (σ/√n) (zwei Dezimalstellen).',
            answer: ['-1.33', '-1,33', '-4/3'],
            hint: 'Standardfehler = σ/√n = 12/8 = 1,5.'
          },
          {
            q: '[Entscheidung] Ablehnung von H₀?',
            answer: ['nein', 'Nein', 'nicht abgelehnt'],
            hint: '|z| ≈ 1,33 < 1,96 → H₀ beibehalten.'
          }
        ]
      },
      {
        id: 'fe_zwei_1',
        title: 'Zwei unabhängige Stichproben',
        conceptId: 'zwei_stichproben',
        text: 'Zwei unabhängige Gruppen: n₁ = 10, x̄₁ = 102, s₁ = 5; n₂ = 12, x̄₂ = 96, s₂ = 6. Sie testen H₀: μ₁ = μ₂ zweiseitig grob auf α = 5 % mit Welch-t (df ≈ 19, kritischer Wert |t| ≈ 2,09).',
        type: 'step',
        steps: [
          {
            q: '[Wahl] Nennen Sie einen Grund, wann Welch-t dem gepoolten t vorzuziehen ist.',
            answer: ['varianz', 'ungleich', 'heterogen', 'levene'],
            hint: 'Ungleiche Populationsvarianzen → Welch robuster.'
          },
          {
            q: '[Berechnung] Geben Sie den Welch-t-Nenner SE = √(s₁²/n₁ + s₂²/n₂) numerisch auf zwei Dezimalstellen.',
            answer: ['2.29', '2,29'],
            hint: 'SE² = 25/10 + 36/12 = 2,5 + 3 = 5,5; SE ≈ √5,5.'
          },
          {
            q: '[Berechnung und Entscheidung] t = (x̄₁ − x̄₂)/SE und Ablehnung von H₀?',
            answer: ['2.62', '2,62', 'ja', 'Ja', 'abgelehnt'],
            hint: 't ≈ 6/2,29 ≈ 2,62 > 2,09 → H₀ ablehnen.'
          }
        ]
      },
      {
        id: 'fe_anova_1',
        title: 'Varianzanalyse — Logik',
        conceptId: 'varianzanalyse',
        text: 'Drei Gruppenmittelwerte werden mit einfaktorieller ANOVA verglichen (α = 5 %).',
        type: 'step',
        steps: [
          {
            q: '[Konzept] Warum sind drei paarweise t-Tests mit jeweils α = 5 % problematischer als eine ANOVA?',
            answer: ['alpha', 'fehler', 'multiple', 'familien', 'kumul'],
            hint: 'Ohne Korrektur steigt das Risiko mindestens eines fälschlichen Treffers (multiple Tests).'
          },
          {
            q: '[Interpretation] Die ANOVA liefert p < α. Was dürfen Sie über die Gruppenmittel schließen?',
            answer: ['mindestens', 'ungleich', 'nicht alle', 'unterschied'],
            hint: 'Global: nicht alle μᵢ gleich; paarweise Unterschiede ggf. Post-hoc.'
          },
          {
            q: '[Voraussetzung] Nennen Sie zwei typische Modellannahmen der einfaktoriellen ANOVA.',
            answer: ['normal', 'unabhäng', 'varianz', 'homogen'],
            hint: 'Z. B. unabhängige Beobachtungen, Normalität innerhalb der Gruppen, Varianzhomogenität.'
          }
        ]
      },
      {
        id: 'fe_np_1',
        title: 'Nichtparametrische Dichteschätzung',
        conceptId: 'nichtparametrisch',
        text: 'Für eine metrische Variable liegt keine plausible parametrische Verteilungsfamilie vor. Sie wollen die Verteilungsform trotzdem glatt schätzen; eine erste Kerndichteschätzung mit sehr kleinem b wirkt stark gezackt.',
        type: 'step',
        steps: [
          {
            q: '[Wahl] Welcher Zugriff ist hier näherliegend als ein Mittelwerttest?',
            answer: ['kerndichteschätzung', 'kernel', 'nichtparametrische dichte', 'dichteschätzung'],
            hint: 'Es geht um Formschätzung ohne feste Modellfamilie.'
          },
          {
            q: '[Konzept] Welche Stellschraube bestimmt die Glättung am stärksten?',
            answer: ['bandbreite', 'b'],
            hint: 'Nicht die bloße Kernbezeichnung, sondern der Glättungsparameter.'
          },
          {
            q: '[Abgrenzung] Was passiert typischerweise, wenn Sie b deutlich vergrößern?',
            answer: ['glatter', 'glättung', 'weniger zackig', 'strukturverlust'],
            hint: 'Mehr Bandbreite mittelt lokaler und glättet stärker.'
          }
        ]
      },
      {
        id: 'fe_reg_1',
        title: 'Regression — Koeffizient lesen',
        conceptId: 'regression_schaetzung_inferenz',
        text: 'Geschätztes Modell ŷ = 2,5 + 0,8 x. Standardfehler der Steigung 0,25, t-Wert für Steigung = 3,2, zweiseitiger p-Wert = 0,004.',
        type: 'step',
        steps: [
          {
            q: '[Interpretation] Wie ändert sich ŷ bei einer Erhöhung von x um eine Einheit ceteris paribus?',
            answer: ['0.8', '0,8', 'um 0.8', 'steigt um 0.8'],
            hint: 'Die Steigung ist der Koeffizient vor x.'
          },
          {
            q: '[Inferenz] Ist die Steigung auf α = 5 % signifikant?',
            answer: ['ja', 'Ja', 'signifikant'],
            hint: 'p = 0,004 < 0,05.'
          },
          {
            q: '[Vorsicht] Was misst diese Aussage nicht automatisch?',
            answer: ['kausal', 'ursache', 'einflussfaktor'],
            hint: 'Regression zeigt Zusammenhang, nicht ohne weiteres Kausalität.'
          }
        ]
      },
      {
        id: 'fe_ki_1',
        title: 'Konfidenzintervall und Test',
        conceptId: 'schaetzen_eigenschaften_intervalle',
        text: 'Für μ liegt das 95 %-Konfidenzintervall bei [49,2 ; 50,8] (Stichprobenmittel x̄ = 50). Sie testen H₀: μ = 51 zweiseitig auf α = 5 %.',
        type: 'step',
        steps: [
          {
            q: '[Logik] Liegt μ₀ = 51 im 95 %-KI?',
            answer: ['nein', 'Nein', 'außerhalb', 'aussen'],
            hint: 'Obergrenze 50,8 < 51.'
          },
          {
            q: '[Folgerung] Würde der zugehörige zweiseitige Test auf α = 5 % typischerweise H₀ ablehnen?',
            answer: ['ja', 'Ja'],
            hint: 'μ₀ außerhalb des 95 %-KI ↔ zweiseitiger Test lehnt bei α = 5 % ab.'
          },
          {
            q: '[Konzept] Was quantifiziert das KI zusätzlich zum bloßen p-Wert?',
            answer: ['präzision', 'band', 'unsicherheit', 'bereich', 'spanne'],
            hint: 'Plausible Werte für den Parameter als Intervall, nicht nur binäre Entscheidung.'
          }
        ]
      },
      {
        id: 'fe_biv_1',
        title: 'Korrelation und Transfer',
        conceptId: 'bivariat',
        text: 'Zwei Merkmale haben empirischen Pearson-Korrelationskoeffizienten r = 0,85 in einer Querschnittsstichprobe von Unternehmen.',
        type: 'step',
        steps: [
          {
            q: '[Lesen] Beschreiben Sie die Stärke und Richtung des linearen Zusammenhangs in einem Satz.',
            answer: ['stark', 'positiv', 'linear'],
            hint: 'r nahe +1 → starker positiver linearer Zusammenhang.'
          },
          {
            q: '[Transfer] Darf man daraus schließen, dass das eine Merkmal das andere verursacht?',
            answer: ['nein', 'Nein', 'nicht', 'kausal'],
            hint: 'Korrelation ≠ Kausalität; Drittvariablen möglich.'
          },
          {
            q: '[Reflexion] Nennen Sie eine statistische Maßnahme vor starker Kausalinterpretation.',
            answer: ['experiment', 'kontrolle', 'variablen', 'modell', 'confounding'],
            hint: 'Z. B. Kontrolle weiterer Kovariaten, Design/Experiment, fachliche Plausibilität.'
          }
        ]
      }
    ]
  },

  klausur_transfer_wf: {
    id: 'klausur_transfer_wf',
    title: 'Transfercheck Statistik — Wahr / Falsch',
    subtitle: '45 Min. · Typische Begriffs- und Interpretationsfallen',
    duration: 45,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 20,
        type: 'wf-block',
        preamble:
          'Beurteilen Sie jede Aussage als **Wahr** oder **Falsch** und nutzen Sie die Musterlösung, um Lücken zu schließen.',
        groups: [
          {
            context: 'p-Werte, Signifikanz und KI',
            questions: [
              {
                id: 'st_wf_p1',
                text: 'Der p-Wert ist die Wahrscheinlichkeit, dass die Nullhypothese wahr ist.',
                correct: 'Falsch',
                feedback:
                  'Der p-Wert misst unter H₀ die Wahrscheinlichkeit für Daten mindestens so extrem wie beobachtet — nicht P(H₀ wahr).'
              },
              {
                id: 'st_wf_p2',
                text: 'Wenn das 95 %-Konfidenzintervall für μ den Wert μ₀ nicht enthält, verwirft der zugehörige zweiseitige Test H₀: μ = μ₀ typischerweise auf dem 5 %-Niveau.',
                correct: 'Wahr',
                feedback: 'Äquivalenz zwischen zweiseitigem α-Niveau-Test und (1−α)-KI ist Standardlogik.'
              },
              {
                id: 'st_wf_p3',
                text: '„Statistisch signifikant“ bedeutet automatisch, dass der Effekt wirtschaftlich groß ist.',
                correct: 'Falsch',
                feedback: 'Signifikanz hängt von n und Streuung ab; kleine Effekte können bei großem n signifikant sein.'
              },
              {
                id: 'st_wf_p4',
                text: 'Ein höheres Signifikanzniveau α macht den Test konservativer gegenüber H₁.',
                correct: 'Falsch',
                feedback: 'Größeres α erleichtert die Ablehnung von H₀ (mehr Fehler 1. Art, weniger konservativ).'
              },
              {
                id: 'st_wf_p5',
                text: 'Die Stichprobenvarianz s² verwendet im Nenner typischerweise (n−1), damit s² erwartungstreu für σ² ist.',
                correct: 'Wahr',
                feedback: 'Teiler (n−1) korrigiert den Bias des rohen Mittels der quadrierten Abweichungen.'
              }
            ]
          },
          {
            context: 'Tests, Annahmen und nichtparametrische Schätzung',
            questions: [
              {
                id: 'st_wf_p6',
                text: 'Der t-Test für zwei unabhängige Mittelwerte setzt immer identische Stichprobenumfänge voraus.',
                correct: 'Falsch',
                feedback: 'n₁ und n₂ dürfen unterschiedlich sein; wichtig sind Modellannahmen (z. B. Unabhängigkeit, Verteilungsannahmen).'
              },
              {
                id: 'st_wf_p7',
                text: 'Eine größere Bandbreite in der Kerndichteschätzung führt typischerweise zu einer glatteren, aber stärker geglätteten Schätzung.',
                correct: 'Wahr',
                feedback: 'Größeres b mittelt lokaler stärker und kann dadurch echte lokale Struktur überdecken.'
              },
              {
                id: 'st_wf_p8',
                text: 'ANOVA prüft, ob die Varianz innerhalb der Gruppen gleich der Varianz zwischen den Gruppen ist.',
                correct: 'Falsch',
                feedback: 'ANOVA vergleicht systematische Mittelwertsunterschiede über F = Zwischen / Innerhalb — nicht „Varianz = Varianz“ im Alltagssinn.'
              },
              {
                id: 'st_wf_p9',
                text: 'Ein hoher |r| beweist einen kausalen Einfluss von X auf Y.',
                correct: 'Falsch',
                feedback: 'Korrelation allein belegt keinen kausalen Mechanismus; Confounding möglich.'
              },
              {
                id: 'st_wf_p10',
                text: 'Bei bekanntem σ und großem n ist der z-Test für den Mittelwert ein legitimer Referenzrahmen; in der Praxis ist σ jedoch oft unbekannt.',
                correct: 'Wahr',
                feedback: 'Passt zu Kurslogik: z wenn σ bekannt; sonst t. Große n nähern t und z an.'
              }
            ]
          }
        ]
      }
    ]
  },

  klausur_methodenlogik_2025: {
    id: 'klausur_methodenlogik_2025',
    title: 'Probeklausur Statistik — Methodenwahl und Interpretation',
    subtitle: '75 Min. · Entscheidungslogik, Intervalllesen, Regression und ANOVA',
    duration: 75,
    problems: [
      {
        id: 'fe2_desc_1',
        title: 'Lagemaß unter Ausreißern',
        conceptId: 'deskriptiv',
        text: 'Ein Datensatz ist stark rechtsschief; der Mittelwert liegt deutlich über dem Median. Welche Kennzahlen berichten Sie zuerst und wie begründen Sie das knapp?',
        type: 'step',
        steps: [
          {
            q: '[Wahl] Welches Lagemaß ist hier robuster als der Mittelwert?',
            answer: ['median'],
            hint: 'Schiefe und Ausreißer sprechen gegen eine reine Mittelwertantwort.'
          },
          {
            q: '[Transfer] Welches Streuungsmaß ist als robuste Ergänzung naheliegend?',
            answer: ['iqr', 'interquartilsabstand'],
            hint: 'Boxplot- und Quartilslogik statt nur Standardabweichung.'
          },
          {
            q: '[Deutung] Reicht “Mittelwert ist höher” als vollständige Aussage?',
            answer: ['nein', 'Nein'],
            hint: 'Die Form der Verteilung muss in die Deutung hinein.'
          }
        ]
      },
      {
        id: 'fe2_ci_1',
        title: 'Konfidenzintervall und Test',
        conceptId: 'schaetzen_eigenschaften_intervalle',
        text: 'Ein 95%-Konfidenzintervall für μ ist [12,1 ; 14,4]. Es soll H₀: μ = 15 zweiseitig auf 5%-Niveau getestet werden.',
        type: 'step',
        steps: [
          {
            q: '[Logik] Liegt der Nullwert im Intervall?',
            answer: ['nein', 'Nein'],
            hint: '15 liegt oberhalb der Intervallobergrenze.'
          },
          {
            q: '[Entscheidung] Wird H₀ auf 5%-Niveau verworfen?',
            answer: ['ja', 'Ja'],
            hint: 'KI-Test-Dualität nutzen.'
          },
          {
            q: '[Interpretation] Bedeutet das Intervall, dass μ mit 95% Wahrscheinlichkeit darin liegt?',
            answer: ['nein', 'Nein'],
            hint: 'Wahrscheinlichkeit gehört zur Methode, nicht zum festen Parameter.'
          }
        ]
      },
      {
        id: 'fe2_test_1',
        title: 'Testwahl unter Zeitdruck',
        conceptId: 'zwei_stichproben',
        text: 'Vorher-Nachher-Messung an denselben 18 Personen; Ziel ist die Frage, ob das Training den Mittelwert verändert.',
        type: 'step',
        steps: [
          {
            q: '[Wahl] Welcher Test ist der passende Startpunkt?',
            answer: ['verbunden', 'paired', 'gepaarter t-test'],
            hint: 'Dieselben Personen -> Paarstruktur.'
          },
          {
            q: '[Mechanik] Welche Größe wird dabei getestet?',
            answer: ['differenzen', 'd_i', 'mittelwert der differenzen'],
            hint: 'Nicht zwei unabhängige Gruppenmittel, sondern individuelle Differenzen.'
          },
          {
            q: '[Trap] Ist ein unverbundener Test hier trotz gleicher n sauber?',
            answer: ['nein', 'Nein'],
            hint: 'Die Strukturfrage schlägt die bloße Stichprobengröße.'
          }
        ]
      },
      {
        id: 'fe2_reg_1',
        title: 'Regression — Signifikanz vs. Relevanz',
        conceptId: 'regression_schaetzung_inferenz',
        text: 'Regressionsoutput: β̂₁ = 0,03; p < 0,001; große Stichprobe. Kommentieren Sie das Ergebnis klausurfest.',
        type: 'step',
        steps: [
          {
            q: '[Signifikanz] Ist der Koeffizient statistisch signifikant?',
            answer: ['ja', 'Ja'],
            hint: 'p < 0,001.'
          },
          {
            q: '[Grenze] Darf daraus automatisch hohe praktische Relevanz gefolgert werden?',
            answer: ['nein', 'Nein'],
            hint: 'Effektgröße separat lesen.'
          },
          {
            q: '[Grenze 2] Ist damit Kausalität bewiesen?',
            answer: ['nein', 'Nein'],
            hint: 'Regression ohne Designbegründung beweist keinen kausalen Effekt.'
          }
        ]
      },
      {
        id: 'fe2_regdiag_1',
        title: 'Diagnostik und Prognose',
        conceptId: 'regression_diagnostik_prognose',
        text: 'Ein Residuenplot zeigt eine Trichterform; für denselben x₀ liegen sowohl Konfidenz- als auch Prognoseintervall vor.',
        type: 'step',
        steps: [
          {
            q: '[Diagnose] Wofür ist die Trichterform ein Hinweis?',
            answer: ['heteroskedastizität', 'heteroskedastizitaet'],
            hint: 'Die Fehlerstreuung wirkt nicht konstant.'
          },
          {
            q: '[Konsequenz] Sind Standardfehler/Teste potenziell betroffen?',
            answer: ['ja', 'Ja'],
            hint: 'Genau dort schlägt Heteroskedastizität in der Klausur zuerst zu.'
          },
          {
            q: '[Intervall] Welches Intervall ist für denselben x₀ breiter?',
            answer: ['prognoseintervall', 'prediction', 'pi'],
            hint: 'Einzelbeobachtung enthält zusätzliche Reststreuung.'
          }
        ]
      },
      {
        id: 'fe2_anova_1',
        title: 'ANOVA und Post-hoc',
        conceptId: 'varianzanalyse',
        text: 'Eine einfaktorielle ANOVA liefert p = 0,012.',
        type: 'step',
        steps: [
          {
            q: '[Lesart] Was ist die globale Schlussfolgerung?',
            answer: ['nicht alle mittelwerte gleich', 'mindestens eine gruppe unterscheidet sich'],
            hint: 'Globaltest, kein Paarvergleich.'
          },
          {
            q: '[Grenze] Darf man ohne Weiteres behaupten, dass jedes Paar verschieden ist?',
            answer: ['nein', 'Nein'],
            hint: 'Post-hoc fehlt noch.'
          },
          {
            q: '[Nächster Schritt] Welcher Prüfungsbegriff gehört jetzt dazu?',
            answer: ['post-hoc', 'tukey', 'bonferroni', 'holm'],
            hint: 'Paarweise Klärung unter Niveaukontrolle.'
          }
        ]
      }
    ]
  }
};
