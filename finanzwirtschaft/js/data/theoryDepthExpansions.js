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
  },
  intertemporale_wahl: {
    html:
      block('In der Klausur: Intertemporale Wahl', `
      <p>Fisher-Trennung: Investitionsentscheidung (NPV) unabhängig von Finanzierung bei perfekten Märkten. Präferenz über $(c_0,c_1)$: Budget $c_0 + c_1/(1+i) = W$. Glättung des Konsums über Perioden.</p>
      ${math('$$NPV = \\sum_t \\frac{CF_t}{(1+i)^t}$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Immer Zinssatz und Periodenkonvention (vorschüssig/nachschüssig). Investition und Finanzierung getrennt argumentieren (Fisher).</p>
    `)
  },
  annuitaeten_finanzplan: {
    html:
      block('In der Klausur: Annuität', `
      <p>Annuität $A = K \\cdot \\frac{i(1+i)^n}{(1+i)^n-1}$. Tilgungsplan: Zinsanteil fällt, Tilgung steigt bei konstanter Annuität. Finanzplan: Liquidität periodengerecht — nicht nur NPV.</p>
      ${math('$$A = K \\cdot \\frac{i(1+i)^n}{(1+i)^n-1}$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Restschuld nach $t$ Perioden; Sondertilgung verschiebt Laufzeit oder senkt Rate — beides explizit.</p>
      ${warn('Nominal vs. real', 'Realverzinsung bei Inflation separat — Klausur oft nominal.')}
    `)
  },
  izf_kapitalwertfunktion: {
    html:
      block('In der Klausur: Kapitalwertfunktion', `
      <p>$NPV(i)$ fällt in $i$ bei normalen Cashflows. IRR = Nullstelle von $NPV(i)$. Mehrere IRR bei nicht-monotonen Cashflows — dann NPV-Kriterium.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Graph $NPV(i)$ skizzieren; Schnitt mit Achse = IRR. Kapitalwertfunktion für Sensitivität nutzen.</p>
    `)
  },
  izf_grenzen: {
    html:
      block('In der Klausur: Grenzen NPV/IRR', `
      <p>Kapitalrationierung: Projektranking nach NPV pro eingesetztem Euro oder PI. Mutually exclusive: höchster NPV, nicht höchster IRR. Unterschiedliche Laufzeiten: Kettenmethode oder EAA.</p>
    `) +
      block('Prüfungsstandard', `
      <p>IRR-Falle bei Vorzeichenwechseln; qualitative Begründung wann NPV dominiert.</p>
      ${warn('IRR vs. NPV', 'Bei unterschiedlichen Skalen oder Kapitalbudget immer NPV vergleichen.')}
    `)
  },
  unsicherheit: {
    html:
      block('In der Klausur: Unsicherheit', `
      <p>Erwartungswert-Kriterium: $E[NPV]$ bei Szenarien. Risikoaversion: Risikoadjustierung via höherem Diskontsatz oder CAPM ($k_E = r_f + \\beta(r_m-r_f)$).</p>
    `) +
      block('Prüfungsstandard', `
      <p>Szenarioanalyse vs. Sensitivität vs. Monte Carlo qualitativ unterscheiden. Entscheidung unter Unsicherheit ≠ Risiko neutral.</p>
      ${warn('Erwartungswert', '$E[NPV]$ optimal nur bei Risikoneutralität — sonst CE oder risikoadjustierter Diskontsatz.')}
    `)
  },
  risikoadjustierter_kapitalwert: {
    html:
      block('In der Klausur: Risikoadjustierter NPV', `
      <p>Certainty Equivalent oder risikoadjustierter Diskontsatz. CAPM: Projektrisiko über $\\beta$ — nicht Firmen-$\\beta$ blind übernehmen bei diversifiziertem Investor.</p>
      ${math('$$k = r_f + \\beta (r_m - r_f)$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Systematisches vs. idiosynkratisches Risiko; Diversifikation eliminiert idiosynkratisches Risiko für Aktionäre.</p>
    `)
  },
  modigliani_miller: {
    html:
      block('In der Klausur: MM', `
      <p>Prop. I (ohne Steuern): $V_L = V_U$. Prop. II: $k_E = k_U + (D/E)(k_U - k_D)$. Mit Steuern: $V_L = V_U + \\tau D$ — Schuldvorteil, aber Agency/Bankruptcy Costs begrenzen optimal leverage.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Annahmen MM nennen (perfekte Märkte, keine Steuern/Insolvenzkosten). Trade-off-Theorie qualitativ.</p>
    `)
  },
  institutionen_marktunvollkommenheit: {
    html:
      block('Asymmetrische Information', `
      <p>Adverse Selection vor Vertrag, Moral Hazard danach. Finanzmarkt: Screening, Signaling, Covenants als institutionelle Antworten.</p>
    `) +
      block('In der Klausur: Institutionen', `
      <p>Principal-Agent: Anreizverträge, Monitoring-Kosten. Banken als Delegated Monitors (Diamond). Regulierung: Mindesteigenkapital, Deposit Insurance — Trade-off Moral Hazard vs. Stabilität.</p>
      ${warn('Institution ≠ Details', 'Ökonomisches Problem und Wohlfahrtsfolge priorisieren — nicht nur Institutionen aufzählen.')}
    `) +
      block('Prüfungsstandard', `
      <p>Ökonomisches Problem → Institution/Vertrag → Wohlfahrts- oder Effizienzfolge. Nicht nur Definition.</p>
    `)
  },
  renten_endwert: {
    html:
      block('Rentenfaktor', `
      <p>Endwert einer Rente: $FV = C \\cdot \\frac{(1+i)^n-1}{i}$. Barwert: Division durch $(1+i)^n$ pro Periode.</p>
      ${math('$$FV = C \\cdot \\frac{(1+i)^n-1}{i}$$')}
    `) +
      block('In der Klausur: Renten', `
      <p>Nachschüssig vs. vorschüssig: Faktor $(1+i)$ multiplizieren bei vorschüssig. Barwert Rente: $PV = C \\cdot \\frac{1-(1+i)^{-n}}{i}$. Permanente Rente: $PV = C/i$ bei $n\\to\\infty$.</p>
    `) +
      block('Klausurpfad', `
      <p>Zahlungszeitpunkt (nachschüssig/vorschüssig) prüfen — Faktor ändert sich. Zinseszins vs. einfacher Zins explizit.</p>
      ${warn('Periodenkonvention', 'Excel/R-Reihenfolge (0 vs. 1 Start) in Klausur explizit — sonst Faktorfehler.')}
    `)
  }
};
