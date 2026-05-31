// platform-added-explanation for Mikro II supplementals (externa_*, thin VL blocks) — see MARKET_FAILURE_SOURCE_BOUNDARY in chapters.js

const block = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (t, b) => `<div class="warn-box"><strong>${t}:</strong> ${b}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  externa_pigou: {
    html:
      block('Klausurpfad Pigou', `
      <p><em>platform-added-explanation:</em> Markt $Q_m > Q^*$ bei negativer Externalität → Pigou-Steuer $t = MEC(Q^*)$ internalisiert.</p>
      ${math('$$MSC = MPC + MEC$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Immer Markt- vs. Sozialoptimum zeichnen; Steuerhöhe am Grenzschaden im Optimum, nicht am aktuellen Marktoutput.</p>
      ${warn('Instrument', 'Pigou-Steuer (Preis) vs. Cap-and-Trade (Menge) unter Unsicherheit unterschiedlich.')}
    `)
  },
  externa_institutionen: {
    html:
      block('Coase & Handel', `
      <p><em>platform-added-explanation:</em> Bei klaren Eigentumsrechten und niedrigen Transaktionskosten private Verhandlung effizient; bei vielen Betroffenen scheitert Coase.</p>
    `) +
      block('Emissionshandel', `
      <p>Cap setzt Menge; Lizenzpreis internalisiert Grenzkosten. Effizienz: heterogene Kosten → günstigste Vermeider kaufen weniger Lizenzen.</p>
    `)
  },
  public_goods: {
    html:
      block('Non-Rivalität & Non-Excludability', `
      <p><em>platform-added-explanation:</em> Öffentliches Gut: $MC_{extra}=0$; freiwillige Finanzierung führt zum Trittbrettfahren → Unterprovision.</p>
    `) +
      block('Lindahl & Nash', `
      <p>Lindahl-Preise individualisiert; Nash-Lösung bei freiwilliger Beitragswahl typischerweise unter dem effizienten Niveau.</p>
    `)
  },
  oligopol_stackelberg: {
    html:
      block('Stackelberg-Folger', `
      <p>Folger wählt $q_2$ gegeben $q_1$ (Reaktionsfunktion). Leader internalisiert Folgerreaktion → höhere $q_1$ als Cournot bei symmetrischen Kosten.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Reihenfolge der Entscheidung explizit; RR aufschreiben; Gewinnvergleich Leader vs. Cournot kurz deuten.</p>
    `)
  },
  unsicherheit_versicherung: {
    html:
      block('Erwartungsnutzen & Versicherung', `
      <p>Risikoaverse zahlen Prämie $>$ erwarteter Schaden für Aktuar-Fairness nicht zwingend — Risikoprämie. Vollversicherung bei NM-Utility und fairer Prämie.</p>
    `) +
      block('Moral Hazard / Adverse Selection', `
      <p>Ex-ante: Hidden characteristics → Adverse Selection. Ex-post: Hidden action → Moral Hazard; Vollversicherung dann typischerweise suboptimal.</p>
    `)
  },
  preisdiskriminierung: {
    html:
      block('Arten der Preisdiskriminierung', `
      <p>1. Grad: MR = MC je Markt. 2. Grad: Versionen/Self-Selection. 3. Grad: individuelles Pricing. Voraussetzung: Marktmacht + Arbitrage verhindern.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Wohlfahrtsvergleich Monopol einfach vs. perfekte Diskriminierung: DWL-Eliminierung bei 1. Grad; Konsumentenrente-Verteilung benennen.</p>
    `)
  }
};
