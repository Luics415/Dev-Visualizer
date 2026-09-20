import type { ReactNode } from "react";
import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionChapters } from "@/components/concepts/CollectionChapters";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
import { ComponentsScene } from "@/components/scenes/react/ComponentsScene";
import { ConditionalRenderingScene } from "@/components/scenes/react/ConditionalRenderingScene";
import { ContextScene } from "@/components/scenes/react/ContextScene";
import { CustomHooksScene } from "@/components/scenes/react/CustomHooksScene";
import { EventsScene } from "@/components/scenes/react/EventsScene";
import { JsxScene } from "@/components/scenes/react/JsxScene";
import { ListsKeysScene } from "@/components/scenes/react/ListsKeysScene";
import { PropsScene } from "@/components/scenes/react/PropsScene";
import { RenderCycleScene } from "@/components/scenes/react/RenderCycleScene";
import { StateScene } from "@/components/scenes/react/StateScene";
import { UseCallbackScene } from "@/components/scenes/react/UseCallbackScene";
import { UseEffectScene } from "@/components/scenes/react/UseEffectScene";
import { UseMemoScene } from "@/components/scenes/react/UseMemoScene";
import { UseRefScene } from "@/components/scenes/react/UseRefScene";
import { reactConcepts } from "@/data/reactConcepts";
import { slugify } from "@/lib/slugify";
import { CollectionPrimer } from "@/components/concepts/CollectionPrimer";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionPrimers } from "@/data/collectionPrimers";

const specialScenes = new Map<string, ReactNode>([
  ["Componentes", <ComponentsScene key="components" />],
  ["JSX", <JsxScene key="jsx" />],
  ["Props", <PropsScene key="props" />],
  ["Estado", <StateScene key="state" />],
  ["Eventos", <EventsScene key="events" />],
  ["Renderizado condicional", <ConditionalRenderingScene key="conditional" />],
  ["Listas y keys", <ListsKeysScene key="lists-keys" />],
  ["useEffect", <UseEffectScene key="use-effect" />],
  ["useMemo", <UseMemoScene key="use-memo" />],
  ["useCallback", <UseCallbackScene key="use-callback" />],
  ["Refs", <UseRefScene key="use-ref" />],
  ["Context", <ContextScene key="context" />],
  ["Custom Hooks", <CustomHooksScene key="custom-hooks" />],
  ["Ciclo de render", <RenderCycleScene key="render-cycle" />],
]);

const sections = [...new Set(reactConcepts.map((concept) => concept.section))];
const chapters = sections.map((name) => ({ name, count: reactConcepts.filter((concept) => concept.section === name).length }));

export default function ReactPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--react">
        <div>
          <span className="eyebrow eyebrow--react">Colección {collectionNumber("react")} · Interfaces declarativas modernas</span>
          <h1>React visualizado</h1>
          <p>
            Componentes y estado se conectan con reconciliación, efectos, concurrencia, Actions, Suspense, render del servidor, hidratación, testing y React Compiler para formar una referencia moderna y completa.
          </p>
        </div>
        <div className="hero__counter hero__counter--react">
          <strong>{reactConcepts.length}</strong>
          <span>conceptos en {sections.length} capítulos</span>
        </div>
      </header>

      <CollectionPrimer primer={collectionPrimers["react"]} />

      <CollectionChapters chapters={chapters} />

      {sections.map((section) => (
        <section className="collection-section" id={slugify(section)} key={section}>
          <header className="collection-section__header">
            <span>Capítulo {String(sections.indexOf(section) + 1).padStart(2, "0")}</span>
            <h2>{section}</h2>
            <b>{chapters.find((chapter) => chapter.name === section)?.count} conceptos</b>
          </header>
          <div className="concept-grid concept-grid--atlas" aria-label={section}>
            {reactConcepts.map((concept, index) => concept.section === section ? (
              <ConceptCard key={concept.title} index={index + 1} title={concept.title} description={concept.description} collectionId="react" section={concept.section} family={concept.family} layout={concept.layout}>
                {specialScenes.get(concept.title) ?? (concept.scene ? (
                  <AnimatedConceptScene ariaLabel={`Animación explicativa de ${concept.title}`} code={concept.scene.code} nodes={concept.scene.nodes} outcome={concept.scene.outcome} caption={concept.scene.caption} variant={concept.scene.variant} />
                ) : null)}
              </ConceptCard>
            ) : null)}
          </div>
        </section>
      ))}

      <footer className="project-note">
        React no es solo Hooks: es un modelo de identidad, prioridades, fronteras de render y sincronización que se extiende del cliente al servidor.
      </footer>
    </main>
  );
}
