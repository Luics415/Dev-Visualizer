import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnnotationsScene } from "@/components/scenes/typescript/AnnotationsScene";
import { ArraysTuplesScene } from "@/components/scenes/typescript/ArraysTuplesScene";
import { FunctionTypesScene } from "@/components/scenes/typescript/FunctionTypesScene";
import { GenericsScene } from "@/components/scenes/typescript/GenericsScene";
import { InferenceScene } from "@/components/scenes/typescript/InferenceScene";
import { InterfacesScene } from "@/components/scenes/typescript/InterfacesScene";
import { LiteralTypesScene } from "@/components/scenes/typescript/LiteralTypesScene";
import { NarrowingScene } from "@/components/scenes/typescript/NarrowingScene";
import { ObjectTypesScene } from "@/components/scenes/typescript/ObjectTypesScene";
import { OptionalPropsScene } from "@/components/scenes/typescript/OptionalPropsScene";
import { ReadonlyScene } from "@/components/scenes/typescript/ReadonlyScene";
import { TypeAliasesScene } from "@/components/scenes/typescript/TypeAliasesScene";
import { UnionTypesScene } from "@/components/scenes/typescript/UnionTypesScene";
import { UtilityTypesScene } from "@/components/scenes/typescript/UtilityTypesScene";
import { typescriptConcepts } from "@/data/typescriptConcepts";

const visualFamilies = [
  "escáner", "contrato", "puertos", "comparativa", "plano", "plantilla",
  "extensión", "rutas válidas", "lista cerrada", "conectores", "árbol",
  "preservación", "taller de tipos", "bloqueo",
] as const;

const activeScenes = [
  <InferenceScene key="inference" />,
  <AnnotationsScene key="annotations" />,
  <FunctionTypesScene key="function-types" />,
  <ArraysTuplesScene key="arrays-tuples" />,
  <ObjectTypesScene key="object-types" />,
  <TypeAliasesScene key="type-aliases" />,
  <InterfacesScene key="interfaces" />,
  <UnionTypesScene key="unions" />,
  <LiteralTypesScene key="literal-types" />,
  <OptionalPropsScene key="optional-props" />,
  <NarrowingScene key="narrowing" />,
  <GenericsScene key="generics" />,
  <UtilityTypesScene key="utility-types" />,
  <ReadonlyScene key="readonly" />,
];

export default function TypeScriptPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--typescript">
        <div>
          <span className="eyebrow eyebrow--typescript">Colección 02 · Sistema de tipos</span>
          <h1>TypeScript visualizado</h1>
          <p>
            El sistema de tipos se convierte en escáneres, contratos, carriles, planos y árboles de decisión para mostrar qué valida TypeScript antes de ejecutar JavaScript.
          </p>
        </div>
        <div className="hero__counter hero__counter--typescript">
          <strong>14</strong>
          <span>conceptos completos</span>
        </div>
      </header>

      <section className="concept-grid" aria-label="Conceptos de TypeScript">
        {typescriptConcepts.map(([title, description], index) => (
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
        TypeScript analiza relaciones entre datos durante el desarrollo; las escenas muestran esa comprobación sin confundirla con la ejecución del programa.
      </footer>
    </main>
  );
}
