# AI Coding Rules — V2

## Project Context

This is a personal interactive birthday experience.

The project is designed for one specific person.

The primary goals are:

1. emotional safety
2. storytelling
3. warmth
4. visual quality
5. interaction quality
6. performance
7. maintainability

Do not optimize for feature quantity.

## Read Before Coding

Read:

- README.md
- docs/01-CONCEPT.md
- docs/02-STORY.md
- docs/03-UX-FLOW.md
- docs/06-PEOPLE-AROUND-YOU.md
- docs/07-FINAL-SCENE.md
- docs/09-MEDIA-GUIDELINES.md
- docs/10-TECH-ARCHITECTURE.md

## Critical Creative Constraint

Do not introduce UI, copy, imagery, or animation that makes N's appearance the subject of evaluation.

Do not add:

- before/after comparisons
- appearance ratings
- beauty ratings
- medical imagery
- accident imagery
- face reconstruction effects
- "old N vs new N" concepts
- recovery countdowns
- language implying that she needs to become who she was before

Unless explicitly requested by the project owner, do not reference the accident in the interface.

## Data

Never hardcode contributor-specific content into components.

Use structured data.

Bad:

```text
if person.name === "..."
```

Good:

```text
people.map(person => ...)
```

## Animation

Animation must be scoped to components.

Clean up:

- GSAP timelines
- event listeners
- observers
- timers

when components unmount.

## Visual Quality

Do not add generic:

- gradients
- glassmorphism
- excessive shadows
- random particles
- excessive glow
- birthday clipart
- unnecessary cards

Every effect needs a storytelling reason.

## Emotional Tone

Prefer:

- warmth
- presence
- connection
- humor
- quiet confidence
- affection

Avoid:

- pity
- melodrama
- forced positivity
- inspirational clichés
- medical language

## Mobile

Do not force desktop interactions onto touch devices.

If necessary, create a mobile-specific interaction.

## Performance

Use lazy loading for heavy media.

Prefer transform and opacity for animation.

Keep particles and simultaneous animations controlled.

## Debugging

When fixing a bug:

1. reproduce;
2. identify root cause;
3. make the smallest appropriate change;
4. verify related interactions;
5. avoid unrelated refactoring.

## Final Rule

The website should feel like a thoughtful gift from real people.

It must never feel like an AI-generated sympathy website.
