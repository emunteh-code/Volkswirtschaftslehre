// Source-distilled depth (Makro I VL) — merged in chapters.js

const section = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (title, body) => `<div class="warn-box" data-warning-placement="rail"><strong>${title}:</strong> ${body}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  makro_rahmen: {
    html: section('Sektoren und Märkte', `
      <p>Haushalte, Unternehmen, Staat und Ausland sind die Standardakteure. Güter-, Geld- und Arbeitsmarkt tragen die kurzfristige Anpassung; Finanzmärkte verbinden Sparen und Investieren.</p>
    `) + section('Nominal vs. real', `
      <p>Reale Größen deflatieren mit dem Preisindex; Inflations- und Arbeitslosigkeitsziele sind getrennte Politikziele mit unterschiedlichen Trade-offs.</p>
    `)
  },
  vgr: {
    html: section('BIP und Komponenten', `
      <p>$Y = C + I + G + NX$ (Ausgabenseite). Produktionsseite: Wertschöpfungssumme. Beide Messungen sollten im Gleichgewicht übereinstimmen.</p>
      ${math('$$Y = C + I + G + NX$$')}
    `) + section('Deflator und CPI', `
      <p>BIP-Deflator vs. Verbraucherpreisindex: unterschiedliche Warenkörbe; für Makropolitik beide Deutungen kennen.</p>
      ${warn('Nominal BIP', 'Hohes nominales BIP-Wachstum kann rein inflationär sein — immer real prüfen.')}
    `),
    formeln: [{ label: 'Ausgabenidentität', eq: '$$Y = C + I + G + NX$$', desc: 'VGR Kern.' }]
  },
  geldnachfrage: {
    html: section('Liquiditätspräferenz', `
      <p>Geldnachfrage steigt mit Einkommen und sinkt mit Zins (Opportunitätskosten der Kassenhaltung). Portfolio: Geld vs. Anleihen.</p>
      ${math('$$M^d/P = L(i, Y)$$')}
    `) + section('LM-Verschiebung', `
      <p>Geldpolitik verschiebt LM; bei Zinssteuerung passt die Zentralbank die Geldmenge an den Zielzins an.</p>
    `),
    formeln: [{ label: 'Geldnachfrage', eq: '$$M^d/P = L(i,Y)$$', desc: 'Liquiditätspräferenz.' }]
  },
  banken: {
    html: section('Geldschöpfung', `
      <p>Kreditvergabe schafft Einlagen (Giralgeld); Mindestreserven und Refinanzierung begrenzen die Ausweitung. Nicht „nur" Zentralbank druckt Masse.</p>
    `) + section('In der Klausur: Banken und Geld', `
      <p>Kreditmultiplikator didaktisch: $\\Delta M \\approx m \\cdot \\Delta B$ bei Reservequote. Endogenes Geld: ZB steuert Leitzins → Banken passen Kreditvergabe an. Finanzkrise: Bilanzschocks → Kreditrationierung → $I\\downarrow$, $Y\\downarrow$ (Finanzielle Akzelerator).</p>
      ${math('$$M = m \\cdot B,\\quad m = \\frac{1+r}{r}$$')}
    `) + section('Geldmultiplikator Vorsicht', `
      <p>Der einfache Multiplikator $M = m \\cdot B$ ist didaktisch; in der Praxis dominieren Zinssteuerung und Kreditnachfrage.</p>
      ${warn('Endogenes Geld', 'Geldmenge folgt oft dem Zinsziel, nicht umgekehrt.')}
    `),
    formeln: [{ label: 'Geldbasis', eq: '$$M = m \\cdot B$$', desc: 'Didaktischer Multiplikator.' }]
  },
  arbeitsmarkt: {
    html: section('WS-Kurve', `
      <p>Lohnsetzung: nominaler Lohn reagiert auf Arbeitslosigkeit und Erwartungen. Kurzfristig können Reallöhne träge sein.</p>
      ${math('$$W = P \\cdot w,\\quad w = f(u, \\pi^e)$$')}
    `) + section('In der Klausur: Arbeitsmarkt', `
      <p>WS/PS-Modell: Arbeitslosigkeit $u$ und Preissetzung bestimmen kurzfristige Phillips-Beziehung. Lohnrigidität erklärt Persistenz von $u>u_n$. Strukturell vs. konjunkturell unterscheiden — nicht alles ist „Keynesianisch".</p>
    `) + section('Preissetzung', `
      <p>PS-Kurve: Preisniveau-Anpassung zur Arbeitsmarktlage; Verbindung zu Phillipskurve in mittlerer Frist.</p>
      ${warn('Nominal vs. real', 'Lohnverhandlungen oft nominal — Reallohn folgt aus $W/P$ und Preisniveau.')}
    `)
  },
  realzins_fisher_erwartungen: {
    html: section('Fisher-Gleichung', `
      <p>$r \\approx i - \\pi^e$. Steigende Inflationserwartungen senken realen Zins bei gegebenem Nominalzins.</p>
      ${math('$$r \\approx i - \\pi^e$$')}
    `) + section('In der Klausur: Fisher', `
      <p>Beispiel: $i=4\\%$, $\\pi^e=3\\%$ → $r\\approx 1\\%$. Unerwartete Inflation: Schuldner gewinnen, Gläubiger verlieren (Fisher-Effekt auf Vermögen). ZB-Reaktion: bei steigenden $\\pi^e$ Nominalzins anheben (Taylor-Logik).</p>
    `) + section('Policy-Implikation', `
      <p>Zentralbank muss bei steigenden $\\pi^e$ den Nominalzins anheben, um reale Finanzbedingungen nicht zu lockern.</p>
      ${warn('Ex-ante vs. ex-post', '$\\pi^e$ für Entscheidungen; realisierte $\\pi$ für Vermögensverteilung — beide in Klausur trennen.')}
    `)
  },
  realzins_risikopraemie_krisenkanal: {
    html: section('Risikoprämie', `
      <p>$i = r + \\text{Risikoprämie}$. In Krisen steigt die Prämie — Kredit wird teurer unabhängig von Leitzins.</p>
      ${math('$$i = r + rp$$')}
    `) + section('In der Klausur: Krisenkanal', `
      <p>Spread $rp$ steigt bei Unsicherheit → Investition $I(r+rp)$ sinkt. Finanzielle Akzelerator: fallende Vermögenspreise → schlechtere Sicherheiten → höheres $rp$ → weiterer $I$-Rückgang. Leitzinssenkung kann wirkungslos sein, wenn $rp$ dominiert (Liquiditätsfalle des Kreditmarkts).</p>
    `) + section('Finanzielle Akzelerator', `
      <p>Sinkende Vermögenswerte verschlechtern Sicherheiten → weniger Kredit → weniger $I$ und $Y$.</p>
      ${warn('Leitzins vs. Marktzins', 'Unternehmen zahlen $i$ mit Risikoprämie — nicht identisch mit ZB-Leitzins.')}
    `)
  },
  erwartungen: {
    html: section('Adaptive vs. rationale Erwartungen', `
      <p>Adaptive: $\\pi^e$ folgt vergangener Inflation. Rational: keine systematischen Fehler — Policy-Regeln wirken nur bei Überraschungen.</p>
    `) + section('Glaubwürdigkeit', `
      <p>Unabhängige Zentralbank und klare Ziele verankern $\\pi^e$; ohne Glaubwürdigkeit kein dauerhafter Phillips-Trade-off.</p>
    `)
  }
};
