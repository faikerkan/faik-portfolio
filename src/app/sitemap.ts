import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.faikerkan.info";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/hakkimda`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/projeler`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/iletisim`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((prj) => ({
    url: `${base}/projeler/${prj.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}


