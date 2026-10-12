import { cn } from "@/lib/cn";

/**
 * Original pixel-art icon drawn from a string grid.
 * "#" = currentColor, "+" = accent, "." = empty.
 */
export function PixelIcon({ grid, className }: { grid: readonly string[]; className?: string }) {
  const h = grid.length;
  const w = grid[0]?.length ?? 0;
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      className={cn("inline-block", className)}
    >
      {grid.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "." ? null : (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={cell === "+" ? "var(--accent)" : "currentColor"}
            />
          ),
        ),
      )}
    </svg>
  );
}

export const icons = {
  arrowUpRight: ["..####", "....##", "...#.#", "..#..#", ".#....", "#....."],
  play: ["#...", "##..", "###.", "####", "###.", "##..", "#..."],
} as const;
