import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { javascriptConcepts } from "@/data/javascriptConcepts";
import { typescriptConcepts } from "@/data/typescriptConcepts";
import { reactConcepts } from "@/data/reactConcepts";
import { reactNativeConcepts } from "@/data/reactNativeConcepts";
import { stateManagementConcepts } from "@/data/stateManagementConcepts";
import { restApiConcepts } from "@/data/restApiConcepts";
import { backendConcepts } from "@/data/backendConcepts";
import { databaseConcepts } from "@/data/databaseConcepts";
import { gitGithubConcepts } from "@/data/gitGithubConcepts";
import { htmlCssConcepts } from "@/data/htmlCssConcepts";
import { linuxConcepts } from "@/data/linuxConcepts";
import { awsConcepts } from "@/data/awsConcepts";
import { deploymentConcepts } from "@/data/deploymentConcepts";
import { nginxConcepts } from "@/data/nginxConcepts";
import { dockerConcepts } from "@/data/dockerConcepts";
import { firebaseConcepts } from "@/data/firebaseConcepts";
import { debuggingConcepts } from "@/data/debuggingConcepts";
function chaptersOf(concepts: readonly { section: string }[]) {
  return new Set(concepts.map((item) => item.section)).size;
}

const collections = [
  { number: "01", title: "JavaScript ES6+", href: "/", action: "/javascript-en-accion", stages: 14, count: javascriptConcepts.length, chapters: chaptersOf(javascriptConcepts), summary: "Lenguaje, objetos, colecciones, asincronía, módulos, protocolos y memoria.", code: "JS" },
  { number: "02", title: "TypeScript", href: "/typescript", action: "/typescript-en-accion", stages: 14, count: typescriptConcepts.length, chapters: chaptersOf(typescriptConcepts), summary: "Modelado, narrowing, genéricos, compilador, declaraciones y producción.", code: "TS" },
  { number: "03", title: "React", href: "/react", action: "/react-en-accion", stages: 14, count: reactConcepts.length, chapters: chaptersOf(reactConcepts), summary: "Estado, reconciliación, efectos, concurrencia, Actions y servidor.", code: "R" },
  { number: "04", title: "React Native", href: "/react-native", action: "/react-native-en-accion", stages: 14, count: reactNativeConcepts.length, chapters: chaptersOf(reactNativeConcepts), summary: "Nueva Arquitectura, dispositivo, offline, performance y releases.", code: "RN" },
  { number: "05", title: "Gestión de estado", href: "/gestion-estado", action: "/gestion-estado-en-accion", stages: 14, count: stateManagementConcepts.length, chapters: chaptersOf(stateManagementConcepts), summary: "Ownership, reducers, Redux Toolkit, query caches, stores ligeros, persistencia y offline.", code: "State" },
  { number: "06", title: "APIs REST", href: "/apis-rest", action: "/apis-rest-en-accion", stages: 3, count: restApiConcepts.length, chapters: 6, summary: "HTTP, contratos, seguridad, resiliencia y operación observable.", code: "API" },
  { number: "07", title: "Backend", href: "/backend", action: "/backend-en-accion", stages: 14, count: backendConcepts.length, chapters: chaptersOf(backendConcepts), summary: "Runtime, arquitectura, seguridad, persistencia, mensajería, confiabilidad y despliegue.", code: "Back" },
  { number: "08", title: "Bases de datos", href: "/bases-datos", action: "/bases-datos-en-accion", stages: 14, count: databaseConcepts.length, chapters: chaptersOf(databaseConcepts), summary: "Modelado, SQL, índices, concurrencia, NoSQL, distribución, backups y seguridad.", code: "DB" },
  { number: "09", title: "Git y GitHub", href: "/git-github", action: "/git-github-en-accion", stages: 8, count: gitGithubConcepts.length, chapters: 5, summary: "Modelo de Git, colaboración, revisión, automatización y recuperación.", code: "Git" },
  { number: "10", title: "HTML y CSS", href: "/html-css", action: "/html-css-en-accion", stages: 8, count: htmlCssConcepts.length, chapters: 7, summary: "Semántica, accesibilidad, cascade, layout, responsive y render del navegador.", code: "Web" },
  { number: "11", title: "Linux", href: "/linux", action: "/linux-en-accion", stages: 14, count: linuxConcepts.length, chapters: chaptersOf(linuxConcepts), summary: "Kernel, shell, permisos, procesos, systemd, redes, storage, hardening y contenedores.", code: "Linux" },
  { number: "12", title: "AWS", href: "/aws", action: "/aws-en-accion", stages: 14, count: awsConcepts.length, chapters: chaptersOf(awsConcepts), summary: "Identidad, VPC, compute, serverless, datos, eventos, edge, operación, gobierno y costo.", code: "AWS" },
  { number: "13", title: "Deployment", href: "/deployment", action: "/deployment-en-accion", stages: 14, count: deploymentConcepts.length, chapters: chaptersOf(deploymentConcepts), summary: "Builds, artefactos, CI/CD, rollouts, Kubernetes, migraciones, observabilidad y rollback.", code: "Ship" },
  { number: "14", title: "NGINX", href: "/nginx", action: "/nginx-en-accion", stages: 14, count: nginxConcepts.length, chapters: chaptersOf(nginxConcepts), summary: "Arquitectura event-driven, web server, reverse proxy, balanceo, TLS, caché, límites, stream y operación.", code: "NX" },
  { number: "15", title: "Docker", href: "/docker", action: "/docker-en-accion", stages: 14, count: dockerConcepts.length, chapters: chaptersOf(dockerConcepts), summary: "Engine, OCI, imágenes, Dockerfiles, BuildKit, storage, networking, Compose, seguridad y runtime.", code: "DK" },
  { number: "16", title: "Firebase", href: "/firebase", action: "/firebase-en-accion", stages: 14, count: firebaseConcepts.length, chapters: chaptersOf(firebaseConcepts), summary: "Auth, Firestore, RTDB, Storage, Functions, Hosting, FCM, Rules, App Check y operación.", code: "FB" },
  { number: "17", title: "Debugging", href: "/debugging", action: "/debugging-en-accion", stages: 14, count: debuggingConcepts.length, chapters: chaptersOf(debuggingConcepts), summary: "Reproducción, evidencia, breakpoints, red, asincronía, rendimiento, memoria e incidentes.", code: "DBG" },
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
          <p>Todas las colecciones están organizadas por capítulos y cada una incluye un caso “en acción” que conecta la teoría con una historia técnica completa y su apartado de profundización.</p>
        </div>
        <div className="hero__counter"><strong>{totalConcepts}</strong><span>conceptos disponibles</span></div>
      </header>

      <section className="library-grid" aria-label="Colecciones disponibles">
        {collections.map((collection) => (
          <article className="library-card" key={collection.href}>
            <header><span>{collection.number}</span><b>{collection.code}</b></header>
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

      <footer className="project-note">La biblioteca es el punto de entrada estable: desde cualquier página, el botón DV y el selector superior regresan a este catálogo.</footer>
    </main>
  );
}
