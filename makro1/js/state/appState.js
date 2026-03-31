// ============================================================
// APP STATE — Mikroökonomik I
// Central mutable state and event bus for the SPA
// ============================================================

/** @type {string|null} ID of currently viewed concept */
export let current = null;

/** @type {string} Active tab */
export let currentTab = 'theorie';

/** @type {number} Current answer streak */
export let streak = 0;

/** Set the current concept */
export function setCurrent(id) { current = id; }

/** Set the current tab */
export function setCurrentTab(tab) { currentTab = tab; }

/** Set streak */
export function setStreak(n) { streak = n; }

// Simple event bus
const _listeners = {};

/**
 * Subscribe to an app event.
 * @param {string} event
 * @param {Function} fn
 */
export function on(event, fn) {
  if (!_listeners[event]) _listeners[event] = [];
  _listeners[event].push(fn);
}

/**
 * Emit an app event.
 * @param {string} event
 * @param {*} data
 */
export function emit(event, data) {
  (_listeners[event] || []).forEach(fn => fn(data));
}
