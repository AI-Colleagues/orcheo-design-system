import React from "react";
import { NodeChip } from "../components/display/NodeChip.jsx";
import { ZapIcon, BotIcon, WrenchIcon } from "./icons.jsx";

export default {
  title: "Orcheo/NodeChip",
  component: NodeChip,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: "inline-radio",
      options: ["trigger", "agent", "tool"],
      description: "Node category — sets the icon tile color.",
    },
    title: { control: "text", description: "Primary node label." },
    meta: { control: "text", description: "Mono sub-line (id, model, count)." },
    status: {
      control: "inline-radio",
      options: ["idle", "running", "done", "error"],
      description: 'Run status dot. "running" pulses.',
    },
    active: { control: "boolean", description: "Orange glow — the node is currently executing." },
    selected: { control: "boolean", description: "Focus-ring — the node is selected on the canvas." },
    icon: { control: false },
  },
  args: {
    kind: "agent",
    title: "Researcher",
    meta: "claude-fable-5",
    status: "idle",
    active: false,
    selected: false,
    icon: <BotIcon />,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Brand-specific workflow node — the atom of the Orcheo orchestration canvas. A trigger, agent, or tool with a status indicator.",
      },
    },
  },
};

export const Agent = {};

export const Trigger = {
  args: { kind: "trigger", title: "Every weekday", meta: "cron 0 8 * * 1-5", icon: <ZapIcon /> },
};

export const Tool = {
  args: { kind: "tool", title: "Post to Slack", meta: "slack.chat.write", icon: <WrenchIcon /> },
};

export const Running = {
  args: { status: "running", active: true },
};

export const Selected = {
  args: { selected: true },
};

export const ErrorState = {
  name: "Error",
  args: { status: "error", title: "Fetch report", kind: "tool", meta: "http.get", icon: <WrenchIcon /> },
};

export const WorkflowRow = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-6)", alignItems: "center" }}>
      <NodeChip kind="trigger" title="Every weekday" meta="cron 0 8 * * 1-5" status="done" icon={<ZapIcon />} />
      <NodeChip kind="agent" title="Researcher" meta="claude-fable-5" status="running" active icon={<BotIcon />} />
      <NodeChip kind="tool" title="Post to Slack" meta="slack.chat.write" status="idle" icon={<WrenchIcon />} />
    </div>
  ),
};
