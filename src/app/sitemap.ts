import type { MetadataRoute } from "next";
import { collectionManifest } from "@/data/collectionManifest";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const paths = [
    "/colecciones",
    "/libreria",
    "/acerca",
    ...collectionManifest.flatMap((collection) => [collection.href, collection.actionHref, `/libreria/${collection.librarySlug}`]),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency: path.startsWith("/libreria") ? "weekly" : "monthly",
    priority: path === "/colecciones" || path === "/libreria" ? 1 : path.endsWith("-en-accion") ? .7 : .8,
  }));
}
