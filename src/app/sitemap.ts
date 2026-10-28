import type { MetadataRoute } from "next";
import { articleSeo, pages, siteUrl } from "@/lib/seo";
import { servicesCatalog } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const main = Object.values(pages).map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.path === "/" ? 1 : 0.85,
  }));

  const services = servicesCatalog.map((service) => ({
    url: `${siteUrl}${service.seo.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articles = Object.values(articleSeo).map((article) => ({
    url: `${siteUrl}${article.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...main, ...services, ...articles];
}
