import Image from "next/image";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { CollectionLibrary } from "@/components/concepts/CollectionLibrary";
import { collectionManifest } from "@/data/collectionManifest";
import { statsForCollection } from "@/data/collectionStats";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CollectionsPage() {
  const entries = collectionManifest.map((collection) => ({ ...collection, stats: statsForCollection(collection.id) }));
  const totalConcepts = entries.reduce((sum, collection) => sum + collection.stats.concepts, 0);
  const totalRoutes = entries.length * 2;

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero library-hero">
        <Image
          className="library-hero__art"
          src={`${basePath}/brand/collections-anchor-banner.png`}
          alt=""
          width={1829}
          height={860}
          priority
          sizes="(max-width: 650px) 100vw, 1240px"
        />
        <div className="library-hero__veil" aria-hidden="true" />
        <div className="library-hero__content">
          <span className="eyebrow">Biblioteca del Dev Visualizer</span>
          <h1>Elige una ruta de estudio</h1>
          <p>{entries.length} colecciones organizadas por áreas. Cada una conecta conceptos animados con un caso “En acción”, profundización técnica y fuentes oficiales.</p>
          <div className="hero__counter">
            <strong>{totalConcepts}</strong>
            <span>conceptos · {totalRoutes} rutas canónicas</span>
          </div>
        </div>
      </header>
      <CollectionLibrary entries={entries} />
      <footer className="project-note">Las tecnologías de legado e históricas están identificadas para que puedas estudiar mantenimiento y contexto sin confundirlas con una recomendación para proyectos nuevos.</footer>
    </main>
  );
}
