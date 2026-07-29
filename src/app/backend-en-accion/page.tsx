import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { BackendPracticalScene } from "@/components/scenes/backend/BackendPracticalScene";
import { backendDeepDive } from "@/data/practicalDeepDives";

export default function BackendActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--backend-practical">
        <div>
          <span className="eyebrow eyebrow--backend">Colección 07 · Caso integrado ampliado</span>
          <h1>Backend en acción</h1>
          <p>Jinx solicita reparar Fishbones. La petición recorre gateway, autenticación, autorización, schema, servicio de dominio y transacción; luego un outbox entrega el trabajo pesado a una cola sin perder trazabilidad.</p>
        </div>
        <div className="hero__counter hero__counter--backend"><strong>14</strong><span>etapas del request a producción</span></div>
      </header>

      <section className="practical-stage practical-stage--backend" aria-label="Ejemplo práctico integrado de backend">
        <BackendPracticalScene />
      </section>

      <PracticalDeepDive modules={backendDeepDive} />

      <footer className="project-note">El ejemplo une contrato HTTP, identidad, reglas, persistencia, asincronía, resiliencia y operación observable.</footer>
    </main>
  );
}
