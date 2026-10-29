# Deploying Neversus to GitHub Pages

This guide walks you through deploying your Neversus website to GitHub Pages in 5 minutes.

## Prerequisites

- A GitHub account (free)
- Git installed on your computer
- The Neversus project files

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repository: `neversus` (or any name you prefer)
3. Choose **Public** (required for free GitHub Pages)
4. Click **Create repository**
5. Copy the repository URL (you'll need it in Step 3)

### 2. Update vite.config.ts for GitHub Pages

If deploying to `https://yourusername.github.io/neversus/`, add this to your `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/neversus/',  // Replace 'neversus' with your repo name
  plugins: [react()],
  // ... rest of config
})
```

**If deploying to a custom domain or `yourusername.github.io`**, use:
```typescript
export default default defineConfig({
  base: '/',
  // ... rest of config
})
```

### 3. Initialize Git and Push to GitHub

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Neversus website"

# Add remote (replace with your repo URL from Step 1)
git remote add origin https://github.com/YOUR_USERNAME/neversus.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Build the Project

```bash
npm run build
```

This creates a `dist/public` folder with your static site.

### 5. Deploy to GitHub Pages

**Option A: Using GitHub Actions (Recommended - Automatic)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '22'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

Then push this file:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment"
git push
```

**Option B: Manual Deployment (One-time)**

1. Build locally: `npm run build`
2. Go to your GitHub repo → Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select branch: `main` and folder: `/root`
5. Push the `dist/public` folder to GitHub:

```bash
git add dist/
git commit -m "Add build files"
git push
```

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select branch: **main**
6. Select folder: **/root** (or `/docs` if you prefer)
7. Click **Save**

GitHub will show you your live URL in a few seconds!

### 7. Your Site is Live!

Your site will be available at:
- `https://yourusername.github.io/neversus/` (if repo name is `neversus`)
- `https://yourusername.github.io/` (if repo name is `yourusername.github.io`)
- `https://yourdomain.com` (if you set up a custom domain)

## Custom Domain Setup (Optional)

To use your own domain (e.g., `neversus.com`):

1. In your domain registrar, add a CNAME record pointing to `yourusername.github.io`
2. In GitHub repo Settings → Pages → Custom domain, enter `neversus.com`
3. GitHub will automatically create a CNAME file

## Troubleshooting

**Site shows 404?**
- Check that `base` in `vite.config.ts` matches your repo path
- Verify `dist/public` folder exists and has `index.html`
- Wait 1-2 minutes for GitHub Pages to rebuild

**Styles not loading?**
- Ensure `base` path in vite.config.ts is correct
- Clear browser cache (Ctrl+Shift+Delete)

**Need to update site?**
- Just push new commits to `main` branch
- GitHub Actions will automatically rebuild and deploy

## Questions?

For more help, see:
- [GitHub Pages Docs](https://pages.github.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
