import Link from "next/link";
import { LiveAnimationShowcase } from "./LiveAnimationShowcase";
import { collectionGroupMeta, collectionManifest, type CollectionGroupId } from "@/data/collectionManifest";

export function WhatYouLearnSection() {
  const groupsList = Object.entries(collectionGroupMeta) as [CollectionGroupId, { name: string; description: string }][];

  return (
    <section className="home-learn-section" id="que-se-aprende" aria-label="Qué se aprende en Dev Visualizer">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">01 · Currículum y Modelos Mentales</span>
        <h2>¿Qué se aprende en Dev Visualizer?</h2>
        <p>
          Deconstrucción sistemática de mecanismos internos invisibles: memoria, hilos, ciclos de eventos, estructuras de datos y protocolos en modelos mentales deterministas.
        </p>
      </div>

      {/* ── Banco Interactivo de Animaciones Tecnológicas en Vivo ── */}
      <div className="home-showcase-wrapper">
        <header className="home-showcase-intro">
          <div className="home-showcase-intro-badge">
            <span className="live-indicator-dot" />
            <span>MECANISMOS INTERNOS EN VIVO · ANIMACIONES DETERMINISTAS</span>
          </div>
          <h3>Simulación de Arquitectura y Ejecución Observable</h3>
          <p>
            Selecciona un mecanismo técnico para observar cómo opera el runtime por dentro: sin abstracciones opacas ni cajas negras. Controla la reproducción o avanza frame a frame.
          </p>
        </header>

        <LiveAnimationShowcase />
      </div>

      {/* ── Taxonomía Curricular en 7 Áreas Maestras ── */}
      <div className="home-curriculum-overview">
        <div className="home-curriculum-header">
          <span className="home-curriculum-tag">MAPA CURRICULAR COMPLETO</span>
          <h3>Las 7 Áreas Maestras de la Arquitectura de Software</h3>
          <p>
            Un recorrido progresivo que abarca desde los fundamentos de hardware y memoria hasta la orquestación distribuida en la nube y la inteligencia artificial:
          </p>
        </div>

        <div className="home-domains-grid">
          {groupsList.map(([groupId, meta]) => {
            const groupCollections = collectionManifest.filter((col) => col.group === groupId);
            return (
              <article key={groupId} className="home-domain-card">
                <header className="home-domain-header">
                  <span className="home-domain-badge">{meta.name}</span>
                  <span className="home-domain-count">{groupCollections.length} colecciones</span>
                </header>
                <h3>{meta.name}</h3>
                <p>{meta.description}</p>
                <div className="home-domain-tags">
                  {groupCollections.slice(0, 6).map((col) => (
                    <Link key={col.id} href={col.href} className="home-domain-tag">
                      {col.label}
                    </Link>
                  ))}
                  {groupCollections.length > 6 ? (
                    <Link href="/colecciones" className="home-domain-tag home-domain-tag--more">
                      +{groupCollections.length - 6} más →
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
