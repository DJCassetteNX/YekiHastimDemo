# ✅ Quick Deployment Checklist

## Before Deploying

- [ ] **Test build locally**: `npm run build` and `npm start`
- [ ] **Remove console.logs** from production code (optional)
- [ ] **Check `.gitignore`** - ensure `.env*` files are ignored
- [ ] **No hardcoded secrets** in your code
- [ ] **All API calls** use environment variables

## Vercel Deployment Steps

1. [ ] **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. [ ] **Go to Vercel.com** → Sign in with GitHub

3. [ ] **Import your repository**

4. [ ] **Add Environment Variables** in Vercel Dashboard:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-project.vercel.app`
   - `NEXT_PUBLIC_SITE_NAME` = `یکی هستیم - کانون توسعه گران جوان`
   - Add any other variables from `env.example`

5. [ ] **Deploy** and wait for build

6. [ ] **Test your live site**

## Security Checklist

- [ ] ✅ `.env.local` is NOT committed to Git
- [ ] ✅ All API keys use server-side variables (no `NEXT_PUBLIC_` prefix)
- [ ] ✅ Sensitive operations use API routes (`/api/*`)
- [ ] ✅ No secrets visible in browser DevTools
- [ ] ✅ Security headers configured in `next.config.mjs`

## After Deployment

- [ ] Test all pages work
- [ ] Test forms (if any)
- [ ] Test mobile responsive
- [ ] Check Vercel logs for errors
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your actual domain

## Quick Commands

```bash
# Test production build
npm run build
npm start

# Deploy with Vercel CLI (optional)
npm i -g vercel
vercel login
vercel --prod
```

---

📖 **Full Guide**: See `VERCEL_DEPLOYMENT.md` for detailed instructions

