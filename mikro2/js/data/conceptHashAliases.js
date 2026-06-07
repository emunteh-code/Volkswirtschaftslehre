/**
 * Short hash slugs → canonical concept ids (cold-load deep links).
 * @see docs/audits/2026-05-31-first-time-student-experience.md
 */
export const CONCEPT_HASH_ALIASES = Object.freeze({
  oligopol: "oligopol_cournot_bertrand",
  cournot: "oligopol_cournot_bertrand",
  bertrand: "oligopol_cournot_bertrand",
  oligopol_cournot: "oligopol_cournot_bertrand",
  stackelberg: "oligopol_stackelberg",
  monopol: "monopol_preissetzung",
  preisdiskriminierung: "preisdiskriminierung",
  spieltheorie: "spieltheorie_statisch",
  nash: "spieltheorie_statisch",
  unsicherheit: "unsicherheit_versicherung",
  versicherung: "unsicherheit_versicherung",
  intertemporal: "intertemporaler_konsum",
  walras: "gleichgewicht_walras",
  edgeworth: "gleichgewicht_tausch",
  adverse: "information_adverse",
  moralhazard: "information_moralhazard"
});
