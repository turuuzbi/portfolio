import type { Localized } from "@/lib/i18n";
import type { PixelIconName } from "./icons";

export type Game = {
  title: string;
  /** Short name on the tile. */
  short: string;
  tag: Localized;
  icon: PixelIconName;
  /** Optional, e.g. "Global Elite". Hidden when missing. */
  rank?: string;
  /** Optional, e.g. "2,200+". Hidden when missing. */
  hours?: string;
};

// Sorted by hours played.
export const games: Game[] = [
  {
    title: "Roblox",
    short: "Roblox",
    tag: {
      en: "Where most of the hours went.",
      mn: "Хамгийн их цаг зарцуулсан газар.",
    },
    icon: "brick",
    hours: "3,100+",
  },
  {
    title: "Counter-Strike 1.6",
    short: "CS 1.6",
    tag: { en: "The internet-café classic.", mn: "Интернет кафены сонгодог." },
    icon: "crt",
    hours: "2,200+",
  },
  {
    title: "Counter-Strike: Global Offensive",
    short: "CS:GO",
    tag: {
      en: "Where the muscle memory was built.",
      mn: "Булчингийн ой санамж эндээс.",
    },
    icon: "timer",
    hours: "700+",
  },
  {
    title: "Counter-Strike 2",
    short: "CS2",
    tag: {
      en: "Where the aim training goes now.",
      mn: "Онолтын дасгал одоо энд.",
    },
    icon: "crosshair",
    hours: "600+",
  },
  {
    title: "Valorant",
    short: "Valorant",
    tag: {
      en: "Tactical shooter, with abilities.",
      mn: "Ур чадвартай тактикийн буудлага.",
    },
    icon: "diamond",
    hours: "500+",
  },
  {
    title: "Minecraft",
    short: "Minecraft",
    tag: {
      en: "Infinite sandbox, zero deadlines.",
      mn: "Хязгааргүй sandbox, deadline алга.",
    },
    icon: "block",
    hours: "300+",
  },
  {
    title: "Mobile Legends: Bang Bang",
    short: "MLBB",
    tag: {
      en: "The ranked grind, on mobile.",
      mn: "Утсан дээрх ranked grind.",
    },
    icon: "sword",
  },
  {
    title: "Dead by Daylight",
    short: "DBD",
    tag: {
      en: "Gens, hooks and bad decisions.",
      mn: "Генератор, дэгээ, буруу шийдвэрүүд.",
    },
    icon: "hook",
  },
  {
    title: "Left 4 Dead",
    short: "L4D",
    tag: {
      en: "Co-op chaos with the squad.",
      mn: "Найзуудтайгаа co-op эмх замбараагүй.",
    },
    icon: "medkit",
  },
];
