// Source-distilled depth (Statistik VL/Tutorium) — merged in chapters.js

const block = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (t, b) => `<div class="warn-box" data-warning-placement="rail"><strong>${t}:</strong> ${b}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  z_test: {
    html:
      block('Prüfungsstandard: z-Test', `
      <p>Klausurpfad: $H_0$/$H_1$ → Teststatistik $z$ → kritisches Quantil oder p-Wert → Entscheidung in Worten. Bei bekanntem $\\sigma$ Standardnormalverteilung; sonst t-Test.</p>
    `) +
      block('KI–Test-Dualität', `
      <p>Beim zweiseitigen Test bei $\\alpha=5\\%$ gilt: $H_0$ wird nicht abgelehnt genau dann, wenn $\\mu_0$ im $95\\%$-Konfidenzintervall liegt (bei gleicher Stichprobe und $\\sigma$).</p>
      ${math('$$\\left|\\frac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}\\right| \\leq z_{1-\\alpha/2} \\iff \\mu_0 \\in \\text{KI}$$')}
      ${warn('z vs. t', 'Unbekanntes $\\sigma$ bei kleinem $n$ → t-Test; z nur mit Begründung (bekanntes $\\sigma$ oder sehr großes $n$).')}
    `)
  },
  wahrscheinlichkeit: {
    html:
      block('Prüfungsstandard', `
      <p>Immer zuerst Ereignisraum und Zählregel klären (Laplace vs. bedingte Wahrscheinlichkeit). Bayes nur, wenn $P(A|B)$ und $P(B|A)$ sauber getrennt werden.</p>
      ${math('$$P(A|B) = \\frac{P(A\\cap B)}{P(B)},\\quad P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$$')}
    `) +
      block('In der Klausur: Wahrscheinlichkeit', `
      <p>Typische Aufgabe: Venn-Diagramm oder Baumdiagramm → Formel → numerischer Wert. Bedingte Wahrscheinlichkeit: Ereignisraum einschränken. Unabhängigkeit: $P(A\\cap B)=P(A)P(B)$ nur nach Definition prüfen.</p>
    `) +
      block('Klausurtransfer', `
      <p>Typische Aufgabe: Venn-Diagramm oder Baumdiagramm → Formel → numerischer Wert. Randnotation der VL (Komplement, Schnitt) beibehalten.</p>
      ${warn('Bayes-Richtung', 'Nicht $P(A|B)$ mit $P(B|A)$ vertauschen — Nenner ist immer $P(\\text{Bedingung})$.')}
    `)
  },
  schaetzen_eigenschaften_intervalle: {
    html:
      block('In der Klausur: Schätzer & KI', `
      <p>Erwartungstreue: $E[\\hat\\theta]=\\theta$. Konsistenz: $\\hat\\theta \\xrightarrow{p} \\theta$. Effizienz: kleinste Varianz unter erwartungstreuen Schätzern (BLUE unter GM). KI: $\\bar x \\pm z_{1-\\alpha/2}\\,\\sigma/\\sqrt{n}$ bei bekanntem $\\sigma$.</p>
      ${math('$$\\bar x \\pm t_{n-1,1-\\alpha/2}\\,\\frac{s}{\\sqrt{n}}\\quad\\text{(}\\sigma\\text{ unbekannt)}$$')}
    `) +
      block('Prüfungsstandard', `
      <p>Test–KI-Dualität: $H_0: \\mu=\\mu_0$ nicht abgelehnt $\\Leftrightarrow$ $\\mu_0$ im $(1-\\alpha)$-KI. Immer Verteilung der Pivot-Größe nennen.</p>
      ${warn('Interpretation KI', 'KI ist Intervallschätzer für $\\mu$, kein Wahrscheinlichkeitsstatement über $\\mu$ nach Beobachtung — Formulierung „95\\% der Intervalle" korrekt.')}
    `)
  },
  regression_diagnostik_prognose: {
    html:
      block('In der Klausur: Diagnostik', `
      <p>Residualplot: Muster → Heteroskedastizität oder fehlende Nichtlinearität. $R^2$ allein reicht nicht — adjusted $R^2$ bei Modellvergleich. Prognose: Vorhersageintervall breiter als Konfidenzband für $\\hat y$ (unsicherer Einzelwert).</p>
    `) +
      block('Prüfungsstandard', `
      <p>OLS-Reste sollten weißes Rauschen sein (GM4). Breusch-Pagan/White qualitativ: heteroskedastische SE oder robuste SE (HC). Outlier: Leverage/Cook's D erwähnen.</p>
      ${warn('Prognose vs. KI', 'Prognoseintervall für $y_{n+1}$ enthält $\\hat\\sigma$ und $x_{n+1}$ — nicht mit KI für $E[y|x]$ verwechseln.')}
    `)
  },
  varianzanalyse: {
    html:
      block('Prüfungsstandard ANOVA', `
      <p>Varianzzerlegung: $SS_{\\text{ges}} = SS_{\\text{zw}} + SS_{\\text{in}}$. F-Statistik $F = MS_{\\text{zw}}/MS_{\\text{in}}$ unter $H_0$ (gleiche Erwartungswerte).</p>
      ${math('$$F = \\frac{SS_{\\text{zw}}/(k-1)}{SS_{\\text{in}}/(n-k)}$$')}
    `) +
      block('Post-hoc Vorsicht', `
      <p>Signifikantes ANOVA-Ergebnis erlaubt paarweise Vergleiche nur mit Korrektur (Bonferroni/Tukey). Ohne Korrektur steigt die Fehlerwahrscheinlichkeit.</p>
    `)
  },
  zwei_stichproben: {
    html:
      block('Testauswahl', `
      <p>Unabhängige Stichproben: Welch-t oder gepoolter t je nach Varianzgleichheit. Paarige Stichproben: Differenzen $d_i$ einführen → Ein-Stichproben-t auf $\\bar{d}$.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Hypothesen auf Differenz $\\mu_1-\\mu_2$ (oder $\\mu_d$) formulieren; Teststatistik und Freiheitsgrade explizit; Effektgröße/Praxisrelevanz kurz deuten.</p>
    `)
  },
  verteilungen: {
    html:
      block('Notation aus der VL', `
      <p>$X \\sim N(\\mu,\\sigma^2)$: Parameter sind Erwartungswert und Varianz. Standardisierung $Z=(X-\\mu)/\\sigma$ für Tabellenarbeit.</p>
      ${math('$$Z = \\frac{X-\\mu}{\\sigma} \\sim N(0,1)$$')}
    `) +
      block('Klausurtransfer', `
      <p>Bei $\\chi^2$, $t$, $F$: Freiheitsgrade nennen und Verteilung der Teststatistik unter $H_0$ zuordnen — nicht nur Formel einsetzen.</p>
    `)
  },
  testen: {
    html:
      block('Fehlerarten und Power', `
      <p>$\\alpha$ = Fehler 1. Art; $\\beta$ = Fehler 2. Art; Power $=1-\\beta$. Kleines $n$ → hohes $\\beta$ bei kleinen Effekten.</p>
    `) +
      block('p-Wert Lesart', `
      <p>p-Wert = kleinstes $\\alpha$, bei dem $H_0$ noch abgelehnt würde. „$p<0{,}05$“ ist keine ökonomische Größeninterpretation.</p>
    `)
  },
  schaetzen: {
    html:
      block('Schätzerqualität', `
      <p>Erwartungstreue, Konsistenz, Effizienz (BLUE unter GM) — Reihenfolge in Klausur: Annahmen → Eigenschaft → Konsequenz für Inferenz.</p>
    `)
  }
};
