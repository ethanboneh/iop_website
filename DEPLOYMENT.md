# Deployment Guide for IOP Website

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it `iop-website` (or any name you prefer)
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/iop-website.git
   git branch -M main
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your GitHub username)

### Step 2: Deploy to Vercel

1. Go to https://vercel.com and sign up/login (you can use your GitHub account)

2. Click "Add New Project"

3. Import your GitHub repository:
   - Select the `iop-website` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. Your site will be live in ~2 minutes at a URL like: `https://iop-website.vercel.app`

5. (Optional) Add a custom domain:
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `iop.stanford.edu`)

## Alternative: Deploy to Netlify

1. Push to GitHub (same as Step 1 above)

2. Go to https://netlify.com and sign up/login

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

6. Click "Deploy site"

## Manual Build Test (Before Deploying)

Test that your site builds correctly:

```bash
npm run build
npm start
```

Visit http://localhost:3000 to verify everything works.

## Environment Variables (If Needed Later)

If you add environment variables (like API keys), add them in:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

## Continuous Deployment

Once connected to GitHub, every push to `main` will automatically deploy a new version!

