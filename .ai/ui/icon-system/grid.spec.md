# Icon System (The Living Symbols)

## 🎯 Purpose
> Icons are not decoration. They are communication compressed into 24px.
> **Rule**: Every icon must be optically balanced, not mathematically centered.

---

## 📐 Grid Specification

### 1. The Base Grid
*   **Canvas**: 24x24 px (Standard), 20x20 (Compact), 16x16 (Inline).
*   **Safe Zone**: 2px padding inside edges.
*   **Alignment**: Visual center, not geometric center.

### 2. Stroke Dynamics
*   **Default Stroke**: 1.5px (For 24px icons).
*   **Rule**: Stroke width DOES NOT scale with icon size.
*   **Consistency**: All icons in a set share the same stroke.

---

## 👁️ Optical Corrections

### The "Heavy Bottom" Fix
*   Round shapes (O, Circle) visually appear smaller than squares.
*   **Fix**: Extend circles slightly beyond the grid edge (overshoot by 1px).

### The "Pointy Top" Fix
*   Triangular shapes appear smaller than squares.
*   **Fix**: Extend the apex slightly beyond the grid (overshoot by 1.5px).

---

## 💃 Animated States

### Hover
*   **Allowed**: `scale(1.05)`, Subtle color fill.
*   **Forbidden**: `rotate()`. Icons do not spin.

### Active (Click)
*   **Allowed**: `scale(0.95)` (Press feedback).

### Transition (Morph)
*   **Allowed**: Hamburger → X (Menu toggle), Play → Pause.
*   **Rule**: Morph must be semantic, not decorative.

---

## 🛡️ Accessibility

*   All interactive icons MUST have `aria-label`.
*   Decorative icons MUST have `aria-hidden="true"`.
*   Minimum touch target: 44x44px.

---

> **"An icon should be understood in 100ms or less."**
