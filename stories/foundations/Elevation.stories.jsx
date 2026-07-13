import React from "react";

export default {
  title: "Foundations/Elevation",
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
};

const meta = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-xs)",
  color: "var(--text-muted)",
};

const shadows = [
  ["--shadow-xs", "hairline lift"],
  ["--shadow-sm", "cards at rest"],
  ["--shadow-md", "hover / raise"],
  ["--shadow-lg", "popovers"],
  ["--shadow-xl", "modals"],
  ["--shadow-brand", "active workflow node glow"],
];

export const Shadows = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: "var(--space-8)",
        padding: "var(--space-4)",
      }}
    >
      {shadows.map(([token, note]) => (
        <div key={token} style={{ display: "grid", gap: "var(--space-2)" }}>
          <div
            style={{
              height: 88,
              borderRadius: "var(--radius-lg)",
              background: "var(--surface-card)",
              boxShadow: `var(${token})`,
            }}
          />
          <span style={meta}>{token}</span>
          <span style={{ ...meta, color: "var(--text-subtle)" }}>{note}</span>
        </div>
      ))}
    </div>
  ),
};

export const FocusRing = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--space-2)", justifyItems: "start" }}>
      <div
        style={{
          padding: "var(--space-2) var(--space-4)",
          borderRadius: "var(--radius-md)",
          background: "var(--surface-card)",
          border: "1px solid var(--border-default)",
          boxShadow: "var(--ring-focus)",
          fontFamily: "var(--font-sans)",
          color: "var(--text-body)",
        }}
      >
        Focused control
      </div>
      <span style={meta}>--ring-focus · always visible, never removed</span>
    </div>
  ),
};
