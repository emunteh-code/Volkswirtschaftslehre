/**
 * CI-safe exam-OS validation (no source-materials/ required).
 * - syntax-check module data JS
 * - cross-check formula card / task family anchor IDs
 * - ensure committed syllabus + parity report exist
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

const MODULES = [
  'mikro1',
  'mikro2',
  'makro1',
  'makro2',
  'oekonometrie',
  'statistik',
  'finanzwirtschaft',
  'mathematik',
  'jahresabschluss',
  'recht',
  'internationale-wirtschaftsbeziehungen'
];

const REQUIRED_GENERATED = [
  'docs/audits/module-parity-vs-mikro1.generated.json',
  'docs/audits/source-syllabus/statistik.generated.json',
  'docs/audits/source-syllabus/makro1.generated.json'
];

function fail(msg) {
  console.error(`CI validate: ${msg}`);
  process.exitCode = 1;
}

function syntaxCheck(file) {
  const r = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (r.status !== 0) {
    fail(`${file}: ${r.stderr || r.stdout}`);
    return false;
  }
  return true;
}

function flattenAnchors(anchorsExport) {
  const ids = new Set();
  for (const list of Object.values(anchorsExport || {})) {
    if (!Array.isArray(list)) continue;
    for (const a of list) {
      if (a?.id) ids.add(a.id);
    }
  }
  return ids;
}

async function validateModule(slug) {
  const dataDir = path.join(repoRoot, slug, 'js/data');
  if (!fs.existsSync(dataDir)) return;

  for (const file of ['sourceAnchors.js', 'formulaCards.js', 'taskFamilies.js', 'contentManifest.js']) {
    const full = path.join(dataDir, file);
    if (fs.existsSync(full)) syntaxCheck(full);
  }

  const anchorsPath = path.join(dataDir, 'sourceAnchors.js');
  const formulaPath = path.join(dataDir, 'formulaCards.js');
  const taskPath = path.join(dataDir, 'taskFamilies.js');
  if (!fs.existsSync(anchorsPath)) return;

  const anchorsMod = await import(`${pathToFileURL(anchorsPath).href}?ci=${Date.now()}`);
  const anchorsKey = Object.keys(anchorsMod).find((k) => k.endsWith('_SOURCE_ANCHORS'));
  const anchorIds = flattenAnchors(anchorsMod[anchorsKey]);

  const checkRefs = async (filePath, label) => {
    if (!fs.existsSync(filePath)) return;
    const mod = await import(`${pathToFileURL(filePath).href}?ci=${Date.now()}`);
    const cards = mod.FORMULA_CARDS || mod.TASK_FAMILIES || [];
    for (const item of cards) {
      const refs = item.anchorIds || item.sourceAnchorIds || [];
      for (const id of refs) {
        if (!anchorIds.has(id)) {
          fail(`${slug} ${label}: missing anchor id ${id} (from ${item.id})`);
        }
      }
    }
  };

  await checkRefs(formulaPath, 'formulaCards');
  await checkRefs(taskPath, 'taskFamilies');
}

async function main() {
  let ok = true;
  for (const rel of REQUIRED_GENERATED) {
    const full = path.join(repoRoot, rel);
    if (!fs.existsSync(full)) {
      fail(`missing generated artifact: ${rel}`);
      ok = false;
    }
  }

  const tools = [
    'audit-current-state.mjs',
    'check-readiness.mjs',
    'generate-vl-layers.mjs',
    'check-portal-shell.mjs'
  ];
  for (const t of tools) syntaxCheck(path.join(repoRoot, 'tools/exam-os', t));

  const shellCheck = spawnSync(process.execPath, [path.join(repoRoot, 'tools/exam-os/check-portal-shell.mjs')], {
    encoding: 'utf8',
    stdio: 'inherit'
  });
  if (shellCheck.status !== 0) ok = false;

  for (const slug of MODULES) {
    await validateModule(slug);
  }

  if (process.exitCode) {
    console.error('CI validate failed.');
  } else if (ok) {
    console.log('CI validate OK (exam-OS layers + generated audits).');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
