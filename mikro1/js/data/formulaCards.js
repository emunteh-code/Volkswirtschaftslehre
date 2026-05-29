// ============================================================
// FORMULA CARDS — Mikroökonomik I
// VL-anchor-grounded derivation layer (pilot pass 1).
// ============================================================

const MODULE = 'mikro1';

function card({
  id,
  conceptId,
  officialNotation,
  displayFormula,
  intuition,
  derivationSteps,
  assumptions,
  appliesWhen,
  failsWhen,
  substitutions = [],
  examShortcut,
  graphicalInterpretation = '',
  relatedTaskFamilies = [],
  commonMistakes,
  anchorIds
}) {
  return {
    id,
    module: MODULE,
    conceptId,
    officialNotation,
    displayFormula,
    intuition,
    derivationSteps,
    assumptions,
    appliesWhen,
    failsWhen,
    substitutions,
    examShortcut,
    graphicalInterpretation,
    relatedTaskFamilies,
    commonMistakes,
    anchorIds,
    sourceStatus: 'direct-source'
  };
}

export const FORMULA_CARDS = Object.freeze([
  card({
    id: 'mikro1.budget_line_slope',
    conceptId: 'budget',
    officialNotation: 'p_1, p_2, m, x_1, x_2',
    displayFormula: String.raw`$$p_1 x_1 + p_2 x_2 = m \qquad\Rightarrow\qquad x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}x_1$$`,
    intuition:
      'Die Budgetgerade verbindet alle voll ausgeschöpften Bündel. Ihre Steigung ist das negative Preisverhältnis und misst die Opportunitätskosten von Gut 1 in Einheiten Gut 2.',
    derivationSteps: [
      {
        label: 'Budgetmenge',
        text: 'Alle erschwinglichen Bündel erfüllen die Budgetrestriktion mit Gleichheit.',
        math: String.raw`$$B = \{(x_1,x_2)\in\mathbb{R}^2_+ \mid p_1 x_1 + p_2 x_2 \leq m\}$$`
      },
      {
        label: 'Budgetgerade',
        text: 'Am Rand der Budgetmenge gilt Gleichheit; nach $x_2$ auflösen.',
        math: String.raw`$$x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}x_1$$`
      },
      {
        label: 'Steigung',
        text: 'Die Steigung ist $-p_1/p_2$ (Zähler: Preis des Gutes auf der x-Achse).',
        math: String.raw`$$\frac{dx_2}{dx_1}\bigg|_{B} = -\frac{p_1}{p_2}$$`
      }
    ],
    assumptions: ['positive Preise $p_1,p_2>0$', 'nichtnegative Einkommen $m\\geq 0$', 'zweigüter-Fall für die explizite Gerade'],
    appliesWhen: ['Budgetgerade zeichnen oder interpretieren', 'Preis- oder Einkommensänderung auf der Budgetmenge'],
    failsWhen: ['mehr als zwei Güter ohne Projektion', 'Anfangsausstattung statt Budgetrestriktion'],
    examShortcut: 'Achsenschnitt $m/p_i$ und Steigung $-p_1/p_2$ getrennt notieren; Drehpunkt bei Preisänderung eines Gutes beachten.',
    graphicalInterpretation: 'Schnittpunkt mit den Achsen bei $(m/p_1,0)$ und $(0,m/p_2)$; Drehung bei $p_1$-Änderung um $(0,m/p_2)$.',
    relatedTaskFamilies: ['budget-line'],
    commonMistakes: ['Steigung $-p_2/p_1$ vertauschen', 'Budgetmenge mit KMM verwechseln', 'Drehpunkt im Ursprung statt Achsenabschnitt'],
    anchorIds: ['mikro1.budget.vl01.p18.budgetgerade', 'mikro1.budget.vl01.p16.budgetmenge']
  }),
  card({
    id: 'mikro1.lagrange_tangential_condition',
    conceptId: 'lagrange',
    officialNotation: 'MU_1, MU_2, p_1, p_2, \\lambda',
    displayFormula: String.raw`$$\frac{MU_1}{MU_2} = \frac{p_1}{p_2}$$`,
    intuition:
      'Im inneren Optimum gleicht die subjektive Austauschrate (GRS) dem Marktpreisverhältnis. Die Lagrange-Methode formalisiert dieselbe Tangentialbedingung.',
    derivationSteps: [
      {
        label: 'Lagrange-Funktion',
        text: 'Nutzenmaximierung unter Budget mit Multiplikator $\\lambda$.',
        math: String.raw`$$\mathcal{L} = u(x_1,x_2) + \lambda(m - p_1 x_1 - p_2 x_2)$$`
      },
      {
        label: 'FOCs',
        text: 'Aus den ersten beiden FOCs folgt $MU_i = \\lambda p_i$.',
        math: String.raw`$$MU_1 = \lambda p_1,\quad MU_2 = \lambda p_2$$`
      },
      {
        label: 'Tangentialbedingung',
        text: 'Quotient der FOCs eliminiert $\\lambda$.',
        math: String.raw`$$\frac{MU_1}{MU_2} = \frac{p_1}{p_2}$$`
      }
    ],
    assumptions: ['inneres Optimum', 'differenzierbare Nutzenfunktion', 'positive Grenznutzen'],
    appliesWhen: ['Haushaltsoptimum mit Lagrange', 'Tangentialbedingung an Indifferenzkurve und Budgetgerade'],
    failsWhen: ['Eckenlösung bei Komplementen', 'keine innere Lösung'],
    examShortcut: 'FOC nach $\\lambda$ nicht vergessen — liefert die Budgetrestriktion.',
    relatedTaskFamilies: ['lagrange-constraint'],
    commonMistakes: ['Budget-FOC vergessen', 'GRS mit Preisverhältnis verwechseln', 'Vorzeichen der Lagrange-Restriktion vertauschen'],
    anchorIds: ['mikro1.lagrange.vl02.p17.nebenbedingung', 'mikro1.hausopt.vl03.p13.haushaltsoptimum']
  }),
  card({
    id: 'mikro1.cobb_douglas_marshall_demand',
    conceptId: 'cobbd',
    officialNotation: '\\alpha, m, p_1, p_2',
    displayFormula: String.raw`$$x_1^* = \frac{\alpha m}{p_1}, \qquad x_2^* = \frac{(1-\alpha)m}{p_2}$$`,
    intuition:
      'Bei Cobb-Douglas bleibt der Budgetanteil jedes Gutes konstant. Das erklärt die lineare Marshall-Nachfrage in $m$ und die Falligkeit im eigenen Preis.',
    derivationSteps: [
      {
        label: 'Nutzenfunktion',
        text: 'CD-Präferenzen mit Parameter $\\alpha$.',
        math: String.raw`$$u(x_1,x_2) = x_1^\alpha x_2^{1-\alpha}$$`
      },
      {
        label: 'Lagrange/Tangential',
        text: 'Tangentialbedingung und Budgetrestriktion lösen.',
        math: String.raw`$$\frac{MU_1}{MU_2}=\frac{p_1}{p_2},\quad p_1 x_1 + p_2 x_2 = m$$`
      },
      {
        label: 'Marshall-Nachfrage',
        text: 'Auflösen liefert konstante Ausgabenanteile.',
        math: String.raw`$$x_1^* = \frac{\alpha m}{p_1},\quad x_2^* = \frac{(1-\alpha)m}{p_2}$$`
      }
    ],
    assumptions: ['$0<\\alpha<1$', 'innere Lösung', 'positive Preise und Einkommen'],
    appliesWhen: ['Marshall-Nachfrage aus CD ableiten', 'Budgetanteile interpretieren'],
    failsWhen: ['Leontief- oder Substitut-Präferenzen', 'mehrere Güter ohne Verallgemeinerung'],
    examShortcut: 'Ausgabenanteil Gut 1 ist exakt $\\alpha$ — sofort prüfbar.',
    relatedTaskFamilies: ['cobb-douglas-demand'],
    commonMistakes: ['Exponenten vertauschen', 'Kreuzpreiseffekt bei Marshall fälschlich ungleich null annehmen'],
    anchorIds: ['mikro1.cobbd.vl04.p09.marshall-cd', 'mikro1.cobbd.vl04.p04.haushaltsoptimum']
  }),
  card({
    id: 'mikro1.slutsky_decomposition',
    conceptId: 'slutsky',
    officialNotation: 'x_i, h_i, p_i, m',
    displayFormula: String.raw`$$\frac{\partial x_i}{\partial p_i} = \frac{\partial h_i}{\partial p_i} - x_i\frac{\partial x_i}{\partial m}$$`,
    intuition:
      'Eine Preisänderung wirkt über Substitution bei konstantem Nutzen (SE) und über die Kaufkraft (EE). Das Minus vor dem EE-Term ist zentral.',
    derivationSteps: [
      {
        label: 'Gesamteffekt',
        text: 'Marshallsche Nachfrage reagiert auf den Preis.',
        math: String.raw`$$\frac{\partial x_i}{\partial p_i}\;\text{(GE)}$$`
      },
      {
        label: 'Substitutionseffekt',
        text: 'Hickssche Nachfrage hält Nutzen konstant; SE $\\leq 0$.',
        math: String.raw`$$\frac{\partial h_i}{\partial p_i}\;\text{(SE)}$$`
      },
      {
        label: 'Einkommenseffekt',
        text: 'Realeinkommensänderung skaliert mit $x_i$.',
        math: String.raw`$$\frac{\partial x_i}{\partial p_i} = \frac{\partial h_i}{\partial p_i} - x_i\frac{\partial x_i}{\partial m}$$`
      }
    ],
    assumptions: ['differentiable Nachfrage', 'Slutsky-Zerlegung für kleine Änderungen', 'normales vs. inferiores Gut für EE-Vorzeichen'],
    appliesWhen: ['Preisänderung in Marshall und Hicks zerlegen', 'Giffen-Diskussion'],
    failsWhen: ['diskrete Preisänderungen ohne Ableitung', 'mehrere gleichzeitige Schocks ohne Matrixform'],
    examShortcut: 'Kreuzpreis-EE nutzt $x_j$ (des teureren Guts), nicht $x_i$.',
    graphicalInterpretation: 'SE entlang der IK; EE als Parallelverschiebung der Budgetgerade.',
    relatedTaskFamilies: ['slutsky-decomposition'],
    commonMistakes: ['Minus vor EE vergessen', 'SE und GE verwechseln', 'falsche Menge im Kreuzpreis-EE'],
    anchorIds: ['mikro1.slutsky.vl07.p04.slutsky-gleichung', 'mikro1.slutsky.vl07.p02.einkommen-substitution']
  }),
  card({
    id: 'mikro1.production_isoquant_trs',
    conceptId: 'produktion',
    officialNotation: 'MP_1, MP_2, TRS',
    displayFormula: String.raw`$$TRS_{1,2} = \frac{MP_1}{MP_2} = -\frac{dx_2}{dx_1}\bigg|_{y=\bar y}$$`,
    intuition:
      'Entlang einer Isoquante tauscht das Unternehmen Faktoren bei konstanter Outputmenge. TRS misst die technische Substitutionsrate.',
    derivationSteps: [
      {
        label: 'Produktionsfunktion',
        text: 'Output hängt von Faktoren ab.',
        math: String.raw`$$y = f(x_1,x_2)$$`
      },
      {
        label: 'Isoquante',
        text: 'Totales Differential bei konstantem $y$.',
        math: String.raw`$$MP_1\,dx_1 + MP_2\,dx_2 = 0$$`
      },
      {
        label: 'TRS',
        text: 'Umstellen nach $dx_2/dx_1$.',
        math: String.raw`$$TRS_{1,2} = \frac{MP_1}{MP_2}$$`
      }
    ],
    assumptions: ['positive Grenzprodukte', 'innerer Punkt der Isoquante', 'differenzierbare Produktionsfunktion'],
    appliesWhen: ['Isoquante interpretieren', 'Kostenminimierung mit TRS = Faktorpreisverhältnis'],
    failsWhen: ['Leontief-Knick ohne Ableitung', 'negative Grenzprodukte'],
    examShortcut: 'TRS-Logik spiegelt die GRS der Haushaltstheorie — Vorzeichen über $dx_2/dx_1$ beachten.',
    relatedTaskFamilies: ['production-isoquants'],
    commonMistakes: ['TRS mit GRS verwechseln', 'Mengen- und Faktorachsen vertauschen'],
    anchorIds: ['mikro1.produktion.vl11.p07.isoquanten', 'mikro1.produktion.vl11.p04.produktionstechnologie']
  }),
  card({
    id: 'mikro1.cost_minimization_trs',
    conceptId: 'kosten',
    officialNotation: 'w_1, w_2, \\lambda, y',
    displayFormula: String.raw`$$\frac{MP_1}{MP_2} = \frac{w_1}{w_2}$$`,
    intuition:
      'Kostenminimierung wählt den Faktormix, bei dem die technische Substitutionsrate dem Faktorpreisverhältnis entspricht.',
    derivationSteps: [
      {
        label: 'Problem',
        text: 'Minimiere Kosten bei gegebenem Output.',
        math: String.raw`$$\min w_1 x_1 + w_2 x_2 \quad \text{s.t. } f(x_1,x_2)=y$$`
      },
      {
        label: 'Lagrange',
        text: 'FOCs liefern $MP_i = \\lambda w_i$.',
        math: String.raw`$$\frac{MP_1}{w_1} = \frac{MP_2}{w_2}$$`
      },
      {
        label: 'Tangentialbedingung',
        text: 'Quotient ergibt TRS gleich Faktorpreisverhältnis.',
        math: String.raw`$$\frac{MP_1}{MP_2} = \frac{w_1}{w_2}$$`
      }
    ],
    assumptions: ['konvexes Isoquantensystem', 'positive Faktorpreise', 'inneres Optimum'],
    appliesWhen: ['Kostenminimierung', 'bedingte Faktornachfrage ableiten'],
    failsWhen: ['Ecke bei Leontief', 'mehrere Outputs ohne Nebenbedingung'],
    examShortcut: 'Parallel zur Haushalts-Tangentialbedingung — nur TRS vs. GRS und Preise vs. Faktorpreise unterscheiden.',
    relatedTaskFamilies: ['cost-minimization'],
    commonMistakes: ['Faktorpreise mit Outputpreisen verwechseln', 'unbedingte statt bedingte Nachfrage'],
    anchorIds: ['mikro1.kosten.vl12.p03.kostenminimierung', 'mikro1.kosten.vl12.p11.shephard']
  }),
  card({
    id: 'mikro1.competitive_supply_p_equals_mc',
    conceptId: 'gewinn',
    officialNotation: 'p, MC(y), y',
    displayFormula: String.raw`$$p = MC(y)$$`,
    intuition:
      'Im Wettbewerb wählt das Unternehmen die Menge, bei der der Marktpreis den Grenzkosten entspricht. Das ist die kurzfristige Angebotsregel.',
    derivationSteps: [
      {
        label: 'Gewinn',
        text: 'Gewinn ist Erlös minus Kosten.',
        math: String.raw`$$\pi(y) = p\,y - C(y)$$`
      },
      {
        label: 'FOC',
        text: 'Ableitung nach $y$ gleich null.',
        math: String.raw`$$\frac{d\pi}{dy} = p - MC(y) = 0$$`
      },
      {
        label: 'Angebotsregel',
        text: 'Bei steigenden Grenzkosten liefert das die Angebotsmenge.',
        math: String.raw`$$p = MC(y)$$`
      }
    ],
    assumptions: ['Preisnehmer', 'inneres Gewinnmaximum', 'steigende MC im relevanten Bereich'],
    appliesWhen: ['Wettbewerbsangebot', 'Gewinnmaximum des Unternehmens'],
    failsWhen: ['Monopol (MR statt Preis)', 'Preis unter min AVC (Stilllegung)'],
    examShortcut: 'Kurzfristig nur der steigende MC-Zweig oberhalb min AVC anbieten.',
    relatedTaskFamilies: ['market-equilibrium'],
    commonMistakes: ['p=AC statt p=MC', 'Stilllegungsregel vergessen', 'Monopolbedingung MR=MC verwechseln'],
    anchorIds: ['mikro1.gewinn.vl13.p02.gewinnmax', 'mikro1.markt.vl16.p12.gleichgewicht']
  }),
  card({
    id: 'mikro1.monopoly_mr_equals_mc',
    conceptId: 'monopol',
    officialNotation: 'p(y), MR(y), MC(y)',
    displayFormula: String.raw`$$MR(y) = p(y) + p'(y)\,y = MC(y)$$`,
    intuition:
      'Der Monopolist berücksichtigt, dass zusätzliche Menge den Preis auf allen Einheiten drückt. Deshalb liegt MR unter der Nachfrage.',
    derivationSteps: [
      {
        label: 'Gewinn',
        text: 'Erlös $p(y)y$ minus Kosten.',
        math: String.raw`$$\pi(y)=p(y)y-C(y)$$`
      },
      {
        label: 'Grenzerlös',
        text: 'Ableitung des Erlöses nach $y$.',
        math: String.raw`$$MR(y)=p(y)+p'(y)y$$`
      },
      {
        label: 'Optimum',
        text: 'FOC liefert Menge; Preis aus Nachfrage ablesen.',
        math: String.raw`$$MR(y_m)=MC(y_m),\quad p_m=p(y_m)$$`
      }
    ],
    assumptions: ['fallende inverse Nachfrage', 'differenzierbare Kosten', 'positiver Bereich mit $MR>0$'],
    appliesWhen: ['Monopolmenge bestimmen', 'Lerner-Index und DWL diskutieren'],
    failsWhen: ['Preiswettbewerb', 'unelastische Nachfrage ohne Produktion'],
    examShortcut: 'Erst $y_m$ aus $MR=MC$, dann $p_m$ auf der Nachfragekurve — nie umgekehrt.',
    graphicalInterpretation: 'MR-Verlauf unterhalb der Nachfrage; Monopolpunkt links vom Wettbewerbspunkt.',
    relatedTaskFamilies: ['monopoly-pricing'],
    commonMistakes: ['Preis am MR-Schnittpunkt ablesen', 'MR mit Preis verwechseln', 'MR=MC mit p=MC verwechseln'],
    anchorIds: ['mikro1.monopol.vl17.p06.gewinnmax-monopol', 'mikro1.monopol.vl17.p03.monopol']
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
