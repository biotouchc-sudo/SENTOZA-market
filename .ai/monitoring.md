# Post-Launch Monitoring (2026)

## Philosophy
**If you can't measure it, you can't improve it.**

## Day 1-7: Critical Monitoring

### 1. Error Rate
**Tool:** Sentry / LogRocket
**Alert if:** Error rate > 1%
**Check:**
- JavaScript errors
- API failures
- 404 pages

### 2. Performance
**Tool:** Vercel Analytics / SpeedCurve
**Alert if:** LCP > 3s
**Check:**
- Core Web Vitals daily
- Load time by page
- Slow API endpoints

### 3. Uptime
**Tool:** Better Uptime / Pingdom
**Alert if:** Downtime > 1 min
**Check:**
- Every 1 minute
- Multiple regions
- SSL expiry

## Week 2-4: Growth Monitoring

### 4. User Behavior
**Tool:** PostHog / Mixpanel
**Track:**
- Page views by route
- CTA click rates
- Funnel drop-offs
- Session duration

### 5. Conversions
**Track:**
- Form submissions
- Signups
- Purchases
- Goal completions

### 6. SEO Health
**Tool:** Search Console
**Check weekly:**
- Indexed pages
- Click-through rate
- Top queries
- Core Web Vitals

## Monthly: Business Metrics

### 7. KPIs Dashboard
| Metric | Target | Alert If |
|:---|:---:|:---:|
| Uptime | 99.9% | < 99% |
| Error Rate | < 0.1% | > 1% |
| LCP | < 2s | > 3s |
| Bounce Rate | < 50% | > 70% |
| Conversion | Baseline | -20% |

## Alert Channels
```
Critical (P0): SMS + Phone
High (P1): Slack DM
Medium (P2): Slack Channel
Low (P3): Email Digest
```

## Incident Response
1. **Detect:** Alert received
2. **Acknowledge:** Within 5 min
3. **Investigate:** Check logs, metrics
4. **Mitigate:** Rollback if needed
5. **Resolve:** Fix root cause
6. **Document:** Post-mortem in ADR
