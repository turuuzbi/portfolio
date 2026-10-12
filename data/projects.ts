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
    tagline: {
      en: "A manga reading site with real readers.",
      mn: "Бодит уншигчидтай манга унших сайт.",
    },
    description: {
      // TODO: name 1–2 features you're proud of (reader, search, library…)
      en: "Find a title, open a chapter, read. A fast, no-clutter reader built with React and TypeScript, shipped on Vercel and used by about 1,000 real readers.",
      mn: "Гарчгаа олоод, бүлгээ нээгээд уншина. React, TypeScript дээр бүтээж Vercel дээр гаргасан, 1,000 орчим бодит уншигчтай хурдан, цэвэрхэн манга уншигч.",
    },
    stack: ["React", "TypeScript", "Vercel"], // TODO: add the rest of the stack (styling, data source, …)
    stat: {
      value: "~1,000",
      label: { en: "real users", mn: "бодит хэрэглэгч" },
    },
    role: undefined, // TODO: e.g. { en: "Solo: design, build, deploy", mn: "Ганцаараа: дизайн, код, deploy" }
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
    tagline: {
      en: "Scheduling and workforce management.",
      mn: "Ажлын хуваарь, ажилтны менежмент.",
    },
    description: {
      // TODO: confirm features
      en: "Shifts, availability and team schedules in one dashboard, so managers stop juggling spreadsheets and group chats.",
      mn: "Ээлж, ажилтнуудын сул цаг, багийн хуваарийг нэг самбарт. Менежерүүд Excel, группийн чатны дунд төөрөхөө болино.",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"], // TODO: confirm
    role: { en: "Team lead, team of 3", mn: "Багийн ахлагч, 3 хүнтэй баг" }, // TODO: confirm which projects you led
    links: { live: undefined, github: undefined }, // TODO
  },
  {
    slug: "trip",
    title: "Trip",
    status: "live", // TODO: confirm status
    tagline: { en: "Itinerary builder.", mn: "Аяллын маршрут төлөвлөгч." },
    description: {
      // TODO: confirm features
      en: "Plan a trip day by day: drop in places, set times and keep the whole itinerary in one shareable view.",
      mn: "Аяллаа өдөр өдрөөр нь төлөвлө: газруудаа нэмж, цагаа тохируулаад бүх маршрутаа нэг дор хуваалц.",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"], // TODO: confirm
    role: { en: "Team lead, team of 3", mn: "Багийн ахлагч, 3 хүнтэй баг" }, // TODO: confirm
    links: { live: undefined, github: undefined }, // TODO
  },
  {
    slug: "bizon",
    title: "Bizon",
    status: "in-development",
    tagline: {
      en: "E-commerce, in development.",
      mn: "Цахим худалдаа, хөгжүүлж байна.",
    },
    description: {
      // TODO: confirm features
      en: "A storefront with product catalog, cart and checkout, built on a typed Next.js + Prisma stack.",
      mn: "Бүтээгдэхүүний каталог, сагс, төлбөр тооцоотой онлайн дэлгүүр. Next.js + Prisma дээр бүтээж байна.",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"], // TODO: confirm
    links: { live: undefined, github: undefined }, // TODO
  },
];
