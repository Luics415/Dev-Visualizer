import { collectionGroupMeta, collectionManifest } from "./collectionManifest";

export type CollectionLink = {
  href: string;
  label: string;
  short: string;
  kind: "colección" | "caso integrado";
  lifecycle: "actual" | "legado" | "histórico";
};

export type CollectionGroup = {
  name: string;
  description: string;
  links: readonly CollectionLink[];
};

export const collectionGroups: readonly CollectionGroup[] = Object.entries(collectionGroupMeta).map(([groupId, meta]) => ({
  ...meta,
  links: collectionManifest
    .filter((collection) => collection.group === groupId)
    .flatMap((collection) => [
      { href: collection.href, label: collection.label, short: collection.short, kind: "colección" as const, lifecycle: collection.lifecycle },
      { href: collection.actionHref, label: `${collection.label} en acción`, short: `${collection.short}+`, kind: "caso integrado" as const, lifecycle: collection.lifecycle },
    ]),
}));

export const collectionLinks: readonly CollectionLink[] = collectionGroups.flatMap((group) => group.links);
