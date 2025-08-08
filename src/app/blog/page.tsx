import { Metadata } from "next";
import Link from "next/link";
import { posts, externalPosts } from "@/content/posts";
import { fetchLinkPreview } from "@/lib/linkPreview";

export const metadata: Metadata = {
  title: "Blog — Faik Erkan",
};

export const revalidate = 60;

export default async function BlogPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Blog</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-white/10 p-6 bg-white/5"
            >
              <span className="text-xs text-zinc-400">{post.tag}</span>
              <h3 className="mt-2 text-xl font-medium">{post.title}</h3>
              <p className="mt-2 text-zinc-300">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm text-zinc-200 underline">
                Devamını oku →
              </Link>
            </article>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-medium">Diğer Yazılar (Medium)</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {(await Promise.all(
            externalPosts.map(async (p) => ({ p, preview: await fetchLinkPreview(p.url) }))
          )).map(({ p, preview }) => (
            <article key={p.url} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <span className="text-xs text-zinc-400">{p.tag}</span>
              <h3 className="mt-2 text-lg font-medium">{preview.title || p.title}</h3>
              {preview.description && (
                <p className="mt-2 text-zinc-300 line-clamp-3">{preview.description}</p>
              )}
              <Link href={p.url} target="_blank" className="mt-4 inline-block text-sm text-zinc-200 underline">
                Medium’da oku →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


