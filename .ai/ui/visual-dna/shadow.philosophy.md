# Visual DNA: Shadow & Lighting Philosophy

## 🎯 Purpose
> Defines environmental lighting. Are we flat? Glass? Skeuomorphic?
> **Identity**: "Cinematic Dark Mode" with "Ambient Glows".

---

## 💡 The Lighting Model

### Light Source
> **Position**: Top Center (12:00), Diffused.
> **Color**: Cool White (Day), Amber Glow (Night/Premium).

### Elevation Layers (Z-Index)
1.  **Floor (Z=0)**: Background `bg-neutral-950`.
2.  **Low (Z=10)**: Cards / Content `border-white/5`.
3.  **Mid (Z=20)**: Hover States / Dropdowns `shadow-lg`.
4.  **High (Z=30)**: Modals / Sticky Headers `shadow-2xl` + `backdrop-blur`.
5.  **Ceiling (Z=50)**: Toasts / Critical Alerts.

---

## 🌘 Shadow Tokens

```css
/* Ambient Glow (Not just black shadow) */
--glow-primary: 0 0 20px -5px rgba(217, 119, 6, 0.3); /* Amber */
--glow-error: 0 0 20px -5px rgba(220, 38, 38, 0.3);   /* Red */

/* Depth Shadows */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.5);
--shadow-xl: 0 20px 40px -10px rgba(0,0,0,0.7);
```

---

## 💎 Materials (Surface)

### 1. The "Obsidian" (Default Card)
*   **Fill**: `bg-neutral-900`
*   **Border**: `border w-1px border-white/5`
*   **Noise**: 3% Noise texture overlay (Subtle).

### 2. The "Amber Glass" (Highlight)
*   **Fill**: `bg-amber-500/10`
*   **Backdrop**: `blur(10px)`
*   **Border**: `border-amber-500/20`

---

> **"Shadows are not paint. They are the absence of light."**
