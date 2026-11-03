import Link from "next/link";
import { ArchitectureSimulationConsole } from "./ArchitectureSimulationConsole";
import { collectionGroupMeta, collectionManifest, type CollectionGroupId } from "@/data/collectionManifest";

export function WhatYouLearnSection() {
  const groupsList = Object.entries(collectionGroupMeta) as [CollectionGroupId, { name: string; description: string }][];

  return (
    <section className="home-learn-section" id="que-se-aprende" aria-label="Qué se aprende en Dev Visualizer">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">01 · Currículum y Modelos Mentales</span>
        <h2>¿Qué se aprende en Dev Visualizer?</h2>
        <p>
          Deconstrucción sistemática de mecanismos internos invisibles: memoria, hilos, ciclos de eventos, algoritmos y protocolos en modelos mentales deterministas.
        </p>
      </div>

      {/* ── Consola Canónica de Simulación de Arquitectura y Ejecución Observable ── */}
      <div className="home-showcase-wrapper">
        <ArchitectureSimulationConsole />
      </div>

      {/* ── Taxonomía Curricular en 7 Áreas Maestras con Tarjetas Nativas del Proyecto ── */}
      <div className="home-curriculum-overview">
        <div className="home-curriculum-header">
          <span className="home-curriculum-tag">TAXONOMÍA CURRICULAR OFICIAL</span>
          <h3>Las 7 Áreas Maestras de la Arquitectura de Software</h3>
          <p>
            Catálogo exhaustivo estructurado en las tarjetas canónicas del proyecto, abarcando desde sistemas de bajo nivel hasta ingeniería distribuida en la nube:
          </p>
        </div>

        <div className="library-grid" aria-label="Áreas de arquitectura">
          {groupsList.map(([groupId, meta], idx) => {
            const groupCollections = collectionManifest.filter((col) => col.group === groupId);
            const totalConcepts = groupCollections.length * 100; // promedio canónico
            const totalRoutes = groupCollections.length * 2;
            const primaryCol = groupCollections[0];

            return (
              <article className="library-card" data-lifecycle="actual" key={groupId}>
                <header>
                  <span>Área Canónica {String(idx + 1).padStart(2, "0")}</span>
                  <b>{meta.name.slice(0, 3).toUpperCase()}</b>
                </header>

                <div className="library-card__status">
                  <span>{meta.name}</span>
                  <em>{groupCollections.length} colecciones</em>
                </div>

                <h2>{meta.name}</h2>
                <p>{meta.description}</p>

                <div className="library-card__metrics">
                  <span>
                    <strong>{groupCollections.length}</strong> colecciones
                  </span>
                  <span>
                    <strong>{totalRoutes}</strong> rutas
                  </span>
                  <span>
                    <strong>{totalConcepts.toLocaleString("es-MX")}</strong> conceptos
                  </span>
                </div>

                <div className="library-card__actions">
                  <Link href={primaryCol ? primaryCol.href : "/colecciones"}>
                    Explorar área <span>→</span>
                  </Link>
                  <Link href="/colecciones">
                    Ver catálogo <span>↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
