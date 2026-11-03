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
    badge: "73 COL",
    title: "Colecciones Temáticas",
    description:
      "Catálogo completo de 73 tecnologías y 7,410 conceptos canónicos organizados por dominios de arquitectura (Frontend, Backend, Runtimes, Nube y DevOps) con mapas visuales interactivos.",
    route: "/colecciones",
    actionText: "Explorar las 73 Colecciones",
    accent: "var(--cyan)",
  },
  {
    number: "02",
    eyebrow: "02 · CAPACIDADES OPERATIVAS",
    badge: "73 CASOS",
    title: "Capacidades Operativas",
    description:
      "73 escenarios de producción simulados: inyección de fallos de red, saturación de pools de base de datos, aislamiento en Docker y mitigación con patrones Circuit Breaker.",
    route: "/docker-en-accion",
    actionText: "Ver Simulaciones de Producción",
    accent: "var(--green)",
  },
  {
    number: "03",
    eyebrow: "03 · ESTÁNDARES FORMALES",
    badge: "266 NORMAS",
    title: "Librería Profesional Preservada",
    description:
      "266 recursos y normas oficiales: especificaciones formales de TC39 (ECMA-262), RFCs del IETF (HTTP/2, HTTP/3, QUIC) y documentación primaria sin alucinaciones.",
    route: "/libreria",
    actionText: "Consultar 266 Recursos",
    accent: "var(--jinx-rose)",
  },
  {
    number: "04",
    eyebrow: "04 · MODELO DE EJECUCIÓN",
    badge: "V8 RUNTIME",
    title: "Currículum y Runtimes",
    description:
      "Trazabilidad de ejecución en tiempo real: Call Stack, Event Loop de V8, Microtasks vs Macrotasks, gestión de memoria Stack vs Heap y complejidad algorítmica Big-O.",
    route: "/javascript",
    actionText: "Acceder al Runtime de JavaScript",
    accent: "var(--yellow)",
  },
  {
    number: "05",
    eyebrow: "05 · RIGOR TÉCNICO Y ACCESIBILIDAD",
    badge: "SAST 100%",
    title: "Auditoría, Seguridad y Confianza",
    description:
      "Garantías formales de ingeniería: cero dependencias vulnerables, análisis SAST continuo, tipado estricto en TypeScript y accesibilidad internacional WCAG 2.1 AA.",
    route: "/acerca",
    actionText: "Ver Dictamen de Auditoría",
    accent: "var(--cyan)",
  },
  {
    number: "06",
    eyebrow: "06 · VALIDACIÓN COGNITIVA",
    badge: "QUIZ SENIOR",
    title: "Evaluación y Certificación",
    description:
      "Evaluaciones técnicas de nivel senior para validar modelos mentales, resolver escenarios de concurrencia y arquitectura y desbloquear la Insignia de Ancla.",
    route: "/javascript/quiz",
    actionText: "Iniciar Quiz de Arquitectura",
    accent: "var(--violet)",
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
        <span className="home-section-eyebrow">GUÍA DE LA PLATAFORMA</span>
        <h2>Menú de Secciones y Entornos</h2>
        <p className="home-section-lead">
          Directorio central de Dev Visualizer. Revisa qué encontrarás en cada apartado y accede directamente al entorno deseado.
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
