import React from "react";

const CSS = `
.orc-tooltip { position: relative; display: inline-flex; }
.orc-tooltip__bubble {
  position: absolute; z-index: var(--z-overlay);
  background: var(--ink-950); color: var(--ink-50);
  font-family: var(--font-sans); font-size: var(--text-xs); line-height: 1.4;
  padding: var(--space-2) var(--space-2-5); border-radius: var(--radius-sm);
  white-space: nowrap; box-shadow: var(--shadow-md);
  opacity: 0; transform: translateY(2px); pointer-events: none;
  transition: opacity var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard);
}
.orc-tooltip:hover .orc-tooltip__bubble, .orc-tooltip:focus-within .orc-tooltip__bubble { opacity: 1; transform: translateY(0); }
.orc-tooltip__bubble--top { bottom: 100%; left: 50%; transform: translateX(-50%) translateY(2px); margin-bottom: 6px; }
.orc-tooltip:hover .orc-tooltip__bubble--top, .orc-tooltip:focus-within .orc-tooltip__bubble--top { transform: translateX(-50%) translateY(0); }
.orc-tooltip__bubble--bottom { top: 100%; left: 50%; transform: translateX(-50%) translateY(-2px); margin-top: 6px; }
.orc-tooltip:hover .orc-tooltip__bubble--bottom, .orc-tooltip:focus-within .orc-tooltip__bubble--bottom { transform: translateX(-50%) translateY(0); }
.orc-tooltip__bubble--right { left: 100%; top: 50%; transform: translateY(-50%) translateX(-2px); margin-left: 6px; }
.orc-tooltip:hover .orc-tooltip__bubble--right, .orc-tooltip:focus-within .orc-tooltip__bubble--right { transform: translateY(-50%) translateX(0); }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "tooltip");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Tooltip({ label, side = "top", className = "", children, ...rest }) {
  useStyles();
  return (
    <span className={["orc-tooltip", className].filter(Boolean).join(" ")} {...rest}>
      {children}
      <span role="tooltip" className={`orc-tooltip__bubble orc-tooltip__bubble--${side}`}>{label}</span>
    </span>
  );
}
