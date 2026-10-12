import type { Localized } from "@/lib/i18n";

// One place for identity + contact info.
export const site = {
  name: "Turuu",
  nameNative: "Төрөө",
  handle: "turuuzbi",
  role: {
    en: "Full-Stack Developer",
    mn: "Full-Stack хөгжүүлэгч",
  } as Localized,
  location: {
    en: "Ulaanbaatar, Mongolia",
    mn: "Улаанбаатар, Монгол",
  } as Localized,
  // Production domain (canonical URLs, OG image, sitemap). Update if you add a custom domain.
  url: "https://turuu-portfolio.vercel.app",
  email: "turuuzbi@gmail.com",
  links: {
    github: "https://github.com/turuuzbi",
    instagram: "https://www.instagram.com/turuk_ii",
  },
  openToWork: true,
  copyrightYear: 2026,
} as const;
