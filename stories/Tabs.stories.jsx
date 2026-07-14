import React from "react";
import { Tabs } from "../components/navigation/Tabs.jsx";

const workflowTabs = [
  { value: "overview", label: "Overview" },
  { value: "runs", label: "Runs", count: 12 },
  { value: "connectors", label: "Connectors", count: 3 },
  { value: "settings", label: "Settings" },
];

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["line", "pill"],
      description: "Underline tabs (default) or a segmented pill group.",
    },
    items: { control: "object" },
    value: { control: false, description: "Controlled active value." },
    defaultValue: { control: false, description: "Uncontrolled initial value." },
    onChange: { control: false },
  },
  args: {
    variant: "line",
    items: workflowTabs,
    defaultValue: "runs",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Tab switcher. `line` for page-level nav, `pill` for compact in-panel toggles.",
      },
    },
  },
};

export const Line = {};

export const Pill = {
  args: {
    variant: "pill",
    items: [
      { value: "all", label: "All" },
      { value: "succeeded", label: "Succeeded" },
      { value: "failed", label: "Failed" },
    ],
    defaultValue: "all",
  },
};

export const Controlled = {
  render: (args) => {
    const [value, setValue] = React.useState("overview");
    return (
      <div style={{ display: "grid", gap: "var(--space-4)", width: 420 }}>
        <Tabs {...args} value={value} onChange={setValue} />
        <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>
          Active tab: <code>{value}</code>
        </p>
      </div>
    );
  },
};
