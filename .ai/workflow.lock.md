# Workflow Orchestrator (Universal Gated System)

## 🎯 Purpose
> A universal operating system for project execution with strict gates and "Source of Truth" enforcement.

---

## 🚨 Source of Truth Policy (The Constitution)
**Strict "No Hallucination" Rules:**
1.  **Requirement Truth**: `PRD.md` (or equivalent) is the ONLY source of requirements. Do not invent features.
2.  **Design Truth**: `design.system.md` & `tokens.ts` are the ONLY sources of style. Do not invent hex codes.
3.  **Data Truth**: `api.contract.yaml` (or equivalent) is the ONLY source of data schema. Do not invent fields.
4.  **AI Policy**:
    *   Never invent prices, legal policies, or compatibility claims.
    *   Any marketing claim must pass the "Claims Checklist".
    *   If a requirement is missing → **ASK**, do not assume.

---

## 🏛️ Phase & Gate Registry

### 🚪 Gate 0: Scope & Decision
**Owner**: Client / Product Owner
**Entrance Criteria**:
- [ ] Project Context Filled (`project.context.md`)
- [ ] Decision Maker Identified
- [ ] Budget & Timeline constraints defined
- [ ] "Out of Scope" explicitly listed
**Risk if skipped**: Infinite Scope Creep.

---

### 🚪 Gate 1: Business & Fundamentals (Phase 0)
**Owner**: Business Analyst / Strategist
**Entrance Criteria**:
- [ ] Target Audience & Personas defined
- [ ] Core Value Proposition defined
- [ ] Domain & Legal Constraints identified
- [ ] Payment Gateway & Currency decided
**Artifacts**: `business.strategy.md`, `legal.constraints.md`

---

### 🚪 Gate 2: Architecture & Design (Phase 1)
**Owner**: Lead Architect / Lead Designer
**Entrance Criteria**:
- [ ] **IA & User Flows**: Sitemap and critical paths defined.
- [ ] **Design System**: Tokens (Color, Type, Space) finalized.
- [ ] **API Contract**: Data schemas & Endpoints defined.
- [ ] **Reference UI**: "Golden Reference" concepts approved.
- [ ] **Stack Decision**: Tech stack locked (Framework, DB, Auth).
**Artifacts**: `design.system.md`, `api.contract.md`, `architecture.md`

---

### 🚪 Gate 3: Content & Tone (Phase 2)
**Owner**: Content Strategist
**Entrance Criteria**:
- [ ] **Content Matrix**: Key headings and messages for all pages.
- [ ] **Tone of Voice**: Guidelines defined (e.g., Luxury vs Friendly).
- [ ] **Claims Checklist**: All marketing claims verified.
- [ ] **Asset Readiness**: Images/Videos ready or placeholders defined.
**Artifacts**: `content.strategy.md`

---

### 🚪 Gate 4: Implementation & Verification (Phase 3)
**Owner**: Lead Developer / QA
**Entrance Criteria**:
- [ ] **Code Contracts Passing**: Lint, Typecheck, Tests.
- [ ] **Visual Regression**: 100% match with Golden Reference.
- [ ] **Performance Budget**: Lighthouse scores met.
- [ ] **Accessibility**: Zero violations.
- [ ] **Security Scan**: 0 Vulnerabilities.
**Artifacts**: `test.reports.md`, `security.audit.md`

---

### 🚪 Gate 5: Operations & Growth (Phase 4)
**Owner**: DevOps / Growth Lead
**Entrance Criteria**:
- [ ] **Runbooks**: Incident response & maintenance guides ready.
- [ ] **Analytics**: Tracking events configured & verified.
- [ ] **SEO**: Meta tags & Sitemap validated.
- [ ] **Legal**: Privacy Policy & Terms published.
**Artifacts**: `ops.runbook.md`, `growth.plan.md`

---

## 📈 Current Project Status
```yaml
Project: "Santoza DXP"
Current_Gate: "Gate 4"
Status: "IN_PROGRESS"
Last_Gate_Review: "2026-01-22"
Next_Review: "2026-01-23"
Current_Phase: "Phase 5 - Elite Features"
```

---

## 📝 Gate Review Log
| Date | Gate | Status | Reviewer | Notes |
|------|------|--------|----------|-------|
| | | | | |

---

> **"A Gate is not a blocker. It is a quality guarantee."**
