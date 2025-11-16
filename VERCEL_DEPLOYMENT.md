# 🚀 Complete Vercel Deployment Guide - YekiHastim Demo

## 📋 Pre-Deployment Checklist

### ✅ 1. Security Check

Before deploying, ensure:

- [ ] No API keys or secrets are hardcoded in your code
- [ ] `.env.local` and `.env` files are in `.gitignore`
- [ ] All sensitive data uses environment variables
- [ ] No production database credentials in code
- [ ] Payment gateway keys are not exposed

### ✅ 2. Code Cleanup

```bash
# Remove console.logs (optional but recommended)
# Remove test/debug code
# Ensure all imports are used
```

### ✅ 3. Build Test

```bash
# Test production build locally
npm run build

# Test production server locally
npm start
```

---

## 🔐 Step 1: Environment Variables Setup

### A. Create `.env.local` (for local development)

```bash
# Copy the example file
cp env.example .env.local
```

### B. Fill in your `.env.local` (DO NOT COMMIT THIS FILE)

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=یکی هستیم - کانون توسعه گران جوان

# API Configuration (if you have backend)
# API_BASE_URL=https://your-api-domain.com
# API_KEY=your-api-key-here

# Payment Gateway (if needed - use sandbox for demo)
# ZARINPAL_MERCHANT_ID=your-merchant-id
# ZARINPAL_SANDBOX=true

# Analytics (optional)
# GOOGLE_ANALYTICS_ID=your-ga-id

# Security (if using JWT or encryption)
# JWT_SECRET=your-jwt-secret-key
# ENCRYPTION_KEY=your-encryption-key
```

### C. Important Notes:

⚠️ **NEVER commit `.env.local` or `.env` to Git!**

- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Variables without `NEXT_PUBLIC_` are server-side only (more secure)
- Use server-side variables for API keys, secrets, and credentials

---

## 🌐 Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**

   - Visit: https://vercel.com
   - Sign in with GitHub

3. **Import Project**

   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

4. **Configure Project Settings**

   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. **Add Environment Variables**

   - In the "Environment Variables" section
   - Add each variable from your `.env.local`
   - **Important**:
     - For `NEXT_PUBLIC_*` variables: Add to "Production", "Preview", and "Development"
     - For server-side variables: Add to "Production" and "Preview" only

   Example:

   ```
   NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME = یکی هستیم - کانون توسعه گران جوان
   ```

6. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at: `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (first time - will ask questions)
vercel

# Deploy to production
vercel --prod
```

---

## 🔒 Step 3: Protecting API Keys & Server Connections

### A. Server-Side API Routes (Recommended)

Create API routes in `src/pages/api/` to hide your backend:

**Example: `src/pages/api/donations.js`**

```javascript
// This runs on the server - API keys are safe here
export default async function handler(req, res) {
  // Get API key from environment (server-side only)
  const apiKey = process.env.API_KEY; // NOT NEXT_PUBLIC_API_KEY

  if (req.method === "POST") {
    try {
      // Call your backend API
      const response = await fetch("https://your-backend-api.com/donations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`, // Secure!
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

**Then call from your frontend:**

```javascript
// Frontend code - safe to expose
const response = await fetch("/api/donations", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(donationData),
});
```

### B. Environment Variables Best Practices

✅ **DO:**

```env
# Server-side only (secure)
API_KEY=secret-key-123
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret

# Public (safe to expose)
NEXT_PUBLIC_SITE_URL=https://your-site.com
NEXT_PUBLIC_API_URL=https://api.your-site.com
```

❌ **DON'T:**

```env
# NEVER expose secrets with NEXT_PUBLIC_
NEXT_PUBLIC_API_KEY=secret-key-123  # ❌ BAD!
NEXT_PUBLIC_DATABASE_URL=...        # ❌ BAD!
```

### C. Rate Limiting (Optional but Recommended)

Add rate limiting to protect your API:

```bash
npm install express-rate-limit
```

**Example in API route:**

```javascript
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

export default async function handler(req, res) {
  // Apply rate limiting
  await new Promise((resolve, reject) => {
    limiter(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });

  // Your API logic here
}
```

---

## 🛡️ Step 4: Security Headers

### Update `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## 📝 Step 5: Post-Deployment

### A. Verify Environment Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Verify all variables are set correctly
3. Check that sensitive variables are NOT prefixed with `NEXT_PUBLIC_`

### B. Test Your Deployment

- [ ] Homepage loads correctly
- [ ] All routes work
- [ ] API calls work (if applicable)
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile responsive design works

### C. Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

---

## 🔍 Step 6: Monitoring & Debugging

### A. Vercel Analytics

Enable in Vercel Dashboard:

- Settings → Analytics → Enable Web Analytics

### B. Check Logs

- Vercel Dashboard → Your Project → Deployments → Click on deployment → View Function Logs

### C. Common Issues

**Issue: Environment variables not working**

- Solution: Redeploy after adding variables (Vercel needs a new build)

**Issue: API routes returning 500**

- Solution: Check Vercel Function Logs for errors
- Verify environment variables are set correctly

**Issue: Build fails**

- Solution: Check build logs in Vercel
- Test build locally: `npm run build`

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

---

## ✅ Final Checklist Before Sharing

- [ ] All environment variables set in Vercel
- [ ] No API keys exposed in client-side code
- [ ] Custom domain configured (if needed)
- [ ] Analytics enabled (optional)
- [ ] All pages tested and working
- [ ] Mobile responsive tested
- [ ] Performance optimized
- [ ] SEO meta tags added (if needed)

---

## 🎉 You're Ready!

Your site is now live and secure! Share your Vercel URL with confidence.

**Remember:**

- Never commit `.env.local` or `.env` files
- Always use server-side API routes for sensitive operations
- Keep your Vercel environment variables updated
- Monitor your deployment logs regularly

Good luck with your portfolio! 🚀
