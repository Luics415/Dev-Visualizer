import Link from "next/link";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";

export function WhatYouCanDoSection() {
  return (
    <section className="home-action-pillars-section" aria-label="Qué puedo hacer en Dev Visualizer">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">02 · Capacidades Operativas del Proyecto</span>
        <h2>¿Qué puedo hacer en Dev Visualizer?</h2>
        <p>
          Cinco herramientas de ingeniería explicadas mediante las tarjetas conceptuales canónicas y animaciones deterministas de la plataforma.
        </p>
      </div>

      <div className="concept-cards-grid" aria-label="Capacidades de la plataforma">
        {/* ── Tarjeta 01: Inspección Determinista ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="ejecución">
          <header className="concept-card__header">
            <h2>
              <span>01</span>
              Inspeccionar Animaciones Paso a Paso
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">ejecución</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de inspección determinista frame a frame"
              code="const frame = inspectExecution(stack, heap, eventLoop);"
              nodes={["01|Entrada de Datos", "02|Mutación en Heap", "03|Salida Observable"]}
              outcome="Línea temporal determinista verificada sin cajas negras"
              caption="Control granular frame a frame con pausa automática al salir del viewport"
              variant="pipeline"
            />
          </div>

          <p>
            Navega frame a frame por el ciclo de ejecución de cada concepto. Observa cómo cambian los punteros de memoria, cómo se apilan los marcos en el Call Stack y cómo muta el estado sin efectos colaterales ocultos.
          </p>

          <footer className="concept-card__references" aria-label="Referencias de inspección">
            <span>Ruta de acción y especificaciones</span>
            <div>
              <Link href="/javascript">
                <small>Ruta canónica</small>
                <b>Inspeccionar JavaScript ES6+</b>
                <em>Runtime · Call Stack · V8</em>
                <i aria-hidden="true">→</i>
              </Link>
              <a href="https://tc39.es/ecma262/" target="_blank" rel="noreferrer">
                <small>Estándar</small>
                <b>ECMA-262</b>
                <em>ECMA International · 14th Edition</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>

        {/* ── Tarjeta 02: Diagnóstico 73 Casos En Acción ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="resiliencia">
          <header className="concept-card__header">
            <h2>
              <span>02</span>
              Diagnosticar 73 Casos Reales &ldquo;En Acción&rdquo;
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">resiliencia</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de caso en acción con inyección de anomalías"
              code="isolate(faultyMicroservice, { timeout: 200, fallback: cachedResponse });"
              nodes={["Tráfico|200 OK", "Latencia|504", "Frontera|Aislado", "Recuperado|Healthy"]}
              outcome="Aislamiento de cascada de fallos con mitigación resiliente"
              caption="Inyección de anomalías, cuellos de botella y límites de contención"
              variant="state-machine"
            />
          </div>

          <p>
            Cada una de las 73 colecciones conecta los conceptos teóricos con un escenario de producción real: inyección de fallos de red, agotamiento de conexiones en base de datos, desbordamiento de búfer y aplicación de patrones de mitigación.
          </p>

          <footer className="concept-card__references" aria-label="Referencias de casos en acción">
            <span>Ruta de acción y especificaciones</span>
            <div>
              <Link href="/docker-en-accion">
                <small>Caso en acción</small>
                <b>Explorar Docker en Acción</b>
                <em>Namespaces · Cgroups · Contención</em>
                <i aria-hidden="true">→</i>
              </Link>
              <a href="https://www.rfc-editor.org/rfc/rfc9110" target="_blank" rel="noreferrer">
                <small>Estándar</small>
                <b>RFC 9110</b>
                <em>IETF HTTP Semantics · Architecture</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>

        {/* ── Tarjeta 03: Síntesis Auditiva por Voz ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="accesibilidad">
          <header className="concept-card__header">
            <h2>
              <span>03</span>
              Activar Síntesis Auditiva por Voz
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">accesibilidad</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de síntesis auditiva nativa con Web Speech API"
              code="window.speechSynthesis.speak(new SpeechSynthesisUtterance(technicalText));"
              nodes={["Texto Técnico|Segmentación", "Prosodia|Cadencia", "Síntesis Local|Web Speech"]}
              outcome="Locución nativa en español neutro sin dependencias externas"
              caption="Procesamiento 100% en el cliente con tres velocidades calibradas"
              variant="layers"
            />
          </div>

          <p>
            Asimila conceptos complejos mientras observas las transiciones visuales mediante locución sintetizada nativa con la Web Speech API del navegador, calibrada con dicción técnica profesional en español neutro y pausas pedagógicas.
          </p>

          <footer className="concept-card__references" aria-label="Referencias de síntesis auditiva">
            <span>Ruta de acción y especificaciones</span>
            <div>
              <Link href="/python">
                <small>Ruta canónica</small>
                <b>Probar Narración en Python</b>
                <em>Audio integrado · Web Speech API</em>
                <i aria-hidden="true">→</i>
              </Link>
              <a href="https://wicg.github.io/speech-api/" target="_blank" rel="noreferrer">
                <small>Estándar</small>
                <b>W3C Web Speech API</b>
                <em>Speech API Community Group</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>

        {/* ── Tarjeta 04: Quizzes Formativos y Acreditación ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="evaluación">
          <header className="concept-card__header">
            <h2>
              <span>04</span>
              Acreditar Conocimientos con Quizzes Técnicos
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">evaluación</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de evaluación técnica con retroalimentación"
              code="evaluateCandidateResponse(answer, { justifyError: true, issueBadge: true });"
              nodes={["Pregunta de Juicio", "Análisis de Opciones", "Justificación Teórica", "Acreditación"]}
              outcome="Insignia técnica criptográfica demostrable expedida"
              caption="Evaluaciones formativas con análisis de causas de error y rigor conceptual"
              variant="assurance-rack"
            />
          </div>

          <p>
            Valida tu retención y juicio arquitectónico con evaluaciones formativas exhaustivas. Cada opción acertada o descartada incluye su justificación teórica y referencias a especificaciones oficiales, sin dinámicas vacías de gamificación.
          </p>

          <footer className="concept-card__references" aria-label="Referencias de evaluación">
            <span>Ruta de acción y especificaciones</span>
            <div>
              <Link href="/javascript/quiz">
                <small>Evaluación</small>
                <b>Iniciar Quiz de JavaScript</b>
                <em>73 módulos evaluativos con justificación</em>
                <i aria-hidden="true">→</i>
              </Link>
              <a href="https://www.iso.org/standard/35733.html" target="_blank" rel="noreferrer">
                <small>Norma</small>
                <b>ISO/IEC 25010</b>
                <em>Systems and software quality models</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>

        {/* ── Tarjeta 05: Preservación de 179 Libros y Manuales ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="preservación">
          <header className="concept-card__header">
            <h2>
              <span>05</span>
              Consultar 179 Libros y Manuales Canónicos
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">preservación</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de verificación criptográfica de recursos"
              code="const isValid = sha256sum(manualPdf) === manifestEntry.sha256;"
              nodes={["Recurso Técnico", "Hash SHA-256", "Manifiesto Inmutable", "Integridad"]}
              outcome="Integridad binaria verificada mediante sumas criptográficas"
              caption="Biblioteca curada con metadatos estructurados y sumas SHA-256 auditables"
              variant="artifact-passport"
            />
          </div>

          <p>
            Accede a una colección curada de manuales técnicos, libros de referencia y especificaciones oficiales con licencias de libre acceso y sumas de verificación criptográfica SHA-256 auditables byte a byte desde tu propia terminal.
          </p>

          <footer className="concept-card__references" aria-label="Referencias de librería">
            <span>Ruta de acción y especificaciones</span>
            <div>
              <Link href="/libreria">
                <small>Librería técnica</small>
                <b>Abrir Librería Profesional</b>
                <em>179 obras · Hashes inmutables</em>
                <i aria-hidden="true">→</i>
              </Link>
              <a href="https://csrc.nist.gov/publications/detail/fips/180-4/final" target="_blank" rel="noreferrer">
                <small>Estándar</small>
                <b>NIST FIPS PUB 180-4</b>
                <em>Secure Hash Standard (SHA-256)</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}
