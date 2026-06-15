// ============================================================
// FORMULA CARDS — Mikroökonomik II
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'mikro2';

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
    id: 'mikro2.monopol_preissetzung.grenzerl_s_im_monopol',
    conceptId: 'monopol_preissetzung',
    officialNotation: "y, p, epsilon",
    displayFormula: "$$E'(y)=p(y)\\left(1-\\frac{1}{|\\varepsilon_{xp}|}\\right)$$",
    intuition: "Kursnotation für Grenzerlös bei fallender Nachfrage.",
    derivationSteps: [
        {
            "label": "Grenzerlös im Monopol",
            "text": "Preissetzung im Monopol und Wohlfahrtseffekte",
            "math": "$$E'(y)=p(y)\\left(1-\\frac{1}{|\\varepsilon_{xp}|}\\right)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monopol_preissetzung","Grenzerlös im Monopol"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Grenzerlös im Monopol — Kursnotation für Grenzerlös bei fallender Nachfrage.",
    relatedTaskFamilies: ["mikro2.taskfamily.monopol_preissetzung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.monopol_preissetzung.vl02.p02.markup"]
  }),
  card({
    id: 'mikro2.monopol_preissetzung.monopolaufschlag',
    conceptId: 'monopol_preissetzung',
    officialNotation: "monopol_preissetzung",
    displayFormula: "$$p(y)=\\left(1-\\frac{1}{|\\varepsilon_{xp}|}\\right)^{-1}C'(y)$$",
    intuition: "Preis als Aufschlag auf Grenzkosten.",
    derivationSteps: [
        {
            "label": "Monopolaufschlag",
            "text": "Preissetzung im Monopol und Wohlfahrtseffekte",
            "math": "$$p(y)=\\left(1-\\frac{1}{|\\varepsilon_{xp}|}\\right)^{-1}C'(y)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monopol_preissetzung","Monopolaufschlag"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Monopolaufschlag — Preis als Aufschlag auf Grenzkosten.",
    relatedTaskFamilies: ["mikro2.taskfamily.monopol_preissetzung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.monopol_preissetzung.vl02.p02.monopoly-markup"]
  }),
  card({
    id: 'mikro2.monopol_preissetzung.lerner_index',
    conceptId: 'monopol_preissetzung',
    officialNotation: "monopol_preissetzung",
    displayFormula: "$$\\frac{p-MC}{p}=\\frac{1}{|\\varepsilon|}$$",
    intuition: "Markup steigt mit Marktmacht.",
    derivationSteps: [
        {
            "label": "Lerner-Index",
            "text": "Preissetzung im Monopol und Wohlfahrtseffekte",
            "math": "$$\\frac{p-MC}{p}=\\frac{1}{|\\varepsilon|}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monopol_preissetzung","Lerner-Index"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lerner-Index — Markup steigt mit Marktmacht.",
    relatedTaskFamilies: ["mikro2.taskfamily.monopol_preissetzung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.monopol_preissetzung.vl02.p02.monopoly-markup"]
  }),
  card({
    id: 'mikro2.monopol_preissetzung.lineares_monopol',
    conceptId: 'monopol_preissetzung',
    officialNotation: "p(y)=1-y, C'(y)=c",
    displayFormula: "$$y^M=\\frac{1-c}{2},\\quad p^M=\\frac{1+c}{2},\\quad \\pi^M=\\frac{(1-c)^2}{4}$$",
    intuition: "VL2-Zahlenmodell für ein lineares Monopol mit konstanten Grenzkosten.",
    derivationSteps: [
        {
            "label": "Lineares Monopol",
            "text": "Aus p(y)=1-y und konstanten Grenzkosten c folgen Monopolmenge, Monopolpreis und Gewinn.",
            "math": "$$y^M=\\frac{1-c}{2},\\quad p^M=\\frac{1+c}{2},\\quad \\pi^M=\\frac{(1-c)^2}{4}$$"
        }
    ],
    assumptions: ["Inverse Nachfrage p(y)=1-y","Konstante Grenz- und Stückkosten c","Keine Fixkosten"],
    appliesWhen: ["VL2-Zahlenbeispiel zum Monopol","Vergleich mit Oligopol-/Wettbewerbsmodellen"],
    failsWhen: ["Nichtlineare Nachfrage","Fixkosten oder nicht konstante Grenzkosten"],
    examShortcut: "Bei p(y)=1-y liegt die Monopolmenge halb zwischen Null und Wettbewerbsmenge 1-c.",
    relatedTaskFamilies: ["mikro2.taskfamily.monopol_preissetzung-vl-apply"],
    commonMistakes: ["p^M vor y^M bestimmen","Gewinn mit Erlös verwechseln"],
    anchorIds: ["mikro2.monopol_preissetzung.vl02.p10.linear-monopoly"]
  }),
  card({
    id: 'mikro2.monopol_preissetzung.monopol_wohlfahrtsverlust',
    conceptId: 'monopol_preissetzung',
    officialNotation: "DWL^M",
    displayFormula: "$$DWL^M=\\frac{(1-c)^2}{8}$$",
    intuition: "Wohlfahrtsverlust des linearen Monopols gegenüber vollkommener Konkurrenz.",
    derivationSteps: [
        {
            "label": "Wohlfahrtsvergleich",
            "text": "VL2 gibt Konsumentenrente, Produzentenrente und Wohlfahrtsverlust für das lineare Monopolmodell an.",
            "math": "$$KR^M=\\frac{(1-c)^2}{8},\\quad PR^M=\\frac{(1-c)^2}{4},\\quad DWL^M=\\frac{(1-c)^2}{8}$$"
        }
    ],
    assumptions: ["Lineares VL2-Monopolmodell","Vollkommene Konkurrenz als Referenz","Keine Fixkosten"],
    appliesWhen: ["Wohlfahrtsvergleich Monopol vs. Konkurrenz","DWL-Rechnung im linearen Modell"],
    failsWhen: ["Andere Nachfrage- oder Kostenfunktion","Keine Wettbewerbsreferenz gegeben"],
    examShortcut: "Im VL2-Linearmodell entspricht der Monopol-DWL der Monopol-KR: (1-c)^2/8.",
    relatedTaskFamilies: ["mikro2.taskfamily.monopol_preissetzung-vl-apply"],
    commonMistakes: ["DWL mit Monopolgewinn verwechseln","Konkurrenzwohlfahrt nicht als Referenz setzen"],
    anchorIds: ["mikro2.monopol_preissetzung.vl02.p11.monopoly-welfare"]
  }),
  card({
    id: 'mikro2.preisdiskriminierung.preisdiskriminierung_dritten_gra',
    conceptId: 'preisdiskriminierung',
    officialNotation: "preisdiskriminierung",
    displayFormula: "$$E_1'(y_1)=E_2'(y_2)=C'(y_1+y_2)$$",
    intuition: "Grenzerlöse werden zwischen Teilmärkten ausgeglichen.",
    derivationSteps: [
        {
            "label": "Preisdiskriminierung dritten Grades",
            "text": "Preisdiskriminierung dritten Grades",
            "math": "$$E_1'(y_1)=E_2'(y_2)=C'(y_1+y_2)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu preisdiskriminierung","Preisdiskriminierung dritten Grades"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Preisdiskriminierung dritten Grades — Grenzerlöse werden zwischen Teilmärkten ausgeglichen.",
    relatedTaskFamilies: ["mikro2.taskfamily.preisdiskriminierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.preisdiskriminierung.vl03.p03.mr-equalization"]
  }),
  card({
    id: 'mikro2.preisdiskriminierung.elastizitaetenregel_dritter_grad',
    conceptId: 'preisdiskriminierung',
    officialNotation: "p_1/p_2",
    displayFormula: "$$\\frac{p_1}{p_2}=\\frac{1-|\\varepsilon_2|^{-1}}{1-|\\varepsilon_1|^{-1}}$$",
    intuition: "Der Monopolist setzt den höheren Preis im Teilmarkt mit weniger preiselastischer Nachfrage.",
    derivationSteps: [
        {
            "label": "Elastizitätenschreibweise",
            "text": "Aus dem Ausgleich der Grenzerlöse folgt die Preisrelation zwischen den Teilmärkten.",
            "math": "$$\\frac{p_1}{p_2}=\\frac{1-|\\varepsilon_2|^{-1}}{1-|\\varepsilon_1|^{-1}}$$"
        }
    ],
    assumptions: ["Klar getrennte Teilmärkte","Keine Arbitrage zwischen Gruppen","Grenzerlöse in Elastizitätenschreibweise"],
    appliesWhen: ["Preisdiskriminierung dritten Grades","Preisvergleich über Nachfrageelastizitäten"],
    failsWhen: ["Gruppen nicht trennbar","Zweiter Grad oder perfekte Preisdiskriminierung"],
    examShortcut: "Weniger elastische Gruppe zahlt den höheren Preis.",
    relatedTaskFamilies: ["mikro2.taskfamily.preisdiskriminierung-vl-pattern"],
    commonMistakes: ["Elastizitätenrichtung umdrehen","Preisverhältnis statt Mengenverhältnis interpretieren"],
    anchorIds: ["mikro2.preisdiskriminierung.vl03.p04.elasticity-price-rule"]
  }),
  card({
    id: 'mikro2.preisdiskriminierung.gruppenerl_s',
    conceptId: 'preisdiskriminierung',
    officialNotation: "preisdiskriminierung",
    displayFormula: "$$E_i(y_i)=p_i(y_i)y_i,\\quad i=1,2$$",
    intuition: "Erlös je Kundengruppe.",
    derivationSteps: [
        {
            "label": "Gruppenerlös",
            "text": "Preisdiskriminierung dritten Grades",
            "math": "$$E_i(y_i)=p_i(y_i)y_i,\\quad i=1,2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu preisdiskriminierung","Gruppenerlös"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gruppenerlös — Erlös je Kundengruppe.",
    relatedTaskFamilies: ["mikro2.taskfamily.preisdiskriminierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.preisdiskriminierung.vl03.p02.third-degree","mikro2.preisdiskriminierung.vl03.p03.mr-equalization"]
  }),
  card({
    id: 'mikro2.preisdiskriminierung.gruppenerl_s_kurz',
    conceptId: 'preisdiskriminierung',
    officialNotation: "preisdiskriminierung",
    displayFormula: "$$E_i(y_i)=p_i(y_i)y_i,\\quad i=1,2$$",
    intuition: "Erlös je Kundengruppe.",
    derivationSteps: [
        {
            "label": "Gruppenerlös (Kurz)",
            "text": "Preisdiskriminierung dritten Grades",
            "math": "$$E_i(y_i)=p_i(y_i)y_i,\\quad i=1,2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu preisdiskriminierung","Gruppenerlös (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gruppenerlös (Kurz) — Erlös je Kundengruppe.",
    relatedTaskFamilies: ["mikro2.taskfamily.preisdiskriminierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.preisdiskriminierung.vl03.p02.third-degree","mikro2.preisdiskriminierung.vl03.p03.mr-equalization"]
  }),
  card({
    id: 'mikro2.spieltheorie_statisch.nash_bedingung',
    conceptId: 'spieltheorie_statisch',
    officialNotation: "s_i, s_minus_i",
    displayFormula: "$$s_i^* \\in \\arg\\max_{s_i} u_i(s_i, s_{-i}^*)$$",
    intuition: "Beste Antwort auf Gleichgewichtsstrategien",
    derivationSteps: [
        {
            "label": "Nash-Bedingung",
            "text": "Spieltheorie I: Auszahlungsmatrix, dominante Strategien, Nash",
            "math": "$$s_i^* \\in \\arg\\max_{s_i} u_i(s_i, s_{-i}^*)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu spieltheorie_statisch","Nash-Bedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nash-Bedingung — Beste Antwort auf Gleichgewichtsstrategien",
    relatedTaskFamilies: ["mikro2.taskfamily.spieltheorie_statisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.spieltheorie_statisch.vl09.p01.programm","mikro2.spieltheorie_statisch.vl09.p05.nash"]
  }),
  card({
    id: 'mikro2.spieltheorie_statisch.nash_bedingung_kurz',
    conceptId: 'spieltheorie_statisch',
    officialNotation: "s_i, s_minus_i",
    displayFormula: "$$s_i^* \\in \\arg\\max_{s_i} u_i(s_i, s_{-i}^*)$$",
    intuition: "Beste Antwort auf Gleichgewichtsstrategien",
    derivationSteps: [
        {
            "label": "Nash-Bedingung (Kurz)",
            "text": "Spieltheorie I: Auszahlungsmatrix, dominante Strategien, Nash",
            "math": "$$s_i^* \\in \\arg\\max_{s_i} u_i(s_i, s_{-i}^*)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu spieltheorie_statisch","Nash-Bedingung (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nash-Bedingung (Kurz) — Beste Antwort auf Gleichgewichtsstrategien",
    relatedTaskFamilies: ["mikro2.taskfamily.spieltheorie_statisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.spieltheorie_statisch.vl09.p01.programm","mikro2.spieltheorie_statisch.vl09.p05.nash"]
  }),
  card({
    id: 'mikro2.spieltheorie_statisch.nash_bedingung_kurz_kurz',
    conceptId: 'spieltheorie_statisch',
    officialNotation: "s_i, s_minus_i",
    displayFormula: "$$s_i^* \\in \\arg\\max_{s_i} u_i(s_i, s_{-i}^*)$$",
    intuition: "Beste Antwort auf Gleichgewichtsstrategien",
    derivationSteps: [
        {
            "label": "Nash-Bedingung (Kurz) (Kurz)",
            "text": "Spieltheorie I: Auszahlungsmatrix, dominante Strategien, Nash",
            "math": "$$s_i^* \\in \\arg\\max_{s_i} u_i(s_i, s_{-i}^*)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu spieltheorie_statisch","Nash-Bedingung (Kurz) (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nash-Bedingung (Kurz) (Kurz) — Beste Antwort auf Gleichgewichtsstrategien",
    relatedTaskFamilies: ["mikro2.taskfamily.spieltheorie_statisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.spieltheorie_statisch.vl09.p01.programm","mikro2.spieltheorie_statisch.vl09.p05.nash"]
  }),
  card({
    id: 'mikro2.spieltheorie_dynamisch.gemischtes_ng',
    conceptId: 'spieltheorie_dynamisch',
    officialNotation: "spieltheorie_dynamisch",
    displayFormula: "$$\\sigma_i^* \\in \\arg\\max_{\\sigma_i} E[u_i(\\sigma_i,\\sigma_{-i}^*)]$$",
    intuition: "Beste Antwort in gemischten Strategien.",
    derivationSteps: [
        {
            "label": "Gemischtes NG",
            "text": "Gemischte Strategien und spezielle Spiele",
            "math": "$$\\sigma_i^* \\in \\arg\\max_{\\sigma_i} E[u_i(\\sigma_i,\\sigma_{-i}^*)]$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu spieltheorie_dynamisch","Gemischtes NG"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gemischtes NG — Beste Antwort in gemischten Strategien.",
    relatedTaskFamilies: ["mikro2.taskfamily.spieltheorie_dynamisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.spieltheorie_dynamisch.vl10.p01.mixed","mikro2.spieltheorie_dynamisch.vl11.p01.sequential"]
  }),
  card({
    id: 'mikro2.spieltheorie_dynamisch.kooperationsbedingung',
    conceptId: 'spieltheorie_dynamisch',
    officialNotation: "spieltheorie_dynamisch",
    displayFormula: "$$\\delta \\geq \\frac{\\pi_D - \\pi_C}{\\pi_D - \\pi_P}$$",
    intuition: "Folk-Theorem-Logik für Trigger-Strategien.",
    derivationSteps: [
        {
            "label": "Kooperationsbedingung",
            "text": "Gemischte Strategien und spezielle Spiele",
            "math": "$$\\delta \\geq \\frac{\\pi_D - \\pi_C}{\\pi_D - \\pi_P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu spieltheorie_dynamisch","Kooperationsbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kooperationsbedingung — Folk-Theorem-Logik für Trigger-Strategien.",
    relatedTaskFamilies: ["mikro2.taskfamily.spieltheorie_dynamisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.spieltheorie_dynamisch.vl10.p01.mixed","mikro2.spieltheorie_dynamisch.vl11.p01.sequential"]
  }),
  card({
    id: 'mikro2.spieltheorie_dynamisch.kooperationsbedingung_kurz',
    conceptId: 'spieltheorie_dynamisch',
    officialNotation: "spieltheorie_dynamisch",
    displayFormula: "$$\\delta \\geq \\frac{\\pi_D - \\pi_C}{\\pi_D - \\pi_P}$$",
    intuition: "Folk-Theorem-Logik für Trigger-Strategien.",
    derivationSteps: [
        {
            "label": "Kooperationsbedingung (Kurz)",
            "text": "Gemischte Strategien und spezielle Spiele",
            "math": "$$\\delta \\geq \\frac{\\pi_D - \\pi_C}{\\pi_D - \\pi_P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu spieltheorie_dynamisch","Kooperationsbedingung (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kooperationsbedingung (Kurz) — Folk-Theorem-Logik für Trigger-Strategien.",
    relatedTaskFamilies: ["mikro2.taskfamily.spieltheorie_dynamisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.spieltheorie_dynamisch.vl10.p01.mixed","mikro2.spieltheorie_dynamisch.vl11.p01.sequential"]
  }),
  card({
    id: 'mikro2.oligopol_cournot_bertrand.gewinnfunktion_i',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: "a, b, c",
    displayFormula: "$$\\pi_i = (a - b(q_i + q_j))q_i - c q_i$$",
    intuition: "Lineare Nachfrage",
    derivationSteps: [
        {
            "label": "Gewinnfunktion (i)",
            "text": "Cournot-Duopol und Cournot-Wettbewerb mit vielen Anbietern",
            "math": "$$\\pi_i = (a - b(q_i + q_j))q_i - c q_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu oligopol_cournot_bertrand","Gewinnfunktion (i)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gewinnfunktion (i) — Lineare Nachfrage",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_cournot_bertrand-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl06.p03.reaction"]
  }),
  card({
    id: 'mikro2.oligopol_cournot_bertrand.cournot_menge_symm',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: "a, c, b",
    displayFormula: "$$q^* = \\frac{a-c}{3b}$$",
    intuition: "Duopol-Gleichgewicht",
    derivationSteps: [
        {
            "label": "Cournot-Menge (symm.)",
            "text": "Cournot-Duopol und Cournot-Wettbewerb mit vielen Anbietern",
            "math": "$$q^* = \\frac{a-c}{3b}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu oligopol_cournot_bertrand","Cournot-Menge (symm.)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Cournot-Menge (symm.) — Duopol-Gleichgewicht",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_cournot_bertrand-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl06.p11.symmetric-cournot"]
  }),
  card({
    id: 'mikro2.oligopol_cournot_bertrand.cournot_menge_symm_kurz',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: "a, c, b",
    displayFormula: "$$q^* = \\frac{a-c}{3b}$$",
    intuition: "Duopol-Gleichgewicht",
    derivationSteps: [
        {
            "label": "Cournot-Menge (symm.) (Kurz)",
            "text": "Cournot-Duopol und Cournot-Wettbewerb mit vielen Anbietern",
            "math": "$$q^* = \\frac{a-c}{3b}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu oligopol_cournot_bertrand","Cournot-Menge (symm.) (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Cournot-Menge (symm.) (Kurz) — Duopol-Gleichgewicht",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_cournot_bertrand-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl06.p11.symmetric-cournot"]
  }),
  card({
    id: 'mikro2.oligopol_cournot_bertrand.cournot_output_asymmetrisch_vl',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: "y_i^C",
    displayFormula: "$$y_i^C=\\frac{1-2c_i+c_j}{3}$$",
    intuition: "Cournot-Output bei linearer inverser Nachfrage p=1-y_i-y_j und unterschiedlichen Grenzkosten.",
    derivationSteps: [
        {
            "label": "Cournot-Reaktionsfunktionen einsetzen",
            "text": "VL6 löst die Reaktionsfunktionen im Gleichgewicht und erhält den Output von Unternehmen i.",
            "math": "$$y_i^C=\\frac{1-2c_i+c_j}{3}$$"
        }
    ],
    assumptions: ["Inverse Nachfrage p=1-y_i-y_j","Konstante Grenzkosten c_i und c_j","Simultane Mengenwahl"],
    appliesWhen: ["Cournot-Duopol mit unterschiedlichen Kosten","Vergleich eigener und fremder Grenzkosten"],
    failsWhen: ["Preiswettbewerb statt Mengenwettbewerb","Nichtlineare Nachfrage ohne Normalisierung"],
    examShortcut: "Eigene Grenzkosten zählen doppelt negativ, fremde Grenzkosten positiv.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_cournot_bertrand-vl-pattern"],
    commonMistakes: ["c_i und c_j vertauschen","Stackelberg-Reihenfolge in Cournot-Aufgabe hineinlesen"],
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl06.p06.cournot-output"]
  }),
  card({
    id: 'mikro2.oligopol_cournot_bertrand.bertrand_paradox',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: "p=c",
    displayFormula: "$$p=c,\\quad \\pi_i=0$$",
    intuition: "Bei Preiswettbewerb mit identischen Gütern führt schon ein Duopol zur Konkurrenzlösung.",
    derivationSteps: [
        {
            "label": "Unterbietungslogik",
            "text": "Solange p_i>c ist, kann ein Unternehmen den Konkurrenten profitabel unterbieten und die gesamte Nachfrage gewinnen.",
            "math": "$$p=c,\\quad \\pi_i=0$$"
        }
    ],
    assumptions: ["Identische Güter","Konstante Grenzkosten","Keine Kapazitätsbeschränkungen","Vollkommene Information"],
    appliesWhen: ["Bertrand-Modell mit homogenen Gütern","Cournot-vs.-Bertrand-Vergleich"],
    failsWhen: ["Produktdifferenzierung","Kapazitätsbeschränkungen","Unterschiedliche Grenzkosten"],
    examShortcut: "Homogener Bertrand: Preis gleich Grenzkosten, Nullgewinn.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_cournot_bertrand-vl-apply"],
    commonMistakes: ["Cournot-Markup auf Bertrand übertragen","Nullgewinnbedingung vergessen"],
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl08.p03.bertrand-paradox"]
  }),
  card({
    id: 'mikro2.oligopol_cournot_bertrand.bertrand_differenziert_preis',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: "p^B",
    displayFormula: "$$p^B=\\frac{1-\\gamma+c}{2-\\gamma}$$",
    intuition: "Gleichgewichtspreis im Bertrand-Modell mit differenzierten Gütern und identischen Grenzkosten.",
    derivationSteps: [
        {
            "label": "Preisreaktionsfunktionen",
            "text": "VL8 setzt die Reaktionsfunktion des Konkurrenten ein und löst den symmetrischen Preis.",
            "math": "$$p^B=\\frac{1-\\gamma+c}{2-\\gamma}$$"
        }
    ],
    assumptions: ["Differenzierte Güter","Identische Grenzkosten c_i=c_j=c","Direkte Nachfrage D_i(p_1,p_2)=a-bp_i+dp_j"],
    appliesWhen: ["Bertrand-Wettbewerb mit differenzierten Gütern","Vergleich Produktdifferenzierung und Preisniveau"],
    failsWhen: ["Homogene Güter mit Bertrand-Paradox","Mengenwettbewerb statt Preiswettbewerb"],
    examShortcut: "Sinkendes gamma bedeutet stärkere Differenzierung und höheren Preis.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_cournot_bertrand-vl-apply"],
    commonMistakes: ["Homogenen Bertrand p=c anwenden","gamma-Wirkung falsch herum interpretieren"],
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl08.p07.diff-reaction","mikro2.oligopol_cournot_bertrand.vl08.p08.diff-price"]
  }),
  card({
    id: 'mikro2.oligopol_cournot_bertrand.bertrand_differenziert_menge',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: "y^B",
    displayFormula: "$$y^B=\\frac{1-c}{(1+\\gamma)(2-\\gamma)}$$",
    intuition: "Gleichgewichtsmenge je identischem Unternehmen im differenzierten Bertrand-Modell.",
    derivationSteps: [
        {
            "label": "Nachfrage nach Einsetzen von p^B",
            "text": "VL8 nutzt a=b-d=1/(1+gamma) und setzt den Gleichgewichtspreis in die Nachfrage ein.",
            "math": "$$y^B=\\frac{1-c}{(1+\\gamma)(2-\\gamma)}$$"
        }
    ],
    assumptions: ["Differenzierte Güter","Identische Unternehmen","VL8-Nachfragesystem"],
    appliesWhen: ["Mengen im differenzierten Bertrand-Gleichgewicht","Vergleich von gamma-Fällen"],
    failsWhen: ["Asymmetrische Kosten","Homogene Bertrand-Aufgabe ohne Differenzierung"],
    examShortcut: "Menge ist in gamma nicht monoton; VL8 betont beide Randfälle gamma=0 und gamma=1.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_cournot_bertrand-vl-apply"],
    commonMistakes: ["Menge monoton in gamma behaupten","p^B nicht zuerst einsetzen"],
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl08.p10.diff-quantity"]
  }),
  card({
    id: 'mikro2.oligopol_cournot_bertrand.bertrand_differenziert_gewinn',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: "pi^B",
    displayFormula: "$$\\pi^B=\\frac{(1-\\gamma)(1-c)^2}{(1+\\gamma)(2-\\gamma)^2}$$",
    intuition: "Unternehmensgewinn im differenzierten Bertrand-Gleichgewicht.",
    derivationSteps: [
        {
            "label": "Gewinn im Bertrand-Gleichgewicht",
            "text": "VL8 berechnet den Gewinn aus (p^B-c)y^B.",
            "math": "$$\\pi^B=(p^B-c)y^B=\\frac{(1-\\gamma)(1-c)^2}{(1+\\gamma)(2-\\gamma)^2}$$"
        }
    ],
    assumptions: ["Differenzierte Güter","Identische Grenzkosten","Gleichgewichtspreis und -menge aus VL8"],
    appliesWhen: ["Gewinnvergleich Cournot vs. Bertrand","Produktdifferenzierung und Marktmacht"],
    failsWhen: ["gamma=1 als homogene Güter: Bertrand-Paradox","Nicht-VL8-Nachfrageform"],
    examShortcut: "Bei gamma=1 ist der Gewinn null; bei gamma=0 entspricht er dem Monopolgewinn.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_cournot_bertrand-vl-apply"],
    commonMistakes: ["Vorzeichen von 1-gamma verlieren","Cournot-Gewinnformel aus VL7 einsetzen"],
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl08.p12.diff-profit"]
  }),
  card({
    id: 'mikro2.oligopol_stackelberg.f_hrermenge',
    conceptId: 'oligopol_stackelberg',
    officialNotation: "oligopol_stackelberg",
    displayFormula: "$$q_1^{Stack} = \\frac{a-c}{2b}$$",
    intuition: "Optimale Menge des First Movers bei linearer Nachfrage.",
    derivationSteps: [
        {
            "label": "Führermenge",
            "text": "Oligopoltheorie I: Strategien und Stackelbergmodell",
            "math": "$$q_1^{Stack} = \\frac{a-c}{2b}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu oligopol_stackelberg","Führermenge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Führermenge — Optimale Menge des First Movers bei linearer Nachfrage.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_stackelberg-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.oligopol_stackelberg.vl05.p10.stackelberg-quantities"]
  }),
  card({
    id: 'mikro2.oligopol_stackelberg.folgerreaktion',
    conceptId: 'oligopol_stackelberg',
    officialNotation: "oligopol_stackelberg",
    displayFormula: "$$q_2(q_1)=\\frac{a-c-bq_1}{2b}$$",
    intuition: "Beste Antwort des Followers auf die Führermenge.",
    derivationSteps: [
        {
            "label": "Folgerreaktion",
            "text": "Oligopoltheorie I: Strategien und Stackelbergmodell",
            "math": "$$q_2(q_1)=\\frac{a-c-bq_1}{2b}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu oligopol_stackelberg","Folgerreaktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Folgerreaktion — Beste Antwort des Followers auf die Führermenge.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_stackelberg-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.oligopol_stackelberg.vl05.p07.follower-reaction"]
  }),
  card({
    id: 'mikro2.oligopol_stackelberg.folgerreaktion_kurz',
    conceptId: 'oligopol_stackelberg',
    officialNotation: "oligopol_stackelberg",
    displayFormula: "$$q_2(q_1)=\\frac{a-c-bq_1}{2b}$$",
    intuition: "Beste Antwort des Followers auf die Führermenge.",
    derivationSteps: [
        {
            "label": "Folgerreaktion (Kurz)",
            "text": "Oligopoltheorie I: Strategien und Stackelbergmodell",
            "math": "$$q_2(q_1)=\\frac{a-c-bq_1}{2b}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu oligopol_stackelberg","Folgerreaktion (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Folgerreaktion (Kurz) — Beste Antwort des Followers auf die Führermenge.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_stackelberg-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.oligopol_stackelberg.vl05.p07.follower-reaction"]
  }),
  card({
    id: 'mikro2.oligopol_stackelberg.stackelberg_marktergebnis_vl',
    conceptId: 'oligopol_stackelberg',
    officialNotation: "p^S, pi_1^S, pi_2^S",
    displayFormula: "$$p^S=\\frac{1+3c}{4},\\quad \\pi_1^S=\\frac{(1-c)^2}{8},\\quad \\pi_2^S=\\frac{(1-c)^2}{16}$$",
    intuition: "VL5-Marktergebnis des Stackelberg-Duopols im normalisierten linearen Modell.",
    derivationSteps: [
        {
            "label": "Marktpreis und Gewinne",
            "text": "Nach Einsetzen der Stackelberg-Mengen folgen Preis, Führergewinn und Folgergewinn.",
            "math": "$$p^S=\\frac{1+3c}{4},\\quad \\pi_1^S=\\frac{(1-c)^2}{8},\\quad \\pi_2^S=\\frac{(1-c)^2}{16}$$"
        }
    ],
    assumptions: ["Inverse Nachfrage p=1-y_1-y_2","Identische konstante Grenzkosten c","Sequentielle Mengenwahl mit bindender Führermenge"],
    appliesWhen: ["Stackelberg-Vergleich mit Monopol oder Cournot","First-mover advantage quantifizieren"],
    failsWhen: ["Simultane Entscheidung","Nicht bindendes Commitment","Preiswettbewerb"],
    examShortcut: "Führergewinn ist im VL5-Normalmodell doppelt so hoch wie Folgergewinn.",
    relatedTaskFamilies: ["mikro2.taskfamily.oligopol_stackelberg-vl-apply"],
    commonMistakes: ["Cournot-Mengen einsetzen","Folgergewinn mit Führergewinn verwechseln"],
    anchorIds: ["mikro2.oligopol_stackelberg.vl05.p13.stackelberg-market-result"]
  }),
  card({
    id: 'mikro2.intertemporaler_konsum.gegenwartswert_budget',
    conceptId: 'intertemporaler_konsum',
    officialNotation: "intertemporaler_konsum",
    displayFormula: "$$c_1+\\frac{c_2}{1+r}=m_1+\\frac{m_2}{1+r}$$",
    intuition: "Intertemporale Budgetbeschränkung in Gegenwartswerten.",
    derivationSteps: [
        {
            "label": "Gegenwartswert-Budget",
            "text": "Intertemporaler Konsum",
            "math": "$$c_1+\\frac{c_2}{1+r}=m_1+\\frac{m_2}{1+r}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu intertemporaler_konsum","Gegenwartswert-Budget"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gegenwartswert-Budget — Intertemporale Budgetbeschränkung in Gegenwartswerten.",
    relatedTaskFamilies: ["mikro2.taskfamily.intertemporaler_konsum-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.intertemporaler_konsum.vl12.p05.budget","mikro2.intertemporaler_konsum.vl12.p08.present-future-value"]
  }),
  card({
    id: 'mikro2.intertemporaler_konsum.zukunftswert_budget',
    conceptId: 'intertemporaler_konsum',
    officialNotation: "intertemporaler_konsum",
    displayFormula: "$$(1+r)c_1+c_2=(1+r)m_1+m_2$$",
    intuition: "Äquivalente Schreibweise in Zukunftswerten.",
    derivationSteps: [
        {
            "label": "Zukunftswert-Budget",
            "text": "Intertemporaler Konsum",
            "math": "$$(1+r)c_1+c_2=(1+r)m_1+m_2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu intertemporaler_konsum","Zukunftswert-Budget"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zukunftswert-Budget — Äquivalente Schreibweise in Zukunftswerten.",
    relatedTaskFamilies: ["mikro2.taskfamily.intertemporaler_konsum-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.intertemporaler_konsum.vl12.p05.budget","mikro2.intertemporaler_konsum.vl12.p08.present-future-value"]
  }),
  card({
    id: 'mikro2.intertemporaler_konsum.euler_gleichung',
    conceptId: 'intertemporaler_konsum',
    officialNotation: "intertemporaler_konsum",
    displayFormula: "$$\\frac{\\partial u/\\partial c_1}{\\partial u/\\partial c_2}=1+r$$",
    intuition: "GRS des Gegenwartskonsums entspricht dem relativen Preis.",
    derivationSteps: [
        {
            "label": "Euler-Gleichung",
            "text": "Intertemporaler Konsum",
            "math": "$$\\frac{\\partial u/\\partial c_1}{\\partial u/\\partial c_2}=1+r$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu intertemporaler_konsum","Euler-Gleichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Euler-Gleichung — GRS des Gegenwartskonsums entspricht dem relativen Preis.",
    relatedTaskFamilies: ["mikro2.taskfamily.intertemporaler_konsum-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.intertemporaler_konsum.vl12.p11.optimum-foc"]
  }),
  card({
    id: 'mikro2.unsicherheit_versicherung.erwartungsnutzen',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: "U(\\pi_1,\\pi_2,c_1,c_2)=\\pi u(c_1)+(1-\\pi)u(c_2)",
    displayFormula: "$$EU=\\pi u(c_1)+(1-\\pi)u(c_2)$$",
    intuition: "Nutzen über zwei Naturzustände.",
    derivationSteps: [
        {
            "label": "Erwartungsnutzen",
            "text": "Entscheidungen unter Unsicherheit",
            "math": "$$EU=\\pi u(c_1)+(1-\\pi)u(c_2)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu unsicherheit_versicherung","Erwartungsnutzen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartungsnutzen — Nutzen über zwei Naturzustände.",
    relatedTaskFamilies: ["mikro2.taskfamily.unsicherheit_versicherung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.unsicherheit_versicherung.vl13.p10.expected-utility"]
  }),
  card({
    id: 'mikro2.unsicherheit_versicherung.versicherungsbudget',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: "c_1, c_2, m_1, m_2, gamma",
    displayFormula: "$$\\gamma c_1+(1-\\gamma)c_2=\\gamma m_1+(1-\\gamma)m_2$$",
    intuition: "Zustandsabhängige Budgetbeschränkung nach Substitution der Versicherungssumme.",
    derivationSteps: [
        {
            "label": "Konsum im Schadens- und Nichtschadenszustand",
            "text": "Aus c_1=m_1+(1-\\gamma)K und c_2=m_2-\\gamma K wird K eliminiert.",
            "math": "$$\\gamma c_1+(1-\\gamma)c_2=\\gamma m_1+(1-\\gamma)m_2$$"
        },
        {
            "label": "Preisinterpretation",
            "text": "Der relative Preis von Konsum im Schadensfall ist \\gamma/(1-\\gamma).",
            "math": "$$\\frac{p_1}{p_2}=\\frac{\\gamma}{1-\\gamma}$$"
        }
    ],
    assumptions: ["Einperioden-Welt der VL13","Versicherungsprämie proportional zur Versicherungssumme"],
    appliesWhen: ["Klausuraufgaben zu Versicherung","Budgetgerade im c_2-c_1-Diagramm"],
    failsWhen: ["Mehrperiodenproblem aus VL12 statt Naturzustandsmodell","Prämiennotation nicht aus der Aufgabe übernommen"],
    examShortcut: "Budget zuerst über Zustände aufstellen, dann erst Nutzen maximieren.",
    relatedTaskFamilies: ["mikro2.taskfamily.unsicherheit_versicherung-vl-pattern"],
    commonMistakes: ["c_1/c_2-Zustände vertauschen","Steigung als -\\gamma statt -\\gamma/(1-\\gamma) verwenden"],
    anchorIds: ["mikro2.unsicherheit_versicherung.vl13.p05.insurance-budget"]
  }),
  card({
    id: 'mikro2.unsicherheit_versicherung.versicherungs_foc',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: "pi, gamma, u'(c_1), u'(c_2)",
    displayFormula: "$$\\frac{\\pi u'(c_1)}{(1-\\pi)u'(c_2)}=\\frac{\\gamma}{1-\\gamma}$$",
    intuition: "Im Optimum entspricht die GRS dem Preisverhältnis der Zustände.",
    derivationSteps: [
        {
            "label": "Optimierungsproblem",
            "text": "Maximiere Erwartungsnutzen unter der Versicherungsbudgetgeraden.",
            "math": "$$\\max_{c_1,c_2}\\; \\pi u(c_1)+(1-\\pi)u(c_2)$$"
        },
        {
            "label": "Bedingung erster Ordnung",
            "text": "Die gewichteten Grenznutzen werden an das Prämien-Preisverhältnis angepasst.",
            "math": "$$\\frac{\\pi u'(c_1)}{(1-\\pi)u'(c_2)}=\\frac{\\gamma}{1-\\gamma}$$"
        }
    ],
    assumptions: ["VNM-Nutzenfunktion wie in VL13","Strikt konkave Nutzenfunktion für Risikoaversion"],
    appliesWhen: ["Optimale Versicherungsnachfrage","Vergleich faire und unfaire Prämie"],
    failsWhen: ["Keine innere Tangentiallösung","Zustandswahrscheinlichkeiten fehlen"],
    examShortcut: "Bei \\gamma=\\pi kürzt sich die FOC zu u'(c_1)=u'(c_2).",
    relatedTaskFamilies: ["mikro2.taskfamily.unsicherheit_versicherung-vl-apply"],
    commonMistakes: ["\\pi und \\gamma verwechseln","FOC ohne ökonomische Interpretation hinschreiben"],
    anchorIds: ["mikro2.unsicherheit_versicherung.vl13.p15.insurance-demand-foc","mikro2.unsicherheit_versicherung.vl13.p17.fair-premium-full-insurance"]
  }),
  card({
    id: 'mikro2.unsicherheit_versicherung.faire_pr_mie',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: "unsicherheit_versicherung",
    displayFormula: "$$\\gamma=\\pi$$",
    intuition: "Nullgewinnbedingung im einfachen Versicherungsmodell.",
    derivationSteps: [
        {
            "label": "Faire Prämie",
            "text": "Entscheidungen unter Unsicherheit",
            "math": "$$\\gamma=\\pi$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu unsicherheit_versicherung","Faire Prämie"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Faire Prämie — Nullgewinnbedingung im einfachen Versicherungsmodell.",
    relatedTaskFamilies: ["mikro2.taskfamily.unsicherheit_versicherung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.unsicherheit_versicherung.vl13.p17.fair-premium-full-insurance","mikro2.unsicherheit_versicherung.vl14.p02.fair-insurance"]
  }),
  card({
    id: 'mikro2.unsicherheit_versicherung.risikopr_mie',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: "unsicherheit_versicherung",
    displayFormula: "$$RP=E[x]-CE$$",
    intuition: "Differenz zwischen Erwartungswert und Sicherheitsäquivalent.",
    derivationSteps: [
        {
            "label": "Risikoprämie",
            "text": "Entscheidungen unter Unsicherheit",
            "math": "$$RP=E[x]-CE$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu unsicherheit_versicherung","Risikoprämie"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Risikoprämie — Differenz zwischen Erwartungswert und Sicherheitsäquivalent.",
    relatedTaskFamilies: ["mikro2.taskfamily.unsicherheit_versicherung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.unsicherheit_versicherung.vl14.p03.risk-premium"]
  }),
  card({
    id: 'mikro2.unsicherheit_versicherung.absolute_risikoaversion',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: "r_a(c)",
    displayFormula: "$$r_a(c)=-\\frac{u''(c)}{u'(c)}$$",
    intuition: "Maßzahl für absolute Risikoaversion, invariant gegenüber positiv-affinen Transformationen der VNM-Nutzenfunktion.",
    derivationSteps: [
        {
            "label": "Definition",
            "text": "Die VL14 definiert den Koeffizienten der absoluten Risikoaversion über Krümmung relativ zum Grenznutzen.",
            "math": "$$r_a(c)=-\\frac{u''(c)}{u'(c)}$$"
        }
    ],
    assumptions: ["VNM-Nutzenfunktion","u'(c)>0 im relevanten Bereich"],
    appliesWhen: ["Risikoaversion quantifizieren","CARA-Funktion prüfen"],
    failsWhen: ["Nutzenfunktion nicht differenzierbar","positiv-affine VNM-Struktur nicht gegeben"],
    examShortcut: "Absolute RA: zweite Ableitung durch erste Ableitung, negatives Vorzeichen.",
    relatedTaskFamilies: ["mikro2.taskfamily.unsicherheit_versicherung-vl-pattern"],
    commonMistakes: ["Minuszeichen vergessen","relative und absolute Risikoaversion vertauschen"],
    anchorIds: ["mikro2.unsicherheit_versicherung.vl14.p06.risk-aversion-measures"]
  }),
  card({
    id: 'mikro2.unsicherheit_versicherung.relative_risikoaversion',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: "r_r(c)",
    displayFormula: "$$r_r(c)=-\\frac{u''(c)c}{u'(c)}$$",
    intuition: "Maßzahl für relative Risikoaversion; gegenüber absoluter Risikoaversion kommt der Faktor c hinzu.",
    derivationSteps: [
        {
            "label": "Definition",
            "text": "Die VL14 definiert den Koeffizienten der relativen Risikoaversion mit zusätzlicher Skalierung durch c.",
            "math": "$$r_r(c)=-\\frac{u''(c)c}{u'(c)}$$"
        }
    ],
    assumptions: ["VNM-Nutzenfunktion","u'(c)>0 im relevanten Bereich","c positiv"],
    appliesWhen: ["Risikoaversion quantifizieren","CRRA-Funktion prüfen"],
    failsWhen: ["Konsum nicht positiv","Nutzenfunktion nicht differenzierbar"],
    examShortcut: "Relative RA: absolute RA mal c.",
    relatedTaskFamilies: ["mikro2.taskfamily.unsicherheit_versicherung-vl-pattern"],
    commonMistakes: ["Faktor c vergessen","CRRA- und CARA-Fall vermischen"],
    anchorIds: ["mikro2.unsicherheit_versicherung.vl14.p06.risk-aversion-measures"]
  }),
  card({
    id: 'mikro2.gleichgewicht_produktion.vollbesch_ftigung_kapital',
    conceptId: 'gleichgewicht_produktion',
    officialNotation: "gleichgewicht_produktion",
    displayFormula: "$$K_1+K_2=K$$",
    intuition: "Gesamtbestand Kapital wird zwischen Sektoren aufgeteilt.",
    derivationSteps: [
        {
            "label": "Vollbeschäftigung Kapital",
            "text": "Allgemeines Gleichgewicht mit Produktion",
            "math": "$$K_1+K_2=K$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_produktion","Vollbeschäftigung Kapital"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vollbeschäftigung Kapital — Gesamtbestand Kapital wird zwischen Sektoren aufgeteilt.",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_produktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_produktion.vl17.p01.programm","mikro2.gleichgewicht_produktion.vl17.p02.model"]
  }),
  card({
    id: 'mikro2.gleichgewicht_produktion.vollbesch_ftigung_arbeit',
    conceptId: 'gleichgewicht_produktion',
    officialNotation: "gleichgewicht_produktion",
    displayFormula: "$$L_1+L_2=L$$",
    intuition: "Gesamtbestand Arbeit wird zwischen Sektoren aufgeteilt.",
    derivationSteps: [
        {
            "label": "Vollbeschäftigung Arbeit",
            "text": "Allgemeines Gleichgewicht mit Produktion",
            "math": "$$L_1+L_2=L$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_produktion","Vollbeschäftigung Arbeit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vollbeschäftigung Arbeit — Gesamtbestand Arbeit wird zwischen Sektoren aufgeteilt.",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_produktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_produktion.vl17.p01.programm","mikro2.gleichgewicht_produktion.vl17.p02.model"]
  }),
  card({
    id: 'mikro2.gleichgewicht_produktion.produktionseffizienz',
    conceptId: 'gleichgewicht_produktion',
    officialNotation: "gleichgewicht_produktion",
    displayFormula: "$$GRTS^1_{KL}=GRTS^2_{KL}$$",
    intuition: "Tangentialbedingung der Isoquanten in der Faktor-Box.",
    derivationSteps: [
        {
            "label": "Produktionseffizienz",
            "text": "Allgemeines Gleichgewicht mit Produktion",
            "math": "$$GRTS^1_{KL}=GRTS^2_{KL}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_produktion","Produktionseffizienz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Produktionseffizienz — Tangentialbedingung der Isoquanten in der Faktor-Box.",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_produktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_produktion.vl17.p01.programm","mikro2.gleichgewicht_produktion.vl17.p02.model"]
  }),
  card({
    id: 'mikro2.gleichgewicht_tausch.effizienzbedingung',
    conceptId: 'gleichgewicht_tausch',
    officialNotation: "MU_1, MU_2",
    displayFormula: "$$\\frac{MU_1^A}{MU_2^A} = \\frac{MU_1^B}{MU_2^B}$$",
    intuition: "Gleichheit der Grenzraten der Substitution",
    derivationSteps: [
        {
            "label": "Effizienzbedingung",
            "text": "Tauschökonomie, Tauschoptimum und Pareto-Effizienz",
            "math": "$$\\frac{MU_1^A}{MU_2^A} = \\frac{MU_1^B}{MU_2^B}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_tausch","Effizienzbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Effizienzbedingung — Gleichheit der Grenzraten der Substitution",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_tausch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_tausch.vl16.p01.programm","mikro2.gleichgewicht_tausch.vl16.p03.edgeworth"]
  }),
  card({
    id: 'mikro2.gleichgewicht_tausch.effizienzbedingung_kurz',
    conceptId: 'gleichgewicht_tausch',
    officialNotation: "MU_1, MU_2",
    displayFormula: "$$\\frac{MU_1^A}{MU_2^A} = \\frac{MU_1^B}{MU_2^B}$$",
    intuition: "Gleichheit der Grenzraten der Substitution",
    derivationSteps: [
        {
            "label": "Effizienzbedingung (Kurz)",
            "text": "Tauschökonomie, Tauschoptimum und Pareto-Effizienz",
            "math": "$$\\frac{MU_1^A}{MU_2^A} = \\frac{MU_1^B}{MU_2^B}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_tausch","Effizienzbedingung (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Effizienzbedingung (Kurz) — Gleichheit der Grenzraten der Substitution",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_tausch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_tausch.vl16.p01.programm","mikro2.gleichgewicht_tausch.vl16.p03.edgeworth"]
  }),
  card({
    id: 'mikro2.gleichgewicht_tausch.effizienzbedingung_kurz_kurz',
    conceptId: 'gleichgewicht_tausch',
    officialNotation: "MU_1, MU_2",
    displayFormula: "$$\\frac{MU_1^A}{MU_2^A} = \\frac{MU_1^B}{MU_2^B}$$",
    intuition: "Gleichheit der Grenzraten der Substitution",
    derivationSteps: [
        {
            "label": "Effizienzbedingung (Kurz) (Kurz)",
            "text": "Tauschökonomie, Tauschoptimum und Pareto-Effizienz",
            "math": "$$\\frac{MU_1^A}{MU_2^A} = \\frac{MU_1^B}{MU_2^B}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_tausch","Effizienzbedingung (Kurz) (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Effizienzbedingung (Kurz) (Kurz) — Gleichheit der Grenzraten der Substitution",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_tausch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_tausch.vl16.p01.programm","mikro2.gleichgewicht_tausch.vl16.p03.edgeworth"]
  }),
  card({
    id: 'mikro2.gleichgewicht_walras.marktr_umung',
    conceptId: 'gleichgewicht_walras',
    officialNotation: "gleichgewicht_walras",
    displayFormula: "$$z_i(p^*)=0 \\quad \\forall i$$",
    intuition: "Überschussnachfrage verschwindet im Gleichgewicht.",
    derivationSteps: [
        {
            "label": "Markträumung",
            "text": "Allgemeines Gleichgewicht I und Walras-Gesetz",
            "math": "$$z_i(p^*)=0 \\quad \\forall i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_walras","Markträumung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Markträumung — Überschussnachfrage verschwindet im Gleichgewicht.",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_walras-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_walras.vl15.p01.programm","mikro2.gleichgewicht_walras.vl15.p02.robinson"]
  }),
  card({
    id: 'mikro2.gleichgewicht_walras.walrasches_gesetz',
    conceptId: 'gleichgewicht_walras',
    officialNotation: "gleichgewicht_walras",
    displayFormula: "$$\\sum_i z_i(p) = 0$$",
    intuition: "Aggregierte Überschussnachfrage über alle Märkte.",
    derivationSteps: [
        {
            "label": "Walrasches Gesetz",
            "text": "Allgemeines Gleichgewicht I und Walras-Gesetz",
            "math": "$$\\sum_i z_i(p) = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_walras","Walrasches Gesetz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Walrasches Gesetz — Aggregierte Überschussnachfrage über alle Märkte.",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_walras-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_walras.vl15.p01.programm","mikro2.gleichgewicht_walras.vl15.p02.robinson"]
  }),
  card({
    id: 'mikro2.gleichgewicht_walras.budgetrestriktion',
    conceptId: 'gleichgewicht_walras',
    officialNotation: "gleichgewicht_walras",
    displayFormula: "$$p\\cdot x_i \\le p\\cdot \\omega_i$$",
    intuition: "Haushalt i kann Endowment nicht überschreiten.",
    derivationSteps: [
        {
            "label": "Budgetrestriktion",
            "text": "Allgemeines Gleichgewicht I und Walras-Gesetz",
            "math": "$$p\\cdot x_i \\le p\\cdot \\omega_i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gleichgewicht_walras","Budgetrestriktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Budgetrestriktion — Haushalt i kann Endowment nicht überschreiten.",
    relatedTaskFamilies: ["mikro2.taskfamily.gleichgewicht_walras-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.gleichgewicht_walras.vl15.p01.programm","mikro2.gleichgewicht_walras.vl15.p02.robinson"]
  }),
  card({
    id: 'mikro2.wohlfahrt_theoreme.utilitaristisch',
    conceptId: 'wohlfahrt_theoreme',
    officialNotation: "u_i",
    displayFormula: "$$W = u_1 + u_2 + \\dots + u_n$$",
    intuition: "Summe der Nutzen",
    derivationSteps: [
        {
            "label": "Utilitaristisch",
            "text": "Pareto-Effizienz",
            "math": "$$W = u_1 + u_2 + \\dots + u_n$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wohlfahrt_theoreme","Utilitaristisch"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Utilitaristisch — Summe der Nutzen",
    relatedTaskFamilies: ["mikro2.taskfamily.wohlfahrt_theoreme-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.wohlfahrt_theoreme.vl16.p07.pareto","mikro2.wohlfahrt_theoreme.vl16.p17.fundamental-theorems"]
  }),
  card({
    id: 'mikro2.wohlfahrt_theoreme.rawlsianisch',
    conceptId: 'wohlfahrt_theoreme',
    officialNotation: "u_i",
    displayFormula: "$$W = \\min(u_1, \\dots, u_n)$$",
    intuition: "Fokus auf den Schwächsten",
    derivationSteps: [
        {
            "label": "Rawlsianisch",
            "text": "Pareto-Effizienz",
            "math": "$$W = \\min(u_1, \\dots, u_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wohlfahrt_theoreme","Rawlsianisch"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rawlsianisch — Fokus auf den Schwächsten",
    relatedTaskFamilies: ["mikro2.taskfamily.wohlfahrt_theoreme-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.wohlfahrt_theoreme.vl16.p07.pareto","mikro2.wohlfahrt_theoreme.vl16.p17.fundamental-theorems"]
  }),
  card({
    id: 'mikro2.wohlfahrt_theoreme.rawlsianisch_kurz',
    conceptId: 'wohlfahrt_theoreme',
    officialNotation: "u_i",
    displayFormula: "$$W = \\min(u_1, \\dots, u_n)$$",
    intuition: "Fokus auf den Schwächsten",
    derivationSteps: [
        {
            "label": "Rawlsianisch (Kurz)",
            "text": "Pareto-Effizienz",
            "math": "$$W = \\min(u_1, \\dots, u_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wohlfahrt_theoreme","Rawlsianisch (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rawlsianisch (Kurz) — Fokus auf den Schwächsten",
    relatedTaskFamilies: ["mikro2.taskfamily.wohlfahrt_theoreme-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.wohlfahrt_theoreme.vl16.p07.pareto","mikro2.wohlfahrt_theoreme.vl16.p17.fundamental-theorems"]
  }),
  card({
    id: 'mikro2.wohlfahrt_messung.utilitaristisch',
    conceptId: 'wohlfahrt_messung',
    officialNotation: "wohlfahrt_messung",
    displayFormula: "$$W = u_1 + u_2 + \\dots + u_n$$",
    intuition: "Summe der Nutzen.",
    derivationSteps: [
        {
            "label": "Utilitaristisch",
            "text": "Wohlfahrtswirkung des Monopols",
            "math": "$$W = u_1 + u_2 + \\dots + u_n$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wohlfahrt_messung","Utilitaristisch"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Utilitaristisch — Summe der Nutzen.",
    relatedTaskFamilies: ["mikro2.taskfamily.wohlfahrt_messung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.wohlfahrt_messung.vl02.p05.monopoly-welfare","mikro2.wohlfahrt_messung.vl02.p09.surplus"]
  }),
  card({
    id: 'mikro2.wohlfahrt_messung.rawlsianisch',
    conceptId: 'wohlfahrt_messung',
    officialNotation: "wohlfahrt_messung",
    displayFormula: "$$W = \\min(u_1, \\dots, u_n)$$",
    intuition: "Fokus auf den Schwächsten.",
    derivationSteps: [
        {
            "label": "Rawlsianisch",
            "text": "Wohlfahrtswirkung des Monopols",
            "math": "$$W = \\min(u_1, \\dots, u_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wohlfahrt_messung","Rawlsianisch"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rawlsianisch — Fokus auf den Schwächsten.",
    relatedTaskFamilies: ["mikro2.taskfamily.wohlfahrt_messung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.wohlfahrt_messung.vl02.p05.monopoly-welfare","mikro2.wohlfahrt_messung.vl02.p09.surplus"]
  }),
  card({
    id: 'mikro2.wohlfahrt_messung.konsumentenrente_linear',
    conceptId: 'wohlfahrt_messung',
    officialNotation: "wohlfahrt_messung",
    displayFormula: "$$KR = \\frac{1}{2}(P_{max}-P^*)Q^*$$",
    intuition: "Dreieck unter der Nachfrage.",
    derivationSteps: [
        {
            "label": "Konsumentenrente (linear)",
            "text": "Wohlfahrtswirkung des Monopols",
            "math": "$$KR = \\frac{1}{2}(P_{max}-P^*)Q^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wohlfahrt_messung","Konsumentenrente (linear)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Konsumentenrente (linear) — Dreieck unter der Nachfrage.",
    relatedTaskFamilies: ["mikro2.taskfamily.wohlfahrt_messung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.wohlfahrt_messung.vl02.p05.monopoly-welfare","mikro2.wohlfahrt_messung.vl02.p09.surplus"]
  }),
  card({
    id: 'mikro2.wohlfahrt_messung.dwl',
    conceptId: 'wohlfahrt_messung',
    officialNotation: "wohlfahrt_messung",
    displayFormula: "$$DWL = W_{Wettbewerb} - (KR + PR)$$",
    intuition: "Verlust gegenüber Wettbewerbsoptimum.",
    derivationSteps: [
        {
            "label": "DWL",
            "text": "Wohlfahrtswirkung des Monopols",
            "math": "$$DWL = W_{Wettbewerb} - (KR + PR)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wohlfahrt_messung","DWL"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: DWL — Verlust gegenüber Wettbewerbsoptimum.",
    relatedTaskFamilies: ["mikro2.taskfamily.wohlfahrt_messung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.wohlfahrt_messung.vl02.p05.monopoly-welfare","mikro2.wohlfahrt_messung.vl02.p09.surplus"]
  }),
  card({
    id: 'mikro2.information_adverse.erwarteter_wert',
    conceptId: 'information_adverse',
    officialNotation: "q, v_H, v_L",
    displayFormula: "$$E[v] = q \\cdot v_H + (1-q) \\cdot v_L$$",
    intuition: "Preis bei Unwissenheit",
    derivationSteps: [
        {
            "label": "Erwarteter Wert",
            "text": "Moralisches Risiko und Adverse Selektion",
            "math": "$$E[v] = q \\cdot v_H + (1-q) \\cdot v_L$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu information_adverse","Erwarteter Wert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwarteter Wert — Preis bei Unwissenheit",
    relatedTaskFamilies: ["mikro2.taskfamily.information_adverse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.information_adverse.vl18.p01.programm","mikro2.information_adverse.vl18.p03.adverse-selection"]
  }),
  card({
    id: 'mikro2.information_adverse.erwarteter_wert_kurz',
    conceptId: 'information_adverse',
    officialNotation: "q, v_H, v_L",
    displayFormula: "$$E[v] = q \\cdot v_H + (1-q) \\cdot v_L$$",
    intuition: "Preis bei Unwissenheit",
    derivationSteps: [
        {
            "label": "Erwarteter Wert (Kurz)",
            "text": "Moralisches Risiko und Adverse Selektion",
            "math": "$$E[v] = q \\cdot v_H + (1-q) \\cdot v_L$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu information_adverse","Erwarteter Wert (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwarteter Wert (Kurz) — Preis bei Unwissenheit",
    relatedTaskFamilies: ["mikro2.taskfamily.information_adverse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.information_adverse.vl18.p01.programm","mikro2.information_adverse.vl18.p03.adverse-selection"]
  }),
  card({
    id: 'mikro2.information_adverse.erwarteter_wert_kurz_kurz',
    conceptId: 'information_adverse',
    officialNotation: "q, v_H, v_L",
    displayFormula: "$$E[v] = q \\cdot v_H + (1-q) \\cdot v_L$$",
    intuition: "Preis bei Unwissenheit",
    derivationSteps: [
        {
            "label": "Erwarteter Wert (Kurz) (Kurz)",
            "text": "Moralisches Risiko und Adverse Selektion",
            "math": "$$E[v] = q \\cdot v_H + (1-q) \\cdot v_L$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu information_adverse","Erwarteter Wert (Kurz) (Kurz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwarteter Wert (Kurz) (Kurz) — Preis bei Unwissenheit",
    relatedTaskFamilies: ["mikro2.taskfamily.information_adverse-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.information_adverse.vl18.p01.programm","mikro2.information_adverse.vl18.p03.adverse-selection"]
  }),
  card({
    id: 'mikro2.information_moralhazard.prinzipalziel',
    conceptId: 'information_moralhazard',
    officialNotation: "information_moralhazard",
    displayFormula: "$$\\max_w E[\\pi_P]=E[y]-w \\;\\;\\text{s.t.}\\;\\; IC,PC$$",
    intuition: "Vertragswahl unter versteckter Handlung.",
    derivationSteps: [
        {
            "label": "Prinzipalziel",
            "text": "Moralisches Risiko und Prinzipal-Agenten-Theorie",
            "math": "$$\\max_w E[\\pi_P]=E[y]-w \\;\\;\\text{s.t.}\\;\\; IC,PC$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu information_moralhazard","Prinzipalziel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Prinzipalziel — Vertragswahl unter versteckter Handlung.",
    relatedTaskFamilies: ["mikro2.taskfamily.information_moralhazard-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.information_moralhazard.vl18.p01.programm","mikro2.information_moralhazard.vl18.p04.principal-agent"]
  }),
  card({
    id: 'mikro2.information_moralhazard.ic_bedingung',
    conceptId: 'information_moralhazard',
    officialNotation: "information_moralhazard",
    displayFormula: "$$EU_A(w_A|e_H)\\ge EU_A(w_A|e_L)$$",
    intuition: "Agent wählt gewünschte Anstrengung.",
    derivationSteps: [
        {
            "label": "IC-Bedingung",
            "text": "Moralisches Risiko und Prinzipal-Agenten-Theorie",
            "math": "$$EU_A(w_A|e_H)\\ge EU_A(w_A|e_L)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu information_moralhazard","IC-Bedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: IC-Bedingung — Agent wählt gewünschte Anstrengung.",
    relatedTaskFamilies: ["mikro2.taskfamily.information_moralhazard-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.information_moralhazard.vl18.p01.programm","mikro2.information_moralhazard.vl18.p04.principal-agent"]
  }),
  card({
    id: 'mikro2.information_moralhazard.separierendes_signal',
    conceptId: 'information_moralhazard',
    officialNotation: "information_moralhazard",
    displayFormula: "$$30 \\le e^* \\le 60$$",
    intuition: "Beispielbereich Spence-Signaling (qualitativ).",
    derivationSteps: [
        {
            "label": "Separierendes Signal",
            "text": "Moralisches Risiko und Prinzipal-Agenten-Theorie",
            "math": "$$30 \\le e^* \\le 60$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu information_moralhazard","Separierendes Signal"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Separierendes Signal — Beispielbereich Spence-Signaling (qualitativ).",
    relatedTaskFamilies: ["mikro2.taskfamily.information_moralhazard-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.information_moralhazard.vl18.p01.programm","mikro2.information_moralhazard.vl18.p04.principal-agent"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
