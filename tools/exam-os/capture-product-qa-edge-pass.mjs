/**
 * Capture product QA edge pass screenshots for audit comparison.
 * Run: node tools/exam-os/capture-product-qa-edge-pass.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "../../tools/clickthrough/node_modules/playwright/index.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const outDir = path.join(repoRoot, "docs/audits/screenshots/product-qa-edge-pass");
const baseUrl = process.env.PORTAL_BASE_URL || "http://127.0.0.1:4181";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const TARGETS = [
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "theorie", file: "statistik-deskriptiv-theorie-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "wahrscheinlichkeit", tab: "theorie", file: "statistik-wahrscheinlichkeit-theorie-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "formeln", file: "statistik-deskriptiv-formeln-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "bivariat", tab: "aufgaben", file: "statistik-bivariat-aufgaben-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "mikro1", consent: "mikro_consent_v1", concept: "cobbd", tab: "theorie", file: "mikro1-cobb-douglas-theorie-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "theorie", file: "statistik-deskriptiv-theorie-mobile-375.png", viewport: { width: 375, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "bivariat", tab: "graph", file: "statistik-bivariat-grafik-mobile-430.png", viewport: { width: 430, height: 2200 } }
];

async function waitForApp(page) {
  await page.waitForFunction(
    () => window.__jsLoaded && typeof window.__navigate === "function",
    { timeout: 25000 }
  );
}

async function navigate(page, conceptId, tab) {
  await page.evaluate((id) => window.__navigate(id), conceptId);
  await page.waitForTimeout(900);
  if (tab !== "theorie") {
    const btn = page.locator(`#tabRow [data-tab="${tab}"]`);
    if (await btn.count()) {
      await btn.click();
      await page.waitForTimeout(800);
    }
  }
}

fs.mkdirSync(outDir, { recursive: true });

const launchOpts = fs.existsSync(chromePath)
  ? { executablePath: chromePath, headless: true }
  : { headless: true };

const browser = await chromium.launch(launchOpts);

try {
  for (const target of TARGETS) {
    const page = await browser.newPage({ viewport: target.viewport });
    await page.addInitScript((key) => localStorage.setItem(key, "1"), target.consent);
    await page.goto(`${baseUrl}/${target.module}/index.html?qa=1`, { waitUntil: "domcontentloaded" });
    await waitForApp(page);
    await navigate(page, target.concept, target.tab);
    await page.waitForTimeout(600);
    const outPath = path.join(outDir, target.file);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`screenshot: ${outPath}`);
    await page.close();
  }
  console.log("product-qa-edge-pass screenshots: OK");
} finally {
  await browser.close();
}
