# Thinking Patterns (Methodology Reuse)

## 🎯 Purpose
> Defines what concepts are "Reusable" (The Method) vs "Forbidden" (The Solution).
> **Goal**: Clone the *Way of Thinking*, not the *Result*.

---

## ✅ Reusable Patterns (The "How")

### 1. The "Gate" Concept
*   **Concept**: Breaking a process into strict checkpoints.
*   **Reuse**: Apply to Deployments, Design Handoff, Content Approval.
*   **Do Not Clone**: The *specific gates* of a different project (e.g., Don't use Banking gates for a Blog).

### 2. The "Source of Truth" Principles
*   **Concept**: Single point of definition for data/style.
*   **Reuse**: Use for Tokens, Locales, API Schemas, Legal.
*   **Do Not Clone**: The *content* of the truth (e.g., Don't copy color palette).

### 3. The "Anti-Fragile" Approach
*   **Concept**: Designing for failure (Errors, Offline, Bad Input).
*   **Reuse**: Always handle `error`, `loading`, `empty` states.
*   **Do Not Clone**: The specific error messages or UI recovery flows.

---

## ❌ Forbidden Clones (The "What")

### 1. The "Visual DNA"
*   **Forbidden**: Copying specific shadow spreads, motion curves, or corner radii from Project A to Project B.
*   **Why**: Creates "Generic" look. Every brand needs unique DNA.

### 2. The "Voice"
*   **Forbidden**: Copying microcopy, error messages humor, or onboarding tone.
*   **Why**: Tone must match the specific Brand Persona.

### 3. The "Business Logic"
*   **Forbidden**: Copying pricing models, checkout flows blindly.
*   **Why**: Business models differ. A salon checkout ≠ E-commerce checkout.

---

## 🧠 Mental Models to Adopt
1.  **Inversion**: "How do I break this?" (Before building).
2.  **First Principles**: "Why does this button exist?" (Not just "because design has it").
3.  **Second-Order Thinking**: "If I add this feature, what is the maintenance cost in 2 years?"

---

> **"Amateurs borrow code. Professionals steal thinking."**
