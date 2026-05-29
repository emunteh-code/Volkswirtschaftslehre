// ============================================================
// FORMULA CARDS — Ökonometrie
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'oekonometrie';

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
    id: 'oekonometrie.matrix_notation.lineares_modell_in_matrixform',
    conceptId: 'matrix_notation',
    officialNotation: "y, X, \\beta, u",
    displayFormula: "$$y = X\\beta + u$$",
    intuition: "Die gesamte Stichprobe in einer einzigen Modellgleichung.",
    derivationSteps: [
        {
            "label": "Lineares Modell in Matrixform",
            "text": "?              \u0002 1 \u00011 X 1X \u0002 X 1X \u00011",
            "math": "$$y = X\\beta + u$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu matrix_notation","Lineares Modell in Matrixform"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lineares Modell in Matrixform — Die gesamte Stichprobe in einer einzigen Modellgleichung.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.matrix_notation-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.matrix_notation.einf-wise2024-pdf.p97.1-1-x-1x-x-1x-1","oekonometrie.matrix_notation.einf-wise2024-pdf.p109.p22-22-0"]
  }),
  card({
    id: 'oekonometrie.matrix_notation.dimensionsregel_f_r_ols',
    conceptId: 'matrix_notation',
    officialNotation: "k, n",
    displayFormula: "$$X'X \\in \\mathbb{R}^{k \\times k}, \\qquad X'y \\in \\mathbb{R}^{k \\times 1}$$",
    intuition: "Nur wenn die Dimensionen passen, ist die OLS-Logik konsistent.",
    derivationSteps: [
        {
            "label": "Dimensionsregel für OLS",
            "text": "?              \u0002 1 \u00011 X 1X \u0002 X 1X \u00011",
            "math": "$$X'X \\in \\mathbb{R}^{k \\times k}, \\qquad X'y \\in \\mathbb{R}^{k \\times 1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu matrix_notation","Dimensionsregel für OLS"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Dimensionsregel für OLS — Nur wenn die Dimensionen passen, ist die OLS-Logik konsistent.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.matrix_notation-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.matrix_notation.einf-wise2024-pdf.p97.1-1-x-1x-x-1x-1","oekonometrie.matrix_notation.einf-wise2024-pdf.p109.p22-22-0"]
  }),
  card({
    id: 'oekonometrie.sample_moments.mittelwert_und_kovarianz',
    conceptId: 'sample_moments',
    officialNotation: "\\bar{x}, s_{xy}",
    displayFormula: "$$\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i,\\qquad s_{xy} = \\frac{1}{n}\\sum_{i=1}^n (x_i-\\bar{x})(y_i-\\bar{y})$$",
    intuition: "Die Standardmomente, aus denen viele Regressionsformeln gebaut werden.",
    derivationSteps: [
        {
            "label": "Mittelwert und Kovarianz",
            "text": "β̂ \u0010 pX 1Ψ\u00011X q\u00011X 1Ψ\u00011y",
            "math": "$$\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i,\\qquad s_{xy} = \\frac{1}{n}\\sum_{i=1}^n (x_i-\\bar{x})(y_i-\\bar{y})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu sample_moments","Mittelwert und Kovarianz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Mittelwert und Kovarianz — Die Standardmomente, aus denen viele Regressionsformeln gebaut werden.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.sample_moments-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.sample_moments.einf-wise2024-pdf.p120.px-1-1x-q-1x-1-1y","oekonometrie.sample_moments.einf-wise2024-pdf.p128.t2-exppzt1-q"]
  }),
  card({
    id: 'oekonometrie.sample_moments.steigung_im_einfachen_modell',
    conceptId: 'sample_moments',
    officialNotation: "",
    displayFormula: "$$\\hat{\\beta}_1 = \\frac{\\sum (x_i-\\bar{x})(y_i-\\bar{y})}{\\sum (x_i-\\bar{x})^2}$$",
    intuition: "Die OLS-Steigung als Verhältnis aus gemeinsamer und eigener Variation.",
    derivationSteps: [
        {
            "label": "Steigung im einfachen Modell",
            "text": "β̂ \u0010 pX 1Ψ\u00011X q\u00011X 1Ψ\u00011y",
            "math": "$$\\hat{\\beta}_1 = \\frac{\\sum (x_i-\\bar{x})(y_i-\\bar{y})}{\\sum (x_i-\\bar{x})^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu sample_moments","Steigung im einfachen Modell"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Steigung im einfachen Modell — Die OLS-Steigung als Verhältnis aus gemeinsamer und eigener Variation.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.sample_moments-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.sample_moments.einf-wise2024-pdf.p120.px-1-1x-q-1x-1-1y","oekonometrie.sample_moments.einf-wise2024-pdf.p128.t2-exppzt1-q"]
  }),
  card({
    id: 'oekonometrie.distributions_df.freiheitsgrade_der_ols_inferenz',
    conceptId: 'distributions_df',
    officialNotation: "n, k",
    displayFormula: "$$df = n-k$$",
    intuition: "Anzahl der Beobachtungen minus Anzahl der geschätzten Parameter.",
    derivationSteps: [
        {
            "label": "Freiheitsgrade der OLS-Inferenz",
            "text": "Seite 154",
            "math": "$$df = n-k$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu distributions_df","Freiheitsgrade der OLS-Inferenz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Freiheitsgrade der OLS-Inferenz — Anzahl der Beobachtungen minus Anzahl der geschätzten Parameter.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.distributions_df-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.distributions_df.einf-wise2024-pdf.p154.seite-154","oekonometrie.distributions_df.einf-wise2024-pdf.p63.2-2-t-2"]
  }),
  card({
    id: 'oekonometrie.distributions_df.kritische_quantile',
    conceptId: 'distributions_df',
    officialNotation: "\\alpha, J",
    displayFormula: "$$t_{1-\\alpha/2,\\, n-k}, \\qquad F_{1-\\alpha,\\, J,\\, n-k}$$",
    intuition: "Die Ablehnungsgrenzen für Einzel- und Joint-Tests.",
    derivationSteps: [
        {
            "label": "Kritische Quantile",
            "text": "Seite 154",
            "math": "$$t_{1-\\alpha/2,\\, n-k}, \\qquad F_{1-\\alpha,\\, J,\\, n-k}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu distributions_df","Kritische Quantile"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kritische Quantile — Die Ablehnungsgrenzen für Einzel- und Joint-Tests.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.distributions_df-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.distributions_df.einf-wise2024-pdf.p154.seite-154","oekonometrie.distributions_df.einf-wise2024-pdf.p63.2-2-t-2"]
  }),
  card({
    id: 'oekonometrie.model_objects.populationsmodell',
    conceptId: 'model_objects',
    officialNotation: "y_i, x_i, u_i",
    displayFormula: "$$y_i = x_i'\\beta + u_i$$",
    intuition: "Theoretische Beziehung in der Grundgesamtheit.",
    derivationSteps: [
        {
            "label": "Populationsmodell",
            "text": "ô        X21 M1y \u0010 X21 M1X2b2, M1 \u0010 I \u0001 X1pX11X1q\u00011X11",
            "math": "$$y_i = x_i'\\beta + u_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu model_objects","Populationsmodell"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Populationsmodell — Theoretische Beziehung in der Grundgesamtheit.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.model_objects-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.model_objects.einf-wise2024-pdf.p46.x21-m1y-x21-m1x2b2-m1-i-","oekonometrie.model_objects.einf-wise2024-pdf.p174.3-4-3-nls-estimation-of-"]
  }),
  card({
    id: 'oekonometrie.model_objects.vorhersage_und_residuum',
    conceptId: 'model_objects',
    officialNotation: "",
    displayFormula: "$$\\hat{y}_i = x_i'\\hat{\\beta}, \\qquad \\hat{u}_i = y_i - \\hat{y}_i$$",
    intuition: "Beobachtbare Größen nach der Schätzung.",
    derivationSteps: [
        {
            "label": "Vorhersage und Residuum",
            "text": "ô        X21 M1y \u0010 X21 M1X2b2, M1 \u0010 I \u0001 X1pX11X1q\u00011X11",
            "math": "$$\\hat{y}_i = x_i'\\hat{\\beta}, \\qquad \\hat{u}_i = y_i - \\hat{y}_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu model_objects","Vorhersage und Residuum"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vorhersage und Residuum — Beobachtbare Größen nach der Schätzung.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.model_objects-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.model_objects.einf-wise2024-pdf.p46.x21-m1y-x21-m1x2b2-m1-i-","oekonometrie.model_objects.einf-wise2024-pdf.p174.3-4-3-nls-estimation-of-"]
  }),
  card({
    id: 'oekonometrie.ols_objective.ols_zielfunktion',
    conceptId: 'ols_objective',
    officialNotation: "SSR",
    displayFormula: "$$SSR(\\beta) = \\sum_{i=1}^n (y_i - x_i'\\beta)^2$$",
    intuition: "Die zu minimierende Summe der quadrierten Residuen.",
    derivationSteps: [
        {
            "label": "OLS-Zielfunktion",
            "text": "T t\u00101 s\u00101",
            "math": "$$SSR(\\beta) = \\sum_{i=1}^n (y_i - x_i'\\beta)^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ols_objective","OLS-Zielfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: OLS-Zielfunktion — Die zu minimierende Summe der quadrierten Residuen.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.ols_objective-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.ols_objective.einf-wise2024-pdf.p152.t-t-1-s-1","oekonometrie.ols_objective.einf-wise2024-pdf.p68.cramer-rao-inequality-cr"]
  }),
  card({
    id: 'oekonometrie.normal_equations.normalgleichung',
    conceptId: 'normal_equations',
    officialNotation: "\\hat{u}",
    displayFormula: "$$X'\\hat{u} = X'(y - X\\hat{\\beta}) = 0$$",
    intuition: "Die Residuen stehen orthogonal zu allen Spalten von X.",
    derivationSteps: [
        {
            "label": "Normalgleichung",
            "text": "Einführung in die Ökonometrie",
            "math": "$$X'\\hat{u} = X'(y - X\\hat{\\beta}) = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu normal_equations","Normalgleichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Normalgleichung — Die Residuen stehen orthogonal zu allen Spalten von X.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.normal_equations-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.normal_equations.einf-wise2024-pdf.p67.einfu-hrung-in-die-o-kon","oekonometrie.normal_equations.einf-wise2024-pdf.p70.r1-n-pr1-2r1px-1x-q-1r11"]
  }),
  card({
    id: 'oekonometrie.normal_equations.ols_l_sung_in_matrixform',
    conceptId: 'normal_equations',
    officialNotation: "",
    displayFormula: "$$\\hat{\\beta} = (X'X)^{-1}X'y$$",
    intuition: "Die geschlossene Lösung bei vollem Spaltenrang von X.",
    derivationSteps: [
        {
            "label": "OLS-Lösung in Matrixform",
            "text": "Einführung in die Ökonometrie",
            "math": "$$\\hat{\\beta} = (X'X)^{-1}X'y$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu normal_equations","OLS-Lösung in Matrixform"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: OLS-Lösung in Matrixform — Die geschlossene Lösung bei vollem Spaltenrang von X.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.normal_equations-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.normal_equations.einf-wise2024-pdf.p67.einfu-hrung-in-die-o-kon","oekonometrie.normal_equations.einf-wise2024-pdf.p70.r1-n-pr1-2r1px-1x-q-1r11"]
  }),
  card({
    id: 'oekonometrie.partial_effects.partieller_effekt_im_linearen_mo',
    conceptId: 'partial_effects',
    officialNotation: "\\beta_j",
    displayFormula: "$$\\Delta E(y \\mid X) = \\beta_j \\cdot \\Delta x_j$$",
    intuition: "Ein linearer Koeffizient skaliert die erwartete Änderung in y.",
    derivationSteps: [
        {
            "label": "Partieller Effekt im linearen Modell",
            "text": "Rearranging yields:",
            "math": "$$\\Delta E(y \\mid X) = \\beta_j \\cdot \\Delta x_j$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu partial_effects","Partieller Effekt im linearen Modell"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Partieller Effekt im linearen Modell — Ein linearer Koeffizient skaliert die erwartete Änderung in y.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.partial_effects-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.partial_effects.einf-wise2024-pdf.p71.rearranging-yields","oekonometrie.partial_effects.einf-wise2024-pdf.p78.slide"]
  }),
  card({
    id: 'oekonometrie.functional_forms.log_log_modell',
    conceptId: 'functional_forms',
    officialNotation: "\\beta_1",
    displayFormula: "$$\\log(y_i) = \\beta_0 + \\beta_1 \\log(x_i) + u_i$$",
    intuition: "β_1 ist hier direkt eine Elastizität.",
    derivationSteps: [
        {
            "label": "Log-Log-Modell",
            "text": "Bσ2Bβ1             2       σ4",
            "math": "$$\\log(y_i) = \\beta_0 + \\beta_1 \\log(x_i) + u_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu functional_forms","Log-Log-Modell"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Log-Log-Modell — β_1 ist hier direkt eine Elastizität.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.functional_forms-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.functional_forms.einf-wise2024-pdf.p69.b-2b-1-2-4","oekonometrie.functional_forms.einf-wise2024-pdf.p39.1-2-8-estimating-the-var"]
  }),
  card({
    id: 'oekonometrie.functional_forms.interaktionsmodell',
    conceptId: 'functional_forms',
    officialNotation: "",
    displayFormula: "$$y_i = \\beta_0 + \\beta_1 x_i + \\beta_2 d_i + \\beta_3 (x_i d_i) + u_i$$",
    intuition: "Die Steigung von x hängt hier davon ab, ob d_i = 0 oder 1 ist.",
    derivationSteps: [
        {
            "label": "Interaktionsmodell",
            "text": "Bσ2Bβ1             2       σ4",
            "math": "$$y_i = \\beta_0 + \\beta_1 x_i + \\beta_2 d_i + \\beta_3 (x_i d_i) + u_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu functional_forms","Interaktionsmodell"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Interaktionsmodell — Die Steigung von x hängt hier davon ab, ob d_i = 0 oder 1 ist.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.functional_forms-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.functional_forms.einf-wise2024-pdf.p69.b-2b-1-2-4","oekonometrie.functional_forms.einf-wise2024-pdf.p39.1-2-8-estimating-the-var"]
  }),
  card({
    id: 'oekonometrie.no_perfect_multicollinearity.vollrangbedingung',
    conceptId: 'no_perfect_multicollinearity',
    officialNotation: "k",
    displayFormula: "$$\\operatorname{rank}(X) = k$$",
    intuition: "Nur bei vollem Spaltenrang ist das OLS-Problem eindeutig lösbar.",
    derivationSteps: [
        {
            "label": "Vollrangbedingung",
            "text": "CONST_ST         -3.316940      0.402775     -8.235212        0.0000",
            "math": "$$\\operatorname{rank}(X) = k$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu no_perfect_multicollinearity","Vollrangbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vollrangbedingung — Nur bei vollem Spaltenrang ist das OLS-Problem eindeutig lösbar.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.no_perfect_multicollinearity-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.no_perfect_multicollinearity.einf-wise2024-pdf.p129.const-st-3-316940-0-4027","oekonometrie.no_perfect_multicollinearity.einf-wise2024-pdf.p50.1-3-4-multicollinearity-"]
  }),
  card({
    id: 'oekonometrie.exogeneity.exogenit_tsbedingung',
    conceptId: 'exogeneity',
    officialNotation: "",
    displayFormula: "$$E(u \\mid X) = 0$$",
    intuition: "Die Kernannahme für Unverzerrtheit des OLS-Schätzers.",
    derivationSteps: [
        {
            "label": "Exogenitätsbedingung",
            "text": "0       t1\u0001α{2pT \u0001 K qσ̂     x10pX 1X q\u00011x0   1q \u0010 1 \u0001 α.",
            "math": "$$E(u \\mid X) = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu exogeneity","Exogenitätsbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Exogenitätsbedingung — Die Kernannahme für Unverzerrtheit des OLS-Schätzers.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.exogeneity-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.exogeneity.einf-wise2024-pdf.p73.0-t1-2pt-k-q-x10px-1x-q-","oekonometrie.exogeneity.einf-wise2024-pdf.p148.einfu-hrung-in-die-o-kon"]
  }),
  card({
    id: 'oekonometrie.endogeneity_ovb.ovb_formel',
    conceptId: 'endogeneity_ovb',
    officialNotation: "z",
    displayFormula: "$$\\operatorname{Bias}(\\hat{\\gamma}_1) = \\beta_2 \\cdot \\frac{\\operatorname{Cov}(x,z)}{\\operatorname{Var}(x)}$$",
    intuition: "Bias entsteht aus Effekt der ausgelassenen Variable mal ihrer Korrelation mit x.",
    derivationSteps: [
        {
            "label": "OVB-Formel",
            "text": "\u0004            \u0004              \u0004",
            "math": "$$\\operatorname{Bias}(\\hat{\\gamma}_1) = \\beta_2 \\cdot \\frac{\\operatorname{Cov}(x,z)}{\\operatorname{Var}(x)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu endogeneity_ovb","OVB-Formel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: OVB-Formel — Bias entsteht aus Effekt der ausgelassenen Variable mal ihrer Korrelation mit x.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.endogeneity_ovb-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.endogeneity_ovb.einf-wise2024-pdf.p106.slide","oekonometrie.endogeneity_ovb.einf-wise2024-pdf.p60.y-0-standard-errors-of-p"]
  }),
  card({
    id: 'oekonometrie.unbiasedness.unverzerrtheit',
    conceptId: 'unbiasedness',
    officialNotation: "",
    displayFormula: "$$E(\\hat{\\beta}_j \\mid X) = \\beta_j$$",
    intuition: "Im Durchschnitt über viele Stichproben trifft der Schätzer den wahren Parameter.",
    derivationSteps: [
        {
            "label": "Unverzerrtheit",
            "text": "\u0010 pX 1P 1P X q\u00011X 1P 1P y",
            "math": "$$E(\\hat{\\beta}_j \\mid X) = \\beta_j$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu unbiasedness","Unverzerrtheit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Unverzerrtheit — Im Durchschnitt über viele Stichproben trifft der Schätzer den wahren Parameter.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.unbiasedness-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.unbiasedness.einf-wise2024-pdf.p104.px-1p-1p-x-q-1x-1p-1p-y","oekonometrie.unbiasedness.einf-wise2024-pdf.p66.t-k-2pt-k-q"]
  }),
  card({
    id: 'oekonometrie.gauss_markov.gauss_markov_aussage',
    conceptId: 'gauss_markov',
    officialNotation: "c, \\hat{\\beta}, \\tilde{\\beta}",
    displayFormula: "$$\\operatorname{Var}(c'\\hat{\\beta}\\mid X) \\le \\operatorname{Var}(c'\\tilde{\\beta}\\mid X)$$",
    intuition: "Für jede Linearkombination der Parameter (Gewichtsvektor c) hat der OLS-Schätzer unter den klassischen Annahmen die kleinstmögliche Varianz verglichen mit jedem anderen linearen unverzerrten Schätzer derselben Linearkombination — genau das meint BLUE.",
    derivationSteps: [
        {
            "label": "Gauss-Markov-Aussage",
            "text": "3.1        Appendix 1: Some results for matrix algebra",
            "math": "$$\\operatorname{Var}(c'\\hat{\\beta}\\mid X) \\le \\operatorname{Var}(c'\\tilde{\\beta}\\mid X)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gauss_markov","Gauss-Markov-Aussage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gauss-Markov-Aussage — Für jede Linearkombination der Parameter (Gewichtsvektor c) hat der OLS-Schätzer",
    relatedTaskFamilies: ["oekonometrie.taskfamily.gauss_markov-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.gauss_markov.einf-wise2024-pdf.p153.3-1-appendix-1-some-resu","oekonometrie.gauss_markov.einf-wise2024-pdf.p82.h0-r-r"]
  }),
  card({
    id: 'oekonometrie.consistency.konsistenz',
    conceptId: 'consistency',
    officialNotation: "",
    displayFormula: "$$\\operatorname{plim}\\hat{\\beta}_j = \\beta_j$$",
    intuition: "Der Schätzer nähert sich dem wahren Parameter im Grenzwert an.",
    derivationSteps: [
        {
            "label": "Konsistenz",
            "text": "1.5     Asymptotic properties of the OLS-estimator",
            "math": "$$\\operatorname{plim}\\hat{\\beta}_j = \\beta_j$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu consistency","Konsistenz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Konsistenz — Der Schätzer nähert sich dem wahren Parameter im Grenzwert an.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.consistency-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.consistency.einf-wise2024-pdf.p85.1-5-asymptotic-propertie","oekonometrie.consistency.einf-wise2024-pdf.p14.x1-x-1"]
  }),
  card({
    id: 'oekonometrie.error_variance.residual_sum_of_squares',
    conceptId: 'error_variance',
    officialNotation: "\\hat{u}_i",
    displayFormula: "$$SSR = \\sum_{i=1}^n \\hat{u}_i^2$$",
    intuition: "Misst die gesamte verbleibende Modellabweichung in der Stichprobe.",
    derivationSteps: [
        {
            "label": "Residual Sum of Squares",
            "text": "\u0010 constant \u0001 T2 ln S pβq",
            "math": "$$SSR = \\sum_{i=1}^n \\hat{u}_i^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu error_variance","Residual Sum of Squares"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Residual Sum of Squares — Misst die gesamte verbleibende Modellabweichung in der Stichprobe.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.error_variance-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.error_variance.einf-wise2024-pdf.p182.constant-t2-ln-s-p-q","oekonometrie.error_variance.einf-wise2024-pdf.p123.lim-t-8"]
  }),
  card({
    id: 'oekonometrie.error_variance.fehlervarianzsch_tzer',
    conceptId: 'error_variance',
    officialNotation: "n, k",
    displayFormula: "$$\\hat{\\sigma}^2 = \\frac{SSR}{n-k}$$",
    intuition: "Klassische Schätzung der Fehlerstreuung unter dem linearen Modell.",
    derivationSteps: [
        {
            "label": "Fehlervarianzschätzer",
            "text": "\u0010 constant \u0001 T2 ln S pβq",
            "math": "$$\\hat{\\sigma}^2 = \\frac{SSR}{n-k}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu error_variance","Fehlervarianzschätzer"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fehlervarianzschätzer — Klassische Schätzung der Fehlerstreuung unter dem linearen Modell.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.error_variance-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.error_variance.einf-wise2024-pdf.p182.constant-t2-ln-s-p-q","oekonometrie.error_variance.einf-wise2024-pdf.p123.lim-t-8"]
  }),
  card({
    id: 'oekonometrie.covariance_matrix.kovarianzmatrix',
    conceptId: 'covariance_matrix',
    officialNotation: "\\hat{\\sigma}^2",
    displayFormula: "$$\\widehat{\\operatorname{Var}}(\\hat{\\beta}\\mid X) = \\hat{\\sigma}^2 (X'X)^{-1}$$",
    intuition: "Die gemeinsame Unsicherheitsstruktur der OLS-Schätzer.",
    derivationSteps: [
        {
            "label": "Kovarianzmatrix",
            "text": "K=2       K=2           K=2            K=2      K=2",
            "math": "$$\\widehat{\\operatorname{Var}}(\\hat{\\beta}\\mid X) = \\hat{\\sigma}^2 (X'X)^{-1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu covariance_matrix","Kovarianzmatrix"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kovarianzmatrix — Die gemeinsame Unsicherheitsstruktur der OLS-Schätzer.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.covariance_matrix-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.covariance_matrix.einf-wise2024-pdf.p100.k-2-k-2-k-2-k-2-k-2","oekonometrie.covariance_matrix.einf-wise2024-pdf.p55.coef-est-std-err-est-std"]
  }),
  card({
    id: 'oekonometrie.covariance_matrix.standardfehler_eines_koeffizient',
    conceptId: 'covariance_matrix',
    officialNotation: "",
    displayFormula: "$$se(\\hat{\\beta}_j) = \\sqrt{\\widehat{\\operatorname{Var}}(\\hat{\\beta}_j\\mid X)}$$",
    intuition: "Die Wurzel des passenden Diagonalelements der Kovarianzmatrix.",
    derivationSteps: [
        {
            "label": "Standardfehler eines Koeffizienten",
            "text": "K=2       K=2           K=2            K=2      K=2",
            "math": "$$se(\\hat{\\beta}_j) = \\sqrt{\\widehat{\\operatorname{Var}}(\\hat{\\beta}_j\\mid X)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu covariance_matrix","Standardfehler eines Koeffizienten"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Standardfehler eines Koeffizienten — Die Wurzel des passenden Diagonalelements der Kovarianzmatrix.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.covariance_matrix-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.covariance_matrix.einf-wise2024-pdf.p100.k-2-k-2-k-2-k-2-k-2","oekonometrie.covariance_matrix.einf-wise2024-pdf.p55.coef-est-std-err-est-std"]
  }),
  card({
    id: 'oekonometrie.prediction.punktprognose',
    conceptId: 'prediction',
    officialNotation: "x_0",
    displayFormula: "$$\\hat{y}_0 = x_0'\\hat{\\beta}$$",
    intuition: "Geschätzter bedingter Mittelwert für neue Kovariaten x₀.",
    derivationSteps: [
        {
            "label": "Punktprognose",
            "text": "\u0014              \u001c       \u0004",
            "math": "$$\\hat{y}_0 = x_0'\\hat{\\beta}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu prediction","Punktprognose"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Punktprognose — Geschätzter bedingter Mittelwert für neue Kovariaten x₀.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.prediction-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.prediction.einf-wise2024-pdf.p78.slide","oekonometrie.prediction.einf-wise2024-pdf.p121.v-t-vt-1-27"]
  }),
  card({
    id: 'oekonometrie.prediction_intervals.konfidenzintervall_f_r_den_mitte',
    conceptId: 'prediction_intervals',
    officialNotation: "",
    displayFormula: "$$\\hat{y}_0 \\pm t_{\\alpha/2,n-k}\\, se(\\hat{y}_0)$$",
    intuition: "Unsicherheit über E(y₀|x₀).",
    derivationSteps: [
        {
            "label": "Konfidenzintervall für den Mittelwert",
            "text": "W                       \u0002",
            "math": "$$\\hat{y}_0 \\pm t_{\\alpha/2,n-k}\\, se(\\hat{y}_0)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu prediction_intervals","Konfidenzintervall für den Mittelwert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Konfidenzintervall für den Mittelwert — Unsicherheit über E(y₀|x₀).",
    relatedTaskFamilies: ["oekonometrie.taskfamily.prediction_intervals-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.prediction_intervals.einf-wise2024-pdf.p08.w","oekonometrie.prediction_intervals.einf-wise2024-pdf.p41.einfu-hrung-in-die-o-kon"]
  }),
  card({
    id: 'oekonometrie.prediction_intervals.prognoseintervall',
    conceptId: 'prediction_intervals',
    officialNotation: "",
    displayFormula: "$$\\hat{y}_0 \\pm t_{\\alpha/2,n-k}\\, \\sqrt{se(\\hat{y}_0)^2 + \\hat{\\sigma}^2}$$",
    intuition: "Breiter, weil zusätzlich neue idiosynkratische Unsicherheit hinzukommt.",
    derivationSteps: [
        {
            "label": "Prognoseintervall",
            "text": "W                       \u0002",
            "math": "$$\\hat{y}_0 \\pm t_{\\alpha/2,n-k}\\, \\sqrt{se(\\hat{y}_0)^2 + \\hat{\\sigma}^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu prediction_intervals","Prognoseintervall"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Prognoseintervall — Breiter, weil zusätzlich neue idiosynkratische Unsicherheit hinzukommt.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.prediction_intervals-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.prediction_intervals.einf-wise2024-pdf.p08.w","oekonometrie.prediction_intervals.einf-wise2024-pdf.p41.einfu-hrung-in-die-o-kon"]
  }),
  card({
    id: 'oekonometrie.r_squared.bestimmtheitsma',
    conceptId: 'r_squared',
    officialNotation: "",
    displayFormula: "$$R^2 = \\frac{ESS}{TSS} = 1 - \\frac{SSR}{TSS}$$",
    intuition: "Anteil erklärter Variation.",
    derivationSteps: [
        {
            "label": "Bestimmtheitsmaß",
            "text": "3.4        Appendix 4: Nonlinear LS and ML estimation",
            "math": "$$R^2 = \\frac{ESS}{TSS} = 1 - \\frac{SSR}{TSS}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu r_squared","Bestimmtheitsmaß"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bestimmtheitsmaß — Anteil erklärter Variation.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.r_squared-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.r_squared.einf-wise2024-pdf.p167.3-4-appendix-4-nonlinear","oekonometrie.r_squared.einf-wise2024-pdf.p09.1-2-the-basic-model"]
  }),
  card({
    id: 'oekonometrie.r_squared.adjustiertes_r',
    conceptId: 'r_squared',
    officialNotation: "",
    displayFormula: "$$\\bar{R}^2 = 1 - \\frac{SSR/(n-k)}{TSS/(n-1)}$$",
    intuition: "Korrigiert für zusätzliche Parameter.",
    derivationSteps: [
        {
            "label": "Adjustiertes R²",
            "text": "3.4        Appendix 4: Nonlinear LS and ML estimation",
            "math": "$$\\bar{R}^2 = 1 - \\frac{SSR/(n-k)}{TSS/(n-1)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu r_squared","Adjustiertes R²"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Adjustiertes R² — Korrigiert für zusätzliche Parameter.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.r_squared-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.r_squared.einf-wise2024-pdf.p167.3-4-appendix-4-nonlinear","oekonometrie.r_squared.einf-wise2024-pdf.p09.1-2-the-basic-model"]
  }),
  card({
    id: 'oekonometrie.t_test.t_statistik',
    conceptId: 't_test',
    officialNotation: "\\beta_{j,0}",
    displayFormula: "$$t = \\frac{\\hat{\\beta}_j - \\beta_{j,0}}{se(\\hat{\\beta}_j)}$$",
    intuition: "Einzeltest auf eine lineare Restriktion für einen Koeffizienten.",
    derivationSteps: [
        {
            "label": "t-Statistik",
            "text": "\u0016      B β1           B βK \u001e",
            "math": "$$t = \\frac{\\hat{\\beta}_j - \\beta_{j,0}}{se(\\hat{\\beta}_j)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu t_test","t-Statistik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: t-Statistik — Einzeltest auf eine lineare Restriktion für einen Koeffizienten.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.t_test-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.t_test.einf-wise2024-pdf.p175.b-1-b-k","oekonometrie.t_test.einf-wise2024-pdf.p56.e0e10-x0pb-qe10-e0pb-q1x"]
  }),
  card({
    id: 'oekonometrie.f_test.f_statistik_ber_ssr',
    conceptId: 'f_test',
    officialNotation: "J",
    displayFormula: "$$F = \\frac{(SSR_R - SSR_{UR})/J}{SSR_{UR}/(n-k)}$$",
    intuition: "Vergleicht zusätzlichen Fit pro Restriktion mit der Reststreuung des unrestricted model.",
    derivationSteps: [
        {
            "label": "F-Statistik über SSR",
            "text": "3.3        Appendix 3: OLS-Estimation under linearrestrictions",
            "math": "$$F = \\frac{(SSR_R - SSR_{UR})/J}{SSR_{UR}/(n-k)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu f_test","F-Statistik über SSR"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: F-Statistik über SSR — Vergleicht zusätzlichen Fit pro Restriktion mit der Reststreuung des unrestricte",
    relatedTaskFamilies: ["oekonometrie.taskfamily.f_test-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.f_test.einf-wise2024-pdf.p163.3-3-appendix-3-ols-estim","oekonometrie.f_test.einf-wise2024-pdf.p169.3-4-2-the-gauss-newton-a"]
  }),
  card({
    id: 'oekonometrie.confidence_intervals.konfidenzintervall',
    conceptId: 'confidence_intervals',
    officialNotation: "",
    displayFormula: "$$\\hat{\\beta}_j \\pm t_{\\alpha/2,n-k}\\, se(\\hat{\\beta}_j)$$",
    intuition: "Intervallschätzung für einen einzelnen Koeffizienten.",
    derivationSteps: [
        {
            "label": "Konfidenzintervall",
            "text": "11                  11     11        \u001d,",
            "math": "$$\\hat{\\beta}_j \\pm t_{\\alpha/2,n-k}\\, se(\\hat{\\beta}_j)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu confidence_intervals","Konfidenzintervall"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Konfidenzintervall — Intervallschätzung für einen einzelnen Koeffizienten.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.confidence_intervals-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.confidence_intervals.einf-wise2024-pdf.p159.11-11-11","oekonometrie.confidence_intervals.einf-wise2024-pdf.p28.0-817-0-114-0-059"]
  }),
  card({
    id: 'oekonometrie.normal_linear_model_mle.log_likelihood_nlm',
    conceptId: 'normal_linear_model_mle',
    officialNotation: "",
    displayFormula: "$$\\ell(\\beta,\\sigma^2\\mid y,X)=-\\frac{T}{2}\\ln(2\\pi)-\\frac{T}{2}\\ln(\\sigma^2)-\\frac{(y-X\\beta)'(y-X\\beta)}{2\\sigma^2}$$",
    intuition: "Likelihood des normalen linearen Modells.",
    derivationSteps: [
        {
            "label": "Log-Likelihood (NLM)",
            "text": "Einführung in die Ökonometrie",
            "math": "$$\\ell(\\beta,\\sigma^2\\mid y,X)=-\\frac{T}{2}\\ln(2\\pi)-\\frac{T}{2}\\ln(\\sigma^2)-\\frac{(y-X\\beta)'(y-X\\beta)}{2\\sigma^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu normal_linear_model_mle","Log-Likelihood (NLM)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Log-Likelihood (NLM) — Likelihood des normalen linearen Modells.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.normal_linear_model_mle-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.normal_linear_model_mle.einf-wise2024-pdf.p03.einfu-hrung-in-die-o-kon","oekonometrie.normal_linear_model_mle.einf-wise2024-pdf.p75.1-4-4-continuing-the-mon"]
  }),
  card({
    id: 'oekonometrie.normal_linear_model_mle.mle_ols_identit_t_f_r',
    conceptId: 'normal_linear_model_mle',
    officialNotation: "",
    displayFormula: "$$\\hat{\\beta}_{MLE}=\\hat{\\beta}_{OLS}=(X'X)^{-1}X'y$$",
    intuition: "Gilt unter den Standardannahmen des normalen linearen Modells.",
    derivationSteps: [
        {
            "label": "MLE/OLS-Identität für β",
            "text": "Einführung in die Ökonometrie",
            "math": "$$\\hat{\\beta}_{MLE}=\\hat{\\beta}_{OLS}=(X'X)^{-1}X'y$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu normal_linear_model_mle","MLE/OLS-Identität für β"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: MLE/OLS-Identität für β — Gilt unter den Standardannahmen des normalen linearen Modells.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.normal_linear_model_mle-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.normal_linear_model_mle.einf-wise2024-pdf.p03.einfu-hrung-in-die-o-kon","oekonometrie.normal_linear_model_mle.einf-wise2024-pdf.p75.1-4-4-continuing-the-mon"]
  }),
  card({
    id: 'oekonometrie.linear_restrictions_ur.lineare_restriktion',
    conceptId: 'linear_restrictions_ur',
    officialNotation: "",
    displayFormula: "$$H_0: R\\beta = r$$",
    intuition: "Allgemeine Form für gemeinsame Hypothesen über Koeffizienten.",
    derivationSteps: [
        {
            "label": "Lineare Restriktion",
            "text": "2 trrΨpI \u0001 X pX X q X qs",
            "math": "$$H_0: R\\beta = r$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu linear_restrictions_ur","Lineare Restriktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lineare Restriktion — Allgemeine Form für gemeinsame Hypothesen über Koeffizienten.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.linear_restrictions_ur-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.linear_restrictions_ur.einf-wise2024-pdf.p102.2-trr-pi-x-px-x-q-x-qs","oekonometrie.linear_restrictions_ur.einf-wise2024-pdf.p126.2ptii-k-q"]
  }),
  card({
    id: 'oekonometrie.asymptotic_normality.asymptotische_normalit_t',
    conceptId: 'asymptotic_normality',
    officialNotation: "\\Omega",
    displayFormula: "$$\\sqrt{n}(\\hat{\\beta}-\\beta) \\xrightarrow{d} \\mathcal{N}(0,\\Omega)$$",
    intuition: "Grenzverteilung des Schätzfehlers bei wachsender Stichprobengröße.",
    derivationSteps: [
        {
            "label": "Asymptotische Normalität",
            "text": "Einführung in die Ökonometrie",
            "math": "$$\\sqrt{n}(\\hat{\\beta}-\\beta) \\xrightarrow{d} \\mathcal{N}(0,\\Omega)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu asymptotic_normality","Asymptotische Normalität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Asymptotische Normalität — Grenzverteilung des Schätzfehlers bei wachsender Stichprobengröße.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.asymptotic_normality-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.asymptotic_normality.einf-wise2024-pdf.p35.einfu-hrung-in-die-o-kon","oekonometrie.asymptotic_normality.einf-wise2024-pdf.p149.slide"]
  }),
  card({
    id: 'oekonometrie.monte_carlo.simulationsmittelwert',
    conceptId: 'monte_carlo',
    officialNotation: "S",
    displayFormula: "$$\\overline{\\hat{\\beta}} = \\frac{1}{S}\\sum_{s=1}^S \\hat{\\beta}^{(s)}$$",
    intuition: "Der Durchschnitt vieler Wiederholungsschätzungen macht Unverzerrtheit sichtbar.",
    derivationSteps: [
        {
            "label": "Simulationsmittelwert",
            "text": "Einführung in die Ökonometrie",
            "math": "$$\\overline{\\hat{\\beta}} = \\frac{1}{S}\\sum_{s=1}^S \\hat{\\beta}^{(s)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monte_carlo","Simulationsmittelwert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Simulationsmittelwert — Der Durchschnitt vieler Wiederholungsschätzungen macht Unverzerrtheit sichtbar.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.monte_carlo-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.monte_carlo.einf-wise2024-pdf.p150.einfu-hrung-in-die-o-kon","oekonometrie.monte_carlo.einf-wise2024-pdf.p52.2-2-x-x"]
  }),
  card({
    id: 'oekonometrie.vif_collinearity.variance_inflation_factor',
    conceptId: 'vif_collinearity',
    officialNotation: "R_j^2",
    displayFormula: "$$VIF_j = \\frac{1}{1-R_j^2}$$",
    intuition: "Je größer Rⱼ² in der Hilfsregression, desto stärker die aufgeblähte Unsicherheit.",
    derivationSteps: [
        {
            "label": "Variance Inflation Factor",
            "text": "\u0014              \u001c       \u0004",
            "math": "$$VIF_j = \\frac{1}{1-R_j^2}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu vif_collinearity","Variance Inflation Factor"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Variance Inflation Factor — Je größer Rⱼ² in der Hilfsregression, desto stärker die aufgeblähte Unsicherheit",
    relatedTaskFamilies: ["oekonometrie.taskfamily.vif_collinearity-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.vif_collinearity.einf-wise2024-pdf.p78.slide","oekonometrie.vif_collinearity.einf-wise2024-pdf.p121.v-t-vt-1-27"]
  }),
  card({
    id: 'oekonometrie.fwl_partial_regression.fwl_steigung',
    conceptId: 'fwl_partial_regression',
    officialNotation: "\\tilde{x}_j, \\tilde{y}",
    displayFormula: "$$\\hat{\\beta}_j = \\frac{\\tilde{x}_j'\\tilde{y}}{\\tilde{x}_j'\\tilde{x}_j}$$",
    intuition: "Regressiere Residuen von y auf Residuen von xⱼ nach Herausrechnung der anderen Regressoren.",
    derivationSteps: [
        {
            "label": "FWL-Steigung",
            "text": "2 trrΨpI \u0001 X pX X q X qs",
            "math": "$$\\hat{\\beta}_j = \\frac{\\tilde{x}_j'\\tilde{y}}{\\tilde{x}_j'\\tilde{x}_j}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu fwl_partial_regression","FWL-Steigung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: FWL-Steigung — Regressiere Residuen von y auf Residuen von xⱼ nach Herausrechnung der anderen R",
    relatedTaskFamilies: ["oekonometrie.taskfamily.fwl_partial_regression-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.fwl_partial_regression.einf-wise2024-pdf.p102.2-trr-pi-x-px-x-q-x-qs","oekonometrie.fwl_partial_regression.einf-wise2024-pdf.p126.2ptii-k-q"]
  }),
  card({
    id: 'oekonometrie.heteroskedasticity.heteroskedastische_fehlervarianz',
    conceptId: 'heteroskedasticity',
    officialNotation: "",
    displayFormula: "$$\\operatorname{Var}(u_i\\mid X_i) = \\sigma_i^2$$",
    intuition: "Die Fehlerstreuung hängt von der Beobachtung i ab.",
    derivationSteps: [
        {
            "label": "Heteroskedastische Fehlervarianz",
            "text": "2 γ2 x       x",
            "math": "$$\\operatorname{Var}(u_i\\mid X_i) = \\sigma_i^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu heteroskedasticity","Heteroskedastische Fehlervarianz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Heteroskedastische Fehlervarianz — Die Fehlerstreuung hängt von der Beobachtung i ab.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.heteroskedasticity-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.heteroskedasticity.einf-wise2024-pdf.p52.2-2-x-x","oekonometrie.heteroskedasticity.einf-wise2024-pdf.p26.205-18-949-20-1010-2-0-0"]
  }),
  card({
    id: 'oekonometrie.robust_gls.gls_sch_tzer',
    conceptId: 'robust_gls',
    officialNotation: "\\Omega",
    displayFormula: "$$\\hat{\\beta}_{GLS} = (X'\\Omega^{-1}X)^{-1}X'\\Omega^{-1}y$$",
    intuition: "Nutzt bekannte oder modellierte Fehlerkovarianz Ω für effizientere Schätzung.",
    derivationSteps: [
        {
            "label": "GLS-Schätzer",
            "text": "P22  22        0",
            "math": "$$\\hat{\\beta}_{GLS} = (X'\\Omega^{-1}X)^{-1}X'\\Omega^{-1}y$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu robust_gls","GLS-Schätzer"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: GLS-Schätzer — Nutzt bekannte oder modellierte Fehlerkovarianz Ω für effizientere Schätzung.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.robust_gls-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.robust_gls.einf-wise2024-pdf.p109.p22-22-0","oekonometrie.robust_gls.einf-wise2024-pdf.p115.2-6-a-heteroskedastic-mo"]
  }),
  card({
    id: 'oekonometrie.robust_gls.robuste_inferenzidee',
    conceptId: 'robust_gls',
    officialNotation: "\\hat{\\Omega}",
    displayFormula: "$$\\widehat{\\operatorname{Var}}_{rob}(\\hat{\\beta}) = (X'X)^{-1}X'\\hat{\\Omega}X(X'X)^{-1}$$",
    intuition: "Sandwich-Form der robusten Varianzschätzung.",
    derivationSteps: [
        {
            "label": "Robuste Inferenzidee",
            "text": "P22  22        0",
            "math": "$$\\widehat{\\operatorname{Var}}_{rob}(\\hat{\\beta}) = (X'X)^{-1}X'\\hat{\\Omega}X(X'X)^{-1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu robust_gls","Robuste Inferenzidee"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Robuste Inferenzidee — Sandwich-Form der robusten Varianzschätzung.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.robust_gls-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.robust_gls.einf-wise2024-pdf.p109.p22-22-0","oekonometrie.robust_gls.einf-wise2024-pdf.p115.2-6-a-heteroskedastic-mo"]
  }),
  card({
    id: 'oekonometrie.autocorrelation.ar_1_fehlerintuition',
    conceptId: 'autocorrelation',
    officialNotation: "\\rho",
    displayFormula: "$$u_t = \\rho u_{t-1} + \\varepsilon_t$$",
    intuition: "Standarddarstellung seriell korrelierter Fehler im einfachsten Fall.",
    derivationSteps: [
        {
            "label": "AR(1)-Fehlerintuition",
            "text": "Pseudo linear model (second step):",
            "math": "$$u_t = \\rho u_{t-1} + \\varepsilon_t$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu autocorrelation","AR(1)-Fehlerintuition"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: AR(1)-Fehlerintuition — Standarddarstellung seriell korrelierter Fehler im einfachsten Fall.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.autocorrelation-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.autocorrelation.einf-wise2024-pdf.p172.pseudo-linear-model-seco","oekonometrie.autocorrelation.einf-wise2024-pdf.p143.residual-actual-fitted"]
  }),
  card({
    id: 'oekonometrie.autocorrelation.durbin_watson_n_herung',
    conceptId: 'autocorrelation',
    officialNotation: "",
    displayFormula: "$$DW \\approx 2(1-\\hat{\\rho})$$",
    intuition: "Werte unter 2 sprechen für positive Autokorrelation.",
    derivationSteps: [
        {
            "label": "Durbin-Watson-Näherung",
            "text": "Pseudo linear model (second step):",
            "math": "$$DW \\approx 2(1-\\hat{\\rho})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu autocorrelation","Durbin-Watson-Näherung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Durbin-Watson-Näherung — Werte unter 2 sprechen für positive Autokorrelation.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.autocorrelation-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.autocorrelation.einf-wise2024-pdf.p172.pseudo-linear-model-seco","oekonometrie.autocorrelation.einf-wise2024-pdf.p143.residual-actual-fitted"]
  }),
  card({
    id: 'oekonometrie.hac_newey_west.hac_idee',
    conceptId: 'hac_newey_west',
    officialNotation: "\\hat{S}_{NW}",
    displayFormula: "$$\\widehat{\\operatorname{Var}}_{HAC}(\\hat{\\beta}) = (X'X)^{-1}\\hat{S}_{NW}(X'X)^{-1}$$",
    intuition: "Robuste Varianzmatrix mit Heteroskedastizität und serieller Abhängigkeit.",
    derivationSteps: [
        {
            "label": "HAC-Idee",
            "text": "\u0016      B β1           B βK \u001e",
            "math": "$$\\widehat{\\operatorname{Var}}_{HAC}(\\hat{\\beta}) = (X'X)^{-1}\\hat{S}_{NW}(X'X)^{-1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu hac_newey_west","HAC-Idee"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: HAC-Idee — Robuste Varianzmatrix mit Heteroskedastizität und serieller Abhängigkeit.",
    relatedTaskFamilies: ["oekonometrie.taskfamily.hac_newey_west-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["oekonometrie.hac_newey_west.einf-wise2024-pdf.p175.b-1-b-k","oekonometrie.hac_newey_west.einf-wise2024-pdf.p56.e0e10-x0pb-qe10-e0pb-q1x"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

