import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { DatabasePracticalScene } from "@/components/scenes/databases/DatabasePracticalScene";
import { databaseDeepDive } from "@/data/practicalDeepDives";

export default function DatabasesActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--databases-practical">
        <div>
          <span className="eyebrow eyebrow--databases">Colección 08 · Caso integrado ampliado</span>
          <h1>Bases de datos en acción</h1>
          <p>Dos solicitudes intentan reservar la última pieza Hextech. El motor usa un índice, crea snapshots, coordina concurrencia, confirma una transacción, escribe el log y replica el cambio sin perder la invariante.</p>
        </div>
        <div className="hero__counter hero__counter--databases"><strong>14</strong><span>etapas de consulta, commit y recuperación</span></div>
      </header>

      <section className="practical-stage practical-stage--databases" aria-label="Ejemplo práctico integrado de bases de datos">
        <DatabasePracticalScene />
      </section>

      <PracticalDeepDive modules={databaseDeepDive} />

      <footer className="project-note">El caso conecta modelo, constraints, planner, índices, transacciones, MVCC, replicación, migraciones, backups y gobierno del dato.</footer>
    </main>
  );
}
