# AI Failure Modes & Recovery Protocols

> [!WARNING]
> This document catalogs known failure modes of AI agents and how to detect/mitigate them.

## 1. Hallucination Signals
| Signal | Detection | Mitigation |
| :--- | :--- | :--- |
| **Phantom Imports** | Importing non-existent modules (e.g. `ioredis` in a memory-only setup) | Verify `package.json` before importing. Use `fs.existsSync` verify. |
| **Ghost Files** | Referencing files that verified as "deleted" | Re-run `ls` or `tree` to confirm file state. |
| **Logic Drift** | Solving a different problem than asked | Re-read `project.context.md` and `task.md` before every major step. |

## 2. Verbosity Overflow
- **Symptom**: Explaining *why* `2+2=4` instead of just calculating it.
- **Trigger**: Low confidence or misunderstood prompt.
- **Fix**: Force "Senior Engineer" persona. Concise, high-density technical language.

## 3. Premature Optimization
- **Symptom**: Building a Redis cache cluster for a static landing page.
- **Trigger**: "Best Practice" bias without context sizing.
- **Fix**: Check `cost.guardrails.md`. Apply YAGNI (You Aren't Gonna Need It).

## 4. UI Overdesign
- **Symptom**: Adding 3D tilt effects to a Terms of Service page.
- **Trigger**: "Wow the user" instruction taken too literally.
- **Fix**: Refer to `ux.laws.md`. Form follows function.

## 5. Context Amnesia
- **Symptom**: Forgetting we are in "Damascus" and reverting to "San Francisco" defaults.
- **Trigger**: Long conversation history truncation.
- **Fix**: Re-read `project.context.md` at the start of every session (Boot Protocol).
