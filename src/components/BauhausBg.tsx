"use client";

import { motion } from "framer-motion";

export default function BauhausBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-zinc-700/40 to-zinc-900/40 blur-3xl"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px]"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full opacity-30">
          <rect x="10" y="10" width="60" height="60" fill="#e5e7eb" />
          <circle cx="140" cy="60" r="30" fill="#9ca3af" />
          <rect x="90" y="110" width="80" height="20" fill="#d1d5db" />
          <circle cx="50" cy="150" r="20" fill="#a1a1aa" />
        </svg>
      </motion.div>
    </div>
  );
}


