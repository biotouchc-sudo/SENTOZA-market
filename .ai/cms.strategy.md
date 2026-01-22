# CMS & Dynamic Content Strategy

**Problem:** Client needs to update Logo, Prices, Articles.
**Rule:** Use the right tool for the update frequency.

## 1. Static Configuration (Low Frequency)
**Use for:** Logo, Brand Colors, Social Links, Contact Info.
**Solution:** `project.config.ts` or `settings.json`.
**Why:** These rarely change. No need for a database.
**Edit:** Developer or GitHub Web Editor.

## 2. Structured Data (Medium Frequency)
**Use for:** Prices, Menu Items, Team Members, FAQs.
**Solution:**
- **Option A (Dev-first):** JSON/YAML files in `data/`.
- **Option B (Client-first):** Headless CMS (Sanity / Strapi).
**Decision Rule:**
- If client is tech-savvy → Option A.
- If client needs visual editor → Option B.

## 3. High Volume Content (High Frequency)
**Use for:** Articles, Blog Posts, News.
**Solution:** Headless CMS (Sanity / Contentful).
**Why:** Rich text editing, image cropping, scheduling required.

## 4. Operational Data (Real-time)
**Use for:** Orders, Reservations, User Accounts.
**Solution:** Database (PostgreSQL) + Admin Panel.
**Why:** Transactional integrity required.

## The "Smart Update" Workflow (2026)
Instead of building a custom Admin Panel for everything:
1. **Prices/Products:** Sync from Stripe/Shopify (Source of Truth).
2. **Articles:** Sync from Sanity.
3. **Site Text:** Use "Visual Editing" (Click-to-edit on preview).

**Agent Instruction:**
If user asks "How do I update X?", check this file and recommend the matching tier.
