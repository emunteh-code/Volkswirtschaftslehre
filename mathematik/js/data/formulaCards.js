// ============================================================
// FORMULA CARDS — Mathematik
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'mathematik';

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
    id: 'mathematik.algebra_mengen.intervallschreibweise',
    conceptId: 'algebra_mengen',
    officialNotation: "a, b",
    displayFormula: "$$[a,b],\\;(a,b),\\;(-\\infty,a],\\;[b,\\infty)$$",
    intuition: "Intervalle kodieren, ob Randpunkte erlaubt sind.",
    derivationSteps: [
        {
            "label": "Intervallschreibweise",
            "text": "Folgerungen aus den elementaren Regeln",
            "math": "$$[a,b],\\;(a,b),\\;(-\\infty,a],\\;[b,\\infty)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu algebra_mengen","Intervallschreibweise"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Intervallschreibweise — Intervalle kodieren, ob Randpunkte erlaubt sind.",
    relatedTaskFamilies: ["mathematik.taskfamily.algebra_mengen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.algebra_mengen.e1.p35.regeln","mathematik.algebra_mengen.e1.p45.ungleichungen"]
  }),
  card({
    id: 'mathematik.algebra_mengen.absolutbetrag_als_distanz',
    conceptId: 'algebra_mengen',
    officialNotation: "x, a",
    displayFormula: "$$|x-a|$$",
    intuition: "Abstand von $x$ zum Punkt $a$ auf der Zahlengeraden.",
    derivationSteps: [
        {
            "label": "Absolutbetrag als Distanz",
            "text": "Folgerungen aus den elementaren Regeln",
            "math": "$$|x-a|$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu algebra_mengen","Absolutbetrag als Distanz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Absolutbetrag als Distanz — Abstand von $x$ zum Punkt $a$ auf der Zahlengeraden.",
    relatedTaskFamilies: ["mathematik.taskfamily.algebra_mengen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.algebra_mengen.e1.p35.regeln","mathematik.algebra_mengen.e1.p45.ungleichungen"]
  }),
  card({
    id: 'mathematik.algebra_mengen.mengenoperationen',
    conceptId: 'algebra_mengen',
    officialNotation: "A, B",
    displayFormula: "$$A\\setminus B,\\qquad A^c,\\qquad A\\cap B,\\qquad A\\cup B$$",
    intuition: "Typische Schreibweisen für Differenz, Komplement, Schnitt und Vereinigung.",
    derivationSteps: [
        {
            "label": "Mengenoperationen",
            "text": "Folgerungen aus den elementaren Regeln",
            "math": "$$A\\setminus B,\\qquad A^c,\\qquad A\\cap B,\\qquad A\\cup B$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu algebra_mengen","Mengenoperationen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Mengenoperationen — Typische Schreibweisen für Differenz, Komplement, Schnitt und Vereinigung.",
    relatedTaskFamilies: ["mathematik.taskfamily.algebra_mengen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.algebra_mengen.e1.p35.regeln","mathematik.algebra_mengen.e1.p45.ungleichungen"]
  }),
  card({
    id: 'mathematik.algebra_mengen.quivalentes_umformen',
    conceptId: 'algebra_mengen',
    officialNotation: "u, v, w, c",
    displayFormula: "$$u=v \\iff u-w=v-w,\\qquad u=v \\iff cu=cv\\;(c\\neq 0)$$",
    intuition: "Grundprinzip: derselbe zulässige Schritt auf beiden Seiten.",
    derivationSteps: [
        {
            "label": "Äquivalentes Umformen",
            "text": "Folgerungen aus den elementaren Regeln",
            "math": "$$u=v \\iff u-w=v-w,\\qquad u=v \\iff cu=cv\\;(c\\neq 0)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu algebra_mengen","Äquivalentes Umformen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Äquivalentes Umformen — Grundprinzip: derselbe zulässige Schritt auf beiden Seiten.",
    relatedTaskFamilies: ["mathematik.taskfamily.algebra_mengen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.algebra_mengen.e1.p35.regeln","mathematik.algebra_mengen.e1.p45.ungleichungen"]
  }),
  card({
    id: 'mathematik.funktionen_gleichungen.geradengleichung',
    conceptId: 'funktionen_gleichungen',
    officialNotation: "m, n",
    displayFormula: "$$y=mx+n$$",
    intuition: "Lineare Funktion mit konstanter Steigung.",
    derivationSteps: [
        {
            "label": "Geradengleichung",
            "text": "E2.1 Grundlegendes über Funktionen",
            "math": "$$y=mx+n$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu funktionen_gleichungen","Geradengleichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Geradengleichung — Lineare Funktion mit konstanter Steigung.",
    relatedTaskFamilies: ["mathematik.taskfamily.funktionen_gleichungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.funktionen_gleichungen.e2.p24.grundlagen","mathematik.funktionen_gleichungen.e2.p52.quadratisch"]
  }),
  card({
    id: 'mathematik.funktionen_gleichungen.steigung_aus_zwei_punkten',
    conceptId: 'funktionen_gleichungen',
    officialNotation: "x_1, y_1, x_2, y_2",
    displayFormula: "$$m=\\frac{y_2-y_1}{x_2-x_1}$$",
    intuition: "Standardzugang, wenn nur zwei Punkte gegeben sind.",
    derivationSteps: [
        {
            "label": "Steigung aus zwei Punkten",
            "text": "E2.1 Grundlegendes über Funktionen",
            "math": "$$m=\\frac{y_2-y_1}{x_2-x_1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu funktionen_gleichungen","Steigung aus zwei Punkten"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Steigung aus zwei Punkten — Standardzugang, wenn nur zwei Punkte gegeben sind.",
    relatedTaskFamilies: ["mathematik.taskfamily.funktionen_gleichungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.funktionen_gleichungen.e2.p24.grundlagen","mathematik.funktionen_gleichungen.e2.p52.quadratisch"]
  }),
  card({
    id: 'mathematik.funktionen_gleichungen.quadratische_l_sungsformel',
    conceptId: 'funktionen_gleichungen',
    officialNotation: "a, b, c",
    displayFormula: "$$x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$",
    intuition: "Nullstellen einer quadratischen Gleichung $ax^2+bx+c=0$.",
    derivationSteps: [
        {
            "label": "Quadratische Lösungsformel",
            "text": "E2.1 Grundlegendes über Funktionen",
            "math": "$$x_{1,2}=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu funktionen_gleichungen","Quadratische Lösungsformel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Quadratische Lösungsformel — Nullstellen einer quadratischen Gleichung $ax^2+bx+c=0$.",
    relatedTaskFamilies: ["mathematik.taskfamily.funktionen_gleichungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.funktionen_gleichungen.e2.p24.grundlagen","mathematik.funktionen_gleichungen.e2.p52.quadratisch"]
  }),
  card({
    id: 'mathematik.funktionen_gleichungen.transformation',
    conceptId: 'funktionen_gleichungen',
    officialNotation: "c, d",
    displayFormula: "$$g(x)=f(x-c)+d$$",
    intuition: "Innen horizontal, außen vertikal verschieben.",
    derivationSteps: [
        {
            "label": "Transformation",
            "text": "E2.1 Grundlegendes über Funktionen",
            "math": "$$g(x)=f(x-c)+d$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu funktionen_gleichungen","Transformation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Transformation — Innen horizontal, außen vertikal verschieben.",
    relatedTaskFamilies: ["mathematik.taskfamily.funktionen_gleichungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.funktionen_gleichungen.e2.p24.grundlagen","mathematik.funktionen_gleichungen.e2.p52.quadratisch"]
  }),
  card({
    id: 'mathematik.exp_log_inverse.logarithmengesetze',
    conceptId: 'exp_log_inverse',
    officialNotation: "a, b",
    displayFormula: "$$\\ln(ab)=\\ln a+\\ln b,\\qquad \\ln\\!\\left(\\frac{a}{b}\\right)=\\ln a-\\ln b$$",
    intuition: "Produkte werden additiv, Quotienten subtraktiv.",
    derivationSteps: [
        {
            "label": "Logarithmengesetze",
            "text": "Allgemeine Exponentialfunktion",
            "math": "$$\\ln(ab)=\\ln a+\\ln b,\\qquad \\ln\\!\\left(\\frac{a}{b}\\right)=\\ln a-\\ln b$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu exp_log_inverse","Logarithmengesetze"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Logarithmengesetze — Produkte werden additiv, Quotienten subtraktiv.",
    relatedTaskFamilies: ["mathematik.taskfamily.exp_log_inverse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.exp_log_inverse.e2.p68.exponential","mathematik.exp_log_inverse.e2.p72.logarithmus"]
  }),
  card({
    id: 'mathematik.exp_log_inverse.exponentielle_gleichung_l_sen',
    conceptId: 'exp_log_inverse',
    officialNotation: "k, t, c",
    displayFormula: "$$e^{kt}=c \\iff t=\\frac{\\ln c}{k}$$",
    intuition: "Standardmuster für Wachstum, Halbwerts- oder Verdopplungszeit.",
    derivationSteps: [
        {
            "label": "Exponentielle Gleichung lösen",
            "text": "Allgemeine Exponentialfunktion",
            "math": "$$e^{kt}=c \\iff t=\\frac{\\ln c}{k}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu exp_log_inverse","Exponentielle Gleichung lösen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Exponentielle Gleichung lösen — Standardmuster für Wachstum, Halbwerts- oder Verdopplungszeit.",
    relatedTaskFamilies: ["mathematik.taskfamily.exp_log_inverse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.exp_log_inverse.e2.p68.exponential","mathematik.exp_log_inverse.e2.p72.logarithmus"]
  }),
  card({
    id: 'mathematik.exp_log_inverse.inverse_funktion',
    conceptId: 'exp_log_inverse',
    officialNotation: "f, f^{-1}",
    displayFormula: "$$f^{-1}(y)=x \\iff f(x)=y$$",
    intuition: "Rollenwechsel zwischen Input und Output.",
    derivationSteps: [
        {
            "label": "Inverse Funktion",
            "text": "Allgemeine Exponentialfunktion",
            "math": "$$f^{-1}(y)=x \\iff f(x)=y$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu exp_log_inverse","Inverse Funktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Inverse Funktion — Rollenwechsel zwischen Input und Output.",
    relatedTaskFamilies: ["mathematik.taskfamily.exp_log_inverse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.exp_log_inverse.e2.p68.exponential","mathematik.exp_log_inverse.e2.p72.logarithmus"]
  }),
  card({
    id: 'mathematik.exp_log_inverse.log_differenz',
    conceptId: 'exp_log_inverse',
    officialNotation: "Y_t, Y_{t-1}",
    displayFormula: "$$\\ln Y_t-\\ln Y_{t-1}\\approx \\frac{Y_t-Y_{t-1}}{Y_{t-1}}$$",
    intuition: "Näherung der Wachstumsrate bei kleinen Veränderungen.",
    derivationSteps: [
        {
            "label": "Log-Differenz",
            "text": "Allgemeine Exponentialfunktion",
            "math": "$$\\ln Y_t-\\ln Y_{t-1}\\approx \\frac{Y_t-Y_{t-1}}{Y_{t-1}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu exp_log_inverse","Log-Differenz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Log-Differenz — Näherung der Wachstumsrate bei kleinen Veränderungen.",
    relatedTaskFamilies: ["mathematik.taskfamily.exp_log_inverse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.exp_log_inverse.e2.p68.exponential","mathematik.exp_log_inverse.e2.p72.logarithmus"]
  }),
  card({
    id: 'mathematik.exp_log_inverse.basiswechsel_beim_logarithmus',
    conceptId: 'exp_log_inverse',
    officialNotation: "b, x",
    displayFormula: "$$\\log_b(x)=\\frac{\\ln(x)}{\\ln(b)}$$",
    intuition: "Hilft, wenn Aufgaben mit allgemeinen Logarithmen statt mit dem natürlichen Logarithmus formuliert sind.",
    derivationSteps: [
        {
            "label": "Basiswechsel beim Logarithmus",
            "text": "Allgemeine Exponentialfunktion",
            "math": "$$\\log_b(x)=\\frac{\\ln(x)}{\\ln(b)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu exp_log_inverse","Basiswechsel beim Logarithmus"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Basiswechsel beim Logarithmus — Hilft, wenn Aufgaben mit allgemeinen Logarithmen statt mit dem natürlichen Logar",
    relatedTaskFamilies: ["mathematik.taskfamily.exp_log_inverse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.exp_log_inverse.e2.p68.exponential","mathematik.exp_log_inverse.e2.p72.logarithmus"]
  }),
  card({
    id: 'mathematik.summen_logik_beweise.summenzeichen',
    conceptId: 'summen_logik_beweise',
    officialNotation: "i, n, a_i",
    displayFormula: "$$\\sum_{i=1}^n a_i$$",
    intuition: "Addiert die Folgenglieder $a_1$ bis $a_n$.",
    derivationSteps: [
        {
            "label": "Summenzeichen",
            "text": "Summenzeichen",
            "math": "$$\\sum_{i=1}^n a_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu summen_logik_beweise","Summenzeichen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Summenzeichen — Addiert die Folgenglieder $a_1$ bis $a_n$.",
    relatedTaskFamilies: ["mathematik.taskfamily.summen_logik_beweise-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.summen_logik_beweise.e3.p8.summen","mathematik.summen_logik_beweise.e3.p50.logik"]
  }),
  card({
    id: 'mathematik.summen_logik_beweise.doppelsumme',
    conceptId: 'summen_logik_beweise',
    officialNotation: "i, j, a_{ij}",
    displayFormula: "$$\\sum_{i=1}^n\\sum_{j=1}^m a_{ij}$$",
    intuition: "Zweifaches Summieren über zwei Indizes.",
    derivationSteps: [
        {
            "label": "Doppelsumme",
            "text": "Summenzeichen",
            "math": "$$\\sum_{i=1}^n\\sum_{j=1}^m a_{ij}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu summen_logik_beweise","Doppelsumme"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Doppelsumme — Zweifaches Summieren über zwei Indizes.",
    relatedTaskFamilies: ["mathematik.taskfamily.summen_logik_beweise-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.summen_logik_beweise.e3.p8.summen","mathematik.summen_logik_beweise.e3.p50.logik"]
  }),
  card({
    id: 'mathematik.summen_logik_beweise.produktzeichen',
    conceptId: 'summen_logik_beweise',
    officialNotation: "i, n",
    displayFormula: "$$\\prod_{i=1}^n a_i$$",
    intuition: "Multiplikatives Gegenstück zum Summenzeichen.",
    derivationSteps: [
        {
            "label": "Produktzeichen",
            "text": "Summenzeichen",
            "math": "$$\\prod_{i=1}^n a_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu summen_logik_beweise","Produktzeichen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Produktzeichen — Multiplikatives Gegenstück zum Summenzeichen.",
    relatedTaskFamilies: ["mathematik.taskfamily.summen_logik_beweise-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.summen_logik_beweise.e3.p8.summen","mathematik.summen_logik_beweise.e3.p50.logik"]
  }),
  card({
    id: 'mathematik.summen_logik_beweise.kontraposition',
    conceptId: 'summen_logik_beweise',
    officialNotation: "A, B",
    displayFormula: "$$A\\Rightarrow B \\iff \\neg B \\Rightarrow \\neg A$$",
    intuition: "Typischer Beweiszugang, wenn die direkte Richtung sperrig ist.",
    derivationSteps: [
        {
            "label": "Kontraposition",
            "text": "Summenzeichen",
            "math": "$$A\\Rightarrow B \\iff \\neg B \\Rightarrow \\neg A$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu summen_logik_beweise","Kontraposition"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kontraposition — Typischer Beweiszugang, wenn die direkte Richtung sperrig ist.",
    relatedTaskFamilies: ["mathematik.taskfamily.summen_logik_beweise-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.summen_logik_beweise.e3.p8.summen","mathematik.summen_logik_beweise.e3.p50.logik"]
  }),
  card({
    id: 'mathematik.lineare_algebra_grundlagen.matrixprodukt',
    conceptId: 'lineare_algebra_grundlagen',
    officialNotation: "i, j, k",
    displayFormula: "$$(AB)_{ij}=\\sum_{k=1}^n a_{ik}b_{kj}$$",
    intuition: "Eintrag $(i,j)$ des Produkts als Zeile-mal-Spalte.",
    derivationSteps: [
        {
            "label": "Matrixprodukt",
            "text": "LA1.1 Notation und Verwendung von Matrizen",
            "math": "$$(AB)_{ij}=\\sum_{k=1}^n a_{ik}b_{kj}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lineare_algebra_grundlagen","Matrixprodukt"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Matrixprodukt — Eintrag $(i,j)$ des Produkts als Zeile-mal-Spalte.",
    relatedTaskFamilies: ["mathematik.taskfamily.lineare_algebra_grundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lineare_algebra_grundlagen.la1.p14.notation","mathematik.lineare_algebra_grundlagen.la1.p28.multiplikation"]
  }),
  card({
    id: 'mathematik.lineare_algebra_grundlagen.transponierte',
    conceptId: 'lineare_algebra_grundlagen',
    officialNotation: "A, B",
    displayFormula: "$$(AB)^T=B^TA^T$$",
    intuition: "Beim Transponieren eines Produkts kehrt sich die Reihenfolge um.",
    derivationSteps: [
        {
            "label": "Transponierte",
            "text": "LA1.1 Notation und Verwendung von Matrizen",
            "math": "$$(AB)^T=B^TA^T$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lineare_algebra_grundlagen","Transponierte"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Transponierte — Beim Transponieren eines Produkts kehrt sich die Reihenfolge um.",
    relatedTaskFamilies: ["mathematik.taskfamily.lineare_algebra_grundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lineare_algebra_grundlagen.la1.p14.notation","mathematik.lineare_algebra_grundlagen.la1.p28.multiplikation"]
  }),
  card({
    id: 'mathematik.lineare_algebra_grundlagen.lineares_gleichungssystem',
    conceptId: 'lineare_algebra_grundlagen',
    officialNotation: "A, x, b",
    displayFormula: "$$Ax=b$$",
    intuition: "Kompakte Form eines Systems linearer Gleichungen.",
    derivationSteps: [
        {
            "label": "Lineares Gleichungssystem",
            "text": "LA1.1 Notation und Verwendung von Matrizen",
            "math": "$$Ax=b$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lineare_algebra_grundlagen","Lineares Gleichungssystem"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lineares Gleichungssystem — Kompakte Form eines Systems linearer Gleichungen.",
    relatedTaskFamilies: ["mathematik.taskfamily.lineare_algebra_grundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lineare_algebra_grundlagen.la1.p14.notation","mathematik.lineare_algebra_grundlagen.la1.p28.multiplikation"]
  }),
  card({
    id: 'mathematik.lineare_algebra_grundlagen.einheitsmatrix',
    conceptId: 'lineare_algebra_grundlagen',
    officialNotation: "I_n",
    displayFormula: "$$I_nA=AI_n=A$$",
    intuition: "Neutrales Element der Matrixmultiplikation.",
    derivationSteps: [
        {
            "label": "Einheitsmatrix",
            "text": "LA1.1 Notation und Verwendung von Matrizen",
            "math": "$$I_nA=AI_n=A$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lineare_algebra_grundlagen","Einheitsmatrix"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Einheitsmatrix — Neutrales Element der Matrixmultiplikation.",
    relatedTaskFamilies: ["mathematik.taskfamily.lineare_algebra_grundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lineare_algebra_grundlagen.la1.p14.notation","mathematik.lineare_algebra_grundlagen.la1.p28.multiplikation"]
  }),
  card({
    id: 'mathematik.lineare_algebra_struktur.spur',
    conceptId: 'lineare_algebra_struktur',
    officialNotation: "A",
    displayFormula: "$$\\operatorname{tr}(A)=\\sum_{i=1}^n a_{ii}$$",
    intuition: "Summe der Diagonalelemente einer quadratischen Matrix.",
    derivationSteps: [
        {
            "label": "Spur",
            "text": "LA2.1 Spur und Rang einer Matrix",
            "math": "$$\\operatorname{tr}(A)=\\sum_{i=1}^n a_{ii}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lineare_algebra_struktur","Spur"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Spur — Summe der Diagonalelemente einer quadratischen Matrix.",
    relatedTaskFamilies: ["mathematik.taskfamily.lineare_algebra_struktur-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lineare_algebra_struktur.la2.p27.rang","mathematik.lineare_algebra_struktur.la2.p38.determinante"]
  }),
  card({
    id: 'mathematik.lineare_algebra_struktur.determinante_2_2',
    conceptId: 'lineare_algebra_struktur',
    officialNotation: "a, b, c, d",
    displayFormula: "$$\\det\\begin{pmatrix}a&b\\\\ c&d\\end{pmatrix}=ad-bc$$",
    intuition: "Schnelltest für Singularität im 2×2-Fall.",
    derivationSteps: [
        {
            "label": "Determinante 2×2",
            "text": "LA2.1 Spur und Rang einer Matrix",
            "math": "$$\\det\\begin{pmatrix}a&b\\\\ c&d\\end{pmatrix}=ad-bc$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lineare_algebra_struktur","Determinante 2×2"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Determinante 2×2 — Schnelltest für Singularität im 2×2-Fall.",
    relatedTaskFamilies: ["mathematik.taskfamily.lineare_algebra_struktur-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lineare_algebra_struktur.la2.p27.rang","mathematik.lineare_algebra_struktur.la2.p38.determinante"]
  }),
  card({
    id: 'mathematik.lineare_algebra_struktur.inverse_2_2',
    conceptId: 'lineare_algebra_struktur',
    officialNotation: "A^{-1}",
    displayFormula: "$$A^{-1}=\\frac{1}{\\det(A)}\\begin{pmatrix}d&-b\\\\ -c&a\\end{pmatrix}$$",
    intuition: "Nur definiert für $\\det(A)\\neq 0$.",
    derivationSteps: [
        {
            "label": "Inverse 2×2",
            "text": "LA2.1 Spur und Rang einer Matrix",
            "math": "$$A^{-1}=\\frac{1}{\\det(A)}\\begin{pmatrix}d&-b\\\\ -c&a\\end{pmatrix}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lineare_algebra_struktur","Inverse 2×2"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Inverse 2×2 — Nur definiert für $\\det(A)\\neq 0$.",
    relatedTaskFamilies: ["mathematik.taskfamily.lineare_algebra_struktur-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lineare_algebra_struktur.la2.p27.rang","mathematik.lineare_algebra_struktur.la2.p38.determinante"]
  }),
  card({
    id: 'mathematik.lineare_algebra_struktur.eigenwertproblem',
    conceptId: 'lineare_algebra_struktur',
    officialNotation: "lambda, I",
    displayFormula: "$$\\det(A-\\lambda I)=0$$",
    intuition: "Charakteristische Gleichung zur Bestimmung der Eigenwerte.",
    derivationSteps: [
        {
            "label": "Eigenwertproblem",
            "text": "LA2.1 Spur und Rang einer Matrix",
            "math": "$$\\det(A-\\lambda I)=0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lineare_algebra_struktur","Eigenwertproblem"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Eigenwertproblem — Charakteristische Gleichung zur Bestimmung der Eigenwerte.",
    relatedTaskFamilies: ["mathematik.taskfamily.lineare_algebra_struktur-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lineare_algebra_struktur.la2.p27.rang","mathematik.lineare_algebra_struktur.la2.p38.determinante"]
  }),
  card({
    id: 'mathematik.analysis_ableitung_grundlagen.differenzenquotient',
    conceptId: 'analysis_ableitung_grundlagen',
    officialNotation: "x_0, \\Delta x",
    displayFormula: "$$\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$$",
    intuition: "Sekantensteigung als Vorstufe der Ableitung.",
    derivationSteps: [
        {
            "label": "Differenzenquotient",
            "text": "Ableitungsregeln",
            "math": "$$\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_ableitung_grundlagen","Differenzenquotient"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Differenzenquotient — Sekantensteigung als Vorstufe der Ableitung.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_ableitung_grundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_ableitung_grundlagen.an1.p15.regeln","mathematik.analysis_ableitung_grundlagen.an1.p30.interpretation"]
  }),
  card({
    id: 'mathematik.analysis_ableitung_grundlagen.potenzregel',
    conceptId: 'analysis_ableitung_grundlagen',
    officialNotation: "n",
    displayFormula: "$$\\frac{d}{dx}x^n=nx^{n-1}$$",
    intuition: "Basisregel für Polynome und Potenzen.",
    derivationSteps: [
        {
            "label": "Potenzregel",
            "text": "Ableitungsregeln",
            "math": "$$\\frac{d}{dx}x^n=nx^{n-1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_ableitung_grundlagen","Potenzregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Potenzregel — Basisregel für Polynome und Potenzen.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_ableitung_grundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_ableitung_grundlagen.an1.p15.regeln","mathematik.analysis_ableitung_grundlagen.an1.p30.interpretation"]
  }),
  card({
    id: 'mathematik.analysis_ableitung_grundlagen.kettenregel',
    conceptId: 'analysis_ableitung_grundlagen',
    officialNotation: "f, g",
    displayFormula: "$$\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)$$",
    intuition: "Standardregel für geschachtelte Funktionen.",
    derivationSteps: [
        {
            "label": "Kettenregel",
            "text": "Ableitungsregeln",
            "math": "$$\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_ableitung_grundlagen","Kettenregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kettenregel — Standardregel für geschachtelte Funktionen.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_ableitung_grundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_ableitung_grundlagen.an1.p15.regeln","mathematik.analysis_ableitung_grundlagen.an1.p30.interpretation"]
  }),
  card({
    id: 'mathematik.analysis_ableitung_grundlagen.log_und_exp_ableitung',
    conceptId: 'analysis_ableitung_grundlagen',
    officialNotation: "a",
    displayFormula: "$$\\frac{d}{dx}\\ln x=\\frac{1}{x},\\qquad \\frac{d}{dx}e^{ax}=ae^{ax}$$",
    intuition: "Wichtige Spezialfälle aus AN I.",
    derivationSteps: [
        {
            "label": "Log- und Exp-Ableitung",
            "text": "Ableitungsregeln",
            "math": "$$\\frac{d}{dx}\\ln x=\\frac{1}{x},\\qquad \\frac{d}{dx}e^{ax}=ae^{ax}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_ableitung_grundlagen","Log- und Exp-Ableitung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Log- und Exp-Ableitung — Wichtige Spezialfälle aus AN I.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_ableitung_grundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_ableitung_grundlagen.an1.p15.regeln","mathematik.analysis_ableitung_grundlagen.an1.p30.interpretation"]
  }),
  card({
    id: 'mathematik.analysis_monotonie_grenzwerte.monotoniebedingung',
    conceptId: 'analysis_monotonie_grenzwerte',
    officialNotation: "f'(x)",
    displayFormula: "$$f'(x)\\gtrless 0$$",
    intuition: "Vorzeichen der ersten Ableitung entscheidet über Steigen oder Fallen.",
    derivationSteps: [
        {
            "label": "Monotoniebedingung",
            "text": "AN1.3 Monoton wachsende und fallende Funktionen",
            "math": "$$f'(x)\\gtrless 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_monotonie_grenzwerte","Monotoniebedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Monotoniebedingung — Vorzeichen der ersten Ableitung entscheidet über Steigen oder Fallen.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_monotonie_grenzwerte-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_monotonie_grenzwerte.an1.p47.monotonie","mathematik.analysis_monotonie_grenzwerte.an1.p90.lhopital"]
  }),
  card({
    id: 'mathematik.analysis_monotonie_grenzwerte.lineare_approximation',
    conceptId: 'analysis_monotonie_grenzwerte',
    officialNotation: "x_0",
    displayFormula: "$$L(x)=f(x_0)+f'(x_0)(x-x_0)$$",
    intuition: "Tangente als lokale Ersatzfunktion.",
    derivationSteps: [
        {
            "label": "Lineare Approximation",
            "text": "AN1.3 Monoton wachsende und fallende Funktionen",
            "math": "$$L(x)=f(x_0)+f'(x_0)(x-x_0)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_monotonie_grenzwerte","Lineare Approximation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lineare Approximation — Tangente als lokale Ersatzfunktion.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_monotonie_grenzwerte-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_monotonie_grenzwerte.an1.p47.monotonie","mathematik.analysis_monotonie_grenzwerte.an1.p90.lhopital"]
  }),
  card({
    id: 'mathematik.analysis_monotonie_grenzwerte.newton_verfahren',
    conceptId: 'analysis_monotonie_grenzwerte',
    officialNotation: "x_n",
    displayFormula: "$$x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$$",
    intuition: "Numerische Iteration zur Nullstellensuche.",
    derivationSteps: [
        {
            "label": "Newton-Verfahren",
            "text": "AN1.3 Monoton wachsende und fallende Funktionen",
            "math": "$$x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_monotonie_grenzwerte","Newton-Verfahren"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Newton-Verfahren — Numerische Iteration zur Nullstellensuche.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_monotonie_grenzwerte-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_monotonie_grenzwerte.an1.p47.monotonie","mathematik.analysis_monotonie_grenzwerte.an1.p90.lhopital"]
  }),
  card({
    id: 'mathematik.analysis_monotonie_grenzwerte.l_h_pital',
    conceptId: 'analysis_monotonie_grenzwerte',
    officialNotation: "f, g",
    displayFormula: "$$\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}$$",
    intuition: "Nur bei geeigneten unbestimmten Quotientenformen.",
    derivationSteps: [
        {
            "label": "L’Hôpital",
            "text": "AN1.3 Monoton wachsende und fallende Funktionen",
            "math": "$$\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_monotonie_grenzwerte","L’Hôpital"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: L’Hôpital — Nur bei geeigneten unbestimmten Quotientenformen.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_monotonie_grenzwerte-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_monotonie_grenzwerte.an1.p47.monotonie","mathematik.analysis_monotonie_grenzwerte.an1.p90.lhopital"]
  }),
  card({
    id: 'mathematik.univariate_optimierung.bedingung_erster_ordnung',
    conceptId: 'univariate_optimierung',
    officialNotation: "x^*",
    displayFormula: "$$f'(x^\\*)=0$$",
    intuition: "Innere Kandidatenstelle.",
    derivationSteps: [
        {
            "label": "Bedingung erster Ordnung",
            "text": "OP1.1 Einführung",
            "math": "$$f'(x^\\*)=0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu univariate_optimierung","Bedingung erster Ordnung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bedingung erster Ordnung — Innere Kandidatenstelle.",
    relatedTaskFamilies: ["mathematik.taskfamily.univariate_optimierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.univariate_optimierung.op1.p10.einfuehrung","mathematik.univariate_optimierung.op1.p25.lokal"]
  }),
  card({
    id: 'mathematik.univariate_optimierung.bedingung_zweiter_ordnung',
    conceptId: 'univariate_optimierung',
    officialNotation: "f''(x^*)",
    displayFormula: "$$f''(x^\\*)<0\\;\\Rightarrow\\;\\text{lokales Maximum},\\qquad f''(x^\\*)>0\\;\\Rightarrow\\;\\text{lokales Minimum}$$",
    intuition: "Klassifikation bei differenzierbarer Funktion.",
    derivationSteps: [
        {
            "label": "Bedingung zweiter Ordnung",
            "text": "OP1.1 Einführung",
            "math": "$$f''(x^\\*)<0\\;\\Rightarrow\\;\\text{lokales Maximum},\\qquad f''(x^\\*)>0\\;\\Rightarrow\\;\\text{lokales Minimum}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu univariate_optimierung","Bedingung zweiter Ordnung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bedingung zweiter Ordnung — Klassifikation bei differenzierbarer Funktion.",
    relatedTaskFamilies: ["mathematik.taskfamily.univariate_optimierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.univariate_optimierung.op1.p10.einfuehrung","mathematik.univariate_optimierung.op1.p25.lokal"]
  }),
  card({
    id: 'mathematik.univariate_optimierung.randvergleich',
    conceptId: 'univariate_optimierung',
    officialNotation: "a, b",
    displayFormula: "$$\\{x^\\*,a,b\\}\\ \\text{prüfen auf}\\ [a,b]$$",
    intuition: "Auf kompakten Intervallen gehören Randpunkte in die Kandidatenmenge.",
    derivationSteps: [
        {
            "label": "Randvergleich",
            "text": "OP1.1 Einführung",
            "math": "$$\\{x^\\*,a,b\\}\\ \\text{prüfen auf}\\ [a,b]$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu univariate_optimierung","Randvergleich"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Randvergleich — Auf kompakten Intervallen gehören Randpunkte in die Kandidatenmenge.",
    relatedTaskFamilies: ["mathematik.taskfamily.univariate_optimierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.univariate_optimierung.op1.p10.einfuehrung","mathematik.univariate_optimierung.op1.p25.lokal"]
  }),
  card({
    id: 'mathematik.univariate_optimierung.vorzeichenwechseltest',
    conceptId: 'univariate_optimierung',
    officialNotation: "f'(x)",
    displayFormula: "$$f'(x)\\!:\\ +\\to - \\Rightarrow \\text{Maximum},\\qquad -\\to + \\Rightarrow \\text{Minimum}$$",
    intuition: "Reservezugriff, wenn die BZO nicht greift oder als zusätzliche Kontrolle.",
    derivationSteps: [
        {
            "label": "Vorzeichenwechseltest",
            "text": "OP1.1 Einführung",
            "math": "$$f'(x)\\!:\\ +\\to - \\Rightarrow \\text{Maximum},\\qquad -\\to + \\Rightarrow \\text{Minimum}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu univariate_optimierung","Vorzeichenwechseltest"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vorzeichenwechseltest — Reservezugriff, wenn die BZO nicht greift oder als zusätzliche Kontrolle.",
    relatedTaskFamilies: ["mathematik.taskfamily.univariate_optimierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.univariate_optimierung.op1.p10.einfuehrung","mathematik.univariate_optimierung.op1.p25.lokal"]
  }),
  card({
    id: 'mathematik.analysis_multivariat.partielle_ableitung',
    conceptId: 'analysis_multivariat',
    officialNotation: "x, y",
    displayFormula: "$$f_x(x,y)=\\frac{\\partial f}{\\partial x}(x,y)$$",
    intuition: "Marginale Änderung in x-Richtung bei festem y.",
    derivationSteps: [
        {
            "label": "Partielle Ableitung",
            "text": "AN2.1 Funktionen von zwei und mehr Variablen",
            "math": "$$f_x(x,y)=\\frac{\\partial f}{\\partial x}(x,y)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_multivariat","Partielle Ableitung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Partielle Ableitung — Marginale Änderung in x-Richtung bei festem y.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_multivariat-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_multivariat.an2.p14.funktionen","mathematik.analysis_multivariat.an2.p22.partiell"]
  }),
  card({
    id: 'mathematik.analysis_multivariat.totales_differential',
    conceptId: 'analysis_multivariat',
    officialNotation: "df, dx, dy",
    displayFormula: "$$df=f_x\\,dx+f_y\\,dy$$",
    intuition: "Lokale Gesamtänderung aus allen kleinen Einzeländerungen.",
    derivationSteps: [
        {
            "label": "Totales Differential",
            "text": "AN2.1 Funktionen von zwei und mehr Variablen",
            "math": "$$df=f_x\\,dx+f_y\\,dy$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_multivariat","Totales Differential"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Totales Differential — Lokale Gesamtänderung aus allen kleinen Einzeländerungen.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_multivariat-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_multivariat.an2.p14.funktionen","mathematik.analysis_multivariat.an2.p22.partiell"]
  }),
  card({
    id: 'mathematik.analysis_multivariat.kettenregel_mehrerer_variablen',
    conceptId: 'analysis_multivariat',
    officialNotation: "z, t",
    displayFormula: "$$\\frac{dz}{dt}=f_x\\frac{dx}{dt}+f_y\\frac{dy}{dt}$$",
    intuition: "Wenn x und y selbst von t abhängen.",
    derivationSteps: [
        {
            "label": "Kettenregel mehrerer Variablen",
            "text": "AN2.1 Funktionen von zwei und mehr Variablen",
            "math": "$$\\frac{dz}{dt}=f_x\\frac{dx}{dt}+f_y\\frac{dy}{dt}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_multivariat","Kettenregel mehrerer Variablen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kettenregel mehrerer Variablen — Wenn x und y selbst von t abhängen.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_multivariat-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_multivariat.an2.p14.funktionen","mathematik.analysis_multivariat.an2.p22.partiell"]
  }),
  card({
    id: 'mathematik.analysis_multivariat.homogenit_t',
    conceptId: 'analysis_multivariat',
    officialNotation: "t, k",
    displayFormula: "$$f(tx,ty)=t^k f(x,y)$$",
    intuition: "Skalierungstest einer Funktion vom Grad k.",
    derivationSteps: [
        {
            "label": "Homogenität",
            "text": "AN2.1 Funktionen von zwei und mehr Variablen",
            "math": "$$f(tx,ty)=t^k f(x,y)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_multivariat","Homogenität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Homogenität — Skalierungstest einer Funktion vom Grad k.",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_multivariat-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_multivariat.an2.p14.funktionen","mathematik.analysis_multivariat.an2.p22.partiell"]
  }),
  card({
    id: 'mathematik.analysis_multivariat.gradient',
    conceptId: 'analysis_multivariat',
    officialNotation: "\\nabla f",
    displayFormula: "$$\\nabla f(x,y)=\\begin{pmatrix}f_x(x,y)\\\\ f_y(x,y)\\end{pmatrix}$$",
    intuition: "Sammelt die partiellen Ableitungen als Richtungsinformation des stärksten Anstiegs.",
    derivationSteps: [
        {
            "label": "Gradient",
            "text": "AN2.1 Funktionen von zwei und mehr Variablen",
            "math": "$$\\nabla f(x,y)=\\begin{pmatrix}f_x(x,y)\\\\ f_y(x,y)\\end{pmatrix}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu analysis_multivariat","Gradient"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gradient — Sammelt die partiellen Ableitungen als Richtungsinformation des stärksten Anstie",
    relatedTaskFamilies: ["mathematik.taskfamily.analysis_multivariat-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.analysis_multivariat.an2.p14.funktionen","mathematik.analysis_multivariat.an2.p22.partiell"]
  }),
  card({
    id: 'mathematik.multivariate_optimierung.focs_im_2d_fall',
    conceptId: 'multivariate_optimierung',
    officialNotation: "f_x, f_y",
    displayFormula: "$$f_x=0,\\qquad f_y=0$$",
    intuition: "Innere stationäre Punkte.",
    derivationSteps: [
        {
            "label": "FOCs im 2D-Fall",
            "text": "OP2.1 Bivariate Optimierung",
            "math": "$$f_x=0,\\qquad f_y=0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu multivariate_optimierung","FOCs im 2D-Fall"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: FOCs im 2D-Fall — Innere stationäre Punkte.",
    relatedTaskFamilies: ["mathematik.taskfamily.multivariate_optimierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.multivariate_optimierung.op2.p25.bivariat","mathematik.multivariate_optimierung.op2.p35.multivariat"]
  }),
  card({
    id: 'mathematik.multivariate_optimierung.hesse_matrix',
    conceptId: 'multivariate_optimierung',
    officialNotation: "f_{xx}, f_{xy}",
    displayFormula: "$$H=\\begin{pmatrix}f_{xx}&f_{xy}\\\\ f_{yx}&f_{yy}\\end{pmatrix}$$",
    intuition: "Sammelt die zweiten partiellen Ableitungen.",
    derivationSteps: [
        {
            "label": "Hesse-Matrix",
            "text": "OP2.1 Bivariate Optimierung",
            "math": "$$H=\\begin{pmatrix}f_{xx}&f_{xy}\\\\ f_{yx}&f_{yy}\\end{pmatrix}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu multivariate_optimierung","Hesse-Matrix"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Hesse-Matrix — Sammelt die zweiten partiellen Ableitungen.",
    relatedTaskFamilies: ["mathematik.taskfamily.multivariate_optimierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.multivariate_optimierung.op2.p25.bivariat","mathematik.multivariate_optimierung.op2.p35.multivariat"]
  }),
  card({
    id: 'mathematik.multivariate_optimierung.hesse_determinante',
    conceptId: 'multivariate_optimierung',
    officialNotation: "D",
    displayFormula: "$$D=f_{xx}f_{yy}-f_{xy}^2$$",
    intuition: "Zentrale Größe zur lokalen Klassifikation im 2×2-Fall.",
    derivationSteps: [
        {
            "label": "Hesse-Determinante",
            "text": "OP2.1 Bivariate Optimierung",
            "math": "$$D=f_{xx}f_{yy}-f_{xy}^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu multivariate_optimierung","Hesse-Determinante"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Hesse-Determinante — Zentrale Größe zur lokalen Klassifikation im 2×2-Fall.",
    relatedTaskFamilies: ["mathematik.taskfamily.multivariate_optimierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.multivariate_optimierung.op2.p25.bivariat","mathematik.multivariate_optimierung.op2.p35.multivariat"]
  }),
  card({
    id: 'mathematik.lagrange.lagrange_funktion',
    conceptId: 'lagrange',
    officialNotation: "\\mathcal{L}, lambda, c, g",
    displayFormula: "$$\\mathcal{L}(x,y,\\lambda)=f(x,y)+\\lambda\\,(c-g(x,y))$$",
    intuition: "Standardform für eine Gleichungsnebenbedingung.",
    derivationSteps: [
        {
            "label": "Lagrange-Funktion",
            "text": "1. Lagrange-Funktion aufschreiben",
            "math": "$$\\mathcal{L}(x,y,\\lambda)=f(x,y)+\\lambda\\,(c-g(x,y))$$"
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
    examShortcut: "Merke: Lagrange-Funktion — Standardform für eine Gleichungsnebenbedingung.",
    relatedTaskFamilies: ["mathematik.taskfamily.lagrange-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lagrange.op2.p43.lagrange_funktion","mathematik.lagrange.op2.p49.lagrange_pruefen"]
  }),
  card({
    id: 'mathematik.lagrange.foc_system',
    conceptId: 'lagrange',
    officialNotation: "\\mathcal{L}_x, \\mathcal{L}_\\lambda",
    displayFormula: "$$\\mathcal{L}_x=0,\\qquad \\mathcal{L}_y=0,\\qquad \\mathcal{L}_\\lambda=0$$",
    intuition: "Drei Gleichungen für zwei Wahlvariablen plus Multiplikator.",
    derivationSteps: [
        {
            "label": "FOC-System",
            "text": "1. Lagrange-Funktion aufschreiben",
            "math": "$$\\mathcal{L}_x=0,\\qquad \\mathcal{L}_y=0,\\qquad \\mathcal{L}_\\lambda=0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lagrange","FOC-System"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: FOC-System — Drei Gleichungen für zwei Wahlvariablen plus Multiplikator.",
    relatedTaskFamilies: ["mathematik.taskfamily.lagrange-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lagrange.op2.p43.lagrange_funktion","mathematik.lagrange.op2.p49.lagrange_pruefen"]
  }),
  card({
    id: 'mathematik.lagrange.tangentiallesart',
    conceptId: 'lagrange',
    officialNotation: "f_x, g_x",
    displayFormula: "$$\\frac{f_x}{f_y}=\\frac{g_x}{g_y}$$",
    intuition: "Verhältnis marginaler Wirkungen im inneren Optimum unter Restriktion.",
    derivationSteps: [
        {
            "label": "Tangentiallesart",
            "text": "1. Lagrange-Funktion aufschreiben",
            "math": "$$\\frac{f_x}{f_y}=\\frac{g_x}{g_y}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu lagrange","Tangentiallesart"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Tangentiallesart — Verhältnis marginaler Wirkungen im inneren Optimum unter Restriktion.",
    relatedTaskFamilies: ["mathematik.taskfamily.lagrange-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.lagrange.op2.p43.lagrange_funktion","mathematik.lagrange.op2.p49.lagrange_pruefen"]
  }),
  card({
    id: 'mathematik.integralrechnung.hauptsatz_der_analysis',
    conceptId: 'integralrechnung',
    officialNotation: "a, b, F",
    displayFormula: "$$\\int_a^b f(x)\\,dx=F(b)-F(a)$$",
    intuition: "Berechnung bestimmter Integrale über eine Stammfunktion.",
    derivationSteps: [
        {
            "label": "Hauptsatz der Analysis",
            "text": "AN3.1 Grundlagen",
            "math": "$$\\int_a^b f(x)\\,dx=F(b)-F(a)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu integralrechnung","Hauptsatz der Analysis"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Hauptsatz der Analysis — Berechnung bestimmter Integrale über eine Stammfunktion.",
    relatedTaskFamilies: ["mathematik.taskfamily.integralrechnung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.integralrechnung.an3.p23.grundlagen","mathematik.integralrechnung.an3.p31.partiell"]
  }),
  card({
    id: 'mathematik.integralrechnung.partielle_integration',
    conceptId: 'integralrechnung',
    officialNotation: "u, v'",
    displayFormula: "$$\\int u\\,v'\\,dx=uv-\\int u'v\\,dx$$",
    intuition: "Standardmethode für Produkte.",
    derivationSteps: [
        {
            "label": "Partielle Integration",
            "text": "AN3.1 Grundlagen",
            "math": "$$\\int u\\,v'\\,dx=uv-\\int u'v\\,dx$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu integralrechnung","Partielle Integration"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Partielle Integration — Standardmethode für Produkte.",
    relatedTaskFamilies: ["mathematik.taskfamily.integralrechnung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.integralrechnung.an3.p23.grundlagen","mathematik.integralrechnung.an3.p31.partiell"]
  }),
  card({
    id: 'mathematik.integralrechnung.substitution',
    conceptId: 'integralrechnung',
    officialNotation: "u, g",
    displayFormula: "$$u=g(x),\\qquad du=g'(x)\\,dx$$",
    intuition: "Standardmethode für verkettete Ausdrücke.",
    derivationSteps: [
        {
            "label": "Substitution",
            "text": "AN3.1 Grundlagen",
            "math": "$$u=g(x),\\qquad du=g'(x)\\,dx$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu integralrechnung","Substitution"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Substitution — Standardmethode für verkettete Ausdrücke.",
    relatedTaskFamilies: ["mathematik.taskfamily.integralrechnung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.integralrechnung.an3.p23.grundlagen","mathematik.integralrechnung.an3.p31.partiell"]
  }),
  card({
    id: 'mathematik.integralrechnung.newton_leibniz',
    conceptId: 'integralrechnung',
    officialNotation: "t, a, b",
    displayFormula: "$$\\frac{d}{dt}\\int_{a(t)}^{b(t)} f(x)\\,dx=f(b(t))b'(t)-f(a(t))a'(t)$$",
    intuition: "Differenzieren von Integralen mit variablen Grenzen.",
    derivationSteps: [
        {
            "label": "Newton-Leibniz",
            "text": "AN3.1 Grundlagen",
            "math": "$$\\frac{d}{dt}\\int_{a(t)}^{b(t)} f(x)\\,dx=f(b(t))b'(t)-f(a(t))a'(t)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu integralrechnung","Newton-Leibniz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Newton-Leibniz — Differenzieren von Integralen mit variablen Grenzen.",
    relatedTaskFamilies: ["mathematik.taskfamily.integralrechnung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.integralrechnung.an3.p23.grundlagen","mathematik.integralrechnung.an3.p31.partiell"]
  }),
  card({
    id: 'mathematik.r_begleitpraxis.plot_workflow',
    conceptId: 'r_begleitpraxis',
    officialNotation: "a, b",
    displayFormula: "$$\\texttt{curve(f,\\ from=a,\\ to=b)}$$",
    intuition: "Kurven einer Funktion im gewählten Intervall sichtbar machen.",
    derivationSteps: [
        {
            "label": "Plot-Workflow",
            "text": "R-Übungsaufgaben zu Einführung I: Algebra und Mengenlehre",
            "math": "$$\\texttt{curve(f,\\ from=a,\\ to=b)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu r_begleitpraxis","Plot-Workflow"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Plot-Workflow — Kurven einer Funktion im gewählten Intervall sichtbar machen.",
    relatedTaskFamilies: ["mathematik.taskfamily.r_begleitpraxis-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.r_begleitpraxis.re1.p01.e1","mathematik.r_begleitpraxis.ran1.p01.an1"]
  }),
  card({
    id: 'mathematik.r_begleitpraxis.matrix_workflow',
    conceptId: 'r_begleitpraxis',
    officialNotation: "A, B",
    displayFormula: "$$\\texttt{A \\%*\\% B},\\ \\texttt{solve(A)},\\ \\texttt{eigen(A)}$$",
    intuition: "Standardbefehle für Produkt, Inverse und Eigenwertkontrolle.",
    derivationSteps: [
        {
            "label": "Matrix-Workflow",
            "text": "R-Übungsaufgaben zu Einführung I: Algebra und Mengenlehre",
            "math": "$$\\texttt{A \\%*\\% B},\\ \\texttt{solve(A)},\\ \\texttt{eigen(A)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu r_begleitpraxis","Matrix-Workflow"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Matrix-Workflow — Standardbefehle für Produkt, Inverse und Eigenwertkontrolle.",
    relatedTaskFamilies: ["mathematik.taskfamily.r_begleitpraxis-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.r_begleitpraxis.re1.p01.e1","mathematik.r_begleitpraxis.ran1.p01.an1"]
  }),
  card({
    id: 'mathematik.r_begleitpraxis.numerische_methoden',
    conceptId: 'r_begleitpraxis',
    officialNotation: "",
    displayFormula: "$$\\texttt{optimize(...)} ,\\ \\texttt{optim(...)} ,\\ \\texttt{integrate(...)}$$",
    intuition: "Kontrollbefehle für Optimierungs- und Integrationsaufgaben.",
    derivationSteps: [
        {
            "label": "Numerische Methoden",
            "text": "R-Übungsaufgaben zu Einführung I: Algebra und Mengenlehre",
            "math": "$$\\texttt{optimize(...)} ,\\ \\texttt{optim(...)} ,\\ \\texttt{integrate(...)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu r_begleitpraxis","Numerische Methoden"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Numerische Methoden — Kontrollbefehle für Optimierungs- und Integrationsaufgaben.",
    relatedTaskFamilies: ["mathematik.taskfamily.r_begleitpraxis-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mathematik.r_begleitpraxis.re1.p01.e1","mathematik.r_begleitpraxis.ran1.p01.an1"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

