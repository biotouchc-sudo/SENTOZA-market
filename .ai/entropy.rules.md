# Entropy Rules (ضبط الفوضى)

## المبدأ الأساسي
> كل سطر كود يُضاف = دين تقني محتمل.
> كل استثناء = تعقيد متراكم.

## حدود الفوضى المسموحة

### 📊 Max Complexity Metrics
| المقياس | الحد الأقصى | الإجراء عند التجاوز |
|---------|-------------|---------------------|
| Files per feature | 5 | Split into modules |
| Lines per file | 300 | Refactor |
| Nesting depth | 3 | Flatten logic |
| Dependencies per module | 7 | Review architecture |
| Exceptions per rule | 2 | Generalize rule |

### 🔄 Refactor Triggers
1. **DRY Violation**: نفس الكود في 3 أماكن → Extract
2. **God File**: ملف > 500 سطر → Split
3. **Deep Nesting**: if > 3 levels → Early return
4. **Magic Numbers**: أرقام بدون تسمية → Constants

### 🗑️ Deletion Policy
```
IF code_unused_for(90_days) THEN
  MARK_FOR_DELETION
  
IF no_tests AND no_documentation THEN
  CONSIDER_LEGACY_DEBT
```

## قاعدة مجلس الشيوخ
> **الكود الذي لا يُحذف = ديْن يتراكم بفائدة مركبة.**
