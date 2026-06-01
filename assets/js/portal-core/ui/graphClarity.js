/**
 * Per-concept clarity copy: Was du siehst, Regler-Wirkung, HTML-Farb-Legende.
 */

/** @typedef {{ role: string, label: string }} GraphLegendItem */
/** @typedef {{ see: string, sliderEffect?: string, legend: GraphLegendItem[] }} GraphClarityEntry */

/** @type {Record<string, GraphClarityEntry>} */
export const GRAPH_CLARITY = {
  // —— mikro1 ——
  budget: {
    see: "Die Budgetgerade grenzt im (x₁,x₂)-Diagramm die Konsumbündel ab, die bei gegebenem Einkommen m und Preisen p₁, p₂ erreichbar sind.",
    sliderEffect: "m verschiebt parallel; höheres p₁ dreht die Gerade am x₁-Achsenabschnitt; höheres p₂ am x₂-Achsenabschnitt.",
    legend: [
      { role: "budget", label: "Budgetgerade — erreichbare Bündel" },
      { role: "optimum", label: "Achsenabschnitte m/p₁ und m/p₂" }
    ]
  },
  indiff: {
    see: "Zwei Indifferenzkurven u = x₁·x₂ mit unterschiedlichem Nutzenniveau — weiter vom Ursprung bedeutet höherer Nutzen.",
    sliderEffect: "ū₁ und ū₂ wählen die beiden Nutzenniveaus; die Kurvenform bleibt, die Lage verschiebt sich.",
    legend: [{ role: "indifference", label: "Indifferenzkurven (höher = besser)" }]
  },
  hausopt: {
    see: "Tangentialpunkt von Budgetgerade und Indifferenzkurve — inneres Optimum des Haushalts.",
    sliderEffect: "Einkommen und Preise verschieben Budget; der Tangentialpunkt wandert entlang der IK.",
    legend: [
      { role: "budget", label: "Budgetgerade" },
      { role: "indifference", label: "Indifferenzkurve im Optimum" },
      { role: "optimum", label: "Haushaltsoptimum (Tangentialpunkt)" }
    ]
  },
  slutsky: {
    see: "Slutsky-Zerlegung: Gesamteffekt, Substitution entlang alter IK, Einkommenseffekt auf neue Budgetlinie.",
    sliderEffect: "Preisänderung von Gut 1 — beobachten Sie zuerst Kompensation, dann Einkommensanpassung.",
    legend: [
      { role: "budget", label: "alte / neue Budgetgerade" },
      { role: "indifference", label: "Hilfs- und End-Indifferenzkurve" },
      { role: "reference", label: "Substitutions- vs. Einkommenspfad" }
    ]
  },
  produktion: {
    see: "Isoquante ȳ = f(L,K) — Kombinationen von Arbeit L und Kapital K mit gleichem Output.",
    sliderEffect: "α und ȳ ändern Krümmung und Lage der Isoquante; L markiert einen Produktionspunkt.",
    legend: [{ role: "indifference", label: "Isoquante (Produktionsniveau)" }]
  },
  grts: {
    see: "Tangente an die Isoquante — Steigung = GRTS (technische Substitutionsrate).",
    sliderEffect: "Bewegen Sie L entlang der Kurve: die Tangente zeigt die lokale Faktorintensität.",
    legend: [
      { role: "indifference", label: "Isoquante" },
      { role: "mc", label: "Tangente = GRTS" }
    ]
  },
  kosten: {
    see: "Kostenminimum: Tangentialpunkt von Isoquante und Isokostengerade wL + rK.",
    sliderEffect: "w und r drehen die Isokosten; ȳ fixiert die Isoquante.",
    legend: [
      { role: "indifference", label: "Isoquante" },
      { role: "budget", label: "Isokostengerade" },
      { role: "optimum", label: "Kostenminimum" }
    ]
  },
  markt: {
    see: "Angebot und Nachfrage im (p,q)-Diagramm — Schnittpunkt = Wettbewerbsgleichgewicht.",
    sliderEffect: "Verschieben Sie Nachfrage oder Angebot — beobachten Sie neues p* und q*.",
    legend: [
      { role: "demand", label: "Nachfrage" },
      { role: "supply", label: "Angebot" },
      { role: "optimum", label: "Marktgleichgewicht" }
    ]
  },
  monopol: {
    see: "Monopol: MR schneidet MC; Preis liegt auf der Nachfragekurve über MC.",
    sliderEffect: "Nachfrageparameter ändern — MR dreht mit; Optimum wandert entlang MC.",
    legend: [
      { role: "demand", label: "Nachfrage" },
      { role: "mr", label: "Grenzerlös MR" },
      { role: "mc", label: "Grenzkosten MC" }
    ]
  },
  // —— mikro2 ——
  spieltheorie_statisch: {
    see: "Auszahlungsmatrix — markiertes Feld = Nash-Gleichgewicht (keine profitable einseitige Abweichung).",
    legend: [{ role: "optimum", label: "Nash-Gleichgewicht (markiert)" }]
  },
  spieltheorie_dynamisch: {
    see: "Erwartungsnutzen-Kurven zweier Strategien — Schnitt = gemischtes Gleichgewicht.",
    legend: [{ role: "demand", label: "Erwartungsnutzen Strategie 1" }, { role: "supply", label: "Strategie 2" }]
  },
  oligopol_cournot_bertrand: {
    see: "Reaktionsfunktionen im (q₁,q₂)-Raum — Schnitt = Cournot-Nash-Mengen.",
    legend: [
      { role: "demand", label: "Reaktionsfunktion Firma 1" },
      { role: "supply", label: "Reaktionsfunktion Firma 2" },
      { role: "optimum", label: "Cournot-Nash" }
    ]
  },
  oligopol_stackelberg: {
    see: "Stackelberg: Führer wählt zuerst; Folger-Reaktion bestimmt die Führerlösung.",
    legend: [{ role: "demand", label: "Folger-Reaktion" }, { role: "optimum", label: "Stackelberg-Punkt" }]
  },
  gleichgewicht_tausch: {
    see: "Edgeworth-Box: Endowment und Kontraktkurve pareto-effizienter Tauschpunkte.",
    legend: [{ role: "indifference", label: "Indifferenzkurven beider Häuser" }, { role: "reference", label: "Kontraktkurve" }]
  },
  gleichgewicht_walras: {
    see: "Überschussnachfrage Z(p) — Nullstelle = Walras-Preis p*.",
    sliderEffect: "Parameter verschieben Angebot/Nachfrage — p* wandert entlang der Achse.",
    legend: [{ role: "demand", label: "Überschussnachfrage Z(p)" }, { role: "optimum", label: "Walras-Preis p*" }]
  },
  externa_pigou: {
    see: "Wohlfahrtslücke: MB, private MC und soziale MC (MC + Schaden).",
    legend: [
      { role: "demand", label: "Grenznutzen MB" },
      { role: "mc", label: "private MC" },
      { role: "residual", label: "soziale MC" }
    ]
  },
  externa_institutionen: {
    see: "Grenzvermeidungskosten und Emissionspreis — Internalisierung der Externalität.",
    legend: [{ role: "mc", label: "Grenzvermeidungskosten" }, { role: "budget", label: "Emissionspreis" }]
  },
  // —— makro1 ——
  guetermarkt: {
    see: "Keynes-Kreuz: 45°-Linie und Nachfragefunktion — Schnitt = Gleichgewichtsprodukt Y*.",
    sliderEffect: "A und c₁ verschieben die Nachfrage — Y* und Multiplikator ändern sich.",
    legend: [
      { role: "reference", label: "45°-Linie (Y = Ausgaben)" },
      { role: "demand", label: "Gesamtnachfrage" },
      { role: "optimum", label: "Gleichgewicht Y*" }
    ]
  },
  multiplikator: {
    see: "Auswirkung einer autonomen Nachfrageänderung ΔA auf Einkommen über den Multiplikator.",
    sliderEffect: "Sparquote c₁ senkt den Multiplikator — gleiches ΔA wirkt schwächer.",
    legend: [{ role: "demand", label: "Nachfrageverschiebung" }, { role: "optimum", label: "neues Y" }]
  },
  geldnachfrage: {
    see: "Liquiditätspräferenz L(i,Y) — steigende Geldnachfrage bei fallendem Zins.",
    sliderEffect: "Einkommen Y verschiebt die Geldnachfragekurve nach rechts.",
    legend: [{ role: "demand", label: "Geldnachfrage L(i)" }]
  },
  islm: {
    see: "IS-LM im (Y,i)-Raum — Schnitt bestimmt kurzfristiges Gleichgewicht.",
    sliderEffect: "Fiskalpolitik verschiebt IS; Geldpolitik verschiebt LM.",
    legend: [
      { role: "isCurve", label: "IS (Gütermarkt)" },
      { role: "lmCurve", label: "LM (Geldmarkt)" },
      { role: "optimum", label: "Gleichgewicht (Y,i)" }
    ]
  },
  politikmix: {
    see: "Politikmix: unterschiedliche LM-Steilheit — gleiche IS-Verschiebung, anderes (Y,i).",
    sliderEffect: "Vergleichen Sie Endpunkte vor/nach der Politikmaßnahme.",
    legend: [{ role: "isCurve", label: "IS" }, { role: "lmCurve", label: "LM (flach/steil)" }]
  },
  arbeitsmarkt: {
    see: "Arbeitsmarkt: Lohn und Beschäftigung — Schnitt aus Nachfrage und Angebot nach Arbeit.",
    sliderEffect: "Schocks verschieben Arbeitsnachfrage oder -angebot.",
    legend: [{ role: "demand", label: "Arbeitsnachfrage" }, { role: "supply", label: "Arbeitsangebot" }]
  },
  phillips: {
    see: "Phillips-Kurve π(u): Inflation vs. Arbeitslosigkeit — Erwartungen verschieben die Kurve.",
    sliderEffect: "π^e nach oben = Kurvenverschiebung (nicht Bewegung entlang derselben Kurve).",
    legend: [{ role: "demand", label: "Phillips-Kurve" }, { role: "reference", label: "Erwartungsniveau" }]
  },
  islmpc: {
    see: "IS-LM-PC: Verknüpfung von Güter-, Geld- und Inflationsdynamik.",
    legend: [{ role: "isCurve", label: "IS" }, { role: "lmCurve", label: "LM" }, { role: "demand", label: "PC" }]
  },
  // —— makro2 (sample — defaults cover rest) ——
  wechselkurs: {
    see: "Realer Wechselkurs q — Zusammenhang nominaler Kurs und Preisniveaus.",
    sliderEffect: "E_nom und Preisniveaus verschieben q entlang der Kaufkraftparität.",
    legend: [{ role: "demand", label: "Kursrelation" }]
  },
  mundell_fleming: {
    see: "Mundell-Fleming (Y,i): IS-LM unter offener Volkswirtschaft und Wechselkursregime.",
    sliderEffect: "Gleicher Schock — flexibler vs. fester Kurs: anderer Anpassungskanal.",
    legend: [{ role: "isCurve", label: "IS*" }, { role: "lmCurve", label: "LM*" }]
  },
  marshall_lerner: {
    see: "Nettoexporte und Wechselkurs — J-Kurve und Marshall-Lerner-Bedingung.",
    sliderEffect: "Elasticitäten ändern Steigung und Zeitpfad der Anpassung.",
    legend: [{ role: "demand", label: "Nettoexporte NX(e)" }]
  },
  phillipskurve: {
    see: "Inflationsdynamik vs. Arbeitslosenlücke — Erwartungen und Anker.",
    sliderEffect: "Erwartungsanpassung verschiebt die Kurve vertikal.",
    legend: [{ role: "demand", label: "Phillips-Kurve" }]
  },
  solow_basis: {
    see: "Solow-Diagramm: Investition pro Kopf und Breakeven-Linie (n+δ)k.",
    sliderEffect: "Sparquote s hebt die Investitionskurve — neues steady state k*.",
    legend: [{ role: "demand", label: "s·f(k)" }, { role: "reference", label: "(n+δ)k" }]
  },
  // —— statistik ——
  bivariat: {
    see: "Streudiagramm (x,y) mit Regressionsrichtung — Korrelation sichtbar als Wolkenform.",
    sliderEffect: "r dreht die Wolke; Niveauverschiebung verschiebt den Schwerpunkt.",
    legend: [{ role: "data", label: "Stichprobenpunkte" }, { role: "fit", label: "lineare Tendenz" }]
  },
  schaetzen_eigenschaften_intervalle: {
    see: "Punktschätzer x̄ und 95%-KI — breiteres Intervall bei kleinerem n oder größerem s.",
    sliderEffect: "n verkleinert das KI; größeres s vergrößert es.",
    legend: [{ role: "optimum", label: "x̄" }, { role: "fit", label: "Konfidenzintervall" }]
  },
  regression_schaetzung_inferenz: {
    see: "OLS-Gerade durch die Wolke — Steigung ≈ β₁, Streuung = Residuen.",
    sliderEffect: "β₀, β₁ und Streuung ändern Lage und Anpassungsgüte.",
    legend: [{ role: "data", label: "Daten" }, { role: "fit", label: "OLS-Gerade" }]
  },
  regression_diagnostik_prognose: {
    see: "Prognoseintervall um x₀ — breiter als KI wegen Einzelbeobachtungsunsicherheit.",
    sliderEffect: "Heteroskedastizität verbreitert das Band nach außen.",
    legend: [{ role: "fit", label: "Regression" }, { role: "residual", label: "Prognoseband" }]
  },
  // —— oekonometrie ——
  ols_objective: {
    see: "Punktwolke mit OLS-Linie — Residuen senkrecht zur x-Achse (KM 1.1).",
    sliderEffect: "σ_u und β₁ ändern Streuung und Steigung der Schätzgerade.",
    legend: [{ role: "data", label: "Beobachtungen" }, { role: "fit", label: "OLS" }, { role: "residual", label: "Residuen" }]
  },
  endogeneity_ovb: {
    see: "OVB: wahre Gruppe vs. verzerrte Pooled-Linie durch weggelassenen Regressor.",
    legend: [{ role: "data", label: "Gruppen" }, { role: "fit", label: "verzerrte Gerade" }, { role: "reference", label: "wahre Beziehung" }]
  },
  prediction_intervals: {
    see: "Mittelwert-KI vs. Prognoseintervall für neuen x₀.",
    sliderEffect: "x₀ weiter vom Zentrum — breiteres Prognoseband.",
    legend: [{ role: "fit", label: "Regression" }, { role: "residual", label: "Prognoseband" }]
  },
  heteroskedasticity: {
    see: "Residuenplot — Fächerform = heteroskedastische Varianz.",
    sliderEffect: "Stärke der Heteroskedastizität vergrößert den Fächer.",
    legend: [{ role: "residual", label: "Residuen" }, { role: "reference", label: "Nullinie" }]
  },
  autocorrelation: {
    see: "Seriell korrelierte Residuen über die Zeit — Muster statt Zufall.",
    legend: [{ role: "residual", label: "ε_t über t" }]
  },
  // —— mathematik ——
  funktionen_gleichungen: {
    see: "Grundparabel und Transformation a(x−c)²+d — Scheitel und Streckung.",
    sliderEffect: "a streckt; c verschiebt horizontal; d vertikal.",
    legend: [{ role: "reference", label: "Grundparabel" }, { role: "demand", label: "transformiert" }]
  },
  analysis_ableitung_grundlagen: {
    see: "Funktion mit Tangente in x₀ — Steigung = f′(x₀).",
    sliderEffect: "x₀ entlang der Kurve — Tangente zeigt lokale Änderungsrate.",
    legend: [{ role: "demand", label: "f(x)" }, { role: "mc", label: "Tangente" }]
  },
  univariate_optimierung: {
    see: "Gewinnparabel — Maximum im inneren Bereich (concave).",
    sliderEffect: "b verschiebt die Lage des Optimums entlang der Achse.",
    legend: [{ role: "demand", label: "Gewinn G(x)" }, { role: "optimum", label: "Maximum" }]
  },
  lagrange: {
    see: "Niveaukurven der Zielfunktion mit linearer Nebenbedingung — Tangentialpunkt = Optimum.",
    sliderEffect: "m verschiebt die Nebenbedingung — Optimum wandert entlang der Kurvenschar.",
    legend: [{ role: "indifference", label: "Niveaukurven" }, { role: "budget", label: "Nebenbedingung" }]
  },
  // —— finanz ——
  liquiditaetsplanung: {
    see: "Kumulierte Zahlungsreihe — tiefster Punkt = maximaler Kapitalbedarf.",
    sliderEffect: "Auszahlungen und Rückflüsse verschieben das Profil und das Minimum.",
    legend: [{ role: "demand", label: "Kumulierte Zahlung" }, { role: "optimum", label: "Kapitalbedarf" }]
  },
  intertemporale_wahl: {
    see: "Intertemporale Budgetgerade und Optimalpunkt (c₁,c₂).",
    sliderEffect: "Zins und Einkommen drehen/verschieben die Budgetgerade.",
    legend: [{ role: "budget", label: "Budgetgerade" }, { role: "optimum", label: "Optimum" }]
  },
  // —— iwb ——
  ricardo: {
    see: "PPF und Handelsdreieck — komparative Vorteile aus Opportunitätskosten.",
    sliderEffect: "OK Home/Foreign ändern Steigung der PPF und Spezialisierung.",
    legend: [{ role: "supply", label: "PPF Home" }, { role: "demand", label: "PPF Foreign" }]
  }
};

const MODULE_FALLBACK = {
  makro2: {
    see: "Makro-Diagramm — Achsen bezeichnen ökonomische Größen; markierte Punkte sind Gleichgewichte oder Pfade.",
    sliderEffect: "Regler simulieren Parameter- oder Schockänderungen — Kurvenverschiebung vs. Bewegung entlang der Kurve unterscheiden.",
    legend: [{ role: "demand", label: "Nachfrage / linke Kurve" }, { role: "supply", label: "Angebot / rechte Kurve" }]
  },
  oekonometrie: {
    see: "Ökonometrisches Diagramm — Daten, Schätzgerade und ggf. Residuen oder Intervalle.",
    sliderEffect: "Parameter ändern Schätzung, Streuung oder Bandbreite der Unsicherheit.",
    legend: [{ role: "data", label: "Daten" }, { role: "fit", label: "Schätzung" }, { role: "residual", label: "Residuen / Band" }]
  },
  mathematik: {
    see: "Funktionsgraph — geometrische Lesart einer algebraischen Beziehung.",
    sliderEffect: "Regler ändern Parameter der Funktion oder die markierte Stelle.",
    legend: [{ role: "demand", label: "Funktion f" }, { role: "mc", label: "Tangente / Grenze" }]
  },
  finanzwirtschaft: {
    see: "Finanzdiagramm — Zahlungsströme, Budget oder Bewertungsfunktion.",
    sliderEffect: "Regler ändern Zins, Cashflows oder Verschuldung.",
    legend: [{ role: "budget", label: "Budget-/Bewertungslinie" }, { role: "optimum", label: "Optimum" }]
  },
  "internationale-wirtschaftsbeziehungen": {
    see: "Offene Volkswirtschaft — Kurse, PPF oder Policy-Diagramm.",
    sliderEffect: "Parameter ändern relative Preise oder Anpassungspfade.",
    legend: [{ role: "demand", label: "Inland" }, { role: "supply", label: "Ausland / Referenz" }]
  },
  mikro2: {
    see: "Mikro-II-Diagramm — Gleichgewicht oder Reaktionslogik markiert.",
    legend: [{ role: "optimum", label: "Gleichgewicht" }, { role: "demand", label: "Reaktion / Kurve A" }]
  }
};

/**
 * @param {string} conceptId
 * @param {string} [moduleHint]
 * @returns {GraphClarityEntry}
 */
export function getGraphClarity(conceptId, moduleHint = "") {
  if (GRAPH_CLARITY[conceptId]) return GRAPH_CLARITY[conceptId];
  const mod = moduleHint || conceptId.split("_")[0] || "";
  for (const [key, fb] of Object.entries(MODULE_FALLBACK)) {
    if (mod.includes(key) || conceptId.includes(key.slice(0, 4))) return fb;
  }
  return {
    see: "Interaktives Diagramm zum aktuellen Konzept — Achsen und markierte Kurven entsprechen der Vorlesungsnotation.",
    sliderEffect: "Regler bewegen: zuerst Vorhersage, dann Kurvenvergleich mit der Interpretation unten.",
    legend: [
      { role: "demand", label: "Hauptkurve A" },
      { role: "supply", label: "Hauptkurve B" },
      { role: "optimum", label: "Gleichgewicht / Markierung" }
    ]
  };
}

/**
 * @param {GraphLegendItem[]} items
 */
export function renderGraphLegendHtml(items) {
  if (!items?.length) return "";
  const rows = items
    .map(
      (item) =>
        `<li class="graph-legend-econ-item"><span class="graph-legend-swatch graph-legend-swatch--${item.role}" aria-hidden="true"></span><span class="graph-legend-econ-text">${item.label}</span></li>`
    )
    .join("");
  return `<ul class="graph-legend-econ" aria-label="Farben in dieser Grafik">${rows}</ul>`;
}

/**
 * @param {string} conceptId
 * @param {string} [moduleHint]
 */
export function renderGraphSeeLine(conceptId, moduleHint) {
  const { see } = getGraphClarity(conceptId, moduleHint);
  return `<p class="graph-see-line"><span class="graph-see-label">Was du siehst</span> ${see}</p>`;
}
