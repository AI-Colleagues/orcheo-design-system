import React from "react";
import { Tooltip } from "../components/feedback/Tooltip.jsx";
import { Button } from "../components/buttons/Button.jsx";
import { IconButton } from "../components/buttons/IconButton.jsx";
import { SettingsIcon, TrashIcon } from "./icons.jsx";

export default {
  title: "Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Tooltip text." },
    side: { control: "inline-radio", options: ["top", "bottom", "right"] },
    children: { control: false },
  },
  args: {
    label: "Run this workflow now",
    side: "top",
    children: <Button variant="secondary">Run</Button>,
  },
  parameters: {
    docs: {
      description: {
        component: "Hover/focus tooltip on a dark bubble. Wrap the trigger element.",
      },
    },
  },
};

export const Top = {};

export const Bottom = { args: { side: "bottom" } };

export const Right = { args: { side: "right" } };

export const OnIconButtons = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-3)" }}>
      <Tooltip label="Workflow settings">
        <IconButton variant="ghost" label="Settings"><SettingsIcon /></IconButton>
      </Tooltip>
      <Tooltip label="Delete workflow" side="bottom">
        <IconButton variant="ghost" label="Delete"><TrashIcon /></IconButton>
      </Tooltip>
    </div>
  ),
};
