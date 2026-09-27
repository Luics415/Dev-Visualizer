import type { Metadata } from "next";
import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { projectCredits } from "@/data/projectCredits";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de Privacidad integral de Dev Visualizer. Conformidad con la LFPDPPP de México, derechos ARCO, minimización de datos, RGPD y CCPA.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--library about-hero">
        <div>
          <span className="eyebrow">Transparencia, gobernanza y datos personales</span>
          <h1>Aviso de Privacidad Integral</h1>
          <p>
            Dev Visualizer opera bajo el principio de minimización absoluta: un atlas educativo de código abierto
            que no almacena bases de datos personales, no incluye rastreadores publicitarios y respeta tus derechos de privacidad.
          </p>
        </div>
        <div className="hero__counter" role="group" aria-label="Marco normativo de privacidad">
          <strong>LFPDPPP</strong>
          <span>Conformidad legal</span>
        </div>
      </header>

      <section className="about-grid">
        <article>
          <span>Responsable del tratamiento</span>
          <h2>Identidad y contacto</h2>
          <p>
            <strong>{projectCredits.owner}</strong> (Luis Enrique Rivera Delgado), con domicilio de contacto digital en el
            Estado de México, México. Puedes comunicarte de manera directa a través de su perfil verificado en{" "}
            <a href="https://github.com/Luics415" target="_blank" rel="noopener noreferrer">
              GitHub (Luics415)
            </a>{" "}
            o en los canales profesionales vinculados.
          </p>
        </article>

        <article>
          <span>Principios normativos</span>
          <h2>Licitud y proporcionalidad</h2>
          <p>
            El tratamiento de datos se rige por los principios de licitud, consentimiento, información, calidad, finalidad,
            lealtad, proporcionalidad y responsabilidad contemplados en el artículo 6 de la Ley Federal de Protección de Datos
            Personales en Posesión de los Particulares (LFPDPPP).
          </p>
        </article>

        <article>
          <span>Recolección de datos</span>
          <h2>Cero recopilación automática</h2>
          <p>
            Dev Visualizer <strong>no recopila automáticamente datos personales ni sensibles</strong>. El sitio no utiliza
            sistemas de registro, cuentas de usuario, formularios de captura hacia bases de datos privadas ni pasarelas comerciales.
            Navegas de forma autónoma y libre.
          </p>
        </article>

        <article>
          <span>Comunicaciones directas</span>
          <h2>Datos proporcionados por el usuario</h2>
          <p>
            Si decides comunicarte voluntariamente mediante correo electrónico o mensajería externa, únicamente se utilizarán
            los datos que tú decidas compartir (como nombre, correo o mensaje) para atender tu consulta técnica o profesional.
          </p>
        </article>
      </section>

      <section className="legal-panel">
        <div>
          <span>Finalidades del tratamiento</span>
          <h2>Finalidades primarias y secundarias</h2>
          <p>
            <strong>Finalidades primarias:</strong> Responder consultas de ingeniería, atender colaboraciones en proyectos de código abierto
            y evaluar propuestas de colaboración técnica.
            <br /><br />
            <strong>Finalidades secundarias:</strong> No existen. Dev Visualizer no realiza campañas publicitarias, marketing digital,
            envío de boletines no solicitados (spam) ni monetización de datos personales.
          </p>
        </div>

        <div>
          <span>Transferencias de datos</span>
          <h2>Sin cesión a terceros</h2>
          <p>
            No se transfieren ni venden datos personales a terceros. La plataforma se aloja de forma estática en GitHub Pages
            (Fastly CDN). Los servidores de GitHub pueden procesar registros técnicos de conexión (IP, agente de usuario y marca de tiempo)
            estrictamente necesarios para mitigar ataques DDoS y asegurar la infraestructura bajo su propia política de privacidad.
          </p>
        </div>
      </section>

      <section className="disclaimer-panel">
        <h2>Procedimiento para el ejercicio de Derechos ARCO</h2>
        <p>
          Conforme a la LFPDPPP, tienes derecho a conocer qué datos personales tuyos poseemos y para qué los utilizamos (<strong>Acceso</strong>);
          solicitar la corrección de información inexacta o desactualizada (<strong>Rectificación</strong>); solicitar su eliminación de nuestros
          registros cuando consideres que no se utilizan adecuadamente (<strong>Cancelación</strong>); y oponerte al tratamiento de los mismos para
          fines específicos (<strong>Oposición</strong>).
        </p>
        <p>
          Para ejercer cualquiera de tus <strong>Derechos ARCO</strong> o revocar tu consentimiento, deberás enviar una solicitud por escrito a través
          de los canales privados de contacto en{" "}
          <a href="https://github.com/Luics415" target="_blank" rel="noopener noreferrer">
            GitHub (Luics415)
          </a>
          , detallando tu nombre, medio de contacto y la descripción clara del derecho a ejercer.
        </p>
        <p>
          <strong>Plazo de respuesta:</strong> Conforme al Artículo 32 de la LFPDPPP, daremos respuesta a tu solicitud en un plazo máximo de{" "}
          <strong>20 (veinte) días hábiles</strong> contados a partir de la fecha de recepción de tu requerimiento formal.
        </p>
      </section>

      <section className="disclaimer-panel">
        <h2>Conformidad y Salvaguardas Internacionales (RGPD / GDPR y CCPA)</h2>
        <p>
          <strong>Unión Europea (RGPD / GDPR):</strong> Garantizamos el respeto a los derechos de acceso, rectificación, supresión
          (&quot;derecho al olvido&quot;), limitación del tratamiento y portabilidad. La base jurídica para responder a cualquier mensaje que nos
          envíes es tu consentimiento expreso y nuestro interés legítimo en atender tu comunicación técnica.
        </p>
        <p>
          <strong>California (CCPA / CPRA):</strong> Se certifica expresamente que Dev Visualizer <strong>no vende ni comparte información
          personal</strong> de sus visitantes (<em>We do not sell or share your personal information</em>).
        </p>
      </section>

      <section className="disclaimer-panel">
        <h2>Modificaciones al presente aviso</h2>
        <p>
          Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente Aviso de Privacidad para la
          atención de novedades legislativas o jurisprudenciales. Cualquier cambio se publicará de manera permanente en este mismo apartado.
        </p>
        <p style={{ marginTop: "10px", fontSize: "0.85rem", opacity: 0.8 }}>
          Última actualización: Septiembre de 2026 · Versión 1.0
        </p>
      </section>

      <div className="about-actions">
        <Link href="/terminos">Consultar Términos y Condiciones →</Link>
        <Link href="/libreria">Librería profesional →</Link>
        <Link href="/colecciones">Volver al catálogo →</Link>
      </div>
    </main>
  );
}
