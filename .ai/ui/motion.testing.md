# Motion Testing & Verification

## 🎯 Purpose
> Verify that motion works, performs smooth, and breaks nothing.
> **Rule**: If you can't measure it, you can't ship it.

---

## 📸 Visual Regression (Structure)

### Playwright / Chromatic
Capture 3 snapshots for every complex animation:
1.  **Start State**: T=0ms.
2.  **Mid-Animation**: T=50% (Paused).
3.  **End State**: T=100% (Settled).

**Why?** Ensures "Mid-state" doesn't look broken (e.g., z-index clipping).

---

## ⚡ Performance Profiling Script

### `tools/fps-sample.js` (Concept)
1.  **Launch**: Headless Browser.
2.  **Inject**: FPS Meter (requestAnimationFrame loop).
3.  **Interact**: Automated scroll / click flow.
4.  **Report**:
    *   Min FPS: 45
    *   Med FPS: 59
    *   Dropped Frames: 3
    *   RESULT: **PASS/FAIL**

### "No-Layout-Shift" Verification
*   During animation, monitor `LayoutShift` events.
*   If `cumulative_layout_shift` > 0.001 during interaction → **FAIL**.

---

## 🤖 Accessibility Automated Checks (Axe)
*   Check for `aria-hidden="true"` on purely decorative animated elements.
*   Verify `prefers-reduced-motion` media query is present in CSS bundle.

---

> **"Trust, but verify. Then verify again."**
