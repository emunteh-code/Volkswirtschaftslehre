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

    parts.push(`<section class="theory-recipe-section theory-recipe-card theory-recipe-section--${spec.id}" data-theory-step="${spec.step}" aria-labelledby="theory-${spec.id}-h">
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
    out += `<section class="theory-recipe-section theory-recipe-card theory-recipe-section--vor_aufgaben" data-theory-step="${spec.step}" aria-labelledby="theory-vor_aufgaben-h">
<h3 class="theory-recipe-heading" id="theory-vor_aufgaben-h"><span class="theory-recipe-step" aria-hidden="true">${spec.step}</span> ${spec.heading}</h3>
<div class="theory-recipe-body">${checklist}</div>
</section>`;
  }
  return out;
}

function stripTags(text) {
  return String(text ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
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

  const core = hasMeaningfulIntuitionText(data.core) ? String(data.core) : mentalModel[0]?.body || "";
  const analogy = hasMeaningfulIntuitionText(data.analogy)
    ? String(data.analogy)
    : mentalModel[1]?.body || "";
  const bridge = hasMeaningfulIntuitionText(data.bridge) ? String(data.bridge) : "";
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
<p class="theory-intuition-bridge-kicker">Transferpfad</p>
<p class="theory-intuition-bridge-copy">${intuition.bridge}</p>
</div>`
    : "";

  const kernParts = [];
  if (intuition.core) {
    kernParts.push(`<p class="theory-intuition-lead">${intuition.core}</p>`);
  }
  if (intuition.analogy) {
    kernParts.push(`<div class="theory-intuition-embed">
<h4 class="theory-subsection-title">Denkbild</h4>
<p>${intuition.analogy}</p>
</div>`);
  }
  if (opts.formalAnchorHtml) {
    kernParts.push(`<div class="theory-intuition-embed theory-intuition-formal-anchor">${opts.formalAnchorHtml}</div>`);
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
  const base = applyTheoryRecipeChrome(html, entry);
  const intuition = normalizeIntuitionRecord(intuitionRaw);
  if (!intuition) return base;

  const fragments = buildIntuitionFusionFragments(intuition, fusionOpts);
  if (/data-theory-intuition-fused/i.test(base)) {
    return base;
  }

  let out = base;
  out = injectFragmentIntoRecipeSection(out, "orientierung", fragments.orientierung);
  out = injectFragmentIntoRecipeSection(out, "kernidee", fragments.kernidee);
  out = injectFragmentIntoRecipeSection(out, "anwendung", fragments.anwendung);

  if (fragments.kernidee && !/theory-recipe-section--kernidee/i.test(out)) {
    const spec = SECTION_BY_ID.kernidee;
    const kernSection = `<section class="theory-recipe-section theory-recipe-card theory-recipe-section--kernidee" data-theory-step="${spec.step}" aria-labelledby="theory-kernidee-h">
<h3 class="theory-recipe-heading" id="theory-kernidee-h"><span class="theory-recipe-step" aria-hidden="true">${spec.step}</span> ${spec.heading}</h3>
<div class="theory-recipe-body">${fragments.kernidee}</div>
</section>`;
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
