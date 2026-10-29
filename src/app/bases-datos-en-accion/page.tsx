import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ActionQuizInvite } from "@/components/concepts/ActionQuizInvite";
import { DatabasePracticalScene } from "@/components/scenes/databases/DatabasePracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { databaseDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function DatabasesActionPage() {
  const presentationTrack = getActionPresentationTrack("databases");
  const practicalTracks = [
    presentationTrack,
    ...databaseDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("databases", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--databases-practical">
        <div>
          <span className="eyebrow eyebrow--databases">Colección {collectionNumber("databases")} · Caso integrado ampliado</span>
          <h1>Bases de datos en acción</h1>
          <p>Dos solicitudes intentan reservar la última pieza Hextech. El motor usa un índice, crea snapshots, coordina concurrencia, confirma una transacción, escribe el log y replica el cambio sin perder la invariante.</p>
        </div>
        <div className="hero__counter hero__counter--databases"><strong>14</strong><span>etapas de consulta, commit y recuperación</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["databases"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/bases-datos">Ver conceptos y catálogo de Bases de datos <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--databases practical-stage--card" aria-label="Ejemplo práctico integrado de bases de datos">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Reserva Hextech concurrente</h2>
              <p>Concurrencia, índices, MVCC, locks de fila, transacción ACID, durabilidad en log y réplicas secundarias.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <DatabasePracticalScene />
      </section>

      <PracticalDeepDive modules={databaseDeepDive} collectionId="databases" />

      <ActionQuizInvite actionHref="/bases-datos-en-accion" collectionTitle="Bases de datos" />

      <footer className="project-note">El caso conecta modelo, constraints, planner, índices, transacciones, MVCC, replicación, migraciones, backups y gobierno del dato.</footer>

      <FloatingAudioBubble collectionName="Bases de datos en acción" tracks={practicalTracks} />
    </main>
  );
}
