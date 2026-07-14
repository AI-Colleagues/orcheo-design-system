import React from "react";
import { Avatar, AvatarGroup } from "../components/display/Avatar.jsx";

export default {
  title: "Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Full name — used for initials fallback and the title tooltip.",
    },
    src: { control: "text", description: "Image URL; falls back to initials when absent." },
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg"] },
    square: { control: "boolean", description: "Rounded-square instead of circle." },
    agent: { control: "boolean", description: 'Dark "agent" styling (ink bg, orange initials).' },
  },
  args: {
    name: "Shaojie Jiang",
    size: "md",
    square: false,
    agent: false,
  },
  parameters: {
    docs: {
      description: { component: "User/agent avatar with initials fallback." },
    },
  },
};

export const Initials = {};

export const Agent = { args: { name: "Researcher Agent", agent: true, square: true } };

export const Sizes = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
      <Avatar name="Ada Lovelace" size="xs" />
      <Avatar name="Ada Lovelace" size="sm" />
      <Avatar name="Ada Lovelace" size="md" />
      <Avatar name="Ada Lovelace" size="lg" />
    </div>
  ),
};

export const Group = {
  render: () => (
    <AvatarGroup>
      <Avatar name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar name="Reviewer Agent" agent />
      <Avatar name="Katherine Johnson" />
    </AvatarGroup>
  ),
};
