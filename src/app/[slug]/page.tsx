import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExpandedActionPage } from "@/components/concepts/ExpandedActionPage";
import { StudyAtlasCollection } from "@/components/concepts/StudyAtlasCollection";
import { collectionManifest, collectionNumber } from "@/data/collectionManifest";
import { expandedRouteBySlug, expandedRoutes } from "@/data/expandedCollections";

type ExpandedRoutePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return expandedRoutes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: ExpandedRoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = expandedRouteBySlug.get(slug);
  if (!route) return {};
  const manifest = collectionManifest.find((entry) => entry.id === route.collection.id);
  if (!manifest) return {};
  const title = route.kind === "action" ? route.collection.caseStudy.title : route.collection.title;
  const description = route.kind === "action" ? route.collection.caseStudy.description : route.collection.description;
  return { title, description, alternates: { canonical: route.kind === "action" ? manifest.actionHref : manifest.href } };
}

export default async function ExpandedRoutePage({ params }: ExpandedRoutePageProps) {
  const { slug } = await params;
  const route = expandedRouteBySlug.get(slug);
  if (!route) notFound();
  const manifest = collectionManifest.find((entry) => entry.id === route.collection.id);
  if (!manifest) notFound();
  const number = collectionNumber(manifest.id);

  if (route.kind === "action") {
    return <ExpandedActionPage collection={route.collection} manifest={manifest} collectionNumber={number} />;
  }

  return (
    <StudyAtlasCollection
      collectionNumber={number}
      eyebrow={route.collection.eyebrow}
      title={route.collection.title}
      description={route.collection.description}
      concepts={route.collection.concepts}
      heroClassName={`hero--${manifest.theme}`}
      accentClassName="eyebrow"
      counterLabel={route.collection.counterLabel}
      footer={route.collection.footer}
      primer={route.collection.primer}
      notice={route.collection.notice}
      sources={route.collection.sources}
      actionHref={manifest.actionHref}
    />
  );
}
