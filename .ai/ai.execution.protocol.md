# AI Execution Protocol (The Super Editor)

## 🎯 Purpose
> A strict algorithmic protocol for the AI Agent itself to ensure "Super Editor" quality code.
> **Status**: ACTIVE. Must be followed before every file edit.

---

## 🧠 Phase 1: Pre-Code Thinking (Think 3x Before Writing)

### 1.1 The "Necessity" Questions
```yaml
قبل_أي_كود:
  - فكر 3 مرات قبل استخدام useEffect
  - لا useState إلا للـ UI state فقط
  - Server Components أولاً، Client ثانياً
  - لا any أبداً (TypeScript strict)
```

### 1.2 The "Architecture" Questions
1. **Problem**: ما المشكلة التي نحلها؟
2. **Simplicity**: ما أبسط حل؟
3. **Scale**: هل يتوسع (Scalable)؟
4. **Test**: هل يُختبر (Testable)؟

### 1.3 State Location Decision Tree
```
Where does this state live?
├── URL? → useSearchParams / router.push
├── Server? → Server Component / fetch
├── Global User? → Context (Auth/Theme only)
└── Local UI? → useState (React state)
```

---

## ⚡ Phase 2: Speed Protocol (Performance First)

### 2.1 The Import Audit
```yaml
قبل_أي_import:
  - هل هذه المكتبة ضرورية حقاً؟
  - ما حجمها؟ (bundlephobia.com)
  - هل يوجد بديل أخف؟
```

### 2.2 Forbidden Imports (Death List)
| ❌ Forbidden | ✅ Alternative | Reason |
|--------------|----------------|--------|
| `moment` | `date-fns` / `Intl` | 70KB → 2KB |
| `lodash` (full) | `lodash/get` | 72KB → 1KB |
| `framer-motion` in RSC | CSS / `motion` (client only) | Breaks SSR |
| `axios` | `fetch` | Native is enough |
| `jquery` | Native DOM | 2026 not 2006 |

### 2.3 Asset Rules
```yaml
Images:
  - Format: WebP/AVIF (fallback PNG)
  - Loading: lazy (below fold)
  - Dimensions: Always specify width/height
  
Fonts:
  - Max: 2 families
  - Strategy: font-display: swap
  - Subset: Only needed characters
```

---

## 🏗️ Phase 3: Architecture Protocol (Structure Matters)

### 3.1 Component Size Limits
```yaml
أثناء_الكتابة:
  - كل function أقل من 20 سطر
  - كل component أقل من 100 سطر
  - كل ملف مسؤولية واحدة (Single Responsibility)
```

### 3.2 Forbidden Patterns
```yaml
ممنوع:
  - Prop drilling أكثر من 2 levels → استخدم Composition
  - Context لكل شيء → استخدم URL state أو Server state
  - Global state للـ UI state → useState المحلي
  - useEffect للـ data fetching → use React Server Components
  - Magic strings → استخدم Constants file
```

### 3.3 Rendering Strategy
```
Default: Server Component (RSC)
├── Needs interactivity? → "use client"
├── Needs browser API? → "use client"
├── Just displaying data? → Keep Server
└── Unsure? → Keep Server, refactor later
```

---

## 🛡️ Phase 4: Quality Gates (Robustness)

### 4.1 TypeScript Strictness
```yaml
Types:
  - ❌ No `any`. Ever. Period.
  - ✅ Interfaces for all Props
  - ✅ Return types for all functions
  - ✅ Enums for finite options
```

### 4.2 Error Handling
```yaml
Safety:
  - ✅ Always handle `error` and `loading` states
  - ✅ Validate all Inputs (Zod preferred)
  - ✅ Sanitize all Outputs (XSS prevention)
  - ✅ try/catch for all async operations
```

### 4.3 Naming Conventions
```yaml
Clarity:
  - Variables: isLoading, hasError, canSubmit (boolean prefix)
  - Functions: handleClick, fetchUser, validateForm (verb prefix)
  - Components: PascalCase (ServiceCard, BookingForm)
  - Files: kebab-case (booking-form.tsx)
```

---

## 📝 Phase 5: DX Protocol (Developer Experience)

### 5.1 Every PR Must Be:
```yaml
كل_PR:
  - Type-safe 100%
  - Self-documenting (الكود يشرح نفسه)
  - No magic strings
  - Constants في ملف منفصل
```

### 5.2 Comments Philosophy
```yaml
Comments:
  - ✅ Explain "WHY", not "WHAT"
  - ✅ Document edge cases
  - ❌ Don't comment obvious code
  - ❌ Don't leave commented-out code
```

---

## 🔄 Phase 6: Self-Review Checklist (Post-Edit)

Before confirming any code to user:

```yaml
بعد_الكتابة:
  - [ ] هل يمكن تبسيطه؟ (Remove 10% of lines)
  - [ ] هل سيفهمه مطور جديد في 30 ثانية؟
  - [ ] هل استخدمت Tokens من design.system.md؟
  - [ ] هل تجاوزت Performance Budget؟
  - [ ] هل هناك any أو magic numbers؟
  - [ ] هل كل async له error handling؟
```

---

## 🚨 Automatic STOP Triggers

If ANY of these are true → STOP and ask:

1. Component > 150 lines
2. Function > 30 lines
3. More than 3 levels of nesting
4. Using `any` type
5. Importing banned library
6. No error handling for async
7. Hardcoded colors/sizes (not from tokens)

---

> **"I do not just write code. I craft sustainable systems."**
