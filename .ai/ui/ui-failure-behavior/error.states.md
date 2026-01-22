# UI Failure Behavior: Error States

## 🎯 Purpose
> How the UI communicates when something goes WRONG.
> **Rule**: Never show a raw error. Translate it for humans.

---

## 🚨 Error Severity Levels

| Level | User Impact | UI Treatment | Example |
|-------|-------------|--------------|---------|
| **1: Minor** | Non-blocking | Inline warning | "Password is weak" |
| **2: Medium** | Blocks specific action | Toast + Retry | "Failed to save. Retry?" |
| **3: Critical** | Blocks entire flow | Full-page message | "Server unreachable" |

---

## 📝 Error Message Anatomy

### 1. What Happened (Simple)
*   "We couldn't submit your booking."
*   **NOT**: "HTTP 503 Service Unavailable."

### 2. Why (If Relevant)
*   "The selected time slot is no longer available."

### 3. What to Do Next
*   "Please select a different time."
*   **CTA**: [Select Another Time].

---

## 🎨 Visual Treatment

### Inline Field Error
*   Red border on input.
*   Red text below field.
*   Icon (Alert triangle) optional.

### Toast Error
*   Red background or icon.
*   Auto-dismiss (8s) OR manual dismiss.
*   Action button: [Retry] / [Report].

### Full-Page Error
*   Large icon/illustration.
*   Clear headline.
*   [Go Home] / [Retry] buttons.

---

## 🚫 Forbidden Patterns

1.  **❌ Generic "Something went wrong"**: Be specific or offer help.
2.  **❌ Blaming the user**: "You entered invalid data." → "Please check the email format."
3.  **❌ Multiple errors at once**: Overwhelm. Show one at a time.

---

> **"A good error message is an apology, an explanation, and a solution."**
