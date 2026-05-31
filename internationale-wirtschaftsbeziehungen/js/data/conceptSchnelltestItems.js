// platform-added-drill — trap MCQs from authored theory (IWB trade models)

export const CONCEPT_SCHNELLTEST_DURATION_MS = 5 * 60 * 1000;

export const CONCEPT_SCHNELLTEST_ITEMS = [
  {
    id: 'iwb_cc_ricardo_ho',
    concept_id: 'ricardo',
    stem: 'Zwei Länder, ein Faktor (Arbeit), komparative Vorteile gegeben. Welches Modell ist primär?',
    choices: [
      {
        id: 'ho',
        label: 'Heckscher-Ohlin (zwei Faktoren)',
        trap_feedback: 'Falle: HO braucht Faktorreichtum — bei einem Faktor ist Ricardo das Standardmodell.'
      },
      {
        id: 'ricardo',
        label: 'Ricardo (Arbeitswert / Opportunitätskosten)',
        is_correct: true
      },
      {
        id: 'krugman',
        label: 'Krugman (IRS / intraindustriell)',
        trap_feedback: 'Falle: Krugman erklärt ähnliche Länder + Vielfalt — nicht komparativen Vorteil mit einem Faktor.'
      }
    ],
    explain: '<p><strong>Ricardo</strong> bei einem Faktor und komparativen Vorteilen; HO bei zwei Faktoren.</p>'
  },
  {
    id: 'iwb_cc_ppp',
    concept_id: 'kaufkraftparitaet',
    stem: 'Tageswechselkurs weicht stark von KKP ab — kurzfristig dominiert oft …',
    choices: [
      {
        id: 'ppp',
        label: '… das Gesetz des einheitlichen Preises für jeden Tag',
        trap_feedback: 'Falle: PPP ist langfristig/strukturell — kurzfristig Erwartungen und Zinsen (UIP/Overshooting).'
      },
      {
        id: 'finance',
        label: '… Finanzmarktlogik (Erwartungen, Zinsdifferenzen)',
        is_correct: true
      },
      {
        id: 'quota',
        label: '… immer eine Fehlbewertung durch Quoten',
        trap_feedback: 'Falle: Abweichung ≠ automatisch Quote — erst Modellhorizont klären.'
      }
    ],
    explain: '<p><strong>PPP</strong> langfristig; kurzfristig Nominal-/Realzins und Erwartungen (M-F, UIP).</p>'
  },
  {
    id: 'iwb_cc_trilemma',
    concept_id: 'trilemma',
    stem: 'Fixer Wechselkurs + freie Kapitalmobilität. Geldpolitik der Zentralbank ist …',
    choices: [
      {
        id: 'free',
        label: '… voll autonom',
        trap_feedback: 'Falle: Trilemma — Fix + Kapitalmobilität bindet Zins an i*; Expansion wird neutralisiert.'
      },
      {
        id: 'endogen',
        label: '… endogen (Reservenintervention neutralisiert Impulse)',
        is_correct: true
      },
      {
        id: 'flex',
        label: '… irrelevant weil flexibler Kurs',
        trap_feedback: 'Falle: Bei flexiblem Kurs wäre Geldpolitik autonom — hier ist der Kurs fix.'
      }
    ],
    explain: '<p><strong>Mundell-Fleming-Trilemma</strong>: Fix + offene Kapitalmärkte → Geldpolitik nicht autonom.</p>'
  }
];
