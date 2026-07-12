import React from "react";

/**
 * Primary action control for Orcheo / AIC.
 * @startingPoint section="Buttons" subtitle="Primary, secondary, ghost, danger button" viewport="700x300"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "inverse";
  /** Control height. */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill the container width. */
  block?: boolean;
  /** Show a spinner and disable interaction. */
  loading?: boolean;
  disabled?: boolean;
  /** Icon node placed before the label (e.g. a Lucide <svg>). */
  iconLeft?: React.ReactNode;
  /** Icon node placed after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/** Sentence-case labels, lead with a verb. */
export function Button(props: ButtonProps): JSX.Element;
