// ============================================================
// TOAST NOTIFICATION SYSTEM — Mikroökonomik I
// ============================================================

/**
 * Show a toast notification.
 * @param {string} message - The notification text
 * @param {'info'|'success'|'error'|'warn'} type - Visual style
 */
export function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast-notif ${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('dismissing');
    setTimeout(() => toast.remove(), 320);
  }, 3000);
}
