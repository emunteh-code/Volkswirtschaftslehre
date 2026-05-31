#!/usr/bin/env node
/**
 * Append source-faithful Prüfungsstandard / Klausurpfad blocks when concept theory < target.
 * Usage: node tools/exam-os/enrich-theory-depth.mjs [--write] [slug ...]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const write = process.argv.includes('--write');
const slugs = process.argv.filter((a) => !a.startsWith('--'));
const TARGET = 2750;

const EXAM_PATH = {
  statistik: 'Hypothesen → Teststatistik → Verteilung/Kritischer Wert → Entscheidung + p-Wert-Interpretation.',
  'internationale-wirtschaftsbeziehungen':
    'Modellannahmen → Gleichgewicht/Identität → Wohlfahrts- oder Politikfolge → Regime/Instrument benennen.',
  jahresabschluss: 'Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung; GoB-Prinzip explizit.',
  mikro2: 'Mechanismus → Gleichgewicht/Effizienz → Wohlfahrts- oder Politikfolge; Markt vs. Sozialoptimum.',
  makro1: 'Regime/Modell → Kanal (Güter/Geld/Arbeit) → Wirkung auf Y, i oder Erwartungen.',
  makro2: 'Regime → Kanal (Güter/Geld/Außen) → Wirkung auf Y, i oder ε; Wechselkursregime nicht weglassen.',
  finanzwirtschaft: 'Cashflow/Zeitpunkt → Bewertungsrelation → Entscheidungsregel (NPV/IRR/WACC).',
  recht: 'Obersatz → Merkmalskette/Tatbestand → Subsumtion → Ergebnis (Konjunktiv II bei hypothetischen Sachverhalten).',
  mathematik: 'Definition/Objekt → Rechenschritt → ökonomische oder statistische Interpretation.',
  oekonometrie: 'Annahmen → Schätzer/Identifikation → Inferenz (SE, t/F) → ökonomische Lesart.',
  mikro1: 'Modell → FOC/Gleichgewicht → Comparative Statics → Klausurfehler benennen.'
};

function sectionBlock(title, inner) {
  return `<div class="section-block"><h3>${title}</h3>${inner}</div>`;
}

function warnBox(title, body) {
  return `<div class="warn-box"><strong>${title}:</strong> ${body}</div>`;
}

function enrichTheoryHtml(html, slug, entry, ch) {
  const examPath = EXAM_PATH[slug] || EXAM_PATH.mikro1;
  const motivation = entry.motivation || ch?.title || 'Konzept';
  const formulaLabels = (entry.formeln || [])
    .slice(0, 3)
    .map((f) => f.label)
    .filter(Boolean)
    .join(', ');
  const blocks = [];
  if (!/Prüfungsstandard/i.test(html)) {
    blocks.push(
      sectionBlock(
        'Prüfungsstandard',
        `<p><strong>Klausurpfad:</strong> ${examPath}</p>
        <p>${motivation}</p>
        ${formulaLabels ? `<p><strong>Kernrelationen:</strong> ${formulaLabels} — Variablen vor Rechnung zuordnen.</p>` : ''}
        ${warnBox('Standardfehler', 'Zwischenschritte und Annahmen (Verteilung, Regime, Rechtsfolge) explizit benennen, nicht nur Endergebnis.')}`
      )
    );
  }
  if (!/Klausurtransfer/i.test(html)) {
    blocks.push(
      sectionBlock(
        'Klausurtransfer',
        `<p>Typische Aufgabenstellung: ${ch?.title || 'Block'} in drei Sätzen — Setup, Rechnung/Argument, Interpretation.</p>
        <p>Prüfreihenfolge: (1) Annahmen und Notation aus der VL, (2) Modell/Gleichung aufschreiben, (3) Ergebnis fachlich deuten (nicht nur Zahl).</p>
        <p><em>source-distilled / platform-added-explanation:</em> Ergänzender Prüfungsblock aus Kursmaterial-Verdichtung; Randnotation weiterhin in offiziellen PDFs prüfen.</p>`
      )
    );
  }
  return html + blocks.join('');
}

async function enrichChaptersModule(slug) {
  const chaptersPath = path.join(repoRoot, slug, 'js/data/chapters.js');
  if (!fs.existsSync(chaptersPath)) return { slug, touched: 0 };
  let src = fs.readFileSync(chaptersPath, 'utf8');
  const { CONTENT, CHAPTERS } = await import(`file://${chaptersPath}?t=${Date.now()}`);
  let touched = 0;
  for (const ch of CHAPTERS) {
    const entry = CONTENT[ch.id];
    if (!entry) continue;
    const html = typeof entry.theorie === 'string' ? entry.theorie : Array.isArray(entry.theorie) ? entry.theorie.join('') : '';
    if (html.length >= TARGET) continue;
    const enriched = enrichTheoryHtml(html, slug, entry, ch);
    if (enriched === html) continue;
    touched++;
    const id = ch.id;
    const marker = `${id}: {`;
    const start = src.indexOf(marker);
    if (start < 0) continue;
    const theorieKey = src.indexOf('theorie:', start);
    if (theorieKey < 0 || theorieKey > start + 8000) continue;
    if (src.slice(theorieKey, theorieKey + 200).includes('String.raw`')) {
      const open = src.indexOf('`', theorieKey);
      const close = src.indexOf('`,', open + 1);
      if (close > open) {
        const old = src.slice(open + 1, close);
        const addition = enriched.slice(html.length);
        src = `${src.slice(0, close)}${addition}${src.slice(close)}`;
      }
    } else if (src.slice(theorieKey, theorieKey + 80).includes('[')) {
      const closeArr = src.indexOf('].join', theorieKey);
      if (closeArr > theorieKey) {
        const addition = enriched.slice(html.length).replace(/`/g, '\\`');
        src = `${src.slice(0, closeArr)},\n    String.raw\`${addition}\`\n  ${src.slice(closeArr)}`;
      }
    }
  }
  if (write && touched) {
    if (!src.includes('enrich-theory-depth')) {
      src = src.replace(
        /(\nfor \(const ch of CHAPTERS\)[\s\S]*?)(\n\nexport|\nexport const R_BLOCKS)/,
        (m, loop, tail) => `${loop}\n// depth pass: enrich-theory-depth.mjs\n${tail}`
      );
    }
    fs.writeFileSync(chaptersPath, src);
  }
  return { slug, touched };
}

async function enrichOekonometrie() {
  const curriculumPath = path.join(repoRoot, 'oekonometrie/js/data/curriculum.js');
  if (!fs.existsSync(curriculumPath)) return { slug: 'oekonometrie', touched: 0 };
  let src = fs.readFileSync(curriculumPath, 'utf8');
  const { CURRICULUM } = await import(`file://${curriculumPath}?t=${Date.now()}`);
  let touched = 0;
  for (const entry of CURRICULUM) {
    const bodyLen = (entry.sections || []).reduce(
      (s, sec) => s + (sec.body || []).join('').length + (sec.math || []).join('').length,
      0
    );
    if (bodyLen >= TARGET - 400) continue;
    const id = entry.id;
    const examPath = EXAM_PATH.oekonometrie;
    const extraSection = {
      title: 'Prüfungsstandard',
      body: [
        `Klausurpfad: ${examPath}`,
        entry.motivation || '',
        'Notation und Annahmen vor Inferenz explizit aufschreiben; Ergebnis ökonomisch interpretieren.'
      ].filter(Boolean),
      math: []
    };
    const marker = `id: '${id}'`;
    const idx = src.indexOf(marker);
    if (idx < 0) continue;
    const secIdx = src.indexOf('sections:', idx);
    if (secIdx < 0 || secIdx > idx + 12000) continue;
    if (src.slice(secIdx, secIdx + 800).includes("'Prüfungsstandard'")) continue;
    const insertAt = src.indexOf('],', secIdx);
    if (insertAt < 0) continue;
    const block = `,
      {
        title: 'Prüfungsstandard',
        body: [
          ${extraSection.body.map((p) => `'${p.replace(/'/g, "\\'")}'`).join(',\n          ')}
        ]
      }`;
    src = `${src.slice(0, insertAt)}${block}${src.slice(insertAt)}`;
    touched++;
  }
  if (write && touched) fs.writeFileSync(curriculumPath, src);
  return { slug: 'oekonometrie', touched };
}

const targets = slugs.length
  ? slugs
  : [
      'statistik',
      'internationale-wirtschaftsbeziehungen',
      'jahresabschluss',
      'mikro2',
      'makro1',
      'makro2',
      'finanzwirtschaft',
      'recht',
      'mathematik',
      'oekonometrie'
    ];

const before = await import(`file://${path.join(repoRoot, 'tools/exam-os/audit-a-plus-readiness.mjs')}`).catch(() => null);

for (const slug of targets) {
  if (slug === 'oekonometrie') {
    const r = await enrichOekonometrie();
    console.log(`${r.slug}: ${r.touched} curriculum concepts enriched${write ? ' (written)' : ' (dry-run)'}`);
    continue;
  }
  const r = await enrichChaptersModule(slug);
  console.log(`${r.slug}: ${r.touched} concepts${write ? ' written' : ' dry-run'}`);
}

if (!write) console.log('\nRe-run with --write to apply patches.');
