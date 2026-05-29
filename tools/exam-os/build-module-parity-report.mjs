import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');
const currentStatePath = path.join(repoRoot, 'docs/audits/exam-operating-system-current-state.generated.json');
const outJson = path.join(repoRoot, 'docs/audits/module-parity-vs-mikro1.generated.json');
const outMd = path.join(repoRoot, 'docs/audits/module-parity-vs-mikro1.generated.md');

const PORTAL_MODULES = [
  'mikro1',
  'mikro2',
  'makro1',
  'makro2',
  'oekonometrie',
  'statistik',
  'mathematik',
  'finanzwirtschaft',
  'jahresabschluss',
  'recht',
  'internationale-wirtschaftsbeziehungen'
];

function fileExists(module, file) {
  return fs.existsSync(path.join(repoRoot, module, 'js/data', file));
}

function ratio(actual, target) {
  if (!target) return null;
  return Math.round((actual / target) * 100);
}

function buildRow(benchmark, mod) {
  const targets = {
    concepts: benchmark.concepts,
    sourceAnchors: benchmark.sourceAnchors,
    conceptsWithSourceAnchors: benchmark.conceptsWithSourceAnchors,
    taskFamilies: benchmark.taskFamilies,
    sourceGroundedTaskFamilies: benchmark.sourceGroundedTaskFamilies,
    officialFormulaCards: benchmark.officialFormulaCards,
    portalTaskBlocks: benchmark.portalTaskBlocks,
    stepDrills: benchmark.stepDrills,
    theoryCharacters: benchmark.theoryCharacters,
    masteryItems: benchmark.masteryItems
  };

  const actual = {
    concepts: mod.concepts,
    sourceAnchors: mod.sourceAnchors,
    conceptsWithSourceRefs: mod.conceptsWithSourceRefs,
    conceptsWithSourceAnchors: mod.conceptsWithSourceAnchors,
    taskFamilies: mod.taskFamilies,
    sourceGroundedTaskFamilies: mod.sourceGroundedTaskFamilies,
    officialFormulaCards: mod.officialFormulaCards,
    portalTaskBlocks: mod.portalTaskBlocks,
    stepDrills: mod.stepDrills,
    theoryCharacters: mod.theoryCharacters,
    masteryItems: mod.masteryItems
  };

  const layers = {
    sourceAnchorsJs: fileExists(mod.slug, 'sourceAnchors.js'),
    taskFamiliesJs: fileExists(mod.slug, 'taskFamilies.js'),
    formulaCardsJs: fileExists(mod.slug, 'formulaCards.js'),
    officialTaskIngestionJs: fileExists(mod.slug, 'officialTaskIngestion.js'),
    contentManifestJs: fileExists(mod.slug, 'contentManifest.js')
  };

  const pct = {};
  for (const key of Object.keys(targets)) {
    pct[key] = ratio(actual[key], targets[key]);
  }

  const structuralComplete =
    layers.sourceAnchorsJs &&
    layers.taskFamiliesJs &&
    layers.formulaCardsJs &&
    layers.officialTaskIngestionJs &&
    layers.contentManifestJs;

  const anchorParity =
    mod.conceptsWithSourceRefs > 0 && mod.conceptsWithSourceAnchors === mod.conceptsWithSourceRefs;
  const formulaParity = mod.officialFormulaCards >= Math.min(8, mod.concepts);
  const taskFamilyParity = mod.sourceGroundedTaskFamilies >= Math.min(9, mod.concepts);

  return {
    slug: mod.slug,
    actual,
    targets,
    pct,
    layers,
    structuralComplete,
    anchorParity,
    formulaParity,
    taskFamilyParity,
    mikro1DepthScorecard: mod.mikro1DepthAchieved || 'not achieved',
    gaps: [
      !layers.sourceAnchorsJs && 'missing sourceAnchors.js',
      !layers.taskFamiliesJs && 'missing taskFamilies.js',
      !layers.formulaCardsJs && 'missing formulaCards.js',
      !layers.officialTaskIngestionJs && 'missing officialTaskIngestion.js',
      mod.conceptsWithSourceAnchors < mod.conceptsWithSourceRefs &&
        `anchors ${mod.conceptsWithSourceAnchors}/${mod.conceptsWithSourceRefs} sourced concepts`,
      mod.officialFormulaCards < 8 && `formula cards ${mod.officialFormulaCards}/8+`,
      mod.sourceGroundedTaskFamilies < 9 &&
        `VL task families ${mod.sourceGroundedTaskFamilies}/9+`,
      mod.theoryCharacters < benchmark.theoryCharacters * 0.5 &&
        `theory volume <50% of mikro1`
    ].filter(Boolean)
  };
}

function toMarkdown(report) {
  const lines = [
    `# Module parity vs mikro1`,
    '',
    `Generated: ${report.generatedAt}`,
    '',
    `Benchmark: **mikro1** (${report.benchmark.concepts} concepts, ${report.benchmark.sourceAnchors} anchors, ${report.benchmark.taskFamilies} task families, ${report.benchmark.officialFormulaCards} formula cards)`,
    '',
    '| Module | Concepts | Anchors | Anchored concepts | Task fam. | Grounded | Formula cards | Structural files |',
    '|--------|----------|---------|-------------------|-----------|----------|---------------|------------------|',
    ...report.modules.map((row) => {
      const s = row.structuralComplete ? 'yes' : 'no';
      return `| \`${row.slug}\` | ${row.actual.concepts} (${row.pct.concepts}%) | ${row.actual.sourceAnchors} (${row.pct.sourceAnchors}%) | ${row.actual.conceptsWithSourceAnchors}/${row.actual.concepts} | ${row.actual.taskFamilies} | ${row.actual.sourceGroundedTaskFamilies} | ${row.actual.officialFormulaCards} | ${s} |`;
    }),
    '',
    '## Gaps by module',
    ''
  ];

  for (const row of report.modules) {
    if (row.slug === 'mikro1') continue;
    lines.push(`### ${row.slug}`, '');
    if (!row.gaps.length) lines.push('- (none listed)', '');
    else row.gaps.forEach((gap) => lines.push(`- ${gap}`));
    lines.push('');
  }

  lines.push('## Next actions', '', 'See `docs/architecture/mikro1-parity-program.md`.', '');
  return `${lines.join('\n')}\n`;
}

function parseArgs(argv) {
  return { write: argv.includes('--write') };
}

function main() {
  const { write } = parseArgs(process.argv.slice(2));
  const current = JSON.parse(fs.readFileSync(currentStatePath, 'utf8'));
  const bySlug = Object.fromEntries(current.modules.map((m) => [m.slug, m]));
  const benchmark = bySlug.mikro1;
  if (!benchmark) {
    console.error('mikro1 missing from current-state audit');
    process.exit(1);
  }

  const report = {
    generatedAt: process.env.CURRENT_DATE || current.generatedAt,
    benchmark: {
      concepts: benchmark.concepts,
      sourceAnchors: benchmark.sourceAnchors,
      conceptsWithSourceAnchors: benchmark.conceptsWithSourceAnchors,
      taskFamilies: benchmark.taskFamilies,
      sourceGroundedTaskFamilies: benchmark.sourceGroundedTaskFamilies,
      officialFormulaCards: benchmark.officialFormulaCards,
      portalTaskBlocks: benchmark.portalTaskBlocks,
      stepDrills: benchmark.stepDrills,
      theoryCharacters: benchmark.theoryCharacters,
      masteryItems: benchmark.masteryItems
    },
    modules: PORTAL_MODULES.filter((slug) => bySlug[slug]).map((slug) => buildRow(benchmark, bySlug[slug]))
  };

  console.log(JSON.stringify(report.modules.map((m) => ({ slug: m.slug, gaps: m.gaps.length })), null, 2));

  if (write) {
    fs.writeFileSync(outJson, `${JSON.stringify(report, null, 2)}\n`);
    fs.writeFileSync(outMd, toMarkdown(report));
    console.log(`Wrote ${path.relative(repoRoot, outJson)}`);
    console.log(`Wrote ${path.relative(repoRoot, outMd)}`);
  }
}

main();
