# Deployment Guide

## GitHub Pages Deployment

### Prerequisites

- GitHub account with repository created
- Git installed locally
- Project built and ready to deploy

### Step 1: Configure Vite for GitHub Pages

Update `vite.config.ts` to include the base path if deploying to a subdirectory:

```typescript
export default defineConfig({
  base: '/repository-name/', // Only if not deploying to root
  // ... rest of config
});
```

For root domain deployment (e.g., `username.github.io`), use `base: '/'`.

### Step 2: Push Code to GitHub

```bash
cd /home/ubuntu/apexwins
git init
git add .
git commit -m "Initial commit: Creative studio website"
git remote add origin https://github.com/YOUR_USERNAME/repository-name.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Navigate to your repository on GitHub
2. Go to Settings → Pages
3. Under "Build and deployment", select "Deploy from a branch"
4. Choose branch: `main`
5. Choose folder: `/ (root)`
6. Click Save

GitHub Actions will automatically build and deploy your site within 2 minutes.

### Step 4: Verify Deployment

Your site will be live at: `https://username.github.io/repository-name/`

Check the Actions tab to see build status and logs.

## Custom Domain Setup

### Using a Custom Domain

1. In GitHub repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `yourstudio.com`)
3. GitHub will create a CNAME file automatically

### DNS Configuration

Update your domain registrar's DNS settings:

**For apex domain (yourstudio.com):**
Add A records pointing to GitHub's IP addresses:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**For subdomain (www.yourstudio.com):**
Add CNAME record: `username.github.io`

**For subdomain (studio.yourstudio.com):**
Add CNAME record: `username.github.io`

DNS changes can take 24 hours to propagate.

## Email Integration Setup

### Formspree Configuration

1. Visit [formspree.io](https://formspree.io)
2. Sign up and create new form
3. Copy your Form ID (format: `@abcdef123`)
4. Update `ContactModal.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('name', formData.get('name'));
  formData.append('email', formData.get('email'));
  formData.append('company', formData.get('company'));
  formData.append('message', formData.get('message'));

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
  });
  
  if (response.ok) {
    toast.success('Message sent! We\'ll be in touch soon.');
    resetForm();
  } else {
    toast.error('Failed to send message. Please try again.');
  }
};
```

### Newsletter Email Service

**Option 1: Formspree**
Same setup as contact form, but separate form ID.

**Option 2: Mailchimp**
1. Create audience in Mailchimp
2. Get API key from account settings
3. Use Mailchimp's form embed or API integration
4. Update Newsletter.tsx with API endpoint

**Option 3: ConvertKit**
1. Create form in ConvertKit
2. Get form ID from form settings
3. Embed form using their embed code

## Google Analytics Setup

### Add Measurement ID

1. Create Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
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

### Track Key Events

Add event tracking in components:

```tsx
const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

// Track form submission
const handleSubmit = async () => {
  trackEvent('form_submit', { form_name: 'contact' });
  // ... rest of submission logic
};

// Track portfolio filter
const handleFilter = (category: string) => {
  trackEvent('portfolio_filter', { category });
  setActiveCategory(category);
};
```

### Key Metrics to Track

- Page views (automatic)
- Form submissions (contact, newsletter)
- Portfolio category filters
- Blog article views
- CTA button clicks
- Case study page visits

## Performance Optimization

### Image Optimization

Use CDN URLs for all images (via `manus-upload-file --webdev`):

```tsx
const heroImage = "https://cdn.example.com/hero-bg.webp";
```

Never store images in `client/public/` or `client/src/assets/`.

### Build Optimization

```bash
npm run build
```

Check build output for bundle size:
```bash
npm run build -- --analyze
```

### Lighthouse Scores

Target metrics:
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >90

## Maintenance

### Updating Content

1. Edit components or content files
2. Commit changes: `git add . && git commit -m "Update content"`
3. Push to main: `git push`
4. GitHub Actions automatically redeploys

### Monitoring

- Check Google Analytics for traffic patterns
- Monitor form submissions and emails
- Review Lighthouse scores monthly
- Test on different devices and browsers

### Backup Strategy

Keep local copy of repository and regularly push to GitHub. GitHub provides automatic backups of all commits.
