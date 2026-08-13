import type { MetadataRoute } from "next";
import { collectionManifest } from "@/data/collectionManifest";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const paths = ["/colecciones", "/acerca", ...collectionManifest.flatMap((collection) => [collection.href, collection.actionHref])];
  return paths.map((path) => ({ url: `${siteUrl}${path === "/" ? "" : path}`, changeFrequency: "monthly", priority: path === "/colecciones" ? 1 : path.endsWith("-en-accion") ? .7 : .8 }));
}
