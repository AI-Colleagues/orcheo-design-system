import React from "react";

const CSS = `
.orc-tabs { font-family: var(--font-sans); }
.orc-tabs__list { display: inline-flex; gap: var(--space-1); position: relative; }
.orc-tabs--line .orc-tabs__list { gap: var(--space-5); border-bottom: 1px solid var(--border-subtle); width: 100%; }
.orc-tabs--pill .orc-tabs__list { background: var(--ink-100); padding: 4px; border-radius: var(--radius-md); }
.orc-tab {
  appearance: none; border: none; background: none; cursor: pointer;
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-medium);
  color: var(--text-muted); display: inline-flex; align-items: center; gap: var(--space-2);
  transition: color var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard);
}
.orc-tab:hover { color: var(--text-strong); }
.orc-tab:focus-visible { outline: none; box-shadow: var(--ring-focus); border-radius: var(--radius-sm); }
.orc-tabs--line .orc-tab { padding: var(--space-3) 2px; border-bottom: 2px solid transparent; margin-bottom: -1px; }
.orc-tabs--line .orc-tab[aria-selected="true"] { color: var(--text-brand); border-bottom-color: var(--orange-500); }
.orc-tabs--pill .orc-tab { padding: var(--space-2) var(--space-4); border-radius: var(--radius-sm); }
.orc-tabs--pill .orc-tab[aria-selected="true"] { color: var(--text-strong); background: var(--surface-card); box-shadow: var(--shadow-xs); }
.orc-tab__count { font-family: var(--font-mono); font-size: var(--text-2xs); background: var(--ink-200); color: var(--text-muted); padding: 1px 6px; border-radius: var(--radius-pill); }
.orc-tab[aria-selected="true"] .orc-tab__count { background: var(--orange-100); color: var(--orange-700); }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "tabs");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Tabs({ items = [], value, defaultValue, onChange, variant = "line", className = "", ...rest }) {
  useStyles();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = isControlled ? value : internal;
  const select = (v) => { if (!isControlled) setInternal(v); onChange && onChange(v); };
  return (
    <div className={["orc-tabs", `orc-tabs--${variant}`, className].filter(Boolean).join(" ")} {...rest}>
      <div className="orc-tabs__list" role="tablist">
        {items.map((it) => (
          <button
            key={it.value}
            role="tab"
            type="button"
            className="orc-tab"
            aria-selected={active === it.value}
            onClick={() => select(it.value)}
          >
            {it.label}
            {it.count != null && <span className="orc-tab__count">{it.count}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
