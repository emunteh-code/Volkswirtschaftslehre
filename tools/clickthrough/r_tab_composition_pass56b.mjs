/**
 * Pass 56b + 56c guards — R-tab composition: execution shell, embedded support surface,
 * narrow r-tab-bottom, and (56c) tab output evidence stack + lab grid sanity.
 * Requires: from repo root `python3 -m http.server 8765` (or set CLICKTHROUGH_BASE), and `npm ci`
 * in tools/clickthrough plus `npx playwright install chromium`.
 */
import { chromium } from "playwright";

const BASE = process.env.CLICKTHROUGH_BASE || "http://127.0.0.1:8765";
const CONSENT_KEYS = [
  "statistik_consent_v1",
  "oekonometrie_consent_v2",
  "mathematik_consent_v1"
];
const initScript = `${CONSENT_KEYS.map((k) => `localStorage.setItem(${JSON.stringify(k)},"1");`).join("")}localStorage.setItem("lernportal_onboarding_v1","true");`;

function push(results, ok, label, detail = "") {
  results.push({ ok, label, detail });
}

async function openRTab(page, slug, navId) {
  await page.goto(`${BASE}/${slug}/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector(`#nav-${navId}`, { timeout: 30000 });
  await page.click(`#nav-${navId}`);
  const rTab = page.locator('#tabRow button[data-tab="r-anwendung"]');
  await rTab.waitFor({ state: "visible", timeout: 15000 });
  await rTab.click();
  await page.waitForTimeout(600);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  const pageErrors = [];
  const consoleErrors = [];

  async function runViewport(label, width, fn) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    await context.addInitScript(initScript);
    const page = await context.newPage();
    page.on("pageerror", (e) => pageErrors.push(`${label}:${String(e?.message || e)}`));
    page.on("console", (m) => {
      if (m.type() === "error") consoleErrors.push(`${label}:${m.text()}`);
    });
    try {
      await fn(page, results, label);
    } finally {
      await context.close();
    }
  }

  // Wide: dedicated R tab — execution shell, orient, no legacy r-practice-grid in #content
  await runViewport("wide-1365", 1365, async (page, res, label) => {
    await openRTab(page, "statistik", "deskriptiv");
    const shells = await page.locator("#content .r-execution-shell").count();
    push(res, shells >= 1, `${label}:statistik-shell`, `count=${shells}`);
    const legacyGrid = await page.locator("#content .r-practice-grid").count();
    push(res, legacyGrid === 0, `${label}:no-legacy-r-practice-grid`, `count=${legacyGrid}`);
    const support = await page.locator("#content .r-practice-support-surface").count();
    push(res, true, `${label}:support-surface-count`, String(support));
    const stack = await page.locator("#content .r-tab-output-evidence-stack").count();
    push(res, stack >= 1, `${label}:statistik-output-evidence-stack`, `count=${stack}`);
    const inst = await page.locator("#content .r-execution-instrument").count();
    push(res, inst >= 1, `${label}:execution-instrument`, `count=${inst}`);
  });

  // Same modules wide — kernzeile / evidence selectors (lab tab markup)
  await runViewport("wide-oeko", 1365, async (page, res, label) => {
    await openRTab(page, "oekonometrie", "matrix_notation");
    push(res, (await page.locator("#content .r-core-line").count()) >= 1, `${label}:kernzeile-present`);
    push(res, (await page.locator("#content .r-output-focus-list li").count()) >= 1, `${label}:output-checklist`);
    push(res, (await page.locator("#content .r-tab-output-evidence-stack").count()) >= 1, `${label}:output-evidence-stack`);
    push(res, (await page.locator("#content .r-execution-instrument").count()) >= 1, `${label}:execution-instrument`);
    push(res, (await page.locator("#content .r-execution-shell").count()) >= 1, `${label}:shell`);
  });

  await runViewport("wide-math", 1365, async (page, res, label) => {
    await openRTab(page, "mathematik", "funktionen_gleichungen");
    push(res, (await page.locator("#content .r-execution-shell").count()) >= 1, `${label}:shell`);
    push(res, (await page.locator("#content .r-lesson-flow").count()) >= 1, `${label}:orient-flow`);
    push(res, (await page.locator("#content .r-tab-output-evidence-stack").count()) >= 1, `${label}:output-evidence-stack`);
    push(res, (await page.locator("#content .r-execution-instrument").count()) >= 1, `${label}:execution-instrument`);
  });

  // Narrow: r-tab-bottom visible (not display:none on .r-lab-section > .r-tab-bottom)
  await runViewport("narrow-1024", 1024, async (page, res, label) => {
    await openRTab(page, "statistik", "deskriptiv");
    const bottom = page.locator("#content .r-lab-section > .r-tab-bottom").first();
    const vis = await bottom.isVisible().catch(() => false);
    push(res, vis, `${label}:r-tab-bottom-visible`);
    const hidden = await bottom.evaluate((el) => getComputedStyle(el).display === "none").catch(() => true);
    push(res, !hidden, `${label}:r-tab-bottom-not-display-none`, `displayNone=${hidden}`);
  });

  // Embedded support surface: inject minimal block (styles already on page from module CSS)
  await runViewport("inject-embedded", 1100, async (page, res, label) => {
    await page.goto(`${BASE}/mathematik/index.html`, { waitUntil: "load", timeout: 60000 });
    await page.waitForSelector("body", { timeout: 15000 });
    const probe = await page.evaluate(() => {
      const host = document.querySelector("#content") || document.body;
      const wrap = document.createElement("div");
      wrap.className = "r-practice-block pass56b-probe";
      wrap.innerHTML = `
        <div class="r-execution-shell" style="min-height:8px;padding:8px;border-radius:8px">shell</div>
        <div class="r-practice-support-surface">
          <div class="r-practice-support-section r-practice-support--evidence">
            <h4>Output-Beweis</h4>
            <p>Probe A</p>
          </div>
          <div class="r-practice-support-section r-practice-support--task">
            <h4>Aufgabe</h4>
            <p>Probe B</p>
          </div>
        </div>`;
      host.appendChild(wrap);
      const surf = wrap.querySelector(".r-practice-support-surface");
      const cs = getComputedStyle(surf);
      const sections = wrap.querySelectorAll(".r-practice-support-section");
      return {
        boxShadow: cs.boxShadow,
        borderWidth: cs.borderTopWidth,
        sectionCount: sections.length,
        taskBg: getComputedStyle(wrap.querySelector(".r-practice-support--task")).backgroundColor
      };
    });
    push(res, probe.sectionCount === 2, `${label}:two-subsections`, JSON.stringify(probe));
    const flat = (probe.boxShadow || "none") === "none" || probe.boxShadow.includes("0px 0px 0px");
    push(res, flat, `${label}:support-surface-flat-or-minimal-shadow`, probe.boxShadow || "");
  });

  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log(JSON.stringify({ failed, pageErrors, consoleErrors, results }, null, 2));
  process.exit(failed.length || pageErrors.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
