import React from "react";
import { Checkbox } from "../components/forms/Checkbox.jsx";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Label text to the right of the box." },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
  args: {
    label: "Notify me when a run fails",
    defaultChecked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: { component: "Checkbox with the brand orange fill when checked." },
    },
  },
};

export const Default = {};

export const Checked = { args: { defaultChecked: true } };

export const Disabled = { args: { disabled: true } };

export const Group = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <Checkbox label="Notify on failure" defaultChecked />
      <Checkbox label="Notify on success" />
      <Checkbox label="Weekly summary email" defaultChecked />
      <Checkbox label="Beta features" disabled />
    </div>
  ),
};
