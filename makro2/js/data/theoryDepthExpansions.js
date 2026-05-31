// Source-distilled depth blocks for Makro II (VL: offene VW, Wachstum, Geldpolitik).
// Merged in chapters.js after CONTENT definition.

const block = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (t, b) => `<div class="warn-box" data-warning-placement="rail"><strong>${t}:</strong> ${b}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  zahlungsbilanz: {
    html: block('Leistungsbilanz und Finanzierung', `
      <p>Die Leistungsbilanz misst Waren-, Dienstleistungs- und Einkommensströme mit dem Ausland. Ein Defizit bedeutet: Die Volkswirtschaft konsumiert/ investiert mehr als sie spart — spiegelbildlich Kapitalimporte.</p>
      ${math('$$CA + KA + \\Delta R = 0$$')}
    `) + block('Klausurfall: Transaktion zuordnen', `
      <p>Export von Maschinen → Leistungsbilanz; Kauf ausländischer Anleihen → Kapitalbilanz. Immer Gegenbuchung nennen.</p>
      ${warn('Handelsbilanz', 'Handelsbilanz ⊂ Leistungsbilanz; Zins- und Transferströme können den Saldo drehen.')}
    `),
    formeln: [{ label: 'S-I Identität offen', eq: '$$LB = S - I$$', desc: 'Leistungsbilanz und Ersparnis-Investitions-Saldo.' }]
  },
  wechselkurs: {
    html: block('Nominal vs. real', `
      <p>Der nominale Wechselkurs $E$ gibt Preis der ausländischen Währung; der reale Wechselkurs $\\varepsilon = E P^*/P$ berücksichtigt Preisniveaus.</p>
      ${math('$$\\varepsilon = \\frac{E P^*}{P}$$')}
    `) + block('Appreciation und Wettbewerbsfähigkeit', `
      <p>Eine nominale Aufwertung bei gegebenen Preisniveaus verschlechtert die relative Wettbewerbsfähigkeit und drückt typischerweise $NX$.</p>
    `),
    formeln: [{ label: 'Realer Wechselkurs', eq: '$$\\varepsilon = \\frac{E P^*}{P}$$', desc: 'Preisniveau-Korrektur.' }]
  },
  kaufkraftparitaet: {
    html: block('Absolute PPP', `
      <p>Absolute Kaufkraftparität: gleiche Preisniveaus implizieren $E = P/P^*$. Langfristige Niveauaussage, kurzfristig oft verletzt.</p>
    `) + block('Relative PPP und Inflation', `
      <p>Relative PPP verknüpft Wechselkursänderung mit Inflationsdifferenz: höhere Inlandsinflation → Abwertungsdruck.</p>
      ${math('$$\\hat{E} \\approx \\pi - \\pi^*$$')}
    `),
    formeln: [{ label: 'Relative PPP', eq: '$$\\hat{\\varepsilon} \\approx \\pi - \\pi^*$$', desc: 'Inflationsdifferenz und WK-Entwicklung.' }]
  },
  zinsparitaet: {
    html: block('UIP-Logik', `
      <p>Ungedeckte Zinsparität: erwartete Abwertung kompensiert Zinsdifferenz; bei hoher Kapitalmobilität $i \\approx i^* + \\mathbb{E}[\\Delta E/E]$.</p>
    `) + block('Geldpolitik unter UIP', `
      <p>Zinssenkung bei flexiblem Kurs → Abwertungserwartung → sofortige Abwertung → NX-Stützung des Gütermarkts.</p>
    `),
    formeln: [{ label: 'UIP', eq: '$$i \\approx i^* + \\mathbb{E}[\\Delta E/E]$$', desc: 'Zins- und Erwartungskanal.' }]
  },
  offene_is: {
    html: block('ZZ-Kurve und Inlandsnachfrage', `
      <p>Die Nachfrage nach inländischen Gütern (ZZ) ist flacher als die Gesamtnachfrage (DD), weil Importe mit $Y$ steigen.</p>
      ${math('$$Y = C(Y-T) + I + G + NX(Y^*,\\varepsilon)$$')}
    `) + block('Multiplikator mit Importleckage', `
      <p>Marginale Importquote $m$ reduziert den Multiplikator: $1/(1-c_1-m)$ statt $1/(1-c_1)$.</p>
      ${warn('Schock aus dem Ausland', 'Boom im Ausland ($Y^*$↑) wirkt über Exporte expansiv auf $Y$.')}
    `),
    formeln: [{ label: 'Offener Multiplikator', eq: '$$\\frac{\\partial Y}{\\partial G} = \\frac{1}{1-c_1-m}$$', desc: 'Importleckage $m$.' }],
    aufgaben: [{
      text: 'Gegeben $c_1=0{,}8$, $m=0{,}2$. Berechne den offenen Multiplikator einer Ausgabensteigerung und vergleiche mit der geschlossenen Volkswirtschaft.',
      steps: [
        { text: 'Geschlossen: $1/(1-0{,}8)=5$.', eq: null },
        { text: 'Offen: $1/(1-0{,}8-0{,}2)=2{,}5$.', eq: null },
        { text: 'Importleckage halbiert die Wirkung auf inländisches $Y$.', eq: null }
      ],
      result: 'Offener Multiplikator = 2,5 < 5 wegen Importleckage.'
    }]
  },
  nettoexporte: {
    html: block('Komparative Statik', `
      <p>$NX$ steigt mit $Y^*$ und realer Abwertung ($\\varepsilon\\uparrow$), fällt mit $Y$ (Importe).</p>
    `) + block('J-Kurve Kurzhinweis', `
      <p>Kurzfristig kann $NX$ nach Abwertung sinken (Verträge in Fremdwährung), mittelfristig steigt $NX$ (Marshall-Lerner).</p>
    `),
    formeln: [{ label: 'NX-Funktion', eq: '$$NX = X(Y^*,\\varepsilon) - IM(Y,\\varepsilon)$$', desc: 'Export minus Import.' }]
  },
  marshall_lerner: {
    html: block('Bedingung', `
      <p>Marshall-Lerner: $| \\eta_X + \\eta_M | > 1$ für eine reale Abwertung, die $NX$ verbessert.</p>
    `) + block('J-Kurve', `
      <p>Zeitverzögerung: kurzfristig Preise fix → Handelsbilanz kann sich verschlechtern, später Mengenreaktion dominiert.</p>
    `),
    formeln: [{ label: 'Marshall-Lerner', eq: '$$|\\eta_X + \\eta_M| > 1$$', desc: 'Elastizitätssumme.' }]
  },
  geldmengen: {
    html: block('LM in offener VW', `
      <p>Bei perfekter Kapitalmobilität und flexiblem Kurs ist LM effektiv horizontal bei $i=i^*$; Geldpolitik wirkt über $E$ und $NX$.</p>
    `) + block('Zinssteuerung vs. Geldmenge', `
      <p>Moderne Zentralbanken steuern oft den Leitzins; im Modell ist das eine Verschiebung von LM bzw. Akkommodation am Geldmarkt.</p>
    `),
    formeln: [{ label: 'LM offen', eq: '$$i = i^*$$', desc: 'Grenzfall perfekte Kapitalmobilität.' }]
  },
  mundell_fleming: {
    html: block('Fester Wechselkurs', `
      <p>Unter fixem Kurs und hoher Kapitalmobilität muss die Zentralbank die Parität verteidigen: Fiskalimpuls → $M$↑ → LM nach rechts → $Y$ stärker.</p>
    `) + block('Impossible Trinity', `
      <p>Trilemma: von {fester WK, freier Kapitalmobilität, autonomer Geldpolitik} sind höchstens zwei gleichzeitig erfüllbar.</p>
      ${warn('Regime zuerst', 'Ohne Regime keine Politikbewertung im M-F-Modell.')}
    `),
    formeln: [{ label: 'Fiskal unter fix', eq: '$$\\Delta G \\Rightarrow \\Delta M \\uparrow \\Rightarrow \\Delta Y$$', desc: 'Kein NX-Crowding-out über WK.' }]
  },
  wk_regime: {
    html: block('Paritätsverteidigung', `
      <p>Bei festem Kurs kauft/verkauft die Zentralbank Devisen, um $E$ zu halten; Reserven sind die Grenze der Verteidigung.</p>
    `) + block('Kapitalverkehrskontrollen', `
      <p>Mit Kontrollen kann Geldpolitik teilweise autonom bleiben; das Modell ändert sich je nach Mobilitätsannahme.</p>
    `),
    formeln: [{ label: 'Devisenintervention', eq: '$$\\Delta R \\Leftrightarrow KB$$', desc: 'Reserven und Kapitalbilanz.' }]
  },
  wk_krisen: {
    html: block('Selbsterfüllende Erwartungen', `
      <p>Erwartete Abwertung → Kapitalabzug → Zinsaufschlag → Rezession → bestätigt Abwertungsdruck.</p>
    `) + block('First-generation crisis', `
      <p>Überbewerteter fixer Kurs + schrumpfende Reserven + begrenzte Fiskalpolitik → Spekulationsangriff und Aufgabe des Pegs.</p>
    `),
    formeln: [{ label: 'Risikoprämie', eq: '$$i = i^* + \\phi + \\mathbb{E}[\\Delta E/E]$$', desc: 'Aufschlag bei Unglaubwürdigkeit.' }],
    aufgaben: [{
      text: 'Nenne drei Faktoren neben Devisenreserven, die eine Währungskrise unter festem Kurs auslösen können.',
      steps: [
        { text: 'Reale Überbewertung / Verlust der Wettbewerbsfähigkeit.', eq: null },
        { text: 'Bankenschwäche und erwartete Abwertung.', eq: null },
        { text: 'Politische Kosten der hohen Zinsverteidigung.', eq: null }
      ],
      result: 'Krisen sind Erwartungs- und Glaubwürdigkeitsprobleme, nicht nur Reservearithmetik.'
    }]
  },
  opt_waehrungsraum: {
    html: block('Mundell-Kriterien im Detail', `
      <p>Arbeitsmobilität, Preis-/Lohnflexibilität, Fiskaltransfers und symmetrische Schocks bestimmen, ob ein gemeinsamer WK optimal ist.</p>
    `) + block('Eurozone-Debatte', `
      <p>Asymmetrische Schocks (z.B. Südeuropa vs. Deutschland) ohne eigenen WK erfordern Ersatzmechanismen (Transfers, Strukturreformen).</p>
    `),
    formeln: [{ label: 'OWR-Trade-off', eq: '$$\\text{Nutzen(WU)} \\gtrless \\text{Kosten(Verzicht auf WK)}$$', desc: 'Abwägung.' }]
  },
  wirtschaftspolitik_offen: {
    html: block('Politikmatrix', `
      <table><tr><th>Regime</th><th>Fiskal</th><th>Geld</th></tr>
      <tr><td>Flexibel</td><td>schwächer</td><td>stark</td></tr>
      <tr><td>Fix</td><td>stark</td><td>schwach</td></tr></table>
    `) + block('Diagrammfolge', `
      <p>Im (Y,i)-Diagramm: IS/LM/ZP verschieben, dann WK-Reaktion einzeichnen, dann NX-Rückwirkung auf IS.</p>
    `),
    formeln: [{ label: 'M-F Theorem', eq: '$$\\text{flex: } \\Delta M \\text{ wirkt; fix: } \\Delta G \\text{ wirkt}$$', desc: 'Kapitalmobilität vorausgesetzt.' }]
  },
  phillipskurve: {
    html: block('Erwartungsaugmentiert', `
      <p>Moderne Phillipskurve: $\\pi = \\pi^e + \\kappa u + \\ldots$; erwartete Inflation verschiebt die Kurve.</p>
    `) + block('NAIRU', `
      <p>NAIRU: Arbeitslosenquote ohne Beschleunigung der Inflation; Anker für mittelfristige Geldpolitik.</p>
    `),
    formeln: [{ label: 'PC', eq: '$$\\pi = \\pi^e - \\alpha(u-u^n)$$', desc: 'Erwartungen eingebaut.' }]
  },
  barro_gordon: {
    html: block('Zeitinkonsistenz der Geldpolitik', `
      <p>Ex post will die Zentralbank höhere Inflation für Beschäftigungsgewinn; ex ante rational $\\pi^e$ steigt — kein dauerhafter Phillips-Trade-off.</p>
    `) + block('Inflationsbias', `
      <p>Ohne Commitment (Regel, Unabhängigkeit) entsteht systematischer Inflationsbias bei kurzfristiger Arbeitslosigkeit.</p>
    `),
    formeln: [{ label: 'Verlustfunktion', eq: '$$L = (\\pi-\\pi^*)^2 + \\lambda u^2$$', desc: 'Zielkonflikt.' }]
  },
  zeitinkonsistenz: {
    html: block('Commitment vs. Discretion', `
      <p>Regel (Taylor, Inflation Target) bindet zukünftiges Handeln und senkt $\\pi^e$; Diskretion erlaubt Überraschungsinflation.</p>
    `) + block('Glaubwürdigkeit', `
      <p>Unabhängigkeit der Zentralbank ist institutionelles Commitment gegen politischen Inflationsdruck.</p>
    `),
    formeln: [{ label: 'Kydland-Prescott', eq: '$$\\pi(\\text{discretion}) > \\pi(\\text{commitment})$$', desc: 'Bias unter Diskretion.' }]
  },
  taylor_regel: {
    html: block('Taylor-Regel', `
      <p>$i_t = r^* + \\pi_t + \\phi_\\pi(\\pi_t-\\pi^*) + \\phi_y(y_t-y^n)$ — reagiert auf Inflations- und Output-Lücke.</p>
    `) + block('Praxis EZB/Fed', `
      <p>Zentralbanken folgen approximativ einer Reaktionsfunktion; Abweichungen erklären Marktbewegungen.</p>
    `),
    formeln: [{ label: 'Taylor', eq: '$$i = r^* + \\pi + \\phi_\\pi(\\pi-\\pi^*) + \\phi_y(y-y^n)$$', desc: 'Leitzinsregel.' }]
  },
  inflation_targeting: {
    html: block('Inflationsziel', `
      <p>Explizites Ziel (z.B. 2%) verankert Erwartungen; Abweichungen erfordern Transparenz und Forward Guidance.</p>
    `) + block('Flexibles Targeting', `
      <p>Kurzfristige Abweichungen bei Schocks erlaubt, mittelfristig Rückkehr zum Ziel — vermeidet prozyklische Überreaktion.</p>
    `),
    formeln: [{ label: 'Zielpfad', eq: '$$\\mathbb{E}_t[\\pi_{t+k}] \\rightarrow \\pi^*$$', desc: 'Mittelfristiger Anker.' }]
  },
  inflation_kosten: {
    html: block('Menu costs & shoe-leather', `
      <p>Inflation verzerrt Preisschilder (Menu Costs) und erhöht Opportunitätskosten der Giralgeldhaltung.</p>
    `) + block('Disinflation cost', `
      <p>Disinflation kann hohe Arbeitslosenkosten haben (Sacrifice Ratio), besonders wenn $\\pi^e$ träge sind.</p>
    `),
    formeln: [{ label: 'Sacrifice ratio', eq: '$$\\frac{\\Delta u}{\\Delta \\pi}$$', desc: 'Arbeitslosigkeit pro Inflationspunkt Senkung.' }]
  },
  wachstum_fakten: {
    html: block('Kaldor-Stilisierte Fakten', `
      <p>Steady growth of Y/L, stable r, stable K/Y ratio über lange Horizonte — Motivation für Solow.</p>
    `) + block('Konvergenz empirisch', `
      <p>Ärmere Länder wachsen oft schneller conditional on policies — $\\beta$-Konvergenz in Querchnittsregressionen.</p>
    `),
    formeln: [{ label: 'Pro-Kopf-Wachstum', eq: '$$g_Y \\approx g_A + g_L$$', desc: 'Technik + Bevölkerung.' }]
  },
  aggregierte_pf: {
    html: block('Cobb-Douglas', `
      <p>$Y = A K^\\alpha L^{1-\\alpha}$; Grenzprodukte und Faktorentlohnung im Wettbewerb.</p>
    `) + block('Skalenerträge', `
      <p>Langfristig oft konstante Skalenerträge angenommen; $\\alpha$ misst Kapitalanteil am Einkommen.</p>
    `),
    formeln: [{ label: 'PF', eq: '$$Y = A K^\\alpha L^{1-\\alpha}$$', desc: 'Aggregierte Produktion.' }]
  },
  solow_basis: {
    html: block('Akkumulationsgleichung', `
      <p>$\\dot k = s f(k) - (\\delta+n)k$; Investition pro Kopf minus effektive Abschreibung und Bevölkerungswachstum.</p>
    `) + block('Goldene Regel vs. goldenes Kapital', `
      <p>Goldene Regel maximiert Konsum im Steady State; goldene Sparquote $s^*$ ist nicht automatisch optimal für Konsum.</p>
    `),
    formeln: [{ label: 'Kapitaldynamik', eq: '$$\\dot k = s f(k) - (\\delta+n)k$$', desc: 'Solow Kern.' }],
    aufgaben: [{
      text: 'Warum erhöht höhere $s$ das Niveau von $y$, aber nicht dauerhaft $g_y$ ohne technischen Fortschritt?',
      steps: [
        { text: 'Mehr Sparen → mehr $k$ → höheres $y$ im Steady State.', eq: null },
        { text: 'Ohne $g_A$ ist $g_y$ langfristig nur durch $n$ bestimmt.', eq: null },
        { text: 'Höhere $s$ verschiebt nur das Niveau, nicht die Wachstumsrate in der langen Frist.', eq: null }
      ],
      result: 'Solow: Sparquote ist niveaubestimmend, nicht wachstumsbestimmend ohne Technik.'
    }]
  },
  steady_state: {
    html: block('Grafische Steady-State-Analyse', `
      <p>Schnitt von $sf(k)$ und $(\\delta+n)k$ bestimmt $k^*$; links davon $k$ steigt, rechts sinkt $k$.</p>
    `) + block('Vergleiche Statik', `
      <p>$n\\uparrow$ → $k^*$ sinkt; $s\\uparrow$ → $k^*$ steigt; $g_A\\uparrow$ → höheres Wachstum pro Kopf.</p>
    `),
    formeln: [{ label: 'Steady state', eq: '$$s f(k^*) = (\\delta+n)k^*$$', desc: 'Gleichgewicht.' }]
  },
  goldene_sparquote: {
    html: block('Goldene Regel', `
      <p>Maximiert $c^* = f(k^*) - (\\delta+n)k^*$; impliziert $MPK = \\delta+n$.</p>
    `) + block('Dynamische Ineffizienz', `
      <p>Zu viel Kapital ($k$ über goldener Regel) kann dynamisch ineffizient sein — zu wenig Konsum heute.</p>
    `),
    formeln: [{ label: 'Goldene Regel', eq: '$$f\'(k_{GR}) = \\delta + n$$', desc: 'MPK = effektive Verlustrate.' }]
  },
  tech_fortschritt: {
    html: block('Labor-augmenting', `
      <p>$Y = F(K, A L)$; $g_A$ treibt dauerhaftes Pro-Kopf-Wachstum im Balanced Growth Path.</p>
    `) + block('BGP', `
      <p>Alle Variablen in effizienzen Einheiten wachsen mit $g_A$; Kapitalquote stabil bei Cobb-Douglas.</p>
    `),
    formeln: [{ label: 'BGP', eq: '$$g_y = g_A$$', desc: 'Langfristiges Pro-Kopf-Wachstum.' }]
  },
  budgetrestriktion: {
    html: block('Intertemporale Budgetrestriktion', `
      <p>Staat muss langfristig Schulden bedienen; Primärsaldo und Wachstum bestimmen Tragfähigkeit.</p>
    `) + block('Primärsaldo', `
      <p>Defizit minus Zinszahlungen: strukturelle Haushaltsdisziplin ohne Zinslast.</p>
    `),
    formeln: [{ label: 'Schulden dynamik', eq: '$$\\Delta b = (r-g)b + d$$', desc: 'Schuldenquote $b$.' }]
  },
  schuldenquote_dynamik: {
    html: block('Stabilitätsbedingung', `
      <p>Wenn $r < g$, kann Schuldenquote auch bei positivem Defizit fallen (Snowball-Effekt umgekehrt).</p>
    `) + block('Nachhaltigkeit', `
      <p>Maastricht-Kriterien und nationale Regeln setzen Grenzen; politische Ökonomie der Verschuldung separat.</p>
    `),
    formeln: [{ label: 'Schuldenquote', eq: '$$\\Delta b = (r-g)b + primary\\ deficit$$', desc: 'Dynamik.' }]
  },
  zp_kurve: {
    html: block('ZP-Kurve im Diagramm', `
      <p>Die Zahlungsbilanzkurve (ZP) verknüpft $Y$ und $i$ bei gegebenem Wechselkurs: Zahlungsbilanzgleichgewicht bei $NX + KB_{netto} = 0$.</p>
    `) + block('Verschiebungen', `
      <p>Reale Abwertung verschiebt ZP nach rechts (höheres $Y$ bei gleichem $i$); ausländischer Boom über Exporte ebenfalls.</p>
      ${warn('ZP vs. BP', 'In manchen Skripten BP statt ZP — Bezeichnung aus VL übernehmen.')}
    `),
    formeln: [{ label: 'ZP', eq: '$$NX(Y,\\varepsilon) + KA(i,i^*) = 0$$', desc: 'Zahlungsbilanzgleichgewicht.' }]
  },
  schuldenfinanzierung_monetarisierung: {
    html: block('Schuldenfinanzierung', `
      <p>Staat finanziert Defizit über Anleihen → Zinslast und Tragfähigkeit; Crowding-out über Kapitalmarkt möglich.</p>
    `) + block('Monetarisierung', `
      <p>Zentralbank kauft Staatsanleihen → Geldmenge↑ → Inflationsrisiko und Glaubwürdigkeitsverlust der Geldpolitik.</p>
      ${warn('EZB-Mandat', 'Primärziel Preisstabilität — dauerhafte Monetarisierung widerspricht Unabhängigkeit.')}
    `),
    formeln: [{ label: 'Fiskal-Monetär', eq: '$$\\Delta B \\Leftrightarrow \\Delta M \\text{ oder } \\Delta B_{private}$$', desc: 'Finanzierungskanal.' }],
    aufgaben: [{
      text: 'Nenne einen kurzfristigen und einen mittelfristigen Effekt von Monetarisierung des Staatsdefizits.',
      steps: [
        { text: 'Kurzfristig: Refinanzierung erleichtert, Zinsdruck sinkt.', eq: null },
        { text: 'Mittelfristig: Inflationserwartungen steigen, realer Zinsanstieg möglich.', eq: null },
        { text: 'Glaubwürdigkeit der Zentralbank kann leiden.', eq: null }
      ],
      result: 'Monetarisierung ist kein kostenloser Ersatz für Anleihefinanzierung.'
    }]
  },
  ricardianisch: {
    html: block('Barro-Ricardo', `
      <p>Steuerfinanzierung vs. Anleihefinanzierung äquivalent, wenn Haushalte intertemporal optimieren und Kinder erben.</p>
    `) + block('Grenzen', `
      <p>Liquidity constraints, myopia, endliche Horizonte brechen Äquivalenz — Fiskalmultiplikator > 0.</p>
    `),
    formeln: [{ label: 'Äquivalenz', eq: '$$\\Delta T_1 = -PV(\\Delta T_{future}) \\Rightarrow \\Delta C_1 = 0$$', desc: 'Unter Annahmen.' }]
  }
};
