import React from "react";
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  intent?: "info" | "success" | "warning" | "danger";
  title?: string;
  /** Optional secondary line. */
  children?: React.ReactNode;
  onClose?: () => void;
}
export interface ToasterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
/** Dark notification toast with a colored intent edge. */
export function Toast(props: ToastProps): JSX.Element;
/** Fixed bottom-right stack container for toasts. */
export function Toaster(props: ToasterProps): JSX.Element;
