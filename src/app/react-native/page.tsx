import type { ReactNode } from "react";
import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionChapters } from "@/components/concepts/CollectionChapters";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
import {
  NativeRenderingScene, CoreComponentsScene, StyleSheetScene, FlexboxScene, TextInputScene,
  PressableScene, ImagesScene, VirtualizedListScene, NavigationScene, SafeAreaKeyboardScene,
  PlatformScene, PermissionsScene, NetworkingScene, PersistenceScene,
} from "@/components/scenes/react-native/ReactNativeScenes";
import { reactNativeConcepts } from "@/data/reactNativeConcepts";
import { slugify } from "@/lib/slugify";
import { CollectionPrimer } from "@/components/concepts/CollectionPrimer";
import { collectionPrimers } from "@/data/collectionPrimers";

const specialScenes = new Map<string, ReactNode>([
  ["Renderizado nativo", <NativeRenderingScene key="native-rendering" />],
  ["Componentes base", <CoreComponentsScene key="core-components" />],
  ["StyleSheet", <StyleSheetScene key="stylesheet" />],
  ["Flexbox", <FlexboxScene key="flexbox" />],
  ["TextInput", <TextInputScene key="text-input" />],
  ["Pressable", <PressableScene key="pressable" />],
  ["Imágenes", <ImagesScene key="images" />],
  ["ScrollView y FlatList", <VirtualizedListScene key="virtualized-list" />],
  ["Navegación", <NavigationScene key="navigation" />],
  ["Safe Area y teclado", <SafeAreaKeyboardScene key="safe-area-keyboard" />],
  ["Código por plataforma", <PlatformScene key="platform" />],
  ["Permisos", <PermissionsScene key="permissions" />],
  ["Peticiones de red", <NetworkingScene key="networking" />],
  ["Persistencia local", <PersistenceScene key="persistence" />],
]);

const sections = [...new Set(reactNativeConcepts.map((concept) => concept.section))];
const chapters = sections.map((name) => ({ name, count: reactNativeConcepts.filter((concept) => concept.section === name).length }));

export default function ReactNativePage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--react-native">
        <div>
          <span className="eyebrow eyebrow--react-native">Colección 04 · Aplicaciones móviles de producción</span>
          <h1>React Native visualizado</h1>
          <p>
            La ruta ahora cubre la Nueva Arquitectura, runtime, layout, gestos, multimedia, listas, navegación, APIs del dispositivo, offline, seguridad, performance, módulos nativos, testing y entrega a tiendas.
          </p>
        </div>
        <div className="hero__counter hero__counter--react-native">
          <strong>{reactNativeConcepts.length}</strong>
          <span>conceptos en {sections.length} capítulos</span>
        </div>
      </header>

      <CollectionPrimer primer={collectionPrimers["react-native"]} />

      <CollectionChapters chapters={chapters} />

      {sections.map((section) => (
        <section className="collection-section" id={slugify(section)} key={section}>
          <header className="collection-section__header">
            <span>Capítulo {String(sections.indexOf(section) + 1).padStart(2, "0")}</span>
            <h2>{section}</h2>
            <b>{chapters.find((chapter) => chapter.name === section)?.count} conceptos</b>
          </header>
          <div className="concept-grid concept-grid--atlas" aria-label={section}>
            {reactNativeConcepts.map((concept, index) => concept.section === section ? (
              <ConceptCard key={concept.title} index={index + 1} title={concept.title} description={concept.description} family={concept.family} layout={concept.layout}>
                {specialScenes.get(concept.title) ?? (concept.scene ? (
                  <AnimatedConceptScene ariaLabel={`Animación explicativa de ${concept.title}`} code={concept.scene.code} nodes={concept.scene.nodes} outcome={concept.scene.outcome} caption={concept.scene.caption} variant={concept.scene.variant} />
                ) : null)}
              </ConceptCard>
            ) : null)}
          </div>
        </section>
      ))}

      <footer className="project-note">
        Una aplicación móvil completa atraviesa React, runtime JavaScript, renderer nativo, servicios del sistema, datos, builds y operación en dispositivos reales.
      </footer>
    </main>
  );
}
