# 3 Production Modes (أنماط الإنتاج)

**الهدف:** نفس المتطلبات → مخرجات مختلفة صحيحة.

---

## Mode A: Conversion-First 🎯
**متى:** Landing pages, مواقع تسويقية, صفحات بيع

### الخصائص
- **JS Budget:** < 100KB
- **LCP:** < 1.2s
- **Motion:** Minimal (fade only)
- **Navigation:** Single page, anchor links
- **CTA:** واحد واضح per section
- **Content:** Short, punchy, benefit-focused

### Components المسموحة
- Hero (split/centered)
- Feature grid
- Testimonials
- Pricing table
- FAQ accordion
- Contact form
- Footer CTA

### Components الممنوعة
- Complex dashboards
- Data tables
- Real-time updates
- Heavy animations

---

## Mode B: Story-First 📖
**متى:** مواقع العلامات التجارية, Portfolio, Agency

### الخصائص
- **JS Budget:** < 200KB
- **LCP:** < 2s
- **Motion:** Medium (scroll-triggered)
- **Navigation:** Story-driven sections
- **Content:** Long-form, emotional, narrative

### Components المسموحة
- Cinematic hero
- Scroll storytelling
- Video backgrounds
- Parallax sections
- Case studies
- Team grid
- Timeline

### Components الممنوعة
- Complex forms
- User accounts
- Real-time data

---

## Mode C: App-First 💻
**متى:** SaaS, Dashboards, Platforms

### الخصائص
- **JS Budget:** < 350KB
- **LCP:** < 2.5s (authenticated)
- **Motion:** Functional only
- **Navigation:** App shell + sidebar
- **Content:** Data-driven, utility-focused

### Components المسموحة
- Auth system
- Data tables (virtualized)
- Charts/graphs
- Forms (complex)
- Modals/drawers
- Real-time updates
- Settings panels

### Components الممنوعة
- Marketing fluff
- Decorative animations
- Heavy images

---

## كيف تختار؟

```
project.context.md:
---
Production Mode: A | B | C
---
```

**القاعدة:**
- هدفك **بيع/تحويل**? → Mode A
- هدفك **رواية قصة**? → Mode B
- هدفك **أداة/منصة**? → Mode C

---

## الـ Hybrid?
بعض المشاريع تجمع:
- Landing (Mode A) → App (Mode C)

في هذه الحالة:
- `/` = Mode A rules
- `/app/*` = Mode C rules
