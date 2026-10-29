---
name: creative-studio-builder
description: Build award-winning creative studio websites with premium design, advanced features, and GitHub Pages deployment. Use for creating portfolio sites, agency websites, and brand showcases with dark luxury editorial design, animated components, and client engagement tools.
---

# Creative Studio Website Builder

This skill provides a complete workflow for building high-end creative studio websites inspired by industry leaders like Tinywins. It includes design systems, reusable components, feature implementations, and deployment guides.

## Workflow Overview

The creative studio building process follows these phases:

1. **Design & Planning** — Define visual identity and feature set
2. **Project Initialization** — Set up React + Tailwind scaffold
3. **Component Development** — Build core features with animations
4. **Content Integration** — Add case studies, testimonials, blog
5. **Email & Analytics** — Configure contact forms and tracking
6. **Deployment** — Deploy to GitHub Pages with custom domain support

## Phase 1: Design & Planning

### Design Philosophy

Start by choosing a design approach. The recommended **Dark Luxury Editorial** style features:

- **Color Palette:** Deep charcoal backgrounds (#0D0D0D), off-white text (#F2EDE8), electric coral accents (#FF4D1C)
- **Typography:** Playfair Display (serif) for headlines, DM Sans (sans-serif) for body
- **Layout:** Asymmetric, editorial-inspired with full-bleed images
- **Animations:** Smooth scroll triggers, hover effects, animated counters

See `references/design-system.md` for complete design tokens and component styling.

### Feature Planning

Identify which features your site needs:

| Feature | Purpose | Complexity |
|---------|---------|-----------|
| Hero Section | Eye-catching entry point | Low |
| Portfolio Grid | Showcase projects with filtering | Medium |
| Case Study Pages | Detailed project breakdowns | Medium |
| Blog Section | Content marketing and SEO | Medium |
| Testimonials Carousel | Social proof and credibility | Low |
| Metrics Dashboard | Display impact/achievements | Low |
| Contact Form | Lead generation | Low |
| Newsletter Signup | Email list building | Low |
| Theme Toggle | Dark/light mode support | Low |

## Phase 2: Project Initialization

### Using the Setup Script

```bash
python /home/ubuntu/skills/creative-studio-builder/scripts/setup_creative_studio.py <project-name> --studio-name "Your Studio Name"
```

This creates:
- Project directory structure
- GitHub Actions deployment workflow
- Environment configuration template
- Setup checklist

### Manual Initialization

If not using the script, initialize a standard React + Tailwind project:

```bash
webdev_init_project project_name="your-studio"
```

Then configure:
1. Update `client/src/index.css` with design tokens from `design-system.md`
2. Add Google Fonts: Playfair Display and DM Sans to `client/index.html`
3. Create `.github/workflows/deploy.yml` for GitHub Pages deployment
4. Set up `.env.example` with email and analytics placeholders

## Phase 3: Component Development

### Core Components to Build

Implement these components in order of dependency:

**1. Navbar** (`client/src/components/Navbar.tsx`)
- Navigation links with smooth scroll
- Contact modal trigger
- Theme toggle (Sun/Moon icon)
- Mobile menu with hamburger

**2. Hero Section** (`client/src/components/HeroPremium.tsx`)
- Full-bleed background image
- Animated headline with accent color
- Dual CTA buttons
- Scroll indicator

**3. Portfolio Grid** (`client/src/components/WorkPortfolioEnhanced.tsx`)
- Category filtering buttons
- 2-column responsive grid
- Image hover effects
- Click to navigate to case study detail page

**4. Case Study Pages** (`client/src/pages/CaseStudy.tsx`)
- Dynamic routing with `useParams`
- Challenge/Solution sections
- Results highlight box
- Process timeline
- Client testimonial

**5. Blog Section** (`client/src/components/BlogEnhanced.tsx`)
- Search functionality
- Category filtering
- Article cards with metadata
- Read more CTAs

**6. Testimonials Carousel** (`client/src/components/TestimonialsCarousel.tsx`)
- Auto-play with 5s interval
- Manual navigation (prev/next)
- Dot indicators
- Fade transitions

**7. Metrics Dashboard** (`client/src/components/MetricsDashboard.tsx`)
- Animated counters (0 to final value)
- Scroll-triggered animations
- 4-column responsive grid
- Support for custom metrics

**8. Contact Form** (`client/src/components/ContactModal.tsx`)
- Modal dialog with form fields
- Form validation
- Formspree integration
- Toast notifications

**9. Newsletter Signup** (`client/src/components/Newsletter.tsx`)
- Email input with validation
- Subscribe button
- Success/error messages
- Email service integration

See `references/feature-implementation.md` for detailed implementation notes and `templates/component-templates.md` for reusable code snippets.

### Animation Guidelines

All components should follow these animation principles:

- **Entrance:** Fade + slide up (0.6s ease-out)
- **Hover:** Scale + color shift (0.3s ease)
- **Scroll:** Stagger children (0.1s delay between items)
- **Transitions:** Use `cubic-bezier(0.22, 1, 0.36, 1)` for premium feel
- **Micro-interactions:** Pulsing accents, smooth counters, carousel auto-play

Use Framer Motion for all animations:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

## Phase 4: Content Integration

### Case Studies

Create a data structure for case studies in `CaseStudy.tsx`:

```tsx
const caseStudies: Record<string, any> = {
  "project-id": {
    title: "Project Title",
    category: "Brand Strategy",
    challenge: "Client's main problem...",
    solution: "How we solved it...",
    results: ["Result 1", "Result 2", "Result 3"],
    process: [
      { phase: "Phase 1", description: "..." },
      { phase: "Phase 2", description: "..." },
    ],
    testimonial: "Client quote...",
    testimonialAuthor: "Client Name, Title",
  },
};
```

### Blog Posts

Store blog data in `BlogEnhanced.tsx`:

```tsx
const articles = [
  {
    id: 1,
    title: "Article Title",
    excerpt: "Brief description...",
    category: "Brand Strategy",
    date: "March 15, 2024",
    readTime: "5 min read",
    content: "Full article content...",
  },
];
```

### Testimonials

Add client testimonials in `Testimonials.tsx`:

```tsx
const testimonials = [
  {
    quote: "Client feedback...",
    author: "Client Name",
    title: "Position at Company",
    image: "emoji or image URL",
  },
];
```

## Phase 5: Email & Analytics Setup

### Email Integration

**Option 1: Formspree (Recommended)**

1. Visit [formspree.io](https://formspree.io)
2. Create new form and get Form ID
3. Update `ContactModal.tsx`:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
});
```

**Option 2: Mailchimp Newsletter**

1. Create audience in Mailchimp
2. Get API key from settings
3. Update `Newsletter.tsx` with API endpoint

### Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Update `client/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Track key events:

```tsx
window.gtag('event', 'form_submit', { form_name: 'contact' });
```

## Phase 6: Deployment to GitHub Pages

### Quick Start

1. Create GitHub repository
2. Push code: `git push -u origin main`
3. Enable Pages in repository Settings
4. Live at: `https://username.github.io/repository-name/`

### Configuration

Update `vite.config.ts` for subdirectory deployment:

```typescript
export default defineConfig({
  base: '/repository-name/', // Only if not deploying to root
});
```

### Custom Domain

1. Add CNAME file or update DNS records
2. Configure custom domain in GitHub Pages settings
3. Wait for DNS propagation (up to 24 hours)

See `references/deployment-guide.md` for complete deployment instructions.

## Key Resources

| Resource | Purpose |
|----------|---------|
| `references/design-system.md` | Color palette, typography, spacing, components |
| `references/feature-implementation.md` | Detailed implementation notes for each feature |
| `references/deployment-guide.md` | GitHub Pages, email, analytics setup |
| `templates/component-templates.md` | Copy-paste component code snippets |
| `scripts/setup_creative_studio.py` | Automated project initialization |

## Best Practices

**Design Consistency:** All components should use the same color palette and typography system. Update `client/src/index.css` once and reference via CSS variables.

**Image Optimization:** Use CDN URLs for all images (via `manus-upload-file --webdev`). Never store images in `client/public/`.

**Performance:** Build regularly and check bundle size. Target Lighthouse scores >90 for all metrics.

**Testing:** Test all forms, theme toggle, and animations on mobile devices before deployment.

**Content:** Keep case studies, testimonials, and blog posts updated. Fresh content improves SEO and visitor engagement.

## Common Customizations

**Change Accent Color:** Update `--color-coral` in `client/src/index.css`

**Change Fonts:** Update Google Fonts link in `client/index.html` and font-family in CSS

**Add New Portfolio Category:** Add to filter buttons in `WorkPortfolioEnhanced.tsx`

**Customize Metrics:** Update values in `MetricsDashboard.tsx`

**Modify Hero Image:** Pass different `backgroundImage` prop to `HeroPremium`

## Troubleshooting

**Forms not submitting:** Verify Formspree Form ID is correct and endpoint is reachable

**Analytics not tracking:** Check Measurement ID is correct and GA script loads before page interactions

**Theme toggle not working:** Ensure `useTheme` hook is available from `ThemeContext`

**Animations not smooth:** Check Framer Motion version and that `whileInView` has `viewport={{ once: true }}`

**Images not loading:** Verify CDN URLs are correct and accessible

## Next Steps After Launch

1. Monitor Google Analytics for traffic patterns
2. Collect form submissions and respond to inquiries
3. Update case studies and testimonials regularly
4. Add new blog posts monthly for SEO
5. Test on new devices and browsers
6. Gather user feedback and iterate
