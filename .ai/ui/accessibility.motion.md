# Motion Accessibility (Inclusive Design)

## 🎯 Purpose
> Ensure motion does not harm or exclude users.
> **Rule**: Motion is a privilege, not a right.

---

## ♿ Policies

### 1. The Vestibular Trigger Rule (No Nausea)
*   **Avoid**: Parallax effects with different scroll speeds > 20%.
*   **Avoid**: Large spinning/rotating backgrounds.
*   **Avoid**: Rapid flashing (> 3 flashes/sec) => Seizure risk.

### 2. `prefers-reduced-motion` Handling
Every animation component MUST have a hook:
```tsx
const shouldReduce = useReducedMotion();
// If true: duration = 0 OR animation = fade only
```

### 3. Motion Content Pattern
If a page relies heavily on motion (e.g., A 3D WebGL experience):
1.  **Detect**: First-time visit.
2.  **Ask**: Modal "Enable immersive motion effects?".
3.  **Respect**: Save preference to Cookie/LocalStorage.
4.  **Fallback**: Provide a comprehensive static version.

---

## ⌨️ Focus Management
*   **Transitioning**: When a route changes, focus must move to the new container (H1 or Wrapper).
*   **Modals**: Focus must be trapped within the modal while animating.
*   **Skip**: Allow users to "Skip Intro" animations via Keyboard (Space/Enter).

---

> **"If it makes them sick, it's not a feature. It's a bug."**
