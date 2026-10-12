import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  size?: "md" | "sm";
  /** External links open in a new tab; pass the localized hint for screen readers. */
  external?: { newTabLabel: string };
  className?: string;
};

const base =
  "group inline-flex items-center gap-3 border-(length:--bw) border-accent font-pixel uppercase tracking-wider " +
  "transition-[transform,box-shadow,background-color,color] duration-(--dur-fast) ease-(--ease-hard) " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0";

const variants = {
  solid:
    "bg-accent text-on-accent shadow-[4px_4px_0_0_var(--c-fg)] hover:shadow-[6px_6px_0_0_var(--c-fg),0_0_24px_0_var(--accent)]",
  outline:
    "bg-transparent text-accent-text shadow-[4px_4px_0_0_var(--accent)] hover:bg-accent hover:text-on-accent hover:shadow-[6px_6px_0_0_var(--c-fg)]",
};

const sizes = {
  md: "px-5 py-3 text-sm sm:text-base",
  sm: "px-3 py-2 text-xs",
};

export function Button({ href, children, variant = "solid", size = "md", external, className }: Props) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {external && <span className="sr-only"> {external.newTabLabel}</span>}
    </a>
  );
}
