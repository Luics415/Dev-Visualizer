import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ReactNativePracticalScene } from "@/components/scenes/react-native/ReactNativePracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { reactNativeDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export default function ReactNativePracticalPage() {
  const presentationTrack = getActionPresentationTrack("react-native");
  const practicalTracks = [
    presentationTrack,
    ...reactNativeDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("react-native", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--react-native-practical">
        <div>
          <span className="eyebrow eyebrow--react-native">Colección {collectionNumber("react-native")} · Caso integrado ampliado</span>
          <h1>React Native en acción</h1>
          <p>
            El reporte fotográfico atraviesa pulsación, estado, permiso, cámara, HTTP y navegación. La segunda parte suma layout adaptable, cola offline, AppState, deep links, push, accesibilidad, presupuesto de frames y entrega móvil.
          </p>
        </div>
        <div className="hero__counter hero__counter--react-native">
          <strong>14</strong>
          <span>fronteras móvil–sistema–API</span>
        </div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["react-native"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/react-native">Ver conceptos y catálogo de React Native <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--react-native practical-stage--card" aria-label="Ejemplo práctico integrado de React Native">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Reporte fotográfico y hardware móvil</h2>
              <p>Ciclo móvil integral: pulsación nativa, estado y render, autorización de permisos, cámara y hardware, subida HTTP y navegación.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <ReactNativePracticalScene />
      </section>

      <PracticalDeepDive modules={reactNativeDeepDive} collectionId="react-native" />

      <footer className="project-note">
        Una experiencia móvil real sigue funcionando entre dispositivos, estados de red, ciclos del sistema y releases que llegan a usuarios.
      </footer>

      <FloatingAudioBubble collectionName="React Native en acción" tracks={practicalTracks} />
    </main>
  );
}
