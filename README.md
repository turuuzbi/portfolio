# turuu.exe

Personal portfolio of Төрөө (Turuu), full-stack developer in Ulaanbaatar.
Hotline Miami menu screen meets minimalist dev portfolio.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion (`inView` only) · static, no database.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000  (Mongolian: /mn)
npm run lint
npm run build && npm start   # production build
```

Node 20+ (22 recommended).

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: Next.js. No env vars needed.
3. Set your production domain, then update `site.url` in `data/site.ts` (used for canonical URLs, OG image, sitemap).

Every push to the production branch deploys; other branches get preview URLs.

## Edit content

Everything you'll want to change lives in `/data`:

| File | What |
|---|---|
| `data/site.ts` | name, email, GitHub/LinkedIn, domain, "open to work" flag |
| `data/projects.ts` | project cards (add screenshots to `/public/projects/` and set `image`) |
| `data/skills.ts` | loadout slots + "backpack" tags |
| `data/profile.ts` | bio, character-sheet stats, attribute bars |
| `data/games.ts` | game library, rank + hours per game |
| `data/offscreen.ts` | off-screen hobbies |
| `data/ui.ts` | all UI labels and section copy |
| `data/icons.ts` | original pixel-art icons (string grids) |

Search the repo for `TODO:` to find every placeholder.

### Languages (EN / MN)

`/` is English, `/mn` is Mongolian. Every string is either a plain string (same in both)
or `{ en: "...", mn: "..." }`. If `mn` is missing, English is shown.

## Retheme

All design tokens are in **`styles/tokens.css`**: colors, accent per section, borders, spacing,
and effect strength (`--glow-mix`, `--grid-mix`, `--scanline-opacity`, `--grain-opacity`).
Tailwind v4 reads them through the `@theme` block at the bottom of that file (v4 has no `tailwind.config`).

Each section picks one accent with `data-accent="pink | cyan | purple | amber"`.
The Konami code (↑↑↓↓←→←→ B A) or the footer's INSERT COIN button flips the palette.

## Project structure

```
app/[lang]/        layout (fonts, metadata), page, per-language OG image
app/               favicon, icons, sitemap, robots, global 404
components/ui/     Button, Tag, GlitchText, SectionHeading, Divider, PixelIcon
components/sections/  Header, Hero, Projects, Loadout, PlayerProfile, GameLibrary, OffScreen, Contact, Footer
components/effects/   CrtOverlay, Terminal, Reveal, CopyButton, PaletteSwitch
styles/            tokens.css (theme), effects.css (CRT, glitch, glow, dividers)
data/              all content
```

## Notes

- Fonts are self-hosted and subset (Latin + Cyrillic) woff2: [Monocraft](https://github.com/IdreesInc/Monocraft)
  for headings, [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) for body. Both SIL OFL 1.1,
  licenses in `app/fonts/`. `assets/og/Monocraft.ttf` is a TTF subset for the OG image renderer.
- All effects are CSS (scanlines, grain, glitch, typing, flicker) and switch off under `prefers-reduced-motion`.
  The hero flicker stays under the WCAG three-flashes limit.
- Game icons are original geometric pixel art: no official logos or game assets.
