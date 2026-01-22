# Human Override Protocol

**Purpose:** Define when AI MUST stop and escalate to human decision.

## Immediate STOP Triggers

AI must **STOP immediately** and request human decision if:

### 1. Security Ambiguity
- Auth flow changes
- Data encryption decisions
- API key handling
- Permission boundaries unclear

### 2. Financial Impact Unclear
- Billing-related code
- Payment processing
- Subscription logic
- Refund workflows

### 3. User Data Involved
- PII collection/storage
- Data export/deletion
- Cookie/tracking decisions
- GDPR/compliance changes

### 4. Legal / Compliance Risk
- Terms of Service changes
- Privacy Policy updates
- Age-gating
- Content moderation

### 5. Architectural Point of No Return
- Database schema breaking changes
- Migration that affects production
- Vendor switch (e.g., Stripe → other)

## Response Format

When triggered, Agent MUST output:

```json
{
  "status": "BLOCKED",
  "reason": "Security ambiguity detected",
  "trigger": "Auth flow modification",
  "required_human_decision": "Must Principal Engineer approve auth pattern",
  "risk_level": "HIGH",
  "cannot_proceed_without": "Explicit written approval"
}
```

## Integration

This file is read AFTER `.ai/ai.execution.order.md` Step 0.

No exceptions. No "confidence scoring" can override this.
