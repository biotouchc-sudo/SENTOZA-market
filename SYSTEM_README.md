# 🚀 نظام التطوير المتقدم (2026)

## التثبيت السريع

### 1. نسخ النظام لمشروع جديد
```bash
cp -r .ai /path/to/new-project/
cp -r .agent /path/to/new-project/
cp -r .github /path/to/new-project/
cp -r scripts /path/to/new-project/
```

### 2. تثبيت Husky (للتحقق الآلي)
```bash
npm install husky --save-dev
npx husky install
```

### 3. إنشاء ملف السياق للمشروع الجديد
```markdown
# project.context.md
Type: [Landing Page / SaaS / E-commerce]
Architecture: [Static / Hybrid / Dynamic]
Style Pack: [Clean Corporate / Dynamic Startup / Premium Motion]
```

## الاستخدام

### تفعيل القواعد
```
/wepruls
```
هذا الأمر يقرأ تلقائياً جميع ملفات `.ai` ويطبق القواعد الصارمة.

### أخذ Snapshot قبل تعديل خطير
```bash
npm run snapshot
# أو في PowerShell:
.\scripts\snapshot.ps1
```

### التحقق من المصادر
```bash
npm run verify:citations
```

### تشغيل اختبارات الانحراف
```bash
npm run test:regression
```

## بنية النظام

```
project/
├── .ai/                    ← القواعد والسياسات
├── .agent/workflows/       ← الأوامر السريعة
├── .github/workflows/      ← CI/CD
├── .husky/                 ← Pre-commit hooks
├── scripts/                ← أدوات الأتمتة
└── tests/                  ← Regression suite
```

## معدلات النجاح المتوقعة

- **Build Pass Rate**: 95%+
- **Source Coverage**: 90%+
- **Regression Pass**: 98%+
- **Security Compliance**: 100%

## الدعم

راجع الملفات في `.ai/` لفهم القواعد الكاملة.
