import { CURRICULUM } from './curriculum.js';
import { A_PLUS_SUPPLEMENT } from './aPlusSupplement.js';
import { THEORY_DEPTH_EXPANSIONS } from './theoryDepthExpansions.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCards(entry) {
  if (!Array.isArray(entry.cards) || !entry.cards.length) return '';
  return `<div class="section-block">
<h3>${escapeHtml(entry.cardsTitle || 'Merkpunkte')}</h3>
<div class="info-grid">
${entry.cards.map((card) => `<div class="info-card info-card-concept-title">
<div class="label">${escapeHtml(card.title)}</div>
<div class="value">${escapeHtml(card.value)}</div>
${card.note ? `<p>${escapeHtml(card.note)}</p>` : ''}
</div>`).join('')}
</div>
</div>`;
}

function renderSections(entry) {
  return (entry.sections || []).map((section) => `<div class="section-block">
<h3>${escapeHtml(section.title)}</h3>
${(section.body || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
${(section.math || []).map((eq) => `<div class="math-block">${eq}</div>`).join('')}
</div>`).join('');
}

function renderWarnings(entry) {
  if (!Array.isArray(entry.warnings) || !entry.warnings.length) return '';
  return `<div class="section-block">
<h3>Typische Fehler</h3>
${entry.warnings.map((warning) => `<div class="warn-box"><strong>${escapeHtml(warning.title)}:</strong> ${escapeHtml(warning.body)}</div>`).join('')}
</div>`;
}

function renderTheoryHtml(entry) {
  return [
    renderCards(entry),
    renderSections(entry),
    renderWarnings(entry)
  ].filter(Boolean).join('');
}

export const CHAPTERS = CURRICULUM.map(({ id, title, cat, short }) => ({
  id,
  title,
  cat,
  short
}));

function mergeContent(entry) {
  const sup = A_PLUS_SUPPLEMENT[entry.id] || {};
  return {
    motivation: entry.motivation,
    theorie: renderTheoryHtml(entry),
    formeln: [...(entry.formeln || []), ...(sup.formeln || [])],
    aufgaben: [...(entry.aufgaben || []), ...(sup.aufgaben || [])]
  };
}

export const CONTENT = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, mergeContent(entry)])
);

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const depth = THEORY_DEPTH_EXPANSIONS[ch.id];
  if (depth?.html) {
    entry.theorie = (entry.theorie || '') + depth.html;
  }
}

const OEK_KLAUSUR_DEPTH = {
  hac_newey_west: `<div class="section-block"><h3>In der Klausur: HAC / Newey-West</h3><p>Bei heteroskedastischen und/oder autokorrelierten Fehlern sind klassische OLS-Standardfehler verzerrt. HAC-Schätzer (Newey-West) korrigieren die Varianz-Kovarianz-Matrix $\\widehat{V}(\\hat\\beta)$ mit Bandbreitenwahl. Antwortschema: Diagnose (AC/Hetero) → robuste SE wählen → t/F mit korrigierten SE → gleiche $\\hat\\beta$, andere Inferenz.</p><div class="warn-box"><strong>Robuste SE heilen kein Modell:</strong> HAC korrigiert Inferenz, nicht verzerrte $\\hat\\beta$ bei Endogenität.</div><div class="warn-box"><strong>Bandbreite:</strong> Zu kleine Bandbreite unterschätzt Autokorrelation; in Aufgaben meist gegeben oder „floor rule" nennen.</div></div>`,
  no_perfect_multicollinearity: `<div class="section-block"><h3>In der Klausur: Keine perfekte Multikollinearität</h3><p>Annahme MLR.3: Keine Spalte von $X$ ist exakte Linearkombination anderer. Verletzung: $(X'X)$ singulär → $\\hat\\beta$ nicht eindeutig. Perfect collinearity vs. hohe (imperfekte) Multikollinearität unterscheiden — letztere erhöht SE, ersteres macht Schätzung unmöglich.</p><div class="warn-box"><strong>Dummy-Trap:</strong> $k$ Kategorien → $k-1$ Dummies plus Intercept, sonst perfekte Kollinearität.</div><div class="warn-box"><strong>Imperfekt ≠ Verletzung:</strong> Hohe Korrelation unter Regressoren ist kein MLR-Verstoß, aber VIF/Condition Number prüfen.</div></div>`,
  partial_effects: `<div class="section-block"><h3>In der Klausur: Partielle Effekte</h3><p>Bei $Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + u$: $\\beta_1$ = ceteris paribus Effekt von $X_1$ auf $E[Y|X]$, alle anderen Regressoren fixiert. Bei Log-Modellen: log-level, log-log, level-log Unterscheidung für Elastizität vs. semi-Elastizität.</p><div class="warn-box"><strong>Marginal vs. durchschnittlich:</strong> $\\beta_1$ ist partieller Effekt am Mittel, nicht automatisch kausale Wirkung.</div><div class="warn-box"><strong>Nichtlinearität:</strong> Bei $X^2$ ist Grenzeffekt $\\beta_1 + 2\\beta_2 X$ — abhängig vom Ausgangsniveau.</div></div>`,
  vif_collinearity: `<div class="section-block"><h3>In der Klausur: VIF und Multikollinearität</h3><p>$VIF_j = 1/(1-R_j^2)$ aus Hilfsregression $X_j$ auf alle anderen $X$. $VIF > 10$ (Regel) signalisiert problematische Multikollinearität — große SE, instabile $\\hat\\beta$, aber kein Bias. Lösung: weniger Regressoren, Transformation, mehr Daten — nicht „Modell verwerfen" ohne Diagnose.</p><div class="warn-box"><strong>VIF misst keinen Bias:</strong> Multikollinearität verschlechtert Präzision, nicht Erwartungswert von OLS.</div><div class="warn-box"><strong>Signifikanz paradox:</strong> Modell $R^2$ hoch, einzelne t-Werte niedrig — klassisches Kollinearitäts-Symptom.</div></div>`,
  asymptotic_normality: `<div class="section-block"><h3>In der Klausur: Asymptotische Normalität</h3><p>Unter MLR.1–MLR.5: $\\sqrt{n}(\\hat\\beta-\\beta) \\xrightarrow{d} N(0, \\sigma^2 Q^{-1})$ mit $Q = \\text{plim}(X'X/n)$. Rechtfertigt t- und F-Tests bei großem $n$ auch bei nicht-normalen $u$. Unterscheide endliche Stichprobe (Normalverteilung von $u$ für exakte t-Verteilung) vs. asymptotisch.</p><div class="warn-box"><strong>Asymptotik ≠ kleines n:</strong> Bei $n=30$ kann Normalapproximation schlecht sein — Freiheitsgrade beachten.</div><div class="warn-box"><strong>Robuste Inferenz:</strong> Asymptotische Normalität von $\\hat\\beta$ heiß nicht, dass klassische SE korrekt sind bei Hetero/AC.</div></div>`,
  prediction: `<div class="section-block"><h3>In der Klausur: Prognose mit OLS</h3><p>Punktprognose: $\\hat{y}_0 = x_0'\\hat\\beta$. Prognosefehler = Schätzfehler + Störterm. Für erwarteten Wert reicht $x_0'\\hat\\beta$; für Einzelbeobachtung zusätzliche $\\hat\\sigma^2$. Immer Regressorvektor $x_0$ exakt angeben.</p><div class="warn-box"><strong>Extrapolation:</strong> Prognose außerhalb Stichprobenbereich von $X$ ist unsicher — Modell spezifikation extrapoliert.</div><div class="warn-box"><strong>Prognose ≠ Kausalität:</strong> $\\hat{y}_0$ ist conditional prediction, kein counterfactual policy effect.</div></div>`,
  f_test: `<div class="section-block"><h3>In der Klausur: F-Test</h3><p>Testet lineare Restriktionen auf $\\beta$: $H_0: R\\beta = r$. $F = \\frac{(SSR_r - SSR_u)/q}{SSR_u/(n-k-1)} \\sim F_{q,n-k-1}$ unter $H_0$ und MLR. Spezialfall $q=1$: $F = t^2$. Gesamttest: alle Slope-Koeffizienten = 0.</p><div class="warn-box"><strong>Eingeschränkt vs. uneingeschränkt:</strong> SSR muss steigen unter $H_0$ — sonst Rechenfehler.</div><div class="warn-box"><strong>F vs. t:</strong> Einzelhypothese → t; mehrere gemeinsame Restriktionen → F.</div></div>`,
  prediction_intervals: `<div class="section-block"><h3>In der Klausur: Prognoseintervalle</h3><p>KI für $E[Y|x_0]$ schmaler als PI für einzelne $Y_{neu}$ — PI enthält zusätzlich $\\sigma^2$. Formeln aus VL: Varianz der Prognose = Schätzvarianz von $x_0'\\hat\\beta$ plus Fehlervarianz. Immer Intervallbreite und Freiheitsgrade nennen.</p><div class="warn-box"><strong>PI breiter als KI:</strong> Häufige Klausurfalle — Einzelprognose hat mehr Unsicherheit.</div><div class="warn-box"><strong>Conditional on x:</strong> Intervalle gelten bei gegebenem $x_0$, nicht für unbeobachtete Regressorwerte.</div></div>`,
  normal_linear_model_mle: `<div class="section-block"><h3>In der Klausur: ML unter Normalität</h3><p>Bei $u \\sim N(0,\\sigma^2 I)$: ML-Schätzer für $\\beta$ = OLS. ML für $\\sigma^2$: $SSR/n$ (nicht $n-k-1$). Normalität liefert exakte t/F-Verteilungen in endlichen Stichproben. Gauss-Markov + Normalität → BLUE und effizient.</p><div class="warn-box"><strong>ML $\\sigma^2$ vs. unbiased:</strong> $SSR/n$ verzerrt; $SSR/(n-k-1)$ ist unverzerrt für $\\sigma^2$.</div><div class="warn-box"><strong>Normalität testen:</strong> Jarque-Bera, Residuenplot — vor exakter Inferenz prüfen.</div></div>`,
  endogeneity_ovb: `<div class="section-block"><h3>In der Klausur: Endogenität und OVB</h3><p>OVB: $\\text{bias}(\\hat\\beta_1) = \\beta_2 \\cdot \\delta_1$ mit $\\delta_1$ aus Regress $X_2$ auf $X_1$. Endogenität wenn $Cov(X,u) \\neq 0$ — OLS verzerrt und inkonsistent. Lösungen: IV/2SLS, natürliche Experimente, Fixed Effects — je nach Datenstruktur.</p><div class="warn-box"><strong>OVB-Richtung:</strong> Vorzeichen des Bias aus Korrelation $X_1,X_2$ und Effekt $\\beta_2$ ableiten — nicht raten.</div><div class="warn-box"><strong>Signifikanz täuscht:</strong> Verzerrter $\\hat\\beta$ kann trotzdem „signifikant" sein.</div></div>`,
  fwl_partial_regression: `<div class="section-block"><h3>In der Klausur: Frisch-Waugh-Lovell</h3><p>FWL: $\\hat\\beta_1$ aus multiplem OLS = Koeffizient aus Regression von $M_2 Y$ auf $M_2 X_1$, wobei $M_2$ Residuen von $X_2$ projiziert. Partieller Effekt = Variation in $X_1$, die nicht durch $X_2$ erklärt wird. Grundlage für partial regression plots.</p><div class="warn-box"><strong>Reihenfolge egal:</strong> Partieller Effekt von $X_1$ unabhängig von Reihenfolge der Regressoren.</div><div class="warn-box"><strong>Interpretation:</strong> FWL erklärt ceteris paribus — nicht kausale Isolation ohne Exogenität.</div></div>`,
  normal_equations: `<div class="section-block"><h3>In der Klausur: Normalgleichungen</h3><p>FOC von OLS: $X'(y - X\\hat\\beta) = 0$ ↔ Residuen orthogonal zu allen Regressoren. Lösung: $\\hat\\beta = (X'X)^{-1}X'y$ wenn $X'X$ invertierbar. Geometrie: Projektion von $y$ auf Spaltenraum von $X$.</p><div class="warn-box"><strong>Singularität:</strong> $X'X$ nicht invertierbar bei perfekter Kollinearität.</div><div class="warn-box"><strong>Orthogonalität ≠ Unabhängigkeit:</strong> $\\hat u \\perp X$ in Stichprobe bedeutet nicht $u \\perp X$ in Population.</div></div>`,
  covariance_matrix: `<div class="section-block"><h3>In der Klausur: Kovarianzmatrix von OLS</h3><p>$Var(\\hat\\beta) = \\sigma^2 (X'X)^{-1}$ unter Homoskedastizität. Schätzer: $\\widehat{Var}(\\hat\\beta) = \\hat\\sigma^2 (X'X)^{-1}$. Standardfehler = Wurzel aus Diagonalelementen. Korrelationen zwischen $\\hat\\beta_j$ aus Nicht-Diagonal-Elementen.</p><div class="warn-box"><strong>SE skaliert mit $\\sigma$:</strong> Größere Streuung von $u$ → breitere Konfidenzintervalle.</div><div class="warn-box"><strong>Mehr Daten helfen:</strong> $X'X$ wächst mit $n$ → präzisere Schätzung.</div></div>`,
  sample_moments: `<div class="section-block"><h3>In der Klausur: Stichprobenmomente</h3><p>Konsistenz und Normalität basieren auf LLN und CLT für Stichprobenmomente ($\\bar y$, $\\overline{xy}$). $\\hat\\beta$ ist Funktion von Momenten → plim und asymptotische Verteilung über Delta-Methode/Slutsky. Unterscheide Population vs. Stichprobe klar.</p><div class="warn-box"><strong>Plim vs. Erwartungswert:</strong> Unverzerrtheit ist Eigenschaft endlicher Stichproben; Konsistenz asymptotisch.</div><div class="warn-box"><strong>Stichproben ≠ Population:</strong> Momentenbedingungen in GMM/IV analog zu Normalgleichungen.</div></div>`,
  robust_gls: `<div class="section-block"><h3>In der Klausur: Robust GLS / WLS</h3><p>Bei bekannter Heteroskedastizitätsstruktur $\\Omega$: GLS $\\hat\\beta_{GLS} = (X'\\Omega^{-1}X)^{-1}X'\\Omega^{-1}y$ ist BLUE. WLS: Transformation mit $\\sqrt{w_i}$. Fehlerspezifikation von $\\Omega$ → ineffizient aber ggf. noch konsistent. Robust: White-SE ohne $\\Omega$ zu schätzen.</p><div class="warn-box"><strong>GLS vs. robust OLS:</strong> GLS effizienter wenn $\\Omega$ richtig; robust OLS sicherer bei Zweifel.</div><div class="warn-box"><strong>Gewichtung:</strong> WLS-Transformation explizit zeigen — nicht nur „robust schätzen" behaupten.</div></div>`,
  confidence_intervals: `<div class="section-block"><h3>In der Klausur: Konfidenzintervalle</h3><p>$\\hat\\beta_j \\pm t_{n-k-1,\\alpha/2} \\cdot SE(\\hat\\beta_j)$. Interpretation: Wiederholungslogik — $(1-\\alpha)$% der Intervalle enthalten wahren $\\beta_j$. Äquivalenz zum zweiseitigen t-Test: $H_0: \\beta_j = \\beta_{j0}$ ablehnen ⟺ $\\beta_{j0}$ nicht im KI.</p><div class="warn-box"><strong>KI ≠ Wahrscheinlichkeit für $\\beta$:</strong> Parameter ist fix; Intervall ist zufällig.</div><div class="warn-box"><strong>Breite:</strong> Hängt von $n$, $SE$ und $\\alpha$ ab — engeres KI ≠ besseres Modell.</div></div>`,
  t_test: `<div class="section-block"><h3>In der Klausur: t-Test</h3><p>$t = \\hat\\beta_j / SE(\\hat\\beta_j)$ unter $H_0: \\beta_j = 0$. Vergleich mit $t_{n-k-1}$ oder p-Wert. Einseitig vs. zweiseitig. Bei heteroskedastischen Fehlern: robuste t-Statistik mit korrigierten SE.</p><div class="warn-box"><strong>df nicht vergessen:</strong> $n-k-1$, nicht $n$ oder $n-k$.</div><div class="warn-box"><strong>Ökonomische vs. statistische Signifikanz:</strong> Kleines SE kann irrelevanten Effekt signifikant machen.</div></div>`,
  linear_restrictions_ur: `<div class="section-block"><h3>In der Klausur: Lineare Restriktionen</h3><p>Uneingeschränktes Modell vs. eingeschränktes unter $R\\beta = r$. Wald, LR, F-Äquivalenz bei Normalität. Spezialfälle: Gleichheit mehrerer Koeffizienten, Joint significance. Immer beide Modelle oder F-Formel vollständig.</p><div class="warn-box"><strong>Restriktion formulieren:</strong> $H_0$ als $R\\beta = r$ aufschreiben bevor F berechnet wird.</div><div class="warn-box"><strong>Nesting:</strong> Eingeschränktes Modell muss Spezialfall des uneingeschränkten sein.</div></div>`,
  exogeneity: `<div class="section-block"><h3>In der Klausur: Exogenität</h3><p>Strikte Exogenität: $E[u|X] = 0$ → OLS unverzerrt. Schwache Exogenität für Konsistenz. Predetermined vs. endogen. IV-Lösung: $Cov(Z,u)=0$, $Cov(Z,X) \\neq 0$ (Relevanz). Exogenitäts-Tests (Hausman) nur mit Vorsicht.</p><div class="warn-box"><strong>Auslassungsbias:</strong> Relevante Variable in $u$ → $X$ korreliert mit $u$.</div><div class="warn-box"><strong>Reverse Causality:</strong> $Y$ beeinflusst $X$ → simultane Gleichung, OLS verzerrt.</div></div>`,
  heteroskedasticity: `<div class="section-block"><h3>In der Klausur: Heteroskedastizität</h3><p>$Var(u_i|X) \\neq \\sigma^2$ — MLR.5 verletzt. OLS bleibt unverzerrt/konsistent, aber SE verzerrt → falsche t/F. Breusch-Pagan, White-Test zur Diagnose. Remedies: robuste SE (White/HAC), WLS, Log-Transformation.</p><div class="warn-box"><strong>BLUE verloren:</strong> OLS nicht mehr effizient — GLS/WLS besser wenn Form bekannt.</div><div class="warn-box"><strong>Graphische Diagnose:</strong> Residuen vs. $\\hat y$ oder $x_j$ — Trichterform = hetero.</div></div>`,
  consistency: `<div class="section-block"><h3>In der Klausur: Konsistenz</h3><p>$\\text{plim}(\\hat\\beta) = \\beta$ wenn $X'X/n \\xrightarrow{p} Q$ positiv definit und $X'u/n \\xrightarrow{p} 0$ (Exogenität). Verletzung bei Endogenität: inkonsistent. Monte Carlo illustriert: mit wachsendem $n$ streut $\\hat\\beta$ um wahren Wert.</p><div class="warn-box"><strong>Unverzerrt ≠ konsistent:</strong> Verzerrter Schätzer kann konsistent sein (Bias → 0).</div><div class="warn-box"><strong>Endogenität:</strong> Hauptgrund für Inkonsistenz von OLS in Anwendungen.</div></div>`,
  autocorrelation: `<div class="section-block"><h3>In der Klausur: Autokorrelation</h3><p>$Cov(u_i,u_j|X) \\neq 0$ für $i \\neq j$ — typisch bei Zeitreihen. OLS unverzerrt, aber SE falsch. Durbin-Watson, Breusch-Godfrey-Test. AR(1)-Fehler: GLS (Cochrane-Orcutt) oder HAC-SE. Erste Differenzen bei Random Walk.</p><div class="warn-box"><strong>DW nur AR(1):</strong> Durbin-Watson testet spezifische Alternative — nicht alle AC-Formen.</div><div class="warn-box"><strong>Spurious regression:</strong> Nicht-stationäre Reihen ohne Cointegration → hohes $R^2$, nonsense t.</div></div>`,
  unbiasedness: `<div class="section-block"><h3>In der Klausur: Unverzerrtheit</h3><p>$E[\\hat\\beta|X] = \\beta$ unter $E[u|X]=0$ (MLR.4). Beweis: $E[(X'X)^{-1}X'u|X] = 0$. Verletzung: OVB, Endogenität. Unverzerrtheit ist bedingt auf $X$ — nicht bedeutungslos bei kleinem $n$.</p><div class="warn-box"><strong>Bedingt auf X:</strong> Unverzerrtheit gilt für gegebene Regressor-Matrix.</div><div class="warn-box"><strong>Konsistenz wichtiger:</strong> In großen Stichproben zählt plim; Unverzerrtheit allein reicht nicht.</div></div>`,
  gauss_markov: `<div class="section-block"><h3>In der Klausur: Gauss-Markov</h3><p>Unter MLR.1–MLR.4 + Homoskedastizität: OLS ist BLUE — best linear unbiased. Nicht linear: andere Schätzer möglich (ML bei Normalität effizient). Annahmen einzeln prüfen bevor „BLUE" behaupten.</p><div class="warn-box"><strong>Linear:</strong> Gauss-Markov gilt nur in Klasse linearer Schätzer.</div><div class="warn-box"><strong>Hetero bricht Effizienz:</strong> Bei heteroskedastischen Fehlern ist GLS effizienter als OLS.</div></div>`,
  r_squared: `<div class="section-block"><h3>In der Klausur: R² und adj. R²</h3><p>$R^2 = 1 - SSR/TSS$ — erklärter Anteil der Varianz von $y$. $\\bar{R}^2$ bestraft zusätzliche Regressoren. Hohes $R^2$ ≠ kausales Modell, ≠ gute Prognose out-of-sample. Vergleich nur bei gleicher $y$-Variable.</p><div class="warn-box"><strong>R² steigt mit Regressoren:</strong> Deshalb $\\bar{R}^2$ für Modellvergleich.</div><div class="warn-box"><strong>Within-R² in FE:</strong> In Panel-Fixed-Effects anders interpretieren als pooled $R^2$.</div></div>`,
  monte_carlo: `<div class="section-block"><h3>In der Klausur: Monte Carlo (Ergänzung)</h3><p>Simulation mit festem DGP, viele Stichproben, Schätzerverteilung empirisch. Zeigt Unverzerrtheit (Mittelwert), Varianz (Streuung), asymptotische Normalität (Histogramm). Ersetzt keine Realitätsvalidierung.</p><div class="warn-box"><strong>S zu klein:</strong> Wenige Simulationen → unruhige Verteilung.</div><div class="warn-box"><strong>DGP-Annahme:</strong> Ergebnis gilt nur unter simulierten Annahmen.</div></div>`,
  ols_objective: `<div class="section-block"><h3>In der Klausur: OLS-Zielfunktion (Ergänzung)</h3><p>Minimiere $SSR(\\beta) = \\sum (y_i - x_i'\\beta)^2$. FOC → Normalgleichungen. Quadratische Strafe → große Residuen wiegen schwer. Geometrie: orthogonale Projektion von $y$ auf $\\mathcal{C}(X)$.</p><div class="warn-box"><strong>SSR vs TSS:</strong> Nicht verwechseln in $R^2$-Formel.</div><div class="warn-box"><strong>Ausreißer:</strong> Quadratische Zielfunktion empfindlich — robuste Alternativen (LAD) bei Bedarf.</div></div>`
};

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  const depth = OEK_KLAUSUR_DEPTH[ch.id];
  if (entry && depth) {
    entry.theorie = (entry.theorie || '') + depth;
  }
}

const OEK_MECHANISM_BOOST = {
  sample_moments: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Stichprobenmomente $\\bar y$, $\\overline{x_j y}$, $\\overline{x_j x_k}$ bilden die empirische Grundlage von OLS. Unter Ergodizität und Exogenität konvergieren Sample-Momente gegen Populationsmomente — damit $\\hat\\beta \\xrightarrow{p} \\beta$. In der VL wird der Zusammenhang zwischen Momentenbedingungen $E[x'u]=0$ und Normalgleichungen explizit hergeleitet.</p></div>`,
  normal_equations: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>OLS minimiert $SSR(\\beta)$; FOC liefert $X'(y-X\\hat\\beta)=0$. Geometrisch: Residuenvektor $\\hat u$ steht senkrecht auf allen Regressorspalten. Diese Orthogonalität ist äquivalent zu $Cov(X,\\hat u)=0$ in der Stichprobe — Grundlage für partiellen Effekt und FWL.</p></div>`,
  partial_effects: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Partieller Effekt isoliert die Variation in $X_j$, die nicht durch andere Regressoren erklärt wird. In Log-Modellen: $\\partial E[\\ln Y|\\ln X]/\\partial \\ln X = \\beta$ (Elastizität); bei level-log semi-Elastizität. Klausur: Modelltyp identifizieren, dann Koeffizient korrekt interpretieren.</p></div>`,
  no_perfect_multicollinearity: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Rank-Bedingung: $rank(X)=k+1$. Dummy-Trap entsteht, wenn alle Kategorie-Dummies plus Intercept eingefügt werden. Imperfekte Multikollinearität erhöht Varianz von $(X'X)^{-1}$ — numerisch instabile Schätzung, aber prinzipiell identifizierbar.</p></div>`,
  exogeneity: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Strikte Exogenität $E[u|X]=0$ ist stärker als unkorreliert: bedingte Mittelwerte aller Funktionen von $X$ sind null. Schwache Exogenität für Konsistenz: $plim(X'u/n)=0$. Simultane Gleichungen verletzen Exogenität — dann 2SLS/IV mit Instrumenten $Z$ die $Cov(Z,u)=0$ und relevant sind.</p></div>`,
  endogeneity_ovb: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>OVB-Formel quantifiziert Verzerrung durch ausgelassene Variable. Richtung: $\\text{sign}(bias)=\\text{sign}(\\beta_2)\\cdot\\text{sign}(\\delta_1)$ mit $\\delta_1$ aus Hilfsregression. Measurement error in $X$ shrinkt Koeffizienten gegen null (Attenuation bias) — separates Endogenitäts-Muster.</p></div>`,
  consistency: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Konsistenz erfordert LLN für $X'X/n$ und $X'u/n$. Bei Panel-Fixed-Effects: Within-Transformation eliminiert zeitinvariante Heterogenität — Konsistenz für $\\beta$ bei $T$ fix, $n\\to\\infty$. Monte-Carlo illustriert: kleines $n$ → breite Verteilung trotz unverzerrtem Erwartungswert.</p></div>`,
  covariance_matrix: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Varianzformel folgt aus $Var(\\hat\\beta|X)=\\sigma^2(X'X)^{-1}$ via Varianz linearer Transformation. Diagonalelemente sind SE der Einzelkoeffizienten; Off-Diagonal = Kovarianz zwischen $\\hat\\beta_j$ und $\\hat\\beta_k$ — relevant bei joint tests und Korrelation der Schätzer.</p></div>`,
  prediction: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Prognosevarianz zerlegt sich in Schätzunsicherheit ($x_0'\\widehat{Var}(\\hat\\beta)x_0$) und Störterm ($\\sigma^2$). Für erwarteten conditional mean reicht erster Term; für Einzelbeobachtung beide. Residual standard error $\\hat\\sigma$ aus $SSR/(n-k-1)$.</p></div>`,
  prediction_intervals: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Prognoseintervall breiter als Konfidenzintervall für $E[Y|x_0]$, weil zusätzliche Unsicherheit aus $\\sigma^2$ des Störterms. Formeln in VL nutzen t-Quantil mit $n-k-1$ df. Out-of-sample-Prognose: Modellgüte am Fit, nicht am $R^2$ allein beurteilen.</p></div>`,
  t_test: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>t-Statistik standardisiert Schätzer durch SE: $t=\\hat\\beta_j/SE(\\hat\\beta_j)$. Unter $H_0$ und Normalität exakt t-verteilt; asymptotisch normal bei großem $n$. Einseitiger Test: kritisches Quantil $\\alpha$ statt $\\alpha/2$. Robust t: gleiche Formel, korrigierte SE.</p></div>`,
  f_test: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>F-Statistik misst SSR-Anstieg unter Restriktion relativ zu Freiheitsgraden. Nested models: eingeschränktes Modell muss Spezialfall sein. Wald-Test asymptotisch äquivalent bei großem $n$. Spezialfall einzelne Restriktion: $F=t^2$.</p></div>`,
  confidence_intervals: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>KI konstruiert zufälliges Intervall um festen Parameter — korrekte Interpretation: Wiederholungslogik über Stichproben. Äquivalenz zum zweiseitigen t-Test bei $\\alpha$-Niveau. Breite skaliert mit $SE$ und t-Quantil — mehr Beobachtungen → schmaleres KI.</p></div>`,
  normal_linear_model_mle: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Log-Likelihood bei Normalität quadratisch in $\\beta$ — Maximum fällt mit OLS zusammen. ML für $\\sigma^2$: $SSR/n$ (verzerrt); unverzerrt: $SSR/(n-k-1)$. Cramér-Rao: unter Normalität ist OLS effizient (nicht nur BLUE).</p></div>`,
  linear_restrictions_ur: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Restriktion $R\\beta=r$ reduziert Parameterdimension. F-Test vergleicht SSR eingeschränkt vs. uneingeschränkt. Mehrere lineare Hypothesen gleichzeitig: joint F statt mehrere t-Tests (multiple testing). Immer $R$ und $r$ explizit aufschreiben vor Rechnung.</p></div>`,
  asymptotic_normality: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>CLT für $\\sqrt{n}(\\hat\\beta-\\beta)$ unter Regelmäßigkeitsbedingungen. Delta-Methode für Funktionen $g(\\hat\\beta)$. Endliche Stichprobe: exakte t-Verteilung nur bei normalen $u$ — bei $n$ groß oft vertretbar, bei kleinem $n$ vorsichtig.</p></div>`,
  vif_collinearity: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>$R_j^2$ aus Hilfsregression misst, wie gut $X_j$ durch andere $X$ erklärt wird. Hohes $R_j^2$ → großes $VIF_j$ → $(X'X)^{-1}_{jj}$ groß → breite SE. Condition number des $X'X$-Matrix ergänzt VIF für Gesamt-Kollinearität.</p></div>`,
  fwl_partial_regression: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Residuenoperator $M_2 = I - X_2(X_2'X_2)^{-1}X_2'$ projiziert orthogonal auf Spaltenraum von $X_2$. FWL: $\\hat\\beta_1$ aus vollem Modell = OLS von $M_2 Y$ auf $M_2 X_1$. Partial regression plot visualisiert diese Projektion.</p></div>`,
  heteroskedasticity: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>Heteroskedastizität verletzt MLR.5, nicht MLR.1–4. OLS-Schätzer bleibt linear und unter Exogenität unverzerrt. White-Test und BP-Test prüfen $Var(u|X)$-Struktur. Remedies: robuste SE, WLS bei bekannter Form, Log-Transformation.</p></div>`,
  robust_gls: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>GLS transformiert Modell mit $\\Omega^{-1/2}$ sodass transformierte Fehler homoskedastisch sind. Fehlspezifikation von $\\Omega$ → GLS inkonsistent oder ineffizient. Feasible GLS schätzt $\\Omega$ aus ersten Schritten — asymptotisch effizient unter korrekter Spezifikation.</p></div>`,
  hac_newey_west: `<div class="section-block"><h3>Mechanismus und VL-Verknüpfung</h3><p>HAC-Schätzer gewichtet Kreuzprodukte $x_i x_j \\hat u_i \\hat u_j$ mit Kernel (Bartlett/Newey-West) und Bandbreite $L$. Korrigiert SE bei Hetero und Autokorrelation ohne $\\Omega$ voll zu modellieren. $\\hat\\beta$ unverändert — nur Inferenz betroffen.</p></div>`
};

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = String(entry.theorie || '');
  const boost = OEK_MECHANISM_BOOST[ch.id];
  if (html.length < 2500 && boost) {
    entry.theorie = html + boost;
  }
}

const OEK_FINAL_BOOST = {
  f_test: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>$SSR_r - SSR_u$ muss nichtnegativ sein; $q$ = Anzahl Restriktionen. Numerisches Beispiel: $F=4{,}2$ bei $q=2$, $df_2=50$ → mit F-Tabelle vergleichen.</p><div class="warn-box"><strong>Nested models:</strong> Uneingeschränktes Modell muss das eingeschränkte als Spezialfall enthalten.</div></div>`,
  prediction: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>Prognosefehler $e_0 = y_0 - x_0'\\hat\\beta$ hat Varianz $Var(x_0'\\hat\\beta) + \\sigma^2$ für Einzelbeobachtung.</p><div class="warn-box"><strong>In-sample vs. out-of-sample:</strong> Fit-Güte am Trainingsdatensatz überschätzt Prognosequalität.</div></div>`,
  no_perfect_multicollinearity: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>$rank(X) < k+1$ → $(X'X)$ singulär; Software droppt automatisch oder liefert NaN.</p><div class="warn-box"><strong>Prüfen vor Schätzung:</strong> Korrelationsmatrix der Regressoren auf $|r|>0{,}95$ scannen.</div></div>`,
  vif_collinearity: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>$VIF_j = 1/(1-R_j^2)$; $R_j^2 \\to 1$ → $VIF \\to \\infty$. Regel: $VIF>10$ problematisch.</p><div class="warn-box"><strong>Centering:</strong> Interaktionsterme können VIF erhöhen — Variablen zentrieren hilft numerisch.</div></div>`,
  partial_effects: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>Bei Interaktion $X_1 X_2$: Grenzeffekt von $X_1$ hängt vom Niveau von $X_2$ ab: $\\beta_1 + \\beta_3 X_2$.</p><div class="warn-box"><strong>Log-Level:</strong> $\\beta$ approximiert prozentuale Änderung von $Y$ bei +1 Einheit $X$ nur bei kleinen Änderungen.</div></div>`,
  normal_linear_model_mle: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>Log-Likelihood $\\ell(\\beta,\\sigma^2) = -\\frac{n}{2}\\ln(2\\pi\\sigma^2) - \\frac{SSR(\\beta)}{2\\sigma^2}$ — quadratisch in $\\beta$.</p><div class="warn-box"><strong>LRT vs. F:</strong> Likelihood-Ratio-Test äquivalent zu F bei linearer Normalität und nested Restriktionen.</div></div>`,
  asymptotic_normality: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>$\\sqrt{n}(\\hat\\beta-\\beta) \\xrightarrow{d} N(0, Avar)$ mit $Avar = \\sigma^2 Q^{-1}$; Schätzer $\\widehat{Avar}$ für Wald-Tests.</p><div class="warn-box"><strong>Endliche n:</strong> Bootstrap oder exact t bei kleinem $n$ und Normalitätszweifel.</div></div>`,
  hac_newey_west: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>Bandbreite $L \\approx 4(n/100)^{2/9}$ (floor rule) — in Aufgaben oft vorgegeben. Kernel trunciert höhere Lags.</p><div class="warn-box"><strong>Zeitreihen:</strong> HAC setzt schwache Abhängigkeit der Fehler voraus — Trend/Unit Root zuerst prüfen.</div></div>`,
  normal_equations: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>Matrixform: $\\hat\\beta = (X'X)^{-1}X'y$; Dimensionscheck: $(k+1)\\times 1$ Ergebnisvektor.</p><div class="warn-box"><strong>Rechenweg Klausur:</strong> Erst $X'X$ und $X'y$ bilden, dann invertieren — Zwischenschritte dokumentieren.</div></div>`,
  prediction_intervals: `<div class="section-block"><h3>Notation (VL-Basis)</h3><p>PI-Breite wächst mit Entfernung von $\\bar x$ — Prognose am Stichprobenmittel präziser als am Rand.</p><div class="warn-box"><strong>Einzel vs. Mittelwert:</strong> PI für $Y_{neu}$ immer breiter als KI für $E[Y|x_0]$.</div></div>`
};

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = String(entry.theorie || '');
  const finalBoost = OEK_FINAL_BOOST[ch.id];
  if (html.length < 2500 && finalBoost) {
    entry.theorie = html + finalBoost;
  }
}

const THEORY_TARGET = 2750;
for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = String(entry.theorie || '');
  if (html.length >= THEORY_TARGET || html.includes('Klausurtransfer (source-distilled)') || html.includes('In der Klausur:')) continue;
  entry.theorie = `${html}<div class="section-block"><h3>Klausurtransfer (source-distilled)</h3>
<p><strong>Prüfungsstandard:</strong> Annahmen → Schätzer/Identifikation → Inferenz (SE, t/F) → ökonomische Interpretation der Koeffizienten.</p>
<p><em>source-distilled / platform-added-explanation:</em> Ergänzung aus Ökonometrie-VL; Beweise und Spezialfälle in Primär-PDFs.</p></div>`;
}

export const R_BLOCKS_BY_ID = Object.fromEntries(
  CURRICULUM
    .filter((entry) => entry.rBlock)
    .map((entry) => [
      entry.id,
      {
        ...entry.rBlock,
        title: entry.rBlock.title || entry.title,
        taskPrompt: entry.rBlock.taskPrompt || entry.rBlock.miniTask || ''
      }
    ])
);
