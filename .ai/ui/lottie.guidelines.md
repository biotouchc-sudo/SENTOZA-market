# Lottie Guidelines (The Vector Movie)

## 🎯 Purpose
> Rules for using Lottie (Bodymovin) animations efficiently.
> **Rule**: High impact, low cost.

---

## 🛠️ Production Pipeline

### 1. After Effects Settings
*   **Frame Rate**: 30fps or 60fps (Match specific need).
*   **Expression**: Convert all expressions to Keyframes (Baking).
*   **Features**: Do NOT use effects (Gaussian Blur, Repeater) unless supported by Web Player.
*   **Images**: Vector ONLY. No embedded raster images (PNG/JPG).

### 2. Export (Bodymovin)
*   [x] Glyphs: Convert to shapes (don't embed fonts).
*   [x] Assets: Include in JSON (if unavoidable).
*   [x] Compression: Enable compression.

### 3. Optimization (Post-Process)
*   **Tool**: `lottie-minify` or similar.
*   **Action**: Reduce decimal precision (Floating point 2 decimals).
*   **Action**: Remove metadata names.

---

## 📉 Usage Strategy

### 1. Lazy Loading
*   Never load Lottie JSON in the main bundle.
*   Use `IntersectionObserver` to fetch JSON only when in view.
*   **Placeholder**: Show a tiny SVG or blurred image while loading.

### 2. Rendering Engine
*   **SVG Renderer**: Default. Crisp, scalable.
*   **Canvas Renderer**: Use if node count > 1000 or high complexity.
*   **HTML Renderer**: Avoid.

### 3. Interaction
*   **Play**: On Hover / On View.
*   **Loop**: Stop after 3 loops (save CPU) unless it's a subtle background.
*   **Scrub**: Scroll-linked scrubbing allowed (Keep JSON light).

---

> **"Vector animation is code. Treat it like code."**
