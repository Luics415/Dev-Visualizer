import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ActionQuizInvite } from "@/components/concepts/ActionQuizInvite";
import { BackendPracticalScene } from "@/components/scenes/backend/BackendPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { backendDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function BackendActionPage() {
  const presentationTrack = getActionPresentationTrack("backend");
  const practicalTracks = [
    presentationTrack,
    ...backendDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("backend", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--backend-practical">
        <div>
          <span className="eyebrow eyebrow--backend">Colección {collectionNumber("backend")} · Caso integrado ampliado</span>
          <h1>Backend en acción</h1>
          <p>Jinx solicita reparar Fishbones. La petición recorre gateway, autenticación, autorización, schema, servicio de dominio y transacción; luego un outbox entrega el trabajo pesado a una cola sin perder trazabilidad.</p>
        </div>
        <div className="hero__counter hero__counter--backend"><strong>14</strong><span>etapas del request a producción</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["backend"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/backend">Ver conceptos y catálogo de Backend <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--backend practical-stage--card" aria-label="Ejemplo práctico integrado de backend">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Reparación de Fishbones en producción</h2>
              <p>Ciclo completo de backend: API gateway, autenticación, autorización, validación de schema, dominio, transacción ACID, transactional outbox y workers.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <BackendPracticalScene />
      </section>

      <PracticalDeepDive modules={backendDeepDive} collectionId="backend" />

      <ActionQuizInvite actionHref="/backend-en-accion" collectionTitle="Backend" />

      <footer className="project-note">El ejemplo une contrato HTTP, identidad, reglas, persistencia, asincronía, resiliencia y operación observable.</footer>

      <FloatingAudioBubble collectionName="Backend en acción" tracks={practicalTracks} />
    </main>
  );
}
