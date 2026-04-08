import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  finanz_denkweise: [
    {
      title: 'Leitobjekt erkennen',
      context: 'Ein Fall beschreibt ein Projekt mit frühem Mitteleinsatz, späteren Rückflüssen und unsicherem Ausgang.',
      steps: [
        {
          q: '[1. Interpretation] Reicht es, nur nach dem buchhalterischen Gewinn zu fragen?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_fd_1', stepId: 'no', isDecision: true },
          hint: 'Die Finanzwirtschaft schaut breiter auf den Fall.',
          explain: 'Nein. Zahlungszeitpunkte, Vermögenswirkung und Risiko müssen mitgelesen werden.'
        },
        {
          q: '[2. Decision] Welches Leitobjekt ordnet den Fall zuerst?',
          answer: ['zahlungsreihe', 'zahlungsstrom'],
          options: { problemId: 'fw_fd_1', stepId: 'cash', dependsOn: 'no' },
          hint: 'Von dort aus werden Zeit und Risiko erst sichtbar.',
          explain: 'Die Zahlungsreihe ist die zentrale Übersetzungsform fast aller Finanzaufgaben.'
        }
      ]
    }
  ],
  liquiditaetsplanung: [
    {
      title: 'Kapitalbedarf lesen',
      context: 'Kumulierte Ein- und Auszahlungen zeigen zwischenzeitlich einen starken negativen Ausschlag.',
      steps: [
        {
          q: '[1. Interpretation] Zeigt dieser Tiefpunkt den minimalen oder maximalen Finanzierungsbedarf?',
          answer: ['maximalen', 'maximal'],
          options: { problemId: 'fw_liq_1', stepId: 'max', isDecision: true },
          hint: 'Die Lücke muss zu diesem Zeitpunkt vollständig gedeckt werden.',
          explain: 'Der tiefste kumulierte Saldo markiert den maximalen Kapitalbedarf.'
        },
        {
          q: '[2. Decision] Ist damit schon automatisch auch die langfristige Rentabilität negativ?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_liq_1', stepId: 'no', dependsOn: 'max' },
          hint: 'Liquidität und Gesamterfolg sind nicht identisch.',
          explain: 'Nein. Eine zwischenzeitliche Lücke sagt zunächst nur etwas über Finanzierung, nicht über den Endsaldo.'
        }
      ]
    }
  ],
  kapitalmarkt_bewertung: [
    {
      title: 'Benchmark und Realität',
      context: 'Eine Aufgabe kontrastiert vollkommenen Kapitalmarkt und reale Bankenfunktion.',
      steps: [
        {
          q: '[1. Interpretation] Würden Banken auf vollkommenen Märkten theoretisch weniger wichtig wirken?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_ki_1', stepId: 'yes', isDecision: true },
          hint: 'Dort lassen sich viele Tauschvorgänge direkt über den Markt organisieren.',
          explain: 'Ja. Gerade deshalb erklärt die Theorie Banken über reale Friktionen.'
        },
        {
          q: '[2. Decision] Welche Friktion rechtfertigt Banken besonders?',
          answer: ['informationsprobleme', 'suchkosten', 'transaktionskosten'],
          options: { problemId: 'fw_ki_1', stepId: 'friction', dependsOn: 'yes' },
          hint: 'Mehr als eine Antwort wäre inhaltlich plausibel.',
          explain: 'Informations- und Transaktionsprobleme machen Intermediäre ökonomisch sinnvoll.'
        }
      ]
    },
    {
      title: 'Zins als Preis des Zeittauschs',
      context: 'Kapitalmarktorientierte Bewertung vergleicht Zahlungen über verschiedene Zeitpunkte.',
      steps: [
        {
          q: '[1. Interpretation] Ist der Zinssatz in dieser Sicht vor allem ein „Nebenparameter“ oder der Preis des Zeittauschs?',
          answer: ['preis des zeittauschs', 'tauschpreis', 'bewertungsmaßstab'],
          options: { problemId: 'fw_km_2', stepId: 'price', isDecision: true },
          hint: 'Er verbindet heute und morgen in einer Zahl.',
          explain: 'Der Zins ist der Marktpreis, mit dem zukünftige und heutige Zahlungen vergleichbar werden.'
        },
        {
          q: '[2. Decision] Was ist die erste Konsequenz für fast jede dynamische Investitionsaufgabe?',
          answer: ['diskontieren oder aufzinsen', 'zeitwert', 'bewertungszeitpunkt'],
          options: { problemId: 'fw_km_2', stepId: 'transform', dependsOn: 'price' },
          hint: 'Ohne Transformation keine Vergleichbarkeit.',
          explain: 'Zahlungen müssen auf einen gemeinsamen Bewertungszeitpunkt gebracht werden.'
        }
      ]
    }
  ],
  institutionen_marktunvollkommenheit: [
    {
      title: 'Institutionen und Informationsasymmetrie',
      context: 'Auf unvollkommenen Märkten entstehen Normen und Intermediäre.',
      steps: [
        {
          q: '[1. Interpretation] Sind Banken in dieser Sicht primär „Dekoration“ oder Antwort auf Marktfriktionen?',
          answer: ['antwort auf friktionen', 'marktfriktionen', 'institution'],
          options: { problemId: 'fw_inst_1', stepId: 'role', isDecision: true },
          hint: 'Sie mildern Informations- und Transaktionsprobleme.',
          explain: 'Institutionen wie Banken werden ökonomisch sinnvoll, weil sie Friktionen adressieren.'
        },
        {
          q: '[2. Decision] Welches Problem rechtfertigt typischerweise Finanzintermediation besonders?',
          answer: ['informationsasymmetrie', 'informationsproblem', 'überwachung'],
          options: { problemId: 'fw_inst_1', stepId: 'info', dependsOn: 'role' },
          hint: 'Kreditgeber können Qualität und Verhalten schwer beobachten.',
          explain: 'Informationsasymmetrien und damit verbundene Überwachungs- und Suchkosten stützen die Intermediärsfunktion.'
        }
      ]
    }
  ],
  intertemporale_wahl: [
    {
      title: 'Sparen oder Kredit?',
      context: 'Ein Haushalt wählt einen heutigen Konsum oberhalb des Ausstattungspunkts.',
      steps: [
        {
          q: '[1. Interpretation] Liegt eher Sparen oder Kreditaufnahme vor?',
          answer: ['kreditaufnahme', 'kredit'],
          options: { problemId: 'fw_it_1', stepId: 'credit', isDecision: true },
          hint: 'Heute wird mehr konsumiert als aus dem Ausstattungspunkt heraus möglich wäre.',
          explain: 'Das entspricht Kreditaufnahme: Zukunftsmittel werden in die Gegenwart gezogen.'
        },
        {
          q: '[2. Decision] Was bildet die Steigung der Budgetgeraden fachlich ab?',
          answer: ['preis des zeittausches', 'zins', 'markttauschverhältnis'],
          options: { problemId: 'fw_it_1', stepId: 'slope', dependsOn: 'credit' },
          hint: 'Heute und morgen werden gegeneinander getauscht.',
          explain: 'Die Steigung der Budgetgeraden ist der Preis des Zeittausches und spiegelt den Zins.'
        }
      ]
    }
  ],
  kapitalwert_fisher: [
    {
      title: 'Kapitalwert richtig lesen',
      context: 'Ein Projekt weist einen positiven Kapitalwert auf.',
      steps: [
        {
          q: '[1. Interpretation] Bedeutet das nur „positive Rendite“ oder einen Vermögenszuwachs relativ zur Alternative?',
          answer: ['vermögenszuwachs', 'vermoegenszuwachs', 'vermögenszuwachs relativ zur alternative'],
          options: { problemId: 'fw_kf_1', stepId: 'wealth', isDecision: true },
          hint: 'Die Kapitalmarktalternative ist immer der Referenzpunkt.',
          explain: 'Ein positiver Kapitalwert bedeutet Vermögenszuwachs relativ zur Kapitalmarktanlage.'
        },
        {
          q: '[2. Decision] Darf Fisher-Separation bei unterschiedlichen Soll- und Habenzinsen unverändert verwendet werden?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_kf_1', stepId: 'no', dependsOn: 'wealth' },
          hint: 'Die Marktannahmen werden dann verletzt.',
          explain: 'Nein. Bei asymmetrischen Finanzierungskonditionen zerfällt die saubere Trennung von Investition und Konsum.'
        }
      ]
    },
    {
      title: 'Methodenwahl bei Projektkonflikt',
      context: 'Projekt A: höherer IZF, Projekt B: höherer Kapitalwert beim relevanten Kalkulationszins.',
      steps: [
        {
          q: '[1. Interpretation] Welches Kriterium steuert bei Ausschlussalternativen mit Ziel Vermögensmaximierung?',
          answer: ['kapitalwert', 'npv', 'k0'],
          options: { problemId: 'fw_kf_2', stepId: 'criterion', isDecision: true },
          hint: 'Gesucht ist die absolute Wertregel.',
          explain: 'Bei Ausschlussalternativen dominiert das Kapitalwertkriterium, wenn Vermögensmaximierung das Ziel ist.'
        },
        {
          q: '[2. Decision] Reicht „höherer IZF“ in diesem Konfliktfall als Entscheidungsbegründung?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_kf_2', stepId: 'no', dependsOn: 'criterion' },
          hint: 'Prozentvergleich kann Skaleneffekte verdecken.',
          explain: 'Nein. Ein höherer IZF kann mit einem niedrigeren absoluten Vermögensbeitrag einhergehen.'
        },
        {
          q: '[3. Validation] Was muss zusätzlich zum Kriterium im Lösungssatz genannt werden?',
          answer: ['kalkulationszins', 'vergleichszins', 'relevanter zinssatz'],
          options: { problemId: 'fw_kf_2', role: 'VALIDATION' },
          hint: 'Kapitalwert ist immer zinsabhängig.',
          explain: 'Das Urteil muss auf den relevanten Kalkulationszins bezogen werden.'
        }
      ]
    }
  ],
  auf_abzinsen: [
    {
      title: 'Zielzeitpunkt zuerst',
      context: 'Eine Aufgabe mischt Zahlungen in t=0, t=1 und t=3.',
      steps: [
        {
          q: '[1. Interpretation] Ist die erste Pflicht, den Zielzeitpunkt zu bestimmen?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_aa_1', stepId: 'yes', isDecision: true },
          hint: 'Ohne Zielzeitpunkt gibt es keine saubere Transformationsrichtung.',
          explain: 'Ja. Erst danach ist klar, ob auf- oder abgezinst wird.'
        },
        {
          q: '[2. Decision] Wird eine Zahlung in t=0 bei der Kapitalwertmethode noch einmal abgezinst?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_aa_1', stepId: 'no', dependsOn: 'yes' },
          hint: 'Sie liegt bereits im Bewertungszeitpunkt.',
          explain: 'Nein. Zahlungen in t=0 gehen direkt in den Kapitalwert ein.'
        }
      ]
    },
    {
      title: 'Sign- und Transformationslogik',
      context: 'Zahlungen liegen vor und nach dem Bewertungszeitpunkt; Zinssätze ändern sich periodisch.',
      steps: [
        {
          q: '[1. Interpretation] Wird bei variablen Zinssätzen mit einem einheitlichen Faktor (1+i)^n gearbeitet?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_aa_2', stepId: 'no', isDecision: true },
          hint: 'Jede Periode hat ihren eigenen Preis des Zeittauschs.',
          explain: 'Nein. Es wird periodenscharf mit dem Produkt der periodischen Faktoren gerechnet.'
        },
        {
          q: '[2. Decision] Woran erkennst du vor der Rechnung die Richtung (auf- oder abzinsen)?',
          answer: ['zielzeitpunkt', 'bewertungszeitpunkt', 'zeitachse'],
          options: { problemId: 'fw_aa_2', stepId: 'direction', dependsOn: 'no' },
          hint: 'Erst den Referenzpunkt fixieren, dann transformieren.',
          explain: 'Die Richtung ergibt sich aus der Lage der Zahlung relativ zum Ziel-/Bewertungszeitpunkt auf der Zeitachse.'
        },
        {
          q: '[3. Validation] Welcher typische Klausurfehler entsteht hier am häufigsten?',
          answer: ['falsche richtung', 'doppelt abgezinst', 'doppelt aufgezinst'],
          options: { problemId: 'fw_aa_2', role: 'VALIDATION' },
          hint: 'Vorzeichen- bzw. Richtungsfehler.',
          explain: 'Häufig werden Zahlungen in die falsche Richtung oder sogar doppelt transformiert.'
        }
      ]
    }
  ],
  renten_endwert: [
    {
      title: 'Kapitalwert oder Endwert?',
      context: 'Eine regelmäßige Jahreszahlung soll bewertet werden.',
      steps: [
        {
          q: '[1. Interpretation] Geht es zuerst um die Wahl eines Bewertungszeitpunkts?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_re_1', stepId: 'yes', isDecision: true },
          hint: 'Kapitalwert und Endwert unterscheiden genau diesen Bezugspunkt.',
          explain: 'Ja. Erst der Zielzeitpunkt entscheidet, ob Kapitalwert- oder Endwertsicht gewählt wird.'
        },
        {
          q: '[2. Decision] Führen beide Methoden bei konsistentem Zinssatz zu unterschiedlichen Urteilen?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_re_1', stepId: 'no', dependsOn: 'yes' },
          hint: 'Es ist dieselbe Zahlungsreihe.',
          explain: 'Nein. Sie sind äquivalente Bewertungszugriffe auf dieselbe Zahlungsreihe.'
        }
      ]
    },
    {
      title: 'Kapitalwert und Endwert (Äquivalenz)',
      context: 'Gegeben: Kapitalwert K₀ = 15 bei i = 10 %, Laufzeit n = 2 Jahre (Kursbeispiellogik).',
      steps: [
        {
          q: '[1. Execution] Wie hoch ist der Endwert EW₂ in Euro (auf zwei Nachkommastellen)?',
          answer: ['18.15', '18,15'],
          options: { problemId: 'fw_re_2', stepId: 'ew', role: 'CON_SE' },
          hint: 'EWₙ = K₀ · (1+i)ⁿ.',
          explain: 'EW₂ = 15 · 1,1² = 18,15.'
        },
        {
          q: '[2. Validation] Bleibt das Vorteilhaftigkeitsurteil gegenüber nur K₀ gleich?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_re_2', role: 'VALIDATION', dependsOn: 'ew' },
          hint: 'Nur der Bezugszeitpunkt wechselt.',
          explain: 'Ja. Endwert- und Kapitalwertmethode sind bei gleichem Zins äquivalente Perspektiven.'
        }
      ]
    },
    {
      title: 'Annuität und Rentenbarwertfaktor',
      context: 'Der Kapitalwert einer Investition beträgt K₀ = 15; es soll die äquivalente konstante Jahreszahlung a über n = 2 bei i = 10 % bestimmt werden (RBF(2,10 %) ≈ 1,7355).',
      steps: [
        {
          q: '[1. Decision] Welche Grundbeziehung verknüpft Annuität und Kapitalwert?',
          answer: ['k0 gleich a mal rbf', 'k0 = a * rbf', 'annuitaet mal rentenbarwertfaktor'],
          options: { problemId: 'fw_re_3', stepId: 'rel', isDecision: true },
          hint: 'Barwert der Rente gleich Kapitalwert.',
          explain: 'Es gilt K₀ = a · RBWF(n,i), also a = K₀ / RBWF(n,i).'
        },
        {
          q: '[2. Execution] a liegt etwa bei (auf zwei Dezimalstellen gerundet)?',
          answer: ['8.64', '8,64'],
          options: { problemId: 'fw_re_3', stepId: 'a', dependsOn: 'rel', role: 'CON_SE' },
          hint: '15 / 1,7355.',
          explain: 'a ≈ 15 / 1,7355 ≈ 8,64.'
        }
      ]
    },
    {
      title: 'Vollständiger Finanzplan — Zielgröße',
      context: 'Ein Finanzplan listet pro Periode Zahlungsreihe, Finanzierung (Kredit), Zins, Tilgung und eine Zeile „Wert-/Vermögenszuwachs“.',
      steps: [
        {
          q: '[1. Interpretation] Was soll die Zeile „Wert-/Vermögenszuwachs“ in der Kurslogik ausdrücken?',
          answer: ['verursachter vermoegenszuwachs', 'wertzuwachs der investition', 'periodischer nettoeffekt'],
          options: { problemId: 'fw_re_4', stepId: 'meaning', isDecision: true },
          hint: 'Nicht nur Buchung, sondern ökonomische Wirkung.',
          explain: 'Sie fasst den durch das Projekt und die Finanzierung verursachten Vermögenszuwachs der Periode zusammen.'
        },
        {
          q: '[2. Decision] Warum ist der Plan mehr als eine bloße Kapitalwertzahl?',
          answer: ['zeitliche struktur', 'liquiditaet und finanzierung', 'periodenweise sichtbar'],
          options: { problemId: 'fw_re_4', stepId: 'why', dependsOn: 'meaning' },
          hint: 'Zwischenzeitpunkte und Finanzierung.',
          explain: 'Er zeigt, wann Mittel fließen und wie Finanzierung und Projekt zusammenspielen.'
        }
      ]
    }
  ],
  izf_kapitalwertfunktion: [
    {
      title: 'IZF und Marktzins',
      context: 'Ein Projekt hat einen internen Zinsfuß von 9 %, der Kalkulationszins liegt bei 6 %.',
      steps: [
        {
          q: '[1. Interpretation] Ist der Kapitalwert bei 6 % positiv?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_izf_1', stepId: 'yes', isDecision: true },
          hint: 'Der Vergleichszins liegt unterhalb der Nullstelle.',
          explain: 'Ja. Liegt der Kalkulationszins unter dem IZF, ist der Kapitalwert positiv.'
        },
        {
          q: '[2. Decision] Zeigt der IZF allein schon die Empfindlichkeit gegenüber Zinsänderungen?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_izf_1', stepId: 'no', dependsOn: 'yes' },
          hint: 'Dafür braucht man die ganze Funktion.',
          explain: 'Nein. Dafür ist das Kapitalwertprofil zuständig.'
        }
      ]
    },
    {
      title: 'IZF-Regel richtig einordnen',
      context: 'Mehrere Projekte mit unterschiedlichen Laufzeiten und Zahlungsprofilen.',
      steps: [
        {
          q: '[1. Interpretation] Ist „IZF > i“ ein vollständiger Vergleichsmaßstab zwischen mehreren Projekten?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_izf_2', stepId: 'no', isDecision: true },
          hint: 'Das ist primär ein Vorteilhaftigkeitstest eines Einzelprojekts.',
          explain: 'Nein. Für Projektvergleiche braucht man zusätzlich die Kapitalwertperspektive und das Profil.'
        },
        {
          q: '[2. Decision] Welches Werkzeug zeigt die Zinssensitivität des Projektwerts über einen Bereich?',
          answer: ['kapitalwertfunktion', 'kapitalwertprofil', 'npv-profil'],
          options: { problemId: 'fw_izf_2', stepId: 'profile', dependsOn: 'no' },
          hint: 'Gesucht ist mehr als ein einzelner Schwellenzins.',
          explain: 'Die Kapitalwertfunktion zeigt den Verlauf des Werts in Abhängigkeit vom Zinssatz.'
        },
        {
          q: '[3. Validation] Welche Falle adressiert dieses Vorgehen?',
          answer: ['methodenselektion', 'prozentfalle', 'izf-falle'],
          options: { problemId: 'fw_izf_2', role: 'VALIDATION' },
          hint: 'Prozenturteil ohne Werturteil.',
          explain: 'Es verhindert die Prozentfalle, bei der hohe IZF-Werte fälschlich mit höherem Vermögensbeitrag gleichgesetzt werden.'
        }
      ]
    },
    {
      title: 'IZF vs. Kapitalwert — Wahlproblem (Kurszahlen)',
      context:
        'Bei i = 10 %: Projekt A hat Kapitalwert 26,79 und internen Zinsfuß 22 %. Projekt B hat Kapitalwert 20 und IZF 12 %. Projekt C hat Kapitalwert 13,64 und IZF 25 % (Vergleichsbeispiel aus der VL-Logik).',
      steps: [
        {
          q: '[1. Decision] Welches Projekt maximiert bei Ausschluss das Vermögen (Ziel: höchster K₀)?',
          answer: ['projekt a', 'a'],
          options: { problemId: 'fw_izf_3', stepId: 'pick', isDecision: true },
          hint: 'Sortiere nach Kapitalwert, nicht nach Prozent.',
          explain: 'Projekt A hat mit 26,79 den höchsten Kapitalwert.'
        },
        {
          q: '[2. Interpretation] Hat das Projekt mit dem höchsten IZF automatisch den höchsten Kapitalwert?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_izf_3', stepId: 'no', dependsOn: 'pick' },
          hint: 'Projekt C hat höheren IZF als A, aber niedrigeren K₀.',
          explain: 'Nein. Höherer IZF bedeutet nicht zwingend höheren absoluten Vermögensbeitrag.'
        },
        {
          q: '[3. Validation] Welche Entscheidungsregel ist bei Wahl und Vermögensmaximierung maßgeblich?',
          answer: ['hoechster positiver kapitalwert', 'max k0', 'kapitalwert maximieren'],
          options: { problemId: 'fw_izf_3', role: 'VALIDATION' },
          hint: 'Absolute Wertregel.',
          explain: 'Man wählt das Projekt mit dem höchsten positiven Kapitalwert am relevanten Kalkulationszins.'
        }
      ]
    }
  ],
  izf_grenzen: [
    {
      title: 'Mehrdeutigkeit erkennen',
      context: 'Eine Zahlungsreihe wechselt mehrmals das Vorzeichen.',
      steps: [
        {
          q: '[1. Interpretation] Ist dann nur ein einziger sinnvoller IZF garantiert?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_izfg_1', stepId: 'no', isDecision: true },
          hint: 'Vorzeichenwechsel sind das Warnsignal.',
          explain: 'Nein. Mehrere Vorzeichenwechsel können mehrere positive Nullstellen erzeugen.'
        },
        {
          q: '[2. Decision] Welches Kriterium bleibt bei Vermögensmaximierung die robuste Referenz?',
          answer: ['kapitalwert', 'npv', 'k0'],
          options: { problemId: 'fw_izfg_1', stepId: 'npv', dependsOn: 'no' },
          hint: 'Gesucht ist die absolute Vermögensregel.',
          explain: 'Bei solchen Konflikten bleibt der Kapitalwert die robustere Entscheidungsgröße.'
        }
      ]
    },
    {
      title: 'Skalierung: gleicher IZF, anderer Kapitalwert',
      context:
        'Zwei einperiodige Projekte: Projekt 1 zahlt −1 in t=0 und 1,21 in t=1; Projekt 2 zahlt −10.000 in t=0 und 12.100 in t=1. Beide haben denselben internen Zinsfuß.',
      steps: [
        {
          q: '[1. Interpretation] Ist der IZF für beide Projekte derselbe?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_izfg_2', stepId: 'same', isDecision: true },
          hint: 'Die Zahlungsreihe ist proportional skaliert.',
          explain: 'Ja. Proportionale Skalierung ändert den IZF nicht.'
        },
        {
          q: '[2. Decision] Bei i = 10 %: Welches Projekt hat den höheren Kapitalwert?',
          answer: ['projekt 2', '2', 'groesseres projekt'],
          options: { problemId: 'fw_izfg_2', stepId: 'bigger', dependsOn: 'same' },
          hint: 'K₀ skaliert mit dem Volumen.',
          explain: 'Projekt 2 hat den höheren absoluten Kapitalwert, obwohl der IZF gleich ist.'
        }
      ]
    }
  ],
  unsicherheit: [
    {
      title: 'Dominanz vor Erwartungswert',
      context: 'Alternative A liefert in jedem Zustand mindestens so viel wie B und in einem Zustand mehr.',
      steps: [
        {
          q: '[1. Interpretation] Ist B dann noch ernsthaft weiter zu prüfen?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_un_1', stepId: 'no', isDecision: true },
          hint: 'Dominanz soll gerade vorsortieren.',
          explain: 'Nein. B wird von A dominiert und kann ausscheiden.'
        },
        {
          q: '[2. Decision] Welcher Schritt kommt dann für die verbleibenden Alternativen?',
          answer: ['erwartungswert', 'risikoprofil', 'erwartungswert und risiko'],
          options: { problemId: 'fw_un_1', stepId: 'ev', dependsOn: 'no' },
          hint: 'Nach dem Vorsieb kommt die feinere Bewertung.',
          explain: 'Danach werden Erwartungswert, Verlustwahrscheinlichkeit und Risikokorrekturen relevant.'
        }
      ]
    },
    {
      title: 'Gleicher Erwartungswert, unterschiedliche Verlustseite',
      context: 'Alternative A und B haben identischen Erwartungswert, aber verschiedenes Downside-Risiko.',
      steps: [
        {
          q: '[1. Interpretation] Reicht bei gleichem E(X) der Erwartungswert allein für eine robuste Entscheidung?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_un_2', stepId: 'no', isDecision: true },
          hint: 'Mittelwertgleichheit blendet Streuung aus.',
          explain: 'Nein. Bei gleichem Erwartungswert müssen Verlustwahrscheinlichkeit und Verlusthöhe zusätzlich geprüft werden.'
        },
        {
          q: '[2. Decision] Welche Zusatzdimension ist hier klausurkritisch?',
          answer: ['verlustwahrscheinlichkeit', 'downside', 'streuung'],
          options: { problemId: 'fw_un_2', stepId: 'risk', dependsOn: 'no' },
          hint: 'Nicht nur upside betrachten.',
          explain: 'Die Downside-Risikodimension entscheidet oft über die tatsächliche Präferenzordnung.'
        },
        {
          q: '[3. Validation] Welcher typische Denkfehler wird damit vermieden?',
          answer: ['mittelwertfalle', 'erwartungswertfalle', 'nur erwartungswert'],
          options: { problemId: 'fw_un_2', role: 'VALIDATION' },
          hint: 'Einzahl als Vollersatz der Risikostruktur.',
          explain: 'Es vermeidet die Erwartungswertfalle, bei der unterschiedliche Risikoprofile ignoriert werden.'
        }
      ]
    }
  ],
  bezugsrecht: [
    {
      title: 'Verwässerungsschutz',
      context: 'Neue Aktien werden deutlich unter dem alten Börsenkurs emittiert.',
      steps: [
        {
          q: '[1. Interpretation] Droht ohne Ausgleich eine Benachteiligung der Altaktionäre?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_bz_1', stepId: 'yes', isDecision: true },
          hint: 'Niedriger Emissionskurs drückt zunächst den Mischkurs.',
          explain: 'Ja. Ohne Ausgleich würde der geringere Ausgabepreis zu Verwässerung führen.'
        },
        {
          q: '[2. Decision] Welcher Mechanismus kompensiert diesen Effekt?',
          answer: ['bezugsrecht', 'subscription right'],
          options: { problemId: 'fw_bz_1', stepId: 'br', dependsOn: 'yes' },
          hint: 'Altaktionäre erhalten ein handelbares Schutzrecht.',
          explain: 'Das Bezugsrecht gleicht den Verwässerungseffekt aus.'
        }
      ]
    },
    {
      title: 'Ex-Kurs und Bezugsrecht (Zahlenweg)',
      context:
        'n_alt = 8 Mio., n_neu = 2 Mio., alter Kurs aBK = 10 €, Emissionskurs EmK = 9 € (VL-Beispielstruktur).',
      steps: [
        {
          q: '[1. Execution] Wie hoch ist der neue Börsenkurs nBK in € (zwei Nachkommastellen)?',
          answer: ['9.80', '9,80'],
          options: { problemId: 'fw_bz_2', stepId: 'nbk', role: 'CON_SE' },
          hint: '(n_alt·aBK + n_neu·EmK) / (n_alt + n_neu).',
          explain: 'Marktwert EK = 80 + 18 = 98 Mio.; nBK = 98/10 = 9,80 €.'
        },
        {
          q: '[2. Execution] Wie hoch ist der Bezugsrechtswert BR = aBK − nBK in €?',
          answer: ['0.20', '0,20'],
          options: { problemId: 'fw_bz_2', stepId: 'br', dependsOn: 'nbk', role: 'CON_SE' },
          hint: 'Differenz Alt-Kurs minus Mischkurs.',
          explain: 'BR = 10 − 9,80 = 0,20 €.'
        },
        {
          q: '[3. Validation] Gleicht das Bezugsrecht die Verwässerung des Kurses aus?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_bz_2', role: 'VALIDATION' },
          hint: 'Kursplus Recht ≈ alter Kurs.',
          explain: 'Ja. Ökonomisch kompensiert das Recht den Kursrückgang für Altaktionäre.'
        }
      ]
    }
  ],
  eigenkapitalkosten: [
    {
      title: 'Eigenkapitalkosten aus Dividendenmodell',
      context: 'P₀ = 40 €, erwartete Dividende D₁ = 2 €, konstantes Wachstum g = 3 %.',
      steps: [
        {
          q: '[1. Execution] Wie hoch ist k_E = D₁/P₀ + g in % (ohne %-Zeichen, eine Nachkommastelle)?',
          answer: ['8.0', '8', '8,0'],
          options: { problemId: 'fw_ek_1', stepId: 'ke', role: 'CON_SE' },
          hint: '2/40 + 0,03.',
          explain: 'k_E = 0,05 + 0,03 = 0,08, also 8 %.'
        },
        {
          q: '[2. Interpretation] Was misst k_E ökonomisch?',
          answer: ['geforderte rendite', 'erwartete aktienrendite', 'kalkulationszins ek'],
          options: { problemId: 'fw_ek_1', stepId: 'mean', dependsOn: 'ke' },
          hint: 'Opportunität der Eigenkapitalgeber.',
          explain: 'k_E ist die vom Markt/preisbasiert implizierte geforderte Eigenkapitalrendite.'
        }
      ]
    },
    {
      title: 'Formel -> Ergebnis -> Bedeutung',
      context: 'Nach der Berechnung von k_E folgt die ökonomische Einordnung.',
      steps: [
        {
          q: '[1. Interpretation] Sind Kapitalkosten bloße Rechenergebnisse ohne Entscheidungsbedeutung?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_ek_2', stepId: 'no', isDecision: true },
          hint: 'Kapitalkosten sind Mindestverzinsungsanforderungen.',
          explain: 'Nein. Sie sind ökonomische Hürdensätze und damit Entscheidungsgrößen.'
        },
        {
          q: '[2. Decision] Welcher Prüfschritt folgt nach der Formelrechnung zwingend?',
          answer: ['interpretation', 'vergleich mit projektrendite', 'bedeutung'],
          options: { problemId: 'fw_ek_2', stepId: 'meaning', dependsOn: 'no' },
          hint: 'Von der Zahl zur Entscheidung.',
          explain: 'Nach der Berechnung muss geprüft werden, ob Projekt-/Finanzierungserträge die Kapitalkosten decken oder übertreffen.'
        },
        {
          q: '[3. Validation] Welche Falle wird dadurch vermieden?',
          answer: ['formelfalle', 'rechenfalle', 'zahl ohne bedeutung'],
          options: { problemId: 'fw_ek_2', role: 'VALIDATION' },
          hint: 'Eine richtige Zahl kann trotzdem falsch genutzt werden.',
          explain: 'Es vermeidet die Formelfalle: korrekt rechnen, aber ökonomisch falsch entscheiden.'
        }
      ]
    }
  ],
  fremdkapitalkosten: [
    {
      title: 'Skonto und Periodenzins (VL-Logik)',
      context:
        'Skonto 2 % bei Zahlung von 98 % des Betrags in 10 Tagen; sonst 100 % in 30 Tagen. Für die Finanzierungskosten der Zahlungsaufschub-Periode: Barwertgleichheit 98 = 100/(1+r_FK) (Rechnungsbetrag 100).',
      steps: [
        {
          q: '[1. Decision] Ist der Verzicht auf Skonto ein faktischer Lieferantenkredit?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_fk_1', stepId: 'credit', isDecision: true },
          hint: 'Längere Zahlungsfrist gegen Preisnachlass.',
          explain: 'Ja. Wer später zahlt, nutzt einen kurzfristigen Kredit zum Preis des Skontoverzichts.'
        },
        {
          q: '[2. Execution] r_FK für die kurze Frist aus 98 = 100/(1+r_FK) — r_FK in % gerundet auf zwei Stellen (ohne %-Zeichen)?',
          answer: ['2.04', '2,04'],
          options: { problemId: 'fw_fk_1', stepId: 'r', dependsOn: 'credit', role: 'CON_SE' },
          hint: 'r_FK = 100/98 − 1.',
          explain: '100/98 − 1 ≈ 0,0204, also etwa 2,04 % für die Skontoperiode.'
        }
      ]
    },
    {
      title: 'Fremdkapitalkosten als IZF der Finanzierungsreihe',
      context: 'Nullkupon: heute +100, in t=2 Zahlung −110 (sichere Zahlungen, VL-Einführungsbeispiel).',
      steps: [
        {
          q: '[1. Decision] Wird der Finanzierungskostensatz hier sinnvoll als IZF der Finanzierungs-Zahlungsreihe interpretiert?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_fk_2', stepId: 'izf', isDecision: true },
          hint: 'Interner Zinsfuß der durch die Finanzierung ausgelösten Zahlungen.',
          explain: 'Ja. Bei sicheren Zahlungen entspricht der effektive Satz dem IZF der Finanzierungsreihe.'
        },
        {
          q: '[2. Interpretation] Steigt der effektive FK-Satz, wenn die Rückzahlung bei gleichem Zufluss höher ausfällt?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_fk_2', stepId: 'higher', dependsOn: 'izf' },
          hint: 'Mehr Rückzahlung bei gleichem Kapitalzufluss.',
          explain: 'Ja. Höhere Rückzahlung bedeutet teurere Finanzierung bei gleichem Betrag heute.'
        }
      ]
    }
  ],
  wacc_leverage: [
    {
      title: 'Renditehebel und Risikohebel',
      context: 'Ein Unternehmen erhöht seinen Fremdkapitalanteil deutlich.',
      steps: [
        {
          q: '[1. Interpretation] Kann dadurch die Eigenkapitalrendite steigen?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_ks_1', stepId: 'yes', isDecision: true },
          hint: 'Unter positiver Renditespanne wirkt Leverage nach oben.',
          explain: 'Ja. Mehr Fremdkapital kann die Eigenkapitalrendite erhöhen.'
        },
        {
          q: '[2. Decision] Steigt damit automatisch auch das Risiko des Eigenkapitals?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_ks_1', stepId: 'risk', dependsOn: 'yes' },
          hint: 'Der Puffer des Eigenkapitals wird kleiner.',
          explain: 'Ja. Leverage verstärkt nicht nur Chancen, sondern auch Schwankungen und Verluste.'
        }
      ]
    }
  ],
  modigliani_miller: [
    {
      title: 'MM: Irrelevanz unter Benchmark',
      context: 'Vollkommener und vollständiger Kapitalmarkt; Frage nach dem Unternehmenswert und der Kapitalstruktur.',
      steps: [
        {
          q: '[1. Decision] Ist in dieser Benchmark-Logik das Verhältnis FK zu EK für den Unternehmenswert irrelevant?',
          answer: ['ja', 'yes', 'irrelevant'],
          options: { problemId: 'fw_mm_1', stepId: 'irr', isDecision: true },
          hint: 'Irrelevanzthese.',
          explain: 'Ja. Unter den strengen Annahmen ist die Kapitalstruktur wertneutral.'
        },
        {
          q: '[2. Interpretation] Können sich trotzdem EK-Rendite und EK-Risiko durch Verschuldung ändern?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_mm_1', stepId: 'lever', dependsOn: 'irr' },
          hint: 'Hebel wirkt auf EK, nicht zwingend auf Gesamtwert.',
          explain: 'Ja. Leverage kann Eigenkapitalrendite und -risiko verschieben, ohne den Gesamtwert zu ändern.'
        }
      ]
    },
    {
      title: 'MM vs. reale Märkte',
      context: 'Übergang von der Theorie zur Praxis.',
      steps: [
        {
          q: '[1. Decision] Welche Faktoren können Wertrelevanz der Kapitalstruktur begründen?',
          answer: ['steuern', 'insolvenzkosten', 'informationsasymmetrie', 'transaktionskosten'],
          options: { problemId: 'fw_mm_2', stepId: 'fric', isDecision: true },
          hint: 'Typische Friktionen aus der VL.',
          explain: 'Steuern, Insolvenz- und Transaktionskosten sowie Informationsasymmetrien sind zentrale Kandidaten.'
        },
        {
          q: '[2. Validation] Ist MM eine getreue Abbildung realer Märkte?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_mm_2', role: 'VALIDATION' },
          hint: 'Benchmark, keine Empirie.',
          explain: 'Nein. MM ist ein Referenzmodell; reale Märkte weichen systematisch ab.'
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
