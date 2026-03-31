// ============================================================
// FULL EXAMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD: PRECISION UNDER UNCERTAINTY
// Extraction -> Interpretation -> Decision -> Execution -> Validation
// ============================================================

export const FULL_EXAMS = {
probe_2024: {
  id: 'probe_2024',
  title: 'Probeklausur Mikroökonomik I',
  subtitle: 'Prof. Marcela Ibanez, Georg-August-Universität Göttingen',
  duration: 90,
  aufgaben: [
    {
      label: 'Aufgabe 1', points: 40, type: 'wf-block',
      preamble: String.raw`Beurteilen Sie die Aussagen als wahr oder falsch. (2 Punkte pro richtigem Kreuz).`,
      groups: [
        { context: String.raw`Ein Haushalt mit Einkommen $m$ und Preisen $p_1, p_2$.`,
          questions: [
            { id:'1_1', text: String.raw`Bei $m = 10, p_1=5$ ist $x_1^{\max} = 2$.`, correct:'Wahr', feedback: 'Korrekt.' },
            { id:'1_2', text: String.raw`Sinkt $p_1$, vergrößert sich die Budgetmenge immer.`, correct:'Wahr', feedback: 'Korrekt.' },
          ]},
        { context: String.raw`Nutzenfunktion $u = 2x_1 + x_2$.`,
          questions: [
            { id:'1_7', text: 'Die Güter sind perfekte Substitute.', correct:'Wahr', feedback: 'Korrekt.' },
            { id:'1_8', text: 'Im Optimum gilt immer GRS = -p1/p2.', correct:'Falsch', feedback: 'Falsch. Bei Substituten sind Randlösungen die Norm.' },
          ]},
      ]
    }
  ]
},
hard_mock_mikro1_2026: {
    id: 'hard_mock_mikro1_2026',
    title: 'Mikro I - Master-Level Simulation v7.0 (60 Min)',
    subtitle: 'Final Hardening: Decision-Before-Execution',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Slutsky-Zerlegung (Diagnostic Flow)',
        preamble: String.raw`Nutzenfunktion $u(x_1, x_2) = x_1 x_2$. Der Preis $p_1$ sinkt von $4$ auf $1$. ($p_2 = 1, m = 40$).`,
        questions: [
          {
            id: 'm1a_1',
            points: 5,
            type: 'text',
            text: '[1.1 Extraction] Extrahieren Sie das ursprüngliche Optimum $x^*$ aus der Gitter-Grafik (Gitter: 5 Einheiten).',
            correct: ['5, 20', '5 20', '(5,20)'],
            feedback: String.raw`$x_1^* = 5, x_2^* = 20$.`,
          },
          {
            id: 'm1a_2',
            points: 5,
            type: 'text',
            text: '[1.2 Interpretation] Welches Vorzeichen hat der Substitutionseffekt (SE) für Gut 1 bei dieser Preissenkung? (↑ ↓ erlaubt).',
            correct: ['positiv', '↑', 'se > 0', 'steigt'],
            feedback: String.raw`Gut 1 wird billiger ⟹ SE ist immer positiv für dieses Gut.`,
          },
          {
            id: 'm1a_3',
            points: 10,
            type: 'text',
            text: '[1.3 Decision] Berechnen Sie die notwendige Einkommensänderung $\Delta m$, um die Kaufkraft nach Slutsky konstant zu halten.',
            correct: ['-15', 'minus 15', '15 sinken'],
            feedback: String.raw`$m\' = 1 \cdot 5 + 1 \cdot 20 = 25$. $\Delta m = 25 - 40 = -15$.`,
          },
          {
            id: 'm1b',
            points: 10,
            type: 'text',
            text: '[1.4 Validation] Angenommen, ein Student berechnet einen negativen SE für Gut 1. Ist dieses Ergebnis ökonomisch plausibel?',
            correct: ['nein', 'falsch', 'unplausibel'],
            feedback: String.raw`Nein. Der SE für ein billiger werdendes Gut ist zwingend positiv. (Bewertungslogik: Solche fundamentalen Widersprüche führen zu Score-Caps).`,
          }
        ]
      },
      {
        label: 'Block B',
        points: 25,
        type: 'text-block',
        title: 'Optimierung & Randbedingungen',
        preamble: String.raw`Nutzenfunktion $u = (x_1 + 2)x_2$. Preise $p_1=10, p_2=1, m=10$.`,
        questions: [
          {
            id: 'm2a',
            points: 10,
            type: 'text',
            text: '[2.1 Decision] Liefert die mathematische Tangentialbedingung eine physisch realisierbare Lösung? Prüfen Sie $x_1 \geq 0$.',
            correct: ['nein', 'unzulässig', 'x1=-0.5'],
            feedback: String.raw`Tangential ergibt $x_1 = -0{,}5$. Dies ist unzulässig.`,
          },
          {
            id: 'm2b',
            points: 15,
            type: 'text',
            text: '[2.2 Execution] Bestimmen Sie das ökonomisch valide Optimum unter Berücksichtigung der KMM.',
            correct: ['x1=0 x2=10', '0, 10', 'randlösung'],
            feedback: String.raw`Da die innere Lösung unzulässig ist, wird $x_1=0$ gesetzt. Mit $m=10$ folgt $x_2=10$.`,
          }
        ]
      },
      {
        label: 'Block C',
        points: 20,
        type: 'text-block',
        title: 'Produktion & Sunk Costs',
        preamble: String.raw`Kostenfunktion $C(y) = 2y + 16$. Fixkosten (16) sind "sunk".`,
        questions: [
          {
            id: 'm3a',
            points: 10,
            type: 'text',
            text: '[3.1 Decision] Welcher Kostentyp ist für die kurzfristige Angebotsentscheidung bei sunk costs relevant? (Grenzkosten oder Durchschnittskosten?)',
            correct: ['grenzkosten', 'mc', 'variable kosten'],
            feedback: String.raw`Sunk costs sind irrelevant. Entscheidend sind MC bzw. AVC.`,
          },
          {
            id: 'm3b',
            points: 10,
            type: 'text',
            text: '[3.2 Execution] Ab welchem Preis $P$ bietet das Unternehmen eine positive Menge an?',
            correct: ['p >= 2', '2', 'p>=mc'],
            feedback: String.raw`$P \geq MC = 2$.`,
          }
        ]
      }
    ]
  }
};
