import Link from "next/link";

type ActionCapability = {
  num: string;
  badge: string;
  title: string;
  description: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
};

const ACTION_CAPABILITIES: readonly ActionCapability[] = [
  {
    num: "01",
    badge: "Control Determinista",
    title: "Inspeccionar Animaciones Paso a Paso",
    description: "Navega frame a frame por el ciclo de ejecución de cada concepto. Observa cómo cambian los punteros de memoria, cómo se apilan los marcos en el Call Stack y cómo muta el estado sin efectos ocultos ni cajas negras.",
    features: [
      "Controles interactivos de reproducción, pausa y avance manual",
      "Pausa automática al salir del viewport para optimizar recursos",
      "Soporte nativo para modo de movimiento reducido (prefers-reduced-motion)",
    ],
    ctaLabel: "Inspeccionar JavaScript ES6+",
    ctaHref: "/javascript",
  },
  {
    num: "02",
    badge: "Ingeniería de Producción",
    title: "Diagnosticar 73 Casos Reales 'En Acción'",
    description: "Cada colección conecta los conceptos con un escenario de producción real: inyección de latencia, agotamiento de conexiones en base de datos, desbordamiento de búfer o aislamiento de microservicios con fallos controlados.",
    features: [
      "Simulación de anomalías, cuellos de botella y picos de tráfico",
      "Fronteras de contención y aplicación de patrones de resiliencia",
      "Trazabilidad de errores con evidencias y logs de auditoría",
    ],
    ctaLabel: "Explorar Caso en Acción: Docker",
    ctaHref: "/docker-en-accion",
  },
  {
    num: "03",
    badge: "Accesibilidad Nativa",
    title: "Activar Síntesis Auditiva por Voz",
    description: "Asimila conceptos complejos mientras observas las transiciones visuales mediante locución sintetizada nativa con la Web Speech API del navegador, con dicción técnica profesional en español neutro.",
    features: [
      "Segmentación oracional adaptada a terminología técnica de desarrollo",
      "Tres velocidades calibradas (1.0x estándar, 1.25x dinámico, 1.5x repaso)",
      "Procesamiento 100% en el cliente sin transferir audio a servidores externos",
    ],
    ctaLabel: "Probar Narración en Python",
    ctaHref: "/python",
  },
  {
    num: "04",
    badge: "Evaluación Formativa",
    title: "Acreditar Conocimientos con Quizzes Técnicos",
    description: "Valida tu retención y juicio arquitectónico con evaluaciones formativas exhaustivas. Cada opción descartada o acertada incluye su justificación teórica y referencias a estándares.",
    features: [
      "Preguntas basadas en decisiones de diseño y análisis de fallos",
      "Retroalimentación inmediata sin dinámicas de gamificación vacía",
      "Generación de insignias de acreditación criptográfica verificable",
    ],
    ctaLabel: "Iniciar Quiz de Evaluación",
    ctaHref: "/javascript/quiz",
  },
  {
    num: "05",
    badge: "Preservación Técnica",
    title: "Consultar 179 Libros y Estándares Canónicos",
    description: "Accede a una colección curada de manuales técnicos, libros de referencia y especificaciones oficiales con licencias de libre acceso y sumas de verificación criptográfica auditables.",
    features: [
      "Metadatos estructurados con autor, editorial, año e idioma",
      "Hashes SHA-256 calculados e inmutables para cada recurso descargable",
      "Filtros avanzados por tecnología, nivel formativo y disponibilidad",
    ],
    ctaLabel: "Abrir Librería Profesional",
    ctaHref: "/libreria",
  },
];

export function WhatYouCanDoSection() {
  return (
    <section className="home-action-pillars-section" aria-label="Qué puedo hacer en la plataforma">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">02 · Capacidades Operativas</span>
        <h2>¿Qué puedo hacer en Dev Visualizer?</h2>
        <p>
          Cinco herramientas de ingeniería concebidas para transformar la teoría estática en modelos mentales aplicables en producción.
        </p>
      </div>

      <div className="home-action-pillars-grid">
        {ACTION_CAPABILITIES.map((cap) => (
          <article key={cap.num} className="home-action-pillar-card">
            <header className="home-action-card-header">
              <span className="home-action-card-num">{cap.num}</span>
              <span className="home-action-card-badge">{cap.badge}</span>
            </header>

            <h3 className="home-action-card-title">{cap.title}</h3>
            <p className="home-action-card-desc">{cap.description}</p>

            <ul className="home-action-feature-list" aria-label={`Características de ${cap.title}`}>
              {cap.features.map((feat, idx) => (
                <li key={idx} className="home-action-feature-item">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="home-action-card-footer">
              <Link href={cap.ctaHref} className="btn-cyber-primary">
                <span>{cap.ctaLabel}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
