# Temporal Rules & Interaction Rhythm

## 🎯 Purpose
> Defines the "Time Feel" of the application.
> **Philosophy**: Speed isn't just "fast". It's "predictable" and "rhythmic".

---

## ⏱️ The 100ms Rule (Perception)
*   **0-100ms**: Instant. No loading indicator needed.
*   **100ms-300ms**: Perceptible delay. Needs active state (button press, ripple).
*   **300ms-1000ms**: Noteable wait. Needs generic loader (spinner).
*   **1000ms+**: Task switch. Needs progress bar + explanation ("Uploading...").

---

## 🎵 Animation Rhythm (The Heartbeat)

### 1. Entrance Timing (Stagger)
> Never show everything at once.
*   **Unit**: 50ms stagger.
*   **Pattern**: Header → Hero Text → Hero Image → CTA.
*   **Max Duration**: Total entrance should not exceed 800ms.

### 2. Exit Timing (Snappy)
> Exits should be 30% faster than entrances.
*   **Entrance**: `ease-out` (decelerate).
*   **Exit**: `ease-in` (accelerate).
*   **Reason**: Users don't wait for things to leave.

### 3. Feedback Response
*   **Click**: Immediate (0ms) visual change (scale down / color change).
*   **Network Request**: Wait 200ms before showing spinner (avoid "flicker" for fast connections).

---

## 🚫 Anti-Patterns (Rhythm Killers)

### ❌ The "Spinner Flash"
**Bad**: Show spinner for 50ms then content.
**Fix**: If projected time < 200ms, show nothing (optimistic UI).

### ❌ The "Jumpy Layout" (CLS)
**Bad**: Images loading pushes text down.
**Fix**: Strict aspect-ratio placeholders. 0ms layout shift allowed.

### ❌ The "Zombie Interaction"
**Bad**: Button clicked, nothing happens for 500ms while API loads.
**Fix**: Immediate 'disabled' + 'loading' state on click.

---

## 🎹 Choreography Specifications
```yaml
Global_Ease: "cubic-bezier(0.16, 1, 0.3, 1)" # The "Apple" Spring
Duration_Micro: "150ms" # Hover, Toggle
Duration_Macro: "350ms" # Modal, Page Transition
Duration_Attention: "800ms" # Toast, Alert
Scale_Click: 0.96 # Subtle tactile feel
```
