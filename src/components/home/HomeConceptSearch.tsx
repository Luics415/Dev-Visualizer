"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchTechnicalConcepts, type SearchableConcept } from "@/data/conceptSearchIndex";

export function HomeConceptSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return [];
    return searchTechnicalConcepts(trimmed, 8);
  }, [query]);

  return (
    <section className="home-search-panel" aria-label="Buscador rápido de conceptos">
      <div className="home-search-header">
        <span className="home-section-eyebrow">Exploración Inmediata</span>
        <h2>Localiza cualquier concepto o mecanismo en milisegundos</h2>
        <p>
          Consulta el catálogo completo de 7,410 conceptos técnicos mediante coincidencia difusa instantánea sin latencia de red.
        </p>
      </div>

      <div className="home-search-input-wrapper">
        <svg
          className="home-search-icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="search"
          className="home-search-input"
          placeholder="Ej: Event Loop, Punteros, Dockerfile, Índices B-Tree, React Hooks, RAII..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Buscar conceptos técnicos en todo el atlas de Dev Visualizer"
        />
        {query ? (
          <button
            type="button"
            className="home-search-clear"
            onClick={() => setQuery("")}
            aria-label="Limpiar término de búsqueda"
          >
            ×
          </button>
        ) : null}
      </div>

      {results.length > 0 ? (
        <div className="home-search-results" role="region" aria-label="Resultados de búsqueda">
          <ul className="home-search-list">
            {results.map((item: SearchableConcept) => (
              <li key={`${item.collectionId}-${item.title}`} className="home-search-item">
                <Link href={item.href} className="home-search-item-link">
                  <div className="home-search-item-meta">
                    <span className="home-search-tag">{item.collectionLabel}</span>
                    <span className="home-search-section">{item.section}</span>
                  </div>
                  <strong className="home-search-title">{item.title}</strong>
                  <span className="home-search-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : query.trim().length >= 2 ? (
        <div className="home-search-empty">
          <span>No se encontraron conceptos para &quot;{query}&quot;. Prueba con términos como <em>closures</em>, <em>threads</em>, <em>schema</em> o <em>pipeline</em>.</span>
        </div>
      ) : (
        <div className="home-search-suggestions">
          <span>Búsquedas frecuentes:</span>
          <div className="home-search-chips">
            {["Event Loop", "Closures", "Punteros", "Goroutines", "B-Tree", "Docker Compose", "Git Rebase"].map((term) => (
              <button
                key={term}
                type="button"
                className="home-search-chip"
                onClick={() => setQuery(term)}
                aria-label={`Buscar ${term}`}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
