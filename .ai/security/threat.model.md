# Threat Model (The Security Shield)

## 🎯 Purpose
> Identify attack surfaces, threats, and mitigations BEFORE development.
> **Rule**: Security is not an afterthought. It's a Gate requirement.

---

## 🎯 Threat Categories (STRIDE)

| Category | Description | Priority |
|----------|-------------|----------|
| **S**poofing | Impersonating a user/system | 🔴 Critical |
| **T**ampering | Modifying data/code | 🔴 Critical |
| **R**epudiation | Denying actions | 🟡 Medium |
| **I**nformation Disclosure | Data leaks | 🔴 Critical |
| **D**enial of Service | System unavailability | 🟠 High |
| **E**levation of Privilege | Unauthorized access | 🔴 Critical |

---

## 🛡️ Attack Surfaces & Mitigations

### 1. Authentication
```yaml
Threats:
  - Credential stuffing
  - Brute force attacks
  - Session hijacking
  - Token theft

Mitigations:
  - Rate limiting (5 attempts / 15 min)
  - MFA for sensitive accounts
  - Secure session tokens (httpOnly, Secure, SameSite)
  - JWT rotation (short expiry + refresh token)
  - Account lockout after failed attempts

Gates:
  - [ ] Auth tested with OWASP ZAP
  - [ ] Session tokens reviewed
  - [ ] Password policy enforced (12+ chars, complexity)
```

---

### 2. API Endpoints
```yaml
Threats:
  - SQL/NoSQL Injection
  - Broken Object Level Authorization (BOLA)
  - Mass assignment
  - Excessive data exposure

Mitigations:
  - Input validation (strict schemas)
  - Parameterized queries (no string concat)
  - Authorization checks on EVERY endpoint
  - Response filtering (no internal IDs)
  - Rate limiting per endpoint

Gates:
  - [ ] All inputs validated against schema
  - [ ] Auth middleware on protected routes
  - [ ] Response sanitized
```

---

### 3. Frontend Security (Zero-Trust Standard)
```yaml
Threats:
  - XSS (Cross-Site Scripting)
  - CSRF (Cross-Site Request Forgery)
  - Clickjacking
  - Supply chain attacks (npm packages)
  - Data exfiltration via third-party scripts
  - Unverified API responses (Blind Trust)

Mitigations:
  - **Zero-Trust Principle**: "Never trust the client, never trust the API."
  - Content Security Policy (CSP) - Strict (Deny all by default)
  - Subresource Integrity (SRI)
  - CSRF tokens (Double Submit Cookie or Synchronizer)
  - X-Frame-Options: DENY
  - npm audit in CI (block critical CVEs)
  - Zod Schema Validation on ALL API responses (don't trust backend)

Mitigations:
  - Content Security Policy (CSP)
  - Subresource Integrity (SRI)
  - CSRF tokens
  - X-Frame-Options: DENY
  - npm audit in CI (block critical CVEs)
  - Escape all user-generated content

Gates:
  - [ ] CSP header configured
  - [ ] SRI on external scripts
  - [ ] npm audit clean (0 critical)
```

---

### 4. Data Storage
```yaml
Threats:
  - Data breach
  - Insufficient encryption
  - Backup exposure
  - Log injection

Mitigations:
  - Encryption at rest (AES-256)
  - Encryption in transit (TLS 1.3)
  - PII masking in logs
  - Secure backup storage
  - Access logs for sensitive tables

Gates:
  - [ ] Database encrypted
  - [ ] TLS enforced
  - [ ] No PII in logs
```

---

### 5. File Upload
```yaml
Threats:
  - Malicious file upload
  - Path traversal
  - Server-side content parsing

Mitigations:
  - File type validation (magic bytes, not extension)
  - File size limits
  - Sanitized filenames
  - Store outside webroot
  - Virus scanning (optional)

Gates:
  - [ ] File validation implemented
  - [ ] Size limits enforced
  - [ ] Files stored securely
```

---

### 6. Third-Party Integrations
```yaml
Threats:
  - API key exposure
  - Webhook spoofing
  - Data leakage to third party

Mitigations:
  - API keys in environment variables (never in code)
  - Webhook signature verification
  - Minimal data sharing (need-to-know)
  - Audit third-party access

Gates:
  - [ ] No secrets in repo (scanned)
  - [ ] Webhook signatures verified
  - [ ] Third-party audit complete
```

---

## 🚨 Incident Response Protocol

### Step 1: Detection
- Monitor alerts (Sentry, logging)
- User reports
- Automated scanning

### Step 2: Containment
- Isolate affected systems
- Revoke compromised credentials
- Enable maintenance mode if needed

### Step 3: Investigation
- Collect logs
- Identify attack vector
- Assess data impact

### Step 4: Recovery
- Patch vulnerability
- Restore from backups if needed
- Notify affected users (if required)

### Step 5: Post-Mortem
- Document incident
- Update threat model
- Add tests to prevent recurrence

---

## 📋 Security Checklist (Gate 4 Requirement)

| Check | Status | Priority |
|-------|--------|----------|
| [ ] Authentication reviewed | ⬜ | 🔴 |
| [ ] API authorization tested | ⬜ | 🔴 |
| [ ] CSP header configured | ⬜ | 🔴 |
| [ ] npm audit passing | ⬜ | 🔴 |
| [ ] No secrets in codebase | ⬜ | 🔴 |
| [ ] Input validation complete | ⬜ | 🔴 |
| [ ] HTTPS enforced | ⬜ | 🔴 |
| [ ] Rate limiting configured | ⬜ | 🟠 |
| [ ] Logging sanitized (no PII) | ⬜ | 🟠 |
| [ ] Backup encryption verified | ⬜ | 🟠 |

---

> **"Assume breach. Design for containment."**
