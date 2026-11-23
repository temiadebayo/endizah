import type { MetadataRoute } from "next";
import { getCollections, getGarments } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const [collections, garments] = await Promise.all([
    getCollections(),
    getGarments(),
  ]);

  const staticRoutes = [
    "",
    "/about",
    "/women",
    "/men",
    "/collections",
    "/custom-orders",
    "/contact",
    "/faq",
    "/privacy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const collectionRoutes = collections.map((col) => ({
    url: `${baseUrl}/collections/${col.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const pieceRoutes = garments
    .filter((g) => !g.isPlaceholder)
    .map((g) => ({
      url: `${baseUrl}/pieces/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...collectionRoutes, ...pieceRoutes];
}
