export type LinkPreview = {
  title?: string;
  description?: string;
  image?: string;
};

function extractMeta(html: string, property: string): string | undefined {
  const re = new RegExp(
    `<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`,
    "i"
  );
  const m = html.match(re);
  return m?.[1];
}

function extractNameMeta(html: string, name: string): string | undefined {
  const re = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`,
    "i"
  );
  const m = html.match(re);
  return m?.[1];
}

function extractTitle(html: string): string | undefined {
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return m?.[1]?.trim();
}

export async function fetchLinkPreview(url: string): Promise<LinkPreview> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const html = await res.text();
    const title =
      extractMeta(html, "og:title") || extractNameMeta(html, "title") || extractTitle(html);
    const description =
      extractMeta(html, "og:description") ||
      extractNameMeta(html, "description");
    const image = extractMeta(html, "og:image");
    return { title, description, image };
  } catch {
    return {};
  }
}


