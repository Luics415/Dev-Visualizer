import type { ReactNode } from "react";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
import { createStudyScene } from "@/data/atlasConceptFactory";
import { officialReferenceKindLabels, officialReferencesForConcept } from "@/data/officialReferences";

type ConceptCardProps = {
  index: number;
  title: string;
  description: string;
  collectionId: string;
  section: string;
  children?: ReactNode;
  status?: "ready" | "planned";
  family?: string;
  layout?: "standard" | "wide" | "compact" | "feature";
};

export function ConceptCard({
  index,
  title,
  description,
  collectionId,
  section,
  children,
  status = "ready",
  family = "flujo",
  layout = "standard",
}: ConceptCardProps) {
  const references = officialReferencesForConcept(collectionId, { title, description, section });
  const fallbackScene = createStudyScene(title, description, section);

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
        {children ?? <AnimatedConceptScene ariaLabel={`Animación explicativa de ${title}`} code={fallbackScene.code} nodes={fallbackScene.nodes} outcome={fallbackScene.outcome} caption={fallbackScene.caption} variant={fallbackScene.variant} />}
      </div>

      <p>{description}</p>

      <footer className="concept-card__references" aria-label={`Fuentes oficiales de ${title}`}>
        <span>Fuentes verificadas</span>
        <div>
          {references.map((reference) => (
            <a href={reference.href} key={reference.id} target="_blank" rel="noreferrer" title={`${reference.coverage} Verificada el ${reference.verifiedAt}.`}>
              <small>{officialReferenceKindLabels[reference.kind]}</small>
              <b>{reference.label}</b>
              <em>{reference.authority} · {reference.version}</em>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </footer>
    </article>
  );
}
