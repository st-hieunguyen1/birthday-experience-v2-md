# Technical Architecture — V2

## Stack

Frontend:

- React
- Vite

Animation:

- GSAP

Optional:

- Lenis
- SVG
- Canvas

Hosting:

- Cloudflare Pages

## Architecture Principle

The website should remain primarily static.

The birthday experience does not require user accounts or a live backend for the final viewing experience.

Contributor content is collected before deployment and transformed into curated static data.

## Suggested Structure

```text
src/
├── components/
│   ├── Intro/
│   ├── Character/
│   ├── LittleThings/
│   ├── Story/
│   ├── PeopleAroundYou/
│   │   ├── Constellation/
│   │   ├── PersonNode/
│   │   └── MemoryWindow/
│   └── FinalScene/
│
├── data/
│   ├── people.json
│   ├── character.json
│   └── story.json
│
├── animations/
│   ├── intro.js
│   ├── constellation.js
│   └── finale.js
│
└── App.jsx
```

## State

Keep global state minimal.

Possible state:

- currentChapter
- selectedPerson
- viewedPeople
- isFinaleUnlocked

## Media

Do not hardcode media directly into components.

Use paths or URLs.

## Loading Strategy

Do not load every video during initial page load.

Lazy-load heavy media when a person is opened.

Images that are immediately visible can use prioritized loading.

## Performance

Prefer:

- transform
- opacity
- scale
- translate

Avoid expensive continuous layout calculations.

Keep particle counts controlled.

Do not use WebGL simply because it looks impressive.

SVG + CSS + GSAP may be enough for the constellation.

## Hosting

The final build should be deployable as a static React application to Cloudflare Pages.

The architecture should not depend on a database unless a later feature explicitly requires it.

## Error Handling

A failed image or video must not prevent the user from opening other nodes.

Provide graceful fallbacks.
