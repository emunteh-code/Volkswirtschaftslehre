import { CHAPTERS } from '../mikro1/js/data/chapters.js';
import { execFileSync } from 'node:child_process';

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const baseUrl = 'http://127.0.0.1:4179/.qa/mikro1-harness.html';
const tabs = ['theorie', 'formeln', 'aufgaben', 'intuition'];
const targetedSurfaces = [
  { concept: 'lagrange', tab: 'intuition' },
  { concept: 'elast', tab: 'intuition' },
  { concept: 'hicks', tab: 'intuition' },
  { concept: 'ausgaben', tab: 'intuition' },
  { concept: 'shephard', tab: 'intuition' },
  { concept: 'indnutzen', tab: 'intuition' },
  { concept: 'lambda', tab: 'intuition' },
  { concept: 'slutsky', tab: 'intuition' },
  { concept: 'grts', tab: 'intuition' },
  { concept: 'skalener', tab: 'intuition' },
  { concept: 'kosten', tab: 'intuition' },
  { concept: 'normal', tab: 'theorie' },
  { concept: 'cv_ev', tab: 'intuition' },
  { concept: 'probeklausur_1', mode: 'full-exam', exam: 'probeklausur_1' }
];

function decodeEntities(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function readSummary(url) {
  const html = execFileSync(
    chrome,
    ['--headless=new', '--disable-gpu', '--virtual-time-budget=12000', '--dump-dom', url],
    { encoding: 'utf8' }
  );

  const match = html.match(/<div id="summary">([\s\S]*?)<\/div>/);
  if (!match) {
    throw new Error(`No summary block found for ${url}`);
  }

  return JSON.parse(decodeEntities(match[1]));
}

const failures = [];
const targetedResults = [];

for (const chapter of CHAPTERS) {
  for (const tab of tabs) {
    const summary = readSummary(`${baseUrl}?concept=${chapter.id}&tab=${tab}`);
    if (summary.mathError || summary.rawDelimiters || summary.entityLeak || summary.markupLeak || summary.plainMathLeakCount > 0) {
      failures.push({ concept: chapter.id, tab, summary });
    }
  }
}

for (const target of targetedSurfaces) {
  const url = target.mode === 'full-exam'
    ? `${baseUrl}?mode=full-exam&exam=${target.exam}`
    : `${baseUrl}?concept=${target.concept}&tab=${target.tab}`;
  const summary = readSummary(url);
  targetedResults.push({
    concept: target.concept ?? target.exam,
    tab: target.tab ?? target.mode,
    pageTitle: summary.pageTitle,
    plainMathLeakCount: summary.plainMathLeakCount,
    plainMathLeaks: summary.plainMathLeaks,
    expectedMathInk: summary.expectedMathInk,
    mathInkSamples: summary.mathInkSamples
  });
}

console.log(JSON.stringify({
  checkedConcepts: CHAPTERS.length,
  checkedSurfaces: CHAPTERS.length * tabs.length,
  failureCount: failures.length,
  failures: failures.slice(0, 40),
  targetedResults
}, null, 2));
