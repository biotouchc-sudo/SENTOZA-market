# The 0.1% Tech Stack (Libraries that prevent re-invention)

**Rule:** Never write what you can import (if it's optimized).

## 1. Data Validation: `zod` 🛡️
- **Why?** Typescript isn't enough at runtime.
- **Use for:** API inputs, Forms, Env variables.
- **Prevention:** Prevents "undefined is not a function" crashes.

## 2. Form Management: `react-hook-form` 📝
- **Why?** React forms are slow and messy.
- **Use for:** All input handling.
- **Prevention:** Prevents re-render lag on typing.

## 3. Server State: `tanstack/react-query` 📡
- **Why?** `useEffect` for data fetching is an anti-pattern in 2026.
- **Use for:** API caching, pre-fetching, auto-refetch.
- **Prevention:** Prevents stale data and loading spinners.

## 4. Date Handling: `date-fns` 📅
- **Why?** Moment.js is dead/heavy. Native Date is painful.
- **Use for:** Formatting, relative time, timezones.
- **Prevention:** Prevents timezone bugs.

## 5. UI Primitives: `radix-ui` (Headless) 🧱
- **Why?** Building accessible Modals/Tooltips from scratch is hard.
- **Use for:** Complex interactive components (accessible logic only).
- **Prevention:** Prevents accessibility lawsuits.

## 6. Icons: `lucide-react` 🖼️
- **Why?** Consistent stroke weight, tree-shakeable.
- **Use for:** All UI icons.
- **Prevention:** Prevents messy SVG code in components.

## 7. Class Merging: `tailwind-merge` + `clsx` 🎨
- **Why?** Tailwind conflicts are inevitable in reusable components.
- **Use for:** `cn()` utility.
- **Prevention:** Prevents style conflicts (e.g. `p-4` vs `p-2`).

## 8. Animation: `framer-motion` (React) OR `anime.js` (Vanilla) 🎬
- **Why?** CSS is too simple for complex layout changes.
- **Use for:** Layout animations, exit transitions.
- **Prevention:** Prevents "jumping" UI elements.

## 9. Analytics: `@vercel/analytics` OR `posthog-js` 📊
- **Why?** Google Analytics is too heavy/complex.
- **Use for:** Privacy-friendly tracking.
- **Prevention:** Prevents cookies consent nightmares.

## 10. Email/Transactional: `resend` 📧
- **Why?** SMTP is painful.
- **Use for:** Receipts, Welcome emails.
- **Prevention:** Prevents emails going to spam.

---

## How to Install (The Empire way)
We don't just `npm install`. We add them to `package.json` with strict version pinning.

```bash
npm install zod react-hook-form @tanstack/react-query date-fns radix-ui lucide-react tailwind-merge clsx animejs resend
```
