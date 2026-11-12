import Link from "next/link";

interface SectionMenuItem {
  number: string;
  eyebrow: string;
  badge: string;
  title: string;
  description: string;
  route: string;
  actionText: string;
  accent: string;
}

const SECTION_MENU_ITEMS: readonly SectionMenuItem[] = [
  {
    number: "01",
    eyebrow: "01 · CATÁLOGO CANÓNICO",
    badge: "73 COLECCIONES",
    title: "Colecciones Temáticas",
    description:
      "Explora 73 tecnologías y más de 7,400 conceptos con mapas visuales interactivos paso a paso en memoria viva.",
    route: "/colecciones",
    actionText: "Explorar las 73 Colecciones",
    accent: "var(--cyan)",
  },
  {
    number: "02",
    eyebrow: "02 · CASOS PRÁCTICOS EN VIVO",
    badge: "73 EN ACCIÓN",
    title: "Casos «En Acción»",
    description:
      "Simula 73 escenarios reales de producción: inyección de fallos de red, saturación de pools de base de datos y aislamiento en Docker.",
    route: "/docker-en-accion",
    actionText: "Ver Casos de Producción",
    accent: "var(--green)",
  },
  {
    number: "03",
    eyebrow: "03 · ESTÁNDARES FORMALES",
    badge: "266 NORMAS",
    title: "Librería Profesional",
    description:
      "Consulta especificaciones formales de TC39 (ECMA-262), RFCs del IETF y documentación primaria sin alucinaciones.",
    route: "/libreria",
    actionText: "Consultar 266 Recursos",
    accent: "var(--jinx-rose)",
  },
  {
    number: "04",
    eyebrow: "04 · METAS Y RECONOCIMIENTOS",
    badge: "7 TROFEOS",
    title: "Trofeos por Área",
    description:
      "Supera las evaluaciones técnicas de las 7 áreas de arquitectura para validar tus modelos mentales y ganar tus trofeos.",
    route: "#trofeos-areas",
    actionText: "Ver Trofeos y Metas ↓",
    accent: "var(--yellow)",
  },
];

export function HomeSectionsMenu() {
  return (
    <section
      className="home-menu-section"
      id="menu-guia"
      aria-label="Menú guía de apartados de la plataforma"
    >
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">GUÍA RÁPIDA DE LA PLATAFORMA</span>
        <h2>Menú de Secciones y Entornos</h2>
        <p className="home-section-lead">
          Accede directamente a los 4 pilares fundamentales de Dev Visualizer con títulos claros y navegación fluida.
        </p>
      </div>

      <div className="home-menu-grid">
        {SECTION_MENU_ITEMS.map((item) => (
          <article
            className="home-menu-card"
            id={`menu-card-${item.number}`}
            key={item.number}
            style={{ "--card-accent": item.accent } as React.CSSProperties}
          >
            <div className="home-menu-card__top">
              <span className="home-menu-card__eyebrow">{item.eyebrow}</span>
              <b className="home-menu-card__badge">{item.badge}</b>
            </div>

            <h3 className="home-menu-card__title">{item.title}</h3>
            <p className="home-menu-card__desc">{item.description}</p>

            <Link href={item.route} className="home-menu-card__link">
              <span>{item.actionText}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
