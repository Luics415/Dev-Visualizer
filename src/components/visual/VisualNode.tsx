import type { ReactNode } from "react";

type VisualNodeProps = {
  label?: string;
  children: ReactNode;
  accent?: "blue" | "green" | "orange";
  className?: string;
};

export function VisualNode({
  label,
  children,
  accent = "blue",
  className = "",
}: VisualNodeProps) {
  return (
    <div className={`visual-node visual-node--${accent} ${className}`.trim()}>
      {label ? <span className="visual-node__label">{label}</span> : null}
      <div className="visual-node__content">{children}</div>
    </div>
  );
}
