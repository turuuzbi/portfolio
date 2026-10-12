"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { inView } from "framer-motion/dom";

/**
 * Hard-cut wipe-in when scrolled into view (styles: .reveal in effects.css).
 * Uses Framer Motion's tiny `inView` helper instead of the full motion
 * components to keep the bundle light. The outer element is observed because
 * a fully clipped element never counts as "in view".
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!outer.current) return;
    return inView(
      outer.current,
      () => {
        inner.current?.classList.add("is-in");
      },
      { amount: 0.1 },
    );
  }, []);

  return (
    <div ref={outer} className={className}>
      <div
        ref={inner}
        className="reveal"
        style={{ "--d": `${delay}ms` } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
