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
        || (provenance === "midudev" && entry.importedCount > 0)
        || (provenance === "curated" && entry.supplementalCount > 0);
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

  const hasActiveFilters = Boolean(
    query.trim() || group !== "all" || format !== "all" || level !== "all" || provenance !== "all" || availability !== "all"
  );

  return (
    <>
      <section className={styles.controls} aria-label="Buscar y filtrar la Librería profesional">
        <div className={styles.searchHeader}>
          <div className={styles.searchFieldWrapper}>
            <span className={styles.searchIcon} aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar tema, libro, autor o tecnología…"
              className={styles.searchInput}
              aria-label="Buscar tema, libro, autor o tecnología"
            />
            {query ? (
              <button
                type="button"
                className={styles.clearQueryButton}
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            ) : null}
          </div>

          <div className={styles.searchActions}>
            <div className={styles.resultBadge} aria-live="polite">
              <span className={styles.resultNumber}>{visible.length}</span>
              <span className={styles.resultLabel}>{visible.length === 1 ? "tema visible" : "temas visibles"}</span>
            </div>
            {hasActiveFilters ? (
              <button
                type="button"
                className={styles.resetButton}
                onClick={resetFilters}
                title="Restablecer todos los filtros"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                <span>Restablecer</span>
              </button>
            ) : null}
          </div>
        </div>

        <div className={styles.filtersBar}>
          <label className={`${styles.filterItem} ${group !== "all" ? styles.filterActive : ""}`}>
            <span className={styles.filterTitle}>Área</span>
            <div className={styles.selectWrapper}>
              <select value={group} onChange={(event) => setGroup(event.target.value)}>
                <option value="all">Todas las áreas</option>
                {Object.entries(collectionGroupMeta).map(([id, meta]) => <option value={id} key={id}>{meta.name}</option>)}
              </select>
            </div>
          </label>

          <label className={`${styles.filterItem} ${format !== "all" ? styles.filterActive : ""}`}>
            <span className={styles.filterTitle}>Formato</span>
            <div className={styles.selectWrapper}>
              <select value={format} onChange={(event) => setFormat(event.target.value)}>
                <option value="all">Todos los formatos</option>
                {formats.map((entry) => <option value={entry} key={entry}>{entry}</option>)}
              </select>
            </div>
          </label>

          <label className={`${styles.filterItem} ${level !== "all" ? styles.filterActive : ""}`}>
            <span className={styles.filterTitle}>Nivel</span>
            <div className={styles.selectWrapper}>
              <select value={level} onChange={(event) => setLevel(event.target.value)}>
                <option value="all">Todos los niveles</option>
                {levels.map((entry) => <option value={entry} key={entry}>{libraryResourceLevelLabels[entry]}</option>)}
              </select>
            </div>
          </label>

          <label className={`${styles.filterItem} ${provenance !== "all" ? styles.filterActive : ""}`}>
            <span className={styles.filterTitle}>Procedencia</span>
            <div className={styles.selectWrapper}>
              <select value={provenance} onChange={(event) => setProvenance(event.target.value)}>
                <option value="all">Todas las procedencias</option>
                <option value="official">Oficial o primario</option>
                <option value="midudev">Catálogo midudev</option>
                <option value="curated">Curaduría Dev Visualizer</option>
              </select>
            </div>
          </label>

          <label className={`${styles.filterItem} ${availability !== "all" ? styles.filterActive : ""}`}>
            <span className={styles.filterTitle}>Disponibilidad</span>
            <div className={styles.selectWrapper}>
              <select value={availability} onChange={(event) => setAvailability(event.target.value)}>
                <option value="all">Todos los estados</option>
                <option value="local">Adjuntos locales autorizados</option>
                <option value="external">Disponibles externamente</option>
                <option value="unavailable">Sin sustituto disponible</option>
              </select>
            </div>
          </label>
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
