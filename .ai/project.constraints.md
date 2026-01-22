# Project Constraints (Constraint-Driven Design)

> [!IMPORTANT]
> Constraints are not limitations; they are power.
> These rules define what we **CANNOT** build, preventing overengineering.

## 1. Forbidden Patterns
- **No Client-Side Fetching**: All data fetching MUST happen in Server Components (`page.tsx`) or Server Actions. `useEffect` fetching is banned.
- **No "Prop Drilling" (> 2 levels)**: Use Composition or Context if passing props down more than 2 layers.
- **No "Magic Strings"**: All hardcoded strings (routes, API keys, status codes) must be in constants or enums.
- **No "any" Type**: `TypeScript strict` is on. `any` is forbidden.

## 2. Forbidden Libraries
- **Moment.js/Day.js**: Use standard `Date` API or lightweight `date-fns` only if necessary.
- **Lodash**: Use native ES6+ array methods (`map`, `filter`, `reduce`).
- **Bootstrap/Material UI**: We use Tailwind CSS + Radix UI (Headless) only.
- **Heavy state managers (Redux)**: Use URL state, Server State, or simple Context.

## 3. Complexity Limits
- **Max Component Size**: 250 lines. If larger, split it.
- **Max Bundle Size**: Initial load < 150KB (First Load JS).
- **Max Dependent Waterfall**: 2 levels max (Parallelize data fetching).

## 4. Operational Constraints
- **Zero Config Drift**: Local dev environment must match Production exactly (using `.env.example`).
- **No Secrets in Client**: Any `NEXT_PUBLIC_` var must be audited and justified.
