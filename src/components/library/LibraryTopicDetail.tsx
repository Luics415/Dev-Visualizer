import Link from "next/link";
import { collectionManifest } from "@/data/collectionManifest";
import {
  libraryLicenseLabels,
  libraryPreservationLabels,
  libraryResourceKindLabels,
  libraryResourceLevelLabels,
} from "@/data/libraryLabels";
import {
  importedResourcesForTopic,
  librarySourceSnapshot,
  officialLibraryResourcesForTopic,
  supplementalResourcesForTopic,
} from "@/data/professionalLibrary";
import type { LibraryResource, LibraryTopic } from "@/data/libraryTypes";
import styles from "@/app/libreria/library.module.css";

function formatResourceNote(note?: string) {
  if (!note) return null;
  const cutoff = note.indexOf("Para el capítulo");
  const base = cutoff > 0 ? note.slice(0, cutoff).trim() : note;
  const sentences = base.split(/(?<=[.?!])\s+/).map((s) => s.trim()).filter(Boolean);
  const unique = [...new Set(sentences)];
  return unique.slice(0, 2).join(" ").trim() || null;
}

function ResourceCard({ resource }: { resource: LibraryResource }) {
  const displayNote = formatResourceNote(resource.note);
  return (
    <article className={styles.resourceCard} data-preservation={resource.preservationStatus}>
      <header>
        <span>{libraryResourceKindLabels[resource.kind]}</span>
        <span>{libraryResourceLevelLabels[resource.level]}</span>
      </header>
      <h3>{resource.title}</h3>
      <p className={styles.author}>{resource.author ?? resource.authority ?? "Autor no informado por el catálogo fuente"}</p>
      {displayNote ? <p>{displayNote}</p> : null}
      <div className={styles.formatList} aria-label="Formatos disponibles">
        {resource.formats.map((format) => <span key={format}>{format}</span>)}
      </div>
      <dl className={styles.resourceMeta}>
        <div><dt>Disponibilidad</dt><dd>{libraryPreservationLabels[resource.preservationStatus]}</dd></div>
        <div><dt>Licencia local</dt><dd>{libraryLicenseLabels[resource.licenseStatus]}</dd></div>
        {resource.version ? <div><dt>Versión</dt><dd>{resource.version}</dd></div> : null}
        <div><dt>Revisado</dt><dd><time dateTime={resource.reviewedAt}>{resource.reviewedAt}</time></dd></div>
      </dl>
      <div className={styles.resourceActions}>
        {resource.localFile ? (
          <a
            href={resource.localFile.path}
            download={resource.localFile.fileName}
            className={styles.downloadLocal}
            title={`Descargar copia local verificada (${resource.localFile.fileName})`}
          >
            📥 Copia local ({(resource.localFile.sizeBytes / (1024 * 1024)).toFixed(1)} MB) <span aria-hidden="true">↓</span>
          </a>
        ) : null}
        <a href={resource.primaryUrl} target="_blank" rel="noopener noreferrer">Consultar recurso <span aria-hidden="true">↗</span></a>
        {(resource.mirrors ?? []).map((mirror, index) => (
          <a href={mirror} target="_blank" rel="noopener noreferrer" key={mirror}>Formato alternativo {index + 1} <span aria-hidden="true">↗</span></a>
        ))}
      </div>
    </article>
  );
}

export function LibraryTopicDetail({ topic }: { topic: LibraryTopic }) {
  const collection = collectionManifest.find((entry) => entry.id === topic.collectionId);
  const collectionHref = collection?.href ?? `/${topic.collectionId}`;
  const officialResources = officialLibraryResourcesForTopic(topic);
  const importedResources = importedResourcesForTopic(topic.slug);
  const supplementalResources = supplementalResourcesForTopic(topic.slug);
  const officialUrls = new Set(officialResources.map((resource) => resource.primaryUrl));
  const learningResources = [...new Map(
    [...importedResources, ...supplementalResources]
      .filter((resource) => !officialUrls.has(resource.primaryUrl))
      .map((resource) => [resource.primaryUrl, resource]),
  ).values()];
  const beginnerResources = learningResources.filter((resource) => resource.level === "beginner");
  const continuingResources = learningResources.filter((resource) => resource.level !== "beginner");
  const hasLocalFiles = [...officialResources, ...learningResources].some((r) => Boolean(r.localFile));

  return (
    <>
      <header className={styles.topicHero} style={{ "--library-accent": topic.accent } as React.CSSProperties}>
        <div>
          <span className={styles.eyebrow}>Librería profesional · {topic.short}</span>
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
          <div className={styles.heroActions}>
            <Link href={collectionHref}>Volver a la colección visual</Link>
            <Link href="/libreria">Explorar toda la librería</Link>
          </div>
        </div>
        <div className={styles.topicCounter} aria-label={`${officialResources.length + learningResources.length} recursos catalogados`}>
          <strong>{officialResources.length + learningResources.length}</strong>
          <span>recursos catalogados</span>
          <small>{officialResources.length} fuentes oficiales o primarias</small>
        </div>
      </header>

      <aside className={styles.preservationNotice}>
        <strong>Preservación responsable</strong>
        <p>
          {hasLocalFiles
            ? "Dev Visualizer aloja copias locales autorizadas para libros y manuales con licencias abiertas verificadas (Creative Commons, MIT o Dominio Público), garantizando acceso permanente y verificación de integridad criptográfica SHA-256."
            : "Dev Visualizer conserva los metadatos de cada recurso. Solo alojamos una copia cuando su licencia permite redistribuirla y queda registrada junto con su hash; por ahora los libros sin copia local autorizada se consultan en su fuente externa."}
        </p>
      </aside>

      <section className={styles.resourceSection} aria-labelledby="official-library-sources">
        <header><span>Base normativa</span><h2 id="official-library-sources">Documentación oficial y especificaciones</h2><p>Fuentes mantenidas por el proyecto, organismo o proveedor responsable de la tecnología.</p></header>
        <div className={styles.resourceGrid}>{officialResources.map((resource) => <ResourceCard resource={resource} key={resource.id} />)}</div>
      </section>

      <section className={styles.resourceSection} aria-labelledby="beginner-library-resources">
        <header><span>Ruta de entrada</span><h2 id="beginner-library-resources">Libros y guías para comenzar</h2><p>Recursos cuyo título declara un enfoque introductorio, básico o para principiantes.</p></header>
        {beginnerResources.length > 0
          ? <div className={styles.resourceGrid}>{beginnerResources.map((resource) => <ResourceCard resource={resource} key={resource.id} />)}</div>
          : <p className={styles.resourceEmpty}>Aún no hay un libro introductorio verificado para este tema. Comienza con la documentación oficial anterior; no mostramos un recurso como principiante sin evidencia editorial.</p>}
      </section>

      <section className={styles.resourceSection} aria-labelledby="professional-library-resources">
        <header><span>Catálogo curado</span><h2 id="professional-library-resources">Recursos para continuar y profundizar</h2><p>{continuingResources.length > 0 ? "Libros, cursos y referencias complementarias en español y otros idiomas." : "Esta colección aún no tiene un libro adicional en el catálogo importado; su documentación oficial ya está disponible arriba."}</p></header>
        {continuingResources.length > 0 ? <div className={styles.resourceGrid}>{continuingResources.map((resource) => <ResourceCard resource={resource} key={resource.id} />)}</div> : null}
      </section>

      {topic.sourceTopicSlug ? (
        <aside className={styles.attribution}>
          <div><span>Procedencia del catálogo</span><strong>{librarySourceSnapshot.name}</strong></div>
          <p>Metadatos revisados y adaptados al sistema editorial de Dev Visualizer. No se reutilizan su código, iconografía, textos de interfaz ni diseño.</p>
          <a href={librarySourceSnapshot.repositoryUrl} target="_blank" rel="noopener noreferrer">Ver repositorio de origen <span aria-hidden="true">↗</span></a>
        </aside>
      ) : null}

      {supplementalResources.length > 0 ? (
        <aside className={styles.attribution}>
          <div><span>Curaduría complementaria</span><strong>Dev Visualizer</strong></div>
          <p>Esta biblioteca no formaba parte de los 42 temas del catálogo de referencia. Se añadieron recursos de nivel principiante, intermedio y avanzado, conservando autoría, procedencia y consulta externa.</p>
          <Link href="/acerca">Política editorial <span aria-hidden="true">→</span></Link>
        </aside>
      ) : null}
    </>
  );
}
