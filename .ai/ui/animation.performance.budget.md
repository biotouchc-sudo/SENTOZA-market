# Animation Performance Budget (The Law)

## 🎯 Purpose
> Defines strict limits for motion cost.
> **Rule**: Beauty must not kill the battery.

---

## ⚡ Runtime Budgets

### 1. Frame Rate (FPS)
*   **Target**: 60fps (16.6ms/frame) consistently.
*   **Minimum**: 50fps on mid-range Mobile.
*   **Drop Limit**: No more than 2 dropped frames during a transition.

### 2. CPU Usage
*   **Main Thread Blocking**: Max `50ms` (Long Task) during animation init.
*   **Idle**: Animation must settle to `0% CPU` after completion.

### 3. Complexity Limits
*   **SVG Nodes**: Max 1000 nodes per animated SVG.
*   **Lottie Keyframes**: Max 600 keyframes per Lottie.
*   **Concurrent Animations**: Max 6 active animations at once.

---

## 📦 Asset Budgets

| Asset Type | Max Size (Gzip) | Recommendation |
|------------|-----------------|----------------|
| **Lottie** | 30KB | Use bare JSON, no bitmaps |
| **JS Libs** | 25KB | `framer-motion` (tree-shaken) |
| **SVG** | 10KB | Optimized via SVGO |
| **Video** | 500KB | Muted, Auto-play, Lazy |

---

## 🧪 Measuring & Enforcement

### 1. The "Jank" Test
*   Run `Chromium Performance Monitor`.
*   If "Layout" or "Recalculate Style" occurs *during* animation frame → **FAIL**.
*   **Pass**: Only "Composite Layers" should be active.

### 2. The "Memory" Test
*   Check Heap Snapshot before/after animation.
*   If Retained Size grows (Memory Leak) → **FAIL**.

### 3. CI Gate
*   Run `Lighthouse` Performance.
*   Cumulative Layout Shift (CLS) must be `0.0`.
*   First Input Delay (FID) must be `< 100ms`.

---

> **"60fps or it didn't happen."**
