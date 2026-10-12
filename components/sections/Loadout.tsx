import { backpack, skills, totalSlots } from "@/data/skills";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { Reveal } from "@/components/effects/Reveal";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const pad = (n: number) => String(n).padStart(2, "0");

export function Loadout({ lang }: { lang: Lang }) {
  const t = ui.loadout;
  const empty = Math.max(0, totalSlots - skills.length);

  return (
    <section
      id="loadout"
      data-accent="purple"
      aria-labelledby="loadout-title"
      className="py-(--section-y)"
    >
      <div className="container-page">
        <SectionHeading
          id="loadout-title"
          label={tr(t.label, lang)}
          title={tr(t.title, lang)}
        />

        <Reveal>
          <div className="border-(length:--bw) border-surface-3 bg-surface-1">
            <p className="flex items-center justify-between border-b-(length:--bw) border-surface-3 px-4 py-2 font-pixel text-[0.7rem] uppercase tracking-widest text-muted">
              <span>{tr(t.slots, lang)}</span>
              <span className="text-accent-text">
                {pad(skills.length)} / {pad(totalSlots)}
              </span>
            </p>

            <ul className="grid grid-cols-2 gap-px bg-surface-3 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, i) => (
                <li
                  key={skill.name}
                  className="group relative flex min-h-44 flex-col gap-3 bg-surface-1 p-4 transition-colors duration-(--dur-fast) hover:bg-surface-2 sm:p-5"
                >
                  <span
                    aria-hidden
                    className="absolute right-3 top-3 font-pixel text-[0.6rem] text-muted"
                  >
                    {pad(i + 1)}
                  </span>
                  <span className="flex size-14 items-center justify-center border-(length:--bw) border-surface-3 text-fg transition-[border-color,box-shadow] duration-(--dur-fast) group-hover:border-accent group-hover:shadow-[0_0_18px_-2px_var(--accent)]">
                    <PixelIcon
                      name={skill.icon}
                      className="h-7 w-auto max-w-9"
                    />
                  </span>
                  <span className="font-pixel text-[0.65rem] uppercase tracking-widest text-accent-text">
                    {tr(skill.type, lang)}
                  </span>
                  <span className="font-pixel text-base uppercase text-fg sm:text-lg">
                    {skill.name}
                  </span>
                  <span className="text-xs leading-relaxed text-muted">
                    {tr(skill.use, lang)}
                  </span>
                </li>
              ))}
              {Array.from({ length: empty }, (_, i) => (
                <li
                  key={`empty-${i}`}
                  aria-hidden
                  className={`${i === 0 ? "block" : "hidden sm:block"} min-h-20 bg-bg [background:repeating-linear-gradient(135deg,var(--c-bg)_0_6px,var(--c-surface-1)_6px_8px)] sm:min-h-44`}
                />
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <h3 className="mr-2 font-pixel text-xs uppercase tracking-widest text-muted">
            {tr(t.backpack, lang)}:
          </h3>
          <ul className="flex flex-wrap gap-2">
            {backpack.map((item) => (
              <li key={item}>
                <Tag>{item}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
