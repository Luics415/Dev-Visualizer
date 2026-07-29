import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionNav } from "@/components/navigation/CollectionNav";
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

const visualFamilies = [
  "composición", "transformación", "flujo descendente", "snapshots", "señal",
  "bifurcación", "identidad", "timeline", "caché", "referencia estable",
  "persistencia", "difusión", "extracción", "reconciliación",
] as const;

const activeScenes = [
  <ComponentsScene key="components" />,
  <JsxScene key="jsx" />,
  <PropsScene key="props" />,
  <StateScene key="state" />,
  <EventsScene key="events" />,
  <ConditionalRenderingScene key="conditional" />,
  <ListsKeysScene key="lists-keys" />,
  <UseEffectScene key="use-effect" />,
  <UseMemoScene key="use-memo" />,
  <UseCallbackScene key="use-callback" />,
  <UseRefScene key="use-ref" />,
  <ContextScene key="context" />,
  <CustomHooksScene key="custom-hooks" />,
  <RenderCycleScene key="render-cycle" />,
];

export default function ReactPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--react">
        <div>
          <span className="eyebrow eyebrow--react">Colección 03 · Interfaces declarativas</span>
          <h1>React visualizado</h1>
          <p>
            Componentes, datos y hooks se convierten en árboles, señales, snapshots, cachés y ciclos de reconciliación para mostrar cómo una actualización termina convirtiéndose en interfaz.
          </p>
        </div>
        <div className="hero__counter hero__counter--react">
          <strong>14</strong>
          <span>conceptos completos</span>
        </div>
      </header>

      <section className="concept-grid" aria-label="Conceptos de React">
        {reactConcepts.map(([title, description], index) => (
          <ConceptCard
            key={title}
            index={index + 1}
            title={title}
            description={description}
            family={visualFamilies[index]}
          >
            {activeScenes[index]}
          </ConceptCard>
        ))}
      </section>

      <footer className="project-note">
        React describe qué interfaz corresponde a cada estado; sus mecanismos coordinan cuándo calcular, comparar y aplicar cambios.
      </footer>
    </main>
  );
}
