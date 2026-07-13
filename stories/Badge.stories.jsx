import React from "react";
import { Badge } from "../components/display/Badge.jsx";

export default {
  title: "Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["solid", "neutral", "success", "warning", "danger", "info", "brand-soft"],
      description: "Color intent.",
    },
    dot: { control: "boolean", description: "Show a leading status dot." },
    children: { control: "text", name: "label" },
  },
  args: {
    intent: "neutral",
    dot: false,
    children: "Draft",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Small status/label pill. Use intents for run states (success/warning/danger/info).",
      },
    },
  },
};

export const Neutral = {};

export const RunStates = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
      <Badge intent="success" dot>Succeeded</Badge>
      <Badge intent="warning" dot>Degraded</Badge>
      <Badge intent="danger" dot>Failed</Badge>
      <Badge intent="info" dot>Queued</Badge>
    </div>
  ),
};

export const AllIntents = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
      <Badge intent="solid">Solid</Badge>
      <Badge intent="neutral">Neutral</Badge>
      <Badge intent="success">Success</Badge>
      <Badge intent="warning">Warning</Badge>
      <Badge intent="danger">Danger</Badge>
      <Badge intent="info">Info</Badge>
      <Badge intent="brand-soft">Brand soft</Badge>
    </div>
  ),
};
