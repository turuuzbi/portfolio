import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { PaletteSwitch } from "@/components/effects/PaletteSwitch";

export function Footer({ lang }: { lang: Lang }) {
  const t = ui.footer;

  return (
    <footer
      data-accent="amber"
      className="border-t-(length:--bw) border-surface-2"
    >
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 text-xs text-muted">
          <p className="font-pixel uppercase tracking-widest text-fg">
            © {site.copyrightYear} {site.name}
            <span className="text-accent-text">{" // "}</span>
            <span lang="mn" className="font-mono normal-case tracking-normal">
              {site.nameNative}
            </span>
          </p>
          <p>{tr(t.builtWith, lang)}</p>
          <a
            href="#top"
            className="w-fit uppercase tracking-widest underline decoration-surface-3 underline-offset-4 hover:text-accent-text"
          >
            {tr(t.backToTop, lang)} ↑
          </a>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <PaletteSwitch
            labels={{
              insertCoin: tr(t.insertCoin, lang),
              flipped: tr(t.paletteFlipped, lang),
              restored: tr(t.paletteRestored, lang),
            }}
          />
          <p className="font-pixel text-[0.6rem] uppercase tracking-widest text-muted">
            {tr(t.konamiHint, lang)} <span aria-hidden>↑↑↓↓←→←→ B A</span>
            <span className="sr-only">
              up, up, down, down, left, right, left, right, B, A
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
