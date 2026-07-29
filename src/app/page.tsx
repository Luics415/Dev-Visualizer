import { ConceptCard } from "@/components/concepts/ConceptCard";
import { ArraysScene } from "@/components/scenes/javascript/ArraysScene";
import { AsyncAwaitScene } from "@/components/scenes/javascript/AsyncAwaitScene";
import { ClosuresScene } from "@/components/scenes/javascript/ClosuresScene";
import { ErrorHandlingScene } from "@/components/scenes/javascript/ErrorHandlingScene";
import { EventLoopScene } from "@/components/scenes/javascript/EventLoopScene";
import { FilterScene } from "@/components/scenes/javascript/FilterScene";
import { FunctionsScene } from "@/components/scenes/javascript/FunctionsScene";
import { MapScene } from "@/components/scenes/javascript/MapScene";
import { ModulesScene } from "@/components/scenes/javascript/ModulesScene";
import { ObjectsScene } from "@/components/scenes/javascript/ObjectsScene";
import { PromisesScene } from "@/components/scenes/javascript/PromisesScene";
import { ReduceScene } from "@/components/scenes/javascript/ReduceScene";
import { ScopeScene } from "@/components/scenes/javascript/ScopeScene";
import { VariablesScene } from "@/components/scenes/javascript/VariablesScene";
import { javascriptConcepts } from "@/data/javascriptConcepts";

const activeScenes = new Map([
  [0, <VariablesScene key="variables" />],
  [1, <FunctionsScene key="functions" />],
  [2, <ObjectsScene key="objects" />],
  [3, <ArraysScene key="arrays" />],
  [4, <MapScene key="map" />],
  [5, <FilterScene key="filter" />],
  [6, <ReduceScene key="reduce" />],
  [7, <PromisesScene key="promises" />],
  [8, <AsyncAwaitScene key="async-await" />],
  [9, <ModulesScene key="modules" />],
  [10, <ClosuresScene key="closures" />],
  [11, <ScopeScene key="scope" />],
  [12, <EventLoopScene key="event-loop" />],
  [13, <ErrorHandlingScene key="error-handling" />],
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
          <span>conceptos completos</span>
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
        Colección JavaScript completa: datos, transformaciones, asincronía, memoria y flujo de ejecución.
      </footer>
    </main>
  );
}
