/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectCover from "@/components/ProjectCover";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Proje Detayı`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  return (
    <section className="py-16 md:py-24 mx-auto max-w-3xl">
      <ProjectCover variant={project.coverVariant} />
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-4 text-zinc-300 leading-relaxed">{project.description}</p>
      {project.impact && (
        <p className="mt-4 text-zinc-300">Etkisi: {project.impact}</p>
      )}
      {project.metrics && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {project.metrics.map((m) => (
                <tr key={m.name} className="border-t border-white/10">
                  <td className="py-2 pr-4 text-zinc-400">{m.name}</td>
                  <td className="py-2 text-zinc-200">{m.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((t) => (
          <span
            key={t}
            className="text-xs bg-white/10 border border-white/10 rounded-full px-2 py-1 text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}


