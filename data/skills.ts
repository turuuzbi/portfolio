import type { Localized } from "@/lib/i18n";
import type { PixelIconName } from "./icons";

export type Skill = {
  name: string;
  /** Item type shown like a game slot ("Framework", "Database"…). */
  type: Localized;
  /** What you actually use it for, one line. */
  use: Localized;
  icon: PixelIconName;
};

export const skills: Skill[] = [
  {
    name: "Next.js",
    type: { en: "Framework", mn: "Framework" },
    use: {
      en: "App Router, server components, full-stack apps",
      mn: "App Router, server component, full-stack апп",
    },
    icon: "window",
  },
  {
    name: "TypeScript",
    type: { en: "Language", mn: "Хэл" },
    use: {
      en: "Types end to end, from database to UI",
      mn: "Өгөгдлийн сангаас UI хүртэл type-тай",
    },
    icon: "code",
  },
  {
    name: "Prisma",
    type: { en: "ORM", mn: "ORM" },
    use: {
      en: "Schemas, migrations, typed queries",
      mn: "Schema, migration, type-тай query",
    },
    icon: "relation",
  },
  {
    name: "PostgreSQL",
    type: { en: "Database", mn: "Өгөгдлийн сан" },
    use: {
      en: "Relational data, hosted on Neon",
      mn: "Neon дээрх relational өгөгдөл",
    },
    icon: "database",
  },
  {
    name: "Tailwind CSS",
    type: { en: "Styling", mn: "Загвар" },
    use: {
      en: "Design tokens and fast, consistent UI",
      mn: "Design token, хурдан, нэгэн жигд UI",
    },
    icon: "brush",
  },
  {
    name: "Git",
    type: { en: "Version control", mn: "Хувилбарын хяналт" },
    use: {
      en: "Branches, reviews and merges for a team of three",
      mn: "Гурван хүнтэй багийн branch, review, merge",
    },
    icon: "branch",
  },
  {
    name: "Vercel",
    type: { en: "Deploy", mn: "Байршуулалт" },
    use: {
      en: "Preview deploys on every push",
      mn: "Push бүрт preview deploy",
    },
    icon: "deploy",
  },
];

// TODO: confirm, add or remove
export const backpack = ["React", "Node.js", "REST APIs", "HTML / CSS", "Neon"];

/** Total inventory slots shown in the "x / y" counter. */
export const totalSlots = 12;
