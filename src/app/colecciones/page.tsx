import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { javascriptConcepts } from "@/data/javascriptConcepts";
import { typescriptConcepts } from "@/data/typescriptConcepts";
import { reactConcepts } from "@/data/reactConcepts";
import { reactNativeConcepts } from "@/data/reactNativeConcepts";
import { restApiConcepts } from "@/data/restApiConcepts";
import { gitGithubConcepts } from "@/data/gitGithubConcepts";
import { htmlCssConcepts } from "@/data/htmlCssConcepts";

const collections = [
  { number: "01", title: "JavaScript ES6+", href: "/", action: "/javascript-en-accion", stages: 14, count: javascriptConcepts.length, chapters: new Set(javascriptConcepts.map((item) => item.section)).size, summary: "Lenguaje, objetos, colecciones, asincronía, módulos, protocolos y memoria.", code: "JS" },
  { number: "02", title: "TypeScript", href: "/typescript", action: "/typescript-en-accion", stages: 14, count: typescriptConcepts.length, chapters: new Set(typescriptConcepts.map((item) => item.section)).size, summary: "Modelado, narrowing, genéricos, compilador, declaraciones y producción.", code: "TS" },
  { number: "03", title: "React", href: "/react", action: "/react-en-accion", stages: 14, count: reactConcepts.length, chapters: new Set(reactConcepts.map((item) => item.section)).size, summary: "Estado, reconciliación, efectos, concurrencia, Actions y servidor.", code: "R" },
  { number: "04", title: "React Native", href: "/react-native", action: "/react-native-en-accion", stages: 14, count: reactNativeConcepts.length, chapters: new Set(reactNativeConcepts.map((item) => item.section)).size, summary: "Nueva Arquitectura, dispositivo, offline, performance y releases.", code: "RN" },
  { number: "05", title: "APIs REST", href: "/apis-rest", action: "/apis-rest-en-accion", stages: 3, count: restApiConcepts.length, chapters: 6, summary: "HTTP, contratos, seguridad, resiliencia y operación observable.", code: "API" },
  { number: "06", title: "Git y GitHub", href: "/git-github", action: "/git-github-en-accion", stages: 8, count: gitGithubConcepts.length, chapters: 5, summary: "Modelo de Git, colaboración, revisión, automatización y recuperación.", code: "Git" },
  { number: "07", title: "HTML y CSS", href: "/html-css", action: "/html-css-en-accion", stages: 8, count: htmlCssConcepts.length, chapters: 7, summary: "Semántica, accesibilidad, cascade, layout, responsive y render del navegador.", code: "Web" },
] as const;

export default function CollectionsPage() {
  const totalConcepts = collections.reduce((sum, collection) => sum + collection.count, 0);

  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero library-hero">
        <div>
          <span className="eyebrow">Biblioteca del Dev Visualizer</span>
          <h1>Elige una ruta de estudio</h1>
          <p>
            Todas las colecciones están organizadas por capítulos y cada una incluye un caso “en acción” que conecta la teoría con una historia técnica completa.
          </p>
        </div>
        <div className="hero__counter">
          <strong>{totalConcepts}</strong>
          <span>conceptos disponibles</span>
        </div>
      </header>

      <section className="library-grid" aria-label="Colecciones disponibles">
        {collections.map((collection) => (
          <article className="library-card" key={collection.href}>
            <header>
              <span>{collection.number}</span>
              <b>{collection.code}</b>
            </header>
            <h2>{collection.title}</h2>
            <p>{collection.summary}</p>
            <div className="library-card__metrics">
              <span><strong>{collection.count}</strong> conceptos</span>
              <span><strong>{collection.chapters}</strong> capítulos</span>
              <span><strong>{collection.stages}</strong> etapas prácticas</span>
            </div>
            <div className="library-card__actions">
              <Link href={collection.href}>Abrir colección <span>→</span></Link>
              <Link href={collection.action}>Ver en acción <span>↗</span></Link>
            </div>
          </article>
        ))}
      </section>

      <footer className="project-note">
        La biblioteca es el punto de entrada estable: desde cualquier página, el botón DV y el selector superior regresan a este catálogo.
      </footer>
    </main>
  );
}
