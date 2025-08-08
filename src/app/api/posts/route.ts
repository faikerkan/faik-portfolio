import { NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";
import { slugify } from "@/lib/slugify";

export type StoredPost = {
  slug: string;
  title: string;
  tag?: string;
  html: string;
  date: string;
};

const BUCKET_PREFIX = "posts/";

export async function GET() {
  const res = await list({ prefix: BUCKET_PREFIX });
  const items = await Promise.all(
    res.blobs
      .filter((b) => b.pathname.endsWith(".json"))
      .map(async (b) => {
        const r = await fetch(b.url, { cache: "no-store" });
        return (await r.json()) as StoredPost;
      })
  );
  items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) return NextResponse.json({ error: "Blob token missing" }, { status: 400 });
    const body = await request.json();
    const { title, tag, html, date } = body;
    if (!title || !html) return NextResponse.json({ error: "title/html required" }, { status: 400 });
    const slug = slugify(title);
    const payload = { slug, title, tag, html, date: date || new Date().toISOString() };
    const key = `${BUCKET_PREFIX}${slug}.json`;
    const blob = await put(key, JSON.stringify(payload, null, 2), {
      access: "public",
      contentType: "application/json",
      token,
    });
    return NextResponse.json({ url: blob.url, slug });
  } catch {
    return NextResponse.json({ error: "save failed" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) return NextResponse.json({ error: "Blob token missing" }, { status: 400 });
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });
    await del(`${BUCKET_PREFIX}${slug}.json`, { token });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "delete failed" }, { status: 500 });
  }
}


