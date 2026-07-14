import React from "react";
import { Button } from "../components/buttons/Button.jsx";
import { PlayIcon, PlusIcon, ArrowRightIcon } from "./icons.jsx";

export default {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger", "inverse"],
      description: "Visual style.",
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      description: "Control height.",
    },
    block: { control: "boolean", description: "Stretch to fill the container width." },
    loading: { control: "boolean", description: "Show a spinner and disable interaction." },
    disabled: { control: "boolean" },
    children: { control: "text", name: "label" },
    iconLeft: { control: false },
    iconRight: { control: false },
  },
  args: {
    variant: "primary",
    size: "md",
    block: false,
    loading: false,
    disabled: false,
    children: "New workflow",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Primary action control for Orcheo / AIC. Sentence-case labels, lead with a verb.",
      },
    },
  },
};

export const Primary = {};

export const Secondary = { args: { variant: "secondary", children: "View run" } };

export const Ghost = { args: { variant: "ghost", children: "Cancel" } };

export const Danger = { args: { variant: "danger", children: "Delete workflow" } };

export const Inverse = {
  args: { variant: "inverse", children: "Get started" },
  globals: { backgrounds: { value: "cream" } },
};

export const WithIcons = {
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--space-3)" }}>
      <Button {...args} iconLeft={<PlusIcon />}>New workflow</Button>
      <Button {...args} variant="secondary" iconLeft={<PlayIcon />}>Run</Button>
      <Button {...args} variant="ghost" iconRight={<ArrowRightIcon />}>View run</Button>
    </div>
  ),
};

export const Loading = { args: { loading: true, children: "Running" } };

export const Sizes = {
  render: (args) => (
    <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="inverse">Inverse</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
};
