import { offscreen } from "@/data/offscreen";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { Reveal } from "@/components/effects/Reveal";
import { PixelIcon } from "@/components/ui/PixelIcon";

export function OffScreen({ lang }: { lang: Lang }) {
  const t = ui.offscreen;

  return (
    <section
      id="afk"
      data-accent="purple"
      aria-labelledby="afk-title"
      className="border-y-(length:--bw) border-surface-2 bg-surface-1/60 py-16 sm:py-20"
    >
      <div className="container-page grid gap-10 md:grid-cols-[14rem_1fr]">
        <header>
          <p className="mb-3 font-pixel text-xs uppercase tracking-[0.3em] text-accent-text">
            {tr(t.label, lang)}
          </p>
          <h2
            id="afk-title"
            className="heading-shadow text-3xl text-fg sm:text-4xl"
          >
            {tr(t.title, lang)}
          </h2>
        </header>

        <Reveal>
          <ul className="grid gap-6 sm:grid-cols-2">
            {offscreen.map((item) => (
              <li key={tr(item.title, "en")} className="group flex gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center border-(length:--bw) border-surface-3 bg-bg text-fg transition-[border-color,box-shadow] duration-(--dur-fast) group-hover:border-accent group-hover:shadow-[0_0_18px_-2px_var(--accent)]">
                  <PixelIcon name={item.icon} className="h-7 w-auto max-w-10" />
                </span>
                <div>
                  <h3 className="font-pixel text-sm uppercase text-fg">
                    {tr(item.title, lang)}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {tr(item.text, lang)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
