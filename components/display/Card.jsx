import React from "react";

const CSS = `
.orc-card {
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  font-family: var(--font-sans);
}
.orc-card--flat { box-shadow: none; }
.orc-card--raised { box-shadow: var(--shadow-md); border-color: transparent; }
.orc-card--interactive { cursor: pointer; transition: box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard); }
.orc-card--interactive:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); border-color: var(--border-default); }
.orc-card__header { padding: var(--space-5) var(--space-6) 0; }
.orc-card__title { font-family: var(--font-display); font-weight: var(--weight-medium); font-size: var(--text-lg); letter-spacing: var(--tracking-tight); color: var(--text-strong); margin: 0; }
.orc-card__subtitle { font-size: var(--text-sm); color: var(--text-muted); margin-top: 2px; }
.orc-card__body { padding: var(--space-5) var(--space-6); }
.orc-card__footer { padding: var(--space-4) var(--space-6); border-top: 1px solid var(--border-subtle); background: var(--ink-50); display: flex; gap: var(--space-3); align-items: center; }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "card");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Card({
  variant = "default",
  interactive = false,
  title,
  subtitle,
  header,
  footer,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const cls = [
    "orc-card",
    variant !== "default" ? `orc-card--${variant}` : "",
    interactive ? "orc-card--interactive" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {(title || header) && (
        <div className="orc-card__header">
          {header || (
            <>
              <h3 className="orc-card__title">{title}</h3>
              {subtitle && <div className="orc-card__subtitle">{subtitle}</div>}
            </>
          )}
        </div>
      )}
      {children && <div className="orc-card__body">{children}</div>}
      {footer && <div className="orc-card__footer">{footer}</div>}
    </div>
  );
}
