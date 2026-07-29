import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ReactPracticalScene } from "@/components/scenes/react/ReactPracticalScene";
import { reactDeepDive } from "@/data/practicalDeepDives";

export default function ReactPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--react-practical">
        <div>
          <span className="eyebrow eyebrow--react">Colección 03 · Caso integrado ampliado</span>
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

      <section className="practical-stage practical-stage--react" aria-label="Ejemplo práctico integrado de React">
        <ReactPracticalScene />
      </section>

      <PracticalDeepDive modules={reactDeepDive} />

      <footer className="project-note">
        El ejemplo conecta lo que el usuario percibe con snapshots, prioridades, fronteras de render y trabajo del compilador.
      </footer>
    </main>
  );
}
