import type { CSSProperties } from "react";

type Props = {
  lines: string[];
  /** Delay between lines, ms. */
  step?: number;
  className?: string;
};

/**
 * CSS-only typing effect: each line's width steps from 0 to its length in `ch`.
 * Zero JS, no layout shift, and the full text is shown under reduced motion.
 */
export function Terminal({ lines, step = 420, className }: Props) {
  const done = lines.length * step;
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div
          key={i}
          className={line.startsWith(">") ? "text-fg" : "text-muted"}
        >
          <span
            className="type-line"
            style={
              { "--n": line.length, "--d": `${i * step}ms` } as CSSProperties
            }
          >
            {line}
          </span>
        </div>
      ))}
      <div
        className="cut-in text-accent-text"
        style={{ "--d": `${done}ms` } as CSSProperties}
      >
        &gt; <span className="caret" />
      </div>
    </div>
  );
}
