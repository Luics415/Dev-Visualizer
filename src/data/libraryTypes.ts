import type { CollectionGroupId } from "./collectionManifest";

export type LibraryResourceKind =
  | "official-docs"
  | "specification"
  | "book"
  | "course"
  | "tutorial"
  | "reference";

export type LibraryResourceLevel = "beginner" | "intermediate" | "advanced" | "general";

export type LibraryPreservationStatus =
  | "local-redistributable"
  | "official-external"
  | "external-preserved"
  | "permission-required"
  | "unavailable";

export type LibraryLicenseStatus = "verified" | "external-only" | "permission-required" | "public-domain";

export type LibraryFormat = "HTML" | "PDF" | "EPUB" | "eBook" | "Repositorio" | "Otro";

export type LocalLibraryFile = {
  path: string;
  fileName: string;
  sha256: string;
  sizeBytes: number;
  version: string;
  downloadedAt: string;
  licenseName: string;
  licenseUrl: string;
  sourceUrl: string;
};

export type LibraryResource = {
  id: string;
  topicSlug: string;
  sourceId?: string;
  sourceTopicSlug?: string;
  title: string;
  author?: string;
  formats: readonly LibraryFormat[];
  kind: LibraryResourceKind;
  level: LibraryResourceLevel;
  primaryUrl: string;
  mirrors?: readonly string[];
  note?: string;
  authority?: string;
  version?: string;
  reviewedAt: string;
  preservationStatus: LibraryPreservationStatus;
  licenseStatus: LibraryLicenseStatus;
  localFile?: LocalLibraryFile;
};

export type LibraryTopic = {
  slug: string;
  collectionId: string;
  title: string;
  short: string;
  group: CollectionGroupId;
  description: string;
  accent: string;
  sourceTopicSlug?: string;
};

export type LibrarySourceSnapshot = {
  name: string;
  repositoryUrl: string;
  catalogUrl: string;
  commit: string;
  committedAt: string;
  importedAt: string;
  expectedTopics: number;
  expectedResources: number;
};
