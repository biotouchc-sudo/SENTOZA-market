# Transition Choreography (The Director)

## 🎯 Purpose
> How elements move between PAGES/STATES.
> **Goal**: Spatial continuity. The user should never feel "lost".

---

## 🗺️ Spatial Continuity Model

### The "Origin" Rule
*   When navigating FROM somewhere, elements should know where they came from.
*   New pages slide in from the direction of the link/action.
    *   Clicked "Details" on the right side? → Details page slides from RIGHT.

### The "Destination" Rule
*   When navigating BACK, the page should reverse its entrance.
*   If it came from the right, it leaves to the right.

---

## 🔗 Shared Element Transitions (The Magic)

### What are they?
*   An element (e.g., Card Thumbnail) that exists on BOTH source and destination pages.
*   It should smoothly morph its position/size from one page to the other.

### Implementation (CSS View Transitions API / Framer Motion `layoutId`)
```tsx
// Source Page: Card
<Card layoutId={`card-${item.id}`} /> 

// Destination Page: Hero Image
<img layoutId={`card-${item.id}`} /> 

// Their animation is automatically linked.
```
*   **Fallback**: If not supported, use a crossfade.

---

## 🎬 Page Transition Types

| From → To | Animation | Duration |
|-----------|-----------|----------|
| **List → Detail** | Shared element morph + content fade | 350ms |
| **Tab → Tab** | Indicator slide + content crossfade | 250ms |
| **Modal Open** | Scale up from origin + overlay fade | 300ms |
| **Modal Close** | Scale down to origin + overlay fade | 200ms |
| **Full Nav** | Slide in from edge (Left/Right) | 400ms |

---

## 📉 Depth Model (Z-Axis)

*   **Background Content**: Slightly scales down and fades on modal open.
*   **Modal/Overlay**: Appears to be "above" existing content.
*   **Effect**: Creates a 3D "layer" illusion.

---

> **"Transitions should feel like turning a page, not teleportation."**
