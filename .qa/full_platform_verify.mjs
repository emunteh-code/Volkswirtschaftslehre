import { chromium } from "/tmp/pw-check/node_modules/playwright/index.mjs";

const base = "http://127.0.0.1:4179";

const modules = [
  { slug: "mikro1", minNav: 30, expectHome: "Probeklausuren" },
  { slug: "makro2", minNav: 14 },
  { slug: "makro1", minNav: 11 },
  { slug: "statistik", minNav: 18, expectRBlocks: 4 },
  { slug: "finanzwirtschaft", minNav: 16 },
  { slug: "jahresabschluss", minNav: 14 },
  { slug: "recht", minNav: 15 },
  { slug: "internationale-wirtschaftsbeziehungen", minNav: 15 },
  { slug: "mathematik", minNav: 20 },
  { slug: "oekonometrie", minNav: 25 }
];

const consentKeys = [
  "mikro_consent_v1",
  "makro1_consent_v1",
  "makro2_consent_v1",
  "statistik_consent_v1",
  "finanzwirtschaft_consent_v1",
  "jahresabschluss_consent_v1",
  "recht_consent_v1",
  "internationale-wirtschaftsbeziehungen_consent_v1",
  "mathematik_consent_v1",
  "oekonometrie_consent_v1"
];

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
});

const failures = [];
const summaries = [];

for (const mod of modules) {
  console.log(`CHECK ${mod.slug}`);
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });
  await page.addInitScript((keys) => {
    keys.forEach((key) => localStorage.setItem(key, "1"));
  }, consentKeys);
  try {
    await page.goto(`${base}/${mod.slug}/index.html?qa=1`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => {
      return document.querySelectorAll("#navList .nav-item").length > 0
        || document.querySelectorAll("#content .home-card").length > 0
        || /Kein generiertes Portal|JavaScript-Module konnten nicht geladen werden/.test(document.body.innerText || "");
    }, { timeout: 15000 });
    await page.waitForTimeout(1000);
  } catch (error) {
    failures.push(`${mod.slug}: wait failure ${error.name}`);
    summaries.push({
      slug: mod.slug,
      navCount: 0,
      homeCards: 0,
      jsError: true,
      rawLeak: false,
      homeHasMarker: false,
      firstConceptTitle: "",
      rBlockCount: 0
    });
    await page.close();
    continue;
  }
  const summary = await page.evaluate(async (mod) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const bodyText = document.body.innerText || "";
    const navItems = Array.from(document.querySelectorAll("#navList .nav-item"));
    const homeCards = Array.from(document.querySelectorAll("#content .home-card"));
    const rawLeak = /\$\$|&gt;|&lt;|&amp;|<\s*span|spanclass/i.test(bodyText);
    const jsError = bodyText.includes("Kein generiertes Portal") || bodyText.includes("JavaScript-Module konnten nicht geladen werden");
    const homeHasMarker = mod.expectHome ? bodyText.includes(mod.expectHome) : true;
    let firstConceptTitle = "";
    let rBlockCount = 0;

    const firstNav = navItems[0];
    if (firstNav) {
      firstNav.click();
      await sleep(1200);
      firstConceptTitle = document.querySelector("#content h1")?.textContent?.trim() || "";
    }

    if (mod.expectRBlocks) {
      const rLabCard = Array.from(document.querySelectorAll("#content .home-card"))
        .find((card) => /r-lab praxis|r-statistik praxis/i.test(card.textContent || ""));
      if (rLabCard) {
        rLabCard.click();
      } else {
        const rNav = Array.from(document.querySelectorAll("#navList .nav-item"))
          .find((item) => /r-lab praxis|r-statistik praxis/i.test(item.textContent || ""));
        rNav?.click();
      }
      await sleep(1800);
      rBlockCount = document.querySelectorAll(".r-practice-block").length;
    }

    return {
      slug: mod.slug,
      navCount: navItems.length,
      homeCards: homeCards.length,
      jsError,
      rawLeak,
      homeHasMarker,
      firstConceptTitle,
      rBlockCount
    };
  }, mod);

  summaries.push(summary);

  if (summary.jsError) failures.push(`${mod.slug}: js/module error visible`);
  if (summary.rawLeak) failures.push(`${mod.slug}: raw leak visible`);
  if (summary.navCount < mod.minNav) failures.push(`${mod.slug}: navCount ${summary.navCount} < ${mod.minNav}`);
  if (!summary.homeHasMarker) failures.push(`${mod.slug}: expected home marker missing`);
  if (mod.expectRBlocks && summary.rBlockCount < mod.expectRBlocks) {
    failures.push(`${mod.slug}: rBlockCount ${summary.rBlockCount} < ${mod.expectRBlocks}`);
  }

  await page.close();
}

console.log(JSON.stringify({ summaries, failures }, null, 2));
await browser.close();
