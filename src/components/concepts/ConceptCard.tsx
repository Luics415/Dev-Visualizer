import type { ReactNode } from "react";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { createStudyScene } from "@/data/atlasConceptFactory";
import { officialReferenceKindLabels, officialReferencesForConcept } from "@/data/officialReferences";
import { buildConceptAudioTrack, isCollectionAudioEnabled } from "@/lib/audioTrackHelper";
import { slugify } from "@/lib/slugify";
import type { AudioTrack } from "@/lib/audioNarrator";

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
  audioTrack?: AudioTrack;
  enableAudio?: boolean;
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
  audioTrack,
  enableAudio,
}: ConceptCardProps) {
  const references = officialReferencesForConcept(collectionId, { title, description, section });
  const fallbackScene = createStudyScene(title, description, section);
  const isAudioEnabled = enableAudio ?? isCollectionAudioEnabled(collectionId);
  const track = isAudioEnabled ? (audioTrack ?? buildConceptAudioTrack(collectionId, { title, description, section, family }, index)) : null;

  return (
    <article
      id={`concepto-${slugify(title)}`}
      className={`concept-card concept-card--${status} concept-card--${layout}`}
      data-family={family}
    >
      <header className="concept-card__header">
        <h2>
          <span>{String(index).padStart(2, "0")}</span>
          {title}
        </h2>
        <div className="concept-card__header-actions">
          {track ? <ConceptAudioTrigger track={track} compact /> : null}
          <span className="concept-card__family">{family}</span>
        </div>
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
