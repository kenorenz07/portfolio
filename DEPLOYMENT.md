# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

## Step-by-Step Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/kenorenz07/your-portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Your site is live! 🎉

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables

If you're using the contact form with EmailJS:

1. Go to Vercel Project Settings
2. Navigate to Environment Variables
3. Add these variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Alternative Deployment Platforms

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### AWS Amplify

1. Connect repository
2. Select Next.js framework
3. Auto-configure build settings
4. Deploy

### DigitalOcean App Platform

1. Create new app from GitHub
2. Select Next.js
3. Configure build settings
4. Deploy

## Post-Deployment Checklist

- ✅ Check all pages load correctly
- ✅ Test dark mode toggle
- ✅ Verify responsive design on mobile
- ✅ Test contact form submission
- ✅ Check all links work
- ✅ Verify social media links
- ✅ Test navigation
- ✅ Check SEO meta tags

## Updating Your Deployed Site

Simply push changes to your main branch:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Vercel automatically redeploys on every push!

## Custom Domain Setup

### Vercel

1. Project Settings → Domains
2. Add domain
3. Configure DNS:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

### Namecheap/GoDaddy

1. Go to DNS Management
2. Add A Record pointing to Vercel IP
3. Add CNAME for www subdomain
4. Wait for propagation (5-30 minutes)

## Performance Optimization

- Images: Use Next.js Image component
- Fonts: Optimize with next/font
- Analytics: Add Vercel Analytics
- Monitoring: Enable Vercel Speed Insights

## Troubleshooting

### Build Fails

- Check Node.js version (18+)
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm install`

### Environment Variables Not Working

- Ensure they're prefixed with `NEXT_PUBLIC_`
- Redeploy after adding variables

### 404 Errors

- Check file paths
- Verify all pages are in `/app` directory

## Support

For deployment issues:

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

---

Good luck with your deployment! 🚀
