import { CollectionNav } from "@/components/navigation/CollectionNav";
import { CollectionLibrary } from "@/components/concepts/CollectionLibrary";
import { collectionManifest } from "@/data/collectionManifest";
import { statsForCollection } from "@/data/collectionStats";

export default function CollectionsPage() {
  const entries = collectionManifest.map((collection) => ({ ...collection, stats: statsForCollection(collection.id) }));
  const totalConcepts = entries.reduce((sum, collection) => sum + collection.stats.concepts, 0);
  const totalRoutes = entries.length * 2;

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero library-hero">
        <div><span className="eyebrow">Biblioteca del Dev Visualizer</span><h1>Elige una ruta de estudio</h1><p>Treinta y cuatro colecciones organizadas por áreas. Cada una conecta conceptos animados con un caso “En acción”, profundización técnica y fuentes oficiales.</p></div>
        <div className="hero__counter"><strong>{totalConcepts}</strong><span>conceptos · {totalRoutes} rutas canónicas</span></div>
      </header>
      <CollectionLibrary entries={entries} />
      <footer className="project-note">Las tecnologías de legado e históricas están identificadas para que puedas estudiar mantenimiento y contexto sin confundirlas con una recomendación para proyectos nuevos.</footer>
    </main>
  );
}
