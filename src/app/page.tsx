import { ConceptCard } from "@/components/concepts/ConceptCard";
import { FunctionsScene } from "@/components/scenes/javascript/FunctionsScene";
import { MapScene } from "@/components/scenes/javascript/MapScene";
import { ObjectsScene } from "@/components/scenes/javascript/ObjectsScene";
import { VariablesScene } from "@/components/scenes/javascript/VariablesScene";
import { javascriptConcepts } from "@/data/javascriptConcepts";

const activeScenes = new Map([
  [0, <VariablesScene key="variables" />],
  [1, <FunctionsScene key="functions" />],
  [2, <ObjectsScene key="objects" />],
  [4, <MapScene key="map" />],
]);

export default function Home() {
  return (
    <main className="page-shell">
      <header className="hero">
        <div>
          <span className="eyebrow">Colección 01 · Fundamentos</span>
          <h1>JavaScript visualizado</h1>
          <p>
            Microanimaciones autónomas en bucle que muestran qué ocurre dentro del
            lenguaje, sin controles ni pasos manuales.
          </p>
        </div>
        <div className="hero__counter">
          <strong>14</strong>
          <span>conceptos</span>
        </div>
      </header>

      <section className="concept-grid" aria-label="Conceptos de JavaScript">
        {javascriptConcepts.map(([title, description], index) => (
          <ConceptCard
            key={title}
            index={index + 1}
            title={title}
            description={description}
            status={activeScenes.has(index) ? "ready" : "planned"}
          >
            {activeScenes.get(index)}
          </ConceptCard>
        ))}
      </section>

      <footer className="project-note">
        Sprint 02: objetos animados, lectura de propiedades y actualización de valores.
      </footer>
    </main>
  );
}
