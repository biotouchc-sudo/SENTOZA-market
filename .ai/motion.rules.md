# Motion Language (Meaningful Motion)

**Rule:** Motion must have a purpose.

## 1. Instructional Motion
- **Use:** To show where things go or come from.
- **Example:** Modal expands from the button that opened it.
- **Timing:** 200-300ms

## 2. Feedback Motion
- **Use:** To acknowledge action.
- **Example:** Button scale-down on press.
- **Timing:** 100ms

## 3. Narrative Motion
- **Use:** To tell a story (Scrollytelling).
- **Example:** Elements fade/slide in as you read.
- **Timing:** Scroll-linked

## 4. Reduced Motion Fallback
**MANDATORY:** All motion code must be wrapped in:
`@media (prefers-reduced-motion: reduce)`
In this mode:
- No movement
- Only opacity fades
- 0ms duration for interactions
