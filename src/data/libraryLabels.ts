import type {
  LibraryLicenseStatus,
  LibraryPreservationStatus,
  LibraryResourceKind,
  LibraryResourceLevel,
} from "./libraryTypes";

export const libraryResourceKindLabels: Record<LibraryResourceKind, string> = {
  "official-docs": "Documentación oficial",
  specification: "Especificación",
  book: "Libro",
  course: "Curso",
  tutorial: "Guía o tutorial",
  reference: "Referencia primaria",
};

export const libraryResourceLevelLabels: Record<LibraryResourceLevel, string> = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzado",
  general: "Todos los niveles",
};

export const libraryPreservationLabels: Record<LibraryPreservationStatus, string> = {
  "local-redistributable": "Adjunto preservado localmente",
  "official-external": "Fuente oficial externa",
  "external-preserved": "Disponible externamente",
  "permission-required": "Requiere permiso de redistribución",
  unavailable: "Temporalmente no disponible",
};

export const libraryLicenseLabels: Record<LibraryLicenseStatus, string> = {
  verified: "Licencia verificada",
  "external-only": "Consulta externa; sin copia local",
  "permission-required": "Permiso requerido",
  "public-domain": "Dominio público",
};
