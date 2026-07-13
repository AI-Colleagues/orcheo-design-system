import React from "react";
import { IconButton } from "../components/buttons/IconButton.jsx";
import { PlusIcon, SearchIcon, SettingsIcon, TrashIcon } from "./icons.jsx";

export default {
  title: "Buttons/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["ghost", "solid", "outline"],
      description: "Visual style.",
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    round: { control: "boolean", description: "Pill (circular) shape." },
    label: {
      control: "text",
      description: "Accessible label — required, since there is no visible text.",
    },
    children: { control: false },
  },
  args: {
    variant: "ghost",
    size: "md",
    round: false,
    label: "Settings",
    children: <SettingsIcon />,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Square/round button holding a single icon. Always pass `label` for accessibility.",
      },
    },
  },
};

export const Ghost = {};

export const Solid = { args: { variant: "solid", label: "Add node", children: <PlusIcon /> } };

export const Outline = { args: { variant: "outline", label: "Search", children: <SearchIcon /> } };

export const Round = { args: { round: true, variant: "solid", label: "Add node", children: <PlusIcon /> } };

export const Gallery = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
      <IconButton variant="solid" label="Add node"><PlusIcon /></IconButton>
      <IconButton variant="outline" label="Search"><SearchIcon /></IconButton>
      <IconButton variant="ghost" label="Settings"><SettingsIcon /></IconButton>
      <IconButton variant="ghost" label="Delete"><TrashIcon /></IconButton>
      <IconButton variant="solid" round label="Add node"><PlusIcon /></IconButton>
      <IconButton variant="outline" round label="Search"><SearchIcon /></IconButton>
    </div>
  ),
};
