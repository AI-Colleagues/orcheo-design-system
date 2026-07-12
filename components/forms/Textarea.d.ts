import React from "react";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** Use the mono typeface. */
  mono?: boolean;
}
/** Multi-line text field. Vertically resizable. */
export function Textarea(props: TextareaProps): JSX.Element;
