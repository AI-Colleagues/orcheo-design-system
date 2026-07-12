import React from "react";
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text. */
  label: React.ReactNode;
  side?: "top" | "bottom" | "right";
  children: React.ReactNode;
}
/** Hover/focus tooltip on a dark bubble. Wrap the trigger element. */
export function Tooltip(props: TooltipProps): JSX.Element;
