import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { JavaScriptPracticalScene } from "@/components/scenes/javascript/JavaScriptPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { javascriptDeepDive } from "@/data/practicalDeepDives";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import {
  buildPracticalModuleAudioTrack,
  buildPracticalPresentationAudioTrack,
} from "@/lib/audioTrackHelper";

export default function JavaScriptPracticalPage() {
  const presentationTrack = buildPracticalPresentationAudioTrack("javascript", {
    title: "JavaScript en acción",
    subtitle: "Flujo integrado de una compra",
    family: "flujo general coordinado",
    section: "Presentación interactiva",
    stagesExplanation:
      "En esta presentación interactiva, un clic del usuario desencadena el ciclo de vida completo del dato a través de seis etapas animadas. Primero, en Evento, el clic en el botón Agregar activa el handler onClick. Segundo, en Estado, el array del carrito se actualiza inmutablemente mediante spread incorporando el teclado junto al monitor. Tercero, en Transformación, el pipeline ejecuta filter para validar stock, map para calcular precio por cantidad y reduce para consolidar el subtotal de $225. Cuarto, en Red, una petición POST envía el subtotal a la API y recibe un cupón de descuento de $25. Quinto, en Asincronía, la función se suspende en el await sin bloquear el hilo principal, permitiendo que la interfaz siga respondiendo a eventos y animaciones. Y sexto, en Render, el estado recalcula el total final en $200 y actualiza reactivamente el recibo en pantalla.",
    visualOutcome:
      "la animación ilumina secuencialmente cada una de las seis etapas sincronizadas, demostrando cómo JavaScript procesa eventos, transforma datos en memoria y coordina la red de forma asíncrona sin congelar la experiencia del usuario.",
  });

  const practicalTracks = [
    presentationTrack,
    ...javascriptDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("javascript", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--javascript-practical">
        <div>
          <span className="eyebrow eyebrow--javascript">Colección {collectionNumber("javascript")} · Caso integrado ampliado</span>
          <h1>JavaScript en acción</h1>
          <p>
            Una compra recorre eventos, estado, transformaciones, red, espera asíncrona y renderizado. Después, ocho cajas dobles explican normalización, closures, acceso defensivo, concurrencia, cancelación, módulos, persistencia y recuperación de errores.
          </p>
        </div>
        <div className="hero__counter hero__counter--javascript">
          <strong>14</strong>
          <span>etapas conectadas</span>
        </div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["javascript"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/">Ver conceptos y catálogo de JavaScript ES6+ <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--card" aria-label="Presentación interactiva: Flujo integrado de una compra">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Flujo integrado de una compra</h2>
              <p>Ciclo de vida interactivo de un dato a través de eventos, estado inmutable, transformaciones funcionales, red, asincronía y render.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <JavaScriptPracticalScene />
      </section>

      <PracticalDeepDive modules={javascriptDeepDive} collectionId="javascript" />

      <footer className="project-note">
        El caso completo sigue al dato desde la entrada del usuario hasta la memoria, las colas, la red, el almacenamiento y la ruta de recuperación.
      </footer>

      <FloatingAudioBubble collectionName="JavaScript en acción" tracks={practicalTracks} />
    </main>
  );
}
