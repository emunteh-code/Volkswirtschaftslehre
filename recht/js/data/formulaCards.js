// ============================================================
// FORMULA CARDS — Recht
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = 'recht';

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
    id: 'recht.was_ist_recht.kernfrage',
    conceptId: 'was_ist_recht',
    officialNotation: "was_ist_recht",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["Wer will was von wem woraus?"]},
    intuition: "Juristische Anspruchsarbeit beginnt mit einer präzisen Ausgangsfrage.",
    derivationSteps: [
        {
            "label": "Kernfrage",
            "text": "anerkannten ungeschriebenen Normen (Gewohnheitsrecht) verstanden",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "Wer will was von wem woraus?"
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
    appliesWhen: ["Klausuraufgaben zu was_ist_recht","Kernfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kernfrage — Juristische Anspruchsarbeit beginnt mit einer präzisen Ausgangsfrage.",
    relatedTaskFamilies: ["recht.taskfamily.was_ist_recht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.was_ist_recht.1-was-ist-recht-k-pdf.p08.anerkannten-ungeschriebe","recht.was_ist_recht.1-was-ist-recht-k-pdf.p02.legislative-exekutive-ju"]
  }),
  card({
    id: 'recht.was_ist_recht.normbezug',
    conceptId: 'was_ist_recht',
    officialNotation: "was_ist_recht",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Sachverhalt","→","Tatbestandsmerkmal","→","Rechtsfolge"]},
    intuition: "Das ist die elementare Struktur juristischer Arbeit.",
    derivationSteps: [
        {
            "label": "Normbezug",
            "text": "anerkannten ungeschriebenen Normen (Gewohnheitsrecht) verstanden",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Sachverhalt",
                    "→",
                    "Tatbestandsmerkmal",
                    "→",
                    "Rechtsfolge"
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
    appliesWhen: ["Klausuraufgaben zu was_ist_recht","Normbezug"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Normbezug — Das ist die elementare Struktur juristischer Arbeit.",
    relatedTaskFamilies: ["recht.taskfamily.was_ist_recht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.was_ist_recht.1-was-ist-recht-k-pdf.p08.anerkannten-ungeschriebe","recht.was_ist_recht.1-was-ist-recht-k-pdf.p02.legislative-exekutive-ju"]
  }),
  card({
    id: 'recht.was_ist_recht.normbezug_merksatz',
    conceptId: 'was_ist_recht',
    officialNotation: "was_ist_recht",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Sachverhalt","→","Tatbestandsmerkmal","→","Rechtsfolge"]},
    intuition: "Das ist die elementare Struktur juristischer Arbeit.",
    derivationSteps: [
        {
            "label": "Normbezug (Merksatz)",
            "text": "anerkannten ungeschriebenen Normen (Gewohnheitsrecht) verstanden",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Sachverhalt",
                    "→",
                    "Tatbestandsmerkmal",
                    "→",
                    "Rechtsfolge"
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
    appliesWhen: ["Klausuraufgaben zu was_ist_recht","Normbezug (Merksatz)"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Normbezug (Merksatz) — Das ist die elementare Struktur juristischer Arbeit.",
    relatedTaskFamilies: ["recht.taskfamily.was_ist_recht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.was_ist_recht.1-was-ist-recht-k-pdf.p08.anerkannten-ungeschriebe","recht.was_ist_recht.1-was-ist-recht-k-pdf.p02.legislative-exekutive-ju"]
  }),
  card({
    id: 'recht.privatrecht.bgb_system',
    conceptId: 'privatrecht',
    officialNotation: "privatrecht",
    displayFormula: {"mode":"schema","layout":"chain","parts":["AT","+","Besonderer Teil"]},
    intuition: "Spezielle Normen bauen auf allgemeinen Regeln auf.",
    derivationSteps: [
        {
            "label": "BGB-System",
            "text": "-> Privatrecht (Deliktsrecht)",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "AT",
                    "+",
                    "Besonderer Teil"
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
    appliesWhen: ["Klausuraufgaben zu privatrecht","BGB-System"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: BGB-System — Spezielle Normen bauen auf allgemeinen Regeln auf.",
    relatedTaskFamilies: ["recht.taskfamily.privatrecht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.privatrecht.2-privatrecht-k-pdf.p03.privatrecht-deliktsrecht","recht.privatrecht.2-privatrecht-k-pdf.p07.2-privatrecht-erlas"]
  }),
  card({
    id: 'recht.privatrecht.privatrecht',
    conceptId: 'privatrecht',
    officialNotation: "privatrecht",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["Gleichordnung der Beteiligten"]},
    intuition: "Grundidee der privatrechtlichen Beziehung.",
    derivationSteps: [
        {
            "label": "Privatrecht",
            "text": "-> Privatrecht (Deliktsrecht)",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "Gleichordnung der Beteiligten"
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
    appliesWhen: ["Klausuraufgaben zu privatrecht","Privatrecht"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Privatrecht — Grundidee der privatrechtlichen Beziehung.",
    relatedTaskFamilies: ["recht.taskfamily.privatrecht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.privatrecht.2-privatrecht-k-pdf.p03.privatrecht-deliktsrecht","recht.privatrecht.2-privatrecht-k-pdf.p07.2-privatrecht-erlas"]
  }),
  card({
    id: 'recht.privatrecht.normfinder',
    conceptId: 'privatrecht',
    officialNotation: "privatrecht",
    displayFormula: "AT → Schuldrecht → ggf. Sachenrecht",
    intuition: "Systematische Suchreihenfolge.",
    derivationSteps: [
        {
            "label": "Normfinder",
            "text": "-> Privatrecht (Deliktsrecht)",
            "math": "AT → Schuldrecht → ggf. Sachenrecht"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu privatrecht","Normfinder"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Normfinder — Systematische Suchreihenfolge.",
    relatedTaskFamilies: ["recht.taskfamily.privatrecht-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.privatrecht.2-privatrecht-k-pdf.p03.privatrecht-deliktsrecht","recht.privatrecht.2-privatrecht-k-pdf.p07.2-privatrecht-erlas"]
  }),
  card({
    id: 'recht.methodik.anspruchsfrage',
    conceptId: 'methodik',
    officialNotation: "methodik",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["Wer will was von wem woraus?"]},
    intuition: "Erste und wichtigste Sortierfrage des Falles.",
    derivationSteps: [
        {
            "label": "Anspruchsfrage",
            "text": "Beispiel: Auslegung des Begriffs „Besitz“ in § 985 BGB",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "Wer will was von wem woraus?"
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
    appliesWhen: ["Klausuraufgaben zu methodik","Anspruchsfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Anspruchsfrage — Erste und wichtigste Sortierfrage des Falles.",
    relatedTaskFamilies: ["recht.taskfamily.methodik-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.methodik.3-juristische-methodik-k.p12.beispiel-auslegung-des-b","recht.methodik.3-juristische-methodik-k.p03.beispiel-deliktischer-sc"]
  }),
  card({
    id: 'recht.methodik.gutachtenstil',
    conceptId: 'methodik',
    officialNotation: "methodik",
    displayFormula: {"mode":"schema","layout":"chain","parts":["O","–","D","–","S","–","E"]},
    intuition: "Einleitender Obersatz, dann je Tatbestandsmerkmal: Obersatz zum Merkmal, Definition, Subsumtion; abschließend Ergebnis. Obersätze i.d.R. Konjunktiv II, Definition/Subsumtion Indikativ.",
    derivationSteps: [
        {
            "label": "Gutachtenstil",
            "text": "Beispiel: Auslegung des Begriffs „Besitz“ in § 985 BGB",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "O",
                    "–",
                    "D",
                    "–",
                    "S",
                    "–",
                    "E"
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
    appliesWhen: ["Klausuraufgaben zu methodik","Gutachtenstil"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Gutachtenstil — Einleitender Obersatz, dann je Tatbestandsmerkmal: Obersatz zum Merkmal, Definit",
    relatedTaskFamilies: ["recht.taskfamily.methodik-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.methodik.3-juristische-methodik-k.p12.beispiel-auslegung-des-b","recht.methodik.3-juristische-methodik-k.p03.beispiel-deliktischer-sc"]
  }),
  card({
    id: 'recht.methodik.anspruchskette',
    conceptId: 'methodik',
    officialNotation: "methodik",
    displayFormula: {"mode":"schema","layout":"chain","parts":["entstanden","→","untergegangen","→","durchsetzbar"]},
    intuition: "Saubere Ordnung für Einwendungen, Einreden und Gestaltungsrechte.",
    derivationSteps: [
        {
            "label": "Anspruchskette",
            "text": "Beispiel: Auslegung des Begriffs „Besitz“ in § 985 BGB",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "entstanden",
                    "→",
                    "untergegangen",
                    "→",
                    "durchsetzbar"
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
    appliesWhen: ["Klausuraufgaben zu methodik","Anspruchskette"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Anspruchskette — Saubere Ordnung für Einwendungen, Einreden und Gestaltungsrechte.",
    relatedTaskFamilies: ["recht.taskfamily.methodik-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.methodik.3-juristische-methodik-k.p12.beispiel-auslegung-des-b","recht.methodik.3-juristische-methodik-k.p03.beispiel-deliktischer-sc"]
  }),
  card({
    id: 'recht.methodik.tatbestand_vor_rechtsfolge',
    conceptId: 'methodik',
    officialNotation: "methodik",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["erst Voraussetzungen, dann Folgen"]},
    intuition: "Rückgewähr, Schadenshöhe und Konkurrenzfragen kommen erst nach tragfähigem Tatbestand.",
    derivationSteps: [
        {
            "label": "Tatbestand vor Rechtsfolge",
            "text": "Beispiel: Auslegung des Begriffs „Besitz“ in § 985 BGB",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "erst Voraussetzungen, dann Folgen"
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
    appliesWhen: ["Klausuraufgaben zu methodik","Tatbestand vor Rechtsfolge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Tatbestand vor Rechtsfolge — Rückgewähr, Schadenshöhe und Konkurrenzfragen kommen erst nach tragfähigem Tatbe",
    relatedTaskFamilies: ["recht.taskfamily.methodik-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.methodik.3-juristische-methodik-k.p12.beispiel-auslegung-des-b","recht.methodik.3-juristische-methodik-k.p03.beispiel-deliktischer-sc"]
  }),
  card({
    id: 'recht.willenserklaerung.vertragsschluss',
    conceptId: 'willenserklaerung',
    officialNotation: "willenserklaerung",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Angebot","+","Annahme"]},
    intuition: "Zwei übereinstimmende Willenserklärungen.",
    derivationSteps: [
        {
            "label": "Vertragsschluss",
            "text": "A. Vertragsschluss am 17.12.2021",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Angebot",
                    "+",
                    "Annahme"
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
    appliesWhen: ["Klausuraufgaben zu willenserklaerung","Vertragsschluss"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vertragsschluss — Zwei übereinstimmende Willenserklärungen.",
    relatedTaskFamilies: ["recht.taskfamily.willenserklaerung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.willenserklaerung.4-willenserkl-rung-vertr.p16.a-vertragsschluss-am-17-","recht.willenserklaerung.4-willenserkl-rung-vertr.p18.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.willenserklaerung.angebot',
    conceptId: 'willenserklaerung',
    officialNotation: "willenserklaerung",
    displayFormula: {"mode":"schema","layout":"chain","parts":["essentialia negotii","+","Rechtsbindungswille"]},
    intuition: "So bestimmt, dass ein einfaches Ja genügt.",
    derivationSteps: [
        {
            "label": "Angebot",
            "text": "A. Vertragsschluss am 17.12.2021",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "essentialia negotii",
                    "+",
                    "Rechtsbindungswille"
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
    appliesWhen: ["Klausuraufgaben zu willenserklaerung","Angebot"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Angebot — So bestimmt, dass ein einfaches Ja genügt.",
    relatedTaskFamilies: ["recht.taskfamily.willenserklaerung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.willenserklaerung.4-willenserkl-rung-vertr.p16.a-vertragsschluss-am-17-","recht.willenserklaerung.4-willenserkl-rung-vertr.p18.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.willenserklaerung.zugang',
    conceptId: 'willenserklaerung',
    officialNotation: "willenserklaerung",
    displayFormula: "§ 130 BGB",
    intuition: "Wirksamkeit empfangsbedürftiger WE.",
    derivationSteps: [
        {
            "label": "Zugang",
            "text": "A. Vertragsschluss am 17.12.2021",
            "math": "§ 130 BGB"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu willenserklaerung","Zugang"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Zugang — Wirksamkeit empfangsbedürftiger WE.",
    relatedTaskFamilies: ["recht.taskfamily.willenserklaerung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.willenserklaerung.4-willenserkl-rung-vertr.p16.a-vertragsschluss-am-17-","recht.willenserklaerung.4-willenserkl-rung-vertr.p18.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.dissens.konsensfrage',
    conceptId: 'dissens',
    officialNotation: "dissens",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Angebot","↔","Annahme"]},
    intuition: "Zuerst prüfen, ob die Erklärungen objektiv korrespondieren.",
    derivationSteps: [
        {
            "label": "Konsensfrage",
            "text": "wissen dies aber nicht.",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Angebot",
                    "↔",
                    "Annahme"
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
    appliesWhen: ["Klausuraufgaben zu dissens","Konsensfrage"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Konsensfrage — Zuerst prüfen, ob die Erklärungen objektiv korrespondieren.",
    relatedTaskFamilies: ["recht.taskfamily.dissens-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.dissens.5-dissens-und-anfechtung.p05.wissen-dies-aber-nicht","recht.dissens.5-dissens-und-anfechtung.p07.relevante-ausnahmen"]
  }),
  card({
    id: 'recht.dissens.offener_dissens',
    conceptId: 'dissens',
    officialNotation: "dissens",
    displayFormula: {"mode":"schema","layout":"chain","parts":["§ 154 BGB","⇒","im Zweifel kein Vertrag"]},
    intuition: "Bewusst offengelassener Punkt blockiert den Vertragsschluss regelmäßig.",
    derivationSteps: [
        {
            "label": "Offener Dissens",
            "text": "wissen dies aber nicht.",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "§ 154 BGB",
                    "⇒",
                    "im Zweifel kein Vertrag"
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
    appliesWhen: ["Klausuraufgaben zu dissens","Offener Dissens"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Offener Dissens — Bewusst offengelassener Punkt blockiert den Vertragsschluss regelmäßig.",
    relatedTaskFamilies: ["recht.taskfamily.dissens-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.dissens.5-dissens-und-anfechtung.p05.wissen-dies-aber-nicht","recht.dissens.5-dissens-und-anfechtung.p07.relevante-ausnahmen"]
  }),
  card({
    id: 'recht.dissens.versteckter_dissens',
    conceptId: 'dissens',
    officialNotation: "dissens",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 155 BGB"]},
    intuition: "Nur bei wirklichem Nichtübereinstimmen und fortbestehendem Vertragswillen relevant.",
    derivationSteps: [
        {
            "label": "Versteckter Dissens",
            "text": "wissen dies aber nicht.",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 155 BGB"
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
    appliesWhen: ["Klausuraufgaben zu dissens","Versteckter Dissens"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Versteckter Dissens — Nur bei wirklichem Nichtübereinstimmen und fortbestehendem Vertragswillen releva",
    relatedTaskFamilies: ["recht.taskfamily.dissens-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.dissens.5-dissens-und-anfechtung.p05.wissen-dies-aber-nicht","recht.dissens.5-dissens-und-anfechtung.p07.relevante-ausnahmen"]
  }),
  card({
    id: 'recht.dissens.falsa_demonstratio',
    conceptId: 'dissens',
    officialNotation: "dissens",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["falsa demonstratio non nocet"]},
    intuition: "Gemeinsam gewollter Inhalt bleibt trotz falscher Bezeichnung maßgeblich.",
    derivationSteps: [
        {
            "label": "Falsa demonstratio",
            "text": "wissen dies aber nicht.",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "falsa demonstratio non nocet"
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
    appliesWhen: ["Klausuraufgaben zu dissens","Falsa demonstratio"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Falsa demonstratio — Gemeinsam gewollter Inhalt bleibt trotz falscher Bezeichnung maßgeblich.",
    relatedTaskFamilies: ["recht.taskfamily.dissens-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.dissens.5-dissens-und-anfechtung.p05.wissen-dies-aber-nicht","recht.dissens.5-dissens-und-anfechtung.p07.relevante-ausnahmen"]
  }),
  card({
    id: 'recht.anfechtung.anfechtungsgr_nde',
    conceptId: 'anfechtung',
    officialNotation: "anfechtung",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 119 BGB","§ 123 BGB"]},
    intuition: "Irrtums-, Täuschungs- und Drohungsfälle nur innerhalb des gesetzlichen Katalogs.",
    derivationSteps: [
        {
            "label": "Anfechtungsgründe",
            "text": "20 „große“ Toilettenpapierrollen bestellt. Tatsächlich bedeutet die (heute nicht mehr besonders übliche)",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 119 BGB",
                    "§ 123 BGB"
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
    appliesWhen: ["Klausuraufgaben zu anfechtung","Anfechtungsgründe"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Anfechtungsgründe — Irrtums-, Täuschungs- und Drohungsfälle nur innerhalb des gesetzlichen Katalogs.",
    relatedTaskFamilies: ["recht.taskfamily.anfechtung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.anfechtung.5-dissens-und-anfechtung.p12.20-gro-e-toilettenpapier","recht.anfechtung.5-dissens-und-anfechtung.p21.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.anfechtung.vollst_ndige_pr_fung',
    conceptId: 'anfechtung',
    officialNotation: "anfechtung",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Grund","+","Erklärung","+","Frist"]},
    intuition: "Der Irrtum allein reicht nie für eine vollständige Lösung.",
    derivationSteps: [
        {
            "label": "Vollständige Prüfung",
            "text": "20 „große“ Toilettenpapierrollen bestellt. Tatsächlich bedeutet die (heute nicht mehr besonders übliche)",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Grund",
                    "+",
                    "Erklärung",
                    "+",
                    "Frist"
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
    appliesWhen: ["Klausuraufgaben zu anfechtung","Vollständige Prüfung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vollständige Prüfung — Der Irrtum allein reicht nie für eine vollständige Lösung.",
    relatedTaskFamilies: ["recht.taskfamily.anfechtung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.anfechtung.5-dissens-und-anfechtung.p12.20-gro-e-toilettenpapier","recht.anfechtung.5-dissens-und-anfechtung.p21.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.anfechtung.rechtsfolge',
    conceptId: 'anfechtung',
    officialNotation: "anfechtung",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["ex tunc nichtig"]},
    intuition: "Das Geschäft wird rückwirkend beseitigt.",
    derivationSteps: [
        {
            "label": "Rechtsfolge",
            "text": "20 „große“ Toilettenpapierrollen bestellt. Tatsächlich bedeutet die (heute nicht mehr besonders übliche)",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "ex tunc nichtig"
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
    appliesWhen: ["Klausuraufgaben zu anfechtung","Rechtsfolge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rechtsfolge — Das Geschäft wird rückwirkend beseitigt.",
    relatedTaskFamilies: ["recht.taskfamily.anfechtung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.anfechtung.5-dissens-und-anfechtung.p12.20-gro-e-toilettenpapier","recht.anfechtung.5-dissens-und-anfechtung.p21.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.anfechtung.vertrauensschaden',
    conceptId: 'anfechtung',
    officialNotation: "anfechtung",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 122 BGB"]},
    intuition: "Eigener Folgeanspruch nach wirksamer Irrtumsanfechtung.",
    derivationSteps: [
        {
            "label": "Vertrauensschaden",
            "text": "20 „große“ Toilettenpapierrollen bestellt. Tatsächlich bedeutet die (heute nicht mehr besonders übliche)",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 122 BGB"
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
    appliesWhen: ["Klausuraufgaben zu anfechtung","Vertrauensschaden"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vertrauensschaden — Eigener Folgeanspruch nach wirksamer Irrtumsanfechtung.",
    relatedTaskFamilies: ["recht.taskfamily.anfechtung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.anfechtung.5-dissens-und-anfechtung.p12.20-gro-e-toilettenpapier","recht.anfechtung.5-dissens-und-anfechtung.p21.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.trennung_abstraktion.verpflichtung',
    conceptId: 'trennung_abstraktion',
    officialNotation: "trennung_abstraktion",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["schuldrechtliches Geschäft"]},
    intuition: "Begründet Leistungspflichten.",
    derivationSteps: [
        {
            "label": "Verpflichtung",
            "text": "§ 6 Verpflichtungs- und Verfügungsgeschäfte",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "schuldrechtliches Geschäft"
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
    appliesWhen: ["Klausuraufgaben zu trennung_abstraktion","Verpflichtung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verpflichtung — Begründet Leistungspflichten.",
    relatedTaskFamilies: ["recht.taskfamily.trennung_abstraktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.trennung_abstraktion.6-verpflichtungs-und-ver.p09.6-verpflichtungs-und-ver","recht.trennung_abstraktion.6-verpflichtungs-und-ver.p02.einleitende-frage"]
  }),
  card({
    id: 'recht.trennung_abstraktion.verf_gung',
    conceptId: 'trennung_abstraktion',
    officialNotation: "trennung_abstraktion",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["dingliche Rechtsänderung"]},
    intuition: "Überträgt, belastet oder hebt ein Recht auf.",
    derivationSteps: [
        {
            "label": "Verfügung",
            "text": "§ 6 Verpflichtungs- und Verfügungsgeschäfte",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "dingliche Rechtsänderung"
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
    appliesWhen: ["Klausuraufgaben zu trennung_abstraktion","Verfügung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verfügung — Überträgt, belastet oder hebt ein Recht auf.",
    relatedTaskFamilies: ["recht.taskfamily.trennung_abstraktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.trennung_abstraktion.6-verpflichtungs-und-ver.p09.6-verpflichtungs-und-ver","recht.trennung_abstraktion.6-verpflichtungs-und-ver.p02.einleitende-frage"]
  }),
  card({
    id: 'recht.trennung_abstraktion.bereignung',
    conceptId: 'trennung_abstraktion',
    officialNotation: "trennung_abstraktion",
    displayFormula: "§ 929 BGB",
    intuition: "Verfügung über bewegliche Sache.",
    derivationSteps: [
        {
            "label": "Übereignung",
            "text": "§ 6 Verpflichtungs- und Verfügungsgeschäfte",
            "math": "§ 929 BGB"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu trennung_abstraktion","Übereignung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Übereignung — Verfügung über bewegliche Sache.",
    relatedTaskFamilies: ["recht.taskfamily.trennung_abstraktion-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.trennung_abstraktion.6-verpflichtungs-und-ver.p09.6-verpflichtungs-und-ver","recht.trennung_abstraktion.6-verpflichtungs-und-ver.p02.einleitende-frage"]
  }),
  card({
    id: 'recht.geschaeftsfaehigkeit.beschr_nkt_gesch_ftsf_hig',
    conceptId: 'geschaeftsfaehigkeit',
    officialNotation: "geschaeftsfaehigkeit",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§§ 106 ff. BGB"]},
    intuition: "Zwischen völliger Unfähigkeit und voller Geschäftsfähigkeit.",
    derivationSteps: [
        {
            "label": "Beschränkt geschäftsfähig",
            "text": "• Verträge schließen",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§§ 106 ff. BGB"
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
    appliesWhen: ["Klausuraufgaben zu geschaeftsfaehigkeit","Beschränkt geschäftsfähig"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Beschränkt geschäftsfähig — Zwischen völliger Unfähigkeit und voller Geschäftsfähigkeit.",
    relatedTaskFamilies: ["recht.taskfamily.geschaeftsfaehigkeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.geschaeftsfaehigkeit.7-rechts-und-gesch-ftsf-.p02.vertr-ge-schlie-en","recht.geschaeftsfaehigkeit.7-rechts-und-gesch-ftsf-.p06.sind-auch-gesch-ftsf-hig"]
  }),
  card({
    id: 'recht.geschaeftsfaehigkeit.lediglich_rechtlich_vorteilhaft',
    conceptId: 'geschaeftsfaehigkeit',
    officialNotation: "geschaeftsfaehigkeit",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["kein rechtlicher Nachteil"]},
    intuition: "Dann ist keine Zustimmung nötig.",
    derivationSteps: [
        {
            "label": "Lediglich rechtlich vorteilhaft",
            "text": "• Verträge schließen",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "kein rechtlicher Nachteil"
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
    appliesWhen: ["Klausuraufgaben zu geschaeftsfaehigkeit","Lediglich rechtlich vorteilhaft"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Lediglich rechtlich vorteilhaft — Dann ist keine Zustimmung nötig.",
    relatedTaskFamilies: ["recht.taskfamily.geschaeftsfaehigkeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.geschaeftsfaehigkeit.7-rechts-und-gesch-ftsf-.p02.vertr-ge-schlie-en","recht.geschaeftsfaehigkeit.7-rechts-und-gesch-ftsf-.p06.sind-auch-gesch-ftsf-hig"]
  }),
  card({
    id: 'recht.geschaeftsfaehigkeit.taschengeld',
    conceptId: 'geschaeftsfaehigkeit',
    officialNotation: "geschaeftsfaehigkeit",
    displayFormula: "§ 110 BGB",
    intuition: "Wirksamkeit aus eigenen Mitteln.",
    derivationSteps: [
        {
            "label": "Taschengeld",
            "text": "• Verträge schließen",
            "math": "§ 110 BGB"
        },
        {
            "label": "Anwendung",
            "text": "In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.",
            "math": null
        }
    ],
    assumptions: ["Notation wie in der Vorlesung","Zulässigkeitsbereich der Aufgabe beachten"],
    appliesWhen: ["Klausuraufgaben zu geschaeftsfaehigkeit","Taschengeld"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Taschengeld — Wirksamkeit aus eigenen Mitteln.",
    relatedTaskFamilies: ["recht.taskfamily.geschaeftsfaehigkeit-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.geschaeftsfaehigkeit.7-rechts-und-gesch-ftsf-.p02.vertr-ge-schlie-en","recht.geschaeftsfaehigkeit.7-rechts-und-gesch-ftsf-.p06.sind-auch-gesch-ftsf-hig"]
  }),
  card({
    id: 'recht.stellvertretung.stellvertretung',
    conceptId: 'stellvertretung',
    officialNotation: "stellvertretung",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 164 Abs. 1 BGB"]},
    intuition: "Handeln in fremdem Namen mit Vertretungsmacht.",
    derivationSteps: [
        {
            "label": "Stellvertretung",
            "text": "§ 8 Die Stellvertretung",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 164 Abs. 1 BGB"
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
    appliesWhen: ["Klausuraufgaben zu stellvertretung","Stellvertretung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Stellvertretung — Handeln in fremdem Namen mit Vertretungsmacht.",
    relatedTaskFamilies: ["recht.taskfamily.stellvertretung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.stellvertretung.8-stellvertretung-k-pdf.p04.8-die-stellvertretung","recht.stellvertretung.8-stellvertretung-k-pdf.p18.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.stellvertretung.vertretungsmacht',
    conceptId: 'stellvertretung',
    officialNotation: "stellvertretung",
    displayFormula: {"mode":"schema","layout":"chain","parts":["rechtsgeschäftlich","/","gesetzlich","/","organschaftlich"]},
    intuition: "Quellen der Zurechnungsmacht müssen sauber getrennt werden.",
    derivationSteps: [
        {
            "label": "Vertretungsmacht",
            "text": "§ 8 Die Stellvertretung",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "rechtsgeschäftlich",
                    "/",
                    "gesetzlich",
                    "/",
                    "organschaftlich"
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
    appliesWhen: ["Klausuraufgaben zu stellvertretung","Vertretungsmacht"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vertretungsmacht — Quellen der Zurechnungsmacht müssen sauber getrennt werden.",
    relatedTaskFamilies: ["recht.taskfamily.stellvertretung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.stellvertretung.8-stellvertretung-k-pdf.p04.8-die-stellvertretung","recht.stellvertretung.8-stellvertretung-k-pdf.p18.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.stellvertretung.ohne_vertretungsmacht',
    conceptId: 'stellvertretung',
    officialNotation: "stellvertretung",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 177 BGB"]},
    intuition: "Geschäft schwebend unwirksam bis zur Genehmigung.",
    derivationSteps: [
        {
            "label": "Ohne Vertretungsmacht",
            "text": "§ 8 Die Stellvertretung",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 177 BGB"
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
    appliesWhen: ["Klausuraufgaben zu stellvertretung","Ohne Vertretungsmacht"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Ohne Vertretungsmacht — Geschäft schwebend unwirksam bis zur Genehmigung.",
    relatedTaskFamilies: ["recht.taskfamily.stellvertretung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.stellvertretung.8-stellvertretung-k-pdf.p04.8-die-stellvertretung","recht.stellvertretung.8-stellvertretung-k-pdf.p18.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.stellvertretung.haftung_des_falsus_procurator',
    conceptId: 'stellvertretung',
    officialNotation: "stellvertretung",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 179 BGB"]},
    intuition: "Folgeebene erst nach Offenkundigkeit und ausbleibender Genehmigung prüfen.",
    derivationSteps: [
        {
            "label": "Haftung des falsus procurator",
            "text": "§ 8 Die Stellvertretung",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 179 BGB"
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
    appliesWhen: ["Klausuraufgaben zu stellvertretung","Haftung des falsus procurator"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Haftung des falsus procurator — Folgeebene erst nach Offenkundigkeit und ausbleibender Genehmigung prüfen.",
    relatedTaskFamilies: ["recht.taskfamily.stellvertretung-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.stellvertretung.8-stellvertretung-k-pdf.p04.8-die-stellvertretung","recht.stellvertretung.8-stellvertretung-k-pdf.p18.dr-simon-gerdemann"]
  }),
  card({
    id: 'recht.agb.agb_begriff',
    conceptId: 'agb',
    officialNotation: "agb",
    displayFormula: {"mode":"schema","layout":"chain","parts":["vorformuliert","+","für Vielzahl","+","gestellt"]},
    intuition: "Vorliegen von AGB ist eine eigene erste Sachfrage.",
    derivationSteps: [
        {
            "label": "AGB-Begriff",
            "text": "Dr. Simon Gerdemann, LL.M.   (Berkeley)",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "vorformuliert",
                    "+",
                    "für Vielzahl",
                    "+",
                    "gestellt"
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
    appliesWhen: ["Klausuraufgaben zu agb","AGB-Begriff"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: AGB-Begriff — Vorliegen von AGB ist eine eigene erste Sachfrage.",
    relatedTaskFamilies: ["recht.taskfamily.agb-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.agb.9-agb-recht-k-pdf.p12.dr-simon-gerdemann-ll-m-","recht.agb.9-agb-recht-k-pdf.p04.4-inhaltskontrolle-307-3"]
  }),
  card({
    id: 'recht.agb.einbeziehung',
    conceptId: 'agb',
    officialNotation: "agb",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Hinweis","+","Kenntnisnahme","+","Einverständnis"]},
    intuition: "Erst dann werden AGB Vertragsbestandteil.",
    derivationSteps: [
        {
            "label": "Einbeziehung",
            "text": "Dr. Simon Gerdemann, LL.M.   (Berkeley)",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Hinweis",
                    "+",
                    "Kenntnisnahme",
                    "+",
                    "Einverständnis"
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
    appliesWhen: ["Klausuraufgaben zu agb","Einbeziehung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Einbeziehung — Erst dann werden AGB Vertragsbestandteil.",
    relatedTaskFamilies: ["recht.taskfamily.agb-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.agb.9-agb-recht-k-pdf.p12.dr-simon-gerdemann-ll-m-","recht.agb.9-agb-recht-k-pdf.p04.4-inhaltskontrolle-307-3"]
  }),
  card({
    id: 'recht.agb.vorrang_individualabrede',
    conceptId: 'agb',
    officialNotation: "agb",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 305b BGB"]},
    intuition: "Das konkret Vereinbarte verdrängt kollidierende AGB.",
    derivationSteps: [
        {
            "label": "Vorrang Individualabrede",
            "text": "Dr. Simon Gerdemann, LL.M.   (Berkeley)",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 305b BGB"
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
    appliesWhen: ["Klausuraufgaben zu agb","Vorrang Individualabrede"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Vorrang Individualabrede — Das konkret Vereinbarte verdrängt kollidierende AGB.",
    relatedTaskFamilies: ["recht.taskfamily.agb-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.agb.9-agb-recht-k-pdf.p12.dr-simon-gerdemann-ll-m-","recht.agb.9-agb-recht-k-pdf.p04.4-inhaltskontrolle-307-3"]
  }),
  card({
    id: 'recht.agb.berraschende_klausel',
    conceptId: 'agb',
    officialNotation: "agb",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 305c BGB"]},
    intuition: "Kann schon vor der eigentlichen Inhaltskontrolle ausscheiden.",
    derivationSteps: [
        {
            "label": "Überraschende Klausel",
            "text": "Dr. Simon Gerdemann, LL.M.   (Berkeley)",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 305c BGB"
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
    appliesWhen: ["Klausuraufgaben zu agb","Überraschende Klausel"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Überraschende Klausel — Kann schon vor der eigentlichen Inhaltskontrolle ausscheiden.",
    relatedTaskFamilies: ["recht.taskfamily.agb-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.agb.9-agb-recht-k-pdf.p12.dr-simon-gerdemann-ll-m-","recht.agb.9-agb-recht-k-pdf.p04.4-inhaltskontrolle-307-3"]
  }),
  card({
    id: 'recht.agb.kontrolle',
    conceptId: 'agb',
    officialNotation: "agb",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§§ 307-309 BGB"]},
    intuition: "Inhaltskontrolle kommt erst nach Einbeziehung und Vorfragen.",
    derivationSteps: [
        {
            "label": "Kontrolle",
            "text": "Dr. Simon Gerdemann, LL.M.   (Berkeley)",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§§ 307-309 BGB"
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
    appliesWhen: ["Klausuraufgaben zu agb","Kontrolle"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Kontrolle — Inhaltskontrolle kommt erst nach Einbeziehung und Vorfragen.",
    relatedTaskFamilies: ["recht.taskfamily.agb-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.agb.9-agb-recht-k-pdf.p12.dr-simon-gerdemann-ll-m-","recht.agb.9-agb-recht-k-pdf.p04.4-inhaltskontrolle-307-3"]
  }),
  card({
    id: 'recht.schuldrecht_intro.schuldverh_ltnis',
    conceptId: 'schuldrecht_intro',
    officialNotation: "schuldrecht_intro",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Leistungspflichten","+","Nebenpflichten"]},
    intuition: "Beide Ebenen können verletzt werden.",
    derivationSteps: [
        {
            "label": "Schuldverhältnis",
            "text": "§ 10 Schuldrecht - Einführung",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Leistungspflichten",
                    "+",
                    "Nebenpflichten"
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
    appliesWhen: ["Klausuraufgaben zu schuldrecht_intro","Schuldverhältnis"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Schuldverhältnis — Beide Ebenen können verletzt werden.",
    relatedTaskFamilies: ["recht.taskfamily.schuldrecht_intro-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p11.10-schuldrecht-einf-hrun","recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p13.271-bgb-und-einen-konkre"]
  }),
  card({
    id: 'recht.schuldrecht_intro.anspruch',
    conceptId: 'schuldrecht_intro',
    officialNotation: "schuldrecht_intro",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["Recht, ein Tun oder Unterlassen zu verlangen"]},
    intuition: "Ein Schuldverhältnis kann mehrere konkrete Ansprüche enthalten.",
    derivationSteps: [
        {
            "label": "Anspruch",
            "text": "§ 10 Schuldrecht - Einführung",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "Recht, ein Tun oder Unterlassen zu verlangen"
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
    appliesWhen: ["Klausuraufgaben zu schuldrecht_intro","Anspruch"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Anspruch — Ein Schuldverhältnis kann mehrere konkrete Ansprüche enthalten.",
    relatedTaskFamilies: ["recht.taskfamily.schuldrecht_intro-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p11.10-schuldrecht-einf-hrun","recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p13.271-bgb-und-einen-konkre"]
  }),
  card({
    id: 'recht.schuldrecht_intro.pflichtverletzung',
    conceptId: 'schuldrecht_intro',
    officialNotation: "schuldrecht_intro",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["Abweichung von Leistung oder Rücksichtnahme"]},
    intuition: "Ausgangspunkt vieler Ansprüche im Schuldrecht AT.",
    derivationSteps: [
        {
            "label": "Pflichtverletzung",
            "text": "§ 10 Schuldrecht - Einführung",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "Abweichung von Leistung oder Rücksichtnahme"
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
    appliesWhen: ["Klausuraufgaben zu schuldrecht_intro","Pflichtverletzung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Pflichtverletzung — Ausgangspunkt vieler Ansprüche im Schuldrecht AT.",
    relatedTaskFamilies: ["recht.taskfamily.schuldrecht_intro-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p11.10-schuldrecht-einf-hrun","recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p13.271-bgb-und-einen-konkre"]
  }),
  card({
    id: 'recht.schuldrecht_intro.pr_fungskette',
    conceptId: 'schuldrecht_intro',
    officialNotation: "schuldrecht_intro",
    displayFormula: {"mode":"schema","layout":"chain","parts":["entstanden","→","untergegangen","→","durchsetzbar"]},
    intuition: "Auch im Schuldrecht bleibt die Methodik leitend.",
    derivationSteps: [
        {
            "label": "Prüfungskette",
            "text": "§ 10 Schuldrecht - Einführung",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "entstanden",
                    "→",
                    "untergegangen",
                    "→",
                    "durchsetzbar"
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
    appliesWhen: ["Klausuraufgaben zu schuldrecht_intro","Prüfungskette"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Prüfungskette — Auch im Schuldrecht bleibt die Methodik leitend.",
    relatedTaskFamilies: ["recht.taskfamily.schuldrecht_intro-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p11.10-schuldrecht-einf-hrun","recht.schuldrecht_intro.10-schuldrecht-at-einf-h.p13.271-bgb-und-einen-konkre"]
  }),
  card({
    id: 'recht.schadensersatz.schadensersatz_neben_der_leistun',
    conceptId: 'schadensersatz',
    officialNotation: "schadensersatz",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 280 I BGB"]},
    intuition: "Pflichtverletzung genügt, wenn keine Ersatzleistung an die Stelle der Hauptleistung tritt.",
    derivationSteps: [
        {
            "label": "Schadensersatz neben der Leistung",
            "text": "D. Fall mit Lösungsskizze zum Abschluss",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 280 I BGB"
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
    appliesWhen: ["Klausuraufgaben zu schadensersatz","Schadensersatz neben der Leistung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Schadensersatz neben der Leistung — Pflichtverletzung genügt, wenn keine Ersatzleistung an die Stelle der Hauptleist",
    relatedTaskFamilies: ["recht.taskfamily.schadensersatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.schadensersatz.11-schuldrecht-at-schade.p14.d-fall-mit-l-sungsskizze","recht.schadensersatz.11-schuldrecht-at-schade.p16.ii-pflichtverletzung"]
  }),
  card({
    id: 'recht.schadensersatz.schadensersatz_statt_der_leistun',
    conceptId: 'schadensersatz',
    officialNotation: "schadensersatz",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§§ 280 I, III, 281 BGB"]},
    intuition: "Regelmäßig mit erfolgloser Fristsetzung.",
    derivationSteps: [
        {
            "label": "Schadensersatz statt der Leistung",
            "text": "D. Fall mit Lösungsskizze zum Abschluss",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§§ 280 I, III, 281 BGB"
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
    appliesWhen: ["Klausuraufgaben zu schadensersatz","Schadensersatz statt der Leistung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Schadensersatz statt der Leistung — Regelmäßig mit erfolgloser Fristsetzung.",
    relatedTaskFamilies: ["recht.taskfamily.schadensersatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.schadensersatz.11-schuldrecht-at-schade.p14.d-fall-mit-l-sungsskizze","recht.schadensersatz.11-schuldrecht-at-schade.p16.ii-pflichtverletzung"]
  }),
  card({
    id: 'recht.schadensersatz.verzugsschaden',
    conceptId: 'schadensersatz',
    officialNotation: "schadensersatz",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§§ 280 I, II, 286 BGB"]},
    intuition: "Eigene Schiene bei Verzögerung der Leistung.",
    derivationSteps: [
        {
            "label": "Verzugsschaden",
            "text": "D. Fall mit Lösungsskizze zum Abschluss",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§§ 280 I, II, 286 BGB"
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
    appliesWhen: ["Klausuraufgaben zu schadensersatz","Verzugsschaden"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Verzugsschaden — Eigene Schiene bei Verzögerung der Leistung.",
    relatedTaskFamilies: ["recht.taskfamily.schadensersatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.schadensersatz.11-schuldrecht-at-schade.p14.d-fall-mit-l-sungsskizze","recht.schadensersatz.11-schuldrecht-at-schade.p16.ii-pflichtverletzung"]
  }),
  card({
    id: 'recht.schadensersatz.unm_glichkeit',
    conceptId: 'schadensersatz',
    officialNotation: "schadensersatz",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§§ 280 I, III, 283 BGB"]},
    intuition: "Schadensersatzpfad bei endgültiger Leistungshindernis.",
    derivationSteps: [
        {
            "label": "Unmöglichkeit",
            "text": "D. Fall mit Lösungsskizze zum Abschluss",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§§ 280 I, III, 283 BGB"
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
    appliesWhen: ["Klausuraufgaben zu schadensersatz","Unmöglichkeit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Unmöglichkeit — Schadensersatzpfad bei endgültiger Leistungshindernis.",
    relatedTaskFamilies: ["recht.taskfamily.schadensersatz-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.schadensersatz.11-schuldrecht-at-schade.p14.d-fall-mit-l-sungsskizze","recht.schadensersatz.11-schuldrecht-at-schade.p16.ii-pflichtverletzung"]
  }),
  card({
    id: 'recht.ruecktritt.r_cktritt_wegen_schlechtleistung',
    conceptId: 'ruecktritt',
    officialNotation: "ruecktritt",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§§ 323, 346 BGB"]},
    intuition: "Standardpfad bei Nicht- oder Schlechtleistung trotz Fristsetzung.",
    derivationSteps: [
        {
            "label": "Rücktritt wegen Schlechtleistung",
            "text": "und Verbraucher-Widerruf",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§§ 323, 346 BGB"
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
    appliesWhen: ["Klausuraufgaben zu ruecktritt","Rücktritt wegen Schlechtleistung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rücktritt wegen Schlechtleistung — Standardpfad bei Nicht- oder Schlechtleistung trotz Fristsetzung.",
    relatedTaskFamilies: ["recht.taskfamily.ruecktritt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.ruecktritt.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf","recht.ruecktritt.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b"]
  }),
  card({
    id: 'recht.ruecktritt.r_cktritt_wegen_unm_glichkeit',
    conceptId: 'ruecktritt',
    officialNotation: "ruecktritt",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§§ 326 V, 323, 346 BGB"]},
    intuition: "Wichtiger Sonderpfad ohne klassische Nachfristlogik.",
    derivationSteps: [
        {
            "label": "Rücktritt wegen Unmöglichkeit",
            "text": "und Verbraucher-Widerruf",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§§ 326 V, 323, 346 BGB"
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
    appliesWhen: ["Klausuraufgaben zu ruecktritt","Rücktritt wegen Unmöglichkeit"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rücktritt wegen Unmöglichkeit — Wichtiger Sonderpfad ohne klassische Nachfristlogik.",
    relatedTaskFamilies: ["recht.taskfamily.ruecktritt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.ruecktritt.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf","recht.ruecktritt.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b"]
  }),
  card({
    id: 'recht.ruecktritt.r_cktrittserkl_rung',
    conceptId: 'ruecktritt',
    officialNotation: "ruecktritt",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 349 BGB"]},
    intuition: "Gestaltungsrecht braucht eine klare Erklärung.",
    derivationSteps: [
        {
            "label": "Rücktrittserklärung",
            "text": "und Verbraucher-Widerruf",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 349 BGB"
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
    appliesWhen: ["Klausuraufgaben zu ruecktritt","Rücktrittserklärung"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rücktrittserklärung — Gestaltungsrecht braucht eine klare Erklärung.",
    relatedTaskFamilies: ["recht.taskfamily.ruecktritt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.ruecktritt.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf","recht.ruecktritt.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b"]
  }),
  card({
    id: 'recht.ruecktritt.rechtsfolge',
    conceptId: 'ruecktritt',
    officialNotation: "ruecktritt",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 346 BGB"]},
    intuition: "Rückgewähr und ggf. Wertersatz gehören auf die Folgeebene.",
    derivationSteps: [
        {
            "label": "Rechtsfolge",
            "text": "und Verbraucher-Widerruf",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 346 BGB"
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
    appliesWhen: ["Klausuraufgaben zu ruecktritt","Rechtsfolge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rechtsfolge — Rückgewähr und ggf. Wertersatz gehören auf die Folgeebene.",
    relatedTaskFamilies: ["recht.taskfamily.ruecktritt-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.ruecktritt.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf","recht.ruecktritt.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b"]
  }),
  card({
    id: 'recht.verbraucherwiderruf.basisnorm',
    conceptId: 'verbraucherwiderruf',
    officialNotation: "verbraucherwiderruf",
    displayFormula: {"mode":"reference","layout":"stack","entries":["§ 355 BGB"]},
    intuition: "Regelt Erklärung, Frist und Rechtsfolge, schafft aber nicht allein den Vertragstyp.",
    derivationSteps: [
        {
            "label": "Basisnorm",
            "text": "und Verbraucher-Widerruf",
            "math": {
                "mode": "reference",
                "layout": "stack",
                "entries": [
                    "§ 355 BGB"
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
    appliesWhen: ["Klausuraufgaben zu verbraucherwiderruf","Basisnorm"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Basisnorm — Regelt Erklärung, Frist und Rechtsfolge, schafft aber nicht allein den Vertragst",
    relatedTaskFamilies: ["recht.taskfamily.verbraucherwiderruf-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf","recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b"]
  }),
  card({
    id: 'recht.verbraucherwiderruf.pers_nliche_voraussetzungen',
    conceptId: 'verbraucherwiderruf',
    officialNotation: "verbraucherwiderruf",
    displayFormula: {"mode":"schema","layout":"chain","parts":["Verbraucher","+","Unternehmer"]},
    intuition: "§§ 13, 14 BGB sind Standardbausteine der Prüfung.",
    derivationSteps: [
        {
            "label": "Persönliche Voraussetzungen",
            "text": "und Verbraucher-Widerruf",
            "math": {
                "mode": "schema",
                "layout": "chain",
                "parts": [
                    "Verbraucher",
                    "+",
                    "Unternehmer"
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
    appliesWhen: ["Klausuraufgaben zu verbraucherwiderruf","Persönliche Voraussetzungen"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Persönliche Voraussetzungen — §§ 13, 14 BGB sind Standardbausteine der Prüfung.",
    relatedTaskFamilies: ["recht.taskfamily.verbraucherwiderruf-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf","recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b"]
  }),
  card({
    id: 'recht.verbraucherwiderruf.frist',
    conceptId: 'verbraucherwiderruf',
    officialNotation: "verbraucherwiderruf",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["14 Tage"]},
    intuition: "Regelmäßig ab Vertragsschluss; rechtzeitige Absendung genügt.",
    derivationSteps: [
        {
            "label": "Frist",
            "text": "und Verbraucher-Widerruf",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "14 Tage"
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
    appliesWhen: ["Klausuraufgaben zu verbraucherwiderruf","Frist"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Frist — Regelmäßig ab Vertragsschluss; rechtzeitige Absendung genügt.",
    relatedTaskFamilies: ["recht.taskfamily.verbraucherwiderruf-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf","recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b"]
  }),
  card({
    id: 'recht.verbraucherwiderruf.rechtsfolge',
    conceptId: 'verbraucherwiderruf',
    officialNotation: "verbraucherwiderruf",
    displayFormula: {"mode":"schema","layout":"phrase","parts":["Rückgewährschuldverhältnis"]},
    intuition: "Ähnelt dem Rücktritt, beruht aber auf anderem Normzweck.",
    derivationSteps: [
        {
            "label": "Rechtsfolge",
            "text": "und Verbraucher-Widerruf",
            "math": {
                "mode": "schema",
                "layout": "phrase",
                "parts": [
                    "Rückgewährschuldverhältnis"
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
    appliesWhen: ["Klausuraufgaben zu verbraucherwiderruf","Rechtsfolge"],
    failsWhen: ["Voraussetzungen der VL-Ableitung verletzt","falsche Formel für den Aufgabentyp gewählt"],
    examShortcut: "Merke: Rechtsfolge — Ähnelt dem Rücktritt, beruht aber auf anderem Normzweck.",
    relatedTaskFamilies: ["recht.taskfamily.verbraucherwiderruf-vl-pattern"],
    commonMistakes: ["Formel ohne Kontext anwenden","VL-Notation mit Übungsblatt-Notation verwechseln"],
    anchorIds: ["recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p02.und-verbraucher-widerruf","recht.verbraucherwiderruf.12-schuldrecht-at-r-cktr.p04.c-verbraucher-widerruf-b"]
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

