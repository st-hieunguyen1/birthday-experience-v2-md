# Mobile Experience — V2

## Principle

Mobile is a first-class experience.

Do not shrink the desktop constellation into a tiny circle.

Design a dedicated mobile composition.

## Target

Primary design reference:

390 × 844

Also test:

- smaller phones
- larger phones
- tablets
- desktop

## People Around You

Desktop:

- multiple nodes visible
- hover interactions
- spacious constellation

Mobile:

- larger touch targets
- fewer overlapping nodes
- touch-friendly navigation
- selected node can temporarily become dominant

Do not require precise tapping on tiny circles.

## Memory Window

Use approximately 90–95% viewport width.

Keep:

- name
- message
- media
- close control

easy to access.

## Video

Videos should:

- load lazily
- support controls
- not autoplay with sound
- work in portrait and landscape where possible

## Final Scene

Use a portrait-oriented composition.

Example:

```text
        wish

   wish       wish

        [ N ]

   wish       wish

        wish
```

The words move around the center.

The central symbol must remain readable.

## Performance

On mobile, reduce:

- particle count
- blur
- simultaneous animations
- large shadows
- heavy video loading

Respect reduced-motion preferences.
