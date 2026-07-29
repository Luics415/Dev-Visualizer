import { slugify } from "@/lib/slugify";

type Chapter = {
  name: string;
  count: number;
};

type CollectionChaptersProps = {
  chapters: readonly Chapter[];
};

export function CollectionChapters({ chapters }: CollectionChaptersProps) {
  return (
    <nav className="chapter-index" aria-label="Capítulos de la colección">
      <div>
        <span>Ruta de estudio</span>
        <strong>{chapters.length} capítulos</strong>
      </div>
      <ol>
        {chapters.map((chapter, index) => (
          <li key={chapter.name}>
            <a href={`#${slugify(chapter.name)}`}>
              <em>{String(index + 1).padStart(2, "0")}</em>
              <span>{chapter.name}</span>
              <b>{chapter.count}</b>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
