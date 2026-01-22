# Developer One-Page Guide

**Mission:** Ship high-quality code safely.

## 1. Before You Start
- Read `project.context.md`.
- Check `product.intent.md` - Why are we building this?
- Check `value.scorecard.md` - Is it worth it?

## 2. Coding Rules
- **Styles:** Tailwind only. No CSS files.
- **State:** URL first, then Server, then Local. Avoid Global.
- **Components:** Functional, Typed, Error-Bounded.
- **Assets:** WebP/AVIF only, < 500KB.

## 3. The Flow
1. `npm run dev`
2. Make changes
3. `npm run snapshot` (if risky)
4. `npm run verify` (Lint + Type + Test)
5. `git commit` (Husky will double-check)

## 4. Emergency
- **Rollback:** `git checkout snapshot/auto_...`
- **Blockers:** Check `human.override.md` logic.
