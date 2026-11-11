import type { MetadataRoute } from "next";
import { collectionManifest } from "@/data/collectionManifest";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://luics415.github.io/Dev-Visualizer").replace(/\/$/, "");
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const siteUrl = basePath && !rawSiteUrl.endsWith(basePath) ? `${rawSiteUrl}${basePath}` : rawSiteUrl;

  const paths = [
    "/",
    "/colecciones",
    "/libreria",
    "/acerca",
    "/privacidad",
    "/terminos",
    "/cookies",
    ...collectionManifest.flatMap((collection) => [collection.href, collection.actionHref, `/libreria/${collection.librarySlug}`]),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "/" : path}`,
    changeFrequency: path.startsWith("/libreria") ? "weekly" : "monthly",
    priority: path === "/" || path === "/colecciones" || path === "/libreria" ? 1 : path.endsWith("-en-accion") ? .7 : .8,
  }));
}
