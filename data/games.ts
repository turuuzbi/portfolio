import type { Localized } from "@/lib/i18n";
import type { PixelIconName } from "./icons";

export type Game = {
  title: string;
  /** Short name on the tile. */
  short: string;
  tag: Localized;
  icon: PixelIconName;
  /** e.g. "Global Elite", "Mythic". */
  rank: string;
  /** e.g. "2,400". */
  hours: string;
};

export const games: Game[] = [
  {
    title: "Counter-Strike 2",
    short: "CS2",
    tag: {
      en: "Where the aim training goes now.",
      mn: "Онолтын дасгал одоо энд.",
    },
    icon: "crosshair",
    rank: "TODO",
    hours: "TODO",
  },
  {
    title: "Counter-Strike: Global Offensive",
    short: "CS:GO",
    tag: {
      en: "Where the muscle memory was built.",
      mn: "Булчингийн ой санамж эндээс.",
    },
    icon: "timer",
    rank: "TODO",
    hours: "TODO",
  },
  {
    title: "Counter-Strike 1.6",
    short: "CS 1.6",
    tag: { en: "The internet-café classic.", mn: "Интернет кафены сонгодог." },
    icon: "crt",
    rank: "TODO",
    hours: "TODO",
  },
  {
    title: "Valorant",
    short: "Valorant",
    tag: {
      en: "Tactical shooter, with abilities.",
      mn: "Ур чадвартай тактикийн буудлага.",
    },
    icon: "diamond",
    rank: "TODO",
    hours: "TODO",
  },
  {
    title: "Mobile Legends: Bang Bang",
    short: "MLBB",
    tag: {
      en: "The ranked grind, on mobile.",
      mn: "Утсан дээрх ranked grind.",
    },
    icon: "sword",
    rank: "TODO",
    hours: "TODO",
  },
  {
    title: "Minecraft",
    short: "Minecraft",
    tag: {
      en: "Infinite sandbox, zero deadlines.",
      mn: "Хязгааргүй sandbox, deadline алга.",
    },
    icon: "block",
    rank: "TODO",
    hours: "TODO",
  },
  {
    title: "Dead by Daylight",
    short: "DBD",
    tag: {
      en: "Gens, hooks and bad decisions.",
      mn: "Генератор, дэгээ, буруу шийдвэрүүд.",
    },
    icon: "hook",
    rank: "TODO",
    hours: "TODO",
  },
  {
    title: "Left 4 Dead",
    short: "L4D",
    tag: {
      en: "Co-op chaos with the squad.",
      mn: "Найзуудтайгаа co-op эмх замбараагүй.",
    },
    icon: "medkit",
    rank: "TODO",
    hours: "TODO",
  },
];
