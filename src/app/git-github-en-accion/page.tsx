import { CollectionNav } from "@/components/navigation/CollectionNav";
import { GitGithubPracticalScene } from "@/components/scenes/git/GitGithubPracticalScene";

export default function GitGithubPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--git-practical">
        <div>
          <span className="eyebrow eyebrow--git">Colección 06 · Flujo de entrega trazable</span>
          <h1>Git y GitHub en acción</h1>
          <p>Una funcionalidad recorre issue, rama, staging, commits, sincronización, push, pull request, review, CI, merge y release. El guiño a Jinx vive en el dominio del ejemplo; el modelo técnico permanece fiel a Git y GitHub.</p>
        </div>
        <div className="hero__counter hero__counter--git"><strong>8</strong><span>etapas · 3 fronteras · 1 historia</span></div>
      </header>
      <section className="practical-stage practical-stage--git" aria-label="Ejemplo integrado de Git y GitHub"><GitGithubPracticalScene /></section>
      <footer className="project-note">Una buena historia de Git no solo compila: explica por qué cambió el producto, quién lo revisó, qué se validó y en qué versión llegó a usuarios.</footer>
    </main>
  );
}
