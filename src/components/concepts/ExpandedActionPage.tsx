import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { CiCdArtifactPassportScene } from "@/components/scenes/CiCdArtifactPassportScene";
import { IntegratedCaseScene } from "@/components/scenes/IntegratedCaseScene";
import type { ExpandedCollectionDefinition } from "@/data/expandedCollectionTypes";
import type { CollectionManifestEntry } from "@/data/collectionManifest";

type ExpandedActionPageProps = {
  collection: ExpandedCollectionDefinition;
  manifest: CollectionManifestEntry;
  collectionNumber: string;
};

export function ExpandedActionPage({ collection, manifest, collectionNumber }: ExpandedActionPageProps) {
  const practical = collection.caseStudy;
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className={`hero hero--${manifest.theme}-practical`}>
        <div>
          <span className="eyebrow">Colección {collectionNumber} · {practical.eyebrow}</span>
          <h1>{practical.title}</h1>
          <p>{practical.description}</p>
        </div>
        <div className="hero__counter"><strong>{practical.steps.length}</strong><span>etapas · una historia integrada</span></div>
      </header>

      {collection.notice ? <aside className="collection-notice"><strong>Contexto tecnológico</strong><p>{collection.notice}</p></aside> : null}

      <section className="practical-stage practical-stage--expanded" aria-label={`Caso práctico integrado de ${manifest.label}`}>
        {manifest.id === "ci-cd" ? <CiCdArtifactPassportScene /> : <IntegratedCaseScene title={practical.title} steps={practical.steps} />}
      </section>

      <PracticalDeepDive modules={practical.steps} startAt={1} />
      <footer className="project-note">{practical.footer}</footer>
    </main>
  );
}
