import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { isLang, langs, tr } from "@/lib/i18n";
import { CrtOverlay } from "@/components/effects/CrtOverlay";
import "../globals.css";

// Every route must prerender at build time.
export const ensureStatic = "navigation";

const monocraft = localFont({
  src: [
    { path: "../fonts/Monocraft-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Monocraft-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-monocraft",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

const jetbrains = localFont({
  src: [
    { path: "../fonts/JetBrainsMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/JetBrainsMono-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} (${site.nameNative}): Full-Stack Developer`,
  description: tr(ui.hero.intro, "en"),
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} className={`${monocraft.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[70] bg-accent px-4 py-2 font-pixel uppercase text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {tr(ui.skipLink, lang)}
        </a>
        {children}
        <CrtOverlay />
      </body>
    </html>
  );
}
