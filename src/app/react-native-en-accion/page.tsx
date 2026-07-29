import { CollectionNav } from "@/components/navigation/CollectionNav";
import { ReactNativePracticalScene } from "@/components/scenes/react-native/ReactNativePracticalScene";

export default function ReactNativePracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--react-native-practical">
        <div>
          <span className="eyebrow eyebrow--react-native">Colección 04 · Caso integrado</span>
          <h1>React Native en acción</h1>
          <p>
            Un reporte con fotografía atraviesa una pulsación nativa, estado de React, permiso del sistema, cámara, carga HTTP y navegación. Las seis etapas separan con claridad qué ocurre en JavaScript, qué pertenece al dispositivo y cuándo cambia la interfaz.
          </p>
        </div>
        <div className="hero__counter hero__counter--react-native">
          <strong>6</strong>
          <span>fronteras móvil–sistema–API</span>
        </div>
      </header>

      <section className="practical-stage practical-stage--react-native" aria-label="Ejemplo práctico integrado de React Native">
        <ReactNativePracticalScene />
      </section>

      <footer className="project-note">
        React Native coordina un árbol declarativo en JavaScript con eventos, permisos, módulos y vistas que pertenecen realmente a iOS o Android.
      </footer>
    </main>
  );
}
