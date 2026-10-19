import type { StudyConcept } from "@/data/conceptTypes";
import type { OfficialReference } from "@/data/officialReferences";
import type { CollectionPrimer } from "@/data/collectionPrimers";

export type CheatSheetOptions = {
  collectionId: string;
  collectionNumber: string;
  title: string;
  eyebrow: string;
  description: string;
  concepts: readonly StudyConcept[];
  primer?: CollectionPrimer;
  sources?: readonly OfficialReference[];
};

/**
 * Genera un archivo Markdown profesional y exhaustivo para repaso y estudio activo
 * a partir de la estructura pedagógica de cualquier colección de Dev Visualizer.
 */
export function generateCollectionMarkdownCheatSheet(options: CheatSheetOptions): string {
  const {
    collectionNumber,
    title,
    eyebrow,
    description,
    concepts,
    primer,
    sources = [],
  } = options;

  const now = new Date().toISOString().split("T")[0];
  const sections = [...new Set(concepts.map((c) => c.section))];

  let md = `# Ficha de Estudio y Repaso: ${title}\n\n`;
  md += `> **Dev Visualizer** · Colección ${collectionNumber} · ${eyebrow}\n`;
  md += `> *Exportado el ${now}*\n\n`;
  md += `## Objetivo de la Colección\n\n${description}\n\n`;

  if (primer) {
    md += `## Fundamento Arquitectónico: ${primer.name}\n\n`;
    md += `**Definición:** ${primer.definition}\n\n`;
    md += `**Propósito:** ${primer.purpose}\n\n`;
    md += `**Modelo Mental:** ${primer.mentalModel}\n\n`;
    if (primer.useCases && primer.useCases.length > 0) {
      md += `**Casos de Uso Principales:**\n`;
      primer.useCases.forEach((u) => {
        md += `- ${u}\n`;
      });
      md += `\n`;
    }
    if (primer.boundary) {
      md += `**Límites y Consideraciones:** ${primer.boundary}\n\n`;
    }
  }

  md += `## Índice de Capítulos (${sections.length} capítulos · ${concepts.length} conceptos)\n\n`;
  sections.forEach((sec, idx) => {
    const secConcepts = concepts.filter((c) => c.section === sec);
    md += `${idx + 1}. **${sec}** (${secConcepts.length} conceptos)\n`;
  });
  md += `\n---\n\n`;

  sections.forEach((sec, idx) => {
    md += `## Capítulo ${idx + 1}: ${sec}\n\n`;
    const secConcepts = concepts.filter((c) => c.section === sec);

    secConcepts.forEach((concept, cIdx) => {
      md += `### ${idx + 1}.${cIdx + 1} ${concept.title}\n\n`;
      md += `*Familia:* \`${concept.family}\`\n\n`;
      md += `**Definición y Mecanismo:**\n\n${concept.description}\n\n`;

      if (concept.scene) {
        if (concept.scene.code) {
          md += `**Sintaxis / Ejemplo Práctico:**\n\n\`\`\`typescript\n${concept.scene.code.trim()}\n\`\`\`\n\n`;
        }
        if (concept.scene.outcome) {
          md += `**Resultado / Estado Esperado:**\n\n> ${concept.scene.outcome}\n\n`;
        }
        if (concept.scene.caption) {
          md += `**Mnemotecnia Visual:**\n\n> 💡 *${concept.scene.caption}*\n\n`;
        }
        if (concept.scene.nodes && concept.scene.nodes.length > 0) {
          md += `**Componentes del flujo:**\n`;
          concept.scene.nodes.forEach((node) => {
            md += `- \`${node}\`\n`;
          });
          md += `\n`;
        }
      }

      md += `---\n\n`;
    });
  });

  if (sources.length > 0) {
    md += `## Fuentes y Referencias Oficiales\n\n`;
    sources.forEach((src) => {
      md += `- [${src.label}](${src.href}) · *${src.authority}* (${src.version})\n`;
    });
    md += `\n`;
  }

  md += `\n---\n\n*Documento autogenerado por [Dev Visualizer](https://github.com/Luics415/Dev-Visualizer) para estudio activo, repaso técnico y preparación de entrevistas.*`;

  return md;
}

/**
 * Dispara la descarga local en el navegador del documento Markdown generado.
 */
export function downloadMarkdownFile(filename: string, content: string) {
  if (typeof window === "undefined") return;
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.endsWith(".md") ? filename : `${filename}.md`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 200);
}

/**
 * Copia el contenido Markdown directamente al portapapeles con fallback seguro.
 */
export async function copyMarkdownToClipboard(content: string): Promise<boolean> {
  if (typeof window === "undefined" || !navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(content);
    return true;
  } catch {
    return false;
  }
}
