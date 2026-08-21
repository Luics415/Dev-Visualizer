"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CollectionLifecycle, CollectionManifestEntry } from "@/data/collectionManifest";
import { collectionGroupMeta, collectionNumber } from "@/data/collectionManifest";
import type { CollectionStats } from "@/data/collectionStats";

export type LibraryEntry = CollectionManifestEntry & { stats: CollectionStats };

export function CollectionLibrary({ entries }: { entries: readonly LibraryEntry[] }) {
  const [query, setQuery] = useState("");
  const [lifecycle, setLifecycle] = useState<CollectionLifecycle | "todas">("todas");
  const [group, setGroup] = useState<string>("todos");

  const visible = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    return entries.filter((entry) => {
      const matchesQuery = !normalized || `${entry.label} ${entry.summary} ${entry.short} ${collectionGroupMeta[entry.group].name}`.toLocaleLowerCase("es").includes(normalized);
      return matchesQuery && (lifecycle === "todas" || entry.lifecycle === lifecycle) && (group === "todos" || entry.group === group);
    });
  }, [entries, group, lifecycle, query]);

  return (
    <>
      <section className="library-controls" aria-label="Filtros de colecciones">
        <label><span>Buscar tecnología o concepto</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Python, MediaPipe, XML, XSD, JSON…" /></label>
        <label><span>Área</span><select value={group} onChange={(event) => setGroup(event.target.value)}><option value="todos">Todas las áreas</option>{Object.entries(collectionGroupMeta).map(([id, meta]) => <option key={id} value={id}>{meta.name}</option>)}</select></label>
        <label><span>Vigencia</span><select value={lifecycle} onChange={(event) => setLifecycle(event.target.value as CollectionLifecycle | "todas")}><option value="todas">Todas</option><option value="actual">Actual</option><option value="legado">Legado</option><option value="histórico">Histórico</option></select></label>
        <output aria-live="polite"><strong>{visible.length}</strong><span>colecciones visibles</span></output>
      </section>

      {visible.length ? (
        <section className="library-grid" aria-label="Colecciones disponibles">
          {visible.map((entry) => (
            <article className="library-card" data-lifecycle={entry.lifecycle} key={entry.id}>
              <header><span>Colección {collectionNumber(entry.id)}</span><b>{entry.short}</b></header>
              <div className="library-card__status"><span>{collectionGroupMeta[entry.group].name}</span><em>{entry.lifecycle}</em></div>
              <h2>{entry.label}</h2>
              <p>{entry.summary}</p>
              <div className="library-card__metrics"><span><strong>{entry.stats.concepts}</strong> conceptos</span><span><strong>{entry.stats.chapters}</strong> capítulos</span><span><strong>{entry.stats.stages}</strong> etapas</span></div>
              <div className="library-card__actions"><Link href={entry.href}>Abrir colección <span>→</span></Link><Link href={entry.actionHref}>Ver en acción <span>↗</span></Link></div>
            </article>
          ))}
        </section>
      ) : <p className="library-empty">No hay colecciones que coincidan con estos filtros.</p>}
    </>
  );
}
