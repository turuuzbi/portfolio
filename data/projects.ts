import type { Localized } from "@/lib/i18n";

export type ProjectStatus = "live" | "completed" | "in-development";

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
      en: "A manga reading platform with real readers.",
      mn: "Бодит уншигчидтай манга унших платформ.",
    },
    description: {
      en: "Translated manga with a chapter reader, saved reading progress, bookmarks, ratings and chapter comments, plus a release schedule and news feed. Premium plans are paid through QPay. My relative translates; I build, deploy and run everything else.",
      mn: "Орчуулсан манга: бүлэг уншигч, уншсан явцаа хадгалах, bookmark, үнэлгээ, бүлгийн сэтгэгдэл, гаралтын хуваарь, мэдээ. Premium эрхийг QPay-ээр төлдөг. Орчуулгыг хамаатан маань, бусад бүх зүйлийг буюу код, deploy, удирдлагыг би хийдэг.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Cloudflare R2",
    ],
    stat: {
      value: "~1,000",
      label: { en: "real users", mn: "бодит хэрэглэгч" },
    },
    role: {
      en: "Code, deploy and site management",
      mn: "Код, deploy, сайтын удирдлага",
    },
    links: {
      live: "https://yumemanga.mn",
      github: "https://github.com/turuuzbi/manga",
    },
    image: undefined, // TODO: { src: "/projects/manga-yume.png", alt: { en: "Manga Yume reader view", mn: "Manga Yume уншигч" } }
  },
  {
    slug: "chronos",
    title: "Chronos",
    status: "completed",
    tagline: {
      en: "Appointment booking and staff scheduling.",
      mn: "Цаг захиалга, ажилтны хуваарь.",
    },
    description: {
      en: "Businesses set opening hours and weekly shifts, customers book a time slot with a specific worker, and workers apply to join a company for admins to approve. Separate dashboards for customers, workers, company admins and a super admin.",
      mn: "Байгууллага ажлын цаг, долоо хоногийн ээлжээ тохируулж, үйлчлүүлэгч тодорхой ажилтантай цаг захиална. Ажилтан байгууллагад элсэх хүсэлт илгээж, админ батална. Үйлчлүүлэгч, ажилтан, байгууллагын админ, супер админд тус тусын самбартай.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Tailwind CSS",
    ],
    role: { en: "Team lead, team of 3", mn: "Багийн ахлагч, 3 хүнтэй баг" },
    links: { github: "https://github.com/HOP-2A/chronos" },
  },
  {
    slug: "trip",
    title: "Trip",
    status: "live",
    tagline: { en: "Group trip planner.", mn: "Багаар аялал төлөвлөгч." },
    description: {
      en: "Browse ready-made trips with day-by-day plans and destination facts (currency, visa, language, must-eat food, must-see places), or build your own itinerary, invite friends and plan it together in the comments. Cover images can be AI-generated.",
      mn: "Өдөр бүрийн төлөвлөгөө, газрын мэдээлэл (валют, виз, хэл, заавал идэх хоол, үзэх газар) бүхий бэлэн аяллуудыг үз, эсвэл өөрийн маршрутаа гаргаж, найзуудаа урьж, сэтгэгдлээр хамтдаа төлөвлө. Нүүр зургийг AI-аар үүсгэж болно.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Tailwind CSS",
    ],
    role: { en: "Team lead, team of 3", mn: "Багийн ахлагч, 3 хүнтэй баг" },
    links: {
      live: "https://trip-murex-seven.vercel.app",
      github: "https://github.com/HOP-2A/trip",
    },
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
    links: {}, // TODO: add github: "https://github.com/turuuzbi/bizon" if you want it public
  },
];
