# SEO Requirements (2026)

## Technical SEO (Non-Negotiable)

### 1. Page Structure
```html
<html lang="ar" dir="rtl">
<head>
  <title>Unique Title | Brand</title>
  <meta name="description" content="150-160 chars">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="https://...">
</head>
```

### 2. Heading Hierarchy
- ONE `<h1>` per page (main topic)
- `<h2>` for sections
- `<h3>` for subsections
- Never skip levels (h1 → h3)

### 3. Open Graph (Social Sharing)
```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://.../og-image.jpg">
<meta property="og:url" content="https://...">
<meta property="og:type" content="website">
```

### 4. Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:image" content="https://.../image.jpg">
```

### 5. Structured Data (JSON-LD)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brand Name",
  "url": "https://...",
  "logo": "https://.../logo.png"
}
</script>
```

### 6. Performance = SEO
- LCP < 2.5s (Core Web Vital)
- CLS < 0.1 (Core Web Vital)
- INP < 200ms (Core Web Vital)

### 7. Indexing Control
```
# robots.txt
User-agent: *
Allow: /
Sitemap: https://.../sitemap.xml
```

### 8. Sitemap
- Auto-generate on build
- Include all public pages
- Update `lastmod` dates
- Submit to Google Search Console

## Content SEO Rules
- Keywords in first 100 words
- Internal links to related pages
- External links to authority sources
- Alt text on all images
- Readable URLs (no UUIDs)

## Local SEO (If Applicable)
- Google Business Profile
- NAP consistency (Name, Address, Phone)
- Local schema markup
- Reviews/testimonials
