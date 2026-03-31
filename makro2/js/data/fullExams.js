// ============================================================
// FULL EXAMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD: PRECISION UNDER UNCERTAINTY
// Extraction -> Interpretation -> Decision -> Execution -> Validation
// ============================================================

export const FULL_EXAMS = {
  probe_2025: {
    id: 'probe_2025',
    title: 'Probeklausur Makroökonomik II',
    subtitle: 'Krisztina Kis-Katos, Georg-August-Universität Göttingen',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 16,
        type: 'wf-block',
        preamble: `Beurteilen Sie die Aussagen als wahr oder falsch.`,
        groups: [
          {
            context: 'Offene Volkswirtschaft & Trilemma',
            questions: [
              { id: '1_4', text: 'Ein Land kann bei freiem Kapitalverkehr einen festen Kurs und autonome Geldpolitik halten.', correct: 'Falsch', feedback: 'Widerspricht dem Trilemma.' },
            ],
          }
        ],
      },
    ],
  },
  hard_mock_2026: {
    id: 'hard_mock_2026',
    title: 'Makro II - Master-Level Simulation v7.0 (60 Min)',
    subtitle: 'Final Hardening: Regime Uncertainty & Validation',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Wechselkursregime & UIP-Verteidigung',
        preamble: String.raw`Land X hält $E=1{,}0$. Kapitalverkehr ist frei. Die ZB erlaubt ein Toleranzband von $\pm 2\%$.`,
        questions: [
          {
            id: 'p1a_1',
            points: 5,
            type: 'text',
            text: '[1.1 Extraction] Extrahieren Sie die Markterwartung $E^e$ aus der beigefügten UIP-Grafik (Gitter: 0,01).',
            correct: ['0.97', '0,97', '0.96', '0.98'],
            feedback: String.raw`$E^e = 0{,}97$.`,
          },
          {
            id: 'p1a_2',
            points: 5,
            type: 'text',
            text: '[1.2 Interpretation] Befindet sich der erwartete Kurs innerhalb oder außerhalb des Interventionsbandes?',
            correct: ['außerhalb', 'outside', 'nein'],
            feedback: String.raw`$0{,}97 < 0{,}98$ ⟹ Das Band ist nach unten durchbrochen.`,
          },
          {
            id: 'p1a_3',
            points: 5,
            type: 'text',
            text: '[1.3 Decision] Welches Instrument MUSS die ZB laut Trilemma nutzen, um $E=1{,}0$ zu halten? (Zinsautonomie aufgeben oder Kapitalverkehr einschränken?)',
            correct: ['zins', 'zinsautonomie', 'autonome geldpolitik'],
            feedback: String.raw`Da Kapitalverkehr frei ist, muss der Zins angepasst werden.`,
          },
          {
            id: 'p1b',
            points: 15,
            type: 'text',
            text: '[1.4 Execution] Berechnen Sie den exakten Zins $i$, der $E=1{,}0$ verteidigt ($i^*=2\%$).',
            correct: ['0.05', '5', '5%', '0,05'],
            feedback: String.raw`$i = 0{,}02 - (0{,}97 - 1{,}0)/1{,}0 = 0{,}05$.`,
          }
        ]
      },
      {
        label: 'Block B',
        points: 25,
        type: 'text-block',
        title: 'Solow-Modell & Grenzen des Wachstums',
        preamble: String.raw`Produktionsfunktion $y = k^{0{,}5}$. Das Land befindet sich aktuell bei $k^* = 2{,}04$ (Ankerpunkt).`,
        questions: [
          {
            id: 'p2a',
            points: 5,
            type: 'text',
            text: '[2.1 Extraction] Bestimmen Sie den Steady-State Konsum $c^*$ durch Messung des vertikalen Abstands im Diagramm.',
            correct: ['1.28', '1,28', '1.27', '1.29'],
            feedback: String.raw`$c^* \approx 1{,}28$.`,
          },
          {
            id: 'p2b_1',
            points: 10,
            type: 'text',
            text: '[2.2 Interpretation] Interpretieren Sie die Lage des Landes relativ zur Goldenen Regel ($k_{GR}=4$). Liegt Überakkumulation vor?',
            correct: ['nein', 'unterhalb', 'kapitalmangel'],
            feedback: String.raw`Da $2{,}04 < 4$, liegt KEINE Überakkumulation vor. Das Land spart zu wenig.`,
          },
          {
            id: 'p2b_2',
            points: 10,
            type: 'text',
            text: '[2.3 Validation] Führt eine Erhöhung der Sparquote $s$ in diesem Land langfristig zu einem höheren oder niedrigeren Konsum?',
            correct: ['höher', 'steigt', '↑'],
            feedback: String.raw`Da $k < k_{GR}$, ist mehr Kapital wohlfahrtssteigernd.`,
          }
        ]
      }
    ]
  }
};
