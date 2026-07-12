import React from "react";

const CSS = `
.orc-selectwrap { position: relative; display: inline-flex; width: 100%; }
.orc-select {
  appearance: none; -webkit-appearance: none;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--text-strong);
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  height: 40px;
  padding: 0 38px 0 var(--space-3);
  width: 100%;
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.orc-select:hover { border-color: var(--border-strong); }
.orc-select:focus { outline: none; border-color: var(--border-brand); box-shadow: var(--ring-focus); }
.orc-select[disabled] { background: var(--ink-100); color: var(--text-subtle); cursor: not-allowed; }
.orc-selectwrap__chevron {
  position: absolute; right: var(--space-3); top: 50%; transform: translateY(-50%);
  pointer-events: none; color: var(--text-muted); display: inline-flex;
}
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "select");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Select({ label, hint, error, options = [], id, className = "", children, ...rest }) {
  useStyles();
  const fieldId = id || (label ? "orc-sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const control = (
    <div className="orc-selectwrap">
      <select id={fieldId} className={["orc-select", className].filter(Boolean).join(" ")} {...rest}>
        {children || options.map((o) => {
          const opt = typeof o === "string" ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      <span className="orc-selectwrap__chevron" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </span>
    </div>
  );
  if (!label && !hint && !error) return control;
  return (
    <div className="orc-field">
      {label && <label className="orc-field__label" htmlFor={fieldId}>{label}</label>}
      {control}
      {(error || hint) && <span className={"orc-field__hint" + (error ? " orc-field__hint--error" : "")}>{error || hint}</span>}
    </div>
  );
}
