import React from "react";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Label text to the right of the box. */
  label?: string;
}
/** Checkbox with the brand orange fill when checked. */
export function Checkbox(props: CheckboxProps): JSX.Element;
