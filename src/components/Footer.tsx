import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} Faik Erkan. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4 text-zinc-300">
          <Link
            href="https://github.com/faikerkan"
            target="_blank"
            className="hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/faikerkan"
            target="_blank"
            className="hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="hover:text-white"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}


