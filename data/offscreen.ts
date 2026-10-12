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
    // TODO: confirm this is where Manga Yume came from
    text: {
      en: "Which is how Manga Yume happened.",
      mn: "Manga Yume ч эндээс гарсан.",
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
