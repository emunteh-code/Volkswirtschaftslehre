#!/usr/bin/env node
/**
 * Post-build deploy smoke: verify portal-core assets exist in dist/ and return HTTP 200.
 * Optional live check: DEPLOY_BASE_URL=https://emunteh-code.github.io/Volkswirtschaftslehre npm run smoke:deploy
 */
import { spawn } from "child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const DIST = path.join(ROOT, "dist");
const PORT = Number(process.env.DEPLOY_SMOKE_PORT || 8911);
const LIVE_BASE = (process.env.DEPLOY_BASE_URL || "").replace(/\/$/, "");

const REQUIRED_ASSETS = [
  "assets/js/portal-core/utils/studentFacingText.js",
  "assets/js/portal-core/utils/masteryLabel.js",
  "assets/js/portal-core/utils/hashRouting.js",
  "assets/js/siteConfig.js",
  "assets/js/portal-core/app.js"
];

function runBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("node", ["tools/build-pages-dist.mjs"], {
      cwd: ROOT,
      stdio: "inherit"
    });
    child.on("error", reject);
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`build exit ${code}`))));
  });
}

function verifyDistFiles() {
  const missing = REQUIRED_ASSETS.filter((rel) => !fs.existsSync(path.join(DIST, rel)));
  if (missing.length) {
    console.error("deploy-smoke: missing files in dist/");
    for (const rel of missing) console.error(`  - ${rel}`);
    process.exitCode = 1;
    return false;
  }
  console.log(`deploy-smoke: ${REQUIRED_ASSETS.length} portal-core assets present in dist/`);
  return true;
}

async function waitForHttp(url, maxMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) return res.status;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Timeout waiting for ${url}`);
}

async function headCheck(base, rel) {
  const url = `${base}/${rel}`;
  const res = await fetch(url, { method: "HEAD" });
  if (!res.ok) {
    console.error(`deploy-smoke FAIL ${res.status} ${url}`);
    process.exitCode = 1;
    return false;
  }
  console.log(`deploy-smoke OK ${res.status} ${rel}`);
  return true;
}

async function smokeLocalDist() {
  const server = spawn(
    "python3",
    ["-m", "http.server", String(PORT), "--bind", "127.0.0.1", "--directory", DIST],
    { stdio: "ignore" }
  );
  const base = `http://127.0.0.1:${PORT}`;
  try {
    await waitForHttp(`${base}/index.html`);
    for (const rel of REQUIRED_ASSETS) {
      await headCheck(base, rel);
    }
  } finally {
    server.kill();
  }
}

async function smokeLive() {
  console.log(`deploy-smoke: live probe ${LIVE_BASE}`);
  for (const rel of REQUIRED_ASSETS) {
    await headCheck(LIVE_BASE, rel);
  }
}

await runBuild();
if (!verifyDistFiles()) process.exit(process.exitCode || 1);
await smokeLocalDist();
if (LIVE_BASE) await smokeLive();

if (process.exitCode) {
  console.error("deploy-smoke: one or more checks failed.");
} else {
  console.log("deploy-smoke: all checks passed.");
}
