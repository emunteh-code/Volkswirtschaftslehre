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
  kapitalmarkt_institutionen: [
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
    }
  ],
  kapitalkosten: [
    {
      title: 'Preis des Kapitals',
      context: 'Eine Aufgabe nennt Aktienpreis, erwartete Dividende und Wachstumsrate.',
      steps: [
        {
          q: '[1. Interpretation] Lässt sich daraus die geforderte Eigenkapitalrendite ableiten?',
          answer: ['ja', 'yes'],
          options: { problemId: 'fw_kk_1', stepId: 'yes', isDecision: true },
          hint: 'Genau dafür dient das Dividendenbarwertmodell.',
          explain: 'Ja. Das Modell verknüpft Preis, Dividende und Wachstum zu Eigenkapitalkosten.'
        },
        {
          q: '[2. Decision] Ist Skontoverzicht wirtschaftlich neutral?',
          answer: ['nein', 'no'],
          options: { problemId: 'fw_kk_1', stepId: 'no', dependsOn: 'yes' },
          hint: 'Denk an den impliziten Lieferantenkredit.',
          explain: 'Nein. Der Verzicht auf Skonto erzeugt oft hohe effektive Fremdkapitalkosten.'
        }
      ]
    }
  ],
  kapitalstruktur: [
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
  ]
};

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});
