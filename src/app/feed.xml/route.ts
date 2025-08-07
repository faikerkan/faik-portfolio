import { posts } from "@/content/posts";

export const revalidate = 3600;

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://faikerkan.info";
  const items = posts
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${site}/blog/${p.slug}</link>
      <guid>${site}/blog/${p.slug}</guid>
      <description><![CDATA[${p.excerpt}]]></description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Faik Erkan — Blog</title>
      <link>${site}</link>
      <description>Çağrı merkezi yönetimi, müşteri deneyimi ve CRM dönüşümü</description>
      ${items}
    </channel>
  </rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}


