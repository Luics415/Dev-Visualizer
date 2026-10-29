import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { QuizRunner } from "@/components/quiz/QuizRunner";
import { collectionManifest, collectionNumber } from "@/data/collectionManifest";
import { getQuestionsForCollection } from "@/data/quizQuestions";

type QuizPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

function resolveQuizTarget(slug: string) {
  const path = `/${slug}`;
  const manifest = collectionManifest.find(
    (m) =>
      m.actionHref === path ||
      m.href === path ||
      m.id === slug ||
      (slug === "javascript" && m.id === "javascript") ||
      (slug === "quiz" && m.id === "javascript") ||
      m.legacyPaths?.includes(path)
  );
  if (!manifest) return null;

  const isActionQuiz =
    manifest.actionHref === path ||
    slug.endsWith("-en-accion") ||
    (manifest.legacyPaths?.some((p) => p.endsWith("-en-accion") && p === path) ?? false);

  const number = collectionNumber(manifest.id);
  const title = isActionQuiz ? `${manifest.label} en acción` : manifest.label;
  const returnHref = isActionQuiz ? manifest.actionHref : manifest.href;

  return {
    manifest,
    number,
    title,
    isActionQuiz,
    returnHref,
  };
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  const seen = new Set<string>();

  const addSlug = (pathOrSlug: string) => {
    const clean = pathOrSlug.replace(/^\/+/, "").replace(/\/+$/, "");
    if (clean && !seen.has(clean)) {
      seen.add(clean);
      slugs.push({ slug: clean });
    }
  };

  // Genera estáticamente las rutas de quiz para las 73 colecciones canónicas y sus secciones En Acción
  for (const entry of collectionManifest) {
    addSlug(entry.actionHref);

    if (entry.href === "/") {
      addSlug("javascript");
      addSlug("quiz");
    } else {
      addSlug(entry.href);
    }

    addSlug(entry.id);

    for (const legacy of entry.legacyPaths ?? []) {
      addSlug(legacy);
    }
  }

  return slugs;
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { slug } = await params;
  const target = resolveQuizTarget(slug);
  if (!target) return {};
  const { manifest, isActionQuiz } = target;

  const pageTitle = isActionQuiz
    ? `Quiz Técnico En Acción · ${manifest.label}`
    : `Quiz Técnico · ${manifest.label}`;
  const description = isActionQuiz
    ? `Pon a prueba tus conocimientos sobre el caso práctico y la arquitectura en acción de ${manifest.label} con 15 preguntas didácticas aleatorias de opción múltiple.`
    : `Pon a prueba tus conocimientos en ${manifest.label} con 15 preguntas didácticas aleatorias de opción múltiple.`;

  return { title: pageTitle, description };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params;
  const target = resolveQuizTarget(slug);
  if (!target) notFound();

  const { manifest, number, title, isActionQuiz, returnHref } = target;
  const questions = getQuestionsForCollection(manifest.id);

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className={`hero hero--${manifest.theme}`}>
        <div>
          <span className="eyebrow">
            Colección {number} · {isActionQuiz ? "Caso integrado y producción" : "Validación de conocimientos"}
          </span>
          <h1>Quiz Didáctico: {title}</h1>
          <p>
            {isActionQuiz
              ? "15 preguntas técnicas seleccionadas aleatoriamente para evaluar tu comprensión del caso práctico, flujos de ejecución y mecanismos en acción. Ilimitado y sin registro."
              : "15 preguntas técnicas seleccionadas aleatoriamente de nuestro banco para evaluar tu comprensión de fundamentos y arquitectura. Ilimitado y sin registro."}
          </p>
        </div>
        <div className="hero__counter">
          <strong>15</strong>
          <span>preguntas por intento</span>
        </div>
      </header>

      <section className="quiz-section-wrapper" aria-label={`Quiz técnico de ${title}`}>
        <QuizRunner
          collectionId={manifest.id}
          collectionTitle={title}
          collectionHref={returnHref}
          allQuestions={questions}
        />
      </section>
    </main>
  );
}
