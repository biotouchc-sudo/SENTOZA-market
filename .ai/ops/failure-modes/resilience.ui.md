# Failure Modes & Resilience UI

## 🎯 Purpose
> UI states for when the world breaks.
> **Goal**: Graceful degradation. The app never "crashes", it just "adapts".

---

## 📉 Degraded States

### 1. Offline / Flaky Network
*   **UI**: Show "Toast" notification: "Trying to reconnect...".
*   **Action**: Disable interactions requiring immediate sync.
*   **Data**: Serve stale data from cache (React Query / SWR).
*   **Visual**: Gray out "Live" indicators.

### 2. API High Latency (>3s)
*   **UI**: Switch from "Skeleton" to "Polite Loading Message".
*   **Message**: "Things are taking longer than usual..."
*   **Option**: "Cancel" or "Notify me when done".

### 3. Empty States (Zero Data)
*   **Never**: Just a blank white space.
*   **Always**:
    *   Illustration (Visual hook).
    *   Friendly text ("No appointments yet").
    *   Call to Action ("Book your first one!").

---

## 🩹 Partial System Failures

### IF "Payment Gateway" is Down:
*   **Don't**: Show 500 error page.
*   **Do**: "Payments are paused. You can 'Reserve' now and pay at the salon."

### IF "Images CDN" is Down:
*   **Don't**: Show broken icon <img>.
*   **Do**: Show colored placeholders with Initials/Icons.

### IF "Chat Support" is Offline:
*   **Don't**: Hide button.
*   **Do**: Change to "Leave a message (Replies in 2h)".

---

> **"The true quality of a UI is judged when the server is on fire."**
