import Image from "next/image";
import type { Project } from "@/data/projects";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { GlitchText } from "@/components/ui/GlitchText";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({
  project,
  lang,
}: {
  project: Project;
  lang: Lang;
}) {
  const t = ui.projects;
  const featured = project.featured;
  const titleId = `project-${project.slug}`;
  const newTab = { newTabLabel: tr(t.opensInNewTab, lang) };

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "neon-hover group relative grid h-full border-(length:--bw) border-surface-3 bg-surface-1",
        featured ? "md:grid-cols-[1.35fr_1fr]" : "grid-rows-[auto_1fr]",
      )}
    >
      <Screenshot project={project} lang={lang} />

      <div
        className={cn(
          "flex flex-col gap-5 border-surface-3 p-6 sm:p-8",
          featured
            ? "border-t-(length:--bw) md:border-t-0 md:border-l-(length:--bw)"
            : "border-t-(length:--bw)",
        )}
      >
        <div className="flex flex-wrap items-center gap-3 font-pixel text-[0.7rem] uppercase tracking-widest">
          {featured && (
            <span className="bg-amber px-2 py-0.5 text-bg">
              ★ {tr(t.featured, lang)}
            </span>
          )}
          <span className="flex items-center gap-2 text-muted">
            <span
              aria-hidden
              className={cn(
                "inline-block size-2",
                project.status === "live" ? "bg-accent" : "bg-muted",
              )}
            />
            {tr(project.status === "live" ? t.live : t.inDevelopment, lang)}
          </span>
        </div>

        <div>
          <h3
            id={titleId}
            className={cn(
              "text-fg",
              featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl",
            )}
          >
            <GlitchText text={project.title} />
          </h3>
          <p className="mt-3 font-pixel text-xs uppercase tracking-wider text-accent-text sm:text-sm">
            {tr(project.tagline, lang)}
          </p>
        </div>

        <p className="text-sm text-muted sm:text-base">
          {tr(project.description, lang)}
        </p>

        {project.stat && (
          <p className="flex items-baseline gap-3 border-l-(length:--bw-thick) border-accent pl-4">
            <span className="font-pixel text-4xl text-fg sm:text-5xl">
              {project.stat.value}
            </span>
            <span className="font-pixel text-xs uppercase tracking-widest text-muted">
              {tr(project.stat.label, lang)}
            </span>
          </p>
        )}

        {project.role && (
          <p className="text-xs uppercase tracking-wider text-muted">
            {tr(project.role, lang)}
          </p>
        )}

        <ul aria-label={tr(t.stack, lang)} className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>

        {(project.links.live || project.links.github) && (
          <div className="mt-auto flex flex-wrap gap-4 pt-2">
            {project.links.live && (
              <Button href={project.links.live} size="sm" external={newTab}>
                {tr(t.visit, lang)}
                <PixelIcon name="arrowUpRight" className="h-2.5 w-auto" />
              </Button>
            )}
            {project.links.github && (
              <Button
                href={project.links.github}
                size="sm"
                variant="outline"
                external={newTab}
              >
                {tr(t.code, lang)}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Screenshot({ project, lang }: { project: Project; lang: Lang }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2 md:aspect-auto md:min-h-80">
        <Image
          src={project.image.src}
          alt={tr(project.image.alt, lang)}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover object-top transition-[filter] duration-(--dur) group-hover:[filter:drop-shadow(-3px_0_0_var(--c-pink))_drop-shadow(3px_0_0_var(--c-cyan))]"
        />
      </div>
    );
  }

  // Placeholder until a screenshot is added in data/projects.ts
  return (
    <div
      role="img"
      aria-label={`${project.title}: ${tr(ui.projects.screenshotSoon, lang)}`}
      className="relative flex aspect-[16/10] flex-col items-center justify-center gap-3 overflow-hidden bg-surface-2 md:aspect-auto md:min-h-80"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background:repeating-linear-gradient(90deg,var(--c-surface-1)_0_14px,var(--c-surface-2)_14px_28px)] group-hover:[background:repeating-linear-gradient(90deg,var(--c-surface-1)_0_14px,var(--c-surface-3)_14px_28px)]"
      />
      <p className="relative font-pixel text-2xl uppercase tracking-[0.3em] text-accent-text sm:text-3xl">
        <GlitchText text={tr(ui.projects.noSignal, lang)} always />
      </p>
      <p className="relative font-mono text-[0.7rem] uppercase tracking-widest text-muted">
        TODO: /public/projects/{project.slug}.png
      </p>
    </div>
  );
}
