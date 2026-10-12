"use client";

import { useEffect, useRef, useState } from "react";
import { PixelIcon } from "@/components/ui/PixelIcon";

type Labels = { copy: string; copied: string; failed: string; aria: string };

export function CopyButton({
  value,
  labels,
}: {
  value: string;
  labels: Labels;
}) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
    } catch {
      setState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2200);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={labels.aria}
        className="inline-flex items-center gap-2 border-(length:--bw) border-accent bg-accent px-3 py-1.5 font-pixel text-[0.7rem] uppercase tracking-widest text-on-accent shadow-[3px_3px_0_0_var(--c-fg)] transition-[transform,box-shadow] duration-(--dur-fast) hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--c-fg),0_0_20px_0_var(--accent)] active:translate-x-0 active:translate-y-0"
      >
        <PixelIcon
          name={state === "copied" ? "check" : "copy"}
          className="h-3 w-auto"
        />
        {state === "copied" ? labels.copied : labels.copy}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {state === "copied"
          ? labels.copied
          : state === "failed"
            ? labels.failed
            : ""}
      </span>
      {state === "failed" && (
        <span className="text-xs text-muted">{labels.failed}</span>
      )}
    </>
  );
}
