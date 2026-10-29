import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { collectionManifest } from "../src/data/collectionManifest";
import { expandedCollectionById } from "../src/data/expandedCollections";
import { javascriptConcepts } from "../src/data/javascriptConcepts";
import { typescriptConcepts } from "../src/data/typescriptConcepts";
import { htmlCssConcepts } from "../src/data/htmlCssConcepts";
import { reactConcepts } from "../src/data/reactConcepts";
import { reactNativeConcepts } from "../src/data/reactNativeConcepts";
import { backendConcepts } from "../src/data/backendConcepts";
import { firebaseConcepts } from "../src/data/firebaseConcepts";
import { stateManagementConcepts } from "../src/data/stateManagementConcepts";
import { databaseConcepts } from "../src/data/databaseConcepts";
import { debuggingConcepts } from "../src/data/debuggingConcepts";
import { linuxConcepts } from "../src/data/linuxConcepts";
import { awsConcepts } from "../src/data/awsConcepts";
import { deploymentConcepts } from "../src/data/deploymentConcepts";
import { nginxConcepts } from "../src/data/nginxConcepts";
import { dockerConcepts } from "../src/data/dockerConcepts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetFile = path.resolve(__dirname, "../src/data/conceptSearchIndex.ts");

const coreConceptsMap: Record<string, readonly { title: string; section?: string; family?: string }[]> = {
  javascript: javascriptConcepts,
  typescript: typescriptConcepts,
  "html-css": htmlCssConcepts,
  react: reactConcepts,
  "react-native": reactNativeConcepts,
  backend: backendConcepts,
  firebase: firebaseConcepts,
  "state-management": stateManagementConcepts,
  databases: databaseConcepts,
  debugging: debuggingConcepts,
  linux: linuxConcepts,
  aws: awsConcepts,
  deployment: deploymentConcepts,
  nginx: nginxConcepts,
  docker: dockerConcepts,
};

// Compact collection metadata lookup
const collectionsMetadata: Record<string, [label: string, short: string, href: string, theme: string]> = {};
for (const entry of collectionManifest) {
  collectionsMetadata[entry.id] = [entry.label, entry.short, entry.href, entry.theme];
}

// Compact tuples: [title, section, collectionId]
const rawTuples: [title: string, section: string, collectionId: string][] = [];

for (const entry of collectionManifest) {
  const concepts = coreConceptsMap[entry.id] ?? expandedCollectionById.get(entry.id)?.concepts ?? [];
  for (const c of concepts) {
    rawTuples.push([c.title, c.section ?? "General", entry.id]);
  }
}

console.log(`Indexed ${rawTuples.length} concepts across ${collectionManifest.length} collections.`);

const content = `// Índice canónico precompilado de conceptos técnicos para el atlas.
export type SearchableConcept = {
  readonly title: string;
  readonly section: string;
  readonly collectionId: string;
  readonly collectionLabel: string;
  readonly collectionShort: string;
  readonly collectionHref: string;
  readonly theme: string;
  readonly anchor: string;
  readonly href: string;
};

type CollectionMeta = readonly [label: string, short: string, href: string, theme: string];

const COLLECTIONS_META: Record<string, CollectionMeta> = ${JSON.stringify(collectionsMetadata)};

// Formato compacto [título, sección, idColección] para reducir el tamaño del bundle a menos de 100 KB
const RAW_CONCEPTS: readonly (readonly [string, string, string])[] = ${JSON.stringify(rawTuples)};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeSearchText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .toLowerCase()
    .trim();
}

let cachedAllConcepts: SearchableConcept[] | null = null;

export function getAllSearchableConcepts(): readonly SearchableConcept[] {
  if (cachedAllConcepts) return cachedAllConcepts;

  cachedAllConcepts = RAW_CONCEPTS.map(([title, section, collectionId]) => {
    const meta = COLLECTIONS_META[collectionId] ?? [collectionId, collectionId.slice(0, 2).toUpperCase(), \`/\${collectionId}\`, "javascript"];
    const anchor = \`concepto-\${slugify(title)}\`;
    const baseHref = meta[2] === "/" ? "" : meta[2];
    const href = \`\${baseHref}/#\${anchor}\`;

    return {
      title,
      section,
      collectionId,
      collectionLabel: meta[0],
      collectionShort: meta[1],
      collectionHref: meta[2],
      theme: meta[3],
      anchor,
      href,
    };
  });

  return cachedAllConcepts;
}

/**
 * Busca conceptos técnicos en el atlas completo mediante coincidencia difusa normalizada.
 * @param query Término de búsqueda introducido por el usuario.
 * @param limit Número máximo de resultados (por defecto 10).
 */
export function searchTechnicalConcepts(query: string, limit = 10): SearchableConcept[] {
  const normalized = normalizeSearchText(query);
  if (!normalized || normalized.length < 2) return [];

  const terms = normalized.split(/\\s+/).filter(Boolean);
  const all = getAllSearchableConcepts();
  const scored: { concept: SearchableConcept; score: number }[] = [];

  for (const concept of all) {
    const normTitle = normalizeSearchText(concept.title);
    const normSection = normalizeSearchText(concept.section);
    const normColl = normalizeSearchText(concept.collectionLabel);

    let score = 0;

    // Coincidencia exacta o inicial en el título del concepto
    if (normTitle === normalized) {
      score += 100;
    } else if (normTitle.startsWith(normalized)) {
      score += 60;
    } else if (normTitle.includes(normalized)) {
      score += 35;
    }

    // Coincidencia por términos individuales
    let allTermsMatch = true;
    for (const term of terms) {
      if (normTitle.includes(term)) {
        score += 15;
      } else if (normSection.includes(term)) {
        score += 8;
      } else if (normColl.includes(term)) {
        score += 4;
      } else {
        allTermsMatch = false;
      }
    }

    if (score > 0 && allTermsMatch) {
      scored.push({ concept, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.concept);
}
`;

fs.writeFileSync(targetFile, content, "utf-8");
console.log(`Saved optimized search index to ${targetFile} (${(fs.statSync(targetFile).size / 1024).toFixed(1)} KB)`);
