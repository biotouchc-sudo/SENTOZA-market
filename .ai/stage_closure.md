# Stage Closure Checklist (The Gatekeeper)

> [!IMPORTANT]
> This checklist MUST be completed before marking ANY phase (Beat) as "Done".
> NO EXCEPTIONS.

## 1. Governance Check
- [ ] **Decision Log Updated**: Are all major architectural decisions recorded in `.ai/decision.log.md`?
- [ ] **Guardrails Respected**: Did we violate any rule in `cost.guardrails.md` or `stop.conditions.md`?
- [ ] **No "Magic" Code**: Is every `use client` justified? Is every `any` type removed?

## 2. Technical Debt Check
- [ ] **Zero Console Errors**: Is the browser console clean?
- [ ] **Zero Build Errors**: Does `npm run build` pass cleanly?
- [ ] **Zero Lint Errors**: Does `npm run lint` pass?
- [ ] **No "TODO" Leftovers**: Are there any critical TODOs blocking release?

## 3. Security Check
- [ ] **Secrets Safe**: No API keys hardcoded?
- [ ] **Headers Set**: CSP and Security headers verified?
- [ ] **Auth protected**: Private routes blocked by Middleware?

## 4. Documentation Check
- [ ] **Context Updated**: Is `project.context.md` current?
- [ ] **Artifacts Created**: Is the Phase Report generated?

## 5. User Approval
- [ ] **Explicit Consent**: Did the user say "Yes" or "Proceed"?

---
**Signed by:** [Agent Antigravity]
**Date:** [Current Date]
