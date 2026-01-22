# SVG Optimization & Pipeline

## 🎯 Purpose
> Rules for clean, performant SVG assets.
> **Rule**: An unoptimized SVG is technical debt.

---

## 🧹 SVGO Pipeline (Automated)

### Config `svgo.config.js`
```js
module.exports = {
  plugins: [
    'removeDimensions',       // Let CSS control size
    'removeViewBox',          // False (Keep ViewBox!)
    'removeXMLNS',            // True
    'collapseGroups',         // True
    'removeUnusedNS',         // True
    {
      name: 'cleanupIDs',
      params: { 
        prefix: 'svg-',       // Avoid ID collisions in DOM
        minify: true 
      }
    },
    {
      name: 'convertPathData',
      params: { 
        floatPrecision: 2     // 2 decimals is enough
      }
    }
  ]
}
```

---

## 🎨 Design Rules

### 1. No Layout Animation
*   **Never**: Animate `x`, `y`, `width`, `height` attributes.
*   **Use**: CSS `transform: translate()` instead.

### 2. Path Complexity
*   **Threshold**: Max 3000 path nodes per icon.
*   **Fix**: "Simplify Path" in Illustrator/Figma (98% precision).

### 3. Stroke vs Fill
*   **Icon System**: Prefer `stroke` for adjustable thickness.
*   **Illustration**: Prefer `fill` for stability.
*   **Constraint**: Use `currentColor` for fills/strokes to allow CSS theming.

---

> **"Clean paths, clean render."**
