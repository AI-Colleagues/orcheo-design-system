import React from "react";
import { Toast, Toaster } from "../components/feedback/Toast.jsx";

export default {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    intent: { control: "inline-radio", options: ["info", "success", "warning", "danger"] },
    title: { control: "text" },
    children: { control: "text", name: "message", description: "Optional secondary line." },
    onClose: { control: false },
  },
  args: {
    intent: "success",
    title: "Run completed",
    children: "Daily digest finished in 42s.",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Dark notification toast with a colored intent edge. `Toaster` is the fixed bottom-right stack container.",
      },
    },
  },
};

export const Success = {};

export const Info = {
  args: { intent: "info", title: "Run queued", children: "Starts when the current run finishes." },
};

export const Warning = {
  args: { intent: "warning", title: "Step retried", children: "The Slack connector timed out once." },
};

export const Danger = {
  args: {
    intent: "danger",
    title: "Run failed",
    children: "That step couldn't reach the API. Check the connection and retry.",
  },
};

export const Dismissible = {
  args: { onClose: () => {} },
  argTypes: { onClose: { control: false } },
  render: (args) => <Toast {...args} onClose={() => {}} />,
};

export const Stack = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <div style={{ position: "relative", minHeight: 320 }}>
      <Toaster style={{ position: "absolute" }}>
        <Toast intent="success" title="Run completed" onClose={() => {}}>
          Daily digest finished in 42s.
        </Toast>
        <Toast intent="warning" title="Step retried" onClose={() => {}}>
          The Slack connector timed out once.
        </Toast>
        <Toast intent="info" title="Run queued" onClose={() => {}} />
      </Toaster>
    </div>
  ),
};
