import type { Localized } from "@/lib/i18n";

export type ProjectStatus = "live" | "in-development";

export type Project = {
  slug: string;
  title: string;
  featured?: boolean;
  status: ProjectStatus;
  /** One line under the title. */
  tagline: Localized;
  description: Localized;
  stack: string[];
  /** Optional proof-of-work number shown on the card. */
  stat?: { value: string; label: Localized };
  role?: Localized;
  links: { live?: string; github?: string };
  /** Put screenshots in /public/projects. Without one, the card shows a "NO SIGNAL" placeholder. */
  image?: { src: string; alt: Localized };
};

export const projects: Project[] = [
  {
    slug: "manga-yume",
    title: "Manga Yume",
    featured: true,
    status: "live",
    tagline: { en: "A manga reading site with real readers." },
    description: {
      // TODO: name 1–2 features you're proud of (reader, search, library…)
      en: "Find a title, open a chapter, read. A fast, no-clutter reader built with React and TypeScript, shipped on Vercel and used by about 1,000 real readers.",
    },
    stack: ["React", "TypeScript", "Vercel"], // TODO: add the rest of the stack (styling, data source, …)
    stat: { value: "~1,000", label: { en: "real users" } },
    role: undefined, // TODO: e.g. { en: "Solo: design, build, deploy" }
    links: {
      live: "https://manga-yume.vercel.app",
      github: undefined, // TODO: add repo URL (or leave undefined if private)
    },
    image: undefined, // TODO: { src: "/projects/manga-yume.png", alt: { en: "Manga Yume reader view" } }
  },
  {
    slug: "chronos",
    title: "Chronos",
    status: "live", // TODO: confirm status
    tagline: { en: "Scheduling and workforce management." },
    description: {
      // TODO: confirm features
      en: "Shifts, availability and team schedules in one dashboard, so managers stop juggling spreadsheets and group chats.",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"], // TODO: confirm
    role: { en: "Team lead (team of 3)" }, // TODO: confirm which projects you led
    links: { live: undefined, github: undefined }, // TODO
  },
  {
    slug: "trip",
    title: "Trip",
    status: "live", // TODO: confirm status
    tagline: { en: "Itinerary builder." },
    description: {
      // TODO: confirm features
      en: "Plan a trip day by day: drop in places, set times and keep the whole itinerary in one shareable view.",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"], // TODO: confirm
    role: { en: "Team lead (team of 3)" }, // TODO: confirm
    links: { live: undefined, github: undefined }, // TODO
  },
  {
    slug: "bizon",
    title: "Bizon",
    status: "in-development",
    tagline: { en: "E-commerce, in development." },
    description: {
      // TODO: confirm features
      en: "A storefront with product catalog, cart and checkout, built on a typed Next.js + Prisma stack.",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"], // TODO: confirm
    links: { live: undefined, github: undefined }, // TODO
  },
];
