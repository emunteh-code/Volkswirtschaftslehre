const GERMAN_COPY_REPLACEMENTS = [
  [/\bMikrooekonomik\b/g, "Mikroökonomik"],
  [/\bMakrooekonomik\b/g, "Makroökonomik"],
  [/\bVolkswirtschaftslehre\b/g, "Volkswirtschaftslehre"],
  [/\bEinfuehrung\b/g, "Einführung"],
  [/\bEinfuehrungen\b/g, "Einführungen"],
  [/\boeffn/gi, (match) => (match[0] === "O" ? "öffn".replace("ö", "Ö") : "öffn")],
  [/\bgeoeffn/gi, (match) => (match[0] === "G" ? "Geöffn" : "geöffn")],
  [/\bDatensaetze\b/g, "Datensätze"],
  [/\bDatensatz\b/g, "Datensatz"],
  [/\bKleinuebungen\b/g, "Kleinstübungen"],
  [/\bKleinuebung\b/g, "Kleinstübung"],
  [/\bLoesung\b/g, "Lösung"],
  [/\bLoesungen\b/g, "Lösungen"],
  [/\bLoesungs\b/g, "Lösungs"],
  [/\bMusterloesung\b/g, "Musterlösung"],
  [/\bPruefung\b/g, "Prüfung"],
  [/\bPruefungs\b/g, "Prüfungs"],
  [/\bUebung\b/g, "Übung"],
  [/\bUebungen\b/g, "Übungen"],
  [/\buebung\b/g, "übung"],
  [/\bTutorium\b/g, "Tutorium"],
  [/\bTutorien\b/g, "Tutorien"],
  [/\bRueck\b/g, "Rück"],
  [/\bLernraeume\b/g, "Lernräume"],
  [/\bLernraum\b/g, "Lernraum"],
  [/\bzufaellig\b/g, "zufällig"],
  [/\bAusgewaehlt\b/g, "Ausgewählt"],
  [/\bhaeufig\b/g, "häufig"],
  [/\bfuer\b/g, "für"],
  [/\bFuer\b/g, "Für"],
  [/\bGeorg-August-Universitaet Goettingen\b/g, "Georg-August-Universität Göttingen"],
  [/\bUniversitaet\b/g, "Universität"],
  [/\bGoettingen\b/g, "Göttingen"]
];

const GERMAN_SKIP_SELECTOR = [
  "script",
  "style",
  "textarea",
  "pre",
  "code",
  "kbd",
  "mjx-container",
  ".math-block",
  ".lab-editor",
  ".lab-output",
  ".f-eq",
  ".rp-f-eq",
  ".graph-controls"
].join(", ");

const GERMAN_ATTRS = ["placeholder", "title", "aria-label", "aria-description", "alt", "value"];

function transliterateGermanWord(text) {
  let result = text;

  for (const [pattern, replacement] of GERMAN_COPY_REPLACEMENTS) {
    result = result.replace(pattern, replacement);
  }

  result = result
    .replace(/(^|[^A-Za-zÄÖÜäöüßAEIOUaeiou])Ae/g, "$1Ä")
    .replace(/(^|[^A-Za-zÄÖÜäöüßAEIOUaeiou])ae/g, "$1ä")
    .replace(/(^|[^A-Za-zÄÖÜäöüßAEIOUaeiou])Oe/g, "$1Ö")
    .replace(/(^|[^A-Za-zÄÖÜäöüßAEIOUaeiou])oe/g, "$1ö")
    .replace(/(^|[^A-Za-zÄÖÜäöüßAEIOUaeiouQq])Ue/g, "$1Ü")
    .replace(/(^|[^A-Za-zÄÖÜäöüßAEIOUaeiouQq])ue/g, "$1ü");

  return result;
}

export function normalizeGermanCopy(root = document.body) {
  if (!root || typeof document === "undefined" || !document.createTreeWalker) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node?.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest(GERMAN_SKIP_SELECTOR)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const normalized = transliterateGermanWord(node.nodeValue);
    if (normalized !== node.nodeValue) {
      node.nodeValue = normalized;
    }
  });

  if (root.nodeType === Node.ELEMENT_NODE && root.matches?.(GERMAN_SKIP_SELECTOR)) return;

  const elements = root.nodeType === Node.ELEMENT_NODE
    ? [root, ...root.querySelectorAll("*")]
    : Array.from(root.parentElement?.querySelectorAll("*") || []);

  elements.forEach((element) => {
    if (!(element instanceof Element)) return;
    if (element.closest(GERMAN_SKIP_SELECTOR)) return;
    GERMAN_ATTRS.forEach((attr) => {
      if (!element.hasAttribute(attr)) return;
      const value = element.getAttribute(attr);
      if (!value) return;
      const normalized = transliterateGermanWord(value);
      if (normalized !== value) {
        element.setAttribute(attr, normalized);
      }
    });
  });
}

export function ensureMathJax() {
  if (document.getElementById("MathJax-script")) return;
  window.MathJax = {
    loader: { load: ["[tex]/ams"] },
    tex: {
      packages: { "[+]": ["ams"] },
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]]
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"]
    },
    startup: { typeset: false }
  };
  const script = document.createElement("script");
  script.id = "MathJax-script";
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml.js";
  document.head.appendChild(script);
}

export function renderMath(el) {
  const target = el || document.getElementById("content");
  if (!target) return;

  normalizeGermanCopy(target);

  const typeset = () => {
    if (window.MathJax?.typesetPromise) {
      MathJax.typesetPromise([target]).catch((error) => console.warn("MathJax:", error));
    }
  };

  if (window.MathJax?.typesetPromise) {
    typeset();
  } else if (window.MathJax?.startup?.promise) {
    MathJax.startup.promise.then(typeset).catch((error) => console.warn("MathJax:", error));
  } else {
    const poll = window.setInterval(() => {
      if (window.MathJax?.typesetPromise) {
        window.clearInterval(poll);
        typeset();
      }
    }, 100);
    window.setTimeout(() => window.clearInterval(poll), 10000);
  }
}
