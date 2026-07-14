import React from "react";
import { Input } from "../components/forms/Input.jsx";
import { SearchIcon } from "./icons.jsx";

export default {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Field label rendered above the control." },
    hint: { control: "text", description: "Helper text below the control." },
    error: {
      control: "text",
      description: "Error message — replaces hint and turns the control red.",
    },
    mono: { control: "boolean", description: "Use the mono typeface (for IDs, keys, tokens)." },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    icon: { control: false },
  },
  args: {
    label: "Workflow name",
    hint: "",
    error: "",
    mono: false,
    placeholder: "e.g. Daily digest",
    disabled: false,
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: "Single-line text field with optional label, hint, error, and leading icon.",
      },
    },
  },
};

export const Default = {};

export const WithHint = {
  args: { hint: "Shown in the sidebar and run history." },
};

export const WithError = {
  args: { error: "A workflow with this name already exists.", defaultValue: "Daily digest" },
};

export const WithIcon = {
  args: { label: "Search workflows", placeholder: "Search…", icon: <SearchIcon /> },
};

export const Mono = {
  args: {
    label: "API key",
    mono: true,
    defaultValue: "orc_sk_2f8a91c3d4",
    hint: "Keys use the mono typeface.",
  },
};

export const Disabled = {
  args: { disabled: true, defaultValue: "Read-only value" },
};
