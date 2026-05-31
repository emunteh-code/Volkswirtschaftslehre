// Source-distilled depth (Finanzwirtschaft VL) — merged in chapters.js

const block = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (t, b) => `<div class="warn-box"><strong>${t}:</strong> ${b}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  finanz_denkweise: {
    html:
      block('Prüfungsstandard', `
      <p>Finanzentscheidungen = Bewertung zukünftiger Zahlungsströme unter Zielkonflikt Liquidität, Rendite, Risiko. Immer Zeitebene und Risikoprämie benennen.</p>
    `) +
      block('Goldene Bilanzregel', `
      <p>Mittelfristig: Vermögen finanzieren langfristiges Vermögen; kurzfristiges Vermögen kurzfristig. Brücke zur Liquiditätsplanung.</p>
    `)
  },
  renten_endwert: {
    html:
      block('Rentenfaktor', `
      <p>Endwert einer Rente: $FV = C \\cdot \\frac{(1+i)^n-1}{i}$. Barwert: Division durch $(1+i)^n$ pro Periode.</p>
      ${math('$$FV = C \\cdot \\frac{(1+i)^n-1}{i}$$')}
    `) +
      block('Klausurpfad', `
      <p>Zahlungszeitpunkt (nachschüssig/vorschüssig) prüfen — Faktor ändert sich. Zinseszins vs. einfacher Zins explizit.</p>
    `)
  },
  institutionen_marktunvollkommenheit: {
    html:
      block('Asymmetrische Information', `
      <p>Adverse Selection vor Vertrag, Moral Hazard danach. Finanzmarkt: Screening, Signaling, Covenants als institutionelle Antworten.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Ökonomisches Problem → Institution/Vertrag → Wohlfahrts- oder Effizienzfolge. Nicht nur Definition.</p>
    `)
  },
  kapitalwert_fisher: {
    html:
      block('NPV-Regel', `
      <p>NPV $>0$ → Investition erhöht Vermögen (unter perfekten Kapitalmärkten und einheitlichem $i$). Fisher-Trennung: Investitions- und Finanzierungsentscheidung trennbar.</p>
      ${math('$$NPV = \\sum_{t=0}^{T} \\frac{CF_t}{(1+i)^t}$$')}
    `) +
      block('Grenzen', `
      <p>Bei Kapitalrationierung, strategischen Optionen oder nicht beobachtbarem Risiko: NPV allein reicht — qualitative Begründung ergänzen.</p>
      ${warn('IRR-Falle', 'Bei mehrfachen Vorzeichenwechseln mehrere IRR möglich — NPV-Kriterium bevorzugen.')}
    `)
  },
  wacc_leverage: {
    html:
      block('WACC', `
      <p>$WACC = w_E k_E + w_D k_D (1-\\tau)$. Leverage erhöht Eigenkapitalrendite (Leverage-Effekt), aber auch Risiko.</p>
    `) +
      block('MM-Hinweis', `
      <p>Ohne Steuern und mit perfekten Märkten ist Firmenwert unabhängig von Verschuldung; mit Steuervorteil der Fremdfinanzierung kann WACC sinken.</p>
    `)
  }
};
