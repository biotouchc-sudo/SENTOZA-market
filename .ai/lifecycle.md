# Project Lifecycle Awareness

**Purpose:** AI must adapt engineering decisions based on project maturity phase.

## The Four Phases

### Phase 1: Validation (0-3 months)
**Goal:** Prove the idea works  
**Priority:** Speed > Perfection

**Rules:**
- Prefer: Managed services over self-hosted
- Prefer: Third-party auth (Clerk) over custom
- Prefer: Monolith over microservices
- Skip: Custom analytics, complex caching
- Technical debt: **Acceptable** if documented

**Metric:** Time to first user feedback

---

### Phase 2: Growth (3-12 months)
**Goal:** Handle scale without breaking  
**Priority:** Stability > New Features

**Rules:**
- Add: Error monitoring (Sentry)
- Add: Performance budgets
- Add: Automated tests (critical paths)
- Refactor: Config to environment variables
- Technical debt: **Must be addressed**

**Metric:** Uptime, error rate, P95 latency

---

### Phase 3: Scale (12-24 months)
**Goal:** Optimize cost and performance  
**Priority:** Cost Efficiency > Speed

**Rules:**
- Optimize: Database queries, caching strategy
- Consider: Edge computing, CDN strategies
- Evaluate: Self-hosting vs managed services
- Reduce: Vendor dependencies with lock-in
- Technical debt: **Zero tolerance**

**Metric:** Cost per user, infrastructure efficiency

---

### Phase 4: Maintenance (24+ months)
**Goal:** Keep the lights on, minimize changes  
**Priority:** Simplicity > Novelty

**Rules:**
- Avoid: New frameworks unless critical
- Prefer: Boring, proven solutions
- Focus: Security patches, dependency updates
- Resist: Feature creep
- Document: Everything for future handoff

**Metric:** Maintenance cost, developer onboarding time

---

## How AI Uses This

Before making ANY architectural decision, AI must:

1. **Ask:** "What phase is this project in?"
2. **Check:** `project.context.md` for lifecycle phase
3. **Apply:** Rules from appropriate phase
4. **Block:** Decisions that violate phase priorities

**Example:**

```json
{
  "decision": "Build custom analytics",
  "project_phase": "Validation",
  "status": "BLOCKED",
  "reason": "Phase 1 prioritizes speed. Use Google Analytics or PostHog.",
  "reconsider_in": "Phase 2 (Growth)"
}
```

## Integration

Declare phase in `project.context.md`:

```markdown
# project.context.md
Phase: Validation | Growth | Scale | Maintenance
```
