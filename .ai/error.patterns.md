# Error Patterns & Prevention

**Learned from experience.**

## 1. Missing Error Boundaries
**Pattern:** One component crashes entire app.
**Rule:** Every Page and Major Component must be wrapped in `<ErrorBoundary>`.
**Enforcement:** Lint rule `react/error-boundary`.

## 2. Unhandled Promise Rejections
**Pattern:** API fails, user sees spinner forever.
**Rule:** All async calls must have `.catch` or `try/catch`.
**Enforcement:** `no-floating-promises`.

## 3. Layout Shift (CLS)
**Pattern:** Images load and jump content.
**Rule:** All images MUST have `width/height` or `aspect-ratio`.
**Enforcement:** Custom CI check.

## 4. Secret Exposure
**Pattern:** API keys in client-side code.
**Rule:** No `NEXT_PUBLIC_` for secrets.
**Enforcement:** Secret scanner pre-commit.
