import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { QuizRunner } from "@/components/quiz/QuizRunner";
import { collectionManifest, collectionNumber } from "@/data/collectionManifest";
import { expandedRouteBySlug, expandedRoutes } from "@/data/expandedCollections";
import { getQuestionsForCollection } from "@/data/quizQuestions";

type QuizPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return expandedRoutes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = expandedRouteBySlug.get(slug);
  if (!route) return {};
  const manifest = collectionManifest.find((entry) => entry.id === route.collection.id);
  if (!manifest) return {};
  const title = `Quiz Técnico · ${route.collection.title}`;
  const description = `Pon a prueba tus conocimientos en ${route.collection.title} con 15 preguntas didácticas aleatorias de opción múltiple.`;
  return { title, description };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params;
  const route = expandedRouteBySlug.get(slug);
  if (!route) notFound();
  const manifest = collectionManifest.find((entry) => entry.id === route.collection.id);
  if (!manifest) notFound();
  const number = collectionNumber(manifest.id);
  const questions = getQuestionsForCollection(route.collection.id);

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className={`hero hero--${manifest.theme}`}>
        <div>
          <span className="eyebrow">Colección {number} · Validación de conocimientos</span>
          <h1>Quiz Didáctico: {route.collection.title}</h1>
          <p>
            15 preguntas técnicas seleccionadas aleatoriamente de nuestro banco para evaluar tu comprensión. Ilimitado y sin registro.
          </p>
        </div>
        <div className="hero__counter">
          <strong>15</strong>
          <span>preguntas por intento</span>
        </div>
      </header>

      <section className="quiz-section-wrapper" aria-label={`Quiz técnico de ${route.collection.title}`}>
        <QuizRunner
          collectionId={route.collection.id}
          collectionTitle={route.collection.title}
          collectionHref={manifest.actionHref}
          allQuestions={questions}
        />
      </section>
    </main>
  );
}
