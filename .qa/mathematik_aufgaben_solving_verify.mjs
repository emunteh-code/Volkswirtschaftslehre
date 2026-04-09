import { chromium } from '/tmp/pw-check/node_modules/playwright/index.mjs';
import { CHAPTERS } from '../mathematik/js/data/chapters.js';
import { MATHEMATIK_EXAM_DRILLS_BY_ID, MATHEMATIK_GUIDED_TASKS_BY_ID } from '../mathematik/js/data/practiceConfig.js';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const context = await browser.newContext({ viewport: { width: 1440, height: 1400 } });
await context.addInitScript(() => {
  localStorage.setItem('mathematik_consent_v1', '1');
  localStorage.setItem('lernportal_onboarding_v1', 'true');
});
const page = await context.newPage();
const base = process.env.PORTAL_BASE_URL || 'http://127.0.0.1:4182';
const GENERIC_PATTERN = /Kleinübung-Familie|typische E2A-Aufgabe|Entscheidungsdrill|Kernsatz|Theorieblock|Klausurmuster|wiederholbares Kleinübungsschema|aktiv abgesichert|kurzer Prüfungsablauf|klausurfest sortiert|Arbeite .* sauber zu Ende aus/i;

async function acceptConsent() {
  await page.evaluate(() => {
    try {
      localStorage.setItem('mathematik_consent_v1', '1');
      localStorage.setItem('lernportal_onboarding_v1', 'true');
      if (typeof window.__acceptConsent === 'function') {
        window.__acceptConsent();
      }
      const notice = document.getElementById('consentNotice');
      if (notice) {
        notice.classList.remove('show');
        notice.style.display = 'none';
      }
    } catch {}
  });
}

async function openConcept(conceptId) {
  await page.goto(`${base}/mathematik/`, { waitUntil: 'domcontentloaded' });
  await acceptConsent();
  const navSelector = `.nav-item[data-id="${conceptId}"], #nav-${conceptId}`;
  await page.waitForSelector(navSelector, { timeout: 15000 });
  await page.locator(navSelector).first().evaluate((el) => el.click());
  await page.waitForTimeout(300);
  await page.locator('.tab-btn[data-tab="aufgaben"]').first().evaluate((el) => el.click());
  await page.waitForTimeout(300);
}

const concepts = CHAPTERS.map((chapter) => chapter.id);

const result = {};

for (const conceptId of concepts) {
  const guidedTasks = MATHEMATIK_GUIDED_TASKS_BY_ID[conceptId] || [];
  const transferDrills = MATHEMATIK_EXAM_DRILLS_BY_ID[conceptId] || [];
  await openConcept(conceptId);
  const uiState = await page.evaluate(() => {
    const taskLabels = Array.from(document.querySelectorAll('.problem-card .prob-num')).map((el) => el.textContent.trim());
    const transferQuestions = Array.from(document.querySelectorAll('.exam-drill-card .prob-text')).map((el) => el.textContent.trim());
    const transferMeta = Array.from(document.querySelectorAll('.exam-drill-meta')).map((el) => el.textContent.trim());
    const genericPromptCount = transferQuestions.filter((text) =>
      /Kernsatz|Theorieblock|Klausurmuster|Theorie|Kernidee/i.test(text)
    ).length;
    const guidedCount = Array.from(document.querySelectorAll('.problem-card'))
      .filter((card) => !card.classList.contains('exam-drill-card')).length;
    const transferCount = Array.from(document.querySelectorAll('.exam-drill-card')).length;
    return {
      guidedCount,
      transferCount,
      taskLabels,
      transferQuestions,
      transferMeta,
      genericPromptCount
    };
  });

  const guidedCard = page.locator('.problem-card:not(.exam-drill-card)').nth(4);
  await guidedCard.locator('.btn').click();
  await page.waitForTimeout(120);
  const openedGuided = await guidedCard.evaluate((card) => {
    const solution = card.querySelector('.solution-block');
    return {
      text: solution?.innerText?.trim() || '',
      stepCount: solution?.querySelectorAll('.step').length || 0,
      hasResult: Boolean(solution?.querySelector('.result-badge'))
    };
  });

  const transferCard = page.locator('.exam-drill-card').nth(4);
  await transferCard.locator('.btn').click();
  await page.waitForTimeout(120);
  const openedTransfer = await transferCard.evaluate((card) => {
    const solution = card.querySelector('.solution-block');
    return {
      text: solution?.innerText?.trim() || '',
      stepCount: solution?.querySelectorAll('.exam-drill-steps li').length || 0,
      hasResult: /Prüfungsresultat/i.test(solution?.innerText || '')
    };
  });

  result[conceptId] = {
    data: {
      guidedCount: guidedTasks.length,
      transferCount: transferDrills.length,
      guidedIncomplete: guidedTasks
        .map((task, index) => ({
          index,
          text: task.text,
          stepCount: Array.isArray(task.steps) ? task.steps.length : 0,
          hasResult: Boolean(String(task.result || '').trim())
        }))
        .filter((task) => task.stepCount < 2 || !task.hasResult || GENERIC_PATTERN.test(task.text) || GENERIC_PATTERN.test(guidedTasks[task.index]?.result || '')),
      transferIncomplete: transferDrills
        .map((drill, index) => ({
          index,
          question: drill.question,
          answer: drill.answer || ''
        }))
        .filter((drill) => !/Prüfungsresultat/i.test(drill.answer) || GENERIC_PATTERN.test(drill.question) || GENERIC_PATTERN.test(drill.answer))
    },
    ui: {
      ...uiState,
      openedGuided,
      openedTransfer
    }
  };

  if ([
    'funktionen_gleichungen',
    'lineare_algebra_struktur',
    'analysis_ableitung_grundlagen',
    'lagrange',
    'integralrechnung'
  ].includes(conceptId)) {
    await page.screenshot({ path: `.qa/${conceptId}-aufgaben-solving-correctness-pass3.png`, fullPage: true });
  }
}

console.log(JSON.stringify(result, null, 2));
await browser.close();
