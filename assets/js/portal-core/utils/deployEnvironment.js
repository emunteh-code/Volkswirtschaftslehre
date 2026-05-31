/**
 * Detect whether official PDFs under source-materials/ are reachable in this deploy.
 * GitHub Pages ships the static site without source-materials/ (.gitignore).
 */

const cachedProbes = new Map();

export function isPublicStaticDeploy() {
  if (typeof location === 'undefined') return false;
  const host = location.hostname.toLowerCase();
  return host.endsWith('github.io') || host.endsWith('githubpages.io');
}

/**
 * @param {string} [probePath='../source-materials/']
 * @returns {Promise<boolean>}
 */
export async function probeSourceMaterialsAvailable(probePath = '../source-materials/') {
  if (typeof fetch === 'undefined' || typeof location === 'undefined') return false;
  try {
    const url = new URL(probePath, location.href).href.split('#')[0];
    const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
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
export function getSourceMaterialsAvailability(probePath = '../source-materials/') {
  const key = String(probePath || '../source-materials/');
  if (cachedProbes.has(key)) return cachedProbes.get(key);
  const pending = probeSourceMaterialsAvailable(key).then((available) => {
    if (typeof window !== 'undefined' && /source-materials\/?$/.test(key.replace(/\\/g, '/'))) {
      window.__sourceMaterialsAvailable = available;
    }
    return available;
  });
  cachedProbes.set(key, pending);
  return pending;
}

export const SOURCE_PDF_WEB_UNAVAILABLE_MESSAGE =
  'Kurs-PDFs sind in dieser Online-Version nicht enthalten. Nutze deine offiziellen VL-Materialien oder einen lokalen Clone mit source-materials/. Die Zuordnung Konzept ↔ Quelle bleibt hier sichtbar.';

export const SOURCE_PDF_OPEN_DISABLED_LABEL = 'PDF nur lokal verfügbar';
