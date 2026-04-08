// ============================================================
// Konzept-Check (Pilot) — trap MCQs
// Source status: platform-added-drill (misconception checks aligned
// with authored theory in chapters.js; not verbatim exam quotes).
// ============================================================

/** 5-minute cap (module may show fewer questions if item pool grows). */
export const CONCEPT_SCHNELLTEST_DURATION_MS = 5 * 60 * 1000;

export const CONCEPT_SCHNELLTEST_ITEMS = [
  {
    id: 'mk1_cc_frist_phillips',
    concept_id: 'makro_rahmen',
    stem: 'Du sollst erklären, warum eine dauerhaft höhere Inflationsrate nach einer konjunkturellen Überhitzung <em>mittelfristig</em> möglich ist. Welchen Zeithorizont musst du dafür primär nutzen?',
    choices: [
      {
        id: 'kurz',
        label: 'Kurze Frist (träge Preise, Gütermarkt/IS-LM-Logik)',
        trap_feedback:
          'Falle: Die kurze Frist ist zentral für Nachfrage und Output bei gegebenem Preisniveau — nicht für die Lohn-/Preisanpassung und die Phillips-Logik.'
      },
      {
        id: 'mittel',
        label: 'Mittlere Frist (Löhne, Preise, Phillipskurve / Arbeitsmarkt)',
        is_correct: true
      },
      {
        id: 'lang',
        label: 'Lange Frist (Produktivität, Trendwachstum)',
        trap_feedback:
          'Falle: Langfristig geht es um Kapital und Technik — nicht um die typische Phillipskurven-Anpassung nach einer Konjunkturphase.'
      }
    ],
    explain:
      '<p>Im Kurs wird die <strong>mittlere Frist</strong> über Arbeitsmarkt, Lohnsetzung und Phillipskurve analysiert — dort wird erklärt, wie sich Inflation über das Niveau hinaus einpendeln kann.</p>'
  },
  {
    id: 'mk1_cc_arbeitslosenquote',
    concept_id: 'vgr',
    stem: 'Die Arbeitslosenquote \\(u\\) ist definiert als \\(u = U/L\\). Wofür steht \\(L\\) in Makro I standardmäßig?',
    choices: [
      {
        id: 'pop',
        label: 'Die Gesamtbevölkerung',
        trap_feedback: 'Falle: Das wäre ein anderer Nenner — im Kurs wird \\(L\\) als Erwerbspersonen verwendet.'
      },
      {
        id: 'erw',
        label: 'Die Erwerbspersonen (\\(L = N + U\\))',
        is_correct: true
      },
      {
        id: 'nurN',
        label: 'Nur die Beschäftigten \\(N\\)',
        trap_feedback: 'Falle: Ohne Arbeitslose im Nenner misst man nicht die Arbeitslosenquote.'
      }
    ],
    explain:
      '<p>Im Material: \\(u = U/L\\) mit \\(L = N + U\\) — <strong>Erwerbspersonen</strong>, nicht die Gesamtbevölkerung.</p>'
  },
  {
    id: 'mk1_cc_lm_bedeutung',
    concept_id: 'islm',
    stem: 'Im <em>traditionellen</em> IS-LM-Modell (steigende LM): Was beschreibt die LM-Kurve ökonomisch?',
    choices: [
      {
        id: 'both',
        label: 'Alle \\((Y,i)\\)-Kombinationen, bei denen Güter- und Geldmarkt <em>gleichzeitig</em> im Gleichgewicht sind',
        trap_feedback:
          'Falle: Das ist der <em>Schnittpunkt</em> der Kurven — die LM-Kurve allein ist nur die Geldmarktbedingung in \\((Y,i)\\)-Raum.'
      },
      {
        id: 'geld',
        label: 'Alle \\((Y,i)\\)-Kombinationen, bei denen der Geldmarkt im Gleichgewicht ist (z.\\,B. \\(M/P = L(i,Y)\\))',
        is_correct: true
      },
      {
        id: 'gut',
        label: 'Alle \\((Y,i)\\)-Kombinationen, bei denen der Gütermarkt im Gleichgewicht ist',
        trap_feedback: 'Falle: Das ist die IS-Kurve — nicht die LM-Kurve.'
      }
    ],
    explain:
      '<p>Die <strong>IS</strong> beschreibt das Gütermarktgleichgewicht in \\((Y,i)\\); die <strong>LM</strong> das Geldmarktgleichgewicht. Das gemeinsame Gleichgewicht ist der Schnittpunkt.</p>'
  },
  {
    id: 'mk1_cc_steuer_vs_g',
    concept_id: 'multiplikator',
    stem: 'In der geschlossenen Volkswirtschaft mit positiver marginaler Konsumneigung: Ein Betrag \\(\\Delta G\\) und ein Betrag \\(\\Delta T\\) derselben Größe (jeweils autonom) wirken auf die wirksame Nachfrage …',
    choices: [
      {
        id: 'gleich',
        label: '… symmetrisch: Multiplikatorbetrag ist für \\(G\\) und \\(T\\) stets exakt gleich groß.',
        trap_feedback:
          'Falle: Eine Steueränderung wirkt nur mit der Konsumneigung auf den Konsum; \\(G\\) geht eins zu eins in die Nachfrage ein — die Beträge sind nicht symmetrisch.'
      },
      {
        id: 'gGroesser',
        label: '… unterschiedlich stark: der Impuls über \\(G\\) ist ceteris paribus größer als der über \\(T\\) bei gleichem Betrag.',
        is_correct: true
      },
      {
        id: 'tGroesser',
        label: '… unterschiedlich stark: der Impuls über \\(T\\) ist immer größer als der über \\(G\\).',
        trap_feedback: 'Falle: Das wäre die falsche Richtung — höhere Steuern dämpfen primär über \\(C\\), nicht stärker als direkte Staatsausgaben.'
      }
    ],
    explain:
      '<p>Staatsausgaben wirken direkt auf die Nachfrage; Steuern wirken über den Konsum mit der marginalen Konsumneigung — deshalb ist der <strong>ausgabenbezogene Multiplikator größer</strong> als der steuerbezogene (gleicher Nominalbetrag).</p>'
  },
  {
    id: 'mk1_cc_phillips_erwartung',
    concept_id: 'phillips',
    stem: 'Die erwartete Inflation \\(\\pi^e\\) steigt ceteris paribus. Was passiert mit der kurzfristigen Phillipskurve?',
    choices: [
      {
        id: 'along',
        label: 'Man bewegt sich entlang derselben Kurve nach oben.',
        trap_feedback:
          'Falle: Entlang der Kurve ändert sich typischerweise \\(u\\) oder die Konjunkturlage — höhere \\(\\pi^e\\) verschiebt die Kurve.'
      },
      {
        id: 'shift',
        label: 'Die Kurve verschiebt sich (bei gegebenem \\(u\\) ist \\(\\pi\\) höher).',
        is_correct: true
      },
      {
        id: 'none',
        label: 'Es gibt keinen Effekt auf die Phillipskurve.',
        trap_feedback: 'Falle: Erwartungen sind im kurzfristigen Zusammenhang zentral — sie verschieben die Kurve nach oben.'
      }
    ],
    explain:
      '<p>Höhere Inflationserwartungen verschieben die <strong>kurzfristige Phillipskurve</strong> nach oben: bei gleicher Arbeitslosigkeit ist die Inflation höher.</p>'
  },
  {
    id: 'mk1_cc_geldmultiplikator',
    concept_id: 'banken',
    stem: 'Zum vereinfachten Einlagenmultiplikator \\(m_D = 1/\\theta\\) im Lehrbuch: Welche Aussage trifft im Sinne des Kursmaterials zu?',
    choices: [
      {
        id: 'exakt',
        label: 'In der Realität gilt dieser Wert immer exakt, weil Mindestreserven die einzige Begrenzung sind.',
        trap_feedback:
          'Falle: Im Text wird explizit gewarnt: Der Multiplikator ist eine Näherung; Kreditvergabe hängt auch von Regulierung, Nachfrage und mehr ab.'
      },
      {
        id: 'naeherung',
        label: 'Es ist eine didaktische Näherung; reale Geldschöpfung ist zusätzlich durch andere Faktoren begrenzt.',
        is_correct: true
      },
      {
        id: 'irrelevant',
        label: 'Der Multiplikator spielt in Makro I keine Rolle.',
        trap_feedback: 'Falle: Er wird gerade eingeführt, um Bankbilanzen und Geldschöpfung zu strukturieren — aber nicht mechanisch zu überinterpretieren.'
      }
    ],
    explain:
      '<p>Im Kurs: \\(1/\\theta\\) strukturiert das <strong>vereinfachte</strong> Modell; real sind weitere Grenzen relevant (u.\\,a. Hinweise im Theorietext).</p>'
  }
];
