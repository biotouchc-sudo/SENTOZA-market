# Engineering Principles (Non-Negotiable)

## The 7 Pillars of 2026 Web Engineering

### 1. Core ≠ Skin
- **Separate** logic (Core) from appearance (Style Pack).
- Core: auth, data, state, routing.
- Skin: colors, fonts, animations.
- You can swap skins without touching core.

### 2. Tokenization
- **Every visual value is a Token.**
- No hardcoded `#FF0000` or `16px`.
- Use `--color-primary`, `--space-md`.

### 3. Progressive Enhancement
- **Function first, beauty second.**
- Site must work without JS.
- Animation is a luxury, not a requirement.

### 4. CSS-First, JS-Light
- Use CSS for layout, transitions, states.
- Use JS only for: data fetching, complex interactions.
- Target: < 150KB JS per route.

### 5. Accessibility-First
- Every component: keyboard navigable.
- Every interactive: ARIA labels.
- Every contrast: >= 4.5:1.

### 6. Measure & Guard (The CoreStack Standard)
- **Performance budgets in CI.**
- **Core Web Vitals Targets:**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- Checks: `npm audit`, `lighthouse-ci`.

### 7. AI-Assisted, Human-Supervised
- AI generates components.
- Human reviews for:
  - Token usage
  - Accessibility (WCAG 2.1 AA)
  - Performance

### 8. Zero-Trust Frontend
- Never trust the API.
- Validate ALL incoming data (Zod schemas).
- Sanitize ALL outgoing data.
- **CSP (Content Security Policy)** is mandatory.

**Violation of any principle = Code Review Fail.**
