# Motion Language Specification (The Grammar)

## 🎯 Purpose
> Motion is NOT animation. Motion is a LANGUAGE.
> **Philosophy**: Every movement must MEAN something.

---

## 🧬 The Intent-Motion Map

| Intent | Easing | Duration | Axis | Opacity | Example |
|--------|--------|----------|------|---------|---------|
| **Attention Shift** | `standard` | 180-220ms | X/Y | ≮0.6 | Tab switch, Carousel |
| **Feedback (Success)** | `spring-bouncy` | 120ms | Scale | 1→1 | Checkmark draw |
| **Feedback (Error)** | `sharp` | 100ms x2 | X | 1→1 | Shake |
| **Reveal (Lazy)** | `decelerate` | 320ms | Y | 0→1 | Staggered list |
| **Expand (Disclosure)** | `standard` | 250ms | Y (Height) | 1→1 | Accordion |
| **Exit (Dismiss)** | `accelerate` | 160ms | Y/Opacity | 1→0 | Toast close |
| **Emphasis** | `spring-stiff` | 200ms | Scale | 1→1 | Button pulse |

---

## 📐 Easing Taxonomy

### 1. `standard` (The Workhorse)
*   **Curve**: `cubic-bezier(0.2, 0.8, 0.2, 1)`
*   **Feel**: Smooth, balanced. Decelerates at end.
*   **Use**: 80% of all UI motion.

### 2. `decelerate` (The Arrival)
*   **Curve**: `cubic-bezier(0.0, 0.0, 0.2, 1)`
*   **Feel**: Fast start, slow end. Like a car braking.
*   **Use**: Incoming elements (Page Load, Modal Enter).

### 3. `accelerate` (The Departure)
*   **Curve**: `cubic-bezier(0.4, 0.0, 1, 1)`
*   **Feel**: Slow start, fast end. Like a car accelerating.
*   **Use**: Exiting elements (Modal Close, Toast Dismiss).

### 4. `spring-stiff` (The Snap)
*   **Feel**: Mechanical, precise. No overshoot.
*   **Use**: Toggles, Tabs, Indicators.

### 5. `spring-bouncy` (The Playful)
*   **Feel**: Lively, overshoots slightly before settling.
*   **Use**: Success confirmation, Gamified UI.

---

## 🚫 Forbidden Motion Patterns

1.  **❌ The "Bounce on Everything"**: Spring bounce is for celebration, not navigation.
2.  **❌ The "Synchronized Spin"**: Rotating icons on hover is childish.
3.  **❌ The "Fade to Nothing"**: Don't fade opacity without a direction (slide helps).
4.  **❌ The "Infinite Loop"**: Looping decoration without user control is a distraction.

---

> **"Motion without intent is noise."**
