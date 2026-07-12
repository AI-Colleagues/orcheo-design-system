import React from "react";

const CSS = `
.orc-node {
  display: inline-flex; align-items: center; gap: var(--space-2-5);
  background: var(--surface-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-sans);
  box-shadow: var(--shadow-xs);
  min-width: 0;
  transition: box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard);
}
.orc-node--active { border-color: var(--orange-500); box-shadow: var(--shadow-brand); }
.orc-node--selected { border-color: var(--orange-500); box-shadow: var(--ring-focus); }
.orc-node__icon {
  width: 30px; height: 30px; flex: none;
  border-radius: var(--radius-sm);
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--orange-100); color: var(--orange-700);
}
.orc-node__icon svg { width: 17px; height: 17px; }
.orc-node--trigger .orc-node__icon { background: var(--cream-200); color: var(--tan-500); }
.orc-node--agent .orc-node__icon { background: var(--ink-950); color: var(--orange-400); }
.orc-node--tool .orc-node__icon { background: var(--blue-100); color: var(--blue-600); }
.orc-node__text { display: flex; flex-direction: column; min-width: 0; }
.orc-node__title { font-size: var(--text-sm); font-weight: var(--weight-medium); color: var(--text-strong); line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.orc-node__meta { font-family: var(--font-mono); font-size: var(--text-2xs); color: var(--text-muted); line-height: 1.3; }
.orc-node__status { width: 8px; height: 8px; border-radius: 50%; flex: none; margin-left: var(--space-1); }
.orc-node__status--running { background: var(--orange-500); box-shadow: 0 0 0 3px var(--orange-100); animation: orc-node-pulse 1.4s var(--ease-standard) infinite; }
.orc-node__status--done { background: var(--intent-success); }
.orc-node__status--error { background: var(--intent-danger); }
.orc-node__status--idle { background: var(--ink-300); }
@keyframes orc-node-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
@media (prefers-reduced-motion: reduce) { .orc-node__status--running { animation: none; } }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "nodechip");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function NodeChip({
  kind = "agent",
  title,
  meta,
  status,
  active = false,
  selected = false,
  icon = null,
  className = "",
  ...rest
}) {
  useStyles();
  const cls = ["orc-node", `orc-node--${kind}`, active ? "orc-node--active" : "", selected ? "orc-node--selected" : "", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      <span className="orc-node__icon">{icon}</span>
      <span className="orc-node__text">
        <span className="orc-node__title">{title}</span>
        {meta && <span className="orc-node__meta">{meta}</span>}
      </span>
      {status && <span className={`orc-node__status orc-node__status--${status}`} aria-label={status} />}
    </div>
  );
}
