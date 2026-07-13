import React from "react";

export default {
  title: "Foundations/Spacing & Shape",
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

const spaceTokens = [
  "--space-1", "--space-2", "--space-3", "--space-4", "--space-5",
  "--space-6", "--space-8", "--space-10", "--space-12", "--space-16",
  "--space-20", "--space-24",
];

export const SpacingScale = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <p style={{ margin: 0, color: "var(--text-body)", maxWidth: 560 }}>
        4px base grid. Controls use <code>--pad-control</code>, cards <code>--pad-card</code>,
        marketing sections <code>--pad-section</code>.
      </p>
      {spaceTokens.map((token) => (
        <div key={token} style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <span style={{ ...meta, width: 120, flexShrink: 0 }}>{token}</span>
          <div
            style={{
              width: `var(${token})`,
              height: 16,
              background: "var(--orange-500)",
              borderRadius: 2,
            }}
          />
        </div>
      ))}
    </div>
  ),
};

const radii = [
  ["--radius-xs", "4px"],
  ["--radius-sm", "6px"],
  ["--radius-md", "10px — controls"],
  ["--radius-lg", "14px — cards"],
  ["--radius-xl", "20px — panels, modals"],
  ["--radius-2xl", "28px — hero blocks"],
  ["--radius-pill", "pills"],
];

export const Radii = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: "var(--space-4)",
      }}
    >
      {radii.map(([token, note]) => (
        <div key={token} style={{ display: "grid", gap: "var(--space-1)" }}>
          <div
            style={{
              height: 72,
              borderRadius: `var(${token})`,
              background: "var(--surface-card)",
              border: "1px solid var(--border-default)",
            }}
          />
          <span style={meta}>{token}</span>
          <span style={{ ...meta, color: "var(--text-subtle)" }}>{note}</span>
        </div>
      ))}
    </div>
  ),
};
