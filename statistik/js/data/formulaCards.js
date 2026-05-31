// ============================================================
// FORMULA CARDS — Statistik
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'statistik';

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
    id: 'statistik.deskriptiv.arithmetisches_mittel',
    conceptId: 'deskriptiv',
    officialNotation: "\\bar{x}, n, x_i",
    displayFormula: "$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^n x_i$$",
    intuition: "Rechnerischer Schwerpunkt der Stichprobe",
    derivationSteps: [
        {
            "label": "Arithmetisches Mittel",
            "text": "DS1.1 Häufigkeitsverteilungen",
            "math": "$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^n x_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu deskriptiv","Arithmetisches Mittel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Arithmetisches Mittel — Rechnerischer Schwerpunkt der Stichprobe",
    relatedTaskFamilies: ["statistik.taskfamily.deskriptiv-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.deskriptiv.vl02.p06.ds11","statistik.deskriptiv.vl02.p23.ds12"]
  }),
  card({
    id: 'statistik.deskriptiv.stichprobenvarianz',
    conceptId: 'deskriptiv',
    officialNotation: "s^2, n-1, \\bar{x}",
    displayFormula: "$$s^2 = \\frac{1}{n-1}\\sum_{i=1}^n (x_i-\\bar{x})^2$$",
    intuition: "Korrigierte mittlere quadratische Abweichung",
    derivationSteps: [
        {
            "label": "Stichprobenvarianz",
            "text": "DS1.1 Häufigkeitsverteilungen",
            "math": "$$s^2 = \\frac{1}{n-1}\\sum_{i=1}^n (x_i-\\bar{x})^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu deskriptiv","Stichprobenvarianz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Stichprobenvarianz — Korrigierte mittlere quadratische Abweichung",
    relatedTaskFamilies: ["statistik.taskfamily.deskriptiv-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.deskriptiv.vl02.p06.ds11","statistik.deskriptiv.vl02.p23.ds12"]
  }),
  card({
    id: 'statistik.deskriptiv.standardabweichung',
    conceptId: 'deskriptiv',
    officialNotation: "s, s^2",
    displayFormula: "$$s = \\sqrt{s^2}$$",
    intuition: "Streuung in Originaleinheiten",
    derivationSteps: [
        {
            "label": "Standardabweichung",
            "text": "DS1.1 Häufigkeitsverteilungen",
            "math": "$$s = \\sqrt{s^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu deskriptiv","Standardabweichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Standardabweichung — Streuung in Originaleinheiten",
    relatedTaskFamilies: ["statistik.taskfamily.deskriptiv-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.deskriptiv.vl02.p06.ds11","statistik.deskriptiv.vl02.p23.ds12"]
  }),
  card({
    id: 'statistik.deskriptiv.variationskoeffizient',
    conceptId: 'deskriptiv',
    officialNotation: "v, s, \\bar{x}",
    displayFormula: "$$v = \\frac{s}{\\bar{x}}$$",
    intuition: "Relative Streuung bei vergleichbarer Skala",
    derivationSteps: [
        {
            "label": "Variationskoeffizient",
            "text": "DS1.1 Häufigkeitsverteilungen",
            "math": "$$v = \\frac{s}{\\bar{x}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu deskriptiv","Variationskoeffizient"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Variationskoeffizient — Relative Streuung bei vergleichbarer Skala",
    relatedTaskFamilies: ["statistik.taskfamily.deskriptiv-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.deskriptiv.vl02.p06.ds11","statistik.deskriptiv.vl02.p23.ds12"]
  }),
  card({
    id: 'statistik.bivariat.kovarianz',
    conceptId: 'bivariat',
    officialNotation: "$s_{xy}$, $\\bar{x}$,$\\bar{y}$, n-1",
    displayFormula: "$$s_{xy} = \\frac{1}{n-1}\\sum_{i=1}^n (x_i-\\bar{x})(y_i-\\bar{y})$$",
    intuition: "Richtung der gemeinsamen Streuung",
    derivationSteps: [
        {
            "label": "Kovarianz",
            "text": "DS2.1 Bivariate Häufigkeitsverteilungen und Histogramme",
            "math": "$$s_{xy} = \\frac{1}{n-1}\\sum_{i=1}^n (x_i-\\bar{x})(y_i-\\bar{y})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu bivariat","Kovarianz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kovarianz — Richtung der gemeinsamen Streuung",
    relatedTaskFamilies: ["statistik.taskfamily.bivariat-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.bivariat.vl04.p16.ds21","statistik.bivariat.vl04.p30.ds22"]
  }),
  card({
    id: 'statistik.bivariat.pearson_korrelation',
    conceptId: 'bivariat',
    officialNotation: "$r_{xy}$, $s_{xy}$, $s_x$,$s_y$",
    displayFormula: "$$r_{xy} = \\frac{s_{xy}}{s_x s_y}$$",
    intuition: "Normierte lineare Zusammenhangsstärke",
    derivationSteps: [
        {
            "label": "Pearson-Korrelation",
            "text": "DS2.1 Bivariate Häufigkeitsverteilungen und Histogramme",
            "math": "$$r_{xy} = \\frac{s_{xy}}{s_x s_y}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu bivariat","Pearson-Korrelation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Pearson-Korrelation — Normierte lineare Zusammenhangsstärke",
    relatedTaskFamilies: ["statistik.taskfamily.bivariat-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.bivariat.vl04.p16.ds21","statistik.bivariat.vl04.p30.ds22"]
  }),
  card({
    id: 'statistik.bivariat.ols_steigung_bivariate_br_cke',
    conceptId: 'bivariat',
    officialNotation: "$\\hat{\\beta}_1$, $s_{xy}$, $s_x^2$",
    displayFormula: "$$\\hat{\\beta}_1 = \\frac{s_{xy}}{s_x^2}$$",
    intuition: "Verbindet bivariate Streuung mit dem linearen Regressionsanstieg",
    derivationSteps: [
        {
            "label": "OLS-Steigung (bivariate Brücke)",
            "text": "DS2.1 Bivariate Häufigkeitsverteilungen und Histogramme",
            "math": "$$\\hat{\\beta}_1 = \\frac{s_{xy}}{s_x^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu bivariat","OLS-Steigung (bivariate Brücke)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: OLS-Steigung (bivariate Brücke) — Verbindet bivariate Streuung mit dem linearen Regressionsanstieg",
    relatedTaskFamilies: ["statistik.taskfamily.bivariat-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.bivariat.vl04.p16.ds21","statistik.bivariat.vl04.p30.ds22"]
  }),
  card({
    id: 'statistik.wahrscheinlichkeit.bedingte_wkt',
    conceptId: 'wahrscheinlichkeit',
    officialNotation: "wahrscheinlichkeit",
    displayFormula: "$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$",
    intuition: "Definition",
    derivationSteps: [
        {
            "label": "Bedingte Wkt.",
            "text": "G2.1 Perspektiven auf Wahrscheinlichkeit",
            "math": "$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wahrscheinlichkeit","Bedingte Wkt."],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bedingte Wkt. — Definition",
    relatedTaskFamilies: ["statistik.taskfamily.wahrscheinlichkeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.wahrscheinlichkeit.vl05.p06.g21","statistik.wahrscheinlichkeit.vl05.p11.experimente"]
  }),
  card({
    id: 'statistik.wahrscheinlichkeit.bayes',
    conceptId: 'wahrscheinlichkeit',
    officialNotation: "wahrscheinlichkeit",
    displayFormula: "$$P(A|B) = \\frac{P(B|A)\\,P(A)}{P(B)}$$",
    intuition: "Aktualisierung",
    derivationSteps: [
        {
            "label": "Bayes",
            "text": "G2.1 Perspektiven auf Wahrscheinlichkeit",
            "math": "$$P(A|B) = \\frac{P(B|A)\\,P(A)}{P(B)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wahrscheinlichkeit","Bayes"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bayes — Aktualisierung",
    relatedTaskFamilies: ["statistik.taskfamily.wahrscheinlichkeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.wahrscheinlichkeit.vl05.p06.g21","statistik.wahrscheinlichkeit.vl05.p11.experimente"]
  }),
  card({
    id: 'statistik.wahrscheinlichkeit.totale_wkt',
    conceptId: 'wahrscheinlichkeit',
    officialNotation: "wahrscheinlichkeit",
    displayFormula: "$$P(B) = \\sum_i P(B|A_i)\\,P(A_i)$$",
    intuition: "Zerlegung",
    derivationSteps: [
        {
            "label": "Totale Wkt.",
            "text": "G2.1 Perspektiven auf Wahrscheinlichkeit",
            "math": "$$P(B) = \\sum_i P(B|A_i)\\,P(A_i)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wahrscheinlichkeit","Totale Wkt."],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Totale Wkt. — Zerlegung",
    relatedTaskFamilies: ["statistik.taskfamily.wahrscheinlichkeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.wahrscheinlichkeit.vl05.p06.g21","statistik.wahrscheinlichkeit.vl05.p11.experimente"]
  }),
  card({
    id: 'statistik.verteilungen.erwartungswert',
    conceptId: 'verteilungen',
    officialNotation: "verteilungen",
    displayFormula: "$$E[X] = \\sum x\\,P(X=x)$$",
    intuition: "Diskret",
    derivationSteps: [
        {
            "label": "Erwartungswert",
            "text": "Diskrete Zufallsvariablen",
            "math": "$$E[X] = \\sum x\\,P(X=x)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verteilungen","Erwartungswert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartungswert — Diskret",
    relatedTaskFamilies: ["statistik.taskfamily.verteilungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.verteilungen.vl06.p11.g31","statistik.verteilungen.vl06.p14.g32"]
  }),
  card({
    id: 'statistik.verteilungen.verschiebungssatz',
    conceptId: 'verteilungen',
    officialNotation: "verteilungen",
    displayFormula: "$$\\text{Var}(X) = E[X^2] - (E[X])^2$$",
    intuition: "Varianzberechnung",
    derivationSteps: [
        {
            "label": "Verschiebungssatz",
            "text": "Diskrete Zufallsvariablen",
            "math": "$$\\text{Var}(X) = E[X^2] - (E[X])^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verteilungen","Verschiebungssatz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verschiebungssatz — Varianzberechnung",
    relatedTaskFamilies: ["statistik.taskfamily.verteilungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.verteilungen.vl06.p11.g31","statistik.verteilungen.vl06.p14.g32"]
  }),
  card({
    id: 'statistik.verteilungen.binomial',
    conceptId: 'verteilungen',
    officialNotation: "verteilungen",
    displayFormula: "$$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$$",
    intuition: "Erfolge bei n Versuchen",
    derivationSteps: [
        {
            "label": "Binomial",
            "text": "Diskrete Zufallsvariablen",
            "math": "$$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verteilungen","Binomial"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Binomial — Erfolge bei n Versuchen",
    relatedTaskFamilies: ["statistik.taskfamily.verteilungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.verteilungen.vl06.p11.g31","statistik.verteilungen.vl06.p14.g32"]
  }),
  card({
    id: 'statistik.verteilungen.standardisierung',
    conceptId: 'verteilungen',
    officialNotation: "verteilungen",
    displayFormula: "$$Z = \\frac{X - \\mu}{\\sigma}$$",
    intuition: "Transformation auf N(0,1)",
    derivationSteps: [
        {
            "label": "Standardisierung",
            "text": "Diskrete Zufallsvariablen",
            "math": "$$Z = \\frac{X - \\mu}{\\sigma}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verteilungen","Standardisierung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Standardisierung — Transformation auf N(0,1)",
    relatedTaskFamilies: ["statistik.taskfamily.verteilungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.verteilungen.vl06.p11.g31","statistik.verteilungen.vl06.p14.g32"]
  }),
  card({
    id: 'statistik.schaetzen_verfahren.momentenbedingung',
    conceptId: 'schaetzen_verfahren',
    officialNotation: "m(\\theta), \\bar m",
    displayFormula: "$$m(\\theta) = \\bar{m}$$",
    intuition: "Theoretisches Moment wird durch empirisches Moment ersetzt",
    derivationSteps: [
        {
            "label": "Momentenbedingung",
            "text": "IS1.1 Punktschätzung",
            "math": "$$m(\\theta) = \\bar{m}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schaetzen_verfahren","Momentenbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Momentenbedingung — Theoretisches Moment wird durch empirisches Moment ersetzt",
    relatedTaskFamilies: ["statistik.taskfamily.schaetzen_verfahren-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.schaetzen_verfahren.vl09.p08.is11","statistik.schaetzen_verfahren.vl09.p12.is12"]
  }),
  card({
    id: 'statistik.schaetzen_verfahren.mse_zerlegung',
    conceptId: 'schaetzen_verfahren',
    officialNotation: "MSE(\\hat{\\theta}), Var(\\hat{\\theta}), Bias(\\hat{\\theta})",
    displayFormula: "$$MSE(\\hat{\\theta}) = Var(\\hat{\\theta}) + Bias(\\hat{\\theta})^2$$",
    intuition: "Gesamtgüte eines Schätzers",
    derivationSteps: [
        {
            "label": "MSE-Zerlegung",
            "text": "IS1.1 Punktschätzung",
            "math": "$$MSE(\\hat{\\theta}) = Var(\\hat{\\theta}) + Bias(\\hat{\\theta})^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schaetzen_verfahren","MSE-Zerlegung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: MSE-Zerlegung — Gesamtgüte eines Schätzers",
    relatedTaskFamilies: ["statistik.taskfamily.schaetzen_verfahren-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.schaetzen_verfahren.vl09.p08.is11","statistik.schaetzen_verfahren.vl09.p12.is12"]
  }),
  card({
    id: 'statistik.schaetzen_verfahren.bernoulli_standardsch_tzer',
    conceptId: 'schaetzen_verfahren',
    officialNotation: "\\hat{\\pi}, \\bar X, X_i",
    displayFormula: "$$\\hat{\\pi}_{MM} = \\hat{\\pi}_{ML} = \\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$$",
    intuition: "Standardfall, in dem MoM und ML zusammenfallen",
    derivationSteps: [
        {
            "label": "Bernoulli-Standardschätzer",
            "text": "IS1.1 Punktschätzung",
            "math": "$$\\hat{\\pi}_{MM} = \\hat{\\pi}_{ML} = \\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schaetzen_verfahren","Bernoulli-Standardschätzer"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bernoulli-Standardschätzer — Standardfall, in dem MoM und ML zusammenfallen",
    relatedTaskFamilies: ["statistik.taskfamily.schaetzen_verfahren-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.schaetzen_verfahren.vl09.p08.is11","statistik.schaetzen_verfahren.vl09.p12.is12"]
  }),
  card({
    id: 'statistik.schaetzen_eigenschaften_intervalle.z_konfidenzintervall',
    conceptId: 'schaetzen_eigenschaften_intervalle',
    officialNotation: "$\\bar{x}$, $z_{1-\\alpha/2}$, $\\sigma$, n",
    displayFormula: "$$\\bar{x} \\pm z_{1-\\alpha/2}\\cdot \\frac{\\sigma}{\\sqrt{n}}$$",
    intuition: "Intervall bei bekannter Populationsstreuung",
    derivationSteps: [
        {
            "label": "z-Konfidenzintervall",
            "text": "Schätzfunktionen und deren Eigenschaften",
            "math": "$$\\bar{x} \\pm z_{1-\\alpha/2}\\cdot \\frac{\\sigma}{\\sqrt{n}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schaetzen_eigenschaften_intervalle","z-Konfidenzintervall"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: z-Konfidenzintervall — Intervall bei bekannter Populationsstreuung",
    relatedTaskFamilies: ["statistik.taskfamily.schaetzen_eigenschaften_intervalle-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.schaetzen_eigenschaften_intervalle.vl09.p85.eigenschaften","statistik.schaetzen_eigenschaften_intervalle.vl10.p03.motivation"]
  }),
  card({
    id: 'statistik.schaetzen_eigenschaften_intervalle.t_konfidenzintervall',
    conceptId: 'schaetzen_eigenschaften_intervalle',
    officialNotation: "$t_{n-1,1-\\alpha/2}$, s, n-1",
    displayFormula: "$$\\bar{x} \\pm t_{n-1,1-\\alpha/2}\\cdot \\frac{s}{\\sqrt{n}}$$",
    intuition: "Standardintervall bei unbekannter Populationsstreuung",
    derivationSteps: [
        {
            "label": "t-Konfidenzintervall",
            "text": "Schätzfunktionen und deren Eigenschaften",
            "math": "$$\\bar{x} \\pm t_{n-1,1-\\alpha/2}\\cdot \\frac{s}{\\sqrt{n}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schaetzen_eigenschaften_intervalle","t-Konfidenzintervall"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: t-Konfidenzintervall — Standardintervall bei unbekannter Populationsstreuung",
    relatedTaskFamilies: ["statistik.taskfamily.schaetzen_eigenschaften_intervalle-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.schaetzen_eigenschaften_intervalle.vl09.p85.eigenschaften","statistik.schaetzen_eigenschaften_intervalle.vl10.p03.motivation"]
  }),
  card({
    id: 'statistik.schaetzen_eigenschaften_intervalle.standardfehler',
    conceptId: 'schaetzen_eigenschaften_intervalle',
    officialNotation: "SE(\\bar X), \\sigma,s, n",
    displayFormula: "$$SE(\\bar X)=\\frac{\\sigma}{\\sqrt n}\\quad \\text{bzw.}\\quad \\frac{s}{\\sqrt n}$$",
    intuition: "Präzision des Mittelwertschätzers",
    derivationSteps: [
        {
            "label": "Standardfehler",
            "text": "Schätzfunktionen und deren Eigenschaften",
            "math": "$$SE(\\bar X)=\\frac{\\sigma}{\\sqrt n}\\quad \\text{bzw.}\\quad \\frac{s}{\\sqrt n}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schaetzen_eigenschaften_intervalle","Standardfehler"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Standardfehler — Präzision des Mittelwertschätzers",
    relatedTaskFamilies: ["statistik.taskfamily.schaetzen_eigenschaften_intervalle-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.schaetzen_eigenschaften_intervalle.vl09.p85.eigenschaften","statistik.schaetzen_eigenschaften_intervalle.vl10.p03.motivation"]
  }),
  card({
    id: 'statistik.testen.t_statistik',
    conceptId: 'testen',
    officialNotation: "\\bar{x}, \\mu_0, s, n",
    displayFormula: "$$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$$",
    intuition: "Standardtest für den Mittelwert bei unbekannter Populationsstreuung",
    derivationSteps: [
        {
            "label": "t-Statistik",
            "text": "Induktive Statistik und Hypothesen",
            "math": "$$t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu testen","t-Statistik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: t-Statistik — Standardtest für den Mittelwert bei unbekannter Populationsstreuung",
    relatedTaskFamilies: ["statistik.taskfamily.testen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.testen.vl10_3.p08.hypothesen","statistik.testen.vl10_3.p12.klassisch"]
  }),
  card({
    id: 'statistik.testen.power',
    conceptId: 'testen',
    officialNotation: "\\beta, 1-\\beta",
    displayFormula: "$$\\text{Power} = 1-\\beta$$",
    intuition: "Wahrscheinlichkeit, einen echten Effekt zu entdecken",
    derivationSteps: [
        {
            "label": "Power",
            "text": "Induktive Statistik und Hypothesen",
            "math": "$$\\text{Power} = 1-\\beta$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu testen","Power"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Power — Wahrscheinlichkeit, einen echten Effekt zu entdecken",
    relatedTaskFamilies: ["statistik.taskfamily.testen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.testen.vl10_3.p08.hypothesen","statistik.testen.vl10_3.p12.klassisch"]
  }),
  card({
    id: 'statistik.testen.power_merksatz',
    conceptId: 'testen',
    officialNotation: "\\beta, 1-\\beta",
    displayFormula: "$$\\text{Power} = 1-\\beta$$",
    intuition: "Wahrscheinlichkeit, einen echten Effekt zu entdecken",
    derivationSteps: [
        {
            "label": "Power (Merksatz)",
            "text": "Induktive Statistik und Hypothesen",
            "math": "$$\\text{Power} = 1-\\beta$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu testen","Power (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Power (Merksatz) — Wahrscheinlichkeit, einen echten Effekt zu entdecken",
    relatedTaskFamilies: ["statistik.taskfamily.testen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.testen.vl10_3.p08.hypothesen","statistik.testen.vl10_3.p12.klassisch"]
  }),
  card({
    id: 'statistik.z_test.z_statistik',
    conceptId: 'z_test',
    officialNotation: "z_test",
    displayFormula: "$$z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$$",
    intuition: "Bekannte Populationsvarianz",
    derivationSteps: [
        {
            "label": "z-Statistik",
            "text": "8.1 Motivation und erstes Beispiel",
            "math": "$$z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu z_test","z-Statistik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: z-Statistik — Bekannte Populationsvarianz",
    relatedTaskFamilies: ["statistik.taskfamily.z_test-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.z_test.vl11.p18.motivation","statistik.z_test.vl11.p39.zweiseitig"]
  }),
  card({
    id: 'statistik.z_test.z_test_anteil',
    conceptId: 'z_test',
    officialNotation: "z_test",
    displayFormula: "$$z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$$",
    intuition: "Anteilstest",
    derivationSteps: [
        {
            "label": "z-Test Anteil",
            "text": "8.1 Motivation und erstes Beispiel",
            "math": "$$z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu z_test","z-Test Anteil"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: z-Test Anteil — Anteilstest",
    relatedTaskFamilies: ["statistik.taskfamily.z_test-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.z_test.vl11.p18.motivation","statistik.z_test.vl11.p39.zweiseitig"]
  }),
  card({
    id: 'statistik.z_test.z_test_anteil_merksatz',
    conceptId: 'z_test',
    officialNotation: "z_test",
    displayFormula: "$$z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$$",
    intuition: "Anteilstest",
    derivationSteps: [
        {
            "label": "z-Test Anteil (Merksatz)",
            "text": "8.1 Motivation und erstes Beispiel",
            "math": "$$z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu z_test","z-Test Anteil (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: z-Test Anteil (Merksatz) — Anteilstest",
    relatedTaskFamilies: ["statistik.taskfamily.z_test-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.z_test.vl11.p18.motivation","statistik.z_test.vl11.p39.zweiseitig"]
  }),
  card({
    id: 'statistik.varianzanalyse.f_statistik_anova',
    conceptId: 'varianzanalyse',
    officialNotation: "MSB, MSW, SSB,SSW, k,N",
    displayFormula: "$$F = \\frac{MSB}{MSW} = \\frac{SSB/(k-1)}{SSW/(N-k)}$$",
    intuition: "Varianzzerlegung in systematische und unsystematische Streuung",
    derivationSteps: [
        {
            "label": "F-Statistik ANOVA",
            "text": "Varianzanalyse",
            "math": "$$F = \\frac{MSB}{MSW} = \\frac{SSB/(k-1)}{SSW/(N-k)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu varianzanalyse","F-Statistik ANOVA"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: F-Statistik ANOVA — Varianzzerlegung in systematische und unsystematische Streuung",
    relatedTaskFamilies: ["statistik.taskfamily.varianzanalyse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.varianzanalyse.vl11.p03.einfuehrung","statistik.varianzanalyse.vl11.p12.tabelle"]
  }),
  card({
    id: 'statistik.varianzanalyse.varianzzerlegung',
    conceptId: 'varianzanalyse',
    officialNotation: "SST, SSB, SSW",
    displayFormula: "$$SST = SSB + SSW$$",
    intuition: "Gesamtstreuung zerfällt in Zwischen- und Innergruppenanteil",
    derivationSteps: [
        {
            "label": "Varianzzerlegung",
            "text": "Varianzanalyse",
            "math": "$$SST = SSB + SSW$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu varianzanalyse","Varianzzerlegung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Varianzzerlegung — Gesamtstreuung zerfällt in Zwischen- und Innergruppenanteil",
    relatedTaskFamilies: ["statistik.taskfamily.varianzanalyse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.varianzanalyse.vl11.p03.einfuehrung","statistik.varianzanalyse.vl11.p12.tabelle"]
  }),
  card({
    id: 'statistik.varianzanalyse.effektma',
    conceptId: 'varianzanalyse',
    officialNotation: "\\eta^2, SSB, SST",
    displayFormula: "$$\\eta^2 = \\frac{SSB}{SST}$$",
    intuition: "Anteil der Gesamtstreuung, der auf Gruppenunterschiede entfällt",
    derivationSteps: [
        {
            "label": "Effektmaß",
            "text": "Varianzanalyse",
            "math": "$$\\eta^2 = \\frac{SSB}{SST}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu varianzanalyse","Effektmaß"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Effektmaß — Anteil der Gesamtstreuung, der auf Gruppenunterschiede entfällt",
    relatedTaskFamilies: ["statistik.taskfamily.varianzanalyse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.varianzanalyse.vl11.p03.einfuehrung","statistik.varianzanalyse.vl11.p12.tabelle"]
  }),
  card({
    id: 'statistik.zwei_stichproben.gepoolte_varianz',
    conceptId: 'zwei_stichproben',
    officialNotation: "s_p^2, n_1,n_2, s_1^2,s_2^2",
    displayFormula: "$$s_p^2 = \\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$$",
    intuition: "Varianzschätzer bei Varianzhomogenität",
    derivationSteps: [
        {
            "label": "Gepoolte Varianz",
            "text": "Zweistichproben t-Test",
            "math": "$$s_p^2 = \\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zwei_stichproben","Gepoolte Varianz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gepoolte Varianz — Varianzschätzer bei Varianzhomogenität",
    relatedTaskFamilies: ["statistik.taskfamily.zwei_stichproben-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.zwei_stichproben.vl11_zwei.p01.titel","statistik.zwei_stichproben.vl11_zwei.p08.paarweise"]
  }),
  card({
    id: 'statistik.zwei_stichproben.verbundener_t_test',
    conceptId: 'zwei_stichproben',
    officialNotation: "\\bar d, s_d, n",
    displayFormula: "$$t = \\frac{\\bar{d}}{s_d/\\sqrt{n}}$$",
    intuition: "Test auf den Mittelwert der Paar-Differenzen",
    derivationSteps: [
        {
            "label": "Verbundener t-Test",
            "text": "Zweistichproben t-Test",
            "math": "$$t = \\frac{\\bar{d}}{s_d/\\sqrt{n}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zwei_stichproben","Verbundener t-Test"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verbundener t-Test — Test auf den Mittelwert der Paar-Differenzen",
    relatedTaskFamilies: ["statistik.taskfamily.zwei_stichproben-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.zwei_stichproben.vl11_zwei.p01.titel","statistik.zwei_stichproben.vl11_zwei.p08.paarweise"]
  }),
  card({
    id: 'statistik.zwei_stichproben.f_test_auf_varianzgleichheit',
    conceptId: 'zwei_stichproben',
    officialNotation: "F, s_1^2,s_2^2",
    displayFormula: "$$F = \\frac{s_1^2}{s_2^2}$$",
    intuition: "Vorprüfung für pooled vs. Welch",
    derivationSteps: [
        {
            "label": "F-Test auf Varianzgleichheit",
            "text": "Zweistichproben t-Test",
            "math": "$$F = \\frac{s_1^2}{s_2^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zwei_stichproben","F-Test auf Varianzgleichheit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: F-Test auf Varianzgleichheit — Vorprüfung für pooled vs. Welch",
    relatedTaskFamilies: ["statistik.taskfamily.zwei_stichproben-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.zwei_stichproben.vl11_zwei.p01.titel","statistik.zwei_stichproben.vl11_zwei.p08.paarweise"]
  }),
  card({
    id: 'statistik.nichtparametrisch.histogramm_als_dichtesch_tzer',
    conceptId: 'nichtparametrisch',
    officialNotation: "nichtparametrisch",
    displayFormula: "$$\\hat f(x)=\\frac{H_j}{n\\,b_j}, \\qquad x \\in I_j$$",
    intuition: "Klassenhäufigkeit pro Stichprobenumfang und Klassenbreite.",
    derivationSteps: [
        {
            "label": "Histogramm als Dichteschätzer",
            "text": "6.3 Histogramme als Schätzer für Dichten",
            "math": "$$\\hat f(x)=\\frac{H_j}{n\\,b_j}, \\qquad x \\in I_j$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu nichtparametrisch","Histogramm als Dichteschätzer"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Histogramm als Dichteschätzer — Klassenhäufigkeit pro Stichprobenumfang und Klassenbreite.",
    relatedTaskFamilies: ["statistik.taskfamily.nichtparametrisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.nichtparametrisch.vl09.p58.histogramm","statistik.nichtparametrisch.vl09.p71.kerndichte"]
  }),
  card({
    id: 'statistik.nichtparametrisch.flie_endes_histogramm',
    conceptId: 'nichtparametrisch',
    officialNotation: "nichtparametrisch",
    displayFormula: "$$\\hat f(x)=\\frac{1}{2b}\\cdot\\frac{\\#\\{x_i\\in(x-b,x+b]\\}}{n}$$",
    intuition: "Lokales Fenster der Breite $2b$ um den Auswertungspunkt $x$.",
    derivationSteps: [
        {
            "label": "Fließendes Histogramm",
            "text": "6.3 Histogramme als Schätzer für Dichten",
            "math": "$$\\hat f(x)=\\frac{1}{2b}\\cdot\\frac{\\#\\{x_i\\in(x-b,x+b]\\}}{n}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu nichtparametrisch","Fließendes Histogramm"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fließendes Histogramm — Lokales Fenster der Breite $2b$ um den Auswertungspunkt $x$.",
    relatedTaskFamilies: ["statistik.taskfamily.nichtparametrisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.nichtparametrisch.vl09.p58.histogramm","statistik.nichtparametrisch.vl09.p71.kerndichte"]
  }),
  card({
    id: 'statistik.nichtparametrisch.kerndichtesch_tzung',
    conceptId: 'nichtparametrisch',
    officialNotation: "nichtparametrisch",
    displayFormula: "$$\\hat f(x)=\\frac{1}{nb}\\sum_{i=1}^{n}K\\!\\left(\\frac{x-x_i}{b}\\right)$$",
    intuition: "Die Bandbreite $b$ steuert die Glättung; die Kernfunktion gewichtet Beobachtungen im Umfeld von $x$.",
    derivationSteps: [
        {
            "label": "Kerndichteschätzung",
            "text": "6.3 Histogramme als Schätzer für Dichten",
            "math": "$$\\hat f(x)=\\frac{1}{nb}\\sum_{i=1}^{n}K\\!\\left(\\frac{x-x_i}{b}\\right)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu nichtparametrisch","Kerndichteschätzung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kerndichteschätzung — Die Bandbreite $b$ steuert die Glättung; die Kernfunktion gewichtet Beobachtunge",
    relatedTaskFamilies: ["statistik.taskfamily.nichtparametrisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.nichtparametrisch.vl09.p58.histogramm","statistik.nichtparametrisch.vl09.p71.kerndichte"]
  }),
  card({
    id: 'statistik.regression_schaetzung_inferenz.regressionsmodell',
    conceptId: 'regression_schaetzung_inferenz',
    officialNotation: "Y_i, X_i, \\beta_0, \\beta_1, \\varepsilon_i",
    displayFormula: "$$Y_i = \\beta_0 + \\beta_1 X_i + \\varepsilon_i$$",
    intuition: "Einfaches lineares Modell",
    derivationSteps: [
        {
            "label": "Regressionsmodell",
            "text": "Statistische Modellierung I: Regression",
            "math": "$$Y_i = \\beta_0 + \\beta_1 X_i + \\varepsilon_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu regression_schaetzung_inferenz","Regressionsmodell"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Regressionsmodell — Einfaches lineares Modell",
    relatedTaskFamilies: ["statistik.taskfamily.regression_schaetzung_inferenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.regression_schaetzung_inferenz.vl12.p01.titel","statistik.regression_schaetzung_inferenz.vl12.p22.homosk"]
  }),
  card({
    id: 'statistik.regression_schaetzung_inferenz.ols_steigung',
    conceptId: 'regression_schaetzung_inferenz',
    officialNotation: "$\\hat{\\beta}_1$, $s_{xy}$, $s_x^2$",
    displayFormula: "$$\\hat{\\beta}_1 = \\frac{s_{xy}}{s_x^2}$$",
    intuition: "Schätzer der durchschnittlichen marginalen Änderung",
    derivationSteps: [
        {
            "label": "OLS-Steigung",
            "text": "Statistische Modellierung I: Regression",
            "math": "$$\\hat{\\beta}_1 = \\frac{s_{xy}}{s_x^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu regression_schaetzung_inferenz","OLS-Steigung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: OLS-Steigung — Schätzer der durchschnittlichen marginalen Änderung",
    relatedTaskFamilies: ["statistik.taskfamily.regression_schaetzung_inferenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.regression_schaetzung_inferenz.vl12.p01.titel","statistik.regression_schaetzung_inferenz.vl12.p22.homosk"]
  }),
  card({
    id: 'statistik.regression_schaetzung_inferenz.bestimmtheitsma',
    conceptId: 'regression_schaetzung_inferenz',
    officialNotation: "R^2, SSR, SST",
    displayFormula: "$$R^2 = 1 - \\frac{SSR}{SST}$$",
    intuition: "Anteil der erklärten Gesamtstreuung",
    derivationSteps: [
        {
            "label": "Bestimmtheitsmaß",
            "text": "Statistische Modellierung I: Regression",
            "math": "$$R^2 = 1 - \\frac{SSR}{SST}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu regression_schaetzung_inferenz","Bestimmtheitsmaß"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bestimmtheitsmaß — Anteil der erklärten Gesamtstreuung",
    relatedTaskFamilies: ["statistik.taskfamily.regression_schaetzung_inferenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.regression_schaetzung_inferenz.vl12.p01.titel","statistik.regression_schaetzung_inferenz.vl12.p22.homosk"]
  }),
  card({
    id: 'statistik.regression_diagnostik_prognose.residuum',
    conceptId: 'regression_diagnostik_prognose',
    officialNotation: "e_i, y_i, \\hat y_i",
    displayFormula: "$$e_i = y_i - \\hat y_i$$",
    intuition: "Abweichung zwischen Beobachtung und modelliertem Wert",
    derivationSteps: [
        {
            "label": "Residuum",
            "text": "Residuen",
            "math": "$$e_i = y_i - \\hat y_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu regression_diagnostik_prognose","Residuum"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Residuum — Abweichung zwischen Beobachtung und modelliertem Wert",
    relatedTaskFamilies: ["statistik.taskfamily.regression_diagnostik_prognose-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.regression_diagnostik_prognose.vl12.p61.residuen","statistik.regression_diagnostik_prognose.vl12.p22.residuen_homosk"]
  }),
  card({
    id: 'statistik.regression_diagnostik_prognose.konfidenzintervall_im_modell',
    conceptId: 'regression_diagnostik_prognose',
    officialNotation: "\\hat y(x_0), SE(\\hat y(x_0)), n-k-1",
    displayFormula: "$$\\hat y(x_0) \\pm t_{n-k-1,1-\\alpha/2}\\cdot SE\\bigl(\\hat y(x_0)\\bigr)$$",
    intuition: "Intervall für den Erwartungswert bei gegebenem x_0",
    derivationSteps: [
        {
            "label": "Konfidenzintervall im Modell",
            "text": "Residuen",
            "math": "$$\\hat y(x_0) \\pm t_{n-k-1,1-\\alpha/2}\\cdot SE\\bigl(\\hat y(x_0)\\bigr)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu regression_diagnostik_prognose","Konfidenzintervall im Modell"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Konfidenzintervall im Modell — Intervall für den Erwartungswert bei gegebenem x_0",
    relatedTaskFamilies: ["statistik.taskfamily.regression_diagnostik_prognose-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.regression_diagnostik_prognose.vl12.p61.residuen","statistik.regression_diagnostik_prognose.vl12.p22.residuen_homosk"]
  }),
  card({
    id: 'statistik.regression_diagnostik_prognose.prognoseintervall',
    conceptId: 'regression_diagnostik_prognose',
    officialNotation: "\\hatsigma^2, \\hat y(x_0)",
    displayFormula: "$$\\hat y(x_0) \\pm t_{n-k-1,1-\\alpha/2}\\cdot \\sqrt{SE\\bigl(\\hat y(x_0)\\bigr)^2 + \\hat\\sigma^2}$$",
    intuition: "Intervall für eine neue Einzelbeobachtung",
    derivationSteps: [
        {
            "label": "Prognoseintervall",
            "text": "Residuen",
            "math": "$$\\hat y(x_0) \\pm t_{n-k-1,1-\\alpha/2}\\cdot \\sqrt{SE\\bigl(\\hat y(x_0)\\bigr)^2 + \\hat\\sigma^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu regression_diagnostik_prognose","Prognoseintervall"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Prognoseintervall — Intervall für eine neue Einzelbeobachtung",
    relatedTaskFamilies: ["statistik.taskfamily.regression_diagnostik_prognose-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.regression_diagnostik_prognose.vl12.p61.residuen","statistik.regression_diagnostik_prognose.vl12.p22.residuen_homosk"]
  }),
  card({
    id: 'statistik.rlab.r_syntax_regression',
    conceptId: 'rlab',
    officialNotation: "rlab",
    displayFormula: "\\texttt{lm(y \\sim x1 + x2, data)}",
    intuition: "Lineare Regression in R",
    derivationSteps: [
        {
            "label": "R-Syntax Regression",
            "text": "R Grundlagen",
            "math": "\\texttt{lm(y \\sim x1 + x2, data)}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rlab","R-Syntax Regression"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: R-Syntax Regression — Lineare Regression in R",
    relatedTaskFamilies: ["statistik.taskfamily.rlab-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.rlab.rvorkurs.p06.grundlagen","statistik.rlab.rvorkurs.p22.vektoren"]
  }),
  card({
    id: 'statistik.rlab.r_syntax_regression_merksatz',
    conceptId: 'rlab',
    officialNotation: "rlab",
    displayFormula: "\\texttt{lm(y \\sim x1 + x2, data)}",
    intuition: "Lineare Regression in R",
    derivationSteps: [
        {
            "label": "R-Syntax Regression (Merksatz)",
            "text": "R Grundlagen",
            "math": "\\texttt{lm(y \\sim x1 + x2, data)}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rlab","R-Syntax Regression (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: R-Syntax Regression (Merksatz) — Lineare Regression in R",
    relatedTaskFamilies: ["statistik.taskfamily.rlab-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.rlab.rvorkurs.p06.grundlagen","statistik.rlab.rvorkurs.p22.vektoren"]
  }),
  card({
    id: 'statistik.rlab.r_syntax_regression_merksatz_mer',
    conceptId: 'rlab',
    officialNotation: "rlab",
    displayFormula: "\\texttt{lm(y \\sim x1 + x2, data)}",
    intuition: "Lineare Regression in R",
    derivationSteps: [
        {
            "label": "R-Syntax Regression (Merksatz) (Merksatz)",
            "text": "R Grundlagen",
            "math": "\\texttt{lm(y \\sim x1 + x2, data)}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rlab","R-Syntax Regression (Merksatz) (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: R-Syntax Regression (Merksatz) (Merksatz) — Lineare Regression in R",
    relatedTaskFamilies: ["statistik.taskfamily.rlab-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["statistik.rlab.rvorkurs.p06.grundlagen","statistik.rlab.rvorkurs.p22.vektoren"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

