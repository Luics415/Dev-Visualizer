import Link from "next/link";

interface ToolItem {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  linkHref: string;
  linkText: string;
  accent: string;
}

const TOOLS: readonly ToolItem[] = [
  {
    number: "01",
    badge: "MOTOR OBSERVABLE",
    title: "Visualizadores con Controles de Reproducción",
    subtitle: "Ordenamiento, grafos y runtimes paso a paso",
    description:
      "Desde particionamiento de Quicksort y recorridos en grafos hasta el Event Loop de V8: simulaciones con controles de reproducción, inspección de punteros L/R y análisis de complejidad asintótica Big-O.",
    tags: ["Paso a Paso", "Punteros L/R", "Complejidad Big-O", "Memoria"],
    linkHref: "#que-se-aprende",
    linkText: "Probar visualizadores",
    accent: "var(--cyan)",
  },
  {
    number: "02",
    badge: "CASOS PRÁCTICOS",
    title: "73 Escenarios de Producción «En Acción»",
    subtitle: "Diagnóstico y mitigación de fallos reales",
    description:
      "Conecta cada tecnología con escenarios reales de producción: inyección de fallos de red, saturación de pools de conexiones y aplicación de patrones Circuit Breaker, Bulkheads y Rate Limiting.",
    tags: ["Inyección de Fallos", "Circuit Breakers", "73 Rutas", "Resiliencia"],
    linkHref: "/docker-en-accion",
    linkText: "Ver casos en acción",
    accent: "var(--green)",
  },
  {
    number: "03",
    badge: "DOCUMENTACIÓN CANÓNICA",
    title: "Librería Profesional Preservada",
    subtitle: "266 Especificaciones primarias oficiales",
    description:
      "73 bibliotecas estáticas que catalogan fuentes formales: estándares TC39 (ECMA-262), RFCs del IETF (HTTP/2, HTTP/3, QUIC) y especificaciones W3C sin resúmenes inventados ni alucinaciones.",
    tags: ["Estándares RFC/ISO", "266 Recursos", "Fuentes Oficiales", "Preservación"],
    linkHref: "/libreria",
    linkText: "Consultar librería",
    accent: "var(--jinx-rose)",
  },
];

export function ThreeToolsSection() {
  return (
    <section className="three-tools-section" aria-label="Tres herramientas en un solo espacio de trabajo">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">TRES HERRAMIENTAS, UN ESPACIO DE TRABAJO</span>
        <h2>Diseñado para razonar sobre código en ejecución</h2>
        <p className="home-section-lead">
          Simulación interactiva determinista, diagnóstico de fallos en producción y fuentes normativas primarias.
        </p>
      </div>

      <div className="three-tools-grid">
        {TOOLS.map((tool) => (
          <article
            className="three-tool-card"
            key={tool.number}
            style={{ "--card-accent": tool.accent } as React.CSSProperties}
          >
            <header className="three-tool-card__header">
              <span className="three-tool-card__num">{tool.number}</span>
              <span className="three-tool-card__family">{tool.badge}</span>
            </header>

            <h3 className="three-tool-card__title">{tool.title}</h3>
            <span className="three-tool-card__subtitle">{tool.subtitle}</span>
            <p className="three-tool-card__desc">{tool.description}</p>

            <div className="three-tool-card__tags">
              {tool.tags.map((tag, idx) => (
                <span key={idx} className="three-tool-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="three-tool-card__footer">
              <Link href={tool.linkHref} className="three-tool-link">
                <span>{tool.linkText}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
