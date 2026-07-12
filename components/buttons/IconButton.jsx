import React from "react";

const CSS = `
.orc-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}
.orc-iconbtn:hover { background: var(--ink-100); color: var(--text-strong); }
.orc-iconbtn:active { background: var(--ink-200); }
.orc-iconbtn:focus-visible { outline: none; box-shadow: var(--ring-focus); }
.orc-iconbtn[disabled] { cursor: not-allowed; opacity: 0.4; }
.orc-iconbtn--solid { background: var(--orange-500); color: #fff; box-shadow: var(--shadow-xs); }
.orc-iconbtn--solid:hover { background: var(--orange-600); color: #fff; }
.orc-iconbtn--solid:active { background: var(--orange-700); }
.orc-iconbtn--outline { border-color: var(--border-default); }
.orc-iconbtn--outline:hover { background: var(--ink-50); }
.orc-iconbtn--sm { width: 32px; height: 32px; }
.orc-iconbtn--md { width: 40px; height: 40px; }
.orc-iconbtn--lg { width: 48px; height: 48px; }
.orc-iconbtn--round { border-radius: var(--radius-pill); }
.orc-iconbtn svg { width: 1.25em; height: 1.25em; }
.orc-iconbtn--sm svg { width: 18px; height: 18px; }
.orc-iconbtn--md svg { width: 20px; height: 20px; }
.orc-iconbtn--lg svg { width: 22px; height: 22px; }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "iconbutton");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function IconButton({
  variant = "ghost",
  size = "md",
  round = false,
  label,
  className = "",
  children,
  ...rest
}) {
  useStyles();
  const cls = [
    "orc-iconbtn",
    `orc-iconbtn--${variant}`,
    `orc-iconbtn--${size}`,
    round ? "orc-iconbtn--round" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <button type="button" className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
