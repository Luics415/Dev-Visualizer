import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { DebuggingPracticalScene } from "@/components/scenes/debugging/DebuggingPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { debuggingDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function DebuggingActionPage() {
  const presentationTrack = getActionPresentationTrack("debugging");
  const practicalTracks = [
    presentationTrack,
    ...debuggingDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("debugging", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--debugging-practical">
        <div>
          <span className="eyebrow eyebrow--debugging">Colección {collectionNumber("debugging")} · Caso integrado ampliado</span>
          <h1>Debugging en acción</h1>
          <p>Caitlyn investiga por qué una sola pulsación de Jinx crea dos órdenes para reparar Fishbones. El caso acota la regresión, reproduce el lifecycle, conecta UI, Network, backend y base de datos con un request ID, pausa en el listener, prueba una hipótesis y termina con cleanup, idempotencia, prueba de regresión y canary.</p>
        </div>
        <div className="hero__counter hero__counter--debugging"><strong>14</strong><span>etapas de una investigación causal</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["debugging"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/debugging">Ver conceptos y catálogo de Debugging <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--debugging practical-stage--card" aria-label="Caso práctico integrado de debugging">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Investigación causal de la duplicación de órdenes</h2>
              <p>Diagnóstico forense: aislamiento del síntoma, traza de eventos en el navegador, inspección de red, breakpoints, hipótesis confirmada e idempotencia.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <DebuggingPracticalScene />
      </section>

      <PracticalDeepDive modules={debuggingDeepDive} collectionId="debugging" />
      <footer className="project-note">El caso conserva el estilo de un expediente: cada dato debe apoyar o refutar una hipótesis. El fix del cliente elimina la causa conocida y la idempotencia del servidor evita que otras rutas de duplicación produzcan el mismo daño.</footer>

      <FloatingAudioBubble collectionName="Debugging en acción" tracks={practicalTracks} />
    </main>
  );
}
