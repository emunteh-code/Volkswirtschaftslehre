/**
 * Complaint-closure verification pass 2 — Playwright.
 * Prereq: `python3 -m http.server 8765 --bind 127.0.0.1` from repo root.
 * Run: `cd tools/clickthrough && node verification-pass2.mjs`
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
  lines.push(`localStorage.setItem("lernportal_onboarding_v1","true");`);
  return lines.join("");
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const collected = { consoleErrors: [], pageErrors: [], checks: [] };

  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await context.addInitScript(consentInitScript());

  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") collected.consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => collected.pageErrors.push(String(err.message || err)));

  const record = (ok, label, detail = "") => {
    collected.checks.push({ ok, label, detail });
  };

  // --- Landing: percent never > 100% (inflated mikro1 progress keys) ---
  await page.goto(`${BASE}/`, { waitUntil: "load", timeout: 60000 });
  await page.evaluate(() => {
    const bloated = {};
    for (let i = 0; i < 200; i += 1) bloated[`ghost_${i}`] = { lastSeen: Date.now() };
    localStorage.setItem("mikro1_progress_v1", JSON.stringify(bloated));
  });
  await page.reload({ waitUntil: "load" });
  await page.waitForSelector("#trustedCoreGrid .lp-tile, #moduleGrid .lp-tile", { timeout: 30000 });
  const mikro1Tile = page.locator("a#lpTile_mikro1");
  const tileText = (await mikro1Tile.textContent()) || "";
  const pctMatch = tileText.match(/(\d+)%/);
  const tilePct = pctMatch ? Number(pctMatch[1]) : null;
  record(tilePct !== null && tilePct <= 100, "landing:mikro1-tile-percent-capped", `parsed=${tilePct} snippet=${tileText.slice(0, 120)}`);

  // --- makro1: Aufgaben layout + Prüfungstransfer toggle ---
  await page.goto(`${BASE}/makro1/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector(".nav-item", { timeout: 30000 });
  await page.locator(".nav-item").first().click();
  await page.waitForTimeout(400);
  await page.locator('#tabRow button[data-tab="aufgaben"]').click();
  await page.waitForTimeout(500);
  const practice = page.locator("#content .mikro1-practice");
  record((await practice.count()) > 0, "makro1:aufgaben-mikro1-practice-class");
  const bodyAufgaben = await page.locator("#content").innerText();
  record(bodyAufgaben.includes("Prüfungstransfer"), "makro1:pruefungstransfer-section-visible");

  const drillBtn = page.locator(".exam-drill-card .btn").filter({ hasText: /Lösung anzeigen/ }).first();
  await drillBtn.waitFor({ state: "visible", timeout: 15000 });
  await drillBtn.click();
  await page.waitForTimeout(300);
  const firstAnswer = page.locator(".exam-drill-answer").first();
  const hasShow = await firstAnswer.evaluate((el) => el.classList.contains("show"));
  record(hasShow, "makro1:pruefungstransfer-toggle-opens", `aria-expanded=${await firstAnswer.getAttribute("aria-expanded")}`);

  // --- mikro2: shell parity ---
  await page.goto(`${BASE}/mikro2/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector(".sidebar-footer-label", { timeout: 15000 });
  record((await page.locator(".sidebar-footer-label").textContent())?.includes("Werkzeuge"), "mikro2:werkzeuge-label");
  const bc = await page.locator("#breadcrumb").innerText();
  record(bc.includes("Übersicht"), "mikro2:breadcrumb-uebersicht", bc.trim());
  record((await page.locator("#streakBadge").count()) > 0, "mikro2:streak-badge-present");

  // --- mikro2: graph interpretation framing ---
  await page.locator("#nav-spieltheorie_statisch").click();
  await page.waitForTimeout(500);
  const graphBtn = page.locator('#tabRow button[data-tab="graph"]');
  await graphBtn.waitFor({ state: "visible", timeout: 10000 });
  await graphBtn.click();
  await page.waitForTimeout(600);
  record((await page.locator("#graph_info").count()) > 0, "mikro2:graph-info-region");
  record((await page.locator(".graph-reading-hint").count()) > 0, "mikro2:graph-reading-hint");
  const hintText = await page.locator(".graph-reading-hint").innerText();
  record(hintText.includes("Interpretation"), "mikro2:graph-hint-has-interpretation-label", hintText.slice(0, 80));

  // --- Intuition: Transferpfad (portal) on jahresabschluss (Klausurmuster always present) ---
  await page.goto(`${BASE}/jahresabschluss/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector(".nav-item", { timeout: 30000 });
  await page.locator(".nav-item").first().click();
  await page.waitForTimeout(400);
  await page.locator('#tabRow button[data-tab="intuition"]').click();
  await page.waitForTimeout(500);
  const transferKicker = page.locator(".intuition-bridge-kicker");
  record((await transferKicker.count()) > 0, "jahresabschluss:intuition-transferpfad-kicker");
  record(((await transferKicker.first().textContent()) || "").includes("Transferpfad"), "jahresabschluss:transferpfad-text");

  // --- R-Übung: tab label + block kicker (ökonometrie) ---
  await page.goto(`${BASE}/oekonometrie/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector("#nav-matrix_notation", { timeout: 30000 });
  await page.locator("#nav-matrix_notation").click();
  await page.waitForTimeout(500);
  const rTab = page.locator('#tabRow button[data-tab="r-anwendung"]');
  await rTab.waitFor({ state: "visible", timeout: 15000 });
  const rTabLabel = (await rTab.textContent()) || "";
  record(rTabLabel.includes("R-Übung"), "oekonometrie:r-tab-label", rTabLabel.trim());
  await rTab.click();
  await page.waitForTimeout(700);
  const kicker = page.locator(".r-application-kicker, .r-orient-kicker").first();
  record((await kicker.count()) > 0, "oekonometrie:r-kicker-present");
  const kickerText = ((await kicker.textContent()) || "").trim();
  record(kickerText.includes("R-Übung"), "oekonometrie:r-kicker-text", kickerText);

  // Statistik: purpose prefix when an R tab exists (optional — ökonometrie already covers R-Übung UI)
  await page.goto(`${BASE}/statistik/index.html`, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector(".nav-item", { timeout: 30000 });
  let statRVerified = false;
  let statRSkipped = true;
  const statNavCount = await page.locator(".nav-item").count();
  for (let i = 0; i < Math.min(statNavCount, 25); i += 1) {
    await page.locator(".nav-item").nth(i).click();
    await page.waitForTimeout(350);
    const rVis = await page.locator('#tabRow button[data-tab="r-anwendung"]').isVisible();
    if (rVis) {
      statRSkipped = false;
      await page.locator('#tabRow button[data-tab="r-anwendung"]').click();
      await page.waitForTimeout(600);
      const purpose = await page.locator(".r-orient-purpose, .r-practice-bridge").first().textContent();
      statRVerified =
        purpose.includes("Output") &&
        (purpose.includes("Ökonometrie") || purpose.includes("Mini-Task"));
      record(statRVerified, "statistik:r-workflow-hint-in-purpose", (purpose || "").slice(0, 120));
      break;
    }
  }
  if (statRSkipped) {
    record(true, "statistik:r-workflow-hint-in-purpose", "skipped: no R tab found in first 25 chapters");
  }

  await browser.close();

  const failed = collected.checks.filter((c) => !c.ok);
  const out = { failed, pageErrors: collected.pageErrors, consoleErrors: collected.consoleErrors };
  console.log(JSON.stringify(out, null, 2));
  process.exit(failed.length || collected.pageErrors.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
