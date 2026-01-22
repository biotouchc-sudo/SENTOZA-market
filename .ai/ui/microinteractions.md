# Micro-interactions Library (The Details)

## 🎯 Purpose
> A catalog of small, functional moments.
> **Rule**: Every interaction must provide feedback or guidance. No "dead" clicks.

---

## 👆 Input Interactions

### 1. The "Tactile Click"
*   **Trigger**: Active (Mouse Down / Touch Start)
*   **Action**: Scale down to `0.96` (subtle).
*   **Token**: `motion.tokens.scale.subtle` + `timing.t-micro`.
*   **Meaning**: "I felt that."

### 2. Focus Halo
*   **Trigger**: Focus (Tab / Click input)
*   **Action**: Ring opacity 0 -> 1, scale 0.95 -> 1.
*   **Token**: `easing.standard` + `timing.t-fast`.
*   **Meaning**: "I am listening."

### 3. Shake on Error
*   **Trigger**: Validation Fail
*   **Action**: X-axis translation keyframes `[-2, 2, -2, 2, 0]`.
*   **Token**: `timing.t-fast` (x2).
*   **Meaning**: "No, try again."

---

## 🔄 State Transitions

### 4. Skeleton to Content
*   **Trigger**: Data Load Complete
*   **Action**: Crossfade (Skeleton Opacity 1->0, Content Opacity 0->1).
*   **Constraint**: No layout shift. Constant height.
*   **Meaning**: "Here is your data."

### 5. Tab Switch
*   **Trigger**: Click Tab
*   **Action**: Active indicator slides to new position (Shared layout animation).
*   **Token**: `easing.spring-stiff`.
*   **Meaning**: "Moved context."

### 6. Toggle / Switch
*   **Trigger**: Click
*   **Action**: Knob slides x-axis, background color tween.
*   **Token**: `easing.spring-bouncy` (Playful).
*   **Meaning**: "State changed."

---

## 🔔 Feedback

### 7. Toast Entrance
*   **Trigger**: Event
*   **Action**: Slide Up + Fade In from bottom center.
*   **Token**: `timing.t-normal` + `easing.decelerate`.
*   **Meaning**: "FYI."

### 8. Copy to Clipboard
*   **Trigger**: Click Icon
*   **Action**: Icon morphs to "Checkmark" then back after 2s.
*   **Token**: `timing.t-fast`.
*   **Meaning**: "Done."

---

## 🖱️ Pointer Effects

### 9. Magnetic Hover
*   **Trigger**: Mouse Move over Button
*   **Action**: Button translates slightly towards cursor (x/y * 0.2).
*   **Token**: `easing.decereate`.
*   **Meaning**: "I am interactive."

### 10. Card Lift
*   **Trigger**: Hover
*   **Action**: Translate Y -4px, Shadow scale up.
*   **Token**: `timing.t-normal`.
*   **Meaning**: "Pick me."

---

> **"Micro-interactions are the difference between a tool and a toy."**
