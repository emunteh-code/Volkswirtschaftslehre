// ============================================================
// FORMULA CARDS — Jahresabschluss
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'jahresabschluss';

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
    id: 'jahresabschluss.rechnungswesen_intro.bilanzgleichung',
    conceptId: 'rechnungswesen_intro',
    officialNotation: "rechnungswesen_intro",
    displayFormula: "$$A = P = EK + FK$$",
    intuition: "Mittelverwendung entspricht Mittelherkunft.",
    derivationSteps: [
        {
            "label": "Bilanzgleichung",
            "text": "überarbeitete Auflage, Schäffer-Poeschel Verlag Stuttgart.",
            "math": "$$A = P = EK + FK$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rechnungswesen_intro","Bilanzgleichung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bilanzgleichung — Mittelverwendung entspricht Mittelherkunft.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rechnungswesen_intro-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p09.berarbeitete-auflage-sch","jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p07.ws-2024-25-jahresabschlu"]
  }),
  card({
    id: 'jahresabschluss.rechnungswesen_intro.jahresergebnis',
    conceptId: 'rechnungswesen_intro',
    officialNotation: "rechnungswesen_intro",
    displayFormula: "$$Jahresergebnis = Erträge - Aufwendungen$$",
    intuition: "Die GuV erklärt die Erfolgsänderung der Periode.",
    derivationSteps: [
        {
            "label": "Jahresergebnis",
            "text": "überarbeitete Auflage, Schäffer-Poeschel Verlag Stuttgart.",
            "math": "$$Jahresergebnis = Erträge - Aufwendungen$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rechnungswesen_intro","Jahresergebnis"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Jahresergebnis — Die GuV erklärt die Erfolgsänderung der Periode.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rechnungswesen_intro-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p09.berarbeitete-auflage-sch","jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p07.ws-2024-25-jahresabschlu"]
  }),
  card({
    id: 'jahresabschluss.rechnungswesen_intro.ek_ver_nderung',
    conceptId: 'rechnungswesen_intro',
    officialNotation: "rechnungswesen_intro",
    displayFormula: "$$\\Delta EK = Jahresergebnis \\pm \\text{Ergebnisverwendung}$$",
    intuition: "GuV und Bilanz sind über das Eigenkapital verbunden.",
    derivationSteps: [
        {
            "label": "EK-Veränderung",
            "text": "überarbeitete Auflage, Schäffer-Poeschel Verlag Stuttgart.",
            "math": "$$\\Delta EK = Jahresergebnis \\pm \\text{Ergebnisverwendung}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rechnungswesen_intro","EK-Veränderung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: EK-Veränderung — GuV und Bilanz sind über das Eigenkapital verbunden.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rechnungswesen_intro-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p09.berarbeitete-auflage-sch","jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p07.ws-2024-25-jahresabschlu"]
  }),
  card({
    id: 'jahresabschluss.gob_rechtsgrundlagen.realisationsprinzip',
    conceptId: 'gob_rechtsgrundlagen',
    officialNotation: "gob_rechtsgrundlagen",
    displayFormula: "\\text{Gewinne erst bei Realisation}",
    intuition: "Noch nicht realisierte Gewinne dürfen grundsätzlich nicht vorgezogen werden.",
    derivationSteps: [
        {
            "label": "Realisationsprinzip",
            "text": "2.2 VON DER INVENTUR ZUR BILANZ – DIE BILANZ",
            "math": "\\text{Gewinne erst bei Realisation}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gob_rechtsgrundlagen","Realisationsprinzip"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Realisationsprinzip — Noch nicht realisierte Gewinne dürfen grundsätzlich nicht vorgezogen werden.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.gob_rechtsgrundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p22.2-2-von-der-inventur-zur","jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p29.ansatz-mit-den-fortgef-h"]
  }),
  card({
    id: 'jahresabschluss.gob_rechtsgrundlagen.imparit_tsprinzip',
    conceptId: 'gob_rechtsgrundlagen',
    officialNotation: "gob_rechtsgrundlagen",
    displayFormula: "\\text{Verluste früh, Gewinne spät}",
    intuition: "Asymmetrische Vorsicht im HGB.",
    derivationSteps: [
        {
            "label": "Imparitätsprinzip",
            "text": "2.2 VON DER INVENTUR ZUR BILANZ – DIE BILANZ",
            "math": "\\text{Verluste früh, Gewinne spät}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gob_rechtsgrundlagen","Imparitätsprinzip"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Imparitätsprinzip — Asymmetrische Vorsicht im HGB.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.gob_rechtsgrundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p22.2-2-von-der-inventur-zur","jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p29.ansatz-mit-den-fortgef-h"]
  }),
  card({
    id: 'jahresabschluss.gob_rechtsgrundlagen.latente_steuern_richtung',
    conceptId: 'gob_rechtsgrundlagen',
    officialNotation: "gob_rechtsgrundlagen",
    displayFormula: "\\Delta_{HGB-Steuer} > 0 \\Rightarrow \\text{passive latent};\\; \\Delta_{HGB-Steuer} < 0 \\Rightarrow \\text{aktive latent}",
    intuition: "Prüfungsnaher Merksatz zur Richtung zukünftiger Steuermehr-/-minderbelastung.",
    derivationSteps: [
        {
            "label": "Latente Steuern (Richtung)",
            "text": "2.2 VON DER INVENTUR ZUR BILANZ – DIE BILANZ",
            "math": "\\Delta_{HGB-Steuer} > 0 \\Rightarrow \\text{passive latent};\\; \\Delta_{HGB-Steuer} < 0 \\Rightarrow \\text{aktive latent}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu gob_rechtsgrundlagen","Latente Steuern (Richtung)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Latente Steuern (Richtung) — Prüfungsnaher Merksatz zur Richtung zukünftiger Steuermehr-/-minderbelastung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.gob_rechtsgrundlagen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p22.2-2-von-der-inventur-zur","jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p29.ansatz-mit-den-fortgef-h"]
  }),
  card({
    id: 'jahresabschluss.inventur_inventar_bilanzansatz.inventurfolge',
    conceptId: 'inventur_inventar_bilanzansatz',
    officialNotation: "inventur_inventar_bilanzansatz",
    displayFormula: "\\text{Inventur} \\rightarrow \\text{Inventar} \\rightarrow \\text{Bilanz}",
    intuition: "Vom Einzelbestand zur Abschlussverdichtung.",
    derivationSteps: [
        {
            "label": "Inventurfolge",
            "text": "2.1 RECHTSGRUNDLAGEN - RECHTSFORMEN",
            "math": "\\text{Inventur} \\rightarrow \\text{Inventar} \\rightarrow \\text{Bilanz}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inventur_inventar_bilanzansatz","Inventurfolge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Inventurfolge — Vom Einzelbestand zur Abschlussverdichtung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.inventur_inventar_bilanzansatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p08.2-1-rechtsgrundlagen-rec","jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p14.2-1-rechtsgrundlagen-sys"]
  }),
  card({
    id: 'jahresabschluss.inventur_inventar_bilanzansatz.pr_fungsfolge',
    conceptId: 'inventur_inventar_bilanzansatz',
    officialNotation: "inventur_inventar_bilanzansatz",
    displayFormula: "\\text{Ansatz} \\rightarrow \\text{Bewertung}",
    intuition: "Existenzfrage vor Wertfrage.",
    derivationSteps: [
        {
            "label": "Prüfungsfolge",
            "text": "2.1 RECHTSGRUNDLAGEN - RECHTSFORMEN",
            "math": "\\text{Ansatz} \\rightarrow \\text{Bewertung}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inventur_inventar_bilanzansatz","Prüfungsfolge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Prüfungsfolge — Existenzfrage vor Wertfrage.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.inventur_inventar_bilanzansatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p08.2-1-rechtsgrundlagen-rec","jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p14.2-1-rechtsgrundlagen-sys"]
  }),
  card({
    id: 'jahresabschluss.inventur_inventar_bilanzansatz.abschlusskette',
    conceptId: 'inventur_inventar_bilanzansatz',
    officialNotation: "inventur_inventar_bilanzansatz",
    displayFormula: "\\text{Inventur} \\rightarrow \\text{Inventar} \\rightarrow \\text{Ansatz} \\rightarrow \\text{Bewertung} \\rightarrow \\text{Ausweis}",
    intuition: "Vom Rohbestand bis zur sichtbaren Abschlusswirkung.",
    derivationSteps: [
        {
            "label": "Abschlusskette",
            "text": "2.1 RECHTSGRUNDLAGEN - RECHTSFORMEN",
            "math": "\\text{Inventur} \\rightarrow \\text{Inventar} \\rightarrow \\text{Ansatz} \\rightarrow \\text{Bewertung} \\rightarrow \\text{Ausweis}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu inventur_inventar_bilanzansatz","Abschlusskette"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Abschlusskette — Vom Rohbestand bis zur sichtbaren Abschlusswirkung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.inventur_inventar_bilanzansatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p08.2-1-rechtsgrundlagen-rec","jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p14.2-1-rechtsgrundlagen-sys"]
  }),
  card({
    id: 'jahresabschluss.buchen_konten.aktivkonto',
    conceptId: 'buchen_konten',
    officialNotation: "buchen_konten",
    displayFormula: "\\text{AB im Soll,\\ Zugänge Soll,\\ Abgänge Haben}",
    intuition: "Grundlogik eines Aktivkontos.",
    derivationSteps: [
        {
            "label": "Aktivkonto",
            "text": "3.3 BILANZIELLE WERTBEWEGUNGEN – DOPPELTE BUCHFÜHRUNG",
            "math": "\\text{AB im Soll,\\ Zugänge Soll,\\ Abgänge Haben}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu buchen_konten","Aktivkonto"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Aktivkonto — Grundlogik eines Aktivkontos.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.buchen_konten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.buchen_konten.kapitel3-pdf.p23.3-3-bilanzielle-wertbewe","jahresabschluss.buchen_konten.kapitel3-pdf.p14.ab-ab"]
  }),
  card({
    id: 'jahresabschluss.buchen_konten.passivkonto',
    conceptId: 'buchen_konten',
    officialNotation: "buchen_konten",
    displayFormula: "\\text{AB im Haben,\\ Zugänge Haben,\\ Abgänge Soll}",
    intuition: "Spiegelbildliche Logik des Passivkontos.",
    derivationSteps: [
        {
            "label": "Passivkonto",
            "text": "3.3 BILANZIELLE WERTBEWEGUNGEN – DOPPELTE BUCHFÜHRUNG",
            "math": "\\text{AB im Haben,\\ Zugänge Haben,\\ Abgänge Soll}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu buchen_konten","Passivkonto"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Passivkonto — Spiegelbildliche Logik des Passivkontos.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.buchen_konten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.buchen_konten.kapitel3-pdf.p23.3-3-bilanzielle-wertbewe","jahresabschluss.buchen_konten.kapitel3-pdf.p14.ab-ab"]
  }),
  card({
    id: 'jahresabschluss.buchen_konten.buchungssatz',
    conceptId: 'buchen_konten',
    officialNotation: "buchen_konten",
    displayFormula: "\\text{Soll an Haben}",
    intuition: "Jeder Geschäftsvorfall berührt mindestens zwei Konten.",
    derivationSteps: [
        {
            "label": "Buchungssatz",
            "text": "3.3 BILANZIELLE WERTBEWEGUNGEN – DOPPELTE BUCHFÜHRUNG",
            "math": "\\text{Soll an Haben}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu buchen_konten","Buchungssatz"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Buchungssatz — Jeder Geschäftsvorfall berührt mindestens zwei Konten.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.buchen_konten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.buchen_konten.kapitel3-pdf.p23.3-3-bilanzielle-wertbewe","jahresabschluss.buchen_konten.kapitel3-pdf.p14.ab-ab"]
  }),
  card({
    id: 'jahresabschluss.buchfuehrung_orga.belegprinzip',
    conceptId: 'buchfuehrung_orga',
    officialNotation: "buchfuehrung_orga",
    displayFormula: "\\text{Keine Buchung ohne Beleg}",
    intuition: "Organisatorischer Kern ordnungsmäßiger Buchführung.",
    derivationSteps: [
        {
            "label": "Belegprinzip",
            "text": "4.3 BELEGORGANISATION – GRUNDLAGEN",
            "math": "\\text{Keine Buchung ohne Beleg}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu buchfuehrung_orga","Belegprinzip"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Belegprinzip — Organisatorischer Kern ordnungsmäßiger Buchführung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.buchfuehrung_orga-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p12.4-3-belegorganisation-gr","jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p10.kontenrahmens-in-konteng"]
  }),
  card({
    id: 'jahresabschluss.buchfuehrung_orga.systemlogik',
    conceptId: 'buchfuehrung_orga',
    officialNotation: "buchfuehrung_orga",
    displayFormula: "\\text{chronologisch} \\rightarrow \\text{sachlich geordnet}",
    intuition: "Vom Grundbuch zum Hauptbuch.",
    derivationSteps: [
        {
            "label": "Systemlogik",
            "text": "4.3 BELEGORGANISATION – GRUNDLAGEN",
            "math": "\\text{chronologisch} \\rightarrow \\text{sachlich geordnet}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu buchfuehrung_orga","Systemlogik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Systemlogik — Vom Grundbuch zum Hauptbuch.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.buchfuehrung_orga-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p12.4-3-belegorganisation-gr","jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p10.kontenrahmens-in-konteng"]
  }),
  card({
    id: 'jahresabschluss.buchfuehrung_orga.nebenb_cher',
    conceptId: 'buchfuehrung_orga',
    officialNotation: "buchfuehrung_orga",
    displayFormula: "\\sum \\text{Nebenbuch} = \\text{Sammelkonto}",
    intuition: "Detail- und Hauptbuch müssen konsistent sein.",
    derivationSteps: [
        {
            "label": "Nebenbücher",
            "text": "4.3 BELEGORGANISATION – GRUNDLAGEN",
            "math": "\\sum \\text{Nebenbuch} = \\text{Sammelkonto}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu buchfuehrung_orga","Nebenbücher"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Nebenbücher — Detail- und Hauptbuch müssen konsistent sein.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.buchfuehrung_orga-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p12.4-3-belegorganisation-gr","jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p10.kontenrahmens-in-konteng"]
  }),
  card({
    id: 'jahresabschluss.anlagevermoegen.lineare_afa',
    conceptId: 'anlagevermoegen',
    officialNotation: "anlagevermoegen",
    displayFormula: "$$AfA = \\frac{AK - RW}{n}$$",
    intuition: "Jährlicher planmäßiger Abschreibungsbetrag.",
    derivationSteps: [
        {
            "label": "Lineare AfA",
            "text": "DIE BILANZ – BILANZPOSITION",
            "math": "$$AfA = \\frac{AK - RW}{n}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu anlagevermoegen","Lineare AfA"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lineare AfA — Jährlicher planmäßiger Abschreibungsbetrag.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.anlagevermoegen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.anlagevermoegen.kapitel5-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.anlagevermoegen.kapitel5-pdf.p13.t1-120-000-15-000-105-00"]
  }),
  card({
    id: 'jahresabschluss.anlagevermoegen.buchwert',
    conceptId: 'anlagevermoegen',
    officialNotation: "anlagevermoegen",
    displayFormula: "$$BW_t = AK - t \\cdot AfA$$",
    intuition: "Fortgeführter Wert nach t Jahren.",
    derivationSteps: [
        {
            "label": "Buchwert",
            "text": "DIE BILANZ – BILANZPOSITION",
            "math": "$$BW_t = AK - t \\cdot AfA$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu anlagevermoegen","Buchwert"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Buchwert — Fortgeführter Wert nach t Jahren.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.anlagevermoegen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.anlagevermoegen.kapitel5-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.anlagevermoegen.kapitel5-pdf.p13.t1-120-000-15-000-105-00"]
  }),
  card({
    id: 'jahresabschluss.anlagevermoegen.lineare_afa_merksatz',
    conceptId: 'anlagevermoegen',
    officialNotation: "",
    displayFormula: "$$AfA = \\frac{AK - RW}{n}$$",
    intuition: "Jährlicher planmäßiger Abschreibungsbetrag.",
    derivationSteps: [
        {
            "label": "Lineare AfA (Merksatz)",
            "text": "DIE BILANZ – BILANZPOSITION",
            "math": "$$AfA = \\frac{AK - RW}{n}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu anlagevermoegen","Lineare AfA (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lineare AfA (Merksatz) — Jährlicher planmäßiger Abschreibungsbetrag.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.anlagevermoegen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.anlagevermoegen.kapitel5-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.anlagevermoegen.kapitel5-pdf.p13.t1-120-000-15-000-105-00"]
  }),
  card({
    id: 'jahresabschluss.umlauf_bewertung_verfahren.strenges_niederstwertprinzip',
    conceptId: 'umlauf_bewertung_verfahren',
    officialNotation: "umlauf_bewertung_verfahren",
    displayFormula: "\\text{Bilanzwert} = \\min(AK,\\ beizulegender\\ Wert)",
    intuition: "Beim Umlaufvermögen zählt stets der niedrigere Wert.",
    derivationSteps: [
        {
            "label": "Strenges Niederstwertprinzip",
            "text": "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – FIFO-METHODE (FIRST IN = FIRST OUT)",
            "math": "\\text{Bilanzwert} = \\min(AK,\\ beizulegender\\ Wert)"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu umlauf_bewertung_verfahren","Strenges Niederstwertprinzip"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Strenges Niederstwertprinzip — Beim Umlaufvermögen zählt stets der niedrigere Wert.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.umlauf_bewertung_verfahren-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p10.6-2-bewertungsvereinfach","jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p18.aufwendungen-f-rohstoffe"]
  }),
  card({
    id: 'jahresabschluss.umlauf_bewertung_verfahren.durchschnittspreis',
    conceptId: 'umlauf_bewertung_verfahren',
    officialNotation: "umlauf_bewertung_verfahren",
    displayFormula: "$$\\bar p = \\frac{\\sum Anschaffungskosten}{\\sum Menge}$$",
    intuition: "Typische Bewertungsvereinfachung.",
    derivationSteps: [
        {
            "label": "Durchschnittspreis",
            "text": "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – FIFO-METHODE (FIRST IN = FIRST OUT)",
            "math": "$$\\bar p = \\frac{\\sum Anschaffungskosten}{\\sum Menge}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu umlauf_bewertung_verfahren","Durchschnittspreis"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Durchschnittspreis — Typische Bewertungsvereinfachung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.umlauf_bewertung_verfahren-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p10.6-2-bewertungsvereinfach","jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p18.aufwendungen-f-rohstoffe"]
  }),
  card({
    id: 'jahresabschluss.umlauf_bewertung_verfahren.fifo_verbrauch',
    conceptId: 'umlauf_bewertung_verfahren',
    officialNotation: "umlauf_bewertung_verfahren",
    displayFormula: "\\text{Verbrauch} = \\text{älteste Zugänge zuerst}",
    intuition: "Endbestand enthält die jüngsten Einheiten.",
    derivationSteps: [
        {
            "label": "FIFO-Verbrauch",
            "text": "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – FIFO-METHODE (FIRST IN = FIRST OUT)",
            "math": "\\text{Verbrauch} = \\text{älteste Zugänge zuerst}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu umlauf_bewertung_verfahren","FIFO-Verbrauch"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: FIFO-Verbrauch — Endbestand enthält die jüngsten Einheiten.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.umlauf_bewertung_verfahren-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p10.6-2-bewertungsvereinfach","jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p18.aufwendungen-f-rohstoffe"]
  }),
  card({
    id: 'jahresabschluss.werkstoffe_erzeugnisse_buchungen.inventurmethode',
    conceptId: 'werkstoffe_erzeugnisse_buchungen',
    officialNotation: "werkstoffe_erzeugnisse_buchungen",
    displayFormula: "\\text{Verbrauch} = AB + Zugänge - SB",
    intuition: "Verbrauchsermittlung über Bestandvergleich.",
    derivationSteps: [
        {
            "label": "Inventurmethode",
            "text": "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – ÜBERSICHT",
            "math": "\\text{Verbrauch} = AB + Zugänge - SB"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu werkstoffe_erzeugnisse_buchungen","Inventurmethode"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Inventurmethode — Verbrauchsermittlung über Bestandvergleich.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.werkstoffe_erzeugnisse_buchungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p07.6-2-bewertungsvereinfach","jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p12.2000-rohstoffe-an-4400-v"]
  }),
  card({
    id: 'jahresabschluss.werkstoffe_erzeugnisse_buchungen.fortschreibung',
    conceptId: 'werkstoffe_erzeugnisse_buchungen',
    officialNotation: "werkstoffe_erzeugnisse_buchungen",
    displayFormula: "\\text{laufend: Material an Rohstoffe}",
    intuition: "Verbrauch wird bei jeder Entnahme direkt erfasst.",
    derivationSteps: [
        {
            "label": "Fortschreibung",
            "text": "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – ÜBERSICHT",
            "math": "\\text{laufend: Material an Rohstoffe}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu werkstoffe_erzeugnisse_buchungen","Fortschreibung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Fortschreibung — Verbrauch wird bei jeder Entnahme direkt erfasst.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.werkstoffe_erzeugnisse_buchungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p07.6-2-bewertungsvereinfach","jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p12.2000-rohstoffe-an-4400-v"]
  }),
  card({
    id: 'jahresabschluss.werkstoffe_erzeugnisse_buchungen.bestandsver_nderung',
    conceptId: 'werkstoffe_erzeugnisse_buchungen',
    officialNotation: "werkstoffe_erzeugnisse_buchungen",
    displayFormula: "\\Delta Bestand = SB - AB",
    intuition: "Steuert die Erfolgswirkung bei Erzeugnissen.",
    derivationSteps: [
        {
            "label": "Bestandsveränderung",
            "text": "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – ÜBERSICHT",
            "math": "\\Delta Bestand = SB - AB"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu werkstoffe_erzeugnisse_buchungen","Bestandsveränderung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bestandsveränderung — Steuert die Erfolgswirkung bei Erzeugnissen.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.werkstoffe_erzeugnisse_buchungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p07.6-2-bewertungsvereinfach","jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p12.2000-rohstoffe-an-4400-v"]
  }),
  card({
    id: 'jahresabschluss.umlauf_waren_ust.zahllast',
    conceptId: 'umlauf_waren_ust',
    officialNotation: "umlauf_waren_ust",
    displayFormula: "$$Zahllast = USt - VSt$$",
    intuition: "Abzuführende Umsatzsteuer nach Vorsteuerabzug.",
    derivationSteps: [
        {
            "label": "Zahllast",
            "text": "S                Umsatzsteuer-Abschlusskonto                                        H",
            "math": "$$Zahllast = USt - VSt$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu umlauf_waren_ust","Zahllast"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zahllast — Abzuführende Umsatzsteuer nach Vorsteuerabzug.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.umlauf_waren_ust-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p20.s-umsatzsteuer-abschluss","jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p18.2800-bank-833-an-5000-um"]
  }),
  card({
    id: 'jahresabschluss.umlauf_waren_ust.netto_aus_brutto',
    conceptId: 'umlauf_waren_ust',
    officialNotation: "umlauf_waren_ust",
    displayFormula: "$$Netto = \\frac{Brutto}{1 + Steuersatz}$$",
    intuition: "Hilft bei Skonto- und Umsatzsteuerfällen.",
    derivationSteps: [
        {
            "label": "Netto aus Brutto",
            "text": "S                Umsatzsteuer-Abschlusskonto                                        H",
            "math": "$$Netto = \\frac{Brutto}{1 + Steuersatz}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu umlauf_waren_ust","Netto aus Brutto"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Netto aus Brutto — Hilft bei Skonto- und Umsatzsteuerfällen.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.umlauf_waren_ust-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p20.s-umsatzsteuer-abschluss","jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p18.2800-bank-833-an-5000-um"]
  }),
  card({
    id: 'jahresabschluss.umlauf_waren_ust.zahllast_merksatz',
    conceptId: 'umlauf_waren_ust',
    officialNotation: "",
    displayFormula: "$$Zahllast = USt - VSt$$",
    intuition: "Abzuführende Umsatzsteuer nach Vorsteuerabzug.",
    derivationSteps: [
        {
            "label": "Zahllast (Merksatz)",
            "text": "S                Umsatzsteuer-Abschlusskonto                                        H",
            "math": "$$Zahllast = USt - VSt$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu umlauf_waren_ust","Zahllast (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zahllast (Merksatz) — Abzuführende Umsatzsteuer nach Vorsteuerabzug.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.umlauf_waren_ust-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p20.s-umsatzsteuer-abschluss","jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p18.2800-bank-833-an-5000-um"]
  }),
  card({
    id: 'jahresabschluss.eigenkapital_kapitalgesellschaften.eigenkapitalquote',
    conceptId: 'eigenkapital_kapitalgesellschaften',
    officialNotation: "eigenkapital_kapitalgesellschaften",
    displayFormula: "$$EK\\text{-Quote} = \\frac{EK}{Bilanzsumme}$$",
    intuition: "Zentrale Kennzahl zur Finanzierungsstruktur.",
    derivationSteps: [
        {
            "label": "Eigenkapitalquote",
            "text": "1. Entnahme      5,--                                                                 1. Einlage   10,--",
            "math": "$$EK\\text{-Quote} = \\frac{EK}{Bilanzsumme}$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapital_kapitalgesellschaften","Eigenkapitalquote"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Eigenkapitalquote — Zentrale Kennzahl zur Finanzierungsstruktur.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.eigenkapital_kapitalgesellschaften-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p17.1-entnahme-5-1-einlage-1","jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p15.100-000-aktien-zum-nennw"]
  }),
  card({
    id: 'jahresabschluss.eigenkapital_kapitalgesellschaften.jahres_berschuss',
    conceptId: 'eigenkapital_kapitalgesellschaften',
    officialNotation: "eigenkapital_kapitalgesellschaften",
    displayFormula: "\\text{Teil des Eigenkapitals nach Erfolgsrechnung}",
    intuition: "Verbindet GuV und Bilanz.",
    derivationSteps: [
        {
            "label": "Jahresüberschuss",
            "text": "1. Entnahme      5,--                                                                 1. Einlage   10,--",
            "math": "\\text{Teil des Eigenkapitals nach Erfolgsrechnung}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapital_kapitalgesellschaften","Jahresüberschuss"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Jahresüberschuss — Verbindet GuV und Bilanz.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.eigenkapital_kapitalgesellschaften-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p17.1-entnahme-5-1-einlage-1","jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p15.100-000-aktien-zum-nennw"]
  }),
  card({
    id: 'jahresabschluss.eigenkapital_kapitalgesellschaften.gesetzliche_r_cklage',
    conceptId: 'eigenkapital_kapitalgesellschaften',
    officialNotation: "eigenkapital_kapitalgesellschaften",
    displayFormula: "$$\\text{Einstellung} = 5\\% \\cdot Jahresüberschuss$$",
    intuition: "Vereinfachte Klausurform (bis Obergrenze).",
    derivationSteps: [
        {
            "label": "Gesetzliche Rücklage",
            "text": "1. Entnahme      5,--                                                                 1. Einlage   10,--",
            "math": "$$\\text{Einstellung} = 5\\% \\cdot Jahresüberschuss$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapital_kapitalgesellschaften","Gesetzliche Rücklage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gesetzliche Rücklage — Vereinfachte Klausurform (bis Obergrenze).",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.eigenkapital_kapitalgesellschaften-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p17.1-entnahme-5-1-einlage-1","jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p15.100-000-aktien-zum-nennw"]
  }),
  card({
    id: 'jahresabschluss.eigenkapital_personengesellschaften.privatkonto_abschluss',
    conceptId: 'eigenkapital_personengesellschaften',
    officialNotation: "eigenkapital_personengesellschaften",
    displayFormula: "\\text{Privatkonto} \\rightarrow \\text{Kapitalkonto}",
    intuition: "Einlagen/Entnahmen werden periodisch überführt.",
    derivationSteps: [
        {
            "label": "Privatkonto-Abschluss",
            "text": "7.1 GRUNDLAGEN – KAPITALGESELLSCHAFTEN",
            "math": "\\text{Privatkonto} \\rightarrow \\text{Kapitalkonto}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapital_personengesellschaften","Privatkonto-Abschluss"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Privatkonto-Abschluss — Einlagen/Entnahmen werden periodisch überführt.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.eigenkapital_personengesellschaften-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p05.7-1-grundlagen-kapitalge","jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p13.7-2-kapitalgesellschafte"]
  }),
  card({
    id: 'jahresabschluss.eigenkapital_personengesellschaften.gewinnzuweisung',
    conceptId: 'eigenkapital_personengesellschaften',
    officialNotation: "eigenkapital_personengesellschaften",
    displayFormula: "\\text{GuV-Ergebnis} \\rightarrow \\text{Kapitalkonten der Gesellschafter}",
    intuition: "Erfolgszuordnung nach Beteiligungslogik.",
    derivationSteps: [
        {
            "label": "Gewinnzuweisung",
            "text": "7.1 GRUNDLAGEN – KAPITALGESELLSCHAFTEN",
            "math": "\\text{GuV-Ergebnis} \\rightarrow \\text{Kapitalkonten der Gesellschafter}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapital_personengesellschaften","Gewinnzuweisung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gewinnzuweisung — Erfolgszuordnung nach Beteiligungslogik.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.eigenkapital_personengesellschaften-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p05.7-1-grundlagen-kapitalge","jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p13.7-2-kapitalgesellschafte"]
  }),
  card({
    id: 'jahresabschluss.eigenkapital_personengesellschaften.privatkonto_abschluss_merksatz',
    conceptId: 'eigenkapital_personengesellschaften',
    officialNotation: "",
    displayFormula: "\\text{Privatkonto} \\rightarrow \\text{Kapitalkonto}",
    intuition: "Einlagen/Entnahmen werden periodisch überführt.",
    derivationSteps: [
        {
            "label": "Privatkonto-Abschluss (Merksatz)",
            "text": "7.1 GRUNDLAGEN – KAPITALGESELLSCHAFTEN",
            "math": "\\text{Privatkonto} \\rightarrow \\text{Kapitalkonto}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu eigenkapital_personengesellschaften","Privatkonto-Abschluss (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Privatkonto-Abschluss (Merksatz) — Einlagen/Entnahmen werden periodisch überführt.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.eigenkapital_personengesellschaften-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p05.7-1-grundlagen-kapitalge","jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p13.7-2-kapitalgesellschafte"]
  }),
  card({
    id: 'jahresabschluss.verbindlichkeiten.verbindlichkeit',
    conceptId: 'verbindlichkeiten',
    officialNotation: "verbindlichkeiten",
    displayFormula: "\\text{sicher dem Grunde und der Höhe nach}",
    intuition: "Feste Schuldposition.",
    derivationSteps: [
        {
            "label": "Verbindlichkeit",
            "text": "6940 Sonstige Aufwendungen                 an      4890 Übrige sonst. Verb.                                             50.000,--",
            "math": "\\text{sicher dem Grunde und der Höhe nach}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verbindlichkeiten","Verbindlichkeit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verbindlichkeit — Feste Schuldposition.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.verbindlichkeiten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.verbindlichkeiten.kapitel8-pdf.p12.6940-sonstige-aufwendung","jahresabschluss.verbindlichkeiten.kapitel8-pdf.p05.8-2-verbindlichkeiten-de"]
  }),
  card({
    id: 'jahresabschluss.verbindlichkeiten.bewertung',
    conceptId: 'verbindlichkeiten',
    officialNotation: "verbindlichkeiten",
    displayFormula: "\\text{Ansatz zum Erfüllungsbetrag}",
    intuition: "Maßgeblicher Bewertungsmaßstab nach HGB-Logik.",
    derivationSteps: [
        {
            "label": "Bewertung",
            "text": "6940 Sonstige Aufwendungen                 an      4890 Übrige sonst. Verb.                                             50.000,--",
            "math": "\\text{Ansatz zum Erfüllungsbetrag}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verbindlichkeiten","Bewertung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bewertung — Maßgeblicher Bewertungsmaßstab nach HGB-Logik.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.verbindlichkeiten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.verbindlichkeiten.kapitel8-pdf.p12.6940-sonstige-aufwendung","jahresabschluss.verbindlichkeiten.kapitel8-pdf.p05.8-2-verbindlichkeiten-de"]
  }),
  card({
    id: 'jahresabschluss.verbindlichkeiten.pr_fungskette',
    conceptId: 'verbindlichkeiten',
    officialNotation: "verbindlichkeiten",
    displayFormula: "\\text{sichere Schuld} \\Rightarrow \\text{Verbindlichkeit} \\Rightarrow \\text{Erfüllungsbetrag} \\Rightarrow \\text{Folgeausweis}",
    intuition: "Von der Klassifikation zur Abschlusswirkung.",
    derivationSteps: [
        {
            "label": "Prüfungskette",
            "text": "6940 Sonstige Aufwendungen                 an      4890 Übrige sonst. Verb.                                             50.000,--",
            "math": "\\text{sichere Schuld} \\Rightarrow \\text{Verbindlichkeit} \\Rightarrow \\text{Erfüllungsbetrag} \\Rightarrow \\text{Folgeausweis}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu verbindlichkeiten","Prüfungskette"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Prüfungskette — Von der Klassifikation zur Abschlusswirkung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.verbindlichkeiten-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.verbindlichkeiten.kapitel8-pdf.p12.6940-sonstige-aufwendung","jahresabschluss.verbindlichkeiten.kapitel8-pdf.p05.8-2-verbindlichkeiten-de"]
  }),
  card({
    id: 'jahresabschluss.rueckstellungen.r_ckstellung',
    conceptId: 'rueckstellungen',
    officialNotation: "rueckstellungen",
    displayFormula: "\\text{ungewisse Verbindlichkeit}",
    intuition: "Verpflichtung steht dem Grunde nach, Höhe/Fälligkeit sind unsicher.",
    derivationSteps: [
        {
            "label": "Rückstellung",
            "text": "DIE BILANZ – BILANZPOSITION",
            "math": "\\text{ungewisse Verbindlichkeit}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rueckstellungen","Rückstellung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rückstellung — Verpflichtung steht dem Grunde nach, Höhe/Fälligkeit sind unsicher.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rueckstellungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rueckstellungen.kapitel8-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.rueckstellungen.kapitel8-pdf.p06.8-2-verbindlichkeiten-be"]
  }),
  card({
    id: 'jahresabschluss.rueckstellungen.bewertung',
    conceptId: 'rueckstellungen',
    officialNotation: "rueckstellungen",
    displayFormula: "\\text{notwendiger Erfüllungsbetrag nach kaufmännischer Beurteilung}",
    intuition: "Schätzbasierter Ansatz.",
    derivationSteps: [
        {
            "label": "Bewertung",
            "text": "DIE BILANZ – BILANZPOSITION",
            "math": "\\text{notwendiger Erfüllungsbetrag nach kaufmännischer Beurteilung}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rueckstellungen","Bewertung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Bewertung — Schätzbasierter Ansatz.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rueckstellungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rueckstellungen.kapitel8-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.rueckstellungen.kapitel8-pdf.p06.8-2-verbindlichkeiten-be"]
  }),
  card({
    id: 'jahresabschluss.rueckstellungen.ansatzlogik',
    conceptId: 'rueckstellungen',
    officialNotation: "rueckstellungen",
    displayFormula: "\\text{Aufwand} \\rightarrow \\text{Rückstellung} \\rightarrow \\text{spätere Inanspruchnahme / Auflösung}",
    intuition: "Rückstellungen sind eine Periodisierungs- und Folgebuchungslogik, nicht nur ein Bilanzetikett.",
    derivationSteps: [
        {
            "label": "Ansatzlogik",
            "text": "DIE BILANZ – BILANZPOSITION",
            "math": "\\text{Aufwand} \\rightarrow \\text{Rückstellung} \\rightarrow \\text{spätere Inanspruchnahme / Auflösung}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rueckstellungen","Ansatzlogik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Ansatzlogik — Rückstellungen sind eine Periodisierungs- und Folgebuchungslogik, nicht nur ein ",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rueckstellungen-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rueckstellungen.kapitel8-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.rueckstellungen.kapitel8-pdf.p06.8-2-verbindlichkeiten-be"]
  }),
  card({
    id: 'jahresabschluss.rechnungsabgrenzung.periodenzuordnung',
    conceptId: 'rechnungsabgrenzung',
    officialNotation: "rechnungsabgrenzung",
    displayFormula: "\\text{wirtschaftliche Zugehörigkeit} \\neq \\text{Zahlungszeitpunkt}",
    intuition: "Kernlogik der Rechnungsabgrenzung.",
    derivationSteps: [
        {
            "label": "Periodenzuordnung",
            "text": "9. RECHNUNGSABGRENZUNG – BEISPIEL IV: ANTIZIPATIVE AKTIVE RECHNUNGSABGRENZUNG",
            "math": "\\text{wirtschaftliche Zugehörigkeit} \\neq \\text{Zahlungszeitpunkt}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rechnungsabgrenzung","Periodenzuordnung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Periodenzuordnung — Kernlogik der Rechnungsabgrenzung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rechnungsabgrenzung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p14.9-rechnungsabgrenzung-be","jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p08.transitorische-zahlungsv"]
  }),
  card({
    id: 'jahresabschluss.rechnungsabgrenzung.aktiver_passiver_rap',
    conceptId: 'rechnungsabgrenzung',
    officialNotation: "rechnungsabgrenzung",
    displayFormula: "\\text{Ausgabe heute, Aufwand morgen} \\Rightarrow aRAP \\qquad \\text{Einnahme heute, Ertrag morgen} \\Rightarrow pRAP",
    intuition: "Merkschema für die transitorische Abgrenzung.",
    derivationSteps: [
        {
            "label": "Aktiver / passiver RAP",
            "text": "9. RECHNUNGSABGRENZUNG – BEISPIEL IV: ANTIZIPATIVE AKTIVE RECHNUNGSABGRENZUNG",
            "math": "\\text{Ausgabe heute, Aufwand morgen} \\Rightarrow aRAP \\qquad \\text{Einnahme heute, Ertrag morgen} \\Rightarrow pRAP"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rechnungsabgrenzung","Aktiver / passiver RAP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Aktiver / passiver RAP — Merkschema für die transitorische Abgrenzung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rechnungsabgrenzung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p14.9-rechnungsabgrenzung-be","jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p08.transitorische-zahlungsv"]
  }),
  card({
    id: 'jahresabschluss.rechnungsabgrenzung.rap',
    conceptId: 'rechnungsabgrenzung',
    officialNotation: "rechnungsabgrenzung",
    displayFormula: "\\text{Zahlung heute, Erfolg teilweise morgen}",
    intuition: "Transitorische Abgrenzung.",
    derivationSteps: [
        {
            "label": "RAP",
            "text": "9. RECHNUNGSABGRENZUNG – BEISPIEL IV: ANTIZIPATIVE AKTIVE RECHNUNGSABGRENZUNG",
            "math": "\\text{Zahlung heute, Erfolg teilweise morgen}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu rechnungsabgrenzung","RAP"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: RAP — Transitorische Abgrenzung.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.rechnungsabgrenzung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p14.9-rechnungsabgrenzung-be","jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p08.transitorische-zahlungsv"]
  }),
  card({
    id: 'jahresabschluss.erfolgsrechnung.jahresergebnis',
    conceptId: 'erfolgsrechnung',
    officialNotation: "erfolgsrechnung",
    displayFormula: "$$JÜ = Erträge - Aufwendungen$$",
    intuition: "Beide Verfahren führen dorthin.",
    derivationSteps: [
        {
            "label": "Jahresergebnis",
            "text": "10.1 GRUNDLAGEN – GEWINN- UND VERLUSTRECHNUNG (GUV)",
            "math": "$$JÜ = Erträge - Aufwendungen$$"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu erfolgsrechnung","Jahresergebnis"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Jahresergebnis — Beide Verfahren führen dorthin.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.erfolgsrechnung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.erfolgsrechnung.kapitel10-pdf.p04.10-1-grundlagen-gewinn-u","jahresabschluss.erfolgsrechnung.kapitel10-pdf.p07.die-herstellungskosten-z"]
  }),
  card({
    id: 'jahresabschluss.erfolgsrechnung.kostenart_vs_funktion',
    conceptId: 'erfolgsrechnung',
    officialNotation: "erfolgsrechnung",
    displayFormula: "\\text{GKV: Was für Kosten? \\quad UKV: Wofür Kosten?}",
    intuition: "Merksatz zur Darstellungslogik.",
    derivationSteps: [
        {
            "label": "Kostenart vs. Funktion",
            "text": "10.1 GRUNDLAGEN – GEWINN- UND VERLUSTRECHNUNG (GUV)",
            "math": "\\text{GKV: Was für Kosten? \\quad UKV: Wofür Kosten?}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu erfolgsrechnung","Kostenart vs. Funktion"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kostenart vs. Funktion — Merksatz zur Darstellungslogik.",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.erfolgsrechnung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.erfolgsrechnung.kapitel10-pdf.p04.10-1-grundlagen-gewinn-u","jahresabschluss.erfolgsrechnung.kapitel10-pdf.p07.die-herstellungskosten-z"]
  }),
  card({
    id: 'jahresabschluss.erfolgsrechnung.br_ckenlogik',
    conceptId: 'erfolgsrechnung',
    officialNotation: "erfolgsrechnung",
    displayFormula: "\\text{Bestandsveränderung / HK der abgesetzten Leistung} \\Rightarrow \\text{periodengerechter Erfolg}",
    intuition: "Die Brücke erklärt, warum GKV und UKV trotz anderer Zeilen zum gleichen Ergebnis führen.",
    derivationSteps: [
        {
            "label": "Brückenlogik",
            "text": "10.1 GRUNDLAGEN – GEWINN- UND VERLUSTRECHNUNG (GUV)",
            "math": "\\text{Bestandsveränderung / HK der abgesetzten Leistung} \\Rightarrow \\text{periodengerechter Erfolg}"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu erfolgsrechnung","Brückenlogik"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Brückenlogik — Die Brücke erklärt, warum GKV und UKV trotz anderer Zeilen zum gleichen Ergebnis",
    relatedTaskFamilies: ["jahresabschluss.taskfamily.erfolgsrechnung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["jahresabschluss.erfolgsrechnung.kapitel10-pdf.p04.10-1-grundlagen-gewinn-u","jahresabschluss.erfolgsrechnung.kapitel10-pdf.p07.die-herstellungskosten-z"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

