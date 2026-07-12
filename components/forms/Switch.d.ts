import React from "react";
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Label text to the right of the track. */
  label?: string;
}
/** Toggle switch — orange track when on. Use for instant on/off settings. */
export function Switch(props: SwitchProps): JSX.Element;
