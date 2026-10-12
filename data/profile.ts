import type { Localized } from "@/lib/i18n";

export const profile = {
  bio: {
    en: "Started with games, stayed for the code. Pinecone Academy's full-stack program taught me to ship fast with a team: I led three people across two projects, from database schema to deploy. Now looking for a team where I can level up and ship real products.",
    mn: "Тоглоомоос эхэлж, кодонд үлдсэн. Pinecone Academy-ийн full-stack хөтөлбөр надад багаараа хурдан бүтээж гаргахыг сургасан: хоёр төсөл дээр гурван хүнтэй багийг database schema-аас deploy хүртэл ахалсан. Одоо level up хийж, бодит бүтээгдэхүүн гаргах багаа хайж байна.",
  } as Localized,

  // Character sheet rows
  stats: [
    {
      key: "Class",
      value: { en: "Full-Stack Dev", mn: "Full-Stack хөгжүүлэгч" },
    },
    {
      key: "LVL",
      value: { en: "Junior, XP rising", mn: "Junior, XP өсөж байна" },
    },
    { key: "Origin", value: { en: "Ulaanbaatar, MN", mn: "Улаанбаатар, MN" } },
    { key: "Guild", value: { en: "Pinecone Academy", mn: "Pinecone Academy" } },
    {
      key: "Party",
      value: { en: "Team lead, 3 players", mn: "Багийн ахлагч, 3 тоглогч" },
    },
    {
      key: "Lang",
      value: {
        en: "Mongolian (native), English (IELTS 8)",
        mn: "Монгол (төрөлх), Англи (IELTS 8)",
      },
    },
    { key: "HP", value: { en: "Powered by caffeine", mn: "Кофеины хүчээр" } },
    { key: "MP", value: { en: "Music on loop", mn: "Хөгжим тасралтгүй" } },
  ] satisfies { key: string; value: Localized }[],

  // Attribute bars, 0–10. Playful, not a skill audit.
  bars: [
    { key: { en: "Shipping", mn: "Гаргах" }, value: 9 },
    { key: { en: "Debugging", mn: "Debug" }, value: 8 },
    { key: { en: "Teamwork", mn: "Багаар" }, value: 9 },
    { key: { en: "Aim", mn: "Онох" }, value: 7 }, // TODO: be honest
    { key: { en: "Sleep", mn: "Нойр" }, value: 3 },
  ] satisfies { key: Localized; value: number }[],
};
