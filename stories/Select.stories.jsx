import React from "react";
import { Select } from "../components/forms/Select.jsx";

export default {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    options: {
      control: "object",
      description: "Options as strings or {value,label}. Omit and pass <option> children instead if preferred.",
    },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Model",
    options: ["claude-fable-5", "claude-opus-4-8", "claude-sonnet-5", "claude-haiku-4-5"],
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: "Native select styled to match the system, with a custom chevron.",
      },
    },
  },
};

export const Default = {};

export const WithHint = {
  args: { hint: "Used for every agent in this workflow unless overridden." },
};

export const WithError = {
  args: { error: "Pick a model to continue." },
};

export const ObjectOptions = {
  args: {
    label: "Trigger",
    options: [
      { value: "cron", label: "Schedule (cron)" },
      { value: "webhook", label: "Webhook" },
      { value: "manual", label: "Manual run" },
    ],
  },
};
