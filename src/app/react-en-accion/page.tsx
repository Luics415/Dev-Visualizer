import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ActionQuizInvite } from "@/components/concepts/ActionQuizInvite";
import { ReactPracticalScene } from "@/components/scenes/react/ReactPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { reactDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function ReactPracticalPage() {
  const presentationTrack = getActionPresentationTrack("react");
  const practicalTracks = [
    presentationTrack,
    ...reactDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("react", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--react-practical">
        <div>
          <span className="eyebrow eyebrow--react">Colección {collectionNumber("react")} · Caso integrado ampliado</span>
          <h1>React en acción</h1>
          <p>
            La búsqueda de Jinx recorre evento, estado, render, reconciliación, efecto y commit. Las cajas nuevas abren control de inputs, datos derivados, prioridades, cancelación, optimismo, fronteras, accesibilidad y React Compiler.
          </p>
        </div>
        <div className="hero__counter hero__counter--react">
          <strong>14</strong>
          <span>etapas de una actualización</span>
        </div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["react"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/react">Ver conceptos y catálogo de React <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--react practical-stage--card" aria-label="Ejemplo práctico integrado de React">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Búsqueda reactiva de Jinx y reconciliación</h2>
              <p>Ciclo declarativo de React: evento onChange, estado en cola, re-render, reconciliación del Virtual DOM, efecto asíncrono y commit atómico.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <ReactPracticalScene />
      </section>

      <PracticalDeepDive modules={reactDeepDive} collectionId="react" />

      <ActionQuizInvite actionHref="/react-en-accion" collectionTitle="React" />

      <footer className="project-note">
        El ejemplo conecta lo que el usuario percibe con snapshots, prioridades, fronteras de render y trabajo del compilador.
      </footer>

      <FloatingAudioBubble collectionName="React en acción" tracks={practicalTracks} />
    </main>
  );
}
