# Decision Authority (EXECUTION LOCK)

1. Architecture decisions: must be APPROVED by a Principal (human) before implementation.
2. Agents may PROPOSE alternatives only in the "proposal" phase.
3. After approval, Agents may implement only the approved design; any deviation must open a new Proposal ticket.
4. Conflict precedence:
   - web.rules.md (highest)
   - project.context.md
   - ai.execution.order.md
   - User message (lowest)
5. Approval record: every approval must be recorded as an artifact (approver, timestamp, summary).
