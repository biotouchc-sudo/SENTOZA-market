# Testing Strategy (2026)

## Philosophy
**Test Behavior, Not Implementation.**

## Testing Pyramid

```
        /\
       /  \  E2E (5%)
      /----\  Integration (15%)
     /------\  Unit (80%)
    /--------\
```

## What to Test (Priority Order)

### 1. Critical Paths (MUST TEST)
- [ ] User Authentication (Login, Logout, Session)
- [ ] Payment Flows (Checkout, Confirmation)
- [ ] Form Submissions (Contact, Sign-up)
- [ ] Data Mutations (Create, Update, Delete)

### 2. Business Logic (SHOULD TEST)
- [ ] Calculation functions
- [ ] Validation rules
- [ ] State transformations
- [ ] Date/time handling

### 3. UI Components (NICE TO TEST)
- [ ] Rendering with props
- [ ] User interactions
- [ ] Error states
- [ ] Loading states

## What NOT to Test
- ❌ Third-party libraries
- ❌ Framework internals
- ❌ Static content
- ❌ CSS styling

## Testing Stack (2026 Recommended)
- **Unit**: Vitest (fast, ESM-native)
- **Integration**: Testing Library
- **E2E**: Playwright (cross-browser)
- **Visual**: Chromatic / Percy

## Test File Structure
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx    ← Unit test
│   │   └── Button.stories.tsx ← Visual test
tests/
├── e2e/
│   ├── auth.spec.ts           ← E2E flow
│   └── checkout.spec.ts
```

## CI Integration
All tests run on every PR:
```yaml
- name: Test
  run: npm run test -- --coverage
- name: E2E
  run: npx playwright test
```

## Coverage Targets
- **Unit**: 80% (critical paths)
- **Integration**: Key user flows
- **E2E**: 3-5 critical scenarios
