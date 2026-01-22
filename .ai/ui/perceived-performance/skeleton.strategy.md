# Perceived Performance (The Magic Speed)

## 🎯 Purpose
> Users don't measure speed. They FEEL it.
> **Goal**: Make 2 seconds feel like 0.5 seconds.

---

## 💀 Skeleton Strategy

### 1. Skeleton ≠ Gray Boxes
*   Skeletons must match the EXACT rhythm, layout, and density of the final content.
*   If the content has 3 lines of text, the skeleton has 3 lines.

### 2. The "Shimmer" Effect
*   A subtle, slow gradient sweep left → right.
*   **Duration**: 1.5s loop.
*   **Purpose**: Indicates "working", not "broken".

### 3. Skeleton Priority Order
1.  **Hero Image**: Static, placeholder color (from design tokens).
2.  **Text Headers**: Rounded bars.
3.  **Body Text**: Multiple thin lines.
4.  **Cards/Lists**: Full card skeleton, not just the image.

---

## ✨ Optimistic UI (The Promise)

### What is it?
*   Update the UI BEFORE the server confirms.
*   Example: "Like" button turns red instantly, even before the API call returns.

### Rules
1.  **Low Risk**: Use for actions with high success rate (Likes, Follows).
2.  **Revert**: If API fails, revert state and show error toast.
3.  **Never For**: Payments, Deletions, Auth changes (Too risky).

---

## ⏳ Async Feedback Patterns

### The "Spinner Delay"
*   **Rule**: Don't show spinner for the first 200ms.
*   **Why**: Avoids "flicker" if API is fast. Just show result.

### The "Copy Progress" Trick
*   Instead of "Loading...", show: "Finding best offers...".
*   Makes wait feel productive.

### The "Fake Progress" (Ethical Use Only)
*   A progress bar that moves slowly at first, then jumps at the end.
*   **Use**: Only if you genuinely have backend progress updates.
*   **Never**: Fake progress on a request you have no insight into.

---

> **"Speed is an illusion. Mastery is creating that illusion."**
