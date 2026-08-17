# Implementation Plan — V2

## Phase 0 — Emotional & Content Planning

Before coding:

- identify contributors;
- collect messages;
- collect final wishes;
- collect avatars;
- collect meaningful memories;
- collect optional videos;
- obtain permission to use submitted media;
- filter content that could make N uncomfortable.

Deliverable:

```text
content/
```

## Phase 1 — Foundation

Build:

- React/Vite project
- global styles
- typography
- responsive foundation
- asset structure
- basic chapter state

## Phase 2 — Intro

Build:

- loading sequence
- fake system messages
- enter interaction

Goal:

Curiosity.

## Phase 3 — Character

Build:

- personality traits
- text reveal
- stat animation if appropriate

Goal:

Introduce N as a person, not an appearance.

## Phase 4 — Little Things / Story

Build:

- memory fragments
- timeline
- short stories
- media transitions

Goal:

Move from N's individual qualities toward relationships.

## Phase 5 — People Around You Prototype

Before integrating real content, build:

- central node
- 5 sample nodes
- node hover/touch
- click
- memory window
- close
- viewed state

Do not scale until the interaction feels good.

## Phase 6 — Real Content

Replace sample data with real contributors.

Test every node independently.

## Phase 7 — Completion

Implement:

```text
X / TOTAL
```

Then:

```text
EVERYONE'S HERE.
```

## Phase 8 — Finale

Implement:

1. constellation freeze;
2. connection lines brighten;
3. nodes begin orbit;
4. central symbol becomes dominant;
5. final wishes enter;
6. infinite loop;
7. final birthday message.

## Phase 9 — Mobile

Test all chapters on real mobile-sized layouts.

## Phase 10 — Emotional Review

Ask:

- Does any screen accidentally focus on N's appearance?
- Does any text imply that she needs to return to her previous appearance?
- Does anything make the accident feel like the subject?
- Does the website allow her to simply receive affection?
- Does the final scene feel warm rather than tragic?

## Phase 11 — Performance

Check:

- initial bundle
- image sizes
- video loading
- animation FPS
- mobile memory
- slow network behavior

## Phase 12 — Deployment

Deploy to Cloudflare Pages.

Perform a complete rehearsal using the exact production build.

## Birthday Night Checklist

Before the event:

- test every node;
- test every message;
- test every image;
- test every video;
- test the finale;
- test mobile;
- test audio behavior;
- keep a fallback build;
- do not make risky architectural changes immediately before the event.

## Development Priority

```text
People Around You
        ↓
Finale
        ↓
Intro
        ↓
Character
        ↓
Story
        ↓
Visual polish
        ↓
Mobile
        ↓
Performance
```

The emotional centerpiece should be validated early.
