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
    `) +
      block('Klausurtransfer', `
      <p>Typische Aufgabe: Venn-Diagramm oder Baumdiagramm → Formel → numerischer Wert. Randnotation der VL (Komplement, Schnitt) beibehalten.</p>
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
      ${warn('Modellannahmen', 'Normalität und Varianzhomogenität prüfen oder robuste Alternative nennen.')}
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
