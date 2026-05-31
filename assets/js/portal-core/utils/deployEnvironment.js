/**
 * Detect whether official PDFs under source-materials/ are reachable in this deploy.
 * GitHub Pages ships the static site without source-materials/ (.gitignore).
 */

import { SITE_CONFIG } from "../../siteConfig.js";

const cachedProbes = new Map();

export function isPublicStaticDeploy() {
  if (typeof location === "undefined") return false;
  const host = location.hostname.toLowerCase();
  return host.endsWith("github.io") || host.endsWith("githubpages.io");
}

/**
 * @param {string} [probePath='../source-materials/']
 * @returns {Promise<boolean>}
 */
export async function probeSourceMaterialsAvailable(probePath = "../source-materials/") {
  if (typeof fetch === "undefined" || typeof location === "undefined") return false;
  try {
    const url = new URL(probePath, location.href).href.split("#")[0];
    const response = await fetch(url, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Cached probe per path for module lifetime.
 * @param {string} [probePath]
 * @returns {Promise<boolean>}
 */
export function getSourceMaterialsAvailability(probePath = "../source-materials/") {
  const key = String(probePath || "../source-materials/");
  if (cachedProbes.has(key)) return cachedProbes.get(key);
  const pending = probeSourceMaterialsAvailable(key).then((available) => {
    if (typeof window !== "undefined" && /source-materials\/?$/.test(key.replace(/\\/g, "/"))) {
      window.__sourceMaterialsAvailable = available;
    }
    return available;
  });
  cachedProbes.set(key, pending);
  return pending;
}

/** Set pessimistic default on public deploy before async probe completes. */
export function primeSourceMaterialsAvailability(probePath = "../source-materials/") {
  if (typeof window === "undefined") return;
  if (isPublicStaticDeploy()) {
    window.__sourceMaterialsAvailable = false;
  }
  void getSourceMaterialsAvailability(probePath);
}

export function sourcePdfOpenDisabledByDefault() {
  if (typeof window === "undefined") return false;
  if (window.__sourceMaterialsAvailable === false) return true;
  return window.__sourceMaterialsAvailable == null && isPublicStaticDeploy();
}

export const SOURCE_PDF_OPEN_DISABLED_LABEL = "PDF nur lokal verfügbar";

export const OFFICIAL_PDF_STUDENT_MESSAGE =
  "Offizielle PDFs: ILIAS / Vorlesungsordner (nicht in dieser Web-Version). Die Zuordnung Konzept ↔ Quelle bleibt hier sichtbar.";

/** @deprecated Use OFFICIAL_PDF_STUDENT_MESSAGE */
export const SOURCE_PDF_WEB_UNAVAILABLE_MESSAGE = OFFICIAL_PDF_STUDENT_MESSAGE;

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Optional ILIAS link when configured in siteConfig (no placeholder URLs).
 * @returns {string}
 */
export function renderOfficialMaterialsIliasLinkHtml() {
  const url = SITE_CONFIG?.officialMaterialsUrl;
  if (!url || typeof url !== "string") return "";
  const safe = escapeHtml(url);
  return `<p class="official-materials-ilias-link"><a class="official-materials-ilias-btn" href="${safe}" target="_blank" rel="noopener noreferrer">Kursmaterialien in ILIAS öffnen</a></p>`;
}

/**
 * Upfront student-facing notice (Quellen tab, module home, companion).
 * @param {{ compact?: boolean }} [opts]
 * @returns {string}
 */
export function renderOfficialMaterialsNoticeHtml({ compact = false } = {}) {
  const ilias = renderOfficialMaterialsIliasLinkHtml();
  const body = escapeHtml(OFFICIAL_PDF_STUDENT_MESSAGE);
  if (compact) {
    return `<p class="official-materials-notice official-materials-notice--compact" role="note">${body}${ilias}</p>`;
  }
  return `<aside class="official-materials-notice" role="note">
<strong>Offizielle Vorlesungs-PDFs</strong>
<p>${body}</p>
${ilias}
</aside>`;
}
