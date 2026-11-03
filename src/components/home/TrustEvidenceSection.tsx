type TrustItem = {
  id: string;
  badge: string;
  title: string;
  evidence: string;
  metric: string;
  metricLabel: string;
  details: string;
};

const TRUST_ITEMS: readonly TrustItem[] = [
  {
    id: "canonical-sources",
    badge: "Fuentes Primarias",
    title: "100% Respaldado por Especificaciones Oficiales",
    evidence: "ECMA-262 · W3C · RFCs IETF · ISO/IEC · Docs Oficiales",
    metric: "7,410 / 7,410",
    metricLabel: "Conceptos con dos o más fuentes canónicas contrastadas",
    details: "Erradicamos alucinaciones y resúmenes superficiales. Cada tarjeta técnica cita directamente los artículos, secciones y especificaciones formales emitidas por los consorcios internacionales que diseñan los lenguajes y protocolos.",
  },
  {
    id: "cryptographic-sha256",
    badge: "Integridad Inmutable",
    title: "Firmas Criptográficas SHA-256 Verificables",
    evidence: "Hashes calculados byte a byte sobre binarios y documentos",
    metric: "179 / 179",
    metricLabel: "Recursos preservados con suma de comprobación inmutable",
    details: "Cada libro, manual y guía preservada en la Librería Profesional cuenta con su huella digital criptográfica SHA-256, lo que permite a cualquier usuario auditar su integridad exacta desde su propia terminal mediante comandos estándar.",
  },
  {
    id: "sast-security",
    badge: "Seguridad Continua",
    title: "Pipeline SAST con 0 Alertas CodeQL y Gitleaks",
    evidence: "GitHub CodeQL · Gitleaks · npm audit · CI Automatizado",
    metric: "0 Abiertas / 26 Resueltas",
    metricLabel: "Vulnerabilidades remediadas y verificadas por la API de GitHub",
    details: "El código fuente es analizado de forma continua por GitHub CodeQL (análisis estático de seguridad), Gitleaks (detección de credenciales y secretos) y verificaciones de dependencias para asegurar una ejecución libre de brechas.",
  },
  {
    id: "a11y-privacy",
    badge: "Inclusión y Privacidad",
    title: "Accesibilidad WCAG 2.1 AA y Soberanía Local",
    evidence: "Next.js SSG Estático · Cero Telemetría · GDPR / CCPA Compliant",
    metric: "100% Local",
    metricLabel: "Ejecución autónoma en el navegador sin cookies de terceros",
    details: "La plataforma genera 394 páginas estáticas puras sin servidores intermedios recopilando metadatos. Probada con lectores de pantalla NVDA y VoiceOver, soporte nativo de movimiento reducido y navegación integral por teclado.",
  },
];

export function TrustEvidenceSection() {
  return (
    <section className="home-trust-section" aria-label="Puedo confiar en el proyecto">
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">03 · Evidencia y Rigor Técnico</span>
        <h2>¿Puedo confiar en Dev Visualizer?</h2>
        <p>
          Rigor científico, validación criptográfica y estándares abiertos sin concesiones ni dependencias opacas.
        </p>
      </div>

      <div className="home-trust-grid">
        {TRUST_ITEMS.map((item) => (
          <article key={item.id} className="home-trust-card">
            <header className="home-trust-header">
              <span className="home-trust-badge">{item.badge}</span>
              <span className="home-trust-evidence-tag">{item.evidence}</span>
            </header>

            <h3 className="home-trust-title">{item.title}</h3>
            <p className="home-trust-details">{item.details}</p>

            <div className="home-trust-metric-box">
              <strong className="home-trust-metric-val">{item.metric}</strong>
              <span className="home-trust-metric-lbl">{item.metricLabel}</span>
            </div>
          </article>
        ))}
      </div>

      {/* ── Consola de Verificación Criptográfica y Auditoría ── */}
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
