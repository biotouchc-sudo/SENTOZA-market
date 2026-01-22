# Orchestration Strategy (The Conductor)

**Insight form Video Analysis:**
Great developers don't just "write code". They "orchestrate components".
They move between:
1. **Scaffolding** (Structure)
2. **wiring** (Data Flow)
3. **Styling** (Visuals)
4. **Refining** (Polish)

## The 4-Beat Rhythm (Our Workflow)

To mimic this "Human Master" flow, we (AI + User) will work in 4 beats:

### Beat 1: The Blueprint (Skeleton)
- **Action:** Create file structure + Empty components.
- **Output:** A site that "runs" but is empty.
- **Why?** Catches architectural errors early.

### Beat 2: The Logic (Nervous System)
- **Action:** Connect API data + Types + State.
- **Output:** A site that "works" but is ugly.
- **Why?** Ensures data integrity before styling distracts us.

### Beat 3: The Skin (Design System)
- **Action:** Apply Tokens + Classes (Tailwind).
- **Output:** A site that looks professional.
- **Why?** Rapid styling using our pre-defined system.

### Beat 4: The Magic (Soul)
- **Action:** Add `anime.js` motions + Micro-interactions.
- **Output:** The 0.1% feel.
- **Why?** This is the polish layer that costs 90% of time if done too early.

## The Rule of "One Beat at a Time"
We will NOT try to generate a perfect, styled, animated component in one shot.
We will iterate: `Structure` → `Logic` → `Style` → `Motion`.

This prevents the "Context Overload" hallucination common in AI.
