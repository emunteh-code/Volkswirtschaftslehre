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
  gob_rechtsgrundlagen: [
    {
      title: 'Ansatz vor Bewertung',
      context: 'Ein Fall nennt eine mögliche Verpflichtung und direkt einen geschätzten Wert.',
      steps: [
        {
          q: '[1. Interpretation] Ist die Wertangabe schon der erste Prüfungsschritt?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_gobr_1', stepId: 'no', isDecision: true },
          hint: 'Zuerst klären, ob der Posten überhaupt bilanziert wird.',
          explain: 'Nein. Zuerst ist die Ansatzfrage zu beantworten.'
        },
        {
          q: '[2. Decision] Welche Grundfrage steht davor?',
          answer: ['ob der posten anzusetzen ist', 'ansatzfrage', 'bilanzansatz'],
          options: { problemId: 'ja_gobr_1', stepId: 'ansatz', dependsOn: 'no' },
          hint: 'Existenz in der Bilanz vor Höhe in der Bilanz.',
          explain: 'Zuerst ist zu prüfen, ob überhaupt eine Bilanzierungspflicht oder ein Bilanzierungsverbot vorliegt.'
        }
      ]
    },
    {
      title: 'Maßgeblichkeit, latente Steuern und § 252 HGB',
      context: 'Klausurfall: Bewertungsunterschiede zwischen Handels- und Steuerbilanz sowie Frage nach Vorsicht/Realisation.',
      steps: [
        {
          q: '[1. Decision] Gehört die Klausurfrage „Realisationsprinzip und Vorsichtsprinzip gemäß § 252 HGB“ in den Kern der GoB-Anwendung?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_gobr_2', stepId: 'hgb252', isDecision: true },
          hint: 'Die Normverknüpfung ist explizit klausurrelevant.',
          explain: 'Ja. Die Anwendung von Vorsicht/Realisation mit § 252 HGB ist ein klassischer Prüfungsanker.'
        },
        {
          q: '[2. Interpretation] Können unterschiedliche HGB- und Steuerwerte zukünftige Steuerwirkungen auslösen?',
          answer: ['ja', 'yes', 'latente steuern'],
          options: { problemId: 'ja_gobr_2', stepId: 'latst', dependsOn: 'hgb252' },
          hint: 'Denke an zukünftige Mehr- oder Minderbelastung.',
          explain: 'Ja. Genau diese intertemporalen Unterschiede sind die Logik latenter Steuern.'
        },
        {
          q: '[3. Validation] Welche Zuordnung ist korrekt: zukünftige Steuermehrbelastung -> ?',
          answer: ['passive latente steuern', 'passive latente steuer', 'passiv'],
          options: { problemId: 'ja_gobr_2', role: 'VALIDATION', dependsOn: 'latst' },
          hint: 'Mehrbelastung in der Zukunft bedeutet steuerliche Last nach vorne.',
          explain: 'Zukünftige Steuermehrbelastungen werden als passive latente Steuern abgebildet.'
        }
      ]
    }
  ],
  inventur_inventar_bilanzansatz: [
    {
      title: 'Inventur zu Bilanzansatz',
      context: 'Ein Fall liefert Inventurdaten und sofort einen geschätzten Wertansatz.',
      steps: [
        {
          q: '[1. Interpretation] Muss vor der Wertfrage zuerst die Bilanzierungsfähigkeit geklärt werden?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_iib_1', stepId: 'yes', isDecision: true },
          hint: 'Existenz in der Bilanz vor Höhe in der Bilanz.',
          explain: 'Ja. Erst wenn der Posten dem Grunde nach bilanzierbar ist, wird die Bewertung eröffnet.'
        },
        {
          q: '[2. Decision] Welche Prozessfolge ist methodisch korrekt?',
          answer: ['inventur inventar bilanz', 'inventur zu inventar zu bilanz', 'inventur inventar bilanzansatz'],
          options: { problemId: 'ja_iib_1', stepId: 'flow', dependsOn: 'yes' },
          hint: 'Vom Einzelbestand zur Abschlussverdichtung.',
          explain: 'Die Sachlogik führt von Inventur über Inventar zur Bilanz; Ansatz/Bewertung folgen darauf.'
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
    },
    {
      title: 'Anlagenverkauf nach Bruttomethode (exam-nah)',
      context: 'Restbuchwert 5.000 €, Nettoverkaufserlös 7.000 €.',
      steps: [
        {
          q: '[1. Execution] Liegt beim Verkauf ein Buchgewinn, Buchverlust oder kein Ergebniseffekt vor?',
          answer: ['buchgewinn', 'gewinn'],
          options: { problemId: 'ja_av_2', stepId: 'gain', isDecision: true },
          hint: 'Verkaufserlös mit Restbuchwert vergleichen.',
          explain: 'Da 7.000 € > 5.000 €, entsteht ein Buchgewinn von 2.000 €.'
        },
        {
          q: '[2. Execution] Wie hoch ist der Buchgewinn in Euro?',
          answer: ['2000', '2.000'],
          options: { problemId: 'ja_av_2', stepId: 'gain_amount', dependsOn: 'gain', role: 'CON_SE' },
          hint: 'Differenz Nettoerlös minus Restbuchwert.',
          explain: 'Buchgewinn = 7.000 € - 5.000 € = 2.000 €.'
        },
        {
          q: '[3. Validation] Wird in solchen Aufgaben explizit oft die Bruttomethode verlangt?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_av_2', role: 'VALIDATION' },
          hint: 'Das ist ein klassischer Klausurhinweis im Quellenmaterial.',
          explain: 'Ja. Die Bruttomethode ist im Kursmaterial als eigener Prüfungsfall hervorgehoben.'
        }
      ]
    }
  ],
  umlauf_bewertung_verfahren: [
    {
      title: 'Bewertung und Erfolg',
      context: 'Der Endbestand eines Werkstofflagers soll nach FIFO bewertet werden.',
      steps: [
        {
          q: '[1. Interpretation] Beeinflusst die Wahl des Bewertungsverfahrens nur den Endbestand, aber nicht den Aufwand?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_ubv_1', stepId: 'no', isDecision: true },
          hint: 'Verbrauch und Endbestand sind zwei Seiten derselben Rechnung.',
          explain: 'Nein. Ein anderer Endbestand bedeutet zugleich einen anderen Materialaufwand und damit einen anderen Periodenerfolg.'
        },
        {
          q: '[2. Decision] Welcher Grundsatz setzt dem Endbestand beim Umlaufvermögen zusätzlich eine Obergrenze?',
          answer: ['strenges niederstwertprinzip', 'niederstwertprinzip'],
          options: { problemId: 'ja_ubv_1', stepId: 'nwp', dependsOn: 'no' },
          hint: 'Niedrigerer beizulegender Wert sticht.',
          explain: 'Zusätzlich gilt das strenge Niederstwertprinzip.'
        }
      ]
    },
    {
      title: 'FIFO vs. Durchschnitt (exam-naher Rechenpfad)',
      context: 'Zugänge: 100 Stk à 10 €, 200 Stk à 12 €, 300 Stk à 13 €; Verbrauch: 500 Stk.',
      steps: [
        {
          q: '[1. Execution] Wie viele Stück verbleiben im Endbestand?',
          answer: ['100'],
          options: { problemId: 'ja_ubv_2', stepId: 'ending_qty', role: 'CON_SE' },
          hint: 'Gesamtmenge minus Verbrauch.',
          explain: 'Gesamtzugang 600 Stück minus Verbrauch 500 Stück ergibt 100 Stück Endbestand.'
        },
        {
          q: '[2. Execution] Wie hoch ist der Endbestand nach FIFO?',
          answer: ['1300', '1.300'],
          options: { problemId: 'ja_ubv_2', stepId: 'fifo_end', dependsOn: 'ending_qty', role: 'CON_SE' },
          hint: 'Bei FIFO bleiben die zuletzt beschafften Einheiten im Lager.',
          explain: 'Die verbleibenden 100 Stück stammen aus dem 13-€-Los: 100 × 13 € = 1.300 €.'
        },
        {
          q: '[3. Execution] Wie hoch ist der Endbestand nach Durchschnittsmethode?',
          answer: ['1217', '1.217', '1200', '1.200'],
          options: { problemId: 'ja_ubv_2', stepId: 'avg_end', dependsOn: 'ending_qty', role: 'CON_SE' },
          hint: 'Durchschnittspreis = Gesamtkosten / Gesamtmenge.',
          explain: 'Gesamtkosten = 1.000 + 2.400 + 3.900 = 7.300; Durchschnitt = 7.300/600 ≈ 12,17; Endbestand ≈ 100 × 12,17 = 1.217 (je nach Klausurrundung ggf. ca. 1.200).'
        }
      ]
    }
  ],
  werkstoffe_erzeugnisse_buchungen: [
    {
      title: 'Werkstoffverbrauch buchen',
      context: 'Werkstoffverbrauch soll entweder laufend oder über den Bestandvergleich ermittelt werden.',
      steps: [
        {
          q: '[1. Interpretation] Führen Fortschreibungs- und Inventurmethode zwingend zu unterschiedlichen Verbrauchswerten?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_web_1', stepId: 'no', isDecision: true },
          hint: 'Unterschied liegt primär in der Buchungsroute.',
          explain: 'Nein. Bei korrekter Anwendung können beide Methoden denselben Verbrauch ergeben.'
        },
        {
          q: '[2. Decision] Welche Rechnung gehört zur Inventurmethode?',
          answer: ['anfangsbestand plus zugänge minus schlussbestand', 'ab plus zugänge minus sb', 'verbrauch gleich ab plus zugänge minus sb'],
          options: { problemId: 'ja_web_1', stepId: 'inv', dependsOn: 'no' },
          hint: 'Bestandvergleich am Periodenende.',
          explain: 'Bei der Inventurmethode wird der Verbrauch aus AB + Zugänge - SB ermittelt.'
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
  eigenkapital_kapitalgesellschaften: [
    {
      title: 'Rechtsform zuerst',
      context: 'Die Aufgabe fragt nach Kapitalkonten und Gewinnverteilung.',
      steps: [
        {
          q: '[1. Interpretation] Ist die Rechtsform für die Eigenkapitallogik entscheidend?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_ekk_1', stepId: 'yes', isDecision: true },
          hint: 'OHG und AG funktionieren bilanziell nicht gleich.',
          explain: 'Ja. Die Struktur des Eigenkapitals hängt maßgeblich von der Rechtsform ab.'
        },
        {
          q: '[2. Decision] Welcher erste Ordnungsschritt hilft deshalb fast immer?',
          answer: ['personengesellschaft oder kapitalgesellschaft', 'rechtsform klären', 'gesellschaftsform'],
          options: { problemId: 'ja_ekk_1', stepId: 'form', dependsOn: 'yes' },
          hint: 'Vor Buchung oder Gewinnverwendung zuerst die Hülle bestimmen.',
          explain: 'Zuerst ist zu klären, ob eine Personen- oder Kapitalgesellschaft vorliegt.'
        }
      ]
    }
  ],
  eigenkapital_personengesellschaften: [
    {
      title: 'Privatkonto und Kapitalkonto',
      context: 'Bei einer OHG werden Entnahmen und Einlagen während des Jahres gebucht.',
      steps: [
        {
          q: '[1. Interpretation] Werden Entnahmen/Einlagen im laufenden Jahr direkt auf dem GuV-Konto erfasst?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_ekp_1', stepId: 'no', isDecision: true },
          hint: 'Denke an die Privatkonten.',
          explain: 'Nein. Sie werden zunächst über Privatkonten geführt.'
        },
        {
          q: '[2. Decision] Wohin werden Privatkonten zum Abschluss überführt?',
          answer: ['auf die kapitalkonten', 'kapitalkonto', 'kapitalkonten der gesellschafter'],
          options: { problemId: 'ja_ekp_1', stepId: 'cap', dependsOn: 'no' },
          hint: 'Gesellschafterbezogene Eigenkapitaldarstellung.',
          explain: 'Die Privatkonten werden über die Kapitalkonten der Gesellschafter abgeschlossen.'
        }
      ]
    }
  ],
  verbindlichkeiten: [
    {
      title: 'Rückstellung oder Verbindlichkeit',
      context: 'Ein Unternehmen erwartet Prozesskosten, die Höhe steht aber noch nicht sicher fest.',
      steps: [
        {
          q: '[1. Interpretation] Spricht die Unsicherheit eher gegen eine normale Verbindlichkeit?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_vb_1', stepId: 'yes', isDecision: true },
          hint: 'Verbindlichkeiten sind typischerweise bestimmter.',
          explain: 'Ja. Die fehlende sichere Höhe spricht eher für eine Rückstellung.'
        },
        {
          q: '[2. Decision] Welcher Postentyp ist dann naheliegend?',
          answer: ['rückstellung', 'rueckstellung'],
          options: { problemId: 'ja_vb_1', stepId: 'rueck', dependsOn: 'yes' },
          hint: 'Ungewisse Verpflichtung ist das Schlüsselwort.',
          explain: 'Naheliegend ist eine Rückstellung wegen ungewisser Verpflichtung.'
        }
      ]
    },
    {
      title: 'Fremdwährungsverbindlichkeit zum Stichtag',
      context: 'Eine Verbindlichkeit in Fremdwährung ist am Bilanzstichtag neu zu bewerten.',
      steps: [
        {
          q: '[1. Decision] Muss bei Fremdwährungsverbindlichkeiten zuerst die Klassifikation als Verbindlichkeit gesichert sein?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_vb_2', stepId: 'class_first', isDecision: true },
          hint: 'Erst Schuldenart, dann Bewertungslogik.',
          explain: 'Ja. Erst die sichere Schuldzuordnung, dann die stichtagsbezogene Bewertung.'
        },
        {
          q: '[2. Interpretation] Kann sich der in Euro anzusetzende Erfüllungsbetrag zum Stichtag ändern?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_vb_2', stepId: 'fx_change', dependsOn: 'class_first' },
          hint: 'Der Umrechnungskurs kann vom Zugangszeitpunkt abweichen.',
          explain: 'Ja. Kursänderungen verändern den Erfüllungsbetrag in Euro am Bilanzstichtag.'
        }
      ]
    }
  ],
  rueckstellungen: [
    {
      title: 'Rückstellungslogik',
      context: 'Eine wahrscheinliche Verpflichtung liegt vor, aber Höhe und Zahlungszeitpunkt sind noch unscharf.',
      steps: [
        {
          q: '[1. Interpretation] Ist die Aussage "unscharfe Höhe schließt Bilanzierung aus" korrekt?',
          answer: ['nein', 'no'],
          options: { problemId: 'ja_rs_1', stepId: 'no', isDecision: true },
          hint: 'Ungewissheit kann gerade Rückstellungsgrund sein.',
          explain: 'Nein. Gerade ungewisse, aber wirtschaftlich verursachte Verpflichtungen sind rückstellungsrelevant.'
        },
        {
          q: '[2. Decision] Welcher Bewertungsmaßstab ist für Rückstellungen zentral?',
          answer: ['notwendiger erfüllungsbetrag', 'vernünftige kaufmännische beurteilung', 'erfüllungsbetrag'],
          options: { problemId: 'ja_rs_1', stepId: 'eval', dependsOn: 'no' },
          hint: 'Schätzbasierter Ansatz.',
          explain: 'Maßgeblich ist der nach vernünftiger kaufmännischer Beurteilung notwendige Erfüllungsbetrag.'
        }
      ]
    },
    {
      title: 'Rückstellungsauflösung (exam-nah)',
      context: 'Gebildete Rückstellung 10.000 €, tatsächliche Auszahlung im Folgejahr 7.000 €.',
      steps: [
        {
          q: '[1. Execution] Liegt eine Überdotierung der Rückstellung vor?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_rs_2', stepId: 'over', isDecision: true },
          hint: 'Gebildeter Betrag mit tatsächlicher Inanspruchnahme vergleichen.',
          explain: 'Ja. Die Rückstellung war um 3.000 € höher als die tatsächliche Auszahlung.'
        },
        {
          q: '[2. Execution] In welcher Höhe ist die aufwandsmindernde Auflösung zu erfassen?',
          answer: ['3000', '3.000'],
          options: { problemId: 'ja_rs_2', stepId: 'release', dependsOn: 'over', role: 'CON_SE' },
          hint: 'Differenz aus Rückstellung und Auszahlung.',
          explain: 'Auflösung = 10.000 € - 7.000 € = 3.000 €.'
        },
        {
          q: '[3. Validation] Zeigt der Fall, warum Rückstellungen Folgeperioden-Erfolg beeinflussen?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ja_rs_2', role: 'VALIDATION' },
          hint: 'Die ursprüngliche Schätzung wird später korrigiert.',
          explain: 'Ja. Abweichungen zwischen Schätzung und Ist-Wert wirken in der Folgeperiode erfolgswirksam.'
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
