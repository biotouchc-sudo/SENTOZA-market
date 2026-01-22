# API Patterns (2026)

## Philosophy
**Consistent. Predictable. Self-Documenting.**

## Response Format (Standard)
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2026-01-21T00:00:00Z",
    "requestId": "uuid"
  }
}
```

## Error Format (Standard)
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "issue": "required" }
    ]
  },
  "meta": { ... }
}
```

## HTTP Status Codes
| Code | When to Use |
|:---:|:---|
| 200 | Success (GET, PUT, PATCH) |
| 201 | Created (POST) |
| 204 | No Content (DELETE) |
| 400 | Bad Request (validation) |
| 401 | Unauthorized (no token) |
| 403 | Forbidden (no permission) |
| 404 | Not Found |
| 422 | Unprocessable (business logic) |
| 429 | Rate Limited |
| 500 | Server Error |

## Naming Conventions
```
GET    /api/users          → List users
GET    /api/users/:id      → Get user
POST   /api/users          → Create user
PATCH  /api/users/:id      → Update user
DELETE /api/users/:id      → Delete user

GET    /api/users/:id/orders → Nested resource
```

## Validation Pattern
```typescript
// Always validate input first
const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2)
});

const result = schema.safeParse(body);
if (!result.success) {
  return { status: 400, error: result.error };
}
```

## Rate Limiting (Required for Public APIs)
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1706000000
```

## Security Headers (Required)
```
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
```

## Anti-Patterns (NEVER DO)
- ❌ Expose internal IDs (use UUIDs)
- ❌ Return stack traces in production
- ❌ Accept unvalidated input
- ❌ Inconsistent response formats
