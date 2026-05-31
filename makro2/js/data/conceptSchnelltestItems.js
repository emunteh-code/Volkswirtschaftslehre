// platform-added-drill — trap MCQs from Makro II VL patterns

export const CONCEPT_SCHNELLTEST_DURATION_MS = 5 * 60 * 1000;

export const CONCEPT_SCHNELLTEST_ITEMS = [
  {
    id: 'mk2_cc_mf_regime',
    concept_id: 'mundell_fleming',
    stem: 'Kleines Land, flexible Wechselkurse, Geldmengenexpansion. Was passiert <em>kurzfristig</em> typischerweise mit \\(Y\\)?',
    choices: [
      {
        id: 'weak',
        label: 'Schwach — Fiskal-Crowding-out über \\(NX\\)',
        trap_feedback: 'Falle: Unter flexiblen Kursen wirkt Geldpolitik stark über Abwertung und \\(NX\\) — Fiskal-Crowding-out ist das M-F-Ergebnis bei fixen Kursen / Fiskalimpuls.'
      },
      {
        id: 'strong',
        label: 'Stark positiv — \\(M\\uparrow \\Rightarrow i\\downarrow \\Rightarrow E\\) Abwertung \\(\\Rightarrow NX\\uparrow\\)',
        is_correct: true
      },
      {
        id: 'zero',
        label: 'Null — LM horizontal',
        trap_feedback: 'Falle: Liquiditätsfalle ist Spezialfall — nicht die Standard-M-F-Antwort bei flexiblen Kursen.'
      }
    ],
    explain: '<p>M-F unter flex: <strong>Geldpolitik stark</strong> (Wechselkurskanal); Fiskal oft schwach durch Aufwertung.</p>'
  },
  {
    id: 'mk2_cc_solow_growth',
    concept_id: 'solow_basis',
    stem: 'Im Solow-Modell <em>ohne</em> technischen Fortschritt: Was bewirkt dauerhaft höhere Sparquote \\(s\\)?',
    choices: [
      {
        id: 'gy',
        label: 'Dauerhaft höhere Wachstumsrate \\(g_Y\\) pro Kopf',
        trap_feedback: 'Falle: Höheres \\(s\\) hebt das Niveau von \\(k^*, y^*\\) — nicht die Trendwachstumsrate ohne \\(g_A\\).'
      },
      {
        id: 'level',
        label: 'Höheres Niveau von \\(k^*\\) und \\(y^*\\), aber kein dauerhaftes \\(g_Y\\) pro Kopf',
        is_correct: true
      },
      {
        id: 'golden',
        label: 'Automatisch maximale Konsumquote',
        trap_feedback: 'Falle: Goldene Regel ist spezielles \\(s\\) — nicht jede Erhöhung von \\(s\\) maximiert \\(c^*\\).'
      }
    ],
    explain: '<p>Solow ohne \\(g_A\\): <strong>Niveau-Effekt</strong>, kein dauerhaftes Pro-Kopf-Wachstum aus Sparen allein.</p>'
  },
  {
    id: 'mk2_cc_phillips',
    concept_id: 'phillipskurve',
    stem: 'Langfristig (rationale Erwartungen, \\(u\\) am natürlichen Niveau): Wie verläuft die Phillipskurve?',
    choices: [
      {
        id: 'down',
        label: 'Abwärts geneigt — dauerhafter Trade-off',
        trap_feedback: 'Falle: Kurzfristig Trade-off möglich; langfristig Erwartungsanpassung → vertikal bei \\(u_n\\).'
      },
      {
        id: 'vertical',
        label: 'Vertikal bei \\(u = u_n\\) — kein dauerhafter Inflations-Arbeitslosigkeits-Trade-off',
        is_correct: true
      },
      {
        id: 'horizontal',
        label: 'Horizontal — beliebiges \\(u\\) ohne Inflation',
        trap_feedback: 'Falle: Horizontal wäre extreme Keynessche Annahme — nicht Standard-Phillips langfristig.'
      }
    ],
    explain: '<p>Langfrist: <strong>kein permanentes Menü</strong> \\(u\\) vs. \\(\\pi\\) bei rationalen Erwartungen.</p>'
  }
];
