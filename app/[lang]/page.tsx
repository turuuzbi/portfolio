import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
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
      </main>
    </>
  );
}
