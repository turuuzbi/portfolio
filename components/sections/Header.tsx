import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { langPath, langs, tr, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Header({ lang }: { lang: Lang }) {
  return (
    <header
      data-accent="pink"
      className="sticky top-0 z-50 border-b-(length:--bw) border-surface-2 bg-bg/90 backdrop-blur-sm"
    >
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-pixel text-sm uppercase tracking-widest text-fg hover:text-accent-text"
        >
          {site.name}
          <span className="text-accent-text">.exe</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-6 font-pixel text-xs uppercase tracking-widest">
            {ui.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted transition-colors hover:text-accent-text"
                >
                  {tr(item.label, lang)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {site.openToWork && (
            <p className="hidden items-center gap-2 font-pixel text-[0.65rem] uppercase tracking-widest text-muted sm:flex">
              <span aria-hidden className="blink inline-block size-2 bg-cyan" />
              {tr(ui.status, lang)}
            </p>
          )}
          <LangToggle lang={lang} />
        </div>
      </div>
    </header>
  );
}

function LangToggle({ lang }: { lang: Lang }) {
  return (
    <nav aria-label={tr(ui.langToggle, lang)}>
      <ul className="flex border-(length:--bw) border-surface-3 font-pixel text-[0.7rem] uppercase">
        {langs.map((l) => (
          <li key={l}>
            <a
              href={langPath(l)}
              hrefLang={l}
              lang={l}
              aria-current={l === lang ? "page" : undefined}
              title={tr(ui.langNames, l)}
              className={cn(
                "block px-2 py-1",
                l === lang
                  ? "bg-accent text-on-accent"
                  : "text-muted hover:text-accent-text",
              )}
            >
              {l}
              <span className="sr-only"> {tr(ui.langNames, l)}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
