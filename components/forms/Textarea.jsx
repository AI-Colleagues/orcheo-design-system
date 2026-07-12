import React from "react";

const CSS = `
.orc-textarea {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--text-strong);
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-2-5) var(--space-3);
  width: 100%;
  min-height: 88px;
  resize: vertical;
  line-height: var(--leading-normal);
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.orc-textarea::placeholder { color: var(--text-subtle); }
.orc-textarea:hover { border-color: var(--border-strong); }
.orc-textarea:focus { outline: none; border-color: var(--border-brand); box-shadow: var(--ring-focus); }
.orc-textarea[disabled] { background: var(--ink-100); color: var(--text-subtle); cursor: not-allowed; }
.orc-textarea--mono { font-family: var(--font-mono); font-size: var(--text-sm); }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "textarea");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Textarea({ label, hint, error, mono = false, id, className = "", ...rest }) {
  useStyles();
  const fieldId = id || (label ? "orc-ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const cls = ["orc-textarea", mono ? "orc-textarea--mono" : "", className].filter(Boolean).join(" ");
  const ta = <textarea id={fieldId} className={cls} aria-invalid={!!error} {...rest} />;
  if (!label && !hint && !error) return ta;
  return (
    <div className="orc-field">
      {label && <label className="orc-field__label" htmlFor={fieldId}>{label}</label>}
      {ta}
      {(error || hint) && <span className={"orc-field__hint" + (error ? " orc-field__hint--error" : "")}>{error || hint}</span>}
    </div>
  );
}
