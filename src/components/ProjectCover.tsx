import Image from "next/image";

type Props = { variant?: "a" | "b" | "c"; src?: string; alt?: string };

export default function ProjectCover({ variant = "a", src, alt }: Props) {
  return (
    <div className="h-44 w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-900 to-black mb-4">
      {src ? (
        src.endsWith(".svg") ? (
          // Use native img for SVG for best fidelity
          <img src={src} alt={alt || "Project cover"} className="h-full w-full object-cover" />
        ) : (
          <Image src={src} alt={alt || "Project cover"} width={1200} height={528} className="h-full w-full object-cover" />
        )
      ) : (
      <svg viewBox="0 0 400 176" className="h-full w-full opacity-90">
        {variant === "a" && (
          <>
            <rect x="20" y="28" width="120" height="120" fill="#1f2937" />
            <circle cx="260" cy="88" r="50" fill="#334155" />
            <rect x="200" y="128" width="160" height="12" fill="#475569" />
          </>
        )}
        {variant === "b" && (
          <>
            <circle cx="80" cy="88" r="50" fill="#374151" />
            <rect x="160" y="48" width="200" height="24" fill="#4b5563" />
            <rect x="160" y="88" width="160" height="12" fill="#6b7280" />
          </>
        )}
        {variant === "c" && (
          <>
            <rect x="20" y="38" width="80" height="80" fill="#1f2937" />
            <rect x="120" y="38" width="80" height="80" fill="#374151" />
            <rect x="220" y="38" width="80" height="80" fill="#4b5563" />
            <rect x="320" y="38" width="60" height="80" fill="#6b7280" />
          </>
        )}
        <defs>
          <linearGradient id="glow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff20" />
            <stop offset="100%" stopColor="#ffffff00" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="176" fill="url(#glow)" />
      </svg>
      )}
    </div>
  );
}


