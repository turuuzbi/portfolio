import type { Accent } from "@/lib/accent";

/** Skewed Hotline Miami stripe between sections. */
export function Divider({ accent }: { accent: Accent }) {
  return <div aria-hidden data-accent={accent} className="divider" />;
}
