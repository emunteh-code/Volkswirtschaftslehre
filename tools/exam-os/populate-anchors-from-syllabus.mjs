/**
 * Page anchors from committed syllabus JSON (heading candidates; no page text).
 * Usage:
 *   node tools/exam-os/populate-anchors-from-syllabus.mjs --module makro2 --write
 *   node tools/exam-os/populate-anchors-from-syllabus.mjs --all --write
 *   node tools/exam-os/populate-anchors-from-syllabus.mjs --all --write --force
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

const REVIEWED_AT = '2026-05-28';

/** Modules with hand-curated anchors — skipped unless --force */
const CURATED_SKIP = new Set(['mikro1', 'statistik', 'mathematik']);

const MODULE_CONFIG = {
  makro1: {
    syllabus: 'makro1.generated.json',
    manifest: 'makro1/js/data/contentManifest.js',
    primaryExport: 'MAKRO1_CONCEPT_PRIMARY_REFS',
    anchorsExport: 'MAKRO1_SOURCE_ANCHORS',
    title: 'Makroökonomik I',
    reviewedBy: 'exam-os-syllabus-pass-makro1-anchors-1',
    preferPath: (paths) => paths.find((p) => p.startsWith('Vorlesungen/')) || paths[0]
  },
  makro2: {
    syllabus: 'makro2.generated.json',
    manifest: 'makro2/js/data/contentManifest.js',
    primaryExport: 'MAKRO2_CONCEPT_PRIMARY_REFS',
    anchorsExport: 'MAKRO2_SOURCE_ANCHORS',
    title: 'Makroökonomik II',
    reviewedBy: 'exam-os-syllabus-pass-makro2-anchors-1',
    preferPath: (paths) => paths.find((p) => p.startsWith('Folien/')) || paths[0]
  },
  oekonometrie: {
    syllabus: 'oekonometrie.generated.json',
    manifest: 'oekonometrie/js/data/contentManifest.js',
    primaryExport: 'OEKONOMETRIE_CONCEPT_PRIMARY_REFS',
    anchorsExport: 'OEKONOMETRIE_SOURCE_ANCHORS',
    title: 'Ökonometrie',
    reviewedBy: 'exam-os-syllabus-pass-oekonometrie-anchors-1',
    preferPath: (paths) =>
      paths.find((p) => /Einf_WiSe|Formelsammlung/i.test(p) && p.endsWith('.pdf')) ||
      paths.find((p) => p.endsWith('.pdf') && !p.endsWith('.R')) ||
      paths[0],
    conceptPageSpread: true
  },
  finanzwirtschaft: {
    syllabus: 'finanzwirtschaft.generated.json',
    manifest: 'finanzwirtschaft/js/data/contentManifest.js',
    primaryExport: 'FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS',
    anchorsExport: 'FINANZWIRTSCHAFT_SOURCE_ANCHORS',
    title: 'Finanzwirtschaft',
    reviewedBy: 'exam-os-syllabus-pass-finanz-anchors-1',
    preferPath: (paths) => paths.find((p) => /^V\d/i.test(path.basename(p))) || paths[0],
    conceptPageSpread: true
  },
  jahresabschluss: {
    syllabus: 'jahresabschluss.generated.json',
    manifest: 'jahresabschluss/js/data/contentManifest.js',
    primaryExport: 'JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS',
    anchorsExport: 'JAHRESABSCHLUSS_SOURCE_ANCHORS',
    title: 'Jahresabschluss',
    reviewedBy: 'exam-os-syllabus-pass-ja-anchors-1',
    preferPath: (paths) => paths.find((p) => /Kapitel/i.test(p) && p.endsWith('.pdf')) || paths[0],
    conceptPageSpread: true
  },
  recht: {
    syllabus: 'recht.generated.json',
    manifest: 'recht/js/data/contentManifest.js',
    primaryExport: 'RECHT_CONCEPT_PRIMARY_REFS',
    anchorsExport: 'RECHT_SOURCE_ANCHORS',
    title: 'Recht',
    reviewedBy: 'exam-os-syllabus-pass-recht-anchors-1',
    preferPath: (paths) => paths.find((p) => p.startsWith('Vorlesungen/')) || paths[0],
    conceptPageSpread: true
  },
  'internationale-wirtschaftsbeziehungen': {
    syllabus: 'internationale-wirtschaftsbeziehungen.generated.json',
    manifest: 'internationale-wirtschaftsbeziehungen/js/data/contentManifest.js',
    primaryExport: 'IWB_CONCEPT_PRIMARY_REFS',
    anchorsExport: 'IWB_SOURCE_ANCHORS',
    title: 'Internationale Wirtschaftsbeziehungen',
    reviewedBy: 'exam-os-syllabus-pass-iwb-anchors-1',
    preferPath: (paths) => paths.find((p) => p.startsWith('Vorlesungsfolien/')) || paths[0],
    conceptPageSpread: true
  },

};

const SKIP_HEADING = /^(?:\d+\s*\/\s*\d+|Prof\.|Lehrstuhl|Lizenziert|Pearson|Georg-August)/i;

function collectDocuments(syllabus) {
  const docs = [];
  for (const group of Object.values(syllabus.documentsByKind || {})) {
    if (Array.isArray(group)) docs.push(...group);
  }
  return docs;
}

function basename(p) {
  return path.basename(p).normalize('NFC');
}

function conceptHash(conceptId) {
  let h = 0;
  for (const c of conceptId) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

function bestHeading(page) {
  const candidates = (page.headingCandidates || []).filter((h) => h && h.length >= 8 && !SKIP_HEADING.test(h));
  candidates.sort((a, b) => b.length - a.length);
  return candidates[0] || `Seite ${page.page}`;
}

function scorePage(page) {
  if (page.extractionHealth !== 'text-ok') return -1;
  const heading = bestHeading(page);
  let score = Math.min(page.characters || 0, 800) / 10;
  if (page.formulaSignals > 0) score += 40;
  if (page.taskSignals > 0) score += 20;
  if (SKIP_HEADING.test(heading)) score -= 50;
  return score;
}

function pickPages(doc, count, conceptId, spread) {
  const ranked = (doc.pages || [])
    .map((page) => ({ page, score: scorePage(page) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
  if (!ranked.length) return [];

  const offset = spread ? conceptHash(conceptId) % Math.max(1, ranked.length - count) : 0;
  const picked = [];
  for (let i = offset; i < ranked.length && picked.length < count; i++) {
    const item = ranked[i];
    if (picked.some((p) => p.page.page === item.page.page)) continue;
    if (picked.length && Math.abs(picked[picked.length - 1].page.page - item.page.page) < 2) continue;
    picked.push(item);
  }
  for (const item of ranked) {
    if (picked.length >= count) break;
    if (!picked.some((p) => p.page.page === item.page.page)) picked.push(item);
  }
  return picked.map((item) => item.page);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 24);
}

function renderAnchorsFile(cfg, moduleSlug, anchorsByConcept) {
  const conceptBlocks = Object.entries(anchorsByConcept)
    .map(([conceptId, anchors]) => {
      if (!anchors.length) return `  ${conceptId}: []`;
      const anchorLines = anchors
        .map(
          (a) => `    anchor({
      id: '${a.id}',
      sourceId: '${a.sourceId}',
      sourcePath: '${a.sourcePath}',
      publicLabel: ${JSON.stringify(a.publicLabel)},
      page: ${a.page},
      section: ${JSON.stringify(a.section)},
      fingerprint: '${a.fingerprint}',
      confidence: ${a.confidence}
    })`
        )
        .join(',\n');
      return `  ${conceptId}: [\n${anchorLines}\n  ]`;
    })
    .join(',\n');

  return `// ============================================================
// SOURCE ANCHORS — ${cfg.title}
// Syllabus-heading pass (${REVIEWED_AT}); section labels from heading candidates.
// ============================================================

const REVIEWED_AT = '${REVIEWED_AT}';
const REVIEWED_BY = '${cfg.reviewedBy}';

function anchor({
  id,
  sourceId,
  sourcePath,
  publicLabel,
  page,
  section,
  fingerprint,
  confidence = 0.82
}) {
  return {
    id,
    sourceId,
    sourcePath,
    publicLabel,
    locator: {
      page,
      slide: page,
      section,
      task: null,
      line: null
    },
    quoteFingerprint: \`sha256:\${fingerprint}\`,
    confidence,
    reviewedBy: REVIEWED_BY,
    reviewedAt: REVIEWED_AT
  };
}

export const ${cfg.anchorsExport} = Object.freeze({
${conceptBlocks}
});
`;
}

async function loadExistingAnchors(moduleSlug, anchorsExport) {
  const p = path.join(repoRoot, moduleSlug, 'js/data/sourceAnchors.js');
  if (!fs.existsSync(p)) return {};
  const mod = await import(`${pathToFileURL(p).href}?t=${Date.now()}`);
  return mod[anchorsExport] || {};
}

async function populateModule(moduleSlug, { write, force }) {
  const cfg = MODULE_CONFIG[moduleSlug];
  if (!cfg) {
    console.warn(`No config for ${moduleSlug}`);
    return { skipped: true };
  }
  if (CURATED_SKIP.has(moduleSlug) && !force) {
    console.log(`${moduleSlug}: skip (curated anchors; use --force to overwrite)`);
    return { skipped: true };
  }

  const syllabusPath = path.join(repoRoot, 'docs/audits/source-syllabus', cfg.syllabus);
  if (!fs.existsSync(syllabusPath)) {
    console.warn(`Missing syllabus: ${cfg.syllabus}`);
    return { skipped: true };
  }

  const syllabus = JSON.parse(fs.readFileSync(syllabusPath, 'utf8'));
  const manifestMod = await import(`${pathToFileURL(path.join(repoRoot, cfg.manifest)).href}?t=${Date.now()}`);
  const primaryByConcept = manifestMod[cfg.primaryExport] || {};
  const existing = cfg.mergeExisting ? await loadExistingAnchors(moduleSlug, cfg.anchorsExport) : {};

  const byBasename = new Map();
  for (const doc of collectDocuments(syllabus)) {
    byBasename.set(basename(doc.path), doc);
  }

  const onlySet = cfg.onlyConcepts ? new Set(cfg.onlyConcepts) : null;
  const anchorsByConcept = cfg.mergeExisting ? { ...existing } : {};
  let total = 0;

  for (const [conceptId, paths] of Object.entries(primaryByConcept)) {
    if (onlySet && !onlySet.has(conceptId)) continue;
    if (!onlySet && cfg.mergeExisting && Array.isArray(existing[conceptId]) && existing[conceptId].length >= 2) {
      total += existing[conceptId].length;
      continue;
    }

    const list = Array.isArray(paths) ? paths : [];
    const relPath = cfg.preferPath(list);
    if (!relPath) {
      anchorsByConcept[conceptId] = anchorsByConcept[conceptId] || [];
      continue;
    }

    const doc = byBasename.get(basename(relPath));
    if (!doc) {
      console.warn(`${conceptId}: no syllabus doc for ${relPath}`);
      anchorsByConcept[conceptId] = anchorsByConcept[conceptId] || [];
      continue;
    }

    const pages = pickPages(doc, 2, conceptId, cfg.conceptPageSpread);
    const pdfSlug = slugify(basename(relPath));
    anchorsByConcept[conceptId] = pages.map((page) => {
      const section = bestHeading(page);
      const fp = (page.textHash || '').replace(/^sha256:/, '').slice(0, 16) || '0000000000000000';
      const pageSlug = String(page.page).padStart(2, '0');
      return {
        id: `${moduleSlug}.${conceptId}.${pdfSlug}.p${pageSlug}.${slugify(section) || 'slide'}`,
        sourceId: doc.sourceId,
        sourcePath: relPath,
        publicLabel: doc.title.replace(/\.pdf$/i, ''),
        page: page.page,
        section,
        fingerprint: fp,
        confidence: page.formulaSignals > 0 ? 0.88 : 0.84
      };
    });
    total += anchorsByConcept[conceptId].length;
    console.log(`  ${conceptId}: ${anchorsByConcept[conceptId].length} ← ${relPath}`);
  }

  if (!onlySet) {
    for (const conceptId of Object.keys(primaryByConcept)) {
      if (!(conceptId in anchorsByConcept)) anchorsByConcept[conceptId] = [];
    }
  }

  console.log(`${moduleSlug}: ${total} anchors total`);
  if (write) {
    const outPath = path.join(repoRoot, moduleSlug, 'js/data/sourceAnchors.js');
    fs.writeFileSync(outPath, `${renderAnchorsFile(cfg, moduleSlug, anchorsByConcept)}\n`);
    console.log(`  wrote ${outPath}`);
  }
  return { total };
}

async function main() {
  const write = process.argv.includes('--write');
  const force = process.argv.includes('--force');
  const all = process.argv.includes('--all');
  const modIdx = process.argv.indexOf('--module');
  const moduleSlug = modIdx >= 0 ? process.argv[modIdx + 1] : null;

  const targets = all ? Object.keys(MODULE_CONFIG) : moduleSlug ? [moduleSlug] : [];
  if (!targets.length) {
    console.error('Usage: --module <slug> [--write] | --all [--write] [--force]');
    process.exit(1);
  }

  for (const slug of targets) {
    console.log(`\n=== ${slug} ===`);
    await populateModule(slug, { write, force });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
