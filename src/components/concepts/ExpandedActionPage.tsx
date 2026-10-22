import Link from "next/link";
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
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
  isCollectionAudioEnabled,
} from "@/lib/audioTrackHelper";

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

  const isAudioActive = isCollectionAudioEnabled(manifest.id);
  const presentationTrack = isAudioActive
    ? getActionPresentationTrack(manifest.id, practical)
    : null;
  const practicalTracks = isAudioActive && presentationTrack
    ? [
        presentationTrack,
        ...practical.steps.map((step, i) =>
          buildPracticalModuleAudioTrack(manifest.id, step, i + 1)
        ),
      ]
    : [];

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

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href={manifest.href}>Ver conceptos y catálogo de {manifest.label} <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--expanded practical-stage--card" aria-label={`Caso práctico integrado de ${manifest.label}`}>
        {presentationTrack ? (
          <header className="practical-card__header">
            <div className="practical-card__title-group">
              <span className="practical-card__badge">00</span>
              <div>
                <h2>{practical.title}</h2>
                <p>{practical.eyebrow ?? practical.description}</p>
              </div>
            </div>
            <div className="practical-card__actions">
              <ConceptAudioTrigger track={presentationTrack} />
              <span className="practical-card__family">{presentationTrack.family}</span>
            </div>
          </header>
        ) : null}

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

      <PracticalDeepDive modules={practical.steps} startAt={1} collectionId={manifest.id} />

      <section className="action-quiz-invite" aria-label="Validación didáctica de conocimientos">
        <div className="action-quiz-invite__content">
          <span className="action-quiz-invite__badge">Modo Quiz Opcional</span>
          <h3>¿Listo para validar tu comprensión técnica?</h3>
          <p>
            Pon a prueba lo estudiado con una evaluación rápida de 15 preguntas seleccionadas al azar.
            Sin inicio de sesión y con intentos ilimitados.
          </p>
        </div>
        <Link href={`${manifest.actionHref}/quiz`} className="action-quiz-invite__btn">
          <span>Iniciar Quiz Técnico</span>
        </Link>
      </section>

      <footer className="project-note">{practical.footer}</footer>

      {isAudioActive && practicalTracks.length > 0 ? (
        <FloatingAudioBubble collectionName={practical.title} tracks={practicalTracks} />
      ) : null}
    </main>
  );
}
