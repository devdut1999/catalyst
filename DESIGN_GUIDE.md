# 🎨 Design System & Visual Guide

## Color Palette

### Primary Colors
```
Background:     #0a0a0f (Deep space black)
Foreground:     #ffffff (Pure white)
Primary:        #00e5ff (Electric cyan)
Primary Dark:   #00b8d4 (Deep cyan)
```

### Secondary Colors
```
Secondary:      #1a1a2e (Charcoal)
Secondary Light:#2a2a3e (Lighter charcoal)
```

### Accent Colors
```
Accent Cyan:    #00e5ff (Energy, innovation)
Accent Purple:  #a855f7 (AI, intelligence)
Accent Green:   #10b981 (Success, growth)
```

## Typography

### Font Families
- **Headlines**: Space Grotesk (Modern, geometric)
- **Body**: Inter (Clean, highly readable)

### Font Sizes
```
Hero Title:     text-5xl md:text-7xl (3rem / 4.5rem)
Section Title:  text-4xl md:text-5xl (2.25rem / 3rem)
Subtitle:       text-xl md:text-2xl (1.25rem / 1.5rem)
Body:           text-base (1rem)
Small:          text-sm (0.875rem)
```

## Animation Effects

### Hover Effects
- **Buttons**: Glow + shadow expansion
- **Cards**: Border color change + glow
- **Links**: Color transition to cyan

### Scroll Animations
- **Fade In**: Elements appear smoothly
- **Slide Up**: Content rises from below
- **Float**: Gentle up/down motion

### Background
- **Animated Gradient**: Rotating color fields
- **Particle Effects**: Floating glowing orbs

## Component Styles

### Buttons

**Primary Button (CTA):**
```
Background: Cyan (#00e5ff)
Text: Dark (#0a0a0f)
Hover: Glow effect
Border Radius: 8px
Padding: 16px 32px
```

**Secondary Button:**
```
Background: Transparent
Border: 2px solid #00e5ff
Text: Cyan
Hover: Fill with cyan
```

### Cards

```
Background: rgba(26, 26, 46, 0.5)
Border: 1px solid #374151
Border Radius: 12px
Backdrop Filter: Blur
Hover: Cyan glow shadow
```

### Navigation

```
Background: Transparent → Frosted glass on scroll
Height: 64px
Logo: Gradient square + text
Links: Gray → Cyan on hover
```

## Layout Structure

### Container
```
Max Width: 1280px (max-w-7xl)
Padding: 16px (sm) / 24px (md) / 32px (lg)
```

### Sections
```
Padding: 80px vertical (py-20)
Spacing: 64px between sections
```

### Grid
```
Services: 3 columns (md:grid-cols-3)
Steps: 3 columns with connecting line
Mobile: Always 1 column
```

## Visual Hierarchy

1. **Hero Section**
   - Largest text
   - Animated gradient text
   - Floating particles
   - Strong CTA button

2. **Content Sections**
   - Clear section titles
   - Icon + text cards
   - Subtle animations
   - Secondary CTAs

3. **Footer**
   - Smaller, subdued
   - Organized columns
   - Quick links
   - Contact info

## Responsive Breakpoints

```
Mobile:  < 768px  (sm)
Tablet:  768px+   (md)
Desktop: 1024px+  (lg)
Wide:    1280px+  (xl)
```

## Best Practices

### DO ✅
- Use the animated glow on primary CTAs
- Keep background dark for contrast
- Use cyan as the primary accent
- Add smooth transitions to all interactions
- Maintain consistent spacing
- Use backdrop blur on cards

### DON'T ❌
- Overuse animations (keep it subtle)
- Mix too many accent colors in one section
- Use bright backgrounds (hurts the "dark tech" vibe)
- Add text without proper contrast
- Ignore mobile responsiveness
- Overcrowd sections with content

## Icon Style

- **Type**: Line art or simple filled
- **Size**: 48px - 64px for section icons
- **Color**: Primary or gradient
- **Spacing**: Center aligned with content

Recommended icon sets:
- Lucide Icons
- Heroicons
- Phosphor Icons
- Feather Icons

## Image Guidelines

When adding images:
- **File format**: WebP (with PNG fallback)
- **Optimization**: Compress before upload
- **Style**: Abstract, 3D renders, data visualizations
- **Avoid**: Generic stock photos, robots shaking hands
- **Prefer**: Neural networks, particle systems, code visualizations

## Accessibility

- ✅ Maintain WCAG AA contrast ratios
- ✅ Use semantic HTML
- ✅ Add alt text to images
- ✅ Keyboard navigation support
- ✅ Focus indicators on interactive elements
- ✅ Reduced motion respect (prefers-reduced-motion)

---

**This design system ensures a consistent, professional, futuristic brand across your entire site.**

