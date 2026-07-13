import React from "react";
import { Switch } from "../components/forms/Switch.jsx";

export default {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Label text to the right of the track." },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
  args: {
    label: "Workflow enabled",
    defaultChecked: true,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: "Toggle switch — orange track when on. Use for instant on/off settings.",
      },
    },
  },
};

export const On = {};

export const Off = { args: { defaultChecked: false } };

export const Disabled = { args: { disabled: true, defaultChecked: false } };

export const Group = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <Switch label="Workflow enabled" defaultChecked />
      <Switch label="Retry failed steps" defaultChecked />
      <Switch label="Verbose run logs" />
      <Switch label="Locked by admin" disabled />
    </div>
  ),
};
