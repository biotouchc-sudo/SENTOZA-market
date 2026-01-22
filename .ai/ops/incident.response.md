# Incident Response & Crisis Protocols

## 🎯 Purpose
> What to do when things go WRONG.
> **Rule**: Panic is expensive. Protocols are free.

---

## 🚨 Defcon Levels

### 🔴 Defcon 1: Critical System Down
*   **Definition**: Users cannot complete primary goal (Checkout, Login).
*   **Authorized Actions**:
    1.  Activate `maintenance.mode` switch.
    2.  Rollback to `last-known-good` commit immediately.
    3.  Notify stakeholders (SMS/Call).
*   **Decision Maker**: CTO / Lead Dev.

### 🟠 Defcon 2: Degraded Performance
*   **Definition**: System slow (>3s) or secondary features broken (Reviews, Search).
*   **Authorized Actions**:
    1.  Disable heavy features (Feature Flags).
    2.  Enable heavy caching (TTL increase).
    3.  Scale up database/instaces.
*   **Decision Maker**: Senior Dev.

### 🟡 Defcon 3: Minor Bug / Glitch
*   **Definition**: Visual bug, typo, non-blocking error.
*   **Authorized Actions**:
    1.  File ticket.
    2.  Fix in next scheduled hotfix.
*   **Decision Maker**: Product Owner.

---

## 🚑 Emergency Playbooks (Runbooks)

### 📉 Scenario A: "The Bad Deploy"
1.  **Stop**: Do not try to "fix forward" unless the fix is 1 line.
2.  **Revert**: Command: `git revert main` or `vercel rollback`.
3.  **Verify**: Check health endpoint.
4.  **Analyze**: Why did CI pass? Add test case.

### 🏴‍☠️ Scenario B: "Security Breach / Leak"
1.  **Rotate**: Invalidate ALL API keys and Sessions immediately.
2.  **Patch**: Close the vulnerability.
3.  **Audit**: Scan logs for exfiltrated data.
4.  **Disclose**: Legal requirement (GDPR/Local Law).

### 🐌 Scenario C: "API is Down/Slow"
1.  **Circuit Break**: Frontend switches to "Offline/Read-Only" mode.
2.  **Queue**: Buffer user actions (e.g., "Saved to device, will retry").
3.  **Inform**: Show clear status banner (not generic error).

---

## 🛑 The "Do Not" List (Crisis Management)
1.  ❌ **Do NOT** debug on production (use logs).
2.  ❌ **Do NOT** deploy "quick fixes" without tests (it makes it worse).
3.  ❌ **Do NOT** hide the issue from users (be transparent).
4.  ❌ **Do NOT** blame team members during the incident (Focus on recovery).

---

> **"Availability is a feature. Recovery is a skill."**
