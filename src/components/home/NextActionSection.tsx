import Link from "next/link";

interface ActionStep {
  step: string;
  badge: string;
  title: string;
  description: string;
  actionHref: string;
  actionText: string;
  secondaryHref: string;
  secondaryText: string;
  stats: string;
}

const STEPS: readonly ActionStep[] = [
  {
    step: "01",
    badge: "SELECCIÓN INICIAL",
    title: "Elige tu Ruta Técnica o Colección",
    description:
      "Explora el catálogo de 73 colecciones organizadas en 7 áreas maestras de arquitectura: desde lenguajes de bajo nivel hasta ingeniería distribuida en la nube.",
    actionHref: "/colecciones",
    actionText: "Abrir Catálogo de Colecciones",
    secondaryHref: "/javascript",
    secondaryText: "Ver Colección JavaScript",
    stats: "73 Colecciones · 146 Rutas Canónicas",
  },
  {
    step: "02",
    badge: "DECONSTRUCCIÓN VISUAL",
    title: "Observa la Animación y los Invariantes",
    description:
      "Avanza paso a paso por las escenas cinemáticas de cada concepto. Observa cómo cambian los marcos en el Call Stack, los punteros en memoria y las transiciones de estado.",
    actionHref: "/python",
    actionText: "Ver Simulación en Python",
    secondaryHref: "/rust",
    secondaryText: "Ver Simulación en Rust",
    stats: "7,410 Conceptos Animados",
  },
  {
    step: "03",
    badge: "INCIDENTES REALES",
    title: "Diagnostica el Caso de Producción «En Acción»",
    description:
      "Sumérgete en la ruta práctica de cada tecnología: inyección de fallos de red, cuellos de botella de concurrencia y aplicación de patrones de mitigación resiliente.",
    actionHref: "/docker-en-accion",
    actionText: "Caso Docker en Acción",
    secondaryHref: "/backend-en-accion",
    secondaryText: "Caso Backend en Acción",
    stats: "73 Escenarios Prácticos Reales",
  },
  {
    step: "04",
    badge: "CERTIFICACIÓN SENIOR",
    title: "Valida tu Modelo Mental y Desbloquea la Insignia",
    description:
      "Responde el quiz técnico de arquitectura. Desecha falacias comunes, asegura tu comprensión profunda y desbloquea la Insignia de Ancla de Dev Visualizer.",
    actionHref: "/javascript/quiz",
    actionText: "Iniciar Quiz y Desbloquear Insignia",
    secondaryHref: "/libreria",
    secondaryText: "Consultar Librería Normativa",
    stats: "Insignia de Ancla Certificada",
  },
];

export function NextActionSection() {
  return (
    <section className="home-next-action-section" id="que-hago-ahora" aria-label="Qué hago ahora - Hoja de ruta">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">04 · HOJA DE RUTA OPERATIVA</span>
        <h2>¿Qué hago ahora? Flujo de Inicio Rápido</h2>
        <p className="home-section-lead">
          Una secuencia de cuatro pasos estructurada para comenzar tu especialización hoy mismo sin fricción ni rodeos.
        </p>
      </div>

      <div className="home-cards-grid" aria-label="Secuencia de 4 pasos">
        {STEPS.map((s) => (
          <article className="home-step-card" key={s.step}>
            <div className="home-step-card__top">
              <span className="home-step-card__number">PASO {s.step}</span>
              <span className="home-step-card__badge">{s.badge}</span>
            </div>

            <h3 className="home-step-card__title">{s.title}</h3>
            <p className="home-step-card__desc">{s.description}</p>

            <div className="home-step-card__meta">
              <span className="home-step-card__stats">{s.stats}</span>
            </div>

            <div className="home-step-card__footer">
              <Link href={s.actionHref} className="home-step-card__btn-primary">
                <span>{s.actionText}</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href={s.secondaryHref} className="home-step-card__link-secondary">
                <span>{s.secondaryText}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* ── Lanzador de Rutas Directas ── */}
      <div className="home-launchpad-panel" aria-label="Accesos directos a tecnologías">
        <div className="home-launchpad-header">
          <span className="home-launchpad-tag">LANZADOR RÁPIDO DE RUTAS CANÓNICAS</span>
          <h3>¿Prefieres ir directo a tu tecnología de especialidad?</h3>
          <p>Accede de inmediato a los atlas interactivos más consultados de la plataforma:</p>
        </div>

        <div className="home-launchpad-grid">
          <Link href="/javascript" className="home-launchpad-item">
            <div className="home-launchpad-item-info">
              <strong>JavaScript ES6+ & V8</strong>
              <span>Event Loop, Closures, Microtasks y Prototipos</span>
            </div>
            <span className="home-launchpad-item-arrow" aria-hidden="true">→</span>
          </Link>

          <Link href="/typescript" className="home-launchpad-item">
            <div className="home-launchpad-item-info">
              <strong>TypeScript Estricto</strong>
              <span>Type System, Inferencia, Genéricos y AST</span>
            </div>
            <span className="home-launchpad-item-arrow" aria-hidden="true">→</span>
          </Link>

          <Link href="/python" className="home-launchpad-item">
            <div className="home-launchpad-item-info">
              <strong>Python Internals & CPython</strong>
              <span>GIL, Bytecode, Descriptores y Asyncio</span>
            </div>
            <span className="home-launchpad-item-arrow" aria-hidden="true">→</span>
          </Link>

          <Link href="/docker" className="home-launchpad-item">
            <div className="home-launchpad-item-info">
              <strong>Docker & Linux Containers</strong>
              <span>Namespaces, cgroups v2, OverlayFS y Redes</span>
            </div>
            <span className="home-launchpad-item-arrow" aria-hidden="true">→</span>
          </Link>

          <Link href="/backend" className="home-launchpad-item">
            <div className="home-launchpad-item-info">
              <strong>Backend & Sistemas Distribuidos</strong>
              <span>Circuit Breaker, Sharding, CAP y gRPC</span>
            </div>
            <span className="home-launchpad-item-arrow" aria-hidden="true">→</span>
          </Link>

          <Link href="/bases-datos" className="home-launchpad-item">
            <div className="home-launchpad-item-info">
              <strong>Bases de Datos & SQL</strong>
              <span>B+Trees, LSM-Trees, Transacciones ACID y EXPLAIN</span>
            </div>
            <span className="home-launchpad-item-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
