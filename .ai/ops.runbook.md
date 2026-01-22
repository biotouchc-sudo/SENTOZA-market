# Ops Runbook (دليل التشغيل)

## 1. التشغيل (Start)

### Development
```bash
npm run dev
# يعمل على http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

### Preview (per PR)
```bash
npm run preview
# Vercel/Netlify auto-generates preview URL
```

---

## 2. الإيقاف (Stop)

### Graceful Shutdown
```bash
# Ctrl+C in terminal
# Or: pm2 stop app-name
```

### Emergency Kill
```bash
pkill -f "node"
# تنظيف الـ processes
```

---

## 3. Rollback (التراجع)

### Option A: Git Revert
```bash
git revert HEAD
git push origin main
# Vercel auto-deploys
```

### Option B: Snapshot Restore
```bash
git checkout snapshot/auto_[timestamp]
npm run build
npm run deploy
```

### Option C: Vercel Rollback
1. Go to Vercel Dashboard
2. Deployments → Select previous
3. Click "Promote to Production"

---

## 4. المراقبة (Monitoring)

### Health Check
```bash
curl https://your-site.com/api/health
# Expected: {"status":"ok","timestamp":"..."}
```

### Logs
```bash
# Vercel
vercel logs --follow

# Self-hosted
tail -f /var/log/app.log
```

### Error Dashboard
- URL: https://sentry.io/your-org
- Alert: Slack #alerts channel

---

## 5. Incident Response

### P0 (Site Down)
1. **Acknowledge** (< 5 min)
2. **Rollback** immediately
3. **Notify** team
4. **Investigate** after stable

### P1 (Major Feature Broken)
1. **Acknowledge** (< 15 min)
2. **Feature Flag** disable
3. **Fix** + test
4. **Deploy** fix

### P2 (Minor Issue)
1. **Log** in issue tracker
2. **Schedule** fix
3. **Deploy** in next release

---

## 6. Scaling

### Vertical (more power)
- Upgrade Vercel plan
- Increase DB tier

### Horizontal (more instances)
- Enable Edge Functions
- Add read replicas

---

## 7. Backup

### Database
- Auto backup: Daily
- Retention: 30 days
- Restore: Contact DB provider

### Code
- Git history is the backup
- Tags for each release

---

## 8. Contacts

| Role | Contact |
|:---|:---|
| On-Call | [phone/slack] |
| DB Admin | [contact] |
| Hosting | [Vercel support] |
