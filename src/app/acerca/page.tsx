import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { projectCredits } from "@/data/projectCredits";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--library about-hero">
        <div>
          <span className="eyebrow">Proyecto, autoría y uso</span>
          <h1>Acerca de Dev Visualizer</h1>
          <p>Un atlas visual original e independiente para estudiar desarrollo de software mediante conceptos animados, casos integrados y profundizaciones técnicas.</p>
        </div>
        <div className="hero__counter"><strong>1.0</strong><span>edición pública</span></div>
      </header>

      <section className="about-grid">
        <article>
          <span>Propósito</span>
          <h2>Educación visual, no documentación oficial</h2>
          <p>El contenido busca construir modelos mentales claros. Debe complementarse con la documentación oficial de cada tecnología y con práctica real.</p>
        </article>
        <article>
          <span>Autoría principal</span>
          <h2>{projectCredits.owner}</h2>
          <p>Concepto original, dirección educativa, selección temática, revisión y mantenimiento del proyecto.</p>
        </article>
        {projectCredits.collaborators.map((person) => (
          <article key={person.name}>
            <span>{person.type === "ai" ? "Colaboración de IA" : "Participación"}</span>
            <h2>{person.name}</h2>
            <p>{person.role}.</p>
          </article>
        ))}
      </section>

      <section className="legal-panel">
        <div>
          <span>Licencia del código</span>
          <h2>MIT</h2>
          <p>Permite usar, copiar, modificar y distribuir el código conservando el aviso de copyright y la licencia.</p>
        </div>
        <div>
          <span>Contenido educativo y diseño original</span>
          <h2>CC BY-NC-SA 4.0</h2>
          <p>Permite compartir y adaptar con atribución, para usos no comerciales y bajo la misma licencia.</p>
        </div>
      </section>

      <section className="disclaimer-panel">
        <h2>Avisos de independencia</h2>
        <p>Dev Visualizer no está afiliado, patrocinado ni aprobado por Riot Games, OpenAI ni por las empresas responsables de las tecnologías estudiadas. Las referencias textuales a League of Legends y Arcane son guiños educativos no oficiales; no se incluyen imágenes, audio ni recursos propietarios de Riot Games.</p>
        <p>La participación de ChatGPT se acredita como asistencia de IA. Las decisiones finales, la integración, la publicación y la responsabilidad editorial corresponden a los mantenedores humanos.</p>
      </section>

      <div className="about-actions">
        <Link href="/colecciones">Volver a las colecciones →</Link>
      </div>
    </main>
  );
}
