/**
 * Unified file:// / module-load failure overlay for all curriculum modules.
 * portal-core/app.js sets window.__jsLoaded = true and hides #jsError on success.
 */
(function initJsErrorFallback() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  window.__jsLoaded = window.__jsLoaded ?? false;

  if (!document.getElementById('jsError')) {
    const overlay = document.createElement('div');
    overlay.id = 'jsError';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('inert', '');
    overlay.style.cssText =
      'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;align-items:center;justify-content:center;padding:20px;';
    overlay.innerHTML = `<div style="background:#16181c;border:1px solid #ff6b6b;border-radius:12px;padding:32px;max-width:500px;text-align:center;font-family:monospace;">
<p style="color:#ff6b6b;font-size:18px;margin-bottom:12px;">&#9888; JavaScript-Module konnten nicht geladen werden</p>
<p style="color:#7a7f8e;font-size:13px;margin-bottom:20px;">Diese Seite braucht eine lokale Vorschau oder einen kleinen Entwicklungsserver, damit die Module korrekt geladen werden.</p>
<p style="color:#e8eaf0;font-size:13px;margin-bottom:8px;"><strong>So starten:</strong></p>
<ol style="color:#7a7f8e;font-size:13px;text-align:left;margin-bottom:20px;line-height:1.8;">
<li>Projektordner in einer lokalen Vorschau oder Entwicklungsumgebung starten</li>
<li>Alternativ im Projektordner ausführen: <code style="color:#d4ff5c">python3 -m http.server 8080</code></li>
<li>Dann im Browser öffnen: <code style="color:#d4ff5c">http://localhost:8080</code></li>
</ol>
<p style="color:#7a7f8e;font-size:11px;">Auch jede andere lokale Preview-Lösung ist geeignet, solange die Seite nicht direkt als Datei geöffnet wird.</p>
</div>`;
    document.body.appendChild(overlay);
  }

  window.addEventListener('DOMContentLoaded', () => {
    const isFileProtocol = window.location.protocol === 'file:';
    const isHttpDeploy =
      window.location.protocol === 'https:' || window.location.protocol === 'http:';
    const delayMs = isFileProtocol ? 2500 : isHttpDeploy ? 10000 : 4000;
    window.setTimeout(() => {
      if (!window.__jsLoaded) {
        const el = document.getElementById('jsError');
        if (el) {
          el.style.display = 'flex';
          el.setAttribute('aria-hidden', 'false');
          el.removeAttribute('inert');
          el.setAttribute('role', 'alertdialog');
        }
      }
    }, delayMs);
  });
})();
