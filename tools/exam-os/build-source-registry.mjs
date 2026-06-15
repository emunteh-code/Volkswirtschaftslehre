import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');
const sourceRoot = path.join(repoRoot, 'source-materials');

const MODULE_FOLDER_MAP = {
  'Mikroökonomik I': { module: 'mikro1', title: 'Mikroökonomik I' },
  'Mikroökonomik II': { module: 'mikro2', title: 'Mikroökonomik II' },
  'Makroökonomik I': { module: 'makro1', title: 'Makroökonomik I' },
  'Makroökonomik II': { module: 'makro2', title: 'Makroökonomik II' },
  'Ökonometrie': { module: 'oekonometrie', title: 'Einführung in die Ökonometrie' },
  Statistik: { module: 'statistik', title: 'Statistik' },
  Finanzwirtschaft: { module: 'finanzwirtschaft', title: 'Finanzwirtschaft' },
  Mathematik: { module: 'mathematik', title: 'Mathematik' },
  Jahresabschluss: { module: 'jahresabschluss', title: 'Jahresabschluss' },
  Recht: { module: 'recht', title: 'Recht für Wirtschaftswissenschaftler' },
  'Internationale Wirtschaftsbeziehungen': {
    module: 'internationale-wirtschaftsbeziehungen',
    title: 'Internationale Wirtschaftsbeziehungen'
  },
  R: { module: 'r', title: 'R' },
  'Politisches System BRD': { module: 'politisches-system-brd', title: 'Politisches System BRD' },
  Politikwissenschaft: { module: 'politikwissenschaft', title: 'Politikwissenschaft' }
};

const SOURCE_DOCUMENT_OVERRIDES = [
  {
    pathPattern: /Makro[öo]konomik I\/Klausur_Februar_2024_260119_141838\.pdf$/i,
    moduleInfo: { module: 'makro2', title: 'Makroökonomik II' },
    idSource: 'Makroökonomik II/Klausur_Februar_2024_260119_141838',
    reason:
      'Visual and native-text review show the PDF footer/title is "Klausur Makroökonomik 2"; topics include open-economy IS-LM, Barro-Gordon, debt dynamics, and Solow.'
  }
];

function sourceDocumentOverride(sourceRelative) {
  const normalized = sourceRelative.replace(/\\/g, '/').normalize('NFC');
  return SOURCE_DOCUMENT_OVERRIDES.find((override) => override.pathPattern.test(normalized)) || null;
}

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (entry.name === '.DS_Store' || entry.name.startsWith('._')) continue;
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else out.push(full);
    }
  }
  return out.sort((a, b) => a.localeCompare(b));
}

function slugify(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90);
}

function sha256(file) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(file));
  return hash.digest('hex');
}

function pdfPages(file) {
  if (path.extname(file).toLowerCase() !== '.pdf') return null;
  try {
    const output = execFileSync('pdfinfo', [file], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    const match = output.match(/^Pages:\s+(\d+)/m);
    return match ? Number(match[1]) : null;
  } catch {
    return null;
  }
}

function classifyKind(relativePath) {
  const normalized = relativePath.normalize('NFC').toLowerCase();
  const ext = path.extname(normalized);
  if (['.r', '.rmd', '.do', '.py', '.js'].includes(ext)) return 'code';
  if (['.csv', '.tsv', '.xlsx', '.xls', '.sav', '.dta'].includes(ext)) return 'dataset';
  if (normalized.includes('klausur') || normalized.includes('probeklausur') || normalized.includes('exam')) return 'exam';
  if (normalized.includes('lösung') || normalized.includes('loesung') || normalized.includes('solution')) return 'solution';
  if (normalized.includes('tutor')) return 'tutorial';
  if (
    normalized.includes('übung') ||
    normalized.includes('uebung') ||
    normalized.includes('übung') ||
    normalized.includes('exercise') ||
    normalized.includes('kleinu') ||
    normalized.includes('großu') ||
    normalized.includes('grossu')
  ) {
    return 'exercise';
  }
  if (
    normalized.includes('vorlesung') ||
    normalized.includes('vorlesungsfolien') ||
    normalized.includes('/folien/') ||
    normalized.includes('lecture') ||
    normalized.includes('slides') ||
    /\bvl[_\s-]?\d/.test(normalized) ||
    normalized.includes('sitzung_')
  ) {
    return 'lecture-slide';
  }
  if (normalized.includes('handout') || normalized.includes('formel') || normalized.includes('literatur')) return 'supplement';
  if (
    normalized.includes('_ppp_') ||
    /(?:^|[/\s_-])v\d+[_\s.-]/.test(normalized) ||
    /(?:^|[/\s_-])kapitel\d+/.test(normalized)
  ) {
    return 'lecture-slide';
  }
  return 'supplement';
}

function groupFromPath(parts) {
  if (parts.length <= 2) return 'root';
  return parts[1];
}

function buildRegistry() {
  const files = walkFiles(sourceRoot);
  const documents = files.map((file) => {
    const relative = path.relative(repoRoot, file);
    const sourceRelative = path.relative(sourceRoot, file);
    const parts = sourceRelative.split(path.sep);
    const topLevel = parts[0];
    const folderModuleInfo = MODULE_FOLDER_MAP[topLevel] || {
      module: slugify(topLevel),
      title: topLevel
    };
    const override = sourceDocumentOverride(sourceRelative);
    const moduleInfo = override?.moduleInfo || folderModuleInfo;
    const stats = fs.statSync(file);
    const kind = classifyKind(sourceRelative);
    const normalizedBase = path.basename(file).normalize('NFC');
    const idSource = override?.idSource || sourceRelative.replace(path.extname(sourceRelative), '');
    const id = `${moduleInfo.module}-${kind}-${slugify(idSource)}`;
    const doc = {
      id,
      module: moduleInfo.module,
      moduleTitle: moduleInfo.title,
      topLevelFolder: topLevel,
      group: groupFromPath(parts),
      kind,
      title: normalizedBase,
      path: relative,
      extension: path.extname(file).toLowerCase().replace(/^\./, '') || 'none',
      bytes: stats.size,
      pages: pdfPages(file),
      fileHash: `sha256:${sha256(file)}`,
      extractionStatus: 'indexed'
    };
    if (override) {
      doc.storageModule = folderModuleInfo.module;
      doc.storageModuleTitle = folderModuleInfo.title;
      doc.moduleOverrideReason = override.reason;
    }
    return doc;
  });

  const byModule = {};
  const byKind = {};
  for (const doc of documents) {
    byModule[doc.module] ||= { documents: 0, bytes: 0, kinds: {} };
    byModule[doc.module].documents += 1;
    byModule[doc.module].bytes += doc.bytes;
    byModule[doc.module].kinds[doc.kind] = (byModule[doc.module].kinds[doc.kind] || 0) + 1;
    byKind[doc.kind] = (byKind[doc.kind] || 0) + 1;
  }

  return {
    generatedAt:
      process.env.CURRENT_DATE ||
      new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Europe/Berlin',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(new Date()),
    sourceRoot: path.relative(repoRoot, sourceRoot),
    totalDocuments: documents.length,
    totalBytes: documents.reduce((sum, doc) => sum + doc.bytes, 0),
    byKind: Object.fromEntries(Object.entries(byKind).sort(([a], [b]) => a.localeCompare(b))),
    byModule: Object.fromEntries(
      Object.entries(byModule)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([module, summary]) => [
          module,
          {
            ...summary,
            kinds: Object.fromEntries(Object.entries(summary.kinds).sort(([a], [b]) => a.localeCompare(b)))
          }
        ])
    ),
    sourceDocuments: documents
  };
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function toMarkdown(registry) {
  const lines = [];
  lines.push(`# Source Corpus Registry — ${registry.generatedAt}`);
  lines.push('');
  lines.push('This file is generated by `node tools/exam-os/build-source-registry.mjs --write`.');
  lines.push('');
  lines.push(`Total documents: **${registry.totalDocuments}**. Total size: **${formatBytes(registry.totalBytes)}**.`);
  lines.push('');
  lines.push('## By Kind');
  lines.push('');
  lines.push('| Kind | Documents |');
  lines.push('|---|---:|');
  for (const [kind, count] of Object.entries(registry.byKind)) lines.push(`| ${kind} | ${count} |`);
  lines.push('');
  lines.push('## By Module');
  lines.push('');
  lines.push('| Module | Documents | Size | Kinds |');
  lines.push('|---|---:|---:|---|');
  for (const [module, summary] of Object.entries(registry.byModule)) {
    const kinds = Object.entries(summary.kinds)
      .map(([kind, count]) => `${kind}: ${count}`)
      .join(', ');
    lines.push(`| \`${module}\` | ${summary.documents} | ${formatBytes(summary.bytes)} | ${kinds} |`);
  }
  lines.push('');
  lines.push('## Documents');
  lines.push('');
  lines.push('| Module | Kind | Pages | Size | Path |');
  lines.push('|---|---|---:|---:|---|');
  for (const doc of registry.sourceDocuments) {
    lines.push(
      `| \`${doc.module}\` | ${doc.kind} | ${doc.pages ?? ''} | ${formatBytes(doc.bytes)} | \`${doc.path}\` |`
    );
  }
  return `${lines.join('\n')}\n`;
}

function main() {
  const registry = buildRegistry();
  const json = `${JSON.stringify(registry, null, 2)}\n`;
  if (process.argv.includes('--write')) {
    const auditDir = path.join(repoRoot, 'docs/audits');
    fs.writeFileSync(path.join(auditDir, 'source-corpus-registry.generated.json'), json);
    fs.writeFileSync(path.join(auditDir, 'source-corpus-registry.generated.md'), toMarkdown(registry));
  }
  process.stdout.write(json);
}

main();
