# Feature Implementation Guide

## Core Features

### 1. Premium Hero Section
**File:** `client/src/components/HeroPremium.tsx`

**Key Elements:**
- Full-bleed background image with parallax effect
- Animated gradient overlay (dark to transparent)
- Large headline with coral accent word
- Animated scroll indicator (chevron down)
- Dual CTA buttons with border styling

**Implementation:**
```tsx
- Use Framer Motion for parallax (useScroll hook)
- Background image as inline style
- Animated text with stagger effect
- Pulsing scroll indicator
```

### 2. Portfolio with Filtering
**File:** `client/src/components/WorkPortfolioEnhanced.tsx`

**Key Elements:**
- Category filter buttons (ALL, BRAND STRATEGY, UX/UI DESIGN, etc.)
- 2-column grid layout
- Image hover scale effect
- Gradient overlay on hover
- Category tag + title on image

**Implementation:**
```tsx
- useState for active category
- Filter array based on selected category
- Smooth transitions with Framer Motion
- onClick navigates to /case-study/:id
```

### 3. Case Study Detail Pages
**File:** `client/src/pages/CaseStudy.tsx`

**Key Elements:**
- Hero section with case study image
- Challenge/Solution side-by-side
- Results highlight box with coral border
- Process timeline (3 phases)
- Client testimonial section
- CTA at bottom

**Implementation:**
```tsx
- useParams to get case study ID
- Data object with all case studies
- Scroll animations on sections
- Back button for navigation
```

### 4. Blog with Search
**File:** `client/src/components/BlogEnhanced.tsx`

**Key Elements:**
- Search input with real-time filtering
- Category filter buttons
- Article cards with metadata (date, read time, category)
- "Read Article" CTA buttons
- Responsive grid layout

**Implementation:**
```tsx
- useState for search query and selected category
- Filter articles by both search and category
- Highlight matching text in results
- Clear button to reset filters
```

### 5. Testimonials Carousel
**File:** `client/src/components/TestimonialsCarousel.tsx`

**Key Elements:**
- Auto-play carousel (5s interval)
- Manual navigation (prev/next buttons)
- Dot indicators
- Fade transition between slides
- Quote + author + title display

**Implementation:**
```tsx
- useState for current slide index
- useEffect for auto-play timer
- AnimatePresence for smooth transitions
- onClick handlers for manual navigation
```

### 6. Metrics Dashboard
**File:** `client/src/components/MetricsDashboard.tsx`

**Key Elements:**
- 4 key metrics (projects, satisfaction %, awards, years)
- Animated counters on scroll
- Large coral numbers
- Supporting gray labels
- Staggered animation

**Implementation:**
```tsx
- Custom AnimatedMetric component
- useEffect to animate counter from 0 to final value
- whileInView trigger for scroll animation
- Stagger delay for each metric
```

### 7. Newsletter Signup
**File:** `client/src/components/Newsletter.tsx`

**Key Elements:**
- Email input with validation
- Subscribe button
- Success/error messages
- Responsive layout
- Integration with email service

**Implementation:**
```tsx
- Form validation with regex
- Toast notifications (sonner)
- Email service integration (Formspree/Mailchimp)
- Loading state during submission
```

### 8. Contact Form Modal
**File:** `client/src/components/ContactModal.tsx`

**Key Elements:**
- Modal dialog with form
- Fields: name, email, company, message
- Form validation
- Submit button with loading state
- Close button

**Implementation:**
```tsx
- Dialog component from shadcn/ui
- Form validation with zod
- Formspree integration
- Toast notifications on success/error
```

### 9. Dark/Light Theme Toggle
**File:** `client/src/components/Navbar.tsx`

**Key Elements:**
- Sun/Moon icon button in navbar
- Smooth theme transition
- Persisted preference in localStorage
- All components respect theme

**Implementation:**
```tsx
- useTheme hook from ThemeContext
- Toggle function updates theme state
- CSS variables change based on theme
- Icon changes based on current theme
```

### 10. Animated Metrics
**File:** `client/src/components/MetricsDashboard.tsx`

**Key Elements:**
- Counter animation from 0 to target
- Triggered on scroll into view
- Formatted numbers with commas
- Suffix support (%, +, etc.)

**Implementation:**
```tsx
- useEffect with setInterval for counter
- whileInView trigger
- Increment calculation for smooth animation
- toLocaleString for number formatting
```

## Integration Checklist

- [ ] Import all components in Home.tsx
- [ ] Add case study route in App.tsx
- [ ] Configure Formspree form ID in ContactModal
- [ ] Add Google Analytics measurement ID in index.html
- [ ] Set up email service for newsletter
- [ ] Test all animations on mobile
- [ ] Verify theme toggle persists across pages
- [ ] Check form validation and error messages
