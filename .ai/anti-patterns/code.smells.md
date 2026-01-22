# Code Smells (روائح الكود)

## 🎯 Purpose
> دليل للكشف عن الكود السيء قبل أن يصبح مشكلة.

---

## 🔴 Critical Smells (توقف فوراً)

### 1. God Component
```jsx
// ❌ BAD: Component doing everything
function DashboardPage() {
  // 500+ lines
  // Fetches data
  // Handles forms
  // Manages modals
  // Renders everything
}

// ✅ GOOD: Split by responsibility
function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <StatsGrid />
      <RecentActivity />
    </>
  )
}
```

### 2. Prop Drilling Hell
```jsx
// ❌ BAD
<App user={user}>
  <Layout user={user}>
    <Sidebar user={user}>
      <UserInfo user={user} />
    </Sidebar>
  </Layout>
</App>

// ✅ GOOD: Use Context
const UserContext = createContext();
<UserContext.Provider value={user}>
  ...
</UserContext.Provider>
```

### 3. useEffect Abuse
```jsx
// ❌ BAD: Everything in useEffect
useEffect(() => {
  fetchData();
  setLoading(true);
  validateForm();
  updateUI();
}, []);

// ✅ GOOD: Separate concerns
// Use React Query for data
// Use event handlers for user actions
// Use derived state when possible
```

---

## 🟠 Warning Smells (إصلاح قريباً)

### 4. Magic Numbers
```js
// ❌ BAD
if (items.length > 10) { ... }
const delay = 300;
const price = value * 1.15;

// ✅ GOOD
const MAX_VISIBLE_ITEMS = 10;
const ANIMATION_DURATION_MS = 300;
const TAX_RATE = 0.15;
```

### 5. Nested Ternaries
```jsx
// ❌ BAD
{isLoading ? <Loader /> : error ? <Error /> : data ? <Content /> : null}

// ✅ GOOD
if (isLoading) return <Loader />;
if (error) return <Error />;
if (!data) return null;
return <Content />;
```

### 6. String Concatenation for Classes
```jsx
// ❌ BAD
className={"btn " + (active ? "active " : "") + (large ? "large" : "")}

// ✅ GOOD: Use clsx or cn
className={cn("btn", { active, large })}
```

### 7. Inline Styles for Theming
```jsx
// ❌ BAD
<div style={{ color: '#C9A227', padding: '16px' }}>

// ✅ GOOD: Use CSS variables or Tailwind
<div className="text-primary p-4">
```

---

## 🟡 Minor Smells (تحسين تدريجي)

### 8. Console.log Left Behind
```js
// ❌ BAD: Debug logs in production
console.log('data:', data);
console.log('user clicked');

// ✅ GOOD: Remove or use proper logging
// logger.debug('data:', data); // Only in dev
```

### 9. Commented-Out Code
```js
// ❌ BAD: Dead code
// function oldFunction() {
//   // old implementation
// }

// ✅ GOOD: Delete it, Git remembers
```

### 10. Inconsistent Naming
```js
// ❌ BAD: Mixed conventions
const getUserData = () => {};
const fetch_user_profile = () => {};
const loadUserInfo = () => {};

// ✅ GOOD: Consistent pattern
const fetchUser = () => {};
const fetchUserProfile = () => {};
const fetchUserInfo = () => {};
```

### 11. Long Parameter Lists
```js
// ❌ BAD
function createUser(name, email, phone, address, city, country, zip) {}

// ✅ GOOD: Use object
function createUser({ name, email, phone, address }) {}
```

### 12. Boolean Parameters
```js
// ❌ BAD: What does true mean?
fetchData(true, false, true);

// ✅ GOOD: Named options
fetchData({ 
  includeArchived: true, 
  limitResults: false,
  sortDescending: true 
});
```

---

## 🧪 Detection Commands

### ESLint Rules to Enable
```json
{
  "rules": {
    "no-console": "warn",
    "no-magic-numbers": "warn",
    "max-lines": ["warn", 300],
    "max-depth": ["warn", 3],
    "complexity": ["warn", 10]
  }
}
```

### Manual Review Checklist
- [ ] No file > 300 lines
- [ ] No function > 50 lines
- [ ] No component > 200 lines
- [ ] No nesting > 3 levels
- [ ] No console.log
- [ ] No commented code
- [ ] Consistent naming

---

## 🔧 Refactoring Patterns

### Extract Component
```jsx
// Before
<div>
  <h2>{title}</h2>
  <p>{description}</p>
  <button onClick={onClick}>Action</button>
</div>

// After
<Card title={title} description={description} onAction={onClick} />
```

### Extract Hook
```jsx
// Before: Logic scattered in component
const [data, setData] = useState();
const [loading, setLoading] = useState(true);
useEffect(() => { fetch(...) }, []);

// After
const { data, loading, error } = useFetchData(url);
```

### Extract Utility
```js
// Before: Repeated logic
const date1 = new Date(str).toLocaleDateString('ar-SY');
const date2 = new Date(str2).toLocaleDateString('ar-SY');

// After
const formatDate = (str) => new Date(str).toLocaleDateString('ar-SY');
```

---

## 📊 Smell Severity Matrix

| Smell | تأثير القراءة | تأثير الأداء | صعوبة الإصلاح |
|-------|--------------|--------------|---------------|
| God Component | 🔴 عالي | 🟠 متوسط | 🔴 عالي |
| Prop Drilling | 🟠 متوسط | 🟢 منخفض | 🟠 متوسط |
| useEffect Abuse | 🟠 متوسط | 🔴 عالي | 🟠 متوسط |
| Magic Numbers | 🟡 منخفض | 🟢 لا يوجد | 🟢 سهل |
| Console.log | 🟢 منخفض | 🟢 منخفض | 🟢 سهل |

---

> **"الكود النظيف ليس ترفاً، بل استثمار في المستقبل."**
