import { CollectionNav } from "@/components/navigation/CollectionNav";
import { HomeArchitectureExplorer } from "@/components/home/HomeArchitectureExplorer";
import { HomeHeroActions } from "@/components/home/HomeHeroActions";
import { HomeSectionsMenu } from "@/components/home/HomeSectionsMenu";
import { HomeAchievementsSection } from "@/components/home/HomeAchievementsSection";
import { HomeConceptSearch } from "@/components/home/HomeConceptSearch";
import { StartGuideDrawer } from "@/components/home/StartGuideDrawer";
import { SpotlightTour } from "@/components/home/SpotlightTour";
import { collectionManifest } from "@/data/collectionManifest";
import { canonicalConceptCount } from "@/data/canonicalConceptCollections";

export const metadata = {
  title: "Dev Visualizer · Atlas Interactivo de Arquitectura de Software",
  description:
    "Comprende el código y la arquitectura de software viéndolos ejecutarse. 7,410 conceptos técnicos, 73 colecciones, 146 rutas canónicas, 7 áreas de arquitectura y trofeos de completado.",
};

export default function HomePage() {
  const totalCollections = collectionManifest.length;
  const totalRoutes = totalCollections * 2;

  return (
    <main className="page-shell">
      <CollectionNav />

      {/* ── Hero Split Amplio y Cómodo de Alto Impacto ── */}
      <header className="home-hero home-hero--split">
        <div className="home-hero__content-col">
          <h1 className="home-hero__headline">
            Comprende la arquitectura <br className="hero-break" />
            de software viéndola ejecutarse.
          </h1>

          <p className="home-hero__subheadline">
            Simula algoritmos, ciclos de eventos y <strong>{canonicalConceptCount.toLocaleString("es-MX")} conceptos técnicos</strong> a través de 7 áreas de arquitectura, con animaciones interactivas paso a paso en memoria activa.
          </p>

          {/* Botones de Acción Principales */}
          <HomeHeroActions totalCollections={totalCollections} />

          {/* Línea de Estado y Tecnologías */}
          <div className="home-hero__footnote">
            <span>{totalCollections} colecciones temáticas</span>
            <span className="home-hero__footnote-sep">·</span>
            <span>{totalRoutes} rutas canónicas</span>
            <span className="home-hero__footnote-sep">·</span>
            <span>7 áreas canónicas con trofeos</span>
            <span className="home-hero__footnote-sep">·</span>
            <span>JavaScript, Python, Rust, Go, Docker, SQL, Linux</span>
          </div>
        </div>

        {/* Columna Derecha: Consola Interactiva de las 7 Áreas de Arquitectura */}
        <div className="home-hero__visual-col">
          <HomeArchitectureExplorer />
        </div>
      </header>

      {/* ── Menú Guía Directo: Los 4 Pilares Fundamentales ── */}
      <HomeSectionsMenu />

      {/* ── Sección de Metas y Trofeos de Completado por Área ── */}
      <HomeAchievementsSection />

      {/* ── Buscador Global Indexado en Memoria (Sub-milisegundo) ── */}
      <HomeConceptSearch />

      {/* ── Panel Lateral Desplegable: Roadmap / ¿Por dónde empezar? ── */}
      <StartGuideDrawer />

      {/* ── Tarjeta Flotante de Bienvenida / Onboarding Compacto con Spotlight ── */}
      <SpotlightTour />

      {/* ── Nota de Cierre del Proyecto ── */}
      <footer className="project-note">
        Dev Visualizer es un atlas de código abierto diseñado para la enseñanza rigurosa de la ingeniería de software. Cada concepto y ruta canónica ha sido construido para fijar modelos mentales precisos sin comprometer los fundamentos técnicos, la accesibilidad WCAG 2.1 AA ni la privacidad del usuario.
      </footer>
    </main>
  );
}
