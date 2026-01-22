# Project Context Template (Universal)

## 🎯 Purpose
> The Single Source of Truth for *this specific project*.
> **Strict Rule**: If it's not here or in the references, it doesn't exist.

---

## 🚨 Truth Sources (The Constitution)
**Primary Requirements**: `PRD.md` (Linked here: [Path])
**Design Truth**: `design.system.md` (Linked here: [Path])
**Data Truth**: `api.contract.yaml` (Linked here: [Path])

**AI Policy**:
- [ ] **No Hallucination**: Do not invent features/prices/claims.
- [ ] **Ask First**: If a field below is empty, ASK the user.
- [ ] **Claims Check**: Marketing claims must be verified.

---

## 📋 Gate 0: Scope & Identity

```yaml
# ===== REQUIRED: Project Identity =====
Project_Name: "[Name]"
Project_Tier: "[Essential | Premium | Royal (0.01%)]"
Decision_Maker: "[Name/Role]"

# ===== REQUIRED: Scope =====
MVP_Scope:
  - "[Feature 1]"
  - "[Feature 2]"
  
Out_of_Scope (Strict):
  - "[Feature X]"
  - "[Feature Y]"

# ===== REQUIRED: Constraints =====
Budget_Tier: "[Low | Medium | High]"
Timeline: "[Deadline]"
Tech_Constraints: "[e.g., Must use Next.js, No AWS]"
```

---

## 🏢 Gate 1: Business Context

```yaml
Target_Audience:
  - "[Persona A]"
  - "[Persona B]"

Value_Proposition: "[Why do we exist?]"
Revenue_Model: "[e.g., Subscription, One-time, Lead Gen]"

Legal_Constraints:
  - "[e.g., GDPR, HIPAA, PCI-DSS]"
```

---

## 🎨 Gate 2: Design & Experience

```yaml
# Visual DNA (Map to identity.matrix.md)
Personality: "[Luxury | Friendly | Tech | Sci-Fi/Industrial]"
Motion_Level: "[1-5]" (5 = Cinematic/Gaming)
Neon_Accent_Color: "[e.g., Cyber Blue (#00F0FF) | Toxic Green (#39FF14)]"
Core_Visual_Element: "[e.g., 3D Orb, Liquid Metal, Holographic Grid]"

# Key Assets
Logo_Status: "[Ready | Needs Design]"
Images_Status: "[Ready | Stock | AI Gen]"
Typography: "[Standard | Monospace/Terminal Mix]"
```

---

## 📝 Gate 3: Content Strategy

```yaml
Languages: "[ar | en | etc]"
Tone_of_Voice: "[Direct | Poetic | Corporate]"
Content_Readiness: "[None | Draft | Final]"
```

---

## ⚙️ Gate 4: Technical Specs

```yaml
Stack_Preferences:
  - Frontend: "[Next.js 15+]"
  - Backend: "[Node/Python/Go]"
  - DB: "[Postgres/Mongo]"
  - Auth: "[Clerk/Auth0]"

Integrations:
  - "[Stripe]"
  - "[SendGrid]"
  - "[CMS]"
```

---

## 🚀 Gate 5: Growth & Ops

```yaml
SEO_Focus: "[Local | Global | Niche]"
Analytics_Tools: "[GA4 | PostHog]"
Support_Channel: "[WhatsApp | Email | Chat]"
```

---

## ✅ Readiness Checklist (The Owner's Sign-off)

| Item | Owner | Status | Risk if Missing |
|------|-------|--------|-----------------|
| Budget Approved | Client | ⬜ | Project Stop |
| Design Assets | Designer | ⬜ | UI Delays |
| Content Final | Client | ⬜ | Layout Breaks |
| Legal Check | Legal | ⬜ | Lawsuits |

---

> **"Ambiguity is the enemy of excellence."**
