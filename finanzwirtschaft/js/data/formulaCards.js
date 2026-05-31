// ============================================================
// FORMULA CARDS — Finanzwirtschaft
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'finanzwirtschaft';

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
    id: 'finanzwirtschaft.finanz_denkweise.leitobjekt',
    conceptId: 'finanz_denkweise',
    officialNotation: "finanz_denkweise",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["Zahlungsreihe { z_0, z_1, ..., z_n }"]},
    intuition: "Die Zahlungsreihe ist die gemeinsame Sprache des Moduls.",
    derivationSteps: [
        {
            "label": "Leitobjekt",
            "text": "23.10.2024                                       Georg-August-Universität Göttingen   20",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "Zahlungsreihe { z_0, z_1, ..., z_n }"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu finanz_denkweise","Leitobjekt"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Leitobjekt — Die Zahlungsreihe ist die gemeinsame Sprache des Moduls.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.finanz_denkweise-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p20.23-10-2024-georg-august-","finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p14.23-10-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.finanz_denkweise.leitfrage',
    conceptId: 'finanz_denkweise',
    officialNotation: "finanz_denkweise",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Zeitpunkt","+","Zahlung","+","Risiko","⇒","Entscheidung"]},
    intuition: "Gute Finanzwirtschaft verbindet alle drei Ebenen.",
    derivationSteps: [
        {
            "label": "Leitfrage",
            "text": "23.10.2024                                       Georg-August-Universität Göttingen   20",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Zeitpunkt",
                    "+",
                    "Zahlung",
                    "+",
                    "Risiko",
                    "⇒",
                    "Entscheidung"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu finanz_denkweise","Leitfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Leitfrage — Gute Finanzwirtschaft verbindet alle drei Ebenen.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.finanz_denkweise-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p20.23-10-2024-georg-august-","finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p14.23-10-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.finanz_denkweise.zeitwert',
    conceptId: 'finanz_denkweise',
    officialNotation: "finanz_denkweise",
    displayFormula: "$$BW = \\sum_{t=0}^{n} \\frac{z_t}{(1+i)^t}$$",
    intuition: "Grundidee der Abzinsung — Vorausschau auf Kapitalwert.",
    derivationSteps: [
        {
            "label": "Zeitwert",
            "text": "23.10.2024                                       Georg-August-Universität Göttingen   20",
            "math": "$$BW = \\sum_{t=0}^{n} \\frac{z_t}{(1+i)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu finanz_denkweise","Zeitwert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zeitwert — Grundidee der Abzinsung — Vorausschau auf Kapitalwert.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.finanz_denkweise-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p20.23-10-2024-georg-august-","finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p14.23-10-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.liquiditaetsplanung.kumulierter_saldo',
    conceptId: 'liquiditaetsplanung',
    officialNotation: "liquiditaetsplanung",
    displayFormula: "$$K_t = \\sum_{\\tau=0}^{t} Ein_\\tau - \\sum_{\\tau=0}^{t} Aus_\\tau$$",
    intuition: "Der tiefste kumulierte Saldo markiert den maximalen Kapitalbedarf.",
    derivationSteps: [
        {
            "label": "Kumulierter Saldo",
            "text": "06.11.2024                      Georg-August-Universität Göttingen                                                  3",
            "math": "$$K_t = \\sum_{\\tau=0}^{t} Ein_\\tau - \\sum_{\\tau=0}^{t} Aus_\\tau$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu liquiditaetsplanung","Kumulierter Saldo"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kumulierter Saldo — Der tiefste kumulierte Saldo markiert den maximalen Kapitalbedarf.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.liquiditaetsplanung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p03.06-11-2024-georg-august-","finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p15.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.liquiditaetsplanung.goldene_bilanzregel',
    conceptId: 'liquiditaetsplanung',
    officialNotation: "liquiditaetsplanung",
    displayFormula: {"mode":"schema","layout":"chain","parts":["AV","≤","langfristiges Kapital"]},
    intuition: "Langfristige Bindung verlangt langfristige Finanzierung.",
    derivationSteps: [
        {
            "label": "Goldene Bilanzregel",
            "text": "06.11.2024                      Georg-August-Universität Göttingen                                                  3",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "AV",
                    "≤",
                    "langfristiges Kapital"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu liquiditaetsplanung","Goldene Bilanzregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Goldene Bilanzregel — Langfristige Bindung verlangt langfristige Finanzierung.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.liquiditaetsplanung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p03.06-11-2024-georg-august-","finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p15.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.liquiditaetsplanung.maximaler_bedarf',
    conceptId: 'liquiditaetsplanung',
    officialNotation: "liquiditaetsplanung",
    displayFormula: "$$KB_{max} = -\\min_t K_t$$",
    intuition: "Finanzierungsbedarf aus tiefstem kumulierten Saldo.",
    derivationSteps: [
        {
            "label": "Maximaler Bedarf",
            "text": "06.11.2024                      Georg-August-Universität Göttingen                                                  3",
            "math": "$$KB_{max} = -\\min_t K_t$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu liquiditaetsplanung","Maximaler Bedarf"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Maximaler Bedarf — Finanzierungsbedarf aus tiefstem kumulierten Saldo.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.liquiditaetsplanung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p03.06-11-2024-georg-august-","finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p15.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.kapitalmarkt_bewertung.marktpreis_der_zeit',
    conceptId: 'kapitalmarkt_bewertung',
    officialNotation: "Zins",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Zins","=","Preis des Zeittausches"]},
    intuition: "Der Zins verbindet Gegenwarts- und Zukunftszahlungen.",
    derivationSteps: [
        {
            "label": "Marktpreis der Zeit",
            "text": "06.11.2024                                         Georg-August-Universität Göttingen   16",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Zins",
                    "=",
                    "Preis des Zeittausches"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kapitalmarkt_bewertung","Marktpreis der Zeit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Marktpreis der Zeit — Der Zins verbindet Gegenwarts- und Zukunftszahlungen.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.kapitalmarkt_bewertung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p16.06-11-2024-georg-august-","finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p07.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.kapitalmarkt_bewertung.entscheidungslogik',
    conceptId: 'kapitalmarkt_bewertung',
    officialNotation: "kapitalmarkt_bewertung",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Zahlung","+","Zeitpunkt","+","Marktpreis","⇒","Bewertung"]},
    intuition: "Finanzentscheidungen entstehen aus Zahlungen, Zeitstruktur und Vergleichsmaßstab.",
    derivationSteps: [
        {
            "label": "Entscheidungslogik",
            "text": "06.11.2024                                         Georg-August-Universität Göttingen   16",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Zahlung",
                    "+",
                    "Zeitpunkt",
                    "+",
                    "Marktpreis",
                    "⇒",
                    "Bewertung"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kapitalmarkt_bewertung","Entscheidungslogik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Entscheidungslogik — Finanzentscheidungen entstehen aus Zahlungen, Zeitstruktur und Vergleichsmaßstab",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.kapitalmarkt_bewertung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p16.06-11-2024-georg-august-","finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p07.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.kapitalmarkt_bewertung.entscheidungslogik_merksatz',
    conceptId: 'kapitalmarkt_bewertung',
    officialNotation: "kapitalmarkt_bewertung",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Zahlung","+","Zeitpunkt","+","Marktpreis","⇒","Bewertung"]},
    intuition: "Finanzentscheidungen entstehen aus Zahlungen, Zeitstruktur und Vergleichsmaßstab.",
    derivationSteps: [
        {
            "label": "Entscheidungslogik (Merksatz)",
            "text": "06.11.2024                                         Georg-August-Universität Göttingen   16",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Zahlung",
                    "+",
                    "Zeitpunkt",
                    "+",
                    "Marktpreis",
                    "⇒",
                    "Bewertung"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kapitalmarkt_bewertung","Entscheidungslogik (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Entscheidungslogik (Merksatz) — Finanzentscheidungen entstehen aus Zahlungen, Zeitstruktur und Vergleichsmaßstab",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.kapitalmarkt_bewertung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p16.06-11-2024-georg-august-","finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p07.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.institutionen_marktunvollkommenheit.marktunvollkommenheit',
    conceptId: 'institutionen_marktunvollkommenheit',
    officialNotation: "institutionen_marktunvollkommenheit",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Informationskosten","+","Transaktionskosten","⇒","Institutionen"]},
    intuition: "Institutionen werden durch Friktionen wirtschaftlich sinnvoll.",
    derivationSteps: [
        {
            "label": "Marktunvollkommenheit",
            "text": "06.11.2024                                    Georg-August-Universität Göttingen                             13",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Informationskosten",
                    "+",
                    "Transaktionskosten",
                    "⇒",
                    "Institutionen"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu institutionen_marktunvollkommenheit","Marktunvollkommenheit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Marktunvollkommenheit — Institutionen werden durch Friktionen wirtschaftlich sinnvoll.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.institutionen_marktunvollkommenheit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p13.06-11-2024-georg-august-","finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p03.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.institutionen_marktunvollkommenheit.orientierungsfrage',
    conceptId: 'institutionen_marktunvollkommenheit',
    officialNotation: "institutionen_marktunvollkommenheit",
    displayFormula: {"mode":"schema","layout":"chain","parts":["vollkommener Markt? Nein","⇒","Institution / Vertrag / Kontrolle prüfen"]},
    intuition: "Wenn Preismechanik nicht reicht, rückt institutionelle Gestaltung in den Vordergrund.",
    derivationSteps: [
        {
            "label": "Orientierungsfrage",
            "text": "06.11.2024                                    Georg-August-Universität Göttingen                             13",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "vollkommener Markt? Nein",
                    "⇒",
                    "Institution / Vertrag / Kontrolle prüfen"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu institutionen_marktunvollkommenheit","Orientierungsfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Orientierungsfrage — Wenn Preismechanik nicht reicht, rückt institutionelle Gestaltung in den Vorderg",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.institutionen_marktunvollkommenheit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p13.06-11-2024-georg-august-","finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p03.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.institutionen_marktunvollkommenheit.orientierungsfrage_merksatz',
    conceptId: 'institutionen_marktunvollkommenheit',
    officialNotation: "institutionen_marktunvollkommenheit",
    displayFormula: {"mode":"schema","layout":"chain","parts":["vollkommener Markt? Nein","⇒","Institution / Vertrag / Kontrolle prüfen"]},
    intuition: "Wenn Preismechanik nicht reicht, rückt institutionelle Gestaltung in den Vordergrund.",
    derivationSteps: [
        {
            "label": "Orientierungsfrage (Merksatz)",
            "text": "06.11.2024                                    Georg-August-Universität Göttingen                             13",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "vollkommener Markt? Nein",
                    "⇒",
                    "Institution / Vertrag / Kontrolle prüfen"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu institutionen_marktunvollkommenheit","Orientierungsfrage (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Orientierungsfrage (Merksatz) — Wenn Preismechanik nicht reicht, rückt institutionelle Gestaltung in den Vorderg",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.institutionen_marktunvollkommenheit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p13.06-11-2024-georg-august-","finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p03.06-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.intertemporale_wahl.budgetgerade',
    conceptId: 'intertemporale_wahl',
    officialNotation: "intertemporale_wahl",
    displayFormula: "$$c_1 = y_1 + (1+i)(y_0 - c_0)$$",
    intuition: "Sie zeigt die marktbestimmten Tauschmöglichkeiten zwischen Gegenwart und Zukunft.",
    derivationSteps: [
        {
            "label": "Budgetgerade",
            "text": "13.11.2024                                       Georg-August-Universität Göttingen                                     13",
            "math": "$$c_1 = y_1 + (1+i)(y_0 - c_0)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu intertemporale_wahl","Budgetgerade"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Budgetgerade — Sie zeigt die marktbestimmten Tauschmöglichkeiten zwischen Gegenwart und Zukunft",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.intertemporale_wahl-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p13.13-11-2024-georg-august-","finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p15.13-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.intertemporale_wahl.tangentialbedingung',
    conceptId: 'intertemporale_wahl',
    officialNotation: "intertemporale_wahl",
    displayFormula: "$$MRS_{0,1} = 1+i$$",
    intuition: "Marktpreis und Zeitpräferenz stimmen im Optimum überein.",
    derivationSteps: [
        {
            "label": "Tangentialbedingung",
            "text": "13.11.2024                                       Georg-August-Universität Göttingen                                     13",
            "math": "$$MRS_{0,1} = 1+i$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu intertemporale_wahl","Tangentialbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Tangentialbedingung — Marktpreis und Zeitpräferenz stimmen im Optimum überein.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.intertemporale_wahl-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p13.13-11-2024-georg-august-","finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p15.13-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.intertemporale_wahl.investitionsverschiebung',
    conceptId: 'intertemporale_wahl',
    officialNotation: "intertemporale_wahl",
    displayFormula: "K_0 > 0 \\Rightarrow \\text{äußerer Konsumpfad}",
    intuition: "Positiver Kapitalwert erweitert die Erreichbarkeit.",
    derivationSteps: [
        {
            "label": "Investitionsverschiebung",
            "text": "13.11.2024                                       Georg-August-Universität Göttingen                                     13",
            "math": "K_0 > 0 \\Rightarrow \\text{äußerer Konsumpfad}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu intertemporale_wahl","Investitionsverschiebung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Investitionsverschiebung — Positiver Kapitalwert erweitert die Erreichbarkeit.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.intertemporale_wahl-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p13.13-11-2024-georg-august-","finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p15.13-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.kapitalwert_fisher.kapitalwert',
    conceptId: 'kapitalwert_fisher',
    officialNotation: "A_0, CF_t, i, K_0",
    displayFormula: "$$K_0 = -A_0 + \\sum_{t=1}^{n}\\frac{CF_t}{(1+i)^t}$$",
    intuition: "Alle entscheidungsrelevanten Zahlungen werden auf t=0 bezogen.",
    derivationSteps: [
        {
            "label": "Kapitalwert",
            "text": "27.11.2024                                            Georg-August-Universität Göttingen                                7",
            "math": "$$K_0 = -A_0 + \\sum_{t=1}^{n}\\frac{CF_t}{(1+i)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kapitalwert_fisher","Kapitalwert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kapitalwert — Alle entscheidungsrelevanten Zahlungen werden auf t=0 bezogen.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.kapitalwert_fisher-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p07.27-11-2024-georg-august-","finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p14.27-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.kapitalwert_fisher.kapitalwertregel',
    conceptId: 'kapitalwert_fisher',
    officialNotation: "kapitalwert_fisher",
    displayFormula: "$$K_0 > 0 \\Rightarrow \\text{vorteilhaft}$$",
    intuition: "Positiver Kapitalwert bedeutet Vermögenszuwachs.",
    derivationSteps: [
        {
            "label": "Kapitalwertregel",
            "text": "27.11.2024                                            Georg-August-Universität Göttingen                                7",
            "math": "$$K_0 > 0 \\Rightarrow \\text{vorteilhaft}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kapitalwert_fisher","Kapitalwertregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kapitalwertregel — Positiver Kapitalwert bedeutet Vermögenszuwachs.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.kapitalwert_fisher-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p07.27-11-2024-georg-august-","finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p14.27-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.kapitalwert_fisher.wahlregel',
    conceptId: 'kapitalwert_fisher',
    officialNotation: "kapitalwert_fisher",
    displayFormula: "\\max K_0",
    intuition: "Bei Ausschlussalternativen wählt man das Projekt mit dem höchsten positiven Kapitalwert.",
    derivationSteps: [
        {
            "label": "Wahlregel",
            "text": "27.11.2024                                            Georg-August-Universität Göttingen                                7",
            "math": "\\max K_0"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kapitalwert_fisher","Wahlregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wahlregel — Bei Ausschlussalternativen wählt man das Projekt mit dem höchsten positiven Kapi",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.kapitalwert_fisher-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p07.27-11-2024-georg-august-","finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p14.27-11-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.auf_abzinsen.endwert',
    conceptId: 'auf_abzinsen',
    officialNotation: "auf_abzinsen",
    displayFormula: "$$EW_n = BW_0 (1+i)^n$$",
    intuition: "Aus Gegenwartswert wird Zukunftswert.",
    derivationSteps: [
        {
            "label": "Endwert",
            "text": "04.12.2024                                        Georg-August-Universität Göttingen                                    8",
            "math": "$$EW_n = BW_0 (1+i)^n$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu auf_abzinsen","Endwert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Endwert — Aus Gegenwartswert wird Zukunftswert.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.auf_abzinsen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p08.04-12-2024-georg-august-","finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p10.04-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.auf_abzinsen.barwert',
    conceptId: 'auf_abzinsen',
    officialNotation: "auf_abzinsen",
    displayFormula: "$$BW_0 = \\frac{EW_n}{(1+i)^n}$$",
    intuition: "Aus Zukunftswert wird Gegenwartswert.",
    derivationSteps: [
        {
            "label": "Barwert",
            "text": "04.12.2024                                        Georg-August-Universität Göttingen                                    8",
            "math": "$$BW_0 = \\frac{EW_n}{(1+i)^n}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu auf_abzinsen","Barwert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Barwert — Aus Zukunftswert wird Gegenwartswert.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.auf_abzinsen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p08.04-12-2024-georg-august-","finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p10.04-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.auf_abzinsen.variable_zinsen',
    conceptId: 'auf_abzinsen',
    officialNotation: "auf_abzinsen",
    displayFormula: "$$BW_0 = \\frac{EW_n}{\\prod_{t=1}^{n}(1+i_t)}$$",
    intuition: "Periodenscharfe Abzinsung bei wechselnden Sätzen.",
    derivationSteps: [
        {
            "label": "Variable Zinsen",
            "text": "04.12.2024                                        Georg-August-Universität Göttingen                                    8",
            "math": "$$BW_0 = \\frac{EW_n}{\\prod_{t=1}^{n}(1+i_t)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu auf_abzinsen","Variable Zinsen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Variable Zinsen — Periodenscharfe Abzinsung bei wechselnden Sätzen.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.auf_abzinsen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p08.04-12-2024-georg-august-","finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p10.04-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.renten_endwert.rentenbarwertfaktor',
    conceptId: 'renten_endwert',
    officialNotation: "i, n",
    displayFormula: "$$RBWF = \\frac{1-(1+i)^{-n}}{i}$$",
    intuition: "Periodische Zahlungen werden auf den Gegenwartszeitpunkt gebracht.",
    derivationSteps: [
        {
            "label": "Rentenbarwertfaktor",
            "text": "04.12.2024                                              Georg-August-Universität Göttingen                                         6",
            "math": "$$RBWF = \\frac{1-(1+i)^{-n}}{i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu renten_endwert","Rentenbarwertfaktor"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rentenbarwertfaktor — Periodische Zahlungen werden auf den Gegenwartszeitpunkt gebracht.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.renten_endwert-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.renten_endwert.v6-studip-pdf.p06.04-12-2024-georg-august-","finanzwirtschaft.renten_endwert.v6-studip-pdf.p02.04-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.renten_endwert.rentenendwertfaktor',
    conceptId: 'renten_endwert',
    officialNotation: "i, n",
    displayFormula: "$$REWF = \\frac{(1+i)^n-1}{i}$$",
    intuition: "Periodische Zahlungen werden auf den Endzeitpunkt gebracht.",
    derivationSteps: [
        {
            "label": "Rentenendwertfaktor",
            "text": "04.12.2024                                              Georg-August-Universität Göttingen                                         6",
            "math": "$$REWF = \\frac{(1+i)^n-1}{i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu renten_endwert","Rentenendwertfaktor"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rentenendwertfaktor — Periodische Zahlungen werden auf den Endzeitpunkt gebracht.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.renten_endwert-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.renten_endwert.v6-studip-pdf.p06.04-12-2024-georg-august-","finanzwirtschaft.renten_endwert.v6-studip-pdf.p02.04-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.renten_endwert.quivalenz',
    conceptId: 'renten_endwert',
    officialNotation: "renten_endwert",
    displayFormula: "$$EW_n = K_0 (1+i)^n$$",
    intuition: "Endwert und Kapitalwert führen bei gleichem Zinssatz zum selben Urteil.",
    derivationSteps: [
        {
            "label": "Äquivalenz",
            "text": "04.12.2024                                              Georg-August-Universität Göttingen                                         6",
            "math": "$$EW_n = K_0 (1+i)^n$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu renten_endwert","Äquivalenz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Äquivalenz — Endwert und Kapitalwert führen bei gleichem Zinssatz zum selben Urteil.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.renten_endwert-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.renten_endwert.v6-studip-pdf.p06.04-12-2024-georg-august-","finanzwirtschaft.renten_endwert.v6-studip-pdf.p02.04-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.annuitaeten_finanzplan.annuit_t_aus_kapitalwert',
    conceptId: 'annuitaeten_finanzplan',
    officialNotation: "a, K_0, RBWF(n,i)",
    displayFormula: "$$a = \\frac{K_0}{RBWF(n,i)}$$",
    intuition: "Äquivalente konstante Periodenzahlung zum Kapitalwert.",
    derivationSteps: [
        {
            "label": "Annuität aus Kapitalwert",
            "text": "11.12.2024                                          Georg-August-Universität Göttingen                                                 11",
            "math": "$$a = \\frac{K_0}{RBWF(n,i)}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu annuitaeten_finanzplan","Annuität aus Kapitalwert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Annuität aus Kapitalwert — Äquivalente konstante Periodenzahlung zum Kapitalwert.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.annuitaeten_finanzplan-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p11.11-12-2024-georg-august-","finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p08.11-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.annuitaeten_finanzplan.wiedergewinnungsfaktor',
    conceptId: 'annuitaeten_finanzplan',
    officialNotation: "annuitaeten_finanzplan",
    displayFormula: "$$WGF(n,i) = \\frac{(1+i)^n i}{(1+i)^n-1}$$",
    intuition: "Kehrwert des Rentenbarwertfaktors.",
    derivationSteps: [
        {
            "label": "Wiedergewinnungsfaktor",
            "text": "11.12.2024                                          Georg-August-Universität Göttingen                                                 11",
            "math": "$$WGF(n,i) = \\frac{(1+i)^n i}{(1+i)^n-1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu annuitaeten_finanzplan","Wiedergewinnungsfaktor"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wiedergewinnungsfaktor — Kehrwert des Rentenbarwertfaktors.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.annuitaeten_finanzplan-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p11.11-12-2024-georg-august-","finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p08.11-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.annuitaeten_finanzplan.wiedergewinnungsfaktor_merksatz',
    conceptId: 'annuitaeten_finanzplan',
    officialNotation: "annuitaeten_finanzplan",
    displayFormula: "$$WGF(n,i) = \\frac{(1+i)^n i}{(1+i)^n-1}$$",
    intuition: "Kehrwert des Rentenbarwertfaktors.",
    derivationSteps: [
        {
            "label": "Wiedergewinnungsfaktor (Merksatz)",
            "text": "11.12.2024                                          Georg-August-Universität Göttingen                                                 11",
            "math": "$$WGF(n,i) = \\frac{(1+i)^n i}{(1+i)^n-1}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu annuitaeten_finanzplan","Wiedergewinnungsfaktor (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wiedergewinnungsfaktor (Merksatz) — Kehrwert des Rentenbarwertfaktors.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.annuitaeten_finanzplan-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p11.11-12-2024-georg-august-","finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p08.11-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.izf_kapitalwertfunktion.izf_definition',
    conceptId: 'izf_kapitalwertfunktion',
    officialNotation: "izf_kapitalwertfunktion",
    displayFormula: "$$K(r^*) = 0$$",
    intuition: "Beim internen Zinsfuß schneidet die Kapitalwertfunktion die Nulllinie.",
    derivationSteps: [
        {
            "label": "IZF-Definition",
            "text": "18.12.2024                                Georg-August-Universität Göttingen                            3",
            "math": "$$K(r^*) = 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu izf_kapitalwertfunktion","IZF-Definition"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: IZF-Definition — Beim internen Zinsfuß schneidet die Kapitalwertfunktion die Nulllinie.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.izf_kapitalwertfunktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p03.18-12-2024-georg-august-","finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p05.18-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.izf_kapitalwertfunktion.entscheidungsregel',
    conceptId: 'izf_kapitalwertfunktion',
    officialNotation: "izf_kapitalwertfunktion",
    displayFormula: "$$r^* > i \\Rightarrow K_0(i) > 0$$",
    intuition: "Der Vergleichszins entscheidet über Vorteilhaftigkeit.",
    derivationSteps: [
        {
            "label": "Entscheidungsregel",
            "text": "18.12.2024                                Georg-August-Universität Göttingen                            3",
            "math": "$$r^* > i \\Rightarrow K_0(i) > 0$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu izf_kapitalwertfunktion","Entscheidungsregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Entscheidungsregel — Der Vergleichszins entscheidet über Vorteilhaftigkeit.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.izf_kapitalwertfunktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p03.18-12-2024-georg-august-","finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p05.18-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.izf_kapitalwertfunktion.kapitalwertfunktion',
    conceptId: 'izf_kapitalwertfunktion',
    officialNotation: "izf_kapitalwertfunktion",
    displayFormula: "$$K(r) = -A_0 + \\sum_{t=1}^{n}\\frac{CF_t}{(1+r)^t}$$",
    intuition: "Grundlage für IZF und Sensitivität.",
    derivationSteps: [
        {
            "label": "Kapitalwertfunktion",
            "text": "18.12.2024                                Georg-August-Universität Göttingen                            3",
            "math": "$$K(r) = -A_0 + \\sum_{t=1}^{n}\\frac{CF_t}{(1+r)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu izf_kapitalwertfunktion","Kapitalwertfunktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kapitalwertfunktion — Grundlage für IZF und Sensitivität.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.izf_kapitalwertfunktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p03.18-12-2024-georg-august-","finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p05.18-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.izf_grenzen.mehrdeutigkeit',
    conceptId: 'izf_grenzen',
    officialNotation: "izf_grenzen",
    displayFormula: {"mode":"schema","layout":"chain","parts":["mehrere Vorzeichenwechsel","⇒","mehrere mögliche r*"]},
    intuition: "Der IZF kann seine Eindeutigkeit verlieren.",
    derivationSteps: [
        {
            "label": "Mehrdeutigkeit",
            "text": "18.12.2024                                Georg-August-Universität Göttingen                            3",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "mehrere Vorzeichenwechsel",
                    "⇒",
                    "mehrere mögliche r*"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu izf_grenzen","Mehrdeutigkeit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Mehrdeutigkeit — Der IZF kann seine Eindeutigkeit verlieren.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.izf_grenzen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.izf_grenzen.v8-studip-pdf.p03.18-12-2024-georg-august-","finanzwirtschaft.izf_grenzen.v8-studip-pdf.p05.18-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.izf_grenzen.wiederanlagepr_misse',
    conceptId: 'izf_grenzen',
    officialNotation: "izf_grenzen",
    displayFormula: "\\text{Zwischenüberschüsse werden zu } r^* \\text{ reinvestiert}",
    intuition: "Implizite und oft unrealistische Annahme des IZF.",
    derivationSteps: [
        {
            "label": "Wiederanlageprämisse",
            "text": "18.12.2024                                Georg-August-Universität Göttingen                            3",
            "math": "\\text{Zwischenüberschüsse werden zu } r^* \\text{ reinvestiert}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu izf_grenzen","Wiederanlageprämisse"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wiederanlageprämisse — Implizite und oft unrealistische Annahme des IZF.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.izf_grenzen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.izf_grenzen.v8-studip-pdf.p03.18-12-2024-georg-august-","finanzwirtschaft.izf_grenzen.v8-studip-pdf.p05.18-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.izf_grenzen.referenzregel',
    conceptId: 'izf_grenzen',
    officialNotation: "izf_grenzen",
    displayFormula: "\\max K_0",
    intuition: "Bei Konflikten bleibt der Kapitalwert die Vermögensregel.",
    derivationSteps: [
        {
            "label": "Referenzregel",
            "text": "18.12.2024                                Georg-August-Universität Göttingen                            3",
            "math": "\\max K_0"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu izf_grenzen","Referenzregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Referenzregel — Bei Konflikten bleibt der Kapitalwert die Vermögensregel.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.izf_grenzen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.izf_grenzen.v8-studip-pdf.p03.18-12-2024-georg-august-","finanzwirtschaft.izf_grenzen.v8-studip-pdf.p05.18-12-2024-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.unsicherheit.erwartungswert',
    conceptId: 'unsicherheit',
    officialNotation: "p_s, x_s",
    displayFormula: "$$E(X) = \\sum_s p_s x_s$$",
    intuition: "Gewichteter Durchschnitt zustandsabhängiger Ergebnisse.",
    derivationSteps: [
        {
            "label": "Erwartungswert",
            "text": "08.01.2025                                           Georg-August-Universität Göttingen                    18",
            "math": "$$E(X) = \\sum_s p_s x_s$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu unsicherheit","Erwartungswert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Erwartungswert — Gewichteter Durchschnitt zustandsabhängiger Ergebnisse.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.unsicherheit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.unsicherheit.v9-studip-pdf.p18.08-01-2025-georg-august-","finanzwirtschaft.unsicherheit.v9-studip-pdf.p25.08-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.unsicherheit.varianz',
    conceptId: 'unsicherheit',
    officialNotation: "unsicherheit",
    displayFormula: "$$Var(X)= \\sum_s p_s(x_s-E(X))^2$$",
    intuition: "Streuungsmaß der Ergebnisse um ihren Erwartungswert.",
    derivationSteps: [
        {
            "label": "Varianz",
            "text": "08.01.2025                                           Georg-August-Universität Göttingen                    18",
            "math": "$$Var(X)= \\sum_s p_s(x_s-E(X))^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu unsicherheit","Varianz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Varianz — Streuungsmaß der Ergebnisse um ihren Erwartungswert.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.unsicherheit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.unsicherheit.v9-studip-pdf.p18.08-01-2025-georg-august-","finanzwirtschaft.unsicherheit.v9-studip-pdf.p25.08-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.unsicherheit.varianz_merksatz',
    conceptId: 'unsicherheit',
    officialNotation: "unsicherheit",
    displayFormula: "$$Var(X)= \\sum_s p_s(x_s-E(X))^2$$",
    intuition: "Streuungsmaß der Ergebnisse um ihren Erwartungswert.",
    derivationSteps: [
        {
            "label": "Varianz (Merksatz)",
            "text": "08.01.2025                                           Georg-August-Universität Göttingen                    18",
            "math": "$$Var(X)= \\sum_s p_s(x_s-E(X))^2$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu unsicherheit","Varianz (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Varianz (Merksatz) — Streuungsmaß der Ergebnisse um ihren Erwartungswert.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.unsicherheit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.unsicherheit.v9-studip-pdf.p18.08-01-2025-georg-august-","finanzwirtschaft.unsicherheit.v9-studip-pdf.p25.08-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.risikoadjustierter_kapitalwert.risikozuschlag',
    conceptId: 'risikoadjustierter_kapitalwert',
    officialNotation: "d, E(CF_t)",
    displayFormula: "$$K_0^{risk} = -A_0 + \\sum_{t=1}^{n}\\frac{E(CF_t)}{(1+i+d)^t}$$",
    intuition: "Risiko geht über einen zusätzlichen Zuschlag im Diskontsatz ein.",
    derivationSteps: [
        {
            "label": "Risikozuschlag",
            "text": "08.01.2025                                             Georg-August-Universität Göttingen                            9",
            "math": "$$K_0^{risk} = -A_0 + \\sum_{t=1}^{n}\\frac{E(CF_t)}{(1+i+d)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu risikoadjustierter_kapitalwert","Risikozuschlag"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Risikozuschlag — Risiko geht über einen zusätzlichen Zuschlag im Diskontsatz ein.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.risikoadjustierter_kapitalwert-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p09.08-01-2025-georg-august-","finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p17.08-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.risikoadjustierter_kapitalwert.sicherheitsabschlag',
    conceptId: 'risikoadjustierter_kapitalwert',
    officialNotation: "D_t",
    displayFormula: "$$K_0^{safe} = -A_0 + \\sum_{t=1}^{n}\\frac{E(CF_t)-D_t}{(1+i)^t}$$",
    intuition: "Risiko wird direkt als Abschlag auf die erwarteten Zahlungen modelliert.",
    derivationSteps: [
        {
            "label": "Sicherheitsabschlag",
            "text": "08.01.2025                                             Georg-August-Universität Göttingen                            9",
            "math": "$$K_0^{safe} = -A_0 + \\sum_{t=1}^{n}\\frac{E(CF_t)-D_t}{(1+i)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu risikoadjustierter_kapitalwert","Sicherheitsabschlag"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Sicherheitsabschlag — Risiko wird direkt als Abschlag auf die erwarteten Zahlungen modelliert.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.risikoadjustierter_kapitalwert-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p09.08-01-2025-georg-august-","finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p17.08-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.risikoadjustierter_kapitalwert.sicherheitsabschlag_merksatz',
    conceptId: 'risikoadjustierter_kapitalwert',
    officialNotation: "D_t",
    displayFormula: "$$K_0^{safe} = -A_0 + \\sum_{t=1}^{n}\\frac{E(CF_t)-D_t}{(1+i)^t}$$",
    intuition: "Risiko wird direkt als Abschlag auf die erwarteten Zahlungen modelliert.",
    derivationSteps: [
        {
            "label": "Sicherheitsabschlag (Merksatz)",
            "text": "08.01.2025                                             Georg-August-Universität Göttingen                            9",
            "math": "$$K_0^{safe} = -A_0 + \\sum_{t=1}^{n}\\frac{E(CF_t)-D_t}{(1+i)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu risikoadjustierter_kapitalwert","Sicherheitsabschlag (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Sicherheitsabschlag (Merksatz) — Risiko wird direkt als Abschlag auf die erwarteten Zahlungen modelliert.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.risikoadjustierter_kapitalwert-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p09.08-01-2025-georg-august-","finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p17.08-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.bezugsrecht.theoretischer_ex_kurs',
    conceptId: 'bezugsrecht',
    officialNotation: "bezugsrecht",
    displayFormula: "$$P_{ex} = \\frac{nP_0 + mP_N}{n+m}$$",
    intuition: "Neuer Mischkurs nach Ausgabe alter und neuer Aktien.",
    derivationSteps: [
        {
            "label": "Theoretischer Ex-Kurs",
            "text": "15.01.2025                                              Georg-August-Universität Göttingen   9",
            "math": "$$P_{ex} = \\frac{nP_0 + mP_N}{n+m}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu bezugsrecht","Theoretischer Ex-Kurs"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Theoretischer Ex-Kurs — Neuer Mischkurs nach Ausgabe alter und neuer Aktien.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.bezugsrecht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.bezugsrecht.v10-studip-pdf.p09.15-01-2025-georg-august-","finanzwirtschaft.bezugsrecht.v10-studip-pdf.p19.15-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.bezugsrecht.bezugsrechtswert',
    conceptId: 'bezugsrecht',
    officialNotation: "bezugsrecht",
    displayFormula: "$$BR = P_0 - P_{ex}$$",
    intuition: "Das Bezugsrecht gleicht den Verwässerungseffekt aus.",
    derivationSteps: [
        {
            "label": "Bezugsrechtswert",
            "text": "15.01.2025                                              Georg-August-Universität Göttingen   9",
            "math": "$$BR = P_0 - P_{ex}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu bezugsrecht","Bezugsrechtswert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bezugsrechtswert — Das Bezugsrecht gleicht den Verwässerungseffekt aus.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.bezugsrecht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.bezugsrecht.v10-studip-pdf.p09.15-01-2025-georg-august-","finanzwirtschaft.bezugsrecht.v10-studip-pdf.p19.15-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.bezugsrecht.verm_gensgleichheit',
    conceptId: 'bezugsrecht',
    officialNotation: "bezugsrecht",
    displayFormula: "$$P_0 = P_{ex} + BR$$",
    intuition: "Alter Kurs, Ex-Kurs und Bezugsrechtswert gehören zu derselben Vermögensposition.",
    derivationSteps: [
        {
            "label": "Vermögensgleichheit",
            "text": "15.01.2025                                              Georg-August-Universität Göttingen   9",
            "math": "$$P_0 = P_{ex} + BR$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu bezugsrecht","Vermögensgleichheit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vermögensgleichheit — Alter Kurs, Ex-Kurs und Bezugsrechtswert gehören zu derselben Vermögensposition.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.bezugsrecht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.bezugsrecht.v10-studip-pdf.p09.15-01-2025-georg-august-","finanzwirtschaft.bezugsrecht.v10-studip-pdf.p19.15-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.eigenkapitalkosten.eigenkapitalkosten',
    conceptId: 'eigenkapitalkosten',
    officialNotation: "D_1, P_0, g",
    displayFormula: "$$k_E = \\frac{D_1}{P_0} + g$$",
    intuition: "Gordon-Growth-Formel bei konstantem Dividendenwachstum.",
    derivationSteps: [
        {
            "label": "Eigenkapitalkosten",
            "text": "15.01.2025                                     Georg-August-Universität Göttingen   6",
            "math": "$$k_E = \\frac{D_1}{P_0} + g$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapitalkosten","Eigenkapitalkosten"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Eigenkapitalkosten — Gordon-Growth-Formel bei konstantem Dividendenwachstum.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.eigenkapitalkosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p06.15-01-2025-georg-august-","finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p03.15-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.eigenkapitalkosten.marktgleichgewichtslogik',
    conceptId: 'eigenkapitalkosten',
    officialNotation: "eigenkapitalkosten",
    displayFormula: "$$P_0 = \\sum_{t=1}^{\\infty}\\frac{E(D_t)}{(1+k_E)^t}$$",
    intuition: "Der heutige Kurs ist der Barwert der erwarteten Ausschüttungen.",
    derivationSteps: [
        {
            "label": "Marktgleichgewichtslogik",
            "text": "15.01.2025                                     Georg-August-Universität Göttingen   6",
            "math": "$$P_0 = \\sum_{t=1}^{\\infty}\\frac{E(D_t)}{(1+k_E)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapitalkosten","Marktgleichgewichtslogik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Marktgleichgewichtslogik — Der heutige Kurs ist der Barwert der erwarteten Ausschüttungen.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.eigenkapitalkosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p06.15-01-2025-georg-august-","finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p03.15-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.eigenkapitalkosten.gordon_bedingung',
    conceptId: 'eigenkapitalkosten',
    officialNotation: "eigenkapitalkosten",
    displayFormula: "$$P_0 = \\frac{D_1}{k_E-g}\\qquad (k_E > g)$$",
    intuition: "Nur bei dauerhaftem Wachstum unterhalb der geforderten Rendite ist die Gordon-Logik sinnvoll interpretierbar.",
    derivationSteps: [
        {
            "label": "Gordon-Bedingung",
            "text": "15.01.2025                                     Georg-August-Universität Göttingen   6",
            "math": "$$P_0 = \\frac{D_1}{k_E-g}\\qquad (k_E > g)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapitalkosten","Gordon-Bedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gordon-Bedingung — Nur bei dauerhaftem Wachstum unterhalb der geforderten Rendite ist die Gordon-Lo",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.eigenkapitalkosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p06.15-01-2025-georg-august-","finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p03.15-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.fremdkapitalkosten.skontokosten',
    conceptId: 'fremdkapitalkosten',
    officialNotation: "s, T, Z",
    displayFormula: "$$k_{Skonto} \\approx \\frac{s}{1-s}\\cdot\\frac{360}{T-Z}$$",
    intuition: "Verzicht auf Skonto kann einen sehr hohen effektiven Kreditzins bedeuten.",
    derivationSteps: [
        {
            "label": "Skontokosten",
            "text": "22.01.2025                                           Georg-August-Universität Göttingen   8",
            "math": "$$k_{Skonto} \\approx \\frac{s}{1-s}\\cdot\\frac{360}{T-Z}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu fremdkapitalkosten","Skontokosten"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Skontokosten — Verzicht auf Skonto kann einen sehr hohen effektiven Kreditzins bedeuten.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.fremdkapitalkosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p08.22-01-2025-georg-august-","finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p05.22-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.fremdkapitalkosten.finanzierungs_izf',
    conceptId: 'fremdkapitalkosten',
    officialNotation: "fremdkapitalkosten",
    displayFormula: {"mode":"schema","layout":"chain","parts":["FK-Kosten","=","r* der Finanzierungszahlungsreihe"]},
    intuition: "Fremdfinanzierung wird finanzwirtschaftlich wie eine eigene Zahlungsreihe gelesen.",
    derivationSteps: [
        {
            "label": "Finanzierungs-IZF",
            "text": "22.01.2025                                           Georg-August-Universität Göttingen   8",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "FK-Kosten",
                    "=",
                    "r* der Finanzierungszahlungsreihe"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu fremdkapitalkosten","Finanzierungs-IZF"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Finanzierungs-IZF — Fremdfinanzierung wird finanzwirtschaftlich wie eine eigene Zahlungsreihe gelese",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.fremdkapitalkosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p08.22-01-2025-georg-august-","finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p05.22-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.fremdkapitalkosten.interpretationsregel',
    conceptId: 'fremdkapitalkosten',
    officialNotation: "fremdkapitalkosten",
    displayFormula: {"mode":"schema","layout":"chain","parts":["niedriger Nominalzins","≠","niedrige effektive Kosten"]},
    intuition: "Zusatzkosten, Fristen und Risikoprämien können den Effektivsatz deutlich erhöhen.",
    derivationSteps: [
        {
            "label": "Interpretationsregel",
            "text": "22.01.2025                                           Georg-August-Universität Göttingen   8",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "niedriger Nominalzins",
                    "≠",
                    "niedrige effektive Kosten"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu fremdkapitalkosten","Interpretationsregel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Interpretationsregel — Zusatzkosten, Fristen und Risikoprämien können den Effektivsatz deutlich erhöhen",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.fremdkapitalkosten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p08.22-01-2025-georg-august-","finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p05.22-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.wacc.wacc',
    conceptId: 'wacc',
    officialNotation: "E, D, k_E, k_D",
    displayFormula: "$$WACC = \\frac{E}{E+D}k_E + \\frac{D}{E+D}k_D$$",
    intuition: "Gewichteter Preis der Finanzierungsmischung.",
    derivationSteps: [
        {
            "label": "WACC",
            "text": "22.01.2025                                    Georg-August-Universität Göttingen   9",
            "math": "$$WACC = \\frac{E}{E+D}k_E + \\frac{D}{E+D}k_D$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wacc","WACC"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: WACC — Gewichteter Preis der Finanzierungsmischung.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.wacc-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.wacc.v11-studip-pdf.p09.22-01-2025-georg-august-","finanzwirtschaft.wacc.v11-studip-pdf.p04.22-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.wacc.einsatzbedingung',
    conceptId: 'wacc',
    officialNotation: "wacc",
    displayFormula: {"mode":"schema","layout":"chain","parts":["passender WACC","⇒","Projekt- und Finanzierungsrisiko konsistent"]},
    intuition: "Der WACC muss zur Risiko- und Kapitalstruktur des Bewertungsobjekts passen.",
    derivationSteps: [
        {
            "label": "Einsatzbedingung",
            "text": "22.01.2025                                    Georg-August-Universität Göttingen   9",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "passender WACC",
                    "⇒",
                    "Projekt- und Finanzierungsrisiko konsistent"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wacc","Einsatzbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Einsatzbedingung — Der WACC muss zur Risiko- und Kapitalstruktur des Bewertungsobjekts passen.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.wacc-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.wacc.v11-studip-pdf.p09.22-01-2025-georg-august-","finanzwirtschaft.wacc.v11-studip-pdf.p04.22-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.wacc.wacc_in_der_bewertung',
    conceptId: 'wacc',
    officialNotation: "CF_t, A_0",
    displayFormula: "$$K_0 = -A_0 + \\sum_{t=1}^{n}\\frac{CF_t}{(1+WACC)^t}$$",
    intuition: "Nur zulässig, wenn die WACC-Annahmen zur Aufgabe passen.",
    derivationSteps: [
        {
            "label": "WACC in der Bewertung",
            "text": "22.01.2025                                    Georg-August-Universität Göttingen   9",
            "math": "$$K_0 = -A_0 + \\sum_{t=1}^{n}\\frac{CF_t}{(1+WACC)^t}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wacc","WACC in der Bewertung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: WACC in der Bewertung — Nur zulässig, wenn die WACC-Annahmen zur Aufgabe passen.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.wacc-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.wacc.v11-studip-pdf.p09.22-01-2025-georg-august-","finanzwirtschaft.wacc.v11-studip-pdf.p04.22-01-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.wacc_leverage.leverage_beziehung',
    conceptId: 'wacc_leverage',
    officialNotation: "r_E, r_U, r_D, D/E",
    displayFormula: "$$r_E = r_U + \\frac{D}{E}(r_U-r_D)$$",
    intuition: "Mehr Verschuldung verstärkt die Eigenkapitalrendite, solange die Gesamtkapitalrendite über dem Fremdkapitalzins liegt.",
    derivationSteps: [
        {
            "label": "Leverage-Beziehung",
            "text": "02.02.2025                                        Georg-August-Universität Göttingen   4",
            "math": "$$r_E = r_U + \\frac{D}{E}(r_U-r_D)$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wacc_leverage","Leverage-Beziehung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Leverage-Beziehung — Mehr Verschuldung verstärkt die Eigenkapitalrendite, solange die Gesamtkapitalre",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.wacc_leverage-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.wacc_leverage.v12-studip-pdf.p04.02-02-2025-georg-august-","finanzwirtschaft.wacc_leverage.v12-studip-pdf.p02.02-02-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.wacc_leverage.leverage_regel',
    conceptId: 'wacc_leverage',
    officialNotation: "wacc_leverage",
    displayFormula: {"mode":"schema","layout":"chain","parts":["r_U > r_D","⇒","positiver Hebeleffekt auf r_E"]},
    intuition: "Nur dann wirkt Fremdkapital renditesteigernd auf das Eigenkapital.",
    derivationSteps: [
        {
            "label": "Leverage-Regel",
            "text": "02.02.2025                                        Georg-August-Universität Göttingen   4",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "r_U > r_D",
                    "⇒",
                    "positiver Hebeleffekt auf r_E"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wacc_leverage","Leverage-Regel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Leverage-Regel — Nur dann wirkt Fremdkapital renditesteigernd auf das Eigenkapital.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.wacc_leverage-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.wacc_leverage.v12-studip-pdf.p04.02-02-2025-georg-august-","finanzwirtschaft.wacc_leverage.v12-studip-pdf.p02.02-02-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.wacc_leverage.spannendiagnose',
    conceptId: 'wacc_leverage',
    officialNotation: "r_U-r_D",
    displayFormula: "$$r_U-r_D > 0 \\Rightarrow \\text{positiver Hebel}, \\qquad r_U-r_D < 0 \\Rightarrow \\text{negativer Hebel}$$",
    intuition: "Vor jeder Interpretation muss die Renditespanne zwischen Gesamtkapital und Fremdkapital gelesen werden.",
    derivationSteps: [
        {
            "label": "Spannendiagnose",
            "text": "02.02.2025                                        Georg-August-Universität Göttingen   4",
            "math": "$$r_U-r_D > 0 \\Rightarrow \\text{positiver Hebel}, \\qquad r_U-r_D < 0 \\Rightarrow \\text{negativer Hebel}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wacc_leverage","Spannendiagnose"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Spannendiagnose — Vor jeder Interpretation muss die Renditespanne zwischen Gesamtkapital und Fremd",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.wacc_leverage-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.wacc_leverage.v12-studip-pdf.p04.02-02-2025-georg-august-","finanzwirtschaft.wacc_leverage.v12-studip-pdf.p02.02-02-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.modigliani_miller.irrelevanz_benchmark',
    conceptId: 'modigliani_miller',
    officialNotation: "modigliani_miller",
    displayFormula: {"mode":"schema","layout":"chain","parts":["vollkommener Markt","⇒","Kapitalstruktur wertneutral"]},
    intuition: "Unter Benchmark-Annahmen beeinflusst die Finanzierungsmischung den Unternehmenswert nicht.",
    derivationSteps: [
        {
            "label": "Irrelevanz-Benchmark",
            "text": "02.02.2025                                             Georg-August-Universität Göttingen                                8",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "vollkommener Markt",
                    "⇒",
                    "Kapitalstruktur wertneutral"
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu modigliani_miller","Irrelevanz-Benchmark"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Irrelevanz-Benchmark — Unter Benchmark-Annahmen beeinflusst die Finanzierungsmischung den Unternehmensw",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.modigliani_miller-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.modigliani_miller.v12-studip-pdf.p08.02-02-2025-georg-august-","finanzwirtschaft.modigliani_miller.v12-studip-pdf.p03.02-02-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.modigliani_miller.benchmark_aussage',
    conceptId: 'modigliani_miller',
    officialNotation: "modigliani_miller",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["Leverage verändert r_E und Risiko, aber nicht Value."]},
    intuition: "Unter MM wird der Unternehmenswert nicht durch die Kapitalstruktur getrieben.",
    derivationSteps: [
        {
            "label": "Benchmark-Aussage",
            "text": "02.02.2025                                             Georg-August-Universität Göttingen                                8",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "Leverage verändert r_E und Risiko, aber nicht Value."
                ]
            }
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu modigliani_miller","Benchmark-Aussage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Benchmark-Aussage — Unter MM wird der Unternehmenswert nicht durch die Kapitalstruktur getrieben.",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.modigliani_miller-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.modigliani_miller.v12-studip-pdf.p08.02-02-2025-georg-august-","finanzwirtschaft.modigliani_miller.v12-studip-pdf.p03.02-02-2025-georg-august-"]
  }),
  card({
    id: 'finanzwirtschaft.modigliani_miller.wertvergleich',
    conceptId: 'modigliani_miller',
    officialNotation: "V_L, V_U",
    displayFormula: "$$V_L = V_U$$",
    intuition: "Im MM-Benchmark haben verschuldetes und unverschuldetes Unternehmen denselben Gesamtwert.",
    derivationSteps: [
        {
            "label": "Wertvergleich",
            "text": "02.02.2025                                             Georg-August-Universität Göttingen                                8",
            "math": "$$V_L = V_U$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu modigliani_miller","Wertvergleich"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Wertvergleich — Im MM-Benchmark haben verschuldetes und unverschuldetes Unternehmen denselben Ge",
    relatedTaskFamilies: ["finanzwirtschaft.taskfamily.modigliani_miller-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["finanzwirtschaft.modigliani_miller.v12-studip-pdf.p08.02-02-2025-georg-august-","finanzwirtschaft.modigliani_miller.v12-studip-pdf.p03.02-02-2025-georg-august-"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

