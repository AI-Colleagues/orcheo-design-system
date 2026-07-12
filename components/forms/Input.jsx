import React from "react";

const CSS = `
.orc-field { display: flex; flex-direction: column; gap: var(--space-1-5); font-family: var(--font-sans); }
.orc-field__label { font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--text-strong); }
.orc-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.orc-field__hint--error { color: var(--intent-danger); }
.orc-input {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--text-strong);
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  height: 40px;
  padding: 0 var(--space-3);
  width: 100%;
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.orc-input::placeholder { color: var(--text-subtle); }
.orc-input:hover { border-color: var(--border-strong); }
.orc-input:focus { outline: none; border-color: var(--border-brand); box-shadow: var(--ring-focus); }
.orc-input[disabled] { background: var(--ink-100); color: var(--text-subtle); cursor: not-allowed; }
.orc-input--error { border-color: var(--intent-danger); }
.orc-input--error:focus { box-shadow: 0 0 0 3px rgba(206,63,38,.35); }
.orc-input--mono { font-family: var(--font-mono); font-size: var(--text-sm); }
.orc-inputwrap { position: relative; display: flex; align-items: center; }
.orc-inputwrap__icon { position: absolute; left: var(--space-3); display: inline-flex; color: var(--text-subtle); pointer-events: none; }
.orc-inputwrap__icon svg { width: 18px; height: 18px; }
.orc-inputwrap--hasicon .orc-input { padding-left: 38px; }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "input");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Input({
  label,
  hint,
  error,
  mono = false,
  icon = null,
  id,
  className = "",
  ...rest
}) {
  useStyles();
  const fieldId = id || (label ? "orc-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const inputCls = ["orc-input", error ? "orc-input--error" : "", mono ? "orc-input--mono" : "", className].filter(Boolean).join(" ");
  const input = (
    <input id={fieldId} className={inputCls} aria-invalid={!!error} {...rest} />
  );
  const control = icon ? (
    <div className="orc-inputwrap orc-inputwrap--hasicon">
      <span className="orc-inputwrap__icon">{icon}</span>
      {input}
    </div>
  ) : input;

  if (!label && !hint && !error) return control;
  return (
    <div className="orc-field">
      {label && <label className="orc-field__label" htmlFor={fieldId}>{label}</label>}
      {control}
      {(error || hint) && (
        <span className={"orc-field__hint" + (error ? " orc-field__hint--error" : "")}>{error || hint}</span>
      )}
    </div>
  );
}
