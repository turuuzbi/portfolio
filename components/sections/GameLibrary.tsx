import { games } from "@/data/games";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { Reveal } from "@/components/effects/Reveal";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GameLibrary({ lang }: { lang: Lang }) {
  const t = ui.games;

  return (
    <section
      id="games"
      data-accent="cyan"
      aria-labelledby="games-title"
      className="py-(--section-y)"
    >
      <div className="container-page">
        <SectionHeading
          id="games-title"
          label={tr(t.label, lang)}
          title={tr(t.title, lang)}
        />
        <p className="-mt-6 mb-10 max-w-xl text-sm text-muted sm:text-base">
          {tr(t.intro, lang)}{" "}
          <span className="font-pixel text-xs uppercase text-accent-text">
            [{games.length} {tr(t.titles, lang)}]
          </span>
        </p>

        <Reveal>
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {games.map((game) => (
              <li key={game.title} className="game-tile group">
                <article
                  aria-label={game.title}
                  className="flex h-full flex-col border-(length:--bw) border-surface-3 bg-surface-1 transition-[transform,border-color,box-shadow] duration-(--dur-fast) ease-(--ease-hard) group-hover:-translate-y-1 group-hover:border-accent group-hover:shadow-[4px_4px_0_0_var(--accent),0_0_26px_-6px_var(--accent)]"
                >
                  <p className="flex items-center justify-between border-b-(length:--bw) border-surface-3 bg-surface-2 px-3 py-1.5 font-pixel text-[0.65rem] uppercase tracking-widest text-fg group-hover:border-accent">
                    <span className="truncate">{game.short}</span>
                    <span
                      aria-hidden
                      className="text-accent-text opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      ▶ Play
                    </span>
                  </p>

                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-bg [background-image:radial-gradient(color-mix(in_srgb,var(--accent)_18%,transparent)_1px,transparent_1px)] [background-size:10px_10px]">
                    <PixelIcon
                      name={game.icon}
                      className="game-tile__icon h-1/2 w-auto max-w-[60%] text-fg"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-2 border-t-(length:--bw) border-surface-3 p-3 sm:p-4">
                    <h3 className="font-pixel text-sm normal-case leading-tight text-fg sm:text-base">
                      {game.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted">
                      {tr(game.tag, lang)}
                    </p>
                    <dl className="mt-auto grid grid-cols-2 gap-2 pt-2 font-pixel text-[0.6rem] uppercase tracking-widest">
                      <div>
                        <dt className="text-muted">{tr(t.rank, lang)}</dt>
                        <dd className="mt-0.5 text-accent-text">{game.rank}</dd>
                      </div>
                      <div>
                        <dt className="text-muted">{tr(t.hours, lang)}</dt>
                        <dd className="mt-0.5 text-accent-text">
                          {game.hours}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
