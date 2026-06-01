/**
 * Fleet graph pedagogy chrome — prediction prompt + Theorie notation link.
 * Canvas cannot render LaTeX; prompts stay in HTML (MathJax in theory tab).
 */
import {
  getGraphClarity,
  renderGraphLegendHtml,
  renderGraphSeeLine
} from "./graphClarity.js";

const DEFAULT_PROMPT =
  "Bevor Sie die Regler bewegen: Welche Kurve oder welcher Punkt sollte sich ändern — und welche Größe bleibt zunächst fix?";

const DEFAULT_NOTATION =
  "Achsen- und Variablennotation finden Sie im Tab <strong>Theorie</strong> zum aktuellen Konzept.";

/** @type {Record<string, { prompt: string, notation?: string }>} */
const PEDAGOGY_BY_CONCEPT = {
  budget: {
    prompt: "Steigen die Preise bei gleichem Einkommen: Was passiert mit der Budgetgerade — Drehung, Parallelverschiebung oder beides?",
    notation: "Notation: $m$, $p_1$, $p_2$, $x_1$, $x_2$ — siehe Theorie zum Budget."
  },
  indiff: {
    prompt: "Welche Indifferenzkurve gehört zum höheren Nutzenniveau — die nähere oder die weiter vom Ursprung entfernte?",
    notation: "Nutzen $u(x_1,x_2)$ und Indifferenzkurven — Tab Theorie."
  },
  hausopt: {
    prompt: "Wo liegt das Optimum: Tangentialpunkt von Budget und Indifferenzkurve — was gilt dort für die Grenzrate der Substitution?",
    notation: "MRS = $p_1/p_2$ am Optimum — Theorie Haushaltsoptimum."
  },
  slutsky: {
    prompt: "Zerlegen Sie die Gesamtwirkung: Substitutionseffekt entlang der alten Indifferenzkurve — was bleibt konstant?",
    notation: "Slutsky-Zerlegung — Theorie zum Kompensationsprinzip."
  },
  produktion: { prompt: "Entlang einer Isoquante: Was misst die GRTS ökonomisch?", notation: "Isoquante, $f(L,K)$ — Theorie Produktion." },
  grts: { prompt: "Bewegen Sie den Punkt entlang der Isoquante: Steigt oder fällt die Steigung der Tangente?", notation: "GRTS-Definition — Tab Theorie." },
  kosten: { prompt: "Am Tangentialpunkt: Welche Steigung hat die Isokostengerade in $(L,K)$-Raum?", notation: "Isokosten $wL+rK$ — Theorie Kostenminimum." },
  markt: { prompt: "Verschiebt sich die Nachfrage oder das Angebot — wo liegt das neue Gleichgewicht?", notation: "Marktgleichgewicht $p^*$, $q^*$ — Theorie Wettbewerb." },
  monopol: { prompt: "Wo schneiden sich MR und MC — und wie unterscheidet sich der Monopolpreis vom Wettbewerbspreis?", notation: "MR, MC, Grenzerlös — Theorie Monopol." },
  bivariat: { prompt: "Vor dem Regler: Wenn $r$ negativ wird — wie ändert sich die Punktwolke qualitativ?", notation: "Korrelation, Kovarianz — Theorie Bivariat." },
  regression_schaetzung_inferenz: {
    prompt: "Erhöhen Sie die Streuung: Was passiert mit der OLS-Gerade und der Reststreuung?",
    notation: "$\\hat{\\beta}_0$, $\\hat{\\beta}_1$ — Formeln-Tab und Theorie Regression."
  },
  ols_objective: {
    prompt: "Welche Punkte zieht die OLS-Linie am stärksten — die Ausreißer oder die Mitte der Wolke?",
    notation: "OLS-Residuenquadrate — Theorie Schätzung."
  },
  islm: {
    prompt: "Expansive Fiskalpolitik: Verschiebt sich IS oder LM — und was passiert mit $(Y,i)$?",
    notation: "IS-LM-Achsen $(Y,i)$ — Theorie IS-LM."
  },
  mundell_fleming: {
    prompt: "Gleicher Schock, anderes Regime: Welcher Kanal passt sich an — $Y$, $i$ oder der Wechselkurs?",
    notation: "MF-Diagramm — Theorie Mundell-Fleming."
  },
  spieltheorie_statisch: {
    prompt: "Markieren Sie zuerst die beste Antwort auf die gegnerische Strategie — wo liegt das Nash-Gleichgewicht?",
    notation: "Auszahlungsmatrix — Theorie Spieltheorie."
  },
  gleichgewicht_tausch: {
    prompt:
      "Lesen Sie zuerst O_A und O_B: Welche Indifferenzkurven gehören zu wem — und was zeigt die Linse zwischen zwei sich schneidenden Kurven?",
    notation: "$x_1^A, x_2^A, GRS^A = GRS^B$, Kontraktkurve — Tab Theorie Edgeworth-Box."
  },
  gleichgewicht_walras: {
    prompt: "Wo schneidet die Überschussnachfrage die Null-Linie — und was bedeutet das für die Markträumung?",
    notation: "$z(p^*) = 0$, Walrasches Gesetz — Theorie allgemeines Gleichgewicht."
  },
  funktionen_gleichungen: {
    prompt: "Verändern Sie $a$ und $c$: Verschiebt sich der Scheitel horizontal, vertikal oder beides?",
    notation: "Transformationen $f(x)=a(x-c)^2+d$ — Theorie Funktionen."
  }
};

/**
 * @param {string} conceptId
 * @returns {string} HTML for static pedagogy footer (below live graph_info).
 */
export function renderGraphPedagogyFooter(conceptId, moduleHint = "") {
  const entry = PEDAGOGY_BY_CONCEPT[conceptId] || {};
  const clarity = getGraphClarity(conceptId, moduleHint);
  const prompt = entry.prompt || DEFAULT_PROMPT;
  const notation = entry.notation || DEFAULT_NOTATION;
  const sliderLine = clarity.sliderEffect
    ? `<p class="graph-pedagogy-slider"><span class="graph-pedagogy-label">Regler</span> ${clarity.sliderEffect}</p>`
    : "";
  return `<footer class="graph-pedagogy-footer" aria-label="Grafik-Lernhilfe">
<p class="graph-pedagogy-prompt"><span class="graph-pedagogy-label">Vorhersage</span> ${prompt}</p>
${sliderLine}
<p class="graph-pedagogy-notation">${notation}</p>
</footer>`;
}

/**
 * Inject fleet pedagogy chrome into an already-rendered graph panel (idempotent).
 * @param {string} conceptId
 * @param {ParentNode} [root]
 */
export function ensureGraphPedagogyChrome(conceptId, root = document, moduleHint = "") {
  const container = root.querySelector?.(".graph-container") || root.querySelector?.("#content .graph-container");
  if (!container) return;

  const title = container.querySelector(".graph-panel-title");
  const clarity = getGraphClarity(conceptId, moduleHint);
  if (!container.querySelector(".graph-see-line") && !container.querySelector(".graph-panel-subtitle")) {
    const anchor = title || container.firstElementChild;
    if (anchor) {
      anchor.insertAdjacentHTML(
        "afterend",
        renderGraphSeeLine(conceptId, moduleHint) + renderGraphLegendHtml(clarity.legend)
      );
    }
  } else if (!container.querySelector(".graph-legend-econ")) {
    const legendEl = container.querySelector(".graph-see-line") || title;
    legendEl?.insertAdjacentHTML("afterend", renderGraphLegendHtml(clarity.legend));
  }

  if (!container.querySelector(".graph-control-hint") && container.querySelector(".graph-controls")) {
    const hint = document.createElement("p");
    hint.className = "graph-control-hint";
    hint.textContent = `Regler anpassen — ${clarity.sliderEffect || "dann die Kurveninterpretation unten prüfen."}`;
    const canvas = container.querySelector("canvas");
    if (canvas) container.insertBefore(hint, canvas);
    else if (title?.nextSibling) title.insertAdjacentElement("afterend", hint);
    else container.appendChild(hint);
  }

  if (!container.querySelector(".graph-pedagogy-footer")) {
    container.insertAdjacentHTML("beforeend", renderGraphPedagogyFooter(conceptId, moduleHint));
  }

  container.classList.add("graph-shell");
}
