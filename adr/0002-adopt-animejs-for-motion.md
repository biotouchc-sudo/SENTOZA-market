# ADR-0002: Adoption of Anime.js as Motion Engine

**Date:** 2026-01-21  
**Status:** Accepted

## Context
Our "Innovation Engine" requires a way to execute high-fidelity interactions ("Mode B: Story" and "Mode A: Conversion").
We need a library that supports:
- Complex sequences (Timeline) for Journeys.
- Physics (Springs) for Natural UI.
- SVG manipulation for Branded Polish.
- Scroll-linked animation for Scrollytelling.

## Decision
Adopt **anime.js v4** (or current equivalent) as the core Motion Engine.

## Why? (The 0.1% Rationale)
1.  **Timeline API = Journey Control**: It allows us to script UI "scenes" rather than just individual element transitions. This aligns with our `Journey Architecture`.
2.  **Modular**: We can tree-shake it to respect our `Performance Budget` (< 50KB for motion).
3.  **DOM Agnostic**: Works with HTML, SVG, Canvas, and Three.js (Future proof).

## The "Safety" Layer (Crucial)
To prevent "Motion Spaghetti Code", we will NOT use `anime()` directly in components.
We will use a wrapper `useMotion()` hook that:
1.  **Enforces Tokens**: Only accepts duration/easing from `core.tokens.json`.
2.  **Respects Accessibility**: Auto-disables if `prefers-reduced-motion` is true.
3.  **Respects Performance**: Auto-disables on low-power devices.

## Consequences
### Positive
- Cinematic capability unlocked.
- Micro-interactions become cheap to implement.
- Consistent physics across the app.

### Negative
- Another runtime dependency.
- Learning curve for the Timeline API.

### Mitigation
- Create `d-s/motion/primitives.ts` with pre-defind animations (Fade, Slide, Scale).
- Enforce strict import limits.
