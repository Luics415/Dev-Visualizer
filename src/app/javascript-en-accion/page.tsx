import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { JavaScriptPracticalScene } from "@/components/scenes/javascript/JavaScriptPracticalScene";
import { javascriptDeepDive } from "@/data/practicalDeepDives";

export default function JavaScriptPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--practical">
        <div>
          <span className="eyebrow">Colección 01 · Caso integrado ampliado</span>
          <h1>JavaScript en acción</h1>
          <p>
            Una compra recorre eventos, estado, transformaciones, red, espera asíncrona y renderizado. Después, ocho cajas dobles explican normalización, closures, acceso defensivo, concurrencia, cancelación, módulos, persistencia y recuperación de errores.
          </p>
        </div>
        <div className="hero__counter">
          <strong>14</strong>
          <span>etapas conectadas</span>
        </div>
      </header>

      <section className="practical-stage" aria-label="Ejemplo práctico integrado de JavaScript">
        <JavaScriptPracticalScene />
      </section>

      <PracticalDeepDive modules={javascriptDeepDive} />

      <footer className="project-note">
        El caso completo sigue al dato desde la entrada del usuario hasta la memoria, las colas, la red, el almacenamiento y la ruta de recuperación.
      </footer>
    </main>
  );
}
