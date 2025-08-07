import { Metadata } from "next";
import Link from "next/link";
import { projects as data, type Project as ProjectContent } from "@/content/projects";
import ProjectCover from "@/components/ProjectCover";

export const metadata: Metadata = {
  title: "Projeler — Faik Erkan",
};

type Project = {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  link?: string;
};

const projects: (Project & { coverVariant?: ProjectContent["coverVariant"]; metrics?: ProjectContent["metrics"] })[] = data.map((p) => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  tools: p.tools,
  link: `/projeler/${p.slug}`,
  coverVariant: p.coverVariant,
  metrics: p.metrics,
}));

export default function ProjectsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Projeler
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-white/10 p-6 bg-white/5 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <ProjectCover variant={p.coverVariant} src={`/projects/${p.slug}.svg`} alt={`${p.title} kapak görseli`} />
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-zinc-300">{p.description}</p>
              {p.metrics && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      {p.metrics.map((m) => (
                        <tr key={m.name} className="border-t border-white/10">
                          <td className="py-2 pr-4 text-zinc-400">{m.name}</td>
                          <td className="py-2 text-zinc-200">{m.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/10 border border-white/10 rounded-full px-2 py-1 text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <Link
                  className="mt-4 inline-block text-sm text-zinc-200 underline"
                  href={p.link}
                >
                  Detaylar →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


