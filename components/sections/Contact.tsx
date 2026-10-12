import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { tr, type Lang } from "@/lib/i18n";
import { CopyButton } from "@/components/effects/CopyButton";
import { Reveal } from "@/components/effects/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const prompt = "turuu@ub:~$";
const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export function Contact({ lang }: { lang: Lang }) {
  const t = ui.contact;
  const newTab = tr(ui.projects.opensInNewTab, lang);
  const rows = [
    { key: "github", href: site.links.github },
    { key: "linkedin", href: site.links.linkedin },
  ];

  return (
    <section
      id="contact"
      data-accent="pink"
      aria-labelledby="contact-title"
      className="py-(--section-y)"
    >
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          label={tr(t.label, lang)}
          title={tr(t.title, lang)}
        />
        <p className="-mt-6 mb-10 max-w-xl text-sm text-muted sm:text-base">
          {tr(t.intro, lang)}
        </p>

        <Reveal>
          <div className="max-w-3xl border-(length:--bw) border-accent bg-surface-1 shadow-[6px_6px_0_0_var(--accent),0_0_40px_-12px_var(--accent)]">
            <p className="flex items-center justify-between border-b-(length:--bw) border-surface-3 px-4 py-2 font-pixel text-[0.65rem] uppercase tracking-widest text-muted">
              <span>contact.sh</span>
              <span className="flex gap-1.5" aria-hidden>
                <span className="size-2 bg-surface-3" />
                <span className="size-2 bg-surface-3" />
                <span className="size-2 bg-accent" />
              </span>
            </p>

            <div className="flex flex-col gap-4 p-4 font-mono text-sm sm:p-6 sm:text-base">
              <p>
                <span className="text-accent-text">{prompt}</span>{" "}
                <span className="text-fg">{t.command}</span>
              </p>

              <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-[6rem_1fr]">
                <dt className="text-muted">email</dt>
                <dd className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-fg underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text"
                  >
                    {site.email}
                  </a>
                  <CopyButton
                    value={site.email}
                    labels={{
                      copy: tr(t.copy, lang),
                      copied: tr(t.copied, lang),
                      failed: tr(t.copyFailed, lang),
                      aria: tr(t.copyEmail, lang),
                    }}
                  />
                </dd>
                {rows.map((row) => (
                  <div key={row.key} className="contents">
                    <dt className="text-muted">{row.key}</dt>
                    <dd>
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-fg underline decoration-surface-3 decoration-2 underline-offset-4 hover:text-accent-text hover:decoration-accent"
                      >
                        {strip(row.href)}
                        <span className="sr-only"> {newTab}</span>
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>

              <p aria-hidden>
                <span className="text-accent-text">{prompt}</span>{" "}
                <span className="caret" />
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10">
          <Button href={`mailto:${site.email}`}>{tr(t.sendEmail, lang)}</Button>
        </div>
      </div>
    </section>
  );
}
