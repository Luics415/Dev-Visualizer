import type { ReactNode } from "react";

type ConceptCardProps = {
  index: number;
  title: string;
  description: string;
  children?: ReactNode;
  status?: "ready" | "planned";
  family?: string;
  layout?: "standard" | "wide" | "compact" | "feature";
};

export function ConceptCard({
  index,
  title,
  description,
  children,
  status = "ready",
  family = "flujo",
  layout = "standard",
}: ConceptCardProps) {
  return (
    <article className={`concept-card concept-card--${status} concept-card--${layout}`} data-family={family}>
      <header className="concept-card__header">
        <h2>
          <span>{String(index).padStart(2, "0")}</span>
          {title}
        </h2>
        <span className="concept-card__family">{family}</span>
      </header>

      <div className="concept-card__stage">
        {children ?? (
          <div className="planned-stage" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
      </div>

      <p>{description}</p>
    </article>
  );
}
