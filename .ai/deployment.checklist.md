# Deployment Checklist (Pre-Launch)

## Phase 1: Code Quality ✅
- [ ] All tests passing
- [ ] No TypeScript errors (`tsc --noEmit`)
- [ ] No lint errors
- [ ] No console.log in production code
- [ ] Error boundaries in place

## Phase 2: Performance ✅
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] Bundle size within budget
- [ ] Images optimized (WebP/AVIF)
- [ ] Fonts subset and preloaded

## Phase 3: Security ✅
- [ ] No exposed secrets in code
- [ ] Environment variables configured
- [ ] HTTPS enforced
- [ ] CSP headers set
- [ ] Rate limiting enabled
- [ ] Input validation on all forms
- [ ] SQL injection prevention verified

## Phase 4: SEO ✅
- [ ] All pages have unique titles
- [ ] Meta descriptions present
- [ ] Open Graph tags set
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Structured data (JSON-LD) added

## Phase 5: Accessibility ✅
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast verified
- [ ] Alt text on images
- [ ] Form labels present
- [ ] Focus states visible

## Phase 6: Monitoring ✅
- [ ] Error tracking configured (Sentry)
- [ ] Analytics installed
- [ ] Uptime monitoring set
- [ ] Performance monitoring enabled

## Phase 7: Legal ✅
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Cookie consent (if applicable)
- [ ] Copyright notice in footer

## Phase 8: Final ✅
- [ ] Favicon and app icons
- [ ] 404 page designed
- [ ] 500 page designed
- [ ] Redirects configured
- [ ] DNS propagated
- [ ] SSL certificate valid
- [ ] Backup system in place

## Launch Command
```bash
npm run snapshot        # Backup
npm run verify          # All checks
npm run build           # Production build
npm run deploy          # Ship it 🚀
```

## Rollback Plan
If critical error detected within 24h:
```bash
git checkout snapshot/auto_[timestamp]
npm run deploy
```
