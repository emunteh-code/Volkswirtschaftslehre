/**
 * Canonical "recipe book" structure for the Theorie tab (all modules).
 * Content is classified by subsection h3 keywords; nothing is dropped.
 */

import { renderConceptAnchor } from "../pedagogy/learnerPedagogy.js";
import { sanitizeLearnerPlainText } from "../utils/studentFacingText.js";

export const THEORY_SECTION_ORDER = [
  {
    id: "orientierung",
    heading: "Orientierung",
    step: 1,
    patterns: [
      /\borientierung\b/i,
      /\bworum es\b/i,
      /\bwarum\b/i,
      /\beinführung\b/i,
      /\bdenkrahmen\b/i,
      /\bpropädeutik/i,
      /\büberblick\b/i,
      /\bgrundaufbau\b/i,
      /\bprivatrecht innerhalb\b/i,
      /\bvon der gemeinsamen\b/i,
      /\bvoraussetzung/i,
      /\bausgangspunkt\b/i,
      /\bkontext\b/i,
      /\bmodellrahmen\b/i
    ]
  },
  {
    id: "kernidee",
    heading: "Kernidee",
    step: 2,
    patterns: [
      /\bkernidee\b/i,
      /\bintuition\b/i,
      /\bgrundidee\b/i,
      /\bblickwinkel\b/i,
      /\bsektoren und\b/i,
      /\bkurze, mittlere\b/i,
      /\bmodellidee\b/i,
      /\bhypothesenlogik\b/i,
      /\btestwahl\b/i,
      /\banspruchsdenken\b/i,
      /\brecht als verbindliche\b/i,
      /\bzusammenfassung\b/i,
      /\bkern(aussage|logik)\b/i,
      /\bmerkschema\b/i,
      /\bdenkfigur\b/i
    ]
  },
  {
    id: "definitionen",
    heading: "Definitionen",
    step: 3,
    patterns: [
      /\bformale definition/i,
      /^definition\b/i,
      /\bdefinition\b/i,
      /\bgrundbegriff/i,
      /\baxiom/i,
      /\bbinäre relation/i,
      /\bwillenserklärung\b/i,
      /\bzufallsvariable\b/i,
      /\bpunktschätzer\b/i,
      /\bergebnisraum\b/i,
      /\bmerkpunkte\b/i,
      /\bbegriff(e|sklärung)\b/i,
      /\bgrundlagen\b/i
    ]
  },
  {
    id: "formale",
    heading: "Formale Darstellung",
    step: 4,
    patterns: [
      /\bformale darstellung\b/i,
      /\bformale ableitung/i,
      /\bherleitung\b/i,
      /\bnotation\b/i,
      /\bgleichung\b/i,
      /\bfo[cz]\b/i,
      /\bteststatistik\b/i,
      /\bkovarianz\b/i,
      /\bols\b/i,
      /\b$f-?test\b/i,
      /\baxiome von kolmogorov\b/i,
      /\bnormalgleichung/i,
      /\bzielfunktion\b/i,
      /\bbeweis\b/i,
      /\brechnung\b/i
    ],
    prefersMath: true
  },
  {
    id: "mechanismus",
    heading: "Mechanismus & Zusammenhänge",
    step: 5,
    patterns: [
      /\bmechanismus\b/i,
      /\bzusammenhang\b/i,
      /\bkomparative statik\b/i,
      /\bgrafisch/i,
      /\beigenschaft/i,
      /\bsteigung\b/i,
      /\bgleichgewicht\b/i,
      /\bverschiebung\b/i,
      /\binterpretation\b/i,
      /\bverfahren\b/i,
      /\bnachfrage\b/i,
      /\bmultiplikator\b/i,
      /\bphillips\b/i,
      /\bregression\b/i,
      /\bsubsumtion\b/i,
      /\btrennungsprinzip\b/i,
      /\bangebot\b/i,
      /\bkonsens\b/i,
      /\banfechtung\b/i,
      /\bbeispiel\b/i,
      /\bgrafisch/i,
      /\bvisualisierung\b/i,
      /\bablauf\b/i,
      /\bmechanik\b/i,
      /\bökonomische intuition\b/i
    ]
  },
  {
    id: "anwendung",
    heading: "Anwendung & Klausurtransfer",
    step: 6,
    patterns: [
      /\bklausur/i,
      /\bprüfung/i,
      /\bprüfungsstandard\b/i,
      /\banwendung\b/i,
      /\btransfer\b/i,
      /\bgutachten\b/i,
      /\bfallbearbeitung\b/i,
      /\bmini-gutachten\b/i,
      /\bwarum das klausur/i,
      /\bwarum die systematik\b/i,
      /\bentscheidungsregel\b/i,
      /\btestwahl\b/i,
      /\bin der klausur\b/i,
      /\bklausurroutine\b/i,
      /\bpolitikfolgerung\b/i,
      /\brechenschema\b/i
    ]
  },
  {
    id: "fehler",
    heading: "Häufige Fehler",
    step: 7,
    patterns: [
      /\bfehleranalyse\b/i,
      /\bhäufige fehler\b/i,
      /\btypische fehler\b/i,
      /\bprüfungsfalle\b/i,
      /\bklassiker\b/i,
      /\bstandardfehler\b/i,
      /\bstandardverwechslung\b/i,
      /\borientierungsfehler\b/i,
      /\banfechtungsfalle\b/i
    ]
  },
  {
    id: "vor_aufgaben",
    heading: "Vor den Aufgaben",
    step: 8,
    patterns: [
      /\bvor den aufgaben\b/i,
      /\bcheckliste\b/i,
      /\bbeherrschen\b/i,
      /\blernziele\b/i
    ]
  }
];

const SECTION_BY_ID = Object.fromEntries(THEORY_SECTION_ORDER.map((s) => [s.id, s]));

export function theoryToHtml(theorie) {
  if (typeof theorie === "string") return theorie;
  if (Array.isArray(theorie)) return theorie.join("");
  return "";
}

/** @returns {{ heading: string, inner: string }[]} */
export function parseLegacyTheorySections(html) {
  const raw = String(html ?? "").trim();
  if (!raw) return [];

  const sections = [];
  const re = /<div\s+class=["']section-block["']>/gi;
  let match;
  const starts = [];
  while ((match = re.exec(raw))) {
    starts.push(match.index);
  }

  if (!starts.length) {
    if (raw) sections.push({ heading: "", inner: raw });
    return sections;
  }

  for (let i = 0; i < starts.length; i++) {
    const open = starts[i];
    const tagEnd = raw.indexOf(">", open) + 1;
    let depth = 1;
    let pos = tagEnd;
    while (pos < raw.length && depth > 0) {
      const nextOpen = raw.indexOf("<div", pos);
      const nextClose = raw.indexOf("</div>", pos);
      if (nextClose < 0) break;
      if (nextOpen >= 0 && nextOpen < nextClose) {
        depth++;
        pos = nextOpen + 4;
      } else {
        depth--;
        pos = nextClose + 6;
      }
    }
    const blockInner = raw.slice(tagEnd, pos - 6);
    const headingMatch = blockInner.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const heading = headingMatch
      ? headingMatch[1].replace(/<[^>]+>/g, "").trim()
      : "";
    let inner = blockInner;
    if (headingMatch) {
      inner = blockInner.replace(headingMatch[0], "").trim();
    }
    sections.push({ heading, inner });
  }

  return sections;
}

function sectionHasMath(html) {
  return /class=["']math-block["']|<mjx-container|\\frac\{/.test(html);
}

function sectionHasWarnOnly(inner) {
  const stripped = inner.replace(/<div class="warn-box"[\s\S]*?<\/div>/gi, "").trim();
  return !stripped.length && /<div class="warn-box"/i.test(inner);
}

/**
 * @param {string} heading
 * @param {string} innerHtml
 * @param {number} index
 * @param {number} total
 */
export function classifyTheorySection(heading, innerHtml, index = 0, total = 1) {
  const h = String(heading || "").trim();
  const lower = h.toLowerCase();
  const hasMath = sectionHasMath(innerHtml);
  const warnOnly = sectionHasWarnOnly(innerHtml);

  if (warnOnly || /\bfehler/i.test(lower)) {
    return "fehler";
  }

  for (const spec of THEORY_SECTION_ORDER) {
    if (spec.prefersMath && !hasMath) continue;
    if (spec.patterns.some((re) => re.test(h))) {
      if (spec.id === "definitionen" && /\bherleitung\b/i.test(lower)) {
        return hasMath ? "formale" : "mechanismus";
      }
      return spec.id;
    }
  }

  if (hasMath && !/\bfehler/i.test(lower)) {
    if (/\bdefinition\b/i.test(lower) || /\bformale definition/i.test(lower)) {
      return "definitionen";
    }
    return "formale";
  }

  if (index === 0 && total > 2 && !/\bdefinition\b/i.test(lower)) {
    return "kernidee";
  }

  return "mechanismus";
}

/** @param {string} innerHtml */
export function theoryBodyHasContent(innerHtml) {
  const cleaned = stripPlaceholderMarkup(innerHtml);
  const text = stripTags(cleaned);
  return text.length >= 12;
}

/** @param {string} html */
export function stripPlaceholderMarkup(html) {
  return String(html ?? "")
    .replace(/<p class="theory-recipe-placeholder">[\s\S]*?<\/p>/gi, "")
    .trim();
}

/** @param {string} html */
export function stripRecipeStepBadges(html) {
  return String(html ?? "").replace(/<span class="theory-recipe-step"[^>]*>[\s\S]*?<\/span>\s*/gi, "");
}

/** @param {string} value */
function theoryTextKey(value) {
  return stripTags(value).toLowerCase().replace(/\s+/g, " ").trim();
}

/** @param {string} a @param {string} b */
export function isDuplicateTheoryText(a, b) {
  const ka = theoryTextKey(a);
  const kb = theoryTextKey(b);
  if (!ka || !kb) return false;
  if (ka === kb) return true;
  const shorter = ka.length < kb.length ? ka : kb;
  const longer = ka.length < kb.length ? kb : ka;
  return shorter.length >= 48 && longer.includes(shorter);
}

/** @param {string} innerHtml */
export function normalizeSubsectionMarkup(innerHtml) {
  return String(innerHtml ?? "").replace(/<h3(\s[^>]*)?>([\s\S]*?)<\/h3>/gi, (match, _attrs, content) => {
    if (/theory-recipe-heading/i.test(match)) return match;
    return `<h4 class="theory-subsection-title">${content}</h4>`;
  });
}

const VAGUE_READINESS_RE = /^(?:Kernrelationen aus dem Formeln-Tab aktivieren|Begriffe aus Formeln-Tab|Lern-Checkliste)/i;

/** @param {string} innerHtml */
function isVagueReadinessContent(innerHtml) {
  const text = sanitizeLearnerPlainText(innerHtml);
  return VAGUE_READINESS_RE.test(text) && !/ich\s+(kann|erkenne|kenne|weiß)/i.test(text);
}

/** @param {{ chapterTitle?: string, conceptId?: string }} meta */
function getConceptReadinessFallback(meta = {}) {
  const title = String(meta.chapterTitle || "").toLowerCase();
  const slug = String(meta.conceptId || "").toLowerCase();
  const key = slug || title;

  if (/deskriptiv/.test(key)) {
    return [
      "Ich kann Lage (Mittelwert/Median) und Streuung (Varianz, Standardabweichung) aus Rohdaten berechnen.",
      "Ich erkenne, wann Ausreißer oder Schiefe den Median dem Mittelwert vorziehen lassen.",
      "Ich kenne die Bessel-korrigierte Stichprobenvarianz mit Nenner (n−1).",
      "Ich weiß, Lage, Streuung und Formhinweis in einer Klausurantwort zu verbinden."
    ];
  }
  if (/anova|varianzanalyse/.test(key)) {
    return [
      "Ich kann F-Test und Gruppenmittel aus dem ANOVA-Output gemeinsam lesen.",
      "Ich erkenne Aufgaben mit mehreren Gruppen und einer metrischen Zielgröße als ANOVA-Kandidaten.",
      "Ich kenne den Unterschied zwischen globalem F-Test und paarweisen Nachprüfungen.",
      "Ich weiß, Post-hoc-Ergebnisse nur bei abgelehntem H₀ fachlich zu interpretieren."
    ];
  }
  return [
    "Ich kann die Kerngrößen benennen, ohne ins Formelblatt zu schauen.",
    "Ich erkenne den Aufgabentyp an Stichworten und Datenlayout.",
    "Ich kenne den ersten Rechenschritt bei einer Standardaufgabe.",
    "Ich weiß, welche typischen Fehler ich vor der Rechnung prüfen muss."
  ];
}

/** @param {string[]} items */
function buildReadinessChecklistHtml(items) {
  const lis = items.map((line) => `<li class="readiness-checklist__item">${escapeHtml(line)}</li>`).join("");
  return `<p class="readiness-checklist__intro">Prüfe kurz, ob du bereit bist:</p>
<ul class="readiness-checklist">${lis}</ul>`;
}

/**
 * Convert legacy definition bullet lists to glossary rows (no bullets, no blockquote markers).
 * @param {string} innerHtml
 * @param {object} [entry]
 */
export function convertDefinitionListsToGlossary(innerHtml, entry = {}) {
  const formulaByLabel = new Map();
  (entry.formeln || []).forEach((f, index) => {
    const label = sanitizeLearnerPlainText(f?.label || "");
    if (label) formulaByLabel.set(label.toLowerCase(), index);
  });

  let html = String(innerHtml ?? "");
  html = html.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, listInner) => {
    const items = [...listInner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
    if (!items.length) return match;
    const glossaryItems = items.filter((item) => /<strong/i.test(item[1]));
    if (!glossaryItems.length) return match;

    const rows = glossaryItems
      .map((item) => {
        const liContent = item[1];
        const termMatch = liContent.match(/<strong[^>]*>([\s\S]*?)<\/strong>/i);
        if (!termMatch) return "";
        const term = sanitizeLearnerPlainText(termMatch[1]);
        if (!term) return "";
        let desc = sanitizeLearnerPlainText(
          liContent.replace(termMatch[0], "").replace(/^[—\-–:\s>]+/, "")
        );
        const formulaIndex = formulaByLabel.get(term.toLowerCase());
        const linkedFormula =
          formulaIndex !== undefined ? (entry.formeln || [])[formulaIndex] : null;
        if (!desc || /^definition$/i.test(desc) || desc === "—") {
          desc = linkedFormula?.desc
            ? sanitizeLearnerPlainText(linkedFormula.desc)
            : `${term}: Kerngröße — Notation und Anwendung im Formeln-Tab.`;
        }
        const termEl =
          formulaIndex !== undefined
            ? `<button type="button" class="theory-glossary-term" onclick="window.__scrollToFormulaCard?.(${formulaIndex})" aria-label="Zur Formel ${escapeHtml(term)} springen">${escapeHtml(term)}</button>`
            : `<span class="theory-glossary-term theory-glossary-term--plain">${escapeHtml(term)}</span>`;
        return `<div class="theory-glossary-row">${termEl}<p class="theory-glossary-def">${escapeHtml(desc)}</p></div>`;
      })
      .filter(Boolean)
      .join("");

    if (!rows) return match;
    return `<div class="theory-glossary-rows">${rows}</div>`;
  });
  return html.replace(/^>\s+/gm, "");
}

/** @param {{ id: string, heading: string, step: number }} spec @param {string} bodyHtml @param {object} [entry] */
export function buildRecipeSectionHtml(spec, bodyHtml, entry = null) {
  let body = normalizeSubsectionMarkup(stripPlaceholderMarkup(bodyHtml)).trim();
  if (spec.id === "definitionen") {
    body = convertDefinitionListsToGlossary(body, entry || {});
  }
  if (!theoryBodyHasContent(body)) return "";
  return `<section class="theory-recipe-section theory-recipe-card theory-recipe-section--${spec.id}" data-theory-step="${spec.step}" aria-labelledby="theory-${spec.id}-h">
<h3 class="theory-recipe-heading" id="theory-${spec.id}-h">${spec.heading}</h3>
<div class="theory-recipe-body">
${body}
</div>
</section>`;
}

/** @returns {{ bucket: string, heading: string, inner: string }[]} */
export function parseRecipeTheorySections(html) {
  const raw = String(html ?? "");
  const items = [];
  const re = /<section\s+[^>]*theory-recipe-section--([a-z_]+)[^>]*>([\s\S]*?)<\/section>/gi;
  let match;
  while ((match = re.exec(raw))) {
    const id = match[1];
    const block = match[2];
    const bodyMatch = block.match(
      /<div\s+class=["']theory-recipe-body["'][^>]*>([\s\S]*)<\/div>\s*$/i
    );
    const inner = (bodyMatch ? bodyMatch[1] : block).trim();
    const subs = parseLegacyTheorySections(inner);
    if (subs.length) {
      for (const sub of subs) {
        items.push({ bucket: id, heading: sub.heading, inner: sub.inner });
      }
    } else if (inner) {
      items.push({ bucket: id, heading: "", inner });
    }
  }
  return items;
}

/** @returns {{ bucket: string, heading: string, inner: string }[]} */
export function flattenTheoryToSections(html) {
  const raw = String(html ?? "").trim();
  if (!raw) return [];

  if (/theory-recipe-section/.test(raw)) {
    const fromRecipe = parseRecipeTheorySections(raw);
    const withoutSections = raw.replace(/<section[\s\S]*?<\/section>/gi, "");
    const legacy = parseLegacyTheorySections(withoutSections).map((sec, i, arr) => ({
      ...sec,
      bucket: classifyTheorySection(sec.heading, sec.inner, i, arr.length)
    }));
    return [...fromRecipe, ...legacy];
  }

  const parsed = parseLegacyTheorySections(raw);
  return parsed.map((sec, i) => ({
    ...sec,
    bucket: classifyTheorySection(sec.heading, sec.inner, i, parsed.length)
  }));
}

/** @param {{ bucket: string, heading: string, inner: string }[]} flatSections */
export function groupTheorySections(flatSections) {
  const grouped = Object.fromEntries(THEORY_SECTION_ORDER.map((s) => [s.id, []]));
  for (const sec of flatSections) {
    const bucket = sec.bucket || classifyTheorySection(sec.heading, sec.inner, 0, 1);
    if (grouped[bucket]) grouped[bucket].push(sec);
  }
  return grouped;
}

/** @param {Record<string, { heading: string, inner: string }[]>} grouped */
function renderGroupedSections(grouped) {
  const parts = [];
  for (const spec of THEORY_SECTION_ORDER) {
    const items = grouped[spec.id] || [];
    if (!items.length) continue;
    const bodyParts = items.map((item) => {
      if (!item.heading) return normalizeSubsectionMarkup(item.inner);
      return `<div class="section-block">
<h4 class="theory-subsection-title">${escapeHtml(item.heading)}</h4>
${normalizeSubsectionMarkup(item.inner)}
</div>`;
    });
    const section = buildRecipeSectionHtml(spec, bodyParts.join("\n"));
    if (section) parts.push(section);
  }
  return parts.join("\n");
}

/**
 * Normalize raw theory HTML into recipe sections (re-wraps existing recipe markup).
 * @param {string} html
 * @returns {string}
 */
export function normalizeTheoryHtml(html) {
  const raw = stripRecipeStepBadges(String(html ?? "")).trim();
  if (!raw) return raw;
  const flat = flattenTheoryToSections(raw);
  if (!flat.length) return raw;
  return renderGroupedSections(groupTheorySections(flat));
}

/**
 * Pull non-destructive fragments from chapter entry fields into recipe buckets.
 * Motivation, objectives, formeln, and intuition are rendered elsewhere (header / Formeln tab / runtime fuse).
 * @param {object} entry
 * @param {{ headerMotivationShown?: boolean, headerObjectivesShown?: boolean }} [meta]
 */
export function collectEntryTheoryFragments(entry = {}, meta = {}) {
  const frags = {};

  if (Array.isArray(entry.cards) && entry.cards.length) {
    const cardsHtml = `<div class="info-grid theory-entry-cards">
${entry.cards
  .map(
    (card) =>
      `<div class="info-card info-card-concept-title"><div class="label">${escapeHtml(card.title)}</div><div class="value">${escapeHtml(card.value)}</div>${card.note ? `<p>${escapeHtml(card.note)}</p>` : ""}</div>`
  )
  .join("\n")}
</div>`;
    frags.definitionen = [frags.definitionen, cardsHtml].filter(Boolean).join("\n");
  }

  void meta;
  return frags;
}

/** @param {string} html */
export function countTheoryRecipeCards(html) {
  return [...String(html ?? "").matchAll(/theory-recipe-section--([a-z_]+)/g)].length;
}

const MODULE_EXAM_PATH = {
  mikro1: "Modell → FOC/Gleichgewicht → Comparative Statics → Klausurfehler benennen.",
  mikro2: "Mechanismus → Gleichgewicht/Effizienz → Wohlfahrts- oder Politikfolge; Markt vs. Sozialoptimum.",
  makro1: "Regime/Modell → Kanal (Güter/Geld/Arbeit) → Wirkung auf Y, i oder Erwartungen.",
  makro2: "Regime → Kanal (Güter/Geld/Außen) → Wirkung auf Y, i oder ε; Wechselkursregime nicht weglassen.",
  statistik: "Hypothesen → Teststatistik → Verteilung/kritischer Wert → Entscheidung + p-Wert-Interpretation.",
  oekonometrie: "Annahmen → Schätzer/Identifikation → Inferenz (SE, t/F) → ökonomische Lesart.",
  mathematik: "Definition/Objekt → Rechenschritt → ökonomische oder statistische Interpretation.",
  finanzwirtschaft: "Cashflow/Zeitpunkt → Bewertungsrelation → Entscheidungsregel (NPV/IRR/WACC).",
  jahresabschluss: "Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung; GoB-Prinzip explizit.",
  recht: "Obersatz → Merkmalskette/Tatbestand → Subsumtion → Ergebnis.",
  "internationale-wirtschaftsbeziehungen":
    "Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge → Regime/Instrument benennen."
};

/** @param {Record<string, { heading: string, inner: string }[]>} grouped */
function bucketBody(grouped, id) {
  return (grouped[id] || []).map((i) => i.inner).join("\n");
}

/** @param {string} innerHtml */
function extractWarnBoxes(innerHtml) {
  return [...String(innerHtml ?? "").matchAll(/<div class="warn-box"[^>]*>([\s\S]*?)<\/div>/gi)].map(
    (m) => m[0]
  );
}

/**
 * Fill missing recipe buckets from entry metadata (platform-added where noted).
 * @param {Record<string, { heading: string, inner: string }[]>} grouped
 * @param {object} entry
 * @param {{ chapterTitle?: string, moduleSlug?: string }} meta
 */
export function synthesizeRecipeGaps(grouped, entry = {}, meta = {}) {
  const title = meta.chapterTitle || "Konzept";
  const slug = meta.moduleSlug || "";
  const examPath = MODULE_EXAM_PATH[slug] || MODULE_EXAM_PATH.mikro1;
  const motivation = hasMeaningfulIntuitionText(entry.motivation) ? String(entry.motivation).trim() : "";

  if (!theoryBodyHasContent(bucketBody(grouped, "orientierung"))) {
    grouped.orientierung = [
      {
        heading: "",
        inner: `<p><strong>${escapeHtml(title)}</strong> — Block im Modul einordnen: Voraussetzungen aktivieren, dann Formeln-Tab und Grafik als Brücke zur Aufgabenlogik nutzen.</p>`
      }
    ];
  }

  if (!theoryBodyHasContent(bucketBody(grouped, "kernidee")) && motivation) {
    grouped.kernidee = [{ heading: "", inner: `<p>${motivation}</p>` }];
  }

  if (!theoryBodyHasContent(bucketBody(grouped, "mechanismus"))) {
    grouped.mechanismus = [
      {
        heading: "Ablauf",
        inner: `<p><strong>Schrittfolge:</strong> (1) Annahmen und Notation aus der VL festlegen, (2) formale Relation aus dem Formeln-Tab aufschreiben, (3) algebraisch/ökonomisch umformen oder lösen, (4) Ergebnis fachlich deuten — nicht nur die Zahl nennen.</p>
<p class="theory-klausur-highlight"><strong>In der Klausur:</strong> ${escapeHtml(examPath)}</p>`
      }
    ];
  }

  if (!theoryBodyHasContent(bucketBody(grouped, "definitionen"))) {
    let defInner = "";
    if (Array.isArray(entry.formeln) && entry.formeln.length) {
      const rows = entry.formeln
        .slice(0, 6)
        .map((f, index) => {
          const label = f?.label ? escapeHtml(sanitizeLearnerPlainText(f.label)) : "";
          const desc = f?.desc ? escapeHtml(sanitizeLearnerPlainText(f.desc)) : "";
          if (!label) return "";
          return `<div class="theory-glossary-row">
<button type="button" class="theory-glossary-term" onclick="window.__scrollToFormulaCard?.(${index})" aria-label="Zur Formel ${label} springen">${label}</button>
<p class="theory-glossary-def">${desc || "Siehe Formeln-Tab für Notation und Anwendung."}</p>
</div>`;
        })
        .filter(Boolean)
        .join("");
      if (rows) {
        defInner = `<p class="theory-glossary-sub">Kerngrößen für diesen Aufgabentyp</p>
<div class="theory-glossary-rows">${rows}</div>
<p class="theory-glossary-footer">Notation mit offiziellen Vorlesungsunterlagen abgleichen.</p>`;
      }
    }
    if (!defInner && Array.isArray(entry.cards) && entry.cards.length) {
      const rows = entry.cards
        .slice(0, 6)
        .map((c, index) => {
          const term = c?.title ? escapeHtml(stripTags(c.title)) : "";
          const desc = c?.value ? escapeHtml(stripTags(c.value)) : "";
          if (!term) return "";
          return `<div class="theory-glossary-row">
<button type="button" class="theory-glossary-term" onclick="window.__scrollToFormulaCard?.(${index})" aria-label="Zur Formel ${term} springen">${term}</button>
<p class="theory-glossary-def">${desc || "Siehe Formeln-Tab für Notation und Anwendung."}</p>
</div>`;
        })
        .filter(Boolean)
        .join("");
      if (rows) {
        defInner = `<p class="theory-glossary-sub">Kerngrößen für diesen Aufgabentyp</p>
<div class="theory-glossary-rows">${rows}</div>
<p class="theory-glossary-footer">Notation mit offiziellen Vorlesungsunterlagen abgleichen.</p>`;
      }
    }
    if (defInner) {
      grouped.definitionen = [{ heading: "Definitionen", inner: defInner }];
    }
  }

  const warnFromBody = THEORY_SECTION_ORDER.filter((s) => s.id !== "fehler").flatMap((s) =>
    extractWarnBoxes(bucketBody(grouped, s.id))
  );
  if (!theoryBodyHasContent(bucketBody(grouped, "fehler")) && warnFromBody.length) {
    grouped.fehler = [{ heading: "Typische Prüfungsfallen", inner: warnFromBody.join("\n") }];
  } else if (!theoryBodyHasContent(bucketBody(grouped, "fehler"))) {
    grouped.fehler = [
      {
        heading: "Standardfehler",
        inner: `<div class="warn-box" data-warning-placement="rail"><strong>Annahmen vergessen:</strong> Verteilung, Regime, Rechtsfolge oder Marktform vor der Rechnung explizit benennen.</div>
<div class="warn-box" data-warning-placement="rail"><strong>Nur Endergebnis:</strong> Zwischenschritte und ökonomische Deutung sind Klausurpunkte — nicht nur die Zahl am Ende.</div>`
      }
    ];
  }

  if (!theoryBodyHasContent(bucketBody(grouped, "anwendung"))) {
    grouped.anwendung = [
      {
        heading: "Klausurtransfer",
        inner: `<p><strong>Klausurpfad:</strong> ${escapeHtml(examPath)}</p>`
      }
    ];
  }

  if (grouped.vor_aufgaben?.length) {
    grouped.vor_aufgaben = grouped.vor_aufgaben.filter((item) => !isVagueReadinessContent(item.inner));
  }

  if (!theoryBodyHasContent(bucketBody(grouped, "vor_aufgaben")) && Array.isArray(entry.objectives) && entry.objectives.length) {
    const prefixes = ["Ich kann", "Ich erkenne", "Ich kenne", "Ich weiß"];
    let lines = entry.objectives.slice(0, 6).map((o, i) => {
      const text = stripTags(String(o));
      const prefix = prefixes[i % prefixes.length];
      return /^(ich\s+(kann|erkenne|kenne|weiß))/i.test(text)
        ? text
        : `${prefix} ${text.charAt(0).toLowerCase()}${text.slice(1)}`;
    });
    const fallback = getConceptReadinessFallback(meta);
    while (lines.length < 4 && fallback.length) {
      const next = fallback[lines.length % fallback.length];
      if (!lines.includes(next)) lines.push(next);
      else break;
    }
    if (lines.length >= 4) {
      const items = lines.slice(0, 5).map((line) => `<li class="readiness-checklist__item">${escapeHtml(line)}</li>`).join("");
      grouped.vor_aufgaben = [
        {
          heading: "Vor den Aufgaben",
          inner: `<p class="readiness-checklist__intro">Prüfe kurz, ob du bereit bist:</p>
<ul class="readiness-checklist">${items}</ul>`
        }
      ];
    }
  } else if (!theoryBodyHasContent(bucketBody(grouped, "vor_aufgaben"))) {
    const fallback = getConceptReadinessFallback(meta);
    if (fallback.length >= 4) {
      grouped.vor_aufgaben = [
        {
          heading: "Vor den Aufgaben",
          inner: buildReadinessChecklistHtml(fallback)
        }
      ];
    }
  }
}

/**
 * Emit recipe cards with substantive body content; synthesize honest gaps from entry metadata.
 * @param {string} html
 * @param {object} [entry]
 * @param {{ chapterTitle?: string, headerMotivationShown?: boolean, headerObjectivesShown?: boolean, moduleSlug?: string }} [meta]
 */
export function completeTheoryRecipe(html, entry = {}, meta = {}) {
  const grouped = groupTheorySections(flattenTheoryToSections(html));
  const frags = collectEntryTheoryFragments(entry, meta);
  const headerMotivation =
    meta.headerMotivationShown !== false && hasMeaningfulIntuitionText(entry.motivation)
      ? stripTags(entry.motivation)
      : "";
  const headerObjectives =
    meta.headerObjectivesShown !== false && Array.isArray(entry.objectives)
      ? entry.objectives.map((o) => stripTags(String(o))).filter(Boolean).join(" ")
      : "";

  for (const spec of THEORY_SECTION_ORDER) {
    const existing = (grouped[spec.id] || []).map((i) => i.inner).join("\n");
    if (!theoryBodyHasContent(existing) && frags[spec.id]) {
      grouped[spec.id] = [{ heading: "", inner: frags[spec.id] }];
    }
  }

  synthesizeRecipeGaps(grouped, entry, meta);

  const parts = [];
  const emittedBodies = [];

  for (const spec of THEORY_SECTION_ORDER) {
    const items = grouped[spec.id] || [];
    const bodyParts = items.map((item) => {
      if (!item.heading) return normalizeSubsectionMarkup(item.inner);
      return `<div class="section-block">
<h4 class="theory-subsection-title">${escapeHtml(item.heading)}</h4>
${normalizeSubsectionMarkup(item.inner)}
</div>`;
    });
    const body = stripPlaceholderMarkup(bodyParts.join("\n")).trim();
    if (!theoryBodyHasContent(body)) continue;
    if (spec.id === "vor_aufgaben") {
      const checklistCount = (body.match(/readiness-checklist__item/g) || []).length;
      if (checklistCount < 4) continue;
    }
    if (spec.id === "orientierung" && headerMotivation && isDuplicateTheoryText(body, headerMotivation)) continue;
    if (headerObjectives && spec.id === "vor_aufgaben") continue;
    if (
      spec.id !== "definitionen" &&
      emittedBodies.some((prev) => isDuplicateTheoryText(body, prev))
    ) {
      continue;
    }

    const section = buildRecipeSectionHtml(spec, body, entry);
    if (!section) continue;
    emittedBodies.push(body);
    parts.push(section);
  }
  return parts.join("\n");
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Renderer pass: ensure recipe chrome + optional objectives checklist.
 * @param {string} html
 * @param {{ objectives?: string[] }} [entry]
 */
export function applyTheoryRecipeChrome(html, entry = {}, meta = {}) {
  const normalized = normalizeTheoryHtml(html);
  return completeTheoryRecipe(normalized, entry, {
    headerMotivationShown: true,
    headerObjectivesShown: true,
    ...meta
  });
}

function stripTags(text) {
  return sanitizeLearnerPlainText(text);
}

function hasMeaningfulIntuitionText(value) {
  const normalized = stripTags(value);
  if (!normalized) return false;
  const lowered = normalized.toLowerCase();
  return !["undefined", "null", "intuitions-karte folgt in kuerze.", "intuitions-karte folgt in kürze."].includes(
    lowered
  );
}

/** @returns {{ core: string, analogy: string, bridge: string, exam: { if: string, then: string }[], embed: string }|null} */
export function normalizeIntuitionRecord(data) {
  if (!data) return null;

  const mentalModel = Array.isArray(data.mentalModel)
    ? data.mentalModel.filter((entry) => hasMeaningfulIntuitionText(entry?.body))
    : [];

  const core = hasMeaningfulIntuitionText(data.core)
    ? stripTags(String(data.core))
    : stripTags(String(mentalModel[0]?.body || ""));
  const analogy = hasMeaningfulIntuitionText(data.analogy)
    ? stripTags(String(data.analogy))
    : stripTags(String(mentalModel[1]?.body || ""));
  const bridge = hasMeaningfulIntuitionText(data.bridge) ? stripTags(String(data.bridge)) : "";
  const exam = Array.isArray(data.exam)
    ? data.exam.filter((entry) => hasMeaningfulIntuitionText(entry?.if) && hasMeaningfulIntuitionText(entry?.then))
    : [];
  const embed = hasMeaningfulIntuitionText(data.embed) ? String(data.embed) : "";

  if (!core && !analogy && !bridge && !exam.length && !embed) return null;

  return { core, analogy, bridge, exam, embed };
}

export function hasIntuitionContent(data) {
  return Boolean(normalizeIntuitionRecord(data));
}

/**
 * @param {ReturnType<typeof normalizeIntuitionRecord>} intuition
 * @param {{ formalAnchorHtml?: string, recognitionItems?: string[] }} [opts]
 */
export function buildIntuitionFusionFragments(intuition, opts = {}) {
  const empty = { orientierung: "", kernidee: "", anwendung: "" };
  if (!intuition) return empty;

  const orientierung = intuition.bridge
    ? `<div class="theory-intuition-embed theory-intuition-bridge">
<p class="theory-intuition-bridge-kicker">So erkennst du das in Aufgaben</p>
<p class="theory-intuition-bridge-copy">${escapeHtml(intuition.bridge)}</p>
</div>`
    : "";

  const kernParts = [];
  const conceptAnchor = renderConceptAnchor(intuition, opts.entry || {}, opts.formalAnchorHtml || "");
  if (conceptAnchor) {
    kernParts.push(conceptAnchor);
  } else {
    if (intuition.core) {
      const coreText = String(intuition.core).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      if (coreText) kernParts.push(`<p class="theory-intuition-lead">${escapeHtml(coreText)}</p>`);
    }
    if (intuition.analogy) {
      kernParts.push(`<div class="theory-intuition-embed">
<h4 class="theory-subsection-title">Denkbild</h4>
<p>${escapeHtml(intuition.analogy)}</p>
</div>`);
    }
    if (opts.formalAnchorHtml) {
      kernParts.push(`<div class="theory-intuition-embed theory-intuition-formal-anchor">${opts.formalAnchorHtml}</div>`);
    }
  }
  if (intuition.embed) {
    kernParts.push(`<div class="theory-intuition-embed theory-intuition-interactive">${intuition.embed}</div>`);
  }
  const recognition = (opts.recognitionItems || []).filter((item) => hasMeaningfulIntuitionText(item));
  if (recognition.length) {
    kernParts.push(`<div class="theory-intuition-embed">
<h4 class="theory-subsection-title">Woran du das Konzept erkennst</h4>
<ul class="theory-intuition-recognition">${recognition.map((item) => `<li>${escapeHtml(stripTags(item))}</li>`).join("")}</ul>
</div>`);
  }

  let anwendung = "";
  if (intuition.exam?.length) {
    anwendung = `<div class="theory-intuition-embed theory-intuition-patterns">
<h4 class="theory-subsection-title">Klausurmuster</h4>
<div class="theory-intuition-pattern-list">
${intuition.exam
  .map(
    (pattern) => `<div class="theory-intuition-pattern-row">
<span class="theory-intuition-pattern-if">Wenn</span>
<span class="theory-intuition-pattern-then">${escapeHtml(stripTags(pattern.if))}</span>
<span class="theory-intuition-pattern-arrow" aria-hidden="true">→</span>
<span class="theory-intuition-pattern-then">${escapeHtml(stripTags(pattern.then))}</span>
</div>`
  )
  .join("")}
</div>
</div>`;
  }

  return {
    orientierung,
    kernidee: kernParts.join("\n"),
    anwendung
  };
}

function isSectionDuplicateOfBody(html, sectionId, fragment) {
  const re = new RegExp(
    `theory-recipe-section--${sectionId}[\\s\\S]*?<div class="theory-recipe-body">([\\s\\S]*?)</div>\\s*</section>`,
    "i"
  );
  const match = html.match(re);
  if (!match) return false;
  return isDuplicateTheoryText(match[1], fragment);
}

function injectFragmentIntoRecipeSection(html, sectionId, fragment) {
  if (!fragment?.trim()) return html;
  const marker = `theory-recipe-section--${sectionId}`;
  if (!html.includes(marker)) return html;

  const re = new RegExp(
    `(<section[^>]*${marker}[^>]*>[\\s\\S]*?<div class="theory-recipe-body">)`,
    "i"
  );
  if (re.test(html)) {
    return html.replace(re, `$1\n${fragment}\n`);
  }
  return html;
}

/**
 * Merge INTUITION layer into recipe Theorie (idempotent markers).
 * @param {string} html
 * @param {unknown} intuitionRaw
 * @param {object} entry
 * @param {{ formalAnchorHtml?: string, recognitionItems?: string[] }} [fusionOpts]
 */
export function fuseIntuitionIntoTheoryHtml(html, intuitionRaw, entry = {}, fusionOpts = {}) {
  const base = completeTheoryRecipe(normalizeTheoryHtml(html), entry, {
    chapterTitle: fusionOpts.chapterTitle || entry.title,
    conceptId: fusionOpts.conceptId || "",
    moduleSlug: fusionOpts.moduleSlug || entry.moduleSlug || "",
    headerMotivationShown: fusionOpts.headerMotivationShown !== false,
    headerObjectivesShown: fusionOpts.headerObjectivesShown !== false
  });
  const intuition = normalizeIntuitionRecord(intuitionRaw);
  if (!intuition) return base;

  const fragments = buildIntuitionFusionFragments(intuition, { ...fusionOpts, entry });
  if (/data-theory-intuition-fused/i.test(base)) {
    return base;
  }

  let out = base;
  if (fragments.orientierung && !isSectionDuplicateOfBody(out, "orientierung", fragments.orientierung)) {
    out = injectFragmentIntoRecipeSection(out, "orientierung", fragments.orientierung);
  }
  if (fragments.kernidee && !isSectionDuplicateOfBody(out, "kernidee", fragments.kernidee)) {
    out = injectFragmentIntoRecipeSection(out, "kernidee", fragments.kernidee);
  }
  if (fragments.anwendung && !isSectionDuplicateOfBody(out, "anwendung", fragments.anwendung)) {
    out = injectFragmentIntoRecipeSection(out, "anwendung", fragments.anwendung);
  }

  if (fragments.kernidee && !/theory-recipe-section--kernidee/i.test(out)) {
    const spec = SECTION_BY_ID.kernidee;
    const kernSection = buildRecipeSectionHtml(spec, fragments.kernidee);
    const defIdx = out.indexOf("theory-recipe-section--definitionen");
    out =
      defIdx >= 0
        ? `${out.slice(0, defIdx)}${kernSection}\n${out.slice(defIdx)}`
        : `${kernSection}\n${out}`;
  }

  if (!/data-theory-intuition-fused/i.test(out)) {
    out = out.replace(
      /<section class="theory-recipe-section/,
      '<section data-theory-intuition-fused="1" class="theory-recipe-section theory-recipe-card'
    );
  }

  return out;
}

export function auditTheoryRecipeSteps(html) {
  const raw = String(html ?? "");
  const wrapped = /theory-recipe-section/.test(raw);
  const byStep = Object.fromEntries(THEORY_SECTION_ORDER.map((s) => [s.id, { present: false, filled: false }]));

  for (const spec of THEORY_SECTION_ORDER) {
    const re = new RegExp(
      `theory-recipe-section--${spec.id}[\\s\\S]*?<div class="theory-recipe-body">([\\s\\S]*?)</div>\\s*</section>`,
      "i"
    );
    const match = raw.match(re);
    if (!match) continue;
    byStep[spec.id].present = true;
    byStep[spec.id].filled = theoryBodyHasContent(match[1]);
  }

  const filledSteps = THEORY_SECTION_ORDER.filter((s) => byStep[s.id].filled).map((s) => s.id);
  const placeholderSteps = THEORY_SECTION_ORDER.filter((s) => {
    if (!byStep[s.id].present || byStep[s.id].filled) return false;
    const re = new RegExp(
      `theory-recipe-section--${s.id}[\\s\\S]*?<div class="theory-recipe-body">([\\s\\S]*?)</div>\\s*</section>`,
      "i"
    );
    const match = raw.match(re);
    return match && /<p class="theory-recipe-placeholder"/i.test(match[1]);
  }).map((s) => s.id);
  const emptySteps = THEORY_SECTION_ORDER.filter(
    (s) => byStep[s.id].present && !byStep[s.id].filled && !placeholderSteps.includes(s.id)
  ).map((s) => s.id);
  const missingSteps = THEORY_SECTION_ORDER.filter((s) => !byStep[s.id].present).map((s) => s.id);
  const presentCount = THEORY_SECTION_ORDER.filter((s) => byStep[s.id].present).length;

  return {
    wrapped,
    sectionCount: presentCount,
    filledCount: filledSteps.length,
    placeholderCount: placeholderSteps.length,
    filledSteps,
    placeholderSteps,
    emptySteps,
    missingSteps,
    structuralEight: presentCount === 8,
    fullEight: filledSteps.length === 8,
    byStep
  };
}

export function auditTheoryStructure(html) {
  const recipe = auditTheoryRecipeSteps(html);
  const legacyBlocks = (html.match(/<div class="section-block">/g) || []).length;
  return {
    wrapped: recipe.wrapped,
    sectionCount: recipe.sectionCount,
    legacyBlocks,
    topLevelLegacy: recipe.wrapped ? 0 : legacyBlocks,
    filledCount: recipe.filledCount,
    fullEight: recipe.fullEight,
    structuralEight: recipe.structuralEight,
    placeholderCount: recipe.placeholderCount
  };
}
