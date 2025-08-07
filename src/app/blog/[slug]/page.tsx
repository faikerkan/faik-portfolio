/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Faik Erkan`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: any) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="py-16 md:py-24 mx-auto max-w-3xl">
      <p className="text-xs text-zinc-400">{post.tag} • {post.date}</p>
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <p className="mt-4 text-zinc-300">{post.excerpt}</p>
      <div className="prose prose-invert mt-8 max-w-none whitespace-pre-line">
        {post.content}
      </div>
    </article>
  );
}


