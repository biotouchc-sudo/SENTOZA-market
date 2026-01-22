# UX Laws (Enforced)

**Purpose:** Transform vague UX principles into actionable, enforceable rules.

## Core Laws (No Exceptions)

### Law 1: No Screen Without Primary Action
Every screen MUST have ONE clear primary action.
- Violation: Homepage with 5 equal CTAs
- Fix: ONE hero CTA, others secondary

### Law 2: No Action Without Feedback
Every user action MUST provide immediate feedback.
- Button click → Loading state
- Form submit → Progress indicator
- File upload → Upload progress bar

### Law 3: No Wait Without Progress
Any operation > 1 second MUST show progress.
- Loading → Skeleton UI or spinner
- Processing → % complete or steps
- NOT: blank screen

### Law 4: Errors Must Teach
Error messages MUST explain:
1. What happened
2. Why it happened
3. How to fix it

**Bad:** "Error: Invalid input"  
**Good:** "Email format is incorrect. Example: user@example.com"

### Law 5: Defaults Must Be Safe
Default selections MUST be:
- Non-destructive
- Reversible
- Aligned with 80% use case

**Example:** "Delete account" → NOT pre-checked

## Enforcement

Violation → **UX FAIL** → Feature blocked until fixed.

Agent must output:
```json
{
  "ux_violation": "No primary action on /dashboard",
  "law_broken": "Law 1",
  "fix_required": "Add primary CTA above fold"
}
```

## Integration

This is read alongside `web.fundamentals.rules.md` UX section.
