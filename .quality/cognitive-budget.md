# Cognitive Load Budget & Quality Metrics

> [!NOTE]
> Simplicity is the ultimate sophistication.
> We prioritize "Readability" over "Cleverness".

## 1. Time-to-Understand (TTU) Rule
- **The 60-Second Rule**: Any file must be understandable by a Senior Engineer in < 60 seconds.
- **If it fails**: Refactor, split, or add a comprehensive TSDoc comment.

## 2. File & Module Limits
- **Max File Length**: 300 lines (Soft limit), 500 lines (Hard limit).
- **Max Function Complexity**: Cyclomatic complexity < 10. (No nested `if/else` hell).
- **Max Responsibility**: One component = One job. (SRP - Single Responsibility Principle).

## 3. Naming Conventions (Semantic Clarity)
- **Boolean**: Must start with `is`, `has`, `should`, `can`. (e.g., `isVisible`, not `visible`).
- **Event Handlers**: `on[Event]` for props, `handle[Event]` for implementation.
- **Components**: PascalCase (e.g., `ServiceCard`).
- **Utilities**: camelCase (e.g., `formatDate`).

## 4. Directory Structure Clarity
- **Colocation**: Keep related files together (e.g., `ServiceCard.tsx`, `ServiceCard.test.tsx`).
- **Barrel Files**: Avoid generic `index.ts` exploits that hide dependencies.
- **Flat over Deep**: Prefer `components/ui/button.tsx` over `components/core/atoms/inputs/button/index.tsx`.

## 5. Commenting Strategy
- **Why, Not What**: Comments explain *why* a decision was made, not *what* the code does.
- **Self-Documenting**: Variable names should replace comments where possible.
