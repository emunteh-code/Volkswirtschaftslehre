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
      <p>Kreditvergabe schafft Einlagen (Giralgeld); Mindestreserven und Refinanzierung begrenzen die Ausweitung. Nicht „nur“ Zentralbank druckt Masse.</p>
    `) + section('Geldmultiplikator Vorsicht', `
      <p>Der einfache Multiplikator $M = m \\cdot B$ ist didaktisch; in der Praxis dominieren Zinssteuerung und Kreditnachfrage.</p>
      ${warn('Endogenes Geld', 'Geldmenge folgt oft dem Zinsziel, nicht umgekehrt.')}
    `),
    formeln: [{ label: 'Geldbasis', eq: '$$M = m \\cdot B$$', desc: 'Didaktischer Multiplikator.' }]
  },
  arbeitsmarkt: {
    html: section('WS-Kurve', `
      <p>Lohnsetzung: nominaler Lohn reagiert auf Arbeitslosigkeit und Erwartungen. Kurzfristig können Reallöhne träge sein.</p>
    `) + section('Preissetzung', `
      <p>PS-Kurve: Preisniveau-Anpassung zur Arbeitsmarktlage; Verbindung zu Phillipskurve in mittlerer Frist.</p>
    `)
  },
  realzins_fisher_erwartungen: {
    html: section('Fisher-Gleichung', `
      <p>$r \\approx i - \\pi^e$. Steigende Inflationserwartungen senken realen Zins bei gegebenem Nominalzins.</p>
      ${math('$$r \\approx i - \\pi^e$$')}
    `) + section('Policy-Implikation', `
      <p>Zentralbank muss bei steigenden $\\pi^e$ den Nominalzins anheben, um reale Finanzbedingungen nicht zu lockern.</p>
    `)
  },
  realzins_risikopraemie_krisenkanal: {
    html: section('Risikoprämie', `
      <p>$i = r + \\text{Risikoprämie}$. In Krisen steigt die Prämie — Kredit wird teurer unabhängig von Leitzins.</p>
    `) + section('Finanzielle Akzelerator', `
      <p>Sinkende Vermögenswerte verschlechtern Sicherheiten → weniger Kredit → weniger $I$ und $Y$.</p>
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
