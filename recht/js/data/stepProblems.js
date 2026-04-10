import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  was_ist_recht: [
    {
      title: 'Normgebunden denken',
      context: 'Ein Bearbeiter löst den Fall nur mit seinem Gerechtigkeitsempfinden.',
      steps: [
        {
          q: '[1. Interpretation] Reicht das methodisch aus?',
          answer: ['nein', 'no'],
          options: { problemId: 're_wr_1', stepId: 'no', isDecision: true },
          hint: 'Im Gutachten braucht es mehr als ein Ergebnis.',
          explain: 'Nein. Juristische Lösungen müssen über Normen und Subsumtion begründet werden.'
        },
        {
          q: '[2. Decision] Was muss stattdessen zuerst geklärt werden?',
          answer: ['die rechtsfrage', 'anspruchsgrundlage', 'norm'],
          options: { problemId: 're_wr_1', stepId: 'norm', dependsOn: 'no' },
          hint: 'Wer will was von wem woraus?',
          explain: 'Zuerst muss die juristische Ausgangsfrage und passende Normbasis bestimmt werden.'
        }
      ]
    }
  ],
  privatrecht: [
    {
      title: 'Privatrecht einordnen',
      context: 'Zwei Privatpersonen streiten über die Erfüllung eines Kaufvertrags.',
      steps: [
        {
          q: '[1. Interpretation] Liegt eher Privatrecht oder öffentliches Recht vor?',
          answer: ['privatrecht'],
          options: { problemId: 're_pr_1', stepId: 'private', isDecision: true },
          hint: 'Die Parteien stehen sich auf Augenhöhe gegenüber.',
          explain: 'Das ist typischerweise Privatrecht.'
        },
        {
          q: '[2. Decision] Welche Grundstruktur hilft bei der Suche nach der passenden Norm?',
          answer: ['bgb', 'bgb-system', 'aufbau des bgb'],
          options: { problemId: 're_pr_1', stepId: 'bgb', dependsOn: 'private' },
          hint: 'Denke an AT und besondere Teile.',
          explain: 'Die BGB-Systematik hilft, Anspruchsgrundlagen geordnet zu finden.'
        }
      ]
    }
  ],
  methodik: [
    {
      title: 'Gutachtenstil',
      context: 'Ein Student nennt sofort das Ergebnis, ohne Definition oder Subsumtion.',
      steps: [
        {
          q: '[1. Interpretation] Fehlt ein methodischer Schritt?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_me_1', stepId: 'yes', isDecision: true },
          hint: 'Obersatz allein genügt nicht.',
          explain: 'Ja. Vor allem die Subsumtion fehlt.'
        },
        {
          q: '[2. Decision] Welcher Schritt verbindet Norm und Sachverhalt?',
          answer: ['subsumtion'],
          options: { problemId: 're_me_1', stepId: 'subs', dependsOn: 'yes' },
          hint: 'Das ist die eigentliche Anwendung.',
          explain: 'Die Subsumtion zeigt, warum der Sachverhalt die Norm erfüllt oder nicht.'
        }
      ]
    }
    ,
    {
      title: 'IRSR-Strukturdisziplin',
      context: 'Fallantwort springt direkt zum Ergebnis ohne klaren Aufbau.',
      steps: [
        {
          q: '[1. Decision] Welcher Schritt muss am Anfang explizit stehen?',
          answer: ['issue', 'rechtsfrage', 'wer will was von wem woraus'],
          options: { problemId: 're_me_2', stepId: 'issue', isDecision: true },
          hint: 'Ohne klare Ausgangsfrage fehlt die Prüfungsrichtung.',
          explain: 'Zuerst muss die präzise Anspruchsfrage formuliert werden.'
        },
        {
          q: '[2. Execution] Welcher Mittelteil verbindet Norm und Sachverhalt?',
          answer: ['subsumtion'],
          options: { problemId: 're_me_2', stepId: 'subs', dependsOn: 'issue' },
          hint: 'Definitionen allein reichen nicht.',
          explain: 'Die Subsumtion ist der Kern der Fallanwendung.'
        },
        {
          q: '[3. Validation] Ist eine Lösung ohne getrennte Zwischenergebnisse klausurstabil?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_me_2', role: 'VALIDATION' },
          hint: 'Zwischenergebnisse steuern den nächsten Prüfungsabschnitt.',
          explain: 'Nein. Ohne Zwischenergebnisse wird die Anspruchskette methodisch unscharf.'
        }
      ]
    },
    {
      title: 'Anspruchskette ohne Ebenensprung',
      context: 'K fordert Leistung, hilfsweise Rücktritt und zusätzlich Schadensersatz im selben Fall.',
      steps: [
        {
          q: '[1. Decision] Was wird zuerst sauber getrennt?',
          answer: ['anspruchsziele', 'primär und hilfsansprüche', 'anspruchsebenen'],
          options: { problemId: 're_me_3', stepId: 'axis', isDecision: true },
          hint: 'Nicht alle Rechtsfolgen auf einmal prüfen.',
          explain: 'Zuerst werden Primäranspruch und Hilfsansprüche als eigene Prüfungsschienen getrennt.'
        },
        {
          q: '[2. Execution] Was prüfst du je Schiene zuerst?',
          answer: ['tatbestand', 'tatbestandsmerkmale'],
          options: { problemId: 're_me_3', stepId: 'tb', dependsOn: 'axis' },
          hint: 'Rechtsfolge erst nach erfüllten Voraussetzungen.',
          explain: 'Jede Schiene beginnt mit den Tatbestandsmerkmalen der jeweiligen Anspruchsgrundlage.'
        },
        {
          q: '[3. Validation] Ist es methodisch korrekt, Rückgewähr und Schadenshöhe schon vor Tatbestandsprüfung auszurechnen?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_me_3', role: 'VALIDATION' },
          hint: 'Erst Anspruch entstanden/untergegangen/durchsetzbar.',
          explain: 'Nein. Vorzeitige Rechtsfolgenrechnung ohne Tatbestandsprüfung ist ein klassischer Gutachtenfehler.'
        }
      ]
    }
  ],
  willenserklaerung: [
    {
      title: 'Schweigen im Privatrecht',
      context: 'A bietet B etwas an. B schweigt.',
      steps: [
        {
          q: '[1. Interpretation] Gilt Schweigen im Privatrecht grundsätzlich als Annahme?',
          answer: ['nein', 'no'],
          options: { problemId: 're_we_1', stepId: 'silence', isDecision: true },
          hint: 'Grundsatz merken.',
          explain: 'Nein. Schweigen ist im Privatrecht grundsätzlich keine Willenserklärung.'
        },
        {
          q: '[2. Decision] Fehlt dann regelmäßig Angebot oder Annahme?',
          answer: ['annahme'],
          options: { problemId: 're_we_1', stepId: 'accept', dependsOn: 'silence' },
          hint: 'Das Angebot wurde ja schon abgegeben.',
          explain: 'Regelmäßig fehlt die Annahmeerklärung.'
        }
      ]
    }
  ],
  dissens: [
    {
      title: 'Offener Dissens',
      context: 'Die Parteien wissen, dass Ratenzahlung und Übergabezeitpunkt noch offen sind.',
      steps: [
        {
          q: '[1. Interpretation] Spricht das zunächst für Vertragsschluss oder gegen Konsens?',
          answer: ['gegen konsens', 'kein konsens', 'dissens'],
          options: { problemId: 're_di_1', stepId: 'consent', isDecision: true },
          hint: 'Bewusst offener Punkt.',
          explain: 'Das spricht zunächst für offenen Dissens und gegen einen sicheren Vertragsschluss.'
        },
        {
          q: '[2. Decision] Welche Norm ist die Standardweiche für den offenen Dissens?',
          answer: ['154', '§ 154', '154 bgb'],
          options: { problemId: 're_di_1', stepId: '154', dependsOn: 'consent' },
          hint: 'Bewusst nicht geeinigt.',
          explain: 'Der offene Dissens wird typischerweise über § 154 BGB gelesen.'
        },
        {
          q: '[3. Validation] Ist es methodisch stark, in diesem Stadium schon Anfechtung zu prüfen?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_di_1', role: 'VALIDATION' },
          hint: 'Zuerst die Konsensfrage, dann erst etwaige Korrekturinstitute.',
          explain: 'Nein. Solange nicht einmal sicher Konsens besteht, startet die Prüfung bei der Einigungslage.'
        }
      ]
    },
    {
      title: 'Versteckter Dissens oder Irrtum?',
      context: 'Beide sprechen von der Übergabe bei „C“, meinen aber unterschiedliche Personen.',
      steps: [
        {
          q: '[1. Decision] Welche Leitfrage kommt vor jeder Anfechtungsdiskussion?',
          answer: ['objektive auslegung', 'empfängerhorizont', 'objektiver empfängerhorizont'],
          options: { problemId: 're_di_2', stepId: 'obj', isDecision: true },
          hint: '§§ 133, 157 BGB.',
          explain: 'Zuerst ist die objektive Auslegung der Erklärungen vorzunehmen.'
        },
        {
          q: '[2. Execution] Wenn objektiv eine übereinstimmende Bedeutung feststellbar ist, bleibt dann der Dissenspfad offen?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_di_2', stepId: 'stay', dependsOn: 'obj' },
          hint: 'Dann liegt eher ein einseitiger Irrtum vor.',
          explain: 'Nein. Bei objektiv feststellbarem Konsens verlagert sich das Problem regelmäßig zur Irrtums- bzw. Anfechtungsebene.'
        },
        {
          q: '[3. Validation] Ist der versteckte Dissens nach der Vorlesung ein sehr häufiger Klausurfall?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_di_2', role: 'VALIDATION' },
          hint: 'Die Vorlesung betont seine Seltenheit.',
          explain: 'Nein. Gerade weil oft doch eine objektive Deutung möglich ist, ist echter versteckter Dissens seltener als gedacht.'
        }
      ]
    }
  ],
  anfechtung: [
    {
      title: 'Irrtum oder Dissens',
      context: 'A verschreibt sich im Angebot, B nimmt den Wortlaut an.',
      steps: [
        {
          q: '[1. Interpretation] Ist zuerst eher Dissens oder Anfechtung naheliegend?',
          answer: ['anfechtung'],
          options: { problemId: 're_da_1', stepId: 'contest', isDecision: true },
          hint: 'Die Erklärungen decken sich formal.',
          explain: 'Es liegt zunächst ein Vertrag vor; der Fehler spricht für Anfechtung.'
        },
        {
          q: '[2. Decision] Welche zusätzliche Voraussetzung braucht die Anfechtung außer dem Irrtum?',
          answer: ['anfechtungserklärung', 'erklärung', 'frist'],
          options: { problemId: 're_da_1', stepId: 'decl', dependsOn: 'contest' },
          hint: 'Nicht nur der Irrtum zählt.',
          explain: 'Es braucht insbesondere eine Anfechtungserklärung und die Wahrung der Frist.'
        }
      ]
    }
    ,
    {
      title: 'Anfechtungsgründe sauber benennen',
      context: 'A irrt über den Inhalt seiner Erklärung; B vertraut auf den Vertrag.',
      steps: [
        {
          q: '[1. Decision] Reicht jeder beliebige innere Unwille als Anfechtungsgrund?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_da_1b', stepId: 'catalog', isDecision: true },
          hint: 'Gesetzlicher Katalog.',
          explain: 'Nein. Es braucht einen gesetzlich anerkannten Anfechtungsgrund.'
        },
        {
          q: '[2. Execution] Welche beiden Standardirrtümer nennt die Vorlesung zuerst?',
          answer: ['inhaltsirrtum und erklärungsirrtum', 'erklärungsirrtum', 'inhaltsirrtum'],
          options: { problemId: 're_da_1b', stepId: 'types', dependsOn: 'catalog' },
          hint: '§ 119 Abs. 1 BGB.',
          explain: 'Typische Kernfälle sind Inhalts- und Erklärungsirrtum.'
        },
        {
          q: '[3. Validation] Kann § 122 BGB den fehlenden Anfechtungsgrund ersetzen?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_da_1b', role: 'VALIDATION' },
          hint: '§ 122 folgt erst nach wirksamer Anfechtung.',
          explain: 'Nein. § 122 BGB ist Folgeanspruch und kein Ersatz für einen fehlenden Tatbestand.'
        }
      ]
    },
    {
      title: 'Dissens-vs-Anfechtung Trap',
      context: 'Objektiv deckungsgleiche Erklärungen, aber innerer Erklärungsirrtum.',
      steps: [
        {
          q: '[1. Decision] Startest du mit Dissensprüfung oder mit Anfechtungslogik?',
          answer: ['anfechtung', 'anfechtungslogik'],
          options: { problemId: 're_da_2', stepId: 'start', isDecision: true },
          hint: 'Objektive Erklärungslage zuerst lesen.',
          explain: 'Bei objektivem Konsens ist die Anfechtung der methodisch richtige Korrekturweg.'
        },
        {
          q: '[2. Execution] Welche zwei Zusatzbausteine werden neben dem Irrtum oft vergessen?',
          answer: ['anfechtungserklärung', 'frist'],
          options: { problemId: 're_da_2', stepId: 'extra', dependsOn: 'start' },
          hint: 'Der Irrtum allein trägt die Anfechtung nicht vollständig.',
          explain: 'Anfechtungserklärung und Frist sind regelmäßig mitzuprüfen.'
        },
        {
          q: '[3. Validation] Ist die Aussage "Irrtum erkannt = Vertrag automatisch nichtig" korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_da_2', role: 'VALIDATION' },
          hint: 'Zwischen Entstehung und nachträglicher Vernichtung unterscheiden.',
          explain: 'Nein. Erst die wirksame Anfechtung führt zur ex-tunc-Nichtigkeit.'
        }
      ]
    },
    {
      title: 'Anfechtung und §122 sauber trennen',
      context: 'Vertrag erst wirksam, später Irrtumsanfechtung; Gegenseite verlangt Aufwendungsersatz.',
      steps: [
        {
          q: '[1. Decision] Welche Ebene prüfst du nach dem Vertrag zuerst?',
          answer: ['anfechtung', 'anfechtungstatbestand'],
          options: { problemId: 're_da_3', stepId: 'first', isDecision: true },
          hint: 'Anspruch aus Vertrag kann untergehen.',
          explain: 'Zuerst wird geprüft, ob der Vertrag durch wirksame Anfechtung ex tunc entfällt.'
        },
        {
          q: '[2. Execution] Wo gehört der Vertrauensschaden hin?',
          answer: ['in § 122', 'eigenständiger anspruch', 'separate anspruchsebene'],
          options: { problemId: 're_da_3', stepId: '122', dependsOn: 'first' },
          hint: 'Nicht in den Tatbestand der Anfechtung mischen.',
          explain: 'Der Vertrauensschaden wird als eigene Anspruchsprüfung nach § 122 BGB behandelt.'
        },
        {
          q: '[3. Validation] Ist §122 ohne vorher wirksame Anfechtung tragfähig?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_da_3', role: 'VALIDATION' },
          hint: 'Tatbestand und Rechtsfolgekette beachten.',
          explain: 'Nein. § 122 setzt eine wirksame Irrtumsanfechtung voraus.'
        }
      ]
    }
  ],
  trennung_abstraktion: [
    {
      title: 'Kaufvertrag vs. Übereignung',
      context: 'Der Kaufvertrag ist unwirksam, die Sache wurde aber übergeben.',
      steps: [
        {
          q: '[1. Interpretation] Muss damit automatisch auch die Eigentumsübertragung unwirksam sein?',
          answer: ['nein', 'no'],
          options: { problemId: 're_ta_1', stepId: 'no', isDecision: true },
          hint: 'Verpflichtung und Verfügung trennen.',
          explain: 'Nein. Das Verfügungsgeschäft ist eigenständig zu prüfen.'
        },
        {
          q: '[2. Decision] Welches Prinzip steckt dahinter?',
          answer: ['abstraktionsprinzip', 'trennungs und abstraktionsprinzip', 'abstraktion'],
          options: { problemId: 're_ta_1', stepId: 'abstraction', dependsOn: 'no' },
          hint: 'Die Wirksamkeit hängt nicht automatisch am Grundgeschäft.',
          explain: 'Das ist die Logik des Trennungs- und Abstraktionsprinzips.'
        }
      ]
    }
  ],
  geschaeftsfaehigkeit: [
    {
      title: 'Minderjährigenfall',
      context: 'Ein 16-Jähriger schließt ohne Zustimmung einen Ratenkauf ab.',
      steps: [
        {
          q: '[1. Interpretation] Ist der Minderjährige voll geschäftsfähig?',
          answer: ['nein', 'no'],
          options: { problemId: 're_gf_1', stepId: 'minor', isDecision: true },
          hint: 'Zwischen 7 und 18 Jahren gilt ein Zwischenstatus.',
          explain: 'Nein. Er ist beschränkt geschäftsfähig.'
        },
        {
          q: '[2. Decision] Ist ein Ratenkauf lediglich rechtlich vorteilhaft?',
          answer: ['nein', 'no'],
          options: { problemId: 're_gf_1', stepId: 'benefit', dependsOn: 'minor' },
          hint: 'Zahlungspflichten sind rechtlich belastend.',
          explain: 'Nein. Durch die Zahlungspflicht liegt ein rechtlicher Nachteil vor.'
        }
      ]
    }
  ],
  stellvertretung: [
    {
      title: 'Dreischritt der Stellvertretung',
      context: 'M schließt im Namen der GmbH einen Vertrag.',
      steps: [
        {
          q: '[1. Interpretation] Muss geprüft werden, ob M im fremden Namen handelte?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_st_1', stepId: 'foreign', isDecision: true },
          hint: 'Offenkundigkeit ist Pflichtbaustein.',
          explain: 'Ja. Handeln im fremden Namen ist eine der drei Kernvoraussetzungen.'
        },
        {
          q: '[2. Decision] Fehlt ohne Vertretungsmacht regelmäßig eine wirksame Bindung des Vertretenen?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_st_1', stepId: 'power', dependsOn: 'foreign' },
          hint: 'Denk an § 177 BGB.',
          explain: 'Ja. Ohne Vertretungsmacht ist das Geschäft grundsätzlich schwebend unwirksam.'
        }
      ]
    }
    ,
    {
      title: 'Vertreter-oder-Bote Entscheidung',
      context: 'Person übermittelt nur eine fremde Erklärung ohne eigenen Entscheidungsspielraum.',
      steps: [
        {
          q: '[1. Decision] Liegt regelmäßig Vertreter- oder Botenhandeln vor?',
          answer: ['bote', 'botenhandeln'],
          options: { problemId: 're_st_2', stepId: 'role', isDecision: true },
          hint: 'Entscheidend ist die eigene Willensbildung.',
          explain: 'Ohne eigene Entscheidungsbefugnis liegt typischerweise Botenhandeln vor.'
        },
        {
          q: '[2. Execution] Wessen Erklärung wird dann grundsätzlich zugerechnet?',
          answer: ['des geschäftsherrn', 'des auftraggebers', 'des vertretenden'],
          options: { problemId: 're_st_2', stepId: 'attrib', dependsOn: 'role' },
          hint: 'Der Bote erklärt nicht selbst, sondern übermittelt.',
          explain: 'Zugerechnet wird die fremde (übermittelte) Erklärung des Geschäftsherrn.'
        },
        {
          q: '[3. Validation] Ist in einem reinen Botenfall eine Vertretungsmachtsprüfung im selben Sinne zwingend Kernpunkt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_st_2', role: 'VALIDATION' },
          hint: 'Erst den Erklärungstyp, dann die Folgefragen.',
          explain: 'Nein. Die zentrale Weiche ist zunächst die Abgrenzung Vertreter/Bote.'
        }
      ]
    },
    {
      title: 'Offenkundigkeit und §179-Folge',
      context: 'Handelnder nennt den Vertretenen nicht klar; Vollmacht ist fraglich.',
      steps: [
        {
          q: '[1. Decision] Welche Weiche prüfst du vor der Vollmacht?',
          answer: ['offenkundigkeit', 'handeln im fremden namen'],
          options: { problemId: 're_st_3', stepId: 'offen', isDecision: true },
          hint: 'Vertragspartnerfrage zuerst.',
          explain: 'Zuerst ist zu klären, ob überhaupt erkennbar in fremdem Namen gehandelt wurde.'
        },
        {
          q: '[2. Execution] Wenn Offenkundigkeit bejaht, Vertretungsmacht aber verneint und keine Genehmigung erfolgt: welcher Haftungspfad wird klausurtypisch relevant?',
          answer: ['§ 179', '179 bgb', 'falsus procurator'],
          options: { problemId: 're_st_3', stepId: '179', dependsOn: 'offen' },
          hint: 'Haftung des Vertreters ohne Vertretungsmacht.',
          explain: 'Dann wird regelmäßig die Haftung des falsus procurator nach § 179 BGB relevant.'
        },
        {
          q: '[3. Validation] Ist es korrekt, §179 zu prüfen, obwohl bereits keine Offenkundigkeit vorliegt und der Handelnde selbst Vertragspartner ist?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_st_3', role: 'VALIDATION' },
          hint: 'Erst richtige Tatbestandsweiche setzen.',
          explain: 'Nein. Bei fehlender Offenkundigkeit greift regelmäßig die direkte Eigenbindung des Handelnden.'
        }
      ]
    }
  ],
  agb: [
    {
      title: 'Einbeziehung vor Kontrolle',
      context: 'AGB stehen auf der Rückseite und werden nicht erwähnt.',
      steps: [
        {
          q: '[1. Interpretation] Muss zuerst die Einbeziehung geprüft werden?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_agb_1', stepId: 'include', isDecision: true },
          hint: 'Die Klausel muss erst Vertragsbestandteil sein.',
          explain: 'Ja. Ohne Einbeziehung gibt es keine Inhaltskontrolle.'
        },
        {
          q: '[2. Decision] Fehlt es ohne Hinweis oft schon an der Einbeziehung?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_agb_1', stepId: 'hint', dependsOn: 'include' },
          hint: 'Denke an Hinweis und Kenntnisnahmemöglichkeit.',
          explain: 'Ja. Ohne Hinweis scheitert die Einbeziehung häufig bereits im Ansatz.'
        }
      ]
    }
  ],
  schuldrecht_intro: [
    {
      title: 'Pflichtverletzung richtig verorten',
      context: 'Ein Vertragspartner verhält sich unkooperativ.',
      steps: [
        {
          q: '[1. Interpretation] Reicht unfreundliches Verhalten allein schon für Schadensersatz?',
          answer: ['nein', 'no'],
          options: { problemId: 're_sr_1', stepId: 'no', isDecision: true },
          hint: 'Es braucht eine dem Schuldverhältnis zuordenbare Pflichtverletzung.',
          explain: 'Nein. Entscheidend ist eine konkrete Haupt- oder Nebenpflichtverletzung.'
        },
        {
          q: '[2. Decision] Wo musst du daher zuerst ansetzen?',
          answer: ['schuldverhältnis', 'pflicht', 'konkrete pflicht'],
          options: { problemId: 're_sr_1', stepId: 'duty', dependsOn: 'no' },
          hint: 'Welche Pflicht besteht überhaupt?',
          explain: 'Zuerst muss das Schuldverhältnis und die daraus folgende Pflicht bestimmt werden.'
        }
      ]
    }
  ],
  schadensersatz: [
    {
      title: 'Fristsetzung',
      context: 'Der Verkäufer liefert mangelhaft, der Käufer verlangt sofort Schadensersatz statt der Leistung.',
      steps: [
        {
          q: '[1. Interpretation] Fehlt möglicherweise eine zusätzliche Voraussetzung?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_se_1', stepId: 'frist', isDecision: true },
          hint: 'Denk an die zweite Chance des Schuldners.',
          explain: 'Ja. Bei Schadensersatz statt der Leistung ist meist eine Fristsetzung nötig.'
        },
        {
          q: '[2. Decision] Welche Voraussetzung ist das konkret?',
          answer: ['fristsetzung', 'nachfrist', 'erfolglose fristsetzung'],
          options: { problemId: 're_se_1', stepId: 'name', dependsOn: 'frist' },
          hint: 'Sie steht oft in § 281 BGB.',
          explain: 'Erforderlich ist regelmäßig eine erfolglose Fristsetzung.'
        }
      ]
    }
    ,
    {
      title: 'Richtige Schadensersatzschiene',
      context: 'Der Schuldner liefert verspätet, später auch noch mangelhaft.',
      steps: [
        {
          q: '[1. Decision] Muss zuerst die Art der Störung eingeordnet werden, bevor die Anspruchsgrundlage genannt wird?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_se_2', stepId: 'track', isDecision: true },
          hint: 'Neben der Leistung, statt der Leistung, Verzug.',
          explain: 'Ja. Die Störungsart entscheidet, welche Schadensersatznorm einschlägig ist.'
        },
        {
          q: '[2. Execution] Ist § 280 I BGB allein stets genug, wenn Ersatz an die Stelle der Leistung treten soll?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_se_2', stepId: '281', dependsOn: 'track' },
          hint: 'Bei Ersatz statt der Leistung kommen Zusatznormen hinzu.',
          explain: 'Nein. Für Schadensersatz statt der Leistung braucht es regelmäßig die Zusatzlogik der §§ 280 I, III, 281 BGB.'
        },
        {
          q: '[3. Validation] Ist eine richtige Schadenssumme ohne Fristsetzungsprüfung klausurstabil?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_se_2', role: 'VALIDATION' },
          hint: 'Tatbestand trägt die Rechtsfolge.',
          explain: 'Nein. Ohne tragfähigen Tatbestand bleibt auch eine numerisch richtige Schadenssumme methodisch schwach.'
        }
      ]
    }
  ],
  ruecktritt: [
    {
      title: 'Rücktritt als Leistungsstörungsrecht',
      context: 'Mangelhafte Lieferung, Käufer will sich vom Vertrag lösen.',
      steps: [
        {
          q: '[1. Decision] Ist Rücktritt der natürliche Startpunkt nur dann, wenn eine Leistungsstörung vorliegt?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_ru_1', stepId: 'störung', isDecision: true },
          hint: 'Rücktritt ist kein allgemeines Umentscheidungsrecht.',
          explain: 'Ja. Rücktritt knüpft gerade an eine Leistungsstörung im Schuldverhältnis an.'
        },
        {
          q: '[2. Execution] Welche zusätzliche Hürde ist beim Standardrücktritt oft mitzudenken?',
          answer: ['fristsetzung', 'nachfrist', 'erfolglose fristsetzung'],
          options: { problemId: 're_ru_1', stepId: 'frist', dependsOn: 'störung' },
          hint: '§ 323 BGB.',
          explain: 'Im Standardfall des § 323 BGB ist die erfolglose Fristsetzung regelmäßig zentral.'
        },
        {
          q: '[3. Validation] Führt ein wirksamer Rücktritt zur ex-tunc-Nichtigkeit wie die Anfechtung?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_ru_1', role: 'VALIDATION' },
          hint: 'Rückgewährschuldverhältnis statt rückwirkender Vernichtung.',
          explain: 'Nein. Der Rücktritt wandelt das Schuldverhältnis in ein Rückgewährschuldverhältnis um.'
        }
      ]
    },
    {
      title: 'Rücktrittserklärung und Folgeebene',
      context: 'Tatbestandsvoraussetzungen liegen vor; der Bearbeiter diskutiert sofort Wertersatz.',
      steps: [
        {
          q: '[1. Decision] Fehlt vor der Rückgewährdiskussion noch ein eigener Gestaltungsakt?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_ru_2', stepId: 'decl', isDecision: true },
          hint: '§ 349 BGB.',
          explain: 'Ja. Der Rücktritt muss erklärt werden.'
        },
        {
          q: '[2. Execution] Gehört Wertersatz in den Tatbestand oder in die Rechtsfolge?',
          answer: ['rechtsfolge', 'rechtsfolgeebene'],
          options: { problemId: 're_ru_2', stepId: 'folge', dependsOn: 'decl' },
          hint: 'Nach wirksamer Ausübung des Rücktritts.',
          explain: 'Wertersatz gehört erst auf die Rechtsfolgeebene nach wirksamem Rücktritt.'
        },
        {
          q: '[3. Validation] Ist es klausurtechnisch sauber, Rücktritt und Schadensersatz in einem einzigen Prüfungspunkt zu verschmelzen?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_ru_2', role: 'VALIDATION' },
          hint: 'Zwei unterschiedliche Rechtsfolgeschienen.',
          explain: 'Nein. Rücktritt und Schadensersatz müssen als eigenständige Anspruchs- bzw. Gestaltungsrechtspfade getrennt bleiben.'
        }
      ]
    }
  ],
  verbraucherwiderruf: [
    {
      title: 'Rücktritt oder Widerruf',
      context: 'Ein Verbraucher möchte einen Online-Kauf rückgängig machen, obwohl kein Leistungsfehler vorliegt.',
      steps: [
        {
          q: '[1. Interpretation] Liegt der natürliche Einstieg eher beim Widerruf als beim Rücktritt?',
          answer: ['ja', 'yes'],
          options: { problemId: 're_rw_1', stepId: 'wid', isDecision: true },
          hint: 'Es gibt keine Leistungsstörung.',
          explain: 'Ja. Ohne Leistungsstörung ist der Widerruf der naheliegendere Prüfungsweg.'
        },
        {
          q: '[2. Decision] Braucht der Verbraucherwiderruf notwendig eine Pflichtverletzung?',
          answer: ['nein', 'no'],
          options: { problemId: 're_rw_1', stepId: 'no', dependsOn: 'wid' },
          hint: 'Verbraucherschutzrecht, nicht Leistungsstörungsrecht.',
          explain: 'Nein. Der Widerruf ist ein eigenständiges Schutzrecht.'
        }
      ]
    }
    ,
    {
      title: 'Widerrufsrecht als eigener Tatbestand',
      context: 'Verbraucher beruft sich pauschal auf § 355 BGB nach einem beliebigen Vertrag.',
      steps: [
        {
          q: '[1. Decision] Reicht § 355 BGB allein schon als vollständige Anspruchsgrundlage für jedes Geschäft?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_rw_1b', stepId: 'basis', isDecision: true },
          hint: 'Widerrufsfähiger Vertragstyp nötig.',
          explain: 'Nein. Es muss zunächst ein Vertrag mit gesetzlichem Widerrufsrecht vorliegen.'
        },
        {
          q: '[2. Execution] Welche persönliche Rollenverteilung wird danach regelmäßig geprüft?',
          answer: ['verbraucher und unternehmer', 'verbraucher', 'unternehmer'],
          options: { problemId: 're_rw_1b', stepId: 'roles', dependsOn: 'basis' },
          hint: '§§ 13, 14 BGB.',
          explain: 'Danach werden Verbraucher- und Unternehmereigenschaft geprüft.'
        },
        {
          q: '[3. Validation] Muss der Verbraucher einen Mangel oder eine Pflichtverletzung beweisen, um zu widerrufen?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_rw_1b', role: 'VALIDATION' },
          hint: 'Schutzrecht, nicht Leistungsstörungsrecht.',
          explain: 'Nein. Der Widerruf knüpft an Schutzlage und Vertragstyp an, nicht an eine Pflichtverletzung.'
        }
      ]
    },
    {
      title: 'Rücktritt-Widerruf Abgrenzung',
      context: 'Verbraucherfall mit Fernabsatzbezug; Leistungsstörung unklar.',
      steps: [
        {
          q: '[1. Decision] Welche Leitfrage trennt die Institute zuerst?',
          answer: ['leistungsstörung oder verbraucherschutzlage', 'leistungsstörung', 'verbraucherschutzlage'],
          options: { problemId: 're_rw_2', stepId: 'axis', isDecision: true },
          hint: 'Normzweck vor Detailprüfung.',
          explain: 'Zuerst wird der Anknüpfungspunkt geklärt: Störung vs. Schutzlage.'
        },
        {
          q: '[2. Execution] Wenn keine Leistungsstörung vorliegt, welcher Pfad ist typischerweise naheliegender?',
          answer: ['widerruf'],
          options: { problemId: 're_rw_2', stepId: 'path', dependsOn: 'axis' },
          hint: 'Fernabsatz + Umentscheidung.',
          explain: 'Ohne Störung liegt regelmäßig der Widerrufspfad näher.'
        },
        {
          q: '[3. Validation] Ist "beides ist nur Rückgängigmachung, also egal" methodisch korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_rw_2', role: 'VALIDATION' },
          hint: 'Unterschiedliche Tatbestände, unterschiedliche Prüfung.',
          explain: 'Nein. Rücktritt und Widerruf haben unterschiedliche Voraussetzungen und Zwecke.'
        }
      ]
    },
    {
      title: 'Tatbestand vor Rückgewährfolgen',
      context: 'Online-Kauf: Widerruf erklärt, zusätzlich Mangelrüge und Rücktrittsdiskussion.',
      steps: [
        {
          q: '[1. Decision] Welche Prüfungsreihenfolge ist methodisch sauber?',
          answer: ['tatbestand zuerst', 'erst voraussetzungen dann rechtsfolgen'],
          options: { problemId: 're_rw_3', stepId: 'order', isDecision: true },
          hint: 'Rückgewähr ist Folge, nicht Startpunkt.',
          explain: 'Zuerst werden die Tatbestandsvoraussetzungen der jeweiligen Gestaltungsrechte geprüft.'
        },
        {
          q: '[2. Execution] Wo verortest du Rückgewähr/ Wertersatz?',
          answer: ['rechtsfolge', 'rechtsfolgeebene'],
          options: { problemId: 're_rw_3', stepId: 'folge', dependsOn: 'order' },
          hint: 'Nach wirksamer Ausübung von Rücktritt oder Widerruf.',
          explain: 'Rückgewähr- und Wertersatzfragen gehören auf die Rechtsfolgeebene.'
        },
        {
          q: '[3. Validation] Ist "Rückgewähr möglich, also Widerruf automatisch wirksam" ein tragfähiger Gutachtenschluss?',
          answer: ['nein', 'falsch'],
          options: { problemId: 're_rw_3', role: 'VALIDATION' },
          hint: 'Tatbestand darf nicht durch Ergebnis ersetzt werden.',
          explain: 'Nein. Wirksamkeit folgt nur aus geprüften Tatbestandsvoraussetzungen.'
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
