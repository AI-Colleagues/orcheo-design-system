import React from "react";

const CSS = `
.orc-checkbox { display: inline-flex; align-items: flex-start; gap: var(--space-2); font-family: var(--font-sans); cursor: pointer; user-select: none; }
.orc-checkbox[data-disabled="true"] { cursor: not-allowed; opacity: 0.5; }
.orc-checkbox__box {
  width: 18px; height: 18px; flex: none; margin-top: 1px;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius-xs);
  background: var(--surface-card);
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff;
  transition: background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard);
}
.orc-checkbox input { position: absolute; opacity: 0; width: 0; height: 0; }
.orc-checkbox input:checked + .orc-checkbox__box { background: var(--orange-500); border-color: var(--orange-500); }
.orc-checkbox input:focus-visible + .orc-checkbox__box { box-shadow: var(--ring-focus); }
.orc-checkbox__box svg { width: 13px; height: 13px; opacity: 0; transition: opacity var(--duration-fast) var(--ease-standard); }
.orc-checkbox input:checked + .orc-checkbox__box svg { opacity: 1; }
.orc-checkbox__label { font-size: var(--text-base); color: var(--text-body); line-height: 1.3; }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "checkbox");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Checkbox({ label, checked, defaultChecked, disabled, className = "", ...rest }) {
  useStyles();
  return (
    <label className={["orc-checkbox", className].filter(Boolean).join(" ")} data-disabled={disabled ? "true" : undefined}>
      <input type="checkbox" checked={checked} defaultChecked={defaultChecked} disabled={disabled} {...rest} />
      <span className="orc-checkbox__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      {label && <span className="orc-checkbox__label">{label}</span>}
    </label>
  );
}
