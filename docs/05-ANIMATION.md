# Animation System — V2

## Principle

Animation should guide emotion, not overwhelm it.

The most important transitions are:

1. entering the experience;
2. discovering a person;
3. revealing the constellation;
4. gathering everyone;
5. transforming into the final birthday scene.

## Animation Levels

### Micro

100–300ms

Used for:

- hover
- touch
- node scale
- icon feedback

### UI

300–800ms

Used for:

- modal
- text reveal
- image transitions

### Scene

800–2000ms

Used for:

- chapter transitions
- camera movement
- constellation rearrangement

### Cinematic

2–6 seconds

Used for:

- People Around You reveal
- final transformation

## People Around You

### Entry

Nodes appear gradually.

Avoid making all nodes pop in simultaneously.

### Hover

Node:

scale 1 → 1.1

Glow increases.

Connection line becomes slightly brighter.

### Click

Sequence:

1. constellation slows;
2. selected node expands;
3. camera moves;
4. background dims;
5. memory window appears.

### After Viewing

Node changes state subtly.

Possible:

- filled center
- brighter connection
- small check
- persistent glow

## Final Transformation

Sequence:

0–2 sec:
All nodes become still.

2–4 sec:
Connection lines brighten.

4–6 sec:
Nodes begin orbiting.

6–8 sec:
Camera slowly pulls back.

8–10 sec:
Final wishes begin entering from below.

10+ sec:
Continuous visual loop.

## Final Wishes

Each wish should have controlled variation:

- speed
- horizontal position
- opacity
- scale
- delay

Do not use completely random movement.

The final scene must still look composed.

## Reduced Motion

Respect prefers-reduced-motion.

Replace:

- camera movement
- orbit
- complex parallax

with:

- fades
- simple scale
- gentle transitions

All content must remain accessible.
