# Cost Guardrails

**Purpose:** Prevent vendor lock-in, cloud cost explosions, and unnecessary dependencies.

## Dependency Cost Analysis

Any new dependency (npm package, cloud service, API) MUST declare:

### 1. Runtime Cost
- Requests/month at scale
- Data transfer costs
- Compute requirements

### 2. Build Cost
- Build time impact
- CI minutes consumed
- Bundle size increase

### 3. Vendor Lock-in Risk
- **Low**: Open-source, self-hostable
- **Medium**: Vendor APIs with alternatives
- **High**: Proprietary formats, closed ecosystems

## Cost Decision Matrix

| Scenario | Preferred Solution | Avoid |
|:---|:---|:---|
| Data fetching | Static (ISR) | Server on every request |
| Assets | Edge CDN | Origin server |
| State | Client + Cache | Database queries |
| Compute | Edge Functions | Full server instances |

## Hard Rules

1. **No new cloud service** without cost projection for 10K users
2. **No proprietary formats** for critical data (prefer JSON, SQL)
3. **No vendor APIs** without open-source fallback plan

## Enforcement

If cost impact unknown → **BLOCK**.

Agent must output:
```json
{
  "dependency": "package-name",
  "runtime_cost": "estimated $X/month at 10K users",
  "lock_in_risk": "Low/Medium/High",
  "cheaper_alternative": "alternative-package or N/A"
}
```
