import { chromium } from "playwright";

const BASE = process.env.CLICKTHROUGH_BASE || "http://127.0.0.1:8765";
const CONSENT_KEYS = ["mikro_consent_v1","mikro2_consent_v1","makro1_consent_v1","makro2_consent_v1","oekonometrie_consent_v2","statistik_consent_v1","finanzwirtschaft_consent_v1","mathematik_consent_v1","jahresabschluss_consent_v1","recht_consent_v1","iwb_consent_v1"];

const initScript = `${CONSENT_KEYS.map(k=>`localStorage.setItem(${JSON.stringify(k)},"1");`).join("")}localStorage.setItem("lernportal_onboarding_v1","true");`;

function push(results, ok, label, detail="") { results.push({ok,label,detail}); }

async function checkModule(page, results, path, navId) {
  await page.goto(`${BASE}/${path}/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector(`#nav-${navId}`, { timeout: 30000 });
  await page.click(`#nav-${navId}`);
  await page.waitForTimeout(400);
  const rTab = page.locator('#tabRow button[data-tab="r-anwendung"]');
  await rTab.waitFor({ state: "visible", timeout: 12000 });
  await rTab.click();
  await page.waitForTimeout(600);

  push(results, await page.locator('.r-goal-panel').count() > 0, `${path}:lernziel-block`);
  push(results, await page.locator('.r-map-panel .r-map-row').count() > 0, `${path}:math-code-map`);
  push(results, await page.locator('.r-core-line').count() > 0, `${path}:core-line`);
  push(results, await page.locator('.r-output-proof').count() > 0, `${path}:output-proof`);
  push(results, await page.locator('.r-transfer-prompt').count() > 0, `${path}:mini-transfer`);
  push(results, await page.locator('.r-solution-loop').count() > 0, `${path}:solution-loop`);

  const runBtn = page.locator('[data-r-action="run"]').first();
  const enabled = await runBtn.isEnabled();
  if (enabled) {
    await runBtn.click();
    await page.waitForTimeout(2500);
    const outText = await page.locator('[data-r-output]').first().innerText();
    push(results, outText.trim().length > 20, `${path}:runtime-or-output-nonempty`, outText.slice(0,120));
  } else {
    push(results, true, `${path}:guided-mode-run-disabled`);
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1365, height: 920 } });
  await context.addInitScript(initScript);
  const page = await context.newPage();
  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', e => pageErrors.push(String(e?.message || e)));
  page.on('console', m => { if (m.type()==='error') consoleErrors.push(m.text()); });

  const results = [];
  await checkModule(page, results, 'oekonometrie', 'matrix_notation');
  await checkModule(page, results, 'statistik', 'deskriptiv');
  await checkModule(page, results, 'mathematik', 'funktionen_gleichungen');

  await browser.close();
  const failed = results.filter(r=>!r.ok);
  console.log(JSON.stringify({failed, pageErrors, consoleErrors}, null, 2));
  process.exit(failed.length || pageErrors.length ? 1 : 0);
}

main().catch((e)=>{ console.error(e); process.exit(1); });
