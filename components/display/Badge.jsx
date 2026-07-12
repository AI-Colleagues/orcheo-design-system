import React from "react";

const CSS = `
.orc-badge {
  display: inline-flex; align-items: center; gap: var(--space-1);
  font-family: var(--font-sans); font-weight: var(--weight-medium);
  font-size: var(--text-xs); line-height: 1;
  padding: 4px 8px; border-radius: var(--radius-pill);
  white-space: nowrap;
}
.orc-badge--solid { background: var(--orange-500); color: #fff; }
.orc-badge--neutral { background: var(--ink-100); color: var(--text-body); }
.orc-badge--success { background: var(--intent-success-bg); color: var(--green-600); }
.orc-badge--warning { background: var(--intent-warning-bg); color: var(--amber-600); }
.orc-badge--danger { background: var(--intent-danger-bg); color: var(--red-600); }
.orc-badge--info { background: var(--intent-info-bg); color: var(--blue-600); }
.orc-badge--brand-soft { background: var(--orange-50); color: var(--orange-700); }
.orc-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "badge");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Badge({ intent = "neutral", dot = false, className = "", children, ...rest }) {
  useStyles();
  const cls = ["orc-badge", `orc-badge--${intent}`, className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="orc-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
