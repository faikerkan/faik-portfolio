"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = { children: React.ReactNode };

export default function ParallaxSection({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative py-16 md:py-24">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="mx-auto max-w-6xl h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.04),transparent_50%)] rounded-[32px]" />
      </motion.div>
      <div className="relative">{children}</div>
    </section>
  );
}


