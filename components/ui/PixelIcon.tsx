import { pixelIcons, type PixelIconName } from "@/data/icons";
import { cn } from "@/lib/cn";

/** Merge each row's runs of `cell` into one SVG path (far fewer DOM nodes than a rect per pixel). */
function toPath(grid: readonly string[], cell: string): string {
  let d = "";
  grid.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      if (row[x] !== cell) {
        x++;
        continue;
      }
      const start = x;
      while (row[x] === cell) x++;
      d += `M${start} ${y}h${x - start}v1h${start - x}z`;
    }
  });
  return d;
}

/** Original pixel-art icon from data/icons.ts. Height is set by className; width follows. */
export function PixelIcon({
  name,
  className,
}: {
  name: PixelIconName;
  className?: string;
}) {
  const grid: readonly string[] = pixelIcons[name];
  const base = toPath(grid, "#");
  const accent = toPath(grid, "+");
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${grid[0]?.length ?? 0} ${grid.length}`}
      shapeRendering="crispEdges"
      className={cn("inline-block", className)}
    >
      {base && <path d={base} fill="currentColor" />}
      {accent && <path d={accent} fill="var(--accent)" />}
    </svg>
  );
}
