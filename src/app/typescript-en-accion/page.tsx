import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ActionQuizInvite } from "@/components/concepts/ActionQuizInvite";
import { TypeScriptPracticalScene } from "@/components/scenes/typescript/TypeScriptPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { typescriptDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function TypeScriptPracticalPage() {
  const presentationTrack = getActionPresentationTrack("typescript");
  const practicalTracks = [
    presentationTrack,
    ...typescriptDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("typescript", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--typescript-practical">
        <div>
          <span className="eyebrow eyebrow--typescript">Colección {collectionNumber("typescript")} · Caso integrado ampliado</span>
          <h1>TypeScript en acción</h1>
          <p>
            El pedido atraviesa contratos, genéricos, estados discriminados, narrowing y compilación. La profundización añade fronteras unknown, satisfies, IDs nominales, type-only imports, pruebas de tipos y artefactos de build.
          </p>
        </div>
        <div className="hero__counter hero__counter--typescript">
          <strong>14</strong>
          <span>capas de seguridad</span>
        </div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["typescript"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/typescript">Ver conceptos y catálogo de TypeScript <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--typescript practical-stage--card" aria-label="Ejemplo práctico integrado de TypeScript">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Flujo seguro de órdenes con tipado estático</h2>
              <p>Contratos estrictos, genéricos, uniones discriminadas, narrowing, satisfies y verificación de runtime.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <TypeScriptPracticalScene />
      </section>

      <PracticalDeepDive modules={typescriptDeepDive} collectionId="typescript" />

      <ActionQuizInvite actionHref="/typescript-en-accion" collectionTitle="TypeScript" />

      <footer className="project-note">
        Los tipos protegen el desarrollo; los esquemas protegen la frontera de runtime y el build conserva una experiencia depurable para autores y consumidores.
      </footer>

      <FloatingAudioBubble collectionName="TypeScript en acción" tracks={practicalTracks} />
    </main>
  );
}
