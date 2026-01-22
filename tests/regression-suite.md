# Regression Test Suite
# 50 scenarios covering all project types

## Category 1: File Tree Generation (10 tests)
1. Landing Page - Static
2. Corporate Site - Hybrid
3. SaaS Platform - Dynamic
4. E-commerce - Marketplace
5. Dashboard - Client-heavy
6. Blog - Headless CMS
7. Portfolio - Static
8. API Service - Backend-only
9. Mobile App Backend - REST
10. Multi-tenant SaaS - Modular

## Category 2: Component Generation (10 tests)
11. Button with variants
12. Form with validation
13. Modal/Dialog
14. Navigation menu
15. Card component
16. Table with sorting
17. Dropdown/Select
18. Loading skeleton
19. Error boundary
20. Toast notification

## Category 3: Server Actions (10 tests)
21. User login
22. Data mutation
23. File upload
24. Email sending
25. Payment processing
26. Data export
27. Bulk operations
28. Scheduled tasks
29. Webhook handling
30. Cache invalidation

## Category 4: Database Schemas (10 tests)
31. User management
32. E-commerce (products, orders)
33. Blog/CMS
34. Multi-tenancy
35. Analytics/Events
36. Messaging/Chat
37. File storage metadata
38. Audit logs
39. Permissions/RBAC
40. Time-series data

## Category 5: Migration Scripts (5 tests)
41. Add column with default
42. Add NOT NULL constraint
43. Create index concurrently
44. Foreign key addition
45. Data type change

## Category 6: Security Patterns (5 tests)
46. Auth flow (Clerk)
47. Rate limiting
48. CSRF protection
49. Input validation
50. Secret management

## Usage
Run nightly via CI:
```bash
npm run test:regression
```

Expected: 100% pass rate
If < 95%: Freeze agent permissions
