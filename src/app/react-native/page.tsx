import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import {
  NativeRenderingScene,
  CoreComponentsScene,
  StyleSheetScene,
  FlexboxScene,
  TextInputScene,
  PressableScene,
  ImagesScene,
  VirtualizedListScene,
  NavigationScene,
  SafeAreaKeyboardScene,
  PlatformScene,
  PermissionsScene,
  NetworkingScene,
  PersistenceScene,
} from "@/components/scenes/react-native/ReactNativeScenes";
import { reactNativeConcepts } from "@/data/reactNativeConcepts";

const visualFamilies = [
  "pipeline nativo", "traducción", "hoja de estilo", "distribución", "circuito controlado",
  "máquina de estados", "carga de recursos", "ventana virtual", "pila", "zonas seguras",
  "bifurcación", "diálogo del sistema", "cliente-servidor", "memoria persistente",
] as const;

const activeScenes = [
  <NativeRenderingScene key="native-rendering" />,
  <CoreComponentsScene key="core-components" />,
  <StyleSheetScene key="stylesheet" />,
  <FlexboxScene key="flexbox" />,
  <TextInputScene key="text-input" />,
  <PressableScene key="pressable" />,
  <ImagesScene key="images" />,
  <VirtualizedListScene key="virtualized-list" />,
  <NavigationScene key="navigation" />,
  <SafeAreaKeyboardScene key="safe-area-keyboard" />,
  <PlatformScene key="platform" />,
  <PermissionsScene key="permissions" />,
  <NetworkingScene key="networking" />,
  <PersistenceScene key="persistence" />,
];

export default function ReactNativePage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--react-native">
        <div>
          <span className="eyebrow eyebrow--react-native">Colección 04 · Aplicaciones móviles nativas</span>
          <h1>React Native visualizado</h1>
          <p>
            La interfaz declarativa de React se encuentra con vistas nativas, gestos, navegación, listas virtualizadas y APIs del dispositivo. Cada escena muestra qué parte permanece en JavaScript y qué parte pertenece al sistema operativo.
          </p>
        </div>
        <div className="hero__counter hero__counter--react-native">
          <strong>14</strong>
          <span>conceptos móviles</span>
        </div>
      </header>

      <section className="concept-grid" aria-label="Conceptos de React Native">
        {reactNativeConcepts.map(([title, description], index) => (
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
        React Native comparte el modelo mental de React, pero termina coordinando vistas, eventos y servicios reales del sistema operativo.
      </footer>
    </main>
  );
}
