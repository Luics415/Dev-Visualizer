import { CollectionNav } from "@/components/navigation/CollectionNav";
import { TypeScriptPracticalScene } from "@/components/scenes/typescript/TypeScriptPracticalScene";

export default function TypeScriptPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--typescript-practical">
        <div>
          <span className="eyebrow eyebrow--typescript">Colección 02 · Caso integrado</span>
          <h1>TypeScript en acción</h1>
          <p>
            Un pedido atraviesa entradas tipadas, contratos, genéricos, estados discriminados, narrowing y compilación. La historia separa con claridad lo que TypeScript comprueba al desarrollar de lo que JavaScript ejecuta en el navegador.
          </p>
        </div>
        <div className="hero__counter hero__counter--typescript">
          <strong>6</strong>
          <span>capas de seguridad</span>
        </div>
      </header>

      <section className="practical-stage practical-stage--typescript" aria-label="Ejemplo práctico integrado de TypeScript">
        <TypeScriptPracticalScene />
      </section>

      <footer className="project-note">
        Los tipos guían y bloquean errores durante el desarrollo; después de compilar, el JavaScript resultante ejecuta la experiencia.
      </footer>
    </main>
  );
}
