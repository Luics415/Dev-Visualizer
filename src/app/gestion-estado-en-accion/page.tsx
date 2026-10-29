import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ActionQuizInvite } from "@/components/concepts/ActionQuizInvite";
import { StateManagementPracticalScene } from "@/components/scenes/state-management/StateManagementPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { stateManagementDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function StateManagementActionPage() {
  const presentationTrack = getActionPresentationTrack("state-management");
  const practicalTracks = [
    presentationTrack,
    ...stateManagementDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("state-management", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--state-management-practical">
        <div>
          <span className="eyebrow eyebrow--state-management">Colección {collectionNumber("state-management")} · Caso integrado ampliado</span>
          <h1>Gestión de estado en acción</h1>
          <p>Un constructor de equipos busca a Jinx y distribuye cada dato en la frontera correcta: estado local, URL, store de cliente, caché del servidor y persistencia. El favorito optimista conecta experiencia inmediata, rollback y sincronización.</p>
        </div>
        <div className="hero__counter hero__counter--state-management"><strong>14</strong><span>etapas de propiedad y sincronización</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["state-management"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/gestion-estado">Ver conceptos y catálogo de Gestión de estado <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--state-management practical-stage--card" aria-label="Ejemplo práctico integrado de gestión de estado">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Constructor de equipos en tiempo real</h2>
              <p>Fronteras de estado: local, URL, store global, server state, mutaciones optimistas y persistencia offline.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <StateManagementPracticalScene />
      </section>

      <PracticalDeepDive modules={stateManagementDeepDive} collectionId="state-management" />

      <ActionQuizInvite actionHref="/gestion-estado-en-accion" collectionTitle="Gestión de estado" />

      <footer className="project-note">El caso conecta lo visible con ownership, snapshots, selectores, query cache, optimismo, persistencia, offline y observabilidad.</footer>

      <FloatingAudioBubble collectionName="Gestión de estado en acción" tracks={practicalTracks} />
    </main>
  );
}
