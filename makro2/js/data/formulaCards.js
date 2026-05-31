// ============================================================
// FORMULA CARDS — Makroökonomik II
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'makro2';

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
    id: 'makro2.zahlungsbilanz.zahlungsbilanzidentit_t',
    conceptId: 'zahlungsbilanz',
    officialNotation: "LB, KB, \\Delta R",
    displayFormula: "$$LB + KB + \\Delta R = 0$$",
    intuition: "Gesamtbuchhaltung der offenen Volkswirtschaft",
    derivationSteps: [
        {
            "label": "Zahlungsbilanzidentität",
            "text": "I   In der Preisnotierung",
            "math": "$$LB + KB + \\Delta R = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zahlungsbilanz","Zahlungsbilanzidentität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zahlungsbilanzidentität — Gesamtbuchhaltung der offenen Volkswirtschaft",
    relatedTaskFamilies: ["makro2.taskfamily.zahlungsbilanz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zahlungsbilanz.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.zahlungsbilanz.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.zahlungsbilanz.sparen_und_investieren',
    conceptId: 'zahlungsbilanz',
    officialNotation: "S, I",
    displayFormula: "$$LB = S - I$$",
    intuition: "Makroökonomische Deutung des Leistungsbilanzsaldos",
    derivationSteps: [
        {
            "label": "Sparen und Investieren",
            "text": "I   In der Preisnotierung",
            "math": "$$LB = S - I$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zahlungsbilanz","Sparen und Investieren"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Sparen und Investieren — Makroökonomische Deutung des Leistungsbilanzsaldos",
    relatedTaskFamilies: ["makro2.taskfamily.zahlungsbilanz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zahlungsbilanz.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.zahlungsbilanz.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.zahlungsbilanz.nettoauslandsverm_gen',
    conceptId: 'zahlungsbilanz',
    officialNotation: "NAV",
    displayFormula: "$$\\Delta NAV = LB$$",
    intuition: "Leistungsbilanz verändert die Nettoauslandsposition",
    derivationSteps: [
        {
            "label": "Nettoauslandsvermögen",
            "text": "I   In der Preisnotierung",
            "math": "$$\\Delta NAV = LB$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zahlungsbilanz","Nettoauslandsvermögen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nettoauslandsvermögen — Leistungsbilanz verändert die Nettoauslandsposition",
    relatedTaskFamilies: ["makro2.taskfamily.zahlungsbilanz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zahlungsbilanz.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.zahlungsbilanz.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.zahlungsbilanz.s_i_identit_t_offen',
    conceptId: 'zahlungsbilanz',
    officialNotation: "zahlungsbilanz",
    displayFormula: "$$LB = S - I$$",
    intuition: "Leistungsbilanz und Ersparnis-Investitions-Saldo.",
    derivationSteps: [
        {
            "label": "S-I Identität offen",
            "text": "I   In der Preisnotierung",
            "math": "$$LB = S - I$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zahlungsbilanz","S-I Identität offen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: S-I Identität offen — Leistungsbilanz und Ersparnis-Investitions-Saldo.",
    relatedTaskFamilies: ["makro2.taskfamily.zahlungsbilanz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zahlungsbilanz.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.zahlungsbilanz.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.wechselkurs.nominaler_wechselkurs',
    conceptId: 'wechselkurs',
    officialNotation: "E",
    displayFormula: "$$E = \\frac{\\text{Einheiten Ausland}}{\\text{1 Einheit Inland}}$$",
    intuition: "Mengennotierung",
    derivationSteps: [
        {
            "label": "Nominaler Wechselkurs",
            "text": "I   In der Preisnotierung",
            "math": "$$E = \\frac{\\text{Einheiten Ausland}}{\\text{1 Einheit Inland}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wechselkurs","Nominaler Wechselkurs"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nominaler Wechselkurs — Mengennotierung",
    relatedTaskFamilies: ["makro2.taskfamily.wechselkurs-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wechselkurs.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.wechselkurs.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.wechselkurs.realer_wechselkurs',
    conceptId: 'wechselkurs',
    officialNotation: "P, P^*",
    displayFormula: "$$\\varepsilon = \\frac{E \\cdot P}{P^*}$$",
    intuition: "Preisliche Wettbewerbsfähigkeit",
    derivationSteps: [
        {
            "label": "Realer Wechselkurs",
            "text": "I   In der Preisnotierung",
            "math": "$$\\varepsilon = \\frac{E \\cdot P}{P^*}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wechselkurs","Realer Wechselkurs"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Realer Wechselkurs — Preisliche Wettbewerbsfähigkeit",
    relatedTaskFamilies: ["makro2.taskfamily.wechselkurs-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wechselkurs.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.wechselkurs.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.wechselkurs.nominaler_wechselkurs_merksatz',
    conceptId: 'wechselkurs',
    officialNotation: "E",
    displayFormula: "$$E = \\frac{\\text{Einheiten Ausland}}{\\text{1 Einheit Inland}}$$",
    intuition: "Mengennotierung",
    derivationSteps: [
        {
            "label": "Nominaler Wechselkurs (Merksatz)",
            "text": "I   In der Preisnotierung",
            "math": "$$E = \\frac{\\text{Einheiten Ausland}}{\\text{1 Einheit Inland}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wechselkurs","Nominaler Wechselkurs (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nominaler Wechselkurs (Merksatz) — Mengennotierung",
    relatedTaskFamilies: ["makro2.taskfamily.wechselkurs-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wechselkurs.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.wechselkurs.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.wechselkurs.realer_wechselkurs',
    conceptId: 'wechselkurs',
    officialNotation: "wechselkurs",
    displayFormula: "$$\\varepsilon = \\frac{E P^*}{P}$$",
    intuition: "Preisniveau-Korrektur.",
    derivationSteps: [
        {
            "label": "Realer Wechselkurs",
            "text": "I   In der Preisnotierung",
            "math": "$$\\varepsilon = \\frac{E P^*}{P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wechselkurs","Realer Wechselkurs"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Realer Wechselkurs — Preisniveau-Korrektur.",
    relatedTaskFamilies: ["makro2.taskfamily.wechselkurs-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wechselkurs.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.wechselkurs.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.kaufkraftparitaet.absolute_ppp',
    conceptId: 'kaufkraftparitaet',
    officialNotation: "P, P^*",
    displayFormula: "$$E_{PPP} = \\frac{P^*}{P}$$",
    intuition: "PPP-Kurs aus Preisniveaus",
    derivationSteps: [
        {
            "label": "Absolute PPP",
            "text": "I   In der Preisnotierung",
            "math": "$$E_{PPP} = \\frac{P^*}{P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kaufkraftparitaet","Absolute PPP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Absolute PPP — PPP-Kurs aus Preisniveaus",
    relatedTaskFamilies: ["makro2.taskfamily.kaufkraftparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.kaufkraftparitaet.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.kaufkraftparitaet.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.kaufkraftparitaet.relative_ppp',
    conceptId: 'kaufkraftparitaet',
    officialNotation: "\\pi, \\pi^*",
    displayFormula: "$$\\hat E \\approx \\pi^* - \\pi$$",
    intuition: "Änderungsratenform",
    derivationSteps: [
        {
            "label": "Relative PPP",
            "text": "I   In der Preisnotierung",
            "math": "$$\\hat E \\approx \\pi^* - \\pi$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kaufkraftparitaet","Relative PPP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Relative PPP — Änderungsratenform",
    relatedTaskFamilies: ["makro2.taskfamily.kaufkraftparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.kaufkraftparitaet.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.kaufkraftparitaet.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.kaufkraftparitaet.absolute_ppp_merksatz',
    conceptId: 'kaufkraftparitaet',
    officialNotation: "P, P^*",
    displayFormula: "$$E_{PPP} = \\frac{P^*}{P}$$",
    intuition: "PPP-Kurs aus Preisniveaus",
    derivationSteps: [
        {
            "label": "Absolute PPP (Merksatz)",
            "text": "I   In der Preisnotierung",
            "math": "$$E_{PPP} = \\frac{P^*}{P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kaufkraftparitaet","Absolute PPP (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Absolute PPP (Merksatz) — PPP-Kurs aus Preisniveaus",
    relatedTaskFamilies: ["makro2.taskfamily.kaufkraftparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.kaufkraftparitaet.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.kaufkraftparitaet.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.kaufkraftparitaet.relative_ppp',
    conceptId: 'kaufkraftparitaet',
    officialNotation: "kaufkraftparitaet",
    displayFormula: "$$\\hat{\\varepsilon} \\approx \\pi - \\pi^*$$",
    intuition: "Inflationsdifferenz und WK-Entwicklung.",
    derivationSteps: [
        {
            "label": "Relative PPP",
            "text": "I   In der Preisnotierung",
            "math": "$$\\hat{\\varepsilon} \\approx \\pi - \\pi^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kaufkraftparitaet","Relative PPP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Relative PPP — Inflationsdifferenz und WK-Entwicklung.",
    relatedTaskFamilies: ["makro2.taskfamily.kaufkraftparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.kaufkraftparitaet.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.kaufkraftparitaet.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.zinsparitaet.exakte_uip',
    conceptId: 'zinsparitaet',
    officialNotation: "i_t, i_t^*, E_t, E_{t+1}^e",
    displayFormula: "$$1 + i_t = (1 + i_t^*) \\frac{E_t}{E_{t+1}^e}$$",
    intuition: "Arbitragegleichgewicht",
    derivationSteps: [
        {
            "label": "Exakte UIP",
            "text": "I   In der Preisnotierung",
            "math": "$$1 + i_t = (1 + i_t^*) \\frac{E_t}{E_{t+1}^e}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zinsparitaet","Exakte UIP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Exakte UIP — Arbitragegleichgewicht",
    relatedTaskFamilies: ["makro2.taskfamily.zinsparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zinsparitaet.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.zinsparitaet.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.zinsparitaet.approximative_uip',
    conceptId: 'zinsparitaet',
    officialNotation: "",
    displayFormula: "$$i_t - i_t^* \\approx - \\frac{E_{t+1}^e - E_t}{E_t}$$",
    intuition: "Zinsdifferenz = erwartete Abwertungsrate",
    derivationSteps: [
        {
            "label": "Approximative UIP",
            "text": "I   In der Preisnotierung",
            "math": "$$i_t - i_t^* \\approx - \\frac{E_{t+1}^e - E_t}{E_t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zinsparitaet","Approximative UIP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Approximative UIP — Zinsdifferenz = erwartete Abwertungsrate",
    relatedTaskFamilies: ["makro2.taskfamily.zinsparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zinsparitaet.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.zinsparitaet.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.zinsparitaet.exakte_uip_merksatz',
    conceptId: 'zinsparitaet',
    officialNotation: "i_t, i_t^*, E_t, E_{t+1}^e",
    displayFormula: "$$1 + i_t = (1 + i_t^*) \\frac{E_t}{E_{t+1}^e}$$",
    intuition: "Arbitragegleichgewicht",
    derivationSteps: [
        {
            "label": "Exakte UIP (Merksatz)",
            "text": "I   In der Preisnotierung",
            "math": "$$1 + i_t = (1 + i_t^*) \\frac{E_t}{E_{t+1}^e}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zinsparitaet","Exakte UIP (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Exakte UIP (Merksatz) — Arbitragegleichgewicht",
    relatedTaskFamilies: ["makro2.taskfamily.zinsparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zinsparitaet.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.zinsparitaet.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.zinsparitaet.uip',
    conceptId: 'zinsparitaet',
    officialNotation: "zinsparitaet",
    displayFormula: "$$i \\approx i^* + \\mathbb{E}[\\Delta E/E]$$",
    intuition: "Zins- und Erwartungskanal.",
    derivationSteps: [
        {
            "label": "UIP",
            "text": "I   In der Preisnotierung",
            "math": "$$i \\approx i^* + \\mathbb{E}[\\Delta E/E]$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zinsparitaet","UIP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: UIP — Zins- und Erwartungskanal.",
    relatedTaskFamilies: ["makro2.taskfamily.zinsparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zinsparitaet.slides-01-pdf.p14.i-in-der-preisnotierung","makro2.zinsparitaet.slides-01-pdf.p34.offene-gu-terma-rkte"]
  }),
  card({
    id: 'makro2.offene_is.offenes_g_termarktgleichgewicht',
    conceptId: 'offene_is',
    officialNotation: "NX",
    displayFormula: "$$Y = C + I + G + NX$$",
    intuition: "Gleichgewicht der Nachfrage nach inländischen Gütern",
    derivationSteps: [
        {
            "label": "Offenes Gütermarktgleichgewicht",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$Y = C + I + G + NX$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu offene_is","Offenes Gütermarktgleichgewicht"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Offenes Gütermarktgleichgewicht — Gleichgewicht der Nachfrage nach inländischen Gütern",
    relatedTaskFamilies: ["makro2.taskfamily.offene_is-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.offene_is.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.offene_is.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.offene_is.offener_multiplikator',
    conceptId: 'offene_is',
    officialNotation: "q_1",
    displayFormula: "$$\\frac{\\partial Y}{\\partial G} = \\frac{1}{1 - c_1 - b_1 + q_1}$$",
    intuition: "Importe dämpfen die Multiplikatorwirkung",
    derivationSteps: [
        {
            "label": "Offener Multiplikator",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$\\frac{\\partial Y}{\\partial G} = \\frac{1}{1 - c_1 - b_1 + q_1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu offene_is","Offener Multiplikator"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Offener Multiplikator — Importe dämpfen die Multiplikatorwirkung",
    relatedTaskFamilies: ["makro2.taskfamily.offene_is-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.offene_is.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.offene_is.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.offene_is.offenes_g_termarktgleichgewicht_',
    conceptId: 'offene_is',
    officialNotation: "NX",
    displayFormula: "$$Y = C + I + G + NX$$",
    intuition: "Gleichgewicht der Nachfrage nach inländischen Gütern",
    derivationSteps: [
        {
            "label": "Offenes Gütermarktgleichgewicht (Merksatz)",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$Y = C + I + G + NX$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu offene_is","Offenes Gütermarktgleichgewicht (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Offenes Gütermarktgleichgewicht (Merksatz) — Gleichgewicht der Nachfrage nach inländischen Gütern",
    relatedTaskFamilies: ["makro2.taskfamily.offene_is-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.offene_is.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.offene_is.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.offene_is.offener_multiplikator',
    conceptId: 'offene_is',
    officialNotation: "offene_is",
    displayFormula: "$$\\frac{\\partial Y}{\\partial G} = \\frac{1}{1-c_1-m}$$",
    intuition: "Importleckage $m$.",
    derivationSteps: [
        {
            "label": "Offener Multiplikator",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$\\frac{\\partial Y}{\\partial G} = \\frac{1}{1-c_1-m}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu offene_is","Offener Multiplikator"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Offener Multiplikator — Importleckage $m$.",
    relatedTaskFamilies: ["makro2.taskfamily.offene_is-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.offene_is.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.offene_is.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.nettoexporte.nettoexportfunktion',
    conceptId: 'nettoexporte',
    officialNotation: "Y, Y^*, \\varepsilon",
    displayFormula: "$$NX = X(Y^*,\\varepsilon) - \\frac{IM(Y,\\varepsilon)}{\\varepsilon}$$",
    intuition: "Gütermarktkanal der offenen Volkswirtschaft",
    derivationSteps: [
        {
            "label": "Nettoexportfunktion",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$NX = X(Y^*,\\varepsilon) - \\frac{IM(Y,\\varepsilon)}{\\varepsilon}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu nettoexporte","Nettoexportfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nettoexportfunktion — Gütermarktkanal der offenen Volkswirtschaft",
    relatedTaskFamilies: ["makro2.taskfamily.nettoexporte-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.nettoexporte.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.nettoexporte.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.nettoexporte.nettoexportfunktion_merksatz',
    conceptId: 'nettoexporte',
    officialNotation: "Y, Y^*, \\varepsilon",
    displayFormula: "$$NX = X(Y^*,\\varepsilon) - \\frac{IM(Y,\\varepsilon)}{\\varepsilon}$$",
    intuition: "Gütermarktkanal der offenen Volkswirtschaft",
    derivationSteps: [
        {
            "label": "Nettoexportfunktion (Merksatz)",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$NX = X(Y^*,\\varepsilon) - \\frac{IM(Y,\\varepsilon)}{\\varepsilon}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu nettoexporte","Nettoexportfunktion (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nettoexportfunktion (Merksatz) — Gütermarktkanal der offenen Volkswirtschaft",
    relatedTaskFamilies: ["makro2.taskfamily.nettoexporte-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.nettoexporte.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.nettoexporte.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.nettoexporte.nx_funktion',
    conceptId: 'nettoexporte',
    officialNotation: "nettoexporte",
    displayFormula: "$$NX = X(Y^*,\\varepsilon) - IM(Y,\\varepsilon)$$",
    intuition: "Export minus Import.",
    derivationSteps: [
        {
            "label": "NX-Funktion",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$NX = X(Y^*,\\varepsilon) - IM(Y,\\varepsilon)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu nettoexporte","NX-Funktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: NX-Funktion — Export minus Import.",
    relatedTaskFamilies: ["makro2.taskfamily.nettoexporte-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.nettoexporte.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.nettoexporte.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.marshall_lerner.marshall_lerner_bedingung',
    conceptId: 'marshall_lerner',
    officialNotation: "\\eta_X, \\eta_M",
    displayFormula: "$$|\\eta_X| + |\\eta_M| > 1$$",
    intuition: "Langfristige Verbesserung der Handelsbilanz nach Abwertung",
    derivationSteps: [
        {
            "label": "Marshall-Lerner-Bedingung",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$|\\eta_X| + |\\eta_M| > 1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu marshall_lerner","Marshall-Lerner-Bedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Marshall-Lerner-Bedingung — Langfristige Verbesserung der Handelsbilanz nach Abwertung",
    relatedTaskFamilies: ["makro2.taskfamily.marshall_lerner-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.marshall_lerner.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.marshall_lerner.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.marshall_lerner.richtungseffekt',
    conceptId: 'marshall_lerner',
    officialNotation: "",
    displayFormula: "$$\\frac{\\partial NX}{\\partial \\varepsilon} < 0$$",
    intuition: "Bei Mengennotierung verbessert fallendes $\\varepsilon$ die Handelsbilanz",
    derivationSteps: [
        {
            "label": "Richtungseffekt",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$\\frac{\\partial NX}{\\partial \\varepsilon} < 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu marshall_lerner","Richtungseffekt"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Richtungseffekt — Bei Mengennotierung verbessert fallendes $\\varepsilon$ die Handelsbilanz",
    relatedTaskFamilies: ["makro2.taskfamily.marshall_lerner-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.marshall_lerner.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.marshall_lerner.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.marshall_lerner.marshall_lerner_bedingung_merksa',
    conceptId: 'marshall_lerner',
    officialNotation: "\\eta_X, \\eta_M",
    displayFormula: "$$|\\eta_X| + |\\eta_M| > 1$$",
    intuition: "Langfristige Verbesserung der Handelsbilanz nach Abwertung",
    derivationSteps: [
        {
            "label": "Marshall-Lerner-Bedingung (Merksatz)",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$|\\eta_X| + |\\eta_M| > 1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu marshall_lerner","Marshall-Lerner-Bedingung (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Marshall-Lerner-Bedingung (Merksatz) — Langfristige Verbesserung der Handelsbilanz nach Abwertung",
    relatedTaskFamilies: ["makro2.taskfamily.marshall_lerner-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.marshall_lerner.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.marshall_lerner.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.marshall_lerner.marshall_lerner',
    conceptId: 'marshall_lerner',
    officialNotation: "marshall_lerner",
    displayFormula: "$$|\\eta_X + \\eta_M| > 1$$",
    intuition: "Elastizitätssumme.",
    derivationSteps: [
        {
            "label": "Marshall-Lerner",
            "text": "Wirtschaftspolitik in einer globalen Rezession?",
            "math": "$$|\\eta_X + \\eta_M| > 1$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu marshall_lerner","Marshall-Lerner"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Marshall-Lerner — Elastizitätssumme.",
    relatedTaskFamilies: ["makro2.taskfamily.marshall_lerner-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.marshall_lerner.slides-02-pdf.p21.wirtschaftspolitik-in-ei","makro2.marshall_lerner.slides-02-pdf.p40.komparative-statik-nachf"]
  }),
  card({
    id: 'makro2.geldmengen.geldmarktgleichgewicht',
    conceptId: 'geldmengen',
    officialNotation: "M/P, L(i)",
    displayFormula: "$$\\frac{M}{P} = Y \\cdot L(i)$$",
    intuition: "Reale Geldmenge = reale Geldnachfrage",
    derivationSteps: [
        {
            "label": "Geldmarktgleichgewicht",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$\\frac{M}{P} = Y \\cdot L(i)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu geldmengen","Geldmarktgleichgewicht"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Geldmarktgleichgewicht — Reale Geldmenge = reale Geldnachfrage",
    relatedTaskFamilies: ["makro2.taskfamily.geldmengen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.geldmengen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.geldmengen.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.geldmengen.lineare_lm',
    conceptId: 'geldmengen',
    officialNotation: "k, h",
    displayFormula: "$$i = \\frac{k}{h}Y - \\frac{1}{h}\\frac{M}{P}$$",
    intuition: "Zins als Funktion von Einkommen und realer Geldmenge",
    derivationSteps: [
        {
            "label": "Lineare LM",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$i = \\frac{k}{h}Y - \\frac{1}{h}\\frac{M}{P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu geldmengen","Lineare LM"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lineare LM — Zins als Funktion von Einkommen und realer Geldmenge",
    relatedTaskFamilies: ["makro2.taskfamily.geldmengen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.geldmengen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.geldmengen.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.geldmengen.geldmarktgleichgewicht_merksatz',
    conceptId: 'geldmengen',
    officialNotation: "M/P, L(i)",
    displayFormula: "$$\\frac{M}{P} = Y \\cdot L(i)$$",
    intuition: "Reale Geldmenge = reale Geldnachfrage",
    derivationSteps: [
        {
            "label": "Geldmarktgleichgewicht (Merksatz)",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$\\frac{M}{P} = Y \\cdot L(i)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu geldmengen","Geldmarktgleichgewicht (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Geldmarktgleichgewicht (Merksatz) — Reale Geldmenge = reale Geldnachfrage",
    relatedTaskFamilies: ["makro2.taskfamily.geldmengen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.geldmengen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.geldmengen.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.geldmengen.lm_offen',
    conceptId: 'geldmengen',
    officialNotation: "geldmengen",
    displayFormula: "$$i = i^*$$",
    intuition: "Grenzfall perfekte Kapitalmobilität.",
    derivationSteps: [
        {
            "label": "LM offen",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$i = i^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu geldmengen","LM offen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: LM offen — Grenzfall perfekte Kapitalmobilität.",
    relatedTaskFamilies: ["makro2.taskfamily.geldmengen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.geldmengen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.geldmengen.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.mundell_fleming.is_in_offener_vw',
    conceptId: 'mundell_fleming',
    officialNotation: "",
    displayFormula: "$$Y = C + I + G + NX(\\varepsilon, Y, Y^*)$$",
    intuition: "Gütermarkt mit Außenbeziehung",
    derivationSteps: [
        {
            "label": "IS in offener VW",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$Y = C + I + G + NX(\\varepsilon, Y, Y^*)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu mundell_fleming","IS in offener VW"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: IS in offener VW — Gütermarkt mit Außenbeziehung",
    relatedTaskFamilies: ["makro2.taskfamily.mundell_fleming-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.mundell_fleming.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.mundell_fleming.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.mundell_fleming.uip_kanal',
    conceptId: 'mundell_fleming',
    officialNotation: "",
    displayFormula: "$$1+i = (1+i^*)\\frac{E}{E^e}$$",
    intuition: "Finanzmarktscharnier des Modells",
    derivationSteps: [
        {
            "label": "UIP-Kanal",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$1+i = (1+i^*)\\frac{E}{E^e}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu mundell_fleming","UIP-Kanal"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: UIP-Kanal — Finanzmarktscharnier des Modells",
    relatedTaskFamilies: ["makro2.taskfamily.mundell_fleming-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.mundell_fleming.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.mundell_fleming.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.mundell_fleming.is_in_offener_vw_merksatz',
    conceptId: 'mundell_fleming',
    officialNotation: "",
    displayFormula: "$$Y = C + I + G + NX(\\varepsilon, Y, Y^*)$$",
    intuition: "Gütermarkt mit Außenbeziehung",
    derivationSteps: [
        {
            "label": "IS in offener VW (Merksatz)",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$Y = C + I + G + NX(\\varepsilon, Y, Y^*)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu mundell_fleming","IS in offener VW (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: IS in offener VW (Merksatz) — Gütermarkt mit Außenbeziehung",
    relatedTaskFamilies: ["makro2.taskfamily.mundell_fleming-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.mundell_fleming.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.mundell_fleming.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.mundell_fleming.fiskal_unter_fix',
    conceptId: 'mundell_fleming',
    officialNotation: "mundell_fleming",
    displayFormula: "$$\\Delta G \\Rightarrow \\Delta M \\uparrow \\Rightarrow \\Delta Y$$",
    intuition: "Kein NX-Crowding-out über WK.",
    derivationSteps: [
        {
            "label": "Fiskal unter fix",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$\\Delta G \\Rightarrow \\Delta M \\uparrow \\Rightarrow \\Delta Y$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu mundell_fleming","Fiskal unter fix"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fiskal unter fix — Kein NX-Crowding-out über WK.",
    relatedTaskFamilies: ["makro2.taskfamily.mundell_fleming-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.mundell_fleming.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.mundell_fleming.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.zp_kurve.zahlungsbilanzgleichgewicht',
    conceptId: 'zp_kurve',
    officialNotation: "LB, KB, i^*",
    displayFormula: "$$LB(Y,Y^*,\\varepsilon) + KB(i-i^*) = 0$$",
    intuition: "Leistungs- und Kapitalbilanz müssen sich ausgleichen",
    derivationSteps: [
        {
            "label": "Zahlungsbilanzgleichgewicht",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$LB(Y,Y^*,\\varepsilon) + KB(i-i^*) = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zp_kurve","Zahlungsbilanzgleichgewicht"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zahlungsbilanzgleichgewicht — Leistungs- und Kapitalbilanz müssen sich ausgleichen",
    relatedTaskFamilies: ["makro2.taskfamily.zp_kurve-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zp_kurve.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.zp_kurve.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.zp_kurve.perfekte_kapitalmobilit_t',
    conceptId: 'zp_kurve',
    officialNotation: "i, i^*",
    displayFormula: "$$i = i^*$$",
    intuition: "Im Grenzfall wird die ZP-Kurve horizontal",
    derivationSteps: [
        {
            "label": "Perfekte Kapitalmobilität",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$i = i^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zp_kurve","Perfekte Kapitalmobilität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Perfekte Kapitalmobilität — Im Grenzfall wird die ZP-Kurve horizontal",
    relatedTaskFamilies: ["makro2.taskfamily.zp_kurve-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zp_kurve.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.zp_kurve.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.zp_kurve.zahlungsbilanzgleichgewicht_merk',
    conceptId: 'zp_kurve',
    officialNotation: "LB, KB, i^*",
    displayFormula: "$$LB(Y,Y^*,\\varepsilon) + KB(i-i^*) = 0$$",
    intuition: "Leistungs- und Kapitalbilanz müssen sich ausgleichen",
    derivationSteps: [
        {
            "label": "Zahlungsbilanzgleichgewicht (Merksatz)",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$LB(Y,Y^*,\\varepsilon) + KB(i-i^*) = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zp_kurve","Zahlungsbilanzgleichgewicht (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zahlungsbilanzgleichgewicht (Merksatz) — Leistungs- und Kapitalbilanz müssen sich ausgleichen",
    relatedTaskFamilies: ["makro2.taskfamily.zp_kurve-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zp_kurve.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.zp_kurve.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.zp_kurve.zp',
    conceptId: 'zp_kurve',
    officialNotation: "zp_kurve",
    displayFormula: "$$NX(Y,\\varepsilon) + KA(i,i^*) = 0$$",
    intuition: "Zahlungsbilanzgleichgewicht.",
    derivationSteps: [
        {
            "label": "ZP",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$NX(Y,\\varepsilon) + KA(i,i^*) = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zp_kurve","ZP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: ZP — Zahlungsbilanzgleichgewicht.",
    relatedTaskFamilies: ["makro2.taskfamily.zp_kurve-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zp_kurve.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.zp_kurve.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.wirtschaftspolitik_offen.flexibler_wechselkurs',
    conceptId: 'wirtschaftspolitik_offen',
    officialNotation: "NX",
    displayFormula: "$$\\Delta G>0 \\Rightarrow \\text{partielles oder starkes Crowding-out über } NX$$",
    intuition: "Fiskalpolitik trifft auf den Aufwertungskanal",
    derivationSteps: [
        {
            "label": "Flexibler Wechselkurs",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$\\Delta G>0 \\Rightarrow \\text{partielles oder starkes Crowding-out über } NX$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wirtschaftspolitik_offen","Flexibler Wechselkurs"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Flexibler Wechselkurs — Fiskalpolitik trifft auf den Aufwertungskanal",
    relatedTaskFamilies: ["makro2.taskfamily.wirtschaftspolitik_offen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wirtschaftspolitik_offen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.wirtschaftspolitik_offen.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.wirtschaftspolitik_offen.fester_wechselkurs',
    conceptId: 'wirtschaftspolitik_offen',
    officialNotation: "",
    displayFormula: "$$\\Delta G>0 \\Rightarrow \\Delta M>0 \\Rightarrow \\Delta Y \\text{ stärker}$$",
    intuition: "Die Paritätsverteidigung akkommodiert den Fiskalimpuls",
    derivationSteps: [
        {
            "label": "Fester Wechselkurs",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$\\Delta G>0 \\Rightarrow \\Delta M>0 \\Rightarrow \\Delta Y \\text{ stärker}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wirtschaftspolitik_offen","Fester Wechselkurs"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fester Wechselkurs — Die Paritätsverteidigung akkommodiert den Fiskalimpuls",
    relatedTaskFamilies: ["makro2.taskfamily.wirtschaftspolitik_offen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wirtschaftspolitik_offen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.wirtschaftspolitik_offen.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.wirtschaftspolitik_offen.flexibler_wechselkurs_merksatz',
    conceptId: 'wirtschaftspolitik_offen',
    officialNotation: "NX",
    displayFormula: "$$\\Delta G>0 \\Rightarrow \\text{partielles oder starkes Crowding-out über } NX$$",
    intuition: "Fiskalpolitik trifft auf den Aufwertungskanal",
    derivationSteps: [
        {
            "label": "Flexibler Wechselkurs (Merksatz)",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$\\Delta G>0 \\Rightarrow \\text{partielles oder starkes Crowding-out über } NX$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wirtschaftspolitik_offen","Flexibler Wechselkurs (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Flexibler Wechselkurs (Merksatz) — Fiskalpolitik trifft auf den Aufwertungskanal",
    relatedTaskFamilies: ["makro2.taskfamily.wirtschaftspolitik_offen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wirtschaftspolitik_offen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.wirtschaftspolitik_offen.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.wirtschaftspolitik_offen.m_f_theorem',
    conceptId: 'wirtschaftspolitik_offen',
    officialNotation: "wirtschaftspolitik_offen",
    displayFormula: "$$\\text{flex: } \\Delta M \\text{ wirkt; fix: } \\Delta G \\text{ wirkt}$$",
    intuition: "Kapitalmobilität vorausgesetzt.",
    derivationSteps: [
        {
            "label": "M-F Theorem",
            "text": "I Gemeinsame Währung: Euro",
            "math": "$$\\text{flex: } \\Delta M \\text{ wirkt; fix: } \\Delta G \\text{ wirkt}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wirtschaftspolitik_offen","M-F Theorem"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: M-F Theorem — Kapitalmobilität vorausgesetzt.",
    relatedTaskFamilies: ["makro2.taskfamily.wirtschaftspolitik_offen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wirtschaftspolitik_offen.slides-03-pdf.p34.i-gemeinsame-wa-hrung-eu","makro2.wirtschaftspolitik_offen.slides-03-pdf.p04.das-gleichgewicht-auf-de"]
  }),
  card({
    id: 'makro2.wk_regime.trilemma_logik',
    conceptId: 'wk_regime',
    officialNotation: "",
    displayFormula: "$$\\text{fixer WK} + \\text{freie Kapitalmobilität} \\Rightarrow \\text{keine autonome Geldpolitik}$$",
    intuition: "Politische Restriktion der offenen Makro",
    derivationSteps: [
        {
            "label": "Trilemma-Logik",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$\\text{fixer WK} + \\text{freie Kapitalmobilität} \\Rightarrow \\text{keine autonome Geldpolitik}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wk_regime","Trilemma-Logik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Trilemma-Logik — Politische Restriktion der offenen Makro",
    relatedTaskFamilies: ["makro2.taskfamily.wk_regime-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wk_regime.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.wk_regime.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.wk_regime.trilemma_logik_merksatz',
    conceptId: 'wk_regime',
    officialNotation: "",
    displayFormula: "$$\\text{fixer WK} + \\text{freie Kapitalmobilität} \\Rightarrow \\text{keine autonome Geldpolitik}$$",
    intuition: "Politische Restriktion der offenen Makro",
    derivationSteps: [
        {
            "label": "Trilemma-Logik (Merksatz)",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$\\text{fixer WK} + \\text{freie Kapitalmobilität} \\Rightarrow \\text{keine autonome Geldpolitik}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wk_regime","Trilemma-Logik (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Trilemma-Logik (Merksatz) — Politische Restriktion der offenen Makro",
    relatedTaskFamilies: ["makro2.taskfamily.wk_regime-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wk_regime.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.wk_regime.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.wk_regime.devisenintervention',
    conceptId: 'wk_regime',
    officialNotation: "wk_regime",
    displayFormula: "$$\\Delta R \\Leftrightarrow KB$$",
    intuition: "Reserven und Kapitalbilanz.",
    derivationSteps: [
        {
            "label": "Devisenintervention",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$\\Delta R \\Leftrightarrow KB$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wk_regime","Devisenintervention"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Devisenintervention — Reserven und Kapitalbilanz.",
    relatedTaskFamilies: ["makro2.taskfamily.wk_regime-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wk_regime.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.wk_regime.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.wk_krisen.erwartete_abwertung_und_zinsaufs',
    conceptId: 'wk_krisen',
    officialNotation: "",
    displayFormula: "$$i - i^* \\approx \\mathbb{E}\\left[\\frac{\\Delta E}{E}\\right]$$",
    intuition: "Je unglaubwürdiger die Parität, desto höher der notwendige Zinsaufschlag",
    derivationSteps: [
        {
            "label": "Erwartete Abwertung und Zinsaufschlag",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$i - i^* \\approx \\mathbb{E}\\left[\\frac{\\Delta E}{E}\\right]$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wk_krisen","Erwartete Abwertung und Zinsaufschlag"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartete Abwertung und Zinsaufschlag — Je unglaubwürdiger die Parität, desto höher der notwendige Zinsaufschlag",
    relatedTaskFamilies: ["makro2.taskfamily.wk_krisen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wk_krisen.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.wk_krisen.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.wk_krisen.erwartete_abwertung_und_zinsaufs',
    conceptId: 'wk_krisen',
    officialNotation: "",
    displayFormula: "$$i - i^* \\approx \\mathbb{E}\\left[\\frac{\\Delta E}{E}\\right]$$",
    intuition: "Je unglaubwürdiger die Parität, desto höher der notwendige Zinsaufschlag",
    derivationSteps: [
        {
            "label": "Erwartete Abwertung und Zinsaufschlag (Merksatz)",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$i - i^* \\approx \\mathbb{E}\\left[\\frac{\\Delta E}{E}\\right]$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wk_krisen","Erwartete Abwertung und Zinsaufschlag (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartete Abwertung und Zinsaufschlag (Merksatz) — Je unglaubwürdiger die Parität, desto höher der notwendige Zinsaufschlag",
    relatedTaskFamilies: ["makro2.taskfamily.wk_krisen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wk_krisen.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.wk_krisen.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.wk_krisen.risikopr_mie',
    conceptId: 'wk_krisen',
    officialNotation: "wk_krisen",
    displayFormula: "$$i = i^* + \\phi + \\mathbb{E}[\\Delta E/E]$$",
    intuition: "Aufschlag bei Unglaubwürdigkeit.",
    derivationSteps: [
        {
            "label": "Risikoprämie",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$i = i^* + \\phi + \\mathbb{E}[\\Delta E/E]$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wk_krisen","Risikoprämie"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Risikoprämie — Aufschlag bei Unglaubwürdigkeit.",
    relatedTaskFamilies: ["makro2.taskfamily.wk_krisen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wk_krisen.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.wk_krisen.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.opt_waehrungsraum.owr_abw_gung',
    conceptId: 'opt_waehrungsraum',
    officialNotation: "",
    displayFormula: "$$\\text{Nutzen der Währungsunion} \\gtrless \\text{Kosten des Verzichts auf den eigenen WK}$$",
    intuition: "Kein Rechengesetz, sondern die Prüfungslogik des Konzepts",
    derivationSteps: [
        {
            "label": "OWR-Abwägung",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$\\text{Nutzen der Währungsunion} \\gtrless \\text{Kosten des Verzichts auf den eigenen WK}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu opt_waehrungsraum","OWR-Abwägung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: OWR-Abwägung — Kein Rechengesetz, sondern die Prüfungslogik des Konzepts",
    relatedTaskFamilies: ["makro2.taskfamily.opt_waehrungsraum-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.opt_waehrungsraum.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.opt_waehrungsraum.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.opt_waehrungsraum.owr_abw_gung_merksatz',
    conceptId: 'opt_waehrungsraum',
    officialNotation: "",
    displayFormula: "$$\\text{Nutzen der Währungsunion} \\gtrless \\text{Kosten des Verzichts auf den eigenen WK}$$",
    intuition: "Kein Rechengesetz, sondern die Prüfungslogik des Konzepts",
    derivationSteps: [
        {
            "label": "OWR-Abwägung (Merksatz)",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$\\text{Nutzen der Währungsunion} \\gtrless \\text{Kosten des Verzichts auf den eigenen WK}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu opt_waehrungsraum","OWR-Abwägung (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: OWR-Abwägung (Merksatz) — Kein Rechengesetz, sondern die Prüfungslogik des Konzepts",
    relatedTaskFamilies: ["makro2.taskfamily.opt_waehrungsraum-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.opt_waehrungsraum.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.opt_waehrungsraum.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.opt_waehrungsraum.owr_trade_off',
    conceptId: 'opt_waehrungsraum',
    officialNotation: "opt_waehrungsraum",
    displayFormula: "$$\\text{Nutzen(WU)} \\gtrless \\text{Kosten(Verzicht auf WK)}$$",
    intuition: "Abwägung.",
    derivationSteps: [
        {
            "label": "OWR-Trade-off",
            "text": "I Den Wechselkurs verteidigen",
            "math": "$$\\text{Nutzen(WU)} \\gtrless \\text{Kosten(Verzicht auf WK)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu opt_waehrungsraum","OWR-Trade-off"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: OWR-Trade-off — Abwägung.",
    relatedTaskFamilies: ["makro2.taskfamily.opt_waehrungsraum-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.opt_waehrungsraum.slides-04-pdf.p16.i-den-wechselkurs-vertei","makro2.opt_waehrungsraum.slides-04-pdf.p33.asymmetrischen-schocks-a"]
  }),
  card({
    id: 'makro2.phillipskurve.erwartungsaugmentierte_phillipsk',
    conceptId: 'phillipskurve',
    officialNotation: "u_n, \\alpha",
    displayFormula: "$$\\pi_t = \\pi_t^e - \\alpha (u_t - u_n)$$",
    intuition: "Inflation, Erwartungen und Auslastung",
    derivationSteps: [
        {
            "label": "Erwartungsaugmentierte Phillipskurve",
            "text": "Unsicherheit und Politik",
            "math": "$$\\pi_t = \\pi_t^e - \\alpha (u_t - u_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu phillipskurve","Erwartungsaugmentierte Phillipskurve"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartungsaugmentierte Phillipskurve — Inflation, Erwartungen und Auslastung",
    relatedTaskFamilies: ["makro2.taskfamily.phillipskurve-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.phillipskurve.slides-05-pdf.p08.unsicherheit-und-politik","makro2.phillipskurve.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.phillipskurve.erwartungsaugmentierte_phillipsk',
    conceptId: 'phillipskurve',
    officialNotation: "u_n, \\alpha",
    displayFormula: "$$\\pi_t = \\pi_t^e - \\alpha (u_t - u_n)$$",
    intuition: "Inflation, Erwartungen und Auslastung",
    derivationSteps: [
        {
            "label": "Erwartungsaugmentierte Phillipskurve (Merksatz)",
            "text": "Unsicherheit und Politik",
            "math": "$$\\pi_t = \\pi_t^e - \\alpha (u_t - u_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu phillipskurve","Erwartungsaugmentierte Phillipskurve (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartungsaugmentierte Phillipskurve (Merksatz) — Inflation, Erwartungen und Auslastung",
    relatedTaskFamilies: ["makro2.taskfamily.phillipskurve-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.phillipskurve.slides-05-pdf.p08.unsicherheit-und-politik","makro2.phillipskurve.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.phillipskurve.pc',
    conceptId: 'phillipskurve',
    officialNotation: "phillipskurve",
    displayFormula: "$$\\pi = \\pi^e - \\alpha(u-u^n)$$",
    intuition: "Erwartungen eingebaut.",
    derivationSteps: [
        {
            "label": "PC",
            "text": "Unsicherheit und Politik",
            "math": "$$\\pi = \\pi^e - \\alpha(u-u^n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu phillipskurve","PC"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: PC — Erwartungen eingebaut.",
    relatedTaskFamilies: ["makro2.taskfamily.phillipskurve-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.phillipskurve.slides-05-pdf.p08.unsicherheit-und-politik","makro2.phillipskurve.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.zeitinkonsistenz.phillips_anreiz',
    conceptId: 'zeitinkonsistenz',
    officialNotation: "",
    displayFormula: "$$u = u_n - \\alpha(\\pi - \\pi^e)$$",
    intuition: "Überraschungsinflation wirkt nur über Erwartungen",
    derivationSteps: [
        {
            "label": "Phillips-Anreiz",
            "text": "Unsicherheit und Politik",
            "math": "$$u = u_n - \\alpha(\\pi - \\pi^e)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zeitinkonsistenz","Phillips-Anreiz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Phillips-Anreiz — Überraschungsinflation wirkt nur über Erwartungen",
    relatedTaskFamilies: ["makro2.taskfamily.zeitinkonsistenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zeitinkonsistenz.slides-05-pdf.p08.unsicherheit-und-politik","makro2.zeitinkonsistenz.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.zeitinkonsistenz.phillips_anreiz_merksatz',
    conceptId: 'zeitinkonsistenz',
    officialNotation: "",
    displayFormula: "$$u = u_n - \\alpha(\\pi - \\pi^e)$$",
    intuition: "Überraschungsinflation wirkt nur über Erwartungen",
    derivationSteps: [
        {
            "label": "Phillips-Anreiz (Merksatz)",
            "text": "Unsicherheit und Politik",
            "math": "$$u = u_n - \\alpha(\\pi - \\pi^e)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zeitinkonsistenz","Phillips-Anreiz (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Phillips-Anreiz (Merksatz) — Überraschungsinflation wirkt nur über Erwartungen",
    relatedTaskFamilies: ["makro2.taskfamily.zeitinkonsistenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zeitinkonsistenz.slides-05-pdf.p08.unsicherheit-und-politik","makro2.zeitinkonsistenz.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.zeitinkonsistenz.kydland_prescott',
    conceptId: 'zeitinkonsistenz',
    officialNotation: "zeitinkonsistenz",
    displayFormula: "$$\\pi(\\text{discretion}) > \\pi(\\text{commitment})$$",
    intuition: "Bias unter Diskretion.",
    derivationSteps: [
        {
            "label": "Kydland-Prescott",
            "text": "Unsicherheit und Politik",
            "math": "$$\\pi(\\text{discretion}) > \\pi(\\text{commitment})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zeitinkonsistenz","Kydland-Prescott"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kydland-Prescott — Bias unter Diskretion.",
    relatedTaskFamilies: ["makro2.taskfamily.zeitinkonsistenz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.zeitinkonsistenz.slides-05-pdf.p08.unsicherheit-und-politik","makro2.zeitinkonsistenz.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.barro_gordon.verlustfunktion',
    conceptId: 'barro_gordon',
    officialNotation: "\\chi, \\lambda",
    displayFormula: "$$L = \\frac{1}{2}\\chi \\pi^2 + \\frac{1}{2}\\lambda (u-u^*)^2$$",
    intuition: "Präferenzstruktur der Zentralbank",
    derivationSteps: [
        {
            "label": "Verlustfunktion",
            "text": "Unsicherheit und Politik",
            "math": "$$L = \\frac{1}{2}\\chi \\pi^2 + \\frac{1}{2}\\lambda (u-u^*)^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu barro_gordon","Verlustfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verlustfunktion — Präferenzstruktur der Zentralbank",
    relatedTaskFamilies: ["makro2.taskfamily.barro_gordon-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.barro_gordon.slides-05-pdf.p08.unsicherheit-und-politik","makro2.barro_gordon.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.barro_gordon.inflationsbias',
    conceptId: 'barro_gordon',
    officialNotation: "",
    displayFormula: "$$\\pi^{D} = \\frac{\\alpha \\lambda}{\\chi}(u_n-u^*)$$",
    intuition: "Diskretionäres Gleichgewicht unter rationalen Erwartungen",
    derivationSteps: [
        {
            "label": "Inflationsbias",
            "text": "Unsicherheit und Politik",
            "math": "$$\\pi^{D} = \\frac{\\alpha \\lambda}{\\chi}(u_n-u^*)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu barro_gordon","Inflationsbias"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Inflationsbias — Diskretionäres Gleichgewicht unter rationalen Erwartungen",
    relatedTaskFamilies: ["makro2.taskfamily.barro_gordon-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.barro_gordon.slides-05-pdf.p08.unsicherheit-und-politik","makro2.barro_gordon.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.barro_gordon.verlustfunktion_merksatz',
    conceptId: 'barro_gordon',
    officialNotation: "\\chi, \\lambda",
    displayFormula: "$$L = \\frac{1}{2}\\chi \\pi^2 + \\frac{1}{2}\\lambda (u-u^*)^2$$",
    intuition: "Präferenzstruktur der Zentralbank",
    derivationSteps: [
        {
            "label": "Verlustfunktion (Merksatz)",
            "text": "Unsicherheit und Politik",
            "math": "$$L = \\frac{1}{2}\\chi \\pi^2 + \\frac{1}{2}\\lambda (u-u^*)^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu barro_gordon","Verlustfunktion (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verlustfunktion (Merksatz) — Präferenzstruktur der Zentralbank",
    relatedTaskFamilies: ["makro2.taskfamily.barro_gordon-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.barro_gordon.slides-05-pdf.p08.unsicherheit-und-politik","makro2.barro_gordon.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.barro_gordon.verlustfunktion',
    conceptId: 'barro_gordon',
    officialNotation: "barro_gordon",
    displayFormula: "$$L = (\\pi-\\pi^*)^2 + \\lambda u^2$$",
    intuition: "Zielkonflikt.",
    derivationSteps: [
        {
            "label": "Verlustfunktion",
            "text": "Unsicherheit und Politik",
            "math": "$$L = (\\pi-\\pi^*)^2 + \\lambda u^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu barro_gordon","Verlustfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verlustfunktion — Zielkonflikt.",
    relatedTaskFamilies: ["makro2.taskfamily.barro_gordon-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.barro_gordon.slides-05-pdf.p08.unsicherheit-und-politik","makro2.barro_gordon.slides-05-pdf.p11.polito-konomische-aspekt"]
  }),
  card({
    id: 'makro2.taylor_regel.taylor_regel',
    conceptId: 'taylor_regel',
    officialNotation: "r^*, \\pi^*",
    displayFormula: "$$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$$",
    intuition: "Reaktionsfunktion der Geldpolitik",
    derivationSteps: [
        {
            "label": "Taylor-Regel",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu taylor_regel","Taylor-Regel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Taylor-Regel — Reaktionsfunktion der Geldpolitik",
    relatedTaskFamilies: ["makro2.taskfamily.taylor_regel-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.taylor_regel.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.taylor_regel.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.taylor_regel.taylor_regel_merksatz',
    conceptId: 'taylor_regel',
    officialNotation: "r^*, \\pi^*",
    displayFormula: "$$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$$",
    intuition: "Reaktionsfunktion der Geldpolitik",
    derivationSteps: [
        {
            "label": "Taylor-Regel (Merksatz)",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu taylor_regel","Taylor-Regel (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Taylor-Regel (Merksatz) — Reaktionsfunktion der Geldpolitik",
    relatedTaskFamilies: ["makro2.taskfamily.taylor_regel-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.taylor_regel.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.taylor_regel.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.taylor_regel.taylor',
    conceptId: 'taylor_regel',
    officialNotation: "taylor_regel",
    displayFormula: "$$i = r^* + \\pi + \\phi_\\pi(\\pi-\\pi^*) + \\phi_y(y-y^n)$$",
    intuition: "Leitzinsregel.",
    derivationSteps: [
        {
            "label": "Taylor",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$i = r^* + \\pi + \\phi_\\pi(\\pi-\\pi^*) + \\phi_y(y-y^n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu taylor_regel","Taylor"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Taylor — Leitzinsregel.",
    relatedTaskFamilies: ["makro2.taskfamily.taylor_regel-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.taylor_regel.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.taylor_regel.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.inflation_targeting.zielorientierte_reaktionsfunktio',
    conceptId: 'inflation_targeting',
    officialNotation: "r^*, \\pi_t, \\pi^*, y_t-y_n",
    displayFormula: "$$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$$",
    intuition: "Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein",
    derivationSteps: [
        {
            "label": "Zielorientierte Reaktionsfunktion",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inflation_targeting","Zielorientierte Reaktionsfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zielorientierte Reaktionsfunktion — Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein",
    relatedTaskFamilies: ["makro2.taskfamily.inflation_targeting-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.inflation_targeting.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.inflation_targeting.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.inflation_targeting.realzins_an_der_untergrenze',
    conceptId: 'inflation_targeting',
    officialNotation: "r_t, i_t, \\pi_t",
    displayFormula: "$$r_t \\approx i_t - \\pi_t$$",
    intuition: "Bei gegebener ELB hängt der Stabilisierungsspielraum an der Inflation",
    derivationSteps: [
        {
            "label": "Realzins an der Untergrenze",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$r_t \\approx i_t - \\pi_t$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inflation_targeting","Realzins an der Untergrenze"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Realzins an der Untergrenze — Bei gegebener ELB hängt der Stabilisierungsspielraum an der Inflation",
    relatedTaskFamilies: ["makro2.taskfamily.inflation_targeting-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.inflation_targeting.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.inflation_targeting.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.inflation_targeting.zielorientierte_reaktionsfunktio',
    conceptId: 'inflation_targeting',
    officialNotation: "r^*, \\pi_t, \\pi^*, y_t-y_n",
    displayFormula: "$$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$$",
    intuition: "Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein",
    derivationSteps: [
        {
            "label": "Zielorientierte Reaktionsfunktion (Merksatz)",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$i_t = r^* + \\pi_t + a(\\pi_t-\\pi^*) + b(y_t-y_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inflation_targeting","Zielorientierte Reaktionsfunktion (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zielorientierte Reaktionsfunktion (Merksatz) — Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein",
    relatedTaskFamilies: ["makro2.taskfamily.inflation_targeting-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.inflation_targeting.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.inflation_targeting.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.inflation_targeting.zielpfad',
    conceptId: 'inflation_targeting',
    officialNotation: "inflation_targeting",
    displayFormula: "$$\\mathbb{E}_t[\\pi_{t+k}] \\rightarrow \\pi^*$$",
    intuition: "Mittelfristiger Anker.",
    derivationSteps: [
        {
            "label": "Zielpfad",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$\\mathbb{E}_t[\\pi_{t+k}] \\rightarrow \\pi^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inflation_targeting","Zielpfad"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zielpfad — Mittelfristiger Anker.",
    relatedTaskFamilies: ["makro2.taskfamily.inflation_targeting-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.inflation_targeting.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.inflation_targeting.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.inflation_kosten.disinflation_und_arbeitslosigkei',
    conceptId: 'inflation_kosten',
    officialNotation: "\\Delta u, \\Delta \\pi, \\alpha",
    displayFormula: "$$\\Delta u \\approx -\\frac{\\Delta \\pi}{\\alpha}$$",
    intuition: "Schnelle Disinflation erzeugt bei gegebener Steigung reale Kosten",
    derivationSteps: [
        {
            "label": "Disinflation und Arbeitslosigkeit",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$\\Delta u \\approx -\\frac{\\Delta \\pi}{\\alpha}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inflation_kosten","Disinflation und Arbeitslosigkeit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Disinflation und Arbeitslosigkeit — Schnelle Disinflation erzeugt bei gegebener Steigung reale Kosten",
    relatedTaskFamilies: ["makro2.taskfamily.inflation_kosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.inflation_kosten.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.inflation_kosten.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.inflation_kosten.opferquote',
    conceptId: 'inflation_kosten',
    officialNotation: "SR, Y_n-Y_t",
    displayFormula: "$$SR = \\frac{\\sum_t (Y_n-Y_t)/Y_n}{|\\Delta \\pi|}$$",
    intuition: "Kumulierter Outputverlust je Prozentpunkt Disinflation",
    derivationSteps: [
        {
            "label": "Opferquote",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$SR = \\frac{\\sum_t (Y_n-Y_t)/Y_n}{|\\Delta \\pi|}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inflation_kosten","Opferquote"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Opferquote — Kumulierter Outputverlust je Prozentpunkt Disinflation",
    relatedTaskFamilies: ["makro2.taskfamily.inflation_kosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.inflation_kosten.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.inflation_kosten.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.inflation_kosten.disinflation_und_arbeitslosigkei',
    conceptId: 'inflation_kosten',
    officialNotation: "\\Delta u, \\Delta \\pi, \\alpha",
    displayFormula: "$$\\Delta u \\approx -\\frac{\\Delta \\pi}{\\alpha}$$",
    intuition: "Schnelle Disinflation erzeugt bei gegebener Steigung reale Kosten",
    derivationSteps: [
        {
            "label": "Disinflation und Arbeitslosigkeit (Merksatz)",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$\\Delta u \\approx -\\frac{\\Delta \\pi}{\\alpha}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inflation_kosten","Disinflation und Arbeitslosigkeit (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Disinflation und Arbeitslosigkeit (Merksatz) — Schnelle Disinflation erzeugt bei gegebener Steigung reale Kosten",
    relatedTaskFamilies: ["makro2.taskfamily.inflation_kosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.inflation_kosten.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.inflation_kosten.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.inflation_kosten.sacrifice_ratio',
    conceptId: 'inflation_kosten',
    officialNotation: "inflation_kosten",
    displayFormula: "$$\\frac{\\Delta u}{\\Delta \\pi}$$",
    intuition: "Arbeitslosigkeit pro Inflationspunkt Senkung.",
    derivationSteps: [
        {
            "label": "Sacrifice ratio",
            "text": "I Seigniorage (Einnahmen des Staates aus Geldschöpfung)",
            "math": "$$\\frac{\\Delta u}{\\Delta \\pi}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inflation_kosten","Sacrifice ratio"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Sacrifice ratio — Arbeitslosigkeit pro Inflationspunkt Senkung.",
    relatedTaskFamilies: ["makro2.taskfamily.inflation_kosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.inflation_kosten.slides-07-pdf.p23.i-seigniorage-einnahmen-","makro2.inflation_kosten.slides-07-pdf.p11.moderne-konzepte-der-gel"]
  }),
  card({
    id: 'makro2.wachstum_fakten.wachstumszerlegung',
    conceptId: 'wachstum_fakten',
    officialNotation: "g_Y, g_A, g_K, g_N, \\alpha_K",
    displayFormula: "$$g_Y \\approx g_A + \\alpha_K g_K + (1-\\alpha_K) g_N$$",
    intuition: "BIP-Wachstum als Summe aus Produktivität, Kapital- und Arbeitsbeitrag",
    derivationSteps: [
        {
            "label": "Wachstumszerlegung",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$g_Y \\approx g_A + \\alpha_K g_K + (1-\\alpha_K) g_N$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wachstum_fakten","Wachstumszerlegung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wachstumszerlegung — BIP-Wachstum als Summe aus Produktivität, Kapital- und Arbeitsbeitrag",
    relatedTaskFamilies: ["makro2.taskfamily.wachstum_fakten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wachstum_fakten.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.wachstum_fakten.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.wachstum_fakten.wachstumszerlegung_merksatz',
    conceptId: 'wachstum_fakten',
    officialNotation: "g_Y, g_A, g_K, g_N, \\alpha_K",
    displayFormula: "$$g_Y \\approx g_A + \\alpha_K g_K + (1-\\alpha_K) g_N$$",
    intuition: "BIP-Wachstum als Summe aus Produktivität, Kapital- und Arbeitsbeitrag",
    derivationSteps: [
        {
            "label": "Wachstumszerlegung (Merksatz)",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$g_Y \\approx g_A + \\alpha_K g_K + (1-\\alpha_K) g_N$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wachstum_fakten","Wachstumszerlegung (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wachstumszerlegung (Merksatz) — BIP-Wachstum als Summe aus Produktivität, Kapital- und Arbeitsbeitrag",
    relatedTaskFamilies: ["makro2.taskfamily.wachstum_fakten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wachstum_fakten.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.wachstum_fakten.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.wachstum_fakten.pro_kopf_wachstum',
    conceptId: 'wachstum_fakten',
    officialNotation: "wachstum_fakten",
    displayFormula: "$$g_Y \\approx g_A + g_L$$",
    intuition: "Technik + Bevölkerung.",
    derivationSteps: [
        {
            "label": "Pro-Kopf-Wachstum",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$g_Y \\approx g_A + g_L$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wachstum_fakten","Pro-Kopf-Wachstum"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Pro-Kopf-Wachstum — Technik + Bevölkerung.",
    relatedTaskFamilies: ["makro2.taskfamily.wachstum_fakten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.wachstum_fakten.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.wachstum_fakten.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.aggregierte_pf.cobb_douglas',
    conceptId: 'aggregierte_pf',
    officialNotation: "A, \\alpha",
    displayFormula: "$$Y = A K^{\\alpha} N^{1-\\alpha}$$",
    intuition: "Standardfunktion des Solow-Modells",
    derivationSteps: [
        {
            "label": "Cobb-Douglas",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$Y = A K^{\\alpha} N^{1-\\alpha}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu aggregierte_pf","Cobb-Douglas"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Cobb-Douglas — Standardfunktion des Solow-Modells",
    relatedTaskFamilies: ["makro2.taskfamily.aggregierte_pf-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.aggregierte_pf.pro_kopf_form',
    conceptId: 'aggregierte_pf',
    officialNotation: "",
    displayFormula: "$$y = A k^{\\alpha}$$",
    intuition: "Intensive Form bei konstanten Skalenerträgen",
    derivationSteps: [
        {
            "label": "Pro-Kopf-Form",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$y = A k^{\\alpha}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu aggregierte_pf","Pro-Kopf-Form"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Pro-Kopf-Form — Intensive Form bei konstanten Skalenerträgen",
    relatedTaskFamilies: ["makro2.taskfamily.aggregierte_pf-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.aggregierte_pf.cobb_douglas_merksatz',
    conceptId: 'aggregierte_pf',
    officialNotation: "A, \\alpha",
    displayFormula: "$$Y = A K^{\\alpha} N^{1-\\alpha}$$",
    intuition: "Standardfunktion des Solow-Modells",
    derivationSteps: [
        {
            "label": "Cobb-Douglas (Merksatz)",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$Y = A K^{\\alpha} N^{1-\\alpha}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu aggregierte_pf","Cobb-Douglas (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Cobb-Douglas (Merksatz) — Standardfunktion des Solow-Modells",
    relatedTaskFamilies: ["makro2.taskfamily.aggregierte_pf-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.aggregierte_pf.pf',
    conceptId: 'aggregierte_pf',
    officialNotation: "aggregierte_pf",
    displayFormula: "$$Y = A K^\\alpha L^{1-\\alpha}$$",
    intuition: "Aggregierte Produktion.",
    derivationSteps: [
        {
            "label": "PF",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$Y = A K^\\alpha L^{1-\\alpha}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu aggregierte_pf","PF"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: PF — Aggregierte Produktion.",
    relatedTaskFamilies: ["makro2.taskfamily.aggregierte_pf-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.aggregierte_pf.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.solow_basis.kapitaldynamik',
    conceptId: 'solow_basis',
    officialNotation: "s, \\delta",
    displayFormula: "$$\\dot k = s f(k) - \\delta k$$",
    intuition: "Akkumulation im Grundmodell",
    derivationSteps: [
        {
            "label": "Kapitaldynamik",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$\\dot k = s f(k) - \\delta k$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu solow_basis","Kapitaldynamik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kapitaldynamik — Akkumulation im Grundmodell",
    relatedTaskFamilies: ["makro2.taskfamily.solow_basis-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.solow_basis.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.solow_basis.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.solow_basis.steady_state_bedingung',
    conceptId: 'solow_basis',
    officialNotation: "",
    displayFormula: "$$s f(k^*) = \\delta k^*$$",
    intuition: "Investition = Break-even-Investition",
    derivationSteps: [
        {
            "label": "Steady-State-Bedingung",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$s f(k^*) = \\delta k^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu solow_basis","Steady-State-Bedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Steady-State-Bedingung — Investition = Break-even-Investition",
    relatedTaskFamilies: ["makro2.taskfamily.solow_basis-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.solow_basis.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.solow_basis.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.solow_basis.kapitaldynamik_merksatz',
    conceptId: 'solow_basis',
    officialNotation: "s, \\delta",
    displayFormula: "$$\\dot k = s f(k) - \\delta k$$",
    intuition: "Akkumulation im Grundmodell",
    derivationSteps: [
        {
            "label": "Kapitaldynamik (Merksatz)",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$\\dot k = s f(k) - \\delta k$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu solow_basis","Kapitaldynamik (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kapitaldynamik (Merksatz) — Akkumulation im Grundmodell",
    relatedTaskFamilies: ["makro2.taskfamily.solow_basis-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.solow_basis.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.solow_basis.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.solow_basis.kapitaldynamik',
    conceptId: 'solow_basis',
    officialNotation: "solow_basis",
    displayFormula: "$$\\dot k = s f(k) - (\\delta+n)k$$",
    intuition: "Solow Kern.",
    derivationSteps: [
        {
            "label": "Kapitaldynamik",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$\\dot k = s f(k) - (\\delta+n)k$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu solow_basis","Kapitaldynamik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kapitaldynamik — Solow Kern.",
    relatedTaskFamilies: ["makro2.taskfamily.solow_basis-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.solow_basis.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.solow_basis.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.steady_state.steady_state_bedingung',
    conceptId: 'steady_state',
    officialNotation: "k^*, n, \\delta",
    displayFormula: "$$s f(k^*) = (\\delta+n)k^*$$",
    intuition: "Investition deckt Abschreibung und Verdünnung gerade ab",
    derivationSteps: [
        {
            "label": "Steady-State-Bedingung",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$s f(k^*) = (\\delta+n)k^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu steady_state","Steady-State-Bedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Steady-State-Bedingung — Investition deckt Abschreibung und Verdünnung gerade ab",
    relatedTaskFamilies: ["makro2.taskfamily.steady_state-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.steady_state.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.steady_state.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.steady_state.cobb_douglas_steady_state',
    conceptId: 'steady_state',
    officialNotation: "A, \\alpha",
    displayFormula: "$$k^* = \\left(\\frac{sA}{\\delta+n}\\right)^{\\!\\frac{1}{1-\\alpha}}$$",
    intuition: "Explizite Lösung bei \\(y=Ak^\\alpha\\)",
    derivationSteps: [
        {
            "label": "Cobb-Douglas-Steady-State",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$k^* = \\left(\\frac{sA}{\\delta+n}\\right)^{\\!\\frac{1}{1-\\alpha}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu steady_state","Cobb-Douglas-Steady-State"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Cobb-Douglas-Steady-State — Explizite Lösung bei \\(y=Ak^\\alpha\\)",
    relatedTaskFamilies: ["makro2.taskfamily.steady_state-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.steady_state.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.steady_state.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.steady_state.steady_state_bedingung_merksatz',
    conceptId: 'steady_state',
    officialNotation: "k^*, n, \\delta",
    displayFormula: "$$s f(k^*) = (\\delta+n)k^*$$",
    intuition: "Investition deckt Abschreibung und Verdünnung gerade ab",
    derivationSteps: [
        {
            "label": "Steady-State-Bedingung (Merksatz)",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$s f(k^*) = (\\delta+n)k^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu steady_state","Steady-State-Bedingung (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Steady-State-Bedingung (Merksatz) — Investition deckt Abschreibung und Verdünnung gerade ab",
    relatedTaskFamilies: ["makro2.taskfamily.steady_state-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.steady_state.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.steady_state.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.steady_state.steady_state',
    conceptId: 'steady_state',
    officialNotation: "steady_state",
    displayFormula: "$$s f(k^*) = (\\delta+n)k^*$$",
    intuition: "Gleichgewicht.",
    derivationSteps: [
        {
            "label": "Steady state",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$s f(k^*) = (\\delta+n)k^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu steady_state","Steady state"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Steady state — Gleichgewicht.",
    relatedTaskFamilies: ["makro2.taskfamily.steady_state-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.steady_state.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.steady_state.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.goldene_sparquote.goldene_regel',
    conceptId: 'goldene_sparquote',
    officialNotation: "k_{gold}",
    displayFormula: "$$f'(k_{gold}) = \\delta + n$$",
    intuition: "Grenzprodukt des Kapitals = Break-even-Belastung",
    derivationSteps: [
        {
            "label": "Goldene Regel",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$f'(k_{gold}) = \\delta + n$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu goldene_sparquote","Goldene Regel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Goldene Regel — Grenzprodukt des Kapitals = Break-even-Belastung",
    relatedTaskFamilies: ["makro2.taskfamily.goldene_sparquote-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.goldene_sparquote.goldene_sparquote_cobb_douglas',
    conceptId: 'goldene_sparquote',
    officialNotation: "\\alpha",
    displayFormula: "$$s_{gold} = \\alpha$$",
    intuition: "Bei \\(y=Ak^\\alpha\\) entspricht die optimale Sparquote dem Kapitalanteil",
    derivationSteps: [
        {
            "label": "Goldene Sparquote (Cobb-Douglas)",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$s_{gold} = \\alpha$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu goldene_sparquote","Goldene Sparquote (Cobb-Douglas)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Goldene Sparquote (Cobb-Douglas) — Bei \\(y=Ak^\\alpha\\) entspricht die optimale Sparquote dem Kapitalanteil",
    relatedTaskFamilies: ["makro2.taskfamily.goldene_sparquote-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.goldene_sparquote.goldene_regel_merksatz',
    conceptId: 'goldene_sparquote',
    officialNotation: "k_{gold}",
    displayFormula: "$$f'(k_{gold}) = \\delta + n$$",
    intuition: "Grenzprodukt des Kapitals = Break-even-Belastung",
    derivationSteps: [
        {
            "label": "Goldene Regel (Merksatz)",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$f'(k_{gold}) = \\delta + n$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu goldene_sparquote","Goldene Regel (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Goldene Regel (Merksatz) — Grenzprodukt des Kapitals = Break-even-Belastung",
    relatedTaskFamilies: ["makro2.taskfamily.goldene_sparquote-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.goldene_sparquote.goldene_regel',
    conceptId: 'goldene_sparquote',
    officialNotation: "goldene_sparquote",
    displayFormula: "$$f'(k_{GR}) = \\delta + n$$",
    intuition: "MPK = effektive Verlustrate.",
    derivationSteps: [
        {
            "label": "Goldene Regel",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$f'(k_{GR}) = \\delta + n$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu goldene_sparquote","Goldene Regel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Goldene Regel — MPK = effektive Verlustrate.",
    relatedTaskFamilies: ["makro2.taskfamily.goldene_sparquote-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.goldene_sparquote.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.tech_fortschritt.solow_mit_technischem_fortschrit',
    conceptId: 'tech_fortschritt',
    officialNotation: "g_A, n",
    displayFormula: "$$\\dot{\\tilde k} = s f(\\tilde k) - (n + g_A + \\delta)\\tilde k$$",
    intuition: "Kapital pro Arbeitseffizienzeinheit",
    derivationSteps: [
        {
            "label": "Solow mit technischem Fortschritt",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$\\dot{\\tilde k} = s f(\\tilde k) - (n + g_A + \\delta)\\tilde k$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu tech_fortschritt","Solow mit technischem Fortschritt"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Solow mit technischem Fortschritt — Kapital pro Arbeitseffizienzeinheit",
    relatedTaskFamilies: ["makro2.taskfamily.tech_fortschritt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.tech_fortschritt.wachstum_pro_kopf_im_steady_stat',
    conceptId: 'tech_fortschritt',
    officialNotation: "g_A",
    displayFormula: "$$g_{Y/N}=g_A$$",
    intuition: "Dauerhaftes Pro-Kopf-Wachstum folgt dem technischen Fortschritt",
    derivationSteps: [
        {
            "label": "Wachstum pro Kopf im Steady State",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$g_{Y/N}=g_A$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu tech_fortschritt","Wachstum pro Kopf im Steady State"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wachstum pro Kopf im Steady State — Dauerhaftes Pro-Kopf-Wachstum folgt dem technischen Fortschritt",
    relatedTaskFamilies: ["makro2.taskfamily.tech_fortschritt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.tech_fortschritt.solow_mit_technischem_fortschrit',
    conceptId: 'tech_fortschritt',
    officialNotation: "g_A, n",
    displayFormula: "$$\\dot{\\tilde k} = s f(\\tilde k) - (n + g_A + \\delta)\\tilde k$$",
    intuition: "Kapital pro Arbeitseffizienzeinheit",
    derivationSteps: [
        {
            "label": "Solow mit technischem Fortschritt (Merksatz)",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$\\dot{\\tilde k} = s f(\\tilde k) - (n + g_A + \\delta)\\tilde k$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu tech_fortschritt","Solow mit technischem Fortschritt (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Solow mit technischem Fortschritt (Merksatz) — Kapital pro Arbeitseffizienzeinheit",
    relatedTaskFamilies: ["makro2.taskfamily.tech_fortschritt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.tech_fortschritt.bgp',
    conceptId: 'tech_fortschritt',
    officialNotation: "tech_fortschritt",
    displayFormula: "$$g_y = g_A$$",
    intuition: "Langfristiges Pro-Kopf-Wachstum.",
    derivationSteps: [
        {
            "label": "BGP",
            "text": "2014 (BPM6); Ihr Lehrbuch befolgt noch einere ältere Darstellung, laut",
            "math": "$$g_y = g_A$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu tech_fortschritt","BGP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: BGP — Langfristiges Pro-Kopf-Wachstum.",
    relatedTaskFamilies: ["makro2.taskfamily.tech_fortschritt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p06.2014-bpm6-ihr-lehrbuch-b","makro2.tech_fortschritt.makro2-handout-v25-2-pdf.p34.beispiel-wechselkursbewe"]
  }),
  card({
    id: 'makro2.budgetrestriktion.periodische_budgetrestriktion',
    conceptId: 'budgetrestriktion',
    officialNotation: "B_t, G_t-T_t",
    displayFormula: "$$B_t = (1+r)B_{t-1} + G_t - T_t$$",
    intuition: "Fortschreibung des nominalen Schuldenstands",
    derivationSteps: [
        {
            "label": "Periodische Budgetrestriktion",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$B_t = (1+r)B_{t-1} + G_t - T_t$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu budgetrestriktion","Periodische Budgetrestriktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Periodische Budgetrestriktion — Fortschreibung des nominalen Schuldenstands",
    relatedTaskFamilies: ["makro2.taskfamily.budgetrestriktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.budgetrestriktion.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.budgetrestriktion.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.budgetrestriktion.intertemporale_restriktion',
    conceptId: 'budgetrestriktion',
    officialNotation: "B_0",
    displayFormula: "$$B_0 = \\sum_{t=1}^{\\infty} \\frac{T_t-G_t}{(1+r)^t}$$",
    intuition: "Heute bestehende Schuld = Barwert künftiger Primärüberschüsse",
    derivationSteps: [
        {
            "label": "Intertemporale Restriktion",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$B_0 = \\sum_{t=1}^{\\infty} \\frac{T_t-G_t}{(1+r)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu budgetrestriktion","Intertemporale Restriktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Intertemporale Restriktion — Heute bestehende Schuld = Barwert künftiger Primärüberschüsse",
    relatedTaskFamilies: ["makro2.taskfamily.budgetrestriktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.budgetrestriktion.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.budgetrestriktion.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.budgetrestriktion.periodische_budgetrestriktion_me',
    conceptId: 'budgetrestriktion',
    officialNotation: "B_t, G_t-T_t",
    displayFormula: "$$B_t = (1+r)B_{t-1} + G_t - T_t$$",
    intuition: "Fortschreibung des nominalen Schuldenstands",
    derivationSteps: [
        {
            "label": "Periodische Budgetrestriktion (Merksatz)",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$B_t = (1+r)B_{t-1} + G_t - T_t$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu budgetrestriktion","Periodische Budgetrestriktion (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Periodische Budgetrestriktion (Merksatz) — Fortschreibung des nominalen Schuldenstands",
    relatedTaskFamilies: ["makro2.taskfamily.budgetrestriktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.budgetrestriktion.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.budgetrestriktion.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.budgetrestriktion.schulden_dynamik',
    conceptId: 'budgetrestriktion',
    officialNotation: "budgetrestriktion",
    displayFormula: "$$\\Delta b = (r-g)b + d$$",
    intuition: "Schuldenquote $b$.",
    derivationSteps: [
        {
            "label": "Schulden dynamik",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\Delta b = (r-g)b + d$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu budgetrestriktion","Schulden dynamik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Schulden dynamik — Schuldenquote $b$.",
    relatedTaskFamilies: ["makro2.taskfamily.budgetrestriktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.budgetrestriktion.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.budgetrestriktion.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.schuldenquote_dynamik.schuldenquotendynamik',
    conceptId: 'schuldenquote_dynamik',
    officialNotation: "b, ps, r-g",
    displayFormula: "$$\\Delta b \\approx (r-g)b - ps$$",
    intuition: "Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad",
    derivationSteps: [
        {
            "label": "Schuldenquotendynamik",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\Delta b \\approx (r-g)b - ps$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schuldenquote_dynamik","Schuldenquotendynamik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Schuldenquotendynamik — Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad",
    relatedTaskFamilies: ["makro2.taskfamily.schuldenquote_dynamik-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.schuldenquote_dynamik.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.schuldenquote_dynamik.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.schuldenquote_dynamik.stabilisierender_prim_rsaldo',
    conceptId: 'schuldenquote_dynamik',
    officialNotation: "",
    displayFormula: "$$ps^* = (r-g)b$$",
    intuition: "Gerade ausreichender Primärüberschuss zur Stabilisierung",
    derivationSteps: [
        {
            "label": "Stabilisierender Primärsaldo",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$ps^* = (r-g)b$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schuldenquote_dynamik","Stabilisierender Primärsaldo"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Stabilisierender Primärsaldo — Gerade ausreichender Primärüberschuss zur Stabilisierung",
    relatedTaskFamilies: ["makro2.taskfamily.schuldenquote_dynamik-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.schuldenquote_dynamik.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.schuldenquote_dynamik.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.schuldenquote_dynamik.schuldenquotendynamik_merksatz',
    conceptId: 'schuldenquote_dynamik',
    officialNotation: "b, ps, r-g",
    displayFormula: "$$\\Delta b \\approx (r-g)b - ps$$",
    intuition: "Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad",
    derivationSteps: [
        {
            "label": "Schuldenquotendynamik (Merksatz)",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\Delta b \\approx (r-g)b - ps$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schuldenquote_dynamik","Schuldenquotendynamik (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Schuldenquotendynamik (Merksatz) — Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad",
    relatedTaskFamilies: ["makro2.taskfamily.schuldenquote_dynamik-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.schuldenquote_dynamik.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.schuldenquote_dynamik.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.schuldenquote_dynamik.schuldenquote',
    conceptId: 'schuldenquote_dynamik',
    officialNotation: "schuldenquote_dynamik",
    displayFormula: "$$\\Delta b = (r-g)b + primary\\ deficit$$",
    intuition: "Dynamik.",
    derivationSteps: [
        {
            "label": "Schuldenquote",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\Delta b = (r-g)b + primary\\ deficit$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schuldenquote_dynamik","Schuldenquote"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Schuldenquote — Dynamik.",
    relatedTaskFamilies: ["makro2.taskfamily.schuldenquote_dynamik-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.schuldenquote_dynamik.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.schuldenquote_dynamik.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.ricardianisch.quivalenzlogik',
    conceptId: 'ricardianisch',
    officialNotation: "\\Delta T_1, \\Delta T_2",
    displayFormula: "$$\\Delta T_1 = -\\frac{\\Delta T_2}{1+r} \\Rightarrow \\Delta C_1 = 0 \\quad (\\text{unter Ricardo-Annahmen})$$",
    intuition: "Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht",
    derivationSteps: [
        {
            "label": "Äquivalenzlogik",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\Delta T_1 = -\\frac{\\Delta T_2}{1+r} \\Rightarrow \\Delta C_1 = 0 \\quad (\\text{unter Ricardo-Annahmen})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ricardianisch","Äquivalenzlogik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Äquivalenzlogik — Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht",
    relatedTaskFamilies: ["makro2.taskfamily.ricardianisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.ricardianisch.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.ricardianisch.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.ricardianisch.quivalenzlogik_merksatz',
    conceptId: 'ricardianisch',
    officialNotation: "\\Delta T_1, \\Delta T_2",
    displayFormula: "$$\\Delta T_1 = -\\frac{\\Delta T_2}{1+r} \\Rightarrow \\Delta C_1 = 0 \\quad (\\text{unter Ricardo-Annahmen})$$",
    intuition: "Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht",
    derivationSteps: [
        {
            "label": "Äquivalenzlogik (Merksatz)",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\Delta T_1 = -\\frac{\\Delta T_2}{1+r} \\Rightarrow \\Delta C_1 = 0 \\quad (\\text{unter Ricardo-Annahmen})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ricardianisch","Äquivalenzlogik (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Äquivalenzlogik (Merksatz) — Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht",
    relatedTaskFamilies: ["makro2.taskfamily.ricardianisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.ricardianisch.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.ricardianisch.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.ricardianisch.quivalenz',
    conceptId: 'ricardianisch',
    officialNotation: "ricardianisch",
    displayFormula: "$$\\Delta T_1 = -PV(\\Delta T_{future}) \\Rightarrow \\Delta C_1 = 0$$",
    intuition: "Unter Annahmen.",
    derivationSteps: [
        {
            "label": "Äquivalenz",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\Delta T_1 = -PV(\\Delta T_{future}) \\Rightarrow \\Delta C_1 = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ricardianisch","Äquivalenz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Äquivalenz — Unter Annahmen.",
    relatedTaskFamilies: ["makro2.taskfamily.ricardianisch-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.ricardianisch.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.ricardianisch.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.schuldenfinanzierung_monetarisierung.seigniorage',
    conceptId: 'schuldenfinanzierung_monetarisierung',
    officialNotation: "\\Delta M, P",
    displayFormula: "$$\\text{Seigniorage} = \\frac{\\Delta M}{P}$$",
    intuition: "Reale Finanzierung über Geldschöpfung",
    derivationSteps: [
        {
            "label": "Seigniorage",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\text{Seigniorage} = \\frac{\\Delta M}{P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schuldenfinanzierung_monetarisierung","Seigniorage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Seigniorage — Reale Finanzierung über Geldschöpfung",
    relatedTaskFamilies: ["makro2.taskfamily.schuldenfinanzierung_monetarisierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.schuldenfinanzierung_monetarisierung.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.schuldenfinanzierung_monetarisierung.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.schuldenfinanzierung_monetarisierung.seigniorage_merksatz',
    conceptId: 'schuldenfinanzierung_monetarisierung',
    officialNotation: "\\Delta M, P",
    displayFormula: "$$\\text{Seigniorage} = \\frac{\\Delta M}{P}$$",
    intuition: "Reale Finanzierung über Geldschöpfung",
    derivationSteps: [
        {
            "label": "Seigniorage (Merksatz)",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\text{Seigniorage} = \\frac{\\Delta M}{P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schuldenfinanzierung_monetarisierung","Seigniorage (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Seigniorage (Merksatz) — Reale Finanzierung über Geldschöpfung",
    relatedTaskFamilies: ["makro2.taskfamily.schuldenfinanzierung_monetarisierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.schuldenfinanzierung_monetarisierung.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.schuldenfinanzierung_monetarisierung.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  }),
  card({
    id: 'makro2.schuldenfinanzierung_monetarisierung.fiskal_monet_r',
    conceptId: 'schuldenfinanzierung_monetarisierung',
    officialNotation: "schuldenfinanzierung_monetarisierung",
    displayFormula: "$$\\Delta B \\Leftrightarrow \\Delta M \\text{ oder } \\Delta B_{private}$$",
    intuition: "Finanzierungskanal.",
    derivationSteps: [
        {
            "label": "Fiskal-Monetär",
            "text": "Die Gefahren sehr hoher Staatsverschuldung",
            "math": "$$\\Delta B \\Leftrightarrow \\Delta M \\text{ oder } \\Delta B_{private}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu schuldenfinanzierung_monetarisierung","Fiskal-Monetär"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fiskal-Monetär — Finanzierungskanal.",
    relatedTaskFamilies: ["makro2.taskfamily.schuldenfinanzierung_monetarisierung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro2.schuldenfinanzierung_monetarisierung.slides-06-pdf.p41.die-gefahren-sehr-hoher-","makro2.schuldenfinanzierung_monetarisierung.slides-06-pdf.p39.die-gefahren-sehr-hoher-"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

