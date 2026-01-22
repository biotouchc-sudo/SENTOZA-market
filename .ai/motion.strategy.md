# Motion Strategy (The Muscle System)

**Engine:** Anime.js (The Muscle)
**Controller:** Motion Tokens (The Signal)
**Guard:** Accessibility Rules (The Conscience)

## 1. When to use Anime.js?
| Use Case | Solution | Engine |
|:---|:---|:---|
| Hover states | CSS Transitions | Browser (Hardware Accel) |
| Simple Enter/Exit | CSS Keyframes | Browser |
| **Complex Sequences** | **Anime.js Timeline** | Anime.js |
| **Scroll Animations** | **Anime.js Scroll** | Anime.js |
| **SVG Morphing** | **Anime.js SVG** | Anime.js |
| **Physics/Drag** | **Anime.js Springs** | Anime.js |

## 2. Integration Pattern (The Wrapper)

We do NOT write this:
```javascript
// ❌ BAD: Hardcoded, isolated, inaccessible
anime({
  targets: '.box',
  translateX: 250,
  duration: 800
});
```

We write this:
```javascript
// ✅ GOOD: Tokenized, Safe, Managed
useTimeline((tl) => {
  tl.add({
    targets: ref.current,
    x: 250,
    duration: tokens.motion.duration.medium, // 240ms
    easing: tokens.motion.easing.standard,    // cubic-bezier...
  });
}, { skipIfReducedMotion: true });
```

## 3. The "Cinematic" Concept
For **Mode B (Story-First)** projects, we use the `Timeline` to choreograph the entire page load:
1.  Hero Text Stagger (0ms)
2.  Image Reveal (200ms)
3.  Navigation Slide Down (400ms)

This creates a "Director's Cut" feel, rather than a "Web Page Load" feel.

## 4. Performance Guard
- **Budget:** Motion library must be < 20KB gzipped.
- **Rule:** If CPU usage > 90%, disable heavy effects (Springs).
