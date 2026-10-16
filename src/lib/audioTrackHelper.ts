import { createStudyScene } from "@/data/atlasConceptFactory";
import type { AudioTrack } from "@/lib/audioNarrator";

type ConceptInput = {
  title: string;
  description: string;
  section: string;
  family?: string;
  scene?: { outcome?: string };
};

type PracticalModuleInput = {
  title: string;
  subtitle: string;
  visible: readonly string[];
  internal: readonly string[];
  result: string;
  note: string;
};

/**
 * Genera la pista de audio didáctica según la Opción B:
 * [Título], familia [Familia]. [Descripción]. Resultado visual: [Resultado].
 */
export function buildConceptAudioTrack(
  collectionId: string,
  concept: ConceptInput,
  index: number
): AudioTrack {
  const family = concept.family ?? "concepto visual";
  const outcome =
    concept.scene?.outcome ??
    createStudyScene(concept.title, concept.description, concept.section).outcome;
  const outcomeText = outcome ? ` Resultado visual: ${outcome}.` : "";
  const text = `${concept.title}, familia ${family}. ${concept.description}.${outcomeText}`;

  return {
    id: `${collectionId}-${index}-${concept.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: concept.title,
    subtitle: `Concepto ${String(index).padStart(2, "0")}`,
    family,
    section: concept.section,
    text,
  };
}

/**
 * Genera la pista de audio didáctica para una etapa del caso práctico integrado:
 * Etapa [X]: [Título]. [Subtítulo]. Lo que percibe el usuario: [...]. Lo que sucede internamente: [...]. Resultado: [...]. Nota didáctica: [...]
 */
export function buildPracticalModuleAudioTrack(
  collectionId: string,
  module: PracticalModuleInput,
  index: number
): AudioTrack {
  const visibleText = module.visible.join(", ");
  const internalText = module.internal.join(", ");
  const text = `Etapa ${index}: ${module.title}. ${module.subtitle}. Lo que percibe el usuario: ${visibleText}. Lo que sucede internamente: ${internalText}. Resultado: ${module.result}. Nota didáctica: ${module.note}`;

  return {
    id: `${collectionId}-practical-${index}-${module.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: module.title,
    subtitle: `Etapa ${String(index).padStart(2, "0")} · ${module.subtitle}`,
    family: "Caso práctico integrado",
    section: "Profundización didáctica",
    text,
  };
}
