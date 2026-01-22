# Animation Orchestrator (The Conductor)

## 🎯 Purpose
> Rules for coordinating motion across the page.
> **Philosophy**: A page is a symphony, not a noise.

---

## 🎼 Timeline Management

### 1. The "Page Load" Sequence (Global Scheduler)
1.  **T=0ms**: Paint Background + Structure (Nav/Footer).
2.  **T=100ms**: Hydrate interactivity.
3.  **T=200ms**: Trigger `Hero.timeline`.
4.  **T=Scroll**: Trigger `Section(n).timeline` via Observer.

### 2. Section Timelines (Scoped)
Each section (e.g., Services, Reviews) has its own isolated timeline.
*   **Trigger**: `IntersectionObserver` (threshold: 0.2).
*   **Once**: Play once per session (don't replay on scroll up).
*   **Stagger**: Children elements stagger by `50ms`.

---

## 🌊 Hydration Policy (SSR Friendly)

### 1. Static First
*   HTML renders with `opacity: 0` or "Hidden State" CSS classes.
*   **Critical**: Important content (Text) must be visible if JS fails.
*   **Fallback**: CSS `@media (scripting: none) { .animate { opacity: 1; } }`.

### 2. Interactive Nodes
*   Buttons/Inputs hydrate first.
*   Decoration/Motion hydrates last (IdleCallback).

---

## 🛑 Fallback Strategies

### 1. Prefers-Reduced-Motion
*   **Detected**: OS Setting.
*   **Action**: 
    *   Disable all "Slide/Scale/Move".
    *   Replace with "Fade-Only".
    *   Duration: set to `0ms` (instant) or `100ms` (fade).

### 2. Low Power Mode / Slow CPU
*   **Detected**: `navigator.hardwareConcurrency` < 4 or high Frame Drop.
*   **Action**: Disable `blur()` filters and `box-shadow` animations.

### 3. Slow Network
*   **Detected**: `navigator.connection.saveData`.
*   **Action**: Don't load Lottie/Video files. Show poster only.

---

> **"Orchestration creates the illusion of life."**
