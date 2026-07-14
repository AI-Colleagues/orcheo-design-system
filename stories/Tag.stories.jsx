import React from "react";
import { Tag } from "../components/display/Tag.jsx";

export default {
  title: "Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "cream"] },
    onRemove: {
      control: false,
      description: "When provided, renders a remove (×) button calling this handler.",
    },
    children: { control: "text", name: "label" },
  },
  args: {
    variant: "default",
    children: "gpt-parser",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Mono-type token/keyword chip, optionally removable. For connectors, models, labels.",
      },
    },
  },
};

export const Default = {};

export const Cream = { args: { variant: "cream", children: "slack" } };

export const Removable = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
      <Tag onRemove={() => {}}>notion</Tag>
      <Tag onRemove={() => {}}>slack</Tag>
      <Tag variant="cream" onRemove={() => {}}>claude-fable-5</Tag>
    </div>
  ),
};

export const ConnectorList = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", maxWidth: 320 }}>
      <Tag>github</Tag>
      <Tag>slack</Tag>
      <Tag>notion</Tag>
      <Tag>postgres</Tag>
      <Tag variant="cream">wf_78ac</Tag>
      <Tag variant="cream">run_112</Tag>
    </div>
  ),
};
