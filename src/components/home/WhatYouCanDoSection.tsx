import Link from "next/link";

interface ActionCapability {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  ctaHref: string;
  ctaText: string;
  secondaryHref?: string;
  secondaryText?: string;
}

const CAPABILITIES: readonly ActionCapability[] = [
  {
    id: "explore-collections",
    number: "01",
    category: "EXPLORACIÓN SISTEMÁTICA",
    title: "Explorar 73 Colecciones Temáticas Especializadas",
    description:
      "Navega por rutas de aprendizaje estructuradas que cubren desde lenguajes de bajo nivel (C, Rust, Assembly) y runtimes (Node.js, Go, Python) hasta infraestructura cloud (AWS, Docker, Linux, Nginx).",
    features: [
      "7,410 conceptos técnicos clasificados con taxonomía de rigor.",
      "Capítulos secuenciales de menor a mayor complejidad.",
      "Visualización semántica de invariantes y contratos de ejecución.",
    ],
    ctaHref: "/colecciones",
    ctaText: "Explorar las 73 Colecciones",
    secondaryHref: "/javascript",
    secondaryText: "Ver Colección JavaScript",
  },
  {
    id: "cases-in-action",
    number: "02",
    category: "INGENIERÍA PRÁCTICA",
    title: "Diagnosticar y Resolver 73 Casos Reales «En Acción»",
    description:
      "Analiza escenarios de producción de punta a punta: inyección de anomalías de red, cuellos de botella de concurrencia, memory leaks y saturación de base de datos con soluciones arquitectónicas verificadas.",
    features: [
      "Simulación de incidentes reales de producción.",
      "Mecanismos de aislamiento y recuperación resiliente (Circuit Breakers, Bulkheads).",
      "Lecciones aprendidas y contraste contra especificaciones oficiales.",
    ],
    ctaHref: "/docker-en-accion",
    ctaText: "Ver Caso Docker en Acción",
    secondaryHref: "/backend-en-accion",
    secondaryText: "Ver Caso Backend en Acción",
  },
  {
    id: "technical-quizzes",
    number: "03",
    category: "EVALUACIÓN SENIOR",
    title: "Poner a Prueba tus Modelos Mentales con Quizzes Técnicos",
    description:
      "Evalúa tu comprensión profunda con preguntas de arquitectura que descartan falacias comunes. Responde los quizzes de cada tecnología y desbloquea la Insignia de Ancla de Dev Visualizer.",
    features: [
      "Preguntas diseñadas para evaluar modelos mentales, no memoria sintáctica.",
      "Explicaciones técnicas detalladas para cada opción correcta e incorrecta.",
      "Insignia de Ancla interactiva 3D con estadísticas de precisión.",
    ],
    ctaHref: "/javascript/quiz",
    ctaText: "Iniciar Quiz de JavaScript",
    secondaryHref: "/typescript/quiz",
    secondaryText: "Iniciar Quiz de TypeScript",
  },
  {
    id: "preserved-library",
    number: "04",
    category: "DOCUMENTACIÓN NORMATIVA",
    title: "Consultar la Librería Profesional Preservada",
    description:
      "Accede a 73 bibliotecas estáticas que catalogan 266 recursos canónicos: especificaciones formales de TC39, W3C, IETF y libros clásicos sin resúmenes simplistas ni alucinaciones de IA.",
    features: [
      "Citas directas a estándares (ECMA-262, RFCs de IETF, ISO/IEC).",
      "Recursos bibliográficos organizados por nivel técnico y formato.",
      "Acreditación de fuentes oficiales y repositorios de preservación.",
    ],
    ctaHref: "/libreria",
    ctaText: "Acceder a la Librería Profesional",
    secondaryHref: "/libreria/python",
    secondaryText: "Ver Librería de Python",
  },
  {
    id: "open-source-audit",
    number: "05",
    category: "RIGOR DE CÓDIGO ABIERTO",
    title: "Auditar el Código Fuente y Seguridad SAST Abierta",
    description:
      "Dev Visualizer es 100% de código abierto. Puedes inspeccionar las pruebas automatizadas, el análisis de vulnerabilidades con CodeQL, la accesibilidad WCAG 2.1 AA y contribuir al atlas en GitHub.",
    features: [
      "Pipeline de CI/CD reproducible con TypeScript estricto y ESLint.",
      "Cero vulnerabilidades en dependencias mediante escaneo de seguridad continuo.",
      "Arquitectura estática exportada en 394 páginas HTML independientes.",
    ],
    ctaHref: "https://github.com/Luics415/Dev-Visualizer",
    ctaText: "Repositorio en GitHub",
    secondaryHref: "/acerca",
    secondaryText: "Conocer la Misión del Proyecto",
  },
];

export function WhatYouCanDoSection() {
  return (
    <section className="home-action-pillars-section" id="capacidades-operativas" aria-label="Qué puedo hacer en Dev Visualizer">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">02 · CAPACIDADES OPERATIVAS</span>
        <h2>¿Qué puedo hacer en Dev Visualizer?</h2>
        <p className="home-section-lead">
          Cinco herramientas y flujos de trabajo diseñados para aprender, diagnosticar y verificar arquitectura de software con el más alto estándar de ingeniería.
        </p>
      </div>

      <div className="home-cards-grid" aria-label="Capacidades de la plataforma">
        {CAPABILITIES.map((cap) => (
          <article className="home-action-card" key={cap.id}>
            <div className="home-action-card__top">
              <span className="home-action-card__badge">{cap.number}</span>
              <span className="home-action-card__category">{cap.category}</span>
            </div>

            <h3 className="home-action-card__title">{cap.title}</h3>
            <p className="home-action-card__desc">{cap.description}</p>

            <div className="home-action-card__features">
              <strong>Capacidades clave:</strong>
              <ul>
                {cap.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="home-action-card__footer">
              <Link href={cap.ctaHref} className="home-action-card__btn-primary">
                <span>{cap.ctaText}</span>
                <span aria-hidden="true">→</span>
              </Link>
              {cap.secondaryHref && (
                <Link href={cap.secondaryHref} className="home-action-card__link-secondary">
                  <span>{cap.secondaryText}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
