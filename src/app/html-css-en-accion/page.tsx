import { CollectionNav } from "@/components/navigation/CollectionNav";
import { HtmlCssPracticalScene } from "@/components/scenes/html-css/HtmlCssPracticalScene";

export default function HtmlCssPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--html-css-practical">
        <div>
          <span className="eyebrow eyebrow--html-css">Colección 07 · Del código fuente a la pantalla</span>
          <h1>HTML y CSS en acción</h1>
          <p>Una tarjeta de Jinx permite recorrer todo el pipeline del navegador: fuente, DOM, CSSOM, cascade, layout, paint, composición, respuesta al contenedor y árbol accesible. El personaje aporta identidad al ejemplo sin alterar el mecanismo técnico.</p>
        </div>
        <div className="hero__counter hero__counter--html-css"><strong>8</strong><span>etapas · 2 árboles · 1 interfaz</span></div>
      </header>
      <section className="practical-stage practical-stage--html" aria-label="Ejemplo integrado de HTML y CSS"><HtmlCssPracticalScene /></section>
      <footer className="project-note">La interfaz final es la consecuencia de múltiples modelos coordinados. Entenderlos permite diagnosticar semántica, cascade, layout, rendimiento y accesibilidad sin probar propiedades al azar.</footer>
    </main>
  );
}
