import React from "react";

export default {
  title: "Foundations/Colors",
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
};

const label = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-xs)",
  color: "var(--text-muted)",
};

function Swatch({ token, note }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-1)" }}>
      <div
        style={{
          height: 56,
          borderRadius: "var(--radius-sm)",
          background: `var(${token})`,
          border: "1px solid var(--border-subtle)",
        }}
      />
      <span style={label}>{token}</span>
      {note && <span style={{ ...label, color: "var(--text-subtle)" }}>{note}</span>}
    </div>
  );
}

function Ramp({ title, tokens }) {
  return (
    <section style={{ display: "grid", gap: "var(--space-3)" }}>
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-lg)",
          color: "var(--text-strong)",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
          gap: "var(--space-3)",
        }}
      >
        {tokens.map(([token, note]) => (
          <Swatch key={token} token={token} note={note} />
        ))}
      </div>
    </section>
  );
}

export const BrandCore = {
  render: () => (
    <Ramp
      title="Brand core"
      tokens={[
        ["--orcheo-orange", "#f87825 — the signature"],
        ["--aic-ink", "#0e0e0c — corporate anchor"],
        ["--brand-cream", "#f6f5d4 — parchment field"],
        ["--brand-tan", "#e0c090 — connector lines"],
      ]}
    />
  ),
};

export const OrangeRamp = {
  render: () => (
    <Ramp
      title="Orange ramp (primary)"
      tokens={[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((s) => [
        `--orange-${s}`,
        s === 500 ? "base" : s === 600 ? "hover" : s === 700 ? "active" : undefined,
      ])}
    />
  ),
};

export const InkRamp = {
  render: () => (
    <Ramp
      title="Warm neutral ramp (ink)"
      tokens={[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((s) => [
        `--ink-${s}`,
      ])}
    />
  ),
};

export const CreamAndTan = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <Ramp
        title="Cream / parchment"
        tokens={[50, 100, 200, 300, 400].map((s) => [
          `--cream-${s}`,
          s === 200 ? "brand cream" : undefined,
        ])}
      />
      <Ramp
        title="Tan (circuitry / decorative)"
        tokens={[200, 300, 400, 500].map((s) => [
          `--tan-${s}`,
          s === 300 ? "connector lines" : undefined,
        ])}
      />
    </div>
  ),
};

export const Semantics = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <Ramp
        title="Semantic hues (warm-harmonized)"
        tokens={[
          ["--green-500", "success"],
          ["--amber-500", "warning"],
          ["--red-500", "danger"],
          ["--blue-500", "info"],
        ]}
      />
      <Ramp
        title="Semantic aliases — use these in product UI"
        tokens={[
          ["--surface-page"],
          ["--surface-card"],
          ["--surface-sunken"],
          ["--surface-inverse"],
          ["--surface-brand"],
          ["--surface-brand-soft"],
          ["--surface-cream"],
          ["--text-strong"],
          ["--text-body"],
          ["--text-muted"],
          ["--text-subtle"],
          ["--text-brand"],
          ["--border-subtle"],
          ["--border-default"],
          ["--border-circuit"],
          ["--action-primary"],
        ]}
      />
    </div>
  ),
};
