#!/usr/bin/env node
/**
 * Build a GitHub Pages deploy subset (excludes dev tooling, docs, QA artifacts).
 * Output: dist/
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "dist");

const TOP_LEVEL_ALLOW = new Set([
  "index.html",
  "LICENSE",
  "README.md",
  "assets",
  "mikro1",
  "mikro2",
  "makro1",
  "makro2",
  "statistik",
  "oekonometrie",
  "mathematik",
  "finanzwirtschaft",
  "jahresabschluss",
  "recht",
  "internationale-wirtschaftsbeziehungen",
  "r",
  "politisches-system-brd"
]);

const SKIP_DIR_NAMES = new Set([
  "node_modules",
  ".git",
  "dist",
  "tools",
  "docs",
  ".qa",
  ".cursor",
  ".claude",
  "source-materials",
  "coverage"
]);

function shouldSkipDir(name) {
  return SKIP_DIR_NAMES.has(name) || name.startsWith(".");
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      if (shouldSkipDir(entry)) continue;
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function rmrf(dir) {
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
}

rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });

for (const name of fs.readdirSync(ROOT)) {
  if (!TOP_LEVEL_ALLOW.has(name)) continue;
  const src = path.join(ROOT, name);
  if (!fs.existsSync(src)) continue;
  copyRecursive(src, path.join(OUT, name));
}

console.log(`Pages dist written to ${OUT}`);
