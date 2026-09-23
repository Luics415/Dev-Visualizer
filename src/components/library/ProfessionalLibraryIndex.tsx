"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { collectionGroupMeta } from "@/data/collectionManifest";
import type { LibraryIndexEntry } from "@/data/professionalLibrary";
import { libraryResourceLevelLabels } from "@/data/libraryLabels";
import styles from "@/app/libreria/library.module.css";

type FilterValue = "all" | string;

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

export function ProfessionalLibraryIndex({ entries }: { entries: readonly LibraryIndexEntry[] }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<FilterValue>("all");
  const [format, setFormat] = useState<FilterValue>("all");
  const [level, setLevel] = useState<FilterValue>("all");
  const [provenance, setProvenance] = useState<FilterValue>("all");
  const [availability, setAvailability] = useState<FilterValue>("all");

  const formats = useMemo(() => [...new Set(entries.flatMap((entry) => entry.formats))].sort(), [entries]);
  const levels = useMemo(() => [...new Set(entries.flatMap((entry) => entry.levels))].sort(), [entries]);

  const visible = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    return entries.filter((entry) => {
      const matchesQuery = !normalizedQuery || entry.searchText.includes(normalizedQuery);
      const matchesGroup = group === "all" || entry.group === group;
      const matchesFormat = format === "all" || entry.formats.includes(format as never);
      const matchesLevel = level === "all" || entry.levels.includes(level as never);
      const matchesProvenance = provenance === "all"
        || (provenance === "official" && entry.officialCount > 0)
        || (provenance === "midudev" && entry.importedCount > 0);
      const matchesAvailability = availability === "all"
        || (availability === "local" && entry.preservationStatuses.includes("local-redistributable"))
        || (availability === "external" && entry.preservationStatuses.some((status) => status === "official-external" || status === "external-preserved"))
        || (availability === "unavailable" && entry.preservationStatuses.includes("unavailable"));
      return matchesQuery && matchesGroup && matchesFormat && matchesLevel && matchesProvenance && matchesAvailability;
    });
  }, [availability, entries, format, group, level, provenance, query]);

  function resetFilters() {
    setQuery("");
    setGroup("all");
    setFormat("all");
    setLevel("all");
    setProvenance("all");
    setAvailability("all");
  }

  return (
    <>
      <section className={styles.controls} aria-label="Buscar y filtrar la Librería profesional">
        <label className={styles.search}>
          <span>Buscar tema, libro, autor o institución</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Python, seguridad, Allen Downey…" />
        </label>
        <label>
          <span>Área</span>
          <select value={group} onChange={(event) => setGroup(event.target.value)}>
            <option value="all">Todas las áreas</option>
            {Object.entries(collectionGroupMeta).map(([id, meta]) => <option value={id} key={id}>{meta.name}</option>)}
          </select>
        </label>
        <label>
          <span>Formato</span>
          <select value={format} onChange={(event) => setFormat(event.target.value)}>
            <option value="all">Todos los formatos</option>
            {formats.map((entry) => <option value={entry} key={entry}>{entry}</option>)}
          </select>
        </label>
        <label>
          <span>Nivel</span>
          <select value={level} onChange={(event) => setLevel(event.target.value)}>
            <option value="all">Todos los niveles</option>
            {levels.map((entry) => <option value={entry} key={entry}>{libraryResourceLevelLabels[entry]}</option>)}
          </select>
        </label>
        <label>
          <span>Procedencia</span>
          <select value={provenance} onChange={(event) => setProvenance(event.target.value)}>
            <option value="all">Todas las procedencias</option>
            <option value="official">Proyecto u organismo oficial</option>
            <option value="midudev">Catálogo atribuido a midudev</option>
          </select>
        </label>
        <label>
          <span>Disponibilidad</span>
          <select value={availability} onChange={(event) => setAvailability(event.target.value)}>
            <option value="all">Todos los estados</option>
            <option value="external">Disponibles externamente</option>
            <option value="local">Adjuntos locales autorizados</option>
            <option value="unavailable">Sin sustituto disponible</option>
          </select>
        </label>
        <div className={styles.resultCount}>
          <output aria-live="polite"><strong>{visible.length}</strong><span>temas visibles</span></output>
          <button type="button" onClick={resetFilters}>Restablecer</button>
        </div>
      </section>

      {visible.length > 0 ? (
        <section className={styles.topicGrid} aria-label="Temas de la Librería profesional">
          {visible.map((entry) => (
            <article className={styles.topicCard} key={entry.slug} style={{ "--library-accent": entry.accent } as React.CSSProperties}>
              <div className={styles.topicCardTop}><span>{collectionGroupMeta[entry.group].name}</span><b>{entry.short}</b></div>
              <h2>{entry.title}</h2>
              <p>{entry.description}</p>
              <dl className={styles.topicMetrics}>
                <div><dt>Recursos</dt><dd>{entry.resourceCount}</dd></div>
                <div><dt>Fuentes primarias</dt><dd>{entry.officialCount}</dd></div>
              </dl>
              <Link href={`/libreria/${entry.slug}`}>Abrir librería <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </section>
      ) : (
        <div className={styles.empty} role="status">
          <strong>No encontramos una coincidencia.</strong>
          <p>Prueba otro término o restablece los filtros.</p>
          <button type="button" onClick={resetFilters}>Mostrar todos los temas</button>
        </div>
      )}
    </>
  );
}
