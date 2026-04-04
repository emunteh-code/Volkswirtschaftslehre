import { chromium } from "/tmp/pw-check/node_modules/playwright/index.mjs";

const base = process.env.PORTAL_BASE_URL || "http://127.0.0.1:4181";
const filterSlug = process.argv[2] || null;

const modules = [
  { slug: "mikro1", minNav: 30, expectHome: "Probeklausuren" },
  { slug: "makro2", minNav: 14 },
  { slug: "makro1", minNav: 11 },
  {
    slug: "statistik",
    minNav: 18,
    expectRBlocks: 4,
    expectExamCards: 3,
    graphChecks: [
      {
        titleFragment: "Konfidenzintervalle",
        tab: "graph",
        minInsightRows: 3,
        screenshot: ".qa/statistik-konfidenzintervalle.png"
      },
      {
        titleFragment: "Statistische Modellierung und Regression",
        tab: "graph",
        minInsightRows: 3,
        screenshot: ".qa/statistik-regression.png"
      }
    ]
  },
  { slug: "finanzwirtschaft", minNav: 13 },
  { slug: "jahresabschluss", minNav: 11 },
  { slug: "recht", minNav: 12 },
  { slug: "internationale-wirtschaftsbeziehungen", minNav: 12 },
  {
    slug: "mathematik",
    minNav: 20,
    expectExamCards: 3,
    graphChecks: [
      {
        titleFragment: "Funktionen und Gleichungen",
        tab: "graph",
        minInsightRows: 3,
        screenshot: ".qa/mathematik-funktionen.png"
      },
      {
        titleFragment: "Multivariate Optimierung und Lagrange",
        tab: "graph",
        minInsightRows: 3,
        screenshot: ".qa/mathematik-lagrange.png"
      }
    ]
  },
  { slug: "oekonometrie", minNav: 25 }
];
const selectedModules = filterSlug ? modules.filter((mod) => mod.slug === filterSlug) : modules;

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

for (const mod of selectedModules) {
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
    let examCardCount = 0;
    const graphChecks = [];

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

    if (mod.expectExamCards) {
      window.__renderHome?.();
      await sleep(1000);
      const examCard = Array.from(document.querySelectorAll("#content .home-action-card, #content .home-card"))
        .find((card) => /probeklausuren|vollklausuren|probeklausur/i.test(card.textContent || ""));
      examCard?.click();
      await sleep(1400);
      examCardCount = document.querySelectorAll("#content .home-action-card, .exam-card, .full-exam-card").length;
      window.__renderHome?.();
      await sleep(1000);
    }

    for (const check of mod.graphChecks || []) {
      const nav = Array.from(document.querySelectorAll("#navList .nav-item"))
        .find((item) => (item.textContent || "").toLowerCase().includes(check.titleFragment.toLowerCase()));
      if (!nav) {
        graphChecks.push({
          titleFragment: check.titleFragment,
          found: false,
          graphVisible: false,
          insightRows: 0
        });
        continue;
      }
      nav.click();
      await sleep(1200);
      const tab = Array.from(document.querySelectorAll(".tab-btn"))
        .find((btn) => btn.dataset.tab === check.tab);
      tab?.click();
      await sleep(1000);
      graphChecks.push({
        titleFragment: check.titleFragment,
        found: true,
        graphVisible: getComputedStyle(document.querySelector(".tab-btn[data-tab='graph']") || document.body).display !== "none",
        insightRows: document.querySelectorAll("#graph_info .graph-insight-row").length
      });
    }

    return {
      slug: mod.slug,
      navCount: navItems.length,
      homeCards: homeCards.length,
      jsError,
      rawLeak,
      homeHasMarker,
      firstConceptTitle,
      rBlockCount,
      examCardCount,
      graphChecks
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
  if (mod.expectExamCards && summary.examCardCount < mod.expectExamCards) {
    failures.push(`${mod.slug}: examCardCount ${summary.examCardCount} < ${mod.expectExamCards}`);
  }
  for (const graphCheck of summary.graphChecks || []) {
    if (!graphCheck.found) failures.push(`${mod.slug}: graph concept missing for ${graphCheck.titleFragment}`);
    if (graphCheck.found && !graphCheck.graphVisible) failures.push(`${mod.slug}: graph tab hidden for ${graphCheck.titleFragment}`);
    const config = mod.graphChecks?.find((entry) => entry.titleFragment === graphCheck.titleFragment);
    if (config?.minInsightRows && graphCheck.insightRows < config.minInsightRows) {
      failures.push(`${mod.slug}: graph insight rows ${graphCheck.insightRows} < ${config.minInsightRows} for ${graphCheck.titleFragment}`);
    }
  }

  if (filterSlug && mod.graphChecks?.length) {
    for (const graphCheck of mod.graphChecks) {
      const nav = Array.from(await page.$$("#navList .nav-item"));
      let target = null;
      for (const item of nav) {
        const text = await item.textContent();
        if ((text || "").toLowerCase().includes(graphCheck.titleFragment.toLowerCase())) {
          target = item;
          break;
        }
      }
      if (!target) continue;
      await target.evaluate((node) => node.click());
      await page.waitForTimeout(1200);
      await page.evaluate((tabName) => {
        document.querySelector(`.tab-btn[data-tab="${tabName}"]`)?.click();
      }, graphCheck.tab);
      await page.waitForTimeout(1000);
      if (graphCheck.screenshot) {
        await page.screenshot({
          path: graphCheck.screenshot,
          fullPage: true
        });
      }
    }
  }

  if (filterSlug) {
    await page.goto(`${base}/${mod.slug}/index.html?qa=1`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.querySelectorAll("#navList .nav-item").length > 0, { timeout: 15000 });
    await page.evaluate(() => window.__renderHome?.());
    await page.waitForFunction(() => document.querySelectorAll("#content .home-card").length > 0, { timeout: 15000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `.qa/${mod.slug}-home.png`, fullPage: true });
  }

  await page.close();
}

console.log(JSON.stringify({ summaries, failures }, null, 2));
await browser.close();
