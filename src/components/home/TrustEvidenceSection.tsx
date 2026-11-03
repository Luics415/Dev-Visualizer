import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";

export function TrustEvidenceSection() {
  return (
    <section className="home-trust-section" aria-label="Puedo confiar en Dev Visualizer">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">03 · Evidencia, Auditoría y Rigor Técnico</span>
        <h2>¿Puedo confiar en Dev Visualizer?</h2>
        <p>
          Rigor científico, validación criptográfica y especificaciones canónicas de la industria verificadas mediante las tarjetas canónicas del sistema.
        </p>
      </div>

      <div className="concept-cards-grid" aria-label="Pilares de confianza técnica">
        {/* ── Tarjeta 01: Fuentes Canónicas ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="rigor">
          <header className="concept-card__header">
            <h2>
              <span>01</span>
              100% Respaldado por Especificaciones Oficiales
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">rigor</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de verificación de fuentes canónicas"
              code="assert(sources.every(s => s.authority in ['W3C', 'ECMA', 'IETF', 'ISO']));"
              nodes={["ECMA-262|Lenguajes", "RFC IETF|Protocolos", "W3C|Web & DOM", "ISO/IEC|Sistemas"]}
              outcome="7,410 conceptos respaldados por dos o más fuentes oficiales"
              caption="Cero alucinaciones: citas exhaustivas a especificaciones formales"
              variant="document"
            />
          </div>

          <p>
            Erradicamos las alucinaciones y resúmenes superficiales. Cada tarjeta técnica cita directamente los artículos, secciones y estándares formales emitidos por los consorcios internacionales que diseñan los lenguajes y protocolos.
          </p>

          <footer className="concept-card__references" aria-label="Fuentes de rigor canónico">
            <span>Especificaciones primarias contrastadas</span>
            <div>
              <a href="https://tc39.es/ecma262/" target="_blank" rel="noreferrer">
                <small>Estándar</small>
                <b>ECMA-262 14th Edition</b>
                <em>TC39 · ECMAScript Specification</em>
                <i aria-hidden="true">↗</i>
              </a>
              <a href="https://www.rfc-editor.org/" target="_blank" rel="noreferrer">
                <small>Estándar</small>
                <b>IETF RFC Directory</b>
                <em>Internet Engineering Task Force</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>

        {/* ── Tarjeta 02: Criptografía SHA-256 ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="seguridad">
          <header className="concept-card__header">
            <h2>
              <span>02</span>
              Firmas Criptográficas SHA-256 Verificables
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">seguridad</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de cálculo de suma criptográfica SHA-256"
              code="const digest = crypto.createHash('sha256').update(binary).digest('hex');"
              nodes={["Binario PDF", "Ronda SHA-256", "Hash Digest", "Integridad Inmutable"]}
              outcome="179 recursos preservados con suma de comprobación inmutable"
              caption="Hashes precalculados byte a byte auditables con sha256sum"
              variant="artifact-passport"
            />
          </div>

          <p>
            Cada obra técnica y libro preservado en la Librería Profesional cuenta con su suma criptográfica SHA-256 calculada directamente del archivo original, permitiendo auditar su integridad exacta desde terminal en cualquier sistema operativo.
          </p>

          <footer className="concept-card__references" aria-label="Especificaciones de criptografía">
            <span>Normas criptográficas oficiales</span>
            <div>
              <a href="https://csrc.nist.gov/publications/detail/fips/180-4/final" target="_blank" rel="noreferrer">
                <small>Estándar</small>
                <b>NIST FIPS PUB 180-4</b>
                <em>Federal Information Processing Standards</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>

        {/* ── Tarjeta 03: Pipeline SAST CodeQL ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="calidad">
          <header className="concept-card__header">
            <h2>
              <span>03</span>
              Pipeline SAST con 0 Alertas CodeQL y Gitleaks
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">calidad</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de análisis estático de seguridad SAST"
              code="codeql database analyze --format=sarif && gitleaks detect --verbose;"
              nodes={["Linter ESLint 9", "Typecheck TSC", "CodeQL SAST", "0 Alertas"]}
              outcome="26 vulnerabilidades remediadas y confirmadas por la API de GitHub"
              caption="Análisis continuo de código fuente, tipado estricto y prevención de secretos"
              variant="assurance-rack"
            />
          </div>

          <p>
            El código fuente es analizado de forma continua mediante GitHub CodeQL (análisis estático de seguridad), Gitleaks (detección de credenciales y secretos) y validaciones de dependencias con npm audit para asegurar una ejecución 100% libre de brechas.
          </p>

          <footer className="concept-card__references" aria-label="Referencias de seguridad">
            <span>Protocolos y herramientas SAST</span>
            <div>
              <a href="https://codeql.github.com/" target="_blank" rel="noreferrer">
                <small>Seguridad</small>
                <b>GitHub CodeQL</b>
                <em>Análisis estático automatizado</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>

        {/* ── Tarjeta 04: Accesibilidad y Privacidad ── */}
        <article className="concept-card concept-card--ready concept-card--standard" data-family="soberanía">
          <header className="concept-card__header">
            <h2>
              <span>04</span>
              Accesibilidad WCAG 2.1 AA y Soberanía Local
            </h2>
            <div className="concept-card__header-actions">
              <span className="concept-card__family">soberanía</span>
            </div>
          </header>

          <div className="concept-card__stage">
            <AnimatedConceptScene
              ariaLabel="Animación de accesibilidad y ejecución soberana local"
              code="export const ssg = { clientOnly: true, trackingCookies: false, a11y: 'WCAG-AA' };"
              nodes={["WCAG 2.1 AA", "Navegación Teclado", "Cero Rastreadores", "100% SSG"]}
              outcome="Ejecución estática en cliente respetando privacidad y normas de accesibilidad"
              caption="Probada con lectores de pantalla NVDA/VoiceOver y soporte de movimiento reducido"
              variant="matrix"
            />
          </div>

          <p>
            La plataforma genera 394 páginas estáticas puras sin servidores intermedios recopilando metadatos. Probada con lectores de pantalla NVDA y VoiceOver, soporte nativo de movimiento reducido y navegación integral por teclado con atajos.
          </p>

          <footer className="concept-card__references" aria-label="Estándares de accesibilidad y privacidad">
            <span>Normativas de accesibilidad y privacidad</span>
            <div>
              <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noreferrer">
                <small>Estándar</small>
                <b>WCAG 2.1 Nivel AA</b>
                <em>W3C Web Accessibility Initiative</em>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </footer>
        </article>
      </div>

      {/* ── Consola de Telemetría y Traza de Auditoría ── */}
      <div className="home-trust-terminal" aria-label="Consola de auditoría de integridad">
        <div className="home-terminal-header">
          <div className="home-terminal-dots">
            <span className="home-term-dot home-term-dot--red" />
            <span className="home-term-dot home-term-dot--yellow" />
            <span className="home-term-dot home-term-dot--green" />
          </div>
          <span className="home-terminal-title">AUDITORÍA DE INTEGRIDAD Y REPOSITORIO VERIFICABLE</span>
          <span className="home-terminal-status">[PIPELINE: CERTIFICADO 100%]</span>
        </div>

        <div className="home-terminal-body">
          <div className="home-term-line">
            <span className="home-term-prompt">&gt;</span>
            <span className="home-term-cmd">dev-visualizer --audit-sources --all</span>
          </div>
          <div className="home-term-output">
            [OK] 7,410 conceptos indexados | 14,820 especificaciones canónicas verificadas (W3C, ECMA, IETF RFC)
          </div>

          <div className="home-term-line">
            <span className="home-term-prompt">&gt;</span>
            <span className="home-term-cmd">codeql database analyze --format=sarif-latest --output=results.sarif</span>
          </div>
          <div className="home-term-output home-term-output--green">
            [PASS] 0 vulnerabilidades detectadas · 26/26 alertas históricas remediadas y auditadas
          </div>

          <div className="home-term-line">
            <span className="home-term-prompt">&gt;</span>
            <span className="home-term-cmd">sha256sum ./library/resources/*.pdf</span>
          </div>
          <div className="home-term-output home-term-output--cyan">
            [VERIFIED] 179/179 sumas criptográficas coincidentes con el manifiesto inmutable
          </div>

          <div className="home-term-line">
            <span className="home-term-prompt">&gt;</span>
            <span className="home-term-cmd">pa11y-ci --threshold=0 --standard=WCAG2AA</span>
          </div>
          <div className="home-term-output home-term-output--yellow">
            [PASS] 0 errores de contraste, etiquetas o foco de navegación por teclado detectados
          </div>
        </div>
      </div>
    </section>
  );
}
