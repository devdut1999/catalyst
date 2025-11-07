# Catalyst AI - AI Consultancy Website

A modern, futuristic website for an AI consultancy business built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Modern Tech Stack**: Next.js 15, React 18, TypeScript
- 🎨 **Futuristic Design**: Dark mode with neon accents, smooth animations, particle effects
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance**: Built on Next.js for blazing-fast page loads
- 🎯 **SEO Optimized**: Meta tags, semantic HTML, and optimal Core Web Vitals
- 📅 **Calendly Integration**: Easy booking system for consultations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see your site.

## Calendly Integration Setup

To enable the booking functionality, you need to set up Calendly:

### Step 1: Create a Calendly Account

1. Go to [calendly.com](https://calendly.com) and sign up
2. Connect your calendar (Google, Outlook, or Apple)
3. Create an event type called "15-Minute AI Discovery Call"
4. Set your availability and preferences

### Step 2: Get Your Calendly Link

1. In Calendly, go to your event type
2. Copy your scheduling link (e.g., `https://calendly.com/your-username/15min`)
3. Extract just the username part: `your-username/15min`

### Step 3: Update the Website

1. Open `app/book/page.tsx`
2. Find the line with `data-url="https://calendly.com/your-link-here...`
3. Replace `your-link-here` with your actual Calendly link

**Before:**
```tsx
data-url="https://calendly.com/your-link-here?hide_gdpr_banner=1..."
```

**After:**
```tsx
data-url="https://calendly.com/john-smith/15min?hide_gdpr_banner=1..."
```

### Step 4: Add Calendly Widget Script

Add the Calendly widget script to your `app/layout.tsx`:

1. Open `app/layout.tsx`
2. Add this script tag inside the `<body>` tag, before the closing `</body>`:

```tsx
<script 
  type="text/javascript" 
  src="https://assets.calendly.com/assets/external/widget.js" 
  async
/>
```

Your updated layout should look like this:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script 
          type="text/javascript" 
          src="https://assets.calendly.com/assets/external/widget.js" 
          async
        />
      </body>
    </html>
  );
}
```

## Customization Guide

### Colors & Branding

The color scheme is defined in `tailwind.config.ts`. You can customize:

- **Primary Color** (default: cyan `#00e5ff`): The main accent color
- **Background Colors**: Dark theme colors
- **Accent Colors**: Purple and green for variety

```typescript
colors: {
  primary: {
    DEFAULT: "#00e5ff", // Change this to your brand color
    dark: "#00b8d4",
  },
  // ... other colors
}
```

### Content Updates

All content is modular and easy to update:

1. **Homepage Hero**: Edit `components/home/HeroSection.tsx`
2. **Services Section**: Edit `components/home/ProblemSolutionSection.tsx`
3. **How It Works**: Edit `components/home/HowItWorksSection.tsx`
4. **Footer**: Edit `components/Footer.tsx`

### Adding Your Logo

Replace the "C" letter logo in `components/Navbar.tsx` and `components/Footer.tsx`:

```tsx
// Current placeholder
<div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-purple rounded-lg">
  <span className="text-xl font-bold">C</span>
</div>

// Replace with your logo image
<Image src="/logo.png" alt="Your Company" width={32} height={32} />
```

### Email & Contact Info

Update your contact information in:
- `components/Footer.tsx`: Change `hello@catalyst-ai.com`
- `app/layout.tsx`: Update metadata with your business info

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy" - Your site will be live in ~1 minute!

### Custom Domain

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain and follow DNS instructions

## Project Structure

```
catalyst/
├── app/
│   ├── layout.tsx          # Root layout with nav & footer
│   ├── page.tsx            # Homepage
│   ├── book/
│   │   └── page.tsx        # Booking/contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── home/
│       ├── HeroSection.tsx
│       ├── ProblemSolutionSection.tsx
│       ├── HowItWorksSection.tsx
│       └── CTASection.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets (add your images here)
```

## Tech Stack Details

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Hosting**: Vercel (recommended)

## Performance

This site is optimized for:
- ✅ Fast page loads (< 1 second)
- ✅ Perfect Lighthouse scores
- ✅ SEO optimization
- ✅ Mobile responsiveness
- ✅ Accessibility

## Next Steps (Phase 2)

After Phase 1, you can add:
- About page
- Services detail page
- Demo/Use Cases page with interactive AI demos
- Blog/Resources section
- Case studies
- Contact form

## Support

Need help? Feel free to:
- Review the [Next.js documentation](https://nextjs.org/docs)
- Check [Tailwind CSS docs](https://tailwindcss.com/docs)
- Explore [Framer Motion docs](https://www.framer.com/motion/)

## License

MIT License - feel free to use this for your consultancy!

---

Built with ❤️ for AI consultants who want to make an impact.

