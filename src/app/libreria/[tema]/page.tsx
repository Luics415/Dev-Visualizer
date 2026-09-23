import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { LibraryTopicDetail } from "@/components/library/LibraryTopicDetail";
import { libraryTopicBySlug, libraryTopics } from "@/data/libraryTopics";

type LibraryTopicPageProps = { params: Promise<{ tema: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return libraryTopics.map((topic) => ({ tema: topic.slug }));
}

export async function generateMetadata({ params }: LibraryTopicPageProps): Promise<Metadata> {
  const { tema } = await params;
  const topic = libraryTopicBySlug.get(tema);
  if (!topic) return {};
  return {
    title: `Librería de ${topic.title}`,
    description: `Documentación oficial, especificaciones, libros y guías para estudiar ${topic.title} en Dev Visualizer.`,
    alternates: { canonical: `/libreria/${topic.slug}` },
  };
}

export default async function LibraryTopicPage({ params }: LibraryTopicPageProps) {
  const { tema } = await params;
  const topic = libraryTopicBySlug.get(tema);
  if (!topic) notFound();

  return (
    <main className="page-shell">
      <CollectionNav />
      <LibraryTopicDetail topic={topic} />
    </main>
  );
}
