"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Faik Erkan
        </Link>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  active ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Menüyü aç"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <ul className="px-3 py-3 space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm",
                        active
                          ? "bg-white/10 text-white"
                          : "text-zinc-300 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}


