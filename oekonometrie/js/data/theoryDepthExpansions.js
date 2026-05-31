// Source-distilled depth (Ökonometrie VL) — merged in chapters.js after render

const block = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (t, b) => `<div class="warn-box"><strong>${t}:</strong> ${b}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  unbiasedness: {
    html:
      block('Prüfungsstandard', `
      <p>$E(\\hat{\\beta}|X)=\\beta$ unter Exogenität — Erwartungswertaussage, keine Garantie für eine Stichprobe. Homoskedastizität nicht nötig für Unverzerrtheit.</p>
      ${math('$$E(\\hat{\\beta}_j \\mid X) = \\beta_j$$')}
    `) +
      block('Klausurtransfer', `
      <p>Einzelne Schätzung weit weg vom wahren $\\beta$ widerlegt Unverzerrtheit nicht. Verzerrung bei Endogenität: omitted variable bias.</p>
      ${warn('Unverzerrt ≠ präzise', 'Varianz und Effizienz sind getrennte Konzepte (Gauss-Markov).')}
    `)
  },
  consistency: {
    html:
      block('Konsistenz', `
      <p>$\\text{plim}\\,\\hat{\\beta}=\\beta$ wenn $n\\to\\infty$ und Annahmen gelten. Schwächer als Unverzerrtheit für endliches $n$, stärker asymptotisch.</p>
      ${math('$$\\text{plim}_{n\\to\\infty}\\hat{\\beta} = \\beta$$')}
    `) +
      block('Identifikation', `
      <p>Ohne Variation in $X$ oder bei perfekter Multikollinearität kein identifizierter Parameter — weder konsistent noch interpretierbar.</p>
    `)
  },
  linear_restrictions_ur: {
    html:
      block('F-Test linearer Restriktionen', `
      <p>$H_0: R\\beta = r$. F-Statistik vergleicht eingeschränktes und uneingeschränktes Modell (SSR oder $R^2$).</p>
    `) +
      block('Prüfungsstandard', `
      <p>Restriktion in Worten → $R$ und $r$ aufschreiben → F oder Wald → Entscheidung. Freiheitsgrade: $q$ und $n-k$.</p>
    `)
  },
  exogeneity: {
    html:
      block('Strenge vs. schwache Exogenität', `
      <p>Streng: $E(u|X)=0$. Schwach: $E(u)=0$ und $\\text{Cov}(x_j,u)=0$. Verletzung → verzerrte OLS, Instrumente/2SLS.</p>
    `) +
      block('Klausurpfad', `
      <p>Endogenitätsquelle benennen (Omitted Variable, Simultaneität, Messfehler) → Kausalrichtung → passende Schätzstrategie.</p>
    `)
  },
  heteroskedasticity: {
    html:
      block('Konsequenzen', `
      <p>OLS bleibt unverzerrt, aber Standardfehler verzerrt → t/F ungültig. Robust SE (HC) oder WLS nach Spezifikation.</p>
    `) +
      block('Breusch-Pagan / White', `
      <p>Test auf heteroskedastische Varianz; bei Ablehnung von $H_0$ Inferenz mit robusten SE oder Modell für $\\text{Var}(u|X)$.</p>
    `)
  },
  autocorrelation: {
    html:
      block('Serielle Korrelation', `
      <p>$\\text{Cov}(u_t,u_s)\\neq 0$ für $t\\neq s$ — häufig bei Zeitreihen. OLS-Schätzer können ineffizient sein; SE falsch.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Durbin-Watson / LM-Test → bei Autokorrelation HAC-Standardfehler oder AR-Struktur im Fehlerterm.</p>
    `)
  }
};
