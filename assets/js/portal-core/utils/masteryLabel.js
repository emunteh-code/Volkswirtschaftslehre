/**
 * @param {unknown} item
 * @returns {string}
 */
export function getMasteryItemLabel(item) {
  if (typeof item === "string") return item;
  if (item && typeof item === "object") {
    return String(item.label ?? item.text ?? item.title ?? "").trim();
  }
  return String(item ?? "").trim();
}
