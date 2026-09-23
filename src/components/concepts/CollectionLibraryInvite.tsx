import Link from "next/link";

type CollectionLibraryInviteProps = {
  href: string;
  collectionName: string;
};

export function CollectionLibraryInvite({ href, collectionName }: CollectionLibraryInviteProps) {
  return (
    <aside className="collection-library-invite" aria-labelledby={`library-invite-${collectionName.replace(/\W+/g, "-")}`}>
      <div>
        <span>Continúa tu estudio</span>
        <h2 id={`library-invite-${collectionName.replace(/\W+/g, "-")}`}>Librería profesional de {collectionName}</h2>
        <p>Consulta documentación oficial, especificaciones, libros y recursos de esta colección antes de comenzar los capítulos.</p>
      </div>
      <Link href={href}>Abrir librería <b aria-hidden="true">↗</b></Link>
    </aside>
  );
}
