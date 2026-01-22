# الإعدادات الاحترافية للمحرر والبرومبت المتكامل 2026
## كيف تحول VS Code إلى سلاح فتاك

---

## 🛠️ إعدادات VS Code (Settings.json)

قم بنسخ هذه الإعدادات ولصقها في ملف `.vscode/settings.json`.

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.guides.bracketPairs": true,
  "editor.renderWhitespace": "selection",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "GitHub Dark Default",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## 🧩 الإضافات الضرورية (Extensions)

قم بإنشاء ملف `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "dsznajder.es7-react-js-snippets",
    "pkief.material-icon-theme",
    "formulahendry.auto-rename-tag",
    "usernamehw.errorlens",
    "christian-kohler.path-intellisense",
    "prisma.prisma"
  ]
}
```

---

## 🤖 البرومبت المتكامل (The Ultimate Prompt)

عندما تطلب المساعدة من الذكاء الاصطناعي (Claude, GPT-4, Gemini)، ابدأ دائماً بهذا البرومبت للحصول على أفضل النتائج.

### System Prompt 2026
```text
You are a Senior Full Stack Engineer in 2026. You are an expert in Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI.

Your Goal: Write production-ready, clean, and optimized code.

Rules:
1. Always use functional components with TypeScript interfaces.
2. Use 'lucide-react' for icons.
3. Use 'shadcn/ui' components whenever possible.
4. Implement strict type safety (no 'any').
5. Use proper error handling (try/catch, toast notifications).
6. Follow the separation of concerns:
   - Components in /components
   - Utils in /lib/utils
   - Hooks in /hooks
   - Database queries in /lib/db
7. Use Server Actions for data mutations.
8. Use React Server Components (RSC) by default.
9. Style with Tailwind CSS utility classes.
10. Prioritize accessibility (aria-label, interactions).

Response Format:
- Brief explanation of the solution.
- The complete code block.
- Any necessary installation commands.

Now, help me with:
[YOUR REQUEST HERE]
```

### برومبت لكتابة المكونات (Component Generation)
```text
Generate a [Component Name] using React, TypeScript, and Tailwind CSS.
It should:
- Be responsive (mobile-first).
- Support dark mode.
- Use Lucide icons.
- Have proper loading states.
- Follow Shadcn UI design patterns.
```

### برومبت لإصلاح الأخطاء (Debug)
```text
I have the following error:
[ERROR MESSAGE]

Here is my code:
[CODE BLOCK]

Please analyze the root cause and provide a fixed version of the code with explanation.
```

---

## 💡 نصائح للمحرر

1. **اختصارات لوحة المفاتيح**: تعلم اختصارات VS Code (مثل `Ctrl+P` للبحث عن الملفات، `Ctrl+Shift+F` للبحث في المشروع).
2. **Snippets**: أنشئ مقتطفات كود خاصة بك للأكواد المتكررة.
3. **Workspaces**: استخدم Workspaces إذا كنت تعمل على عدة مشاريع في وقت واحد.
4. **Git Lens**: استخدم إضافة GitLens لتتبع تاريخ التعديلات في كل سطر.

مع هذه الإعدادات، سيتحول محررك من مجرد "كاتب نصوص" إلى "مركز قيادة" متكامل.
