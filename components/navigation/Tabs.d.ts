import React from "react";
export interface TabItem { value: string; label: React.ReactNode; count?: number; }
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabItem[];
  /** Controlled active value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Underline tabs (default) or a segmented pill group. */
  variant?: "line" | "pill";
}
/** Tab switcher. `line` for page-level nav, `pill` for compact in-panel toggles. */
export function Tabs(props: TabsProps): JSX.Element;
