import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { HomeTourSection } from "@/components/home/HomeTourSection";
import { HomeConceptSearch } from "@/components/home/HomeConceptSearch";
import { collectionGroupMeta, collectionManifest, type CollectionGroupId } from "@/data/collectionManifest";
import { canonicalConceptCount } from "@/data/canonicalConceptCollections";

export const metadata = {
  title: "Dev Visualizer · Plataforma Educativa de Arquitectura de Software",
  description:
    "Enciclopedia interactiva con 7,410 conceptos técnicos, 394 colecciones interactivas y 7 áreas de arquitectura de software explicadas mediante modelos deterministas y código observable.",
};

const QUICKSTART_ROUTES = [
  {
    title: "JavaScript ES6+",
    badge: "Lenguajes",
    href: "/javascript",
    desc: "Valores, prototipos, asincronía, event loop y memoria.",
  },
  {
    title: "TypeScript",
    badge: "Lenguajes",
    href: "/typescript",
    desc: "Sistemas de tipos, narrowing, genéricos y compilación.",
  },
  {
    title: "Python",
    badge: "Lenguajes",
    href: "/python",
    desc: "Estructuras, modelo de objetos, GIL, generadores e IA.",
  },
  {
    title: "Algoritmos y Estructuras",
    badge: "Fundamentos",
    href: "/algoritmos",
    desc: "Complejidad O(N), árboles, grafos y programación dinámica.",
  },
  {
    title: "Git y Arquitectura de Versiones",
    badge: "Control de versiones",
    href: "/git",
    desc: "Objetos blob/tree/commit, ramas, merge tracking y rebase.",
  },
  {
    title: "Docker y Contenedores",
    badge: "Infraestructura",
    href: "/docker",
    desc: "Namespaces, cgroups, imágenes OCI, redes y orquestación.",
  },
  {
    title: "Librería Profesional",
    badge: "Preservación",
    href: "/libreria",
    desc: "179 recursos técnicos y manuales con integridad SHA-256.",
  },
  {
    title: "Catálogo Completo",
    badge: "Todas las rutas",
    href: "/colecciones",
    desc: "Explora las 394 colecciones organizadas por áreas de estudio.",
  },
];

const PLATFORM_PILLARS = [
  {
    title: "Modelos Deterministas y Observabilidad",
    desc: "Erradicamos las abstracciones opacas. Cada concepto se presenta con animaciones vectoriales paso a paso que revelan el comportamiento exacto de los punteros, registros de CPU, buffers y el árbol del DOM.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Doble Dimensión: Fundamentos y Casos en Acción",
    desc: "Cada módulo vincula la teoría exhaustiva con un escenario de producción ('En acción'). Conecta el aprendizaje de sintaxis y mecanismos con métricas reales, pipelines y patrones de arquitectura aplicados.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Accesibilidad Multimodal y Narración Nativa",
    desc: "Integración profunda con la Web Speech API para lectura guiada en español neutro con cadencia técnica, soporte para navegación completa por teclado y contraste conforme a normas WCAG AA.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    title: "Fuentes Canónicas y Preservación Técnica",
    desc: "Fundamentación estricta en especificaciones formales (ECMA, W3C, RFCs, ISO). Nuestra librería técnica almacena manuales verificados con sumas criptográficas SHA-256 para estudio permanente.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const totalCollections = collectionManifest.length;
  const totalRoutes = totalCollections * 2;
  const groupsList = Object.entries(collectionGroupMeta) as [CollectionGroupId, { name: string; description: string }][];

  return (
    <main className="page-shell">
      <CollectionNav />

      {/* ── Hero Principal ── */}
      <header className="home-hero">
        <div className="home-hero__badge">
          <span>Ecosistema de Ingeniería · 7,410 Conceptos Técnicos</span>
        </div>
        <h1>Dev Visualizer</h1>
        <p>
          El atlas interactivo de arquitectura de software, lenguajes y sistemas distribuidos.
          Aprende con modelos mentales deterministas, código observable, narración auditiva y fuentes canónicas verificadas.
        </p>

        <div className="home-hero__actions">
          <a href="#tour" className="home-hero__btn home-hero__btn--primary">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Iniciar Tour de Bienvenida
          </a>
          <Link href="/colecciones" className="home-hero__btn home-hero__btn--secondary">
            Explorar 394 Colecciones →
          </Link>
          <Link href="/javascript" className="home-hero__btn home-hero__btn--tertiary">
            Ruta JavaScript ES6+
          </Link>
          <Link href="/libreria" className="home-hero__btn home-hero__btn--tertiary">
            Librería Técnica
          </Link>
        </div>

        {/* ── Métricas Globales ── */}
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
            <span>Rutas canónicas activas (teoría y casos en acción)</span>
          </div>
          <div className="home-stat-card">
            <strong>7</strong>
            <span>Áreas maestras de arquitectura de sistemas</span>
          </div>
        </div>
      </header>

      {/* ── Tour Guiado Interactivo ("Welcome to Dev Visualizer") ── */}
      <HomeTourSection />

      {/* ── Buscador Global Indexado en Memoria ── */}
      <HomeConceptSearch />

      {/* ── Las 7 Áreas Maestras de Arquitectura ── */}
      <section className="home-domains-section" aria-label="Áreas de arquitectura">
        <div className="home-section-title-wrap">
          <span className="home-section-eyebrow">Taxonomía Arquitectónica</span>
          <h2>Estructura del Conocimiento en 7 Áreas Maestras</h2>
          <p>
            Desde el cálculo computacional elemental hasta la orquestación distribuida en la nube, organizadas para un aprendizaje progresivo.
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
                  {groupCollections.slice(0, 5).map((col) => (
                    <Link key={col.id} href={col.href} className="home-domain-tag">
                      {col.label}
                    </Link>
                  ))}
                  {groupCollections.length > 5 ? (
                    <Link href="/colecciones" className="home-domain-tag">
                      +{groupCollections.length - 5} más
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Pilares Pedagógicos de la Plataforma ── */}
      <section className="home-pillars-section" aria-label="Pilares metodológicos">
        <div className="home-section-title-wrap">
          <span className="home-section-eyebrow">Rigor y Calidad Técnica</span>
          <h2>Pilares Metodológicos de Dev Visualizer</h2>
          <p>
            Un entorno concebido para ingenieros de software, arquitectos y profesionales técnicos que exigen precisión demostrable.
          </p>
        </div>

        <div className="home-pillars-grid">
          {PLATFORM_PILLARS.map((pillar) => (
            <div key={pillar.title} className="home-pillar-card">
              <div className="home-pillar-icon" aria-hidden="true">
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rutas Recomendadas de Inicio Rápido ── */}
      <section className="home-quickstart-section" aria-label="Rutas de inicio rápido">
        <div className="home-section-title-wrap">
          <span className="home-section-eyebrow">Inicio Rápido</span>
          <h2>Rutas Recomendadas para Comenzar</h2>
          <p>
            Selecciona una de las rutas canónicas más consultadas o accede directamente a la biblioteca de preservación.
          </p>
        </div>

        <div className="home-quickstart-grid">
          {QUICKSTART_ROUTES.map((route) => (
            <Link key={route.href} href={route.href} className="home-quickstart-card">
              <div className="home-quickstart-info">
                <strong>{route.title}</strong>
                <span>{route.desc}</span>
              </div>
              <span className="home-quickstart-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="project-note">
        Dev Visualizer es un proyecto de código abierto para la enseñanza rigurosa de la ingeniería de software. Cada ruta canónica está diseñada para maximizar la transferencia conceptual sin comprometer la precisión técnica ni la accesibilidad.
      </footer>
    </main>
  );
}
