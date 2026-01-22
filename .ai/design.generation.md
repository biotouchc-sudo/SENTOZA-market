# Generative Design Rules

**Goal:** Calculate design values, do not hardcode them.

## Type Scale Logic
`base_size` = 16px (scalable)
`ratio` = determined by mood:
- **Corporate:** 1.2 (Minor Third) - Stable
- **Startup:** 1.25 (Major Third) - Balanced
- **Editorial:** 1.414 (Augmented Fourth) - Dramatic

## Spacing Logic
`base_unit` = 4px
`density` = determined by content:
- **Dashboard:** tight (4px, 8px, 16px)
- **Marketing:** loose (16px, 32px, 64px, 128px)

## Color Logic
Never pick colors. Pick a **primary** and generate:
- `surface`: neutral tint of primary (0-5% sat)
- `action`: primary
- `critical`: complementary
- `success`: analogous green

## Semantic Components
Do NOT use names like `Card`, `Box`.
Use names like:
- `TrustSignal` (Social proof)
- `ValueProp` (Feature benefit)
- `ActionTrigger` (CTA area)
- `ObjectionBuster` (FAQ/Guarantee)
