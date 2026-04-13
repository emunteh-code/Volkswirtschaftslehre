/**
 * Public-facing “trusted core”: strongest current live modules (source-backed depth,
 * shared portal stack). Used for landing prioritization only — not a quality claim
 * about other live modules, which remain useful with module-specific caveats.
 */
export const TRUSTED_CORE_SLUGS = Object.freeze(["mikro1", "statistik", "recht", "oekonometrie"]);

export const MODULES = [
  {
    slug: "mikro1",
    title: "Mikroökonomik I",
    shortTitle: "Mikro I",
    summary: "Haushalts- und Unternehmenstheorie sowie Marktgleichgewicht.",
    accent: "#7c3aed",
    difficulty: "Anfänger",
    time: "45h",
    prereq: "Keine",
    href: "./mikro1/index.html",
    status: "live",
    type: "quantitative"
  },
  {
    slug: "mikro2",
    title: "Mikroökonomik II",
    shortTitle: "Mikro II",
    summary: "Spieltheorie, Oligopole und Marktversagen.",
    accent: "#7c3aed",
    difficulty: "Fortgeschritten",
    time: "40h",
    prereq: "Mikro I",
    href: "./mikro2/index.html",
    status: "hidden",
    type: "quantitative",
    sourceCorpusInRepo: false,
    sourceStatusNote:
      "No Mikro II folder in source-materials; not direct-source anchored. See docs/audits/mikro2-quarantine-roadmap-pass-1.md and docs/audits/mikro2-status-guard-pass-2.md (repo reference inventory)."
  },
  {
    slug: "makro1",
    title: "Makroökonomik I",
    shortTitle: "Makro I",
    summary: "Konjunktur, Arbeitsmarkt und IS-LM-Modell.",
    accent: "#7c3aed",
    difficulty: "Anfänger",
    time: "45h",
    prereq: "Keine",
    href: "./makro1/index.html",
    status: "live",
    type: "quantitative"
  },
  {
    slug: "makro2",
    title: "Makroökonomik II",
    shortTitle: "Makro II",
    summary: "Offene Makro, Wachstum und Wirtschaftspolitik.",
    accent: "#7c3aed",
    difficulty: "Fortgeschritten",
    time: "40h",
    prereq: "Makro I",
    href: "./makro2/index.html",
    status: "live",
    type: "quantitative"
  },
  {
    slug: "oekonometrie",
    title: "Einführung in die Ökonometrie",
    shortTitle: "Ökonometrie",
    summary: "Lineare Regression, Inferenz und Diagnostik mit R.",
    accent: "#7c3aed",
    difficulty: "Experte",
    time: "50h",
    prereq: "Statistik",
    href: "./oekonometrie/index.html",
    status: "live",
    type: "quantitative_coding"
  },
  {
    slug: "statistik",
    title: "Statistik",
    shortTitle: "Statistik",
    summary: "Deskriptive und induktive Statistik sowie Inferenz.",
    accent: "#7c3aed",
    difficulty: "Anfänger",
    time: "50h",
    prereq: "Mathematik",
    href: "./statistik/index.html",
    status: "live",
    type: "quantitative"
  },
  {
    slug: "finanzwirtschaft",
    title: "Finanzwirtschaft",
    shortTitle: "Finanz",
    summary: "Investition, Finanzierung, Bewertung und Risikoentscheidungen.",
    accent: "#7c3aed",
    difficulty: "Fortgeschritten",
    time: "45h",
    prereq: "Mathematik",
    href: "./finanzwirtschaft/index.html",
    status: "live",
    type: "quantitative"
  },
  {
    slug: "mathematik",
    title: "Mathematik",
    shortTitle: "Mathe",
    summary: "Algebra, Analysis und Optimierung für Ökonomen.",
    accent: "#7c3aed",
    difficulty: "Anfänger",
    time: "60h",
    prereq: "Keine",
    href: "./mathematik/index.html",
    status: "live",
    type: "quantitative"
  },
  {
    slug: "jahresabschluss",
    title: "Jahresabschluss",
    shortTitle: "Jahresabschluss",
    summary: "Bilanzierung, Bewertung und GoB nach HGB.",
    accent: "#7c3aed",
    difficulty: "Anfänger",
    time: "40h",
    prereq: "Keine",
    href: "./jahresabschluss/index.html",
    status: "live",
    type: "mixed"
  },
  {
    slug: "recht",
    title: "Recht für Wirtschaftswissenschaftler",
    shortTitle: "Recht",
    summary: "BGB Allgemeiner Teil, Schuldrecht und Gutachtenstil.",
    accent: "#7c3aed",
    difficulty: "Anfänger",
    time: "45h",
    prereq: "Keine",
    href: "./recht/index.html",
    status: "live",
    type: "text_doctrinal"
  },
  {
    slug: "internationale-wirtschaftsbeziehungen",
    title: "Internationale Wirtschaftsbeziehungen",
    shortTitle: "IWB",
    summary: "Handelstheorie, Politik und internationale Makro.",
    accent: "#7c3aed",
    difficulty: "Fortgeschritten",
    time: "40h",
    prereq: "Mikro I, Makro I",
    href: "./internationale-wirtschaftsbeziehungen/index.html",
    status: "live",
    type: "quantitative"
  }
];

export function isLiveModuleVisible(module) {
  return module?.status === "live";
}

export const PUBLIC_MODULES = MODULES.filter(isLiveModuleVisible);

/** Live modules in `TRUSTED_CORE_SLUGS` order (subset of the full catalogue). */
export function getTrustedCoreModules() {
  return TRUSTED_CORE_SLUGS.map((slug) => MODULES.find((m) => m.slug === slug)).filter(
    (m) => m && isLiveModuleVisible(m)
  );
}

/** Other live modules, preserving catalogue order from `MODULES`. */
export function getNonTrustedPublicModules() {
  const trusted = new Set(TRUSTED_CORE_SLUGS);
  return MODULES.filter((m) => isLiveModuleVisible(m) && !trusted.has(m.slug));
}

/**
 * URL path prefixes (repo root) whose `index.html` boots `assets/js/generated-portal/main.js`.
 * Not in `PUBLIC_MODULES`; different trust / provenance class than curated module `js/main.js` stacks.
 */
export const GENERATED_PORTAL_ROUTE_PREFIXES = ["r/", "politisches-system-brd/"];

export const FILTERS = [
  { id: "quantitative", label: "Analytisch" },
  { id: "quantitative_coding", label: "Mit R-Lab" },
  { id: "text_doctrinal", label: "Textlastig" },
  { id: "mixed", label: "Gemischt" }
];

export function getModuleBySlug(slug) {
  return MODULES.find((module) => module.slug === slug) || null;
}
