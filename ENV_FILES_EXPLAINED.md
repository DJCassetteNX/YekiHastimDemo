# 📝 Environment Files Explained

## 🔍 Understanding Your Environment Files

You have **3 different environment files** in your project. Here's what each one is for:

---

## 📄 File Comparison

| File              | Purpose                                                 | Safe to Commit? | Contains Real Secrets?     |
| ----------------- | ------------------------------------------------------- | --------------- | -------------------------- |
| **`.env.local`**  | Your actual environment variables for local development | ❌ **NO**       | ⚠️ **MAY CONTAIN SECRETS** |
| **`.env.sample`** | Template/example file (shows what variables are needed) | ✅ **YES**      | ✅ **NO SECRETS**          |
| **`env.example`** | Another template/example file                           | ✅ **YES**      | ✅ **NO SECRETS**          |

---

## 🔐 `.env.local` - YOUR ACTUAL SECRETS

**What it is:**

- Contains your **real** environment variables
- Used by Next.js for local development
- **This file has your actual values** (not placeholders)

**Safety:**

- ❌ **NEVER commit this to Git**
- ✅ Already in `.gitignore` (protected)
- ⚠️ **Contains real values** - keep it private!

**Example content:**

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=یکی هستیم - کانون توسعه گران جوان
```

**What to do:**

- ✅ Keep this file on your local machine only
- ✅ Use it for local development
- ❌ Never share it or commit it
- ✅ Add your real API keys here (for local testing)

---

## 📋 `.env.sample` - TEMPLATE FILE

**What it is:**

- A **template** showing what environment variables are needed
- Contains **example values** or placeholders
- Used as a reference for other developers

**Safety:**

- ✅ **Safe to commit** to Git
- ✅ Contains **NO real secrets** (only examples)
- ✅ Can be shared publicly

**Example content:**

```env
# This is just an example - no real secrets
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=یکی هستیم - کانون توسعه گران جوان

# API Configuration (if needed)
# API_BASE_URL=https://your-api-domain.com
# API_KEY=your-api-key-here  ← This is just a placeholder!
```

**What to do:**

- ✅ Safe to commit to Git
- ✅ Share with team members
- ✅ Use as a reference when setting up `.env.local`

---

## 📋 `env.example` - ANOTHER TEMPLATE

**What it is:**

- Same purpose as `.env.sample`
- Another template/example file
- Shows what variables are needed

**Safety:**

- ✅ **Safe to commit** to Git
- ✅ Contains **NO real secrets**

**Note:** You have both `.env.sample` and `env.example` - they serve the same purpose. You can keep one or both.

---

## ⚠️ Important Safety Rules

### ✅ DO:

- ✅ Use `.env.local` for your real values (local development)
- ✅ Commit `.env.sample` or `env.example` to Git (they're safe)
- ✅ Copy `.env.sample` to `.env.local` when setting up
- ✅ Add `.env.local` to `.gitignore` (already done!)

### ❌ DON'T:

- ❌ Never commit `.env.local` to Git
- ❌ Never put real API keys in `.env.sample` or `env.example`
- ❌ Never share `.env.local` with others
- ❌ Never push `.env.local` to GitHub

---

## 🔍 How to Check if Your Files are Safe

### Check if `.env.local` is ignored by Git:

```bash
git status
# .env.local should NOT appear in the list
```

### Check what's in your `.env.local`:

```bash
cat .env.local
# Review - make sure no real secrets are exposed
```

### Check if `.env.sample` is safe:

```bash
cat .env.sample
# Should only contain example/placeholder values
```

---

## 🎯 Recommended Setup

### For Local Development:

1. Copy the template:

   ```bash
   cp .env.sample .env.local
   # or
   cp env.example .env.local
   ```

2. Edit `.env.local` with your real values:

   ```bash
   # Open .env.local and add your real API keys, etc.
   ```

3. **Never commit `.env.local`** - it's already in `.gitignore`

### For Team/Public:

- ✅ Commit `.env.sample` or `env.example` to Git
- ✅ Team members copy it to `.env.local` and add their own values

---

## 🚨 Security Checklist

Before deploying, verify:

- [ ] ✅ `.env.local` is in `.gitignore` (already done!)
- [ ] ✅ `.env.local` contains your real values (for local use only)
- [ ] ✅ `.env.sample` or `env.example` contains only examples (safe to commit)
- [ ] ✅ No real API keys in `.env.sample` or `env.example`
- [ ] ✅ `.env.local` is NOT tracked by Git

---

## 💡 Quick Reference

**`.env.local`** = Your real secrets (private, local only)  
**`.env.sample`** = Template/example (safe to share)  
**`env.example`** = Template/example (safe to share)

---

## ✅ Your Current Status

Based on the file check:

- ✅ `.env.local` is protected by `.gitignore`
- ✅ `.env.sample` exists (likely safe template)
- ✅ `env.example` exists (safe template)

**You're doing it right!** 🎉

Just make sure:

1. `.env.local` has your real values (for local development)
2. `.env.sample` has only example/placeholder values
3. Never commit `.env.local` to Git

---

_For deployment to Vercel, add your environment variables in the Vercel Dashboard, not in code!_
