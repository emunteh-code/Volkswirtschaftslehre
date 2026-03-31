const sourceRoot = "/Users/enowmunteh/Documents/Uni Göttingen VWL/Module";

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
    status: "live",
    type: "quantitative"
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
    shortTitle: "Accounting",
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

export const PUBLIC_MODULES = MODULES.filter((m) => m.status === "live");

export const FILTERS = [
  { id: "quantitative", label: "Analytisch" },
  { id: "quantitative_coding", label: "Mit R-Lab" },
  { id: "text_doctrinal", label: "Textlastig" },
  { id: "mixed", label: "Mixed" }
];

export function getModuleBySlug(slug) {
  return MODULES.find((module) => module.slug === slug) || null;
}
