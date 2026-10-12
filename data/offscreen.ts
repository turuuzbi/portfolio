import type { Localized } from "@/lib/i18n";
import type { PixelIconName } from "./icons";

export const offscreen: {
  title: Localized;
  text: Localized;
  icon: PixelIconName;
}[] = [
  {
    title: { en: "Fixed gear", mn: "Fixed gear" },
    text: {
      en: "Riding through Ulaanbaatar. One gear, any season.",
      mn: "Улаанбаатараар унадаг. Нэг араа, ямар ч улиралд.",
    },
    icon: "bike",
  },
  {
    title: { en: "PC builds", mn: "PC угсралт" },
    text: {
      en: "Building and diagnosing PCs. Friends call, I bring a screwdriver.",
      mn: "Компьютер угсарч, оношилдог. Найзууд залгахад халиваа аваад очдог.",
    },
    icon: "chip",
  },
  {
    title: { en: "Anime & manga", mn: "Аниме ба манга" },
    text: {
      en: "Reading it, and now publishing it with Manga Yume.",
      mn: "Уншдаг, одоо Manga Yume-ээр нийтэлдэг.",
    },
    icon: "bubble",
  },
  {
    title: { en: "Music", mn: "Хөгжим" },
    text: {
      en: "Always on while coding.",
      mn: "Код бичихэд үргэлж асаалттай.",
    }, // TODO: add genres
    icon: "note",
  },
];
