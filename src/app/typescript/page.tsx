import type { ReactNode } from "react";
import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionChapters } from "@/components/concepts/CollectionChapters";
import { CollectionLibraryInvite } from "@/components/concepts/CollectionLibraryInvite";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
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
import { slugify } from "@/lib/slugify";
import { CollectionPrimer } from "@/components/concepts/CollectionPrimer";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionPrimers } from "@/data/collectionPrimers";

const specialScenes = new Map<string, ReactNode>([
  ["Inferencia de tipos", <InferenceScene key="inference" />],
  ["Anotaciones", <AnnotationsScene key="annotations" />],
  ["Tipos de funciones", <FunctionTypesScene key="function-types" />],
  ["Arrays y tuplas", <ArraysTuplesScene key="arrays-tuples" />],
  ["Tipos de objetos", <ObjectTypesScene key="object-types" />],
  ["Alias de tipos", <TypeAliasesScene key="type-aliases" />],
  ["Interfaces", <InterfacesScene key="interfaces" />],
  ["Uniones", <UnionTypesScene key="unions" />],
  ["Tipos literales", <LiteralTypesScene key="literal-types" />],
  ["Propiedades opcionales", <OptionalPropsScene key="optional-props" />],
  ["Narrowing", <NarrowingScene key="narrowing" />],
  ["Genéricos", <GenericsScene key="generics" />],
  ["Utility Types", <UtilityTypesScene key="utility-types" />],
  ["Readonly", <ReadonlyScene key="readonly" />],
]);

const sections = [...new Set(typescriptConcepts.map((concept) => concept.section))];
const chapters = sections.map((name) => ({ name, count: typescriptConcepts.filter((concept) => concept.section === name).length }));

export default function TypeScriptPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--typescript">
        <div>
          <span className="eyebrow eyebrow--typescript">Colección {collectionNumber("typescript")} · Sistema de tipos y compilador</span>
          <h1>TypeScript visualizado</h1>
          <p>
            La colección ahora cubre desde inferencia y modelado cotidiano hasta tipos derivados, módulos, declaraciones, configuración, migración, validación de runtime y rendimiento del checker.
          </p>
        </div>
        <div className="hero__counter hero__counter--typescript">
          <strong>{typescriptConcepts.length}</strong>
          <span>conceptos en {sections.length} capítulos</span>
        </div>
      </header>

      <CollectionPrimer primer={collectionPrimers["typescript"]} />

      <CollectionChapters chapters={chapters} />
      <CollectionLibraryInvite href="/libreria/typescript" collectionName="TypeScript" />

      {sections.map((section) => (
        <section className="collection-section" id={slugify(section)} key={section}>
          <header className="collection-section__header">
            <span>Capítulo {String(sections.indexOf(section) + 1).padStart(2, "0")}</span>
            <h2>{section}</h2>
            <b>{chapters.find((chapter) => chapter.name === section)?.count} conceptos</b>
          </header>
          <div className="concept-grid concept-grid--atlas" aria-label={section}>
            {typescriptConcepts.map((concept, index) => concept.section === section ? (
              <ConceptCard key={concept.title} index={index + 1} title={concept.title} description={concept.description} collectionId="typescript" section={concept.section} family={concept.family} layout={concept.layout}>
                {specialScenes.get(concept.title) ?? (concept.scene ? (
                  <AnimatedConceptScene ariaLabel={`Animación explicativa de ${concept.title}`} code={concept.scene.code} nodes={concept.scene.nodes} outcome={concept.scene.outcome} caption={concept.scene.caption} variant={concept.scene.variant} />
                ) : null)}
              </ConceptCard>
            ) : null)}
          </div>
        </section>
      ))}

      <footer className="project-note">
        TypeScript protege relaciones durante el desarrollo; los datos externos siguen atravesando una frontera de validación real antes de considerarse confiables.
      </footer>
    </main>
  );
}
