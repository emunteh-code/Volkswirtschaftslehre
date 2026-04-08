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
  dissens_anfechtung: [
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
  ],
  ruecktritt_widerruf: [
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
    }
  ]
};

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});

