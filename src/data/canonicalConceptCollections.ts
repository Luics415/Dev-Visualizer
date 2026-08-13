import { awsConcepts } from "./awsConcepts";
import { backendConcepts } from "./backendConcepts";
import { databaseConcepts } from "./databaseConcepts";
import { debuggingConcepts } from "./debuggingConcepts";
import { deploymentConcepts } from "./deploymentConcepts";
import { dockerConcepts } from "./dockerConcepts";
import { expandedCollections } from "./expandedCollections";
import { firebaseConcepts } from "./firebaseConcepts";
import { htmlCssConcepts } from "./htmlCssConcepts";
import { javascriptConcepts } from "./javascriptConcepts";
import { linuxConcepts } from "./linuxConcepts";
import { nginxConcepts } from "./nginxConcepts";
import { reactConcepts } from "./reactConcepts";
import { reactNativeConcepts } from "./reactNativeConcepts";
import { stateManagementConcepts } from "./stateManagementConcepts";
import { typescriptConcepts } from "./typescriptConcepts";
import type { StudyConcept } from "./conceptTypes";

/**
 * Registro de contenido canónico. Es deliberadamente independiente del
 * manifiesto ligero que consume la navegación del cliente.
 */
export const canonicalConceptCollections = new Map<string, readonly StudyConcept[]>([
  ["javascript", javascriptConcepts],
  ["typescript", typescriptConcepts],
  ["react", reactConcepts],
  ["react-native", reactNativeConcepts],
  ["state-management", stateManagementConcepts],
  ["backend", backendConcepts],
  ["databases", databaseConcepts],
  ["html-css", htmlCssConcepts.map((concept) => ({ ...concept, section: "HTML y CSS" }))],
  ["linux", linuxConcepts],
  ["aws", awsConcepts],
  ["deployment", deploymentConcepts],
  ["nginx", nginxConcepts],
  ["docker", dockerConcepts],
  ["firebase", firebaseConcepts],
  ["debugging", debuggingConcepts],
  ...expandedCollections.map((collection) => [collection.id, collection.concepts] as const),
]);

export const canonicalConceptCount = [...canonicalConceptCollections.values()]
  .reduce((total, concepts) => total + concepts.length, 0);
