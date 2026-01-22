# Interaction Budget (ميزانية التفاعل)

## المبدأ الأساسي
> **كل حركة يجب أن تخدم قراراً، لا الإبهار.**

## الميزانية المخصصة

### 📊 Per-Page Limits
| نوع التفاعل | الحد الأقصى | السبب |
|-------------|-------------|-------|
| Animations | 5 per page | منع التشتت |
| Hover effects | 3 unique types | الاتساق |
| Loading states | 1 primary | الوضوح |
| Modals/Dialogs | 1 at a time | التركيز |
| Toast notifications | 1 visible | عدم الإزعاج |

### ✅ Allowed Interactions
```yaml
Micro_interactions:
  - Button hover glow
  - Card lift on hover
  - Smooth page transitions
  - Scroll progress indicator
  
Feedback:
  - Form validation (immediate)
  - Success/Error states
  - Loading spinners
```

### ❌ Forbidden Gimmicks
```yaml
Never_use:
  - Auto-playing videos with sound
  - Popup modals on entry
  - Parallax that causes motion sickness
  - Infinite scroll without purpose
  - Hover-only content (accessibility)
  - Animations > 500ms without purpose
```

### 🎯 Decision Framework
```
BEFORE adding interaction, ask:
1. Does this help user decide? → Keep
2. Is this just decoration? → Remove
3. Will this work on mobile? → Test
4. Does this respect reduced-motion? → Check
```

## قاعدة مجلس الشيوخ
> **الجمال بدون وضوح = فشل. الوضوح مع بساطة = احتراف.**
