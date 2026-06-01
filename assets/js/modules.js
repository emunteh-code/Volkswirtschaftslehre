/**
 * Product tiers — exam readiness scope, not a quality ranking.
 * See docs/audits/2026-05-31-final-release-blockers-pass.md
 */
export const RELEASE_TIERS = Object.freeze({
  core: "core",
  beta: "beta",
  structural: "structural"
});

/** @deprecated Use EXAM_READY_CORE_SLUGS — kept for imports during migration */
export const TRUSTED_CORE_SLUGS = Object.freeze([
  "mikro1",
  "statistik",
  "oekonometrie",
  "mathematik",
  "makro2"
]);

/** Modules with strongest structural + source depth for recommended entry */
export const EXAM_READY_CORE_SLUGS = Object.freeze([
  "mikro1",
  "makro2",
  "statistik",
  "oekonometrie",
  "mathematik"
]);

export const RELEASE_TIER_LABELS = Object.freeze({
  core: "Prüfungsbereit",
  beta: "Beta",
  structural: "Strukturell"
});

export const RELEASE_TIER_TOOLTIPS = Object.freeze({
  core: "Strukturell vollständig (Theorie, Formeln, Aufgaben) und eng an VL-Quellen — empfohlener Einstieg.",
  beta: "Vollständige Struktur, VL-PDFs lokal ergänzen.",
  structural: "Grundgerüst vorhanden; Inhaltstiefe wird noch ausgebaut — PDFs als Primärreferenz."
});

export const MODULES = [
  {
    slug: "mikro1",
    title: "Mikroökonomik I",
    shortTitle: "Mikro I",
    summary: "Haushalts- und Unternehmenstheorie sowie Marktgleichgewicht.",
    examPrepNote: "A−: Theorie, Graphen, stepped Aufgaben — Primär-Drill-Modul.",
    accent: "#7c3aed",
    difficulty: "Anfänger",
    time: "45h",
    prereq: "Keine",
    href: "./mikro1/index.html",
    status: "live",
    type: "quantitative",
    releaseTier: "core"
  },
  {
    slug: "mikro2",
    title: "Mikroökonomik II",
    shortTitle: "Mikro II",
    summary: "Oligopol, Spieltheorie, Entscheidungen unter Unsicherheit und Allgemeines Gleichgewicht.",
    accent: "#6d28d9",
    difficulty: "Fortgeschritten",
    time: "40h",
    prereq: "Mikro I",
    href: "./mikro2/index.html",
    status: "live",
    type: "quantitative",
    releaseTier: "core",
    examPrepNote: "A−: Oligopol & Spieltheorie exam-ready; Marktversagen ergänzend gekennzeichnet.",
    sourceCorpusInRepo: true,
    sourceStatusNote: "VL-Quellen im Repo; Ergänzungen gekennzeichnet."
  },
  {
    slug: "makro1",
    title: "Makroökonomik I",
    shortTitle: "Makro I",
    summary: "Konjunktur, Arbeitsmarkt und IS-LM-Modell.",
    accent: "#2563eb",
    difficulty: "Anfänger",
    time: "45h",
    prereq: "Keine",
    href: "./makro1/index.html",
    status: "live",
    type: "quantitative",
    releaseTier: "core",
    examPrepNote: "A−: IS-LM, Konzept-Check, stepped Aufgaben + ILIAS für Randfälle."
  },
  {
    slug: "makro2",
    title: "Makroökonomik II",
    shortTitle: "Makro II",
    summary: "Offene Makro, Wachstum und Wirtschaftspolitik.",
    accent: "#1d4ed8",
    difficulty: "Fortgeschritten",
    time: "40h",
    prereq: "Makro I",
    href: "./makro2/index.html",
    status: "live",
    type: "quantitative",
    releaseTier: "core",
    examPrepNote: "A−: Offene Volkswirtschaft, Konzept-Check, Probeklausur-Simulation."
  },
  {
    slug: "oekonometrie",
    title: "Einführung in die Ökonometrie",
    shortTitle: "Ökonometrie",
    summary: "Lineare Regression, Inferenz und Diagnostik mit R.",
    accent: "#0d9488",
    difficulty: "Experte",
    time: "50h",
    prereq: "Statistik",
    href: "./oekonometrie/index.html",
    status: "live",
    type: "quantitative_coding",
    releaseTier: "core",
    examPrepNote: "A−: Regression, Inferenz, R-Übung — ILIAS für Beweise."
  },
  {
    slug: "statistik",
    title: "Statistik",
    shortTitle: "Statistik",
    summary: "Deskriptive und induktive Statistik sowie Inferenz.",
    accent: "#059669",
    difficulty: "Anfänger",
    time: "50h",
    prereq: "Mathematik",
    href: "./statistik/index.html",
    status: "live",
    type: "quantitative",
    releaseTier: "core",
    examPrepNote: "A−: Tests, KI, R-Übung, Konzept-Check — starke Drill-Basis."
  },
  {
    slug: "finanzwirtschaft",
    title: "Finanzwirtschaft",
    shortTitle: "Finanz",
    summary: "Investition, Finanzierung, Bewertung und Risikoentscheidungen.",
    accent: "#ca8a04",
    difficulty: "Fortgeschritten",
    time: "45h",
    prereq: "Mathematik",
    href: "./finanzwirtschaft/index.html",
    status: "live",
    type: "quantitative",
    releaseTier: "core",
    examPrepNote: "A−: NPV, Liquidität, IZF — Klausurtransfer + Konzept-Check."
  },
  {
    slug: "mathematik",
    title: "Mathematik",
    shortTitle: "Mathe",
    summary: "Algebra, Analysis und Optimierung für Ökonomen.",
    accent: "#db2777",
    difficulty: "Anfänger",
    time: "60h",
    prereq: "Keine",
    href: "./mathematik/index.html",
    status: "live",
    type: "quantitative",
    releaseTier: "core",
    examPrepNote: "A−: Analysis, LA, Optimierung + R-Begleitpraxis."
  },
  {
    slug: "jahresabschluss",
    title: "Jahresabschluss",
    shortTitle: "Jahresabschluss",
    summary: "Bilanzierung, Bewertung und GoB nach HGB.",
    accent: "#b45309",
    difficulty: "Anfänger",
    time: "40h",
    prereq: "Keine",
    href: "./jahresabschluss/index.html",
    status: "live",
    type: "mixed",
    releaseTier: "core",
    examPrepNote: "A−: Buchungssätze, Umlauf, GoB — nummerierte Klausurketten."
  },
  {
    slug: "recht",
    title: "Recht für Wirtschaftswissenschaftler",
    shortTitle: "Recht",
    summary: "BGB Allgemeiner Teil, Schuldrecht und Gutachtenstil.",
    accent: "#475569",
    difficulty: "Anfänger",
    time: "45h",
    prereq: "Keine",
    href: "./recht/index.html",
    status: "live",
    type: "text_doctrinal",
    releaseTier: "core",
    examPrepNote: "A−: Mini-Gutachten, Norm-Zitate, Fall-Drills + Konzept-Check."
  },
  {
    slug: "internationale-wirtschaftsbeziehungen",
    title: "Internationale Wirtschaftsbeziehungen",
    shortTitle: "IWB",
    summary: "Handelstheorie, Politik und internationale Makro.",
    accent: "#0891b2",
    difficulty: "Fortgeschritten",
    time: "40h",
    prereq: "Mikro I, Makro I",
    href: "./internationale-wirtschaftsbeziehungen/index.html",
    status: "live",
    type: "quantitative",
    releaseTier: "core",
    examPrepNote: "A−: Ricardo, H-O, Zölle, Trilemma — Modellwahl + Konzept-Check."
  }
];

export function isLiveModuleVisible(module) {
  return module?.status === "live";
}

export const PUBLIC_MODULES = MODULES.filter(isLiveModuleVisible);

export function getReleaseTierLabel(tier) {
  return RELEASE_TIER_LABELS[tier] || tier || "";
}

export function getReleaseTierTooltip(tier) {
  return RELEASE_TIER_TOOLTIPS[tier] || "";
}

/** Live modules in exam-ready core order */
export function getExamReadyCoreModules() {
  return EXAM_READY_CORE_SLUGS.map((slug) => MODULES.find((m) => m.slug === slug)).filter(
    (m) => m && isLiveModuleVisible(m)
  );
}

/** @deprecated Alias for getExamReadyCoreModules */
export function getTrustedCoreModules() {
  return getExamReadyCoreModules();
}

/** Live modules not in exam-ready core shelf */
export function getNonCorePublicModules() {
  const core = new Set(EXAM_READY_CORE_SLUGS);
  return MODULES.filter((m) => isLiveModuleVisible(m) && !core.has(m.slug));
}

/** @deprecated Alias for getNonCorePublicModules */
export function getNonTrustedPublicModules() {
  return getNonCorePublicModules();
}

/**
 * URL path prefixes (repo root) whose `index.html` boots `assets/js/generated-portal/main.js`.
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
