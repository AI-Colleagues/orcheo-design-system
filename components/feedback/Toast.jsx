import React from "react";

const CSS = `
.orc-toast {
  display: flex; align-items: flex-start; gap: var(--space-3);
  background: var(--ink-950); color: var(--ink-50);
  font-family: var(--font-sans); font-size: var(--text-sm);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
  min-width: 280px; max-width: 420px;
  border-left: 3px solid var(--orange-500);
  animation: orc-toast-in var(--duration-base) var(--ease-emphasized);
}
.orc-toast--success { border-left-color: var(--intent-success); }
.orc-toast--warning { border-left-color: var(--intent-warning); }
.orc-toast--danger { border-left-color: var(--intent-danger); }
.orc-toast__icon { flex: none; margin-top: 1px; }
.orc-toast__icon svg { width: 18px; height: 18px; }
.orc-toast--success .orc-toast__icon { color: #7fd6a6; }
.orc-toast--warning .orc-toast__icon { color: #f0cd7a; }
.orc-toast--danger .orc-toast__icon { color: #f0a08e; }
.orc-toast--info .orc-toast__icon { color: var(--orange-400); }
.orc-toast__text { flex: 1; min-width: 0; }
.orc-toast__title { font-weight: var(--weight-medium); color: #fff; }
.orc-toast__desc { color: var(--ink-300); margin-top: 1px; }
.orc-toast__close { appearance: none; background: none; border: none; cursor: pointer; color: var(--ink-400); padding: 0; display: inline-flex; }
.orc-toast__close:hover { color: #fff; }
.orc-toaster { position: fixed; bottom: var(--space-6); right: var(--space-6); z-index: var(--z-toast); display: flex; flex-direction: column; gap: var(--space-3); }
@keyframes orc-toast-in { from { opacity: 0; transform: translateY(8px); } }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "toast");
  el.textContent = CSS;
  document.head.appendChild(el);
}

const ICONS = {
  success: <path d="M20 6 9 17l-5-5" />,
  warning: <><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></>,
  danger: <><circle cx="12" cy="12" r="9" /><path d="m15 9-6 6M9 9l6 6" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" /></>,
};

export function Toast({ intent = "info", title, children, onClose, className = "", ...rest }) {
  useStyles();
  return (
    <div className={["orc-toast", `orc-toast--${intent}`, className].filter(Boolean).join(" ")} role="status" {...rest}>
      <span className="orc-toast__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS[intent]}</svg>
      </span>
      <span className="orc-toast__text">
        {title && <div className="orc-toast__title">{title}</div>}
        {children && <div className="orc-toast__desc">{children}</div>}
      </span>
      {onClose && (
        <button type="button" className="orc-toast__close" onClick={onClose} aria-label="Dismiss">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
}

export function Toaster({ children, ...rest }) {
  useStyles();
  return <div className="orc-toaster" {...rest}>{children}</div>;
}
