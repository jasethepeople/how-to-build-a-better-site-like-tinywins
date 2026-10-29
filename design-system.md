# Creative Studio Design System

## Dark Luxury Editorial Philosophy

The Neversus design approach combines **editorial sophistication** with **premium brand positioning**. This system creates high-end, memorable creative studio websites.

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary Background | Deep Charcoal | #0D0D0D | Page backgrounds, dark sections |
| Primary Text | Off-White/Cream | #F2EDE8 | Headlines, body text |
| Accent | Electric Coral | #FF4D1C | CTAs, highlights, brand emphasis |
| Secondary Text | Warm Gray | #9A9490 | Secondary text, muted labels |
| Border | Dark Gray | #2A2A2A | Subtle dividers, borders |
| Hover State | Coral with opacity | #FF4D1C/20% | Interactive states |

### Typography System

**Display Font: Playfair Display (Serif)**
- Use for: Main headlines, section titles, dramatic statements
- Weights: Regular (400), Bold (700), Black (900)
- Letter-spacing: -0.02em for tightness
- Line-height: 1.1-1.2 for impact

**Body Font: DM Sans (Geometric Sans-serif)**
- Use for: Body text, navigation, labels, descriptions
- Weights: Regular (400), Medium (500), Semibold (600)
- Letter-spacing: 0.15em for nav items, normal for body
- Line-height: 1.6 for readability

### Spacing System

```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

### Component Styling

**Buttons:**
- Border: 1px solid coral
- Padding: 0.75rem 1.5rem
- Font: DM Sans, semibold, uppercase, 0.75rem
- Hover: Coral background, dark text
- Transition: 300ms all

**Cards:**
- Border: 1px solid #2A2A2A
- Padding: 2rem
- Hover: Border color shifts to coral
- Transition: 200ms border-color

**Sections:**
- Padding: 5rem (80px) vertical, responsive
- Background: Alternating black/dark gray
- Dividers: SVG waves or subtle gradients

### Animation Principles

1. **Entrance Animations**: Fade + slide up (0.6s ease-out)
2. **Hover States**: Scale + color shift (0.3s ease)
3. **Scroll Animations**: Stagger children (0.1s delay between items)
4. **Transitions**: Use cubic-bezier(0.22, 1, 0.36, 1) for premium feel
5. **Micro-interactions**: Pulsing accents, smooth counters, carousel auto-play

### Layout Patterns

**Hero Section:**
- Full-bleed background image with overlay gradient
- Centered text with animated scroll indicator
- Dual CTA buttons (primary + secondary)

**Portfolio Grid:**
- 2-column on desktop, 1-column on mobile
- Image hover: Scale 1.05 + gradient overlay
- Category tags with coral accent
- Click to navigate to detail page

**Testimonials Carousel:**
- Auto-play 5s interval
- Manual navigation with prev/next buttons
- Dot indicators for current slide
- Fade transition between slides

**Metrics Dashboard:**
- 4-column grid (2x2 on mobile)
- Animated counters on scroll
- Large display numbers in coral
- Supporting labels in gray

### Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

Use Tailwind's `md:` and `lg:` prefixes for responsive adjustments.

### Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus rings: Visible on all interactive elements
- Color not sole indicator: Use icons + labels
- Keyboard navigation: All interactive elements reachable via Tab
- Alt text: Descriptive for all images
