import React from "react";

/**
 * Surface container — white, soft-radius, warm shadow. No colored left-borders.
 * @startingPoint section="Layout" subtitle="Content surface with header / body / footer" viewport="700x340"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Elevation style. */
  variant?: "default" | "flat" | "raised";
  /** Adds hover lift + pointer cursor. */
  interactive?: boolean;
  /** Convenience title (rendered in the header). */
  title?: string;
  /** Convenience subtitle under the title. */
  subtitle?: string;
  /** Custom header node (overrides title/subtitle). */
  header?: React.ReactNode;
  /** Footer node, rendered in a tinted footer bar. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
