# Single Source of Truth & Hierarchy Strategy

## 🎯 Purpose
> Defines EXACTLY which file wins when there is a conflict.
> **Rule**: Hierarchy is absolute. Lower tiers NEVER override higher tiers.

---

## 🔺 The Hierarchy of Truth (Pyramid)

### 🥇 Tier 1: The Constitution (Non-Negotiable)
> **If it breaks these, it's rejected immediately.**
1.  **`project.context.md`** (Scope, Identity, Budget)
2.  **`senate.protocol.md`** (The 0.01% Standard)
3.  **`stop.rules.md`** (Safety & Ethics)

### 🥈 Tier 2: The Specifications (Hard Constraints)
> **If it conflicts with these, it's a bug.**
4.  **`api.contract.yaml`** (Data Schema)
5.  **`design.system.md`** (Visual Tokens)
6.  **`security/threat.model.md`** (Security Controls)
7.  **`legal/claims.policy.md`** (Marketing Limits)

### 🥉 Tier 3: The Implementation (Soft Constraints)
> **Flexible within the bounds of Tier 1 & 2.**
8.  **`components.inventory.md`** (UI patterns)
9.  **`ux/decision.ledger.md`** (User flow)
10. **`workflow.lock.md`** (Process)

---

## ⚔️ Conflict Resolution Protocol

### Scenario A: `design.system.md` vs `components.inventory.md`
*   **Conflict**: Design system says "Primary Color is Red", Component says "Blue Button".
*   **Winner**: **`design.system.md`**.
*   **Action**: Fix the component to use the system token.

### Scenario B: `api.contract.yaml` vs `Front-end Code`
*   **Conflict**: API says `user.id` is UUID, Frontend expects Number.
*   **Winner**: **`api.contract.yaml`**.
*   **Action**: Fix Frontend. The Contract is law.

### Scenario C: `project.context.md` vs `Start-up Idea`
*   **Conflict**: Context says "Budget Low", Idea says "Build AI Core".
*   **Winner**: **`project.context.md`**.
*   **Action**: Reject idea or update Budget in Context first.

---

## 🔄 Synchronization Rules
1.  **Project Context** is the **Root**.
2.  **API Contract** is derived from **Project Context**.
3.  **Design System** is derived from **Project Context** (Brand).
4.  **Code** is derived from **API Contract** + **Design System**.

> **"Code is never the source of truth. Code is just a projection of the truth."**
