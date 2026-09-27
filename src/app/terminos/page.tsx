import type { Metadata } from "next";
import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { projectCredits } from "@/data/projectCredits";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso",
  description: "Términos y condiciones legales de Dev Visualizer. Propiedad intelectual, licencias MIT y CC BY-NC-SA 4.0, uso nominativo de marcas y limitación de responsabilidad.",
  alternates: { canonical: "/terminos" },
};

export default function TermsPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--library about-hero">
        <div>
          <span className="eyebrow">Marco legal, licencias y responsabilidad</span>
          <h1>Términos y Condiciones de Uso</h1>
          <p>
            Condiciones legales que rigen el acceso, consulta y uso de Dev Visualizer. Un proyecto educativo de código abierto
            que fomenta el aprendizaje técnico transparente respetando la propiedad intelectual y los estándares éticos.
          </p>
        </div>
        <div className="hero__counter" role="group" aria-label="Licenciamiento dual del proyecto">
          <strong>MIT / CC</strong>
          <span>Licenciamiento dual</span>
        </div>
      </header>

      <section className="about-grid">
        <article>
          <span>Naturaleza del proyecto</span>
          <h2>Educación y divulgación técnica</h2>
          <p>
            Dev Visualizer es un proyecto independiente desarrollado por <strong>{projectCredits.owner}</strong> con fines
            exclusivamente educativos. Su objetivo es construir modelos mentales claros sobre el funcionamiento interno del software.
            El acceso y navegación en el sitio implica la aceptación incondicional de estos Términos.
          </p>
        </article>

        <article>
          <span>Régimen del código</span>
          <h2>Licencia MIT para software</h2>
          <p>
            El código fuente de la aplicación web y sus componentes de visualización se publican bajo la{" "}
            <strong>Licencia MIT</strong>. Se autoriza su uso, copia, modificación, fusión y distribución, siempre que se conserve
            el aviso de copyright y la leyenda de la licencia original en todas las copias sustanciales.
          </p>
        </article>

        <article>
          <span>Contenido pedagógico</span>
          <h2>Licencia CC BY-NC-SA 4.0</h2>
          <p>
            Los textos explicativos, diagramas arquitectónicos, escenas interactivas, capturas y la identidad visual del atlas
            se rigen bajo la licencia <strong>Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0)</strong>.
            Puedes compartir y adaptar el material para fines no comerciales citando la autoría original.
          </p>
        </article>

        <article>
          <span>Identidad y marcas</span>
          <h2>Firma y signos distintivos</h2>
          <p>
            El nombre &quot;Luics415&quot;, el emblema visual del ancla y los elementos gráficos distintivos son propiedad de su autor.
            No se otorga autorización para utilizar dichos signos distintivos de manera que induzca a confusión o simule una asociación
            oficial inexistente.
          </p>
        </article>
      </section>

      <section className="legal-panel">
        <div>
          <span>Uso nominativo de terceros</span>
          <h2>Marcas y tecnologías citadas (Fair Use)</h2>
          <p>
            Los nombres, marcas y logotipos de tecnologías, lenguajes, entornos y empresas de terceros (tales como Python, Docker,
            AWS, React, Android, MediaPipe, OpenAI, Riot Games, entre otros) pertenecen a sus respectivos titulares.
            <br /><br />
            Su mención en Dev Visualizer es de carácter estrictamente <strong>nominativo, referencial y pedagógico (Fair Use / Uso Legítimo)</strong>.
            Dev Visualizer no ostenta patrocinio, respaldo, licencia propietaria ni vinculación corporativa oficial con dichas entidades.
          </p>
        </div>

        <div>
          <span>Librería profesional</span>
          <h2>Recursos bibliográficos externos</h2>
          <p>
            La Librería profesional incluye enlaces a especificaciones oficiales y recursos educativos comunitarios, reconociendo
            como fuente de descubrimiento a <em>midudev/libros-programacion-gratis</em> y <em>librosgratis.dev</em>.
            <br /><br />
            Cada obra referenciada conserva íntegramente los derechos y términos fijados por sus creadores. Dev Visualizer solo aloja
            archivos adjuntos cuando existe una autorización verificable o licencia abierta que lo permita expresamente.
          </p>
        </div>
      </section>

      <section className="disclaimer-panel">
        <h2>Exclusión de garantías (Cláusula &quot;TAL CUAL&quot; / AS IS)</h2>
        <p>
          El sitio web, sus simulaciones interactivas, códigos de demostración y materiales didácticos se entregan <strong>&quot;TAL CUAL&quot; (AS IS)</strong>,
          sin garantías expresas o implícitas de ningún tipo, incluyendo —pero sin limitarse a— garantías de comerciabilidad, idoneidad para
          un propósito determinado o ausencia de errores.
        </p>
        <p>
          Dev Visualizer no reemplaza la documentación oficial de los fabricantes ni constituye asesoría profesional, arquitectónica o de
          seguridad para sistemas en producción crítica. La implementación de cualquier concepto en entornos reales es responsabilidad
          exclusiva de quien lo aplique.
        </p>
      </section>

      <section className="disclaimer-panel">
        <h2>Limitación de responsabilidad</h2>
        <p>
          Bajo ninguna circunstancia el autor o los colaboradores serán responsables por daños directos, indirectos, incidentales,
          especiales o consecuentes (incluyendo pérdida de datos, interrupción de negocios o fallas de compilación) que resulten del uso o
          de la incapacidad de uso de los materiales o del código disponible en la plataforma.
        </p>
      </section>

      <section className="disclaimer-panel">
        <h2>Ciberseguridad y uso debido de la infraestructura</h2>
        <p>
          Al utilizar Dev Visualizer, te comprometes a hacer un uso lícito y respetuoso de los recursos. Queda estrictamente prohibido:
        </p>
        <ul style={{ paddingLeft: "24px", color: "var(--shell-muted)", lineHeight: 1.7, marginTop: "8px" }}>
          <li>Realizar ataques de denegación de servicio (DoS o DDoS) contra la plataforma o el CDN.</li>
          <li>Ejecutar escaneos de vulnerabilidades no autorizados o intentar inyectar código malicioso en la infraestructura.</li>
          <li>Efectuar extracción masiva y desmedida de información (scraping abusivo) que sature los servidores o degrade la experiencia de otros estudiantes.</li>
        </ul>
      </section>

      <section className="disclaimer-panel">
        <h2>Legislación aplicable y jurisdicción</h2>
        <p>
          Para la interpretación y cumplimiento de estos Términos y Condiciones, así como para cualquier controversia que pudiera suscitarse,
          las partes se someten expresamente a las leyes federales de los <strong>Estados Unidos Mexicanos</strong>, en particular a la Ley Federal del
          Derecho de Autor y al Código de Comercio en lo conducente.
        </p>
        <p>
          Para cualquier litigio, las partes renuncian expresamente a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios
          presentes o futuros, y se someten a la competencia de los <strong>tribunales competentes en el Estado de México / Ciudad de México</strong>.
        </p>
        <p style={{ marginTop: "12px", fontSize: "0.85rem", opacity: 0.8 }}>
          Última actualización: Septiembre de 2026 · Versión 1.0
        </p>
      </section>

      <div className="about-actions">
        <Link href="/privacidad">Aviso de Privacidad →</Link>
        <Link href="/cookies">Ver Política de Cookies →</Link>
        <Link href="/colecciones">Explorar colecciones →</Link>
      </div>
    </main>
  );
}
