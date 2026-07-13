import React from "react";
import { Textarea } from "../components/forms/Textarea.jsx";

export default {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "text", description: "Error message — replaces hint." },
    mono: { control: "boolean", description: "Use the mono typeface." },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
  },
  args: {
    label: "Agent instructions",
    placeholder: "Describe what this agent should do…",
    rows: 4,
  },
  decorators: [(Story) => <div style={{ width: 380 }}><Story /></div>],
  parameters: {
    docs: {
      description: { component: "Multi-line text field. Vertically resizable." },
    },
  },
};

export const Default = {};

export const WithHint = {
  args: { hint: "The agent reads this before every run." },
};

export const WithError = {
  args: { error: "Instructions can't be empty." },
};

export const Mono = {
  args: {
    label: "Webhook payload",
    mono: true,
    defaultValue: '{\n  "event": "run.completed",\n  "workflow": "wf_78ac"\n}',
    rows: 5,
  },
};
