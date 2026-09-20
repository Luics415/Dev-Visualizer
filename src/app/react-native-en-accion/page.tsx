import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ReactNativePracticalScene } from "@/components/scenes/react-native/ReactNativePracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { reactNativeDeepDive } from "@/data/practicalDeepDives";

export default function ReactNativePracticalPage() {
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

      <section className="practical-stage practical-stage--react-native" aria-label="Ejemplo práctico integrado de React Native">
        <ReactNativePracticalScene />
      </section>

      <PracticalDeepDive modules={reactNativeDeepDive} />

      <footer className="project-note">
        Una experiencia móvil real sigue funcionando entre dispositivos, estados de red, ciclos del sistema y releases que llegan a usuarios.
      </footer>
    </main>
  );
}
