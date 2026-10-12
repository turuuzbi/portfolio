import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const monocraft = localFont({
  src: "./fonts/Monocraft-Regular.woff2",
  variable: "--font-monocraft",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: "404 · Game over",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={monocraft.variable}>
      <body
        data-accent="pink"
        className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center"
      >
        <p className="font-pixel text-sm uppercase tracking-[0.4em] text-muted">
          Error 404
        </p>
        <h1 className="neon-title text-6xl sm:text-8xl">Game over</h1>
        <p className="font-pixel uppercase tracking-widest text-muted">
          This level doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="border-(length:--bw) border-accent bg-accent px-5 py-3 font-pixel uppercase tracking-widest text-on-accent shadow-[4px_4px_0_0_var(--c-fg)]"
        >
          ▶ Continue
        </Link>
        <div aria-hidden className="crt" />
      </body>
    </html>
  );
}
