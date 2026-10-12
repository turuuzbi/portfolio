import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { ui } from "@/data/ui";
import { isLang, langs, tr } from "@/lib/i18n";

export const alt = `${site.name}: ${tr(site.role, "en")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const monocraft = await readFile(
  join(process.cwd(), "assets/og/Monocraft.ttf"),
);

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLang(raw) ? raw : "en";
  const pink = "#ff2d95";
  const cyan = "#00e5ff";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#0a0a0a",
        color: "#e8e8e8",
        fontFamily: "Monocraft",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 26,
          color: "#8a8a8a",
        }}
      >
        <span>{"> boot portfolio.exe"}</span>
        <span style={{ color: pink }}>
          {tr(ui.hero.eyebrow, lang).toUpperCase()}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            position: "relative",
            fontSize: 200,
            lineHeight: 1,
          }}
        >
          <span style={{ position: "absolute", left: -6, top: 0, color: cyan }}>
            {site.name.toUpperCase()}
          </span>
          <span style={{ color: pink }}>{site.name.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 34 }}>
          {`${site.nameNative} // ${tr(site.role, lang).toUpperCase()}`}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: 28,
        }}
      >
        <span style={{ maxWidth: 820 }}>{tr(ui.hero.tagline, lang)}</span>
        <span
          style={{
            display: "flex",
            background: pink,
            color: "#0a0a0a",
            padding: "10px 18px",
          }}
        >
          {tr(site.location, lang).split(",")[0].toUpperCase()}
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Monocraft", data: monocraft, style: "normal", weight: 400 },
      ],
    },
  );
}
