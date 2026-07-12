import React from "react";
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — used for initials fallback and the title tooltip. */
  name?: string;
  /** Image URL; falls back to initials when absent. */
  src?: string;
  size?: "xs" | "sm" | "md" | "lg";
  /** Rounded-square instead of circle. */
  square?: boolean;
  /** Dark "agent" styling (ink bg, orange initials). */
  agent?: boolean;
}
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}
/** User/agent avatar with initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
/** Overlapping cluster of avatars. */
export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
