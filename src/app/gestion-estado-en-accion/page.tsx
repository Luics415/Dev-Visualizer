import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { StateManagementPracticalScene } from "@/components/scenes/state-management/StateManagementPracticalScene";
import { stateManagementDeepDive } from "@/data/practicalDeepDives";

export default function StateManagementActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--state-management-practical">
        <div>
          <span className="eyebrow eyebrow--state-management">Colección 05 · Caso integrado ampliado</span>
          <h1>Gestión de estado en acción</h1>
          <p>Un constructor de equipos busca a Jinx y distribuye cada dato en la frontera correcta: estado local, URL, store de cliente, caché del servidor y persistencia. El favorito optimista conecta experiencia inmediata, rollback y sincronización.</p>
        </div>
        <div className="hero__counter hero__counter--state-management"><strong>14</strong><span>etapas de propiedad y sincronización</span></div>
      </header>

      <section className="practical-stage practical-stage--state-management" aria-label="Ejemplo práctico integrado de gestión de estado">
        <StateManagementPracticalScene />
      </section>

      <PracticalDeepDive modules={stateManagementDeepDive} />

      <footer className="project-note">El caso conecta lo visible con ownership, snapshots, selectores, query cache, optimismo, persistencia, offline y observabilidad.</footer>
    </main>
  );
}
