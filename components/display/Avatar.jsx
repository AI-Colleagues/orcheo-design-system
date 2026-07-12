import React from "react";

const CSS = `
.orc-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-pill);
  background: var(--orange-100); color: var(--orange-800);
  font-family: var(--font-display); font-weight: var(--weight-medium);
  overflow: hidden; flex: none; user-select: none;
  border: 2px solid var(--surface-card);
}
.orc-avatar img { width: 100%; height: 100%; object-fit: cover; }
.orc-avatar--xs { width: 24px; height: 24px; font-size: 10px; }
.orc-avatar--sm { width: 32px; height: 32px; font-size: 12px; }
.orc-avatar--md { width: 40px; height: 40px; font-size: 15px; }
.orc-avatar--lg { width: 56px; height: 56px; font-size: 20px; }
.orc-avatar--square { border-radius: var(--radius-md); }
.orc-avatar--agent { background: var(--ink-950); color: var(--orange-400); }
.orc-avatargroup { display: inline-flex; }
.orc-avatargroup > * + * { margin-left: -8px; }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "avatar");
  el.textContent = CSS;
  document.head.appendChild(el);
}

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export function Avatar({ name = "", src, size = "md", square = false, agent = false, className = "", ...rest }) {
  useStyles();
  const cls = ["orc-avatar", `orc-avatar--${size}`, square ? "orc-avatar--square" : "", agent ? "orc-avatar--agent" : "", className].filter(Boolean).join(" ");
  return (
    <span className={cls} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}

export function AvatarGroup({ children, className = "", ...rest }) {
  useStyles();
  return <span className={["orc-avatargroup", className].filter(Boolean).join(" ")} {...rest}>{children}</span>;
}
