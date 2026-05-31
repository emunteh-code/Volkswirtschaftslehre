// ============================================================
// FORMULA CARDS — Makroökonomik I
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'makro1';

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
    id: 'makro1.makro_rahmen.grundidentit_t_der_nachfrage',
    conceptId: 'makro_rahmen',
    officialNotation: "Y, C, I, G",
    displayFormula: "$$Y = C + I + G$$",
    intuition: "Geschlossene Volkswirtschaft ohne Außenbeitrag",
    derivationSteps: [
        {
            "label": "Grundidentität der Nachfrage",
            "text": "Makroökonomik offener Volkswirtschaften) behandeln",
            "math": "$$Y = C + I + G$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu makro_rahmen","Grundidentität der Nachfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Grundidentität der Nachfrage — Geschlossene Volkswirtschaft ohne Außenbeitrag",
    relatedTaskFamilies: ["makro1.taskfamily.makro_rahmen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.makro_rahmen.vl-1-pdf.p28.makroo-konomik-offener-v","makro1.makro_rahmen.vl-1-pdf.p14.1-rt-e"]
  }),
  card({
    id: 'makro1.makro_rahmen.realzins',
    conceptId: 'makro_rahmen',
    officialNotation: "i, \\pi^e",
    displayFormula: "$$r \\approx i - \\pi^e$$",
    intuition: "Nominalzins minus erwartete Inflation",
    derivationSteps: [
        {
            "label": "Realzins",
            "text": "Makroökonomik offener Volkswirtschaften) behandeln",
            "math": "$$r \\approx i - \\pi^e$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu makro_rahmen","Realzins"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Realzins — Nominalzins minus erwartete Inflation",
    relatedTaskFamilies: ["makro1.taskfamily.makro_rahmen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.makro_rahmen.vl-1-pdf.p28.makroo-konomik-offener-v","makro1.makro_rahmen.vl-1-pdf.p14.1-rt-e"]
  }),
  card({
    id: 'makro1.makro_rahmen.grundidentit_t_der_nachfrage_mer',
    conceptId: 'makro_rahmen',
    officialNotation: "Y, C, I, G",
    displayFormula: "$$Y = C + I + G$$",
    intuition: "Geschlossene Volkswirtschaft ohne Außenbeitrag",
    derivationSteps: [
        {
            "label": "Grundidentität der Nachfrage (Merksatz)",
            "text": "Makroökonomik offener Volkswirtschaften) behandeln",
            "math": "$$Y = C + I + G$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu makro_rahmen","Grundidentität der Nachfrage (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Grundidentität der Nachfrage (Merksatz) — Geschlossene Volkswirtschaft ohne Außenbeitrag",
    relatedTaskFamilies: ["makro1.taskfamily.makro_rahmen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.makro_rahmen.vl-1-pdf.p28.makroo-konomik-offener-v","makro1.makro_rahmen.vl-1-pdf.p14.1-rt-e"]
  }),
  card({
    id: 'makro1.vgr.verwendungsseite_des_bip',
    conceptId: 'vgr',
    officialNotation: "NX",
    displayFormula: "$$Y = C + I + G + NX$$",
    intuition: "Makroökonomische Nachfrageidentität",
    derivationSteps: [
        {
            "label": "Verwendungsseite des BIP",
            "text": "Das Bruttoinlandsprodukt",
            "math": "$$Y = C + I + G + NX$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu vgr","Verwendungsseite des BIP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verwendungsseite des BIP — Makroökonomische Nachfrageidentität",
    relatedTaskFamilies: ["makro1.taskfamily.vgr-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.vgr.vl-2-pdf.p36.das-bruttoinlandsprodukt","makro1.vgr.vl-2-pdf.p15.das-bruttoinlandsprodukt"]
  }),
  card({
    id: 'makro1.vgr.deflatorbeziehung',
    conceptId: 'vgr',
    officialNotation: "",
    displayFormula: "$$P = \\frac{BIP_{nom}}{BIP_{real}}$$",
    intuition: "Preisniveau aus nominalem und realem BIP",
    derivationSteps: [
        {
            "label": "Deflatorbeziehung",
            "text": "Das Bruttoinlandsprodukt",
            "math": "$$P = \\frac{BIP_{nom}}{BIP_{real}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu vgr","Deflatorbeziehung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Deflatorbeziehung — Preisniveau aus nominalem und realem BIP",
    relatedTaskFamilies: ["makro1.taskfamily.vgr-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.vgr.vl-2-pdf.p36.das-bruttoinlandsprodukt","makro1.vgr.vl-2-pdf.p15.das-bruttoinlandsprodukt"]
  }),
  card({
    id: 'makro1.vgr.arbeitslosenquote',
    conceptId: 'vgr',
    officialNotation: "U, L",
    displayFormula: "$$u = \\frac{U}{L}$$",
    intuition: "Arbeitslose relativ zu Erwerbspersonen",
    derivationSteps: [
        {
            "label": "Arbeitslosenquote",
            "text": "Das Bruttoinlandsprodukt",
            "math": "$$u = \\frac{U}{L}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu vgr","Arbeitslosenquote"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Arbeitslosenquote — Arbeitslose relativ zu Erwerbspersonen",
    relatedTaskFamilies: ["makro1.taskfamily.vgr-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.vgr.vl-2-pdf.p36.das-bruttoinlandsprodukt","makro1.vgr.vl-2-pdf.p15.das-bruttoinlandsprodukt"]
  }),
  card({
    id: 'makro1.guetermarkt.geplante_nachfrage',
    conceptId: 'guetermarkt',
    officialNotation: "c_0, c_1",
    displayFormula: "$$Z = c_0 + c_1(Y-T) + I + G$$",
    intuition: "Gütermarktnachfrage bei linearer Konsumfunktion",
    derivationSteps: [
        {
            "label": "Geplante Nachfrage",
            "text": "Sollten wir mehr Sparen?",
            "math": "$$Z = c_0 + c_1(Y-T) + I + G$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu guetermarkt","Geplante Nachfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Geplante Nachfrage — Gütermarktnachfrage bei linearer Konsumfunktion",
    relatedTaskFamilies: ["makro1.taskfamily.guetermarkt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.guetermarkt.vl-3-pdf.p36.sollten-wir-mehr-sparen","makro1.guetermarkt.vl-3-pdf.p15.formale-analyse"]
  }),
  card({
    id: 'makro1.guetermarkt.gleichgewichtsbedingung',
    conceptId: 'guetermarkt',
    officialNotation: "",
    displayFormula: "$$Y = Z$$",
    intuition: "Produktion entspricht Nachfrage",
    derivationSteps: [
        {
            "label": "Gleichgewichtsbedingung",
            "text": "Sollten wir mehr Sparen?",
            "math": "$$Y = Z$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu guetermarkt","Gleichgewichtsbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gleichgewichtsbedingung — Produktion entspricht Nachfrage",
    relatedTaskFamilies: ["makro1.taskfamily.guetermarkt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.guetermarkt.vl-3-pdf.p36.sollten-wir-mehr-sparen","makro1.guetermarkt.vl-3-pdf.p15.formale-analyse"]
  }),
  card({
    id: 'makro1.guetermarkt.g_termarktl_sung',
    conceptId: 'guetermarkt',
    officialNotation: "guetermarkt",
    displayFormula: "$$Y^* = \\frac{c_0 + I + G - c_1 T}{1-c_1}$$",
    intuition: "Kurzfristiges Gleichgewicht aus Nachfrageidentität.",
    derivationSteps: [
        {
            "label": "Gütermarktlösung",
            "text": "Sollten wir mehr Sparen?",
            "math": "$$Y^* = \\frac{c_0 + I + G - c_1 T}{1-c_1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu guetermarkt","Gütermarktlösung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gütermarktlösung — Kurzfristiges Gleichgewicht aus Nachfrageidentität.",
    relatedTaskFamilies: ["makro1.taskfamily.guetermarkt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.guetermarkt.vl-3-pdf.p36.sollten-wir-mehr-sparen","makro1.guetermarkt.vl-3-pdf.p15.formale-analyse"]
  }),
  card({
    id: 'makro1.multiplikator.gleichgewichtsproduktion',
    conceptId: 'multiplikator',
    officialNotation: "",
    displayFormula: "$$Y = \\frac{1}{1-c_1}\\left(c_0 + I + G - c_1T\\right)$$",
    intuition: "Aufgelöste Gütermarktgleichung",
    derivationSteps: [
        {
            "label": "Gleichgewichtsproduktion",
            "text": "Sollten wir mehr Sparen?",
            "math": "$$Y = \\frac{1}{1-c_1}\\left(c_0 + I + G - c_1T\\right)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu multiplikator","Gleichgewichtsproduktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gleichgewichtsproduktion — Aufgelöste Gütermarktgleichung",
    relatedTaskFamilies: ["makro1.taskfamily.multiplikator-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.multiplikator.vl-3-pdf.p36.sollten-wir-mehr-sparen","makro1.multiplikator.vl-3-pdf.p15.formale-analyse"]
  }),
  card({
    id: 'makro1.multiplikator.staatsausgabenmultiplikator',
    conceptId: 'multiplikator',
    officialNotation: "",
    displayFormula: "$$\\frac{\\partial Y}{\\partial G} = \\frac{1}{1-c_1}$$",
    intuition: "Wirkung einer Änderung von G",
    derivationSteps: [
        {
            "label": "Staatsausgabenmultiplikator",
            "text": "Sollten wir mehr Sparen?",
            "math": "$$\\frac{\\partial Y}{\\partial G} = \\frac{1}{1-c_1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu multiplikator","Staatsausgabenmultiplikator"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Staatsausgabenmultiplikator — Wirkung einer Änderung von G",
    relatedTaskFamilies: ["makro1.taskfamily.multiplikator-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.multiplikator.vl-3-pdf.p36.sollten-wir-mehr-sparen","makro1.multiplikator.vl-3-pdf.p15.formale-analyse"]
  }),
  card({
    id: 'makro1.multiplikator.steuermultiplikator',
    conceptId: 'multiplikator',
    officialNotation: "",
    displayFormula: "$$\\frac{\\partial Y}{\\partial T} = -\\frac{c_1}{1-c_1}$$",
    intuition: "Wirkung einer Änderung von T",
    derivationSteps: [
        {
            "label": "Steuermultiplikator",
            "text": "Sollten wir mehr Sparen?",
            "math": "$$\\frac{\\partial Y}{\\partial T} = -\\frac{c_1}{1-c_1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu multiplikator","Steuermultiplikator"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Steuermultiplikator — Wirkung einer Änderung von T",
    relatedTaskFamilies: ["makro1.taskfamily.multiplikator-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.multiplikator.vl-3-pdf.p36.sollten-wir-mehr-sparen","makro1.multiplikator.vl-3-pdf.p15.formale-analyse"]
  }),
  card({
    id: 'makro1.geldnachfrage.reale_geldnachfrage',
    conceptId: 'geldnachfrage',
    officialNotation: "i, Y",
    displayFormula: "$$\\frac{M^d}{P} = L(i,Y)$$",
    intuition: "Liquiditätspräferenz",
    derivationSteps: [
        {
            "label": "Reale Geldnachfrage",
            "text": "Entscheidung über Liquidität",
            "math": "$$\\frac{M^d}{P} = L(i,Y)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu geldnachfrage","Reale Geldnachfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Reale Geldnachfrage — Liquiditätspräferenz",
    relatedTaskFamilies: ["makro1.taskfamily.geldnachfrage-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.geldnachfrage.vl-4-pdf.p07.entscheidung-u-ber-liqui","makro1.geldnachfrage.vl-4-pdf.p11.bargeld-sichteinlagen"]
  }),
  card({
    id: 'makro1.geldnachfrage.geldmarktgleichgewicht',
    conceptId: 'geldnachfrage',
    officialNotation: "",
    displayFormula: "$$\\frac{M}{P} = L(i,Y)$$",
    intuition: "Bestimmung des Gleichgewichtszinses",
    derivationSteps: [
        {
            "label": "Geldmarktgleichgewicht",
            "text": "Entscheidung über Liquidität",
            "math": "$$\\frac{M}{P} = L(i,Y)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu geldnachfrage","Geldmarktgleichgewicht"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Geldmarktgleichgewicht — Bestimmung des Gleichgewichtszinses",
    relatedTaskFamilies: ["makro1.taskfamily.geldnachfrage-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.geldnachfrage.vl-4-pdf.p07.entscheidung-u-ber-liqui","makro1.geldnachfrage.vl-4-pdf.p11.bargeld-sichteinlagen"]
  }),
  card({
    id: 'makro1.geldnachfrage.anleihenpreis',
    conceptId: 'geldnachfrage',
    officialNotation: "P_B",
    displayFormula: "$$P_B = \\frac{1}{1+i}$$",
    intuition: "Inverse Beziehung von Preis und Zins im Einperiodenfall",
    derivationSteps: [
        {
            "label": "Anleihenpreis",
            "text": "Entscheidung über Liquidität",
            "math": "$$P_B = \\frac{1}{1+i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu geldnachfrage","Anleihenpreis"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Anleihenpreis — Inverse Beziehung von Preis und Zins im Einperiodenfall",
    relatedTaskFamilies: ["makro1.taskfamily.geldnachfrage-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.geldnachfrage.vl-4-pdf.p07.entscheidung-u-ber-liqui","makro1.geldnachfrage.vl-4-pdf.p11.bargeld-sichteinlagen"]
  }),
  card({
    id: 'makro1.banken.einlagenmultiplikator',
    conceptId: 'banken',
    officialNotation: "\\theta",
    displayFormula: "$$m_D = \\frac{1}{\\theta}$$",
    intuition: "Vereinfachtes Multiplikatormodell",
    derivationSteps: [
        {
            "label": "Einlagenmultiplikator",
            "text": "Entscheidung über Liquidität",
            "math": "$$m_D = \\frac{1}{\\theta}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu banken","Einlagenmultiplikator"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Einlagenmultiplikator — Vereinfachtes Multiplikatormodell",
    relatedTaskFamilies: ["makro1.taskfamily.banken-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.banken.vl-4-pdf.p07.entscheidung-u-ber-liqui","makro1.banken.vl-4-pdf.p11.bargeld-sichteinlagen"]
  }),
  card({
    id: 'makro1.banken.geldbasis',
    conceptId: 'banken',
    officialNotation: "H, C, R",
    displayFormula: "$$H = C + R$$",
    intuition: "Bargeld plus Reserven",
    derivationSteps: [
        {
            "label": "Geldbasis",
            "text": "Entscheidung über Liquidität",
            "math": "$$H = C + R$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu banken","Geldbasis"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Geldbasis — Bargeld plus Reserven",
    relatedTaskFamilies: ["makro1.taskfamily.banken-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.banken.vl-4-pdf.p07.entscheidung-u-ber-liqui","makro1.banken.vl-4-pdf.p11.bargeld-sichteinlagen"]
  }),
  card({
    id: 'makro1.banken.einlagenmultiplikator_merksatz',
    conceptId: 'banken',
    officialNotation: "\\theta",
    displayFormula: "$$m_D = \\frac{1}{\\theta}$$",
    intuition: "Vereinfachtes Multiplikatormodell",
    derivationSteps: [
        {
            "label": "Einlagenmultiplikator (Merksatz)",
            "text": "Entscheidung über Liquidität",
            "math": "$$m_D = \\frac{1}{\\theta}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu banken","Einlagenmultiplikator (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Einlagenmultiplikator (Merksatz) — Vereinfachtes Multiplikatormodell",
    relatedTaskFamilies: ["makro1.taskfamily.banken-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.banken.vl-4-pdf.p07.entscheidung-u-ber-liqui","makro1.banken.vl-4-pdf.p11.bargeld-sichteinlagen"]
  }),
  card({
    id: 'makro1.islm.is_gleichung',
    conceptId: 'islm',
    officialNotation: "",
    displayFormula: "$$Y = C(Y-T) + I(Y,i) + G$$",
    intuition: "Gütermarkt im Zins-Output-Raum",
    derivationSteps: [
        {
            "label": "IS-Gleichung",
            "text": "Einkommen, der Konsum und auch die gesamte Nachfrage",
            "math": "$$Y = C(Y-T) + I(Y,i) + G$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu islm","IS-Gleichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: IS-Gleichung — Gütermarkt im Zins-Output-Raum",
    relatedTaskFamilies: ["makro1.taskfamily.islm-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.islm.vl-5-pdf.p13.einkommen-der-konsum-und","makro1.islm.vl-5-pdf.p17.1-feststellen-ob-sich-du"]
  }),
  card({
    id: 'makro1.islm.zinsregel',
    conceptId: 'islm',
    officialNotation: "\\bar{i}",
    displayFormula: "$$i = \\bar{i}$$",
    intuition: "Horizontale LM bei Zinssteuerung",
    derivationSteps: [
        {
            "label": "Zinsregel",
            "text": "Einkommen, der Konsum und auch die gesamte Nachfrage",
            "math": "$$i = \\bar{i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu islm","Zinsregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zinsregel — Horizontale LM bei Zinssteuerung",
    relatedTaskFamilies: ["makro1.taskfamily.islm-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.islm.vl-5-pdf.p13.einkommen-der-konsum-und","makro1.islm.vl-5-pdf.p17.1-feststellen-ob-sich-du"]
  }),
  card({
    id: 'makro1.islm.kurvenzuordnung_von_politikschoc',
    conceptId: 'islm',
    officialNotation: "\\Delta G, \\Delta \\bar i",
    displayFormula: "$$\\Delta G>0 \\Rightarrow IS \\text{ nach rechts},\\qquad \\Delta \\bar i<0 \\Rightarrow \\text{Zinsregel/LM nach unten}$$",
    intuition: "Die erste Prüfungsfrage lautet: Welche Bedingung wird direkt getroffen?",
    derivationSteps: [
        {
            "label": "Kurvenzuordnung von Politikschocks",
            "text": "Einkommen, der Konsum und auch die gesamte Nachfrage",
            "math": "$$\\Delta G>0 \\Rightarrow IS \\text{ nach rechts},\\qquad \\Delta \\bar i<0 \\Rightarrow \\text{Zinsregel/LM nach unten}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu islm","Kurvenzuordnung von Politikschocks"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kurvenzuordnung von Politikschocks — Die erste Prüfungsfrage lautet: Welche Bedingung wird direkt getroffen?",
    relatedTaskFamilies: ["makro1.taskfamily.islm-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.islm.vl-5-pdf.p13.einkommen-der-konsum-und","makro1.islm.vl-5-pdf.p17.1-feststellen-ob-sich-du"]
  }),
  card({
    id: 'makro1.politikmix.staatsausgabenimpuls_in_is_lm',
    conceptId: 'politikmix',
    officialNotation: "",
    displayFormula: "$$IS: \\quad Y = C(Y-T) + I(Y,i) + G$$",
    intuition: "Mehr G verschiebt die IS-Kurve nach rechts",
    derivationSteps: [
        {
            "label": "Staatsausgabenimpuls in IS-LM",
            "text": "Einkommen, der Konsum und auch die gesamte Nachfrage",
            "math": "$$IS: \\quad Y = C(Y-T) + I(Y,i) + G$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu politikmix","Staatsausgabenimpuls in IS-LM"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Staatsausgabenimpuls in IS-LM — Mehr G verschiebt die IS-Kurve nach rechts",
    relatedTaskFamilies: ["makro1.taskfamily.politikmix-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.politikmix.vl-5-pdf.p13.einkommen-der-konsum-und","makro1.politikmix.vl-5-pdf.p17.1-feststellen-ob-sich-du"]
  }),
  card({
    id: 'makro1.politikmix.fisher_approximation_f_r_politik',
    conceptId: 'politikmix',
    officialNotation: "",
    displayFormula: "$$r \\approx i - \\pi^e$$",
    intuition: "Relevanter Finanzierungskanal bei gegebener Inflationserwartung",
    derivationSteps: [
        {
            "label": "Fisher-Approximation für Politikmix mit Inflationserwartungen",
            "text": "Einkommen, der Konsum und auch die gesamte Nachfrage",
            "math": "$$r \\approx i - \\pi^e$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu politikmix","Fisher-Approximation für Politikmix mit Inflationserwartungen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fisher-Approximation für Politikmix mit Inflationserwartungen — Relevanter Finanzierungskanal bei gegebener Inflationserwartung",
    relatedTaskFamilies: ["makro1.taskfamily.politikmix-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.politikmix.vl-5-pdf.p13.einkommen-der-konsum-und","makro1.politikmix.vl-5-pdf.p17.1-feststellen-ob-sich-du"]
  }),
  card({
    id: 'makro1.politikmix.crowding_out_kette',
    conceptId: 'politikmix',
    officialNotation: "I, i, G",
    displayFormula: "$$\\Delta G > 0 \\Rightarrow IS \\text{ nach rechts} \\Rightarrow i \\uparrow \\Rightarrow I \\downarrow$$",
    intuition: "Der Fiskalimpuls bleibt positiv, wird aber über den Zins teilweise gebremst.",
    derivationSteps: [
        {
            "label": "Crowding-Out-Kette",
            "text": "Einkommen, der Konsum und auch die gesamte Nachfrage",
            "math": "$$\\Delta G > 0 \\Rightarrow IS \\text{ nach rechts} \\Rightarrow i \\uparrow \\Rightarrow I \\downarrow$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu politikmix","Crowding-Out-Kette"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Crowding-Out-Kette — Der Fiskalimpuls bleibt positiv, wird aber über den Zins teilweise gebremst.",
    relatedTaskFamilies: ["makro1.taskfamily.politikmix-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.politikmix.vl-5-pdf.p13.einkommen-der-konsum-und","makro1.politikmix.vl-5-pdf.p17.1-feststellen-ob-sich-du"]
  }),
  card({
    id: 'makro1.realzins_fisher_erwartungen.fisher_gleichung',
    conceptId: 'realzins_fisher_erwartungen',
    officialNotation: "r, i, \\pi^e",
    displayFormula: "$$r \\approx i - \\pi^e$$",
    intuition: "Realzins bei gegebener erwarteter Inflation",
    derivationSteps: [
        {
            "label": "Fisher-Gleichung",
            "text": "Die Auswirkungen eines Schocks im Finanzsektor",
            "math": "$$r \\approx i - \\pi^e$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu realzins_fisher_erwartungen","Fisher-Gleichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fisher-Gleichung — Realzins bei gegebener erwarteter Inflation",
    relatedTaskFamilies: ["makro1.taskfamily.realzins_fisher_erwartungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.realzins_fisher_erwartungen.kap6-pdf.p23.die-auswirkungen-eines-s","makro1.realzins_fisher_erwartungen.kap6-pdf.p27.probleme-der-hohen-fremd"]
  }),
  card({
    id: 'makro1.realzins_fisher_erwartungen.exakte_fisher_schreibweise',
    conceptId: 'realzins_fisher_erwartungen',
    officialNotation: "r_t, i_t, \\pi_{t+1}^e",
    displayFormula: "$$1+r_t = \\frac{1+i_t}{1+\\pi_{t+1}^e}$$",
    intuition: "Der ex ante Realzins folgt aus Nominalzins und erwartetem Preisniveau.",
    derivationSteps: [
        {
            "label": "Exakte Fisher-Schreibweise",
            "text": "Die Auswirkungen eines Schocks im Finanzsektor",
            "math": "$$1+r_t = \\frac{1+i_t}{1+\\pi_{t+1}^e}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu realzins_fisher_erwartungen","Exakte Fisher-Schreibweise"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Exakte Fisher-Schreibweise — Der ex ante Realzins folgt aus Nominalzins und erwartetem Preisniveau.",
    relatedTaskFamilies: ["makro1.taskfamily.realzins_fisher_erwartungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.realzins_fisher_erwartungen.kap6-pdf.p23.die-auswirkungen-eines-s","makro1.realzins_fisher_erwartungen.kap6-pdf.p27.probleme-der-hohen-fremd"]
  }),
  card({
    id: 'makro1.realzins_fisher_erwartungen.fisher_gleichung_merksatz',
    conceptId: 'realzins_fisher_erwartungen',
    officialNotation: "r, i, \\pi^e",
    displayFormula: "$$r \\approx i - \\pi^e$$",
    intuition: "Realzins bei gegebener erwarteter Inflation",
    derivationSteps: [
        {
            "label": "Fisher-Gleichung (Merksatz)",
            "text": "Die Auswirkungen eines Schocks im Finanzsektor",
            "math": "$$r \\approx i - \\pi^e$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu realzins_fisher_erwartungen","Fisher-Gleichung (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fisher-Gleichung (Merksatz) — Realzins bei gegebener erwarteter Inflation",
    relatedTaskFamilies: ["makro1.taskfamily.realzins_fisher_erwartungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.realzins_fisher_erwartungen.kap6-pdf.p23.die-auswirkungen-eines-s","makro1.realzins_fisher_erwartungen.kap6-pdf.p27.probleme-der-hohen-fremd"]
  }),
  card({
    id: 'makro1.realzins_risikopraemie_krisenkanal.kreditzins',
    conceptId: 'realzins_risikopraemie_krisenkanal',
    officialNotation: "i_L, i, x",
    displayFormula: "$$i_L = i + x$$",
    intuition: "Leitzins plus Risikoprämie",
    derivationSteps: [
        {
            "label": "Kreditzins",
            "text": "Die Auswirkungen eines Schocks im Finanzsektor",
            "math": "$$i_L = i + x$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu realzins_risikopraemie_krisenkanal","Kreditzins"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kreditzins — Leitzins plus Risikoprämie",
    relatedTaskFamilies: ["makro1.taskfamily.realzins_risikopraemie_krisenkanal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.realzins_risikopraemie_krisenkanal.kap6-pdf.p23.die-auswirkungen-eines-s","makro1.realzins_risikopraemie_krisenkanal.kap6-pdf.p27.probleme-der-hohen-fremd"]
  }),
  card({
    id: 'makro1.realzins_risikopraemie_krisenkanal.realer_kreditzins',
    conceptId: 'realzins_risikopraemie_krisenkanal',
    officialNotation: "r_L, \\pi^e",
    displayFormula: "$$r_L \\approx i + x - \\pi^e$$",
    intuition: "Relevant für Investitionsentscheidungen im Krisenkanal.",
    derivationSteps: [
        {
            "label": "Realer Kreditzins",
            "text": "Die Auswirkungen eines Schocks im Finanzsektor",
            "math": "$$r_L \\approx i + x - \\pi^e$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu realzins_risikopraemie_krisenkanal","Realer Kreditzins"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Realer Kreditzins — Relevant für Investitionsentscheidungen im Krisenkanal.",
    relatedTaskFamilies: ["makro1.taskfamily.realzins_risikopraemie_krisenkanal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.realzins_risikopraemie_krisenkanal.kap6-pdf.p23.die-auswirkungen-eines-s","makro1.realzins_risikopraemie_krisenkanal.kap6-pdf.p27.probleme-der-hohen-fremd"]
  }),
  card({
    id: 'makro1.realzins_risikopraemie_krisenkanal.kreditzins_merksatz',
    conceptId: 'realzins_risikopraemie_krisenkanal',
    officialNotation: "i_L, i, x",
    displayFormula: "$$i_L = i + x$$",
    intuition: "Leitzins plus Risikoprämie",
    derivationSteps: [
        {
            "label": "Kreditzins (Merksatz)",
            "text": "Die Auswirkungen eines Schocks im Finanzsektor",
            "math": "$$i_L = i + x$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu realzins_risikopraemie_krisenkanal","Kreditzins (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kreditzins (Merksatz) — Leitzins plus Risikoprämie",
    relatedTaskFamilies: ["makro1.taskfamily.realzins_risikopraemie_krisenkanal-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.realzins_risikopraemie_krisenkanal.kap6-pdf.p23.die-auswirkungen-eines-s","makro1.realzins_risikopraemie_krisenkanal.kap6-pdf.p27.probleme-der-hohen-fremd"]
  }),
  card({
    id: 'makro1.arbeitsmarkt.ws_kurve',
    conceptId: 'arbeitsmarkt',
    officialNotation: "u, z",
    displayFormula: "$$\\frac{W}{P} = F(u,z)$$",
    intuition: "Reallohnforderung der Beschäftigten",
    derivationSteps: [
        {
            "label": "WS-Kurve",
            "text": "(das Produktionspotential).",
            "math": "$$\\frac{W}{P} = F(u,z)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu arbeitsmarkt","WS-Kurve"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: WS-Kurve — Reallohnforderung der Beschäftigten",
    relatedTaskFamilies: ["makro1.taskfamily.arbeitsmarkt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.arbeitsmarkt.vl-7-pdf.p35.das-produktionspotential","makro1.arbeitsmarkt.vl-7-pdf.p23.preissetzungsgleichung"]
  }),
  card({
    id: 'makro1.arbeitsmarkt.ps_kurve',
    conceptId: 'arbeitsmarkt',
    officialNotation: "\\mu",
    displayFormula: "$$\\frac{W}{P} = \\frac{1}{1+\\mu}$$",
    intuition: "Reallohn, den Firmen zahlen",
    derivationSteps: [
        {
            "label": "PS-Kurve",
            "text": "(das Produktionspotential).",
            "math": "$$\\frac{W}{P} = \\frac{1}{1+\\mu}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu arbeitsmarkt","PS-Kurve"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: PS-Kurve — Reallohn, den Firmen zahlen",
    relatedTaskFamilies: ["makro1.taskfamily.arbeitsmarkt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.arbeitsmarkt.vl-7-pdf.p35.das-produktionspotential","makro1.arbeitsmarkt.vl-7-pdf.p23.preissetzungsgleichung"]
  }),
  card({
    id: 'makro1.arbeitsmarkt.ws_kurve_merksatz',
    conceptId: 'arbeitsmarkt',
    officialNotation: "u, z",
    displayFormula: "$$\\frac{W}{P} = F(u,z)$$",
    intuition: "Reallohnforderung der Beschäftigten",
    derivationSteps: [
        {
            "label": "WS-Kurve (Merksatz)",
            "text": "(das Produktionspotential).",
            "math": "$$\\frac{W}{P} = F(u,z)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu arbeitsmarkt","WS-Kurve (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: WS-Kurve (Merksatz) — Reallohnforderung der Beschäftigten",
    relatedTaskFamilies: ["makro1.taskfamily.arbeitsmarkt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.arbeitsmarkt.vl-7-pdf.p35.das-produktionspotential","makro1.arbeitsmarkt.vl-7-pdf.p23.preissetzungsgleichung"]
  }),
  card({
    id: 'makro1.phillips.erwartungsaugmentierte_phillipsk',
    conceptId: 'phillips',
    officialNotation: "\\alpha, u_n",
    displayFormula: "$$\\pi_t - \\pi_t^e = -\\alpha (u_t - u_n)$$",
    intuition: "Arbeitslosigkeitslücke bestimmt Inflationsdruck",
    derivationSteps: [
        {
            "label": "Erwartungsaugmentierte Phillipskurve",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$\\pi_t - \\pi_t^e = -\\alpha (u_t - u_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu phillips","Erwartungsaugmentierte Phillipskurve"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartungsaugmentierte Phillipskurve — Arbeitslosigkeitslücke bestimmt Inflationsdruck",
    relatedTaskFamilies: ["makro1.taskfamily.phillips-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.phillips.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.phillips.vl-8-pdf.p04.erwartete-inflation"]
  }),
  card({
    id: 'makro1.phillips.beschleunigungsform',
    conceptId: 'phillips',
    officialNotation: "",
    displayFormula: "$$\\pi_t - \\pi_{t-1} = -\\alpha (u_t - u_n)$$",
    intuition: "Bei adaptiven Erwartungen",
    derivationSteps: [
        {
            "label": "Beschleunigungsform",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$\\pi_t - \\pi_{t-1} = -\\alpha (u_t - u_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu phillips","Beschleunigungsform"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Beschleunigungsform — Bei adaptiven Erwartungen",
    relatedTaskFamilies: ["makro1.taskfamily.phillips-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.phillips.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.phillips.vl-8-pdf.p04.erwartete-inflation"]
  }),
  card({
    id: 'makro1.phillips.indexierte_vertr_ge',
    conceptId: 'phillips',
    officialNotation: "\\lambda",
    displayFormula: "$$\\pi_t - \\pi_{t-1} = -\\frac{\\alpha}{1-\\lambda}(u_t-u_n)$$",
    intuition: "Mit Lohnindexierung reagiert die Inflationsänderung stärker auf dieselbe Arbeitslosenlücke.",
    derivationSteps: [
        {
            "label": "Indexierte Verträge",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$\\pi_t - \\pi_{t-1} = -\\frac{\\alpha}{1-\\lambda}(u_t-u_n)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu phillips","Indexierte Verträge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Indexierte Verträge — Mit Lohnindexierung reagiert die Inflationsänderung stärker auf dieselbe Arbeits",
    relatedTaskFamilies: ["makro1.taskfamily.phillips-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.phillips.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.phillips.vl-8-pdf.p04.erwartete-inflation"]
  }),
  card({
    id: 'makro1.islmpc.zinsregel',
    conceptId: 'islmpc',
    officialNotation: "\\lambda, \\bar \\pi",
    displayFormula: "$$r_t = \\bar r + \\lambda(\\pi_t - \\bar \\pi)$$",
    intuition: "Reaktion des Realzinses auf Inflationsabweichungen",
    derivationSteps: [
        {
            "label": "Zinsregel",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$r_t = \\bar r + \\lambda(\\pi_t - \\bar \\pi)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu islmpc","Zinsregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zinsregel — Reaktion des Realzinses auf Inflationsabweichungen",
    relatedTaskFamilies: ["makro1.taskfamily.islmpc-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.islmpc.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.islmpc.vl-8-pdf.p04.erwartete-inflation"]
  }),
  card({
    id: 'makro1.islmpc.okuns_gesetz',
    conceptId: 'islmpc',
    officialNotation: "\\beta",
    displayFormula: "$$u_t - u_n = -\\beta \\frac{Y_t - Y_n}{Y_n}$$",
    intuition: "Produktionslücke und Arbeitslosigkeitslücke",
    derivationSteps: [
        {
            "label": "Okuns Gesetz",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$u_t - u_n = -\\beta \\frac{Y_t - Y_n}{Y_n}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu islmpc","Okuns Gesetz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Okuns Gesetz — Produktionslücke und Arbeitslosigkeitslücke",
    relatedTaskFamilies: ["makro1.taskfamily.islmpc-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.islmpc.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.islmpc.vl-8-pdf.p04.erwartete-inflation"]
  }),
  card({
    id: 'makro1.islmpc.anpassungskette',
    conceptId: 'islmpc',
    officialNotation: "Y_n, u_n",
    displayFormula: "$$Y_t \\gt Y_n \\Rightarrow u_t \\lt u_n \\Rightarrow \\pi_t \\uparrow \\Rightarrow r_t \\uparrow \\Rightarrow Y_{t+1} \\downarrow$$",
    intuition: "Der mittelfristige Rückkanal muss als Kette gelesen werden, nicht als isolierter Phillips-Satz.",
    derivationSteps: [
        {
            "label": "Anpassungskette",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$Y_t \\gt Y_n \\Rightarrow u_t \\lt u_n \\Rightarrow \\pi_t \\uparrow \\Rightarrow r_t \\uparrow \\Rightarrow Y_{t+1} \\downarrow$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu islmpc","Anpassungskette"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Anpassungskette — Der mittelfristige Rückkanal muss als Kette gelesen werden, nicht als isolierter",
    relatedTaskFamilies: ["makro1.taskfamily.islmpc-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.islmpc.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.islmpc.vl-8-pdf.p04.erwartete-inflation"]
  }),
  card({
    id: 'makro1.erwartungen.barwert_erwarteter_gewinne',
    conceptId: 'erwartungen',
    officialNotation: "\\pi^e_{t+k}",
    displayFormula: "$$V_t = \\sum_{k=0}^{\\infty}\\frac{\\pi^e_{t+k}}{(1+r)^k}$$",
    intuition: "Investitionsentscheidungen hängen von Erwartungen ab",
    derivationSteps: [
        {
            "label": "Barwert erwarteter Gewinne",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$V_t = \\sum_{k=0}^{\\infty}\\frac{\\pi^e_{t+k}}{(1+r)^k}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu erwartungen","Barwert erwarteter Gewinne"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Barwert erwarteter Gewinne — Investitionsentscheidungen hängen von Erwartungen ab",
    relatedTaskFamilies: ["makro1.taskfamily.erwartungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.erwartungen.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.erwartungen.vl-8-pdf.p04.erwartete-inflation"]
  }),
  card({
    id: 'makro1.erwartungen.erwartungshypothese_der_zinsstru',
    conceptId: 'erwartungen',
    officialNotation: "",
    displayFormula: "$$i_{lang} \\approx \\frac{1}{n}\\sum_{k=0}^{n-1} i^e_{t+k}$$",
    intuition: "Langfristiger Zins als Durchschnitt erwarteter Kurzfristzinsen",
    derivationSteps: [
        {
            "label": "Erwartungshypothese der Zinsstruktur",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$i_{lang} \\approx \\frac{1}{n}\\sum_{k=0}^{n-1} i^e_{t+k}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu erwartungen","Erwartungshypothese der Zinsstruktur"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartungshypothese der Zinsstruktur — Langfristiger Zins als Durchschnitt erwarteter Kurzfristzinsen",
    relatedTaskFamilies: ["makro1.taskfamily.erwartungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.erwartungen.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.erwartungen.vl-8-pdf.p04.erwartete-inflation"]
  }),
  card({
    id: 'makro1.erwartungen.erwartungskanal_des_realzinses',
    conceptId: 'erwartungen',
    officialNotation: "r, i, \\pi^e",
    displayFormula: "$$r \\approx i - \\pi^e$$",
    intuition: "Fallende Inflationserwartungen können reale Finanzierungskosten selbst bei konstantem Nominalzins erhöhen.",
    derivationSteps: [
        {
            "label": "Erwartungskanal des Realzinses",
            "text": "Unterschiede zwischen den einzelnen Ländern",
            "math": "$$r \\approx i - \\pi^e$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu erwartungen","Erwartungskanal des Realzinses"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartungskanal des Realzinses — Fallende Inflationserwartungen können reale Finanzierungskosten selbst bei konst",
    relatedTaskFamilies: ["makro1.taskfamily.erwartungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["makro1.erwartungen.vl-8-pdf.p28.unterschiede-zwischen-de","makro1.erwartungen.vl-8-pdf.p04.erwartete-inflation"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

