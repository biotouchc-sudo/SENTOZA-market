# Design System (نظام التصميم الشامل)

## 🎯 Purpose
> نظام تصميم عالمي قابل للتخصيص لأي مشروع ويب.

---

## 📐 Foundation: Design Tokens

### Spacing Scale
```css
--space-1: 4px;    /* micro gaps */
--space-2: 8px;    /* tight */
--space-3: 12px;   /* compact */
--space-4: 16px;   /* default */
--space-6: 24px;   /* comfortable */
--space-8: 32px;   /* spacious */
--space-12: 48px;  /* section gaps */
--space-16: 64px;  /* large sections */
--space-24: 96px;  /* hero spacing */
--space-32: 128px; /* page sections */
```

### Typography Scale
```css
--text-xs: 0.75rem;   /* 12px - captions */
--text-sm: 0.875rem;  /* 14px - small text */
--text-base: 1rem;    /* 16px - body */
--text-lg: 1.125rem;  /* 18px - lead */
--text-xl: 1.25rem;   /* 20px - subheading */
--text-2xl: 1.5rem;   /* 24px - heading */
--text-3xl: 1.875rem; /* 30px - section */
--text-4xl: 2.25rem;  /* 36px - page title */
--text-5xl: 3rem;     /* 48px - hero */
--text-6xl: 3.75rem;  /* 60px - display */
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15);
--shadow-glow: 0 0 20px var(--color-primary-glow);
```

---

## 🎨 Color System Templates

### Template: Dark Premium (مثال: صالونات، مطاعم فاخرة)
```yaml
Background:
  primary: "#0A0A0A"
  secondary: "#171717"
  elevated: "#262626"
  
Foreground:
  primary: "#FFFFFF"
  secondary: "#A3A3A3"
  muted: "#737373"
  
Accent:
  primary: "#C9A227"      # Gold
  primary-hover: "#D4AF37"
  primary-glow: "rgba(201, 162, 39, 0.3)"
  
Semantic:
  success: "#22C55E"
  warning: "#EAB308"
  error: "#EF4444"
  info: "#3B82F6"
```

### Template: Light Professional (مثال: عيادات، شركات)
```yaml
Background:
  primary: "#FFFFFF"
  secondary: "#F5F5F5"
  elevated: "#FAFAFA"
  
Foreground:
  primary: "#0A0A0A"
  secondary: "#525252"
  muted: "#A3A3A3"
  
Accent:
  primary: "#2563EB"      # Blue
  primary-hover: "#1D4ED8"
```

### Template: Vibrant Modern (مثال: SaaS، Startups)
```yaml
Background:
  primary: "#0F172A"
  secondary: "#1E293B"
  
Accent:
  primary: "#8B5CF6"      # Purple
  secondary: "#06B6D4"    # Cyan
  gradient: "linear-gradient(135deg, #8B5CF6, #06B6D4)"
```

---

## 🔤 Typography Pairings

### Arabic-First Projects
```yaml
Headings: "Tajawal", "Cairo", "IBM Plex Sans Arabic"
Body: "Tajawal", "Noto Sans Arabic"
Monospace: "IBM Plex Mono"
```

### English-First Projects
```yaml
Headings: "Inter", "Outfit", "Plus Jakarta Sans"
Body: "Inter", "Roboto", "Open Sans"
Monospace: "JetBrains Mono", "Fira Code"
```

### Luxury/Premium
```yaml
Headings: "Playfair Display", "Cormorant Garamond"
Body: "Lato", "Libre Franklin"
```

---

## 📦 Component Patterns

### Button Variants
```yaml
Primary:
  - Use: Main CTA, one per section
  - Style: Filled, accent color
  
Secondary:
  - Use: Alternative actions
  - Style: Outlined or ghost
  
Destructive:
  - Use: Delete, cancel
  - Style: Red, requires confirmation
  
Ghost:
  - Use: Tertiary actions
  - Style: Text only, hover underline
```

### Card Variants
```yaml
Default:
  - Background: elevated
  - Border: subtle (1px neutral)
  - Shadow: sm
  
Interactive:
  - Hover: scale(1.02), shadow-lg
  - Cursor: pointer
  
Glass:
  - Background: rgba blur
  - Border: white/10
  - Use: Over images only
  
Feature:
  - Accent border or icon
  - Larger padding
```

### Input States
```yaml
Default:
  - Border: neutral-300
  - Background: white/5
  
Focus:
  - Border: accent
  - Ring: accent/20
  
Error:
  - Border: red
  - Helper text: red
  - Icon: alert
  
Success:
  - Border: green
  - Icon: check
```

---

## 📐 Layout Patterns

### Container Widths
```yaml
sm: 640px   # Mobile content
md: 768px   # Tablet
lg: 1024px  # Desktop
xl: 1280px  # Wide desktop
2xl: 1536px # Ultra-wide
```

### Grid Systems
```yaml
# Standard 12-column grid
Mobile: 1 column
Tablet: 2-3 columns
Desktop: 3-4 columns

# Common patterns
Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Features: grid-cols-1 md:grid-cols-3
Sidebar: grid-cols-1 lg:grid-cols-[280px_1fr]
```

### Section Padding
```yaml
Mobile: py-16 px-4
Tablet: py-20 px-6
Desktop: py-24 px-8
Hero: py-32 (minimum 100vh for impact)
```

---

## 🎬 Motion Guidelines

### Timing Functions
```css
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Duration Scale
```yaml
instant: 0ms      # State changes
fast: 150ms       # Micro-interactions
normal: 300ms     # Component transitions
slow: 500ms       # Page transitions
dramatic: 800ms+  # Hero animations only
```

### Animation Rules
```yaml
DO:
  - Fade in new content
  - Scale on hover (max 1.05)
  - Slide for panels/modals
  - Stagger lists (delay: index * 50ms)

DON'T:
  - Bounce on every interaction
  - Rotate randomly
  - Flash or blink
  - Block user while animating
```

---

## 📱 Responsive Strategy

### Breakpoint Philosophy
```yaml
Mobile-First: Always start with mobile design
Progressive: Add complexity at larger sizes

xs (0-639px): Single column, touch-optimized
sm (640px+): Two columns possible
md (768px+): Tablet layout
lg (1024px+): Desktop, sidebar visible
xl (1280px+): Wide content areas
```

### What Changes Per Breakpoint
```yaml
Mobile → Tablet:
  - Hamburger → partial nav
  - Stack → 2 columns
  - Larger touch targets
  
Tablet → Desktop:
  - Full navigation
  - 3-4 column grids
  - Hover states active
  - Sticky elements
```

---

## 🎯 Quick Reference

| الحاجة | الحل |
|--------|------|
| لون أساسي | Pick from color templates above |
| خط عربي | Tajawal (recommended) |
| خط إنجليزي | Inter (recommended) |
| حجم الزر | h-10 (40px) minimum |
| تباعد الأقسام | py-24 (96px) |
| زوايا البطاقات | rounded-2xl (16px) |
| ظل البطاقات | shadow-lg |
| سرعة الحركة | 300ms |

---

> **"نظام التصميم الجيد يجعل القرارات الجيدة تلقائية."**
