import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { CiCdArtifactPassportScene } from "@/components/scenes/CiCdArtifactPassportScene";
import { DistinctActionScene } from "@/components/scenes/DistinctActionScene";
import type { DistinctActionSceneId } from "@/components/scenes/DistinctActionScene";
import { PythonMediaPipeActionScene } from "@/components/scenes/PythonMediaPipeActionScene";
import { FlutterActionScene } from "@/components/scenes/FlutterActionScene";
import { DartActionScene } from "@/components/scenes/DartActionScene";
import { NewLearningActionScene } from "@/components/scenes/NewLearningActionScene";
import { isNewLearningActionSceneId } from "@/data/newLearningActionScenes";
import { collectionNotices } from "@/data/collectionNotices";
import type { ExpandedCollectionDefinition } from "@/data/expandedCollectionTypes";
import type { CollectionManifestEntry } from "@/data/collectionManifest";

type ExpandedActionPageProps = {
  collection: ExpandedCollectionDefinition;
  manifest: CollectionManifestEntry;
  collectionNumber: string;
};

export function ExpandedActionPage({ collection, manifest, collectionNumber }: ExpandedActionPageProps) {
  const practical = collection.caseStudy;
  const rawNotice = collection.notice ?? collectionNotices[manifest.id];
  const isLegacy = manifest.lifecycle === "legado";
  const isHistorical = manifest.lifecycle === "histórico";
  const noticeLabel = isLegacy ? "Tecnología heredada" : isHistorical ? "Tecnología histórica" : "Contexto tecnológico";
  const noticeClass = `collection-notice${isLegacy ? " collection-notice--legacy" : isHistorical ? " collection-notice--historical" : ""}`;
  const notice = rawNotice?.replace(/^(?:Tecnología heredada|Tecnología histórica):\s*/i, "");

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

      {notice ? (
        <aside className={noticeClass}>
          <strong>{noticeLabel}</strong>
          <p>{notice}</p>
        </aside>
      ) : null}

      <section className="practical-stage practical-stage--expanded" aria-label={`Caso práctico integrado de ${manifest.label}`}>
        {manifest.id === "ci-cd"
          ? <CiCdArtifactPassportScene />
          : manifest.id === "mediapipe"
            ? <PythonMediaPipeActionScene />
            : manifest.id === "flutter"
              ? <FlutterActionScene />
              : manifest.id === "dart"
                ? <DartActionScene />
                : isNewLearningActionSceneId(manifest.id)
                  ? <NewLearningActionScene id={manifest.id} />
                  : <DistinctActionScene id={manifest.id as DistinctActionSceneId} />}
      </section>

      <PracticalDeepDive modules={practical.steps} startAt={1} />
      <footer className="project-note">{practical.footer}</footer>
    </main>
  );
}
