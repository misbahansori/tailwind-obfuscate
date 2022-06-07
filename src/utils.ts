export function escapeClassName(className: string) {
  return className.replace(/[\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

export const cssPseudoSelector = [
  "active",
  "checked",
  "disabled",
  "empty",
  "enabled",
  "first-child",
  "first-of-type",
  "focus",
  "hover",
  "in-range",
  "invalid",
  "lang",
  "last-child",
  "last-of-type",
  "link",
  "not",
  "nth-child",
  "nth-last-child",
  "nth-last-of-type",
  "nth-of-type",
  "only-of-type",
  "only-child",
  "optional",
  "out-of-range",
  "read-only",
  "read-write",
  "required",
  "root",
  "target",
  "valid",
  "visited",
];

export const cssPseudoSelectorRegex = cssPseudoSelector.join("|");

export function removeCssPsuedoSelector(code: string) {
  return code.replace(
    new RegExp(`:(${cssPseudoSelectorRegex})[\(\\w\d\)]*`, "g"),
    ""
  );
}
