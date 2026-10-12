// UI copy. Every string is { en, mn }; edit either side freely.
// TODO: Mongolian copy is a first draft. Read it through and fix the tone.
export const ui = {
  skipLink: { en: "Skip to content", mn: "Үндсэн агуулга руу шилжих" },
  nav: [
    { href: "#work", label: { en: "Work", mn: "Төслүүд" } },
    { href: "#loadout", label: { en: "Loadout", mn: "Зэвсэглэл" } },
    { href: "#profile", label: { en: "Profile", mn: "Профайл" } },
    { href: "#games", label: { en: "Games", mn: "Тоглоом" } },
    { href: "#contact", label: { en: "Contact", mn: "Холбоо" } },
  ],
  status: { en: "Open to work", mn: "Ажилд нээлттэй" },
  langToggle: { en: "Language", mn: "Хэл" },
  langNames: { en: "English", mn: "Монгол" },

  hero: {
    // Terminal lines stay in English on purpose (it's "code").
    terminal: [
      "> boot portfolio.exe",
      "[ok] region: ulaanbaatar",
      "[ok] stack: next / ts / prisma",
      "[ok] player 1 found",
    ],
    eyebrow: { en: "Player 1", mn: "Тоглогч 1" },
    tagline: {
      en: "Full-stack dev. Gamer. Builds things that ship.",
      mn: "Full-stack хөгжүүлэгч. Геймер. Санааг бодит бүтээгдэхүүн болгодог.",
    },
    intro: {
      en: "Junior full-stack developer from Ulaanbaatar. Pinecone Academy grad, led a team of three across two projects. Open to roles in Mongolia, remote and freelance.",
      mn: "Улаанбаатарын junior full-stack хөгжүүлэгч. Pinecone Academy төгссөн, хоёр төсөл дээр гурван хүнтэй багийг ахалсан. Монгол дахь ажлын байр, remote болон freelance ажилд нээлттэй.",
    },
    ctaWork: { en: "View work", mn: "Төслүүд үзэх" },
    ctaContact: { en: "Contact", mn: "Холбогдох" },
    pressStart: { en: "Press start", mn: "Start дар" },
  },

  projects: {
    label: { en: "01 // Work", mn: "01 // Ажил" },
    title: { en: "Projects", mn: "Төслүүд" },
    featured: { en: "Featured", mn: "Онцлох" },
    live: { en: "Live", mn: "Ажиллаж байна" },
    inDevelopment: { en: "In development", mn: "Хөгжүүлж байна" },
    visit: { en: "Live site", mn: "Сайт үзэх" },
    code: { en: "Code", mn: "Код" },
    noSignal: { en: "No signal", mn: "Дохио алга" },
    screenshotSoon: {
      en: "screenshot coming soon",
      mn: "дэлгэцийн зураг удахгүй",
    },
    stack: { en: "Stack", mn: "Технологи" },
    opensInNewTab: {
      en: "(opens in a new tab)",
      mn: "(шинэ цонхонд нээгдэнэ)",
    },
  },

  loadout: {
    label: { en: "02 // Stack", mn: "02 // Технологи" },
    title: { en: "Loadout", mn: "Зэвсэглэл" },
    slots: { en: "Slots equipped", mn: "Тоноглосон слот" },
    equipped: { en: "Equipped", mn: "Тоноглосон" },
    backpack: { en: "Also in the backpack", mn: "Цүнхэнд бас бий" },
  },

  profile: {
    label: { en: "03 // About", mn: "03 // Тухай" },
    title: { en: "Player profile", mn: "Тоглогчийн профайл" },
    stats: { en: "Stats", mn: "Үзүүлэлт" },
    bars: { en: "Attributes", mn: "Чадвар" },
    avatarAlt: {
      en: "Pixel-art avatar of Turuu",
      mn: "Төрөөгийн пиксел аватар",
    },
  },

  games: {
    label: { en: "04 // Library", mn: "04 // Сан" },
    title: { en: "Game library", mn: "Тоглоомын сан" },
    intro: {
      en: "Where the reflexes, teamwork and tilt resistance come from.",
      mn: "Рефлекс, багаар ажиллах чадвар, тайван байх ур чадвар эндээс ирсэн.",
    },
    rank: { en: "Rank", mn: "Ранк" },
    hours: { en: "Hours", mn: "Цаг" },
    titles: { en: "titles", mn: "тоглоом" },
  },

  offscreen: {
    label: { en: "05 // AFK", mn: "05 // AFK" },
    title: { en: "Off-screen", mn: "Дэлгэцийн гадна" },
  },

  contact: {
    label: { en: "06 // Contact", mn: "06 // Холбоо" },
    title: { en: "Start a co-op", mn: "Хамтдаа тоглоё" },
    intro: {
      en: "Hiring in Ulaanbaatar, building something remote, or need a freelancer who ships? Send a message.",
      mn: "Улаанбаатарт хөгжүүлэгч хайж байна уу, remote баг бүрдүүлж байна уу, эсвэл хийснээ дуусгадаг freelancer хэрэгтэй юу? Зурвас үлдээгээрэй.",
    },
    command: "contact --list",
    copy: { en: "Copy", mn: "Хуулах" },
    copied: { en: "Copied!", mn: "Хуулсан!" },
    copyFailed: {
      en: "Copy failed. Select the address instead.",
      mn: "Хуулж чадсангүй. Хаягаа гараар сонгоно уу.",
    },
    copyEmail: { en: "Copy email address", mn: "Имэйл хаяг хуулах" },
    sendEmail: { en: "Send email", mn: "Имэйл илгээх" },
  },

  footer: {
    builtWith: {
      en: "Built with Next.js. Deployed on Vercel.",
      mn: "Next.js дээр бүтээж, Vercel дээр байршуулсан.",
    },
    insertCoin: { en: "Insert coin", mn: "Зоос хийх" },
    paletteFlipped: {
      en: "Palette flipped. Player 2 colors.",
      mn: "Өнгө солигдлоо. Тоглогч 2-ын өнгө.",
    },
    paletteRestored: { en: "Palette restored.", mn: "Анхны өнгө сэргэлээ." },
    konamiHint: { en: "or try the code", mn: "эсвэл кодыг оролдоод үз" },
    backToTop: { en: "Back to top", mn: "Дээш буцах" },
  },
};
