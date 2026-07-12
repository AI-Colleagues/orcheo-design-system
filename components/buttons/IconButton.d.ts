import React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. */
  variant?: "ghost" | "solid" | "outline";
  size?: "sm" | "md" | "lg";
  /** Pill (circular) shape. */
  round?: boolean;
  /** Accessible label — required, since there is no visible text. */
  label: string;
  /** The icon node (a Lucide <svg>). */
  children: React.ReactNode;
}

/** Square/round button holding a single icon. Always pass `label` for accessibility. */
export function IconButton(props: IconButtonProps): JSX.Element;
