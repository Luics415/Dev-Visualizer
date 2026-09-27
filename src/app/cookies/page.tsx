import type { Metadata } from "next";
import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";

export const metadata: Metadata = {
  title: "Política de Cookies y Almacenamiento Local",
  description: "Política de cookies de Dev Visualizer. Certificación técnica de 0 cookies de rastreo, justificación jurídica de ausencia de banner y gestión de almacenamiento local.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPolicyPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--library about-hero">
        <div>
          <span className="eyebrow">Transparencia técnica y almacenamiento local</span>
          <h1>Política de Cookies y Almacenamiento Local</h1>
          <p>
            Dev Visualizer es una plataforma educativa libre de rastreo: no emitimos cookies de seguimiento publicitario,
            telemetría conductual ni analítica invasiva. Conoce por qué este sitio no requiere un banner intrusivo de consentimiento
            y cómo se gestiona el almacenamiento técnico de tu navegador.
          </p>
        </div>
        <div className="hero__counter" role="group" aria-label="Estado de cookies en la plataforma">
          <strong>0 COOKIES</strong>
          <span>Sin rastreo comercial</span>
        </div>
      </header>

      <section className="about-grid">
        <article>
          <span>Estado del sitio</span>
          <h2>Cero cookies de rastreo</h2>
          <p>
            Dev Visualizer <strong>no emite ni utiliza cookies de rastreo, cookies publicitarias ni herramientas analíticas de terceros</strong> (como
            Google Analytics, Meta Pixel o identificadores de remarketing). Navegas por el catálogo con total privacidad.
          </p>
        </article>

        <article>
          <span>Marco jurídico</span>
          <h2>Por qué no hay banner de cookies</h2>
          <p>
            Bajo el artículo 5(3) de la Directiva ePrivacy de la Unión Europea y la LFPDPPP de México, únicamente los rastreadores
            no esenciales y de perfilado exigen consentimiento previo mediante banners. Al no recopilar datos ni rastrear usuarios,
            <strong> un banner de cookies no es legalmente necesario</strong> y evitarlo mejora la experiencia de estudio.
          </p>
        </article>

        <article>
          <span>Memoria temporal</span>
          <h2>Almacenamiento técnico en sesión</h2>
          <p>
            El navegador puede emplear <code>sessionStorage</code> técnico exclusivamente para recordar la posición del scroll
            al navegar entre capítulos y colecciones. Esta información reside únicamente en tu dispositivo y se destruye
            automáticamente al cerrar la pestaña.
          </p>
        </article>

        <article>
          <span>Recursos estáticos</span>
          <h2>Caché de tipografía y CDN</h2>
          <p>
            Para un renderizado óptimo a 60–120 FPS, el navegador almacena en caché local las fuentes tipográficas y los recursos
            estáticos servidos por el CDN global de GitHub Pages. Esta caché técnica no recopila ni transmite tu historial.
          </p>
        </article>
      </section>

      <section className="legal-panel">
        <div>
          <span>Auditoría de transparencia</span>
          <h2>Comprobación independiente por el usuario</h2>
          <p>
            Puedes verificar en cualquier momento la ausencia total de cookies comerciales abriendo las herramientas de desarrollador
            de tu navegador (tecla <strong>F12</strong> o <em>Inspeccionar</em>), dirigiéndote a la pestaña <strong>Aplicación (Application)</strong> o{" "}
            <strong>Almacenamiento (Storage)</strong> y seleccionando <strong>Cookies</strong>. Comprobarás que la lista de cookies de rastreo está completamente vacía.
          </p>
        </div>

        <div>
          <span>Gestión de almacenamiento</span>
          <h2>Control de datos en tu navegador</h2>
          <p>
            Si deseas restringir el almacenamiento en caché o la memoria de sesión en tu navegador, puedes configurarlo directamente
            en las opciones de privacidad de tu software:
            <br /><br />
            • <strong>Chrome / Edge:</strong> Configuración → Privacidad y seguridad → Cookies y datos de sitios.
            <br />
            • <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio.
            <br />
            • <strong>Safari:</strong> Preferencias → Privacidad → Administrar datos del sitio web.
          </p>
        </div>
      </section>

      <section className="disclaimer-panel">
        <h2>Enlaces e integraciones de terceros</h2>
        <p>
          Dev Visualizer incluye enlaces externos a documentación oficial, proyectos de código abierto y repositorios en GitHub.
          Al hacer clic en un enlace externo y abandonar Dev Visualizer, la navegación pasará a regirse por las políticas de privacidad
          y cookies del dominio de destino (por ejemplo, <em>github.com</em> o <em>python.org</em>).
        </p>
        <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.8 }}>
          Última actualización: Septiembre de 2026 · Versión 1.0
        </p>
      </section>

      <div className="about-actions">
        <Link href="/privacidad">Aviso de Privacidad →</Link>
        <Link href="/terminos">Términos y Condiciones →</Link>
        <Link href="/colecciones">Explorar catálogo →</Link>
      </div>
    </main>
  );
}
