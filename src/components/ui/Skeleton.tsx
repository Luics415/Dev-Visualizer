import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular" | "card" | "hero";
  width?: string | number;
  height?: string | number;
  ariaLabel?: string;
  className?: string;
}

function formatDimension(val?: string | number): string | undefined {
  if (val === undefined) return undefined;
  return typeof val === "number" ? `${val}px` : val;
}

/**
 * Componente primitivo de esqueleto de carga con aceleración por hardware
 * y accesibilidad WCAG 2.1 AA (role="status", aria-busy="true", aria-label).
 */
export function Skeleton({
  variant = "text",
  width,
  height,
  ariaLabel = "Cargando contenido...",
  className = "",
  style,
  children,
  ...rest
}: SkeletonProps): React.JSX.Element {
  const formattedWidth = formatDimension(width);
  const formattedHeight = formatDimension(height);

  const computedStyle: React.CSSProperties = {
    ...style,
    ...(formattedWidth !== undefined ? { width: formattedWidth } : {}),
    ...(formattedHeight !== undefined ? { height: formattedHeight } : {}),
  };

  const classNames = ["skeleton", `skeleton-${variant}`, className].filter(Boolean).join(" ");

  return (
    <div
      role="status"
      aria-busy="true"
      aria-label={ariaLabel}
      className={classNames}
      style={computedStyle}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Skeleton;

/**
 * Helper de renderizado de contrato exigido por el arnés E2E
 * (tests/e2e/tier1/tier1-skeletons-perf.test.mjs).
 */
export function renderSkeleton(props: SkeletonProps = {}): {
  role: string;
  "aria-busy": string;
  "aria-label": string;
  className: string;
  style: { width?: string; height?: string };
} {
  const {
    variant = "text",
    width,
    height,
    ariaLabel = "Cargando contenido...",
    className = "",
  } = props;

  const formattedWidth = formatDimension(width);
  const formattedHeight = formatDimension(height);

  const style: { width?: string; height?: string } = {};
  if (formattedWidth !== undefined) style.width = formattedWidth;
  if (formattedHeight !== undefined) style.height = formattedHeight;

  const classes = ["skeleton", `skeleton-${variant}`, className].filter(Boolean).join(" ");

  return {
    role: "status",
    "aria-busy": "true",
    "aria-label": ariaLabel,
    className: classes,
    style,
  };
}
