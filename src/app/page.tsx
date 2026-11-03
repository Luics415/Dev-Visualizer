import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { HeroSimulatorWorkbench } from "@/components/home/HeroSimulatorWorkbench";
import { ThreeToolsSection } from "@/components/home/ThreeToolsSection";
import { WhatYouLearnSection } from "@/components/home/WhatYouLearnSection";
import { WhatYouCanDoSection } from "@/components/home/WhatYouCanDoSection";
import { TrustEvidenceSection } from "@/components/home/TrustEvidenceSection";
import { NextActionSection } from "@/components/home/NextActionSection";
import { HomeConceptSearch } from "@/components/home/HomeConceptSearch";
import { StartGuideDrawer } from "@/components/home/StartGuideDrawer";
import { SpotlightTour } from "@/components/home/SpotlightTour";
import { collectionManifest } from "@/data/collectionManifest";
import { canonicalConceptCount } from "@/data/canonicalConceptCollections";

export const metadata = {
  title: "Dev Visualizer · Atlas Interactivo de Arquitectura de Software",
  description:
    "Comprende el código y la arquitectura de software viéndolos ejecutarse. 7,410 conceptos técnicos, 73 colecciones, algoritmos observables, telemetría y especificaciones oficiales.",
};

export default function HomePage() {
  const totalCollections = collectionManifest.length;
  const totalRoutes = totalCollections * 2;

  return (
    <main className="page-shell">
      <CollectionNav />

      {/* ── Hero Split de Alto Impacto (Inspirado en la Arquitectura de DevVizor) ── */}
      <header className="home-hero home-hero--split">
        <div className="home-hero__content-col">

          <h1 className="home-hero__headline">
            Comprende la arquitectura de software viéndola ejecutarse.
          </h1>

          <p className="home-hero__subheadline">
            Simula algoritmos, ciclos de eventos y <strong>{canonicalConceptCount.toLocaleString("es-MX")} conceptos técnicos</strong> con animaciones interactivas paso a paso en memoria activa.
          </p>

          {/* Botones de Acción Principales */}
          <div className="home-hero__actions">
            <Link href="/colecciones" className="btn-cyber-primary">
              <span>Explorar las {totalCollections} Colecciones</span>
              <span aria-hidden="true">→</span>
            </Link>

            <a href="#que-se-aprende" className="btn-cyber-secondary">
              <span className="btn-cyber-icon" aria-hidden="true">&gt;_</span>
              <span>Consola de Simulación</span>
            </a>

            <Link href="/libreria" className="btn-cyber-outline">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <span>Librería Profesional</span>
            </Link>
          </div>

          {/* Línea de Estado y Tecnologías */}
          <div className="home-hero__footnote">
            <span>{totalCollections} colecciones temáticas</span>
            <span className="home-hero__footnote-sep">·</span>
            <span>{totalRoutes} rutas canónicas</span>
            <span className="home-hero__footnote-sep">·</span>
            <span>JavaScript, Python, Rust, Go, Docker, SQL, Linux</span>
          </div>
        </div>

        {/* Columna Derecha: Workbench de Simulación en Vivo */}
        <div className="home-hero__visual-col">
          <HeroSimulatorWorkbench />
        </div>
      </header>

      {/* ── Sección de 3 Herramientas ("Three Tools, One Workspace") ── */}
      <ThreeToolsSection />

      {/* ── Buscador Global Indexado en Memoria (Sub-milisegundo) ── */}
      <HomeConceptSearch />

      {/* ── PILAR 1: ¿QUÉ SE APRENDE? (6 Dominios de Sistemas + Consola Completa) ── */}
      <WhatYouLearnSection />

      {/* ── PILAR 2: ¿QUÉ PUEDO HACER? (5 Herramientas Operativas) ── */}
      <WhatYouCanDoSection />

      {/* ── PILAR 3: ¿PUEDO CONFIAR? (Fuentes Normativas, SAST y Terminal CI/CD) ── */}
      <TrustEvidenceSection />

      {/* ── PILAR 4: ¿QUÉ HAGO AHORA? (4 Pasos + Lanzador Rápido) ── */}
      <NextActionSection />

      {/* ── Panel Lateral Desplegable: Roadmap / ¿Por dónde empezar? ── */}
      <StartGuideDrawer />

      {/* ── Tarjeta Flotante de Bienvenida / Onboarding Compacto ── */}
      <SpotlightTour />

      {/* ── Nota de Cierre del Proyecto ── */}
      <footer className="project-note">
        Dev Visualizer es un atlas de código abierto diseñado para la enseñanza rigurosa de la ingeniería de software. Cada concepto y ruta canónica ha sido construido para fijar modelos mentales precisos sin comprometer los fundamentos técnicos, la accesibilidad WCAG 2.1 AA ni la privacidad del usuario.
      </footer>
    </main>
  );
}
