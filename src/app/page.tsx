import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { WhatYouLearnSection } from "@/components/home/WhatYouLearnSection";
import { WhatYouCanDoSection } from "@/components/home/WhatYouCanDoSection";
import { TrustEvidenceSection } from "@/components/home/TrustEvidenceSection";
import { NextActionSection } from "@/components/home/NextActionSection";
import { HomeConceptSearch } from "@/components/home/HomeConceptSearch";
import { HomeTourSection } from "@/components/home/HomeTourSection";
import { collectionManifest } from "@/data/collectionManifest";
import { canonicalConceptCount } from "@/data/canonicalConceptCollections";

export const metadata = {
  title: "Dev Visualizer · Atlas Interactivo de Arquitectura de Software",
  description:
    "Enciclopedia interactiva con 7,410 conceptos técnicos, 73 colecciones, 146 rutas canónicas y 7 áreas de arquitectura de software explicadas mediante modelos deterministas y código observable.",
};

export default function HomePage() {
  const totalCollections = collectionManifest.length;
  const totalRoutes = totalCollections * 2;

  return (
    <main className="page-shell">
      <CollectionNav />

      {/* ── Hero Principal de Ingeniería ── */}
      <header className="home-hero">
        <div className="home-hero__badge">
          <span className="live-indicator-dot" />
          <span>SISTEMA CANÓNICO · 7,410 CONCEPTOS DE INGENIERÍA VERIFICADOS</span>
        </div>

        <h1>Dev Visualizer</h1>

        <p>
          El atlas interactivo de arquitectura de software, ingeniería de runtimes y sistemas distribuidos.
          Aprende con modelos mentales deterministas, simulaciones paso a paso, casos de producción reales y especificaciones oficiales.
        </p>

        {/* ── Botones de Acción con Estética Nativa Cyber/Terminal ── */}
        <div className="home-hero__actions">
          <Link href="/colecciones" className="btn-cyber-primary">
            <span>Explorar las 73 Colecciones</span>
            <span aria-hidden="true">→</span>
          </Link>

          <a href="#que-se-aprende" className="btn-cyber-secondary">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Ver Animaciones en Vivo</span>
          </a>

          <Link href="/libreria" className="btn-cyber-outline">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>Librería Preservada</span>
          </Link>

          <a href="#tour" className="btn-cyber-outline">
            <span>Tour Técnico</span>
          </a>
        </div>

        {/* ── Métricas Globales de Rigor ── */}
        <div className="home-stats-grid">
          <div className="home-stat-card">
            <strong>{canonicalConceptCount.toLocaleString("es-MX")}</strong>
            <span>Conceptos técnicos explicados con modelos mentales</span>
          </div>
          <div className="home-stat-card">
            <strong>{totalCollections}</strong>
            <span>Colecciones estructuradas por especialidad</span>
          </div>
          <div className="home-stat-card">
            <strong>{totalRoutes}</strong>
            <span>Rutas canónicas activas (fundamentos y casos en acción)</span>
          </div>
          <div className="home-stat-card">
            <strong>7</strong>
            <span>Áreas maestras de arquitectura de sistemas</span>
          </div>
        </div>
      </header>

      {/* ── Buscador Global Indexado en Memoria (Sub-milisegundo) ── */}
      <HomeConceptSearch />

      {/* ── PILAR 1: ¿QUÉ SE APRENDE? (Showcase Interactivo + 7 Dominios) ── */}
      <WhatYouLearnSection />

      {/* ── PILAR 2: ¿QUÉ PUEDO HACER? (5 Herramientas Operativas) ── */}
      <WhatYouCanDoSection />

      {/* ── PILAR 3: ¿PUEDO CONFIAR? (Evidencia Criptográfica, Fuentes, SAST) ── */}
      <TrustEvidenceSection />

      {/* ── PILAR 4: ¿QUÉ HAGO AHORA? (4 Pasos + Lanzador Rápido) ── */}
      <NextActionSection />

      {/* ── Tour Guiado Interactivo ("Welcome to Dev Visualizer") ── */}
      <HomeTourSection />

      {/* ── Nota de Cierre del Proyecto ── */}
      <footer className="project-note">
        Dev Visualizer es un atlas de código abierto diseñado para la enseñanza rigurosa de la ingeniería de software. Cada concepto y ruta canónica ha sido construido para fijar modelos mentales precisos sin comprometer los fundamentos técnicos, la accesibilidad WCAG 2.1 AA ni la privacidad del usuario.
      </footer>
    </main>
  );
}
