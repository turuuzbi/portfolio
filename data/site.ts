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
  // TODO: set your production domain once it is live on Vercel
  url: "https://turuu.vercel.app",
  email: "you@example.com", // TODO: add the email you want public
  links: {
    github: "https://github.com/turuuzbi",
    linkedin: "https://www.linkedin.com/in/TODO", // TODO: add LinkedIn URL
  },
  openToWork: true,
  copyrightYear: 2026,
} as const;
