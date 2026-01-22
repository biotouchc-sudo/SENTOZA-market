# UI Identity Matrix (قالب DNA البصري)

## 🎯 Purpose
> قالب لتحديد الهوية البصرية لأي مشروع. **يجب ملؤه قبل أي تصميم.**

---

## 📋 Project Identity (يُملأ لكل مشروع)

```yaml
# ===== REQUIRED: Fill these for your project =====
Project_Name: "[اسم المشروع]"
Industry: "[service | ecommerce | saas | corporate | portfolio]"
Target_Audience: "[وصف الجمهور المستهدف]"
Quality_Tier: "[Essential | Premium | Royal]"
```

---

## 🎭 Brand Personality Matrix

### Step 1: Choose One Per Dimension

| البعد | الخيار A | الخيار B | الخيار C | ✓ |
|-------|----------|----------|----------|---|
| **Tone** | Playful | Professional | Luxurious | [ ] |
| **Energy** | Calm | Balanced | Dynamic | [ ] |
| **Trust** | Friendly | Expert | Exclusive | [ ] |
| **Age Feel** | Young | Timeless | Classic | [ ] |

### Step 2: Document Your Selection
```yaml
Tone: "[selection]"
Energy: "[selection]"
Trust: "[selection]"
Age_Feel: "[selection]"
```

---

## 🎬 Motion Level

### Choose Your Level (1-5)
| Level | الوصف | الاستخدام |
|-------|-------|-----------|
| 1 | Static | مشاريع بسيطة، أداء أولاً |
| 2 | Subtle | معظم المشاريع الاحترافية |
| 3 | Balanced | تجربة غنية بدون مبالغة |
| 4 | Expressive | علامات تجارية ديناميكية |
| 5 | Cinematic | عروض تقديمية، portfolios |

```yaml
Motion_Level: [1-5]
```

### Motion Rules Based on Level
```yaml
Level 1:
  - No animations except loading
  
Level 2:
  - Fade in/out
  - Hover scale (1.02 max)
  
Level 3:
  - Add: stagger lists, slide transitions
  
Level 4:
  - Add: parallax, scroll-triggered
  
Level 5:
  - Add: custom cursor, 3D effects
```

---

## 📐 Density Selection

| Type | الوصف | Use Case |
|------|-------|----------|
| Compact | مساحات ضيقة | Dashboards, data-heavy |
| Balanced | متوازن | Most websites |
| Airy | مساحات واسعة | Premium, luxury brands |

```yaml
Density: "[Compact | Balanced | Airy]"

Spacing:
  Section_padding: "[64px | 96px | 128px]"
  Element_gaps: "[16px | 24px | 32px]"
  Line_height: "[1.5 | 1.6 | 1.8]"
```

---

## 🎨 Color Strategy

### Choose Your Palette Type
| Type | الوصف | مثال |
|------|-------|------|
| Monochromatic | لون واحد + تدرجات | Apple, minimal brands |
| Dual | لونان متكاملان | Most professional sites |
| Accent-driven | محايد + لون مميز واحد | Luxury, premium |
| Vibrant | ألوان متعددة جريئة | Startups, creative |

```yaml
Palette_Type: "[selection]"

Colors:
  Primary: "#______"
  Secondary: "#______"
  Accent: "#______"
  Background: "#______"
  Foreground: "#______"
```

### Pre-made Palettes (اختر واحدة)

#### 🌙 Dark Premium
```yaml
Background: "#0A0A0A"
Foreground: "#FFFFFF"
Accent: "#C9A227"  # Gold
Muted: "#A3A3A3"
```

#### ☀️ Light Professional
```yaml
Background: "#FFFFFF"
Foreground: "#0A0A0A"
Accent: "#2563EB"  # Blue
Muted: "#6B7280"
```

#### 🌌 Dark Tech
```yaml
Background: "#0F172A"
Foreground: "#F8FAFC"
Accent: "#8B5CF6"  # Purple
Secondary: "#06B6D4"  # Cyan
```

#### 🌿 Organic
```yaml
Background: "#FEFCE8"
Foreground: "#1C1917"
Accent: "#16A34A"  # Green
Muted: "#78716C"
```

---

## 🔤 Typography Selection

### For Arabic Projects
```yaml
Primary_Font: "Tajawal"
Weights: [400, 500, 700]
Fallback: "system-ui, sans-serif"
```

### For English Projects
```yaml
Primary_Font: "Inter"
Weights: [400, 500, 600, 700]
Fallback: "system-ui, sans-serif"
```

### For Bilingual
```yaml
Arabic_Font: "Tajawal"
English_Font: "Inter"
```

---

## 📦 Component Style

### Border Radius
| Style | Value | Visual |
|-------|-------|--------|
| Sharp | 0-4px | Angular, serious |
| Soft | 8-12px | Modern, friendly |
| Round | 16-24px | Premium, soft |
| Pill | Full | Buttons, tags |

```yaml
Border_Radius: "[Sharp | Soft | Round]"
```

### Shadow Intensity
| Level | Use Case |
|-------|----------|
| None | Flat design |
| Subtle | Clean, modern |
| Medium | Cards, elevation |
| Strong | Floating elements |

```yaml
Shadow_Level: "[None | Subtle | Medium | Strong]"
```

---

## 📱 Responsive Behavior

```yaml
Mobile_First: true
Breakpoints:
  sm: "640px"
  md: "768px"
  lg: "1024px"
  xl: "1280px"

Navigation:
  Mobile: "Hamburger"
  Desktop: "Full horizontal"
  
Content:
  Mobile: "Stack"
  Tablet: "2 columns"
  Desktop: "3-4 columns"
```

---

## 🖼️ Example: Filled Template

```yaml
# ===== EXAMPLE: Premium Barbershop =====
Project_Name: "Ghiath Salon"
Industry: "service"
Target_Audience: "رجال 25-55، دخل متوسط-عالي، دمشق"
Quality_Tier: "Royal"

Personality:
  Tone: "Luxurious"
  Energy: "Calm"
  Trust: "Exclusive"
  Age_Feel: "Timeless"

Motion_Level: 3
Density: "Airy"

Colors:
  Primary: "#C9A227"
  Background: "#0A0A0A"
  Foreground: "#FFFFFF"
  Muted: "#737373"

Typography:
  Arabic: "Tajawal"
  English: "Inter"

Components:
  Border_Radius: "Round"
  Shadow_Level: "Medium"
```

---

## ✅ Validation Checklist

قبل البدء بالتصميم، تأكد من:
- [ ] تم تحديد Industry و Target Audience
- [ ] تم اختيار Quality Tier
- [ ] تم ملء Personality Matrix
- [ ] تم اختيار Motion Level
- [ ] تم تحديد Color Palette
- [ ] تم اختيار Typography

---

> **"الهوية البصرية ليست زخرفة، بل قرار استراتيجي."**
