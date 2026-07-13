import React from "react";

const CSS = `
.orc-btn {
  --_bg: var(--orange-500);
  --_bg-hover: var(--orange-600);
  --_bg-active: var(--orange-700);
  --_fg: var(--text-on-brand);
  --_border: transparent;
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: var(--weight-semibold);
  line-height: 1;
  white-space: nowrap;
  border: 1px solid var(--_border);
  border-radius: var(--radius-md);
  background: var(--_bg);
  color: var(--_fg);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard);
  user-select: none;
}
.orc-btn:hover { background: var(--_bg-hover); }
.orc-btn:active { background: var(--_bg-active); transform: translateY(1px); }
.orc-btn:focus-visible { outline: none; box-shadow: var(--ring-focus); }
.orc-btn[disabled] { cursor: not-allowed; opacity: 0.5; transform: none; }

/* sizes */
.orc-btn--sm { height: 32px; padding: 0 var(--space-3); font-size: var(--text-sm); }
.orc-btn--md { height: 40px; padding: 0 var(--space-4); font-size: var(--text-base); }
.orc-btn--lg { height: 48px; padding: 0 var(--space-6); font-size: var(--text-md); }
.orc-btn--block { width: 100%; }

/* variants */
.orc-btn--primary {
  /* faint top sheen keeps the orange from reading flat */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), var(--shadow-xs);
}
.orc-btn--primary:hover {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), var(--shadow-sm);
}
.orc-btn--secondary {
  --_bg: var(--surface-card); --_bg-hover: var(--surface-hover); --_bg-active: var(--surface-active);
  --_fg: var(--text-strong); --_border: var(--border-default);
}
.orc-btn--secondary:hover { border-color: var(--border-strong); }
.orc-btn--ghost {
  --_bg: transparent; --_bg-hover: var(--surface-hover); --_bg-active: var(--surface-active);
  --_fg: var(--text-body); --_border: transparent;
}
.orc-btn--danger {
  --_bg: var(--red-500); --_bg-hover: var(--red-600); --_bg-active: var(--red-600);
  --_fg: #fff;
}
.orc-btn--inverse {
  --_bg: var(--surface-inverse);
  --_bg-hover: color-mix(in srgb, var(--surface-inverse) 86%, var(--surface-page));
  --_bg-active: color-mix(in srgb, var(--surface-inverse) 74%, var(--surface-page));
  --_fg: var(--surface-page);
}
.orc-btn__icon { display: inline-flex; width: 1.1em; height: 1.1em; }
.orc-btn__icon svg { width: 100%; height: 100%; }
.orc-btn__spinner {
  width: 1em; height: 1em; border-radius: 50%;
  border: 2px solid currentColor; border-right-color: transparent;
  animation: orc-spin 0.6s linear infinite;
}
@keyframes orc-spin { to { transform: rotate(360deg); } }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "button");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Button({
  variant = "primary",
  size = "md",
  block = false,
  loading = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const cls = [
    "orc-btn",
    `orc-btn--${variant}`,
    `orc-btn--${size}`,
    block ? "orc-btn--block" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <button type={type} className={cls} disabled={disabled || loading} {...rest}>
      {loading && <span className="orc-btn__spinner" aria-hidden="true" />}
      {!loading && iconLeft && <span className="orc-btn__icon">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {!loading && iconRight && <span className="orc-btn__icon">{iconRight}</span>}
    </button>
  );
}
