import React from "react";

const CSS = `
.orc-dialog__scrim {
  position: fixed; inset: 0; z-index: var(--z-modal);
  background: rgba(14,14,12,0.5);
  backdrop-filter: blur(2px);
  display: flex; align-items: center; justify-content: center;
  padding: var(--space-6);
  animation: orc-dialog-fade var(--duration-base) var(--ease-standard);
}
.orc-dialog {
  background: var(--surface-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  width: 100%; max-width: 480px; max-height: 90vh; overflow: auto;
  font-family: var(--font-sans);
  animation: orc-dialog-pop var(--duration-base) var(--ease-emphasized);
}
.orc-dialog--lg { max-width: 640px; }
.orc-dialog--sm { max-width: 380px; }
.orc-dialog__header { padding: var(--space-6) var(--space-6) 0; display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-4); }
.orc-dialog__title { font-family: var(--font-display); font-weight: var(--weight-medium); font-size: var(--text-xl); letter-spacing: var(--tracking-tight); color: var(--text-strong); margin: 0; }
.orc-dialog__desc { font-size: var(--text-sm); color: var(--text-muted); margin-top: var(--space-1); }
.orc-dialog__close { appearance: none; border: none; background: none; cursor: pointer; color: var(--text-muted); padding: 4px; border-radius: var(--radius-sm); display: inline-flex; }
.orc-dialog__close:hover { background: var(--ink-100); color: var(--text-strong); }
.orc-dialog__body { padding: var(--space-5) var(--space-6); }
.orc-dialog__footer { padding: var(--space-4) var(--space-6) var(--space-6); display: flex; gap: var(--space-3); justify-content: flex-end; }
@keyframes orc-dialog-fade { from { opacity: 0; } }
@keyframes orc-dialog-pop { from { opacity: 0; transform: translateY(8px) scale(0.98); } }
`;

let injected = false;
function useStyles() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-orc", "dialog");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Dialog({ open = true, onClose, title, description, size = "md", footer, className = "", children }) {
  useStyles();
  if (!open) return null;
  const onScrim = (e) => { if (e.target === e.currentTarget && onClose) onClose(); };
  return (
    <div className="orc-dialog__scrim" onMouseDown={onScrim}>
      <div className={["orc-dialog", size !== "md" ? `orc-dialog--${size}` : "", className].filter(Boolean).join(" ")} role="dialog" aria-modal="true" aria-label={title}>
        {(title || onClose) && (
          <div className="orc-dialog__header">
            <div>
              {title && <h2 className="orc-dialog__title">{title}</h2>}
              {description && <div className="orc-dialog__desc">{description}</div>}
            </div>
            {onClose && (
              <button type="button" className="orc-dialog__close" onClick={onClose} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            )}
          </div>
        )}
        {children && <div className="orc-dialog__body">{children}</div>}
        {footer && <div className="orc-dialog__footer">{footer}</div>}
      </div>
    </div>
  );
}
