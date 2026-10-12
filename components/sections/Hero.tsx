import type { CSSProperties } from "react";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { Terminal } from "@/components/effects/Terminal";
import { Button } from "@/components/ui/Button";
import { GlitchText } from "@/components/ui/GlitchText";
import { PixelIcon, icons } from "@/components/ui/PixelIcon";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero({ lang }: { lang: Lang }) {
  const t = ui.hero;
  return (
    <section
      id="top"
      data-accent="pink"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-3.5rem)] flex-col overflow-hidden"
    >
      <div aria-hidden className="floor -z-10" />

      <div className="container-page grid flex-1 content-center gap-x-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div
          aria-hidden
          className="mb-10 w-full max-w-sm self-start border-(length:--bw) border-surface-3 bg-surface-1/80 sm:mb-14 lg:col-start-2 lg:row-start-1 lg:mt-4 lg:mb-0"
        >
          <p className="flex items-center justify-between border-b-(length:--bw) border-surface-3 px-3 py-1.5 font-pixel text-[0.65rem] uppercase tracking-widest text-muted">
            <span>~/turuu</span>
            <span className="flex gap-1.5">
              <span className="size-2 bg-surface-3" />
              <span className="size-2 bg-surface-3" />
              <span className="size-2 bg-accent" />
            </span>
          </p>
          <Terminal
            lines={t.terminal.map((line) => tr(line, lang))}
            className="px-3 py-3 font-mono text-xs leading-relaxed sm:text-sm"
          />
        </div>

        <div className="lg:col-start-1 lg:row-start-1">
          <p className="mb-4 inline-flex w-fit -skew-x-12 bg-accent px-3 py-1 font-pixel text-xs uppercase tracking-[0.35em] text-on-accent sm:text-sm">
            <span className="skew-x-12">{tr(t.eyebrow, lang)}</span>
          </p>

          <h1
            id="hero-title"
            className="neon-title text-[clamp(4.5rem,24vw,12.5rem)] lg:text-[clamp(4.5rem,13vw,12.5rem)] leading-[0.85] tracking-tight"
          >
            <GlitchText text={site.name} />
          </h1>

          <p className="mt-5 font-pixel text-xs uppercase tracking-[0.25em] text-muted sm:text-sm">
            <span lang="mn" className="font-mono text-sm tracking-normal text-fg normal-case sm:text-base">
              {site.nameNative}
            </span>
            <span aria-hidden className="mx-3 text-accent-text">
              {"//"}
            </span>
            {tr(site.role, lang)}
            <span aria-hidden className="mx-3 text-accent-text">
              {"//"}
            </span>
            {tr(site.location, lang)}
          </p>

          <p
            className="cut-in mt-10 max-w-3xl font-pixel text-xl uppercase leading-snug text-fg sm:text-3xl"
            style={delay(250)}
          >
            {tr(t.tagline, lang)}
          </p>

          <p
            className="cut-in mt-5 max-w-xl text-sm text-muted sm:text-base"
            style={delay(400)}
          >
            {tr(t.intro, lang)}
          </p>

          <div
            className="cut-in mt-10 flex flex-wrap items-center gap-5"
            style={delay(550)}
          >
            <Button href="#work">
              <PixelIcon grid={icons.play} className="h-3 w-auto" />
              {tr(t.ctaWork, lang)}
            </Button>
            <Button href="#contact" variant="outline">
              {tr(t.ctaContact, lang)}
            </Button>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="blink container-page pb-6 text-right font-pixel text-xs uppercase tracking-[0.4em] text-accent-text"
      >
        ▶ {tr(t.pressStart, lang)}
      </p>
    </section>
  );
}
