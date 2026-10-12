import { projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects({ lang }: { lang: Lang }) {
  const t = ui.projects;

  return (
    <section
      id="work"
      data-accent="cyan"
      aria-labelledby="work-title"
      className="py-(--section-y)"
    >
      <div className="container-page">
        <SectionHeading
          id="work-title"
          label={tr(t.label, lang)}
          title={tr(t.title, lang)}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.slug}
              className={p.featured ? "md:col-span-full" : undefined}
            >
              <ProjectCard project={p} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
