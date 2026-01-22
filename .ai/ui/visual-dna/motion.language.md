# Visual DNA: Motion Language

## 🎯 Purpose
> Defines the "Physics" of the brand.
> **Identity**: Is the brand "Bouncy & Playful" or "Smooth & Luxurious"?

---

## 🧬 Physics Constants

### The "Signature Curve"
> **Curve**: `cubic-bezier(0.2, 0.8, 0.2, 1)` (Smooth, Premium)
> **Usage**: All UI transitions (Hover, Modal, Slide).

### Timing Scale
| Token | Value | Use Case |
|-------|-------|----------|
| `t-instant` | 0ms | Color changes, states |
| `t-fast` | 200ms | Micro-interactions (Button press) |
| `t-normal` | 350ms | Content entry, Hover expansion |
| `t-slow` | 600ms | Page transitions, Modal open |

---

## 💃 Choreography Rules

1.  **No Teleportation**: Things don't appear out of nowhere. They fade, slide, or scale in.
2.  **Origin Matters**: Modals originate from the button that triggered them.
3.  **Exit Direction**: Things leave in the direction they came (or flow logical direction).

---

## 🚫 Forbidden Motions
1.  **The "Bounce"**: No elastic bounce (Too playful for Premium).
2.  **The "Linear"**: No linear easing (Too robotic).
3.  **The "Flash"**: No blinking elements.

---

> **"Motion is not decoration. It is communication."**
