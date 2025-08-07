"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Merhaba, ben Faik Erkan.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl"
          >
            İş analizi, teknoloji ve motosiklet tutkusu bir arada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "İş Analizi",
                desc:
                  "Gereksinim toplama, BPMN ile süreç modelleme, UAT ve kabul kriterleri.",
              },
              {
                title: "Süreç İyileştirme",
                desc:
                  "Operasyonel verimliliği ölçer, darboğazları kaldırır ve otomasyon kurgularım.",
              },
              {
                title: "Takım Liderliği",
                desc:
                  "Şeffaf iletişim, geri bildirim kültürü ve ölçülebilir hedeflerle ekipleri büyütürüm.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-6 bg-white/5"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-zinc-300">{item.desc}</p>
              </div>
            ))}
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
