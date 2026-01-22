# Decision Log

| ID | Date | Decision | Context/Rationale | Alternatives Rejected | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **DEC-001** | 2026-01-21 | **Modify Template** vs Build from Scratch | Time-to-market efficiency. Template has robust auth/UI pre-built. | Scratch build (too slow). | ✅ Active |
| **DEC-002** | 2026-01-21 | **Memory Cache** vs Redis | Project is single-instance deployment initially. Redis adds complexity/cost. | Redis (overkill for v1). | ✅ Active |
| **DEC-003** | 2026-01-21 | **Manual Data File** (`site-data.ts`) vs CMS | Faster iteration, type-safety, zero external dependency. | Sanity/Strapi (setup overhead). | ✅ Active |
| **DEC-004** | 2026-01-21 | **Clerk Auth** | Pre-integrated in template, robust security. | NextAuth (good but more setup). | ✅ Active |
| **DEC-005** | 2026-01-21 | **Dark Luxury Theme** | Matches "Ghiath Salon" premium brand identity. | Minimalist White (too clinical). | ✅ Active |
| **DEC-006** | 2026-01-21 | **Direct DB Access** in Components | Server Components allow safe direct DB access, reducing API boilerplate. | API Routes (unnecessary roundtrip). | ✅ Active |
