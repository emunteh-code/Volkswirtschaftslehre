/**
 * Release click-through pass 1 (Playwright).
 * Prereq: from repo root, `python3 -m http.server 8765 --bind 127.0.0.1`
 * Run: `cd tools/clickthrough && npm install && npx playwright install chromium && node audit-pass1.mjs`
 */
import { chromium } from "playwright";

const BASE = process.env.CLICKTHROUGH_BASE || "http://127.0.0.1:8765";

const CONSENT_KEYS = [
  "mikro_consent_v1",
  "mikro2_consent_v1",
  "makro1_consent_v1",
  "makro2_consent_v1",
  "oekonometrie_consent_v2",
  "statistik_consent_v1",
  "finanzwirtschaft_consent_v1",
  "mathematik_consent_v1",
  "jahresabschluss_consent_v1",
  "recht_consent_v1",
  "iwb_consent_v1"
];

function consentInitScript() {
  const lines = CONSENT_KEYS.map((k) => `localStorage.setItem(${JSON.stringify(k)},"1");`);
  // Landing `showOnboarding()` blocks tile clicks until dismissed.
  lines.push(`localStorage.setItem("lernportal_onboarding_v1","true");`);
  return `${lines.join("")}`;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const collected = { consoleErrors: [], pageErrors: [], checks: [] };

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  await context.addInitScript(consentInitScript());

  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") collected.consoleErrors.push(`[console] ${msg.text()}`);
  });
  page.on("pageerror", (err) => {
    collected.pageErrors.push(String(err.message || err));
  });

  const record = (ok, label, detail = "") => {
    collected.checks.push({ ok, label, detail });
  };

  // --- Landing ---
  await page.goto(`${BASE}/`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector("#moduleGrid .lp-tile", { timeout: 30000 });
  const landingTitle = await page.title();
  record(landingTitle.includes("VWL"), "landing:title", landingTitle);
  const tileCount = await page.locator("#moduleGrid .lp-tile").count();
  record(tileCount >= 10, "landing:module-tiles", `count=${tileCount}`);

  // --- Mikro I: tile → module ---
  await page.click("a#lpTile_mikro1");
  await page.waitForURL("**/mikro1/**", { timeout: 30000 });
  await page.waitForSelector(".nav-item", { timeout: 30000 });
  record((await page.title()).includes("Mikro"), "mikro1:loaded", await page.title());

  await page.locator(".nav-item").first().click();
  await page.waitForTimeout(400);
  const theoryTab = page.locator('#tabRow button[data-tab="theorie"]');
  record(await theoryTab.evaluate((el) => el.classList.contains("active")), "mikro1:first-chapter-theorie-active");

  for (const tab of ["aufgaben", "formeln", "intuition"]) {
    const btn = page.locator(`#tabRow button[data-tab="${tab}"]`);
    await btn.click();
    await page.waitForTimeout(250);
    const active = await btn.evaluate((el) => el.classList.contains("active"));
    record(active, `mikro1:tab-${tab}-active`);
  }

  const graphBtn = page.locator('#tabRow button[data-tab="graph"]');
  const graphVisible = await graphBtn.isVisible();
  if (graphVisible) {
    await graphBtn.click();
    await page.waitForTimeout(400);
    record(await graphBtn.evaluate((el) => el.classList.contains("active")), "mikro1:tab-graph-active");
  } else {
    record(true, "mikro1:tab-graph-skipped", "Grafik tab not visible for first chapter (expected for some concepts)");
  }

  // Prüfung / exam drill tab if present
  const pruefBtn = page.locator('#tabRow button[data-tab="pruefung"]');
  if (await pruefBtn.count()) {
    const vis = await pruefBtn.isVisible();
    if (vis) {
      await pruefBtn.click();
      await page.waitForTimeout(300);
      record(await pruefBtn.evaluate((el) => el.classList.contains("active")), "mikro1:tab-pruefung-active");
    }
  }

  // Dashboard + mistake review
  await page.locator("button.sidebar-footer-btn", { hasText: "Dashboard" }).click();
  await page.waitForTimeout(500);
  record((await page.locator("#content").innerText()).includes("Lern-Dashboard"), "mikro1:dashboard-text");

  await page.locator("button", { hasText: "Fehlerprotokoll anzeigen" }).click();
  await page.waitForTimeout(500);
  const mr = page.locator(".mistake-review");
  record((await mr.count()) > 0, "mikro1:mistake-review-mounted");

  await page.locator("button.breadcrumb-link", { hasText: "Übersicht" }).first().click();
  await page.waitForTimeout(600);
  record(
    (await page.locator("#content").innerText()).includes("zentralen Konzepte"),
    "mikro1:home-after-breadcrumb"
  );

  // Probeklausuren + open first exam (portal card uses inline __showFullExamSelect)
  await page.locator('.home-action-card[onclick*="__showFullExamSelect"]').click();
  await page.waitForTimeout(500);
  const examH2 = page.locator("#content h2").first();
  const h2Text = (await examH2.textContent()) || "";
  record(!h2Text.includes("undefined") && h2Text.length > 3, "mikro1:exam-selector-heading", h2Text.trim());

  await page.locator("#content .home-action-card").first().click();
  await page.waitForTimeout(800);
  const examBody = await page.locator("#content").innerText();
  record(examBody.length > 200, "mikro1:full-exam-opened", `chars=${examBody.length}`);

  // --- Mikro II: direct URL (student bookmark path) ---
  await page.goto(`${BASE}/mikro2/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector(".nav-item", { timeout: 30000 });
  await page.evaluate(() => window.__renderHome?.());
  await page.waitForTimeout(600);
  await page.locator('.home-action-card[onclick*="__showFullExamSelect"]').click();
  await page.waitForTimeout(500);
  const m2h2 = ((await page.locator("#content h2").first().textContent()) || "").trim();
  record(m2h2.includes("Probeklausuren") && !m2h2.includes("undefined"), "mikro2:exam-selector-heading", m2h2);

  await page.locator("#content .home-action-card").first().click();
  await page.waitForTimeout(800);
  const m2exam = await page.locator("#content").innerText();
  record(m2exam.length > 150, "mikro2:full-exam-opened", `chars=${m2exam.length}`);

  // --- Ökonometrie: R-Anwendung tab ---
  await page.goto(`${BASE}/oekonometrie/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector("#nav-matrix_notation, .nav-item", { timeout: 30000 });
  await page.locator("#nav-matrix_notation").click();
  await page.waitForTimeout(500);
  const rTab = page.locator('#tabRow button[data-tab="r-anwendung"]');
  await rTab.waitFor({ state: "visible", timeout: 15000 });
  await rTab.click();
  await page.waitForTimeout(600);
  const rActive = await rTab.evaluate((el) => el.classList.contains("active"));
  record(rActive, "oekonometrie:r-tab-active");
  const rText = await page.locator("#content").innerText();
  record(rText.includes("R") || rText.includes("lm"), "oekonometrie:r-tab-body-nonempty", `chars=${rText.length}`);

  // --- Statistik: smoke (tabs, no R tab requirement) ---
  await page.goto(`${BASE}/statistik/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector(".nav-item", { timeout: 30000 });
  await page.locator(".nav-item").first().click();
  await page.waitForTimeout(400);
  for (const tab of ["theorie", "aufgaben", "formeln", "intuition"]) {
    const b = page.locator(`#tabRow button[data-tab="${tab}"]`);
    await b.click();
    await page.waitForTimeout(200);
    record(await b.evaluate((el) => el.classList.contains("active")), `statistik:tab-${tab}`);
  }

  await browser.close();

  const failed = collected.checks.filter((c) => !c.ok);
  console.log(JSON.stringify({ failed, pageErrors: collected.pageErrors, consoleErrors: collected.consoleErrors }, null, 2));
  process.exit(failed.length || collected.pageErrors.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
