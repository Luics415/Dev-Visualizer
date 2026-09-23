import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
import { htmlCssConcepts } from "@/data/htmlCssConcepts";
import { CollectionPrimer } from "@/components/concepts/CollectionPrimer";
import { CollectionLibraryInvite } from "@/components/concepts/CollectionLibraryInvite";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionPrimers } from "@/data/collectionPrimers";

export default function HtmlCssPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--html-css">
        <div>
          <span className="eyebrow eyebrow--html-css">Colección {collectionNumber("html-css")} · Documento, estilos y motor del navegador</span>
          <h1>HTML y CSS visualizados</h1>
          <p>Una referencia extensa que conecta semántica, accesibilidad y formularios con cascade, layout, responsive design y composición. No se limita a memorizar etiquetas o propiedades: muestra qué estructura construye el navegador y cómo resuelve cada estilo.</p>
        </div>
        <div className="hero__counter hero__counter--html-css"><strong>{htmlCssConcepts.length}</strong><span>conceptos de estructura, layout y presentación</span></div>
      </header>

      <CollectionPrimer primer={collectionPrimers["html-css"]} />
      <CollectionLibraryInvite href="/libreria/html-css" collectionName="HTML y CSS" />

      <section className="concept-grid concept-grid--atlas" aria-label="Conceptos de HTML y CSS">
        {htmlCssConcepts.map((concept, index) => (
          <ConceptCard key={concept.title} index={index + 1} title={concept.title} description={concept.description} collectionId="html-css" section="HTML y CSS" family={concept.family} layout={concept.layout}>
            <AnimatedConceptScene ariaLabel={`Animación explicativa de ${concept.title}`} code={concept.scene.code} nodes={concept.scene.nodes} outcome={concept.scene.outcome} caption={concept.scene.caption} variant={concept.scene.variant} />
          </ConceptCard>
        ))}
      </section>

      <footer className="project-note">HTML aporta significado y relaciones; CSS participa en una cascade, crea cajas y las dispone. El navegador convierte ambos en árboles, geometría, píxeles y capas de composición.</footer>
    </main>
  );
}
