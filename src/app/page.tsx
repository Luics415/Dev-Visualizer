import type { ReactNode } from "react";
import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionChapters } from "@/components/concepts/CollectionChapters";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
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
import { slugify } from "@/lib/slugify";
import { CollectionPrimer } from "@/components/concepts/CollectionPrimer";
import { collectionPrimers } from "@/data/collectionPrimers";

const specialScenes = new Map<string, ReactNode>([
  ["Variables", <VariablesScene key="variables" />],
  ["Funciones", <FunctionsScene key="functions" />],
  ["Objetos", <ObjectsScene key="objects" />],
  ["Arrays", <ArraysScene key="arrays" />],
  ["map", <MapScene key="map" />],
  ["filter", <FilterScene key="filter" />],
  ["reduce", <ReduceScene key="reduce" />],
  ["Promesas", <PromisesScene key="promises" />],
  ["Async / Await", <AsyncAwaitScene key="async-await" />],
  ["Módulos ES", <ModulesScene key="modules" />],
  ["Closures", <ClosuresScene key="closures" />],
  ["Scope", <ScopeScene key="scope" />],
  ["Event Loop", <EventLoopScene key="event-loop" />],
  ["Manejo de errores", <ErrorHandlingScene key="error-handling" />],
]);

const sections = [...new Set(javascriptConcepts.map((concept) => concept.section))];
const chapters = sections.map((name) => ({ name, count: javascriptConcepts.filter((concept) => concept.section === name).length }));

export default function Home() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--javascript">
        <div>
          <span className="eyebrow eyebrow--javascript">Colección 01 · Lenguaje y runtime</span>
          <h1>JavaScript ES6+ visualizado</h1>
          <p>
            Una ruta completa desde valores, funciones y estructuras hasta prototipos, asincronía, módulos, protocolos, binarios y gestión de recursos. Las escenas personalizadas permanecen y los conceptos avanzados adoptan nuevas metáforas visuales.
          </p>
        </div>
        <div className="hero__counter hero__counter--javascript">
          <strong>{javascriptConcepts.length}</strong>
          <span>conceptos en {sections.length} capítulos</span>
        </div>
      </header>

      <CollectionPrimer primer={collectionPrimers["javascript"]} />

      <CollectionChapters chapters={chapters} />

      {sections.map((section) => (
        <section className="collection-section" id={slugify(section)} key={section}>
          <header className="collection-section__header">
            <span>Capítulo {String(sections.indexOf(section) + 1).padStart(2, "0")}</span>
            <h2>{section}</h2>
            <b>{chapters.find((chapter) => chapter.name === section)?.count} conceptos</b>
          </header>
          <div className="concept-grid concept-grid--atlas" aria-label={section}>
            {javascriptConcepts.map((concept, index) => concept.section === section ? (
              <ConceptCard
                key={concept.title}
                index={index + 1}
                title={concept.title}
                description={concept.description}
                collectionId="javascript"
                section={concept.section}
                family={concept.family}
                layout={concept.layout}
              >
                {specialScenes.get(concept.title) ?? (concept.scene ? (
                  <AnimatedConceptScene
                    ariaLabel={`Animación explicativa de ${concept.title}`}
                    code={concept.scene.code}
                    nodes={concept.scene.nodes}
                    outcome={concept.scene.outcome}
                    caption={concept.scene.caption}
                    variant={concept.scene.variant}
                  />
                ) : null)}
              </ConceptCard>
            ) : null)}
          </div>
        </section>
      ))}

      <footer className="project-note">
        JavaScript no termina en la sintaxis: también incluye protocolos, modelo de objetos, colas, memoria y recursos que explican cómo se comporta el programa.
      </footer>
    </main>
  );
}
