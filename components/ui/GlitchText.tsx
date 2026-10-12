import { cn } from "@/lib/cn";

type Props = {
  text: string;
  /** Keep a static pink/cyan offset instead of only on hover. */
  always?: boolean;
  className?: string;
};

/** Text with pink/cyan chromatic layers that glitch on hover/focus. */
export function GlitchText({ text, always, className }: Props) {
  return (
    <span className={cn("glitch", always && "glitch--always", className)}>
      {text}
      <span aria-hidden className="glitch__layer glitch__layer--a">
        {text}
      </span>
      <span aria-hidden className="glitch__layer glitch__layer--b">
        {text}
      </span>
    </span>
  );
}
