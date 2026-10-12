"use client";

import { useEffect, useState } from "react";
import { PixelIcon } from "@/components/ui/PixelIcon";

const konami = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

/** Flip <html data-palette> and return whether the alt palette is now on. */
function flipPalette(): boolean {
  const root = document.documentElement;
  const next = root.dataset.palette !== "alt";
  if (next) root.dataset.palette = "alt";
  else delete root.dataset.palette;
  return next;
}

type Labels = { insertCoin: string; flipped: string; restored: string };

/** "Insert coin" button + Konami code listener. Both flip the accent palette (see tokens.css). */
export function PaletteSwitch({ labels }: { labels: Labels }) {
  const [alt, setAlt] = useState(false);
  const [announce, setAnnounce] = useState("");
  const { flipped, restored } = labels;

  useEffect(() => {
    const apply = () => {
      const next = flipPalette();
      setAlt(next);
      setAnnounce(next ? flipped : restored);
    };
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      pos = key === konami[pos] ? pos + 1 : key === konami[0] ? 1 : 0;
      if (pos === konami.length) {
        pos = 0;
        apply();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipped, restored]);

  function onClick() {
    const next = flipPalette();
    setAlt(next);
    setAnnounce(next ? flipped : restored);
  }

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        aria-pressed={alt}
        className="group inline-flex items-center gap-3 border-(length:--bw) border-accent px-4 py-2 font-pixel text-xs uppercase tracking-[0.3em] text-accent-text transition-[background-color,color,box-shadow] duration-(--dur-fast) hover:bg-accent hover:text-on-accent hover:shadow-[0_0_24px_0_var(--accent)]"
      >
        <PixelIcon name="coin" className="h-4 w-auto" />
        <span className="blink group-hover:animate-none">
          {labels.insertCoin}
        </span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {announce}
      </span>
    </>
  );
}
