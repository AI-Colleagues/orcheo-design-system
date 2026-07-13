import React from "react";

export default {
  title: "Foundations/Typography",
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
};

const meta = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-xs)",
  color: "var(--text-subtle)",
};

export const Families = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--space-6)", maxWidth: 680 }}>
      <div>
        <div style={meta}>--font-display · Space Grotesk · headlines, hero, big numbers</div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-3xl)",
            fontWeight: "var(--weight-bold)",
            letterSpacing: "var(--tracking-tighter)",
            color: "var(--text-strong)",
          }}
        >
          Orchestrate your agents. Ship the work.
        </div>
      </div>
      <div>
        <div style={meta}>--font-sans · IBM Plex Sans · UI and body</div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--leading-normal)",
            color: "var(--text-body)",
          }}
        >
          No runs yet. Build a workflow and hit Run to watch it work. Orcheo composes agents,
          tools, and triggers into orchestrated workflows — 3 agents, 12 steps, one canvas.
        </div>
      </div>
      <div>
        <div style={meta}>--font-mono · IBM Plex Mono · node IDs, run logs, eyebrows</div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-sm)",
            color: "var(--text-body)",
          }}
        >
          run_112 · wf_78ac · agent:researcher · 08:00:14 step 3/12 ok
        </div>
      </div>
      <div>
        <div style={meta}>.eyebrow · mono ALL-CAPS overline — the only ALL-CAPS style</div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--tracking-caps)",
            textTransform: "uppercase",
            color: "var(--text-brand)",
            fontWeight: "var(--weight-medium)",
          }}
        >
          Workflow orchestration
        </div>
      </div>
    </div>
  ),
};

const scale = [
  ["--text-6xl", "76px"],
  ["--text-5xl", "61px"],
  ["--text-4xl", "49px"],
  ["--text-3xl", "39px"],
  ["--text-2xl", "31px"],
  ["--text-xl", "25px"],
  ["--text-lg", "20px"],
  ["--text-md", "17px"],
  ["--text-base", "15px — product body"],
  ["--text-sm", "13px"],
  ["--text-xs", "12px"],
  ["--text-2xs", "11px"],
];

export const Scale = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--space-4)" }}>
      {scale.map(([token, note]) => (
        <div
          key={token}
          style={{ display: "flex", alignItems: "baseline", gap: "var(--space-4)" }}
        >
          <span style={{ ...meta, width: 180, flexShrink: 0 }}>
            {token} · {note}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: `var(${token})`,
              fontWeight: "var(--weight-medium)",
              lineHeight: "var(--leading-tight)",
              color: "var(--text-strong)",
              whiteSpace: "nowrap",
            }}
          >
            Orcheo
          </span>
        </div>
      ))}
    </div>
  ),
};
