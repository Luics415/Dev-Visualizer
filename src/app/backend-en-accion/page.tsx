import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { BackendPracticalScene } from "@/components/scenes/backend/BackendPracticalScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { backendDeepDive } from "@/data/practicalDeepDives";

export default function BackendActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--backend-practical">
        <div>
          <span className="eyebrow eyebrow--backend">Colección {collectionNumber("backend")} · Caso integrado ampliado</span>
          <h1>Backend en acción</h1>
          <p>Jinx solicita reparar Fishbones. La petición recorre gateway, autenticación, autorización, schema, servicio de dominio y transacción; luego un outbox entrega el trabajo pesado a una cola sin perder trazabilidad.</p>
        </div>
        <div className="hero__counter hero__counter--backend"><strong>14</strong><span>etapas del request a producción</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["backend"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/backend">Ver conceptos y catálogo de Backend <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--backend" aria-label="Ejemplo práctico integrado de backend">
        <BackendPracticalScene />
      </section>

      <PracticalDeepDive modules={backendDeepDive} />

      <footer className="project-note">El ejemplo une contrato HTTP, identidad, reglas, persistencia, asincronía, resiliencia y operación observable.</footer>
    </main>
  );
}
