# ADR-0001: Why Next.js App Router

**Date:** 2026-01-21  
**Status:** Accepted

## Context

Choosing a framework for a modern web application that requires:
- Server-side rendering
- API routes
- File-based routing
- Modern React features

## Decision

Use Next.js 15+ with App Router (not Pages Router).

## Alternatives Considered

1. **Remix**
   - Pros: Excellent form handling, progressive enhancement
   - Cons: Smaller ecosystem, less corporate backing
   - Why rejected: Next.js has better deployment options (Vercel)

2. **Vanilla React + Vite**
   - Pros: Full control, no framework lock-in
   - Cons: Manual routing, auth, data fetching setup
   - Why rejected: Time to market matters more than flexibility

## Consequences

### Positive
- Built-in SSR, ISR, streaming
- Huge community and resources
- Vercel integration for easy deployment

### Negative
- Vendor preference for Vercel (though self-hosting possible)
- Framework churn risk (Page Router → App Router)

### Neutral
- Learning curve for App Router patterns
