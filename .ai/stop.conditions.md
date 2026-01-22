# Kill Switch & Stop Conditions

> [!CAUTION]
> This document defines the **ABSOLUTE BOUNDARIES** for the project.
> If any of these conditions are met, **IMMEDIATELY STOP** all development and notify the user.

## 1. Technical Red Lines
- **Data Loss Risk**: Any operation that risks deleting customer data without backup.
- **Security Breach**: Discovery of exposed API keys, secrets, or PII in logs/client-side.
- **Infinite Loops**: Uncontrolled recursive functions or API calls draining resources.
- **Build Failure**: If `npm run build` fails for > 2 consecutive attempts without a clear fix plan.

## 2. Business Red Lines
- **Brand Misalignment**: Any design change that contradicts the "Premium Dark Luxury" identity (e.g., using cheerful pop colors).
- **Client Confusion**: If the user asks "Where are we?" or "What is this?" more than twice.
- **Scope Creep**: Adding features not in the "Logic Phase" without removing others (Zero-Sum Rule).

## 3. AI Safety Triggers (Hallucination Control)
- **Invented Libraries**: If I propose importing a package that doesn't exist.
- **Zombie Code**: If I start uncommenting legacy code snippets "just in case".
- **Recursive Apologies**: If I apologize more than twice in a row without a solution.

## 4. Emergency Procedures
1. **Freeze**: Stop all writing to files.
2. **Audit**: Run `git status` and check recent changes.
3. **Report**: Use `notify_user` with a "CRITICAL STOP" header.
4. **Wait**: Do not proceed until explicit user override.
