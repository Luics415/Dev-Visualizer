import Link from "next/link";
import { CollectionChapters } from "@/components/concepts/CollectionChapters";
import { CollectionPrimer } from "@/components/concepts/CollectionPrimer";
import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
import type { StudyConcept } from "@/data/conceptTypes";
import { collectionPrimers, primerKeyFromHeroClass } from "@/data/collectionPrimers";
import type { CollectionPrimer as CollectionPrimerData } from "@/data/collectionPrimers";
import type { OfficialSource } from "@/data/expandedCollectionTypes";
import { slugify } from "@/lib/slugify";

type StudyAtlasCollectionProps = {
  collectionNumber: string;
  eyebrow: string;
  title: string;
  description: string;
  concepts: readonly StudyConcept[];
  heroClassName: string;
  accentClassName: string;
  counterLabel: string;
  footer: string;
  primer?: CollectionPrimerData;
  notice?: string;
  sources?: readonly OfficialSource[];
  actionHref?: string;
};

export function StudyAtlasCollection({
  collectionNumber,
  eyebrow,
  title,
  description,
  concepts,
  heroClassName,
  accentClassName,
  counterLabel,
  footer,
  primer: providedPrimer,
  notice,
  sources = [],
  actionHref,
}: StudyAtlasCollectionProps) {
  const sections = [...new Set(concepts.map((concept) => concept.section))];
  const primer = providedPrimer ?? collectionPrimers[primerKeyFromHeroClass(heroClassName)];
  const chapters = sections.map((name) => ({
    name,
    count: concepts.filter((concept) => concept.section === name).length,
  }));

  return (
    <main className="page-shell">
      <CollectionNav />

      <header className={`hero ${heroClassName}`}>
        <div>
          <span className={`eyebrow ${accentClassName}`}>Colección {collectionNumber} · {eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={`hero__counter ${accentClassName.replace("eyebrow", "hero__counter")}`}>
          <strong>{concepts.length}</strong>
          <span>{counterLabel} en {sections.length} capítulos</span>
        </div>
      </header>

      {notice ? <aside className="collection-notice"><strong>Contexto tecnológico</strong><p>{notice}</p></aside> : null}

      {actionHref ? (
        <div className="collection-action-link">
          <span>Después de estudiar los mecanismos</span>
          <Link href={actionHref}>Ver {title.replace(/ visualizad[oa]s?$/i, "")} en acción <b>↗</b></Link>
        </div>
      ) : null}

      <CollectionPrimer primer={primer} />

      <CollectionChapters chapters={chapters} />

      {sections.map((section, chapterIndex) => (
        <section className="collection-section" id={slugify(section)} key={section}>
          <header className="collection-section__header">
            <span>Capítulo {String(chapterIndex + 1).padStart(2, "0")}</span>
            <h2>{section}</h2>
            <b>{chapters[chapterIndex]?.count} conceptos</b>
          </header>

          <div className="concept-grid concept-grid--atlas" aria-label={section}>
            {concepts.map((concept, index) => concept.section === section ? (
              <ConceptCard
                key={concept.title}
                index={index + 1}
                title={concept.title}
                description={concept.description}
                family={concept.family}
                layout={concept.layout}
              >
                {concept.scene ? (
                  <AnimatedConceptScene
                    ariaLabel={`Animación explicativa de ${concept.title}`}
                    code={concept.scene.code}
                    nodes={concept.scene.nodes}
                    outcome={concept.scene.outcome}
                    caption={concept.scene.caption}
                    variant={concept.scene.variant}
                  />
                ) : null}
              </ConceptCard>
            ) : null)}
          </div>
        </section>
      ))}

      {sources.length > 0 ? (
        <aside className="official-sources" aria-labelledby="official-sources-title">
          <div><span>Lectura técnica</span><h2 id="official-sources-title">Fuentes oficiales y especificaciones</h2></div>
          <div>{sources.map((source) => <a href={source.href} key={source.href} target="_blank" rel="noreferrer">{source.label}<b>↗</b></a>)}</div>
        </aside>
      ) : null}

      <footer className="project-note">{footer}</footer>
    </main>
  );
}
