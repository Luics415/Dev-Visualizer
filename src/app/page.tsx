import { CollectionNav } from "@/components/navigation/CollectionNav";
import { HomeArchitectureExplorer } from "@/components/home/HomeArchitectureExplorer";
import { HomeHeroActions } from "@/components/home/HomeHeroActions";
import { HomeSectionsMenu } from "@/components/home/HomeSectionsMenu";
import { HomeAchievementsSection } from "@/components/home/HomeAchievementsSection";
import { HomeConceptSearch } from "@/components/home/HomeConceptSearch";
import { StartGuideDrawer } from "@/components/home/StartGuideDrawer";
import { SpotlightTour } from "@/components/home/SpotlightTour";
import { collectionManifest } from "@/data/collectionManifest";

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

      <header className="home-hero home-hero--split">
        <div className="home-hero__content-col">
          <h1 className="home-hero__headline">
            Arquitectura de software en acción.
          </h1>

          <p className="home-hero__subheadline">
            Simula 73 tecnologías, 146 rutas canónicas y 7 áreas de ingeniería con animaciones interactivas paso a paso en memoria activa.
          </p>

          <HomeHeroActions totalCollections={totalCollections} />

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

        <div className="home-hero__visual-col">
          <HomeArchitectureExplorer />
        </div>
      </header>

      <HomeSectionsMenu />
      <HomeAchievementsSection />
      <HomeConceptSearch />
      <StartGuideDrawer />
      <SpotlightTour />

      <footer className="project-note">
        Dev Visualizer es un atlas de código abierto diseñado para la enseñanza rigurosa de la ingeniería de software. Cada concepto y ruta canónica ha sido construido para fijar modelos mentales precisos sin comprometer los fundamentos técnicos, la accesibilidad WCAG 2.1 AA ni la privacidad del usuario.
      </footer>
    </main>
  );
}
