/**
 * Dev Visualizer — Catálogo Oficial de Logros Simbólicos (Feature F19)
 * src/data/symbolicAchievements.ts
 *
 * Reconocimientos pedagógicos no oficiales organizados exclusivamente
 * por las 7 áreas temáticas oficiales del atlas de 73 colecciones.
 *
 * Cada logro posee carácter estrictamente didáctico y formativo.
 */

export type ThematicAreaId =
  | "fundamentals"
  | "languages"
  | "interfaces"
  | "platforms"
  | "data"
  | "versioning"
  | "delivery";

export interface SymbolicAchievement {
  id: string; // Formato canónico: /^achievement-[a-z-]+$/
  areaId: ThematicAreaId;
  areaTitle: string;
  badgeTitle: string;
  badgeIcon: string;
  description: string;
  isSymbolicOnly: true;
}

export const symbolicAchievements: readonly SymbolicAchievement[] = [
  {
    id: "achievement-fundamentals",
    areaId: "fundamentals",
    areaTitle: "Fundamentos",
    badgeTitle: "Iniciador de Algoritmos y Lógica",
    badgeIcon: "🧩",
    description: "Reconocimiento didáctico y simbólico otorgado al dominar los fundamentos de programación, matemáticas y pensamiento algorítmico.",
    isSymbolicOnly: true,
  },
  {
    id: "achievement-languages",
    areaId: "languages",
    areaTitle: "Lenguajes",
    badgeTitle: "Políglota de Código",
    badgeIcon: "🌐",
    description: "Reconocimiento didáctico y pedagógico por superar los retos de sintaxis, modelos de memoria y paradigmas en los 27 lenguajes del atlas.",
    isSymbolicOnly: true,
  },
  {
    id: "achievement-interfaces",
    areaId: "interfaces",
    areaTitle: "Diseño e interfaces",
    badgeTitle: "Arquitecto de Experiencias y UI",
    badgeIcon: "🎨",
    description: "Reconocimiento didáctico y simbólico conferido al culminar los quests de diseño web, accesibilidad, sistemas de diseño y aplicaciones móviles.",
    isSymbolicOnly: true,
  },
  {
    id: "achievement-platforms",
    areaId: "platforms",
    areaTitle: "Plataformas y servidor",
    badgeTitle: "Especialista en Sistemas y Backend",
    badgeIcon: "⚙️",
    description: "Reconocimiento didáctico y pedagógico concedido al completar las evaluaciones de arquitectura de servidor, APIs, runtimes y servicios backend.",
    isSymbolicOnly: true,
  },
  {
    id: "achievement-data",
    areaId: "data",
    areaTitle: "Datos",
    badgeTitle: "Maestro de Datos y Persistencia",
    badgeIcon: "🗄️",
    description: "Reconocimiento didáctico y simbólico acreditado al dominar el modelado relacional, motores NoSQL, esquemas de datos e inteligencia artificial.",
    isSymbolicOnly: true,
  },
  {
    id: "achievement-versioning",
    areaId: "versioning",
    areaTitle: "Control de versiones y calidad",
    badgeTitle: "Guardián de Integración y Calidad",
    badgeIcon: "🛡️",
    description: "Reconocimiento didáctico y simbólico al validar la competencia en control de versiones con Git, colaboración en GitHub, debugging e inspección.",
    isSymbolicOnly: true,
  },
  {
    id: "achievement-delivery",
    areaId: "delivery",
    areaTitle: "Infraestructura y entrega",
    badgeTitle: "Ingeniero de Despliegue y DevOps",
    badgeIcon: "🚀",
    description: "Reconocimiento didáctico y pedagógico otorgado al culminar con éxito los quests de contenedores, Linux, nubes, pipelines CI/CD y despliegue continuo.",
    isSymbolicOnly: true,
  },
];

export function getSymbolicAchievementByArea(areaId: ThematicAreaId): SymbolicAchievement | undefined {
  return symbolicAchievements.find((item) => item.areaId === areaId);
}

export function getSymbolicAchievementById(id: string): SymbolicAchievement | undefined {
  return symbolicAchievements.find((item) => item.id === id);
}
