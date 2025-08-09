"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/ParallaxSection";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Faik Erkan Gürşen",
          jobTitle: "Çağrı Merkezi & Müşteri Deneyimi Lideri",
          url: process.env.NEXT_PUBLIC_SITE_URL || "https://faikerkan.info",
          sameAs: [
            "https://www.linkedin.com/in/faikerkan",
            "https://github.com/faikerkan",
          ],
        }}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-2 sm:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Çağrı Merkezi & Müşteri Deneyimi Lideri • Veri ve AI Uzmanı
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl"
          >
            15 yıllık deneyimimle, operasyonlarınızı veriye ve yapay zekâya dayalı,
            ölçülebilir ve kârlı hale getiriyorum.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-base md:text-lg text-zinc-300 max-w-3xl"
          >
            Turkcell, Arçelik, İzmir Doğalgaz ve Su Bilgi Teknolojileri gibi lider markalarla çalıştım.
            CRM sistemleri, süreç iyileştirme, eğitim ve kalite yönetimi alanlarında uzmanım. 187 Acil ihbar
            hatları, müşteri hizmetleri ve back office ekiplerinde operasyonel verimliliği %60’a kadar artıran
            projelere imza attım.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3"
          >
            {[
              {
                title: "Çağrı Merkezi Yönetimi",
                desc:
                  "AHT, FCR, SLA ve ulaşılabilirlik gibi KPI’larda sürekli iyileştirme.",
              },
              {
                title: "Müşteri Deneyimi & CRM",
                desc:
                  "Carbon CRM, akış tasarımları ve doğru bilgiyle ilk temasta çözüm.",
              },
              {
                title: "Eğitim & Kalite",
                desc:
                  "Oyunlaştırma ve kalite denetimleriyle sürdürülebilir performans artışı.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-5 sm:p-6 bg-white/5"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200"
            >
              İletişime Geç
            </a>
            <a
              href="https://calendly.com/FAIK_PLACEHOLDER/30dk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/10"
            >
              30 Dakika Keşif Görüşmesi
            </a>
          </motion.div>
        </div>
      </section>
      <ParallaxSection>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Veriye Dayalı, Sonuç Odaklı
          </h2>
          <p className="mt-4 text-zinc-300 max-w-2xl">
            Gereksinimlerin keşfinden canlıya alıma kadar uçtan uca sorumluluk alır,
            ekiplerle şeffaf iletişim ve güçlü dokümantasyonla süreci görünür kılarız.
          </p>
        </div>
      </ParallaxSection>
    </>
  );
}
