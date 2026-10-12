import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/effects/Reveal";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PlayerProfile({ lang }: { lang: Lang }) {
  const t = ui.profile;

  return (
    <section
      id="profile"
      data-accent="pink"
      aria-labelledby="profile-title"
      className="py-(--section-y)"
    >
      <div className="container-page">
        <SectionHeading
          id="profile-title"
          label={tr(t.label, lang)}
          title={tr(t.title, lang)}
        />

        <Reveal>
          <div className="grid border-(length:--bw) border-surface-3 bg-surface-1 md:grid-cols-[18rem_1fr]">
            {/* Character card */}
            <div className="flex flex-col border-b-(length:--bw) border-surface-3 md:border-r-(length:--bw) md:border-b-0">
              <div
                role="img"
                aria-label={tr(t.avatarAlt, lang)}
                className="relative flex aspect-square flex-1 items-center justify-center md:aspect-auto md:min-h-72 overflow-hidden bg-surface-2 [background-image:linear-gradient(var(--c-surface-3)_1px,transparent_1px),linear-gradient(90deg,var(--c-surface-3)_1px,transparent_1px)] [background-size:16px_16px]"
              >
                <PixelIcon
                  name="avatar"
                  className="relative h-auto w-1/2 max-w-44 text-fg drop-shadow-[0_0_14px_var(--accent)]"
                />
                <span className="absolute left-3 top-3 bg-accent px-2 py-0.5 font-pixel text-[0.65rem] uppercase text-on-accent">
                  P1
                </span>
              </div>
              <p className="flex items-baseline justify-between gap-3 px-4 py-3">
                <span className="font-pixel text-lg uppercase text-fg">
                  {site.name}
                </span>
                <span lang="mn" className="font-mono text-sm text-muted">
                  {site.nameNative}
                </span>
              </p>
            </div>

            {/* Sheet */}
            <div className="flex flex-col gap-8 p-6 sm:p-8">
              <p className="max-w-2xl text-sm leading-relaxed text-fg sm:text-base">
                {tr(profile.bio, lang)}
              </p>

              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <h3 className="mb-3 font-pixel text-xs uppercase tracking-widest text-accent-text">
                    {tr(t.stats, lang)}
                  </h3>
                  <dl className="grid grid-cols-[5.5rem_1fr] border-t-(length:--bw) border-surface-3 text-sm">
                    {profile.stats.map((row) => (
                      <div key={row.key} className="contents">
                        <dt className="border-b border-surface-3 py-2 font-pixel text-[0.7rem] uppercase tracking-widest text-muted">
                          {row.key}
                        </dt>
                        <dd className="border-b border-surface-3 py-2 text-fg">
                          {tr(row.value, lang)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <h3 className="mb-3 font-pixel text-xs uppercase tracking-widest text-accent-text">
                    {tr(t.bars, lang)}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {profile.bars.map((bar) => (
                      <li
                        key={tr(bar.key, "en")}
                        className="grid grid-cols-[6rem_1fr] items-center gap-3"
                      >
                        <span className="font-pixel text-[0.7rem] uppercase tracking-widest text-muted">
                          {tr(bar.key, lang)}
                        </span>
                        <span
                          className="flex gap-1"
                          aria-label={`${bar.value} / 10`}
                          role="img"
                        >
                          {Array.from({ length: 10 }, (_, i) => (
                            <span
                              key={i}
                              className={cn(
                                "h-3 flex-1",
                                i < bar.value
                                  ? "bg-accent shadow-[0_0_8px_-1px_var(--accent)]"
                                  : "bg-surface-3",
                              )}
                            />
                          ))}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
