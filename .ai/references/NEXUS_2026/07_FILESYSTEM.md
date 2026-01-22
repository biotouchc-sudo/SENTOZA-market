# نظام الملفات المتكامل 2026
## الهيكل التنظيمي للمشاريع الاحترافية (Structure Architecture)

---

## 🏗️ الهيكلية العامة (Root Structure)

يتميز هذا الهيكل بالفصل الواضح بين الاهتمامات (Separation of Concerns) وسهولة الوصول (Accessibility).

```
project-root/
├── .github/                # إعدادات GitHub Actions
├── .vscode/                # إعدادات المحرر للفريق
├── .husky/                 # Git hooks (pre-commit, etc.)
├── ai/                     # مجلد الذكاء الاصطناعي (العقل المدبر)
│   └── NEXUS_2026/         # النظام المرجعي المتكامل
├── public/                 # الملفات الثابتة (images, fonts)
├── src/                    # الكود المصدري للتطبيق
├── tests/                  # الاختبارات (E2E & Integration)
├── docs/                   # التوثيق للمشروع
├── scripts/                # سكربتات مساعدة للصيانة
├── .env.example            # نموذج لمتغيرات البيئة
├── .eslintrc.json          # إعدادات اللينتر
├── .prettierrc             # إعدادات التنسيق
├── next.config.js          # إعدادات Next.js
├── tailwind.config.ts      # إعدادات Tailwind CSS
├── tsconfig.json           # إعدادات TypeScript
└── package.json            # تعريف المشروع والاعتماديات
```

---

## 📁 تفصيل مجلد `src` (Source Code)

هذا هو قلب المشروع. يجب أن يكون نظيفاً ومنظماً دائماً.

```
src/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/             # مسارات المصادقة (مجموعة)
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/        # مسارات لوحة التحكم (مجموعة)
│   │   ├── layout.tsx      # تخطيط خاص للداشبورد
│   │   └── page.tsx
│   ├── api/                # مسارات الـ API الخلفية
│   ├── globals.css         # الأنماط العامة
│   ├── layout.tsx          # التخطيط الرئيسي للتطبيق
│   └── page.tsx            # الصفحة الرئيسية
├── components/             # المكونات (UI Library)
│   ├── ui/                 # مكونات أساسية (Button, Input)
│   ├── forms/              # مكونات النماذج
│   ├── layout/             # مكونات التخطيط (Header, Footer)
│   ├── features/           # مكونات خاصة بميزات معينة
│   └── shared/             # مكونات مشتركة
├── lib/                    # المكتبات والأدوات
│   ├── db/                 # إعدادات قاعدة البيانات
│   ├── auth/               # إعدادات المصادقة (NextAuth)
│   ├── utils/              # دوال مساعدة عامة
│   ├── validations/        # مخططات Zod للتحقق
│   └── api/                # عميل API (Axios/Fetch)
├── hooks/                  # خطافات React المخصصة
│   ├── use-toast.ts
│   ├── use-auth.ts
│   └── use-media-query.ts
├── types/                  # تعريفات TypeScript
│   ├── user.ts
│   ├── api.ts
│   └── index.d.ts
├── store/                  # إدارة الحالة (Zustand/Context)
│   └── use-store.ts
└── styles/                 # ملفات CSS إضافية (إذا لزم الأمر)
```

---

## 🎨 تفصيل مجلد `components/ui` (The UI Kit)

هنا تعيش مكونات التصميم الأساسية. نستخدم Shadcn/ui كمعيار.

```
src/components/ui/
├── button.tsx
├── input.tsx
├── card.tsx
├── dialog.tsx
├── dropdown-menu.tsx
├── toast.tsx
├── form.tsx
├── select.tsx
└── ... (باقي المكونات)
```

---

## 🔒 تفصيل مجلد `lib/db` (Database)

```
src/lib/db/
├── prisma.ts               # إعداد عميل Prisma
├── schema.prisma           # مخطط قاعدة البيانات
└── migrations/             # سجل التغييرات في القاعدة
```

---

## 🌐 تفصيل مجلد `app/api` (Backend API)

المسارات الخلفية منظمة حسب الموارد (Resources).

```
src/app/api/
├── auth/
│   └── [...nextauth]/      # إعداد NextAuth Handler
├── users/
│   ├── route.ts            # GET/POST users
│   └── [id]/
│       └── route.ts        # GET/PATCH/DELETE user
├── posts/
│   └── route.ts
└── ...
```

---

## 🤖 مجلد `ai/NEXUS_2026` (The Brain)

هنا تضع كل ملفات النظام التي قمنا بإنشائها.

```
ai/NEXUS_2026/
├── 01_NEXUS_DNA.md         # الأساس والتقييم
├── 02_CONSTITUTION.md      # الدستور والقوانين
├── 03_ADVANCED_TEMPLATES.md # القوالب الجاهزة
├── 04_SYSTEM_A_Z.md        # دليل العمل A-Z
├── 05_FOLDERS_REPORT.md    # شرح المجلدات (هذا الملف)
├── 06_ROADMAP.md           # خارطة الطريق
├── 07_FILESYSTEM.md        # هيكلية الملفات
└── 08_EDITOR_AND_PROMPTS.md # إعدادات المحرر
```

---

## 📏 قواعد التسمية (Naming Conventions)

### الملفات والمجلدات
- استخدم `kebab-case` دائماً.
- مثال: `user-profile.tsx`, `api-client.ts`, `components/ui`.
- استثناء: المكونات داخل `src/app` تتبع قواعد Next.js (`page.tsx`, `layout.tsx`).

### المكونات (React Components)
- استخدم `PascalCase` لاسم الدالة والمكون المُصدر.
- مثال: `export function UserProfile() { ... }`

### الدوال والمتغيرات (Functions & Variables)
- استخدم `camelCase`.
- مثال: `const currentUser = ...`, `function getUserData() { ... }`

### الثوابت (Constants)
- استخدم `UPPER_SNAKE_CASE`.
- مثال: `const MAX_RETRY_COUNT = 3;`

---

## 🚀 قواعد تنظيم الاستيراد (Import Ordering)

رتب الاستيرادات في ملفاتك بهذا التسلسل:
1. مكتبات React و Next.js (`react`, `next/link`).
2. مكتبات الطرف الثالث (`zod`, `lucide-react`).
3. المكونات المحلية (`@/components/...`).
4. الأدوات والخطافات (`@/lib/...`, `@/hooks/...`).
5. الأنواع (`@/types/...`).
6. الأنماط (`./style.css`).

استخدم دائماً المسارات المطلقة (`@/`) بدلاً من النسبية (`../../`).

---

## 📝 أمثلة عملية

### 1. API Route Example
```typescript
// src/app/api/users/route.ts
import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  const users = await db.user.findMany()
  return NextResponse.json(users)
}
```

### 2. Component Example
```typescript
// src/components/features/user-card.tsx
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { User } from '@/types/user'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
    </Card>
  )
}
```

---

## 🚫 أشياء يجب تجنبها

- **Circular Dependencies**: تجنب استيراد ملف أ يستورد ملف ب الذي يستورد ملف أ.
- **Large Files**: إذا زاد حجم الملف عن 300 سطر، قم بتقسيمه.
- **Deep Nesting**: تجنب المجلدات العميقة جداً (`components/features/user/profile/settings/avatar/...`). حاول أن تكون مسطحاً قدر الإمكان.
- **Hardcoded Values**: لا تضع قيم ثابتة (مثل API URLs) في الكود مباشرة، استخدم ملف `.env` أو ملف الثوابت.

---

## 🌟 الخلاصة

هذا الهيكل مصمم ليكون **Scalable** (قابل للتوسع) و **Maintainable** (سهل الصيانة). اتباعه حرفياً سيوفر عليك وعلى فريقك ساعات لا تحصى من "البحث عن الملفات" أو "إصلاح التداخلات".

نظام الملفات هو "الهيكل العظمي" للمشروع. إذا كان قوياً، كان المشروع قوياً. 💪

---

## 🔗 الملاحق

### 1. Route Handlers Schema
```typescript
// src/app/api/route.ts Template
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
})

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const users = await db.user.findMany({
      take: limit,
      skip,
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = createUserSchema.parse(body)

    const user = await db.user.create({
      data: validatedData,
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

## 🎨 قوالب الصفحات

### 1. Page Template with Metadata
```typescript
// src/app/about/page.tsx
import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Hero } from '@/components/hero'
import { Team } from '@/components/team'

export const metadata: Metadata = {
  title: 'About Us | Your Company',
  description: 'Learn about our story, mission, and the team behind our success.',
  openGraph: {
    title: 'About Us | Your Company',
    description: 'Learn about our story, mission, and the team behind our success.',
    images: ['/og-about.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Your Company',
    description: 'Learn about our story, mission, and the team behind our success.',
    images: ['/og-about.jpg'],
  },
}

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="About Our Company"
        subtitle="Building the future since 2020"
        backgroundImage="/about-hero.jpg"
      />
      <Container className="py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're dedicated to creating innovative solutions that make a difference
              in people's lives. Our mission is to empower businesses and individuals
              with cutting-edge technology.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We envision a world where technology seamlessly integrates with daily
              life, making everything simpler, faster, and more enjoyable for everyone.
            </p>
          </div>
        </div>
        <Team />
      </Container>
    </main>
  )
}
```

---

## 📊 قوالب قاعدة البيانات

### 1. Prisma Schema Template
```prisma
// src/lib/db/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  image         String?
  role          Role      @default(USER)
  emailVerified DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  accounts      Account[]
  sessions      Session[]
  posts         Post[]
  subscriptions Subscription[]
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?  @db.Text
  published Boolean  @default(false)
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  author User @relation(fields: [authorId], references: [id])
}

model Subscription {
  id          String   @id @default(cuid())
  userId      String   @unique
  stripeId    String   @unique
  status      String
  priceId     String
  currentEnd  DateTime
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

enum Role {
  USER
  ADMIN
}
```

---

## 🚀 سكربتات الأتمتة

### 1. Build Script
```bash
#!/bin/bash
# scripts/build.sh

echo "🚀 Starting build process..."

# Check if environment variables are set
if [ -z "$DATABASE_URL" ]; then
  echo "❌ DATABASE_URL is not set"
  exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running type check..."
npm run type-check

# Run linting
echo "🧹 Running linter..."
npm run lint

# Run tests
echo "🧪 Running tests..."
npm run test

# Build the application
echo "🏗️ Building application..."
npm run build

# Generate sitemap
echo "🗺️ Generating sitemap..."
npm run postbuild

echo "✅ Build completed successfully!"
```

### 2. Deploy Script
```bash
#!/bin/bash
# scripts/deploy.sh

echo "🚀 Starting deployment..."

# Check if we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
  echo "❌ Not on main branch. Please switch to main branch first."
  exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Run build script
echo "🏗️ Building application..."
./scripts/build.sh

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment completed successfully!"
```

---

## 📋 قوائم التحقق

### 1. Pre-Launch Checklist
```markdown
## 🚀 Pre-Launch Checklist

### ✅ Technical Requirements
- [ ] All tests passing
- [ ] Build successful
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Performance score > 90
- [ ] Accessibility score > 95
- [ ] SEO score > 90
- [ ] Security audit passed

### ✅ Content Requirements
- [ ] All pages have content
- [ ] Meta tags complete
- [ ] OpenGraph tags set
- [ ] Twitter cards configured
- [ ] Schema markup added
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Favicon set

### ✅ Functionality Requirements
- [ ] Authentication working
- [ ] Payment processing working
- [ ] Email notifications working
- [ ] Forms submitting correctly
- [ ] Search functionality working
- [ ] File uploads working
- [ ] API endpoints responding
- [ ] Error pages designed

### ✅ Performance Requirements
- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Lazy loading active
- [ ] Caching configured
- [ ] CDN configured
- [ ] Database optimized
- [ ] Bundle size optimized
- [ ] Loading animations added

### ✅ Security Requirements
- [ ] HTTPS enabled
- [ ] Security headers set
- [ ] Environment variables secured
- [ ] Input validation implemented
- [ ] SQL injection protection
- [ ] XSS protection active
- [ ] CSRF protection active
- [ ] Rate limiting configured

### ✅ Monitoring & Analytics
- [ ] Google Analytics installed
- [ ] Vercel Analytics active
- [ ] Sentry error tracking
- [ ] Uptime monitoring
- [ ] Performance monitoring
- [ ] User feedback system
- [ ] Heatmap tracking
- [ ] Conversion tracking
```

---

## 🎯 كيفية استخدام النظام

### 1. البدء السريع
```bash
# 1. انسخ القالب
git clone <template-url> my-new-project
cd my-new-project

# 2. ثبّت الاعتماديات
npm install

# 3. اضبط متغيرات البيئة
cp .env.example .env.local
# عدّل .env.local بمعلوماتك

# 4. جهّز قاعدة البيانات
npx prisma generate
npx prisma db push
npm run db:seed

# 5. شغّل خادم التطوير
npm run dev
```

### 2. التخصيص
1. **عدّل الألوان والثيم** في `tailwind.config.ts`
2. **خصص المكونات** في `src/components/ui/`
3. **عدّل قاعدة البيانات** في `src/lib/db/schema.prisma`
4. **أضف صفحات جديدة** في `src/app/`
5. **خصص الـ API** في `src/app/api/`

### 3. أفضل الممارسات
- اتبع هيكلية الملفات المقترحة
- استخدم TypeScript دائماً
- اكتب اختبارات للمكونات والـ API
- استخدم Git branches للميزات الجديدة
- احتفظ بالتوثيق محدثاً
- راجع الكود قبل الدمج (Pull Requests)

---

## 📚 موارد إضافية

### روابط مفيدة
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### أدوات موصى بها
- **VS Code Extensions**: Tailwind CSS IntelliSense, Prisma, TypeScript Importer
- **Design**: Figma, Tailwind UI
- **Testing**: Vitest, Playwright
- **Deployment**: Vercel, Netlify
- **Monitoring**: Sentry, Vercel Analytics

---

*آخر تحديث: يناير 2026 - هذا النظام يتم تحديثه باستمرار مع أحدث التقنيات وأفضل الممارسات.*
