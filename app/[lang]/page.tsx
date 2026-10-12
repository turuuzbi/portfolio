import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { GameLibrary } from "@/components/sections/GameLibrary";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Loadout } from "@/components/sections/Loadout";
import { OffScreen } from "@/components/sections/OffScreen";
import { PlayerProfile } from "@/components/sections/PlayerProfile";
import { Projects } from "@/components/sections/Projects";
import { Divider } from "@/components/ui/Divider";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <>
      <Header lang={lang} />
      <main id="main">
        <Hero lang={lang} />
        <Divider accent="pink" />
        <Projects lang={lang} />
        <Divider accent="cyan" />
        <Loadout lang={lang} />
        <Divider accent="purple" />
        <PlayerProfile lang={lang} />
        <Divider accent="pink" />
        <GameLibrary lang={lang} />
        <OffScreen lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
