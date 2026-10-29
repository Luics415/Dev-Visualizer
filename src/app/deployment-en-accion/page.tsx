import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ActionQuizInvite } from "@/components/concepts/ActionQuizInvite";
import { DistinctActionScene } from "@/components/scenes/DistinctActionScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { deploymentRuntimeCase } from "@/data/phase1Collections";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function DeploymentActionPage() {
  const practical = deploymentRuntimeCase;
  const presentationTrack = getActionPresentationTrack("deployment", practical);
  const practicalTracks = [
    presentationTrack,
    ...practical.steps.map((step, i) =>
      buildPracticalModuleAudioTrack("deployment", step, i + 1)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--deployment-practical">
        <div><span className="eyebrow">Colección {collectionNumber("deployment")} · {practical.eyebrow}</span><h1>{practical.title}</h1><p>{practical.description}</p></div>
        <div className="hero__counter"><strong>{practical.steps.length}</strong><span>etapas de rollout y recuperación</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["deployment"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/deployment">Ver conceptos y catálogo de Deployment <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--expanded practical-stage--card" aria-label="Caso práctico integrado de Deployment">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Del digest aprobado al tráfico seguro</h2>
              <p>Rollout progresivo: admisión del artefacto inmutable, configuración desacoplada, migración de esquema compatible, canary y rollback instantáneo.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <DistinctActionScene id="deployment" />
      </section>

      <PracticalDeepDive modules={practical.steps} startAt={1} collectionId="deployment" />

      <ActionQuizInvite actionHref="/deployment-en-accion" collectionTitle="Deployment" />

      <footer className="project-note">{practical.footer}</footer>

      <FloatingAudioBubble collectionName="Deployment en acción" tracks={practicalTracks} />
    </main>
  );
}
