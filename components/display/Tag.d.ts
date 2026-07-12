import React from "react";
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cream";
  /** When provided, renders a remove (×) button calling this handler. */
  onRemove?: () => void;
  children?: React.ReactNode;
}
/** Mono-type token/keyword chip, optionally removable. For connectors, models, labels. */
export function Tag(props: TagProps): JSX.Element;
