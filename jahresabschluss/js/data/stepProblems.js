import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  rechnungswesen_intro: [
    {
      title: 'Bilanz oder GuV?',
      context: 'Ein Unternehmen verkauft Waren mit Gewinn. In der Klausur soll die Wirkung auf den Abschluss erklärt werden.',
      steps: [
        {
          q: '[1. Interpretation] Reicht es, nur die neue Bilanzsumme zu nennen?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_rw_1', stepId: 'no', isDecision: true },
          hint: 'Die Erfolgsentstehung muss separat erklärt werden.',
          explain: 'Nein. Die Bilanz zeigt nur den Endzustand; der Gewinn entsteht periodisch über die GuV.'
        },
        {
          q: '[2. Decision] Welcher Abschlussbestandteil erklärt die Erfolgsentstehung?',
          answer: ['guv', 'gewinn und verlustrechnung'],
          options: { problemId: 'ja_rw_1', stepId: 'guv', dependsOn: 'no' },
          hint: 'Dort stehen Aufwendungen und Erträge.',
          explain: 'Die GuV erklärt, wie sich das Jahresergebnis und damit das Eigenkapital verändert.'
        }
      ]
    }
  ],
  gob_inventur: [
    {
      title: 'Ansatz vor Bewertung',
      context: 'Ein Fall nennt eine mögliche Verpflichtung und direkt einen geschätzten Wert.',
      steps: [
        {
          q: '[1. Interpretation] Ist die Wertangabe schon der erste Prüfungsschritt?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_gob_1', stepId: 'no', isDecision: true },
          hint: 'Zuerst klären, ob der Posten überhaupt bilanziert wird.',
          explain: 'Nein. Zuerst ist die Ansatzfrage zu beantworten.'
        },
        {
          q: '[2. Decision] Welche Grundfrage steht davor?',
          answer: ['ob der posten anzusetzen ist', 'ansatzfrage', 'bilanzansatz'],
          options: { problemId: 'ja_gob_1', stepId: 'ansatz', dependsOn: 'no' },
          hint: 'Existenz in der Bilanz vor Höhe in der Bilanz.',
          explain: 'Zuerst ist zu prüfen, ob überhaupt eine Bilanzierungspflicht oder ein Bilanzierungsverbot vorliegt.'
        }
      ]
    }
  ],
  buchen_konten: [
    {
      title: 'Soll an Haben logisch ableiten',
      context: 'Maschinen werden auf Ziel gekauft.',
      steps: [
        {
          q: '[1. Interpretation] Liegt auf der Gegenseite ein Aktiv- oder ein Passivzugang vor?',
          answer: ['passivzugang', 'passiv', 'verbindlichkeit'],
          options: { problemId: 'ja_bk_1', stepId: 'passiv', isDecision: true },
          hint: 'Der Kauf wird nicht bar bezahlt.',
          explain: 'Durch den Zielkauf entsteht eine Verbindlichkeit und damit ein Passivzugang.'
        },
        {
          q: '[2. Execution] Wo steht der Zugang der Verbindlichkeit?',
          answer: ['im haben', 'haben'],
          options: { problemId: 'ja_bk_1', stepId: 'haben', dependsOn: 'passiv' },
          hint: 'Passivkonten spiegeln Aktivkonten.',
          explain: 'Passivkonten verzeichnen Zugänge im Haben.'
        }
      ]
    }
  ],
  buchfuehrung_orga: [
    {
      title: 'Grundbuch oder Hauptbuch',
      context: 'Eine Aufgabe fragt nach der Funktion chronologischer Erfassung.',
      steps: [
        {
          q: '[1. Interpretation] Gehört die chronologische Erfassung in das Grundbuch?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_bo_1', stepId: 'grund', isDecision: true },
          hint: 'Zeitliche Reihenfolge ist das Stichwort.',
          explain: 'Ja. Das Grundbuch dokumentiert Geschäftsvorfälle zeitlich geordnet.'
        },
        {
          q: '[2. Decision] Wofür ist dann das Hauptbuch da?',
          answer: ['sachliche ordnung', 'kontenbezogene ordnung', 'systematische ordnung'],
          options: { problemId: 'ja_bo_1', stepId: 'haupt', dependsOn: 'grund' },
          hint: 'Dort werden die Vorgänge kontenweise gesammelt.',
          explain: 'Das Hauptbuch ordnet die Buchungen sachlich nach Konten.'
        }
      ]
    }
  ],
  anlagevermoegen: [
    {
      title: 'Planmäßig oder außerplanmäßig?',
      context: 'Eine Maschine verliert durch normalen Gebrauch jedes Jahr an Wert.',
      steps: [
        {
          q: '[1. Interpretation] Ist das zunächst ein Fall planmäßiger oder außerplanmäßiger Abschreibung?',
          answer: ['planmäßig', 'planmaessig', 'planmäßige abschreibung'],
          options: { problemId: 'ja_av_1', stepId: 'plan', isDecision: true },
          hint: 'Normaler Nutzungsverzehr ist kein Ausnahmefall.',
          explain: 'Das ist die klassische planmäßige Abschreibung über die Nutzungsdauer.'
        },
        {
          q: '[2. Decision] Welche Größe brauchst du dafür regelmäßig?',
          answer: ['nutzungsdauer', 'anschaffungskosten und nutzungsdauer', 'afa-plan'],
          options: { problemId: 'ja_av_1', stepId: 'dauer', dependsOn: 'plan' },
          hint: 'Der Verzehr wird über Jahre verteilt.',
          explain: 'Vor allem Anschaffungswert, Restwert und Nutzungsdauer bestimmen die lineare AfA.'
        }
      ]
    }
  ],
  umlauf_werkstoffe: [
    {
      title: 'Bewertung und Erfolg',
      context: 'Der Endbestand eines Werkstofflagers soll nach FIFO bewertet werden.',
      steps: [
        {
          q: '[1. Interpretation] Beeinflusst die Wahl des Bewertungsverfahrens nur den Endbestand, aber nicht den Aufwand?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_uw_1', stepId: 'no', isDecision: true },
          hint: 'Verbrauch und Endbestand sind zwei Seiten derselben Rechnung.',
          explain: 'Nein. Ein anderer Endbestand bedeutet zugleich einen anderen Materialaufwand und damit einen anderen Periodenerfolg.'
        },
        {
          q: '[2. Decision] Welcher Grundsatz setzt dem Endbestand beim Umlaufvermögen zusätzlich eine Obergrenze?',
          answer: ['strenges niederstwertprinzip', 'niederstwertprinzip'],
          options: { problemId: 'ja_uw_1', stepId: 'nwp', dependsOn: 'no' },
          hint: 'Niedrigerer beizulegender Wert sticht.',
          explain: 'Zusätzlich gilt das strenge Niederstwertprinzip.'
        }
      ]
    }
  ],
  umlauf_waren_ust: [
    {
      title: 'USt ist kein Erlös',
      context: 'Beim Warenverkauf wird der Bruttobetrag verbucht.',
      steps: [
        {
          q: '[1. Interpretation] Ist die Umsatzsteuer Teil des eigenen Unternehmensertrags?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_uu_1', stepId: 'no', isDecision: true },
          hint: 'Das Unternehmen führt die Steuer weiter.',
          explain: 'Nein. Die Umsatzsteuer wird für das Finanzamt vereinnahmt und gehört nicht zum eigenen Erlös.'
        },
        {
          q: '[2. Decision] Was muss im Buchungssatz daher vom Nettoerlös getrennt werden?',
          answer: ['umsatzsteuer', 'steueranteil'],
          options: { problemId: 'ja_uu_1', stepId: 'ust', dependsOn: 'no' },
          hint: 'Nettoerlös und Steuer laufen nicht auf dasselbe Konto.',
          explain: 'Der Steueranteil wird als Umsatzsteuer separat ausgewiesen.'
        }
      ]
    }
  ],
  eigenkapital: [
    {
      title: 'Rechtsform zuerst',
      context: 'Die Aufgabe fragt nach Kapitalkonten und Gewinnverteilung.',
      steps: [
        {
          q: '[1. Interpretation] Ist die Rechtsform für die Eigenkapitallogik entscheidend?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_ek_1', stepId: 'yes', isDecision: true },
          hint: 'OHG und AG funktionieren bilanziell nicht gleich.',
          explain: 'Ja. Die Struktur des Eigenkapitals hängt maßgeblich von der Rechtsform ab.'
        },
        {
          q: '[2. Decision] Welcher erste Ordnungsschritt hilft deshalb fast immer?',
          answer: ['personengesellschaft oder kapitalgesellschaft', 'rechtsform klären', 'gesellschaftsform'],
          options: { problemId: 'ja_ek_1', stepId: 'form', dependsOn: 'yes' },
          hint: 'Vor Buchung oder Gewinnverwendung zuerst die Hülle bestimmen.',
          explain: 'Zuerst ist zu klären, ob eine Personen- oder Kapitalgesellschaft vorliegt.'
        }
      ]
    }
  ],
  fremdkapital: [
    {
      title: 'Rückstellung oder Verbindlichkeit',
      context: 'Ein Unternehmen erwartet Prozesskosten, die Höhe steht aber noch nicht sicher fest.',
      steps: [
        {
          q: '[1. Interpretation] Spricht die Unsicherheit eher gegen eine normale Verbindlichkeit?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_fk_1', stepId: 'yes', isDecision: true },
          hint: 'Verbindlichkeiten sind typischerweise bestimmter.',
          explain: 'Ja. Die fehlende sichere Höhe spricht eher für eine Rückstellung.'
        },
        {
          q: '[2. Decision] Welcher Postentyp ist dann naheliegend?',
          answer: ['rückstellung', 'rueckstellung'],
          options: { problemId: 'ja_fk_1', stepId: 'rueck', dependsOn: 'yes' },
          hint: 'Ungewisse Verpflichtung ist das Schlüsselwort.',
          explain: 'Naheliegend ist eine Rückstellung wegen ungewisser Verpflichtung.'
        }
      ]
    }
  ],
  rechnungsabgrenzung: [
    {
      title: 'Zahlung und Periode trennen',
      context: 'Die Jahresmiete wird im Dezember für das kommende Halbjahr überwiesen.',
      steps: [
        {
          q: '[1. Interpretation] Gehört der gesamte Aufwand in das alte Jahr, nur weil dort gezahlt wurde?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_rap_1', stepId: 'no', isDecision: true },
          hint: 'Das Periodenprinzip schaut auf die wirtschaftliche Zugehörigkeit.',
          explain: 'Nein. Der Aufwand ist periodengerecht zu verteilen.'
        },
        {
          q: '[2. Decision] Welcher Bilanzposten sichert diese Verteilung bei Vorauszahlungen?',
          answer: ['aktiver rap', 'rap', 'aktive rechnungsabgrenzung'],
          options: { problemId: 'ja_rap_1', stepId: 'arap', dependsOn: 'no' },
          hint: 'Vorauszahlung, die Aufwand der Zukunft betrifft.',
          explain: 'Das ist der klassische Fall eines aktiven Rechnungsabgrenzungspostens.'
        }
      ]
    }
  ],
  erfolgsrechnung: [
    {
      title: 'GKV und UKV richtig vergleichen',
      context: 'Eine Klausur fragt, ob GKV und UKV zu unterschiedlichen Jahresüberschüssen führen.',
      steps: [
        {
          q: '[1. Interpretation] Führen beide Verfahren bei korrekter Anwendung zu unterschiedlichen Ergebnissen?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_er_1', stepId: 'no', isDecision: true },
          hint: 'Darstellung und Ergebnis nicht verwechseln.',
          explain: 'Nein. Sie gliedern denselben Erfolg nur unterschiedlich.'
        },
        {
          q: '[2. Decision] Worin liegt dann der eigentliche Unterschied?',
          answer: ['darstellungslogik', 'kostenarten vs funktionen', 'gliederung'],
          options: { problemId: 'ja_er_1', stepId: 'logic', dependsOn: 'no' },
          hint: 'GKV fragt „welche Kosten?“, UKV eher „wofür?“.',
          explain: 'Der Unterschied liegt in der Gliederung: Kostenarten im GKV, Funktionsbereiche im UKV.'
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
