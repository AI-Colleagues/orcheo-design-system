import React from "react";
import { Dialog } from "../components/feedback/Dialog.jsx";
import { Button } from "../components/buttons/Button.jsx";
import { Input } from "../components/forms/Input.jsx";

export default {
  title: "Feedback/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean", description: "Whether the dialog is shown." },
    title: { control: "text" },
    description: { control: "text" },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    onClose: { control: false, description: "Called on scrim click or close button." },
    footer: { control: false },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Modal dialog with warm ink scrim + blur. Render conditionally or pass `open`. The interactive stories open the dialog from a button so the scrim and close behavior can be exercised.",
      },
    },
  },
};

function DialogDemo({ size = "md" }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: 320 }}>
      <Button onClick={() => setOpen(true)}>New workflow</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        size={size}
        title="New workflow"
        description="Name it now; add triggers and agents on the canvas."
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Create workflow</Button>
          </>
        }
      >
        <Input label="Workflow name" placeholder="e.g. Daily digest" />
      </Dialog>
    </div>
  );
}

export const Interactive = {
  render: () => <DialogDemo />,
};

export const Small = {
  render: () => <DialogDemo size="sm" />,
};

export const Large = {
  render: () => <DialogDemo size="lg" />,
};
