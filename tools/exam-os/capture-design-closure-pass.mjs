/**
 * Capture design closure pass screenshots for before/after audit comparison.
 * Run: node tools/exam-os/capture-design-closure-pass.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "../../tools/clickthrough/node_modules/playwright/index.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const outDir = path.join(repoRoot, "docs/audits/screenshots/design-closure-pass");
const baseUrl = process.env.PORTAL_BASE_URL || "http://127.0.0.1:4181";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const TARGETS = [
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "theorie", file: "statistik-deskriptiv-theorie-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "aufgaben", file: "statistik-deskriptiv-aufgaben-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "formeln", file: "statistik-deskriptiv-formeln-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "wahrscheinlichkeit", tab: "theorie", file: "statistik-wahrscheinlichkeit-theorie-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "wahrscheinlichkeit", tab: "aufgaben", file: "statistik-wahrscheinlichkeit-aufgaben-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "bivariat", tab: "graph", file: "statistik-bivariat-grafik-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "bivariat", tab: "r-anwendung", file: "statistik-bivariat-r-uebung-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "mikro1", consent: "mikro_consent_v1", concept: "cobbd", tab: "theorie", file: "mikro1-cobb-douglas-theorie-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: "mikro1", consent: "mikro_consent_v1", concept: "cobbd", tab: "aufgaben", file: "mikro1-cobb-douglas-aufgaben-desktop.png", viewport: { width: 1440, height: 2200 } },
  { module: null, consent: null, concept: null, tab: null, file: "landing-desktop.png", viewport: { width: 1440, height: 2200 }, landing: true },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "theorie", file: "statistik-deskriptiv-theorie-dark-desktop.png", viewport: { width: 1440, height: 2200 }, dark: true },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "formeln", file: "statistik-deskriptiv-formeln-dark-desktop.png", viewport: { width: 1440, height: 2200 }, dark: true },
  { module: "statistik", consent: "statistik_consent_v1", concept: "bivariat", tab: "graph", file: "statistik-bivariat-grafik-dark-desktop.png", viewport: { width: 1440, height: 2200 }, dark: true },
  { module: "mikro1", consent: "mikro_consent_v1", concept: "cobbd", tab: "aufgaben", file: "mikro1-cobb-douglas-aufgaben-dark-desktop.png", viewport: { width: 1440, height: 2200 }, dark: true },
  { module: null, consent: null, concept: null, tab: null, file: "landing-dark-desktop.png", viewport: { width: 1440, height: 2200 }, landing: true, dark: true },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "theorie", file: "statistik-deskriptiv-theorie-mobile-375.png", viewport: { width: 375, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "aufgaben", file: "statistik-deskriptiv-aufgaben-mobile-375.png", viewport: { width: 375, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "deskriptiv", tab: "formeln", file: "statistik-deskriptiv-formeln-mobile-375.png", viewport: { width: 375, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "wahrscheinlichkeit", tab: "theorie", file: "statistik-wahrscheinlichkeit-theorie-mobile-430.png", viewport: { width: 430, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "bivariat", tab: "graph", file: "statistik-bivariat-grafik-mobile-430.png", viewport: { width: 430, height: 2200 } },
  { module: "statistik", consent: "statistik_consent_v1", concept: "bivariat", tab: "r-anwendung", file: "statistik-bivariat-r-uebung-mobile-430.png", viewport: { width: 430, height: 2200 } },
  { module: "mikro1", consent: "mikro_consent_v1", concept: "cobbd", tab: "theorie", file: "mikro1-cobb-douglas-theorie-mobile-375.png", viewport: { width: 375, height: 2200 } },
  { module: null, consent: null, concept: null, tab: null, file: "landing-mobile-375.png", viewport: { width: 375, height: 2400 }, landing: true }
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
    if (target.consent) {
      await page.addInitScript((key) => localStorage.setItem(key, "1"), target.consent);
    }
    if (target.dark) {
      await page.addInitScript(() => {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.remove("light-mode");
        document.body?.classList.remove("light-mode");
      });
    }
    const url = target.landing
      ? `${baseUrl}/index.html`
      : `${baseUrl}/${target.module}/index.html?qa=1`;
    await page.goto(url, { waitUntil: "domcontentloaded" });
    if (!target.landing) {
      await waitForApp(page);
      await navigate(page, target.concept, target.tab);
    } else {
      await page.waitForTimeout(800);
    }
    await page.waitForTimeout(600);
    const outPath = path.join(outDir, target.file);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`screenshot: ${outPath}`);
    await page.close();
  }
  console.log("design-closure-pass screenshots: OK");
} finally {
  await browser.close();
}
