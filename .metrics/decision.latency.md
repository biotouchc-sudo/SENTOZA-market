# Decision Latency Metrics

> [!NOTE]
> In 2026, speed is not just code execution time. It is **Decision Velocity**.
> This log tracks how long it takes to move from "Proposal" to "Architecture Lock".

| ID | Decision Topic | Proposal Date | Lock Date | Latency (Hrs) | Complexity (1-5) | Justification for Delay (if > 2h) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DL-001** | **Tech Stack Selection** | 2026-01-20 10:00 | 2026-01-20 10:30 | 0.5 | 5 | N/A (Fast alignment) |
| **DL-002** | **Memory Cache vs Redis** | 2026-01-21 04:00 | 2026-01-21 04:15 | 0.25 | 3 | N/A |
| **DL-003** | **Governance Layer Implementation** | 2026-01-21 05:00 | 2026-01-21 05:10 | 0.16 | 4 | N/A |

## Latency Targets
- **Trivial Decisions (Styles, Text)**: < 10 minutes
- **Tactical Decisions (Component logic)**: < 30 minutes
- **Strategic Decisions (Architecture, DB)**: < 2 hours
- **Existential Decisions (Pivot, Kill)**: < 24 hours

> [!WARNING]
> If a Tactical Decision takes > 1 hour, it is likely **Overengineering** or **Analysis Paralysis**. Trigger `stop.conditions.md`.
