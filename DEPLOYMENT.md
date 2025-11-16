# راهنمای Deploy - یکی هستیم

## 🚀 مراحل Deploy

### 1. آماده‌سازی برای Git

```bash
# اضافه کردن فایل‌ها به Git
git add .

# Commit کردن تغییرات
git commit -m "Initial commit: Yeki Hastim Demo"

# اضافه کردن remote repository
git remote add origin https://github.com/yourusername/yekihastim-demo.git

# Push کردن به GitHub
git push -u origin main
```

### 2. آماده‌سازی برای Production

#### الف) Environment Variables

```bash
# کپی کردن فایل نمونه
cp env.example .env.local

# ویرایش متغیرهای محیطی
nano .env.local
```

#### ب) Build کردن پروژه

```bash
# نصب dependencies
npm install

# Build برای production
npm run build

# تست کردن build
npm start
```

### 3. گزینه‌های Deploy

#### گزینه 1: Vercel (پیشنهادی)

```bash
# نصب Vercel CLI
npm i -g vercel

# Deploy کردن
vercel

# یا از طریق وبسایت Vercel
# https://vercel.com
```

#### گزینه 2: Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

#### گزینه 3: سرور شخصی (VPS/Shared Hosting)

**برای VPS:**

```bash
# نصب PM2 برای مدیریت process
npm install -g pm2

# Build کردن
npm run build

# اجرا با PM2
pm2 start npm --name "yekihastim" -- start
pm2 save
pm2 startup
```

**برای Shared Hosting:**

```bash
# Build کردن
npm run build

# آپلود فایل‌های .next و public
# تنظیم server برای Next.js
```

### 4. تنظیمات امنیتی

#### الف) Environment Variables محافظت شده

- هرگز `.env.local` رو commit نکن
- از `env.example` استفاده کن
- متغیرهای حساس رو در پنل hosting تنظیم کن

#### ب) Security Headers

- Headers امنیتی در `next.config.mjs` تنظیم شده
- HTTPS فعال کن
- CSP (Content Security Policy) اضافه کن اگر نیاز بود

### 5. بهینه‌سازی Performance

#### الف) Image Optimization

- تصاویر رو در پوشه `public/images` قرار بده
- از فرمت‌های WebP و AVIF استفاده کن
- سایز تصاویر رو بهینه کن

#### ب) Font Optimization

- فونت‌ها در `public/fonts` قرار دارن
- از `font-display: swap` استفاده شده

### 6. مانیتورینگ

#### الف) Analytics

```javascript
// اضافه کردن Google Analytics
// در _app.jsx یا _document.js
```

#### ب) Error Tracking

```bash
# نصب Sentry
npm install @sentry/nextjs
```

### 7. Backup و Maintenance

#### الف) Database Backup (اگر داری)

```bash
# Backup روزانه
pg_dump your_database > backup_$(date +%Y%m%d).sql
```

#### ب) Code Backup

```bash
# Backup کد
git push origin main
```

## 🔧 تنظیمات اضافی

### SSL Certificate

- Let's Encrypt برای HTTPS رایگان
- Cloudflare برای CDN و SSL

### CDN

- Cloudflare
- AWS CloudFront
- Vercel Edge Network

### Domain

- تنظیم DNS
- Redirect از www به non-www یا برعکس

## 📞 پشتیبانی

اگر مشکلی داشتی:

1. Log ها رو چک کن
2. Console errors رو بررسی کن
3. Network tab رو چک کن
4. با من تماس بگیر

## 🎯 نکات مهم

- همیشه قبل از deploy، تست کن
- از staging environment استفاده کن
- Backup بگیر قبل از تغییرات بزرگ
- Performance رو مانیتور کن
- Security updates رو پیگیری کن
