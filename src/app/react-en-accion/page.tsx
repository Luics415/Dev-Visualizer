import { CollectionNav } from "@/components/navigation/CollectionNav";
import { ReactPracticalScene } from "@/components/scenes/react/ReactPracticalScene";

export default function ReactPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--react-practical">
        <div>
          <span className="eyebrow eyebrow--react">Colección 03 · Caso integrado</span>
          <h1>React en acción</h1>
          <p>
            Una búsqueda recorre evento, actualización de estado, render, reconciliación, efecto y commit. Las seis escenas muestran qué ocurre antes de que el usuario vea una nueva lista de resultados.
          </p>
        </div>
        <div className="hero__counter hero__counter--react">
          <strong>6</strong>
          <span>etapas de una actualización</span>
        </div>
      </header>

      <section className="practical-stage practical-stage--react" aria-label="Ejemplo práctico integrado de React">
        <ReactPracticalScene />
      </section>

      <footer className="project-note">
        React vuelve a calcular una descripción de la interfaz, compara identidades y aplica solamente los cambios necesarios después del commit.
      </footer>
    </main>
  );
}
