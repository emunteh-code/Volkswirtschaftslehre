// ============================================================
// FORMULA CARDS — Mikroökonomik I
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
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
    id: 'mikro1.budget.budgetungleichung',
    conceptId: 'budget',
    officialNotation: "p_1, p_2, x_1, x_2, m",
    displayFormula: "$$p_1 x_1 + p_2 x_2 \\leq m$$",
    intuition: "Menge aller erschwinglichen Bündel",
    derivationSteps: [
        {
            "label": "Budgetungleichung",
            "text": "Budgetmenge",
            "math": "$$p_1 x_1 + p_2 x_2 \\leq m$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu budget","Budgetungleichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Budgetungleichung — Menge aller erschwinglichen Bündel",
    relatedTaskFamilies: ["mikro1.taskfamily.budget-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.budget.vl01.p16.budgetmenge","mikro1.budget.vl01.p18.budgetgerade"]
  }),
  card({
    id: 'mikro1.budget.budgetgerade',
    conceptId: 'budget',
    officialNotation: "x_2, m, p_1, p_2, x_1",
    displayFormula: "$$x_2 = \\frac{m}{p_2} - \\frac{p_1}{p_2} x_1$$",
    intuition: "Vollständige Ausgabe des Einkommens",
    derivationSteps: [
        {
            "label": "Budgetgerade",
            "text": "Budgetmenge",
            "math": "$$x_2 = \\frac{m}{p_2} - \\frac{p_1}{p_2} x_1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu budget","Budgetgerade"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Budgetgerade — Vollständige Ausgabe des Einkommens",
    relatedTaskFamilies: ["mikro1.taskfamily.budget-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.budget.vl01.p16.budgetmenge","mikro1.budget.vl01.p18.budgetgerade"]
  }),
  card({
    id: 'mikro1.budget.steigung',
    conceptId: 'budget',
    officialNotation: "p_1, p_2",
    displayFormula: "$$-\\frac{p_1}{p_2}$$",
    intuition: "Opportunitätskosten (x₂ je Einheit x₁)",
    derivationSteps: [
        {
            "label": "Steigung",
            "text": "Budgetmenge",
            "math": "$$-\\frac{p_1}{p_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu budget","Steigung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Steigung — Opportunitätskosten (x₂ je Einheit x₁)",
    relatedTaskFamilies: ["mikro1.taskfamily.budget-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.budget.vl01.p16.budgetmenge","mikro1.budget.vl01.p18.budgetgerade"]
  }),
  card({
    id: 'mikro1.praeferenz.strikte_pr_ferenz',
    conceptId: 'praeferenz',
    officialNotation: "a, b, \\succsim, \\lnot",
    displayFormula: "$$a \\succ b \\iff a \\succsim b \\land \\lnot(b \\succsim a)$$",
    intuition: "Definition über schwache Präferenz",
    derivationSteps: [
        {
            "label": "Strikte Präferenz",
            "text": "Präferenzen",
            "math": "$$a \\succ b \\iff a \\succsim b \\land \\lnot(b \\succsim a)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu praeferenz","Strikte Präferenz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Strikte Präferenz — Definition über schwache Präferenz",
    relatedTaskFamilies: ["mikro1.taskfamily.praeferenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.praeferenz.vl02.p02.praeferenzen","mikro1.praeferenz.vl02.p07.indifferenz"]
  }),
  card({
    id: 'mikro1.praeferenz.indifferenz',
    conceptId: 'praeferenz',
    officialNotation: "a, b, \\sim",
    displayFormula: "$$a \\sim b \\iff a \\succsim b \\land b \\succsim a$$",
    intuition: "Wechselseitige schwache Präferenz",
    derivationSteps: [
        {
            "label": "Indifferenz",
            "text": "Präferenzen",
            "math": "$$a \\sim b \\iff a \\succsim b \\land b \\succsim a$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu praeferenz","Indifferenz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Indifferenz — Wechselseitige schwache Präferenz",
    relatedTaskFamilies: ["mikro1.taskfamily.praeferenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.praeferenz.vl02.p02.praeferenzen","mikro1.praeferenz.vl02.p07.indifferenz"]
  }),
  card({
    id: 'mikro1.praeferenz.strikte_pr_ferenz_merksatz',
    conceptId: 'praeferenz',
    officialNotation: "a, b, \\succsim, \\lnot",
    displayFormula: "$$a \\succ b \\iff a \\succsim b \\land \\lnot(b \\succsim a)$$",
    intuition: "Definition über schwache Präferenz",
    derivationSteps: [
        {
            "label": "Strikte Präferenz (Merksatz)",
            "text": "Präferenzen",
            "math": "$$a \\succ b \\iff a \\succsim b \\land \\lnot(b \\succsim a)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu praeferenz","Strikte Präferenz (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Strikte Präferenz (Merksatz) — Definition über schwache Präferenz",
    relatedTaskFamilies: ["mikro1.taskfamily.praeferenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.praeferenz.vl02.p02.praeferenzen","mikro1.praeferenz.vl02.p07.indifferenz"]
  }),
  card({
    id: 'mikro1.lagrange.lagrange_funktion',
    conceptId: 'lagrange',
    officialNotation: "\\mathcal{L}, \\lambda, m, p_1,p_2",
    displayFormula: "$$\\mathcal{L} = u(x_1, x_2) + \\lambda(m - p_1 x_1 - p_2 x_2)$$",
    intuition: "Zielfunktion + λ·Nebenbedingung",
    derivationSteps: [
        {
            "label": "Lagrange-Funktion",
            "text": "Exkurs: Maximierung unter einer Nebenbedingung",
            "math": "$$\\mathcal{L} = u(x_1, x_2) + \\lambda(m - p_1 x_1 - p_2 x_2)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lagrange","Lagrange-Funktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lagrange-Funktion — Zielfunktion + λ·Nebenbedingung",
    relatedTaskFamilies: ["mikro1.taskfamily.lagrange-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.lagrange.vl02.p17.nebenbedingung","mikro1.lagrange.vl02.p20.nebenbedingungen"]
  }),
  card({
    id: 'mikro1.lagrange.tangentialbedingung',
    conceptId: 'lagrange',
    officialNotation: "MU_1, MU_2, p_1, p_2",
    displayFormula: "$$\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$$",
    intuition: "GRS = Preisverhältnis im Optimum",
    derivationSteps: [
        {
            "label": "Tangentialbedingung",
            "text": "Exkurs: Maximierung unter einer Nebenbedingung",
            "math": "$$\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lagrange","Tangentialbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Tangentialbedingung — GRS = Preisverhältnis im Optimum",
    relatedTaskFamilies: ["mikro1.taskfamily.lagrange-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.lagrange.vl02.p17.nebenbedingung","mikro1.lagrange.vl02.p20.nebenbedingungen"]
  }),
  card({
    id: 'mikro1.lagrange.grenznutzen_einkommen',
    conceptId: 'lagrange',
    officialNotation: "\\lambda, MU_i, p_i",
    displayFormula: "$$\\lambda = \\frac{MU_1}{p_1} = \\frac{MU_2}{p_2}$$",
    intuition: "Schattenpreis der Budgetrestriktion",
    derivationSteps: [
        {
            "label": "Grenznutzen Einkommen",
            "text": "Exkurs: Maximierung unter einer Nebenbedingung",
            "math": "$$\\lambda = \\frac{MU_1}{p_1} = \\frac{MU_2}{p_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lagrange","Grenznutzen Einkommen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Grenznutzen Einkommen — Schattenpreis der Budgetrestriktion",
    relatedTaskFamilies: ["mikro1.taskfamily.lagrange-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.lagrange.vl02.p17.nebenbedingung","mikro1.lagrange.vl02.p20.nebenbedingungen"]
  }),
  card({
    id: 'mikro1.marshall.marshall_nachfrage',
    conceptId: 'marshall',
    officialNotation: "x_i^*, p_1,p_2, m",
    displayFormula: "$$x_i^*(p_1, p_2, m)$$",
    intuition: "Nutzenmaximierende Menge bei Preisen (p₁,p₂) und Einkommen m; aus GRS = p₁/p₂ und Budget.",
    derivationSteps: [
        {
            "label": "Marshall-Nachfrage",
            "text": "Haushaltsoptimum, analytische Bestimmung",
            "math": "$$x_i^*(p_1, p_2, m)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu marshall","Marshall-Nachfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Marshall-Nachfrage — Nutzenmaximierende Menge bei Preisen (p₁,p₂) und Einkommen m; aus GRS = p₁/p₂ un",
    relatedTaskFamilies: ["mikro1.taskfamily.marshall-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.marshall.vl04.p04.haushaltsoptimum","mikro1.marshall.vl04.p09.marshall-cd"]
  }),
  card({
    id: 'mikro1.marshall.homogenit_t',
    conceptId: 'marshall',
    officialNotation: "x_i, \\lambda, p, m",
    displayFormula: "$$x_i(\\lambda p, \\lambda m) = x_i(p, m) \\quad \\forall\\, \\lambda > 0$$",
    intuition: "Keine Geldillusion (Grad 0)",
    derivationSteps: [
        {
            "label": "Homogenität",
            "text": "Haushaltsoptimum, analytische Bestimmung",
            "math": "$$x_i(\\lambda p, \\lambda m) = x_i(p, m) \\quad \\forall\\, \\lambda > 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu marshall","Homogenität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Homogenität — Keine Geldillusion (Grad 0)",
    relatedTaskFamilies: ["mikro1.taskfamily.marshall-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.marshall.vl04.p04.haushaltsoptimum","mikro1.marshall.vl04.p09.marshall-cd"]
  }),
  card({
    id: 'mikro1.marshall.marshall_nachfrage_merksatz',
    conceptId: 'marshall',
    officialNotation: "x_i^*, p_1,p_2, m",
    displayFormula: "$$x_i^*(p_1, p_2, m)$$",
    intuition: "Nutzenmaximierende Menge bei Preisen (p₁,p₂) und Einkommen m; aus GRS = p₁/p₂ und Budget.",
    derivationSteps: [
        {
            "label": "Marshall-Nachfrage (Merksatz)",
            "text": "Haushaltsoptimum, analytische Bestimmung",
            "math": "$$x_i^*(p_1, p_2, m)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu marshall","Marshall-Nachfrage (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Marshall-Nachfrage (Merksatz) — Nutzenmaximierende Menge bei Preisen (p₁,p₂) und Einkommen m; aus GRS = p₁/p₂ un",
    relatedTaskFamilies: ["mikro1.taskfamily.marshall-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.marshall.vl04.p04.haushaltsoptimum","mikro1.marshall.vl04.p09.marshall-cd"]
  }),
  card({
    id: 'mikro1.slutsky.slutsky_eigenpreis',
    conceptId: 'slutsky',
    officialNotation: "\\partial x_i/\\partial p_i, \\partial h_i/\\partial p_i, \\partial x_i/\\partial m, x_i",
    displayFormula: "$$\\frac{\\partial x_i}{\\partial p_i} = \\underbrace{\\frac{\\partial h_i}{\\partial p_i}}_{\\text{SE}\\leq 0} - \\underbrace{\\frac{\\partial x_i}{\\partial m}\\, x_i}_{\\text{EE}}$$",
    intuition: "GE = SE + EE",
    derivationSteps: [
        {
            "label": "Slutsky (Eigenpreis)",
            "text": "Preisänderungen: Einkommens- und Substitutionseffekt",
            "math": "$$\\frac{\\partial x_i}{\\partial p_i} = \\underbrace{\\frac{\\partial h_i}{\\partial p_i}}_{\\text{SE}\\leq 0} - \\underbrace{\\frac{\\partial x_i}{\\partial m}\\, x_i}_{\\text{EE}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu slutsky","Slutsky (Eigenpreis)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Slutsky (Eigenpreis) — GE = SE + EE",
    relatedTaskFamilies: ["mikro1.taskfamily.slutsky-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.slutsky.vl07.p02.einkommen-substitution","mikro1.slutsky.vl07.p04.slutsky-gleichung"]
  }),
  card({
    id: 'mikro1.slutsky.slutsky_kreuzpreis',
    conceptId: 'slutsky',
    officialNotation: "\\partial x/\\partial p_i, \\partial h/\\partial p_i, x_i",
    displayFormula: "$$\\frac{\\partial x_j}{\\partial p_i} = \\frac{\\partial h_j}{\\partial p_i} - \\frac{\\partial x_j}{\\partial m}\\, x_i$$",
    intuition: "EE enthält Menge xᵢ (des Gutes mit Preisänderung)",
    derivationSteps: [
        {
            "label": "Slutsky (Kreuzpreis)",
            "text": "Preisänderungen: Einkommens- und Substitutionseffekt",
            "math": "$$\\frac{\\partial x_j}{\\partial p_i} = \\frac{\\partial h_j}{\\partial p_i} - \\frac{\\partial x_j}{\\partial m}\\, x_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu slutsky","Slutsky (Kreuzpreis)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Slutsky (Kreuzpreis) — EE enthält Menge xᵢ (des Gutes mit Preisänderung)",
    relatedTaskFamilies: ["mikro1.taskfamily.slutsky-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.slutsky.vl07.p02.einkommen-substitution","mikro1.slutsky.vl07.p04.slutsky-gleichung"]
  }),
  card({
    id: 'mikro1.slutsky.slutsky_eigenpreis_merksatz',
    conceptId: 'slutsky',
    officialNotation: "\\partial x_i/\\partial p_i, \\partial h_i/\\partial p_i, \\partial x_i/\\partial m, x_i",
    displayFormula: "$$\\frac{\\partial x_i}{\\partial p_i} = \\underbrace{\\frac{\\partial h_i}{\\partial p_i}}_{\\text{SE}\\leq 0} - \\underbrace{\\frac{\\partial x_i}{\\partial m}\\, x_i}_{\\text{EE}}$$",
    intuition: "GE = SE + EE",
    derivationSteps: [
        {
            "label": "Slutsky (Eigenpreis) (Merksatz)",
            "text": "Preisänderungen: Einkommens- und Substitutionseffekt",
            "math": "$$\\frac{\\partial x_i}{\\partial p_i} = \\underbrace{\\frac{\\partial h_i}{\\partial p_i}}_{\\text{SE}\\leq 0} - \\underbrace{\\frac{\\partial x_i}{\\partial m}\\, x_i}_{\\text{EE}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu slutsky","Slutsky (Eigenpreis) (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Slutsky (Eigenpreis) (Merksatz) — GE = SE + EE",
    relatedTaskFamilies: ["mikro1.taskfamily.slutsky-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.slutsky.vl07.p02.einkommen-substitution","mikro1.slutsky.vl07.p04.slutsky-gleichung"]
  }),
  card({
    id: 'mikro1.produktion.produktionsfunktion',
    conceptId: 'produktion',
    officialNotation: "y, F, K, L",
    displayFormula: "$$y = F(K, L)$$",
    intuition: "Maximaler Output bei gegebenem Input",
    derivationSteps: [
        {
            "label": "Produktionsfunktion",
            "text": "Produktionstechnologie",
            "math": "$$y = F(K, L)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu produktion","Produktionsfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Produktionsfunktion — Maximaler Output bei gegebenem Input",
    relatedTaskFamilies: ["mikro1.taskfamily.produktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.produktion.vl11.p04.produktionstechnologie","mikro1.produktion.vl11.p07.isoquanten"]
  }),
  card({
    id: 'mikro1.produktion.isoquante',
    conceptId: 'produktion',
    officialNotation: "K, L, \\bar{y}",
    displayFormula: "$$\\{\\,(K,L) \\mid F(K,L) = \\bar{y}\\,\\}$$",
    intuition: "Niveaumenge für konstantes ȳ",
    derivationSteps: [
        {
            "label": "Isoquante",
            "text": "Produktionstechnologie",
            "math": "$$\\{\\,(K,L) \\mid F(K,L) = \\bar{y}\\,\\}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu produktion","Isoquante"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Isoquante — Niveaumenge für konstantes ȳ",
    relatedTaskFamilies: ["mikro1.taskfamily.produktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.produktion.vl11.p04.produktionstechnologie","mikro1.produktion.vl11.p07.isoquanten"]
  }),
  card({
    id: 'mikro1.produktion.produktionsfunktion_merksatz',
    conceptId: 'produktion',
    officialNotation: "y, F, K, L",
    displayFormula: "$$y = F(K, L)$$",
    intuition: "Maximaler Output bei gegebenem Input",
    derivationSteps: [
        {
            "label": "Produktionsfunktion (Merksatz)",
            "text": "Produktionstechnologie",
            "math": "$$y = F(K, L)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu produktion","Produktionsfunktion (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Produktionsfunktion (Merksatz) — Maximaler Output bei gegebenem Input",
    relatedTaskFamilies: ["mikro1.taskfamily.produktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.produktion.vl11.p04.produktionstechnologie","mikro1.produktion.vl11.p07.isoquanten"]
  }),
  card({
    id: 'mikro1.kosten.minimalkostenbedingung',
    conceptId: 'kosten',
    officialNotation: "MP_L, MP_K, w, r",
    displayFormula: "$$\\frac{MP_L}{MP_K} = \\frac{w}{r}$$",
    intuition: "GRTS = Faktorpreisverhältnis",
    derivationSteps: [
        {
            "label": "Minimalkostenbedingung",
            "text": "Kostenminimierung",
            "math": "$$\\frac{MP_L}{MP_K} = \\frac{w}{r}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kosten","Minimalkostenbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Minimalkostenbedingung — GRTS = Faktorpreisverhältnis",
    relatedTaskFamilies: ["mikro1.taskfamily.kosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.kosten.vl12.p03.kostenminimierung","mikro1.kosten.vl12.p11.shephard"]
  }),
  card({
    id: 'mikro1.kosten.kostenfunktion',
    conceptId: 'kosten',
    officialNotation: "C(w,r,y), w, r, L^*,K^*",
    displayFormula: "$$C(w,r,y) = w\\cdot L(w,r,y) + r\\cdot K(w,r,y)$$",
    intuition: "Optimalwertfunktion",
    derivationSteps: [
        {
            "label": "Kostenfunktion",
            "text": "Kostenminimierung",
            "math": "$$C(w,r,y) = w\\cdot L(w,r,y) + r\\cdot K(w,r,y)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kosten","Kostenfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kostenfunktion — Optimalwertfunktion",
    relatedTaskFamilies: ["mikro1.taskfamily.kosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.kosten.vl12.p03.kostenminimierung","mikro1.kosten.vl12.p11.shephard"]
  }),
  card({
    id: 'mikro1.kosten.shephard_produktion',
    conceptId: 'kosten',
    officialNotation: "∂C/∂w, L",
    displayFormula: "$$\\frac{\\partial C}{\\partial w} = L(w,r,y)$$",
    intuition: "Bedingte Arbeitsnachfrage",
    derivationSteps: [
        {
            "label": "Shephard (Produktion)",
            "text": "Kostenminimierung",
            "math": "$$\\frac{\\partial C}{\\partial w} = L(w,r,y)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kosten","Shephard (Produktion)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Shephard (Produktion) — Bedingte Arbeitsnachfrage",
    relatedTaskFamilies: ["mikro1.taskfamily.kosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.kosten.vl12.p03.kostenminimierung","mikro1.kosten.vl12.p11.shephard"]
  }),
  card({
    id: 'mikro1.gewinn.gewinnmaximum',
    conceptId: 'gewinn',
    officialNotation: "p, MC(y), y",
    displayFormula: "$$p = MC(y)$$",
    intuition: "Grenzerlös = Grenzkosten",
    derivationSteps: [
        {
            "label": "Gewinnmaximum",
            "text": "Gewinnmaximierung",
            "math": "$$p = MC(y)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gewinn","Gewinnmaximum"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gewinnmaximum — Grenzerlös = Grenzkosten",
    relatedTaskFamilies: ["mikro1.taskfamily.gewinn-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.gewinn.vl13.p02.gewinnmax","mikro1.gewinn.vl13.p04.gewinn-kostenfunktion"]
  }),
  card({
    id: 'mikro1.gewinn.wertgrenzprodukt',
    conceptId: 'gewinn',
    officialNotation: "p, F_L, w, F_K, r",
    displayFormula: "$$p \\cdot F_L = w \\quad \\text{und} \\quad p \\cdot F_K = r$$",
    intuition: "Direkte Optimierung in Faktoren",
    derivationSteps: [
        {
            "label": "Wertgrenzprodukt",
            "text": "Gewinnmaximierung",
            "math": "$$p \\cdot F_L = w \\quad \\text{und} \\quad p \\cdot F_K = r$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gewinn","Wertgrenzprodukt"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wertgrenzprodukt — Direkte Optimierung in Faktoren",
    relatedTaskFamilies: ["mikro1.taskfamily.gewinn-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.gewinn.vl13.p02.gewinnmax","mikro1.gewinn.vl13.p04.gewinn-kostenfunktion"]
  }),
  card({
    id: 'mikro1.gewinn.hotellings_lemma',
    conceptId: 'gewinn',
    officialNotation: "\\pi, p, y, w, L",
    displayFormula: "$$\\frac{\\partial \\pi}{\\partial p} = y, \\qquad -\\frac{\\partial \\pi}{\\partial w} = L$$",
    intuition: "Angebot und Faktornachfrage aus Gewinnfunktion",
    derivationSteps: [
        {
            "label": "Hotellings Lemma",
            "text": "Gewinnmaximierung",
            "math": "$$\\frac{\\partial \\pi}{\\partial p} = y, \\qquad -\\frac{\\partial \\pi}{\\partial w} = L$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gewinn","Hotellings Lemma"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Hotellings Lemma — Angebot und Faktornachfrage aus Gewinnfunktion",
    relatedTaskFamilies: ["mikro1.taskfamily.gewinn-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.gewinn.vl13.p02.gewinnmax","mikro1.gewinn.vl13.p04.gewinn-kostenfunktion"]
  }),
  card({
    id: 'mikro1.markt.gleichgewichtsbedingung',
    conceptId: 'markt',
    officialNotation: "S(p^*), D(p^*), p^*",
    displayFormula: "$$S(p^*) = D(p^*) = y^*$$",
    intuition: "Angebot = Nachfrage",
    derivationSteps: [
        {
            "label": "Gleichgewichtsbedingung",
            "text": "Marktangebot und Marktnachfrage",
            "math": "$$S(p^*) = D(p^*) = y^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu markt","Gleichgewichtsbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gleichgewichtsbedingung — Angebot = Nachfrage",
    relatedTaskFamilies: ["mikro1.taskfamily.markt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.markt.vl16.p09.marktangebot-nachfrage","mikro1.markt.vl16.p12.gleichgewicht"]
  }),
  card({
    id: 'mikro1.markt.effizienzbedingung',
    conceptId: 'markt',
    officialNotation: "MZB, p^*, MC",
    displayFormula: "$$MZB = p^* = MC$$",
    intuition: "Soziales Optimum",
    derivationSteps: [
        {
            "label": "Effizienzbedingung",
            "text": "Marktangebot und Marktnachfrage",
            "math": "$$MZB = p^* = MC$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu markt","Effizienzbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Effizienzbedingung — Soziales Optimum",
    relatedTaskFamilies: ["mikro1.taskfamily.markt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.markt.vl16.p09.marktangebot-nachfrage","mikro1.markt.vl16.p12.gleichgewicht"]
  }),
  card({
    id: 'mikro1.markt.wohlfahrt',
    conceptId: 'markt',
    officialNotation: "W, KR, PR",
    displayFormula: "$$W = KR + PR$$",
    intuition: "Summe der Renten",
    derivationSteps: [
        {
            "label": "Wohlfahrt",
            "text": "Marktangebot und Marktnachfrage",
            "math": "$$W = KR + PR$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu markt","Wohlfahrt"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wohlfahrt — Summe der Renten",
    relatedTaskFamilies: ["mikro1.taskfamily.markt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.markt.vl16.p09.marktangebot-nachfrage","mikro1.markt.vl16.p12.gleichgewicht"]
  }),
  card({
    id: 'mikro1.monopol.grenzerl_s',
    conceptId: 'monopol',
    officialNotation: "monopol",
    displayFormula: "$$E'(y) = p(y) + p'(y) \\cdot y$$",
    intuition: "Immer kleiner als Preis",
    derivationSteps: [
        {
            "label": "Grenzerlös",
            "text": "Das Monopol",
            "math": "$$E'(y) = p(y) + p'(y) \\cdot y$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monopol","Grenzerlös"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Grenzerlös — Immer kleiner als Preis",
    relatedTaskFamilies: ["mikro1.taskfamily.monopol-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.monopol.vl17.p03.monopol","mikro1.monopol.vl17.p06.gewinnmax-monopol"]
  }),
  card({
    id: 'mikro1.monopol.cournotscher_punkt',
    conceptId: 'monopol',
    officialNotation: "monopol",
    displayFormula: "$$E'(y_m) = C'(y_m)$$",
    intuition: "Optimale Monopolmenge",
    derivationSteps: [
        {
            "label": "Cournotscher Punkt",
            "text": "Das Monopol",
            "math": "$$E'(y_m) = C'(y_m)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monopol","Cournotscher Punkt"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Cournotscher Punkt — Optimale Monopolmenge",
    relatedTaskFamilies: ["mikro1.taskfamily.monopol-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.monopol.vl17.p03.monopol","mikro1.monopol.vl17.p06.gewinnmax-monopol"]
  }),
  card({
    id: 'mikro1.monopol.dwl',
    conceptId: 'monopol',
    officialNotation: "y_m, y_{vk}, p(y), MC(y)",
    displayFormula: "$$DWL = \\int_{y_m}^{y_{vk}} [p(y) - MC(y)]\\, dy$$",
    intuition: "Harberger-Dreieck",
    derivationSteps: [
        {
            "label": "DWL",
            "text": "Das Monopol",
            "math": "$$DWL = \\int_{y_m}^{y_{vk}} [p(y) - MC(y)]\\, dy$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monopol","DWL"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: DWL — Harberger-Dreieck",
    relatedTaskFamilies: ["mikro1.taskfamily.monopol-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.monopol.vl17.p03.monopol","mikro1.monopol.vl17.p06.gewinnmax-monopol"]
  }),
  card({
    id: 'mikro1.elast.allg_elastizit_t',
    conceptId: 'elast',
    officialNotation: "\\varepsilon_{A,B}, A, B",
    displayFormula: "$$\\varepsilon_{A,B} = \\frac{dA}{dB} \\cdot \\frac{B}{A}$$",
    intuition: "Relative Änderung A je 1% Änderung B",
    derivationSteps: [
        {
            "label": "Allg. Elastizität",
            "text": "Preiselastizität der Nachfrage",
            "math": "$$\\varepsilon_{A,B} = \\frac{dA}{dB} \\cdot \\frac{B}{A}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu elast","Allg. Elastizität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Allg. Elastizität — Relative Änderung A je 1% Änderung B",
    relatedTaskFamilies: ["mikro1.taskfamily.elast-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.elast.vl05.p21.preiselastizitaet","mikro1.elast.vl05.p24.kreuzpreis"]
  }),
  card({
    id: 'mikro1.elast.einkommenselastizit_t',
    conceptId: 'elast',
    officialNotation: "\\varepsilon_{x,m}, x, m",
    displayFormula: "$$\\varepsilon_{x,m} = \\frac{\\partial x}{\\partial m} \\cdot \\frac{m}{x}$$",
    intuition: ">1 Luxus, <1 notwendig, <0 inferior",
    derivationSteps: [
        {
            "label": "Einkommenselastizität",
            "text": "Preiselastizität der Nachfrage",
            "math": "$$\\varepsilon_{x,m} = \\frac{\\partial x}{\\partial m} \\cdot \\frac{m}{x}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu elast","Einkommenselastizität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Einkommenselastizität — >1 Luxus, <1 notwendig, <0 inferior",
    relatedTaskFamilies: ["mikro1.taskfamily.elast-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.elast.vl05.p21.preiselastizitaet","mikro1.elast.vl05.p24.kreuzpreis"]
  }),
  card({
    id: 'mikro1.elast.preiselastizit_t',
    conceptId: 'elast',
    officialNotation: "\\varepsilon_{x,p}, x, p",
    displayFormula: "$$\\varepsilon_{x,p} = \\frac{\\partial x}{\\partial p} \\cdot \\frac{p}{x}$$",
    intuition: "Normalfall < 0",
    derivationSteps: [
        {
            "label": "Preiselastizität",
            "text": "Preiselastizität der Nachfrage",
            "math": "$$\\varepsilon_{x,p} = \\frac{\\partial x}{\\partial p} \\cdot \\frac{p}{x}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu elast","Preiselastizität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Preiselastizität — Normalfall < 0",
    relatedTaskFamilies: ["mikro1.taskfamily.elast-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.elast.vl05.p21.preiselastizitaet","mikro1.elast.vl05.p24.kreuzpreis"]
  }),
  card({
    id: 'mikro1.elast.kreuzpreiselastizit_t',
    conceptId: 'elast',
    officialNotation: "\\varepsilon_{x_i,p_j}, x_i, p_j",
    displayFormula: "$$\\varepsilon_{x_i,p_j} = \\frac{\\partial x_i}{\\partial p_j} \\cdot \\frac{p_j}{x_i}$$",
    intuition: ">0 Substitute, <0 Komplemente",
    derivationSteps: [
        {
            "label": "Kreuzpreiselastizität",
            "text": "Preiselastizität der Nachfrage",
            "math": "$$\\varepsilon_{x_i,p_j} = \\frac{\\partial x_i}{\\partial p_j} \\cdot \\frac{p_j}{x_i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu elast","Kreuzpreiselastizität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kreuzpreiselastizität — >0 Substitute, <0 Komplemente",
    relatedTaskFamilies: ["mikro1.taskfamily.elast-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.elast.vl05.p21.preiselastizitaet","mikro1.elast.vl05.p24.kreuzpreis"]
  }),
  card({
    id: 'mikro1.normal.normales_gut',
    conceptId: 'normal',
    officialNotation: "x_i, m",
    displayFormula: "$$\\frac{\\partial x_i}{\\partial m} > 0$$",
    intuition: "Mehr Einkommen → mehr Konsum",
    derivationSteps: [
        {
            "label": "Normales Gut",
            "text": "Die Einkommenselastizität der Nachfrage",
            "math": "$$\\frac{\\partial x_i}{\\partial m} > 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu normal","Normales Gut"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Normales Gut — Mehr Einkommen → mehr Konsum",
    relatedTaskFamilies: ["mikro1.taskfamily.normal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.normal.vl05.p06.einkommenselastizitaet","mikro1.normal.vl05.p08.engel-luxus"]
  }),
  card({
    id: 'mikro1.normal.inferiores_gut',
    conceptId: 'normal',
    officialNotation: "x_i, m",
    displayFormula: "$$\\frac{\\partial x_i}{\\partial m} < 0$$",
    intuition: "Mehr Einkommen → weniger Konsum",
    derivationSteps: [
        {
            "label": "Inferiores Gut",
            "text": "Die Einkommenselastizität der Nachfrage",
            "math": "$$\\frac{\\partial x_i}{\\partial m} < 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu normal","Inferiores Gut"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Inferiores Gut — Mehr Einkommen → weniger Konsum",
    relatedTaskFamilies: ["mikro1.taskfamily.normal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.normal.vl05.p06.einkommenselastizitaet","mikro1.normal.vl05.p08.engel-luxus"]
  }),
  card({
    id: 'mikro1.normal.walras_identit_t',
    conceptId: 'normal',
    officialNotation: "p_i, \\partial x_i/\\partial m, m",
    displayFormula: "$$\\sum_i p_i \\cdot \\frac{\\partial x_i}{\\partial m} = 1$$",
    intuition: "Budgetbindung impliziert min. 1 normales Gut",
    derivationSteps: [
        {
            "label": "Walras-Identität",
            "text": "Die Einkommenselastizität der Nachfrage",
            "math": "$$\\sum_i p_i \\cdot \\frac{\\partial x_i}{\\partial m} = 1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu normal","Walras-Identität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Walras-Identität — Budgetbindung impliziert min. 1 normales Gut",
    relatedTaskFamilies: ["mikro1.taskfamily.normal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.normal.vl05.p06.einkommenselastizitaet","mikro1.normal.vl05.p08.engel-luxus"]
  }),
  card({
    id: 'mikro1.hicks.hicks_nachfrage',
    conceptId: 'hicks',
    officialNotation: "h_i, p_1,p_2, \\bar{u}",
    displayFormula: "$$h_i = h_i(p_1, p_2, \\bar{u})$$",
    intuition: "Minimale Ausgaben bei gegebenem Nutzen",
    derivationSteps: [
        {
            "label": "Hicks-Nachfrage",
            "text": "Preisänderungen und die Hickssche Nachfragekurve",
            "math": "$$h_i = h_i(p_1, p_2, \\bar{u})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu hicks","Hicks-Nachfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Hicks-Nachfrage — Minimale Ausgaben bei gegebenem Nutzen",
    relatedTaskFamilies: ["mikro1.taskfamily.hicks-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.hicks.vl06.p10.hicks-preis","mikro1.hicks.vl06.p12.hicks-kurve"]
  }),
  card({
    id: 'mikro1.hicks.identit_t_im_optimum',
    conceptId: 'hicks',
    officialNotation: "h_i, x_i, m",
    displayFormula: "$$h_i(p,\\bar{u}) \\equiv x_i(p,m) \\quad \\text{wenn } m = e(p,\\bar{u})$$",
    intuition: "Wenn m = e(p,ū)",
    derivationSteps: [
        {
            "label": "Identität im Optimum",
            "text": "Preisänderungen und die Hickssche Nachfragekurve",
            "math": "$$h_i(p,\\bar{u}) \\equiv x_i(p,m) \\quad \\text{wenn } m = e(p,\\bar{u})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu hicks","Identität im Optimum"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Identität im Optimum — Wenn m = e(p,ū)",
    relatedTaskFamilies: ["mikro1.taskfamily.hicks-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.hicks.vl06.p10.hicks-preis","mikro1.hicks.vl06.p12.hicks-kurve"]
  }),
  card({
    id: 'mikro1.hicks.hicks_nachfrage_merksatz',
    conceptId: 'hicks',
    officialNotation: "h_i, p_1,p_2, \\bar{u}",
    displayFormula: "$$h_i = h_i(p_1, p_2, \\bar{u})$$",
    intuition: "Minimale Ausgaben bei gegebenem Nutzen",
    derivationSteps: [
        {
            "label": "Hicks-Nachfrage (Merksatz)",
            "text": "Preisänderungen und die Hickssche Nachfragekurve",
            "math": "$$h_i = h_i(p_1, p_2, \\bar{u})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu hicks","Hicks-Nachfrage (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Hicks-Nachfrage (Merksatz) — Minimale Ausgaben bei gegebenem Nutzen",
    relatedTaskFamilies: ["mikro1.taskfamily.hicks-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.hicks.vl06.p10.hicks-preis","mikro1.hicks.vl06.p12.hicks-kurve"]
  }),
  card({
    id: 'mikro1.ausgaben.ausgabenfunktion',
    conceptId: 'ausgaben',
    officialNotation: "e(p,\\bar{u}), h_1,h_2",
    displayFormula: "$$e(p,\\bar{u}) = p_1 h_1(p,\\bar{u}) + p_2 h_2(p,\\bar{u})$$",
    intuition: "Minimale Kosten für Nutzenniveau ū",
    derivationSteps: [
        {
            "label": "Ausgabenfunktion",
            "text": "Ausgabenminimierung",
            "math": "$$e(p,\\bar{u}) = p_1 h_1(p,\\bar{u}) + p_2 h_2(p,\\bar{u})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ausgaben","Ausgabenfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Ausgabenfunktion — Minimale Kosten für Nutzenniveau ū",
    relatedTaskFamilies: ["mikro1.taskfamily.ausgaben-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ausgaben.vl06.p02.ausgabenmin","mikro1.ausgaben.vl06.p07.nutzen-vs-ausgaben"]
  }),
  card({
    id: 'mikro1.ausgaben.beispiel_cd_u_x_x',
    conceptId: 'ausgaben',
    officialNotation: "e, \\bar{u}, p_1, p_2",
    displayFormula: "$$e = 2\\sqrt{\\bar{u}\\, p_1 p_2}$$",
    intuition: "Für symmetrische CD-Funktion",
    derivationSteps: [
        {
            "label": "Beispiel CD (u=x₁x₂)",
            "text": "Ausgabenminimierung",
            "math": "$$e = 2\\sqrt{\\bar{u}\\, p_1 p_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ausgaben","Beispiel CD (u=x₁x₂)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Beispiel CD (u=x₁x₂) — Für symmetrische CD-Funktion",
    relatedTaskFamilies: ["mikro1.taskfamily.ausgaben-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ausgaben.vl06.p02.ausgabenmin","mikro1.ausgaben.vl06.p07.nutzen-vs-ausgaben"]
  }),
  card({
    id: 'mikro1.ausgaben.ausgabenfunktion_merksatz',
    conceptId: 'ausgaben',
    officialNotation: "e(p,\\bar{u}), h_1,h_2",
    displayFormula: "$$e(p,\\bar{u}) = p_1 h_1(p,\\bar{u}) + p_2 h_2(p,\\bar{u})$$",
    intuition: "Minimale Kosten für Nutzenniveau ū",
    derivationSteps: [
        {
            "label": "Ausgabenfunktion (Merksatz)",
            "text": "Ausgabenminimierung",
            "math": "$$e(p,\\bar{u}) = p_1 h_1(p,\\bar{u}) + p_2 h_2(p,\\bar{u})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ausgaben","Ausgabenfunktion (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Ausgabenfunktion (Merksatz) — Minimale Kosten für Nutzenniveau ū",
    relatedTaskFamilies: ["mikro1.taskfamily.ausgaben-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ausgaben.vl06.p02.ausgabenmin","mikro1.ausgaben.vl06.p07.nutzen-vs-ausgaben"]
  }),
  card({
    id: 'mikro1.cv_ev.cv',
    conceptId: 'cv_ev',
    officialNotation: "CV, e, p^0, p^1, u^0",
    displayFormula: "$$CV = e(p^0, \\bar{u}^0) - e(p^1, \\bar{u}^0)$$",
    intuition: "Altes Nutzenniveau als Referenz",
    derivationSteps: [
        {
            "label": "CV",
            "text": "Die Kompensierende Variation (CV)",
            "math": "$$CV = e(p^0, \\bar{u}^0) - e(p^1, \\bar{u}^0)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu cv_ev","CV"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: CV — Altes Nutzenniveau als Referenz",
    relatedTaskFamilies: ["mikro1.taskfamily.cv_ev-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.cv_ev.vl10.p03.cv","mikro1.cv_ev.vl10.p08.ev"]
  }),
  card({
    id: 'mikro1.cv_ev.ev',
    conceptId: 'cv_ev',
    officialNotation: "EV, e, p^0, p^1, u^1",
    displayFormula: "$$EV = e(p^0, \\bar{u}^1) - e(p^1, \\bar{u}^1)$$",
    intuition: "Neues Nutzenniveau als Referenz",
    derivationSteps: [
        {
            "label": "EV",
            "text": "Die Kompensierende Variation (CV)",
            "math": "$$EV = e(p^0, \\bar{u}^1) - e(p^1, \\bar{u}^1)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu cv_ev","EV"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: EV — Neues Nutzenniveau als Referenz",
    relatedTaskFamilies: ["mikro1.taskfamily.cv_ev-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.cv_ev.vl10.p03.cv","mikro1.cv_ev.vl10.p08.ev"]
  }),
  card({
    id: 'mikro1.cv_ev.kr',
    conceptId: 'cv_ev',
    officialNotation: "x_1(p), p^0, p^1",
    displayFormula: "$$\\Delta KR = \\int_{p_1^1}^{p_1^0} x_1(p_1, p_2, m)\\, dp_1$$",
    intuition: "Marshallsche Nachfrage, Approximation",
    derivationSteps: [
        {
            "label": "ΔKR",
            "text": "Die Kompensierende Variation (CV)",
            "math": "$$\\Delta KR = \\int_{p_1^1}^{p_1^0} x_1(p_1, p_2, m)\\, dp_1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu cv_ev","ΔKR"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: ΔKR — Marshallsche Nachfrage, Approximation",
    relatedTaskFamilies: ["mikro1.taskfamily.cv_ev-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.cv_ev.vl10.p03.cv","mikro1.cv_ev.vl10.p08.ev"]
  }),
  card({
    id: 'mikro1.arbeit.budgetgerade_arbeit',
    conceptId: 'arbeit',
    officialNotation: "x, w, T, p, f",
    displayFormula: "$$x = \\frac{wT}{p} - \\frac{w}{p}\\,f$$",
    intuition: "Freizeit-Konsum-Tradeoff",
    derivationSteps: [
        {
            "label": "Budgetgerade (Arbeit)",
            "text": "Arbeitsangebot",
            "math": "$$x = \\frac{wT}{p} - \\frac{w}{p}\\,f$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu arbeit","Budgetgerade (Arbeit)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Budgetgerade (Arbeit) — Freizeit-Konsum-Tradeoff",
    relatedTaskFamilies: ["mikro1.taskfamily.arbeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.arbeit.vl09.p03.arbeitsangebot","mikro1.arbeit.vl09.p11.lohnaenderung"]
  }),
  card({
    id: 'mikro1.arbeit.slutsky_freizeit',
    conceptId: 'arbeit',
    officialNotation: "f, w, f^H, l",
    displayFormula: "$$\\frac{df}{dw} = \\frac{\\partial f^H}{\\partial w} + \\frac{\\partial f}{\\partial m}\\, l$$",
    intuition: "SE (neg.) + EE (pos.) auf Freizeit",
    derivationSteps: [
        {
            "label": "Slutsky (Freizeit)",
            "text": "Arbeitsangebot",
            "math": "$$\\frac{df}{dw} = \\frac{\\partial f^H}{\\partial w} + \\frac{\\partial f}{\\partial m}\\, l$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu arbeit","Slutsky (Freizeit)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Slutsky (Freizeit) — SE (neg.) + EE (pos.) auf Freizeit",
    relatedTaskFamilies: ["mikro1.taskfamily.arbeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.arbeit.vl09.p03.arbeitsangebot","mikro1.arbeit.vl09.p11.lohnaenderung"]
  }),
  card({
    id: 'mikro1.arbeit.budgetgerade_arbeit_merksatz',
    conceptId: 'arbeit',
    officialNotation: "x, w, T, p, f",
    displayFormula: "$$x = \\frac{wT}{p} - \\frac{w}{p}\\,f$$",
    intuition: "Freizeit-Konsum-Tradeoff",
    derivationSteps: [
        {
            "label": "Budgetgerade (Arbeit) (Merksatz)",
            "text": "Arbeitsangebot",
            "math": "$$x = \\frac{wT}{p} - \\frac{w}{p}\\,f$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu arbeit","Budgetgerade (Arbeit) (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Budgetgerade (Arbeit) (Merksatz) — Freizeit-Konsum-Tradeoff",
    relatedTaskFamilies: ["mikro1.taskfamily.arbeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.arbeit.vl09.p03.arbeitsangebot","mikro1.arbeit.vl09.p11.lohnaenderung"]
  }),
  card({
    id: 'mikro1.gk_dk.grenzkosten',
    conceptId: 'gk_dk',
    officialNotation: "MC, C(y), y",
    displayFormula: "$$MC(y) = \\frac{\\partial C(y)}{\\partial y}$$",
    intuition: "Kosten der letzten Einheit",
    derivationSteps: [
        {
            "label": "Grenzkosten",
            "text": "Grenzkosten versus Durchschnittskosten",
            "math": "$$MC(y) = \\frac{\\partial C(y)}{\\partial y}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gk_dk","Grenzkosten"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Grenzkosten — Kosten der letzten Einheit",
    relatedTaskFamilies: ["mikro1.taskfamily.gk_dk-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.gk_dk.vl15.p06.gk-vs-dk","mikro1.gk_dk.vl15.p09.kurz-lang-gk"]
  }),
  card({
    id: 'mikro1.gk_dk.st_ckkosten',
    conceptId: 'gk_dk',
    officialNotation: "AC, C(y), y",
    displayFormula: "$$AC(y) = \\frac{C(y)}{y}$$",
    intuition: "Durchschnittliche Kosten pro Einheit",
    derivationSteps: [
        {
            "label": "Stückkosten",
            "text": "Grenzkosten versus Durchschnittskosten",
            "math": "$$AC(y) = \\frac{C(y)}{y}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gk_dk","Stückkosten"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Stückkosten — Durchschnittliche Kosten pro Einheit",
    relatedTaskFamilies: ["mikro1.taskfamily.gk_dk-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.gk_dk.vl15.p06.gk-vs-dk","mikro1.gk_dk.vl15.p09.kurz-lang-gk"]
  }),
  card({
    id: 'mikro1.gk_dk.kostenelastizit_t',
    conceptId: 'gk_dk',
    officialNotation: "\\varepsilon_{C,y}, k",
    displayFormula: "$$\\varepsilon_{C,y} = \\frac{MC}{AC} = \\frac{1}{k}$$",
    intuition: "Kehrwert der Skalenelastizität",
    derivationSteps: [
        {
            "label": "Kostenelastizität",
            "text": "Grenzkosten versus Durchschnittskosten",
            "math": "$$\\varepsilon_{C,y} = \\frac{MC}{AC} = \\frac{1}{k}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gk_dk","Kostenelastizität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kostenelastizität — Kehrwert der Skalenelastizität",
    relatedTaskFamilies: ["mikro1.taskfamily.gk_dk-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.gk_dk.vl15.p06.gk-vs-dk","mikro1.gk_dk.vl15.p09.kurz-lang-gk"]
  }),
  card({
    id: 'mikro1.kmm.kmm',
    conceptId: 'kmm',
    officialNotation: "x_i, n, \\mathbb{R}^n",
    displayFormula: "$$\\text{KMM} = \\{\\,x \\in \\mathbb{R}^n \\mid x_i \\geq 0 \\;\\forall i\\,\\}$$",
    intuition: "Definitionsmenge aller konsumierbaren Bündel",
    derivationSteps: [
        {
            "label": "KMM",
            "text": "Konsummöglichkeiten",
            "math": "$$\\text{KMM} = \\{\\,x \\in \\mathbb{R}^n \\mid x_i \\geq 0 \\;\\forall i\\,\\}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kmm","KMM"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: KMM — Definitionsmenge aller konsumierbaren Bündel",
    relatedTaskFamilies: ["mikro1.taskfamily.kmm-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.kmm.vl01.p15.konsummoeglichkeiten","mikro1.kmm.vl01.p16.budgetmenge"]
  }),
  card({
    id: 'mikro1.kmm.konvexkombination',
    conceptId: 'kmm',
    officialNotation: "c, a,\\,b, \\lambda",
    displayFormula: "$$c = \\lambda a + (1-\\lambda) b, \\quad 0 \\leq \\lambda \\leq 1$$",
    intuition: "Mischbündel zweier Bündel a, b mit λ ∈ [0,1]",
    derivationSteps: [
        {
            "label": "Konvexkombination",
            "text": "Konsummöglichkeiten",
            "math": "$$c = \\lambda a + (1-\\lambda) b, \\quad 0 \\leq \\lambda \\leq 1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kmm","Konvexkombination"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Konvexkombination — Mischbündel zweier Bündel a, b mit λ ∈ [0,1]",
    relatedTaskFamilies: ["mikro1.taskfamily.kmm-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.kmm.vl01.p15.konsummoeglichkeiten","mikro1.kmm.vl01.p16.budgetmenge"]
  }),
  card({
    id: 'mikro1.kmm.kmm_merksatz',
    conceptId: 'kmm',
    officialNotation: "x_i, n, \\mathbb{R}^n",
    displayFormula: "$$\\text{KMM} = \\{\\,x \\in \\mathbb{R}^n \\mid x_i \\geq 0 \\;\\forall i\\,\\}$$",
    intuition: "Definitionsmenge aller konsumierbaren Bündel",
    derivationSteps: [
        {
            "label": "KMM (Merksatz)",
            "text": "Konsummöglichkeiten",
            "math": "$$\\text{KMM} = \\{\\,x \\in \\mathbb{R}^n \\mid x_i \\geq 0 \\;\\forall i\\,\\}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kmm","KMM (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: KMM (Merksatz) — Definitionsmenge aller konsumierbaren Bündel",
    relatedTaskFamilies: ["mikro1.taskfamily.kmm-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.kmm.vl01.p15.konsummoeglichkeiten","mikro1.kmm.vl01.p16.budgetmenge"]
  }),
  card({
    id: 'mikro1.indiff.indifferenzkurve',
    conceptId: 'indiff',
    officialNotation: "u(x_1,x_2), \\bar{u}",
    displayFormula: "$$\\{\\,(x_1, x_2) \\in \\mathbb{R}^2_+ \\mid u(x_1, x_2) = \\bar{u}\\,\\}$$",
    intuition: "Niveaumenge für konstantes ū",
    derivationSteps: [
        {
            "label": "Indifferenzkurve",
            "text": "Indifferenzkurven",
            "math": "$$\\{\\,(x_1, x_2) \\in \\mathbb{R}^2_+ \\mid u(x_1, x_2) = \\bar{u}\\,\\}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu indiff","Indifferenzkurve"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Indifferenzkurve — Niveaumenge für konstantes ū",
    relatedTaskFamilies: ["mikro1.taskfamily.indiff-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.indiff.vl02.p07.indifferenzkurven","mikro1.indiff.vl02.p08.eigenschaften"]
  }),
  card({
    id: 'mikro1.indiff.beispiel_cd',
    conceptId: 'indiff',
    officialNotation: "x_2, \\bar{u}, x_1",
    displayFormula: "$$x_2 = \\frac{\\bar{u}}{x_1}$$",
    intuition: "Explizite Form bei u = x₁·x₂",
    derivationSteps: [
        {
            "label": "Beispiel (CD)",
            "text": "Indifferenzkurven",
            "math": "$$x_2 = \\frac{\\bar{u}}{x_1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu indiff","Beispiel (CD)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Beispiel (CD) — Explizite Form bei u = x₁·x₂",
    relatedTaskFamilies: ["mikro1.taskfamily.indiff-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.indiff.vl02.p07.indifferenzkurven","mikro1.indiff.vl02.p08.eigenschaften"]
  }),
  card({
    id: 'mikro1.indiff.indifferenzkurve_merksatz',
    conceptId: 'indiff',
    officialNotation: "u(x_1,x_2), \\bar{u}",
    displayFormula: "$$\\{\\,(x_1, x_2) \\in \\mathbb{R}^2_+ \\mid u(x_1, x_2) = \\bar{u}\\,\\}$$",
    intuition: "Niveaumenge für konstantes ū",
    derivationSteps: [
        {
            "label": "Indifferenzkurve (Merksatz)",
            "text": "Indifferenzkurven",
            "math": "$$\\{\\,(x_1, x_2) \\in \\mathbb{R}^2_+ \\mid u(x_1, x_2) = \\bar{u}\\,\\}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu indiff","Indifferenzkurve (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Indifferenzkurve (Merksatz) — Niveaumenge für konstantes ū",
    relatedTaskFamilies: ["mikro1.taskfamily.indiff-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.indiff.vl02.p07.indifferenzkurven","mikro1.indiff.vl02.p08.eigenschaften"]
  }),
  card({
    id: 'mikro1.ordinal.positiv_monotone_transformation',
    conceptId: 'ordinal',
    officialNotation: "ordinal",
    displayFormula: "$$v = f(u(\\mathbf{x})),\\quad f' > 0$$",
    intuition: "Äquivalente Nutzendarstellung",
    derivationSteps: [
        {
            "label": "Positiv-monotone Transformation",
            "text": "Nutzen als ordinales Konzept",
            "math": "$$v = f(u(\\mathbf{x})),\\quad f' > 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ordinal","Positiv-monotone Transformation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Positiv-monotone Transformation — Äquivalente Nutzendarstellung",
    relatedTaskFamilies: ["mikro1.taskfamily.ordinal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ordinal.vl02.p10.ordinal","mikro1.ordinal.vl02.p04.nutzenfunktionen"]
  }),
  card({
    id: 'mikro1.ordinal.grs_invariant',
    conceptId: 'ordinal',
    officialNotation: "MU_{1,v}, MU_{2,v}, f'",
    displayFormula: "$$\\frac{MU_{1,v}}{MU_{2,v}} = \\frac{f' \\cdot MU_{1,u}}{f' \\cdot MU_{2,u}} = \\frac{MU_{1,u}}{MU_{2,u}}$$",
    intuition: "Kettenregel: f kürzt sich heraus",
    derivationSteps: [
        {
            "label": "GRS invariant",
            "text": "Nutzen als ordinales Konzept",
            "math": "$$\\frac{MU_{1,v}}{MU_{2,v}} = \\frac{f' \\cdot MU_{1,u}}{f' \\cdot MU_{2,u}} = \\frac{MU_{1,u}}{MU_{2,u}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ordinal","GRS invariant"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GRS invariant — Kettenregel: f kürzt sich heraus",
    relatedTaskFamilies: ["mikro1.taskfamily.ordinal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ordinal.vl02.p10.ordinal","mikro1.ordinal.vl02.p04.nutzenfunktionen"]
  }),
  card({
    id: 'mikro1.ordinal.positiv_monotone_transformation_',
    conceptId: 'ordinal',
    officialNotation: "",
    displayFormula: "$$v = f(u(\\mathbf{x})),\\quad f' > 0$$",
    intuition: "Äquivalente Nutzendarstellung",
    derivationSteps: [
        {
            "label": "Positiv-monotone Transformation (Merksatz)",
            "text": "Nutzen als ordinales Konzept",
            "math": "$$v = f(u(\\mathbf{x})),\\quad f' > 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ordinal","Positiv-monotone Transformation (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Positiv-monotone Transformation (Merksatz) — Äquivalente Nutzendarstellung",
    relatedTaskFamilies: ["mikro1.taskfamily.ordinal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ordinal.vl02.p10.ordinal","mikro1.ordinal.vl02.p04.nutzenfunktionen"]
  }),
  card({
    id: 'mikro1.grs.grs_definition',
    conceptId: 'grs',
    officialNotation: "\\left|\\tfrac{dx_2}{dx_1}\\right|, \\bar{u}",
    displayFormula: "$$GRS = \\left|\\frac{dx_2}{dx_1}\\right|_{\\,u = \\bar{u}}$$",
    intuition: "Betrag der Steigung der Indifferenzkurve",
    derivationSteps: [
        {
            "label": "GRS Definition",
            "text": "Grenzrate der Substitution",
            "math": "$$GRS = \\left|\\frac{dx_2}{dx_1}\\right|_{\\,u = \\bar{u}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu grs","GRS Definition"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GRS Definition — Betrag der Steigung der Indifferenzkurve",
    relatedTaskFamilies: ["mikro1.taskfamily.grs-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.grs.vl02.p12.grs","mikro1.grs.vl02.p13.grs2"]
  }),
  card({
    id: 'mikro1.grs.grs_via_grenznutzen',
    conceptId: 'grs',
    officialNotation: "MU_1, MU_2",
    displayFormula: "$$GRS = \\frac{MU_1}{MU_2} = \\frac{\\partial u/\\partial x_1}{\\partial u/\\partial x_2}$$",
    intuition: "Verhältnis der partiellen Ableitungen",
    derivationSteps: [
        {
            "label": "GRS via Grenznutzen",
            "text": "Grenzrate der Substitution",
            "math": "$$GRS = \\frac{MU_1}{MU_2} = \\frac{\\partial u/\\partial x_1}{\\partial u/\\partial x_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu grs","GRS via Grenznutzen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GRS via Grenznutzen — Verhältnis der partiellen Ableitungen",
    relatedTaskFamilies: ["mikro1.taskfamily.grs-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.grs.vl02.p12.grs","mikro1.grs.vl02.p13.grs2"]
  }),
  card({
    id: 'mikro1.grs.grs_definition_merksatz',
    conceptId: 'grs',
    officialNotation: "\\left|\\tfrac{dx_2}{dx_1}\\right|, \\bar{u}",
    displayFormula: "$$GRS = \\left|\\frac{dx_2}{dx_1}\\right|_{\\,u = \\bar{u}}$$",
    intuition: "Betrag der Steigung der Indifferenzkurve",
    derivationSteps: [
        {
            "label": "GRS Definition (Merksatz)",
            "text": "Grenzrate der Substitution",
            "math": "$$GRS = \\left|\\frac{dx_2}{dx_1}\\right|_{\\,u = \\bar{u}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu grs","GRS Definition (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GRS Definition (Merksatz) — Betrag der Steigung der Indifferenzkurve",
    relatedTaskFamilies: ["mikro1.taskfamily.grs-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.grs.vl02.p12.grs","mikro1.grs.vl02.p13.grs2"]
  }),
  card({
    id: 'mikro1.cobbd.cd_nutzenfunktion',
    conceptId: 'cobbd',
    officialNotation: "\\alpha, x_1, x_2",
    displayFormula: "$$u(x_1, x_2) = x_1^\\alpha \\cdot x_2^{1-\\alpha}, \\quad 0 < \\alpha < 1$$",
    intuition: "0 < α < 1",
    derivationSteps: [
        {
            "label": "CD-Nutzenfunktion",
            "text": "Marshallsche Nachfrage bei Cobb-Douglas Nutzenfunktion",
            "math": "$$u(x_1, x_2) = x_1^\\alpha \\cdot x_2^{1-\\alpha}, \\quad 0 < \\alpha < 1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu cobbd","CD-Nutzenfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: CD-Nutzenfunktion — 0 < α < 1",
    relatedTaskFamilies: ["mikro1.taskfamily.cobbd-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.cobbd.vl04.p09.marshall-cd","mikro1.cobbd.vl04.p04.haushaltsoptimum"]
  }),
  card({
    id: 'mikro1.cobbd.nachfrage_x',
    conceptId: 'cobbd',
    officialNotation: "x_1^*, m, p_1, \\alpha",
    displayFormula: "$$x_1^* = \\frac{\\alpha m}{p_1}$$",
    intuition: "Konstanter Budgetanteil α",
    derivationSteps: [
        {
            "label": "Nachfrage x₁*",
            "text": "Marshallsche Nachfrage bei Cobb-Douglas Nutzenfunktion",
            "math": "$$x_1^* = \\frac{\\alpha m}{p_1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu cobbd","Nachfrage x₁*"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nachfrage x₁* — Konstanter Budgetanteil α",
    relatedTaskFamilies: ["mikro1.taskfamily.cobbd-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.cobbd.vl04.p09.marshall-cd","mikro1.cobbd.vl04.p04.haushaltsoptimum"]
  }),
  card({
    id: 'mikro1.cobbd.nachfrage_x',
    conceptId: 'cobbd',
    officialNotation: "x_2^*, \\alpha, m, p_2",
    displayFormula: "$$x_2^* = \\frac{(1-\\alpha) m}{p_2}$$",
    intuition: "Konstanter Budgetanteil (1−α)",
    derivationSteps: [
        {
            "label": "Nachfrage x₂*",
            "text": "Marshallsche Nachfrage bei Cobb-Douglas Nutzenfunktion",
            "math": "$$x_2^* = \\frac{(1-\\alpha) m}{p_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu cobbd","Nachfrage x₂*"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nachfrage x₂* — Konstanter Budgetanteil (1−α)",
    relatedTaskFamilies: ["mikro1.taskfamily.cobbd-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.cobbd.vl04.p09.marshall-cd","mikro1.cobbd.vl04.p04.haushaltsoptimum"]
  }),
  card({
    id: 'mikro1.ces_u.ces_nutzenfunktion',
    conceptId: 'ces_u',
    officialNotation: "\\rho, x_1,x_2",
    displayFormula: "$$u(x_1, x_2) = \\left(x_1^\\rho + x_2^\\rho\\right)^{1/\\rho}, \\quad \\rho < 1$$",
    intuition: "ρ < 1, symmetrische Form",
    derivationSteps: [
        {
            "label": "CES Nutzenfunktion",
            "text": "Die CES Nutzenfunktion",
            "math": "$$u(x_1, x_2) = \\left(x_1^\\rho + x_2^\\rho\\right)^{1/\\rho}, \\quad \\rho < 1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ces_u","CES Nutzenfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: CES Nutzenfunktion — ρ < 1, symmetrische Form",
    relatedTaskFamilies: ["mikro1.taskfamily.ces_u-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ces_u.vl03.p08.ces","mikro1.ces_u.vl04.p11.ces-max"]
  }),
  card({
    id: 'mikro1.ces_u.substitutionselastizit_t',
    conceptId: 'ces_u',
    officialNotation: "\\sigma, \\rho",
    displayFormula: "$$\\sigma = \\frac{1}{1-\\rho}$$",
    intuition: "Maß für Substituierbarkeit",
    derivationSteps: [
        {
            "label": "Substitutionselastizität",
            "text": "Die CES Nutzenfunktion",
            "math": "$$\\sigma = \\frac{1}{1-\\rho}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ces_u","Substitutionselastizität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Substitutionselastizität — Maß für Substituierbarkeit",
    relatedTaskFamilies: ["mikro1.taskfamily.ces_u-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ces_u.vl03.p08.ces","mikro1.ces_u.vl04.p11.ces-max"]
  }),
  card({
    id: 'mikro1.ces_u.ces_nachfrage',
    conceptId: 'ces_u',
    officialNotation: "x_i^*, p_i, \\sigma, m",
    displayFormula: "$$x_i^* = \\frac{p_i^{-\\sigma} m}{p_1^{1-\\sigma} + p_2^{1-\\sigma}}$$",
    intuition: "Allgemeine Form",
    derivationSteps: [
        {
            "label": "CES Nachfrage",
            "text": "Die CES Nutzenfunktion",
            "math": "$$x_i^* = \\frac{p_i^{-\\sigma} m}{p_1^{1-\\sigma} + p_2^{1-\\sigma}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ces_u","CES Nachfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: CES Nachfrage — Allgemeine Form",
    relatedTaskFamilies: ["mikro1.taskfamily.ces_u-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.ces_u.vl03.p08.ces","mikro1.ces_u.vl04.p11.ces-max"]
  }),
  card({
    id: 'mikro1.homothet.homothetie_bedingung',
    conceptId: 'homothet',
    officialNotation: "GRS, x_2/x_1",
    displayFormula: "$$GRS(x_1, x_2) = f\\!\\left(\\frac{x_2}{x_1}\\right)$$",
    intuition: "GRS hängt nur von Ratio ab",
    derivationSteps: [
        {
            "label": "Homothetie-Bedingung",
            "text": "Homothetische Nutzenfunktionen",
            "math": "$$GRS(x_1, x_2) = f\\!\\left(\\frac{x_2}{x_1}\\right)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu homothet","Homothetie-Bedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Homothetie-Bedingung — GRS hängt nur von Ratio ab",
    relatedTaskFamilies: ["mikro1.taskfamily.homothet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.homothet.vl03.p10.homothetisch","mikro1.homothet.vl03.p19.haushalt-homothet"]
  }),
  card({
    id: 'mikro1.homothet.einkommenselastizit_t',
    conceptId: 'homothet',
    officialNotation: "\\varepsilon_{x,m}, x, m",
    displayFormula: "$$\\varepsilon_{x,m} = 1$$",
    intuition: "Für alle Güter bei homothetischen Präferenzen",
    derivationSteps: [
        {
            "label": "Einkommenselastizität",
            "text": "Homothetische Nutzenfunktionen",
            "math": "$$\\varepsilon_{x,m} = 1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu homothet","Einkommenselastizität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Einkommenselastizität — Für alle Güter bei homothetischen Präferenzen",
    relatedTaskFamilies: ["mikro1.taskfamily.homothet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.homothet.vl03.p10.homothetisch","mikro1.homothet.vl03.p19.haushalt-homothet"]
  }),
  card({
    id: 'mikro1.homothet.homothetie_bedingung_merksatz',
    conceptId: 'homothet',
    officialNotation: "GRS, x_2/x_1",
    displayFormula: "$$GRS(x_1, x_2) = f\\!\\left(\\frac{x_2}{x_1}\\right)$$",
    intuition: "GRS hängt nur von Ratio ab",
    derivationSteps: [
        {
            "label": "Homothetie-Bedingung (Merksatz)",
            "text": "Homothetische Nutzenfunktionen",
            "math": "$$GRS(x_1, x_2) = f\\!\\left(\\frac{x_2}{x_1}\\right)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu homothet","Homothetie-Bedingung (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Homothetie-Bedingung (Merksatz) — GRS hängt nur von Ratio ab",
    relatedTaskFamilies: ["mikro1.taskfamily.homothet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.homothet.vl03.p10.homothetisch","mikro1.homothet.vl03.p19.haushalt-homothet"]
  }),
  card({
    id: 'mikro1.hausopt.tangentialbedingung',
    conceptId: 'hausopt',
    officialNotation: "MU_1, MU_2, p_1, p_2",
    displayFormula: "$$\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$$",
    intuition: "GRS = relatives Preisverhältnis",
    derivationSteps: [
        {
            "label": "Tangentialbedingung",
            "text": "Haushaltsoptimum",
            "math": "$$\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu hausopt","Tangentialbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Tangentialbedingung — GRS = relatives Preisverhältnis",
    relatedTaskFamilies: ["mikro1.taskfamily.hausopt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.hausopt.vl03.p13.haushaltsoptimum","mikro1.hausopt.vl04.p02.graphisch"]
  }),
  card({
    id: 'mikro1.hausopt.budgetgleichung',
    conceptId: 'hausopt',
    officialNotation: "p_1,p_2, x_1,x_2, m",
    displayFormula: "$$p_1 x_1 + p_2 x_2 = m$$",
    intuition: "2. Gleichung zur Bestimmung des Optimums",
    derivationSteps: [
        {
            "label": "Budgetgleichung",
            "text": "Haushaltsoptimum",
            "math": "$$p_1 x_1 + p_2 x_2 = m$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu hausopt","Budgetgleichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Budgetgleichung — 2. Gleichung zur Bestimmung des Optimums",
    relatedTaskFamilies: ["mikro1.taskfamily.hausopt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.hausopt.vl03.p13.haushaltsoptimum","mikro1.hausopt.vl04.p02.graphisch"]
  }),
  card({
    id: 'mikro1.hausopt.tangentialbedingung_merksatz',
    conceptId: 'hausopt',
    officialNotation: "MU_1, MU_2, p_1, p_2",
    displayFormula: "$$\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$$",
    intuition: "GRS = relatives Preisverhältnis",
    derivationSteps: [
        {
            "label": "Tangentialbedingung (Merksatz)",
            "text": "Haushaltsoptimum",
            "math": "$$\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu hausopt","Tangentialbedingung (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Tangentialbedingung (Merksatz) — GRS = relatives Preisverhältnis",
    relatedTaskFamilies: ["mikro1.taskfamily.hausopt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.hausopt.vl03.p13.haushaltsoptimum","mikro1.hausopt.vl04.p02.graphisch"]
  }),
  card({
    id: 'mikro1.shephard.shephards_lemma',
    conceptId: 'shephard',
    officialNotation: "h_i, e, p_i",
    displayFormula: "$$h_i = \\frac{\\partial e}{\\partial p_i}$$",
    intuition: "Hickssche Nachfrage aus Ausgabenfunktion",
    derivationSteps: [
        {
            "label": "Shephards Lemma",
            "text": "Die Ausgabenfunktion und Shephards Lemma",
            "math": "$$h_i = \\frac{\\partial e}{\\partial p_i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu shephard","Shephards Lemma"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Shephards Lemma — Hickssche Nachfrage aus Ausgabenfunktion",
    relatedTaskFamilies: ["mikro1.taskfamily.shephard-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.shephard.vl06.p14.ausgaben-shephard","mikro1.shephard.vl06.p15.shephard-beweis"]
  }),
  card({
    id: 'mikro1.shephard.konkavit_t',
    conceptId: 'shephard',
    officialNotation: "e, p_i, h_i",
    displayFormula: "$$\\frac{\\partial^2 e}{\\partial p_i^2} = \\frac{\\partial h_i}{\\partial p_i} \\leq 0$$",
    intuition: "Hickssche Nachfrage fällt im eigenen Preis",
    derivationSteps: [
        {
            "label": "Konkavität",
            "text": "Die Ausgabenfunktion und Shephards Lemma",
            "math": "$$\\frac{\\partial^2 e}{\\partial p_i^2} = \\frac{\\partial h_i}{\\partial p_i} \\leq 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu shephard","Konkavität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Konkavität — Hickssche Nachfrage fällt im eigenen Preis",
    relatedTaskFamilies: ["mikro1.taskfamily.shephard-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.shephard.vl06.p14.ausgaben-shephard","mikro1.shephard.vl06.p15.shephard-beweis"]
  }),
  card({
    id: 'mikro1.shephard.shephards_lemma_merksatz',
    conceptId: 'shephard',
    officialNotation: "h_i, e, p_i",
    displayFormula: "$$h_i = \\frac{\\partial e}{\\partial p_i}$$",
    intuition: "Hickssche Nachfrage aus Ausgabenfunktion",
    derivationSteps: [
        {
            "label": "Shephards Lemma (Merksatz)",
            "text": "Die Ausgabenfunktion und Shephards Lemma",
            "math": "$$h_i = \\frac{\\partial e}{\\partial p_i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu shephard","Shephards Lemma (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Shephards Lemma (Merksatz) — Hickssche Nachfrage aus Ausgabenfunktion",
    relatedTaskFamilies: ["mikro1.taskfamily.shephard-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.shephard.vl06.p14.ausgaben-shephard","mikro1.shephard.vl06.p15.shephard-beweis"]
  }),
  card({
    id: 'mikro1.indnutzen.indirekte_nutzenfunktion',
    conceptId: 'indnutzen',
    officialNotation: "v(p,m), x_1,x_2",
    displayFormula: "$$v(p,m) = u\\bigl[x_1(p,m),\\; x_2(p,m)\\bigr]$$",
    intuition: "Max. Nutzen als Funktion von Preisen/Einkommen",
    derivationSteps: [
        {
            "label": "Indirekte Nutzenfunktion",
            "text": "Die Indirekte Nutzenfunktion und Roys Identität",
            "math": "$$v(p,m) = u\\bigl[x_1(p,m),\\; x_2(p,m)\\bigr]$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu indnutzen","Indirekte Nutzenfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Indirekte Nutzenfunktion — Max. Nutzen als Funktion von Preisen/Einkommen",
    relatedTaskFamilies: ["mikro1.taskfamily.indnutzen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.indnutzen.vl06.p19.indirekt","mikro1.indnutzen.vl06.p20.roy-intuition"]
  }),
  card({
    id: 'mikro1.indnutzen.roys_identit_t',
    conceptId: 'indnutzen',
    officialNotation: "x_i, \\partial v/\\partial p_i, \\partial v/\\partial m",
    displayFormula: "$$x_i = -\\frac{\\partial v/\\partial p_i}{\\partial v/\\partial m}$$",
    intuition: "Marshall-Nachfrage aus indirekter NF",
    derivationSteps: [
        {
            "label": "Roys Identität",
            "text": "Die Indirekte Nutzenfunktion und Roys Identität",
            "math": "$$x_i = -\\frac{\\partial v/\\partial p_i}{\\partial v/\\partial m}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu indnutzen","Roys Identität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Roys Identität — Marshall-Nachfrage aus indirekter NF",
    relatedTaskFamilies: ["mikro1.taskfamily.indnutzen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.indnutzen.vl06.p19.indirekt","mikro1.indnutzen.vl06.p20.roy-intuition"]
  }),
  card({
    id: 'mikro1.indnutzen.indirekte_nutzenfunktion_merksat',
    conceptId: 'indnutzen',
    officialNotation: "v(p,m), x_1,x_2",
    displayFormula: "$$v(p,m) = u\\bigl[x_1(p,m),\\; x_2(p,m)\\bigr]$$",
    intuition: "Max. Nutzen als Funktion von Preisen/Einkommen",
    derivationSteps: [
        {
            "label": "Indirekte Nutzenfunktion (Merksatz)",
            "text": "Die Indirekte Nutzenfunktion und Roys Identität",
            "math": "$$v(p,m) = u\\bigl[x_1(p,m),\\; x_2(p,m)\\bigr]$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu indnutzen","Indirekte Nutzenfunktion (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Indirekte Nutzenfunktion (Merksatz) — Max. Nutzen als Funktion von Preisen/Einkommen",
    relatedTaskFamilies: ["mikro1.taskfamily.indnutzen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.indnutzen.vl06.p19.indirekt","mikro1.indnutzen.vl06.p20.roy-intuition"]
  }),
  card({
    id: 'mikro1.lambda.lagrange_multiplikator',
    conceptId: 'lambda',
    officialNotation: "\\lambda, v, MU_i, p_i",
    displayFormula: "$$\\lambda = \\frac{\\partial v}{\\partial m} = \\frac{MU_i}{p_i}$$",
    intuition: "Grenznutzen des Einkommens",
    derivationSteps: [
        {
            "label": "Lagrange-Multiplikator",
            "text": "Interpretation des Lagrange-Multiplikators λ",
            "math": "$$\\lambda = \\frac{\\partial v}{\\partial m} = \\frac{MU_i}{p_i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lambda","Lagrange-Multiplikator"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lagrange-Multiplikator — Grenznutzen des Einkommens",
    relatedTaskFamilies: ["mikro1.taskfamily.lambda-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.lambda.vl06.p23.lambda","mikro1.lambda.vl02.p17.nebenbedingung"]
  }),
  card({
    id: 'mikro1.lambda.lagrange_multiplikator_merksatz',
    conceptId: 'lambda',
    officialNotation: "\\lambda, v, MU_i, p_i",
    displayFormula: "$$\\lambda = \\frac{\\partial v}{\\partial m} = \\frac{MU_i}{p_i}$$",
    intuition: "Grenznutzen des Einkommens",
    derivationSteps: [
        {
            "label": "Lagrange-Multiplikator (Merksatz)",
            "text": "Interpretation des Lagrange-Multiplikators λ",
            "math": "$$\\lambda = \\frac{\\partial v}{\\partial m} = \\frac{MU_i}{p_i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lambda","Lagrange-Multiplikator (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lagrange-Multiplikator (Merksatz) — Grenznutzen des Einkommens",
    relatedTaskFamilies: ["mikro1.taskfamily.lambda-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.lambda.vl06.p23.lambda","mikro1.lambda.vl02.p17.nebenbedingung"]
  }),
  card({
    id: 'mikro1.lambda.lagrange_multiplikator_merksatz_',
    conceptId: 'lambda',
    officialNotation: "\\lambda, v, MU_i, p_i",
    displayFormula: "$$\\lambda = \\frac{\\partial v}{\\partial m} = \\frac{MU_i}{p_i}$$",
    intuition: "Grenznutzen des Einkommens",
    derivationSteps: [
        {
            "label": "Lagrange-Multiplikator (Merksatz) (Merksatz)",
            "text": "Interpretation des Lagrange-Multiplikators λ",
            "math": "$$\\lambda = \\frac{\\partial v}{\\partial m} = \\frac{MU_i}{p_i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lambda","Lagrange-Multiplikator (Merksatz) (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lagrange-Multiplikator (Merksatz) (Merksatz) — Grenznutzen des Einkommens",
    relatedTaskFamilies: ["mikro1.taskfamily.lambda-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.lambda.vl06.p23.lambda","mikro1.lambda.vl02.p17.nebenbedingung"]
  }),
  card({
    id: 'mikro1.anfang.slutsky_bei_ausstattung',
    conceptId: 'anfang',
    officialNotation: "h_1, \\omega_1, x_1, m",
    displayFormula: "$$\\frac{dx_1}{dp_1} = \\frac{\\partial h_1}{\\partial p_1} + \\frac{\\partial x_1}{\\partial m}(\\omega_1 - x_1)$$",
    intuition: "SE + modifizierter EE",
    derivationSteps: [
        {
            "label": "Slutsky bei Ausstattung",
            "text": "Anfangsausstattung mit Gütern",
            "math": "$$\\frac{dx_1}{dp_1} = \\frac{\\partial h_1}{\\partial p_1} + \\frac{\\partial x_1}{\\partial m}(\\omega_1 - x_1)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu anfang","Slutsky bei Ausstattung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Slutsky bei Ausstattung — SE + modifizierter EE",
    relatedTaskFamilies: ["mikro1.taskfamily.anfang-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.anfang.vl08.p04.anfangsausstattung","mikro1.anfang.vl09.p02.slutsky-ausstattung"]
  }),
  card({
    id: 'mikro1.anfang.slutsky_bei_ausstattung_merksatz',
    conceptId: 'anfang',
    officialNotation: "h_1, \\omega_1, x_1, m",
    displayFormula: "$$\\frac{dx_1}{dp_1} = \\frac{\\partial h_1}{\\partial p_1} + \\frac{\\partial x_1}{\\partial m}(\\omega_1 - x_1)$$",
    intuition: "SE + modifizierter EE",
    derivationSteps: [
        {
            "label": "Slutsky bei Ausstattung (Merksatz)",
            "text": "Anfangsausstattung mit Gütern",
            "math": "$$\\frac{dx_1}{dp_1} = \\frac{\\partial h_1}{\\partial p_1} + \\frac{\\partial x_1}{\\partial m}(\\omega_1 - x_1)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu anfang","Slutsky bei Ausstattung (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Slutsky bei Ausstattung (Merksatz) — SE + modifizierter EE",
    relatedTaskFamilies: ["mikro1.taskfamily.anfang-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.anfang.vl08.p04.anfangsausstattung","mikro1.anfang.vl09.p02.slutsky-ausstattung"]
  }),
  card({
    id: 'mikro1.anfang.slutsky_bei_ausstattung_merksatz',
    conceptId: 'anfang',
    officialNotation: "h_1, \\omega_1, x_1, m",
    displayFormula: "$$\\frac{dx_1}{dp_1} = \\frac{\\partial h_1}{\\partial p_1} + \\frac{\\partial x_1}{\\partial m}(\\omega_1 - x_1)$$",
    intuition: "SE + modifizierter EE",
    derivationSteps: [
        {
            "label": "Slutsky bei Ausstattung (Merksatz) (Merksatz)",
            "text": "Anfangsausstattung mit Gütern",
            "math": "$$\\frac{dx_1}{dp_1} = \\frac{\\partial h_1}{\\partial p_1} + \\frac{\\partial x_1}{\\partial m}(\\omega_1 - x_1)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu anfang","Slutsky bei Ausstattung (Merksatz) (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Slutsky bei Ausstattung (Merksatz) (Merksatz) — SE + modifizierter EE",
    relatedTaskFamilies: ["mikro1.taskfamily.anfang-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.anfang.vl08.p04.anfangsausstattung","mikro1.anfang.vl09.p02.slutsky-ausstattung"]
  }),
  card({
    id: 'mikro1.pkomp.leontief_nutzenfunktion',
    conceptId: 'pkomp',
    officialNotation: "a, b, x_1,x_2",
    displayFormula: "$$u(x_1, x_2) = \\min\\{a x_1,\\; b x_2\\}$$",
    intuition: "Perfekte Komplemente",
    derivationSteps: [
        {
            "label": "Leontief-Nutzenfunktion",
            "text": "Kaufen und Verkaufen",
            "math": "$$u(x_1, x_2) = \\min\\{a x_1,\\; b x_2\\}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu pkomp","Leontief-Nutzenfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Leontief-Nutzenfunktion — Perfekte Komplemente",
    relatedTaskFamilies: ["mikro1.taskfamily.pkomp-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.pkomp.vl08.p03.kaufen-verkaufen","mikro1.pkomp.vl08.p06.netto-nachfrager"]
  }),
  card({
    id: 'mikro1.pkomp.optimalbedingung',
    conceptId: 'pkomp',
    officialNotation: "ax_1, bx_2",
    displayFormula: "$$a x_1 = b x_2$$",
    intuition: "Kein Gut wird verschwendet",
    derivationSteps: [
        {
            "label": "Optimalbedingung",
            "text": "Kaufen und Verkaufen",
            "math": "$$a x_1 = b x_2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu pkomp","Optimalbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Optimalbedingung — Kein Gut wird verschwendet",
    relatedTaskFamilies: ["mikro1.taskfamily.pkomp-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.pkomp.vl08.p03.kaufen-verkaufen","mikro1.pkomp.vl08.p06.netto-nachfrager"]
  }),
  card({
    id: 'mikro1.pkomp.nachfrage_x',
    conceptId: 'pkomp',
    officialNotation: "x_1^*, b, m, p_1, p_2, a",
    displayFormula: "$$x_1^* = \\frac{b m}{b p_1 + a p_2}$$",
    intuition: "Aus Knick + Budget",
    derivationSteps: [
        {
            "label": "Nachfrage x₁*",
            "text": "Kaufen und Verkaufen",
            "math": "$$x_1^* = \\frac{b m}{b p_1 + a p_2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu pkomp","Nachfrage x₁*"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nachfrage x₁* — Aus Knick + Budget",
    relatedTaskFamilies: ["mikro1.taskfamily.pkomp-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.pkomp.vl08.p03.kaufen-verkaufen","mikro1.pkomp.vl08.p06.netto-nachfrager"]
  }),
  card({
    id: 'mikro1.skalener.homogenit_tsgrad',
    conceptId: 'skalener',
    officialNotation: "\\lambda, k, K, L",
    displayFormula: "$$F(\\lambda K, \\lambda L) = \\lambda^k F(K,L)$$",
    intuition: "k = Skalenelastizität",
    derivationSteps: [
        {
            "label": "Homogenitätsgrad",
            "text": "Skalenerträge",
            "math": "$$F(\\lambda K, \\lambda L) = \\lambda^k F(K,L)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu skalener","Homogenitätsgrad"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Homogenitätsgrad — k = Skalenelastizität",
    relatedTaskFamilies: ["mikro1.taskfamily.skalener-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.skalener.vl11.p10.skalenertraege","mikro1.skalener.vl11.p23.skalenelastizitaet"]
  }),
  card({
    id: 'mikro1.skalener.euler_theorem',
    conceptId: 'skalener',
    officialNotation: "F_L cdot L, F_K cdot K, k, y",
    displayFormula: "$$F_L \\cdot L + F_K \\cdot K = k \\cdot y$$",
    intuition: "Für homogene Funktionen vom Grad k",
    derivationSteps: [
        {
            "label": "Euler-Theorem",
            "text": "Skalenerträge",
            "math": "$$F_L \\cdot L + F_K \\cdot K = k \\cdot y$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu skalener","Euler-Theorem"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Euler-Theorem — Für homogene Funktionen vom Grad k",
    relatedTaskFamilies: ["mikro1.taskfamily.skalener-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.skalener.vl11.p10.skalenertraege","mikro1.skalener.vl11.p23.skalenelastizitaet"]
  }),
  card({
    id: 'mikro1.skalener.wicksell_johnson',
    conceptId: 'skalener',
    officialNotation: "\\varepsilon_{y,\\lambda}, \\varepsilon_{y,L}, \\varepsilon_{y,K}",
    displayFormula: "$$\\varepsilon_{y,\\lambda} = \\varepsilon_{y,L} + \\varepsilon_{y,K} = k$$",
    intuition: "Skalenelastizität = Summe der Teile",
    derivationSteps: [
        {
            "label": "Wicksell-Johnson",
            "text": "Skalenerträge",
            "math": "$$\\varepsilon_{y,\\lambda} = \\varepsilon_{y,L} + \\varepsilon_{y,K} = k$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu skalener","Wicksell-Johnson"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wicksell-Johnson — Skalenelastizität = Summe der Teile",
    relatedTaskFamilies: ["mikro1.taskfamily.skalener-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.skalener.vl11.p10.skalenertraege","mikro1.skalener.vl11.p23.skalenelastizitaet"]
  }),
  card({
    id: 'mikro1.psubst.perfekte_substitute',
    conceptId: 'psubst',
    officialNotation: "a, b, x_1,x_2",
    displayFormula: "$$u(x_1, x_2) = a x_1 + b x_2, \\quad a, b > 0$$",
    intuition: "Lineare Nutzenfunktion",
    derivationSteps: [
        {
            "label": "Perfekte Substitute",
            "text": "SE und Krümmung der Indifferenzkurven — Grenzfall σ→∞",
            "math": "$$u(x_1, x_2) = a x_1 + b x_2, \\quad a, b > 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu psubst","Perfekte Substitute"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Perfekte Substitute — Lineare Nutzenfunktion",
    relatedTaskFamilies: ["mikro1.taskfamily.psubst-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.psubst.vl03.p05.ik-kruemmung-sigma-inf","mikro1.psubst.vl03.p08.ces-sigma-limit"]
  }),
  card({
    id: 'mikro1.psubst.grs',
    conceptId: 'psubst',
    officialNotation: "a, b, GRS",
    displayFormula: "$$GRS = \\frac{a}{b} = \\text{konstant}$$",
    intuition: "Unabhängig von Mengen",
    derivationSteps: [
        {
            "label": "GRS",
            "text": "SE und Krümmung der Indifferenzkurven — Grenzfall σ→∞",
            "math": "$$GRS = \\frac{a}{b} = \\text{konstant}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu psubst","GRS"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GRS — Unabhängig von Mengen",
    relatedTaskFamilies: ["mikro1.taskfamily.psubst-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.psubst.vl03.p05.ik-kruemmung-sigma-inf","mikro1.psubst.vl03.p08.ces-sigma-limit"]
  }),
  card({
    id: 'mikro1.psubst.perfekte_substitute_merksatz',
    conceptId: 'psubst',
    officialNotation: "a, b, x_1,x_2",
    displayFormula: "$$u(x_1, x_2) = a x_1 + b x_2, \\quad a, b > 0$$",
    intuition: "Lineare Nutzenfunktion",
    derivationSteps: [
        {
            "label": "Perfekte Substitute (Merksatz)",
            "text": "SE und Krümmung der Indifferenzkurven — Grenzfall σ→∞",
            "math": "$$u(x_1, x_2) = a x_1 + b x_2, \\quad a, b > 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu psubst","Perfekte Substitute (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Perfekte Substitute (Merksatz) — Lineare Nutzenfunktion",
    relatedTaskFamilies: ["mikro1.taskfamily.psubst-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.psubst.vl03.p05.ik-kruemmung-sigma-inf","mikro1.psubst.vl03.p08.ces-sigma-limit"]
  }),
  card({
    id: 'mikro1.grts.grts',
    conceptId: 'grts',
    officialNotation: "MP_L, MP_K",
    displayFormula: "$$GRTS = \\frac{MP_L}{MP_K} = \\frac{F_L}{F_K}$$",
    intuition: "Betrag der Isoquantensteigung",
    derivationSteps: [
        {
            "label": "GRTS",
            "text": "Grenzrate der Technischen Substitution",
            "math": "$$GRTS = \\frac{MP_L}{MP_K} = \\frac{F_L}{F_K}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu grts","GRTS"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GRTS — Betrag der Isoquantensteigung",
    relatedTaskFamilies: ["mikro1.taskfamily.grts-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.grts.vl11.p12.grts","mikro1.grts.vl11.p13.grts2"]
  }),
  card({
    id: 'mikro1.grts.grts_merksatz',
    conceptId: 'grts',
    officialNotation: "MP_L, MP_K",
    displayFormula: "$$GRTS = \\frac{MP_L}{MP_K} = \\frac{F_L}{F_K}$$",
    intuition: "Betrag der Isoquantensteigung",
    derivationSteps: [
        {
            "label": "GRTS (Merksatz)",
            "text": "Grenzrate der Technischen Substitution",
            "math": "$$GRTS = \\frac{MP_L}{MP_K} = \\frac{F_L}{F_K}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu grts","GRTS (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GRTS (Merksatz) — Betrag der Isoquantensteigung",
    relatedTaskFamilies: ["mikro1.taskfamily.grts-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.grts.vl11.p12.grts","mikro1.grts.vl11.p13.grts2"]
  }),
  card({
    id: 'mikro1.grts.grts_merksatz_merksatz',
    conceptId: 'grts',
    officialNotation: "MP_L, MP_K",
    displayFormula: "$$GRTS = \\frac{MP_L}{MP_K} = \\frac{F_L}{F_K}$$",
    intuition: "Betrag der Isoquantensteigung",
    derivationSteps: [
        {
            "label": "GRTS (Merksatz) (Merksatz)",
            "text": "Grenzrate der Technischen Substitution",
            "math": "$$GRTS = \\frac{MP_L}{MP_K} = \\frac{F_L}{F_K}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu grts","GRTS (Merksatz) (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GRTS (Merksatz) (Merksatz) — Betrag der Isoquantensteigung",
    relatedTaskFamilies: ["mikro1.taskfamily.grts-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro1.grts.vl11.p12.grts","mikro1.grts.vl11.p13.grts2"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

