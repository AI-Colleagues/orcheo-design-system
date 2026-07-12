import React from "react";

const CSS = `
.orc-switch { display: inline-flex; align-items: center; gap: var(--space-2-5); font-family: var(--font-sans); cursor: pointer; user-select: none; }
.orc-switch[data-disabled="true"] { cursor: not-allowed; opacity: 0.5; }
.orc-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.orc-switch__track {
  width: 40px; height: 24px; flex: none;
  border-radius: var(--radius-pill);
  background: var(--ink-300);
  position: relative;
  transition: background var(--duration-base) var(--ease-standard);
}
.orc-switch__thumb {
  position: absolute; top: 3px; left: 3px;
  width: 18px; height: 18px;
  border-radius: var(--radius-pill);
  background: #fff;
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-base) var(--ease-emphasized);
}
.orc-switch input:checked + .orc-switch__track { background: var(--orange-500); }
.orc-switch input:checked + .orc-switch__track .orc-switch__thumb { transform: translateX(16px); }
.orc-switch input:focus-visible + .orc-switch__track { box-shadow: var(--ring-focus); }
.orc-switch__label { font-size: var(--text-base); color: var(--text-body); }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "switch");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Switch({ label, checked, defaultChecked, disabled, className = "", ...rest }) {
  useStyles();
  return (
    <label className={["orc-switch", className].filter(Boolean).join(" ")} data-disabled={disabled ? "true" : undefined}>
      <input type="checkbox" role="switch" checked={checked} defaultChecked={defaultChecked} disabled={disabled} {...rest} />
      <span className="orc-switch__track" aria-hidden="true"><span className="orc-switch__thumb" /></span>
      {label && <span className="orc-switch__label">{label}</span>}
    </label>
  );
}
