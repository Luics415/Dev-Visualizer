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
}

const TOOLS: readonly ToolItem[] = [
  {
    number: "01",
    badge: "MOTOR OBSERVABLE",
    title: "Visualizadores con Controles de Reproducción",
    subtitle: "Algoritmos y Runtimes de Ejecución Paso a Paso",
    description:
      "Desde particionamiento de Quicksort y recorridos en grafos hasta el Event Loop de V8: cada simulación cuenta con controles de reproducción frame a frame, retroceso, análisis de complejidad asintótica Big-O e inspección de variables en memoria activa.",
    tags: ["Paso a Paso", "Punteros L/R", "Complejidad O(N log N)", "Call Stack V8"],
    linkHref: "#que-se-aprende",
    linkText: "Probar Simuladores en Vivo",
  },
  {
    number: "02",
    badge: "ESCENARIOS REALES",
    title: "73 Casos Prácticos de Producción «En Acción»",
    subtitle: "Diagnóstico de Incidentes y Mitigación Resiliente",
    description:
      "Cada una de las 73 tecnologías conecta con un caso real de producción: inyección de fallos de red, cuellos de botella de concurrencia, saturación de pools de conexiones y aplicación de patrones de aislamiento (Circuit Breakers, Bulkheads y Rate Limiting).",
    tags: ["Inyección de Anomalías", "Circuit Breakers", "73 Rutas Prácticas", "Mitigación Resiliente"],
    linkHref: "/docker-en-accion",
    linkText: "Explorar Casos en Acción",
  },
  {
    number: "03",
    badge: "RIGOR CANÓNICO",
    title: "Librería Profesional con Documentación Primaria",
    subtitle: "266 Recursos y Especificaciones sin Alucinaciones de IA",
    description:
      "73 bibliotecas estáticas que catalogan fuentes primarias: especificaciones formales de TC39 (ECMA-262), RFCs del IETF (HTTP/2, HTTP/3, QUIC), estándares W3C e ISO/IEC, y libros clásicos sin resúmenes inventados ni aproximaciones dudosas.",
    tags: ["Estándares RFC/ISO", "266 Recursos Canónicos", "Cero Alucinaciones", "Preservación Digital"],
    linkHref: "/libreria",
    linkText: "Consultar Librería Preservada",
  },
];

export function ThreeToolsSection() {
  return (
    <section className="three-tools-section" aria-label="Tres herramientas en un solo ecosistema canónico">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">TRES EXPERIENCIAS, UN SOLO ECOSISTEMA CANÓNICO</span>
        <h2>Todo lo que necesitas para dominar la ingeniería de software</h2>
        <p className="home-section-lead">
          Diseñado para transformar conceptos abstractos en modelos mentales verificables: simulación interactiva, diagnóstico de incidentes de producción y fuentes primarias oficiales.
        </p>
      </div>

      <div className="three-tools-grid">
        {TOOLS.map((tool) => (
          <article className="three-tool-card" key={tool.number}>
            <div className="three-tool-card__header">
              <span className="three-tool-card__num">{tool.number}</span>
              <span className="three-tool-card__badge">{tool.badge}</span>
            </div>

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
