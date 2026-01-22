# Product Intent Contract

**Purpose:** Every feature must have a clear product rationale, not just technical merit.

## Pre-Implementation Questions (ALL must be answered)

1. **What user pain does this feature solve?**
   - Specific user frustration or workflow blocker
   - NOT "it would be nice to have"

2. **What measurable behavior must change?**
   - Concrete metric: clicks, time saved, conversion rate
   - NOT "improve user experience"

3. **What metric defines success?**
   - Conversion: X% increase
   - Retention: Y% reduction in churn
   - Task completion: Z seconds faster
   - NOT "users will like it"

4. **What happens if this feature is removed after 6 months?**
   - If answer is "nothing" → Feature is questionable
   - If answer is "critical workflow breaks" → Feature is valid

5. **Is this feature still valid after 12 months?**
   - Technology changes, user needs evolve
   - If uncertain → Favor simpler, reversible implementation

## Enforcement

**If any answer is unclear → Feature is BLOCKED.**

Agent must output:
```json
{
  "status": "BLOCKED",
  "reason": "Product intent unclear",
  "required": "Product Owner approval with answers to 5 questions"
}
```

## Integration with AI

Before implementing ANY feature, AI must:
1. Read this file
2. Ask these 5 questions
3. Wait for explicit answers
4. Document answers in `adr/NNNN-feature-name.md`
