// ============================================================
// FORMULA CARDS — Internationale Wirtschaftsbeziehungen
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'internationale-wirtschaftsbeziehungen';

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
    id: 'internationale-wirtschaftsbeziehungen.handelsfakten.handelsquote',
    conceptId: 'handelsfakten',
    officialNotation: "X, M, BIP",
    displayFormula: "$$\\text{Handelsquote} = \\frac{X + M}{BIP}$$",
    intuition: "Misst die Offenheit einer Volkswirtschaft.",
    derivationSteps: [
        {
            "label": "Handelsquote",
            "text": "Allgemein: Neubewertung von politischen Risiken durch",
            "math": "$$\\text{Handelsquote} = \\frac{X + M}{BIP}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu handelsfakten","Handelsquote"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Handelsquote — Misst die Offenheit einer Volkswirtschaft.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.handelsfakten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p31.allgemein-neubewertung-v","internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p03.vorlesung-wird-begleitet"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.handelsfakten.terms_of_trade',
    conceptId: 'handelsfakten',
    officialNotation: "P_X, P_M",
    displayFormula: "$$ToT = \\frac{P_X}{P_M}$$",
    intuition: "Preis der Exporte relativ zu den Importen.",
    derivationSteps: [
        {
            "label": "Terms of Trade",
            "text": "Allgemein: Neubewertung von politischen Risiken durch",
            "math": "$$ToT = \\frac{P_X}{P_M}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu handelsfakten","Terms of Trade"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Terms of Trade — Preis der Exporte relativ zu den Importen.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.handelsfakten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p31.allgemein-neubewertung-v","internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p03.vorlesung-wird-begleitet"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.ricardo.opportunit_tskosten_von_x',
    conceptId: 'ricardo',
    officialNotation: "a_{LX}, a_{LY}",
    displayFormula: "$$OK_X = \\frac{a_{LX}}{a_{LY}}$$",
    intuition: "Arbeitsstunden für X relativ zu Y.",
    derivationSteps: [
        {
            "label": "Opportunitätskosten von X",
            "text": "zusätzliche Einheit Weizen aufgeben muss",
            "math": "$$OK_X = \\frac{a_{LX}}{a_{LY}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ricardo","Opportunitätskosten von X"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Opportunitätskosten von X — Arbeitsstunden für X relativ zu Y.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.ricardo-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p07.zusa-tzliche-einheit-wei","internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p20.kreickemeier-grundlagen-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.ricardo.spezialisierungsbedingung',
    conceptId: 'ricardo',
    officialNotation: "ricardo",
    displayFormula: "$$OK_X^{H} < OK_X^{F} \\Rightarrow H \\text{ exportiert } X$$",
    intuition: "Exportgut hat die geringeren relativen Kosten.",
    derivationSteps: [
        {
            "label": "Spezialisierungsbedingung",
            "text": "zusätzliche Einheit Weizen aufgeben muss",
            "math": "$$OK_X^{H} < OK_X^{F} \\Rightarrow H \\text{ exportiert } X$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu ricardo","Spezialisierungsbedingung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Spezialisierungsbedingung — Exportgut hat die geringeren relativen Kosten.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.ricardo-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p07.zusa-tzliche-einheit-wei","internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p20.kreickemeier-grundlagen-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.heckscher_ohlin.faktorreichlichkeit',
    conceptId: 'heckscher_ohlin',
    officialNotation: "K/L",
    displayFormula: "$$\\frac{K}{L}\\Big|_{H} > \\frac{K}{L}\\Big|_{F}$$",
    intuition: "Home ist relativ kapitalreich.",
    derivationSteps: [
        {
            "label": "Faktorreichlichkeit",
            "text": "Produktivitätsunterschiede zwischen den Ländern",
            "math": "$$\\frac{K}{L}\\Big|_{H} > \\frac{K}{L}\\Big|_{F}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu heckscher_ohlin","Faktorreichlichkeit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Faktorreichlichkeit — Home ist relativ kapitalreich.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.heckscher_ohlin-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p15.produktivita-tsunterschi","internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p23.gruppen-ist-reale-entloh"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.heckscher_ohlin.handelsrichtung',
    conceptId: 'heckscher_ohlin',
    officialNotation: "heckscher_ohlin",
    displayFormula: "$$H \\text{ exportiert das } K\\text{-intensive Gut}$$",
    intuition: "Direkte Anwendung des H-O-Theorems.",
    derivationSteps: [
        {
            "label": "Handelsrichtung",
            "text": "Produktivitätsunterschiede zwischen den Ländern",
            "math": "$$H \\text{ exportiert das } K\\text{-intensive Gut}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu heckscher_ohlin","Handelsrichtung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Handelsrichtung — Direkte Anwendung des H-O-Theorems.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.heckscher_ohlin-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p15.produktivita-tsunterschi","internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p23.gruppen-ist-reale-entloh"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.verteilung_handel.stolper_samuelson',
    conceptId: 'verteilung_handel',
    officialNotation: "r, w",
    displayFormula: "$$P_{K\\text{-intensiv}} \\uparrow \\Rightarrow r \\uparrow,\\ w \\downarrow$$",
    intuition: "Steigt der relative Preis des kapitalintensiven Gutes, gewinnt Kapital real und Arbeit verliert real.",
    derivationSteps: [
        {
            "label": "Stolper-Samuelson",
            "text": "kapitalreich (relative Aussage über beide Länder)",
            "math": "$$P_{K\\text{-intensiv}} \\uparrow \\Rightarrow r \\uparrow,\\ w \\downarrow$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verteilung_handel","Stolper-Samuelson"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Stolper-Samuelson — Steigt der relative Preis des kapitalintensiven Gutes, gewinnt Kapital real und ",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.verteilung_handel-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p07.kapitalreich-relative-au","internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p21.relativem-faktorangebot-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.verteilung_handel.verteilungslogik',
    conceptId: 'verteilung_handel',
    officialNotation: "verteilung_handel",
    displayFormula: "\\text{reichlicher Faktor} \\Rightarrow \\text{gewinnt relativ durch Handel}",
    intuition: "Politische Gewinner und Verlierer ergeben sich aus der Faktorlage des Landes.",
    derivationSteps: [
        {
            "label": "Verteilungslogik",
            "text": "kapitalreich (relative Aussage über beide Länder)",
            "math": "\\text{reichlicher Faktor} \\Rightarrow \\text{gewinnt relativ durch Handel}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verteilung_handel","Verteilungslogik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verteilungslogik — Politische Gewinner und Verlierer ergeben sich aus der Faktorlage des Landes.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.verteilung_handel-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p07.kapitalreich-relative-au","internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p21.relativem-faktorangebot-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.krugman.durchschnittskosten',
    conceptId: 'krugman',
    officialNotation: "F, q, c",
    displayFormula: "$$AC(q) = \\frac{F}{q} + c$$",
    intuition: "Fixkosten werden mit größerem Output verdünnt.",
    derivationSteps: [
        {
            "label": "Durchschnittskosten",
            "text": "I große Handelsvolumina zwischen ähnlichen Ländern",
            "math": "$$AC(q) = \\frac{F}{q} + c$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu krugman","Durchschnittskosten"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Durchschnittskosten — Fixkosten werden mit größerem Output verdünnt.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.krugman-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p22.i-gro-e-handelsvolumina-","internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p16.markt-aus-konstanter-bes"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.krugman.grubel_lloyd_index',
    conceptId: 'krugman',
    officialNotation: "krugman",
    displayFormula: "$$GL_i = 1 - \\frac{|X_i - M_i|}{X_i + M_i}$$",
    intuition: "Misst intraindustriellen Handel in Branche i.",
    derivationSteps: [
        {
            "label": "Grubel-Lloyd-Index",
            "text": "I große Handelsvolumina zwischen ähnlichen Ländern",
            "math": "$$GL_i = 1 - \\frac{|X_i - M_i|}{X_i + M_i}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu krugman","Grubel-Lloyd-Index"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Grubel-Lloyd-Index — Misst intraindustriellen Handel in Branche i.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.krugman-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p22.i-gro-e-handelsvolumina-","internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p16.markt-aus-konstanter-bes"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.gravitation.gravitation',
    conceptId: 'gravitation',
    officialNotation: "GDP_i, GDP_j, Dist_{ij}",
    displayFormula: "$$Trade_{ij} \\propto \\frac{GDP_i \\cdot GDP_j}{Dist_{ij}}$$",
    intuition: "Große Länder handeln viel, Distanz bremst.",
    derivationSteps: [
        {
            "label": "Gravitation",
            "text": "Markt aus (konstanter Bestand an Arbeitskräften)",
            "math": "$$Trade_{ij} \\propto \\frac{GDP_i \\cdot GDP_j}{Dist_{ij}}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gravitation","Gravitation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gravitation — Große Länder handeln viel, Distanz bremst.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.gravitation-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p16.markt-aus-konstanter-bes","internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p02.kreickemeier-grundlagen-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.gravitation.interpretation',
    conceptId: 'gravitation',
    officialNotation: "gravitation",
    displayFormula: "\\text{Größe} \\uparrow \\Rightarrow Trade \\uparrow,\\quad \\text{Distanz} \\uparrow \\Rightarrow Trade \\downarrow",
    intuition: "Richtung der Haupteffekte.",
    derivationSteps: [
        {
            "label": "Interpretation",
            "text": "Markt aus (konstanter Bestand an Arbeitskräften)",
            "math": "\\text{Größe} \\uparrow \\Rightarrow Trade \\uparrow,\\quad \\text{Distanz} \\uparrow \\Rightarrow Trade \\downarrow"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gravitation","Interpretation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Interpretation — Richtung der Haupteffekte.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.gravitation-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p16.markt-aus-konstanter-bes","internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p02.kreickemeier-grundlagen-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.tarifmodell.inlandspreis_mit_zoll',
    conceptId: 'tarifmodell',
    officialNotation: "tarifmodell",
    displayFormula: "$$P_{in} = P_w + t$$",
    intuition: "Preiswirkung im kleinen Land.",
    derivationSteps: [
        {
            "label": "Inlandspreis mit Zoll",
            "text": "Einführung: Modellrahmen",
            "math": "$$P_{in} = P_w + t$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu tarifmodell","Inlandspreis mit Zoll"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Inlandspreis mit Zoll — Preiswirkung im kleinen Land.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.tarifmodell-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p04.einfu-hrung-modellrahmen","internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p02.kreickemeier-grundlagen-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.tarifmodell.importmenge',
    conceptId: 'tarifmodell',
    officialNotation: "tarifmodell",
    displayFormula: "$$M = D(P_{in}) - S(P_{in})$$",
    intuition: "Importe als Lücke zwischen Nachfrage und Angebot.",
    derivationSteps: [
        {
            "label": "Importmenge",
            "text": "Einführung: Modellrahmen",
            "math": "$$M = D(P_{in}) - S(P_{in})$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu tarifmodell","Importmenge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Importmenge — Importe als Lücke zwischen Nachfrage und Angebot.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.tarifmodell-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p04.einfu-hrung-modellrahmen","internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p02.kreickemeier-grundlagen-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.quoten_sanktionen.quote_als_mengenrestriktion',
    conceptId: 'quoten_sanktionen',
    officialNotation: "quoten_sanktionen",
    displayFormula: "$$M \\leq \\bar M$$",
    intuition: "Importmenge wird direkt begrenzt.",
    derivationSteps: [
        {
            "label": "Quote als Mengenrestriktion",
            "text": "EU              pRUS                               EU",
            "math": "$$M \\leq \\bar M$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu quoten_sanktionen","Quote als Mengenrestriktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Quote als Mengenrestriktion — Importmenge wird direkt begrenzt.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.quoten_sanktionen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p03.eu-prus-eu","internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p06.fla-che-e-in-der-folgend"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.quoten_sanktionen.quotenrente',
    conceptId: 'quoten_sanktionen',
    officialNotation: "quoten_sanktionen",
    displayFormula: "$$\\text{Quotenrente} = (P_{in} - P_w)\\cdot M$$",
    intuition: "Erlös aus der künstlichen Verknappung.",
    derivationSteps: [
        {
            "label": "Quotenrente",
            "text": "EU              pRUS                               EU",
            "math": "$$\\text{Quotenrente} = (P_{in} - P_w)\\cdot M$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu quoten_sanktionen","Quotenrente"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Quotenrente — Erlös aus der künstlichen Verknappung.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.quoten_sanktionen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p03.eu-prus-eu","internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p06.fla-che-e-in-der-folgend"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.wto_integration.trade_creation',
    conceptId: 'wto_integration',
    officialNotation: "wto_integration",
    displayFormula: "$$\\Delta W > 0 \\text{ durch Ersatz teurer Inlandsproduktion}$$",
    intuition: "Zollunion erhöht Effizienz.",
    derivationSteps: [
        {
            "label": "Trade creation",
            "text": "Zollunion, Freihandelszone und Brexit",
            "math": "$$\\Delta W > 0 \\text{ durch Ersatz teurer Inlandsproduktion}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wto_integration","Trade creation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Trade creation — Zollunion erhöht Effizienz.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.wto_integration-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p17.zollunion-freihandelszon","internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p06.i-diskriminierung-gegen-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.wto_integration.trade_diversion',
    conceptId: 'wto_integration',
    officialNotation: "wto_integration",
    displayFormula: "$$\\Delta W < 0 \\text{ möglich durch Ersatz billiger Drittlandimporte}$$",
    intuition: "Präferenz kann Handel umlenken statt verbessern.",
    derivationSteps: [
        {
            "label": "Trade diversion",
            "text": "Zollunion, Freihandelszone und Brexit",
            "math": "$$\\Delta W < 0 \\text{ möglich durch Ersatz billiger Drittlandimporte}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wto_integration","Trade diversion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Trade diversion — Präferenz kann Handel umlenken statt verbessern.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.wto_integration-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p17.zollunion-freihandelszon","internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p06.i-diskriminierung-gegen-"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.wechselkurssysteme.realer_wechselkurs',
    conceptId: 'wechselkurssysteme',
    officialNotation: "E, P^*, P",
    displayFormula: "$$q = E \\cdot \\frac{P^*}{P}$$",
    intuition: "Ausländische Güter relativ zu inländischen Gütern.",
    derivationSteps: [
        {
            "label": "Realer Wechselkurs",
            "text": "Die absolute Änderung des Wechselkurses betrug",
            "math": "$$q = E \\cdot \\frac{P^*}{P}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wechselkurssysteme","Realer Wechselkurs"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Realer Wechselkurs — Ausländische Güter relativ zu inländischen Gütern.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.wechselkurssysteme-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p12.die-absolute-a-nderung-d","internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p26.1-iac-1-i-fac-eac"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.wechselkurssysteme.reale_abwertung',
    conceptId: 'wechselkurssysteme',
    officialNotation: "wechselkurssysteme",
    displayFormula: "$$q \\uparrow \\Rightarrow \\text{Wettbewerbsfähigkeit des Inlandes steigt}$$",
    intuition: "Exportgüter werden relativ günstiger.",
    derivationSteps: [
        {
            "label": "Reale Abwertung",
            "text": "Die absolute Änderung des Wechselkurses betrug",
            "math": "$$q \\uparrow \\Rightarrow \\text{Wettbewerbsfähigkeit des Inlandes steigt}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu wechselkurssysteme","Reale Abwertung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Reale Abwertung — Exportgüter werden relativ günstiger.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.wechselkurssysteme-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p12.die-absolute-a-nderung-d","internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p26.1-iac-1-i-fac-eac"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.zinsparitaet.gedeckte_zinsparit_t',
    conceptId: 'zinsparitaet',
    officialNotation: "i, i^*, F, E",
    displayFormula: "$$1+i = (1+i^*)\\frac{F}{E}$$",
    intuition: "Bezieht Termin- und Kassakurs auf beobachtbare Arbitrage.",
    derivationSteps: [
        {
            "label": "Gedeckte Zinsparität",
            "text": "g                                  PEUR",
            "math": "$$1+i = (1+i^*)\\frac{F}{E}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zinsparitaet","Gedeckte Zinsparität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gedeckte Zinsparität — Bezieht Termin- und Kassakurs auf beobachtbare Arbitrage.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.zinsparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p09.g-peur","internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p04.1-iac-1-i"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.zinsparitaet.uip',
    conceptId: 'zinsparitaet',
    officialNotation: "E^e",
    displayFormula: "$$i = i^* + \\frac{E^e - E}{E}$$",
    intuition: "Erwarteter Auslandsertrag muss dem Inlandszins entsprechen.",
    derivationSteps: [
        {
            "label": "UIP",
            "text": "g                                  PEUR",
            "math": "$$i = i^* + \\frac{E^e - E}{E}$$"
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
    examShortcut: "Merke: UIP — Erwarteter Auslandsertrag muss dem Inlandszins entsprechen.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.zinsparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p09.g-peur","internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p04.1-iac-1-i"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.zinsparitaet.approximation',
    conceptId: 'zinsparitaet',
    officialNotation: "zinsparitaet",
    displayFormula: "$$i - i^* \\approx \\frac{E^e - E}{E}$$",
    intuition: "Prüfungsnahe Kurzform der UIP-Logik.",
    derivationSteps: [
        {
            "label": "Approximation",
            "text": "g                                  PEUR",
            "math": "$$i - i^* \\approx \\frac{E^e - E}{E}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu zinsparitaet","Approximation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Approximation — Prüfungsnahe Kurzform der UIP-Logik.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.zinsparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p09.g-peur","internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p04.1-iac-1-i"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.kaufkraftparitaet.gesetz_des_einheitlichen_preises',
    conceptId: 'kaufkraftparitaet',
    officialNotation: "kaufkraftparitaet",
    displayFormula: "$$P = E \\cdot P^*$$",
    intuition: "Preisgleichheit identischer handelbarer Güter im Grenzfall.",
    derivationSteps: [
        {
            "label": "Gesetz des einheitlichen Preises",
            "text": "The index demonstrates the",
            "math": "$$P = E \\cdot P^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu kaufkraftparitaet","Gesetz des einheitlichen Preises"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gesetz des einheitlichen Preises — Preisgleichheit identischer handelbarer Güter im Grenzfall.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.kaufkraftparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p17.the-index-demonstrates-t","internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p13.seite-13"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.kaufkraftparitaet.absolute_ppp',
    conceptId: 'kaufkraftparitaet',
    officialNotation: "P, P^*",
    displayFormula: "$$E = \\frac{P}{P^*}$$",
    intuition: "Preisniveauverhältnis bestimmt den nominalen Kurs.",
    derivationSteps: [
        {
            "label": "Absolute PPP",
            "text": "The index demonstrates the",
            "math": "$$E = \\frac{P}{P^*}$$"
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
    examShortcut: "Merke: Absolute PPP — Preisniveauverhältnis bestimmt den nominalen Kurs.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.kaufkraftparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p17.the-index-demonstrates-t","internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p13.seite-13"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.kaufkraftparitaet.relative_ppp',
    conceptId: 'kaufkraftparitaet',
    officialNotation: "\\pi, \\pi^*",
    displayFormula: "$$\\frac{\\Delta E}{E} \\approx \\pi - \\pi^*$$",
    intuition: "Inflationsdifferenz als Abwertungsrate.",
    derivationSteps: [
        {
            "label": "Relative PPP",
            "text": "The index demonstrates the",
            "math": "$$\\frac{\\Delta E}{E} \\approx \\pi - \\pi^*$$"
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
    examShortcut: "Merke: Relative PPP — Inflationsdifferenz als Abwertungsrate.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.kaufkraftparitaet-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p17.the-index-demonstrates-t","internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p13.seite-13"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.monetaerer_ansatz.fisher_effekt',
    conceptId: 'monetaerer_ansatz',
    officialNotation: "monetaerer_ansatz",
    displayFormula: "$$i \\approx r + \\pi^e$$",
    intuition: "Nominalzins zerfällt in Realzins und erwartete Inflation.",
    derivationSteps: [
        {
            "label": "Fisher-Effekt",
            "text": "Weltzinssatz r∗ :",
            "math": "$$i \\approx r + \\pi^e$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monetaerer_ansatz","Fisher-Effekt"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fisher-Effekt — Nominalzins zerfällt in Realzins und erwartete Inflation.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.monetaerer_ansatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p16.weltzinssatz-r","internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p04.l-eur-yeur-l-us-yus"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.monetaerer_ansatz.relative_ppp',
    conceptId: 'monetaerer_ansatz',
    officialNotation: "monetaerer_ansatz",
    displayFormula: "$$\\Delta E/E \\approx \\pi - \\pi^*$$",
    intuition: "Inflationsdifferenz als langfristige Abwertungsrate.",
    derivationSteps: [
        {
            "label": "Relative PPP",
            "text": "Weltzinssatz r∗ :",
            "math": "$$\\Delta E/E \\approx \\pi - \\pi^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monetaerer_ansatz","Relative PPP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Relative PPP — Inflationsdifferenz als langfristige Abwertungsrate.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.monetaerer_ansatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p16.weltzinssatz-r","internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p04.l-eur-yeur-l-us-yus"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.monetaerer_ansatz.reale_zinsparit_t',
    conceptId: 'monetaerer_ansatz',
    officialNotation: "monetaerer_ansatz",
    displayFormula: "$$r \\approx r^*$$",
    intuition: "Langfristige Angleichung realer Renditen.",
    derivationSteps: [
        {
            "label": "Reale Zinsparität",
            "text": "Weltzinssatz r∗ :",
            "math": "$$r \\approx r^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu monetaerer_ansatz","Reale Zinsparität"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Reale Zinsparität — Langfristige Angleichung realer Renditen.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.monetaerer_ansatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p16.weltzinssatz-r","internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p04.l-eur-yeur-l-us-yus"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.overshooting.uip_logik',
    conceptId: 'overshooting',
    officialNotation: "overshooting",
    displayFormula: "$$i = i^* + \\frac{E^e - E}{E}$$",
    intuition: "Niedrigerer Inlandszins verlangt erwartete Aufwertung des Inlandes.",
    derivationSteps: [
        {
            "label": "UIP-Logik",
            "text": "Erklärung von Wechselkursen",
            "math": "$$i = i^* + \\frac{E^e - E}{E}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu overshooting","UIP-Logik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: UIP-Logik — Niedrigerer Inlandszins verlangt erwartete Aufwertung des Inlandes.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.overshooting-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p27.erkla-rung-von-wechselku","internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p16.kurzen-und-der-langen-fr"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.overshooting.overshooting_idee',
    conceptId: 'overshooting',
    officialNotation: "overshooting",
    displayFormula: "$$E_{kurz} > E_{lang}$$",
    intuition: "Kurzfristiger Kurs liegt über dem langfristigen Endwert.",
    derivationSteps: [
        {
            "label": "Overshooting-Idee",
            "text": "Erklärung von Wechselkursen",
            "math": "$$E_{kurz} > E_{lang}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu overshooting","Overshooting-Idee"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Overshooting-Idee — Kurzfristiger Kurs liegt über dem langfristigen Endwert.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.overshooting-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p27.erkla-rung-von-wechselku","internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p16.kurzen-und-der-langen-fr"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.trilemma.trilemma',
    conceptId: 'trilemma',
    officialNotation: "trilemma",
    displayFormula: "$$\\{\\text{Fixkurs},\\ \\text{Kapitalmobilität},\\ \\text{Geldpolitik}\\} \\Rightarrow \\text{nur zwei zugleich}$$",
    intuition: "Makropolitischer Zielkonflikt.",
    derivationSteps: [
        {
            "label": "Trilemma",
            "text": "q            A∗     A",
            "math": "$$\\{\\text{Fixkurs},\\ \\text{Kapitalmobilität},\\ \\text{Geldpolitik}\\} \\Rightarrow \\text{nur zwei zugleich}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu trilemma","Trilemma"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Trilemma — Makropolitischer Zielkonflikt.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.trilemma-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p15.q-a-a","internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p22.beispiele-china-und-arge"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.trilemma.fixkurs_folge',
    conceptId: 'trilemma',
    officialNotation: "trilemma",
    displayFormula: "$$\\text{Fixkurs} + \\text{Kapitalmobilität} \\Rightarrow i = i^*$$",
    intuition: "Monetäre Autonomie geht verloren.",
    derivationSteps: [
        {
            "label": "Fixkurs-Folge",
            "text": "q            A∗     A",
            "math": "$$\\text{Fixkurs} + \\text{Kapitalmobilität} \\Rightarrow i = i^*$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu trilemma","Fixkurs-Folge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fixkurs-Folge — Monetäre Autonomie geht verloren.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.trilemma-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p15.q-a-a","internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p22.beispiele-china-und-arge"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.balassa_samuelson.balassa_samuelson_kette',
    conceptId: 'balassa_samuelson',
    officialNotation: "balassa_samuelson",
    displayFormula: "$$A_T \\uparrow \\Rightarrow w \\uparrow \\Rightarrow P_N \\uparrow \\Rightarrow q \\text{ verändert sich systematisch}$$",
    intuition: "Produktivität im handelbaren Sektor treibt relative Preise.",
    derivationSteps: [
        {
            "label": "Balassa-Samuelson-Kette",
            "text": "Feenstra/Taylor, International Economics, 5e, © 2021 Worth Publishers",
            "math": "$$A_T \\uparrow \\Rightarrow w \\uparrow \\Rightarrow P_N \\uparrow \\Rightarrow q \\text{ verändert sich systematisch}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu balassa_samuelson","Balassa-Samuelson-Kette"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Balassa-Samuelson-Kette — Produktivität im handelbaren Sektor treibt relative Preise.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.balassa_samuelson-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p05.feenstra-taylor-internat","internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p01.i-das-trilemma-der-wa-hr"]
  }),
  card({
    id: 'internationale-wirtschaftsbeziehungen.balassa_samuelson.interpretation',
    conceptId: 'balassa_samuelson',
    officialNotation: "balassa_samuelson",
    displayFormula: "\\text{PPP-Abweichung} \\neq \\text{automatisch Fehlbewertung}",
    intuition: "Ein Teil der Abweichung kann strukturell sein.",
    derivationSteps: [
        {
            "label": "Interpretation",
            "text": "Feenstra/Taylor, International Economics, 5e, © 2021 Worth Publishers",
            "math": "\\text{PPP-Abweichung} \\neq \\text{automatisch Fehlbewertung}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu balassa_samuelson","Interpretation"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Interpretation — Ein Teil der Abweichung kann strukturell sein.",
    relatedTaskFamilies: ["internationale-wirtschaftsbeziehungen.taskfamily.balassa_samuelson-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p05.feenstra-taylor-internat","internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p01.i-das-trilemma-der-wa-hr"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

