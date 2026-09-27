"use client";

import { useEffect, useState } from "react";
import { slugify } from "@/lib/slugify";

type Chapter = {
  name: string;
  count: number;
};

type CollectionChaptersProps = {
  chapters: readonly Chapter[];
};

export function CollectionChapters({ chapters }: CollectionChaptersProps) {
  const [activeChapter, setActiveChapter] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    for (const chapter of chapters) {
      const el = document.getElementById(slugify(chapter.name));
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav className="chapter-index" aria-label="Capítulos de la colección">
      <div>
        <span>Ruta de estudio</span>
        <strong>{chapters.length} capítulos</strong>
      </div>
      <ol>
        {chapters.map((chapter, index) => {
          const slug = slugify(chapter.name);
          const isActive = activeChapter === slug;
          return (
            <li key={chapter.name}>
              <a
                href={`#${slug}`}
                className={isActive ? "chapter-index__link--active" : ""}
                aria-current={isActive ? "location" : undefined}
              >
                <em>{String(index + 1).padStart(2, "0")}</em>
                <span>{chapter.name}</span>
                <b>{chapter.count}</b>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
