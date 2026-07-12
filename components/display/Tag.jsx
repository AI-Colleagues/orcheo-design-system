import React from "react";

const CSS = `
.orc-tag {
  display: inline-flex; align-items: center; gap: var(--space-1-5);
  font-family: var(--font-mono); font-size: var(--text-xs);
  padding: 3px 8px; border-radius: var(--radius-sm);
  background: var(--surface-card); color: var(--text-body);
  border: 1px solid var(--border-default); line-height: 1.3;
}
.orc-tag--cream { background: var(--cream-100); border-color: var(--tan-300); color: var(--ink-800); }
.orc-tag__remove {
  display: inline-flex; cursor: pointer; color: var(--text-subtle);
  border: none; background: none; padding: 0; margin-left: 2px;
}
.orc-tag__remove:hover { color: var(--text-strong); }
.orc-tag__remove svg { width: 12px; height: 12px; }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "tag");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Tag({ variant = "default", onRemove, className = "", children, ...rest }) {
  useStyles();
  const cls = ["orc-tag", variant !== "default" ? `orc-tag--${variant}` : "", className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
      {onRemove && (
        <button type="button" className="orc-tag__remove" onClick={onRemove} aria-label="Remove">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </span>
  );
}
