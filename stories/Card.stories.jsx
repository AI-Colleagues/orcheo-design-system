import React from "react";
import { Card } from "../components/display/Card.jsx";
import { Button } from "../components/buttons/Button.jsx";
import { Badge } from "../components/display/Badge.jsx";

export default {
  title: "Display/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "flat", "raised"],
      description: "Elevation style.",
    },
    interactive: { control: "boolean", description: "Adds hover lift + pointer cursor." },
    title: { control: "text", description: "Convenience title (rendered in the header)." },
    subtitle: { control: "text", description: "Convenience subtitle under the title." },
    header: { control: false },
    footer: { control: false },
  },
  args: {
    variant: "default",
    interactive: false,
    title: "Daily digest",
    subtitle: "Runs every weekday at 08:00",
    children: (
      <p style={{ margin: 0, color: "var(--text-body)" }}>
        Summarizes yesterday's activity across 3 connectors and posts the digest to Slack.
      </p>
    ),
  },
  decorators: [(Story) => <div style={{ width: 380 }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        component:
          "Surface container — white, soft-radius, warm shadow. No colored left-borders.",
      },
    },
  },
};

export const Default = {};

export const Flat = { args: { variant: "flat" } };

export const Raised = { args: { variant: "raised" } };

export const Interactive = { args: { interactive: true } };

export const WithFooter = {
  args: {
    footer: (
      <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "flex-end" }}>
        <Button variant="ghost" size="sm">Edit</Button>
        <Button size="sm">Run now</Button>
      </div>
    ),
  },
};

export const WithCustomHeader = {
  args: {
    title: undefined,
    subtitle: undefined,
    header: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <strong style={{ font: "var(--weight-semibold) var(--text-base) var(--font-sans)" }}>
          Daily digest
        </strong>
        <Badge intent="success" dot>Succeeded</Badge>
      </div>
    ),
  },
};
