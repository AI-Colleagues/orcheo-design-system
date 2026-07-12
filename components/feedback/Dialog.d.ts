import React from "react";
export interface DialogProps {
  /** Whether the dialog is shown. */
  open?: boolean;
  /** Called on scrim click or close button. */
  onClose?: () => void;
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  /** Footer node — typically the action buttons, right-aligned. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
/** Modal dialog with warm ink scrim + blur. Render conditionally or pass `open`. */
export function Dialog(props: DialogProps): JSX.Element | null;
