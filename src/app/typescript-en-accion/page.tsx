import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { TypeScriptPracticalScene } from "@/components/scenes/typescript/TypeScriptPracticalScene";
import { typescriptDeepDive } from "@/data/practicalDeepDives";

export default function TypeScriptPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--typescript-practical">
        <div>
          <span className="eyebrow eyebrow--typescript">Colección 02 · Caso integrado ampliado</span>
          <h1>TypeScript en acción</h1>
          <p>
            El pedido atraviesa contratos, genéricos, estados discriminados, narrowing y compilación. La profundización añade fronteras unknown, satisfies, IDs nominales, type-only imports, pruebas de tipos y artefactos de build.
          </p>
        </div>
        <div className="hero__counter hero__counter--typescript">
          <strong>14</strong>
          <span>capas de seguridad</span>
        </div>
      </header>

      <section className="practical-stage practical-stage--typescript" aria-label="Ejemplo práctico integrado de TypeScript">
        <TypeScriptPracticalScene />
      </section>

      <PracticalDeepDive modules={typescriptDeepDive} />

      <footer className="project-note">
        Los tipos protegen el desarrollo; los esquemas protegen la frontera de runtime y el build conserva una experiencia depurable para autores y consumidores.
      </footer>
    </main>
  );
}
