import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { isLang, langPath, langs, tr } from "@/lib/i18n";
import { CrtOverlay } from "@/components/effects/CrtOverlay";
import "../globals.css";

// Every route must prerender at build time.
export const ensureStatic = "navigation";

const monocraft = localFont({
  src: [
    {
      path: "../fonts/Monocraft-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-monocraft",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

const jetbrains = localFont({
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
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

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : "en";
  const title = `${site.name} (${site.nameNative}) · ${tr(site.role, l)}`;
  const description = tr(ui.hero.intro, l);
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    authors: [{ name: site.name, url: site.links.github }],
    keywords: [
      "Turuu",
      "Төрөө",
      "full-stack developer",
      "Next.js",
      "TypeScript",
      "Ulaanbaatar",
      "Mongolia",
      "portfolio",
    ],
    alternates: {
      canonical: langPath(l),
      languages: { en: "/", mn: "/mn", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: langPath(l),
      siteName: `${site.name}.exe`,
      title,
      description,
      locale: l === "mn" ? "mn_MN" : "en_US",
      alternateLocale: l === "mn" ? ["en_US"] : ["mn_MN"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${monocraft.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Lets CSS know JS is on, so scroll reveals only clip when they can animate. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
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
