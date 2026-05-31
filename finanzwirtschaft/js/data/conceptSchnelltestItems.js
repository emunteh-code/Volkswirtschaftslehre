// platform-added-drill — trap MCQs from authored theory (Finanzwirtschaft warn-boxes)

export const CONCEPT_SCHNELLTEST_DURATION_MS = 5 * 60 * 1000;

export const CONCEPT_SCHNELLTEST_ITEMS = [
  {
    id: 'fw_cc_liq_endsaldo',
    concept_id: 'liquiditaetsplanung',
    stem: 'Liquiditätsplan: Endsaldo t₃ = +50, aber KS₁ = −270. Was ist der korrekte Finanzierungsbedarf?',
    choices: [
      {
        id: 'zero',
        label: '0 — Endsaldo ist positiv',
        trap_feedback: 'Falle: Endsaldo-Falle — Zwischenliquidität kann kritisch sein trotz positivem Endsaldo.'
      },
      {
        id: '270',
        label: '270 (= |min KS|)',
        is_correct: true
      },
      {
        id: '50',
        label: '50 (= Endsaldo)',
        trap_feedback: 'Falle: Endsaldo misst nicht den tiefsten kumulierten Punkt.'
      }
    ],
    explain: '<p>Immer <strong>kumulieren</strong>: Finanzierungsbedarf = |min<sub>t</sub> KS<sub>t</sub>| — nicht nur Endsaldo.</p>'
  },
  {
    id: 'fw_cc_irr_npv',
    concept_id: 'izf_kapitalwertfunktion',
    stem: 'Zwei mutually exclusive Projekte: A hat höheren IRR, B hat höheren NPV bei gleichem Budget. Welches Kriterium wählt Finanzwirtschaft standardmäßig?',
    choices: [
      {
        id: 'irr',
        label: 'Höherer IRR',
        trap_feedback: 'Falle: IRR ignoriert Skala und Kapitalbudget — bei exclusiven Projekten NPV vergleichen.'
      },
      {
        id: 'npv',
        label: 'Höherer NPV',
        is_correct: true
      },
      {
        id: 'pi',
        label: 'Profitability Index allein',
        trap_feedback: 'Falle: PI hilft bei Rationierung — bei vollständigem Budget und exclusiven Projekten dominiert NPV.'
      }
    ],
    explain: '<p>Bei <strong>mutually exclusive</strong> Projekten: höchster NPV — IRR-Falle bei unterschiedlichen Skalen.</p>'
  },
  {
    id: 'fw_cc_fisher',
    concept_id: 'intertemporale_wahl',
    stem: 'Perfekte Kapitalmärkte, einheitlicher Zins. Investitions- und Finanzierungsentscheidung sind …',
    choices: [
      {
        id: 'linked',
        label: '… untrennbar — Finanzierung bestimmt NPV',
        trap_feedback: 'Falle: Fisher-Trennung — bei perfekten Märkten separierbar.'
      },
      {
        id: 'separate',
        label: '… separierbar (Fisher-Trennung)',
        is_correct: true
      },
      {
        id: 'irr_only',
        label: '… nur über IRR zu bewerten',
        trap_feedback: 'Falle: Entscheidungskriterium ist NPV — IRR nur ergänzend bei eindeutigem Profil.'
      }
    ],
    explain: '<p><strong>Fisher-Trennung</strong>: NPV-Investitionsregel unabhängig von Finanzierungsmix bei perfekten Märkten.</p>'
  }
];
