import type { Metadata } from "next";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { ProfessionalLibraryIndex } from "@/components/library/ProfessionalLibraryIndex";
import {
  libraryIndexEntries,
  librarySourceSnapshot,
  libraryTopicCount,
  sourceResourceCount,
  sourceTopicCount,
  supplementalResourceCount,
  totalLibraryResourceCount,
} from "@/data/professionalLibrary";
import styles from "./library.module.css";

export const metadata: Metadata = {
  title: "Librería profesional",
  description: "Documentación oficial, especificaciones, libros y guías organizados para las 71 colecciones de Dev Visualizer.",
  alternates: { canonical: "/libreria" },
};

export default function ProfessionalLibraryPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className={styles.hero}>
        <div>
          <span className={styles.eyebrow}>Documentación para estudiar y profundizar</span>
          <h1>Librería profesional</h1>
          <p>Cada colección reúne sus fuentes oficiales, especificaciones y recursos de aprendizaje. El catálogo diferencia claramente una referencia normativa de un libro comunitario y registra cómo se preserva cada enlace.</p>
        </div>
        <div className={styles.heroStats} role="group" aria-label="Cifras de la Librería profesional">
          <div><strong>{libraryTopicCount}</strong><span>bibliotecas temáticas</span></div>
          <div><strong>{totalLibraryResourceCount}</strong><span>recursos únicos catalogados</span></div>
          <div><strong>{sourceResourceCount}</strong><span>recursos de {sourceTopicCount} temas atribuidos a midudev</span></div>
          <div><strong>{supplementalResourceCount}</strong><span>recursos de curaduría complementaria</span></div>
        </div>
      </header>

      <ProfessionalLibraryIndex entries={libraryIndexEntries} />

      <aside className={styles.attribution}>
        <div><span>Catálogo de referencia</span><strong>{librarySourceSnapshot.name}</strong></div>
        <p>La instantánea conserva metadatos y enlaces absolutos del commit {librarySourceSnapshot.commit.slice(0, 7)}. Dev Visualizer aporta su propia arquitectura, diseño, clasificación editorial y fuentes oficiales.</p>
        <a href={librarySourceSnapshot.repositoryUrl} target="_blank" rel="noopener noreferrer">Ver origen <span aria-hidden="true">↗</span></a>
      </aside>
    </main>
  );
}
