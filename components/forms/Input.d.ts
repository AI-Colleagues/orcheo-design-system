import React from "react";

/**
 * Single-line text field with optional label, hint, error, and leading icon.
 * @startingPoint section="Forms" subtitle="Text field with label, hint, error" viewport="700x340"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Error message — replaces hint and turns the control red. */
  error?: string;
  /** Use the mono typeface (for IDs, keys, tokens). */
  mono?: boolean;
  /** Leading icon node (Lucide <svg>). */
  icon?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
