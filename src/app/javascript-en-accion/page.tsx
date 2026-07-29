import { CollectionNav } from "@/components/navigation/CollectionNav";
import { JavaScriptPracticalScene } from "@/components/scenes/javascript/JavaScriptPracticalScene";

export default function JavaScriptPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--practical">
        <div>
          <span className="eyebrow">Colección 01 · Caso integrado</span>
          <h1>JavaScript en acción</h1>
          <p>
            Una compra recorre eventos, estado, transformaciones, red, espera asíncrona y renderizado. Cada etapa cambia de lenguaje visual según lo que ocurre internamente.
          </p>
        </div>
        <div className="hero__counter">
          <strong>6</strong>
          <span>etapas conectadas</span>
        </div>
      </header>

      <section className="practical-stage" aria-label="Ejemplo práctico integrado de JavaScript">
        <JavaScriptPracticalScene />
      </section>

      <footer className="project-note">
        Un mismo dato cambia de forma y de contexto mientras JavaScript coordina la experiencia completa.
      </footer>
    </main>
  );
}
