import React from "react";
export interface SelectOption { value: string; label: string; }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** Options as strings or {value,label}. Omit and pass <option> children instead if preferred. */
  options?: (string | SelectOption)[];
}
/** Native select styled to match the system, with a custom chevron. */
export function Select(props: SelectProps): JSX.Element;
