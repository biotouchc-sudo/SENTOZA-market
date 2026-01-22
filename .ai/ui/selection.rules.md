# UI Selection Rules (قواعد اختيار العناصر)

## متى نستخدم ماذا؟

### 🎬 Animations
| الحالة | القرار | السبب |
|--------|--------|-------|
| Hero section | ✅ استخدم | جذب الانتباه |
| Cards list | ⚠️ بحذر | stagger خفيف فقط |
| Forms | ❌ تجنب | تشتت المستخدم |
| Errors | ❌ تجنب | عدم الاستخفاف |

### 🖼️ Images
| الحالة | القرار |
|--------|--------|
| Hero | Next/Image with priority |
| Gallery | Lazy load |
| Icons | SVG inline أو Lucide |
| Decorative | CSS shapes/gradients |

### 📦 Components
| الحاجة | الخيار الصحيح |
|--------|--------------|
| زر عادي | `<Button>` |
| زر مع أيقونة | `<Button>` + Icon inside |
| رابط يبدو كزر | `<Link>` wrapped in styled div |
| Modal | Radix Dialog |
| Toast | Sonner |
| Form | React Hook Form + Zod |

### 🎨 Colors
| الاستخدام | اللون |
|-----------|-------|
| Primary action | `amber-500` |
| Destructive | `red-500` |
| Success | `green-500` |
| Info | `blue-500` |
| Muted text | `neutral-400` |

### 📱 Responsive
| الـ Breakpoint | الاستخدام |
|----------------|-----------|
| Default | Mobile first |
| `md:` | Tablet (768px+) |
| `lg:` | Desktop (1024px+) |
| `xl:` | Large screens (1280px+) |

## القاعدة الذهبية
> **الاتساق > الإبداع. القاعدة > الاستثناء.**
