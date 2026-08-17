# Birthday Experience — N

> An interactive birthday experience built around the people, memories, and affection surrounding N.

## Core Idea

This project is no longer primarily about N's appearance, past photos, or recreating an image of who she was before.

It is about something more enduring:

> **The people around N.**

The experience uses a game-like interactive structure to guide N through curiosity, stories, memories, and finally into **People Around You** — an interactive constellation where people close to N become individual nodes containing messages, photos, videos, and memories.

The final scene gathers everyone around N and turns their short wishes into a continuous visual field.

## Emotional Principle

The experience should communicate:

> **Some things change. Some things don't.**

We do not explicitly discuss N's accident unless N herself chooses to.

We do not compare her current appearance with her past appearance.

We do not tell her that she needs to "go back to normal".

Instead, the experience quietly communicates:

> **You are still you. And you are not alone.**

## Primary Emotional Arc

Curiosity
→ Play
→ Recognition
→ Stories
→ People
→ Connection
→ Reassurance
→ Celebration

## Success Criteria

The experience succeeds if N:

1. feels curious rather than anxious;
2. never feels that her appearance is being evaluated;
3. discovers that many people intentionally prepared something for her;
4. feels remembered for who she is and what she brings to other people's lives;
5. reaches the final scene with a feeling of warmth and being surrounded;
6. can enjoy the experience without having to perform happiness.

## Important Content Rule

Do not make the accident the subject of the birthday website.

The accident is context for why the creative direction changed, not the story the website needs to tell.

## Technical Direction

- React + Vite
- GSAP
- Optional Lenis
- SVG / Canvas where useful
- Cloudflare Pages
- Static-first architecture
- Curated JSON content
- Optimized images and videos
- Mobile-first interaction design

## Current MVP (Implemented)

- Chapter flow: Beginning → Character → Little Things → Stories → People Around You → Everyone Is Here.
- Structured data: `src/data/chapters.json`, `src/data/people.json`.
- People exploration: open each node to unlock finale transition.
- Final scene: flowing short wishes around central symbol.
- Content validator: `npm run check-data`.

## Run Locally

```bash
npm install
npm run check-data
npm run dev
```

Build:

```bash
npm run build
npm run preview
```
