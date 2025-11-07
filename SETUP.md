# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. Set Up Calendly (Required for Booking Page)

### Get Your Calendly Link:
1. Sign up at [calendly.com](https://calendly.com)
2. Create an event type (e.g., "15-Minute AI Discovery Call")
3. Copy your link (e.g., `https://calendly.com/john-smith/15min`)

### Update the Website:

**File: `app/book/page.tsx`** (around line 58)

Replace:
```tsx
data-url="https://calendly.com/your-link-here?hide_gdpr_banner=1..."
```

With:
```tsx
data-url="https://calendly.com/YOUR-USERNAME/YOUR-EVENT?hide_gdpr_banner=1..."
```

**File: `app/layout.tsx`** (add before `</body>`)

Add this script tag:
```tsx
<script 
  type="text/javascript" 
  src="https://assets.calendly.com/assets/external/widget.js" 
  async
/>
```

## 4. Customize Content

While the site is running, you can update:

- **Hero headline**: `components/home/HeroSection.tsx`
- **Services**: `components/home/ProblemSolutionSection.tsx`
- **How it works**: `components/home/HowItWorksSection.tsx`
- **Contact email**: `components/Footer.tsx`

All changes will hot-reload automatically!

## 5. Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main

# 2. Go to vercel.com
# 3. Click "New Project"
# 4. Import your GitHub repo
# 5. Click "Deploy"
```

Done! Your site will be live in ~60 seconds.

## Troubleshooting

**Port already in use?**
```bash
# Kill the process and try again
lsof -ti:3000 | xargs kill -9
npm run dev
```

**Calendly not showing?**
- Make sure you added the script tag to `layout.tsx`
- Make sure you replaced `your-link-here` with your actual Calendly username
- Clear browser cache and refresh

**Styling looks broken?**
- Make sure all dependencies installed: `npm install`
- Delete `.next` folder and restart: `rm -rf .next && npm run dev`

