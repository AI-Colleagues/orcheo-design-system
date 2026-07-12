import React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color intent. */
  intent?: "solid" | "neutral" | "success" | "warning" | "danger" | "info" | "brand-soft";
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}
/** Small status/label pill. Use intents for run states (success/warning/danger/info). */
export function Badge(props: BadgeProps): JSX.Element;
