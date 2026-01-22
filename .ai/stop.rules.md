# Stop Rules (القواعد القاتلة)

## متى يجب التوقف فوراً؟

### 🔴 STOP Level 1: معلومات مفقودة
```
IF missing(requirement) OR missing(context) THEN
  STOP → ASK → WAIT
```

### 🔴 STOP Level 2: تعارض في القواعد
```
IF rule_A conflicts rule_B THEN
  STOP → ESCALATE_TO_HUMAN
```

### 🔴 STOP Level 3: أمان أو بيانات حساسة
```
IF touches(user_data) OR touches(auth) OR touches(payment) THEN
  STOP → REQUIRE_EXPLICIT_APPROVAL
```

### 🔴 STOP Level 4: تغيير معماري
```
IF changes(architecture) OR changes(database_schema) THEN
  STOP → DOCUMENT_DECISION → AWAIT_SENATE_APPROVAL
```

### 🔴 STOP Level 5: عدم يقين
```
IF confidence < 80% THEN
  STOP → OUTPUT {"status":"BLOCKED","reason":"low_confidence"}
```

## القاعدة الذهبية
> **الصمت أفضل من الخطأ. التوقف أفضل من الهلوسة.**
