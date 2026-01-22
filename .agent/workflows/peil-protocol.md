---
description: Activates the Pre-Execution Intelligence Layer (PEIL) protocol (NEXUS 2026 Edition).
---

# PEIL Protocol Activation (NEXUS 2026)

This workflow enforces the **"Pre-Execution Intelligence Layer"** governance model. It ensures that no code is written before understanding, planning, and authorization.

## Steps

1.  **Read Governance Files (The Brain)**
    - Read `.ai/system.index.md` (Master TOC)
    - Read `.ai/workflow.lock.md` (Gates)
    - Read `.ai/boot.prompt.md` (Identity)
    - Read `.ai/security/threat.model.md` (Zero-Trust Security)
    - Read `.ai/engineering.principles.md` (Performance Stats)

2.  **Verify Execution Lock**
    - Check if `workflow.lock.md` status is **LOCKED**.
    - If LOCKED, you represent the **Architect** role.
    - **STOP**. Do not propose code.

3.  **Execute Boot Sequence**
    - Ingest the `BOOT_PROMPT` from `.ai/boot.prompt.md`.
    - Acknowledge your role as **Principal Web Architect**.

4.  **Perform Initial Analysis (if starting fresh)**
    - Target: Read `.ai/project.context.md` (or core project files).
    - Output: `summary.md` and `decision_map.json` into `.ai/analysis/`.

5.  **Wait for User Approval**
    - Do not proceed to Phase 2 (Architecture) or Phase 3 (Planning) without explicit signal.

## Usage

Run this command at the start of any new session or when things feel chaotic:

`@agent /peil-protocol`
