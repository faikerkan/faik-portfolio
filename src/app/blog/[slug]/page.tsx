/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/content/posts";
import JsonLd from "@/components/JsonLd";

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
      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: "Faik Erkan Gürşen",
            url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.faikerkan.info") + "/hakkimda",
          },
        }}
      />
      <p className="text-xs text-zinc-400">{post.tag} • {post.date}</p>
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <p className="mt-4 text-zinc-300">{post.excerpt}</p>
      <div className="prose prose-invert mt-8 max-w-none">
        {post.slug === "gereksinimden-kabul-kriterlerine" ? (
          <>
            <h2>Gereksinim Toplama: Saha, Atölye, Veri</h2>
            <p>
              Çağrı merkezi özelinde gereksinim, temsilci ve müşteri temasından
              beslenir. Saha gözlemi ve birebir görüşmeler, ilk temas çözümünü
              etkileyen sorunları görünür kılar. Atölyelerde paydaşları bir araya
              getirerek ortak dil oluştururum.
            </p>
            <h2>Kabul Kriterleri: KPI’larla Bağlama</h2>
            <p>
              Given/When/Then formatını kullanarak kabul kriterlerini FCR, AHT,
              CSAT gibi göstergelere bağlarım. Bu sayede test edilebilir, belirsizliği
              düşük ve sonuç odaklı tanımlar elde edilir.
            </p>
            <h2>UAT ve Devreye Alma</h2>
            <p>
              UAT senaryolarını temsilci akışlarına göre yazar, üretim öncesi gerçek
              vaka simülasyonlarıyla doğrularım. Devreye alma sonrası metrikleri
              izleyerek geri bildirim döngüsünü kapatırım.
            </p>
          </>
        ) : (
          <p className="whitespace-pre-line">{post.content}</p>
        )}
      </div>
    </article>
  );
}


