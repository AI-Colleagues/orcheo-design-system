import React from "react";

/**
 * Brand-specific workflow node — the atom of the Orcheo orchestration canvas.
 * @startingPoint section="Orcheo" subtitle="Workflow node chip (trigger / agent / tool)" viewport="700x340"
 */
export interface NodeChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Node category — sets the icon tile color. */
  kind?: "trigger" | "agent" | "tool";
  /** Primary node label. */
  title?: string;
  /** Mono sub-line (id, model, count). */
  meta?: string;
  /** Run status dot. "running" pulses. */
  status?: "idle" | "running" | "done" | "error";
  /** Orange glow — the node is currently executing. */
  active?: boolean;
  /** Focus-ring — the node is selected on the canvas. */
  selected?: boolean;
  /** Icon node (Lucide <svg>) shown in the tile. */
  icon?: React.ReactNode;
}

/** A trigger, agent, or tool with a status indicator. */
export function NodeChip(props: NodeChipProps): JSX.Element;
