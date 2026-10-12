import { projects } from "@/data/projects";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects({ lang }: { lang: Lang }) {
  const t = ui.projects;
  // Review checkpoint: featured card only. The rest of the grid comes next.
  const shown = projects.filter((p) => p.featured);

  return (
    <section id="work" data-accent="cyan" aria-labelledby="work-title" className="py-(--section-y)">
      <div className="container-page">
        <SectionHeading id="work-title" label={tr(t.label, lang)} title={tr(t.title, lang)} />
        <div className="grid gap-6 md:grid-cols-2">
          {shown.map((p) => (
            <div key={p.slug} className={p.featured ? "md:col-span-2" : undefined}>
              <ProjectCard project={p} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
