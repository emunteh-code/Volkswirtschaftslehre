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
    anchorIds: ["mikro2.monopol_preissetzung.vl02.p01.programm","mikro2.monopol_preissetzung.vl02.p02.markup"]
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
    anchorIds: ["mikro2.monopol_preissetzung.vl02.p01.programm","mikro2.monopol_preissetzung.vl02.p02.markup"]
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
    anchorIds: ["mikro2.preisdiskriminierung.vl03.p02.third-degree","mikro2.preisdiskriminierung.vl03.p03.mr-equalization"]
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
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl06.p01.programm","mikro2.oligopol_cournot_bertrand.vl06.p03.reaction"]
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
    anchorIds: ["mikro2.oligopol_cournot_bertrand.vl06.p01.programm","mikro2.oligopol_cournot_bertrand.vl06.p03.reaction"]
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
    anchorIds: ["mikro2.oligopol_stackelberg.vl05.p01.programm","mikro2.oligopol_stackelberg.vl05.p02.stackelberg-model"]
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
    anchorIds: ["mikro2.oligopol_stackelberg.vl05.p01.programm","mikro2.oligopol_stackelberg.vl05.p02.stackelberg-model"]
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
    anchorIds: ["mikro2.intertemporaler_konsum.vl12.p01.programm","mikro2.intertemporaler_konsum.vl12.p05.budget"]
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
    anchorIds: ["mikro2.intertemporaler_konsum.vl12.p01.programm","mikro2.intertemporaler_konsum.vl12.p05.budget"]
  }),
  card({
    id: 'mikro2.intertemporaler_konsum.euler_gleichung',
    conceptId: 'intertemporaler_konsum',
    officialNotation: "intertemporaler_konsum",
    displayFormula: "$$u_1'(c_1^*)=\\frac{1}{1+r}u_2'(c_2^*)$$",
    intuition: "Gleichgewichtsbedingung bei additiver Nutzenfunktion.",
    derivationSteps: [
        {
            "label": "Euler-Gleichung",
            "text": "Intertemporaler Konsum",
            "math": "$$u_1'(c_1^*)=\\frac{1}{1+r}u_2'(c_2^*)$$"
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
    examShortcut: "Merke: Euler-Gleichung — Gleichgewichtsbedingung bei additiver Nutzenfunktion.",
    relatedTaskFamilies: ["mikro2.taskfamily.intertemporaler_konsum-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["mikro2.intertemporaler_konsum.vl12.p01.programm","mikro2.intertemporaler_konsum.vl12.p05.budget"]
  }),
  card({
    id: 'mikro2.unsicherheit_versicherung.erwartungsnutzen',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: "unsicherheit_versicherung",
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
    anchorIds: ["mikro2.unsicherheit_versicherung.vl13.p01.programm","mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption"]
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
    anchorIds: ["mikro2.unsicherheit_versicherung.vl13.p01.programm","mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption"]
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
    anchorIds: ["mikro2.unsicherheit_versicherung.vl13.p01.programm","mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption"]
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

