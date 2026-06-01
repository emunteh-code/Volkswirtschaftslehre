/**
 * Canonical "recipe book" structure for the Theorie tab (all modules).
 * Content is classified by subsection h3 keywords; nothing is dropped.
 */

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
      /\bvon der gemeinsamen\b/i
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
      /\brecht als verbindliche\b/i
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
      /\bergebnisraum\b/i
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
      /\baxiome von kolmogorov\b/i
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
      /\banfechtung\b/i
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
      /\btestwahl\b/i
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
    if (spec.id === "mechanismus" || spec.id === "vor_aufgaben") continue;
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

/**
 * Normalize raw theory HTML into recipe sections (idempotent if already wrapped).
 * @param {string} html
 * @returns {string}
 */
export function normalizeTheoryHtml(html) {
  const raw = String(html ?? "").trim();
  if (!raw) return raw;
  if (/class=["']theory-recipe-section["']/i.test(raw)) {
    return raw;
  }

  const parsed = parseLegacyTheorySections(raw);
  const sections = parsed.map((sec, i) => ({
    ...sec,
    bucket: classifyTheorySection(sec.heading, sec.inner, i, parsed.length)
  }));

  if (!sections.length) return raw;

  const grouped = Object.fromEntries(THEORY_SECTION_ORDER.map((s) => [s.id, []]));
  for (const sec of sections) {
    grouped[sec.bucket].push(sec);
  }

  const parts = [];
  for (const spec of THEORY_SECTION_ORDER) {
    const items = grouped[spec.id];
    if (!items.length) continue;

    const bodyParts = items.map((item) => {
      if (!item.heading) {
        return item.inner;
      }
      return `<div class="section-block">
<h4 class="theory-subsection-title">${escapeHtml(item.heading)}</h4>
${item.inner}
</div>`;
    });

    parts.push(`<section class="theory-recipe-section theory-recipe-section--${spec.id}" data-theory-step="${spec.step}" aria-labelledby="theory-${spec.id}-h">
<h3 class="theory-recipe-heading" id="theory-${spec.id}-h"><span class="theory-recipe-step" aria-hidden="true">${spec.step}</span> ${spec.heading}</h3>
<div class="theory-recipe-body">
${bodyParts.join("\n")}
</div>
</section>`);
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
export function applyTheoryRecipeChrome(html, entry = {}) {
  let out = normalizeTheoryHtml(html);
  const objectives = Array.isArray(entry.objectives) ? entry.objectives.filter(Boolean) : [];
  if (objectives.length && !/theory-recipe-section--vor_aufgaben/i.test(out)) {
    const checklist = `<ul class="theory-pre-task-checklist">${objectives
      .map((o) => `<li>${escapeHtml(String(o))}</li>`)
      .join("")}</ul>
<p class="theory-pre-task-hint">Was du beherrschen solltest, bevor du zu Aufgaben gehst.</p>`;
    const spec = SECTION_BY_ID.vor_aufgaben;
    out += `<section class="theory-recipe-section theory-recipe-section--vor_aufgaben" data-theory-step="${spec.step}" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h"><span class="theory-recipe-step" aria-hidden="true">${spec.step}</span> ${spec.heading}</h3>
<div class="theory-recipe-body">${checklist}</div>
</section>`;
  }
  return out;
}

export function auditTheoryStructure(html) {
  const raw = String(html ?? "");
  const wrapped = /theory-recipe-section/.test(raw);
  const sectionCount = (raw.match(/theory-recipe-section/g) || []).length;
  const legacyBlocks = (raw.match(/<div class="section-block">/g) || []).length;
  const topLevelLegacy = wrapped
    ? 0
    : legacyBlocks;
  return { wrapped, sectionCount, legacyBlocks, topLevelLegacy };
}
