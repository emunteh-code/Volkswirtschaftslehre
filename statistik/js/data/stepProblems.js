// ============================================================
// STEP PROBLEMS DATA — Statistik
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  deskriptiv: [
    {
      title: 'Lagemaße berechnen',
      context: 'Gegeben sind die Werte: 2, 4, 4, 5, 7, 9.',
      steps: [
        {
          q: '[1. Interpretation] Was ist der arithmetische Mittelwert?',
          answer: ['5.17', '5,17', '31/6'],
          options: { problemId: 'stat_desk_1', stepId: 'mean', isDecision: false },
          hint: 'Summe aller Werte geteilt durch Anzahl.',
          explain: '(2+4+4+5+7+9)/6 = 31/6 ≈ 5.17'
        },
        {
          q: '[2. Berechnung] Was ist der Median?',
          answer: ['4.5', '4,5'],
          options: { problemId: 'stat_desk_1', stepId: 'median', dependsOn: 'mean' },
          hint: 'Bei gerader Anzahl: Mittelwert der beiden mittleren Werte.',
          explain: 'Sortiert: 2,4,4,5,7,9. Median = (4+5)/2 = 4.5'
        }
      ]
    }
    ,
    {
      title: 'Ausreißerfalle bei Lagemaßen',
      context: 'Datensatz mit starkem oberen Ausreißer; Mittelwert deutlich über Median.',
      steps: [
        {
          q: '[1. Decision] Welches Lagemaß ist robuster gegen Ausreißer?',
          answer: ['median'],
          options: { problemId: 'stat_desk_2', stepId: 'robust', isDecision: true },
          hint: 'Denke an Schiefe und Extremwerte.',
          explain: 'Der Median reagiert deutlich weniger auf einzelne Extremwerte.'
        },
        {
          q: '[2. Execution] Reicht es, nur den Mittelwert zu berichten?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_desk_2', stepId: 'report', dependsOn: 'robust' },
          hint: 'Interpretation soll Lage und Streuung trennen.',
          explain: 'Nein. Bei Ausreißern sind Median + Streuungsmaß notwendig.'
        },
        {
          q: '[3. Validation] Ist "höheres Mittel = typisch höheres Niveau" immer korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'stat_desk_2', role: 'VALIDATION' },
          hint: 'Ein Extremwert kann den Mittelwert ziehen.',
          explain: 'Nein. Das typische Niveau kann trotz höherem Mittel unverändert sein.'
        }
      ]
    }
  ],
  bivariat: [
    {
      title: 'Pearson und Spearman bewusst unterscheiden',
      context: 'Zusammenhang zweier Variablen mit möglicher Ausreißerproblematik.',
      steps: [
        {
          q: '[1. Decision] Ist Pearson immer das beste Standardmaß, auch bei Rangdaten oder Ausreißern?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_biv_1', stepId: 'pearson', isDecision: true },
          hint: 'Denke an monotone statt streng lineare Struktur.',
          explain: 'Nein. Bei Rangdaten oder deutlichen Ausreißern ist Spearman oft der sauberere Zugriff.'
        },
        {
          q: '[2. Execution] Welche Größe zeigt die Richtung gemeinsamer Streuung, ist aber nicht normiert?',
          answer: ['kovarianz', 'covarianz', 'cov'],
          options: { problemId: 'stat_biv_1', stepId: 'cov', dependsOn: 'pearson' },
          hint: 'Vor der Korrelation steht die gemeinsame Streuung.',
          explain: 'Die Kovarianz zeigt das Vorzeichen des linearen Zusammenhangs, ist aber einheitenabhängig.'
        },
        {
          q: '[3. Validation] Beweist ein hoher Betrag von r automatisch einen kausalen Effekt?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_biv_1', role: 'VALIDATION' },
          hint: 'Drittvariablen und Designfragen bleiben offen.',
          explain: 'Nein. Korrelation misst Zusammenhang, nicht Kausalität.'
        }
      ]
    }
  ],
  testen: [
    {
      title: 'Einstichproben-t-Test',
      context: 'Stichprobe mit n=16, x̄=52, s=8. Hypothese: μ₀=50, α=0.05.',
      steps: [
        {
          q: '[1. Interpretation] Formulieren Sie die Nullhypothese.',
          answer: ['H0: mu = 50', 'H0: μ = 50', 'mu=50', 'μ=50'],
          options: { problemId: 'stat_test_1', stepId: 'h0', isDecision: true },
          hint: 'H₀ entspricht dem behaupteten Wert.',
          explain: 'H₀: μ = 50, H₁: μ ≠ 50 (zweiseitig).'
        },
        {
          q: '[2. Berechnung] Berechnen Sie die Teststatistik t.',
          answer: ['1', '1.0', '1,0'],
          options: { problemId: 'stat_test_1', stepId: 'tstat', dependsOn: 'h0' },
          hint: 't = (x̄ − μ₀) / (s/√n)',
          explain: 't = (52−50)/(8/4) = 2/2 = 1'
        },
        {
          q: '[3. Validierung] Wird H₀ zum 5%-Niveau abgelehnt?',
          answer: ['nein', 'Nein', 'nicht abgelehnt'],
          options: { problemId: 'stat_test_1', stepId: 'decision', dependsOn: 'tstat', role: 'VALIDATION' },
          hint: 'Vergleichen Sie |t| mit dem kritischen Wert t₀.₀₂₅,₁₅ ≈ 2.131.',
          explain: '|t| = 1 < 2.131, daher wird H₀ nicht abgelehnt.'
        }
      ]
    }
    ,
    {
      title: 'p-Wert und Entscheidungsfalle',
      context: 'Gegeben: p = 0.08 bei alpha = 0.05.',
      steps: [
        {
          q: '[1. Decision] Wird H0 auf 5%-Niveau verworfen?',
          answer: ['nein', 'Nein', 'nicht verwerfen'],
          options: { problemId: 'stat_test_2', stepId: 'decision', isDecision: true },
          hint: 'Vergleiche p direkt mit alpha.',
          explain: 'p = 0.08 ist größer als 0.05; H0 wird nicht verworfen.'
        },
        {
          q: '[2. Execution] Bedeutet p=0.08, dass H0 mit 92% Wahrscheinlichkeit wahr ist?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'stat_test_2', stepId: 'pmean', dependsOn: 'decision' },
          hint: 'p-Wert ist nicht P(H0 wahr).',
          explain: 'Der p-Wert ist eine Wahrscheinlichkeit unter H0, nicht über H0.'
        },
        {
          q: '[3. Validation] Ist "nicht verworfen" gleichbedeutend mit "bewiesen wahr"?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'stat_test_2', role: 'VALIDATION' },
          hint: 'Denke an Teststärke und Fehler 2. Art.',
          explain: 'Nein. Ein nicht signifikanter Test beweist H0 nicht.'
        }
      ]
    }
  ],
  z_test: [
    {
      title: 'z oder t korrekt wählen',
      context: 'Mittelwerttest, sigma unbekannt, n=18.',
      steps: [
        {
          q: '[1. Decision] Welcher Test ist der saubere Standard?',
          answer: ['t-test', 't test', 't'],
          options: { problemId: 'stat_z_1', stepId: 'select', isDecision: true },
          hint: 'Unbekanntes sigma ist der Schlüssel.',
          explain: 'Bei unbekanntem sigma wird standardmäßig der t-Test verwendet.'
        },
        {
          q: '[2. Execution] Warum ist z hier riskant als Standard?',
          answer: ['df', 'dickere ränder', 't-verteilung', 'unsicherheit'],
          options: { problemId: 'stat_z_1', stepId: 'why', dependsOn: 'select' },
          hint: 'Kleine Stichprobe -> Verteilungsunterschied zählt.',
          explain: 'Die t-Verteilung ist bei kleinem n breiter; z wäre zu optimistisch.'
        },
        {
          q: '[3. Validation] Nähern sich z- und t-Test bei großem n an?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_z_1', role: 'VALIDATION' },
          hint: 'Grenzwertidee.',
          explain: 'Ja, mit wachsendem n konvergiert t gegen z.'
        }
      ]
    }
  ],
  zwei_stichproben: [
    {
      title: 'Paarstruktur korrekt erkennen',
      context: 'Vorher-Nachher-Messung an denselben 20 Personen.',
      steps: [
        {
          q: '[1. Decision] Verbundener oder unverbundener Test?',
          answer: ['verbunden', 'paired', 'gepaarter t-test'],
          options: { problemId: 'stat_2s_1', stepId: 'pair', isDecision: true },
          hint: 'Sind es dieselben Personen?',
          explain: 'Ja, es sind gepaarte Beobachtungen -> verbundener Test.'
        },
        {
          q: '[2. Execution] Welche Größe wird beim verbundenen Test analysiert?',
          answer: ['differenzen', 'd_i', 'vorher-nachher differenz'],
          options: { problemId: 'stat_2s_1', stepId: 'diff', dependsOn: 'pair' },
          hint: 'Pro Person eine Differenz.',
          explain: 'Getestet wird der Mittelwert der individuellen Differenzen.'
        },
        {
          q: '[3. Validation] Ist ein unverbundener Test hier meist konservativ und weniger effizient?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_2s_1', role: 'VALIDATION' },
          hint: 'Er ignoriert die Paarinformation.',
          explain: 'Ja, er wirft die Individualkontrolle weg und verliert häufig Teststärke.'
        }
      ]
    }
  ],
  regression_schaetzung_inferenz: [
    {
      title: 'Signifikant vs. relevant',
      context: 'Regressionsoutput: beta1 = 0.02, p < 0.01, große Stichprobe.',
      steps: [
        {
          q: '[1. Decision] Ist der Effekt statistisch signifikant?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_reg_1', stepId: 'sig', isDecision: true },
          hint: 'Direkt p mit alpha vergleichen.',
          explain: 'Ja, p < 0.01 zeigt statistische Signifikanz.'
        },
        {
          q: '[2. Execution] Reicht Signifikanz allein für hohe praktische Relevanz?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_reg_1', stepId: 'rel', dependsOn: 'sig' },
          hint: 'Effektgröße separat betrachten.',
          explain: 'Nein, die Effektgröße (0.02) kann praktisch klein sein.'
        },
        {
          q: '[3. Validation] Ist hohes R² ein Kausalitätsbeweis?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'stat_reg_1', role: 'VALIDATION' },
          hint: 'Denke an omitted variables und Design.',
          explain: 'Nein, R² misst Erklärungsanteil, nicht Kausalität.'
        }
      ]
    }
  ],
  wahrscheinlichkeit: [
    {
      title: 'Bayes und Basisratenfalle',
      context: 'Prävalenz 1%, Sensitivität 99%, Falsch-Positiv-Rate 5%.',
      steps: [
        {
          q: '[1. Decision] Ist P(krank|+) bei diesen Werten automatisch sehr hoch?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_prob_1', stepId: 'base', isDecision: true },
          hint: 'Denke an die Basisrate.',
          explain: 'Nein. Eine seltene Krankheit kann trotz gutem Test viele falsch positive Fälle erzeugen.'
        },
        {
          q: '[2. Execution] Welche Formel ist der saubere Zugriff auf P(krank|+)?',
          answer: ['bayes', 'satz von bayes', 'bayes-formel'],
          options: { problemId: 'stat_prob_1', stepId: 'formula', dependsOn: 'base' },
          hint: 'Bedingte Wahrscheinlichkeit umdrehen.',
          explain: 'Verwende den Satz von Bayes mit totaler Wahrscheinlichkeit im Nenner.'
        },
        {
          q: '[3. Validation] Ist p-Wert-Logik dasselbe wie Bayes-Posterior-Logik?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_prob_1', role: 'VALIDATION' },
          hint: 'Unterschied zwischen Testinferenz und bedingter Wahrscheinlichkeit.',
          explain: 'Nein. Das sind unterschiedliche Konzepte mit unterschiedlichen Bedingungen.'
        }
      ]
    }
  ],
  verteilungen: [
    {
      title: 'Standardisierung und Intervallinterpretation',
      context: 'X ~ N(50, 100), gesucht ist die korrekte Standardisierung für P(40 < X < 60).',
      steps: [
        {
          q: '[1. Decision] Welche Transformation ist korrekt?',
          answer: ['z=(x-mu)/sigma', '(x-mu)/sigma', 'standardisierung'],
          options: { problemId: 'stat_dist_1', stepId: 'z', isDecision: true },
          hint: 'Mittelwert abziehen, durch Standardabweichung teilen.',
          explain: 'Standardisierung erfolgt über Z = (X - μ)/σ.'
        },
        {
          q: '[2. Execution] Ist P(40 < X < 60) bei μ=50, σ=10 identisch zu P(-1 < Z < 1)?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_dist_1', stepId: 'map', dependsOn: 'z' },
          hint: 'Rechne beide Grenzen um.',
          explain: 'Ja. 40 und 60 entsprechen z=-1 bzw. z=1.'
        },
        {
          q: '[3. Validation] Bedeutet ein hoher z-Wert automatisch Kausalität?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_dist_1', role: 'VALIDATION' },
          hint: 'Verteilungsrechnung ist keine Kausalitätsaussage.',
          explain: 'Nein. Ein z-Wert beschreibt Lage in einer Verteilung, nicht Ursache-Wirkung.'
        }
      ]
    }
  ],
  schaetzen_verfahren: [
    {
      title: 'MoM, ML und MSE-Logik',
      context: 'Bernoulli-Stichprobe mit 76 Erfolgen bei n=200; zusätzlicher Schätzervergleich über Bias und Varianz.',
      steps: [
        {
          q: '[1. Decision] Liefern MoM und ML für Bernoulli-π denselben Anteilsschätzer?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_est_1', stepId: 'momml', isDecision: true },
          hint: 'Beide nutzen hier den Stichprobenanteil.',
          explain: 'Ja, beide führen in diesem Standardfall auf π-Hut = x/n.'
        },
        {
          q: '[2. Execution] Welche Formel verknüpft Varianz und Bias zur Gesamtgüte?',
          answer: ['mse=var+bias^2', 'mse', 'var+bias^2'],
          options: { problemId: 'stat_est_1', stepId: 'mse', dependsOn: 'momml' },
          hint: 'Gesamtfehler statt nur Streuung.',
          explain: 'MSE = Var(θ-hat) + Bias(θ-hat)^2.'
        },
        {
          q: '[3. Validation] Reicht bei verzerrten Schätzern ein reiner Varianzvergleich?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_est_1', role: 'VALIDATION' },
          hint: 'Bias kann dominieren.',
          explain: 'Nein. Ohne Bias-Komponente ist der Qualitätsvergleich unvollständig.'
        }
      ]
    }
  ],
  schaetzen_eigenschaften_intervalle: [
    {
      title: 'Konfidenzintervall richtig lesen',
      context: '95%-KI für den Mittelwert bei gegebenem Stichprobenmittel und Standardfehler.',
      steps: [
        {
          q: '[1. Decision] Bedeutet ein 95%-KI, dass μ mit 95% Wahrscheinlichkeit im konkreten Intervall liegt?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_ci_1', stepId: 'meaning', isDecision: true },
          hint: 'Die Wahrscheinlichkeit gehört zur Methode, nicht zum fixen Parameter.',
          explain: 'Nein. Der Parameter ist fix; die Intervallmethode trifft in 95% der Wiederholungsstichproben.'
        },
        {
          q: '[2. Execution] Wird ein Intervall bei höherem Konfidenzniveau typischerweise breiter oder schmaler?',
          answer: ['breiter', 'weiter'],
          options: { problemId: 'stat_ci_1', stepId: 'width', dependsOn: 'meaning' },
          hint: 'Mehr Sicherheit kostet Präzision.',
          explain: 'Breiter. Der kritische Wert steigt mit dem Konfidenzniveau.'
        },
        {
          q: '[3. Validation] Gilt bei zweiseitigen Tests: μ₀ außerhalb des 95%-KI => H0 auf 5%-Niveau ablehnen?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_ci_1', role: 'VALIDATION' },
          hint: 'Denke an die KI-Test-Dualität.',
          explain: 'Ja. Das ist die Standard-Dualität zwischen zweiseitigem Test und (1−α)-Intervall.'
        }
      ]
    },
    {
      title: 'Standardfehler und Präzision',
      context: 'Zwei Stichproben mit gleicher Streuung, aber unterschiedlichem n.',
      steps: [
        {
          q: '[1. Decision] Wird das Intervall bei größerem n typischerweise schmaler?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_ci_2', stepId: 'n', isDecision: true },
          hint: 'Standardfehler skaliert mit 1/sqrt(n).',
          explain: 'Ja. Größeres n senkt den Standardfehler und damit die Intervallbreite.'
        },
        {
          q: '[2. Execution] Welche Größe sinkt direkt mit größerem n?',
          answer: ['standardfehler', 'se'],
          options: { problemId: 'stat_ci_2', stepId: 'se', dependsOn: 'n' },
          hint: 'Nicht der Mittelwert, sondern seine Unsicherheit.',
          explain: 'Der Standardfehler sinkt mit wachsendem Stichprobenumfang.'
        },
        {
          q: '[3. Validation] Reicht ein engeres Intervall allein als Hinweis auf einen größeren Effekt?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_ci_2', role: 'VALIDATION' },
          hint: 'Präzision und Effektgröße unterscheiden.',
          explain: 'Nein. Ein engeres Intervall zeigt mehr Präzision, nicht automatisch einen größeren Effekt.'
        }
      ]
    }
  ],
  varianzanalyse: [
    {
      title: 'ANOVA statt Test-Sammlung',
      context: 'Drei Gruppenmittelwerte sollen verglichen werden.',
      steps: [
        {
          q: '[1. Decision] Ist ANOVA die saubere Primärwahl statt mehrerer ungekorrierter t-Tests?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_anova_1', stepId: 'anova', isDecision: true },
          hint: 'Denke an multiplen Fehler 1. Art.',
          explain: 'Ja. ANOVA kontrolliert den globalen Mittelwertvergleich in einem konsistenten Test.'
        },
        {
          q: '[2. Execution] Was zeigt ein signifikanter globaler F-Test allein?',
          answer: ['mindestens eine gruppe unterscheidet sich', 'nicht alle mittelwerte gleich'],
          options: { problemId: 'stat_anova_1', stepId: 'global', dependsOn: 'anova' },
          hint: 'Globaltest vs. Paarvergleich trennen.',
          explain: 'Er zeigt nur, dass nicht alle Mittelwerte gleich sind, aber nicht welche Paare differieren.'
        },
        {
          q: '[3. Validation] Darf man nach signifikantem F ohne Korrektur beliebig viele Paarvergleiche interpretieren?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_anova_1', role: 'VALIDATION' },
          hint: 'Familienweiser Fehler.',
          explain: 'Nein. Post-hoc-Tests/Korrekturen sind nötig (z.B. Tukey oder Bonferroni).'
        }
      ]
    }
    ,
    {
      title: 'Globaltest vs. Paarvergleich',
      context: 'Signifikanter F-Test liegt vor, aber die Paare sind noch ungeklärt.',
      steps: [
        {
          q: '[1. Decision] Bedeutet ein signifikanter ANOVA-F-Test automatisch, dass jede Gruppe sich von jeder anderen unterscheidet?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_anova_2', stepId: 'global', isDecision: true },
          hint: 'Globaltest und Post-hoc trennen.',
          explain: 'Nein. Der F-Test zeigt nur, dass nicht alle Mittelwerte gleich sind.'
        },
        {
          q: '[2. Execution] Welcher nächste Schritt ist für Paarvergleiche sauber?',
          answer: ['post-hoc', 'tukey', 'bonferroni', 'holm'],
          options: { problemId: 'stat_anova_2', stepId: 'posthoc', dependsOn: 'global' },
          hint: 'Familienweisen Fehler kontrollieren.',
          explain: 'Post-hoc-Verfahren wie Tukey oder Bonferroni prüfen die Paare kontrolliert nach.'
        },
        {
          q: '[3. Validation] Würde eine Serie unkorrektierter t-Tests das Fehlerniveau aufblasen?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_anova_2', role: 'VALIDATION' },
          hint: 'Multiples Testen erhöht das Risiko mindestens eines Fehlers 1. Art.',
          explain: 'Ja. Genau deshalb wird ANOVA vorangestellt und Post-hoc kontrolliert.'
        }
      ]
    }
  ],
  regression_diagnostik_prognose: [
    {
      title: 'Diagnostik vor Vertrauen',
      context: 'Residualplot mit Trichterform, ansonsten ordentliches Fit-Niveau.',
      steps: [
        {
          q: '[1. Decision] Welches Hauptproblem signalisiert ein Trichter im Residuenplot?',
          answer: ['heteroskedastizität', 'heteroskedastizitaet'],
          options: { problemId: 'stat_regdp_1', stepId: 'diag', isDecision: true },
          hint: 'Die Fehlerstreuung wächst nicht konstant.',
          explain: 'Die Trichterform spricht für Heteroskedastizität.'
        },
        {
          q: '[2. Execution] Bleiben die OLS-Koeffizienten automatisch unbrauchbar?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_regdp_1', stepId: 'coef', dependsOn: 'diag' },
          hint: 'Trenne Koeffizienten und Inferenz.',
          explain: 'Nicht zwingend. Häufig ist zuerst die Inferenz über Standardfehler/Teste betroffen.'
        },
        {
          q: '[3. Validation] Ist “robuste Standardfehler berichten” eine saubere Klausurreaktion?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_regdp_1', role: 'VALIDATION' },
          hint: 'Inferenz absichern statt nur Fit loben.',
          explain: 'Ja. Das ist eine typische saubere Folgerung aus Heteroskedastizität.'
        }
      ]
    },
    {
      title: 'Konfidenz- vs. Prognoseintervall',
      context: 'Für denselben x0 liefert predict(...) einmal confidence und einmal prediction.',
      steps: [
        {
          q: '[1. Decision] Welches Intervall ist typischerweise breiter?',
          answer: ['prediction', 'prognoseintervall', 'pi'],
          options: { problemId: 'stat_regdp_2', stepId: 'width', isDecision: true },
          hint: 'Eine neue Einzelbeobachtung enthält zusätzliche Reststreuung.',
          explain: 'Das Prognoseintervall ist breiter als das Konfidenzintervall.'
        },
        {
          q: '[2. Execution] Auf welche Zielgröße zielt das Konfidenzintervall?',
          answer: ['mittelwert', 'erwartungswert', 'e[y|x0]', 'erwarteten mittelwert'],
          options: { problemId: 'stat_regdp_2', stepId: 'target', dependsOn: 'width' },
          hint: 'Nicht neue Einzelbeobachtung, sondern die bedingte Mitte.',
          explain: 'Es beschreibt die Unsicherheit über den erwarteten Mittelwert bei x0.'
        },
        {
          q: '[3. Validation] Bedeutet ein präziser Mittelwert automatisch eine präzise Einzelprognose?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_regdp_2', role: 'VALIDATION' },
          hint: 'Reststreuung bleibt bei neuen Beobachtungen erhalten.',
          explain: 'Nein. Einzelprognosen tragen zusätzliche idiosynkratische Unsicherheit.'
        }
      ]
    }
  ],
  nichtparametrisch: [
    {
      title: 'Rangtest statt Mittelwerttest',
      context: 'Zwei unabhängige Gruppen, ordinale Daten, deutliche Schiefe und Ausreißer.',
      steps: [
        {
          q: '[1. Decision] Welcher Test ist hier typischerweise näherliegend als ein t-Test?',
          answer: ['mann-whitney', 'mann whitney', 'u-test', 'rangtest'],
          options: { problemId: 'stat_np_1', stepId: 'select', isDecision: true },
          hint: 'Rangbasiert statt mittelwertbasiert.',
          explain: 'Der Mann-Whitney-U-Test ist hier die typische robuste Wahl.'
        },
        {
          q: '[2. Execution] Welcher Vorteil ist hier zentral: höhere Power bei Normalität oder Robustheit gegen Annahmeverletzungen?',
          answer: ['robustheit', 'annahmeverletzungen', 'ausreißer'],
          options: { problemId: 'stat_np_1', stepId: 'why', dependsOn: 'select' },
          hint: 'Die Datensituation ist gerade nicht ideal-parametrisch.',
          explain: 'Zentral ist die Robustheit gegen Ausreißer, Schiefe und fehlende Metrik.'
        },
        {
          q: '[3. Validation] Sind nichtparametrische Tests deshalb immer grundsätzlich besser?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_np_1', role: 'VALIDATION' },
          hint: 'Bei gut erfüllten Annahmen bleiben parametrische Tests oft effizienter.',
          explain: 'Nein. Sie sind robuster, aber bei idealen parametrischen Bedingungen nicht automatisch überlegen.'
        }
      ]
    }
  ]
};

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});
