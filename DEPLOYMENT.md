# 🚀 Deploy Your Website (3 Easy Options)

Your code is committed and ready to deploy! Choose one of these options:

---

## ⭐ Option 1: Vercel (RECOMMENDED - Easiest & Free)

Vercel is made by the creators of Next.js. It's the perfect hosting platform for your site.

### Step-by-Step:

**1. Push to GitHub first:**

```bash
# Create a new repo on GitHub.com, then run:
git remote add origin https://github.com/YOUR_USERNAME/catalyst-ai.git
git push -u origin main
```

**2. Deploy to Vercel:**

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign up"** (use your GitHub account)
3. Click **"Add New Project"**
4. Select your `catalyst-ai` repository
5. Click **"Deploy"**

**That's it!** ✨ Your site will be live in ~60 seconds at `https://catalyst-ai-xxxx.vercel.app`

### Add a Custom Domain (Optional):

In Vercel dashboard:
1. Go to your project → **Settings** → **Domains**
2. Add your domain (e.g., `catalyst-ai.com`)
3. Update your domain's DNS records (Vercel shows you exactly what to do)
4. Wait 5-10 minutes for DNS propagation

---

## Option 2: Netlify (Also Great & Free)

Another popular option with drag-and-drop deployment.

### Deploy:

**Option A: GitHub Integration**
1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click **"Add new site"** → **"Import from Git"**
4. Select your repo
5. Click **"Deploy"**

**Option B: Manual Deploy (No GitHub needed)**
```bash
npm run build
# Then drag the `.next` folder to netlify.com/drop
```

---

## Option 3: No GitHub? Use Vercel CLI

If you don't want to use GitHub, deploy directly from your computer:

### Setup:

```bash
# Install Vercel CLI
npm install -g vercel

# Login (will open browser)
vercel login

# Deploy (from your project directory)
cd /Users/dev/Projects/catalyst
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- Project name? `catalyst-ai` (or whatever you want)
- Directory? Press **Enter** (current directory)
- Override settings? **N**

Your site will be deployed immediately!

### Deploy Updates:

Every time you make changes:
```bash
vercel --prod
```

---

## 📊 After Deployment Checklist

Once live, verify:

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] "Book a Call" button works
- [ ] Calendly widget appears on `/book` page
- [ ] Site is responsive on mobile
- [ ] All animations work
- [ ] Test on different browsers

---

## 🔧 Environment Variables (If Needed Later)

If you add API keys or secrets later, add them in:

**Vercel:**
Project Settings → Environment Variables

**Netlify:**
Site Settings → Build & deploy → Environment

---

## 🎯 Your Current Status

✅ Git initialized
✅ Code committed
✅ Calendly integrated
✅ Ready to deploy

**Next step:** Choose an option above and deploy! I recommend **Vercel** for the smoothest experience.

---

## 💡 Quick Comparison

| Feature | Vercel | Netlify | Vercel CLI |
|---------|--------|---------|------------|
| Ease of use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Free tier | Yes | Yes | Yes |
| Custom domain | Yes | Yes | Yes |
| Auto deployments | Yes | Yes | No |
| Next.js optimized | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Needs GitHub | Yes | Optional | No |

**My recommendation:** Go with **Vercel + GitHub** for automatic deployments every time you push code.

