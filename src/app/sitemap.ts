import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = ["/", "/hakkimda", "/projeler", "/blog", "/iletisim"].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date() })
  );
  return routes;
}


