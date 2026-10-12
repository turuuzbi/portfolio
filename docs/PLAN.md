# Portfolio build plan

Single-page, fully static site. Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion (only for scroll reveals).

## File structure

```
app/
  [lang]/
    layout.tsx          root layout: <html lang>, fonts, metadata, CRT overlay
    page.tsx            composes the sections in order
  fonts/                Monocraft + JetBrains Mono (subset woff2, self-hosted) + OFL licenses
  globals.css           imports tokens + effects + Tailwind
  icon.svg              pixel favicon                      (step 3)
  opengraph-image.tsx   generated OG image                 (step 3)
  sitemap.ts, robots.ts                                     (step 3)
styles/
  tokens.css            ALL design tokens: retheme here only
  effects.css           scanlines, grain, glitch, glow, flicker, dividers
components/
  ui/                   Button, Tag, GlitchText, SectionHeading, Divider, PixelIcon
  sections/             Hero, Projects, Loadout, PlayerProfile, GameLibrary, OffScreen, Contact, Footer
  effects/              CrtOverlay, Terminal, Reveal, KonamiCode
data/
  site.ts               name, links, email (one place for contact info)
  projects.ts           typed project list
  games.ts              typed game library (rank/hours fields)
  skills.ts, profile.ts, offscreen.ts
  ui.ts                 UI chrome strings (nav, buttons, labels)
lib/
  i18n.ts               Lang type, Localized<T>, tr() helper
public/
  cursor.png, cursor-pointer.png   pixel cursors
```

## Design tokens (styles/tokens.css)

| Token | Value | Use |
|---|---|---|
| `--c-bg` | `#0a0a0a` | page |
| `--c-surface-1/2/3` | `#141414` / `#1f1f1f` / `#2b2b2b` | panels, borders |
| `--c-muted` | `#8a8a8a` | secondary text (5.7:1 on bg) |
| `--c-fg` | `#e8e8e8` | body text |
| `--c-pink` | `#ff2d95` | accent |
| `--c-cyan` | `#00e5ff` | accent |
| `--c-purple` | `#7b2cff` | accent (3.4:1, large text / borders only) |
| `--c-amber` | `#ffb000` | sparing hits (badges, coin) |
| `--accent` | per section | set with `data-accent="pink"` on a section |
| `--bw` / `--bw-thick` | `2px` / `4px` | borders, no radius anywhere |

Tailwind utilities map onto these (`bg-bg`, `text-muted`, `border-accent`, `font-pixel`, `font-mono` …) via `@theme inline`, so a retheme = edit `tokens.css`.
Tailwind v4 has no `tailwind.config`; the CSS `@theme` block is its replacement.

The Konami code sets `data-palette="alt"` on `<html>`, which swaps pink↔cyan and purple↔amber.

## Accent per section (one dominant each)

Hero: pink · Projects: cyan · Loadout: amber · Player Profile: purple · Games: pink · Off-screen: cyan · Contact: pink · Footer: amber.

## Effects (all off under `prefers-reduced-motion`)

- CRT scanlines + static grain: one fixed, `pointer-events: none` overlay.
- Glitch heading: duplicated `aria-hidden` layers offset pink/cyan on hover/focus.
- Neon glow: `box-shadow` / `text-shadow` in `--accent` on hover + focus-visible.
- Hero: CSS-only terminal typing (`steps()` on `ch` width), then a neon flicker-on of the name
  (at most 3 flashes, once, to stay under the WCAG flash threshold).
- Skewed dividers between sections, hard-cut scroll reveals (clip-path, no fades).
- Pixel cursor via PNG `cursor:` with `auto` fallback.

## i18n

Routes: `/` (English, rewritten to `/en`) and `/mn`. Every user-facing string is `Localized`:
a plain string, or `{ en, mn? }`. Missing `mn` falls back to `en`, so Mongolian copy can be added field by field.

## Build order

1. Tokens, fonts, effects, hero, one project card → **review vibe**
2. Remaining sections
3. SEO (metadata, OG, sitemap, favicon), README, Lighthouse pass
