import Link from "next/link";

export function NextActionSection() {
  return (
    <section className="home-next-action-section" aria-label="Qué hago ahora - Flujo de inicio rápido">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">04 · Hoja de Ruta Operativa</span>
        <h2>¿Qué hago ahora? Flujo de Inicio Rápido</h2>
        <p>
          Secuencia de cuatro pasos estructurada con las tarjetas y métricas oficiales del proyecto para comenzar tu especialización hoy mismo.
        </p>
      </div>

      <div className="library-grid" aria-label="Pasos de inicio rápido">
        {/* ── Paso 01 ── */}
        <article className="library-card" data-lifecycle="actual">
          <header>
            <span>Paso 01</span>
            <b>01</b>
          </header>
          <div className="library-card__status">
            <span>Exploración Canónica</span>
            <em>Paso 1 de 4</em>
          </div>
          <h2>Elige tu Tecnología o Ruta Técnica</h2>
          <p>
            Selecciona una de las 73 colecciones organizadas en las 7 áreas maestras de arquitectura según tu objetivo formativo o consulta el buscador difuso.
          </p>
          <div className="library-card__metrics">
            <span>
              <strong>73</strong> colecciones
            </span>
            <span>
              <strong>146</strong> rutas
            </span>
            <span>
              <strong>7</strong> áreas
            </span>
          </div>
          <div className="library-card__actions">
            <Link href="/colecciones">
              Abrir catálogo <span>→</span>
            </Link>
            <Link href="/javascript">
              Ruta JavaScript <span>↗</span>
            </Link>
          </div>
        </article>

        {/* ── Paso 02 ── */}
        <article className="library-card" data-lifecycle="actual">
          <header>
            <span>Paso 02</span>
            <b>02</b>
          </header>
          <div className="library-card__status">
            <span>Modelo Mental</span>
            <em>Paso 2 de 4</em>
          </div>
          <h2>Observa la Animación Determinista</h2>
          <p>
            Interactúa con las animaciones paso a paso para construir una representación mental exacta de la memoria física, la pila de llamadas y el ciclo de eventos.
          </p>
          <div className="library-card__metrics">
            <span>
              <strong>7,410</strong> conceptos
            </span>
            <span>
              <strong>HiDPI</strong> canvas
            </span>
            <span>
              <strong>Vector</strong> motion
            </span>
          </div>
          <div className="library-card__actions">
            <Link href="/javascript">
              Ver JavaScript ES6+ <span>→</span>
            </Link>
            <Link href="/python">
              Ver Python <span>↗</span>
            </Link>
          </div>
        </article>

        {/* ── Paso 03 ── */}
        <article className="library-card" data-lifecycle="actual">
          <header>
            <span>Paso 03</span>
            <b>03</b>
          </header>
          <div className="library-card__status">
            <span>Producción Real</span>
            <em>Paso 3 de 4</em>
          </div>
          <h2>Examina el Caso &ldquo;En Acción&rdquo;</h2>
          <p>
            Analiza el escenario técnico en producción: reproduce el fallo intencional de latencia, inspecciona la frontera de aislamiento y aplica la resiliencia.
          </p>
          <div className="library-card__metrics">
            <span>
              <strong>73</strong> casos reales
            </span>
            <span>
              <strong>Logs</strong> auditoría
            </span>
            <span>
              <strong>Parches</strong> verificados
            </span>
          </div>
          <div className="library-card__actions">
            <Link href="/docker-en-accion">
              Docker en Acción <span>→</span>
            </Link>
            <Link href="/apis-en-accion">
              APIs en Acción <span>↗</span>
            </Link>
          </div>
        </article>

        {/* ── Paso 04 ── */}
        <article className="library-card" data-lifecycle="actual">
          <header>
            <span>Paso 04</span>
            <b>04</b>
          </header>
          <div className="library-card__status">
            <span>Evaluación</span>
            <em>Paso 4 de 4</em>
          </div>
          <h2>Valida tu Conocimiento con el Quiz</h2>
          <p>
            Responde el cuestionario técnico de evaluación formativa, analiza las explicaciones teóricas justificadas y desbloquea tu acreditación demostrable.
          </p>
          <div className="library-card__metrics">
            <span>
              <strong>73</strong> quizzes
            </span>
            <span>
              <strong>Cripto</strong> insignias
            </span>
            <span>
              <strong>Rigor</strong> senior
            </span>
          </div>
          <div className="library-card__actions">
            <Link href="/javascript/quiz">
              Tomar Quiz <span>→</span>
            </Link>
            <Link href="/libreria">
              Librería Técnica <span>↗</span>
            </Link>
          </div>
        </article>
      </div>

      {/* ── Lanzador de Rutas Directas ── */}
      <div className="home-launchpad-panel">
        <div className="home-launchpad-header">
          <span className="home-launchpad-tag">LANZADOR RÁPIDO</span>
          <h3>Rutas de Especialización Directa</h3>
          <p>Selecciona una tecnología para abrir de inmediato su atlas interactivo:</p>
        </div>

        <div className="home-launchpad-grid">
          {[
            { label: "JavaScript ES6+", meta: "Event Loop · Prototipos · Asincronía", href: "/javascript" },
            { label: "TypeScript", meta: "Sistema de Tipos · Narrowing · Genéricos", href: "/typescript" },
            { label: "Python", meta: "Modelo de Objetos · GIL · Generadores", href: "/python" },
            { label: "Algoritmos y Estructuras", meta: "Complejidad Big-O · Árboles · Grafos", href: "/algoritmos" },
            { label: "Git y Arquitectura de Versiones", meta: "DAG · Blobs · Trees · Commits · Merges", href: "/git" },
            { label: "Docker y Contenedores", meta: "Namespaces OCI · Cgroups · OverlayFS", href: "/docker" },
            { label: "Librería Profesional", meta: "179 Manuales Técnicos con SHA-256", href: "/libreria" },
            { label: "AWS Cloud Architecture", meta: "Serverless · DynamoDB · IAM · FinOps", href: "/aws" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="home-launchpad-item">
              <div className="home-launchpad-item-info">
                <strong>{item.label}</strong>
                <span>{item.meta}</span>
              </div>
              <span className="home-launchpad-item-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
