import Link from "next/link";

type ActionStep = {
  step: string;
  badge: string;
  title: string;
  instruction: string;
  actionLabel: string;
  actionHref: string;
  isPrimary?: boolean;
};

const STEPS: readonly ActionStep[] = [
  {
    step: "01",
    badge: "Paso 1 · Exploración",
    title: "Elige tu Tecnología o Ruta Técnica",
    instruction: "Selecciona una de las 73 colecciones organizadas en las 7 áreas maestras de arquitectura según tu objetivo de estudio.",
    actionLabel: "Abrir Catálogo de Colecciones",
    actionHref: "/colecciones",
    isPrimary: true,
  },
  {
    step: "02",
    badge: "Paso 2 · Modelo Mental",
    title: "Observa la Animación Determinista",
    instruction: "Interactúa con las animaciones paso a paso para construir una representación mental exacta del Stack, Heap y ciclo de eventos.",
    actionLabel: "Ver JavaScript ES6+",
    actionHref: "/javascript",
  },
  {
    step: "03",
    badge: "Paso 3 · Producción Real",
    title: "Examina el Caso 'En Acción'",
    instruction: "Analiza el escenario técnico en producción: reproduce el fallo intencional, inspecciona la frontera de aislamiento y aplica la resiliencia.",
    actionLabel: "Ir a Docker en Acción",
    actionHref: "/docker-en-accion",
  },
  {
    step: "04",
    badge: "Paso 4 · Acreditación",
    title: "Valida tu Aprendizaje con el Quiz",
    instruction: "Responde el cuestionario técnico de evaluación formativa y obtén tu acreditación demostrable de dominio conceptual.",
    actionLabel: "Tomar Quiz de JavaScript",
    actionHref: "/javascript/quiz",
  },
];

const POPULAR_PATHS = [
  { label: "JavaScript ES6+", meta: "Event Loop · Prototipos · Asincronía", href: "/javascript" },
  { label: "TypeScript", meta: "Sistema de Tipos · Narrowing · Genéricos", href: "/typescript" },
  { label: "Python", meta: "Modelo de Objetos · GIL · Generadores", href: "/python" },
  { label: "Algoritmos y Estructuras", meta: "Complejidad Big-O · Árboles · Grafos", href: "/algoritmos" },
  { label: "Git y Arquitectura de Versiones", meta: "DAG · Blobs · Trees · Commits · Merges", href: "/git" },
  { label: "Docker y Contenedores", meta: "Namespaces OCI · Cgroups · OverlayFS", href: "/docker" },
  { label: "Librería Profesional", meta: "179 Manuales Técnicos con SHA-256", href: "/libreria" },
  { label: "AWS Cloud Architecture", meta: "Serverless · DynamoDB · IAM · FinOps", href: "/aws" },
];

export function NextActionSection() {
  return (
    <section className="home-next-action-section" aria-label="Qué hago ahora - Guía de inicio rápido">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">04 · Hoja de Ruta Operativa</span>
        <h2>¿Qué hago ahora? Flujo de Inicio Rápido</h2>
        <p>
          Sigue esta secuencia de cuatro pasos para comenzar tu especialización técnica hoy mismo.
        </p>
      </div>

      {/* ── Pasos Secuenciales ── */}
      <div className="home-next-steps-grid">
        {STEPS.map((s) => (
          <div key={s.step} className="home-next-step-card">
            <div className="home-next-step-header">
              <span className="home-next-step-number">{s.step}</span>
              <span className="home-next-step-badge">{s.badge}</span>
            </div>

            <h3 className="home-next-step-title">{s.title}</h3>
            <p className="home-next-step-instruction">{s.instruction}</p>

            <div className="home-next-step-cta">
              <Link href={s.actionHref} className={s.isPrimary ? "btn-cyber-primary" : "btn-cyber-secondary"}>
                <span>{s.actionLabel}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lanzador de Rutas Directas ── */}
      <div className="home-launchpad-panel">
        <div className="home-launchpad-header">
          <span className="home-launchpad-tag">ACCESO INMEDIATO</span>
          <h3>Rutas Técnicas Recomendadas para Empezar</h3>
          <p>Haz clic en cualquiera de las rutas directas para ingresar de inmediato al atlas conceptual interactivo:</p>
        </div>

        <div className="home-launchpad-grid">
          {POPULAR_PATHS.map((path) => (
            <Link key={path.href} href={path.href} className="home-launchpad-item">
              <div className="home-launchpad-item-info">
                <strong>{path.label}</strong>
                <span>{path.meta}</span>
              </div>
              <span className="home-launchpad-item-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
