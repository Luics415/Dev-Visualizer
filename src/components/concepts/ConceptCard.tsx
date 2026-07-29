import type { ReactNode } from "react";

type ConceptCardProps = {
  index: number;
  title: string;
  description: string;
  children?: ReactNode;
  status?: "ready" | "planned";
};

export function ConceptCard({
  index,
  title,
  description,
  children,
  status = "ready",
}: ConceptCardProps) {
  return (
    <article className={`concept-card concept-card--${status}`}>
      <header className="concept-card__header">
        <h2>
          <span>{index}.</span> {title}
        </h2>
        {status === "planned" ? (
          <span className="concept-card__status">Próximamente</span>
        ) : null}
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
