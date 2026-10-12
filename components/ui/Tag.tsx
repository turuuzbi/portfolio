import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block border-(length:--bw) border-surface-3 bg-surface-1 px-2 py-0.5 font-pixel text-[0.7rem] uppercase tracking-wider text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}
