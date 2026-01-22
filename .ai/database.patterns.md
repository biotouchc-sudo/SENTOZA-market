# Database Patterns (2026)

## Philosophy
**Schema is a Contract. Migrations are Reversible.**

## Naming Conventions
```sql
-- Tables: plural, snake_case
users, products, order_items

-- Columns: singular, snake_case
user_id, created_at, is_active

-- Foreign Keys: table_column_fk
users_id_fk

-- Indexes: table_column_idx
users_email_idx
```

## Required Columns (Every Table)
```sql
id          UUID PRIMARY KEY DEFAULT gen_random_uuid()
created_at  TIMESTAMPTZ DEFAULT NOW()
updated_at  TIMESTAMPTZ DEFAULT NOW()
```

## Common Patterns

### 1. Soft Delete
```sql
deleted_at  TIMESTAMPTZ NULL
-- Query: WHERE deleted_at IS NULL
```

### 2. Audit Trail
```sql
created_by  UUID REFERENCES users(id)
updated_by  UUID REFERENCES users(id)
```

### 3. Status Enum
```sql
status      TEXT CHECK (status IN ('draft', 'active', 'archived'))
```

### 4. Slug/URL
```sql
slug        TEXT UNIQUE NOT NULL
-- Generate: slugify(title) + random suffix if collision
```

## Migration Rules
1. **Always reversible** - Every `up` has a `down`
2. **No data loss** - Add columns before removing old ones
3. **Idempotent** - Safe to run multiple times
4. **Small and focused** - One change per migration

## Index Strategy
```sql
-- Always index:
CREATE INDEX ON users(email);           -- Unique lookups
CREATE INDEX ON orders(user_id);        -- Foreign keys
CREATE INDEX ON products(created_at);   -- Sorting

-- Composite for filters:
CREATE INDEX ON orders(user_id, status);
```

## Anti-Patterns (NEVER DO)
- ❌ `SELECT *` in production code
- ❌ N+1 queries (use JOINs or batch)
- ❌ Business logic in database
- ❌ Unindexed foreign keys
